import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./base/kv/v1beta1/kv";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/reflection/v1beta1/reflection";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/listening";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./upgrade/v1beta1/upgrade";
import * as _26 from "./upgrade/v1beta1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/multisig/keys";
import * as _41 from "./crypto/secp256k1/keys";
import * as _42 from "./crypto/secp256r1/keys";
import * as _43 from "./distribution/v1beta1/distribution";
import * as _44 from "./distribution/v1beta1/genesis";
import * as _45 from "./distribution/v1beta1/query";
import * as _46 from "./distribution/v1beta1/tx";
import * as _47 from "./evidence/v1beta1/evidence";
import * as _48 from "./evidence/v1beta1/genesis";
import * as _49 from "./evidence/v1beta1/query";
import * as _50 from "./evidence/v1beta1/tx";
import * as _51 from "./feegrant/v1beta1/feegrant";
import * as _52 from "./feegrant/v1beta1/genesis";
import * as _53 from "./feegrant/v1beta1/query";
import * as _54 from "./feegrant/v1beta1/tx";
import * as _55 from "./genutil/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./mint/v1beta1/genesis";
import * as _61 from "./mint/v1beta1/mint";
import * as _62 from "./mint/v1beta1/query";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./slashing/v1beta1/genesis";
import * as _66 from "./slashing/v1beta1/query";
import * as _67 from "./slashing/v1beta1/slashing";
import * as _68 from "./slashing/v1beta1/tx";
import * as _69 from "./staking/v1beta1/authz";
import * as _70 from "./staking/v1beta1/genesis";
import * as _71 from "./staking/v1beta1/query";
import * as _72 from "./staking/v1beta1/staking";
import * as _73 from "./staking/v1beta1/tx";
import * as _74 from "./tx/signing/v1beta1/signing";
import * as _75 from "./tx/v1beta1/service";
import * as _76 from "./tx/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _144 from "./auth/v1beta1/query.rpc.Query";
import * as _145 from "./authz/v1beta1/query.rpc.Query";
import * as _146 from "./bank/v1beta1/query.rpc.Query";
import * as _147 from "./base/node/v1beta1/query.rpc.Service";
import * as _148 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _149 from "./distribution/v1beta1/query.rpc.Query";
import * as _150 from "./evidence/v1beta1/query.rpc.Query";
import * as _151 from "./feegrant/v1beta1/query.rpc.Query";
import * as _152 from "./gov/v1beta1/query.rpc.Query";
import * as _153 from "./mint/v1beta1/query.rpc.Query";
import * as _154 from "./params/v1beta1/query.rpc.Query";
import * as _155 from "./slashing/v1beta1/query.rpc.Query";
import * as _156 from "./staking/v1beta1/query.rpc.Query";
import * as _157 from "./tx/v1beta1/service.rpc.Service";
import * as _158 from "./upgrade/v1beta1/query.rpc.Query";
import * as _159 from "./authz/v1beta1/tx.rpc.msg";
import * as _160 from "./bank/v1beta1/tx.rpc.msg";
import * as _161 from "./crisis/v1beta1/tx.rpc.msg";
import * as _162 from "./distribution/v1beta1/tx.rpc.msg";
import * as _163 from "./evidence/v1beta1/tx.rpc.msg";
import * as _164 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _165 from "./gov/v1beta1/tx.rpc.msg";
import * as _166 from "./slashing/v1beta1/tx.rpc.msg";
import * as _167 from "./staking/v1beta1/tx.rpc.msg";
import * as _168 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _13.MsgSend) => {
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
                    }) => _13.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _13.MsgMultiSend) => {
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
                    }) => _13.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _13.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgSend;
                fromPartial(object: Partial<_13.MsgSend>): _13.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _13.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgSendResponse;
                fromPartial(_: Partial<_13.MsgSendResponse>): _13.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _13.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgMultiSend;
                fromPartial(object: Partial<_13.MsgMultiSend>): _13.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _13.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgMultiSendResponse;
                fromPartial(_: Partial<_13.MsgMultiSendResponse>): _13.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _12.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryBalanceRequest;
                fromPartial(object: Partial<_12.QueryBalanceRequest>): _12.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _12.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryBalanceResponse;
                fromPartial(object: Partial<_12.QueryBalanceResponse>): _12.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _12.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAllBalancesRequest;
                fromPartial(object: Partial<_12.QueryAllBalancesRequest>): _12.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _12.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAllBalancesResponse;
                fromPartial(object: Partial<_12.QueryAllBalancesResponse>): _12.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _12.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_12.QuerySpendableBalancesRequest>): _12.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _12.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_12.QuerySpendableBalancesResponse>): _12.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_12.QueryTotalSupplyRequest>): _12.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_12.QueryTotalSupplyResponse>): _12.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _12.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySupplyOfRequest;
                fromPartial(object: Partial<_12.QuerySupplyOfRequest>): _12.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _12.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySupplyOfResponse;
                fromPartial(object: Partial<_12.QuerySupplyOfResponse>): _12.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomsMetadataRequest>): _12.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomsMetadataResponse>): _12.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomMetadataRequest>): _12.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomMetadataResponse>): _12.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            Balance: {
                encode(message: _11.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Balance;
                fromPartial(object: Partial<_11.Balance>): _11.Balance;
            };
            SendAuthorization: {
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.SendAuthorization;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            SendEnabled: {
                encode(message: _9.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.SendEnabled;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
            };
            Input: {
                encode(message: _9.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Input;
                fromPartial(object: Partial<_9.Input>): _9.Input;
            };
            Output: {
                encode(message: _9.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Output;
                fromPartial(object: Partial<_9.Output>): _9.Output;
            };
            Supply: {
                encode(message: _9.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Supply;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
            };
            DenomUnit: {
                encode(message: _9.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.DenomUnit;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
            };
            Metadata: {
                encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Metadata;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _14.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.TxResponse;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _14.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.ABCIMessageLog;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _14.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.StringEvent;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                };
                Attribute: {
                    encode(message: _14.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.Attribute;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                };
                GasInfo: {
                    encode(message: _14.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.GasInfo;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                };
                Result: {
                    encode(message: _14.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.Result;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                };
                SimulationResponse: {
                    encode(message: _14.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.SimulationResponse;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                };
                MsgData: {
                    encode(message: _14.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.MsgData;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                };
                TxMsgData: {
                    encode(message: _14.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.TxMsgData;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _14.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.SearchTxsResult;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _15.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.PageRequest;
                    fromPartial(object: Partial<_15.PageRequest>): _15.PageRequest;
                };
                PageResponse: {
                    encode(message: _15.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.PageResponse;
                    fromPartial(object: Partial<_15.PageResponse>): _15.PageResponse;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _16.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Coin;
                fromPartial(object: Partial<_16.Coin>): _16.Coin;
            };
            DecCoin: {
                encode(message: _16.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.DecCoin;
                fromPartial(object: Partial<_16.DecCoin>): _16.DecCoin;
            };
            IntProto: {
                encode(message: _16.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.IntProto;
                fromPartial(object: Partial<_16.IntProto>): _16.IntProto;
            };
            DecProto: {
                encode(message: _16.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.DecProto;
                fromPartial(object: Partial<_16.DecProto>): _16.DecProto;
            };
        };
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _17.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.Pairs;
                    fromPartial(object: Partial<_17.Pairs>): _17.Pairs;
                };
                Pair: {
                    encode(message: _17.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.Pair;
                    fromPartial(object: Partial<_17.Pair>): _17.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _147.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _18.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _18.ConfigRequest;
                    fromPartial(_: Partial<_18.ConfigRequest>): _18.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _18.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.ConfigResponse;
                    fromPartial(object: Partial<_18.ConfigResponse>): _18.ConfigResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _19.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _19.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_19.ListAllInterfacesRequest>): _19.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _19.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_19.ListAllInterfacesResponse>): _19.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _19.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.ListImplementationsRequest;
                    fromPartial(object: Partial<_19.ListImplementationsRequest>): _19.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _19.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.ListImplementationsResponse;
                    fromPartial(object: Partial<_19.ListImplementationsResponse>): _19.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _20.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.AppDescriptor;
                    fromPartial(object: Partial<_20.AppDescriptor>): _20.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _20.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.TxDescriptor;
                    fromPartial(object: Partial<_20.TxDescriptor>): _20.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _20.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.AuthnDescriptor;
                    fromPartial(object: Partial<_20.AuthnDescriptor>): _20.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _20.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.SigningModeDescriptor;
                    fromPartial(object: Partial<_20.SigningModeDescriptor>): _20.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _20.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.ChainDescriptor;
                    fromPartial(object: Partial<_20.ChainDescriptor>): _20.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _20.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.CodecDescriptor;
                    fromPartial(object: Partial<_20.CodecDescriptor>): _20.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _20.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.InterfaceDescriptor;
                    fromPartial(object: Partial<_20.InterfaceDescriptor>): _20.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _20.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_20.InterfaceImplementerDescriptor>): _20.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _20.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_20.InterfaceAcceptingMessageDescriptor>): _20.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _20.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.ConfigurationDescriptor;
                    fromPartial(object: Partial<_20.ConfigurationDescriptor>): _20.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _20.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgDescriptor;
                    fromPartial(object: Partial<_20.MsgDescriptor>): _20.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _20.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_20.GetAuthnDescriptorRequest>): _20.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _20.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_20.GetAuthnDescriptorResponse>): _20.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _20.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_20.GetChainDescriptorRequest>): _20.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _20.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_20.GetChainDescriptorResponse>): _20.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _20.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_20.GetCodecDescriptorRequest>): _20.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _20.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_20.GetCodecDescriptorResponse>): _20.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _20.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_20.GetConfigurationDescriptorRequest>): _20.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _20.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_20.GetConfigurationDescriptorResponse>): _20.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _20.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_20.GetQueryServicesDescriptorRequest>): _20.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _20.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_20.GetQueryServicesDescriptorResponse>): _20.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _20.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_20.GetTxDescriptorRequest>): _20.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _20.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_20.GetTxDescriptorResponse>): _20.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _20.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.QueryServicesDescriptor;
                    fromPartial(object: Partial<_20.QueryServicesDescriptor>): _20.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _20.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.QueryServiceDescriptor;
                    fromPartial(object: Partial<_20.QueryServiceDescriptor>): _20.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _20.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.QueryMethodDescriptor;
                    fromPartial(object: Partial<_20.QueryMethodDescriptor>): _20.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _21.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Snapshot;
                    fromPartial(object: Partial<_21.Snapshot>): _21.Snapshot;
                };
                Metadata: {
                    encode(message: _21.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Metadata;
                    fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                };
                SnapshotItem: {
                    encode(message: _21.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SnapshotItem;
                    fromPartial(object: Partial<_21.SnapshotItem>): _21.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _21.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SnapshotStoreItem;
                    fromPartial(object: Partial<_21.SnapshotStoreItem>): _21.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _21.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SnapshotIAVLItem;
                    fromPartial(object: Partial<_21.SnapshotIAVLItem>): _21.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _21.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_21.SnapshotExtensionMeta>): _21.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _21.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_21.SnapshotExtensionPayload>): _21.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _23.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.StoreKVPair;
                    fromPartial(object: Partial<_23.StoreKVPair>): _23.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _23.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.BlockMetadata;
                    fromPartial(object: Partial<_23.BlockMetadata>): _23.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _23.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_23.BlockMetadata_DeliverTx>): _23.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _22.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.CommitInfo;
                    fromPartial(object: Partial<_22.CommitInfo>): _22.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _22.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.StoreInfo;
                    fromPartial(object: Partial<_22.StoreInfo>): _22.StoreInfo;
                };
                CommitID: {
                    encode(message: _22.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.CommitID;
                    fromPartial(object: Partial<_22.CommitID>): _22.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _148.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                    getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                    getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                    getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _24.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightRequest>): _24.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _24.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightResponse>): _24.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _24.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetRequest>): _24.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _24.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetResponse>): _24.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _24.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Validator;
                    fromPartial(object: Partial<_24.Validator>): _24.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _24.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_24.GetBlockByHeightRequest>): _24.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _24.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_24.GetBlockByHeightResponse>): _24.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _24.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _24.GetLatestBlockRequest;
                    fromPartial(_: Partial<_24.GetLatestBlockRequest>): _24.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _24.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetLatestBlockResponse;
                    fromPartial(object: Partial<_24.GetLatestBlockResponse>): _24.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _24.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _24.GetSyncingRequest;
                    fromPartial(_: Partial<_24.GetSyncingRequest>): _24.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _24.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetSyncingResponse;
                    fromPartial(object: Partial<_24.GetSyncingResponse>): _24.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _24.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _24.GetNodeInfoRequest;
                    fromPartial(_: Partial<_24.GetNodeInfoRequest>): _24.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _24.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GetNodeInfoResponse;
                    fromPartial(object: Partial<_24.GetNodeInfoResponse>): _24.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _24.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.VersionInfo;
                    fromPartial(object: Partial<_24.VersionInfo>): _24.VersionInfo;
                };
                Module: {
                    encode(message: _24.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Module;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                };
            };
        }
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _26.QueryCurrentPlanRequest): Promise<_26.QueryCurrentPlanResponse>;
                appliedPlan(request: _26.QueryAppliedPlanRequest): Promise<_26.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _26.QueryUpgradedConsensusStateRequest): Promise<_26.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _26.QueryModuleVersionsRequest): Promise<_26.QueryModuleVersionsResponse>;
            };
            QueryCurrentPlanRequest: {
                encode(_: _26.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_26.QueryCurrentPlanRequest>): _26.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _26.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_26.QueryCurrentPlanResponse>): _26.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _26.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_26.QueryAppliedPlanRequest>): _26.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _26.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_26.QueryAppliedPlanResponse>): _26.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _26.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_26.QueryUpgradedConsensusStateRequest>): _26.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _26.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_26.QueryUpgradedConsensusStateResponse>): _26.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _26.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_26.QueryModuleVersionsRequest>): _26.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _26.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_26.QueryModuleVersionsResponse>): _26.QueryModuleVersionsResponse;
            };
            Plan: {
                encode(message: _25.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.Plan;
                fromPartial(object: Partial<_25.Plan>): _25.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _25.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_25.SoftwareUpgradeProposal>): _25.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _25.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_25.CancelSoftwareUpgradeProposal>): _25.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _25.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.ModuleVersion;
                fromPartial(object: Partial<_25.ModuleVersion>): _25.ModuleVersion;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _144.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _29.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountsRequest;
                fromPartial(object: Partial<_29.QueryAccountsRequest>): _29.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _29.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountsResponse;
                fromPartial(object: Partial<_29.QueryAccountsResponse>): _29.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _29.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountRequest;
                fromPartial(object: Partial<_29.QueryAccountRequest>): _29.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _29.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountResponse;
                fromPartial(object: Partial<_29.QueryAccountResponse>): _29.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _29.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameRequest>): _29.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _29.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameResponse>): _29.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
            BaseAccount: {
                encode(message: _27.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.BaseAccount;
                fromPartial(object: Partial<_27.BaseAccount>): _27.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _27.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.ModuleAccount;
                fromPartial(object: Partial<_27.ModuleAccount>): _27.ModuleAccount;
            };
            Params: {
                encode(message: _27.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _34.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _34.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _34.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _34.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _34.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _34.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _34.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgGrant;
                fromPartial(object: Partial<_34.MsgGrant>): _34.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _34.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgExecResponse;
                fromPartial(object: Partial<_34.MsgExecResponse>): _34.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _34.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgExec;
                fromPartial(object: Partial<_34.MsgExec>): _34.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _34.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MsgGrantResponse;
                fromPartial(_: Partial<_34.MsgGrantResponse>): _34.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _34.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgRevoke;
                fromPartial(object: Partial<_34.MsgRevoke>): _34.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _34.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MsgRevokeResponse;
                fromPartial(_: Partial<_34.MsgRevokeResponse>): _34.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _33.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGrantsRequest;
                fromPartial(object: Partial<_33.QueryGrantsRequest>): _33.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _33.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGrantsResponse;
                fromPartial(object: Partial<_33.QueryGrantsResponse>): _33.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _33.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranterGrantsRequest>): _33.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _33.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranterGrantsResponse>): _33.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _33.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranteeGrantsRequest>): _33.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _33.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranteeGrantsResponse>): _33.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            EventGrant: {
                encode(message: _31.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.EventGrant;
                fromPartial(object: Partial<_31.EventGrant>): _31.EventGrant;
            };
            EventRevoke: {
                encode(message: _31.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.EventRevoke;
                fromPartial(object: Partial<_31.EventRevoke>): _31.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _30.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenericAuthorization;
                fromPartial(object: Partial<_30.GenericAuthorization>): _30.GenericAuthorization;
            };
            Grant: {
                encode(message: _30.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Grant;
                fromPartial(object: Partial<_30.Grant>): _30.Grant;
            };
            GrantAuthorization: {
                encode(message: _30.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GrantAuthorization;
                fromPartial(object: Partial<_30.GrantAuthorization>): _30.GrantAuthorization;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _36.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.GenesisOwners;
                fromPartial(object: Partial<_36.GenesisOwners>): _36.GenesisOwners;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            };
            Capability: {
                encode(message: _35.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.Capability;
                fromPartial(object: Partial<_35.Capability>): _35.Capability;
            };
            Owner: {
                encode(message: _35.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.Owner;
                fromPartial(object: Partial<_35.Owner>): _35.Owner;
            };
            CapabilityOwners: {
                encode(message: _35.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.CapabilityOwners;
                fromPartial(object: Partial<_35.CapabilityOwners>): _35.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _38.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _38.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _38.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _38.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _38.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgVerifyInvariant;
                fromPartial(object: Partial<_38.MsgVerifyInvariant>): _38.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _38.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_38.MsgVerifyInvariantResponse>): _38.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.PubKey;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.PrivKey;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _40.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.LegacyAminoPubKey;
                fromPartial(object: Partial<_40.LegacyAminoPubKey>): _40.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _41.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.PubKey;
                fromPartial(object: Partial<_41.PubKey>): _41.PubKey;
            };
            PrivKey: {
                encode(message: _41.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.PrivKey;
                fromPartial(object: Partial<_41.PrivKey>): _41.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _42.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.PubKey;
                fromPartial(object: Partial<_42.PubKey>): _42.PubKey;
            };
            PrivKey: {
                encode(message: _42.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.PrivKey;
                fromPartial(object: Partial<_42.PrivKey>): _42.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                validatorOutstandingRewards(request: _45.QueryValidatorOutstandingRewardsRequest): Promise<_45.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _45.QueryValidatorCommissionRequest): Promise<_45.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _45.QueryValidatorSlashesRequest): Promise<_45.QueryValidatorSlashesResponse>;
                delegationRewards(request: _45.QueryDelegationRewardsRequest): Promise<_45.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _45.QueryDelegationTotalRewardsRequest): Promise<_45.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _45.QueryDelegatorValidatorsRequest): Promise<_45.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _45.QueryDelegatorWithdrawAddressRequest): Promise<_45.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _45.QueryCommunityPoolRequest): Promise<_45.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _46.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _46.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _46.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _46.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _46.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _46.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _46.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _46.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _46.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _46.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _46.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _46.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _46.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _46.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _46.MsgFundCommunityPool) => {
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
                    }) => _46.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _46.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_46.MsgSetWithdrawAddress>): _46.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _46.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _46.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_46.MsgSetWithdrawAddressResponse>): _46.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _46.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_46.MsgWithdrawDelegatorReward>): _46.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _46.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _46.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_46.MsgWithdrawDelegatorRewardResponse>): _46.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _46.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_46.MsgWithdrawValidatorCommission>): _46.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _46.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _46.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_46.MsgWithdrawValidatorCommissionResponse>): _46.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _46.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgFundCommunityPool;
                fromPartial(object: Partial<_46.MsgFundCommunityPool>): _46.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _46.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _46.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_46.MsgFundCommunityPoolResponse>): _46.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _45.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _45.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _45.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_45.QueryValidatorOutstandingRewardsRequest>): _45.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _45.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_45.QueryValidatorOutstandingRewardsResponse>): _45.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _45.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_45.QueryValidatorCommissionRequest>): _45.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _45.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_45.QueryValidatorCommissionResponse>): _45.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _45.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_45.QueryValidatorSlashesRequest>): _45.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _45.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_45.QueryValidatorSlashesResponse>): _45.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _45.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_45.QueryDelegationRewardsRequest>): _45.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _45.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_45.QueryDelegationRewardsResponse>): _45.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _45.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_45.QueryDelegationTotalRewardsRequest>): _45.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _45.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_45.QueryDelegationTotalRewardsResponse>): _45.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _45.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_45.QueryDelegatorValidatorsRequest>): _45.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _45.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_45.QueryDelegatorValidatorsResponse>): _45.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _45.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_45.QueryDelegatorWithdrawAddressRequest>): _45.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _45.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_45.QueryDelegatorWithdrawAddressResponse>): _45.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _45.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_45.QueryCommunityPoolRequest>): _45.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _45.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_45.QueryCommunityPoolResponse>): _45.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _44.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_44.DelegatorWithdrawInfo>): _44.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _44.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorOutstandingRewardsRecord>): _44.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _44.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_44.ValidatorAccumulatedCommissionRecord>): _44.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _44.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorHistoricalRewardsRecord>): _44.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _44.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_44.ValidatorCurrentRewardsRecord>): _44.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _44.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_44.DelegatorStartingInfoRecord>): _44.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _44.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_44.ValidatorSlashEventRecord>): _44.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            Params: {
                encode(message: _43.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.Params;
                fromPartial(object: Partial<_43.Params>): _43.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _43.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_43.ValidatorHistoricalRewards>): _43.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _43.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorCurrentRewards;
                fromPartial(object: Partial<_43.ValidatorCurrentRewards>): _43.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _43.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_43.ValidatorAccumulatedCommission>): _43.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _43.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_43.ValidatorOutstandingRewards>): _43.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _43.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorSlashEvent;
                fromPartial(object: Partial<_43.ValidatorSlashEvent>): _43.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _43.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorSlashEvents;
                fromPartial(object: Partial<_43.ValidatorSlashEvents>): _43.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _43.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.FeePool;
                fromPartial(object: Partial<_43.FeePool>): _43.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _43.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_43.CommunityPoolSpendProposal>): _43.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _43.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.DelegatorStartingInfo;
                fromPartial(object: Partial<_43.DelegatorStartingInfo>): _43.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _43.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.DelegationDelegatorReward;
                fromPartial(object: Partial<_43.DelegationDelegatorReward>): _43.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _43.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_43.CommunityPoolSpendProposalWithDeposit>): _43.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _49.QueryEvidenceRequest): Promise<_49.QueryEvidenceResponse>;
                allEvidence(request?: _49.QueryAllEvidenceRequest): Promise<_49.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _50.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _50.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _50.MsgSubmitEvidence) => {
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
                    }) => _50.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _50.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSubmitEvidence;
                fromPartial(object: Partial<_50.MsgSubmitEvidence>): _50.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _50.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_50.MsgSubmitEvidenceResponse>): _50.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _49.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryEvidenceRequest;
                fromPartial(object: Partial<_49.QueryEvidenceRequest>): _49.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _49.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryEvidenceResponse;
                fromPartial(object: Partial<_49.QueryEvidenceResponse>): _49.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _49.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_49.QueryAllEvidenceRequest>): _49.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _49.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_49.QueryAllEvidenceResponse>): _49.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            Equivocation: {
                encode(message: _47.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Equivocation;
                fromPartial(object: Partial<_47.Equivocation>): _47.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _53.QueryAllowanceRequest): Promise<_53.QueryAllowanceResponse>;
                allowances(request: _53.QueryAllowancesRequest): Promise<_53.QueryAllowancesResponse>;
                allowancesByGranter(request: _53.QueryAllowancesByGranterRequest): Promise<_53.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _54.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _54.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _54.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _54.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _54.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _54.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _54.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _54.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _54.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MsgGrantAllowance;
                fromPartial(object: Partial<_54.MsgGrantAllowance>): _54.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _54.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _54.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_54.MsgGrantAllowanceResponse>): _54.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _54.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MsgRevokeAllowance;
                fromPartial(object: Partial<_54.MsgRevokeAllowance>): _54.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _54.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _54.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_54.MsgRevokeAllowanceResponse>): _54.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _53.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowanceRequest;
                fromPartial(object: Partial<_53.QueryAllowanceRequest>): _53.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _53.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowanceResponse;
                fromPartial(object: Partial<_53.QueryAllowanceResponse>): _53.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _53.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowancesRequest;
                fromPartial(object: Partial<_53.QueryAllowancesRequest>): _53.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _53.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowancesResponse;
                fromPartial(object: Partial<_53.QueryAllowancesResponse>): _53.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _53.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_53.QueryAllowancesByGranterRequest>): _53.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _53.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_53.QueryAllowancesByGranterResponse>): _53.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
            BasicAllowance: {
                encode(message: _51.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.BasicAllowance;
                fromPartial(object: Partial<_51.BasicAllowance>): _51.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _51.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.PeriodicAllowance;
                fromPartial(object: Partial<_51.PeriodicAllowance>): _51.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _51.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.AllowedMsgAllowance;
                fromPartial(object: Partial<_51.AllowedMsgAllowance>): _51.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _51.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.Grant;
                fromPartial(object: Partial<_51.Grant>): _51.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _59.MsgSubmitProposal) => {
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
                    }) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _59.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _59.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _59.MsgDeposit) => {
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
                    }) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgSubmitProposal;
                fromPartial(object: Partial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgVote;
                fromPartial(object: Partial<_59.MsgVote>): _59.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgVoteResponse;
                fromPartial(_: Partial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgVoteWeighted;
                fromPartial(object: Partial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalRequest;
                fromPartial(object: Partial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalResponse;
                fromPartial(object: Partial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalsRequest;
                fromPartial(object: Partial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalsResponse;
                fromPartial(object: Partial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVoteRequest;
                fromPartial(object: Partial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVoteResponse;
                fromPartial(object: Partial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVotesRequest;
                fromPartial(object: Partial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVotesResponse;
                fromPartial(object: Partial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryParamsRequest;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositRequest;
                fromPartial(object: Partial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositResponse;
                fromPartial(object: Partial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositsRequest;
                fromPartial(object: Partial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositsResponse;
                fromPartial(object: Partial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                fromPartial(object: Partial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                fromPartial(object: Partial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.WeightedVoteOption;
                fromPartial(object: Partial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TextProposal;
                fromPartial(object: Partial<_57.TextProposal>): _57.TextProposal;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Deposit;
                fromPartial(object: Partial<_57.Deposit>): _57.Deposit;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Proposal;
                fromPartial(object: Partial<_57.Proposal>): _57.Proposal;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TallyResult;
                fromPartial(object: Partial<_57.TallyResult>): _57.TallyResult;
            };
            Vote: {
                encode(message: _57.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Vote;
                fromPartial(object: Partial<_57.Vote>): _57.Vote;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.DepositParams;
                fromPartial(object: Partial<_57.DepositParams>): _57.DepositParams;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VotingParams;
                fromPartial(object: Partial<_57.VotingParams>): _57.VotingParams;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TallyParams;
                fromPartial(object: Partial<_57.TallyParams>): _57.TallyParams;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                inflation(request?: _62.QueryInflationRequest): Promise<_62.QueryInflationResponse>;
                annualProvisions(request?: _62.QueryAnnualProvisionsRequest): Promise<_62.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _62.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.QueryParamsRequest;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _62.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryParamsResponse;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _62.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.QueryInflationRequest;
                fromPartial(_: Partial<_62.QueryInflationRequest>): _62.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _62.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryInflationResponse;
                fromPartial(object: Partial<_62.QueryInflationResponse>): _62.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _62.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_62.QueryAnnualProvisionsRequest>): _62.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _62.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_62.QueryAnnualProvisionsResponse>): _62.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _61.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Minter;
                fromPartial(object: Partial<_61.Minter>): _61.Minter;
            };
            Params: {
                encode(message: _61.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Params;
                fromPartial(object: Partial<_61.Params>): _61.Params;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryParamsRequest;
                fromPartial(object: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryParamsResponse;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _63.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ParameterChangeProposal;
                fromPartial(object: Partial<_63.ParameterChangeProposal>): _63.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _63.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ParamChange;
                fromPartial(object: Partial<_63.ParamChange>): _63.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                signingInfo(request: _66.QuerySigningInfoRequest): Promise<_66.QuerySigningInfoResponse>;
                signingInfos(request?: _66.QuerySigningInfosRequest): Promise<_66.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _68.MsgUnjail): {
                        typeUrl: string;
                        value: _68.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _68.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _68.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _68.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgUnjail;
                fromPartial(object: Partial<_68.MsgUnjail>): _68.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _68.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _68.MsgUnjailResponse;
                fromPartial(_: Partial<_68.MsgUnjailResponse>): _68.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _67.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ValidatorSigningInfo;
                fromPartial(object: Partial<_67.ValidatorSigningInfo>): _67.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Params;
                fromPartial(object: Partial<_67.Params>): _67.Params;
            };
            QueryParamsRequest: {
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _66.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySigningInfoRequest;
                fromPartial(object: Partial<_66.QuerySigningInfoRequest>): _66.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _66.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySigningInfoResponse;
                fromPartial(object: Partial<_66.QuerySigningInfoResponse>): _66.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _66.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySigningInfosRequest;
                fromPartial(object: Partial<_66.QuerySigningInfosRequest>): _66.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _66.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySigningInfosResponse;
                fromPartial(object: Partial<_66.QuerySigningInfosResponse>): _66.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
            SigningInfo: {
                encode(message: _65.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.SigningInfo;
                fromPartial(object: Partial<_65.SigningInfo>): _65.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _65.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorMissedBlocks;
                fromPartial(object: Partial<_65.ValidatorMissedBlocks>): _65.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _65.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MissedBlock;
                fromPartial(object: Partial<_65.MissedBlock>): _65.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _71.QueryValidatorsRequest): Promise<_71.QueryValidatorsResponse>;
                validator(request: _71.QueryValidatorRequest): Promise<_71.QueryValidatorResponse>;
                validatorDelegations(request: _71.QueryValidatorDelegationsRequest): Promise<_71.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _71.QueryValidatorUnbondingDelegationsRequest): Promise<_71.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _71.QueryDelegationRequest): Promise<_71.QueryDelegationResponse>;
                unbondingDelegation(request: _71.QueryUnbondingDelegationRequest): Promise<_71.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _71.QueryDelegatorDelegationsRequest): Promise<_71.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _71.QueryDelegatorUnbondingDelegationsRequest): Promise<_71.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _71.QueryRedelegationsRequest): Promise<_71.QueryRedelegationsResponse>;
                delegatorValidators(request: _71.QueryDelegatorValidatorsRequest): Promise<_71.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _71.QueryDelegatorValidatorRequest): Promise<_71.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _71.QueryHistoricalInfoRequest): Promise<_71.QueryHistoricalInfoResponse>;
                pool(request?: _71.QueryPoolRequest): Promise<_71.QueryPoolResponse>;
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _73.MsgCreateValidator): {
                        typeUrl: string;
                        value: _73.MsgCreateValidator;
                    };
                    editValidator(value: _73.MsgEditValidator): {
                        typeUrl: string;
                        value: _73.MsgEditValidator;
                    };
                    delegate(value: _73.MsgDelegate): {
                        typeUrl: string;
                        value: _73.MsgDelegate;
                    };
                    beginRedelegate(value: _73.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _73.MsgBeginRedelegate;
                    };
                    undelegate(value: _73.MsgUndelegate): {
                        typeUrl: string;
                        value: _73.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _73.MsgCreateValidator) => {
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
                    }) => _73.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _73.MsgEditValidator) => {
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
                    }) => _73.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _73.MsgDelegate) => {
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
                    }) => _73.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _73.MsgBeginRedelegate) => {
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
                    }) => _73.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _73.MsgUndelegate) => {
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
                    }) => _73.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _73.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgCreateValidator;
                fromPartial(object: Partial<_73.MsgCreateValidator>): _73.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _73.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_73.MsgCreateValidatorResponse>): _73.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _73.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgEditValidator;
                fromPartial(object: Partial<_73.MsgEditValidator>): _73.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _73.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgEditValidatorResponse;
                fromPartial(_: Partial<_73.MsgEditValidatorResponse>): _73.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _73.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgDelegate;
                fromPartial(object: Partial<_73.MsgDelegate>): _73.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _73.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgDelegateResponse;
                fromPartial(_: Partial<_73.MsgDelegateResponse>): _73.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _73.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgBeginRedelegate;
                fromPartial(object: Partial<_73.MsgBeginRedelegate>): _73.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _73.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_73.MsgBeginRedelegateResponse>): _73.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _73.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgUndelegate;
                fromPartial(object: Partial<_73.MsgUndelegate>): _73.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _73.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgUndelegateResponse;
                fromPartial(object: Partial<_73.MsgUndelegateResponse>): _73.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _72.BondStatus;
            bondStatusToJSON(object: _72.BondStatus): string;
            BondStatus: typeof _72.BondStatus;
            BondStatusSDKType: typeof _72.BondStatus;
            HistoricalInfo: {
                encode(message: _72.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.HistoricalInfo;
                fromPartial(object: Partial<_72.HistoricalInfo>): _72.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _72.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.CommissionRates;
                fromPartial(object: Partial<_72.CommissionRates>): _72.CommissionRates;
            };
            Commission: {
                encode(message: _72.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Commission;
                fromPartial(object: Partial<_72.Commission>): _72.Commission;
            };
            Description: {
                encode(message: _72.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Description;
                fromPartial(object: Partial<_72.Description>): _72.Description;
            };
            Validator: {
                encode(message: _72.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Validator;
                fromPartial(object: Partial<_72.Validator>): _72.Validator;
            };
            ValAddresses: {
                encode(message: _72.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.ValAddresses;
                fromPartial(object: Partial<_72.ValAddresses>): _72.ValAddresses;
            };
            DVPair: {
                encode(message: _72.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.DVPair;
                fromPartial(object: Partial<_72.DVPair>): _72.DVPair;
            };
            DVPairs: {
                encode(message: _72.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.DVPairs;
                fromPartial(object: Partial<_72.DVPairs>): _72.DVPairs;
            };
            DVVTriplet: {
                encode(message: _72.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.DVVTriplet;
                fromPartial(object: Partial<_72.DVVTriplet>): _72.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _72.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.DVVTriplets;
                fromPartial(object: Partial<_72.DVVTriplets>): _72.DVVTriplets;
            };
            Delegation: {
                encode(message: _72.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Delegation;
                fromPartial(object: Partial<_72.Delegation>): _72.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _72.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.UnbondingDelegation;
                fromPartial(object: Partial<_72.UnbondingDelegation>): _72.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _72.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.UnbondingDelegationEntry;
                fromPartial(object: Partial<_72.UnbondingDelegationEntry>): _72.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _72.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.RedelegationEntry;
                fromPartial(object: Partial<_72.RedelegationEntry>): _72.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _72.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Redelegation;
                fromPartial(object: Partial<_72.Redelegation>): _72.Redelegation;
            };
            Params: {
                encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Params;
                fromPartial(object: Partial<_72.Params>): _72.Params;
            };
            DelegationResponse: {
                encode(message: _72.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.DelegationResponse;
                fromPartial(object: Partial<_72.DelegationResponse>): _72.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _72.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.RedelegationEntryResponse;
                fromPartial(object: Partial<_72.RedelegationEntryResponse>): _72.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _72.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.RedelegationResponse;
                fromPartial(object: Partial<_72.RedelegationResponse>): _72.RedelegationResponse;
            };
            Pool: {
                encode(message: _72.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Pool;
                fromPartial(object: Partial<_72.Pool>): _72.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _71.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorsRequest;
                fromPartial(object: Partial<_71.QueryValidatorsRequest>): _71.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _71.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorsResponse;
                fromPartial(object: Partial<_71.QueryValidatorsResponse>): _71.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _71.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorRequest;
                fromPartial(object: Partial<_71.QueryValidatorRequest>): _71.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _71.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorResponse;
                fromPartial(object: Partial<_71.QueryValidatorResponse>): _71.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _71.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_71.QueryValidatorDelegationsRequest>): _71.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _71.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_71.QueryValidatorDelegationsResponse>): _71.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _71.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_71.QueryValidatorUnbondingDelegationsRequest>): _71.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _71.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_71.QueryValidatorUnbondingDelegationsResponse>): _71.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _71.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegationRequest;
                fromPartial(object: Partial<_71.QueryDelegationRequest>): _71.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _71.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegationResponse;
                fromPartial(object: Partial<_71.QueryDelegationResponse>): _71.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _71.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_71.QueryUnbondingDelegationRequest>): _71.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _71.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_71.QueryUnbondingDelegationResponse>): _71.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _71.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorDelegationsRequest>): _71.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _71.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorDelegationsResponse>): _71.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _71.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorUnbondingDelegationsRequest>): _71.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _71.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorUnbondingDelegationsResponse>): _71.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _71.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryRedelegationsRequest;
                fromPartial(object: Partial<_71.QueryRedelegationsRequest>): _71.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _71.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryRedelegationsResponse;
                fromPartial(object: Partial<_71.QueryRedelegationsResponse>): _71.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _71.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorsRequest>): _71.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _71.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorsResponse>): _71.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _71.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorRequest>): _71.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _71.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_71.QueryDelegatorValidatorResponse>): _71.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _71.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_71.QueryHistoricalInfoRequest>): _71.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _71.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_71.QueryHistoricalInfoResponse>): _71.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _71.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.QueryPoolRequest;
                fromPartial(_: Partial<_71.QueryPoolRequest>): _71.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _71.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryPoolResponse;
                fromPartial(object: Partial<_71.QueryPoolResponse>): _71.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.QueryParamsRequest;
                fromPartial(_: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _70.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.LastValidatorPower;
                fromPartial(object: Partial<_70.LastValidatorPower>): _70.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _69.AuthorizationType;
            authorizationTypeToJSON(object: _69.AuthorizationType): string;
            AuthorizationType: typeof _69.AuthorizationType;
            AuthorizationTypeSDKType: typeof _69.AuthorizationType;
            StakeAuthorization: {
                encode(message: _69.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.StakeAuthorization;
                fromPartial(object: Partial<_69.StakeAuthorization>): _69.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _69.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.StakeAuthorization_Validators;
                fromPartial(object: Partial<_69.StakeAuthorization_Validators>): _69.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _74.SignMode;
                signModeToJSON(object: _74.SignMode): string;
                SignMode: typeof _74.SignMode;
                SignModeSDKType: typeof _74.SignMode;
                SignatureDescriptors: {
                    encode(message: _74.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SignatureDescriptors;
                    fromPartial(object: Partial<_74.SignatureDescriptors>): _74.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _74.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SignatureDescriptor;
                    fromPartial(object: Partial<_74.SignatureDescriptor>): _74.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _74.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data>): _74.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _74.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data_Single>): _74.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _74.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_74.SignatureDescriptor_Data_Multi>): _74.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _157.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _75.SimulateRequest): Promise<_75.SimulateResponse>;
                getTx(request: _75.GetTxRequest): Promise<_75.GetTxResponse>;
                broadcastTx(request: _75.BroadcastTxRequest): Promise<_75.BroadcastTxResponse>;
                getTxsEvent(request: _75.GetTxsEventRequest): Promise<_75.GetTxsEventResponse>;
                getBlockWithTxs(request: _75.GetBlockWithTxsRequest): Promise<_75.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _76.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Tx;
                fromPartial(object: Partial<_76.Tx>): _76.Tx;
            };
            TxRaw: {
                encode(message: _76.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TxRaw;
                fromPartial(object: Partial<_76.TxRaw>): _76.TxRaw;
            };
            SignDoc: {
                encode(message: _76.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.SignDoc;
                fromPartial(object: Partial<_76.SignDoc>): _76.SignDoc;
            };
            TxBody: {
                encode(message: _76.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TxBody;
                fromPartial(object: Partial<_76.TxBody>): _76.TxBody;
            };
            AuthInfo: {
                encode(message: _76.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.AuthInfo;
                fromPartial(object: Partial<_76.AuthInfo>): _76.AuthInfo;
            };
            SignerInfo: {
                encode(message: _76.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.SignerInfo;
                fromPartial(object: Partial<_76.SignerInfo>): _76.SignerInfo;
            };
            ModeInfo: {
                encode(message: _76.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModeInfo;
                fromPartial(object: Partial<_76.ModeInfo>): _76.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _76.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModeInfo_Single;
                fromPartial(object: Partial<_76.ModeInfo_Single>): _76.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _76.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModeInfo_Multi;
                fromPartial(object: Partial<_76.ModeInfo_Multi>): _76.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _76.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Fee;
                fromPartial(object: Partial<_76.Fee>): _76.Fee;
            };
            orderByFromJSON(object: any): _75.OrderBy;
            orderByToJSON(object: _75.OrderBy): string;
            broadcastModeFromJSON(object: any): _75.BroadcastMode;
            broadcastModeToJSON(object: _75.BroadcastMode): string;
            OrderBy: typeof _75.OrderBy;
            OrderBySDKType: typeof _75.OrderBy;
            BroadcastMode: typeof _75.BroadcastMode;
            BroadcastModeSDKType: typeof _75.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _75.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetTxsEventRequest;
                fromPartial(object: Partial<_75.GetTxsEventRequest>): _75.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _75.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetTxsEventResponse;
                fromPartial(object: Partial<_75.GetTxsEventResponse>): _75.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _75.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.BroadcastTxRequest;
                fromPartial(object: Partial<_75.BroadcastTxRequest>): _75.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _75.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.BroadcastTxResponse;
                fromPartial(object: Partial<_75.BroadcastTxResponse>): _75.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _75.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SimulateRequest;
                fromPartial(object: Partial<_75.SimulateRequest>): _75.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _75.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SimulateResponse;
                fromPartial(object: Partial<_75.SimulateResponse>): _75.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _75.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetTxRequest;
                fromPartial(object: Partial<_75.GetTxRequest>): _75.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _75.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetTxResponse;
                fromPartial(object: Partial<_75.GetTxResponse>): _75.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _75.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_75.GetBlockWithTxsRequest>): _75.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _75.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_75.GetBlockWithTxsResponse>): _75.GetBlockWithTxsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
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
            PermanentLockedAccount: {
                encode(message: _78.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.PermanentLockedAccount;
                fromPartial(object: Partial<_78.PermanentLockedAccount>): _78.PermanentLockedAccount;
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
                authz: {
                    v1beta1: _159.MsgClientImpl;
                };
                bank: {
                    v1beta1: _160.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _161.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _162.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _163.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _164.MsgClientImpl;
                };
                gov: {
                    v1beta1: _165.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _166.MsgClientImpl;
                };
                staking: {
                    v1beta1: _167.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _168.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                        account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                        granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                        granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                        allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                        spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                        supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _18.ConfigRequest): Promise<_18.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                            getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                            getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                            getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _45.QueryValidatorOutstandingRewardsRequest): Promise<_45.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _45.QueryValidatorCommissionRequest): Promise<_45.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _45.QueryValidatorSlashesRequest): Promise<_45.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _45.QueryDelegationRewardsRequest): Promise<_45.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _45.QueryDelegationTotalRewardsRequest): Promise<_45.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _45.QueryDelegatorValidatorsRequest): Promise<_45.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _45.QueryDelegatorWithdrawAddressRequest): Promise<_45.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _45.QueryCommunityPoolRequest): Promise<_45.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _49.QueryEvidenceRequest): Promise<_49.QueryEvidenceResponse>;
                        allEvidence(request?: _49.QueryAllEvidenceRequest): Promise<_49.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _53.QueryAllowanceRequest): Promise<_53.QueryAllowanceResponse>;
                        allowances(request: _53.QueryAllowancesRequest): Promise<_53.QueryAllowancesResponse>;
                        allowancesByGranter(request: _53.QueryAllowancesByGranterRequest): Promise<_53.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        inflation(request?: _62.QueryInflationRequest): Promise<_62.QueryInflationResponse>;
                        annualProvisions(request?: _62.QueryAnnualProvisionsRequest): Promise<_62.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        signingInfo(request: _66.QuerySigningInfoRequest): Promise<_66.QuerySigningInfoResponse>;
                        signingInfos(request?: _66.QuerySigningInfosRequest): Promise<_66.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _71.QueryValidatorsRequest): Promise<_71.QueryValidatorsResponse>;
                        validator(request: _71.QueryValidatorRequest): Promise<_71.QueryValidatorResponse>;
                        validatorDelegations(request: _71.QueryValidatorDelegationsRequest): Promise<_71.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _71.QueryValidatorUnbondingDelegationsRequest): Promise<_71.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _71.QueryDelegationRequest): Promise<_71.QueryDelegationResponse>;
                        unbondingDelegation(request: _71.QueryUnbondingDelegationRequest): Promise<_71.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _71.QueryDelegatorDelegationsRequest): Promise<_71.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _71.QueryDelegatorUnbondingDelegationsRequest): Promise<_71.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _71.QueryRedelegationsRequest): Promise<_71.QueryRedelegationsResponse>;
                        delegatorValidators(request: _71.QueryDelegatorValidatorsRequest): Promise<_71.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _71.QueryDelegatorValidatorRequest): Promise<_71.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _71.QueryHistoricalInfoRequest): Promise<_71.QueryHistoricalInfoResponse>;
                        pool(request?: _71.QueryPoolRequest): Promise<_71.QueryPoolResponse>;
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _75.SimulateRequest): Promise<_75.SimulateResponse>;
                        getTx(request: _75.GetTxRequest): Promise<_75.GetTxResponse>;
                        broadcastTx(request: _75.BroadcastTxRequest): Promise<_75.BroadcastTxResponse>;
                        getTxsEvent(request: _75.GetTxsEventRequest): Promise<_75.GetTxsEventResponse>;
                        getBlockWithTxs(request: _75.GetBlockWithTxsRequest): Promise<_75.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _26.QueryCurrentPlanRequest): Promise<_26.QueryCurrentPlanResponse>;
                        appliedPlan(request: _26.QueryAppliedPlanRequest): Promise<_26.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _26.QueryUpgradedConsensusStateRequest): Promise<_26.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _26.QueryModuleVersionsRequest): Promise<_26.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
