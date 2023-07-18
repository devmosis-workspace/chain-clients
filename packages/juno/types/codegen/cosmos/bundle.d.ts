import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/node/v1beta1/query";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/tendermint/v1beta1/query";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/gov";
import * as _54 from "./gov/v1beta1/query";
import * as _55 from "./gov/v1beta1/tx";
import * as _56 from "./mint/v1beta1/genesis";
import * as _57 from "./mint/v1beta1/mint";
import * as _58 from "./mint/v1beta1/query";
import * as _59 from "./params/v1beta1/params";
import * as _60 from "./params/v1beta1/query";
import * as _61 from "./slashing/v1beta1/genesis";
import * as _62 from "./slashing/v1beta1/query";
import * as _63 from "./slashing/v1beta1/slashing";
import * as _64 from "./slashing/v1beta1/tx";
import * as _65 from "./staking/v1beta1/authz";
import * as _66 from "./staking/v1beta1/genesis";
import * as _67 from "./staking/v1beta1/query";
import * as _68 from "./staking/v1beta1/staking";
import * as _69 from "./staking/v1beta1/tx";
import * as _70 from "./tx/signing/v1beta1/signing";
import * as _71 from "./tx/v1beta1/service";
import * as _72 from "./tx/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/query";
import * as _74 from "./upgrade/v1beta1/upgrade";
import * as _75 from "./vesting/v1beta1/tx";
import * as _76 from "./vesting/v1beta1/vesting";
import * as _135 from "./auth/v1beta1/query.lcd";
import * as _136 from "./authz/v1beta1/query.lcd";
import * as _137 from "./bank/v1beta1/query.lcd";
import * as _138 from "./base/node/v1beta1/query.lcd";
import * as _139 from "./base/tendermint/v1beta1/query.lcd";
import * as _140 from "./distribution/v1beta1/query.lcd";
import * as _141 from "./evidence/v1beta1/query.lcd";
import * as _142 from "./feegrant/v1beta1/query.lcd";
import * as _143 from "./gov/v1beta1/query.lcd";
import * as _144 from "./mint/v1beta1/query.lcd";
import * as _145 from "./params/v1beta1/query.lcd";
import * as _146 from "./slashing/v1beta1/query.lcd";
import * as _147 from "./staking/v1beta1/query.lcd";
import * as _148 from "./tx/v1beta1/service.lcd";
import * as _149 from "./upgrade/v1beta1/query.lcd";
import * as _150 from "./auth/v1beta1/query.rpc.Query";
import * as _151 from "./authz/v1beta1/query.rpc.Query";
import * as _152 from "./bank/v1beta1/query.rpc.Query";
import * as _153 from "./base/node/v1beta1/query.rpc.Service";
import * as _154 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _155 from "./distribution/v1beta1/query.rpc.Query";
import * as _156 from "./evidence/v1beta1/query.rpc.Query";
import * as _157 from "./feegrant/v1beta1/query.rpc.Query";
import * as _158 from "./gov/v1beta1/query.rpc.Query";
import * as _159 from "./mint/v1beta1/query.rpc.Query";
import * as _160 from "./params/v1beta1/query.rpc.Query";
import * as _161 from "./slashing/v1beta1/query.rpc.Query";
import * as _162 from "./staking/v1beta1/query.rpc.Query";
import * as _163 from "./tx/v1beta1/service.rpc.Service";
import * as _164 from "./upgrade/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/tx.rpc.msg";
import * as _166 from "./bank/v1beta1/tx.rpc.msg";
import * as _167 from "./crisis/v1beta1/tx.rpc.msg";
import * as _168 from "./distribution/v1beta1/tx.rpc.msg";
import * as _169 from "./evidence/v1beta1/tx.rpc.msg";
import * as _170 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _171 from "./gov/v1beta1/tx.rpc.msg";
import * as _172 from "./slashing/v1beta1/tx.rpc.msg";
import * as _173 from "./staking/v1beta1/tx.rpc.msg";
import * as _174 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountsRequest;
                fromPartial(object: Partial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountsResponse;
                fromPartial(object: Partial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountRequest;
                fromPartial(object: Partial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountResponse;
                fromPartial(object: Partial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.BaseAccount;
                fromPartial(object: Partial<_7.BaseAccount>): _7.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ModuleAccount;
                fromPartial(object: Partial<_7.ModuleAccount>): _7.ModuleAccount;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _14.MsgGrant) => {
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
                    }) => _14.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _14.MsgExec) => {
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
                    }) => _14.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _14.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _14.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _14.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgGrant;
                fromPartial(object: Partial<_14.MsgGrant>): _14.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _14.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgExecResponse;
                fromPartial(object: Partial<_14.MsgExecResponse>): _14.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _14.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgExec;
                fromPartial(object: Partial<_14.MsgExec>): _14.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _14.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgGrantResponse;
                fromPartial(_: Partial<_14.MsgGrantResponse>): _14.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _14.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgRevoke;
                fromPartial(object: Partial<_14.MsgRevoke>): _14.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _14.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgRevokeResponse;
                fromPartial(_: Partial<_14.MsgRevokeResponse>): _14.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _13.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGrantsRequest;
                fromPartial(object: Partial<_13.QueryGrantsRequest>): _13.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _13.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGrantsResponse;
                fromPartial(object: Partial<_13.QueryGrantsResponse>): _13.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _13.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_13.QueryGranterGrantsRequest>): _13.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _13.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_13.QueryGranterGrantsResponse>): _13.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _13.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_13.QueryGranteeGrantsRequest>): _13.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _13.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_13.QueryGranteeGrantsResponse>): _13.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            };
            EventGrant: {
                encode(message: _11.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.EventGrant;
                fromPartial(object: Partial<_11.EventGrant>): _11.EventGrant;
            };
            EventRevoke: {
                encode(message: _11.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.EventRevoke;
                fromPartial(object: Partial<_11.EventRevoke>): _11.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _10.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GenericAuthorization;
                fromPartial(object: Partial<_10.GenericAuthorization>): _10.GenericAuthorization;
            };
            Grant: {
                encode(message: _10.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Grant;
                fromPartial(object: Partial<_10.Grant>): _10.Grant;
            };
            GrantAuthorization: {
                encode(message: _10.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GrantAuthorization;
                fromPartial(object: Partial<_10.GrantAuthorization>): _10.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _19.MsgSend) => {
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
                    }) => _19.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _19.MsgMultiSend) => {
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
                    }) => _19.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _19.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgSend;
                fromPartial(object: Partial<_19.MsgSend>): _19.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _19.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgSendResponse;
                fromPartial(_: Partial<_19.MsgSendResponse>): _19.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _19.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgMultiSend;
                fromPartial(object: Partial<_19.MsgMultiSend>): _19.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _19.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgMultiSendResponse;
                fromPartial(_: Partial<_19.MsgMultiSendResponse>): _19.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _18.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryBalanceRequest;
                fromPartial(object: Partial<_18.QueryBalanceRequest>): _18.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _18.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryBalanceResponse;
                fromPartial(object: Partial<_18.QueryBalanceResponse>): _18.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _18.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryAllBalancesRequest;
                fromPartial(object: Partial<_18.QueryAllBalancesRequest>): _18.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _18.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryAllBalancesResponse;
                fromPartial(object: Partial<_18.QueryAllBalancesResponse>): _18.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _18.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_18.QuerySpendableBalancesRequest>): _18.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _18.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_18.QuerySpendableBalancesResponse>): _18.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _18.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_18.QueryTotalSupplyRequest>): _18.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _18.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_18.QueryTotalSupplyResponse>): _18.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _18.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QuerySupplyOfRequest;
                fromPartial(object: Partial<_18.QuerySupplyOfRequest>): _18.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _18.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QuerySupplyOfResponse;
                fromPartial(object: Partial<_18.QuerySupplyOfResponse>): _18.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _18.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_18.QueryDenomsMetadataRequest>): _18.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _18.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_18.QueryDenomsMetadataResponse>): _18.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _18.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_18.QueryDenomMetadataRequest>): _18.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _18.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_18.QueryDenomMetadataResponse>): _18.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
            };
            Balance: {
                encode(message: _17.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Balance;
                fromPartial(object: Partial<_17.Balance>): _17.Balance;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
            };
            SendEnabled: {
                encode(message: _16.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.SendEnabled;
                fromPartial(object: Partial<_16.SendEnabled>): _16.SendEnabled;
            };
            Input: {
                encode(message: _16.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Input;
                fromPartial(object: Partial<_16.Input>): _16.Input;
            };
            Output: {
                encode(message: _16.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Output;
                fromPartial(object: Partial<_16.Output>): _16.Output;
            };
            Supply: {
                encode(message: _16.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Supply;
                fromPartial(object: Partial<_16.Supply>): _16.Supply;
            };
            DenomUnit: {
                encode(message: _16.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.DenomUnit;
                fromPartial(object: Partial<_16.DenomUnit>): _16.DenomUnit;
            };
            Metadata: {
                encode(message: _16.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Metadata;
                fromPartial(object: Partial<_16.Metadata>): _16.Metadata;
            };
            SendAuthorization: {
                encode(message: _15.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SendAuthorization;
                fromPartial(object: Partial<_15.SendAuthorization>): _15.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _20.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.TxResponse;
                    fromPartial(object: Partial<_20.TxResponse>): _20.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _20.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.ABCIMessageLog;
                    fromPartial(object: Partial<_20.ABCIMessageLog>): _20.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _20.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.StringEvent;
                    fromPartial(object: Partial<_20.StringEvent>): _20.StringEvent;
                };
                Attribute: {
                    encode(message: _20.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.Attribute;
                    fromPartial(object: Partial<_20.Attribute>): _20.Attribute;
                };
                GasInfo: {
                    encode(message: _20.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.GasInfo;
                    fromPartial(object: Partial<_20.GasInfo>): _20.GasInfo;
                };
                Result: {
                    encode(message: _20.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.Result;
                    fromPartial(object: Partial<_20.Result>): _20.Result;
                };
                SimulationResponse: {
                    encode(message: _20.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.SimulationResponse;
                    fromPartial(object: Partial<_20.SimulationResponse>): _20.SimulationResponse;
                };
                MsgData: {
                    encode(message: _20.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgData;
                    fromPartial(object: Partial<_20.MsgData>): _20.MsgData;
                };
                TxMsgData: {
                    encode(message: _20.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.TxMsgData;
                    fromPartial(object: Partial<_20.TxMsgData>): _20.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _20.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.SearchTxsResult;
                    fromPartial(object: Partial<_20.SearchTxsResult>): _20.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _21.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Pairs;
                    fromPartial(object: Partial<_21.Pairs>): _21.Pairs;
                };
                Pair: {
                    encode(message: _21.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Pair;
                    fromPartial(object: Partial<_21.Pair>): _21.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _153.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                };
                LCDQueryClient: typeof _138.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _22.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.ConfigRequest;
                    fromPartial(_: Partial<_22.ConfigRequest>): _22.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _22.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.ConfigResponse;
                    fromPartial(object: Partial<_22.ConfigResponse>): _22.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _23.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.PageRequest;
                    fromPartial(object: Partial<_23.PageRequest>): _23.PageRequest;
                };
                PageResponse: {
                    encode(message: _23.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.PageResponse;
                    fromPartial(object: Partial<_23.PageResponse>): _23.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _24.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _24.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_24.ListAllInterfacesRequest>): _24.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _24.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_24.ListAllInterfacesResponse>): _24.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _24.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.ListImplementationsRequest;
                    fromPartial(object: Partial<_24.ListImplementationsRequest>): _24.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _24.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.ListImplementationsResponse;
                    fromPartial(object: Partial<_24.ListImplementationsResponse>): _24.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _25.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.AppDescriptor;
                    fromPartial(object: Partial<_25.AppDescriptor>): _25.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _25.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.TxDescriptor;
                    fromPartial(object: Partial<_25.TxDescriptor>): _25.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _25.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.AuthnDescriptor;
                    fromPartial(object: Partial<_25.AuthnDescriptor>): _25.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _25.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.SigningModeDescriptor;
                    fromPartial(object: Partial<_25.SigningModeDescriptor>): _25.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _25.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ChainDescriptor;
                    fromPartial(object: Partial<_25.ChainDescriptor>): _25.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _25.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.CodecDescriptor;
                    fromPartial(object: Partial<_25.CodecDescriptor>): _25.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _25.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.InterfaceDescriptor;
                    fromPartial(object: Partial<_25.InterfaceDescriptor>): _25.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _25.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_25.InterfaceImplementerDescriptor>): _25.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _25.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_25.InterfaceAcceptingMessageDescriptor>): _25.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _25.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ConfigurationDescriptor;
                    fromPartial(object: Partial<_25.ConfigurationDescriptor>): _25.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _25.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.MsgDescriptor;
                    fromPartial(object: Partial<_25.MsgDescriptor>): _25.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _25.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_25.GetAuthnDescriptorRequest>): _25.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _25.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_25.GetAuthnDescriptorResponse>): _25.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _25.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_25.GetChainDescriptorRequest>): _25.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _25.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_25.GetChainDescriptorResponse>): _25.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _25.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_25.GetCodecDescriptorRequest>): _25.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _25.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_25.GetCodecDescriptorResponse>): _25.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _25.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_25.GetConfigurationDescriptorRequest>): _25.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _25.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_25.GetConfigurationDescriptorResponse>): _25.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _25.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_25.GetQueryServicesDescriptorRequest>): _25.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _25.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_25.GetQueryServicesDescriptorResponse>): _25.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _25.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_25.GetTxDescriptorRequest>): _25.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _25.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_25.GetTxDescriptorResponse>): _25.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _25.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.QueryServicesDescriptor;
                    fromPartial(object: Partial<_25.QueryServicesDescriptor>): _25.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _25.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.QueryServiceDescriptor;
                    fromPartial(object: Partial<_25.QueryServiceDescriptor>): _25.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _25.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.QueryMethodDescriptor;
                    fromPartial(object: Partial<_25.QueryMethodDescriptor>): _25.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _26.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.Snapshot;
                    fromPartial(object: Partial<_26.Snapshot>): _26.Snapshot;
                };
                Metadata: {
                    encode(message: _26.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.Metadata;
                    fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
                };
                SnapshotItem: {
                    encode(message: _26.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SnapshotItem;
                    fromPartial(object: Partial<_26.SnapshotItem>): _26.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _26.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SnapshotStoreItem;
                    fromPartial(object: Partial<_26.SnapshotStoreItem>): _26.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _26.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SnapshotIAVLItem;
                    fromPartial(object: Partial<_26.SnapshotIAVLItem>): _26.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _26.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_26.SnapshotExtensionMeta>): _26.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _26.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_26.SnapshotExtensionPayload>): _26.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _28.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.StoreKVPair;
                    fromPartial(object: Partial<_28.StoreKVPair>): _28.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _28.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.BlockMetadata;
                    fromPartial(object: Partial<_28.BlockMetadata>): _28.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _28.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_28.BlockMetadata_DeliverTx>): _28.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _27.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.CommitInfo;
                    fromPartial(object: Partial<_27.CommitInfo>): _27.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _27.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.StoreInfo;
                    fromPartial(object: Partial<_27.StoreInfo>): _27.StoreInfo;
                };
                CommitID: {
                    encode(message: _27.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.CommitID;
                    fromPartial(object: Partial<_27.CommitID>): _27.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _154.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                    getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                    getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                    getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _139.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _29.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightRequest>): _29.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _29.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightResponse>): _29.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _29.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetRequest>): _29.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _29.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetResponse>): _29.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _29.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Validator;
                    fromPartial(object: Partial<_29.Validator>): _29.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _29.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_29.GetBlockByHeightRequest>): _29.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _29.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_29.GetBlockByHeightResponse>): _29.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _29.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetLatestBlockRequest;
                    fromPartial(_: Partial<_29.GetLatestBlockRequest>): _29.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _29.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetLatestBlockResponse;
                    fromPartial(object: Partial<_29.GetLatestBlockResponse>): _29.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _29.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetSyncingRequest;
                    fromPartial(_: Partial<_29.GetSyncingRequest>): _29.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _29.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetSyncingResponse;
                    fromPartial(object: Partial<_29.GetSyncingResponse>): _29.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _29.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetNodeInfoRequest;
                    fromPartial(_: Partial<_29.GetNodeInfoRequest>): _29.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _29.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetNodeInfoResponse;
                    fromPartial(object: Partial<_29.GetNodeInfoResponse>): _29.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _29.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.VersionInfo;
                    fromPartial(object: Partial<_29.VersionInfo>): _29.VersionInfo;
                };
                Module: {
                    encode(message: _29.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Module;
                    fromPartial(object: Partial<_29.Module>): _29.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Coin;
                fromPartial(object: Partial<_30.Coin>): _30.Coin;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.DecCoin;
                fromPartial(object: Partial<_30.DecCoin>): _30.DecCoin;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.IntProto;
                fromPartial(object: Partial<_30.IntProto>): _30.IntProto;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.DecProto;
                fromPartial(object: Partial<_30.DecProto>): _30.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _32.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisOwners;
                fromPartial(object: Partial<_32.GenesisOwners>): _32.GenesisOwners;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            Capability: {
                encode(message: _31.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Capability;
                fromPartial(object: Partial<_31.Capability>): _31.Capability;
            };
            Owner: {
                encode(message: _31.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Owner;
                fromPartial(object: Partial<_31.Owner>): _31.Owner;
            };
            CapabilityOwners: {
                encode(message: _31.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.CapabilityOwners;
                fromPartial(object: Partial<_31.CapabilityOwners>): _31.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _34.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _34.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _34.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgVerifyInvariant;
                fromPartial(object: Partial<_34.MsgVerifyInvariant>): _34.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _34.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_34.MsgVerifyInvariantResponse>): _34.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GenesisState;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.PubKey;
                fromPartial(object: Partial<_35.PubKey>): _35.PubKey;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.PrivKey;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.LegacyAminoPubKey;
                fromPartial(object: Partial<_36.LegacyAminoPubKey>): _36.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.PubKey;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.PrivKey;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.PubKey;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.PrivKey;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _42.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _42.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _42.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _42.MsgFundCommunityPool) => {
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
                    }) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_42.MsgSetWithdrawAddress>): _42.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_42.MsgSetWithdrawAddressResponse>): _42.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorReward>): _42.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommission>): _42.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgFundCommunityPool;
                fromPartial(object: Partial<_42.MsgFundCommunityPool>): _42.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_42.MsgFundCommunityPoolResponse>): _42.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.QueryParamsRequest;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryParamsResponse;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsRequest>): _41.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsResponse>): _41.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_41.QueryValidatorCommissionRequest>): _41.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_41.QueryValidatorCommissionResponse>): _41.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_41.QueryValidatorSlashesRequest>): _41.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_41.QueryValidatorSlashesResponse>): _41.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationRewardsRequest>): _41.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationRewardsResponse>): _41.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsRequest>): _41.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsResponse>): _41.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsRequest>): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsResponse>): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressRequest>): _41.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressResponse>): _41.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_41.QueryCommunityPoolRequest>): _41.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_41.QueryCommunityPoolResponse>): _41.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_40.DelegatorWithdrawInfo>): _40.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorOutstandingRewardsRecord>): _40.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_40.ValidatorAccumulatedCommissionRecord>): _40.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorHistoricalRewardsRecord>): _40.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorCurrentRewardsRecord>): _40.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_40.DelegatorStartingInfoRecord>): _40.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_40.ValidatorSlashEventRecord>): _40.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewards>): _39.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorCurrentRewards;
                fromPartial(object: Partial<_39.ValidatorCurrentRewards>): _39.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommission>): _39.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewards>): _39.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorSlashEvent;
                fromPartial(object: Partial<_39.ValidatorSlashEvent>): _39.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorSlashEvents;
                fromPartial(object: Partial<_39.ValidatorSlashEvents>): _39.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.FeePool;
                fromPartial(object: Partial<_39.FeePool>): _39.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposal>): _39.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DelegatorStartingInfo;
                fromPartial(object: Partial<_39.DelegatorStartingInfo>): _39.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DelegationDelegatorReward;
                fromPartial(object: Partial<_39.DelegationDelegatorReward>): _39.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposalWithDeposit>): _39.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _46.MsgSubmitEvidence) => {
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
                    }) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgSubmitEvidence;
                fromPartial(object: Partial<_46.MsgSubmitEvidence>): _46.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_46.MsgSubmitEvidenceResponse>): _46.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryEvidenceRequest;
                fromPartial(object: Partial<_45.QueryEvidenceRequest>): _45.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryEvidenceResponse;
                fromPartial(object: Partial<_45.QueryEvidenceResponse>): _45.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_45.QueryAllEvidenceRequest>): _45.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_45.QueryAllEvidenceResponse>): _45.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.Equivocation;
                fromPartial(object: Partial<_43.Equivocation>): _43.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _50.MsgGrantAllowance) => {
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
                    }) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _50.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgGrantAllowance;
                fromPartial(object: Partial<_50.MsgGrantAllowance>): _50.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_50.MsgGrantAllowanceResponse>): _50.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgRevokeAllowance;
                fromPartial(object: Partial<_50.MsgRevokeAllowance>): _50.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_50.MsgRevokeAllowanceResponse>): _50.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowanceRequest;
                fromPartial(object: Partial<_49.QueryAllowanceRequest>): _49.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowanceResponse;
                fromPartial(object: Partial<_49.QueryAllowanceResponse>): _49.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesRequest;
                fromPartial(object: Partial<_49.QueryAllowancesRequest>): _49.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesResponse;
                fromPartial(object: Partial<_49.QueryAllowancesResponse>): _49.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterRequest>): _49.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterResponse>): _49.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.BasicAllowance;
                fromPartial(object: Partial<_47.BasicAllowance>): _47.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.PeriodicAllowance;
                fromPartial(object: Partial<_47.PeriodicAllowance>): _47.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AllowedMsgAllowance;
                fromPartial(object: Partial<_47.AllowedMsgAllowance>): _47.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _47.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Grant;
                fromPartial(object: Partial<_47.Grant>): _47.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _55.MsgSubmitProposal) => {
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
                    }) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _55.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _55.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _55.MsgVoteWeighted) => {
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
                    }) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _55.MsgDeposit) => {
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
                    }) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSubmitProposal;
                fromPartial(object: Partial<_55.MsgSubmitProposal>): _55.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_55.MsgSubmitProposalResponse>): _55.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgVote;
                fromPartial(object: Partial<_55.MsgVote>): _55.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgVoteResponse;
                fromPartial(_: Partial<_55.MsgVoteResponse>): _55.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgVoteWeighted;
                fromPartial(object: Partial<_55.MsgVoteWeighted>): _55.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_55.MsgVoteWeightedResponse>): _55.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgDeposit;
                fromPartial(object: Partial<_55.MsgDeposit>): _55.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgDepositResponse;
                fromPartial(_: Partial<_55.MsgDepositResponse>): _55.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalRequest;
                fromPartial(object: Partial<_54.QueryProposalRequest>): _54.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalResponse;
                fromPartial(object: Partial<_54.QueryProposalResponse>): _54.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalsRequest;
                fromPartial(object: Partial<_54.QueryProposalsRequest>): _54.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalsResponse;
                fromPartial(object: Partial<_54.QueryProposalsResponse>): _54.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVoteRequest;
                fromPartial(object: Partial<_54.QueryVoteRequest>): _54.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVoteResponse;
                fromPartial(object: Partial<_54.QueryVoteResponse>): _54.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVotesRequest;
                fromPartial(object: Partial<_54.QueryVotesRequest>): _54.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVotesResponse;
                fromPartial(object: Partial<_54.QueryVotesResponse>): _54.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsRequest;
                fromPartial(object: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositRequest;
                fromPartial(object: Partial<_54.QueryDepositRequest>): _54.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositResponse;
                fromPartial(object: Partial<_54.QueryDepositResponse>): _54.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositsRequest;
                fromPartial(object: Partial<_54.QueryDepositsRequest>): _54.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositsResponse;
                fromPartial(object: Partial<_54.QueryDepositsResponse>): _54.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTallyResultRequest;
                fromPartial(object: Partial<_54.QueryTallyResultRequest>): _54.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTallyResultResponse;
                fromPartial(object: Partial<_54.QueryTallyResultResponse>): _54.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.WeightedVoteOption;
                fromPartial(object: Partial<_53.WeightedVoteOption>): _53.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _53.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TextProposal;
                fromPartial(object: Partial<_53.TextProposal>): _53.TextProposal;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Deposit;
                fromPartial(object: Partial<_53.Deposit>): _53.Deposit;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Proposal;
                fromPartial(object: Partial<_53.Proposal>): _53.Proposal;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TallyResult;
                fromPartial(object: Partial<_53.TallyResult>): _53.TallyResult;
            };
            Vote: {
                encode(message: _53.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Vote;
                fromPartial(object: Partial<_53.Vote>): _53.Vote;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DepositParams;
                fromPartial(object: Partial<_53.DepositParams>): _53.DepositParams;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.VotingParams;
                fromPartial(object: Partial<_53.VotingParams>): _53.VotingParams;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TallyParams;
                fromPartial(object: Partial<_53.TallyParams>): _53.TallyParams;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                inflation(request?: _58.QueryInflationRequest): Promise<_58.QueryInflationResponse>;
                annualProvisions(request?: _58.QueryAnnualProvisionsRequest): Promise<_58.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.QueryParamsRequest;
                fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _58.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.QueryInflationRequest;
                fromPartial(_: Partial<_58.QueryInflationRequest>): _58.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _58.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryInflationResponse;
                fromPartial(object: Partial<_58.QueryInflationResponse>): _58.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _58.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_58.QueryAnnualProvisionsRequest>): _58.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _58.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_58.QueryAnnualProvisionsResponse>): _58.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _57.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Minter;
                fromPartial(object: Partial<_57.Minter>): _57.Minter;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryParamsRequest;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _59.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.ParameterChangeProposal;
                fromPartial(object: Partial<_59.ParameterChangeProposal>): _59.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _59.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.ParamChange;
                fromPartial(object: Partial<_59.ParamChange>): _59.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                signingInfo(request: _62.QuerySigningInfoRequest): Promise<_62.QuerySigningInfoResponse>;
                signingInfos(request?: _62.QuerySigningInfosRequest): Promise<_62.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _64.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _64.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _64.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgUnjail;
                fromPartial(object: Partial<_64.MsgUnjail>): _64.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _64.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgUnjailResponse;
                fromPartial(_: Partial<_64.MsgUnjailResponse>): _64.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _63.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorSigningInfo;
                fromPartial(object: Partial<_63.ValidatorSigningInfo>): _63.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _63.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Params;
                fromPartial(object: Partial<_63.Params>): _63.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _62.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QuerySigningInfoRequest;
                fromPartial(object: Partial<_62.QuerySigningInfoRequest>): _62.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _62.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QuerySigningInfoResponse;
                fromPartial(object: Partial<_62.QuerySigningInfoResponse>): _62.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _62.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QuerySigningInfosRequest;
                fromPartial(object: Partial<_62.QuerySigningInfosRequest>): _62.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _62.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QuerySigningInfosResponse;
                fromPartial(object: Partial<_62.QuerySigningInfosResponse>): _62.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            SigningInfo: {
                encode(message: _61.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.SigningInfo;
                fromPartial(object: Partial<_61.SigningInfo>): _61.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _61.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.ValidatorMissedBlocks;
                fromPartial(object: Partial<_61.ValidatorMissedBlocks>): _61.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _61.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MissedBlock;
                fromPartial(object: Partial<_61.MissedBlock>): _61.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _67.QueryValidatorsRequest): Promise<_67.QueryValidatorsResponse>;
                validator(request: _67.QueryValidatorRequest): Promise<_67.QueryValidatorResponse>;
                validatorDelegations(request: _67.QueryValidatorDelegationsRequest): Promise<_67.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _67.QueryValidatorUnbondingDelegationsRequest): Promise<_67.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _67.QueryDelegationRequest): Promise<_67.QueryDelegationResponse>;
                unbondingDelegation(request: _67.QueryUnbondingDelegationRequest): Promise<_67.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _67.QueryDelegatorDelegationsRequest): Promise<_67.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _67.QueryDelegatorUnbondingDelegationsRequest): Promise<_67.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _67.QueryRedelegationsRequest): Promise<_67.QueryRedelegationsResponse>;
                delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _67.QueryDelegatorValidatorRequest): Promise<_67.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _67.QueryHistoricalInfoRequest): Promise<_67.QueryHistoricalInfoResponse>;
                pool(request?: _67.QueryPoolRequest): Promise<_67.QueryPoolResponse>;
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _69.MsgCreateValidator) => {
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
                    }) => _69.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _69.MsgEditValidator) => {
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
                    }) => _69.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _69.MsgDelegate) => {
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
                    }) => _69.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _69.MsgBeginRedelegate) => {
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
                    }) => _69.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _69.MsgUndelegate) => {
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
                    }) => _69.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _69.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgCreateValidator;
                fromPartial(object: Partial<_69.MsgCreateValidator>): _69.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _69.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_69.MsgCreateValidatorResponse>): _69.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _69.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgEditValidator;
                fromPartial(object: Partial<_69.MsgEditValidator>): _69.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _69.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgEditValidatorResponse;
                fromPartial(_: Partial<_69.MsgEditValidatorResponse>): _69.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _69.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgDelegate;
                fromPartial(object: Partial<_69.MsgDelegate>): _69.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _69.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgDelegateResponse;
                fromPartial(_: Partial<_69.MsgDelegateResponse>): _69.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _69.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgBeginRedelegate;
                fromPartial(object: Partial<_69.MsgBeginRedelegate>): _69.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _69.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_69.MsgBeginRedelegateResponse>): _69.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _69.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgUndelegate;
                fromPartial(object: Partial<_69.MsgUndelegate>): _69.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _69.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgUndelegateResponse;
                fromPartial(object: Partial<_69.MsgUndelegateResponse>): _69.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _68.BondStatus;
            bondStatusToJSON(object: _68.BondStatus): string;
            BondStatus: typeof _68.BondStatus;
            BondStatusSDKType: typeof _68.BondStatus;
            HistoricalInfo: {
                encode(message: _68.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.HistoricalInfo;
                fromPartial(object: Partial<_68.HistoricalInfo>): _68.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _68.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.CommissionRates;
                fromPartial(object: Partial<_68.CommissionRates>): _68.CommissionRates;
            };
            Commission: {
                encode(message: _68.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Commission;
                fromPartial(object: Partial<_68.Commission>): _68.Commission;
            };
            Description: {
                encode(message: _68.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Description;
                fromPartial(object: Partial<_68.Description>): _68.Description;
            };
            Validator: {
                encode(message: _68.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Validator;
                fromPartial(object: Partial<_68.Validator>): _68.Validator;
            };
            ValAddresses: {
                encode(message: _68.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.ValAddresses;
                fromPartial(object: Partial<_68.ValAddresses>): _68.ValAddresses;
            };
            DVPair: {
                encode(message: _68.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DVPair;
                fromPartial(object: Partial<_68.DVPair>): _68.DVPair;
            };
            DVPairs: {
                encode(message: _68.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DVPairs;
                fromPartial(object: Partial<_68.DVPairs>): _68.DVPairs;
            };
            DVVTriplet: {
                encode(message: _68.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DVVTriplet;
                fromPartial(object: Partial<_68.DVVTriplet>): _68.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _68.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DVVTriplets;
                fromPartial(object: Partial<_68.DVVTriplets>): _68.DVVTriplets;
            };
            Delegation: {
                encode(message: _68.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Delegation;
                fromPartial(object: Partial<_68.Delegation>): _68.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _68.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.UnbondingDelegation;
                fromPartial(object: Partial<_68.UnbondingDelegation>): _68.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _68.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.UnbondingDelegationEntry;
                fromPartial(object: Partial<_68.UnbondingDelegationEntry>): _68.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _68.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.RedelegationEntry;
                fromPartial(object: Partial<_68.RedelegationEntry>): _68.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _68.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Redelegation;
                fromPartial(object: Partial<_68.Redelegation>): _68.Redelegation;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Params;
                fromPartial(object: Partial<_68.Params>): _68.Params;
            };
            DelegationResponse: {
                encode(message: _68.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DelegationResponse;
                fromPartial(object: Partial<_68.DelegationResponse>): _68.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _68.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.RedelegationEntryResponse;
                fromPartial(object: Partial<_68.RedelegationEntryResponse>): _68.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _68.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.RedelegationResponse;
                fromPartial(object: Partial<_68.RedelegationResponse>): _68.RedelegationResponse;
            };
            Pool: {
                encode(message: _68.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Pool;
                fromPartial(object: Partial<_68.Pool>): _68.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _67.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorsRequest;
                fromPartial(object: Partial<_67.QueryValidatorsRequest>): _67.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _67.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorsResponse;
                fromPartial(object: Partial<_67.QueryValidatorsResponse>): _67.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _67.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorRequest;
                fromPartial(object: Partial<_67.QueryValidatorRequest>): _67.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _67.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorResponse;
                fromPartial(object: Partial<_67.QueryValidatorResponse>): _67.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _67.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_67.QueryValidatorDelegationsRequest>): _67.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _67.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_67.QueryValidatorDelegationsResponse>): _67.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _67.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_67.QueryValidatorUnbondingDelegationsRequest>): _67.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _67.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_67.QueryValidatorUnbondingDelegationsResponse>): _67.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _67.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationRequest;
                fromPartial(object: Partial<_67.QueryDelegationRequest>): _67.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _67.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationResponse;
                fromPartial(object: Partial<_67.QueryDelegationResponse>): _67.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _67.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_67.QueryUnbondingDelegationRequest>): _67.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _67.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_67.QueryUnbondingDelegationResponse>): _67.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _67.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorDelegationsRequest>): _67.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _67.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorDelegationsResponse>): _67.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _67.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorUnbondingDelegationsRequest>): _67.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _67.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorUnbondingDelegationsResponse>): _67.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _67.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryRedelegationsRequest;
                fromPartial(object: Partial<_67.QueryRedelegationsRequest>): _67.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _67.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryRedelegationsResponse;
                fromPartial(object: Partial<_67.QueryRedelegationsResponse>): _67.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _67.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsRequest>): _67.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _67.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsResponse>): _67.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _67.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorRequest>): _67.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _67.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorResponse>): _67.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _67.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_67.QueryHistoricalInfoRequest>): _67.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _67.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_67.QueryHistoricalInfoResponse>): _67.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _67.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryPoolRequest;
                fromPartial(_: Partial<_67.QueryPoolRequest>): _67.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _67.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryPoolResponse;
                fromPartial(object: Partial<_67.QueryPoolResponse>): _67.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryParamsRequest;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _66.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.LastValidatorPower;
                fromPartial(object: Partial<_66.LastValidatorPower>): _66.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _65.AuthorizationType;
            authorizationTypeToJSON(object: _65.AuthorizationType): string;
            AuthorizationType: typeof _65.AuthorizationType;
            AuthorizationTypeSDKType: typeof _65.AuthorizationType;
            StakeAuthorization: {
                encode(message: _65.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.StakeAuthorization;
                fromPartial(object: Partial<_65.StakeAuthorization>): _65.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _65.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.StakeAuthorization_Validators;
                fromPartial(object: Partial<_65.StakeAuthorization_Validators>): _65.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _70.SignMode;
                signModeToJSON(object: _70.SignMode): string;
                SignMode: typeof _70.SignMode;
                SignModeSDKType: typeof _70.SignMode;
                SignatureDescriptors: {
                    encode(message: _70.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SignatureDescriptors;
                    fromPartial(object: Partial<_70.SignatureDescriptors>): _70.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _70.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SignatureDescriptor;
                    fromPartial(object: Partial<_70.SignatureDescriptor>): _70.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _70.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data>): _70.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _70.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data_Single>): _70.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _70.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data_Multi>): _70.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _163.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _71.SimulateRequest): Promise<_71.SimulateResponse>;
                getTx(request: _71.GetTxRequest): Promise<_71.GetTxResponse>;
                broadcastTx(request: _71.BroadcastTxRequest): Promise<_71.BroadcastTxResponse>;
                getTxsEvent(request: _71.GetTxsEventRequest): Promise<_71.GetTxsEventResponse>;
                getBlockWithTxs(request: _71.GetBlockWithTxsRequest): Promise<_71.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            Tx: {
                encode(message: _72.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Tx;
                fromPartial(object: Partial<_72.Tx>): _72.Tx;
            };
            TxRaw: {
                encode(message: _72.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.TxRaw;
                fromPartial(object: Partial<_72.TxRaw>): _72.TxRaw;
            };
            SignDoc: {
                encode(message: _72.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.SignDoc;
                fromPartial(object: Partial<_72.SignDoc>): _72.SignDoc;
            };
            TxBody: {
                encode(message: _72.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.TxBody;
                fromPartial(object: Partial<_72.TxBody>): _72.TxBody;
            };
            AuthInfo: {
                encode(message: _72.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.AuthInfo;
                fromPartial(object: Partial<_72.AuthInfo>): _72.AuthInfo;
            };
            SignerInfo: {
                encode(message: _72.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.SignerInfo;
                fromPartial(object: Partial<_72.SignerInfo>): _72.SignerInfo;
            };
            ModeInfo: {
                encode(message: _72.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.ModeInfo;
                fromPartial(object: Partial<_72.ModeInfo>): _72.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _72.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.ModeInfo_Single;
                fromPartial(object: Partial<_72.ModeInfo_Single>): _72.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _72.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.ModeInfo_Multi;
                fromPartial(object: Partial<_72.ModeInfo_Multi>): _72.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _72.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Fee;
                fromPartial(object: Partial<_72.Fee>): _72.Fee;
            };
            orderByFromJSON(object: any): _71.OrderBy;
            orderByToJSON(object: _71.OrderBy): string;
            broadcastModeFromJSON(object: any): _71.BroadcastMode;
            broadcastModeToJSON(object: _71.BroadcastMode): string;
            OrderBy: typeof _71.OrderBy;
            OrderBySDKType: typeof _71.OrderBy;
            BroadcastMode: typeof _71.BroadcastMode;
            BroadcastModeSDKType: typeof _71.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _71.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetTxsEventRequest;
                fromPartial(object: Partial<_71.GetTxsEventRequest>): _71.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _71.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetTxsEventResponse;
                fromPartial(object: Partial<_71.GetTxsEventResponse>): _71.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _71.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.BroadcastTxRequest;
                fromPartial(object: Partial<_71.BroadcastTxRequest>): _71.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _71.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.BroadcastTxResponse;
                fromPartial(object: Partial<_71.BroadcastTxResponse>): _71.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _71.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.SimulateRequest;
                fromPartial(object: Partial<_71.SimulateRequest>): _71.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _71.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.SimulateResponse;
                fromPartial(object: Partial<_71.SimulateResponse>): _71.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _71.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetTxRequest;
                fromPartial(object: Partial<_71.GetTxRequest>): _71.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _71.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetTxResponse;
                fromPartial(object: Partial<_71.GetTxResponse>): _71.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _71.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_71.GetBlockWithTxsRequest>): _71.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _71.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_71.GetBlockWithTxsResponse>): _71.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _73.QueryCurrentPlanRequest): Promise<_73.QueryCurrentPlanResponse>;
                appliedPlan(request: _73.QueryAppliedPlanRequest): Promise<_73.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _73.QueryModuleVersionsRequest): Promise<_73.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            Plan: {
                encode(message: _74.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Plan;
                fromPartial(object: Partial<_74.Plan>): _74.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _74.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_74.SoftwareUpgradeProposal>): _74.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _74.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_74.CancelSoftwareUpgradeProposal>): _74.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _74.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ModuleVersion;
                fromPartial(object: Partial<_74.ModuleVersion>): _74.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _73.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_73.QueryCurrentPlanRequest>): _73.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _73.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_73.QueryCurrentPlanResponse>): _73.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _73.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_73.QueryAppliedPlanRequest>): _73.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _73.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_73.QueryAppliedPlanResponse>): _73.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _73.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_73.QueryUpgradedConsensusStateRequest>): _73.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _73.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_73.QueryUpgradedConsensusStateResponse>): _73.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _73.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_73.QueryModuleVersionsRequest>): _73.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _73.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_73.QueryModuleVersionsResponse>): _73.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _75.MsgCreateVestingAccount) => {
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
                    }) => _75.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _76.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.BaseVestingAccount;
                fromPartial(object: Partial<_76.BaseVestingAccount>): _76.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _76.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ContinuousVestingAccount;
                fromPartial(object: Partial<_76.ContinuousVestingAccount>): _76.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _76.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DelayedVestingAccount;
                fromPartial(object: Partial<_76.DelayedVestingAccount>): _76.DelayedVestingAccount;
            };
            Period: {
                encode(message: _76.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Period;
                fromPartial(object: Partial<_76.Period>): _76.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _76.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.PeriodicVestingAccount;
                fromPartial(object: Partial<_76.PeriodicVestingAccount>): _76.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _76.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.PermanentLockedAccount;
                fromPartial(object: Partial<_76.PermanentLockedAccount>): _76.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _75.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgCreateVestingAccount;
                fromPartial(object: Partial<_75.MsgCreateVestingAccount>): _75.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _75.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_75.MsgCreateVestingAccountResponse>): _75.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _165.MsgClientImpl;
                };
                bank: {
                    v1beta1: _166.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _167.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _168.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _169.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _170.MsgClientImpl;
                };
                gov: {
                    v1beta1: _171.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _172.MsgClientImpl;
                };
                staking: {
                    v1beta1: _173.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _174.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                        granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                        granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                        allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                        spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                        supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                            getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                            getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                            getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        inflation(request?: _58.QueryInflationRequest): Promise<_58.QueryInflationResponse>;
                        annualProvisions(request?: _58.QueryAnnualProvisionsRequest): Promise<_58.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        signingInfo(request: _62.QuerySigningInfoRequest): Promise<_62.QuerySigningInfoResponse>;
                        signingInfos(request?: _62.QuerySigningInfosRequest): Promise<_62.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _67.QueryValidatorsRequest): Promise<_67.QueryValidatorsResponse>;
                        validator(request: _67.QueryValidatorRequest): Promise<_67.QueryValidatorResponse>;
                        validatorDelegations(request: _67.QueryValidatorDelegationsRequest): Promise<_67.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _67.QueryValidatorUnbondingDelegationsRequest): Promise<_67.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _67.QueryDelegationRequest): Promise<_67.QueryDelegationResponse>;
                        unbondingDelegation(request: _67.QueryUnbondingDelegationRequest): Promise<_67.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _67.QueryDelegatorDelegationsRequest): Promise<_67.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _67.QueryDelegatorUnbondingDelegationsRequest): Promise<_67.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _67.QueryRedelegationsRequest): Promise<_67.QueryRedelegationsResponse>;
                        delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _67.QueryDelegatorValidatorRequest): Promise<_67.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _67.QueryHistoricalInfoRequest): Promise<_67.QueryHistoricalInfoResponse>;
                        pool(request?: _67.QueryPoolRequest): Promise<_67.QueryPoolResponse>;
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _71.SimulateRequest): Promise<_71.SimulateResponse>;
                        getTx(request: _71.GetTxRequest): Promise<_71.GetTxResponse>;
                        broadcastTx(request: _71.BroadcastTxRequest): Promise<_71.BroadcastTxResponse>;
                        getTxsEvent(request: _71.GetTxsEventRequest): Promise<_71.GetTxsEventResponse>;
                        getBlockWithTxs(request: _71.GetBlockWithTxsRequest): Promise<_71.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _73.QueryCurrentPlanRequest): Promise<_73.QueryCurrentPlanResponse>;
                        appliedPlan(request: _73.QueryAppliedPlanRequest): Promise<_73.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _73.QueryModuleVersionsRequest): Promise<_73.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _135.LCDQueryClient;
                };
                authz: {
                    v1beta1: _136.LCDQueryClient;
                };
                bank: {
                    v1beta1: _137.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _138.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _139.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _140.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _141.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _142.LCDQueryClient;
                };
                gov: {
                    v1beta1: _143.LCDQueryClient;
                };
                mint: {
                    v1beta1: _144.LCDQueryClient;
                };
                params: {
                    v1beta1: _145.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _146.LCDQueryClient;
                };
                staking: {
                    v1beta1: _147.LCDQueryClient;
                };
                tx: {
                    v1beta1: _148.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _149.LCDQueryClient;
                };
            };
        }>;
    };
}
