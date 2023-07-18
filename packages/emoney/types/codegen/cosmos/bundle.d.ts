import * as _23 from "./auth/v1beta1/auth";
import * as _24 from "./auth/v1beta1/genesis";
import * as _25 from "./auth/v1beta1/query";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/kv/v1beta1/kv";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/snapshot";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./genutil/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./mint/v1beta1/genesis";
import * as _60 from "./mint/v1beta1/mint";
import * as _61 from "./mint/v1beta1/query";
import * as _62 from "./params/v1beta1/params";
import * as _63 from "./params/v1beta1/query";
import * as _64 from "./slashing/v1beta1/genesis";
import * as _65 from "./slashing/v1beta1/query";
import * as _66 from "./slashing/v1beta1/slashing";
import * as _67 from "./slashing/v1beta1/tx";
import * as _68 from "./staking/v1beta1/genesis";
import * as _69 from "./staking/v1beta1/query";
import * as _70 from "./staking/v1beta1/staking";
import * as _71 from "./staking/v1beta1/tx";
import * as _72 from "./tx/signing/v1beta1/signing";
import * as _73 from "./tx/v1beta1/service";
import * as _74 from "./tx/v1beta1/tx";
import * as _75 from "./upgrade/v1beta1/query";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _161 from "./auth/v1beta1/query.lcd";
import * as _162 from "./bank/v1beta1/query.lcd";
import * as _163 from "./base/tendermint/v1beta1/query.lcd";
import * as _164 from "./distribution/v1beta1/query.lcd";
import * as _165 from "./evidence/v1beta1/query.lcd";
import * as _166 from "./gov/v1beta1/query.lcd";
import * as _167 from "./mint/v1beta1/query.lcd";
import * as _168 from "./params/v1beta1/query.lcd";
import * as _169 from "./slashing/v1beta1/query.lcd";
import * as _170 from "./staking/v1beta1/query.lcd";
import * as _171 from "./tx/v1beta1/service.lcd";
import * as _172 from "./upgrade/v1beta1/query.lcd";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./bank/v1beta1/query.rpc.Query";
import * as _175 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _176 from "./distribution/v1beta1/query.rpc.Query";
import * as _177 from "./evidence/v1beta1/query.rpc.Query";
import * as _178 from "./gov/v1beta1/query.rpc.Query";
import * as _179 from "./mint/v1beta1/query.rpc.Query";
import * as _180 from "./params/v1beta1/query.rpc.Query";
import * as _181 from "./slashing/v1beta1/query.rpc.Query";
import * as _182 from "./staking/v1beta1/query.rpc.Query";
import * as _183 from "./tx/v1beta1/service.rpc.Service";
import * as _184 from "./upgrade/v1beta1/query.rpc.Query";
import * as _185 from "./bank/v1beta1/tx.rpc.msg";
import * as _186 from "./crisis/v1beta1/tx.rpc.msg";
import * as _187 from "./distribution/v1beta1/tx.rpc.msg";
import * as _188 from "./evidence/v1beta1/tx.rpc.msg";
import * as _189 from "./gov/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _25.QueryAccountRequest): Promise<_25.QueryAccountResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            QueryAccountRequest: {
                encode(message: _25.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryAccountRequest;
                fromPartial(object: Partial<_25.QueryAccountRequest>): _25.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _25.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryAccountResponse;
                fromPartial(object: Partial<_25.QueryAccountResponse>): _25.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _25.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.QueryParamsRequest;
                fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _25.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryParamsResponse;
                fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            BaseAccount: {
                encode(message: _23.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.BaseAccount;
                fromPartial(object: Partial<_23.BaseAccount>): _23.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _23.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.ModuleAccount;
                fromPartial(object: Partial<_23.ModuleAccount>): _23.ModuleAccount;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _29.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _29.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _29.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _29.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _29.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.MsgSend;
                fromPartial(object: Partial<_29.MsgSend>): _29.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _29.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.MsgSendResponse;
                fromPartial(_: Partial<_29.MsgSendResponse>): _29.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _29.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.MsgMultiSend;
                fromPartial(object: Partial<_29.MsgMultiSend>): _29.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _29.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.MsgMultiSendResponse;
                fromPartial(_: Partial<_29.MsgMultiSendResponse>): _29.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _28.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryBalanceRequest;
                fromPartial(object: Partial<_28.QueryBalanceRequest>): _28.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _28.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryBalanceResponse;
                fromPartial(object: Partial<_28.QueryBalanceResponse>): _28.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _28.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllBalancesRequest;
                fromPartial(object: Partial<_28.QueryAllBalancesRequest>): _28.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _28.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllBalancesResponse;
                fromPartial(object: Partial<_28.QueryAllBalancesResponse>): _28.QueryAllBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _28.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_28.QueryTotalSupplyRequest>): _28.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _28.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_28.QueryTotalSupplyResponse>): _28.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _28.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QuerySupplyOfRequest;
                fromPartial(object: Partial<_28.QuerySupplyOfRequest>): _28.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _28.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QuerySupplyOfResponse;
                fromPartial(object: Partial<_28.QuerySupplyOfResponse>): _28.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _28.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomsMetadataRequest>): _28.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _28.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomsMetadataResponse>): _28.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _28.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomMetadataRequest>): _28.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _28.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomMetadataResponse>): _28.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            Balance: {
                encode(message: _27.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Balance;
                fromPartial(object: Partial<_27.Balance>): _27.Balance;
            };
            Params: {
                encode(message: _26.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
            };
            SendEnabled: {
                encode(message: _26.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.SendEnabled;
                fromPartial(object: Partial<_26.SendEnabled>): _26.SendEnabled;
            };
            Input: {
                encode(message: _26.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Input;
                fromPartial(object: Partial<_26.Input>): _26.Input;
            };
            Output: {
                encode(message: _26.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Output;
                fromPartial(object: Partial<_26.Output>): _26.Output;
            };
            Supply: {
                encode(message: _26.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Supply;
                fromPartial(object: Partial<_26.Supply>): _26.Supply;
            };
            DenomUnit: {
                encode(message: _26.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.DenomUnit;
                fromPartial(object: Partial<_26.DenomUnit>): _26.DenomUnit;
            };
            Metadata: {
                encode(message: _26.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Metadata;
                fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _30.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.TxResponse;
                    fromPartial(object: Partial<_30.TxResponse>): _30.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _30.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.ABCIMessageLog;
                    fromPartial(object: Partial<_30.ABCIMessageLog>): _30.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _30.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.StringEvent;
                    fromPartial(object: Partial<_30.StringEvent>): _30.StringEvent;
                };
                Attribute: {
                    encode(message: _30.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.Attribute;
                    fromPartial(object: Partial<_30.Attribute>): _30.Attribute;
                };
                GasInfo: {
                    encode(message: _30.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.GasInfo;
                    fromPartial(object: Partial<_30.GasInfo>): _30.GasInfo;
                };
                Result: {
                    encode(message: _30.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.Result;
                    fromPartial(object: Partial<_30.Result>): _30.Result;
                };
                SimulationResponse: {
                    encode(message: _30.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SimulationResponse;
                    fromPartial(object: Partial<_30.SimulationResponse>): _30.SimulationResponse;
                };
                MsgData: {
                    encode(message: _30.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.MsgData;
                    fromPartial(object: Partial<_30.MsgData>): _30.MsgData;
                };
                TxMsgData: {
                    encode(message: _30.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.TxMsgData;
                    fromPartial(object: Partial<_30.TxMsgData>): _30.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _30.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SearchTxsResult;
                    fromPartial(object: Partial<_30.SearchTxsResult>): _30.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _31.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.Pairs;
                    fromPartial(object: Partial<_31.Pairs>): _31.Pairs;
                };
                Pair: {
                    encode(message: _31.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.Pair;
                    fromPartial(object: Partial<_31.Pair>): _31.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _32.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.PageRequest;
                    fromPartial(object: Partial<_32.PageRequest>): _32.PageRequest;
                };
                PageResponse: {
                    encode(message: _32.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.PageResponse;
                    fromPartial(object: Partial<_32.PageResponse>): _32.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _33.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_33.ListAllInterfacesRequest>): _33.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _33.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_33.ListAllInterfacesResponse>): _33.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _33.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ListImplementationsRequest;
                    fromPartial(object: Partial<_33.ListImplementationsRequest>): _33.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _33.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ListImplementationsResponse;
                    fromPartial(object: Partial<_33.ListImplementationsResponse>): _33.ListImplementationsResponse;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _34.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Snapshot;
                    fromPartial(object: Partial<_34.Snapshot>): _34.Snapshot;
                };
                Metadata: {
                    encode(message: _34.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Metadata;
                    fromPartial(object: Partial<_34.Metadata>): _34.Metadata;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _36.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.SnapshotItem;
                    fromPartial(object: Partial<_36.SnapshotItem>): _36.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _36.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.SnapshotStoreItem;
                    fromPartial(object: Partial<_36.SnapshotStoreItem>): _36.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _36.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.SnapshotIAVLItem;
                    fromPartial(object: Partial<_36.SnapshotIAVLItem>): _36.SnapshotIAVLItem;
                };
                CommitInfo: {
                    encode(message: _35.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.CommitInfo;
                    fromPartial(object: Partial<_35.CommitInfo>): _35.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _35.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.StoreInfo;
                    fromPartial(object: Partial<_35.StoreInfo>): _35.StoreInfo;
                };
                CommitID: {
                    encode(message: _35.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.CommitID;
                    fromPartial(object: Partial<_35.CommitID>): _35.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _175.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _163.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _37.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightRequest>): _37.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _37.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightResponse>): _37.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _37.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetRequest>): _37.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _37.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetResponse>): _37.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.Validator;
                    fromPartial(object: Partial<_37.Validator>): _37.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _37.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_37.GetBlockByHeightRequest>): _37.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _37.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_37.GetBlockByHeightResponse>): _37.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _37.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _37.GetLatestBlockRequest;
                    fromPartial(_: Partial<_37.GetLatestBlockRequest>): _37.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _37.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetLatestBlockResponse;
                    fromPartial(object: Partial<_37.GetLatestBlockResponse>): _37.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _37.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _37.GetSyncingRequest;
                    fromPartial(_: Partial<_37.GetSyncingRequest>): _37.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _37.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetSyncingResponse;
                    fromPartial(object: Partial<_37.GetSyncingResponse>): _37.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _37.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _37.GetNodeInfoRequest;
                    fromPartial(_: Partial<_37.GetNodeInfoRequest>): _37.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _37.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GetNodeInfoResponse;
                    fromPartial(object: Partial<_37.GetNodeInfoResponse>): _37.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _37.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.VersionInfo;
                    fromPartial(object: Partial<_37.VersionInfo>): _37.VersionInfo;
                };
                Module: {
                    encode(message: _37.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.Module;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _38.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Coin;
                fromPartial(object: Partial<_38.Coin>): _38.Coin;
            };
            DecCoin: {
                encode(message: _38.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.DecCoin;
                fromPartial(object: Partial<_38.DecCoin>): _38.DecCoin;
            };
            IntProto: {
                encode(message: _38.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.IntProto;
                fromPartial(object: Partial<_38.IntProto>): _38.IntProto;
            };
            DecProto: {
                encode(message: _38.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.DecProto;
                fromPartial(object: Partial<_38.DecProto>): _38.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _40.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisOwners;
                fromPartial(object: Partial<_40.GenesisOwners>): _40.GenesisOwners;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Capability: {
                encode(message: _39.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Capability;
                fromPartial(object: Partial<_39.Capability>): _39.Capability;
            };
            Owner: {
                encode(message: _39.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Owner;
                fromPartial(object: Partial<_39.Owner>): _39.Owner;
            };
            CapabilityOwners: {
                encode(message: _39.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.CapabilityOwners;
                fromPartial(object: Partial<_39.CapabilityOwners>): _39.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _42.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _42.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _42.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgVerifyInvariant;
                fromPartial(object: Partial<_42.MsgVerifyInvariant>): _42.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _42.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_42.MsgVerifyInvariantResponse>): _42.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.GenesisState;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.PubKey;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
            };
            PrivKey: {
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.PrivKey;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _44.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.LegacyAminoPubKey;
                fromPartial(object: Partial<_44.LegacyAminoPubKey>): _44.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _45.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.PubKey;
                fromPartial(object: Partial<_45.PubKey>): _45.PubKey;
            };
            PrivKey: {
                encode(message: _45.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.PrivKey;
                fromPartial(object: Partial<_45.PrivKey>): _45.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _49.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _49.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _49.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _49.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _49.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _49.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _49.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _49.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _49.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_49.MsgSetWithdrawAddress>): _49.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _49.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_49.MsgSetWithdrawAddressResponse>): _49.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _49.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorReward>): _49.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_49.MsgWithdrawDelegatorRewardResponse>): _49.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommission>): _49.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_49.MsgWithdrawValidatorCommissionResponse>): _49.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _49.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgFundCommunityPool;
                fromPartial(object: Partial<_49.MsgFundCommunityPool>): _49.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _49.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_49.MsgFundCommunityPoolResponse>): _49.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _48.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsRequest>): _48.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _48.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsResponse>): _48.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _48.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_48.QueryValidatorCommissionRequest>): _48.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _48.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_48.QueryValidatorCommissionResponse>): _48.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _48.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_48.QueryValidatorSlashesRequest>): _48.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _48.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_48.QueryValidatorSlashesResponse>): _48.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _48.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationRewardsRequest>): _48.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _48.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationRewardsResponse>): _48.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _48.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsRequest>): _48.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _48.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsResponse>): _48.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _48.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsRequest>): _48.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _48.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsResponse>): _48.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _48.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressRequest>): _48.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _48.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressResponse>): _48.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _48.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_48.QueryCommunityPoolRequest>): _48.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _48.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_48.QueryCommunityPoolResponse>): _48.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _47.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_47.DelegatorWithdrawInfo>): _47.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _47.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewardsRecord>): _47.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _47.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommissionRecord>): _47.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _47.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewardsRecord>): _47.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _47.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorCurrentRewardsRecord>): _47.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _47.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_47.DelegatorStartingInfoRecord>): _47.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _47.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_47.ValidatorSlashEventRecord>): _47.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _46.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_46.ValidatorHistoricalRewards>): _46.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _46.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorCurrentRewards;
                fromPartial(object: Partial<_46.ValidatorCurrentRewards>): _46.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _46.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_46.ValidatorAccumulatedCommission>): _46.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _46.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_46.ValidatorOutstandingRewards>): _46.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _46.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorSlashEvent;
                fromPartial(object: Partial<_46.ValidatorSlashEvent>): _46.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _46.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ValidatorSlashEvents;
                fromPartial(object: Partial<_46.ValidatorSlashEvents>): _46.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _46.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.FeePool;
                fromPartial(object: Partial<_46.FeePool>): _46.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _46.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposal>): _46.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _46.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.DelegatorStartingInfo;
                fromPartial(object: Partial<_46.DelegatorStartingInfo>): _46.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _46.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.DelegationDelegatorReward;
                fromPartial(object: Partial<_46.DelegationDelegatorReward>): _46.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _46.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposalWithDeposit>): _46.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _53.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _53.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _53.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.MsgSubmitEvidence;
                fromPartial(object: Partial<_53.MsgSubmitEvidence>): _53.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _53.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_53.MsgSubmitEvidenceResponse>): _53.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _52.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryEvidenceRequest;
                fromPartial(object: Partial<_52.QueryEvidenceRequest>): _52.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _52.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryEvidenceResponse;
                fromPartial(object: Partial<_52.QueryEvidenceResponse>): _52.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _52.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_52.QueryAllEvidenceRequest>): _52.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _52.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_52.QueryAllEvidenceResponse>): _52.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
            Equivocation: {
                encode(message: _50.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.Equivocation;
                fromPartial(object: Partial<_50.Equivocation>): _50.Equivocation;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _58.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _58.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _58.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _58.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgSubmitProposal;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgVote;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgVoteResponse;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
            };
            MsgDeposit: {
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgDeposit;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgDepositResponse;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryProposalRequest;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryProposalResponse;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryProposalsRequest;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryProposalsResponse;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryVoteRequest;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryVoteResponse;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryVotesRequest;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryVotesResponse;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryParamsRequest;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositRequest;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositResponse;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositsRequest;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositsResponse;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryTallyResultRequest;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryTallyResultResponse;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOption;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatus;
            TextProposal: {
                encode(message: _56.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.TextProposal;
                fromPartial(object: Partial<_56.TextProposal>): _56.TextProposal;
            };
            Deposit: {
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Deposit;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
            };
            Proposal: {
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Proposal;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
            };
            TallyResult: {
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.TallyResult;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
            };
            Vote: {
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Vote;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
            };
            DepositParams: {
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.DepositParams;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
            };
            VotingParams: {
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.VotingParams;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
            };
            TallyParams: {
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.TallyParams;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _61.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.QueryInflationRequest;
                fromPartial(_: Partial<_61.QueryInflationRequest>): _61.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _61.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryInflationResponse;
                fromPartial(object: Partial<_61.QueryInflationResponse>): _61.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _61.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_61.QueryAnnualProvisionsRequest>): _61.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _61.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_61.QueryAnnualProvisionsResponse>): _61.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _60.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Minter;
                fromPartial(object: Partial<_60.Minter>): _60.Minter;
            };
            Params: {
                encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Params;
                fromPartial(object: Partial<_60.Params>): _60.Params;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryParamsRequest;
                fromPartial(object: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryParamsResponse;
                fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _62.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ParameterChangeProposal;
                fromPartial(object: Partial<_62.ParameterChangeProposal>): _62.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _62.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ParamChange;
                fromPartial(object: Partial<_62.ParamChange>): _62.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _67.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _67.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _67.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgUnjail;
                fromPartial(object: Partial<_67.MsgUnjail>): _67.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _67.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgUnjailResponse;
                fromPartial(_: Partial<_67.MsgUnjailResponse>): _67.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _66.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorSigningInfo;
                fromPartial(object: Partial<_66.ValidatorSigningInfo>): _66.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.Params;
                fromPartial(object: Partial<_66.Params>): _66.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _65.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QuerySigningInfoRequest;
                fromPartial(object: Partial<_65.QuerySigningInfoRequest>): _65.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _65.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QuerySigningInfoResponse;
                fromPartial(object: Partial<_65.QuerySigningInfoResponse>): _65.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _65.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QuerySigningInfosRequest;
                fromPartial(object: Partial<_65.QuerySigningInfosRequest>): _65.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _65.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QuerySigningInfosResponse;
                fromPartial(object: Partial<_65.QuerySigningInfosResponse>): _65.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
            SigningInfo: {
                encode(message: _64.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.SigningInfo;
                fromPartial(object: Partial<_64.SigningInfo>): _64.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _64.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorMissedBlocks;
                fromPartial(object: Partial<_64.ValidatorMissedBlocks>): _64.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _64.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MissedBlock;
                fromPartial(object: Partial<_64.MissedBlock>): _64.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _69.QueryValidatorsRequest): Promise<_69.QueryValidatorsResponse>;
                validator(request: _69.QueryValidatorRequest): Promise<_69.QueryValidatorResponse>;
                validatorDelegations(request: _69.QueryValidatorDelegationsRequest): Promise<_69.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _69.QueryValidatorUnbondingDelegationsRequest): Promise<_69.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _69.QueryDelegationRequest): Promise<_69.QueryDelegationResponse>;
                unbondingDelegation(request: _69.QueryUnbondingDelegationRequest): Promise<_69.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _69.QueryDelegatorDelegationsRequest): Promise<_69.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _69.QueryDelegatorUnbondingDelegationsRequest): Promise<_69.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _69.QueryRedelegationsRequest): Promise<_69.QueryRedelegationsResponse>;
                delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _69.QueryDelegatorValidatorRequest): Promise<_69.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _69.QueryHistoricalInfoRequest): Promise<_69.QueryHistoricalInfoResponse>;
                pool(request?: _69.QueryPoolRequest): Promise<_69.QueryPoolResponse>;
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _71.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _71.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _71.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _71.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _71.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _71.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _71.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _71.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _71.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _71.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _71.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgCreateValidator;
                fromPartial(object: Partial<_71.MsgCreateValidator>): _71.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _71.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_71.MsgCreateValidatorResponse>): _71.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _71.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgEditValidator;
                fromPartial(object: Partial<_71.MsgEditValidator>): _71.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _71.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.MsgEditValidatorResponse;
                fromPartial(_: Partial<_71.MsgEditValidatorResponse>): _71.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _71.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgDelegate;
                fromPartial(object: Partial<_71.MsgDelegate>): _71.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _71.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.MsgDelegateResponse;
                fromPartial(_: Partial<_71.MsgDelegateResponse>): _71.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _71.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgBeginRedelegate;
                fromPartial(object: Partial<_71.MsgBeginRedelegate>): _71.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _71.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_71.MsgBeginRedelegateResponse>): _71.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _71.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgUndelegate;
                fromPartial(object: Partial<_71.MsgUndelegate>): _71.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _71.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgUndelegateResponse;
                fromPartial(object: Partial<_71.MsgUndelegateResponse>): _71.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _70.BondStatus;
            bondStatusToJSON(object: _70.BondStatus): string;
            BondStatus: typeof _70.BondStatus;
            BondStatusSDKType: typeof _70.BondStatus;
            HistoricalInfo: {
                encode(message: _70.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.HistoricalInfo;
                fromPartial(object: Partial<_70.HistoricalInfo>): _70.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _70.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.CommissionRates;
                fromPartial(object: Partial<_70.CommissionRates>): _70.CommissionRates;
            };
            Commission: {
                encode(message: _70.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Commission;
                fromPartial(object: Partial<_70.Commission>): _70.Commission;
            };
            Description: {
                encode(message: _70.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Description;
                fromPartial(object: Partial<_70.Description>): _70.Description;
            };
            Validator: {
                encode(message: _70.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Validator;
                fromPartial(object: Partial<_70.Validator>): _70.Validator;
            };
            ValAddresses: {
                encode(message: _70.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.ValAddresses;
                fromPartial(object: Partial<_70.ValAddresses>): _70.ValAddresses;
            };
            DVPair: {
                encode(message: _70.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DVPair;
                fromPartial(object: Partial<_70.DVPair>): _70.DVPair;
            };
            DVPairs: {
                encode(message: _70.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DVPairs;
                fromPartial(object: Partial<_70.DVPairs>): _70.DVPairs;
            };
            DVVTriplet: {
                encode(message: _70.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DVVTriplet;
                fromPartial(object: Partial<_70.DVVTriplet>): _70.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _70.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DVVTriplets;
                fromPartial(object: Partial<_70.DVVTriplets>): _70.DVVTriplets;
            };
            Delegation: {
                encode(message: _70.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Delegation;
                fromPartial(object: Partial<_70.Delegation>): _70.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _70.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.UnbondingDelegation;
                fromPartial(object: Partial<_70.UnbondingDelegation>): _70.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _70.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.UnbondingDelegationEntry;
                fromPartial(object: Partial<_70.UnbondingDelegationEntry>): _70.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _70.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.RedelegationEntry;
                fromPartial(object: Partial<_70.RedelegationEntry>): _70.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _70.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Redelegation;
                fromPartial(object: Partial<_70.Redelegation>): _70.Redelegation;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
            };
            DelegationResponse: {
                encode(message: _70.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DelegationResponse;
                fromPartial(object: Partial<_70.DelegationResponse>): _70.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _70.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.RedelegationEntryResponse;
                fromPartial(object: Partial<_70.RedelegationEntryResponse>): _70.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _70.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.RedelegationResponse;
                fromPartial(object: Partial<_70.RedelegationResponse>): _70.RedelegationResponse;
            };
            Pool: {
                encode(message: _70.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Pool;
                fromPartial(object: Partial<_70.Pool>): _70.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _69.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorsRequest;
                fromPartial(object: Partial<_69.QueryValidatorsRequest>): _69.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _69.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorsResponse;
                fromPartial(object: Partial<_69.QueryValidatorsResponse>): _69.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _69.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorRequest;
                fromPartial(object: Partial<_69.QueryValidatorRequest>): _69.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _69.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorResponse;
                fromPartial(object: Partial<_69.QueryValidatorResponse>): _69.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _69.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_69.QueryValidatorDelegationsRequest>): _69.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _69.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_69.QueryValidatorDelegationsResponse>): _69.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _69.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_69.QueryValidatorUnbondingDelegationsRequest>): _69.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _69.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_69.QueryValidatorUnbondingDelegationsResponse>): _69.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _69.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegationRequest;
                fromPartial(object: Partial<_69.QueryDelegationRequest>): _69.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _69.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegationResponse;
                fromPartial(object: Partial<_69.QueryDelegationResponse>): _69.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _69.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_69.QueryUnbondingDelegationRequest>): _69.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _69.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_69.QueryUnbondingDelegationResponse>): _69.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _69.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorDelegationsRequest>): _69.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _69.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorDelegationsResponse>): _69.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _69.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorUnbondingDelegationsRequest>): _69.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _69.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorUnbondingDelegationsResponse>): _69.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _69.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryRedelegationsRequest;
                fromPartial(object: Partial<_69.QueryRedelegationsRequest>): _69.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _69.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryRedelegationsResponse;
                fromPartial(object: Partial<_69.QueryRedelegationsResponse>): _69.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _69.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsRequest>): _69.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _69.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsResponse>): _69.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _69.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorRequest>): _69.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _69.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorResponse>): _69.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _69.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_69.QueryHistoricalInfoRequest>): _69.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _69.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_69.QueryHistoricalInfoResponse>): _69.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _69.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.QueryPoolRequest;
                fromPartial(_: Partial<_69.QueryPoolRequest>): _69.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _69.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryPoolResponse;
                fromPartial(object: Partial<_69.QueryPoolResponse>): _69.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.QueryParamsRequest;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryParamsResponse;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _68.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.LastValidatorPower;
                fromPartial(object: Partial<_68.LastValidatorPower>): _68.LastValidatorPower;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _72.SignMode;
                signModeToJSON(object: _72.SignMode): string;
                SignMode: typeof _72.SignMode;
                SignModeSDKType: typeof _72.SignMode;
                SignatureDescriptors: {
                    encode(message: _72.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.SignatureDescriptors;
                    fromPartial(object: Partial<_72.SignatureDescriptors>): _72.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _72.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.SignatureDescriptor;
                    fromPartial(object: Partial<_72.SignatureDescriptor>): _72.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _72.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data>): _72.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _72.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data_Single>): _72.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _72.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data_Multi>): _72.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _183.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            Tx: {
                encode(message: _74.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Tx;
                fromPartial(object: Partial<_74.Tx>): _74.Tx;
            };
            TxRaw: {
                encode(message: _74.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.TxRaw;
                fromPartial(object: Partial<_74.TxRaw>): _74.TxRaw;
            };
            SignDoc: {
                encode(message: _74.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.SignDoc;
                fromPartial(object: Partial<_74.SignDoc>): _74.SignDoc;
            };
            TxBody: {
                encode(message: _74.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.TxBody;
                fromPartial(object: Partial<_74.TxBody>): _74.TxBody;
            };
            AuthInfo: {
                encode(message: _74.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.AuthInfo;
                fromPartial(object: Partial<_74.AuthInfo>): _74.AuthInfo;
            };
            SignerInfo: {
                encode(message: _74.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.SignerInfo;
                fromPartial(object: Partial<_74.SignerInfo>): _74.SignerInfo;
            };
            ModeInfo: {
                encode(message: _74.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ModeInfo;
                fromPartial(object: Partial<_74.ModeInfo>): _74.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _74.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ModeInfo_Single;
                fromPartial(object: Partial<_74.ModeInfo_Single>): _74.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _74.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ModeInfo_Multi;
                fromPartial(object: Partial<_74.ModeInfo_Multi>): _74.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _74.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Fee;
                fromPartial(object: Partial<_74.Fee>): _74.Fee;
            };
            orderByFromJSON(object: any): _73.OrderBy;
            orderByToJSON(object: _73.OrderBy): string;
            broadcastModeFromJSON(object: any): _73.BroadcastMode;
            broadcastModeToJSON(object: _73.BroadcastMode): string;
            OrderBy: typeof _73.OrderBy;
            OrderBySDKType: typeof _73.OrderBy;
            BroadcastMode: typeof _73.BroadcastMode;
            BroadcastModeSDKType: typeof _73.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _73.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetTxsEventRequest;
                fromPartial(object: Partial<_73.GetTxsEventRequest>): _73.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _73.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetTxsEventResponse;
                fromPartial(object: Partial<_73.GetTxsEventResponse>): _73.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _73.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.BroadcastTxRequest;
                fromPartial(object: Partial<_73.BroadcastTxRequest>): _73.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _73.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.BroadcastTxResponse;
                fromPartial(object: Partial<_73.BroadcastTxResponse>): _73.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _73.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.SimulateRequest;
                fromPartial(object: Partial<_73.SimulateRequest>): _73.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _73.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.SimulateResponse;
                fromPartial(object: Partial<_73.SimulateResponse>): _73.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _73.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetTxRequest;
                fromPartial(object: Partial<_73.GetTxRequest>): _73.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _73.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetTxResponse;
                fromPartial(object: Partial<_73.GetTxResponse>): _73.GetTxResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            Plan: {
                encode(message: _76.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Plan;
                fromPartial(object: Partial<_76.Plan>): _76.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _76.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_76.SoftwareUpgradeProposal>): _76.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _76.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_76.CancelSoftwareUpgradeProposal>): _76.CancelSoftwareUpgradeProposal;
            };
            QueryCurrentPlanRequest: {
                encode(_: _75.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_75.QueryCurrentPlanRequest>): _75.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _75.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_75.QueryCurrentPlanResponse>): _75.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _75.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_75.QueryAppliedPlanRequest>): _75.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _75.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_75.QueryAppliedPlanResponse>): _75.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _75.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_75.QueryUpgradedConsensusStateRequest>): _75.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _75.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_75.QueryUpgradedConsensusStateResponse>): _75.QueryUpgradedConsensusStateResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _77.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _77.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _78.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.BaseVestingAccount;
                fromPartial(object: Partial<_78.BaseVestingAccount>): _78.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _78.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ContinuousVestingAccount;
                fromPartial(object: Partial<_78.ContinuousVestingAccount>): _78.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _78.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.DelayedVestingAccount;
                fromPartial(object: Partial<_78.DelayedVestingAccount>): _78.DelayedVestingAccount;
            };
            Period: {
                encode(message: _78.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Period;
                fromPartial(object: Partial<_78.Period>): _78.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _78.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.PeriodicVestingAccount;
                fromPartial(object: Partial<_78.PeriodicVestingAccount>): _78.PeriodicVestingAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _77.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgCreateVestingAccount;
                fromPartial(object: Partial<_77.MsgCreateVestingAccount>): _77.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _77.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _77.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_77.MsgCreateVestingAccountResponse>): _77.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _185.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _186.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _187.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _188.MsgClientImpl;
                };
                gov: {
                    v1beta1: _189.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _190.MsgClientImpl;
                };
                staking: {
                    v1beta1: _191.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _192.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: _25.QueryAccountRequest): Promise<_25.QueryAccountResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                        allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                        totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                        supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                            getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                            getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                            getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                        allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                        proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                        vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                        votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                        params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                        annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                        signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _69.QueryValidatorsRequest): Promise<_69.QueryValidatorsResponse>;
                        validator(request: _69.QueryValidatorRequest): Promise<_69.QueryValidatorResponse>;
                        validatorDelegations(request: _69.QueryValidatorDelegationsRequest): Promise<_69.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _69.QueryValidatorUnbondingDelegationsRequest): Promise<_69.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _69.QueryDelegationRequest): Promise<_69.QueryDelegationResponse>;
                        unbondingDelegation(request: _69.QueryUnbondingDelegationRequest): Promise<_69.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _69.QueryDelegatorDelegationsRequest): Promise<_69.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _69.QueryDelegatorUnbondingDelegationsRequest): Promise<_69.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _69.QueryRedelegationsRequest): Promise<_69.QueryRedelegationsResponse>;
                        delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _69.QueryDelegatorValidatorRequest): Promise<_69.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _69.QueryHistoricalInfoRequest): Promise<_69.QueryHistoricalInfoResponse>;
                        pool(request?: _69.QueryPoolRequest): Promise<_69.QueryPoolResponse>;
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                        getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                        broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                        getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                        appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _161.LCDQueryClient;
                };
                bank: {
                    v1beta1: _162.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _163.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _164.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _165.LCDQueryClient;
                };
                gov: {
                    v1beta1: _166.LCDQueryClient;
                };
                mint: {
                    v1beta1: _167.LCDQueryClient;
                };
                params: {
                    v1beta1: _168.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _169.LCDQueryClient;
                };
                staking: {
                    v1beta1: _170.LCDQueryClient;
                };
                tx: {
                    v1beta1: _171.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _172.LCDQueryClient;
                };
            };
        }>;
    };
}
