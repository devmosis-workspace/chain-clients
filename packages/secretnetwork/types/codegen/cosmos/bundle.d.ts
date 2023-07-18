import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./authz/v1beta1/authz";
import * as _19 from "./authz/v1beta1/event";
import * as _20 from "./authz/v1beta1/genesis";
import * as _21 from "./authz/v1beta1/query";
import * as _22 from "./authz/v1beta1/tx";
import * as _23 from "./bank/v1beta1/authz";
import * as _24 from "./bank/v1beta1/bank";
import * as _25 from "./bank/v1beta1/genesis";
import * as _26 from "./bank/v1beta1/query";
import * as _27 from "./bank/v1beta1/tx";
import * as _28 from "./base/abci/v1beta1/abci";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/query";
import * as _50 from "./distribution/v1beta1/tx";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/query";
import * as _54 from "./evidence/v1beta1/tx";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/query";
import * as _58 from "./feegrant/v1beta1/tx";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/genesis";
import * as _61 from "./gov/v1beta1/gov";
import * as _62 from "./gov/v1beta1/query";
import * as _63 from "./gov/v1beta1/tx";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./params/v1beta1/params";
import * as _68 from "./params/v1beta1/query";
import * as _69 from "./slashing/v1beta1/genesis";
import * as _70 from "./slashing/v1beta1/query";
import * as _71 from "./slashing/v1beta1/slashing";
import * as _72 from "./slashing/v1beta1/tx";
import * as _73 from "./staking/v1beta1/authz";
import * as _74 from "./staking/v1beta1/genesis";
import * as _75 from "./staking/v1beta1/query";
import * as _76 from "./staking/v1beta1/staking";
import * as _77 from "./staking/v1beta1/tx";
import * as _78 from "./tx/signing/v1beta1/signing";
import * as _79 from "./tx/v1beta1/service";
import * as _80 from "./tx/v1beta1/tx";
import * as _81 from "./upgrade/v1beta1/query";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _196 from "./auth/v1beta1/query.lcd";
import * as _197 from "./authz/v1beta1/query.lcd";
import * as _198 from "./bank/v1beta1/query.lcd";
import * as _199 from "./base/node/v1beta1/query.lcd";
import * as _200 from "./base/tendermint/v1beta1/query.lcd";
import * as _201 from "./distribution/v1beta1/query.lcd";
import * as _202 from "./evidence/v1beta1/query.lcd";
import * as _203 from "./feegrant/v1beta1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./mint/v1beta1/query.lcd";
import * as _206 from "./params/v1beta1/query.lcd";
import * as _207 from "./slashing/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./auth/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/query.rpc.Query";
import * as _213 from "./bank/v1beta1/query.rpc.Query";
import * as _214 from "./base/node/v1beta1/query.rpc.Service";
import * as _215 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _216 from "./distribution/v1beta1/query.rpc.Query";
import * as _217 from "./evidence/v1beta1/query.rpc.Query";
import * as _218 from "./feegrant/v1beta1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./mint/v1beta1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./slashing/v1beta1/query.rpc.Query";
import * as _223 from "./staking/v1beta1/query.rpc.Query";
import * as _224 from "./tx/v1beta1/service.rpc.Service";
import * as _225 from "./upgrade/v1beta1/query.rpc.Query";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./crisis/v1beta1/tx.rpc.msg";
import * as _229 from "./distribution/v1beta1/tx.rpc.msg";
import * as _230 from "./evidence/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1beta1/tx.rpc.msg";
import * as _233 from "./slashing/v1beta1/tx.rpc.msg";
import * as _234 from "./staking/v1beta1/tx.rpc.msg";
import * as _235 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _17.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryAccountsRequest;
                fromPartial(object: Partial<_17.QueryAccountsRequest>): _17.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _17.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryAccountsResponse;
                fromPartial(object: Partial<_17.QueryAccountsResponse>): _17.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _17.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryAccountRequest;
                fromPartial(object: Partial<_17.QueryAccountRequest>): _17.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _17.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryAccountResponse;
                fromPartial(object: Partial<_17.QueryAccountResponse>): _17.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _17.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameRequest>): _17.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _17.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameResponse>): _17.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            BaseAccount: {
                encode(message: _15.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.BaseAccount;
                fromPartial(object: Partial<_15.BaseAccount>): _15.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _15.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.ModuleAccount;
                fromPartial(object: Partial<_15.ModuleAccount>): _15.ModuleAccount;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.Params;
                fromPartial(object: Partial<_15.Params>): _15.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _21.QueryGrantsRequest): Promise<_21.QueryGrantsResponse>;
                granterGrants(request: _21.QueryGranterGrantsRequest): Promise<_21.QueryGranterGrantsResponse>;
                granteeGrants(request: _21.QueryGranteeGrantsRequest): Promise<_21.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _22.MsgGrant) => {
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
                    }) => _22.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _22.MsgExec) => {
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
                    }) => _22.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _22.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _22.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _22.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgGrant;
                fromPartial(object: Partial<_22.MsgGrant>): _22.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _22.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgExecResponse;
                fromPartial(object: Partial<_22.MsgExecResponse>): _22.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _22.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgExec;
                fromPartial(object: Partial<_22.MsgExec>): _22.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _22.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgGrantResponse;
                fromPartial(_: Partial<_22.MsgGrantResponse>): _22.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _22.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgRevoke;
                fromPartial(object: Partial<_22.MsgRevoke>): _22.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _22.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgRevokeResponse;
                fromPartial(_: Partial<_22.MsgRevokeResponse>): _22.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _21.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGrantsRequest;
                fromPartial(object: Partial<_21.QueryGrantsRequest>): _21.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _21.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGrantsResponse;
                fromPartial(object: Partial<_21.QueryGrantsResponse>): _21.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _21.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_21.QueryGranterGrantsRequest>): _21.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _21.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_21.QueryGranterGrantsResponse>): _21.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _21.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_21.QueryGranteeGrantsRequest>): _21.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _21.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_21.QueryGranteeGrantsResponse>): _21.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
            };
            EventGrant: {
                encode(message: _19.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventGrant;
                fromPartial(object: Partial<_19.EventGrant>): _19.EventGrant;
            };
            EventRevoke: {
                encode(message: _19.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventRevoke;
                fromPartial(object: Partial<_19.EventRevoke>): _19.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _18.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenericAuthorization;
                fromPartial(object: Partial<_18.GenericAuthorization>): _18.GenericAuthorization;
            };
            Grant: {
                encode(message: _18.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.Grant;
                fromPartial(object: Partial<_18.Grant>): _18.Grant;
            };
            GrantAuthorization: {
                encode(message: _18.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GrantAuthorization;
                fromPartial(object: Partial<_18.GrantAuthorization>): _18.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _27.MsgSend) => {
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
                    }) => _27.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _27.MsgMultiSend) => {
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
                    }) => _27.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _27.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.MsgSend;
                fromPartial(object: Partial<_27.MsgSend>): _27.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _27.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _27.MsgSendResponse;
                fromPartial(_: Partial<_27.MsgSendResponse>): _27.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _27.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.MsgMultiSend;
                fromPartial(object: Partial<_27.MsgMultiSend>): _27.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _27.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _27.MsgMultiSendResponse;
                fromPartial(_: Partial<_27.MsgMultiSendResponse>): _27.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _26.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryBalanceRequest;
                fromPartial(object: Partial<_26.QueryBalanceRequest>): _26.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _26.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryBalanceResponse;
                fromPartial(object: Partial<_26.QueryBalanceResponse>): _26.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _26.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAllBalancesRequest;
                fromPartial(object: Partial<_26.QueryAllBalancesRequest>): _26.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _26.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAllBalancesResponse;
                fromPartial(object: Partial<_26.QueryAllBalancesResponse>): _26.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _26.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_26.QuerySpendableBalancesRequest>): _26.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _26.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_26.QuerySpendableBalancesResponse>): _26.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _26.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_26.QueryTotalSupplyRequest>): _26.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _26.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_26.QueryTotalSupplyResponse>): _26.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _26.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QuerySupplyOfRequest;
                fromPartial(object: Partial<_26.QuerySupplyOfRequest>): _26.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _26.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QuerySupplyOfResponse;
                fromPartial(object: Partial<_26.QuerySupplyOfResponse>): _26.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _26.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomsMetadataRequest>): _26.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _26.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomsMetadataResponse>): _26.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _26.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomMetadataRequest>): _26.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _26.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomMetadataResponse>): _26.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
            };
            Balance: {
                encode(message: _25.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.Balance;
                fromPartial(object: Partial<_25.Balance>): _25.Balance;
            };
            Params: {
                encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
            };
            SendEnabled: {
                encode(message: _24.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.SendEnabled;
                fromPartial(object: Partial<_24.SendEnabled>): _24.SendEnabled;
            };
            Input: {
                encode(message: _24.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Input;
                fromPartial(object: Partial<_24.Input>): _24.Input;
            };
            Output: {
                encode(message: _24.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Output;
                fromPartial(object: Partial<_24.Output>): _24.Output;
            };
            Supply: {
                encode(message: _24.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Supply;
                fromPartial(object: Partial<_24.Supply>): _24.Supply;
            };
            DenomUnit: {
                encode(message: _24.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.DenomUnit;
                fromPartial(object: Partial<_24.DenomUnit>): _24.DenomUnit;
            };
            Metadata: {
                encode(message: _24.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Metadata;
                fromPartial(object: Partial<_24.Metadata>): _24.Metadata;
            };
            SendAuthorization: {
                encode(message: _23.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.SendAuthorization;
                fromPartial(object: Partial<_23.SendAuthorization>): _23.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _28.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.TxResponse;
                    fromPartial(object: Partial<_28.TxResponse>): _28.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _28.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ABCIMessageLog;
                    fromPartial(object: Partial<_28.ABCIMessageLog>): _28.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _28.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.StringEvent;
                    fromPartial(object: Partial<_28.StringEvent>): _28.StringEvent;
                };
                Attribute: {
                    encode(message: _28.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.Attribute;
                    fromPartial(object: Partial<_28.Attribute>): _28.Attribute;
                };
                GasInfo: {
                    encode(message: _28.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GasInfo;
                    fromPartial(object: Partial<_28.GasInfo>): _28.GasInfo;
                };
                Result: {
                    encode(message: _28.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.Result;
                    fromPartial(object: Partial<_28.Result>): _28.Result;
                };
                SimulationResponse: {
                    encode(message: _28.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.SimulationResponse;
                    fromPartial(object: Partial<_28.SimulationResponse>): _28.SimulationResponse;
                };
                MsgData: {
                    encode(message: _28.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.MsgData;
                    fromPartial(object: Partial<_28.MsgData>): _28.MsgData;
                };
                TxMsgData: {
                    encode(message: _28.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.TxMsgData;
                    fromPartial(object: Partial<_28.TxMsgData>): _28.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _28.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.SearchTxsResult;
                    fromPartial(object: Partial<_28.SearchTxsResult>): _28.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _29.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Pairs;
                    fromPartial(object: Partial<_29.Pairs>): _29.Pairs;
                };
                Pair: {
                    encode(message: _29.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Pair;
                    fromPartial(object: Partial<_29.Pair>): _29.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _214.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                };
                LCDQueryClient: typeof _199.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _30.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _30.ConfigRequest;
                    fromPartial(_: Partial<_30.ConfigRequest>): _30.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _30.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.ConfigResponse;
                    fromPartial(object: Partial<_30.ConfigResponse>): _30.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _31.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.PageRequest;
                    fromPartial(object: Partial<_31.PageRequest>): _31.PageRequest;
                };
                PageResponse: {
                    encode(message: _31.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.PageResponse;
                    fromPartial(object: Partial<_31.PageResponse>): _31.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _32.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_32.ListAllInterfacesRequest>): _32.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _32.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_32.ListAllInterfacesResponse>): _32.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _32.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.ListImplementationsRequest;
                    fromPartial(object: Partial<_32.ListImplementationsRequest>): _32.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _32.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.ListImplementationsResponse;
                    fromPartial(object: Partial<_32.ListImplementationsResponse>): _32.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _33.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.AppDescriptor;
                    fromPartial(object: Partial<_33.AppDescriptor>): _33.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _33.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.TxDescriptor;
                    fromPartial(object: Partial<_33.TxDescriptor>): _33.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _33.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.AuthnDescriptor;
                    fromPartial(object: Partial<_33.AuthnDescriptor>): _33.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _33.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SigningModeDescriptor;
                    fromPartial(object: Partial<_33.SigningModeDescriptor>): _33.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _33.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ChainDescriptor;
                    fromPartial(object: Partial<_33.ChainDescriptor>): _33.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _33.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.CodecDescriptor;
                    fromPartial(object: Partial<_33.CodecDescriptor>): _33.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _33.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.InterfaceDescriptor;
                    fromPartial(object: Partial<_33.InterfaceDescriptor>): _33.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _33.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_33.InterfaceImplementerDescriptor>): _33.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _33.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_33.InterfaceAcceptingMessageDescriptor>): _33.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _33.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ConfigurationDescriptor;
                    fromPartial(object: Partial<_33.ConfigurationDescriptor>): _33.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _33.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.MsgDescriptor;
                    fromPartial(object: Partial<_33.MsgDescriptor>): _33.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _33.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_33.GetAuthnDescriptorRequest>): _33.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _33.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_33.GetAuthnDescriptorResponse>): _33.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _33.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_33.GetChainDescriptorRequest>): _33.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _33.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_33.GetChainDescriptorResponse>): _33.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _33.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_33.GetCodecDescriptorRequest>): _33.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _33.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_33.GetCodecDescriptorResponse>): _33.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _33.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_33.GetConfigurationDescriptorRequest>): _33.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _33.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_33.GetConfigurationDescriptorResponse>): _33.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _33.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_33.GetQueryServicesDescriptorRequest>): _33.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _33.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_33.GetQueryServicesDescriptorResponse>): _33.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _33.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_33.GetTxDescriptorRequest>): _33.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _33.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_33.GetTxDescriptorResponse>): _33.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _33.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.QueryServicesDescriptor;
                    fromPartial(object: Partial<_33.QueryServicesDescriptor>): _33.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _33.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.QueryServiceDescriptor;
                    fromPartial(object: Partial<_33.QueryServiceDescriptor>): _33.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _33.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.QueryMethodDescriptor;
                    fromPartial(object: Partial<_33.QueryMethodDescriptor>): _33.QueryMethodDescriptor;
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
                SnapshotItem: {
                    encode(message: _34.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SnapshotItem;
                    fromPartial(object: Partial<_34.SnapshotItem>): _34.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _34.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SnapshotStoreItem;
                    fromPartial(object: Partial<_34.SnapshotStoreItem>): _34.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _34.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SnapshotIAVLItem;
                    fromPartial(object: Partial<_34.SnapshotIAVLItem>): _34.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _34.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_34.SnapshotExtensionMeta>): _34.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _34.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_34.SnapshotExtensionPayload>): _34.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _36.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.StoreKVPair;
                    fromPartial(object: Partial<_36.StoreKVPair>): _36.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _36.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.BlockMetadata;
                    fromPartial(object: Partial<_36.BlockMetadata>): _36.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _36.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_36.BlockMetadata_DeliverTx>): _36.BlockMetadata_DeliverTx;
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
                ServiceClientImpl: typeof _215.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _200.LCDQueryClient;
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
            MsgClientImpl: typeof _228.MsgClientImpl;
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
        const secp256r1: {
            PubKey: {
                encode(message: _46.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.PubKey;
                fromPartial(object: Partial<_46.PubKey>): _46.PubKey;
            };
            PrivKey: {
                encode(message: _46.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.PrivKey;
                fromPartial(object: Partial<_46.PrivKey>): _46.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
                foundationTax(request?: _49.QueryFoundationTaxRequest): Promise<_49.QueryFoundationTaxResponse>;
                restakeThreshold(request?: _49.QueryRestakeThresholdRequest): Promise<_49.QueryRestakeThresholdResponse>;
                restakingEntries(request: _49.QueryRestakeEntriesRequest): Promise<_49.QueryRestakingEntriesResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: any): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _50.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _50.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _50.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _50.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _50.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _50.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _50.MsgFundCommunityPool) => {
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
                    }) => _50.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgSetAutoRestake": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, enabled }: _50.MsgSetAutoRestake) => {
                        delegator_address: string;
                        validator_address: string;
                        enabled: boolean;
                    };
                    fromAmino: ({ delegator_address, validator_address, enabled }: {
                        delegator_address: string;
                        validator_address: string;
                        enabled: boolean;
                    }) => _50.MsgSetAutoRestake;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _50.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_50.MsgSetWithdrawAddress>): _50.MsgSetWithdrawAddress;
            };
            MsgSetAutoRestake: {
                encode(message: _50.MsgSetAutoRestake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSetAutoRestake;
                fromPartial(object: Partial<_50.MsgSetAutoRestake>): _50.MsgSetAutoRestake;
            };
            MsgSetAutoRestakeResponse: {
                encode(_: _50.MsgSetAutoRestakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgSetAutoRestakeResponse;
                fromPartial(_: Partial<_50.MsgSetAutoRestakeResponse>): _50.MsgSetAutoRestakeResponse;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _50.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_50.MsgSetWithdrawAddressResponse>): _50.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _50.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_50.MsgWithdrawDelegatorReward>): _50.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _50.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_50.MsgWithdrawDelegatorRewardResponse>): _50.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _50.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_50.MsgWithdrawValidatorCommission>): _50.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _50.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_50.MsgWithdrawValidatorCommissionResponse>): _50.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _50.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgFundCommunityPool;
                fromPartial(object: Partial<_50.MsgFundCommunityPool>): _50.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _50.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_50.MsgFundCommunityPoolResponse>): _50.MsgFundCommunityPoolResponse;
            };
            QueryRestakeEntriesRequest: {
                encode(message: _49.QueryRestakeEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryRestakeEntriesRequest;
                fromPartial(object: Partial<_49.QueryRestakeEntriesRequest>): _49.QueryRestakeEntriesRequest;
            };
            QueryRestakingEntriesResponse: {
                encode(message: _49.QueryRestakingEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryRestakingEntriesResponse;
                fromPartial(object: Partial<_49.QueryRestakingEntriesResponse>): _49.QueryRestakingEntriesResponse;
            };
            QueryRestakeThresholdRequest: {
                encode(_: _49.QueryRestakeThresholdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryRestakeThresholdRequest;
                fromPartial(_: Partial<_49.QueryRestakeThresholdRequest>): _49.QueryRestakeThresholdRequest;
            };
            QueryRestakeThresholdResponse: {
                encode(message: _49.QueryRestakeThresholdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryRestakeThresholdResponse;
                fromPartial(object: Partial<_49.QueryRestakeThresholdResponse>): _49.QueryRestakeThresholdResponse;
            };
            QueryParamsRequest: {
                encode(_: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _49.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_49.QueryValidatorOutstandingRewardsRequest>): _49.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _49.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_49.QueryValidatorOutstandingRewardsResponse>): _49.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _49.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_49.QueryValidatorCommissionRequest>): _49.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _49.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_49.QueryValidatorCommissionResponse>): _49.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _49.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_49.QueryValidatorSlashesRequest>): _49.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _49.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_49.QueryValidatorSlashesResponse>): _49.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _49.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_49.QueryDelegationRewardsRequest>): _49.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _49.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_49.QueryDelegationRewardsResponse>): _49.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _49.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_49.QueryDelegationTotalRewardsRequest>): _49.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _49.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_49.QueryDelegationTotalRewardsResponse>): _49.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _49.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_49.QueryDelegatorValidatorsRequest>): _49.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _49.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_49.QueryDelegatorValidatorsResponse>): _49.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _49.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_49.QueryDelegatorWithdrawAddressRequest>): _49.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _49.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_49.QueryDelegatorWithdrawAddressResponse>): _49.QueryDelegatorWithdrawAddressResponse;
            };
            QueryFoundationTaxRequest: {
                encode(_: _49.QueryFoundationTaxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryFoundationTaxRequest;
                fromPartial(_: Partial<_49.QueryFoundationTaxRequest>): _49.QueryFoundationTaxRequest;
            };
            QueryFoundationTaxResponse: {
                encode(message: _49.QueryFoundationTaxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryFoundationTaxResponse;
                fromPartial(object: Partial<_49.QueryFoundationTaxResponse>): _49.QueryFoundationTaxResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _49.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_49.QueryCommunityPoolRequest>): _49.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _49.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_49.QueryCommunityPoolResponse>): _49.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _48.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_48.DelegatorWithdrawInfo>): _48.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _48.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorOutstandingRewardsRecord>): _48.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _48.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_48.ValidatorAccumulatedCommissionRecord>): _48.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _48.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorHistoricalRewardsRecord>): _48.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _48.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorCurrentRewardsRecord>): _48.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _48.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_48.DelegatorStartingInfoRecord>): _48.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _48.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_48.ValidatorSlashEventRecord>): _48.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            Params: {
                encode(message: _47.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Params;
                fromPartial(object: Partial<_47.Params>): _47.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _47.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewards>): _47.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _47.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorCurrentRewards;
                fromPartial(object: Partial<_47.ValidatorCurrentRewards>): _47.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _47.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommission>): _47.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _47.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewards>): _47.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _47.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorSlashEvent;
                fromPartial(object: Partial<_47.ValidatorSlashEvent>): _47.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _47.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ValidatorSlashEvents;
                fromPartial(object: Partial<_47.ValidatorSlashEvents>): _47.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _47.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.FeePool;
                fromPartial(object: Partial<_47.FeePool>): _47.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _47.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_47.CommunityPoolSpendProposal>): _47.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _47.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DelegatorStartingInfo;
                fromPartial(object: Partial<_47.DelegatorStartingInfo>): _47.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _47.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DelegationDelegatorReward;
                fromPartial(object: Partial<_47.DelegationDelegatorReward>): _47.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _47.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_47.CommunityPoolSpendProposalWithDeposit>): _47.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _54.MsgSubmitEvidence) => {
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
                    }) => _54.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _54.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MsgSubmitEvidence;
                fromPartial(object: Partial<_54.MsgSubmitEvidence>): _54.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _54.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_54.MsgSubmitEvidenceResponse>): _54.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _53.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryEvidenceRequest;
                fromPartial(object: Partial<_53.QueryEvidenceRequest>): _53.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _53.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryEvidenceResponse;
                fromPartial(object: Partial<_53.QueryEvidenceResponse>): _53.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _53.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_53.QueryAllEvidenceRequest>): _53.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _53.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_53.QueryAllEvidenceResponse>): _53.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
            Equivocation: {
                encode(message: _51.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.Equivocation;
                fromPartial(object: Partial<_51.Equivocation>): _51.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _58.MsgGrantAllowance) => {
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
                    }) => _58.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _58.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _58.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _58.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgGrantAllowance;
                fromPartial(object: Partial<_58.MsgGrantAllowance>): _58.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _58.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_58.MsgGrantAllowanceResponse>): _58.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _58.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgRevokeAllowance;
                fromPartial(object: Partial<_58.MsgRevokeAllowance>): _58.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _58.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_58.MsgRevokeAllowanceResponse>): _58.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _57.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowanceRequest;
                fromPartial(object: Partial<_57.QueryAllowanceRequest>): _57.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _57.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowanceResponse;
                fromPartial(object: Partial<_57.QueryAllowanceResponse>): _57.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _57.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowancesRequest;
                fromPartial(object: Partial<_57.QueryAllowancesRequest>): _57.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _57.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowancesResponse;
                fromPartial(object: Partial<_57.QueryAllowancesResponse>): _57.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _57.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_57.QueryAllowancesByGranterRequest>): _57.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _57.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_57.QueryAllowancesByGranterResponse>): _57.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            BasicAllowance: {
                encode(message: _55.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.BasicAllowance;
                fromPartial(object: Partial<_55.BasicAllowance>): _55.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _55.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.PeriodicAllowance;
                fromPartial(object: Partial<_55.PeriodicAllowance>): _55.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _55.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.AllowedMsgAllowance;
                fromPartial(object: Partial<_55.AllowedMsgAllowance>): _55.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _55.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Grant;
                fromPartial(object: Partial<_55.Grant>): _55.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer, isExpedited }: _63.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        is_expedited: boolean;
                    };
                    fromAmino: ({ content, initial_deposit, proposer, is_expedited }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        is_expedited: boolean;
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _63.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _63.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _63.MsgVoteWeighted) => {
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
                    }) => _63.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _63.MsgDeposit) => {
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
                    }) => _63.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitProposal;
                fromPartial(object: Partial<_63.MsgSubmitProposal>): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_63.MsgSubmitProposalResponse>): _63.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgVote;
                fromPartial(object: Partial<_63.MsgVote>): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgVoteResponse;
                fromPartial(_: Partial<_63.MsgVoteResponse>): _63.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _63.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgVoteWeighted;
                fromPartial(object: Partial<_63.MsgVoteWeighted>): _63.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _63.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_63.MsgVoteWeightedResponse>): _63.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _63.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgDeposit;
                fromPartial(object: Partial<_63.MsgDeposit>): _63.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _63.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgDepositResponse;
                fromPartial(_: Partial<_63.MsgDepositResponse>): _63.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalRequest;
                fromPartial(object: Partial<_62.QueryProposalRequest>): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalResponse;
                fromPartial(object: Partial<_62.QueryProposalResponse>): _62.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _62.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalsRequest;
                fromPartial(object: Partial<_62.QueryProposalsRequest>): _62.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _62.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalsResponse;
                fromPartial(object: Partial<_62.QueryProposalsResponse>): _62.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _62.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVoteRequest;
                fromPartial(object: Partial<_62.QueryVoteRequest>): _62.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _62.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVoteResponse;
                fromPartial(object: Partial<_62.QueryVoteResponse>): _62.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _62.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesRequest;
                fromPartial(object: Partial<_62.QueryVotesRequest>): _62.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _62.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesResponse;
                fromPartial(object: Partial<_62.QueryVotesResponse>): _62.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _62.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryParamsRequest;
                fromPartial(object: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _62.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryParamsResponse;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _62.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDepositRequest;
                fromPartial(object: Partial<_62.QueryDepositRequest>): _62.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _62.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDepositResponse;
                fromPartial(object: Partial<_62.QueryDepositResponse>): _62.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _62.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDepositsRequest;
                fromPartial(object: Partial<_62.QueryDepositsRequest>): _62.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _62.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDepositsResponse;
                fromPartial(object: Partial<_62.QueryDepositsResponse>): _62.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                fromPartial(object: Partial<_62.QueryTallyResultRequest>): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                fromPartial(object: Partial<_62.QueryTallyResultResponse>): _62.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _61.VoteOption;
            voteOptionToJSON(object: _61.VoteOption): string;
            proposalStatusFromJSON(object: any): _61.ProposalStatus;
            proposalStatusToJSON(object: _61.ProposalStatus): string;
            VoteOption: typeof _61.VoteOption;
            VoteOptionSDKType: typeof _61.VoteOption;
            ProposalStatus: typeof _61.ProposalStatus;
            ProposalStatusSDKType: typeof _61.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _61.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.WeightedVoteOption;
                fromPartial(object: Partial<_61.WeightedVoteOption>): _61.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _61.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.TextProposal;
                fromPartial(object: Partial<_61.TextProposal>): _61.TextProposal;
            };
            Deposit: {
                encode(message: _61.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Deposit;
                fromPartial(object: Partial<_61.Deposit>): _61.Deposit;
            };
            Proposal: {
                encode(message: _61.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Proposal;
                fromPartial(object: Partial<_61.Proposal>): _61.Proposal;
            };
            TallyResult: {
                encode(message: _61.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.TallyResult;
                fromPartial(object: Partial<_61.TallyResult>): _61.TallyResult;
            };
            Vote: {
                encode(message: _61.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Vote;
                fromPartial(object: Partial<_61.Vote>): _61.Vote;
            };
            DepositParams: {
                encode(message: _61.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.DepositParams;
                fromPartial(object: Partial<_61.DepositParams>): _61.DepositParams;
            };
            VotingParams: {
                encode(message: _61.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.VotingParams;
                fromPartial(object: Partial<_61.VotingParams>): _61.VotingParams;
            };
            TallyParams: {
                encode(message: _61.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.TallyParams;
                fromPartial(object: Partial<_61.TallyParams>): _61.TallyParams;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
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
            QueryInflationRequest: {
                encode(_: _66.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryInflationRequest;
                fromPartial(_: Partial<_66.QueryInflationRequest>): _66.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _66.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryInflationResponse;
                fromPartial(object: Partial<_66.QueryInflationResponse>): _66.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _66.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_66.QueryAnnualProvisionsRequest>): _66.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _66.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_66.QueryAnnualProvisionsResponse>): _66.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _65.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Minter;
                fromPartial(object: Partial<_65.Minter>): _65.Minter;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryParamsRequest;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryParamsResponse;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _67.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ParameterChangeProposal;
                fromPartial(object: Partial<_67.ParameterChangeProposal>): _67.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _67.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ParamChange;
                fromPartial(object: Partial<_67.ParamChange>): _67.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                signingInfo(request: _70.QuerySigningInfoRequest): Promise<_70.QuerySigningInfoResponse>;
                signingInfos(request?: _70.QuerySigningInfosRequest): Promise<_70.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _72.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _72.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _72.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgUnjail;
                fromPartial(object: Partial<_72.MsgUnjail>): _72.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _72.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgUnjailResponse;
                fromPartial(_: Partial<_72.MsgUnjailResponse>): _72.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _71.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.ValidatorSigningInfo;
                fromPartial(object: Partial<_71.ValidatorSigningInfo>): _71.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
            };
            QueryParamsRequest: {
                encode(_: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.QueryParamsRequest;
                fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryParamsResponse;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _70.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QuerySigningInfoRequest;
                fromPartial(object: Partial<_70.QuerySigningInfoRequest>): _70.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _70.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QuerySigningInfoResponse;
                fromPartial(object: Partial<_70.QuerySigningInfoResponse>): _70.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _70.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QuerySigningInfosRequest;
                fromPartial(object: Partial<_70.QuerySigningInfosRequest>): _70.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _70.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QuerySigningInfosResponse;
                fromPartial(object: Partial<_70.QuerySigningInfosResponse>): _70.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            SigningInfo: {
                encode(message: _69.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.SigningInfo;
                fromPartial(object: Partial<_69.SigningInfo>): _69.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _69.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.ValidatorMissedBlocks;
                fromPartial(object: Partial<_69.ValidatorMissedBlocks>): _69.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _69.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MissedBlock;
                fromPartial(object: Partial<_69.MissedBlock>): _69.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _75.QueryValidatorsRequest): Promise<_75.QueryValidatorsResponse>;
                validator(request: _75.QueryValidatorRequest): Promise<_75.QueryValidatorResponse>;
                validatorDelegations(request: _75.QueryValidatorDelegationsRequest): Promise<_75.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _75.QueryValidatorUnbondingDelegationsRequest): Promise<_75.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _75.QueryDelegationRequest): Promise<_75.QueryDelegationResponse>;
                unbondingDelegation(request: _75.QueryUnbondingDelegationRequest): Promise<_75.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _75.QueryDelegatorDelegationsRequest): Promise<_75.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _75.QueryDelegatorUnbondingDelegationsRequest): Promise<_75.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _75.QueryRedelegationsRequest): Promise<_75.QueryRedelegationsResponse>;
                delegatorValidators(request: _75.QueryDelegatorValidatorsRequest): Promise<_75.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _75.QueryDelegatorValidatorRequest): Promise<_75.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _75.QueryHistoricalInfoRequest): Promise<_75.QueryHistoricalInfoResponse>;
                pool(request?: _75.QueryPoolRequest): Promise<_75.QueryPoolResponse>;
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _77.MsgCreateValidator) => {
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
                    }) => _77.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _77.MsgEditValidator) => {
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
                    }) => _77.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _77.MsgDelegate) => {
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
                    }) => _77.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _77.MsgBeginRedelegate) => {
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
                    }) => _77.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _77.MsgUndelegate) => {
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
                    }) => _77.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _77.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgCreateValidator;
                fromPartial(object: Partial<_77.MsgCreateValidator>): _77.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _77.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _77.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_77.MsgCreateValidatorResponse>): _77.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _77.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgEditValidator;
                fromPartial(object: Partial<_77.MsgEditValidator>): _77.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _77.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _77.MsgEditValidatorResponse;
                fromPartial(_: Partial<_77.MsgEditValidatorResponse>): _77.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _77.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgDelegate;
                fromPartial(object: Partial<_77.MsgDelegate>): _77.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _77.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _77.MsgDelegateResponse;
                fromPartial(_: Partial<_77.MsgDelegateResponse>): _77.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _77.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgBeginRedelegate;
                fromPartial(object: Partial<_77.MsgBeginRedelegate>): _77.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _77.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_77.MsgBeginRedelegateResponse>): _77.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _77.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgUndelegate;
                fromPartial(object: Partial<_77.MsgUndelegate>): _77.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _77.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.MsgUndelegateResponse;
                fromPartial(object: Partial<_77.MsgUndelegateResponse>): _77.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _76.BondStatus;
            bondStatusToJSON(object: _76.BondStatus): string;
            BondStatus: typeof _76.BondStatus;
            BondStatusSDKType: typeof _76.BondStatus;
            HistoricalInfo: {
                encode(message: _76.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.HistoricalInfo;
                fromPartial(object: Partial<_76.HistoricalInfo>): _76.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _76.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.CommissionRates;
                fromPartial(object: Partial<_76.CommissionRates>): _76.CommissionRates;
            };
            Commission: {
                encode(message: _76.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Commission;
                fromPartial(object: Partial<_76.Commission>): _76.Commission;
            };
            Description: {
                encode(message: _76.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Description;
                fromPartial(object: Partial<_76.Description>): _76.Description;
            };
            Validator: {
                encode(message: _76.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Validator;
                fromPartial(object: Partial<_76.Validator>): _76.Validator;
            };
            ValAddresses: {
                encode(message: _76.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ValAddresses;
                fromPartial(object: Partial<_76.ValAddresses>): _76.ValAddresses;
            };
            DVPair: {
                encode(message: _76.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DVPair;
                fromPartial(object: Partial<_76.DVPair>): _76.DVPair;
            };
            DVPairs: {
                encode(message: _76.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DVPairs;
                fromPartial(object: Partial<_76.DVPairs>): _76.DVPairs;
            };
            DVVTriplet: {
                encode(message: _76.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DVVTriplet;
                fromPartial(object: Partial<_76.DVVTriplet>): _76.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _76.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DVVTriplets;
                fromPartial(object: Partial<_76.DVVTriplets>): _76.DVVTriplets;
            };
            Delegation: {
                encode(message: _76.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Delegation;
                fromPartial(object: Partial<_76.Delegation>): _76.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _76.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.UnbondingDelegation;
                fromPartial(object: Partial<_76.UnbondingDelegation>): _76.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _76.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.UnbondingDelegationEntry;
                fromPartial(object: Partial<_76.UnbondingDelegationEntry>): _76.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _76.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.RedelegationEntry;
                fromPartial(object: Partial<_76.RedelegationEntry>): _76.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _76.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Redelegation;
                fromPartial(object: Partial<_76.Redelegation>): _76.Redelegation;
            };
            Params: {
                encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Params;
                fromPartial(object: Partial<_76.Params>): _76.Params;
            };
            DelegationResponse: {
                encode(message: _76.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DelegationResponse;
                fromPartial(object: Partial<_76.DelegationResponse>): _76.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _76.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.RedelegationEntryResponse;
                fromPartial(object: Partial<_76.RedelegationEntryResponse>): _76.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _76.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.RedelegationResponse;
                fromPartial(object: Partial<_76.RedelegationResponse>): _76.RedelegationResponse;
            };
            Pool: {
                encode(message: _76.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Pool;
                fromPartial(object: Partial<_76.Pool>): _76.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _75.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorsRequest;
                fromPartial(object: Partial<_75.QueryValidatorsRequest>): _75.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _75.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorsResponse;
                fromPartial(object: Partial<_75.QueryValidatorsResponse>): _75.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _75.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorRequest;
                fromPartial(object: Partial<_75.QueryValidatorRequest>): _75.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _75.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorResponse;
                fromPartial(object: Partial<_75.QueryValidatorResponse>): _75.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _75.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_75.QueryValidatorDelegationsRequest>): _75.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _75.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_75.QueryValidatorDelegationsResponse>): _75.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _75.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_75.QueryValidatorUnbondingDelegationsRequest>): _75.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _75.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_75.QueryValidatorUnbondingDelegationsResponse>): _75.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _75.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegationRequest;
                fromPartial(object: Partial<_75.QueryDelegationRequest>): _75.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _75.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegationResponse;
                fromPartial(object: Partial<_75.QueryDelegationResponse>): _75.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _75.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_75.QueryUnbondingDelegationRequest>): _75.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _75.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_75.QueryUnbondingDelegationResponse>): _75.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _75.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorDelegationsRequest>): _75.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _75.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorDelegationsResponse>): _75.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _75.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorUnbondingDelegationsRequest>): _75.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _75.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorUnbondingDelegationsResponse>): _75.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _75.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryRedelegationsRequest;
                fromPartial(object: Partial<_75.QueryRedelegationsRequest>): _75.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _75.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryRedelegationsResponse;
                fromPartial(object: Partial<_75.QueryRedelegationsResponse>): _75.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _75.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorsRequest>): _75.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _75.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorsResponse>): _75.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _75.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorRequest>): _75.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _75.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorResponse>): _75.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _75.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_75.QueryHistoricalInfoRequest>): _75.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _75.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_75.QueryHistoricalInfoResponse>): _75.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _75.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.QueryPoolRequest;
                fromPartial(_: Partial<_75.QueryPoolRequest>): _75.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _75.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryPoolResponse;
                fromPartial(object: Partial<_75.QueryPoolResponse>): _75.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.QueryParamsRequest;
                fromPartial(_: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _74.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.LastValidatorPower;
                fromPartial(object: Partial<_74.LastValidatorPower>): _74.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _73.AuthorizationType;
            authorizationTypeToJSON(object: _73.AuthorizationType): string;
            AuthorizationType: typeof _73.AuthorizationType;
            AuthorizationTypeSDKType: typeof _73.AuthorizationType;
            StakeAuthorization: {
                encode(message: _73.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.StakeAuthorization;
                fromPartial(object: Partial<_73.StakeAuthorization>): _73.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _73.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.StakeAuthorization_Validators;
                fromPartial(object: Partial<_73.StakeAuthorization_Validators>): _73.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _78.SignMode;
                signModeToJSON(object: _78.SignMode): string;
                SignMode: typeof _78.SignMode;
                SignModeSDKType: typeof _78.SignMode;
                SignatureDescriptors: {
                    encode(message: _78.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.SignatureDescriptors;
                    fromPartial(object: Partial<_78.SignatureDescriptors>): _78.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _78.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.SignatureDescriptor;
                    fromPartial(object: Partial<_78.SignatureDescriptor>): _78.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _78.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data>): _78.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _78.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data_Single>): _78.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _78.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data_Multi>): _78.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _224.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _79.SimulateRequest): Promise<_79.SimulateResponse>;
                getTx(request: _79.GetTxRequest): Promise<_79.GetTxResponse>;
                broadcastTx(request: _79.BroadcastTxRequest): Promise<_79.BroadcastTxResponse>;
                getTxsEvent(request: _79.GetTxsEventRequest): Promise<_79.GetTxsEventResponse>;
                getBlockWithTxs(request: _79.GetBlockWithTxsRequest): Promise<_79.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            Tx: {
                encode(message: _80.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Tx;
                fromPartial(object: Partial<_80.Tx>): _80.Tx;
            };
            TxRaw: {
                encode(message: _80.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.TxRaw;
                fromPartial(object: Partial<_80.TxRaw>): _80.TxRaw;
            };
            SignDoc: {
                encode(message: _80.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.SignDoc;
                fromPartial(object: Partial<_80.SignDoc>): _80.SignDoc;
            };
            TxBody: {
                encode(message: _80.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.TxBody;
                fromPartial(object: Partial<_80.TxBody>): _80.TxBody;
            };
            AuthInfo: {
                encode(message: _80.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.AuthInfo;
                fromPartial(object: Partial<_80.AuthInfo>): _80.AuthInfo;
            };
            SignerInfo: {
                encode(message: _80.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.SignerInfo;
                fromPartial(object: Partial<_80.SignerInfo>): _80.SignerInfo;
            };
            ModeInfo: {
                encode(message: _80.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ModeInfo;
                fromPartial(object: Partial<_80.ModeInfo>): _80.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _80.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ModeInfo_Single;
                fromPartial(object: Partial<_80.ModeInfo_Single>): _80.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _80.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ModeInfo_Multi;
                fromPartial(object: Partial<_80.ModeInfo_Multi>): _80.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _80.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Fee;
                fromPartial(object: Partial<_80.Fee>): _80.Fee;
            };
            orderByFromJSON(object: any): _79.OrderBy;
            orderByToJSON(object: _79.OrderBy): string;
            broadcastModeFromJSON(object: any): _79.BroadcastMode;
            broadcastModeToJSON(object: _79.BroadcastMode): string;
            OrderBy: typeof _79.OrderBy;
            OrderBySDKType: typeof _79.OrderBy;
            BroadcastMode: typeof _79.BroadcastMode;
            BroadcastModeSDKType: typeof _79.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _79.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetTxsEventRequest;
                fromPartial(object: Partial<_79.GetTxsEventRequest>): _79.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _79.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetTxsEventResponse;
                fromPartial(object: Partial<_79.GetTxsEventResponse>): _79.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _79.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.BroadcastTxRequest;
                fromPartial(object: Partial<_79.BroadcastTxRequest>): _79.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _79.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.BroadcastTxResponse;
                fromPartial(object: Partial<_79.BroadcastTxResponse>): _79.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _79.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.SimulateRequest;
                fromPartial(object: Partial<_79.SimulateRequest>): _79.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _79.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.SimulateResponse;
                fromPartial(object: Partial<_79.SimulateResponse>): _79.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _79.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetTxRequest;
                fromPartial(object: Partial<_79.GetTxRequest>): _79.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _79.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetTxResponse;
                fromPartial(object: Partial<_79.GetTxResponse>): _79.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _79.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_79.GetBlockWithTxsRequest>): _79.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _79.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_79.GetBlockWithTxsResponse>): _79.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _81.QueryCurrentPlanRequest): Promise<_81.QueryCurrentPlanResponse>;
                appliedPlan(request: _81.QueryAppliedPlanRequest): Promise<_81.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _81.QueryModuleVersionsRequest): Promise<_81.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            Plan: {
                encode(message: _82.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Plan;
                fromPartial(object: Partial<_82.Plan>): _82.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _82.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_82.SoftwareUpgradeProposal>): _82.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _82.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_82.CancelSoftwareUpgradeProposal>): _82.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _82.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.ModuleVersion;
                fromPartial(object: Partial<_82.ModuleVersion>): _82.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _81.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_81.QueryCurrentPlanRequest>): _81.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _81.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_81.QueryCurrentPlanResponse>): _81.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _81.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_81.QueryAppliedPlanRequest>): _81.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _81.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_81.QueryAppliedPlanResponse>): _81.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _81.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_81.QueryUpgradedConsensusStateRequest>): _81.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _81.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_81.QueryUpgradedConsensusStateResponse>): _81.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _81.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_81.QueryModuleVersionsRequest>): _81.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _81.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_81.QueryModuleVersionsResponse>): _81.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _83.MsgCreateVestingAccount) => {
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
                    }) => _83.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _84.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.BaseVestingAccount;
                fromPartial(object: Partial<_84.BaseVestingAccount>): _84.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _84.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ContinuousVestingAccount;
                fromPartial(object: Partial<_84.ContinuousVestingAccount>): _84.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _84.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.DelayedVestingAccount;
                fromPartial(object: Partial<_84.DelayedVestingAccount>): _84.DelayedVestingAccount;
            };
            Period: {
                encode(message: _84.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.Period;
                fromPartial(object: Partial<_84.Period>): _84.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _84.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.PeriodicVestingAccount;
                fromPartial(object: Partial<_84.PeriodicVestingAccount>): _84.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _84.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.PermanentLockedAccount;
                fromPartial(object: Partial<_84.PermanentLockedAccount>): _84.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _83.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgCreateVestingAccount;
                fromPartial(object: Partial<_83.MsgCreateVestingAccount>): _83.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _83.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_83.MsgCreateVestingAccountResponse>): _83.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _226.MsgClientImpl;
                };
                bank: {
                    v1beta1: _227.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _228.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _229.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _230.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _231.MsgClientImpl;
                };
                gov: {
                    v1beta1: _232.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _233.MsgClientImpl;
                };
                staking: {
                    v1beta1: _234.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _235.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                        account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _21.QueryGrantsRequest): Promise<_21.QueryGrantsResponse>;
                        granterGrants(request: _21.QueryGranterGrantsRequest): Promise<_21.QueryGranterGrantsResponse>;
                        granteeGrants(request: _21.QueryGranteeGrantsRequest): Promise<_21.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                        allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                        spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                        supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                        };
                    };
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
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
                        foundationTax(request?: _49.QueryFoundationTaxRequest): Promise<_49.QueryFoundationTaxResponse>;
                        restakeThreshold(request?: _49.QueryRestakeThresholdRequest): Promise<_49.QueryRestakeThresholdResponse>;
                        restakingEntries(request: _49.QueryRestakeEntriesRequest): Promise<_49.QueryRestakingEntriesResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                        allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                        allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                        allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                        vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                        votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                        params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                        deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                        annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        signingInfo(request: _70.QuerySigningInfoRequest): Promise<_70.QuerySigningInfoResponse>;
                        signingInfos(request?: _70.QuerySigningInfosRequest): Promise<_70.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _75.QueryValidatorsRequest): Promise<_75.QueryValidatorsResponse>;
                        validator(request: _75.QueryValidatorRequest): Promise<_75.QueryValidatorResponse>;
                        validatorDelegations(request: _75.QueryValidatorDelegationsRequest): Promise<_75.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _75.QueryValidatorUnbondingDelegationsRequest): Promise<_75.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _75.QueryDelegationRequest): Promise<_75.QueryDelegationResponse>;
                        unbondingDelegation(request: _75.QueryUnbondingDelegationRequest): Promise<_75.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _75.QueryDelegatorDelegationsRequest): Promise<_75.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _75.QueryDelegatorUnbondingDelegationsRequest): Promise<_75.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _75.QueryRedelegationsRequest): Promise<_75.QueryRedelegationsResponse>;
                        delegatorValidators(request: _75.QueryDelegatorValidatorsRequest): Promise<_75.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _75.QueryDelegatorValidatorRequest): Promise<_75.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _75.QueryHistoricalInfoRequest): Promise<_75.QueryHistoricalInfoResponse>;
                        pool(request?: _75.QueryPoolRequest): Promise<_75.QueryPoolResponse>;
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _79.SimulateRequest): Promise<_79.SimulateResponse>;
                        getTx(request: _79.GetTxRequest): Promise<_79.GetTxResponse>;
                        broadcastTx(request: _79.BroadcastTxRequest): Promise<_79.BroadcastTxResponse>;
                        getTxsEvent(request: _79.GetTxsEventRequest): Promise<_79.GetTxsEventResponse>;
                        getBlockWithTxs(request: _79.GetBlockWithTxsRequest): Promise<_79.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _81.QueryCurrentPlanRequest): Promise<_81.QueryCurrentPlanResponse>;
                        appliedPlan(request: _81.QueryAppliedPlanRequest): Promise<_81.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _81.QueryModuleVersionsRequest): Promise<_81.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _196.LCDQueryClient;
                };
                authz: {
                    v1beta1: _197.LCDQueryClient;
                };
                bank: {
                    v1beta1: _198.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _199.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _200.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _201.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _202.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _203.LCDQueryClient;
                };
                gov: {
                    v1beta1: _204.LCDQueryClient;
                };
                mint: {
                    v1beta1: _205.LCDQueryClient;
                };
                params: {
                    v1beta1: _206.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _207.LCDQueryClient;
                };
                staking: {
                    v1beta1: _208.LCDQueryClient;
                };
                tx: {
                    v1beta1: _209.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _210.LCDQueryClient;
                };
            };
        }>;
    };
}
