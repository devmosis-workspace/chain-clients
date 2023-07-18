import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/kv/v1beta1/kv";
import * as _25 from "./base/node/v1beta1/query";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/v1beta1/evidence";
import * as _47 from "./evidence/v1beta1/genesis";
import * as _48 from "./evidence/v1beta1/query";
import * as _49 from "./evidence/v1beta1/tx";
import * as _50 from "./feegrant/v1beta1/feegrant";
import * as _51 from "./feegrant/v1beta1/genesis";
import * as _52 from "./feegrant/v1beta1/query";
import * as _53 from "./feegrant/v1beta1/tx";
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
import * as _68 from "./staking/v1beta1/authz";
import * as _69 from "./staking/v1beta1/genesis";
import * as _70 from "./staking/v1beta1/query";
import * as _71 from "./staking/v1beta1/staking";
import * as _72 from "./staking/v1beta1/tx";
import * as _73 from "./tx/signing/v1beta1/signing";
import * as _74 from "./tx/v1beta1/service";
import * as _75 from "./tx/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/query";
import * as _77 from "./upgrade/v1beta1/upgrade";
import * as _78 from "./vesting/v1beta1/tx";
import * as _79 from "./vesting/v1beta1/vesting";
import * as _142 from "./auth/v1beta1/query.lcd";
import * as _143 from "./authz/v1beta1/query.lcd";
import * as _144 from "./bank/v1beta1/query.lcd";
import * as _145 from "./base/node/v1beta1/query.lcd";
import * as _146 from "./base/tendermint/v1beta1/query.lcd";
import * as _147 from "./distribution/v1beta1/query.lcd";
import * as _148 from "./evidence/v1beta1/query.lcd";
import * as _149 from "./feegrant/v1beta1/query.lcd";
import * as _150 from "./gov/v1beta1/query.lcd";
import * as _151 from "./mint/v1beta1/query.lcd";
import * as _152 from "./params/v1beta1/query.lcd";
import * as _153 from "./slashing/v1beta1/query.lcd";
import * as _154 from "./staking/v1beta1/query.lcd";
import * as _155 from "./tx/v1beta1/service.lcd";
import * as _156 from "./upgrade/v1beta1/query.lcd";
import * as _157 from "./auth/v1beta1/query.rpc.Query";
import * as _158 from "./authz/v1beta1/query.rpc.Query";
import * as _159 from "./bank/v1beta1/query.rpc.Query";
import * as _160 from "./base/node/v1beta1/query.rpc.Service";
import * as _161 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _162 from "./distribution/v1beta1/query.rpc.Query";
import * as _163 from "./evidence/v1beta1/query.rpc.Query";
import * as _164 from "./feegrant/v1beta1/query.rpc.Query";
import * as _165 from "./gov/v1beta1/query.rpc.Query";
import * as _166 from "./mint/v1beta1/query.rpc.Query";
import * as _167 from "./params/v1beta1/query.rpc.Query";
import * as _168 from "./slashing/v1beta1/query.rpc.Query";
import * as _169 from "./staking/v1beta1/query.rpc.Query";
import * as _170 from "./tx/v1beta1/service.rpc.Service";
import * as _171 from "./upgrade/v1beta1/query.rpc.Query";
import * as _172 from "./authz/v1beta1/tx.rpc.msg";
import * as _173 from "./bank/v1beta1/tx.rpc.msg";
import * as _174 from "./crisis/v1beta1/tx.rpc.msg";
import * as _175 from "./distribution/v1beta1/tx.rpc.msg";
import * as _176 from "./evidence/v1beta1/tx.rpc.msg";
import * as _177 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./slashing/v1beta1/tx.rpc.msg";
import * as _180 from "./staking/v1beta1/tx.rpc.msg";
import * as _181 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _12.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAccountsRequest;
                fromPartial(object: Partial<_12.QueryAccountsRequest>): _12.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _12.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAccountsResponse;
                fromPartial(object: Partial<_12.QueryAccountsResponse>): _12.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _12.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAccountRequest;
                fromPartial(object: Partial<_12.QueryAccountRequest>): _12.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _12.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAccountResponse;
                fromPartial(object: Partial<_12.QueryAccountResponse>): _12.QueryAccountResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _12.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameRequest>): _12.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _12.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameResponse>): _12.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            BaseAccount: {
                encode(message: _10.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BaseAccount;
                fromPartial(object: Partial<_10.BaseAccount>): _10.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _10.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ModuleAccount;
                fromPartial(object: Partial<_10.ModuleAccount>): _10.ModuleAccount;
            };
            Params: {
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _17.MsgGrant) => {
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
                    }) => _17.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _17.MsgExec) => {
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
                    }) => _17.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _17.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _17.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _17.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgGrant;
                fromPartial(object: Partial<_17.MsgGrant>): _17.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _17.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgExecResponse;
                fromPartial(object: Partial<_17.MsgExecResponse>): _17.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _17.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgExec;
                fromPartial(object: Partial<_17.MsgExec>): _17.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _17.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgGrantResponse;
                fromPartial(_: Partial<_17.MsgGrantResponse>): _17.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _17.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgRevoke;
                fromPartial(object: Partial<_17.MsgRevoke>): _17.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _17.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgRevokeResponse;
                fromPartial(_: Partial<_17.MsgRevokeResponse>): _17.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _16.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGrantsRequest;
                fromPartial(object: Partial<_16.QueryGrantsRequest>): _16.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _16.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGrantsResponse;
                fromPartial(object: Partial<_16.QueryGrantsResponse>): _16.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _16.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_16.QueryGranterGrantsRequest>): _16.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _16.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_16.QueryGranterGrantsResponse>): _16.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _16.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_16.QueryGranteeGrantsRequest>): _16.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _16.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_16.QueryGranteeGrantsResponse>): _16.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            EventGrant: {
                encode(message: _14.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventGrant;
                fromPartial(object: Partial<_14.EventGrant>): _14.EventGrant;
            };
            EventRevoke: {
                encode(message: _14.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventRevoke;
                fromPartial(object: Partial<_14.EventRevoke>): _14.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _13.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenericAuthorization;
                fromPartial(object: Partial<_13.GenericAuthorization>): _13.GenericAuthorization;
            };
            Grant: {
                encode(message: _13.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Grant;
                fromPartial(object: Partial<_13.Grant>): _13.Grant;
            };
            GrantAuthorization: {
                encode(message: _13.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GrantAuthorization;
                fromPartial(object: Partial<_13.GrantAuthorization>): _13.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _22.MsgSend) => {
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
                    }) => _22.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _22.MsgMultiSend) => {
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
                    }) => _22.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _22.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgSend;
                fromPartial(object: Partial<_22.MsgSend>): _22.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _22.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgSendResponse;
                fromPartial(_: Partial<_22.MsgSendResponse>): _22.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _22.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgMultiSend;
                fromPartial(object: Partial<_22.MsgMultiSend>): _22.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _22.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgMultiSendResponse;
                fromPartial(_: Partial<_22.MsgMultiSendResponse>): _22.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _21.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryBalanceRequest;
                fromPartial(object: Partial<_21.QueryBalanceRequest>): _21.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _21.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryBalanceResponse;
                fromPartial(object: Partial<_21.QueryBalanceResponse>): _21.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _21.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAllBalancesRequest;
                fromPartial(object: Partial<_21.QueryAllBalancesRequest>): _21.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _21.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAllBalancesResponse;
                fromPartial(object: Partial<_21.QueryAllBalancesResponse>): _21.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _21.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_21.QuerySpendableBalancesRequest>): _21.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _21.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_21.QuerySpendableBalancesResponse>): _21.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _21.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_21.QueryTotalSupplyRequest>): _21.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _21.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_21.QueryTotalSupplyResponse>): _21.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _21.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QuerySupplyOfRequest;
                fromPartial(object: Partial<_21.QuerySupplyOfRequest>): _21.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _21.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QuerySupplyOfResponse;
                fromPartial(object: Partial<_21.QuerySupplyOfResponse>): _21.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _21.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_21.QueryDenomsMetadataRequest>): _21.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _21.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_21.QueryDenomsMetadataResponse>): _21.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _21.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_21.QueryDenomMetadataRequest>): _21.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _21.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_21.QueryDenomMetadataResponse>): _21.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
            };
            Balance: {
                encode(message: _20.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Balance;
                fromPartial(object: Partial<_20.Balance>): _20.Balance;
            };
            Params: {
                encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
            };
            SendEnabled: {
                encode(message: _19.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SendEnabled;
                fromPartial(object: Partial<_19.SendEnabled>): _19.SendEnabled;
            };
            Input: {
                encode(message: _19.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Input;
                fromPartial(object: Partial<_19.Input>): _19.Input;
            };
            Output: {
                encode(message: _19.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Output;
                fromPartial(object: Partial<_19.Output>): _19.Output;
            };
            Supply: {
                encode(message: _19.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Supply;
                fromPartial(object: Partial<_19.Supply>): _19.Supply;
            };
            DenomUnit: {
                encode(message: _19.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.DenomUnit;
                fromPartial(object: Partial<_19.DenomUnit>): _19.DenomUnit;
            };
            Metadata: {
                encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Metadata;
                fromPartial(object: Partial<_19.Metadata>): _19.Metadata;
            };
            SendAuthorization: {
                encode(message: _18.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.SendAuthorization;
                fromPartial(object: Partial<_18.SendAuthorization>): _18.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _23.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.TxResponse;
                    fromPartial(object: Partial<_23.TxResponse>): _23.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _23.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.ABCIMessageLog;
                    fromPartial(object: Partial<_23.ABCIMessageLog>): _23.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _23.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.StringEvent;
                    fromPartial(object: Partial<_23.StringEvent>): _23.StringEvent;
                };
                Attribute: {
                    encode(message: _23.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.Attribute;
                    fromPartial(object: Partial<_23.Attribute>): _23.Attribute;
                };
                GasInfo: {
                    encode(message: _23.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.GasInfo;
                    fromPartial(object: Partial<_23.GasInfo>): _23.GasInfo;
                };
                Result: {
                    encode(message: _23.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.Result;
                    fromPartial(object: Partial<_23.Result>): _23.Result;
                };
                SimulationResponse: {
                    encode(message: _23.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SimulationResponse;
                    fromPartial(object: Partial<_23.SimulationResponse>): _23.SimulationResponse;
                };
                MsgData: {
                    encode(message: _23.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.MsgData;
                    fromPartial(object: Partial<_23.MsgData>): _23.MsgData;
                };
                TxMsgData: {
                    encode(message: _23.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.TxMsgData;
                    fromPartial(object: Partial<_23.TxMsgData>): _23.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _23.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SearchTxsResult;
                    fromPartial(object: Partial<_23.SearchTxsResult>): _23.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _24.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Pairs;
                    fromPartial(object: Partial<_24.Pairs>): _24.Pairs;
                };
                Pair: {
                    encode(message: _24.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Pair;
                    fromPartial(object: Partial<_24.Pair>): _24.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _160.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _25.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.ConfigRequest;
                    fromPartial(_: Partial<_25.ConfigRequest>): _25.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _25.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ConfigResponse;
                    fromPartial(object: Partial<_25.ConfigResponse>): _25.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _26.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.PageRequest;
                    fromPartial(object: Partial<_26.PageRequest>): _26.PageRequest;
                };
                PageResponse: {
                    encode(message: _26.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.PageResponse;
                    fromPartial(object: Partial<_26.PageResponse>): _26.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _27.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _27.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_27.ListAllInterfacesRequest>): _27.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _27.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_27.ListAllInterfacesResponse>): _27.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _27.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.ListImplementationsRequest;
                    fromPartial(object: Partial<_27.ListImplementationsRequest>): _27.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _27.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.ListImplementationsResponse;
                    fromPartial(object: Partial<_27.ListImplementationsResponse>): _27.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _28.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.AppDescriptor;
                    fromPartial(object: Partial<_28.AppDescriptor>): _28.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _28.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.TxDescriptor;
                    fromPartial(object: Partial<_28.TxDescriptor>): _28.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _28.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.AuthnDescriptor;
                    fromPartial(object: Partial<_28.AuthnDescriptor>): _28.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _28.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.SigningModeDescriptor;
                    fromPartial(object: Partial<_28.SigningModeDescriptor>): _28.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _28.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ChainDescriptor;
                    fromPartial(object: Partial<_28.ChainDescriptor>): _28.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _28.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.CodecDescriptor;
                    fromPartial(object: Partial<_28.CodecDescriptor>): _28.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _28.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.InterfaceDescriptor;
                    fromPartial(object: Partial<_28.InterfaceDescriptor>): _28.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _28.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_28.InterfaceImplementerDescriptor>): _28.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _28.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_28.InterfaceAcceptingMessageDescriptor>): _28.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _28.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ConfigurationDescriptor;
                    fromPartial(object: Partial<_28.ConfigurationDescriptor>): _28.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _28.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.MsgDescriptor;
                    fromPartial(object: Partial<_28.MsgDescriptor>): _28.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _28.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_28.GetAuthnDescriptorRequest>): _28.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _28.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_28.GetAuthnDescriptorResponse>): _28.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _28.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_28.GetChainDescriptorRequest>): _28.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _28.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_28.GetChainDescriptorResponse>): _28.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _28.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_28.GetCodecDescriptorRequest>): _28.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _28.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_28.GetCodecDescriptorResponse>): _28.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _28.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_28.GetConfigurationDescriptorRequest>): _28.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _28.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_28.GetConfigurationDescriptorResponse>): _28.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _28.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_28.GetQueryServicesDescriptorRequest>): _28.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _28.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_28.GetQueryServicesDescriptorResponse>): _28.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _28.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_28.GetTxDescriptorRequest>): _28.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _28.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_28.GetTxDescriptorResponse>): _28.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _28.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.QueryServicesDescriptor;
                    fromPartial(object: Partial<_28.QueryServicesDescriptor>): _28.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _28.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.QueryServiceDescriptor;
                    fromPartial(object: Partial<_28.QueryServiceDescriptor>): _28.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _28.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.QueryMethodDescriptor;
                    fromPartial(object: Partial<_28.QueryMethodDescriptor>): _28.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _29.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Snapshot;
                    fromPartial(object: Partial<_29.Snapshot>): _29.Snapshot;
                };
                Metadata: {
                    encode(message: _29.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.Metadata;
                    fromPartial(object: Partial<_29.Metadata>): _29.Metadata;
                };
                SnapshotItem: {
                    encode(message: _29.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SnapshotItem;
                    fromPartial(object: Partial<_29.SnapshotItem>): _29.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _29.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SnapshotStoreItem;
                    fromPartial(object: Partial<_29.SnapshotStoreItem>): _29.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _29.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SnapshotIAVLItem;
                    fromPartial(object: Partial<_29.SnapshotIAVLItem>): _29.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _29.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_29.SnapshotExtensionMeta>): _29.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _29.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_29.SnapshotExtensionPayload>): _29.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _31.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.StoreKVPair;
                    fromPartial(object: Partial<_31.StoreKVPair>): _31.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _30.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.CommitInfo;
                    fromPartial(object: Partial<_30.CommitInfo>): _30.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _30.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.StoreInfo;
                    fromPartial(object: Partial<_30.StoreInfo>): _30.StoreInfo;
                };
                CommitID: {
                    encode(message: _30.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.CommitID;
                    fromPartial(object: Partial<_30.CommitID>): _30.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _161.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                    getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                    getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                    getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _146.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightRequest>): _32.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightResponse>): _32.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetRequest>): _32.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetResponse>): _32.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _32.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.Validator;
                    fromPartial(object: Partial<_32.Validator>): _32.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_32.GetBlockByHeightRequest>): _32.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_32.GetBlockByHeightResponse>): _32.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _32.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetLatestBlockRequest;
                    fromPartial(_: Partial<_32.GetLatestBlockRequest>): _32.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _32.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetLatestBlockResponse;
                    fromPartial(object: Partial<_32.GetLatestBlockResponse>): _32.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _32.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetSyncingRequest;
                    fromPartial(_: Partial<_32.GetSyncingRequest>): _32.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _32.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetSyncingResponse;
                    fromPartial(object: Partial<_32.GetSyncingResponse>): _32.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _32.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetNodeInfoRequest;
                    fromPartial(_: Partial<_32.GetNodeInfoRequest>): _32.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _32.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetNodeInfoResponse;
                    fromPartial(object: Partial<_32.GetNodeInfoResponse>): _32.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _32.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.VersionInfo;
                    fromPartial(object: Partial<_32.VersionInfo>): _32.VersionInfo;
                };
                Module: {
                    encode(message: _32.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.Module;
                    fromPartial(object: Partial<_32.Module>): _32.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _33.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Coin;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
            };
            DecCoin: {
                encode(message: _33.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.DecCoin;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
            };
            IntProto: {
                encode(message: _33.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.IntProto;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
            };
            DecProto: {
                encode(message: _33.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.DecProto;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _35.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisOwners;
                fromPartial(object: Partial<_35.GenesisOwners>): _35.GenesisOwners;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            Capability: {
                encode(message: _34.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Capability;
                fromPartial(object: Partial<_34.Capability>): _34.Capability;
            };
            Owner: {
                encode(message: _34.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Owner;
                fromPartial(object: Partial<_34.Owner>): _34.Owner;
            };
            CapabilityOwners: {
                encode(message: _34.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.CapabilityOwners;
                fromPartial(object: Partial<_34.CapabilityOwners>): _34.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _37.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _37.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _37.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgVerifyInvariant;
                fromPartial(object: Partial<_37.MsgVerifyInvariant>): _37.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _37.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_37.MsgVerifyInvariantResponse>): _37.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _39.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.LegacyAminoPubKey;
                fromPartial(object: Partial<_39.LegacyAminoPubKey>): _39.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.PubKey;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.PrivKey;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _45.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _45.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _45.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _45.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _45.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _45.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _45.MsgFundCommunityPool) => {
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
                    }) => _45.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _45.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_45.MsgSetWithdrawAddress>): _45.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _45.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_45.MsgSetWithdrawAddressResponse>): _45.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _45.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_45.MsgWithdrawDelegatorReward>): _45.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _45.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_45.MsgWithdrawDelegatorRewardResponse>): _45.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _45.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_45.MsgWithdrawValidatorCommission>): _45.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _45.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_45.MsgWithdrawValidatorCommissionResponse>): _45.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _45.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgFundCommunityPool;
                fromPartial(object: Partial<_45.MsgFundCommunityPool>): _45.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _45.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_45.MsgFundCommunityPoolResponse>): _45.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _44.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.QueryParamsRequest;
                fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _44.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryParamsResponse;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _44.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsRequest>): _44.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _44.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsResponse>): _44.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _44.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_44.QueryValidatorCommissionRequest>): _44.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _44.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_44.QueryValidatorCommissionResponse>): _44.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _44.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_44.QueryValidatorSlashesRequest>): _44.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _44.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_44.QueryValidatorSlashesResponse>): _44.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _44.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_44.QueryDelegationRewardsRequest>): _44.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _44.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_44.QueryDelegationRewardsResponse>): _44.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _44.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsRequest>): _44.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _44.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsResponse>): _44.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _44.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsRequest>): _44.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _44.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsResponse>): _44.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _44.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressRequest>): _44.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _44.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressResponse>): _44.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _44.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_44.QueryCommunityPoolRequest>): _44.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _44.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_44.QueryCommunityPoolResponse>): _44.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _43.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_43.DelegatorWithdrawInfo>): _43.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _43.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorOutstandingRewardsRecord>): _43.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _43.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_43.ValidatorAccumulatedCommissionRecord>): _43.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _43.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorHistoricalRewardsRecord>): _43.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _43.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorCurrentRewardsRecord>): _43.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _43.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_43.DelegatorStartingInfoRecord>): _43.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _43.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_43.ValidatorSlashEventRecord>): _43.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            Params: {
                encode(message: _42.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Params;
                fromPartial(object: Partial<_42.Params>): _42.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _42.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewards>): _42.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _42.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorCurrentRewards;
                fromPartial(object: Partial<_42.ValidatorCurrentRewards>): _42.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _42.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommission>): _42.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _42.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewards>): _42.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _42.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorSlashEvent;
                fromPartial(object: Partial<_42.ValidatorSlashEvent>): _42.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _42.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorSlashEvents;
                fromPartial(object: Partial<_42.ValidatorSlashEvents>): _42.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _42.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.FeePool;
                fromPartial(object: Partial<_42.FeePool>): _42.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _42.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposal>): _42.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _42.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.DelegatorStartingInfo;
                fromPartial(object: Partial<_42.DelegatorStartingInfo>): _42.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _42.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.DelegationDelegatorReward;
                fromPartial(object: Partial<_42.DelegationDelegatorReward>): _42.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _42.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposalWithDeposit>): _42.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _49.MsgSubmitEvidence) => {
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
                    }) => _49.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _49.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgSubmitEvidence;
                fromPartial(object: Partial<_49.MsgSubmitEvidence>): _49.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _49.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_49.MsgSubmitEvidenceResponse>): _49.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _48.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryEvidenceRequest;
                fromPartial(object: Partial<_48.QueryEvidenceRequest>): _48.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _48.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryEvidenceResponse;
                fromPartial(object: Partial<_48.QueryEvidenceResponse>): _48.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _48.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_48.QueryAllEvidenceRequest>): _48.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _48.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_48.QueryAllEvidenceResponse>): _48.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            Equivocation: {
                encode(message: _46.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Equivocation;
                fromPartial(object: Partial<_46.Equivocation>): _46.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _53.MsgGrantAllowance) => {
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
                    }) => _53.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _53.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _53.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _53.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.MsgGrantAllowance;
                fromPartial(object: Partial<_53.MsgGrantAllowance>): _53.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _53.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_53.MsgGrantAllowanceResponse>): _53.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _53.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.MsgRevokeAllowance;
                fromPartial(object: Partial<_53.MsgRevokeAllowance>): _53.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _53.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_53.MsgRevokeAllowanceResponse>): _53.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _52.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowanceRequest;
                fromPartial(object: Partial<_52.QueryAllowanceRequest>): _52.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _52.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowanceResponse;
                fromPartial(object: Partial<_52.QueryAllowanceResponse>): _52.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _52.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowancesRequest;
                fromPartial(object: Partial<_52.QueryAllowancesRequest>): _52.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _52.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowancesResponse;
                fromPartial(object: Partial<_52.QueryAllowancesResponse>): _52.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _52.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterRequest>): _52.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _52.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterResponse>): _52.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
            BasicAllowance: {
                encode(message: _50.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.BasicAllowance;
                fromPartial(object: Partial<_50.BasicAllowance>): _50.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _50.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.PeriodicAllowance;
                fromPartial(object: Partial<_50.PeriodicAllowance>): _50.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _50.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.AllowedMsgAllowance;
                fromPartial(object: Partial<_50.AllowedMsgAllowance>): _50.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _50.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.Grant;
                fromPartial(object: Partial<_50.Grant>): _50.Grant;
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
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
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
            LCDQueryClient: typeof _150.LCDQueryClient;
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
                    voteWeighted(value: _58.MsgVoteWeighted): {
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
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
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
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
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
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
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
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _58.MsgVoteWeighted) => {
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
                    }) => _58.MsgVoteWeighted;
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
            MsgVoteWeighted: {
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgVoteWeighted;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
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
            WeightedVoteOption: {
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.WeightedVoteOption;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
            };
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
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
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
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
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
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
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
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _70.QueryValidatorsRequest): Promise<_70.QueryValidatorsResponse>;
                validator(request: _70.QueryValidatorRequest): Promise<_70.QueryValidatorResponse>;
                validatorDelegations(request: _70.QueryValidatorDelegationsRequest): Promise<_70.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _70.QueryValidatorUnbondingDelegationsRequest): Promise<_70.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _70.QueryDelegationRequest): Promise<_70.QueryDelegationResponse>;
                unbondingDelegation(request: _70.QueryUnbondingDelegationRequest): Promise<_70.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _70.QueryDelegatorDelegationsRequest): Promise<_70.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _70.QueryDelegatorUnbondingDelegationsRequest): Promise<_70.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _70.QueryRedelegationsRequest): Promise<_70.QueryRedelegationsResponse>;
                delegatorValidators(request: _70.QueryDelegatorValidatorsRequest): Promise<_70.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _70.QueryDelegatorValidatorRequest): Promise<_70.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _70.QueryHistoricalInfoRequest): Promise<_70.QueryHistoricalInfoResponse>;
                pool(request?: _70.QueryPoolRequest): Promise<_70.QueryPoolResponse>;
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _72.MsgCreateValidator) => {
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
                    }) => _72.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _72.MsgEditValidator) => {
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
                    }) => _72.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _72.MsgDelegate) => {
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
                    }) => _72.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _72.MsgBeginRedelegate) => {
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
                    }) => _72.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _72.MsgUndelegate) => {
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
                    }) => _72.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _72.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgCreateValidator;
                fromPartial(object: Partial<_72.MsgCreateValidator>): _72.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _72.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_72.MsgCreateValidatorResponse>): _72.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _72.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgEditValidator;
                fromPartial(object: Partial<_72.MsgEditValidator>): _72.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _72.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgEditValidatorResponse;
                fromPartial(_: Partial<_72.MsgEditValidatorResponse>): _72.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _72.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgDelegate;
                fromPartial(object: Partial<_72.MsgDelegate>): _72.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _72.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgDelegateResponse;
                fromPartial(_: Partial<_72.MsgDelegateResponse>): _72.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _72.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgBeginRedelegate;
                fromPartial(object: Partial<_72.MsgBeginRedelegate>): _72.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _72.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_72.MsgBeginRedelegateResponse>): _72.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _72.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgUndelegate;
                fromPartial(object: Partial<_72.MsgUndelegate>): _72.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _72.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgUndelegateResponse;
                fromPartial(object: Partial<_72.MsgUndelegateResponse>): _72.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _71.BondStatus;
            bondStatusToJSON(object: _71.BondStatus): string;
            BondStatus: typeof _71.BondStatus;
            BondStatusSDKType: typeof _71.BondStatus;
            HistoricalInfo: {
                encode(message: _71.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.HistoricalInfo;
                fromPartial(object: Partial<_71.HistoricalInfo>): _71.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _71.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.CommissionRates;
                fromPartial(object: Partial<_71.CommissionRates>): _71.CommissionRates;
            };
            Commission: {
                encode(message: _71.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Commission;
                fromPartial(object: Partial<_71.Commission>): _71.Commission;
            };
            Description: {
                encode(message: _71.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Description;
                fromPartial(object: Partial<_71.Description>): _71.Description;
            };
            Validator: {
                encode(message: _71.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Validator;
                fromPartial(object: Partial<_71.Validator>): _71.Validator;
            };
            ValAddresses: {
                encode(message: _71.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.ValAddresses;
                fromPartial(object: Partial<_71.ValAddresses>): _71.ValAddresses;
            };
            DVPair: {
                encode(message: _71.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DVPair;
                fromPartial(object: Partial<_71.DVPair>): _71.DVPair;
            };
            DVPairs: {
                encode(message: _71.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DVPairs;
                fromPartial(object: Partial<_71.DVPairs>): _71.DVPairs;
            };
            DVVTriplet: {
                encode(message: _71.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DVVTriplet;
                fromPartial(object: Partial<_71.DVVTriplet>): _71.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _71.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DVVTriplets;
                fromPartial(object: Partial<_71.DVVTriplets>): _71.DVVTriplets;
            };
            Delegation: {
                encode(message: _71.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Delegation;
                fromPartial(object: Partial<_71.Delegation>): _71.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _71.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.UnbondingDelegation;
                fromPartial(object: Partial<_71.UnbondingDelegation>): _71.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _71.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.UnbondingDelegationEntry;
                fromPartial(object: Partial<_71.UnbondingDelegationEntry>): _71.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _71.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.RedelegationEntry;
                fromPartial(object: Partial<_71.RedelegationEntry>): _71.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _71.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Redelegation;
                fromPartial(object: Partial<_71.Redelegation>): _71.Redelegation;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
            };
            DelegationResponse: {
                encode(message: _71.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DelegationResponse;
                fromPartial(object: Partial<_71.DelegationResponse>): _71.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _71.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.RedelegationEntryResponse;
                fromPartial(object: Partial<_71.RedelegationEntryResponse>): _71.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _71.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.RedelegationResponse;
                fromPartial(object: Partial<_71.RedelegationResponse>): _71.RedelegationResponse;
            };
            Pool: {
                encode(message: _71.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Pool;
                fromPartial(object: Partial<_71.Pool>): _71.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _70.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorsRequest;
                fromPartial(object: Partial<_70.QueryValidatorsRequest>): _70.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _70.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorsResponse;
                fromPartial(object: Partial<_70.QueryValidatorsResponse>): _70.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _70.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorRequest;
                fromPartial(object: Partial<_70.QueryValidatorRequest>): _70.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _70.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorResponse;
                fromPartial(object: Partial<_70.QueryValidatorResponse>): _70.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _70.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_70.QueryValidatorDelegationsRequest>): _70.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _70.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_70.QueryValidatorDelegationsResponse>): _70.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _70.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_70.QueryValidatorUnbondingDelegationsRequest>): _70.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _70.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_70.QueryValidatorUnbondingDelegationsResponse>): _70.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _70.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegationRequest;
                fromPartial(object: Partial<_70.QueryDelegationRequest>): _70.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _70.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegationResponse;
                fromPartial(object: Partial<_70.QueryDelegationResponse>): _70.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _70.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_70.QueryUnbondingDelegationRequest>): _70.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _70.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_70.QueryUnbondingDelegationResponse>): _70.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _70.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorDelegationsRequest>): _70.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _70.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorDelegationsResponse>): _70.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _70.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorUnbondingDelegationsRequest>): _70.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _70.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorUnbondingDelegationsResponse>): _70.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _70.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryRedelegationsRequest;
                fromPartial(object: Partial<_70.QueryRedelegationsRequest>): _70.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _70.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryRedelegationsResponse;
                fromPartial(object: Partial<_70.QueryRedelegationsResponse>): _70.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _70.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorsRequest>): _70.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _70.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorsResponse>): _70.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _70.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorRequest>): _70.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _70.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorResponse>): _70.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _70.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_70.QueryHistoricalInfoRequest>): _70.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _70.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_70.QueryHistoricalInfoResponse>): _70.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _70.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.QueryPoolRequest;
                fromPartial(_: Partial<_70.QueryPoolRequest>): _70.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _70.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryPoolResponse;
                fromPartial(object: Partial<_70.QueryPoolResponse>): _70.QueryPoolResponse;
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
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _69.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.LastValidatorPower;
                fromPartial(object: Partial<_69.LastValidatorPower>): _69.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _68.AuthorizationType;
            authorizationTypeToJSON(object: _68.AuthorizationType): string;
            AuthorizationType: typeof _68.AuthorizationType;
            AuthorizationTypeSDKType: typeof _68.AuthorizationType;
            StakeAuthorization: {
                encode(message: _68.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.StakeAuthorization;
                fromPartial(object: Partial<_68.StakeAuthorization>): _68.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _68.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.StakeAuthorization_Validators;
                fromPartial(object: Partial<_68.StakeAuthorization_Validators>): _68.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _73.SignMode;
                signModeToJSON(object: _73.SignMode): string;
                SignMode: typeof _73.SignMode;
                SignModeSDKType: typeof _73.SignMode;
                SignatureDescriptors: {
                    encode(message: _73.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SignatureDescriptors;
                    fromPartial(object: Partial<_73.SignatureDescriptors>): _73.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _73.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SignatureDescriptor;
                    fromPartial(object: Partial<_73.SignatureDescriptor>): _73.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _73.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data>): _73.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _73.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data_Single>): _73.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _73.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data_Multi>): _73.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _170.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _74.SimulateRequest): Promise<_74.SimulateResponse>;
                getTx(request: _74.GetTxRequest): Promise<_74.GetTxResponse>;
                broadcastTx(request: _74.BroadcastTxRequest): Promise<_74.BroadcastTxResponse>;
                getTxsEvent(request: _74.GetTxsEventRequest): Promise<_74.GetTxsEventResponse>;
                getBlockWithTxs(request: _74.GetBlockWithTxsRequest): Promise<_74.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            Tx: {
                encode(message: _75.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Tx;
                fromPartial(object: Partial<_75.Tx>): _75.Tx;
            };
            TxRaw: {
                encode(message: _75.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.TxRaw;
                fromPartial(object: Partial<_75.TxRaw>): _75.TxRaw;
            };
            SignDoc: {
                encode(message: _75.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SignDoc;
                fromPartial(object: Partial<_75.SignDoc>): _75.SignDoc;
            };
            TxBody: {
                encode(message: _75.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.TxBody;
                fromPartial(object: Partial<_75.TxBody>): _75.TxBody;
            };
            AuthInfo: {
                encode(message: _75.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.AuthInfo;
                fromPartial(object: Partial<_75.AuthInfo>): _75.AuthInfo;
            };
            SignerInfo: {
                encode(message: _75.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SignerInfo;
                fromPartial(object: Partial<_75.SignerInfo>): _75.SignerInfo;
            };
            ModeInfo: {
                encode(message: _75.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.ModeInfo;
                fromPartial(object: Partial<_75.ModeInfo>): _75.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _75.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.ModeInfo_Single;
                fromPartial(object: Partial<_75.ModeInfo_Single>): _75.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _75.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.ModeInfo_Multi;
                fromPartial(object: Partial<_75.ModeInfo_Multi>): _75.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _75.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Fee;
                fromPartial(object: Partial<_75.Fee>): _75.Fee;
            };
            orderByFromJSON(object: any): _74.OrderBy;
            orderByToJSON(object: _74.OrderBy): string;
            broadcastModeFromJSON(object: any): _74.BroadcastMode;
            broadcastModeToJSON(object: _74.BroadcastMode): string;
            OrderBy: typeof _74.OrderBy;
            OrderBySDKType: typeof _74.OrderBy;
            BroadcastMode: typeof _74.BroadcastMode;
            BroadcastModeSDKType: typeof _74.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _74.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetTxsEventRequest;
                fromPartial(object: Partial<_74.GetTxsEventRequest>): _74.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _74.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetTxsEventResponse;
                fromPartial(object: Partial<_74.GetTxsEventResponse>): _74.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _74.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.BroadcastTxRequest;
                fromPartial(object: Partial<_74.BroadcastTxRequest>): _74.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _74.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.BroadcastTxResponse;
                fromPartial(object: Partial<_74.BroadcastTxResponse>): _74.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _74.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.SimulateRequest;
                fromPartial(object: Partial<_74.SimulateRequest>): _74.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _74.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.SimulateResponse;
                fromPartial(object: Partial<_74.SimulateResponse>): _74.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _74.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetTxRequest;
                fromPartial(object: Partial<_74.GetTxRequest>): _74.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _74.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetTxResponse;
                fromPartial(object: Partial<_74.GetTxResponse>): _74.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _74.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_74.GetBlockWithTxsRequest>): _74.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _74.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_74.GetBlockWithTxsResponse>): _74.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _76.QueryCurrentPlanRequest): Promise<_76.QueryCurrentPlanResponse>;
                appliedPlan(request: _76.QueryAppliedPlanRequest): Promise<_76.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _76.QueryModuleVersionsRequest): Promise<_76.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            Plan: {
                encode(message: _77.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Plan;
                fromPartial(object: Partial<_77.Plan>): _77.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _77.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_77.SoftwareUpgradeProposal>): _77.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _77.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_77.CancelSoftwareUpgradeProposal>): _77.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _77.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.ModuleVersion;
                fromPartial(object: Partial<_77.ModuleVersion>): _77.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _76.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_76.QueryCurrentPlanRequest>): _76.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _76.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_76.QueryCurrentPlanResponse>): _76.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _76.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_76.QueryAppliedPlanRequest>): _76.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _76.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_76.QueryAppliedPlanResponse>): _76.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _76.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_76.QueryUpgradedConsensusStateRequest>): _76.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _76.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_76.QueryUpgradedConsensusStateResponse>): _76.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _76.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_76.QueryModuleVersionsRequest>): _76.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _76.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_76.QueryModuleVersionsResponse>): _76.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _78.MsgCreateVestingAccount) => {
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
                    }) => _78.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _79.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.BaseVestingAccount;
                fromPartial(object: Partial<_79.BaseVestingAccount>): _79.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _79.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ContinuousVestingAccount;
                fromPartial(object: Partial<_79.ContinuousVestingAccount>): _79.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _79.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DelayedVestingAccount;
                fromPartial(object: Partial<_79.DelayedVestingAccount>): _79.DelayedVestingAccount;
            };
            Period: {
                encode(message: _79.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Period;
                fromPartial(object: Partial<_79.Period>): _79.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _79.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.PeriodicVestingAccount;
                fromPartial(object: Partial<_79.PeriodicVestingAccount>): _79.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _79.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.PermanentLockedAccount;
                fromPartial(object: Partial<_79.PermanentLockedAccount>): _79.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _78.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgCreateVestingAccount;
                fromPartial(object: Partial<_78.MsgCreateVestingAccount>): _78.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _78.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_78.MsgCreateVestingAccountResponse>): _78.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _172.MsgClientImpl;
                };
                bank: {
                    v1beta1: _173.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _174.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _175.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _176.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _177.MsgClientImpl;
                };
                gov: {
                    v1beta1: _178.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _179.MsgClientImpl;
                };
                staking: {
                    v1beta1: _180.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _181.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                        account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                        granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                        granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                        spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                        supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                            getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                            getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                            getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                        allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                        allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                        allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
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
                        validators(request: _70.QueryValidatorsRequest): Promise<_70.QueryValidatorsResponse>;
                        validator(request: _70.QueryValidatorRequest): Promise<_70.QueryValidatorResponse>;
                        validatorDelegations(request: _70.QueryValidatorDelegationsRequest): Promise<_70.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _70.QueryValidatorUnbondingDelegationsRequest): Promise<_70.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _70.QueryDelegationRequest): Promise<_70.QueryDelegationResponse>;
                        unbondingDelegation(request: _70.QueryUnbondingDelegationRequest): Promise<_70.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _70.QueryDelegatorDelegationsRequest): Promise<_70.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _70.QueryDelegatorUnbondingDelegationsRequest): Promise<_70.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _70.QueryRedelegationsRequest): Promise<_70.QueryRedelegationsResponse>;
                        delegatorValidators(request: _70.QueryDelegatorValidatorsRequest): Promise<_70.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _70.QueryDelegatorValidatorRequest): Promise<_70.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _70.QueryHistoricalInfoRequest): Promise<_70.QueryHistoricalInfoResponse>;
                        pool(request?: _70.QueryPoolRequest): Promise<_70.QueryPoolResponse>;
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _74.SimulateRequest): Promise<_74.SimulateResponse>;
                        getTx(request: _74.GetTxRequest): Promise<_74.GetTxResponse>;
                        broadcastTx(request: _74.BroadcastTxRequest): Promise<_74.BroadcastTxResponse>;
                        getTxsEvent(request: _74.GetTxsEventRequest): Promise<_74.GetTxsEventResponse>;
                        getBlockWithTxs(request: _74.GetBlockWithTxsRequest): Promise<_74.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _76.QueryCurrentPlanRequest): Promise<_76.QueryCurrentPlanResponse>;
                        appliedPlan(request: _76.QueryAppliedPlanRequest): Promise<_76.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _76.QueryModuleVersionsRequest): Promise<_76.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _142.LCDQueryClient;
                };
                authz: {
                    v1beta1: _143.LCDQueryClient;
                };
                bank: {
                    v1beta1: _144.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _145.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _146.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _147.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _148.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _149.LCDQueryClient;
                };
                gov: {
                    v1beta1: _150.LCDQueryClient;
                };
                mint: {
                    v1beta1: _151.LCDQueryClient;
                };
                params: {
                    v1beta1: _152.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _153.LCDQueryClient;
                };
                staking: {
                    v1beta1: _154.LCDQueryClient;
                };
                tx: {
                    v1beta1: _155.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _156.LCDQueryClient;
                };
            };
        }>;
    };
}
