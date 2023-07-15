import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/kv/v1beta1/kv";
import * as _17 from "./base/node/v1beta1/query";
import * as _18 from "./base/query/v1beta1/pagination";
import * as _19 from "./base/reflection/v1beta1/reflection";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/listening";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./evidence/v1beta1/evidence";
import * as _39 from "./evidence/v1beta1/genesis";
import * as _40 from "./evidence/v1beta1/query";
import * as _41 from "./evidence/v1beta1/tx";
import * as _42 from "./feegrant/v1beta1/feegrant";
import * as _43 from "./feegrant/v1beta1/genesis";
import * as _44 from "./feegrant/v1beta1/query";
import * as _45 from "./feegrant/v1beta1/tx";
import * as _46 from "./genutil/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/gov";
import * as _49 from "./gov/v1beta1/query";
import * as _50 from "./gov/v1beta1/tx";
import * as _51 from "./mint/v1beta1/genesis";
import * as _52 from "./mint/v1beta1/mint";
import * as _53 from "./mint/v1beta1/query";
import * as _54 from "./params/v1beta1/params";
import * as _55 from "./params/v1beta1/query";
import * as _56 from "./slashing/v1beta1/genesis";
import * as _57 from "./slashing/v1beta1/query";
import * as _58 from "./slashing/v1beta1/slashing";
import * as _59 from "./slashing/v1beta1/tx";
import * as _60 from "./staking/v1beta1/authz";
import * as _61 from "./staking/v1beta1/genesis";
import * as _62 from "./staking/v1beta1/query";
import * as _63 from "./staking/v1beta1/staking";
import * as _64 from "./staking/v1beta1/tx";
import * as _65 from "./tx/signing/v1beta1/signing";
import * as _66 from "./tx/v1beta1/service";
import * as _67 from "./tx/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/query";
import * as _69 from "./upgrade/v1beta1/upgrade";
import * as _70 from "./vesting/v1beta1/tx";
import * as _71 from "./vesting/v1beta1/vesting";
import * as _124 from "./auth/v1beta1/query.rpc.Query";
import * as _125 from "./authz/v1beta1/query.rpc.Query";
import * as _126 from "./bank/v1beta1/query.rpc.Query";
import * as _127 from "./base/node/v1beta1/query.rpc.Service";
import * as _128 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _129 from "./distribution/v1beta1/query.rpc.Query";
import * as _130 from "./evidence/v1beta1/query.rpc.Query";
import * as _131 from "./feegrant/v1beta1/query.rpc.Query";
import * as _132 from "./gov/v1beta1/query.rpc.Query";
import * as _133 from "./mint/v1beta1/query.rpc.Query";
import * as _134 from "./params/v1beta1/query.rpc.Query";
import * as _135 from "./slashing/v1beta1/query.rpc.Query";
import * as _136 from "./staking/v1beta1/query.rpc.Query";
import * as _137 from "./tx/v1beta1/service.rpc.Service";
import * as _138 from "./upgrade/v1beta1/query.rpc.Query";
import * as _139 from "./authz/v1beta1/tx.rpc.msg";
import * as _140 from "./bank/v1beta1/tx.rpc.msg";
import * as _141 from "./crisis/v1beta1/tx.rpc.msg";
import * as _142 from "./distribution/v1beta1/tx.rpc.msg";
import * as _143 from "./evidence/v1beta1/tx.rpc.msg";
import * as _144 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _145 from "./gov/v1beta1/tx.rpc.msg";
import * as _146 from "./slashing/v1beta1/tx.rpc.msg";
import * as _147 from "./staking/v1beta1/tx.rpc.msg";
import * as _148 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                moduleAccountByName(request: _4.QueryModuleAccountByNameRequest): Promise<_4.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _4.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryAccountsRequest;
                fromPartial(object: Partial<_4.QueryAccountsRequest>): _4.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _4.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryAccountsResponse;
                fromPartial(object: Partial<_4.QueryAccountsResponse>): _4.QueryAccountsResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _4.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_4.QueryModuleAccountByNameRequest>): _4.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _4.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_4.QueryModuleAccountByNameResponse>): _4.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
            BaseAccount: {
                encode(message: _2.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.BaseAccount;
                fromPartial(object: Partial<_2.BaseAccount>): _2.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _2.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ModuleAccount;
                fromPartial(object: Partial<_2.ModuleAccount>): _2.ModuleAccount;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _9.MsgGrant) => {
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
                    }) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _9.MsgExec) => {
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
                    }) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _9.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _9.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgGrant;
                fromPartial(object: Partial<_9.MsgGrant>): _9.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _9.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgExecResponse;
                fromPartial(object: Partial<_9.MsgExecResponse>): _9.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _9.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgExec;
                fromPartial(object: Partial<_9.MsgExec>): _9.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _9.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MsgGrantResponse;
                fromPartial(_: Partial<_9.MsgGrantResponse>): _9.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _9.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgRevoke;
                fromPartial(object: Partial<_9.MsgRevoke>): _9.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _9.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MsgRevokeResponse;
                fromPartial(_: Partial<_9.MsgRevokeResponse>): _9.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _8.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGrantsRequest;
                fromPartial(object: Partial<_8.QueryGrantsRequest>): _8.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _8.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGrantsResponse;
                fromPartial(object: Partial<_8.QueryGrantsResponse>): _8.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _8.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_8.QueryGranterGrantsRequest>): _8.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _8.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_8.QueryGranterGrantsResponse>): _8.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _8.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_8.QueryGranteeGrantsRequest>): _8.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _8.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_8.QueryGranteeGrantsResponse>): _8.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            };
            EventGrant: {
                encode(message: _6.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventGrant;
                fromPartial(object: Partial<_6.EventGrant>): _6.EventGrant;
            };
            EventRevoke: {
                encode(message: _6.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventRevoke;
                fromPartial(object: Partial<_6.EventRevoke>): _6.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _5.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GenericAuthorization;
                fromPartial(object: Partial<_5.GenericAuthorization>): _5.GenericAuthorization;
            };
            Grant: {
                encode(message: _5.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Grant;
                fromPartial(object: Partial<_5.Grant>): _5.Grant;
            };
            GrantAuthorization: {
                encode(message: _5.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GrantAuthorization;
                fromPartial(object: Partial<_5.GrantAuthorization>): _5.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _140.MsgClientImpl;
            QueryClientImpl: typeof _126.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _14.MsgSend) => {
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
                    }) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _14.MsgMultiSend) => {
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
                    }) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _14.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgSend;
                fromPartial(object: Partial<_14.MsgSend>): _14.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _14.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgSendResponse;
                fromPartial(_: Partial<_14.MsgSendResponse>): _14.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _14.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgMultiSend;
                fromPartial(object: Partial<_14.MsgMultiSend>): _14.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _14.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgMultiSendResponse;
                fromPartial(_: Partial<_14.MsgMultiSendResponse>): _14.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _13.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryBalanceRequest;
                fromPartial(object: Partial<_13.QueryBalanceRequest>): _13.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _13.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryBalanceResponse;
                fromPartial(object: Partial<_13.QueryBalanceResponse>): _13.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _13.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAllBalancesRequest;
                fromPartial(object: Partial<_13.QueryAllBalancesRequest>): _13.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _13.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAllBalancesResponse;
                fromPartial(object: Partial<_13.QueryAllBalancesResponse>): _13.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _13.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_13.QuerySpendableBalancesRequest>): _13.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _13.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_13.QuerySpendableBalancesResponse>): _13.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_13.QueryTotalSupplyRequest>): _13.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_13.QueryTotalSupplyResponse>): _13.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _13.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QuerySupplyOfRequest;
                fromPartial(object: Partial<_13.QuerySupplyOfRequest>): _13.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _13.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QuerySupplyOfResponse;
                fromPartial(object: Partial<_13.QuerySupplyOfResponse>): _13.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryParamsRequest;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryParamsResponse;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_13.QueryDenomsMetadataRequest>): _13.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_13.QueryDenomsMetadataResponse>): _13.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_13.QueryDenomMetadataRequest>): _13.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_13.QueryDenomMetadataResponse>): _13.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            };
            Balance: {
                encode(message: _12.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.Balance;
                fromPartial(object: Partial<_12.Balance>): _12.Balance;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
            };
            SendEnabled: {
                encode(message: _11.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.SendEnabled;
                fromPartial(object: Partial<_11.SendEnabled>): _11.SendEnabled;
            };
            Input: {
                encode(message: _11.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Input;
                fromPartial(object: Partial<_11.Input>): _11.Input;
            };
            Output: {
                encode(message: _11.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Output;
                fromPartial(object: Partial<_11.Output>): _11.Output;
            };
            Supply: {
                encode(message: _11.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Supply;
                fromPartial(object: Partial<_11.Supply>): _11.Supply;
            };
            DenomUnit: {
                encode(message: _11.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.DenomUnit;
                fromPartial(object: Partial<_11.DenomUnit>): _11.DenomUnit;
            };
            Metadata: {
                encode(message: _11.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Metadata;
                fromPartial(object: Partial<_11.Metadata>): _11.Metadata;
            };
            SendAuthorization: {
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.SendAuthorization;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _15.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.TxResponse;
                    fromPartial(object: Partial<_15.TxResponse>): _15.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _15.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.ABCIMessageLog;
                    fromPartial(object: Partial<_15.ABCIMessageLog>): _15.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _15.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.StringEvent;
                    fromPartial(object: Partial<_15.StringEvent>): _15.StringEvent;
                };
                Attribute: {
                    encode(message: _15.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.Attribute;
                    fromPartial(object: Partial<_15.Attribute>): _15.Attribute;
                };
                GasInfo: {
                    encode(message: _15.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.GasInfo;
                    fromPartial(object: Partial<_15.GasInfo>): _15.GasInfo;
                };
                Result: {
                    encode(message: _15.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.Result;
                    fromPartial(object: Partial<_15.Result>): _15.Result;
                };
                SimulationResponse: {
                    encode(message: _15.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.SimulationResponse;
                    fromPartial(object: Partial<_15.SimulationResponse>): _15.SimulationResponse;
                };
                MsgData: {
                    encode(message: _15.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.MsgData;
                    fromPartial(object: Partial<_15.MsgData>): _15.MsgData;
                };
                TxMsgData: {
                    encode(message: _15.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.TxMsgData;
                    fromPartial(object: Partial<_15.TxMsgData>): _15.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _15.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.SearchTxsResult;
                    fromPartial(object: Partial<_15.SearchTxsResult>): _15.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _16.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _16.Pairs;
                    fromPartial(object: Partial<_16.Pairs>): _16.Pairs;
                };
                Pair: {
                    encode(message: _16.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _16.Pair;
                    fromPartial(object: Partial<_16.Pair>): _16.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _127.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _17.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _17.ConfigRequest;
                    fromPartial(_: Partial<_17.ConfigRequest>): _17.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _17.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.ConfigResponse;
                    fromPartial(object: Partial<_17.ConfigResponse>): _17.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _18.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.PageRequest;
                    fromPartial(object: Partial<_18.PageRequest>): _18.PageRequest;
                };
                PageResponse: {
                    encode(message: _18.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.PageResponse;
                    fromPartial(object: Partial<_18.PageResponse>): _18.PageResponse;
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
                ServiceClientImpl: typeof _128.ServiceClientImpl;
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
        const v1beta1: {
            Coin: {
                encode(message: _25.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.Coin;
                fromPartial(object: Partial<_25.Coin>): _25.Coin;
            };
            DecCoin: {
                encode(message: _25.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.DecCoin;
                fromPartial(object: Partial<_25.DecCoin>): _25.DecCoin;
            };
            IntProto: {
                encode(message: _25.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.IntProto;
                fromPartial(object: Partial<_25.IntProto>): _25.IntProto;
            };
            DecProto: {
                encode(message: _25.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.DecProto;
                fromPartial(object: Partial<_25.DecProto>): _25.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _27.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GenesisOwners;
                fromPartial(object: Partial<_27.GenesisOwners>): _27.GenesisOwners;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            Capability: {
                encode(message: _26.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Capability;
                fromPartial(object: Partial<_26.Capability>): _26.Capability;
            };
            Owner: {
                encode(message: _26.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Owner;
                fromPartial(object: Partial<_26.Owner>): _26.Owner;
            };
            CapabilityOwners: {
                encode(message: _26.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.CapabilityOwners;
                fromPartial(object: Partial<_26.CapabilityOwners>): _26.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _29.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _29.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _29.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.MsgVerifyInvariant;
                fromPartial(object: Partial<_29.MsgVerifyInvariant>): _29.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _29.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_29.MsgVerifyInvariantResponse>): _29.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.PubKey;
                fromPartial(object: Partial<_30.PubKey>): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.PrivKey;
                fromPartial(object: Partial<_30.PrivKey>): _30.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _31.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.LegacyAminoPubKey;
                fromPartial(object: Partial<_31.LegacyAminoPubKey>): _31.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.PubKey;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.PrivKey;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.PubKey;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.PrivKey;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _129.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _37.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _37.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _37.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _37.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _37.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _37.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _37.MsgFundCommunityPool) => {
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
                    }) => _37.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _37.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_37.MsgSetWithdrawAddress>): _37.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _37.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_37.MsgSetWithdrawAddressResponse>): _37.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _37.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_37.MsgWithdrawDelegatorReward>): _37.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _37.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_37.MsgWithdrawDelegatorRewardResponse>): _37.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _37.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_37.MsgWithdrawValidatorCommission>): _37.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _37.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_37.MsgWithdrawValidatorCommissionResponse>): _37.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _37.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgFundCommunityPool;
                fromPartial(object: Partial<_37.MsgFundCommunityPool>): _37.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _37.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_37.MsgFundCommunityPoolResponse>): _37.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.QueryParamsRequest;
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryParamsResponse;
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _36.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsRequest>): _36.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _36.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsResponse>): _36.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _36.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_36.QueryValidatorCommissionRequest>): _36.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _36.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_36.QueryValidatorCommissionResponse>): _36.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _36.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_36.QueryValidatorSlashesRequest>): _36.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _36.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_36.QueryValidatorSlashesResponse>): _36.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _36.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_36.QueryDelegationRewardsRequest>): _36.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _36.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_36.QueryDelegationRewardsResponse>): _36.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _36.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsRequest>): _36.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _36.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsResponse>): _36.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsRequest>): _36.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsResponse>): _36.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _36.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressRequest>): _36.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _36.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressResponse>): _36.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _36.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_36.QueryCommunityPoolRequest>): _36.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _36.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_36.QueryCommunityPoolResponse>): _36.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _35.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_35.DelegatorWithdrawInfo>): _35.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _35.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorOutstandingRewardsRecord>): _35.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _35.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_35.ValidatorAccumulatedCommissionRecord>): _35.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _35.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorHistoricalRewardsRecord>): _35.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _35.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorCurrentRewardsRecord>): _35.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _35.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_35.DelegatorStartingInfoRecord>): _35.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _35.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_35.ValidatorSlashEventRecord>): _35.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _34.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewards>): _34.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _34.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorCurrentRewards;
                fromPartial(object: Partial<_34.ValidatorCurrentRewards>): _34.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _34.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommission>): _34.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _34.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewards>): _34.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _34.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorSlashEvent;
                fromPartial(object: Partial<_34.ValidatorSlashEvent>): _34.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _34.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.ValidatorSlashEvents;
                fromPartial(object: Partial<_34.ValidatorSlashEvents>): _34.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _34.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.FeePool;
                fromPartial(object: Partial<_34.FeePool>): _34.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _34.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposal>): _34.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _34.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.DelegatorStartingInfo;
                fromPartial(object: Partial<_34.DelegatorStartingInfo>): _34.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _34.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.DelegationDelegatorReward;
                fromPartial(object: Partial<_34.DelegationDelegatorReward>): _34.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _34.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposalWithDeposit>): _34.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _130.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _41.MsgSubmitEvidence) => {
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
                    }) => _41.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _41.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgSubmitEvidence;
                fromPartial(object: Partial<_41.MsgSubmitEvidence>): _41.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _41.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_41.MsgSubmitEvidenceResponse>): _41.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _40.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryEvidenceRequest;
                fromPartial(object: Partial<_40.QueryEvidenceRequest>): _40.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _40.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryEvidenceResponse;
                fromPartial(object: Partial<_40.QueryEvidenceResponse>): _40.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _40.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_40.QueryAllEvidenceRequest>): _40.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _40.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_40.QueryAllEvidenceResponse>): _40.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
            Equivocation: {
                encode(message: _38.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Equivocation;
                fromPartial(object: Partial<_38.Equivocation>): _38.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _131.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _45.MsgGrantAllowance) => {
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
                    }) => _45.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _45.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _45.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _45.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgGrantAllowance;
                fromPartial(object: Partial<_45.MsgGrantAllowance>): _45.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _45.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_45.MsgGrantAllowanceResponse>): _45.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _45.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.MsgRevokeAllowance;
                fromPartial(object: Partial<_45.MsgRevokeAllowance>): _45.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _45.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_45.MsgRevokeAllowanceResponse>): _45.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _44.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowanceRequest;
                fromPartial(object: Partial<_44.QueryAllowanceRequest>): _44.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _44.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowanceResponse;
                fromPartial(object: Partial<_44.QueryAllowanceResponse>): _44.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _44.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowancesRequest;
                fromPartial(object: Partial<_44.QueryAllowancesRequest>): _44.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _44.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowancesResponse;
                fromPartial(object: Partial<_44.QueryAllowancesResponse>): _44.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _44.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterRequest>): _44.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _44.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterResponse>): _44.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            BasicAllowance: {
                encode(message: _42.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.BasicAllowance;
                fromPartial(object: Partial<_42.BasicAllowance>): _42.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _42.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.PeriodicAllowance;
                fromPartial(object: Partial<_42.PeriodicAllowance>): _42.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _42.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.AllowedMsgAllowance;
                fromPartial(object: Partial<_42.AllowedMsgAllowance>): _42.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _42.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Grant;
                fromPartial(object: Partial<_42.Grant>): _42.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _145.MsgClientImpl;
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _50.MsgSubmitProposal) => {
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
                    }) => _50.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _50.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _50.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _50.MsgVoteWeighted) => {
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
                    }) => _50.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _50.MsgDeposit) => {
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
                    }) => _50.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _50.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSubmitProposal;
                fromPartial(object: Partial<_50.MsgSubmitProposal>): _50.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _50.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_50.MsgSubmitProposalResponse>): _50.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _50.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgVote;
                fromPartial(object: Partial<_50.MsgVote>): _50.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _50.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgVoteResponse;
                fromPartial(_: Partial<_50.MsgVoteResponse>): _50.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _50.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgVoteWeighted;
                fromPartial(object: Partial<_50.MsgVoteWeighted>): _50.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _50.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_50.MsgVoteWeightedResponse>): _50.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _50.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgDeposit;
                fromPartial(object: Partial<_50.MsgDeposit>): _50.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _50.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgDepositResponse;
                fromPartial(_: Partial<_50.MsgDepositResponse>): _50.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _49.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryProposalRequest;
                fromPartial(object: Partial<_49.QueryProposalRequest>): _49.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _49.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryProposalResponse;
                fromPartial(object: Partial<_49.QueryProposalResponse>): _49.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _49.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryProposalsRequest;
                fromPartial(object: Partial<_49.QueryProposalsRequest>): _49.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _49.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryProposalsResponse;
                fromPartial(object: Partial<_49.QueryProposalsResponse>): _49.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _49.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryVoteRequest;
                fromPartial(object: Partial<_49.QueryVoteRequest>): _49.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _49.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryVoteResponse;
                fromPartial(object: Partial<_49.QueryVoteResponse>): _49.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _49.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryVotesRequest;
                fromPartial(object: Partial<_49.QueryVotesRequest>): _49.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _49.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryVotesResponse;
                fromPartial(object: Partial<_49.QueryVotesResponse>): _49.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryParamsRequest;
                fromPartial(object: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _49.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDepositRequest;
                fromPartial(object: Partial<_49.QueryDepositRequest>): _49.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _49.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDepositResponse;
                fromPartial(object: Partial<_49.QueryDepositResponse>): _49.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _49.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDepositsRequest;
                fromPartial(object: Partial<_49.QueryDepositsRequest>): _49.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _49.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDepositsResponse;
                fromPartial(object: Partial<_49.QueryDepositsResponse>): _49.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _49.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryTallyResultRequest;
                fromPartial(object: Partial<_49.QueryTallyResultRequest>): _49.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _49.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryTallyResultResponse;
                fromPartial(object: Partial<_49.QueryTallyResultResponse>): _49.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _48.VoteOption;
            voteOptionToJSON(object: _48.VoteOption): string;
            proposalStatusFromJSON(object: any): _48.ProposalStatus;
            proposalStatusToJSON(object: _48.ProposalStatus): string;
            VoteOption: typeof _48.VoteOption;
            VoteOptionSDKType: typeof _48.VoteOption;
            ProposalStatus: typeof _48.ProposalStatus;
            ProposalStatusSDKType: typeof _48.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _48.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.WeightedVoteOption;
                fromPartial(object: Partial<_48.WeightedVoteOption>): _48.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _48.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.TextProposal;
                fromPartial(object: Partial<_48.TextProposal>): _48.TextProposal;
            };
            Deposit: {
                encode(message: _48.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Deposit;
                fromPartial(object: Partial<_48.Deposit>): _48.Deposit;
            };
            Proposal: {
                encode(message: _48.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Proposal;
                fromPartial(object: Partial<_48.Proposal>): _48.Proposal;
            };
            TallyResult: {
                encode(message: _48.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.TallyResult;
                fromPartial(object: Partial<_48.TallyResult>): _48.TallyResult;
            };
            Vote: {
                encode(message: _48.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Vote;
                fromPartial(object: Partial<_48.Vote>): _48.Vote;
            };
            DepositParams: {
                encode(message: _48.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DepositParams;
                fromPartial(object: Partial<_48.DepositParams>): _48.DepositParams;
            };
            VotingParams: {
                encode(message: _48.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.VotingParams;
                fromPartial(object: Partial<_48.VotingParams>): _48.VotingParams;
            };
            TallyParams: {
                encode(message: _48.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.TallyParams;
                fromPartial(object: Partial<_48.TallyParams>): _48.TallyParams;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.QueryParamsRequest;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _53.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.QueryInflationRequest;
                fromPartial(_: Partial<_53.QueryInflationRequest>): _53.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _53.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryInflationResponse;
                fromPartial(object: Partial<_53.QueryInflationResponse>): _53.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _53.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_53.QueryAnnualProvisionsRequest>): _53.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _53.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_53.QueryAnnualProvisionsResponse>): _53.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _52.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Minter;
                fromPartial(object: Partial<_52.Minter>): _52.Minter;
            };
            Params: {
                encode(message: _52.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryParamsRequest;
                fromPartial(object: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _54.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ParameterChangeProposal;
                fromPartial(object: Partial<_54.ParameterChangeProposal>): _54.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _54.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ParamChange;
                fromPartial(object: Partial<_54.ParamChange>): _54.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _146.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _59.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _59.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _59.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgUnjail;
                fromPartial(object: Partial<_59.MsgUnjail>): _59.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _59.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgUnjailResponse;
                fromPartial(_: Partial<_59.MsgUnjailResponse>): _59.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _58.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.ValidatorSigningInfo;
                fromPartial(object: Partial<_58.ValidatorSigningInfo>): _58.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
            };
            QueryParamsRequest: {
                encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _57.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QuerySigningInfoRequest;
                fromPartial(object: Partial<_57.QuerySigningInfoRequest>): _57.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _57.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QuerySigningInfoResponse;
                fromPartial(object: Partial<_57.QuerySigningInfoResponse>): _57.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _57.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QuerySigningInfosRequest;
                fromPartial(object: Partial<_57.QuerySigningInfosRequest>): _57.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _57.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QuerySigningInfosResponse;
                fromPartial(object: Partial<_57.QuerySigningInfosResponse>): _57.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            SigningInfo: {
                encode(message: _56.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.SigningInfo;
                fromPartial(object: Partial<_56.SigningInfo>): _56.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _56.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorMissedBlocks;
                fromPartial(object: Partial<_56.ValidatorMissedBlocks>): _56.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _56.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.MissedBlock;
                fromPartial(object: Partial<_56.MissedBlock>): _56.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _147.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _64.MsgCreateValidator) => {
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
                    }) => _64.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _64.MsgEditValidator) => {
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
                    }) => _64.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _64.MsgDelegate) => {
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
                    }) => _64.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _64.MsgBeginRedelegate) => {
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
                    }) => _64.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _64.MsgUndelegate) => {
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
                    }) => _64.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _64.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgCreateValidator;
                fromPartial(object: Partial<_64.MsgCreateValidator>): _64.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _64.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_64.MsgCreateValidatorResponse>): _64.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _64.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgEditValidator;
                fromPartial(object: Partial<_64.MsgEditValidator>): _64.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _64.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgEditValidatorResponse;
                fromPartial(_: Partial<_64.MsgEditValidatorResponse>): _64.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _64.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgDelegate;
                fromPartial(object: Partial<_64.MsgDelegate>): _64.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _64.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgDelegateResponse;
                fromPartial(_: Partial<_64.MsgDelegateResponse>): _64.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _64.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgBeginRedelegate;
                fromPartial(object: Partial<_64.MsgBeginRedelegate>): _64.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _64.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_64.MsgBeginRedelegateResponse>): _64.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _64.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgUndelegate;
                fromPartial(object: Partial<_64.MsgUndelegate>): _64.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _64.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgUndelegateResponse;
                fromPartial(object: Partial<_64.MsgUndelegateResponse>): _64.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _63.BondStatus;
            bondStatusToJSON(object: _63.BondStatus): string;
            infractionTypeFromJSON(object: any): _63.InfractionType;
            infractionTypeToJSON(object: _63.InfractionType): string;
            BondStatus: typeof _63.BondStatus;
            BondStatusSDKType: typeof _63.BondStatus;
            InfractionType: typeof _63.InfractionType;
            InfractionTypeSDKType: typeof _63.InfractionType;
            HistoricalInfo: {
                encode(message: _63.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.HistoricalInfo;
                fromPartial(object: Partial<_63.HistoricalInfo>): _63.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _63.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.CommissionRates;
                fromPartial(object: Partial<_63.CommissionRates>): _63.CommissionRates;
            };
            Commission: {
                encode(message: _63.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Commission;
                fromPartial(object: Partial<_63.Commission>): _63.Commission;
            };
            Description: {
                encode(message: _63.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Description;
                fromPartial(object: Partial<_63.Description>): _63.Description;
            };
            Validator: {
                encode(message: _63.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Validator;
                fromPartial(object: Partial<_63.Validator>): _63.Validator;
            };
            ValAddresses: {
                encode(message: _63.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValAddresses;
                fromPartial(object: Partial<_63.ValAddresses>): _63.ValAddresses;
            };
            DVPair: {
                encode(message: _63.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DVPair;
                fromPartial(object: Partial<_63.DVPair>): _63.DVPair;
            };
            DVPairs: {
                encode(message: _63.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DVPairs;
                fromPartial(object: Partial<_63.DVPairs>): _63.DVPairs;
            };
            DVVTriplet: {
                encode(message: _63.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DVVTriplet;
                fromPartial(object: Partial<_63.DVVTriplet>): _63.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _63.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DVVTriplets;
                fromPartial(object: Partial<_63.DVVTriplets>): _63.DVVTriplets;
            };
            Delegation: {
                encode(message: _63.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Delegation;
                fromPartial(object: Partial<_63.Delegation>): _63.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _63.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.UnbondingDelegation;
                fromPartial(object: Partial<_63.UnbondingDelegation>): _63.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _63.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.UnbondingDelegationEntry;
                fromPartial(object: Partial<_63.UnbondingDelegationEntry>): _63.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _63.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.RedelegationEntry;
                fromPartial(object: Partial<_63.RedelegationEntry>): _63.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _63.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Redelegation;
                fromPartial(object: Partial<_63.Redelegation>): _63.Redelegation;
            };
            Params: {
                encode(message: _63.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Params;
                fromPartial(object: Partial<_63.Params>): _63.Params;
            };
            DelegationResponse: {
                encode(message: _63.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DelegationResponse;
                fromPartial(object: Partial<_63.DelegationResponse>): _63.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _63.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.RedelegationEntryResponse;
                fromPartial(object: Partial<_63.RedelegationEntryResponse>): _63.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _63.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.RedelegationResponse;
                fromPartial(object: Partial<_63.RedelegationResponse>): _63.RedelegationResponse;
            };
            Pool: {
                encode(message: _63.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Pool;
                fromPartial(object: Partial<_63.Pool>): _63.Pool;
            };
            ValidatorUpdates: {
                encode(message: _63.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorUpdates;
                fromPartial(object: Partial<_63.ValidatorUpdates>): _63.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _62.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorsRequest;
                fromPartial(object: Partial<_62.QueryValidatorsRequest>): _62.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _62.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorsResponse;
                fromPartial(object: Partial<_62.QueryValidatorsResponse>): _62.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _62.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorRequest;
                fromPartial(object: Partial<_62.QueryValidatorRequest>): _62.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _62.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorResponse;
                fromPartial(object: Partial<_62.QueryValidatorResponse>): _62.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _62.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsRequest>): _62.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _62.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsResponse>): _62.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _62.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsRequest>): _62.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _62.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsResponse>): _62.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _62.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegationRequest;
                fromPartial(object: Partial<_62.QueryDelegationRequest>): _62.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _62.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegationResponse;
                fromPartial(object: Partial<_62.QueryDelegationResponse>): _62.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _62.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationRequest>): _62.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _62.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationResponse>): _62.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _62.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsRequest>): _62.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _62.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsResponse>): _62.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _62.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsRequest>): _62.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _62.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsResponse>): _62.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _62.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryRedelegationsRequest;
                fromPartial(object: Partial<_62.QueryRedelegationsRequest>): _62.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _62.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryRedelegationsResponse;
                fromPartial(object: Partial<_62.QueryRedelegationsResponse>): _62.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _62.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsRequest>): _62.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _62.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsResponse>): _62.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _62.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorRequest>): _62.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _62.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorResponse>): _62.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _62.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_62.QueryHistoricalInfoRequest>): _62.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _62.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_62.QueryHistoricalInfoResponse>): _62.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _62.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.QueryPoolRequest;
                fromPartial(_: Partial<_62.QueryPoolRequest>): _62.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _62.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryPoolResponse;
                fromPartial(object: Partial<_62.QueryPoolResponse>): _62.QueryPoolResponse;
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
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _61.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.LastValidatorPower;
                fromPartial(object: Partial<_61.LastValidatorPower>): _61.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _60.AuthorizationType;
            authorizationTypeToJSON(object: _60.AuthorizationType): string;
            AuthorizationType: typeof _60.AuthorizationType;
            AuthorizationTypeSDKType: typeof _60.AuthorizationType;
            StakeAuthorization: {
                encode(message: _60.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.StakeAuthorization;
                fromPartial(object: Partial<_60.StakeAuthorization>): _60.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _60.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.StakeAuthorization_Validators;
                fromPartial(object: Partial<_60.StakeAuthorization_Validators>): _60.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _65.SignMode;
                signModeToJSON(object: _65.SignMode): string;
                SignMode: typeof _65.SignMode;
                SignModeSDKType: typeof _65.SignMode;
                SignatureDescriptors: {
                    encode(message: _65.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.SignatureDescriptors;
                    fromPartial(object: Partial<_65.SignatureDescriptors>): _65.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _65.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.SignatureDescriptor;
                    fromPartial(object: Partial<_65.SignatureDescriptor>): _65.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _65.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data>): _65.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _65.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Single>): _65.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _65.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Multi>): _65.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _137.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _67.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Tx;
                fromPartial(object: Partial<_67.Tx>): _67.Tx;
            };
            TxRaw: {
                encode(message: _67.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.TxRaw;
                fromPartial(object: Partial<_67.TxRaw>): _67.TxRaw;
            };
            SignDoc: {
                encode(message: _67.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.SignDoc;
                fromPartial(object: Partial<_67.SignDoc>): _67.SignDoc;
            };
            TxBody: {
                encode(message: _67.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.TxBody;
                fromPartial(object: Partial<_67.TxBody>): _67.TxBody;
            };
            AuthInfo: {
                encode(message: _67.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.AuthInfo;
                fromPartial(object: Partial<_67.AuthInfo>): _67.AuthInfo;
            };
            SignerInfo: {
                encode(message: _67.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.SignerInfo;
                fromPartial(object: Partial<_67.SignerInfo>): _67.SignerInfo;
            };
            ModeInfo: {
                encode(message: _67.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ModeInfo;
                fromPartial(object: Partial<_67.ModeInfo>): _67.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _67.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ModeInfo_Single;
                fromPartial(object: Partial<_67.ModeInfo_Single>): _67.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _67.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ModeInfo_Multi;
                fromPartial(object: Partial<_67.ModeInfo_Multi>): _67.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _67.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Fee;
                fromPartial(object: Partial<_67.Fee>): _67.Fee;
            };
            orderByFromJSON(object: any): _66.OrderBy;
            orderByToJSON(object: _66.OrderBy): string;
            broadcastModeFromJSON(object: any): _66.BroadcastMode;
            broadcastModeToJSON(object: _66.BroadcastMode): string;
            OrderBy: typeof _66.OrderBy;
            OrderBySDKType: typeof _66.OrderBy;
            BroadcastMode: typeof _66.BroadcastMode;
            BroadcastModeSDKType: typeof _66.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _66.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetTxsEventRequest;
                fromPartial(object: Partial<_66.GetTxsEventRequest>): _66.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _66.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetTxsEventResponse;
                fromPartial(object: Partial<_66.GetTxsEventResponse>): _66.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _66.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.BroadcastTxRequest;
                fromPartial(object: Partial<_66.BroadcastTxRequest>): _66.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _66.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.BroadcastTxResponse;
                fromPartial(object: Partial<_66.BroadcastTxResponse>): _66.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _66.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.SimulateRequest;
                fromPartial(object: Partial<_66.SimulateRequest>): _66.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _66.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.SimulateResponse;
                fromPartial(object: Partial<_66.SimulateResponse>): _66.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _66.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetTxRequest;
                fromPartial(object: Partial<_66.GetTxRequest>): _66.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _66.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetTxResponse;
                fromPartial(object: Partial<_66.GetTxResponse>): _66.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _66.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_66.GetBlockWithTxsRequest>): _66.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _66.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_66.GetBlockWithTxsResponse>): _66.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _69.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.Plan;
                fromPartial(object: Partial<_69.Plan>): _69.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _69.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_69.SoftwareUpgradeProposal>): _69.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _69.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_69.CancelSoftwareUpgradeProposal>): _69.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _69.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.ModuleVersion;
                fromPartial(object: Partial<_69.ModuleVersion>): _69.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _68.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _68.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_68.QueryCurrentPlanRequest>): _68.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _68.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_68.QueryCurrentPlanResponse>): _68.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _68.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_68.QueryAppliedPlanRequest>): _68.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _68.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_68.QueryAppliedPlanResponse>): _68.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _68.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateRequest>): _68.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _68.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateResponse>): _68.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _68.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_68.QueryModuleVersionsRequest>): _68.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _68.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_68.QueryModuleVersionsResponse>): _68.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _148.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _70.MsgCreateVestingAccount) => {
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
                    }) => _70.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _71.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.BaseVestingAccount;
                fromPartial(object: Partial<_71.BaseVestingAccount>): _71.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _71.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.ContinuousVestingAccount;
                fromPartial(object: Partial<_71.ContinuousVestingAccount>): _71.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _71.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DelayedVestingAccount;
                fromPartial(object: Partial<_71.DelayedVestingAccount>): _71.DelayedVestingAccount;
            };
            Period: {
                encode(message: _71.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Period;
                fromPartial(object: Partial<_71.Period>): _71.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _71.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.PeriodicVestingAccount;
                fromPartial(object: Partial<_71.PeriodicVestingAccount>): _71.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _71.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.PermanentLockedAccount;
                fromPartial(object: Partial<_71.PermanentLockedAccount>): _71.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _70.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateVestingAccount;
                fromPartial(object: Partial<_70.MsgCreateVestingAccount>): _70.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _70.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_70.MsgCreateVestingAccountResponse>): _70.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _139.MsgClientImpl;
                };
                bank: {
                    v1beta1: _140.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _141.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _142.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _143.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _144.MsgClientImpl;
                };
                gov: {
                    v1beta1: _145.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _146.MsgClientImpl;
                };
                staking: {
                    v1beta1: _147.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _148.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        moduleAccountByName(request: _4.QueryModuleAccountByNameRequest): Promise<_4.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                        granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                        granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
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
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                        allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                        allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                        allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                        proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                        vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                        votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                        params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                        deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                        tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                        annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                        signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                        validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                        validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                        unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                        delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                        pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                        getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                        broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                        getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                        getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                        appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
