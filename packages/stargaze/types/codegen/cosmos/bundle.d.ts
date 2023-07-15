import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v1beta1/reflection";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/snapshots/v1beta1/snapshot";
import * as _44 from "./base/store/v1beta1/commit_info";
import * as _45 from "./base/store/v1beta1/listening";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/v1beta1/coin";
import * as _48 from "./capability/v1beta1/capability";
import * as _49 from "./capability/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/tx";
import * as _52 from "./crypto/ed25519/keys";
import * as _53 from "./crypto/multisig/keys";
import * as _54 from "./crypto/secp256k1/keys";
import * as _55 from "./crypto/secp256r1/keys";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/v1beta1/evidence";
import * as _61 from "./evidence/v1beta1/genesis";
import * as _62 from "./evidence/v1beta1/query";
import * as _63 from "./evidence/v1beta1/tx";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/v1beta1/genesis";
import * as _70 from "./gov/v1beta1/gov";
import * as _71 from "./gov/v1beta1/query";
import * as _72 from "./gov/v1beta1/tx";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _163 from "./auth/v1beta1/query.rpc.Query";
import * as _164 from "./authz/v1beta1/query.rpc.Query";
import * as _165 from "./bank/v1beta1/query.rpc.Query";
import * as _166 from "./base/node/v1beta1/query.rpc.Service";
import * as _167 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _168 from "./distribution/v1beta1/query.rpc.Query";
import * as _169 from "./evidence/v1beta1/query.rpc.Query";
import * as _170 from "./feegrant/v1beta1/query.rpc.Query";
import * as _171 from "./gov/v1beta1/query.rpc.Query";
import * as _172 from "./mint/v1beta1/query.rpc.Query";
import * as _173 from "./params/v1beta1/query.rpc.Query";
import * as _174 from "./slashing/v1beta1/query.rpc.Query";
import * as _175 from "./staking/v1beta1/query.rpc.Query";
import * as _176 from "./tx/v1beta1/service.rpc.Service";
import * as _177 from "./upgrade/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/tx.rpc.msg";
import * as _179 from "./bank/v1beta1/tx.rpc.msg";
import * as _180 from "./crisis/v1beta1/tx.rpc.msg";
import * as _181 from "./distribution/v1beta1/tx.rpc.msg";
import * as _182 from "./evidence/v1beta1/tx.rpc.msg";
import * as _183 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _184 from "./gov/v1beta1/tx.rpc.msg";
import * as _185 from "./slashing/v1beta1/tx.rpc.msg";
import * as _186 from "./staking/v1beta1/tx.rpc.msg";
import * as _187 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _26.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAccountsRequest;
                fromPartial(object: Partial<_26.QueryAccountsRequest>): _26.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _26.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAccountsResponse;
                fromPartial(object: Partial<_26.QueryAccountsResponse>): _26.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _26.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAccountRequest;
                fromPartial(object: Partial<_26.QueryAccountRequest>): _26.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _26.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryAccountResponse;
                fromPartial(object: Partial<_26.QueryAccountResponse>): _26.QueryAccountResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _26.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameRequest>): _26.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _26.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameResponse>): _26.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
            };
            BaseAccount: {
                encode(message: _24.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.BaseAccount;
                fromPartial(object: Partial<_24.BaseAccount>): _24.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _24.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.ModuleAccount;
                fromPartial(object: Partial<_24.ModuleAccount>): _24.ModuleAccount;
            };
            Params: {
                encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _31.MsgGrant) => {
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
                    }) => _31.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _31.MsgExec) => {
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
                    }) => _31.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _31.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _31.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _31.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgGrant;
                fromPartial(object: Partial<_31.MsgGrant>): _31.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _31.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgExecResponse;
                fromPartial(object: Partial<_31.MsgExecResponse>): _31.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _31.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgExec;
                fromPartial(object: Partial<_31.MsgExec>): _31.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _31.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgGrantResponse;
                fromPartial(_: Partial<_31.MsgGrantResponse>): _31.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _31.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgRevoke;
                fromPartial(object: Partial<_31.MsgRevoke>): _31.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _31.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgRevokeResponse;
                fromPartial(_: Partial<_31.MsgRevokeResponse>): _31.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _30.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGrantsRequest;
                fromPartial(object: Partial<_30.QueryGrantsRequest>): _30.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _30.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGrantsResponse;
                fromPartial(object: Partial<_30.QueryGrantsResponse>): _30.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _30.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranterGrantsRequest>): _30.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _30.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranterGrantsResponse>): _30.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _30.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranteeGrantsRequest>): _30.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _30.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranteeGrantsResponse>): _30.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            EventGrant: {
                encode(message: _28.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventGrant;
                fromPartial(object: Partial<_28.EventGrant>): _28.EventGrant;
            };
            EventRevoke: {
                encode(message: _28.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventRevoke;
                fromPartial(object: Partial<_28.EventRevoke>): _28.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _27.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GenericAuthorization;
                fromPartial(object: Partial<_27.GenericAuthorization>): _27.GenericAuthorization;
            };
            Grant: {
                encode(message: _27.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Grant;
                fromPartial(object: Partial<_27.Grant>): _27.Grant;
            };
            GrantAuthorization: {
                encode(message: _27.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GrantAuthorization;
                fromPartial(object: Partial<_27.GrantAuthorization>): _27.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _36.MsgSend) => {
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
                    }) => _36.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _36.MsgMultiSend) => {
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
                    }) => _36.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _36.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.MsgSend;
                fromPartial(object: Partial<_36.MsgSend>): _36.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _36.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.MsgSendResponse;
                fromPartial(_: Partial<_36.MsgSendResponse>): _36.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _36.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.MsgMultiSend;
                fromPartial(object: Partial<_36.MsgMultiSend>): _36.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _36.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.MsgMultiSendResponse;
                fromPartial(_: Partial<_36.MsgMultiSendResponse>): _36.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _35.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryBalanceRequest;
                fromPartial(object: Partial<_35.QueryBalanceRequest>): _35.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _35.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryBalanceResponse;
                fromPartial(object: Partial<_35.QueryBalanceResponse>): _35.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _35.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryAllBalancesRequest;
                fromPartial(object: Partial<_35.QueryAllBalancesRequest>): _35.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _35.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryAllBalancesResponse;
                fromPartial(object: Partial<_35.QueryAllBalancesResponse>): _35.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _35.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_35.QuerySpendableBalancesRequest>): _35.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _35.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_35.QuerySpendableBalancesResponse>): _35.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _35.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_35.QueryTotalSupplyRequest>): _35.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _35.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_35.QueryTotalSupplyResponse>): _35.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _35.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QuerySupplyOfRequest;
                fromPartial(object: Partial<_35.QuerySupplyOfRequest>): _35.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _35.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QuerySupplyOfResponse;
                fromPartial(object: Partial<_35.QuerySupplyOfResponse>): _35.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _35.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomsMetadataRequest>): _35.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _35.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomsMetadataResponse>): _35.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _35.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomMetadataRequest>): _35.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _35.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomMetadataResponse>): _35.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Balance: {
                encode(message: _34.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Balance;
                fromPartial(object: Partial<_34.Balance>): _34.Balance;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
            };
            SendEnabled: {
                encode(message: _33.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.SendEnabled;
                fromPartial(object: Partial<_33.SendEnabled>): _33.SendEnabled;
            };
            Input: {
                encode(message: _33.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Input;
                fromPartial(object: Partial<_33.Input>): _33.Input;
            };
            Output: {
                encode(message: _33.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Output;
                fromPartial(object: Partial<_33.Output>): _33.Output;
            };
            Supply: {
                encode(message: _33.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Supply;
                fromPartial(object: Partial<_33.Supply>): _33.Supply;
            };
            DenomUnit: {
                encode(message: _33.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.DenomUnit;
                fromPartial(object: Partial<_33.DenomUnit>): _33.DenomUnit;
            };
            Metadata: {
                encode(message: _33.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Metadata;
                fromPartial(object: Partial<_33.Metadata>): _33.Metadata;
            };
            SendAuthorization: {
                encode(message: _32.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.SendAuthorization;
                fromPartial(object: Partial<_32.SendAuthorization>): _32.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _37.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.TxResponse;
                    fromPartial(object: Partial<_37.TxResponse>): _37.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _37.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ABCIMessageLog;
                    fromPartial(object: Partial<_37.ABCIMessageLog>): _37.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _37.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.StringEvent;
                    fromPartial(object: Partial<_37.StringEvent>): _37.StringEvent;
                };
                Attribute: {
                    encode(message: _37.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.Attribute;
                    fromPartial(object: Partial<_37.Attribute>): _37.Attribute;
                };
                GasInfo: {
                    encode(message: _37.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.GasInfo;
                    fromPartial(object: Partial<_37.GasInfo>): _37.GasInfo;
                };
                Result: {
                    encode(message: _37.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.Result;
                    fromPartial(object: Partial<_37.Result>): _37.Result;
                };
                SimulationResponse: {
                    encode(message: _37.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.SimulationResponse;
                    fromPartial(object: Partial<_37.SimulationResponse>): _37.SimulationResponse;
                };
                MsgData: {
                    encode(message: _37.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.MsgData;
                    fromPartial(object: Partial<_37.MsgData>): _37.MsgData;
                };
                TxMsgData: {
                    encode(message: _37.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.TxMsgData;
                    fromPartial(object: Partial<_37.TxMsgData>): _37.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _37.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.SearchTxsResult;
                    fromPartial(object: Partial<_37.SearchTxsResult>): _37.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _38.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.Pairs;
                    fromPartial(object: Partial<_38.Pairs>): _38.Pairs;
                };
                Pair: {
                    encode(message: _38.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.Pair;
                    fromPartial(object: Partial<_38.Pair>): _38.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _166.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _39.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.ConfigRequest;
                    fromPartial(_: Partial<_39.ConfigRequest>): _39.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _39.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.ConfigResponse;
                    fromPartial(object: Partial<_39.ConfigResponse>): _39.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _40.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.PageRequest;
                    fromPartial(object: Partial<_40.PageRequest>): _40.PageRequest;
                };
                PageResponse: {
                    encode(message: _40.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.PageResponse;
                    fromPartial(object: Partial<_40.PageResponse>): _40.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _41.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _41.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_41.ListAllInterfacesRequest>): _41.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _41.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_41.ListAllInterfacesResponse>): _41.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _41.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.ListImplementationsRequest;
                    fromPartial(object: Partial<_41.ListImplementationsRequest>): _41.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _41.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.ListImplementationsResponse;
                    fromPartial(object: Partial<_41.ListImplementationsResponse>): _41.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _42.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.AppDescriptor;
                    fromPartial(object: Partial<_42.AppDescriptor>): _42.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _42.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.TxDescriptor;
                    fromPartial(object: Partial<_42.TxDescriptor>): _42.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _42.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.AuthnDescriptor;
                    fromPartial(object: Partial<_42.AuthnDescriptor>): _42.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _42.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.SigningModeDescriptor;
                    fromPartial(object: Partial<_42.SigningModeDescriptor>): _42.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _42.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.ChainDescriptor;
                    fromPartial(object: Partial<_42.ChainDescriptor>): _42.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _42.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.CodecDescriptor;
                    fromPartial(object: Partial<_42.CodecDescriptor>): _42.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _42.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.InterfaceDescriptor;
                    fromPartial(object: Partial<_42.InterfaceDescriptor>): _42.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _42.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_42.InterfaceImplementerDescriptor>): _42.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _42.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_42.InterfaceAcceptingMessageDescriptor>): _42.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _42.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.ConfigurationDescriptor;
                    fromPartial(object: Partial<_42.ConfigurationDescriptor>): _42.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _42.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.MsgDescriptor;
                    fromPartial(object: Partial<_42.MsgDescriptor>): _42.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _42.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_42.GetAuthnDescriptorRequest>): _42.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _42.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_42.GetAuthnDescriptorResponse>): _42.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _42.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_42.GetChainDescriptorRequest>): _42.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _42.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_42.GetChainDescriptorResponse>): _42.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _42.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_42.GetCodecDescriptorRequest>): _42.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _42.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_42.GetCodecDescriptorResponse>): _42.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _42.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_42.GetConfigurationDescriptorRequest>): _42.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _42.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_42.GetConfigurationDescriptorResponse>): _42.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _42.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_42.GetQueryServicesDescriptorRequest>): _42.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _42.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_42.GetQueryServicesDescriptorResponse>): _42.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _42.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_42.GetTxDescriptorRequest>): _42.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _42.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_42.GetTxDescriptorResponse>): _42.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _42.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.QueryServicesDescriptor;
                    fromPartial(object: Partial<_42.QueryServicesDescriptor>): _42.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _42.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.QueryServiceDescriptor;
                    fromPartial(object: Partial<_42.QueryServiceDescriptor>): _42.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _42.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.QueryMethodDescriptor;
                    fromPartial(object: Partial<_42.QueryMethodDescriptor>): _42.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _43.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Snapshot;
                    fromPartial(object: Partial<_43.Snapshot>): _43.Snapshot;
                };
                Metadata: {
                    encode(message: _43.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Metadata;
                    fromPartial(object: Partial<_43.Metadata>): _43.Metadata;
                };
                SnapshotItem: {
                    encode(message: _43.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SnapshotItem;
                    fromPartial(object: Partial<_43.SnapshotItem>): _43.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _43.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SnapshotStoreItem;
                    fromPartial(object: Partial<_43.SnapshotStoreItem>): _43.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _43.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SnapshotIAVLItem;
                    fromPartial(object: Partial<_43.SnapshotIAVLItem>): _43.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _43.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_43.SnapshotExtensionMeta>): _43.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _43.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_43.SnapshotExtensionPayload>): _43.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _45.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.StoreKVPair;
                    fromPartial(object: Partial<_45.StoreKVPair>): _45.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _45.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.BlockMetadata;
                    fromPartial(object: Partial<_45.BlockMetadata>): _45.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _45.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_45.BlockMetadata_DeliverTx>): _45.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _44.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.CommitInfo;
                    fromPartial(object: Partial<_44.CommitInfo>): _44.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _44.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.StoreInfo;
                    fromPartial(object: Partial<_44.StoreInfo>): _44.StoreInfo;
                };
                CommitID: {
                    encode(message: _44.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.CommitID;
                    fromPartial(object: Partial<_44.CommitID>): _44.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _167.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                    getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                    getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                    getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _46.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightRequest>): _46.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _46.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightResponse>): _46.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _46.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetRequest>): _46.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _46.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetResponse>): _46.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _46.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.Validator;
                    fromPartial(object: Partial<_46.Validator>): _46.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _46.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_46.GetBlockByHeightRequest>): _46.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _46.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_46.GetBlockByHeightResponse>): _46.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _46.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _46.GetLatestBlockRequest;
                    fromPartial(_: Partial<_46.GetLatestBlockRequest>): _46.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _46.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetLatestBlockResponse;
                    fromPartial(object: Partial<_46.GetLatestBlockResponse>): _46.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _46.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _46.GetSyncingRequest;
                    fromPartial(_: Partial<_46.GetSyncingRequest>): _46.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _46.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetSyncingResponse;
                    fromPartial(object: Partial<_46.GetSyncingResponse>): _46.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _46.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _46.GetNodeInfoRequest;
                    fromPartial(_: Partial<_46.GetNodeInfoRequest>): _46.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _46.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.GetNodeInfoResponse;
                    fromPartial(object: Partial<_46.GetNodeInfoResponse>): _46.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _46.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.VersionInfo;
                    fromPartial(object: Partial<_46.VersionInfo>): _46.VersionInfo;
                };
                Module: {
                    encode(message: _46.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.Module;
                    fromPartial(object: Partial<_46.Module>): _46.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _47.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Coin;
                fromPartial(object: Partial<_47.Coin>): _47.Coin;
            };
            DecCoin: {
                encode(message: _47.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DecCoin;
                fromPartial(object: Partial<_47.DecCoin>): _47.DecCoin;
            };
            IntProto: {
                encode(message: _47.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.IntProto;
                fromPartial(object: Partial<_47.IntProto>): _47.IntProto;
            };
            DecProto: {
                encode(message: _47.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.DecProto;
                fromPartial(object: Partial<_47.DecProto>): _47.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _49.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.GenesisOwners;
                fromPartial(object: Partial<_49.GenesisOwners>): _49.GenesisOwners;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.GenesisState;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
            };
            Capability: {
                encode(message: _48.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Capability;
                fromPartial(object: Partial<_48.Capability>): _48.Capability;
            };
            Owner: {
                encode(message: _48.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Owner;
                fromPartial(object: Partial<_48.Owner>): _48.Owner;
            };
            CapabilityOwners: {
                encode(message: _48.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.CapabilityOwners;
                fromPartial(object: Partial<_48.CapabilityOwners>): _48.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _51.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _51.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _51.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.MsgVerifyInvariant;
                fromPartial(object: Partial<_51.MsgVerifyInvariant>): _51.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _51.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _51.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_51.MsgVerifyInvariantResponse>): _51.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _52.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.PubKey;
                fromPartial(object: Partial<_52.PubKey>): _52.PubKey;
            };
            PrivKey: {
                encode(message: _52.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.PrivKey;
                fromPartial(object: Partial<_52.PrivKey>): _52.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _53.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.LegacyAminoPubKey;
                fromPartial(object: Partial<_53.LegacyAminoPubKey>): _53.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _54.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.PubKey;
                fromPartial(object: Partial<_54.PubKey>): _54.PubKey;
            };
            PrivKey: {
                encode(message: _54.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.PrivKey;
                fromPartial(object: Partial<_54.PrivKey>): _54.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _55.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.PubKey;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
            };
            PrivKey: {
                encode(message: _55.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.PrivKey;
                fromPartial(object: Partial<_55.PrivKey>): _55.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _59.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _59.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _59.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _59.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _59.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _59.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _59.MsgFundCommunityPool) => {
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
                    }) => _59.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _59.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_59.MsgSetWithdrawAddress>): _59.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _59.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_59.MsgSetWithdrawAddressResponse>): _59.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _59.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorReward>): _59.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _59.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_59.MsgWithdrawDelegatorRewardResponse>): _59.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _59.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommission>): _59.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _59.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_59.MsgWithdrawValidatorCommissionResponse>): _59.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _59.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgFundCommunityPool;
                fromPartial(object: Partial<_59.MsgFundCommunityPool>): _59.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _59.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_59.MsgFundCommunityPoolResponse>): _59.MsgFundCommunityPoolResponse;
            };
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _58.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsRequest>): _58.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _58.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsResponse>): _58.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _58.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_58.QueryValidatorCommissionRequest>): _58.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _58.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_58.QueryValidatorCommissionResponse>): _58.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _58.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_58.QueryValidatorSlashesRequest>): _58.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _58.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_58.QueryValidatorSlashesResponse>): _58.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _58.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationRewardsRequest>): _58.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _58.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationRewardsResponse>): _58.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _58.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsRequest>): _58.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _58.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsResponse>): _58.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _58.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsRequest>): _58.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _58.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsResponse>): _58.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _58.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressRequest>): _58.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _58.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressResponse>): _58.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _58.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_58.QueryCommunityPoolRequest>): _58.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _58.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_58.QueryCommunityPoolResponse>): _58.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _57.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_57.DelegatorWithdrawInfo>): _57.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _57.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorOutstandingRewardsRecord>): _57.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _57.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_57.ValidatorAccumulatedCommissionRecord>): _57.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _57.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorHistoricalRewardsRecord>): _57.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _57.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorCurrentRewardsRecord>): _57.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _57.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_57.DelegatorStartingInfoRecord>): _57.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _57.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_57.ValidatorSlashEventRecord>): _57.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
            Params: {
                encode(message: _56.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _56.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_56.ValidatorHistoricalRewards>): _56.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _56.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorCurrentRewards;
                fromPartial(object: Partial<_56.ValidatorCurrentRewards>): _56.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _56.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_56.ValidatorAccumulatedCommission>): _56.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _56.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_56.ValidatorOutstandingRewards>): _56.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _56.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorSlashEvent;
                fromPartial(object: Partial<_56.ValidatorSlashEvent>): _56.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _56.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.ValidatorSlashEvents;
                fromPartial(object: Partial<_56.ValidatorSlashEvents>): _56.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _56.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.FeePool;
                fromPartial(object: Partial<_56.FeePool>): _56.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _56.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposal>): _56.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _56.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.DelegatorStartingInfo;
                fromPartial(object: Partial<_56.DelegatorStartingInfo>): _56.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _56.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.DelegationDelegatorReward;
                fromPartial(object: Partial<_56.DelegationDelegatorReward>): _56.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _56.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposalWithDeposit>): _56.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _63.MsgSubmitEvidence) => {
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
                    }) => _63.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _63.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitEvidence;
                fromPartial(object: Partial<_63.MsgSubmitEvidence>): _63.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _63.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_63.MsgSubmitEvidenceResponse>): _63.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _62.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryEvidenceRequest;
                fromPartial(object: Partial<_62.QueryEvidenceRequest>): _62.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _62.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryEvidenceResponse;
                fromPartial(object: Partial<_62.QueryEvidenceResponse>): _62.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _62.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_62.QueryAllEvidenceRequest>): _62.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _62.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_62.QueryAllEvidenceResponse>): _62.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            Equivocation: {
                encode(message: _60.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Equivocation;
                fromPartial(object: Partial<_60.Equivocation>): _60.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _67.MsgGrantAllowance) => {
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
                    }) => _67.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _67.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _67.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _67.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgGrantAllowance;
                fromPartial(object: Partial<_67.MsgGrantAllowance>): _67.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _67.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_67.MsgGrantAllowanceResponse>): _67.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _67.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgRevokeAllowance;
                fromPartial(object: Partial<_67.MsgRevokeAllowance>): _67.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _67.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_67.MsgRevokeAllowanceResponse>): _67.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _66.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowanceRequest;
                fromPartial(object: Partial<_66.QueryAllowanceRequest>): _66.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _66.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowanceResponse;
                fromPartial(object: Partial<_66.QueryAllowanceResponse>): _66.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _66.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowancesRequest;
                fromPartial(object: Partial<_66.QueryAllowancesRequest>): _66.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _66.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowancesResponse;
                fromPartial(object: Partial<_66.QueryAllowancesResponse>): _66.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _66.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterRequest>): _66.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _66.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterResponse>): _66.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
            BasicAllowance: {
                encode(message: _64.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.BasicAllowance;
                fromPartial(object: Partial<_64.BasicAllowance>): _64.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _64.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.PeriodicAllowance;
                fromPartial(object: Partial<_64.PeriodicAllowance>): _64.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _64.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.AllowedMsgAllowance;
                fromPartial(object: Partial<_64.AllowedMsgAllowance>): _64.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _64.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Grant;
                fromPartial(object: Partial<_64.Grant>): _64.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _72.MsgSubmitProposal) => {
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
                    }) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _72.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _72.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _72.MsgVoteWeighted) => {
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
                    }) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _72.MsgDeposit) => {
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
                    }) => _72.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _72.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgSubmitProposal;
                fromPartial(object: Partial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _72.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgVote;
                fromPartial(object: Partial<_72.MsgVote>): _72.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _72.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgVoteResponse;
                fromPartial(_: Partial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _72.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgVoteWeighted;
                fromPartial(object: Partial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _72.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgDeposit;
                fromPartial(object: Partial<_72.MsgDeposit>): _72.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _72.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgDepositResponse;
                fromPartial(_: Partial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _71.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryProposalRequest;
                fromPartial(object: Partial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _71.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryProposalResponse;
                fromPartial(object: Partial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _71.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryProposalsRequest;
                fromPartial(object: Partial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _71.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryProposalsResponse;
                fromPartial(object: Partial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _71.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryVoteRequest;
                fromPartial(object: Partial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _71.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryVoteResponse;
                fromPartial(object: Partial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _71.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryVotesRequest;
                fromPartial(object: Partial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _71.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryVotesResponse;
                fromPartial(object: Partial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryParamsRequest;
                fromPartial(object: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _71.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDepositRequest;
                fromPartial(object: Partial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _71.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDepositResponse;
                fromPartial(object: Partial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _71.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDepositsRequest;
                fromPartial(object: Partial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _71.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDepositsResponse;
                fromPartial(object: Partial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _71.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryTallyResultRequest;
                fromPartial(object: Partial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _71.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryTallyResultResponse;
                fromPartial(object: Partial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _70.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.WeightedVoteOption;
                fromPartial(object: Partial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _70.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.TextProposal;
                fromPartial(object: Partial<_70.TextProposal>): _70.TextProposal;
            };
            Deposit: {
                encode(message: _70.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Deposit;
                fromPartial(object: Partial<_70.Deposit>): _70.Deposit;
            };
            Proposal: {
                encode(message: _70.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Proposal;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
            };
            TallyResult: {
                encode(message: _70.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.TallyResult;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
            };
            Vote: {
                encode(message: _70.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Vote;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
            };
            DepositParams: {
                encode(message: _70.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.DepositParams;
                fromPartial(object: Partial<_70.DepositParams>): _70.DepositParams;
            };
            VotingParams: {
                encode(message: _70.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.VotingParams;
                fromPartial(object: Partial<_70.VotingParams>): _70.VotingParams;
            };
            TallyParams: {
                encode(message: _70.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.TallyParams;
                fromPartial(object: Partial<_70.TallyParams>): _70.TallyParams;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
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
            QueryInflationRequest: {
                encode(_: _75.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.QueryInflationRequest;
                fromPartial(_: Partial<_75.QueryInflationRequest>): _75.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _75.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryInflationResponse;
                fromPartial(object: Partial<_75.QueryInflationResponse>): _75.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _75.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_75.QueryAnnualProvisionsRequest>): _75.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _75.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_75.QueryAnnualProvisionsResponse>): _75.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _74.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Minter;
                fromPartial(object: Partial<_74.Minter>): _74.Minter;
            };
            Params: {
                encode(message: _74.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Params;
                fromPartial(object: Partial<_74.Params>): _74.Params;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
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
            ParameterChangeProposal: {
                encode(message: _76.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ParameterChangeProposal;
                fromPartial(object: Partial<_76.ParameterChangeProposal>): _76.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _76.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ParamChange;
                fromPartial(object: Partial<_76.ParamChange>): _76.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _81.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _81.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _81.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgUnjail;
                fromPartial(object: Partial<_81.MsgUnjail>): _81.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _81.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgUnjailResponse;
                fromPartial(_: Partial<_81.MsgUnjailResponse>): _81.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _80.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorSigningInfo;
                fromPartial(object: Partial<_80.ValidatorSigningInfo>): _80.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Params;
                fromPartial(object: Partial<_80.Params>): _80.Params;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _79.QueryParamsRequest;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _79.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySigningInfoRequest;
                fromPartial(object: Partial<_79.QuerySigningInfoRequest>): _79.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _79.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySigningInfoResponse;
                fromPartial(object: Partial<_79.QuerySigningInfoResponse>): _79.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _79.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySigningInfosRequest;
                fromPartial(object: Partial<_79.QuerySigningInfosRequest>): _79.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _79.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySigningInfosResponse;
                fromPartial(object: Partial<_79.QuerySigningInfosResponse>): _79.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            SigningInfo: {
                encode(message: _78.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.SigningInfo;
                fromPartial(object: Partial<_78.SigningInfo>): _78.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _78.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorMissedBlocks;
                fromPartial(object: Partial<_78.ValidatorMissedBlocks>): _78.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _78.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MissedBlock;
                fromPartial(object: Partial<_78.MissedBlock>): _78.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _86.MsgCreateValidator) => {
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
                    }) => _86.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _86.MsgEditValidator) => {
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
                    }) => _86.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgDelegate) => {
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
                    }) => _86.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _86.MsgBeginRedelegate) => {
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
                    }) => _86.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgUndelegate) => {
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
                    }) => _86.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _86.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateValidator;
                fromPartial(object: Partial<_86.MsgCreateValidator>): _86.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_86.MsgCreateValidatorResponse>): _86.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _86.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgEditValidator;
                fromPartial(object: Partial<_86.MsgEditValidator>): _86.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _86.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgEditValidatorResponse;
                fromPartial(_: Partial<_86.MsgEditValidatorResponse>): _86.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _86.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgDelegate;
                fromPartial(object: Partial<_86.MsgDelegate>): _86.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _86.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgDelegateResponse;
                fromPartial(_: Partial<_86.MsgDelegateResponse>): _86.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _86.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgBeginRedelegate;
                fromPartial(object: Partial<_86.MsgBeginRedelegate>): _86.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_86.MsgBeginRedelegateResponse>): _86.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _86.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUndelegate;
                fromPartial(object: Partial<_86.MsgUndelegate>): _86.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _86.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUndelegateResponse;
                fromPartial(object: Partial<_86.MsgUndelegateResponse>): _86.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            HistoricalInfo: {
                encode(message: _85.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.HistoricalInfo;
                fromPartial(object: Partial<_85.HistoricalInfo>): _85.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _85.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.CommissionRates;
                fromPartial(object: Partial<_85.CommissionRates>): _85.CommissionRates;
            };
            Commission: {
                encode(message: _85.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Commission;
                fromPartial(object: Partial<_85.Commission>): _85.Commission;
            };
            Description: {
                encode(message: _85.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Description;
                fromPartial(object: Partial<_85.Description>): _85.Description;
            };
            Validator: {
                encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Validator;
                fromPartial(object: Partial<_85.Validator>): _85.Validator;
            };
            ValAddresses: {
                encode(message: _85.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValAddresses;
                fromPartial(object: Partial<_85.ValAddresses>): _85.ValAddresses;
            };
            DVPair: {
                encode(message: _85.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DVPair;
                fromPartial(object: Partial<_85.DVPair>): _85.DVPair;
            };
            DVPairs: {
                encode(message: _85.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DVPairs;
                fromPartial(object: Partial<_85.DVPairs>): _85.DVPairs;
            };
            DVVTriplet: {
                encode(message: _85.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DVVTriplet;
                fromPartial(object: Partial<_85.DVVTriplet>): _85.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _85.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DVVTriplets;
                fromPartial(object: Partial<_85.DVVTriplets>): _85.DVVTriplets;
            };
            Delegation: {
                encode(message: _85.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Delegation;
                fromPartial(object: Partial<_85.Delegation>): _85.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _85.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.UnbondingDelegation;
                fromPartial(object: Partial<_85.UnbondingDelegation>): _85.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _85.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.UnbondingDelegationEntry;
                fromPartial(object: Partial<_85.UnbondingDelegationEntry>): _85.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _85.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.RedelegationEntry;
                fromPartial(object: Partial<_85.RedelegationEntry>): _85.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _85.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Redelegation;
                fromPartial(object: Partial<_85.Redelegation>): _85.Redelegation;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Params;
                fromPartial(object: Partial<_85.Params>): _85.Params;
            };
            DelegationResponse: {
                encode(message: _85.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DelegationResponse;
                fromPartial(object: Partial<_85.DelegationResponse>): _85.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _85.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.RedelegationEntryResponse;
                fromPartial(object: Partial<_85.RedelegationEntryResponse>): _85.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _85.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.RedelegationResponse;
                fromPartial(object: Partial<_85.RedelegationResponse>): _85.RedelegationResponse;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Pool;
                fromPartial(object: Partial<_85.Pool>): _85.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _84.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorsRequest;
                fromPartial(object: Partial<_84.QueryValidatorsRequest>): _84.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _84.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorsResponse;
                fromPartial(object: Partial<_84.QueryValidatorsResponse>): _84.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _84.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorRequest;
                fromPartial(object: Partial<_84.QueryValidatorRequest>): _84.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _84.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorResponse;
                fromPartial(object: Partial<_84.QueryValidatorResponse>): _84.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsRequest>): _84.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsResponse>): _84.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsRequest>): _84.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsResponse>): _84.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _84.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegationRequest;
                fromPartial(object: Partial<_84.QueryDelegationRequest>): _84.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _84.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegationResponse;
                fromPartial(object: Partial<_84.QueryDelegationResponse>): _84.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationRequest>): _84.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationResponse>): _84.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsRequest>): _84.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsResponse>): _84.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsRequest>): _84.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsResponse>): _84.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _84.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryRedelegationsRequest;
                fromPartial(object: Partial<_84.QueryRedelegationsRequest>): _84.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _84.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryRedelegationsResponse;
                fromPartial(object: Partial<_84.QueryRedelegationsResponse>): _84.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsRequest>): _84.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsResponse>): _84.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorRequest>): _84.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorResponse>): _84.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_84.QueryHistoricalInfoRequest>): _84.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_84.QueryHistoricalInfoResponse>): _84.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _84.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _84.QueryPoolRequest;
                fromPartial(_: Partial<_84.QueryPoolRequest>): _84.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _84.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryPoolResponse;
                fromPartial(object: Partial<_84.QueryPoolResponse>): _84.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _84.QueryParamsRequest;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryParamsResponse;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _83.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.LastValidatorPower;
                fromPartial(object: Partial<_83.LastValidatorPower>): _83.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            StakeAuthorization: {
                encode(message: _82.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.StakeAuthorization;
                fromPartial(object: Partial<_82.StakeAuthorization>): _82.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _82.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.StakeAuthorization_Validators;
                fromPartial(object: Partial<_82.StakeAuthorization_Validators>): _82.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SignatureDescriptors;
                    fromPartial(object: Partial<_87.SignatureDescriptors>): _87.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SignatureDescriptor;
                    fromPartial(object: Partial<_87.SignatureDescriptor>): _87.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data>): _87.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Single>): _87.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Multi>): _87.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _176.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _89.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Tx;
                fromPartial(object: Partial<_89.Tx>): _89.Tx;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.TxRaw;
                fromPartial(object: Partial<_89.TxRaw>): _89.TxRaw;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.SignDoc;
                fromPartial(object: Partial<_89.SignDoc>): _89.SignDoc;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.TxBody;
                fromPartial(object: Partial<_89.TxBody>): _89.TxBody;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.AuthInfo;
                fromPartial(object: Partial<_89.AuthInfo>): _89.AuthInfo;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.SignerInfo;
                fromPartial(object: Partial<_89.SignerInfo>): _89.SignerInfo;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.ModeInfo;
                fromPartial(object: Partial<_89.ModeInfo>): _89.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.ModeInfo_Single;
                fromPartial(object: Partial<_89.ModeInfo_Single>): _89.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.ModeInfo_Multi;
                fromPartial(object: Partial<_89.ModeInfo_Multi>): _89.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Fee;
                fromPartial(object: Partial<_89.Fee>): _89.Fee;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetTxsEventRequest;
                fromPartial(object: Partial<_88.GetTxsEventRequest>): _88.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetTxsEventResponse;
                fromPartial(object: Partial<_88.GetTxsEventResponse>): _88.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.BroadcastTxRequest;
                fromPartial(object: Partial<_88.BroadcastTxRequest>): _88.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.BroadcastTxResponse;
                fromPartial(object: Partial<_88.BroadcastTxResponse>): _88.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.SimulateRequest;
                fromPartial(object: Partial<_88.SimulateRequest>): _88.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.SimulateResponse;
                fromPartial(object: Partial<_88.SimulateResponse>): _88.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetTxRequest;
                fromPartial(object: Partial<_88.GetTxRequest>): _88.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetTxResponse;
                fromPartial(object: Partial<_88.GetTxResponse>): _88.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_88.GetBlockWithTxsRequest>): _88.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_88.GetBlockWithTxsResponse>): _88.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _91.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.Plan;
                fromPartial(object: Partial<_91.Plan>): _91.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _91.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.SoftwareUpgradeProposal>): _91.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _91.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.CancelSoftwareUpgradeProposal>): _91.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _91.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.ModuleVersion;
                fromPartial(object: Partial<_91.ModuleVersion>): _91.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_90.QueryCurrentPlanRequest>): _90.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_90.QueryCurrentPlanResponse>): _90.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_90.QueryAppliedPlanRequest>): _90.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_90.QueryAppliedPlanResponse>): _90.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateRequest>): _90.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateResponse>): _90.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_90.QueryModuleVersionsRequest>): _90.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_90.QueryModuleVersionsResponse>): _90.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _92.MsgCreateVestingAccount) => {
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
                    }) => _92.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _93.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.BaseVestingAccount;
                fromPartial(object: Partial<_93.BaseVestingAccount>): _93.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _93.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ContinuousVestingAccount;
                fromPartial(object: Partial<_93.ContinuousVestingAccount>): _93.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _93.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DelayedVestingAccount;
                fromPartial(object: Partial<_93.DelayedVestingAccount>): _93.DelayedVestingAccount;
            };
            Period: {
                encode(message: _93.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Period;
                fromPartial(object: Partial<_93.Period>): _93.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _93.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.PeriodicVestingAccount;
                fromPartial(object: Partial<_93.PeriodicVestingAccount>): _93.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _93.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.PermanentLockedAccount;
                fromPartial(object: Partial<_93.PermanentLockedAccount>): _93.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _92.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgCreateVestingAccount;
                fromPartial(object: Partial<_92.MsgCreateVestingAccount>): _92.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _92.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_92.MsgCreateVestingAccountResponse>): _92.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _178.MsgClientImpl;
                };
                bank: {
                    v1beta1: _179.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _180.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _181.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _182.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _183.MsgClientImpl;
                };
                gov: {
                    v1beta1: _184.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _185.MsgClientImpl;
                };
                staking: {
                    v1beta1: _186.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _187.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                        account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                        granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                        granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                        allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                        spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                        supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                            getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                            getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                            getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                        allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                        allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                        allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                        annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
