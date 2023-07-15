import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/kv/v1beta1/kv";
import * as _29 from "./base/node/v1beta1/query";
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/reflection/v1beta1/reflection";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/snapshots/v1beta1/snapshot";
import * as _34 from "./base/store/v1beta1/commit_info";
import * as _35 from "./base/store/v1beta1/listening";
import * as _36 from "./base/tendermint/v1beta1/query";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/tx";
import * as _42 from "./crypto/ed25519/keys";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./mint/v1beta1/genesis";
import * as _64 from "./mint/v1beta1/mint";
import * as _65 from "./mint/v1beta1/query";
import * as _66 from "./params/v1beta1/params";
import * as _67 from "./params/v1beta1/query";
import * as _68 from "./slashing/v1beta1/genesis";
import * as _69 from "./slashing/v1beta1/query";
import * as _70 from "./slashing/v1beta1/slashing";
import * as _71 from "./slashing/v1beta1/tx";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/upgrade";
import * as _82 from "./vesting/v1beta1/tx";
import * as _83 from "./vesting/v1beta1/vesting";
import * as _148 from "./auth/v1beta1/query.rpc.Query";
import * as _149 from "./authz/v1beta1/query.rpc.Query";
import * as _150 from "./bank/v1beta1/query.rpc.Query";
import * as _151 from "./base/node/v1beta1/query.rpc.Service";
import * as _152 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _153 from "./distribution/v1beta1/query.rpc.Query";
import * as _154 from "./evidence/v1beta1/query.rpc.Query";
import * as _155 from "./feegrant/v1beta1/query.rpc.Query";
import * as _156 from "./gov/v1beta1/query.rpc.Query";
import * as _157 from "./mint/v1beta1/query.rpc.Query";
import * as _158 from "./params/v1beta1/query.rpc.Query";
import * as _159 from "./slashing/v1beta1/query.rpc.Query";
import * as _160 from "./staking/v1beta1/query.rpc.Query";
import * as _161 from "./tx/v1beta1/service.rpc.Service";
import * as _162 from "./upgrade/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/tx.rpc.msg";
import * as _164 from "./bank/v1beta1/tx.rpc.msg";
import * as _165 from "./crisis/v1beta1/tx.rpc.msg";
import * as _166 from "./distribution/v1beta1/tx.rpc.msg";
import * as _167 from "./evidence/v1beta1/tx.rpc.msg";
import * as _168 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _169 from "./gov/v1beta1/tx.rpc.msg";
import * as _170 from "./slashing/v1beta1/tx.rpc.msg";
import * as _171 from "./staking/v1beta1/tx.rpc.msg";
import * as _172 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                moduleAccountByName(request: _16.QueryModuleAccountByNameRequest): Promise<_16.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _16.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryAccountsRequest;
                fromPartial(object: Partial<_16.QueryAccountsRequest>): _16.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _16.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryAccountsResponse;
                fromPartial(object: Partial<_16.QueryAccountsResponse>): _16.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _16.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryAccountRequest;
                fromPartial(object: Partial<_16.QueryAccountRequest>): _16.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _16.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryAccountResponse;
                fromPartial(object: Partial<_16.QueryAccountResponse>): _16.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.QueryParamsRequest;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryParamsResponse;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _16.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_16.QueryModuleAccountByNameRequest>): _16.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _16.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_16.QueryModuleAccountByNameResponse>): _16.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            BaseAccount: {
                encode(message: _14.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.BaseAccount;
                fromPartial(object: Partial<_14.BaseAccount>): _14.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _14.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.ModuleAccount;
                fromPartial(object: Partial<_14.ModuleAccount>): _14.ModuleAccount;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _21.MsgGrant) => {
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
                    }) => _21.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _21.MsgExec) => {
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
                    }) => _21.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _21.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _21.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _21.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MsgGrant;
                fromPartial(object: Partial<_21.MsgGrant>): _21.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _21.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MsgExecResponse;
                fromPartial(object: Partial<_21.MsgExecResponse>): _21.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _21.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MsgExec;
                fromPartial(object: Partial<_21.MsgExec>): _21.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _21.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.MsgGrantResponse;
                fromPartial(_: Partial<_21.MsgGrantResponse>): _21.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _21.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MsgRevoke;
                fromPartial(object: Partial<_21.MsgRevoke>): _21.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _21.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.MsgRevokeResponse;
                fromPartial(_: Partial<_21.MsgRevokeResponse>): _21.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _20.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGrantsRequest;
                fromPartial(object: Partial<_20.QueryGrantsRequest>): _20.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _20.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGrantsResponse;
                fromPartial(object: Partial<_20.QueryGrantsResponse>): _20.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _20.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranterGrantsRequest>): _20.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _20.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranterGrantsResponse>): _20.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _20.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranteeGrantsRequest>): _20.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _20.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranteeGrantsResponse>): _20.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
            EventGrant: {
                encode(message: _18.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.EventGrant;
                fromPartial(object: Partial<_18.EventGrant>): _18.EventGrant;
            };
            EventRevoke: {
                encode(message: _18.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.EventRevoke;
                fromPartial(object: Partial<_18.EventRevoke>): _18.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _17.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.GenericAuthorization;
                fromPartial(object: Partial<_17.GenericAuthorization>): _17.GenericAuthorization;
            };
            Grant: {
                encode(message: _17.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Grant;
                fromPartial(object: Partial<_17.Grant>): _17.Grant;
            };
            GrantAuthorization: {
                encode(message: _17.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.GrantAuthorization;
                fromPartial(object: Partial<_17.GrantAuthorization>): _17.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _26.MsgSend) => {
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
                    }) => _26.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _26.MsgMultiSend) => {
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
                    }) => _26.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _26.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgSend;
                fromPartial(object: Partial<_26.MsgSend>): _26.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _26.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.MsgSendResponse;
                fromPartial(_: Partial<_26.MsgSendResponse>): _26.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _26.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgMultiSend;
                fromPartial(object: Partial<_26.MsgMultiSend>): _26.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _26.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.MsgMultiSendResponse;
                fromPartial(_: Partial<_26.MsgMultiSendResponse>): _26.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _25.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryBalanceRequest;
                fromPartial(object: Partial<_25.QueryBalanceRequest>): _25.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _25.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryBalanceResponse;
                fromPartial(object: Partial<_25.QueryBalanceResponse>): _25.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _25.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryAllBalancesRequest;
                fromPartial(object: Partial<_25.QueryAllBalancesRequest>): _25.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _25.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryAllBalancesResponse;
                fromPartial(object: Partial<_25.QueryAllBalancesResponse>): _25.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _25.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_25.QuerySpendableBalancesRequest>): _25.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _25.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_25.QuerySpendableBalancesResponse>): _25.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _25.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_25.QueryTotalSupplyRequest>): _25.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _25.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_25.QueryTotalSupplyResponse>): _25.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _25.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QuerySupplyOfRequest;
                fromPartial(object: Partial<_25.QuerySupplyOfRequest>): _25.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _25.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QuerySupplyOfResponse;
                fromPartial(object: Partial<_25.QuerySupplyOfResponse>): _25.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _25.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomsMetadataRequest>): _25.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _25.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomsMetadataResponse>): _25.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _25.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomMetadataRequest>): _25.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _25.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomMetadataResponse>): _25.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            Balance: {
                encode(message: _24.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Balance;
                fromPartial(object: Partial<_24.Balance>): _24.Balance;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
            };
            SendEnabled: {
                encode(message: _23.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.SendEnabled;
                fromPartial(object: Partial<_23.SendEnabled>): _23.SendEnabled;
            };
            Input: {
                encode(message: _23.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Input;
                fromPartial(object: Partial<_23.Input>): _23.Input;
            };
            Output: {
                encode(message: _23.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Output;
                fromPartial(object: Partial<_23.Output>): _23.Output;
            };
            Supply: {
                encode(message: _23.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Supply;
                fromPartial(object: Partial<_23.Supply>): _23.Supply;
            };
            DenomUnit: {
                encode(message: _23.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.DenomUnit;
                fromPartial(object: Partial<_23.DenomUnit>): _23.DenomUnit;
            };
            Metadata: {
                encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Metadata;
                fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
            };
            SendAuthorization: {
                encode(message: _22.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.SendAuthorization;
                fromPartial(object: Partial<_22.SendAuthorization>): _22.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _27.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.TxResponse;
                    fromPartial(object: Partial<_27.TxResponse>): _27.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _27.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.ABCIMessageLog;
                    fromPartial(object: Partial<_27.ABCIMessageLog>): _27.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _27.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.StringEvent;
                    fromPartial(object: Partial<_27.StringEvent>): _27.StringEvent;
                };
                Attribute: {
                    encode(message: _27.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Attribute;
                    fromPartial(object: Partial<_27.Attribute>): _27.Attribute;
                };
                GasInfo: {
                    encode(message: _27.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.GasInfo;
                    fromPartial(object: Partial<_27.GasInfo>): _27.GasInfo;
                };
                Result: {
                    encode(message: _27.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Result;
                    fromPartial(object: Partial<_27.Result>): _27.Result;
                };
                SimulationResponse: {
                    encode(message: _27.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SimulationResponse;
                    fromPartial(object: Partial<_27.SimulationResponse>): _27.SimulationResponse;
                };
                MsgData: {
                    encode(message: _27.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.MsgData;
                    fromPartial(object: Partial<_27.MsgData>): _27.MsgData;
                };
                TxMsgData: {
                    encode(message: _27.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.TxMsgData;
                    fromPartial(object: Partial<_27.TxMsgData>): _27.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _27.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.SearchTxsResult;
                    fromPartial(object: Partial<_27.SearchTxsResult>): _27.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _28.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.Pairs;
                    fromPartial(object: Partial<_28.Pairs>): _28.Pairs;
                };
                Pair: {
                    encode(message: _28.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.Pair;
                    fromPartial(object: Partial<_28.Pair>): _28.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _151.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _29.ConfigRequest): Promise<_29.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _29.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.ConfigRequest;
                    fromPartial(_: Partial<_29.ConfigRequest>): _29.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _29.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.ConfigResponse;
                    fromPartial(object: Partial<_29.ConfigResponse>): _29.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _30.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.PageRequest;
                    fromPartial(object: Partial<_30.PageRequest>): _30.PageRequest;
                };
                PageResponse: {
                    encode(message: _30.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.PageResponse;
                    fromPartial(object: Partial<_30.PageResponse>): _30.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _31.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _31.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_31.ListAllInterfacesRequest>): _31.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _31.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_31.ListAllInterfacesResponse>): _31.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _31.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.ListImplementationsRequest;
                    fromPartial(object: Partial<_31.ListImplementationsRequest>): _31.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _31.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.ListImplementationsResponse;
                    fromPartial(object: Partial<_31.ListImplementationsResponse>): _31.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _32.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.AppDescriptor;
                    fromPartial(object: Partial<_32.AppDescriptor>): _32.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _32.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.TxDescriptor;
                    fromPartial(object: Partial<_32.TxDescriptor>): _32.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _32.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.AuthnDescriptor;
                    fromPartial(object: Partial<_32.AuthnDescriptor>): _32.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _32.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.SigningModeDescriptor;
                    fromPartial(object: Partial<_32.SigningModeDescriptor>): _32.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _32.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.ChainDescriptor;
                    fromPartial(object: Partial<_32.ChainDescriptor>): _32.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _32.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.CodecDescriptor;
                    fromPartial(object: Partial<_32.CodecDescriptor>): _32.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _32.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.InterfaceDescriptor;
                    fromPartial(object: Partial<_32.InterfaceDescriptor>): _32.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _32.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_32.InterfaceImplementerDescriptor>): _32.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _32.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_32.InterfaceAcceptingMessageDescriptor>): _32.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _32.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.ConfigurationDescriptor;
                    fromPartial(object: Partial<_32.ConfigurationDescriptor>): _32.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _32.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.MsgDescriptor;
                    fromPartial(object: Partial<_32.MsgDescriptor>): _32.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _32.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_32.GetAuthnDescriptorRequest>): _32.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _32.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_32.GetAuthnDescriptorResponse>): _32.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _32.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_32.GetChainDescriptorRequest>): _32.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _32.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_32.GetChainDescriptorResponse>): _32.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _32.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_32.GetCodecDescriptorRequest>): _32.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _32.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_32.GetCodecDescriptorResponse>): _32.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _32.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_32.GetConfigurationDescriptorRequest>): _32.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _32.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_32.GetConfigurationDescriptorResponse>): _32.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _32.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_32.GetQueryServicesDescriptorRequest>): _32.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _32.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_32.GetQueryServicesDescriptorResponse>): _32.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _32.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _32.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_32.GetTxDescriptorRequest>): _32.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _32.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_32.GetTxDescriptorResponse>): _32.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _32.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.QueryServicesDescriptor;
                    fromPartial(object: Partial<_32.QueryServicesDescriptor>): _32.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _32.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.QueryServiceDescriptor;
                    fromPartial(object: Partial<_32.QueryServiceDescriptor>): _32.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _32.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.QueryMethodDescriptor;
                    fromPartial(object: Partial<_32.QueryMethodDescriptor>): _32.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _33.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.Snapshot;
                    fromPartial(object: Partial<_33.Snapshot>): _33.Snapshot;
                };
                Metadata: {
                    encode(message: _33.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.Metadata;
                    fromPartial(object: Partial<_33.Metadata>): _33.Metadata;
                };
                SnapshotItem: {
                    encode(message: _33.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SnapshotItem;
                    fromPartial(object: Partial<_33.SnapshotItem>): _33.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _33.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SnapshotStoreItem;
                    fromPartial(object: Partial<_33.SnapshotStoreItem>): _33.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _33.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SnapshotIAVLItem;
                    fromPartial(object: Partial<_33.SnapshotIAVLItem>): _33.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _33.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_33.SnapshotExtensionMeta>): _33.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _33.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_33.SnapshotExtensionPayload>): _33.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _35.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.StoreKVPair;
                    fromPartial(object: Partial<_35.StoreKVPair>): _35.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _34.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.CommitInfo;
                    fromPartial(object: Partial<_34.CommitInfo>): _34.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _34.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.StoreInfo;
                    fromPartial(object: Partial<_34.StoreInfo>): _34.StoreInfo;
                };
                CommitID: {
                    encode(message: _34.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.CommitID;
                    fromPartial(object: Partial<_34.CommitID>): _34.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _152.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _36.GetNodeInfoRequest): Promise<_36.GetNodeInfoResponse>;
                    getSyncing(request?: _36.GetSyncingRequest): Promise<_36.GetSyncingResponse>;
                    getLatestBlock(request?: _36.GetLatestBlockRequest): Promise<_36.GetLatestBlockResponse>;
                    getBlockByHeight(request: _36.GetBlockByHeightRequest): Promise<_36.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _36.GetLatestValidatorSetRequest): Promise<_36.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _36.GetValidatorSetByHeightRequest): Promise<_36.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _36.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_36.GetValidatorSetByHeightRequest>): _36.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _36.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_36.GetValidatorSetByHeightResponse>): _36.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _36.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_36.GetLatestValidatorSetRequest>): _36.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _36.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_36.GetLatestValidatorSetResponse>): _36.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _36.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.Validator;
                    fromPartial(object: Partial<_36.Validator>): _36.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _36.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_36.GetBlockByHeightRequest>): _36.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _36.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_36.GetBlockByHeightResponse>): _36.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _36.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _36.GetLatestBlockRequest;
                    fromPartial(_: Partial<_36.GetLatestBlockRequest>): _36.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _36.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetLatestBlockResponse;
                    fromPartial(object: Partial<_36.GetLatestBlockResponse>): _36.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _36.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _36.GetSyncingRequest;
                    fromPartial(_: Partial<_36.GetSyncingRequest>): _36.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _36.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetSyncingResponse;
                    fromPartial(object: Partial<_36.GetSyncingResponse>): _36.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _36.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _36.GetNodeInfoRequest;
                    fromPartial(_: Partial<_36.GetNodeInfoRequest>): _36.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _36.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.GetNodeInfoResponse;
                    fromPartial(object: Partial<_36.GetNodeInfoResponse>): _36.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _36.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.VersionInfo;
                    fromPartial(object: Partial<_36.VersionInfo>): _36.VersionInfo;
                };
                Module: {
                    encode(message: _36.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.Module;
                    fromPartial(object: Partial<_36.Module>): _36.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _37.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.Coin;
                fromPartial(object: Partial<_37.Coin>): _37.Coin;
            };
            DecCoin: {
                encode(message: _37.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.DecCoin;
                fromPartial(object: Partial<_37.DecCoin>): _37.DecCoin;
            };
            IntProto: {
                encode(message: _37.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.IntProto;
                fromPartial(object: Partial<_37.IntProto>): _37.IntProto;
            };
            DecProto: {
                encode(message: _37.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.DecProto;
                fromPartial(object: Partial<_37.DecProto>): _37.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _39.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.GenesisOwners;
                fromPartial(object: Partial<_39.GenesisOwners>): _39.GenesisOwners;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
            Capability: {
                encode(message: _38.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Capability;
                fromPartial(object: Partial<_38.Capability>): _38.Capability;
            };
            Owner: {
                encode(message: _38.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Owner;
                fromPartial(object: Partial<_38.Owner>): _38.Owner;
            };
            CapabilityOwners: {
                encode(message: _38.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.CapabilityOwners;
                fromPartial(object: Partial<_38.CapabilityOwners>): _38.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _41.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _41.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _41.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _41.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _41.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgVerifyInvariant;
                fromPartial(object: Partial<_41.MsgVerifyInvariant>): _41.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _41.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_41.MsgVerifyInvariantResponse>): _41.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _43.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.LegacyAminoPubKey;
                fromPartial(object: Partial<_43.LegacyAminoPubKey>): _43.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _44.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.PubKey;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
            };
            PrivKey: {
                encode(message: _44.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.PrivKey;
                fromPartial(object: Partial<_44.PrivKey>): _44.PrivKey;
            };
        };
        const secp256r1: {
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
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
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
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
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
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _57.MsgGrantAllowance) => {
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
                    }) => _57.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _57.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _57.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _57.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgGrantAllowance;
                fromPartial(object: Partial<_57.MsgGrantAllowance>): _57.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _57.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_57.MsgGrantAllowanceResponse>): _57.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _57.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgRevokeAllowance;
                fromPartial(object: Partial<_57.MsgRevokeAllowance>): _57.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _57.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_57.MsgRevokeAllowanceResponse>): _57.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _56.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowanceRequest;
                fromPartial(object: Partial<_56.QueryAllowanceRequest>): _56.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _56.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowanceResponse;
                fromPartial(object: Partial<_56.QueryAllowanceResponse>): _56.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _56.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowancesRequest;
                fromPartial(object: Partial<_56.QueryAllowancesRequest>): _56.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _56.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowancesResponse;
                fromPartial(object: Partial<_56.QueryAllowancesResponse>): _56.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _56.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterRequest>): _56.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _56.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterResponse>): _56.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            BasicAllowance: {
                encode(message: _54.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.BasicAllowance;
                fromPartial(object: Partial<_54.BasicAllowance>): _54.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _54.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.PeriodicAllowance;
                fromPartial(object: Partial<_54.PeriodicAllowance>): _54.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _54.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.AllowedMsgAllowance;
                fromPartial(object: Partial<_54.AllowedMsgAllowance>): _54.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _54.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Grant;
                fromPartial(object: Partial<_54.Grant>): _54.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _62.MsgSubmitProposal) => {
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
                    }) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _62.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _62.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _62.MsgVoteWeighted) => {
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
                    }) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _62.MsgDeposit) => {
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
                    }) => _62.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgSubmitProposal;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgVote;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgVoteResponse;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _62.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgVoteWeighted;
                fromPartial(object: Partial<_62.MsgVoteWeighted>): _62.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _62.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_62.MsgVoteWeightedResponse>): _62.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _62.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgDeposit;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _62.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgDepositResponse;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryProposalRequest;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryProposalResponse;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _61.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryProposalsRequest;
                fromPartial(object: Partial<_61.QueryProposalsRequest>): _61.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _61.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryProposalsResponse;
                fromPartial(object: Partial<_61.QueryProposalsResponse>): _61.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _61.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryVoteRequest;
                fromPartial(object: Partial<_61.QueryVoteRequest>): _61.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _61.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryVoteResponse;
                fromPartial(object: Partial<_61.QueryVoteResponse>): _61.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _61.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryVotesRequest;
                fromPartial(object: Partial<_61.QueryVotesRequest>): _61.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _61.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryVotesResponse;
                fromPartial(object: Partial<_61.QueryVotesResponse>): _61.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryParamsRequest;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _61.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositRequest;
                fromPartial(object: Partial<_61.QueryDepositRequest>): _61.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _61.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositResponse;
                fromPartial(object: Partial<_61.QueryDepositResponse>): _61.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _61.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositsRequest;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _61.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositsResponse;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _60.VoteOption;
            voteOptionToJSON(object: _60.VoteOption): string;
            proposalStatusFromJSON(object: any): _60.ProposalStatus;
            proposalStatusToJSON(object: _60.ProposalStatus): string;
            VoteOption: typeof _60.VoteOption;
            VoteOptionSDKType: typeof _60.VoteOption;
            ProposalStatus: typeof _60.ProposalStatus;
            ProposalStatusSDKType: typeof _60.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _60.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.WeightedVoteOption;
                fromPartial(object: Partial<_60.WeightedVoteOption>): _60.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _60.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.TextProposal;
                fromPartial(object: Partial<_60.TextProposal>): _60.TextProposal;
            };
            Deposit: {
                encode(message: _60.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Deposit;
                fromPartial(object: Partial<_60.Deposit>): _60.Deposit;
            };
            Proposal: {
                encode(message: _60.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Proposal;
                fromPartial(object: Partial<_60.Proposal>): _60.Proposal;
            };
            TallyResult: {
                encode(message: _60.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.TallyResult;
                fromPartial(object: Partial<_60.TallyResult>): _60.TallyResult;
            };
            Vote: {
                encode(message: _60.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Vote;
                fromPartial(object: Partial<_60.Vote>): _60.Vote;
            };
            DepositParams: {
                encode(message: _60.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.DepositParams;
                fromPartial(object: Partial<_60.DepositParams>): _60.DepositParams;
            };
            VotingParams: {
                encode(message: _60.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.VotingParams;
                fromPartial(object: Partial<_60.VotingParams>): _60.VotingParams;
            };
            TallyParams: {
                encode(message: _60.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.TallyParams;
                fromPartial(object: Partial<_60.TallyParams>): _60.TallyParams;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
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
            QueryInflationRequest: {
                encode(_: _65.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.QueryInflationRequest;
                fromPartial(_: Partial<_65.QueryInflationRequest>): _65.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _65.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryInflationResponse;
                fromPartial(object: Partial<_65.QueryInflationResponse>): _65.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _65.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_65.QueryAnnualProvisionsRequest>): _65.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _65.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_65.QueryAnnualProvisionsResponse>): _65.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _64.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Minter;
                fromPartial(object: Partial<_64.Minter>): _64.Minter;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryParamsRequest;
                fromPartial(object: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _66.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ParameterChangeProposal;
                fromPartial(object: Partial<_66.ParameterChangeProposal>): _66.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _66.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ParamChange;
                fromPartial(object: Partial<_66.ParamChange>): _66.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                signingInfo(request: _69.QuerySigningInfoRequest): Promise<_69.QuerySigningInfoResponse>;
                signingInfos(request?: _69.QuerySigningInfosRequest): Promise<_69.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _71.MsgUnjail): {
                        typeUrl: string;
                        value: _71.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _71.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _71.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _71.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgUnjail;
                fromPartial(object: Partial<_71.MsgUnjail>): _71.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _71.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.MsgUnjailResponse;
                fromPartial(_: Partial<_71.MsgUnjailResponse>): _71.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _70.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.ValidatorSigningInfo;
                fromPartial(object: Partial<_70.ValidatorSigningInfo>): _70.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _69.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QuerySigningInfoRequest;
                fromPartial(object: Partial<_69.QuerySigningInfoRequest>): _69.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _69.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QuerySigningInfoResponse;
                fromPartial(object: Partial<_69.QuerySigningInfoResponse>): _69.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _69.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QuerySigningInfosRequest;
                fromPartial(object: Partial<_69.QuerySigningInfosRequest>): _69.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _69.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QuerySigningInfosResponse;
                fromPartial(object: Partial<_69.QuerySigningInfosResponse>): _69.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
            SigningInfo: {
                encode(message: _68.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.SigningInfo;
                fromPartial(object: Partial<_68.SigningInfo>): _68.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _68.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.ValidatorMissedBlocks;
                fromPartial(object: Partial<_68.ValidatorMissedBlocks>): _68.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _68.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MissedBlock;
                fromPartial(object: Partial<_68.MissedBlock>): _68.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _74.QueryValidatorsRequest): Promise<_74.QueryValidatorsResponse>;
                validator(request: _74.QueryValidatorRequest): Promise<_74.QueryValidatorResponse>;
                validatorDelegations(request: _74.QueryValidatorDelegationsRequest): Promise<_74.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _74.QueryValidatorUnbondingDelegationsRequest): Promise<_74.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _74.QueryDelegationRequest): Promise<_74.QueryDelegationResponse>;
                unbondingDelegation(request: _74.QueryUnbondingDelegationRequest): Promise<_74.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _74.QueryDelegatorDelegationsRequest): Promise<_74.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _74.QueryDelegatorUnbondingDelegationsRequest): Promise<_74.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _74.QueryRedelegationsRequest): Promise<_74.QueryRedelegationsResponse>;
                delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _74.QueryDelegatorValidatorRequest): Promise<_74.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _74.QueryHistoricalInfoRequest): Promise<_74.QueryHistoricalInfoResponse>;
                pool(request?: _74.QueryPoolRequest): Promise<_74.QueryPoolResponse>;
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _76.MsgCreateValidator): {
                        typeUrl: string;
                        value: _76.MsgCreateValidator;
                    };
                    editValidator(value: _76.MsgEditValidator): {
                        typeUrl: string;
                        value: _76.MsgEditValidator;
                    };
                    delegate(value: _76.MsgDelegate): {
                        typeUrl: string;
                        value: _76.MsgDelegate;
                    };
                    beginRedelegate(value: _76.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _76.MsgBeginRedelegate;
                    };
                    undelegate(value: _76.MsgUndelegate): {
                        typeUrl: string;
                        value: _76.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _76.MsgCreateValidator) => {
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
                    }) => _76.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _76.MsgEditValidator) => {
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
                    }) => _76.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _76.MsgDelegate) => {
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
                    }) => _76.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _76.MsgBeginRedelegate) => {
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
                    }) => _76.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _76.MsgUndelegate) => {
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
                    }) => _76.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _76.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgCreateValidator;
                fromPartial(object: Partial<_76.MsgCreateValidator>): _76.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _76.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_76.MsgCreateValidatorResponse>): _76.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _76.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgEditValidator;
                fromPartial(object: Partial<_76.MsgEditValidator>): _76.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _76.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgEditValidatorResponse;
                fromPartial(_: Partial<_76.MsgEditValidatorResponse>): _76.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _76.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgDelegate;
                fromPartial(object: Partial<_76.MsgDelegate>): _76.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _76.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgDelegateResponse;
                fromPartial(_: Partial<_76.MsgDelegateResponse>): _76.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _76.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgBeginRedelegate;
                fromPartial(object: Partial<_76.MsgBeginRedelegate>): _76.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _76.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_76.MsgBeginRedelegateResponse>): _76.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _76.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgUndelegate;
                fromPartial(object: Partial<_76.MsgUndelegate>): _76.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _76.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgUndelegateResponse;
                fromPartial(object: Partial<_76.MsgUndelegateResponse>): _76.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _75.BondStatus;
            bondStatusToJSON(object: _75.BondStatus): string;
            BondStatus: typeof _75.BondStatus;
            BondStatusSDKType: typeof _75.BondStatus;
            HistoricalInfo: {
                encode(message: _75.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.HistoricalInfo;
                fromPartial(object: Partial<_75.HistoricalInfo>): _75.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _75.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.CommissionRates;
                fromPartial(object: Partial<_75.CommissionRates>): _75.CommissionRates;
            };
            Commission: {
                encode(message: _75.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Commission;
                fromPartial(object: Partial<_75.Commission>): _75.Commission;
            };
            Description: {
                encode(message: _75.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Description;
                fromPartial(object: Partial<_75.Description>): _75.Description;
            };
            Validator: {
                encode(message: _75.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Validator;
                fromPartial(object: Partial<_75.Validator>): _75.Validator;
            };
            ValAddresses: {
                encode(message: _75.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.ValAddresses;
                fromPartial(object: Partial<_75.ValAddresses>): _75.ValAddresses;
            };
            DVPair: {
                encode(message: _75.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DVPair;
                fromPartial(object: Partial<_75.DVPair>): _75.DVPair;
            };
            DVPairs: {
                encode(message: _75.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DVPairs;
                fromPartial(object: Partial<_75.DVPairs>): _75.DVPairs;
            };
            DVVTriplet: {
                encode(message: _75.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DVVTriplet;
                fromPartial(object: Partial<_75.DVVTriplet>): _75.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _75.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DVVTriplets;
                fromPartial(object: Partial<_75.DVVTriplets>): _75.DVVTriplets;
            };
            Delegation: {
                encode(message: _75.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Delegation;
                fromPartial(object: Partial<_75.Delegation>): _75.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _75.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.UnbondingDelegation;
                fromPartial(object: Partial<_75.UnbondingDelegation>): _75.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _75.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.UnbondingDelegationEntry;
                fromPartial(object: Partial<_75.UnbondingDelegationEntry>): _75.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _75.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.RedelegationEntry;
                fromPartial(object: Partial<_75.RedelegationEntry>): _75.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _75.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Redelegation;
                fromPartial(object: Partial<_75.Redelegation>): _75.Redelegation;
            };
            Params: {
                encode(message: _75.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Params;
                fromPartial(object: Partial<_75.Params>): _75.Params;
            };
            DelegationResponse: {
                encode(message: _75.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DelegationResponse;
                fromPartial(object: Partial<_75.DelegationResponse>): _75.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _75.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.RedelegationEntryResponse;
                fromPartial(object: Partial<_75.RedelegationEntryResponse>): _75.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _75.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.RedelegationResponse;
                fromPartial(object: Partial<_75.RedelegationResponse>): _75.RedelegationResponse;
            };
            Pool: {
                encode(message: _75.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Pool;
                fromPartial(object: Partial<_75.Pool>): _75.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _74.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorsRequest;
                fromPartial(object: Partial<_74.QueryValidatorsRequest>): _74.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _74.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorsResponse;
                fromPartial(object: Partial<_74.QueryValidatorsResponse>): _74.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _74.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorRequest;
                fromPartial(object: Partial<_74.QueryValidatorRequest>): _74.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _74.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorResponse;
                fromPartial(object: Partial<_74.QueryValidatorResponse>): _74.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _74.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_74.QueryValidatorDelegationsRequest>): _74.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _74.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_74.QueryValidatorDelegationsResponse>): _74.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _74.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_74.QueryValidatorUnbondingDelegationsRequest>): _74.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _74.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_74.QueryValidatorUnbondingDelegationsResponse>): _74.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _74.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegationRequest;
                fromPartial(object: Partial<_74.QueryDelegationRequest>): _74.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _74.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegationResponse;
                fromPartial(object: Partial<_74.QueryDelegationResponse>): _74.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _74.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_74.QueryUnbondingDelegationRequest>): _74.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _74.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_74.QueryUnbondingDelegationResponse>): _74.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _74.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorDelegationsRequest>): _74.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _74.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorDelegationsResponse>): _74.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _74.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorUnbondingDelegationsRequest>): _74.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _74.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorUnbondingDelegationsResponse>): _74.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _74.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryRedelegationsRequest;
                fromPartial(object: Partial<_74.QueryRedelegationsRequest>): _74.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _74.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryRedelegationsResponse;
                fromPartial(object: Partial<_74.QueryRedelegationsResponse>): _74.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _74.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsRequest>): _74.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _74.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorsResponse>): _74.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _74.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorRequest>): _74.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _74.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_74.QueryDelegatorValidatorResponse>): _74.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _74.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_74.QueryHistoricalInfoRequest>): _74.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _74.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_74.QueryHistoricalInfoResponse>): _74.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _74.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _74.QueryPoolRequest;
                fromPartial(_: Partial<_74.QueryPoolRequest>): _74.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _74.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryPoolResponse;
                fromPartial(object: Partial<_74.QueryPoolResponse>): _74.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _74.QueryParamsRequest;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryParamsResponse;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _73.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.LastValidatorPower;
                fromPartial(object: Partial<_73.LastValidatorPower>): _73.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _72.AuthorizationType;
            authorizationTypeToJSON(object: _72.AuthorizationType): string;
            AuthorizationType: typeof _72.AuthorizationType;
            AuthorizationTypeSDKType: typeof _72.AuthorizationType;
            StakeAuthorization: {
                encode(message: _72.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.StakeAuthorization;
                fromPartial(object: Partial<_72.StakeAuthorization>): _72.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _72.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.StakeAuthorization_Validators;
                fromPartial(object: Partial<_72.StakeAuthorization_Validators>): _72.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _77.SignMode;
                signModeToJSON(object: _77.SignMode): string;
                SignMode: typeof _77.SignMode;
                SignModeSDKType: typeof _77.SignMode;
                SignatureDescriptors: {
                    encode(message: _77.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.SignatureDescriptors;
                    fromPartial(object: Partial<_77.SignatureDescriptors>): _77.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _77.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.SignatureDescriptor;
                    fromPartial(object: Partial<_77.SignatureDescriptor>): _77.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _77.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data>): _77.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _77.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data_Single>): _77.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _77.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_77.SignatureDescriptor_Data_Multi>): _77.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _161.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _78.SimulateRequest): Promise<_78.SimulateResponse>;
                getTx(request: _78.GetTxRequest): Promise<_78.GetTxResponse>;
                broadcastTx(request: _78.BroadcastTxRequest): Promise<_78.BroadcastTxResponse>;
                getTxsEvent(request: _78.GetTxsEventRequest): Promise<_78.GetTxsEventResponse>;
                getBlockWithTxs(request: _78.GetBlockWithTxsRequest): Promise<_78.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _79.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Tx;
                fromPartial(object: Partial<_79.Tx>): _79.Tx;
            };
            TxRaw: {
                encode(message: _79.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.TxRaw;
                fromPartial(object: Partial<_79.TxRaw>): _79.TxRaw;
            };
            SignDoc: {
                encode(message: _79.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.SignDoc;
                fromPartial(object: Partial<_79.SignDoc>): _79.SignDoc;
            };
            TxBody: {
                encode(message: _79.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.TxBody;
                fromPartial(object: Partial<_79.TxBody>): _79.TxBody;
            };
            AuthInfo: {
                encode(message: _79.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.AuthInfo;
                fromPartial(object: Partial<_79.AuthInfo>): _79.AuthInfo;
            };
            SignerInfo: {
                encode(message: _79.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.SignerInfo;
                fromPartial(object: Partial<_79.SignerInfo>): _79.SignerInfo;
            };
            ModeInfo: {
                encode(message: _79.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ModeInfo;
                fromPartial(object: Partial<_79.ModeInfo>): _79.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _79.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ModeInfo_Single;
                fromPartial(object: Partial<_79.ModeInfo_Single>): _79.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _79.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ModeInfo_Multi;
                fromPartial(object: Partial<_79.ModeInfo_Multi>): _79.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _79.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Fee;
                fromPartial(object: Partial<_79.Fee>): _79.Fee;
            };
            orderByFromJSON(object: any): _78.OrderBy;
            orderByToJSON(object: _78.OrderBy): string;
            broadcastModeFromJSON(object: any): _78.BroadcastMode;
            broadcastModeToJSON(object: _78.BroadcastMode): string;
            OrderBy: typeof _78.OrderBy;
            OrderBySDKType: typeof _78.OrderBy;
            BroadcastMode: typeof _78.BroadcastMode;
            BroadcastModeSDKType: typeof _78.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _78.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetTxsEventRequest;
                fromPartial(object: Partial<_78.GetTxsEventRequest>): _78.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _78.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetTxsEventResponse;
                fromPartial(object: Partial<_78.GetTxsEventResponse>): _78.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _78.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.BroadcastTxRequest;
                fromPartial(object: Partial<_78.BroadcastTxRequest>): _78.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _78.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.BroadcastTxResponse;
                fromPartial(object: Partial<_78.BroadcastTxResponse>): _78.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _78.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.SimulateRequest;
                fromPartial(object: Partial<_78.SimulateRequest>): _78.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _78.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.SimulateResponse;
                fromPartial(object: Partial<_78.SimulateResponse>): _78.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _78.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetTxRequest;
                fromPartial(object: Partial<_78.GetTxRequest>): _78.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _78.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetTxResponse;
                fromPartial(object: Partial<_78.GetTxResponse>): _78.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _78.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_78.GetBlockWithTxsRequest>): _78.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _78.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_78.GetBlockWithTxsResponse>): _78.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _80.QueryCurrentPlanRequest): Promise<_80.QueryCurrentPlanResponse>;
                appliedPlan(request: _80.QueryAppliedPlanRequest): Promise<_80.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _80.QueryModuleVersionsRequest): Promise<_80.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _81.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Plan;
                fromPartial(object: Partial<_81.Plan>): _81.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _81.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_81.SoftwareUpgradeProposal>): _81.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _81.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_81.CancelSoftwareUpgradeProposal>): _81.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _81.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ModuleVersion;
                fromPartial(object: Partial<_81.ModuleVersion>): _81.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _80.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_80.QueryCurrentPlanRequest>): _80.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _80.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_80.QueryCurrentPlanResponse>): _80.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _80.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_80.QueryAppliedPlanRequest>): _80.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _80.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_80.QueryAppliedPlanResponse>): _80.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _80.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_80.QueryUpgradedConsensusStateRequest>): _80.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _80.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_80.QueryUpgradedConsensusStateResponse>): _80.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _80.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_80.QueryModuleVersionsRequest>): _80.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _80.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_80.QueryModuleVersionsResponse>): _80.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _82.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateVestingAccount;
                    };
                    createPeriodicVestingAccount(value: _82.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _82.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _82.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _82.MsgClawback): {
                        typeUrl: string;
                        value: _82.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _82.MsgCreateVestingAccount) => {
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
                    }) => _82.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods, merge }: _82.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods, merge }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    }) => _82.MsgCreatePeriodicVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _82.MsgCreateClawbackVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    };
                    fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    }) => _82.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, address, destAddress }: _82.MsgClawback) => {
                        funder_address: string;
                        address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, address, dest_address }: {
                        funder_address: string;
                        address: string;
                        dest_address: string;
                    }) => _82.MsgClawback;
                };
            };
            BaseVestingAccount: {
                encode(message: _83.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.BaseVestingAccount;
                fromPartial(object: Partial<_83.BaseVestingAccount>): _83.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _83.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.ContinuousVestingAccount;
                fromPartial(object: Partial<_83.ContinuousVestingAccount>): _83.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _83.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.DelayedVestingAccount;
                fromPartial(object: Partial<_83.DelayedVestingAccount>): _83.DelayedVestingAccount;
            };
            Period: {
                encode(message: _83.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Period;
                fromPartial(object: Partial<_83.Period>): _83.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _83.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.PeriodicVestingAccount;
                fromPartial(object: Partial<_83.PeriodicVestingAccount>): _83.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _83.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.PermanentLockedAccount;
                fromPartial(object: Partial<_83.PermanentLockedAccount>): _83.PermanentLockedAccount;
            };
            ClawbackVestingAccount: {
                encode(message: _83.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.ClawbackVestingAccount;
                fromPartial(object: Partial<_83.ClawbackVestingAccount>): _83.ClawbackVestingAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _82.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgCreateVestingAccount;
                fromPartial(object: Partial<_82.MsgCreateVestingAccount>): _82.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _82.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreateVestingAccountResponse>): _82.MsgCreateVestingAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _82.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_82.MsgCreatePeriodicVestingAccount>): _82.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _82.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreatePeriodicVestingAccountResponse>): _82.MsgCreatePeriodicVestingAccountResponse;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _82.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_82.MsgCreateClawbackVestingAccount>): _82.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _82.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_82.MsgCreateClawbackVestingAccountResponse>): _82.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _82.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgClawback;
                fromPartial(object: Partial<_82.MsgClawback>): _82.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _82.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgClawbackResponse;
                fromPartial(_: Partial<_82.MsgClawbackResponse>): _82.MsgClawbackResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _163.MsgClientImpl;
                };
                bank: {
                    v1beta1: _164.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _165.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _166.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _167.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _168.MsgClientImpl;
                };
                gov: {
                    v1beta1: _169.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _170.MsgClientImpl;
                };
                staking: {
                    v1beta1: _171.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _172.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                        account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        moduleAccountByName(request: _16.QueryModuleAccountByNameRequest): Promise<_16.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                        granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                        granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                        allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                        spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                        supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _29.ConfigRequest): Promise<_29.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _36.GetNodeInfoRequest): Promise<_36.GetNodeInfoResponse>;
                            getSyncing(request?: _36.GetSyncingRequest): Promise<_36.GetSyncingResponse>;
                            getLatestBlock(request?: _36.GetLatestBlockRequest): Promise<_36.GetLatestBlockResponse>;
                            getBlockByHeight(request: _36.GetBlockByHeightRequest): Promise<_36.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _36.GetLatestValidatorSetRequest): Promise<_36.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _36.GetValidatorSetByHeightRequest): Promise<_36.GetValidatorSetByHeightResponse>;
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
                feegrant: {
                    v1beta1: {
                        allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                        allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                        allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        inflation(request?: _65.QueryInflationRequest): Promise<_65.QueryInflationResponse>;
                        annualProvisions(request?: _65.QueryAnnualProvisionsRequest): Promise<_65.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        signingInfo(request: _69.QuerySigningInfoRequest): Promise<_69.QuerySigningInfoResponse>;
                        signingInfos(request?: _69.QuerySigningInfosRequest): Promise<_69.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _74.QueryValidatorsRequest): Promise<_74.QueryValidatorsResponse>;
                        validator(request: _74.QueryValidatorRequest): Promise<_74.QueryValidatorResponse>;
                        validatorDelegations(request: _74.QueryValidatorDelegationsRequest): Promise<_74.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _74.QueryValidatorUnbondingDelegationsRequest): Promise<_74.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _74.QueryDelegationRequest): Promise<_74.QueryDelegationResponse>;
                        unbondingDelegation(request: _74.QueryUnbondingDelegationRequest): Promise<_74.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _74.QueryDelegatorDelegationsRequest): Promise<_74.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _74.QueryDelegatorUnbondingDelegationsRequest): Promise<_74.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _74.QueryRedelegationsRequest): Promise<_74.QueryRedelegationsResponse>;
                        delegatorValidators(request: _74.QueryDelegatorValidatorsRequest): Promise<_74.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _74.QueryDelegatorValidatorRequest): Promise<_74.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _74.QueryHistoricalInfoRequest): Promise<_74.QueryHistoricalInfoResponse>;
                        pool(request?: _74.QueryPoolRequest): Promise<_74.QueryPoolResponse>;
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _78.SimulateRequest): Promise<_78.SimulateResponse>;
                        getTx(request: _78.GetTxRequest): Promise<_78.GetTxResponse>;
                        broadcastTx(request: _78.BroadcastTxRequest): Promise<_78.BroadcastTxResponse>;
                        getTxsEvent(request: _78.GetTxsEventRequest): Promise<_78.GetTxsEventResponse>;
                        getBlockWithTxs(request: _78.GetBlockWithTxsRequest): Promise<_78.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _80.QueryCurrentPlanRequest): Promise<_80.QueryCurrentPlanResponse>;
                        appliedPlan(request: _80.QueryAppliedPlanRequest): Promise<_80.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _80.QueryModuleVersionsRequest): Promise<_80.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
