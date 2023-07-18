import * as _30 from "./auth/v1beta1/auth";
import * as _31 from "./auth/v1beta1/genesis";
import * as _32 from "./auth/v1beta1/query";
import * as _33 from "./authz/v1beta1/authz";
import * as _34 from "./authz/v1beta1/event";
import * as _35 from "./authz/v1beta1/genesis";
import * as _36 from "./authz/v1beta1/query";
import * as _37 from "./authz/v1beta1/tx";
import * as _38 from "./bank/v1beta1/authz";
import * as _39 from "./bank/v1beta1/bank";
import * as _40 from "./bank/v1beta1/genesis";
import * as _41 from "./bank/v1beta1/query";
import * as _42 from "./bank/v1beta1/tx";
import * as _43 from "./base/abci/v1beta1/abci";
import * as _44 from "./base/kv/v1beta1/kv";
import * as _45 from "./base/node/v1beta1/query";
import * as _46 from "./base/query/v1beta1/pagination";
import * as _47 from "./base/reflection/v1beta1/reflection";
import * as _48 from "./base/reflection/v2alpha1/reflection";
import * as _49 from "./base/snapshots/v1beta1/snapshot";
import * as _50 from "./base/store/v1beta1/commit_info";
import * as _51 from "./base/store/v1beta1/listening";
import * as _52 from "./base/tendermint/v1beta1/query";
import * as _53 from "./base/v1beta1/coin";
import * as _54 from "./capability/v1beta1/capability";
import * as _55 from "./capability/v1beta1/genesis";
import * as _56 from "./crisis/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/tx";
import * as _58 from "./crypto/ed25519/keys";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/v1beta1/feegrant";
import * as _71 from "./feegrant/v1beta1/genesis";
import * as _72 from "./feegrant/v1beta1/query";
import * as _73 from "./feegrant/v1beta1/tx";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/genesis";
import * as _76 from "./gov/v1beta1/gov";
import * as _77 from "./gov/v1beta1/query";
import * as _78 from "./gov/v1beta1/tx";
import * as _79 from "./mint/v1beta1/genesis";
import * as _80 from "./mint/v1beta1/mint";
import * as _81 from "./mint/v1beta1/query";
import * as _82 from "./params/v1beta1/params";
import * as _83 from "./params/v1beta1/query";
import * as _84 from "./slashing/v1beta1/genesis";
import * as _85 from "./slashing/v1beta1/query";
import * as _86 from "./slashing/v1beta1/slashing";
import * as _87 from "./slashing/v1beta1/tx";
import * as _88 from "./staking/v1beta1/authz";
import * as _89 from "./staking/v1beta1/genesis";
import * as _90 from "./staking/v1beta1/query";
import * as _91 from "./staking/v1beta1/staking";
import * as _92 from "./staking/v1beta1/tx";
import * as _93 from "./tx/signing/v1beta1/signing";
import * as _94 from "./tx/v1beta1/service";
import * as _95 from "./tx/v1beta1/tx";
import * as _96 from "./upgrade/v1beta1/query";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/v1beta1/tx";
import * as _99 from "./vesting/v1beta1/vesting";
import * as _217 from "./auth/v1beta1/query.lcd";
import * as _218 from "./authz/v1beta1/query.lcd";
import * as _219 from "./bank/v1beta1/query.lcd";
import * as _220 from "./base/node/v1beta1/query.lcd";
import * as _221 from "./base/tendermint/v1beta1/query.lcd";
import * as _222 from "./distribution/v1beta1/query.lcd";
import * as _223 from "./evidence/v1beta1/query.lcd";
import * as _224 from "./feegrant/v1beta1/query.lcd";
import * as _225 from "./gov/v1beta1/query.lcd";
import * as _226 from "./mint/v1beta1/query.lcd";
import * as _227 from "./params/v1beta1/query.lcd";
import * as _228 from "./slashing/v1beta1/query.lcd";
import * as _229 from "./staking/v1beta1/query.lcd";
import * as _230 from "./tx/v1beta1/service.lcd";
import * as _231 from "./upgrade/v1beta1/query.lcd";
import * as _232 from "./auth/v1beta1/query.rpc.Query";
import * as _233 from "./authz/v1beta1/query.rpc.Query";
import * as _234 from "./bank/v1beta1/query.rpc.Query";
import * as _235 from "./base/node/v1beta1/query.rpc.Service";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _237 from "./distribution/v1beta1/query.rpc.Query";
import * as _238 from "./evidence/v1beta1/query.rpc.Query";
import * as _239 from "./feegrant/v1beta1/query.rpc.Query";
import * as _240 from "./gov/v1beta1/query.rpc.Query";
import * as _241 from "./mint/v1beta1/query.rpc.Query";
import * as _242 from "./params/v1beta1/query.rpc.Query";
import * as _243 from "./slashing/v1beta1/query.rpc.Query";
import * as _244 from "./staking/v1beta1/query.rpc.Query";
import * as _245 from "./tx/v1beta1/service.rpc.Service";
import * as _246 from "./upgrade/v1beta1/query.rpc.Query";
import * as _247 from "./authz/v1beta1/tx.rpc.msg";
import * as _248 from "./bank/v1beta1/tx.rpc.msg";
import * as _249 from "./crisis/v1beta1/tx.rpc.msg";
import * as _250 from "./distribution/v1beta1/tx.rpc.msg";
import * as _251 from "./evidence/v1beta1/tx.rpc.msg";
import * as _252 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _253 from "./gov/v1beta1/tx.rpc.msg";
import * as _254 from "./slashing/v1beta1/tx.rpc.msg";
import * as _255 from "./staking/v1beta1/tx.rpc.msg";
import * as _256 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _32.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountsRequest;
                fromPartial(object: Partial<_32.QueryAccountsRequest>): _32.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _32.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountsResponse;
                fromPartial(object: Partial<_32.QueryAccountsResponse>): _32.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _32.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountRequest;
                fromPartial(object: Partial<_32.QueryAccountRequest>): _32.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _32.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountResponse;
                fromPartial(object: Partial<_32.QueryAccountResponse>): _32.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _32.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameRequest>): _32.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _32.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameResponse>): _32.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            BaseAccount: {
                encode(message: _30.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.BaseAccount;
                fromPartial(object: Partial<_30.BaseAccount>): _30.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _30.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.ModuleAccount;
                fromPartial(object: Partial<_30.ModuleAccount>): _30.ModuleAccount;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _37.MsgGrant) => {
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
                    }) => _37.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _37.MsgExec) => {
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
                    }) => _37.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _37.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _37.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _37.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgGrant;
                fromPartial(object: Partial<_37.MsgGrant>): _37.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _37.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgExecResponse;
                fromPartial(object: Partial<_37.MsgExecResponse>): _37.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _37.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgExec;
                fromPartial(object: Partial<_37.MsgExec>): _37.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _37.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgGrantResponse;
                fromPartial(_: Partial<_37.MsgGrantResponse>): _37.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _37.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgRevoke;
                fromPartial(object: Partial<_37.MsgRevoke>): _37.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _37.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgRevokeResponse;
                fromPartial(_: Partial<_37.MsgRevokeResponse>): _37.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _36.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGrantsRequest;
                fromPartial(object: Partial<_36.QueryGrantsRequest>): _36.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _36.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGrantsResponse;
                fromPartial(object: Partial<_36.QueryGrantsResponse>): _36.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _36.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranterGrantsRequest>): _36.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _36.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranterGrantsResponse>): _36.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _36.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranteeGrantsRequest>): _36.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _36.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranteeGrantsResponse>): _36.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            EventGrant: {
                encode(message: _34.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventGrant;
                fromPartial(object: Partial<_34.EventGrant>): _34.EventGrant;
            };
            EventRevoke: {
                encode(message: _34.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventRevoke;
                fromPartial(object: Partial<_34.EventRevoke>): _34.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _33.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GenericAuthorization;
                fromPartial(object: Partial<_33.GenericAuthorization>): _33.GenericAuthorization;
            };
            Grant: {
                encode(message: _33.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Grant;
                fromPartial(object: Partial<_33.Grant>): _33.Grant;
            };
            GrantAuthorization: {
                encode(message: _33.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GrantAuthorization;
                fromPartial(object: Partial<_33.GrantAuthorization>): _33.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _42.MsgSend) => {
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
                    }) => _42.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _42.MsgMultiSend) => {
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
                    }) => _42.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _42.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgSend;
                fromPartial(object: Partial<_42.MsgSend>): _42.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _42.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgSendResponse;
                fromPartial(_: Partial<_42.MsgSendResponse>): _42.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _42.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgMultiSend;
                fromPartial(object: Partial<_42.MsgMultiSend>): _42.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _42.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgMultiSendResponse;
                fromPartial(_: Partial<_42.MsgMultiSendResponse>): _42.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _41.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryBalanceRequest;
                fromPartial(object: Partial<_41.QueryBalanceRequest>): _41.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _41.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryBalanceResponse;
                fromPartial(object: Partial<_41.QueryBalanceResponse>): _41.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _41.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryAllBalancesRequest;
                fromPartial(object: Partial<_41.QueryAllBalancesRequest>): _41.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _41.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryAllBalancesResponse;
                fromPartial(object: Partial<_41.QueryAllBalancesResponse>): _41.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _41.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_41.QuerySpendableBalancesRequest>): _41.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _41.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_41.QuerySpendableBalancesResponse>): _41.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _41.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_41.QueryTotalSupplyRequest>): _41.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _41.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_41.QueryTotalSupplyResponse>): _41.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _41.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySupplyOfRequest;
                fromPartial(object: Partial<_41.QuerySupplyOfRequest>): _41.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _41.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySupplyOfResponse;
                fromPartial(object: Partial<_41.QuerySupplyOfResponse>): _41.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _41.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomsMetadataRequest>): _41.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _41.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomsMetadataResponse>): _41.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _41.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomMetadataRequest>): _41.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _41.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomMetadataResponse>): _41.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Balance: {
                encode(message: _40.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.Balance;
                fromPartial(object: Partial<_40.Balance>): _40.Balance;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            SendEnabled: {
                encode(message: _39.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.SendEnabled;
                fromPartial(object: Partial<_39.SendEnabled>): _39.SendEnabled;
            };
            Input: {
                encode(message: _39.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Input;
                fromPartial(object: Partial<_39.Input>): _39.Input;
            };
            Output: {
                encode(message: _39.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Output;
                fromPartial(object: Partial<_39.Output>): _39.Output;
            };
            Supply: {
                encode(message: _39.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Supply;
                fromPartial(object: Partial<_39.Supply>): _39.Supply;
            };
            DenomUnit: {
                encode(message: _39.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DenomUnit;
                fromPartial(object: Partial<_39.DenomUnit>): _39.DenomUnit;
            };
            Metadata: {
                encode(message: _39.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Metadata;
                fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
            };
            SendAuthorization: {
                encode(message: _38.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.SendAuthorization;
                fromPartial(object: Partial<_38.SendAuthorization>): _38.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _43.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.TxResponse;
                    fromPartial(object: Partial<_43.TxResponse>): _43.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _43.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ABCIMessageLog;
                    fromPartial(object: Partial<_43.ABCIMessageLog>): _43.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _43.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.StringEvent;
                    fromPartial(object: Partial<_43.StringEvent>): _43.StringEvent;
                };
                Attribute: {
                    encode(message: _43.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Attribute;
                    fromPartial(object: Partial<_43.Attribute>): _43.Attribute;
                };
                GasInfo: {
                    encode(message: _43.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GasInfo;
                    fromPartial(object: Partial<_43.GasInfo>): _43.GasInfo;
                };
                Result: {
                    encode(message: _43.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Result;
                    fromPartial(object: Partial<_43.Result>): _43.Result;
                };
                SimulationResponse: {
                    encode(message: _43.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SimulationResponse;
                    fromPartial(object: Partial<_43.SimulationResponse>): _43.SimulationResponse;
                };
                MsgData: {
                    encode(message: _43.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.MsgData;
                    fromPartial(object: Partial<_43.MsgData>): _43.MsgData;
                };
                TxMsgData: {
                    encode(message: _43.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.TxMsgData;
                    fromPartial(object: Partial<_43.TxMsgData>): _43.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _43.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SearchTxsResult;
                    fromPartial(object: Partial<_43.SearchTxsResult>): _43.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _44.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Pairs;
                    fromPartial(object: Partial<_44.Pairs>): _44.Pairs;
                };
                Pair: {
                    encode(message: _44.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Pair;
                    fromPartial(object: Partial<_44.Pair>): _44.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _235.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _45.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.ConfigRequest;
                    fromPartial(_: Partial<_45.ConfigRequest>): _45.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _45.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.ConfigResponse;
                    fromPartial(object: Partial<_45.ConfigResponse>): _45.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _46.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.PageRequest;
                    fromPartial(object: Partial<_46.PageRequest>): _46.PageRequest;
                };
                PageResponse: {
                    encode(message: _46.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.PageResponse;
                    fromPartial(object: Partial<_46.PageResponse>): _46.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _47.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _47.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_47.ListAllInterfacesRequest>): _47.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _47.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_47.ListAllInterfacesResponse>): _47.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _47.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListImplementationsRequest;
                    fromPartial(object: Partial<_47.ListImplementationsRequest>): _47.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _47.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListImplementationsResponse;
                    fromPartial(object: Partial<_47.ListImplementationsResponse>): _47.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _48.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.AppDescriptor;
                    fromPartial(object: Partial<_48.AppDescriptor>): _48.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _48.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.TxDescriptor;
                    fromPartial(object: Partial<_48.TxDescriptor>): _48.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _48.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.AuthnDescriptor;
                    fromPartial(object: Partial<_48.AuthnDescriptor>): _48.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _48.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.SigningModeDescriptor;
                    fromPartial(object: Partial<_48.SigningModeDescriptor>): _48.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _48.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.ChainDescriptor;
                    fromPartial(object: Partial<_48.ChainDescriptor>): _48.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _48.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.CodecDescriptor;
                    fromPartial(object: Partial<_48.CodecDescriptor>): _48.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _48.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceDescriptor;
                    fromPartial(object: Partial<_48.InterfaceDescriptor>): _48.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _48.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_48.InterfaceImplementerDescriptor>): _48.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _48.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_48.InterfaceAcceptingMessageDescriptor>): _48.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _48.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.ConfigurationDescriptor;
                    fromPartial(object: Partial<_48.ConfigurationDescriptor>): _48.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _48.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.MsgDescriptor;
                    fromPartial(object: Partial<_48.MsgDescriptor>): _48.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _48.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_48.GetAuthnDescriptorRequest>): _48.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _48.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_48.GetAuthnDescriptorResponse>): _48.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _48.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_48.GetChainDescriptorRequest>): _48.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _48.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_48.GetChainDescriptorResponse>): _48.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _48.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_48.GetCodecDescriptorRequest>): _48.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _48.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_48.GetCodecDescriptorResponse>): _48.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _48.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_48.GetConfigurationDescriptorRequest>): _48.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _48.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_48.GetConfigurationDescriptorResponse>): _48.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _48.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_48.GetQueryServicesDescriptorRequest>): _48.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _48.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_48.GetQueryServicesDescriptorResponse>): _48.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _48.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_48.GetTxDescriptorRequest>): _48.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _48.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_48.GetTxDescriptorResponse>): _48.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _48.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryServicesDescriptor;
                    fromPartial(object: Partial<_48.QueryServicesDescriptor>): _48.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _48.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryServiceDescriptor;
                    fromPartial(object: Partial<_48.QueryServiceDescriptor>): _48.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _48.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryMethodDescriptor;
                    fromPartial(object: Partial<_48.QueryMethodDescriptor>): _48.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _49.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Snapshot;
                    fromPartial(object: Partial<_49.Snapshot>): _49.Snapshot;
                };
                Metadata: {
                    encode(message: _49.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Metadata;
                    fromPartial(object: Partial<_49.Metadata>): _49.Metadata;
                };
                SnapshotItem: {
                    encode(message: _49.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotItem;
                    fromPartial(object: Partial<_49.SnapshotItem>): _49.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _49.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotStoreItem;
                    fromPartial(object: Partial<_49.SnapshotStoreItem>): _49.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _49.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotIAVLItem;
                    fromPartial(object: Partial<_49.SnapshotIAVLItem>): _49.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _49.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_49.SnapshotExtensionMeta>): _49.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _49.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_49.SnapshotExtensionPayload>): _49.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _51.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.StoreKVPair;
                    fromPartial(object: Partial<_51.StoreKVPair>): _51.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _51.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.BlockMetadata;
                    fromPartial(object: Partial<_51.BlockMetadata>): _51.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _51.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_51.BlockMetadata_DeliverTx>): _51.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _50.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.CommitInfo;
                    fromPartial(object: Partial<_50.CommitInfo>): _50.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _50.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.StoreInfo;
                    fromPartial(object: Partial<_50.StoreInfo>): _50.StoreInfo;
                };
                CommitID: {
                    encode(message: _50.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.CommitID;
                    fromPartial(object: Partial<_50.CommitID>): _50.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _236.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                    getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                    getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                    getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _221.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _52.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightRequest>): _52.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _52.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightResponse>): _52.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _52.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetRequest>): _52.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _52.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetResponse>): _52.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _52.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Validator;
                    fromPartial(object: Partial<_52.Validator>): _52.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _52.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_52.GetBlockByHeightRequest>): _52.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _52.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_52.GetBlockByHeightResponse>): _52.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _52.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetLatestBlockRequest;
                    fromPartial(_: Partial<_52.GetLatestBlockRequest>): _52.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _52.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestBlockResponse;
                    fromPartial(object: Partial<_52.GetLatestBlockResponse>): _52.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _52.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetSyncingRequest;
                    fromPartial(_: Partial<_52.GetSyncingRequest>): _52.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _52.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetSyncingResponse;
                    fromPartial(object: Partial<_52.GetSyncingResponse>): _52.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _52.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetNodeInfoRequest;
                    fromPartial(_: Partial<_52.GetNodeInfoRequest>): _52.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _52.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetNodeInfoResponse;
                    fromPartial(object: Partial<_52.GetNodeInfoResponse>): _52.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _52.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.VersionInfo;
                    fromPartial(object: Partial<_52.VersionInfo>): _52.VersionInfo;
                };
                Module: {
                    encode(message: _52.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _53.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Coin;
                fromPartial(object: Partial<_53.Coin>): _53.Coin;
            };
            DecCoin: {
                encode(message: _53.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DecCoin;
                fromPartial(object: Partial<_53.DecCoin>): _53.DecCoin;
            };
            IntProto: {
                encode(message: _53.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.IntProto;
                fromPartial(object: Partial<_53.IntProto>): _53.IntProto;
            };
            DecProto: {
                encode(message: _53.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DecProto;
                fromPartial(object: Partial<_53.DecProto>): _53.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _55.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisOwners;
                fromPartial(object: Partial<_55.GenesisOwners>): _55.GenesisOwners;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            Capability: {
                encode(message: _54.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Capability;
                fromPartial(object: Partial<_54.Capability>): _54.Capability;
            };
            Owner: {
                encode(message: _54.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Owner;
                fromPartial(object: Partial<_54.Owner>): _54.Owner;
            };
            CapabilityOwners: {
                encode(message: _54.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.CapabilityOwners;
                fromPartial(object: Partial<_54.CapabilityOwners>): _54.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _57.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _57.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _57.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgVerifyInvariant;
                fromPartial(object: Partial<_57.MsgVerifyInvariant>): _57.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _57.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_57.MsgVerifyInvariantResponse>): _57.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _58.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.PubKey;
                fromPartial(object: Partial<_58.PubKey>): _58.PubKey;
            };
            PrivKey: {
                encode(message: _58.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.PrivKey;
                fromPartial(object: Partial<_58.PrivKey>): _58.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _59.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.LegacyAminoPubKey;
                fromPartial(object: Partial<_59.LegacyAminoPubKey>): _59.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _60.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PubKey;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
            };
            PrivKey: {
                encode(message: _60.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PrivKey;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _61.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PubKey;
                fromPartial(object: Partial<_61.PubKey>): _61.PubKey;
            };
            PrivKey: {
                encode(message: _61.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PrivKey;
                fromPartial(object: Partial<_61.PrivKey>): _61.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _65.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _65.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _65.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _65.MsgFundCommunityPool) => {
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
                    }) => _65.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_65.MsgSetWithdrawAddress>): _65.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_65.MsgSetWithdrawAddressResponse>): _65.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorReward>): _65.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_65.MsgWithdrawDelegatorRewardResponse>): _65.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommission>): _65.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_65.MsgWithdrawValidatorCommissionResponse>): _65.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _65.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                fromPartial(object: Partial<_65.MsgFundCommunityPool>): _65.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_65.MsgFundCommunityPoolResponse>): _65.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.QueryParamsRequest;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryParamsResponse;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsRequest>): _64.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsResponse>): _64.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_64.QueryValidatorCommissionRequest>): _64.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_64.QueryValidatorCommissionResponse>): _64.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_64.QueryValidatorSlashesRequest>): _64.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_64.QueryValidatorSlashesResponse>): _64.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationRewardsRequest>): _64.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationRewardsResponse>): _64.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsRequest>): _64.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsResponse>): _64.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsRequest>): _64.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsResponse>): _64.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressRequest>): _64.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressResponse>): _64.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_64.QueryCommunityPoolRequest>): _64.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_64.QueryCommunityPoolResponse>): _64.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_63.DelegatorWithdrawInfo>): _63.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorOutstandingRewardsRecord>): _63.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_63.ValidatorAccumulatedCommissionRecord>): _63.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorHistoricalRewardsRecord>): _63.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorCurrentRewardsRecord>): _63.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_63.DelegatorStartingInfoRecord>): _63.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_63.ValidatorSlashEventRecord>): _63.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewards>): _62.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _62.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                fromPartial(object: Partial<_62.ValidatorCurrentRewards>): _62.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommission>): _62.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewards>): _62.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _62.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                fromPartial(object: Partial<_62.ValidatorSlashEvent>): _62.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _62.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                fromPartial(object: Partial<_62.ValidatorSlashEvents>): _62.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _62.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.FeePool;
                fromPartial(object: Partial<_62.FeePool>): _62.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposal>): _62.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _62.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                fromPartial(object: Partial<_62.DelegatorStartingInfo>): _62.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _62.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                fromPartial(object: Partial<_62.DelegationDelegatorReward>): _62.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposalWithDeposit>): _62.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _69.MsgSubmitEvidence) => {
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
                    }) => _69.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _69.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitEvidence;
                fromPartial(object: Partial<_69.MsgSubmitEvidence>): _69.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _69.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_69.MsgSubmitEvidenceResponse>): _69.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _68.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryEvidenceRequest;
                fromPartial(object: Partial<_68.QueryEvidenceRequest>): _68.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _68.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryEvidenceResponse;
                fromPartial(object: Partial<_68.QueryEvidenceResponse>): _68.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _68.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_68.QueryAllEvidenceRequest>): _68.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _68.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_68.QueryAllEvidenceResponse>): _68.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
            Equivocation: {
                encode(message: _66.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.Equivocation;
                fromPartial(object: Partial<_66.Equivocation>): _66.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _73.MsgGrantAllowance) => {
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
                    }) => _73.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _73.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _73.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _73.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgGrantAllowance;
                fromPartial(object: Partial<_73.MsgGrantAllowance>): _73.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _73.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_73.MsgGrantAllowanceResponse>): _73.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _73.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgRevokeAllowance;
                fromPartial(object: Partial<_73.MsgRevokeAllowance>): _73.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _73.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_73.MsgRevokeAllowanceResponse>): _73.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _72.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowanceRequest;
                fromPartial(object: Partial<_72.QueryAllowanceRequest>): _72.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _72.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowanceResponse;
                fromPartial(object: Partial<_72.QueryAllowanceResponse>): _72.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _72.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesRequest;
                fromPartial(object: Partial<_72.QueryAllowancesRequest>): _72.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _72.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesResponse;
                fromPartial(object: Partial<_72.QueryAllowancesResponse>): _72.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _72.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterRequest>): _72.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _72.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterResponse>): _72.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            BasicAllowance: {
                encode(message: _70.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.BasicAllowance;
                fromPartial(object: Partial<_70.BasicAllowance>): _70.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _70.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.PeriodicAllowance;
                fromPartial(object: Partial<_70.PeriodicAllowance>): _70.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _70.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AllowedMsgAllowance;
                fromPartial(object: Partial<_70.AllowedMsgAllowance>): _70.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _70.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Grant;
                fromPartial(object: Partial<_70.Grant>): _70.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _78.MsgSubmitProposal) => {
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
                    }) => _78.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _78.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _78.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _78.MsgVoteWeighted) => {
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
                    }) => _78.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _78.MsgDeposit) => {
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
                    }) => _78.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _78.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgSubmitProposal;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _78.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgVote;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _78.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgVoteResponse;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _78.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgVoteWeighted;
                fromPartial(object: Partial<_78.MsgVoteWeighted>): _78.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _78.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_78.MsgVoteWeightedResponse>): _78.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _78.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgDeposit;
                fromPartial(object: Partial<_78.MsgDeposit>): _78.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _78.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgDepositResponse;
                fromPartial(_: Partial<_78.MsgDepositResponse>): _78.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _77.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalRequest;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _77.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalResponse;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _77.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalsRequest;
                fromPartial(object: Partial<_77.QueryProposalsRequest>): _77.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _77.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalsResponse;
                fromPartial(object: Partial<_77.QueryProposalsResponse>): _77.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _77.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVoteRequest;
                fromPartial(object: Partial<_77.QueryVoteRequest>): _77.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _77.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVoteResponse;
                fromPartial(object: Partial<_77.QueryVoteResponse>): _77.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _77.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVotesRequest;
                fromPartial(object: Partial<_77.QueryVotesRequest>): _77.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _77.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVotesResponse;
                fromPartial(object: Partial<_77.QueryVotesResponse>): _77.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryParamsRequest;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryParamsResponse;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _77.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositRequest;
                fromPartial(object: Partial<_77.QueryDepositRequest>): _77.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _77.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositResponse;
                fromPartial(object: Partial<_77.QueryDepositResponse>): _77.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _77.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositsRequest;
                fromPartial(object: Partial<_77.QueryDepositsRequest>): _77.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _77.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositsResponse;
                fromPartial(object: Partial<_77.QueryDepositsResponse>): _77.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _77.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _77.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _76.VoteOption;
            voteOptionToJSON(object: _76.VoteOption): string;
            proposalStatusFromJSON(object: any): _76.ProposalStatus;
            proposalStatusToJSON(object: _76.ProposalStatus): string;
            VoteOption: typeof _76.VoteOption;
            VoteOptionSDKType: typeof _76.VoteOption;
            ProposalStatus: typeof _76.ProposalStatus;
            ProposalStatusSDKType: typeof _76.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _76.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.WeightedVoteOption;
                fromPartial(object: Partial<_76.WeightedVoteOption>): _76.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _76.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TextProposal;
                fromPartial(object: Partial<_76.TextProposal>): _76.TextProposal;
            };
            Deposit: {
                encode(message: _76.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Deposit;
                fromPartial(object: Partial<_76.Deposit>): _76.Deposit;
            };
            Proposal: {
                encode(message: _76.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Proposal;
                fromPartial(object: Partial<_76.Proposal>): _76.Proposal;
            };
            TallyResult: {
                encode(message: _76.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TallyResult;
                fromPartial(object: Partial<_76.TallyResult>): _76.TallyResult;
            };
            Vote: {
                encode(message: _76.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Vote;
                fromPartial(object: Partial<_76.Vote>): _76.Vote;
            };
            DepositParams: {
                encode(message: _76.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DepositParams;
                fromPartial(object: Partial<_76.DepositParams>): _76.DepositParams;
            };
            VotingParams: {
                encode(message: _76.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.VotingParams;
                fromPartial(object: Partial<_76.VotingParams>): _76.VotingParams;
            };
            TallyParams: {
                encode(message: _76.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TallyParams;
                fromPartial(object: Partial<_76.TallyParams>): _76.TallyParams;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryParamsRequest;
                fromPartial(_: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _81.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryInflationRequest;
                fromPartial(_: Partial<_81.QueryInflationRequest>): _81.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _81.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryInflationResponse;
                fromPartial(object: Partial<_81.QueryInflationResponse>): _81.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _81.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_81.QueryAnnualProvisionsRequest>): _81.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _81.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_81.QueryAnnualProvisionsResponse>): _81.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _80.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Minter;
                fromPartial(object: Partial<_80.Minter>): _80.Minter;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Params;
                fromPartial(object: Partial<_80.Params>): _80.Params;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.QueryParamsRequest;
                fromPartial(object: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _82.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.ParameterChangeProposal;
                fromPartial(object: Partial<_82.ParameterChangeProposal>): _82.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _82.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.ParamChange;
                fromPartial(object: Partial<_82.ParamChange>): _82.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                signingInfo(request: _85.QuerySigningInfoRequest): Promise<_85.QuerySigningInfoResponse>;
                signingInfos(request?: _85.QuerySigningInfosRequest): Promise<_85.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _87.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _87.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _87.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgUnjail;
                fromPartial(object: Partial<_87.MsgUnjail>): _87.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _87.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgUnjailResponse;
                fromPartial(_: Partial<_87.MsgUnjailResponse>): _87.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _86.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorSigningInfo;
                fromPartial(object: Partial<_86.ValidatorSigningInfo>): _86.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _86.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Params;
                fromPartial(object: Partial<_86.Params>): _86.Params;
            };
            QueryParamsRequest: {
                encode(_: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.QueryParamsRequest;
                fromPartial(_: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _85.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QuerySigningInfoRequest;
                fromPartial(object: Partial<_85.QuerySigningInfoRequest>): _85.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _85.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QuerySigningInfoResponse;
                fromPartial(object: Partial<_85.QuerySigningInfoResponse>): _85.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _85.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QuerySigningInfosRequest;
                fromPartial(object: Partial<_85.QuerySigningInfosRequest>): _85.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _85.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QuerySigningInfosResponse;
                fromPartial(object: Partial<_85.QuerySigningInfosResponse>): _85.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
            SigningInfo: {
                encode(message: _84.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.SigningInfo;
                fromPartial(object: Partial<_84.SigningInfo>): _84.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _84.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorMissedBlocks;
                fromPartial(object: Partial<_84.ValidatorMissedBlocks>): _84.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _84.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.MissedBlock;
                fromPartial(object: Partial<_84.MissedBlock>): _84.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _92.MsgCreateValidator) => {
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
                    }) => _92.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _92.MsgEditValidator) => {
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
                    }) => _92.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _92.MsgDelegate) => {
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
                    }) => _92.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _92.MsgBeginRedelegate) => {
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
                    }) => _92.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _92.MsgUndelegate) => {
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
                    }) => _92.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _92.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgCreateValidator;
                fromPartial(object: Partial<_92.MsgCreateValidator>): _92.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _92.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_92.MsgCreateValidatorResponse>): _92.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _92.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgEditValidator;
                fromPartial(object: Partial<_92.MsgEditValidator>): _92.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _92.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgEditValidatorResponse;
                fromPartial(_: Partial<_92.MsgEditValidatorResponse>): _92.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _92.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgDelegate;
                fromPartial(object: Partial<_92.MsgDelegate>): _92.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _92.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgDelegateResponse;
                fromPartial(_: Partial<_92.MsgDelegateResponse>): _92.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _92.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgBeginRedelegate;
                fromPartial(object: Partial<_92.MsgBeginRedelegate>): _92.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _92.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_92.MsgBeginRedelegateResponse>): _92.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _92.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgUndelegate;
                fromPartial(object: Partial<_92.MsgUndelegate>): _92.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _92.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgUndelegateResponse;
                fromPartial(object: Partial<_92.MsgUndelegateResponse>): _92.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _91.BondStatus;
            bondStatusToJSON(object: _91.BondStatus): string;
            infractionTypeFromJSON(object: any): _91.InfractionType;
            infractionTypeToJSON(object: _91.InfractionType): string;
            BondStatus: typeof _91.BondStatus;
            BondStatusSDKType: typeof _91.BondStatus;
            InfractionType: typeof _91.InfractionType;
            InfractionTypeSDKType: typeof _91.InfractionType;
            HistoricalInfo: {
                encode(message: _91.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.HistoricalInfo;
                fromPartial(object: Partial<_91.HistoricalInfo>): _91.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _91.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.CommissionRates;
                fromPartial(object: Partial<_91.CommissionRates>): _91.CommissionRates;
            };
            Commission: {
                encode(message: _91.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Commission;
                fromPartial(object: Partial<_91.Commission>): _91.Commission;
            };
            Description: {
                encode(message: _91.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Description;
                fromPartial(object: Partial<_91.Description>): _91.Description;
            };
            Validator: {
                encode(message: _91.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Validator;
                fromPartial(object: Partial<_91.Validator>): _91.Validator;
            };
            ValAddresses: {
                encode(message: _91.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.ValAddresses;
                fromPartial(object: Partial<_91.ValAddresses>): _91.ValAddresses;
            };
            DVPair: {
                encode(message: _91.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.DVPair;
                fromPartial(object: Partial<_91.DVPair>): _91.DVPair;
            };
            DVPairs: {
                encode(message: _91.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.DVPairs;
                fromPartial(object: Partial<_91.DVPairs>): _91.DVPairs;
            };
            DVVTriplet: {
                encode(message: _91.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.DVVTriplet;
                fromPartial(object: Partial<_91.DVVTriplet>): _91.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _91.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.DVVTriplets;
                fromPartial(object: Partial<_91.DVVTriplets>): _91.DVVTriplets;
            };
            Delegation: {
                encode(message: _91.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Delegation;
                fromPartial(object: Partial<_91.Delegation>): _91.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _91.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.UnbondingDelegation;
                fromPartial(object: Partial<_91.UnbondingDelegation>): _91.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _91.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.UnbondingDelegationEntry;
                fromPartial(object: Partial<_91.UnbondingDelegationEntry>): _91.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _91.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.RedelegationEntry;
                fromPartial(object: Partial<_91.RedelegationEntry>): _91.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _91.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Redelegation;
                fromPartial(object: Partial<_91.Redelegation>): _91.Redelegation;
            };
            Params: {
                encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Params;
                fromPartial(object: Partial<_91.Params>): _91.Params;
            };
            DelegationResponse: {
                encode(message: _91.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.DelegationResponse;
                fromPartial(object: Partial<_91.DelegationResponse>): _91.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _91.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.RedelegationEntryResponse;
                fromPartial(object: Partial<_91.RedelegationEntryResponse>): _91.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _91.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.RedelegationResponse;
                fromPartial(object: Partial<_91.RedelegationResponse>): _91.RedelegationResponse;
            };
            Pool: {
                encode(message: _91.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Pool;
                fromPartial(object: Partial<_91.Pool>): _91.Pool;
            };
            ValidatorUpdates: {
                encode(message: _91.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.ValidatorUpdates;
                fromPartial(object: Partial<_91.ValidatorUpdates>): _91.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _90.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorsRequest;
                fromPartial(object: Partial<_90.QueryValidatorsRequest>): _90.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _90.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorsResponse;
                fromPartial(object: Partial<_90.QueryValidatorsResponse>): _90.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _90.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorRequest;
                fromPartial(object: Partial<_90.QueryValidatorRequest>): _90.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _90.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorResponse;
                fromPartial(object: Partial<_90.QueryValidatorResponse>): _90.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _90.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_90.QueryValidatorDelegationsRequest>): _90.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _90.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_90.QueryValidatorDelegationsResponse>): _90.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _90.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_90.QueryValidatorUnbondingDelegationsRequest>): _90.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _90.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_90.QueryValidatorUnbondingDelegationsResponse>): _90.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _90.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegationRequest;
                fromPartial(object: Partial<_90.QueryDelegationRequest>): _90.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _90.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegationResponse;
                fromPartial(object: Partial<_90.QueryDelegationResponse>): _90.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _90.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_90.QueryUnbondingDelegationRequest>): _90.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _90.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_90.QueryUnbondingDelegationResponse>): _90.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _90.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorDelegationsRequest>): _90.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _90.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorDelegationsResponse>): _90.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _90.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorUnbondingDelegationsRequest>): _90.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _90.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorUnbondingDelegationsResponse>): _90.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _90.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryRedelegationsRequest;
                fromPartial(object: Partial<_90.QueryRedelegationsRequest>): _90.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _90.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryRedelegationsResponse;
                fromPartial(object: Partial<_90.QueryRedelegationsResponse>): _90.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _90.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorsRequest>): _90.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _90.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorsResponse>): _90.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _90.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorRequest>): _90.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _90.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorResponse>): _90.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _90.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_90.QueryHistoricalInfoRequest>): _90.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _90.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_90.QueryHistoricalInfoResponse>): _90.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _90.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryPoolRequest;
                fromPartial(_: Partial<_90.QueryPoolRequest>): _90.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _90.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryPoolResponse;
                fromPartial(object: Partial<_90.QueryPoolResponse>): _90.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _90.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _90.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GenesisState;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _89.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.LastValidatorPower;
                fromPartial(object: Partial<_89.LastValidatorPower>): _89.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _88.AuthorizationType;
            authorizationTypeToJSON(object: _88.AuthorizationType): string;
            AuthorizationType: typeof _88.AuthorizationType;
            AuthorizationTypeSDKType: typeof _88.AuthorizationType;
            StakeAuthorization: {
                encode(message: _88.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.StakeAuthorization;
                fromPartial(object: Partial<_88.StakeAuthorization>): _88.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _88.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.StakeAuthorization_Validators;
                fromPartial(object: Partial<_88.StakeAuthorization_Validators>): _88.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _93.SignMode;
                signModeToJSON(object: _93.SignMode): string;
                SignMode: typeof _93.SignMode;
                SignModeSDKType: typeof _93.SignMode;
                SignatureDescriptors: {
                    encode(message: _93.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.SignatureDescriptors;
                    fromPartial(object: Partial<_93.SignatureDescriptors>): _93.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _93.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.SignatureDescriptor;
                    fromPartial(object: Partial<_93.SignatureDescriptor>): _93.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _93.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data>): _93.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _93.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data_Single>): _93.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _93.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data_Multi>): _93.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _245.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            Tx: {
                encode(message: _95.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.Tx;
                fromPartial(object: Partial<_95.Tx>): _95.Tx;
            };
            TxRaw: {
                encode(message: _95.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.TxRaw;
                fromPartial(object: Partial<_95.TxRaw>): _95.TxRaw;
            };
            SignDoc: {
                encode(message: _95.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.SignDoc;
                fromPartial(object: Partial<_95.SignDoc>): _95.SignDoc;
            };
            TxBody: {
                encode(message: _95.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.TxBody;
                fromPartial(object: Partial<_95.TxBody>): _95.TxBody;
            };
            AuthInfo: {
                encode(message: _95.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.AuthInfo;
                fromPartial(object: Partial<_95.AuthInfo>): _95.AuthInfo;
            };
            SignerInfo: {
                encode(message: _95.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.SignerInfo;
                fromPartial(object: Partial<_95.SignerInfo>): _95.SignerInfo;
            };
            ModeInfo: {
                encode(message: _95.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.ModeInfo;
                fromPartial(object: Partial<_95.ModeInfo>): _95.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _95.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.ModeInfo_Single;
                fromPartial(object: Partial<_95.ModeInfo_Single>): _95.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _95.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.ModeInfo_Multi;
                fromPartial(object: Partial<_95.ModeInfo_Multi>): _95.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _95.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.Fee;
                fromPartial(object: Partial<_95.Fee>): _95.Fee;
            };
            orderByFromJSON(object: any): _94.OrderBy;
            orderByToJSON(object: _94.OrderBy): string;
            broadcastModeFromJSON(object: any): _94.BroadcastMode;
            broadcastModeToJSON(object: _94.BroadcastMode): string;
            OrderBy: typeof _94.OrderBy;
            OrderBySDKType: typeof _94.OrderBy;
            BroadcastMode: typeof _94.BroadcastMode;
            BroadcastModeSDKType: typeof _94.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _94.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetTxsEventRequest;
                fromPartial(object: Partial<_94.GetTxsEventRequest>): _94.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _94.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetTxsEventResponse;
                fromPartial(object: Partial<_94.GetTxsEventResponse>): _94.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _94.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.BroadcastTxRequest;
                fromPartial(object: Partial<_94.BroadcastTxRequest>): _94.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _94.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.BroadcastTxResponse;
                fromPartial(object: Partial<_94.BroadcastTxResponse>): _94.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _94.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.SimulateRequest;
                fromPartial(object: Partial<_94.SimulateRequest>): _94.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _94.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.SimulateResponse;
                fromPartial(object: Partial<_94.SimulateResponse>): _94.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _94.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetTxRequest;
                fromPartial(object: Partial<_94.GetTxRequest>): _94.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _94.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetTxResponse;
                fromPartial(object: Partial<_94.GetTxResponse>): _94.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _94.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_94.GetBlockWithTxsRequest>): _94.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _94.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_94.GetBlockWithTxsResponse>): _94.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _96.QueryCurrentPlanRequest): Promise<_96.QueryCurrentPlanResponse>;
                appliedPlan(request: _96.QueryAppliedPlanRequest): Promise<_96.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _96.QueryUpgradedConsensusStateRequest): Promise<_96.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _96.QueryModuleVersionsRequest): Promise<_96.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            Plan: {
                encode(message: _97.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Plan;
                fromPartial(object: Partial<_97.Plan>): _97.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _97.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_97.SoftwareUpgradeProposal>): _97.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _97.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_97.CancelSoftwareUpgradeProposal>): _97.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _97.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModuleVersion;
                fromPartial(object: Partial<_97.ModuleVersion>): _97.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _96.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_96.QueryCurrentPlanRequest>): _96.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _96.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_96.QueryCurrentPlanResponse>): _96.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _96.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_96.QueryAppliedPlanRequest>): _96.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _96.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_96.QueryAppliedPlanResponse>): _96.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _96.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_96.QueryUpgradedConsensusStateRequest>): _96.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _96.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_96.QueryUpgradedConsensusStateResponse>): _96.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _96.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_96.QueryModuleVersionsRequest>): _96.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _96.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_96.QueryModuleVersionsResponse>): _96.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _98.MsgCreateVestingAccount) => {
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
                    }) => _98.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _99.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.BaseVestingAccount;
                fromPartial(object: Partial<_99.BaseVestingAccount>): _99.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _99.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.ContinuousVestingAccount;
                fromPartial(object: Partial<_99.ContinuousVestingAccount>): _99.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _99.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.DelayedVestingAccount;
                fromPartial(object: Partial<_99.DelayedVestingAccount>): _99.DelayedVestingAccount;
            };
            Period: {
                encode(message: _99.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.Period;
                fromPartial(object: Partial<_99.Period>): _99.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _99.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.PeriodicVestingAccount;
                fromPartial(object: Partial<_99.PeriodicVestingAccount>): _99.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _99.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.PermanentLockedAccount;
                fromPartial(object: Partial<_99.PermanentLockedAccount>): _99.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _98.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgCreateVestingAccount;
                fromPartial(object: Partial<_98.MsgCreateVestingAccount>): _98.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _98.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_98.MsgCreateVestingAccountResponse>): _98.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _247.MsgClientImpl;
                };
                bank: {
                    v1beta1: _248.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _249.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _250.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _251.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _252.MsgClientImpl;
                };
                gov: {
                    v1beta1: _253.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _254.MsgClientImpl;
                };
                staking: {
                    v1beta1: _255.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _256.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                        account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                        granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                        granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                        allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                        spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                        supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                            getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                            getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                            getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                        allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                        allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                        allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                        proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                        vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                        votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                        deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                        tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                        annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        signingInfo(request: _85.QuerySigningInfoRequest): Promise<_85.QuerySigningInfoResponse>;
                        signingInfos(request?: _85.QuerySigningInfosRequest): Promise<_85.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                        validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                        validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                        unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                        delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                        pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                        getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                        broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                        getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                        getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _96.QueryCurrentPlanRequest): Promise<_96.QueryCurrentPlanResponse>;
                        appliedPlan(request: _96.QueryAppliedPlanRequest): Promise<_96.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _96.QueryUpgradedConsensusStateRequest): Promise<_96.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _96.QueryModuleVersionsRequest): Promise<_96.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _217.LCDQueryClient;
                };
                authz: {
                    v1beta1: _218.LCDQueryClient;
                };
                bank: {
                    v1beta1: _219.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _220.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _221.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _222.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _223.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _224.LCDQueryClient;
                };
                gov: {
                    v1beta1: _225.LCDQueryClient;
                };
                mint: {
                    v1beta1: _226.LCDQueryClient;
                };
                params: {
                    v1beta1: _227.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _228.LCDQueryClient;
                };
                staking: {
                    v1beta1: _229.LCDQueryClient;
                };
                tx: {
                    v1beta1: _230.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _231.LCDQueryClient;
                };
            };
        }>;
    };
}
