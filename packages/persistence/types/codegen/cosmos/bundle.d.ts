import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/kv/v1beta1/kv";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v1beta1/reflection";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/snapshots/v1beta1/snapshot";
import * as _28 from "./base/store/v1beta1/commit_info";
import * as _29 from "./base/store/v1beta1/listening";
import * as _30 from "./base/store/v1beta1/snapshot";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./capability/v1beta1/capability";
import * as _34 from "./capability/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/tx";
import * as _37 from "./crypto/ed25519/keys";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./mint/v1beta1/genesis";
import * as _59 from "./mint/v1beta1/mint";
import * as _60 from "./mint/v1beta1/query";
import * as _61 from "./params/v1beta1/params";
import * as _62 from "./params/v1beta1/query";
import * as _63 from "./slashing/v1beta1/genesis";
import * as _64 from "./slashing/v1beta1/query";
import * as _65 from "./slashing/v1beta1/slashing";
import * as _66 from "./slashing/v1beta1/tx";
import * as _67 from "./staking/v1beta1/authz";
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
import * as _156 from "./auth/v1beta1/query.rpc.Query";
import * as _157 from "./authz/v1beta1/query.rpc.Query";
import * as _158 from "./bank/v1beta1/query.rpc.Query";
import * as _159 from "./base/node/v1beta1/query.rpc.Service";
import * as _160 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _161 from "./distribution/v1beta1/query.rpc.Query";
import * as _162 from "./evidence/v1beta1/query.rpc.Query";
import * as _163 from "./feegrant/v1beta1/query.rpc.Query";
import * as _164 from "./gov/v1beta1/query.rpc.Query";
import * as _165 from "./mint/v1beta1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./slashing/v1beta1/query.rpc.Query";
import * as _168 from "./staking/v1beta1/query.rpc.Query";
import * as _169 from "./tx/v1beta1/service.rpc.Service";
import * as _170 from "./upgrade/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./crisis/v1beta1/tx.rpc.msg";
import * as _174 from "./distribution/v1beta1/tx.rpc.msg";
import * as _175 from "./evidence/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1beta1/tx.rpc.msg";
import * as _178 from "./slashing/v1beta1/tx.rpc.msg";
import * as _179 from "./staking/v1beta1/tx.rpc.msg";
import * as _180 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _10.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryAccountsRequest;
                fromPartial(object: Partial<_10.QueryAccountsRequest>): _10.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _10.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryAccountsResponse;
                fromPartial(object: Partial<_10.QueryAccountsResponse>): _10.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _10.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryAccountRequest;
                fromPartial(object: Partial<_10.QueryAccountRequest>): _10.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _10.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryAccountResponse;
                fromPartial(object: Partial<_10.QueryAccountResponse>): _10.QueryAccountResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _10.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameRequest>): _10.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _10.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameResponse>): _10.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            BaseAccount: {
                encode(message: _8.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.BaseAccount;
                fromPartial(object: Partial<_8.BaseAccount>): _8.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _8.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.ModuleAccount;
                fromPartial(object: Partial<_8.ModuleAccount>): _8.ModuleAccount;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.Params;
                fromPartial(object: Partial<_8.Params>): _8.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _15.MsgGrant) => {
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
                    }) => _15.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _15.MsgExec) => {
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
                    }) => _15.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _15.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _15.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _15.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.MsgGrant;
                fromPartial(object: Partial<_15.MsgGrant>): _15.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _15.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.MsgExecResponse;
                fromPartial(object: Partial<_15.MsgExecResponse>): _15.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _15.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.MsgExec;
                fromPartial(object: Partial<_15.MsgExec>): _15.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _15.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.MsgGrantResponse;
                fromPartial(_: Partial<_15.MsgGrantResponse>): _15.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _15.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.MsgRevoke;
                fromPartial(object: Partial<_15.MsgRevoke>): _15.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _15.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.MsgRevokeResponse;
                fromPartial(_: Partial<_15.MsgRevokeResponse>): _15.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _14.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGrantsRequest;
                fromPartial(object: Partial<_14.QueryGrantsRequest>): _14.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _14.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGrantsResponse;
                fromPartial(object: Partial<_14.QueryGrantsResponse>): _14.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _14.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranterGrantsRequest>): _14.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _14.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranterGrantsResponse>): _14.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _14.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranteeGrantsRequest>): _14.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _14.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranteeGrantsResponse>): _14.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            };
            EventGrant: {
                encode(message: _12.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventGrant;
                fromPartial(object: Partial<_12.EventGrant>): _12.EventGrant;
            };
            EventRevoke: {
                encode(message: _12.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventRevoke;
                fromPartial(object: Partial<_12.EventRevoke>): _12.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _11.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.GenericAuthorization;
                fromPartial(object: Partial<_11.GenericAuthorization>): _11.GenericAuthorization;
            };
            Grant: {
                encode(message: _11.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Grant;
                fromPartial(object: Partial<_11.Grant>): _11.Grant;
            };
            GrantAuthorization: {
                encode(message: _11.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.GrantAuthorization;
                fromPartial(object: Partial<_11.GrantAuthorization>): _11.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                spendableBalances(request: _19.QuerySpendableBalancesRequest): Promise<_19.QuerySpendableBalancesResponse>;
                totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _20.MsgSend) => {
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
                    }) => _20.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _20.MsgMultiSend) => {
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
                    }) => _20.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _20.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgSend;
                fromPartial(object: Partial<_20.MsgSend>): _20.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _20.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgSendResponse;
                fromPartial(_: Partial<_20.MsgSendResponse>): _20.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _20.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgMultiSend;
                fromPartial(object: Partial<_20.MsgMultiSend>): _20.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _20.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgMultiSendResponse;
                fromPartial(_: Partial<_20.MsgMultiSendResponse>): _20.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _19.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryBalanceRequest;
                fromPartial(object: Partial<_19.QueryBalanceRequest>): _19.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _19.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryBalanceResponse;
                fromPartial(object: Partial<_19.QueryBalanceResponse>): _19.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _19.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryAllBalancesRequest;
                fromPartial(object: Partial<_19.QueryAllBalancesRequest>): _19.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _19.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryAllBalancesResponse;
                fromPartial(object: Partial<_19.QueryAllBalancesResponse>): _19.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _19.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_19.QuerySpendableBalancesRequest>): _19.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _19.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_19.QuerySpendableBalancesResponse>): _19.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _19.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_19.QueryTotalSupplyRequest>): _19.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _19.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_19.QueryTotalSupplyResponse>): _19.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _19.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QuerySupplyOfRequest;
                fromPartial(object: Partial<_19.QuerySupplyOfRequest>): _19.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _19.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QuerySupplyOfResponse;
                fromPartial(object: Partial<_19.QuerySupplyOfResponse>): _19.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _19.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.QueryParamsRequest;
                fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _19.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryParamsResponse;
                fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _19.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_19.QueryDenomsMetadataRequest>): _19.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _19.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_19.QueryDenomsMetadataResponse>): _19.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _19.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_19.QueryDenomMetadataRequest>): _19.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _19.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_19.QueryDenomMetadataResponse>): _19.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
            };
            Balance: {
                encode(message: _18.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.Balance;
                fromPartial(object: Partial<_18.Balance>): _18.Balance;
            };
            Params: {
                encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Params;
                fromPartial(object: Partial<_17.Params>): _17.Params;
            };
            SendEnabled: {
                encode(message: _17.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.SendEnabled;
                fromPartial(object: Partial<_17.SendEnabled>): _17.SendEnabled;
            };
            Input: {
                encode(message: _17.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Input;
                fromPartial(object: Partial<_17.Input>): _17.Input;
            };
            Output: {
                encode(message: _17.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Output;
                fromPartial(object: Partial<_17.Output>): _17.Output;
            };
            Supply: {
                encode(message: _17.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Supply;
                fromPartial(object: Partial<_17.Supply>): _17.Supply;
            };
            DenomUnit: {
                encode(message: _17.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.DenomUnit;
                fromPartial(object: Partial<_17.DenomUnit>): _17.DenomUnit;
            };
            Metadata: {
                encode(message: _17.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Metadata;
                fromPartial(object: Partial<_17.Metadata>): _17.Metadata;
            };
            SendAuthorization: {
                encode(message: _16.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.SendAuthorization;
                fromPartial(object: Partial<_16.SendAuthorization>): _16.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _21.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.TxResponse;
                    fromPartial(object: Partial<_21.TxResponse>): _21.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _21.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.ABCIMessageLog;
                    fromPartial(object: Partial<_21.ABCIMessageLog>): _21.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _21.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.StringEvent;
                    fromPartial(object: Partial<_21.StringEvent>): _21.StringEvent;
                };
                Attribute: {
                    encode(message: _21.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Attribute;
                    fromPartial(object: Partial<_21.Attribute>): _21.Attribute;
                };
                GasInfo: {
                    encode(message: _21.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.GasInfo;
                    fromPartial(object: Partial<_21.GasInfo>): _21.GasInfo;
                };
                Result: {
                    encode(message: _21.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.Result;
                    fromPartial(object: Partial<_21.Result>): _21.Result;
                };
                SimulationResponse: {
                    encode(message: _21.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SimulationResponse;
                    fromPartial(object: Partial<_21.SimulationResponse>): _21.SimulationResponse;
                };
                MsgData: {
                    encode(message: _21.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.MsgData;
                    fromPartial(object: Partial<_21.MsgData>): _21.MsgData;
                };
                TxMsgData: {
                    encode(message: _21.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.TxMsgData;
                    fromPartial(object: Partial<_21.TxMsgData>): _21.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _21.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.SearchTxsResult;
                    fromPartial(object: Partial<_21.SearchTxsResult>): _21.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _22.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.Pairs;
                    fromPartial(object: Partial<_22.Pairs>): _22.Pairs;
                };
                Pair: {
                    encode(message: _22.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.Pair;
                    fromPartial(object: Partial<_22.Pair>): _22.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _159.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _23.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _23.ConfigRequest;
                    fromPartial(_: Partial<_23.ConfigRequest>): _23.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _23.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.ConfigResponse;
                    fromPartial(object: Partial<_23.ConfigResponse>): _23.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _24.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.PageRequest;
                    fromPartial(object: Partial<_24.PageRequest>): _24.PageRequest;
                };
                PageResponse: {
                    encode(message: _24.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.PageResponse;
                    fromPartial(object: Partial<_24.PageResponse>): _24.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _25.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _25.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_25.ListAllInterfacesRequest>): _25.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _25.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_25.ListAllInterfacesResponse>): _25.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _25.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ListImplementationsRequest;
                    fromPartial(object: Partial<_25.ListImplementationsRequest>): _25.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _25.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.ListImplementationsResponse;
                    fromPartial(object: Partial<_25.ListImplementationsResponse>): _25.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _26.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.AppDescriptor;
                    fromPartial(object: Partial<_26.AppDescriptor>): _26.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _26.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.TxDescriptor;
                    fromPartial(object: Partial<_26.TxDescriptor>): _26.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _26.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.AuthnDescriptor;
                    fromPartial(object: Partial<_26.AuthnDescriptor>): _26.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _26.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.SigningModeDescriptor;
                    fromPartial(object: Partial<_26.SigningModeDescriptor>): _26.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _26.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ChainDescriptor;
                    fromPartial(object: Partial<_26.ChainDescriptor>): _26.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _26.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.CodecDescriptor;
                    fromPartial(object: Partial<_26.CodecDescriptor>): _26.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _26.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.InterfaceDescriptor;
                    fromPartial(object: Partial<_26.InterfaceDescriptor>): _26.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _26.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_26.InterfaceImplementerDescriptor>): _26.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _26.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_26.InterfaceAcceptingMessageDescriptor>): _26.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _26.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ConfigurationDescriptor;
                    fromPartial(object: Partial<_26.ConfigurationDescriptor>): _26.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _26.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.MsgDescriptor;
                    fromPartial(object: Partial<_26.MsgDescriptor>): _26.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _26.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_26.GetAuthnDescriptorRequest>): _26.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _26.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_26.GetAuthnDescriptorResponse>): _26.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _26.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_26.GetChainDescriptorRequest>): _26.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _26.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_26.GetChainDescriptorResponse>): _26.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _26.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_26.GetCodecDescriptorRequest>): _26.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _26.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_26.GetCodecDescriptorResponse>): _26.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _26.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_26.GetConfigurationDescriptorRequest>): _26.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _26.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_26.GetConfigurationDescriptorResponse>): _26.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _26.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_26.GetQueryServicesDescriptorRequest>): _26.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _26.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_26.GetQueryServicesDescriptorResponse>): _26.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _26.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_26.GetTxDescriptorRequest>): _26.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _26.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_26.GetTxDescriptorResponse>): _26.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _26.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.QueryServicesDescriptor;
                    fromPartial(object: Partial<_26.QueryServicesDescriptor>): _26.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _26.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.QueryServiceDescriptor;
                    fromPartial(object: Partial<_26.QueryServiceDescriptor>): _26.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _26.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.QueryMethodDescriptor;
                    fromPartial(object: Partial<_26.QueryMethodDescriptor>): _26.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _27.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Snapshot;
                    fromPartial(object: Partial<_27.Snapshot>): _27.Snapshot;
                };
                Metadata: {
                    encode(message: _27.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Metadata;
                    fromPartial(object: Partial<_27.Metadata>): _27.Metadata;
                };
                SnapshotItem: {
                    encode(message: _27.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SnapshotItem;
                    fromPartial(object: Partial<_27.SnapshotItem>): _27.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _27.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SnapshotStoreItem;
                    fromPartial(object: Partial<_27.SnapshotStoreItem>): _27.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _27.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SnapshotIAVLItem;
                    fromPartial(object: Partial<_27.SnapshotIAVLItem>): _27.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _27.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_27.SnapshotExtensionMeta>): _27.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _27.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_27.SnapshotExtensionPayload>): _27.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _30.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotItem;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _30.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _30.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                };
                StoreKVPair: {
                    encode(message: _29.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.StoreKVPair;
                    fromPartial(object: Partial<_29.StoreKVPair>): _29.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _29.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.BlockMetadata;
                    fromPartial(object: Partial<_29.BlockMetadata>): _29.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _29.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_29.BlockMetadata_DeliverTx>): _29.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _28.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.CommitInfo;
                    fromPartial(object: Partial<_28.CommitInfo>): _28.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _28.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.StoreInfo;
                    fromPartial(object: Partial<_28.StoreInfo>): _28.StoreInfo;
                };
                CommitID: {
                    encode(message: _28.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.CommitID;
                    fromPartial(object: Partial<_28.CommitID>): _28.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _160.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                    getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                    getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                    getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _31.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightRequest>): _31.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _31.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightResponse>): _31.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _31.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetRequest>): _31.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _31.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetResponse>): _31.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _31.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.Validator;
                    fromPartial(object: Partial<_31.Validator>): _31.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _31.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_31.GetBlockByHeightRequest>): _31.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _31.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_31.GetBlockByHeightResponse>): _31.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _31.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _31.GetLatestBlockRequest;
                    fromPartial(_: Partial<_31.GetLatestBlockRequest>): _31.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _31.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetLatestBlockResponse;
                    fromPartial(object: Partial<_31.GetLatestBlockResponse>): _31.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _31.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _31.GetSyncingRequest;
                    fromPartial(_: Partial<_31.GetSyncingRequest>): _31.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _31.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetSyncingResponse;
                    fromPartial(object: Partial<_31.GetSyncingResponse>): _31.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _31.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _31.GetNodeInfoRequest;
                    fromPartial(_: Partial<_31.GetNodeInfoRequest>): _31.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _31.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.GetNodeInfoResponse;
                    fromPartial(object: Partial<_31.GetNodeInfoResponse>): _31.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _31.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.VersionInfo;
                    fromPartial(object: Partial<_31.VersionInfo>): _31.VersionInfo;
                };
                Module: {
                    encode(message: _31.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.Module;
                    fromPartial(object: Partial<_31.Module>): _31.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _32.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Coin;
                fromPartial(object: Partial<_32.Coin>): _32.Coin;
            };
            DecCoin: {
                encode(message: _32.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.DecCoin;
                fromPartial(object: Partial<_32.DecCoin>): _32.DecCoin;
            };
            IntProto: {
                encode(message: _32.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.IntProto;
                fromPartial(object: Partial<_32.IntProto>): _32.IntProto;
            };
            DecProto: {
                encode(message: _32.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.DecProto;
                fromPartial(object: Partial<_32.DecProto>): _32.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _34.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.GenesisOwners;
                fromPartial(object: Partial<_34.GenesisOwners>): _34.GenesisOwners;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Capability: {
                encode(message: _33.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Capability;
                fromPartial(object: Partial<_33.Capability>): _33.Capability;
            };
            Owner: {
                encode(message: _33.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Owner;
                fromPartial(object: Partial<_33.Owner>): _33.Owner;
            };
            CapabilityOwners: {
                encode(message: _33.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.CapabilityOwners;
                fromPartial(object: Partial<_33.CapabilityOwners>): _33.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _36.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _36.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _36.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.MsgVerifyInvariant;
                fromPartial(object: Partial<_36.MsgVerifyInvariant>): _36.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _36.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_36.MsgVerifyInvariantResponse>): _36.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _38.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.LegacyAminoPubKey;
                fromPartial(object: Partial<_38.LegacyAminoPubKey>): _38.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _44.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _44.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _44.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _44.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _44.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _44.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _44.MsgFundCommunityPool) => {
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
                    }) => _44.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _44.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_44.MsgSetWithdrawAddress>): _44.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _44.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_44.MsgSetWithdrawAddressResponse>): _44.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _44.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorReward>): _44.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _44.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_44.MsgWithdrawDelegatorRewardResponse>): _44.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _44.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommission>): _44.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _44.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_44.MsgWithdrawValidatorCommissionResponse>): _44.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _44.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgFundCommunityPool;
                fromPartial(object: Partial<_44.MsgFundCommunityPool>): _44.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _44.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_44.MsgFundCommunityPoolResponse>): _44.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _43.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsRequest>): _43.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _43.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsResponse>): _43.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _43.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_43.QueryValidatorCommissionRequest>): _43.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _43.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_43.QueryValidatorCommissionResponse>): _43.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _43.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_43.QueryValidatorSlashesRequest>): _43.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _43.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_43.QueryValidatorSlashesResponse>): _43.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _43.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_43.QueryDelegationRewardsRequest>): _43.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _43.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_43.QueryDelegationRewardsResponse>): _43.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _43.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsRequest>): _43.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _43.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsResponse>): _43.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsRequest>): _43.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsResponse>): _43.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _43.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressRequest>): _43.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _43.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressResponse>): _43.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _43.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _43.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_43.QueryCommunityPoolRequest>): _43.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _43.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_43.QueryCommunityPoolResponse>): _43.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _42.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_42.DelegatorWithdrawInfo>): _42.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _42.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewardsRecord>): _42.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _42.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommissionRecord>): _42.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _42.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewardsRecord>): _42.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _42.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorCurrentRewardsRecord>): _42.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _42.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_42.DelegatorStartingInfoRecord>): _42.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _42.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_42.ValidatorSlashEventRecord>): _42.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _41.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewards>): _41.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _41.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorCurrentRewards;
                fromPartial(object: Partial<_41.ValidatorCurrentRewards>): _41.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _41.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommission>): _41.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _41.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewards>): _41.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _41.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorSlashEvent;
                fromPartial(object: Partial<_41.ValidatorSlashEvent>): _41.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _41.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ValidatorSlashEvents;
                fromPartial(object: Partial<_41.ValidatorSlashEvents>): _41.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _41.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.FeePool;
                fromPartial(object: Partial<_41.FeePool>): _41.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _41.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposal>): _41.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _41.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.DelegatorStartingInfo;
                fromPartial(object: Partial<_41.DelegatorStartingInfo>): _41.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _41.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.DelegationDelegatorReward;
                fromPartial(object: Partial<_41.DelegationDelegatorReward>): _41.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _41.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposalWithDeposit>): _41.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _48.MsgSubmitEvidence) => {
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
                    }) => _48.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _48.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.MsgSubmitEvidence;
                fromPartial(object: Partial<_48.MsgSubmitEvidence>): _48.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _48.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_48.MsgSubmitEvidenceResponse>): _48.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _47.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryEvidenceRequest;
                fromPartial(object: Partial<_47.QueryEvidenceRequest>): _47.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _47.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryEvidenceResponse;
                fromPartial(object: Partial<_47.QueryEvidenceResponse>): _47.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _47.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_47.QueryAllEvidenceRequest>): _47.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _47.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_47.QueryAllEvidenceResponse>): _47.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            Equivocation: {
                encode(message: _45.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Equivocation;
                fromPartial(object: Partial<_45.Equivocation>): _45.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _52.MsgGrantAllowance) => {
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
                    }) => _52.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _52.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _52.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _52.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgGrantAllowance;
                fromPartial(object: Partial<_52.MsgGrantAllowance>): _52.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _52.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_52.MsgGrantAllowanceResponse>): _52.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _52.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgRevokeAllowance;
                fromPartial(object: Partial<_52.MsgRevokeAllowance>): _52.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _52.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_52.MsgRevokeAllowanceResponse>): _52.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _51.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowanceRequest;
                fromPartial(object: Partial<_51.QueryAllowanceRequest>): _51.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _51.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowanceResponse;
                fromPartial(object: Partial<_51.QueryAllowanceResponse>): _51.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _51.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowancesRequest;
                fromPartial(object: Partial<_51.QueryAllowancesRequest>): _51.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _51.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowancesResponse;
                fromPartial(object: Partial<_51.QueryAllowancesResponse>): _51.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _51.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterRequest>): _51.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _51.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterResponse>): _51.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
            BasicAllowance: {
                encode(message: _49.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.BasicAllowance;
                fromPartial(object: Partial<_49.BasicAllowance>): _49.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _49.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.PeriodicAllowance;
                fromPartial(object: Partial<_49.PeriodicAllowance>): _49.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _49.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.AllowedMsgAllowance;
                fromPartial(object: Partial<_49.AllowedMsgAllowance>): _49.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _49.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.Grant;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _57.MsgSubmitProposal) => {
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
                    }) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _57.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _57.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _57.MsgVoteWeighted) => {
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
                    }) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _57.MsgDeposit) => {
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
                    }) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgSubmitProposal;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgVote;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgVoteResponse;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgVoteWeighted;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgDeposit;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgDepositResponse;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryProposalRequest;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryProposalResponse;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryProposalsRequest;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryProposalsResponse;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryVoteRequest;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryVoteResponse;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryVotesRequest;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryVotesResponse;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryParamsRequest;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDepositRequest;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDepositResponse;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDepositsRequest;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDepositsResponse;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOption;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.WeightedVoteOption;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _55.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.TextProposal;
                fromPartial(object: Partial<_55.TextProposal>): _55.TextProposal;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Deposit;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Proposal;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.TallyResult;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Vote;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.DepositParams;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.VotingParams;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.TallyParams;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                inflation(request?: _60.QueryInflationRequest): Promise<_60.QueryInflationResponse>;
                annualProvisions(request?: _60.QueryAnnualProvisionsRequest): Promise<_60.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _60.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryInflationRequest;
                fromPartial(_: Partial<_60.QueryInflationRequest>): _60.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _60.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryInflationResponse;
                fromPartial(object: Partial<_60.QueryInflationResponse>): _60.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _60.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_60.QueryAnnualProvisionsRequest>): _60.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _60.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_60.QueryAnnualProvisionsResponse>): _60.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _59.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Minter;
                fromPartial(object: Partial<_59.Minter>): _59.Minter;
            };
            Params: {
                encode(message: _59.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Params;
                fromPartial(object: Partial<_59.Params>): _59.Params;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
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
            ParameterChangeProposal: {
                encode(message: _61.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.ParameterChangeProposal;
                fromPartial(object: Partial<_61.ParameterChangeProposal>): _61.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _61.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.ParamChange;
                fromPartial(object: Partial<_61.ParamChange>): _61.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                signingInfo(request: _64.QuerySigningInfoRequest): Promise<_64.QuerySigningInfoResponse>;
                signingInfos(request?: _64.QuerySigningInfosRequest): Promise<_64.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _66.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _66.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _66.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgUnjail;
                fromPartial(object: Partial<_66.MsgUnjail>): _66.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _66.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgUnjailResponse;
                fromPartial(_: Partial<_66.MsgUnjailResponse>): _66.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _65.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorSigningInfo;
                fromPartial(object: Partial<_65.ValidatorSigningInfo>): _65.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _64.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySigningInfoRequest;
                fromPartial(object: Partial<_64.QuerySigningInfoRequest>): _64.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _64.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySigningInfoResponse;
                fromPartial(object: Partial<_64.QuerySigningInfoResponse>): _64.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _64.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySigningInfosRequest;
                fromPartial(object: Partial<_64.QuerySigningInfosRequest>): _64.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _64.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySigningInfosResponse;
                fromPartial(object: Partial<_64.QuerySigningInfosResponse>): _64.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            SigningInfo: {
                encode(message: _63.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.SigningInfo;
                fromPartial(object: Partial<_63.SigningInfo>): _63.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _63.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorMissedBlocks;
                fromPartial(object: Partial<_63.ValidatorMissedBlocks>): _63.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _63.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MissedBlock;
                fromPartial(object: Partial<_63.MissedBlock>): _63.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
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
            authorizationTypeFromJSON(object: any): _67.AuthorizationType;
            authorizationTypeToJSON(object: _67.AuthorizationType): string;
            AuthorizationType: typeof _67.AuthorizationType;
            AuthorizationTypeSDKType: typeof _67.AuthorizationType;
            StakeAuthorization: {
                encode(message: _67.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.StakeAuthorization;
                fromPartial(object: Partial<_67.StakeAuthorization>): _67.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _67.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.StakeAuthorization_Validators;
                fromPartial(object: Partial<_67.StakeAuthorization_Validators>): _67.StakeAuthorization_Validators;
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
            ServiceClientImpl: typeof _169.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
                getBlockWithTxs(request: _73.GetBlockWithTxsRequest): Promise<_73.GetBlockWithTxsResponse>;
            };
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
            GetBlockWithTxsRequest: {
                encode(message: _73.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_73.GetBlockWithTxsRequest>): _73.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _73.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_73.GetBlockWithTxsResponse>): _73.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _75.QueryModuleVersionsRequest): Promise<_75.QueryModuleVersionsResponse>;
            };
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
            ModuleVersion: {
                encode(message: _76.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModuleVersion;
                fromPartial(object: Partial<_76.ModuleVersion>): _76.ModuleVersion;
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
            QueryModuleVersionsRequest: {
                encode(message: _75.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_75.QueryModuleVersionsRequest>): _75.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _75.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_75.QueryModuleVersionsResponse>): _75.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
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
                    v1beta1: _171.MsgClientImpl;
                };
                bank: {
                    v1beta1: _172.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _173.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _174.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _175.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _176.MsgClientImpl;
                };
                gov: {
                    v1beta1: _177.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _178.MsgClientImpl;
                };
                staking: {
                    v1beta1: _179.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _180.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                        account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                        granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                        granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                        allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                        spendableBalances(request: _19.QuerySpendableBalancesRequest): Promise<_19.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                        supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                        params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                        denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                            getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                            getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                            getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                        allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                        allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                        allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                        proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                        vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                        votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                        params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                        deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                        tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        inflation(request?: _60.QueryInflationRequest): Promise<_60.QueryInflationResponse>;
                        annualProvisions(request?: _60.QueryAnnualProvisionsRequest): Promise<_60.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        signingInfo(request: _64.QuerySigningInfoRequest): Promise<_64.QuerySigningInfoResponse>;
                        signingInfos(request?: _64.QuerySigningInfosRequest): Promise<_64.QuerySigningInfosResponse>;
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
                        getBlockWithTxs(request: _73.GetBlockWithTxsRequest): Promise<_73.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                        appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _75.QueryModuleVersionsRequest): Promise<_75.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
