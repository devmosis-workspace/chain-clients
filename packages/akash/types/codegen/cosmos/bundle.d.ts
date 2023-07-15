import * as _53 from "./auth/v1beta1/auth";
import * as _54 from "./auth/v1beta1/genesis";
import * as _55 from "./auth/v1beta1/query";
import * as _56 from "./authz/v1beta1/authz";
import * as _57 from "./authz/v1beta1/event";
import * as _58 from "./authz/v1beta1/genesis";
import * as _59 from "./authz/v1beta1/query";
import * as _60 from "./authz/v1beta1/tx";
import * as _61 from "./bank/v1beta1/authz";
import * as _62 from "./bank/v1beta1/bank";
import * as _63 from "./bank/v1beta1/genesis";
import * as _64 from "./bank/v1beta1/query";
import * as _65 from "./bank/v1beta1/tx";
import * as _66 from "./base/abci/v1beta1/abci";
import * as _67 from "./base/kv/v1beta1/kv";
import * as _68 from "./base/query/v1beta1/pagination";
import * as _69 from "./base/reflection/v1beta1/reflection";
import * as _70 from "./base/reflection/v2alpha1/reflection";
import * as _71 from "./base/snapshots/v1beta1/snapshot";
import * as _72 from "./base/store/v1beta1/commit_info";
import * as _73 from "./base/store/v1beta1/listening";
import * as _74 from "./base/tendermint/v1beta1/query";
import * as _75 from "./base/v1beta1/coin";
import * as _76 from "./capability/v1beta1/capability";
import * as _77 from "./capability/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/genesis";
import * as _79 from "./crisis/v1beta1/tx";
import * as _80 from "./crypto/ed25519/keys";
import * as _81 from "./crypto/multisig/keys";
import * as _82 from "./crypto/secp256k1/keys";
import * as _83 from "./crypto/secp256r1/keys";
import * as _84 from "./distribution/v1beta1/distribution";
import * as _85 from "./distribution/v1beta1/genesis";
import * as _86 from "./distribution/v1beta1/query";
import * as _87 from "./distribution/v1beta1/tx";
import * as _88 from "./evidence/v1beta1/evidence";
import * as _89 from "./evidence/v1beta1/genesis";
import * as _90 from "./evidence/v1beta1/query";
import * as _91 from "./evidence/v1beta1/tx";
import * as _92 from "./feegrant/v1beta1/feegrant";
import * as _93 from "./feegrant/v1beta1/genesis";
import * as _94 from "./feegrant/v1beta1/query";
import * as _95 from "./feegrant/v1beta1/tx";
import * as _96 from "./genutil/v1beta1/genesis";
import * as _97 from "./gov/v1beta1/genesis";
import * as _98 from "./gov/v1beta1/gov";
import * as _99 from "./gov/v1beta1/query";
import * as _100 from "./gov/v1beta1/tx";
import * as _101 from "./mint/v1beta1/genesis";
import * as _102 from "./mint/v1beta1/mint";
import * as _103 from "./mint/v1beta1/query";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./tx/signing/v1beta1/signing";
import * as _116 from "./tx/v1beta1/service";
import * as _117 from "./tx/v1beta1/tx";
import * as _118 from "./upgrade/v1beta1/query";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _205 from "./auth/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/query.rpc.Query";
import * as _207 from "./bank/v1beta1/query.rpc.Query";
import * as _208 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _209 from "./distribution/v1beta1/query.rpc.Query";
import * as _210 from "./evidence/v1beta1/query.rpc.Query";
import * as _211 from "./feegrant/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./mint/v1beta1/query.rpc.Query";
import * as _214 from "./params/v1beta1/query.rpc.Query";
import * as _215 from "./slashing/v1beta1/query.rpc.Query";
import * as _216 from "./staking/v1beta1/query.rpc.Query";
import * as _217 from "./tx/v1beta1/service.rpc.Service";
import * as _218 from "./upgrade/v1beta1/query.rpc.Query";
import * as _219 from "./authz/v1beta1/tx.rpc.msg";
import * as _220 from "./bank/v1beta1/tx.rpc.msg";
import * as _221 from "./crisis/v1beta1/tx.rpc.msg";
import * as _222 from "./distribution/v1beta1/tx.rpc.msg";
import * as _223 from "./evidence/v1beta1/tx.rpc.msg";
import * as _224 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _225 from "./gov/v1beta1/tx.rpc.msg";
import * as _226 from "./slashing/v1beta1/tx.rpc.msg";
import * as _227 from "./staking/v1beta1/tx.rpc.msg";
import * as _228 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _55.QueryAccountsRequest): Promise<_55.QueryAccountsResponse>;
                account(request: _55.QueryAccountRequest): Promise<_55.QueryAccountResponse>;
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _55.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryAccountsRequest;
                fromPartial(object: Partial<_55.QueryAccountsRequest>): _55.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _55.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryAccountsResponse;
                fromPartial(object: Partial<_55.QueryAccountsResponse>): _55.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _55.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryAccountRequest;
                fromPartial(object: Partial<_55.QueryAccountRequest>): _55.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _55.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryAccountResponse;
                fromPartial(object: Partial<_55.QueryAccountResponse>): _55.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.QueryParamsRequest;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
            BaseAccount: {
                encode(message: _53.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.BaseAccount;
                fromPartial(object: Partial<_53.BaseAccount>): _53.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _53.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ModuleAccount;
                fromPartial(object: Partial<_53.ModuleAccount>): _53.ModuleAccount;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _59.QueryGrantsRequest): Promise<_59.QueryGrantsResponse>;
                granterGrants(request: _59.QueryGranterGrantsRequest): Promise<_59.QueryGranterGrantsResponse>;
                granteeGrants(request: _59.QueryGranteeGrantsRequest): Promise<_59.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _60.MsgGrant) => {
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
                    }) => _60.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _60.MsgExec) => {
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
                    }) => _60.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _60.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _60.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _60.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgGrant;
                fromPartial(object: Partial<_60.MsgGrant>): _60.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _60.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgExecResponse;
                fromPartial(object: Partial<_60.MsgExecResponse>): _60.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _60.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgExec;
                fromPartial(object: Partial<_60.MsgExec>): _60.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _60.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.MsgGrantResponse;
                fromPartial(_: Partial<_60.MsgGrantResponse>): _60.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _60.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgRevoke;
                fromPartial(object: Partial<_60.MsgRevoke>): _60.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _60.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.MsgRevokeResponse;
                fromPartial(_: Partial<_60.MsgRevokeResponse>): _60.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _59.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGrantsRequest;
                fromPartial(object: Partial<_59.QueryGrantsRequest>): _59.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _59.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGrantsResponse;
                fromPartial(object: Partial<_59.QueryGrantsResponse>): _59.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _59.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_59.QueryGranterGrantsRequest>): _59.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _59.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_59.QueryGranterGrantsResponse>): _59.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _59.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_59.QueryGranteeGrantsRequest>): _59.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _59.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_59.QueryGranteeGrantsResponse>): _59.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
            EventGrant: {
                encode(message: _57.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.EventGrant;
                fromPartial(object: Partial<_57.EventGrant>): _57.EventGrant;
            };
            EventRevoke: {
                encode(message: _57.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.EventRevoke;
                fromPartial(object: Partial<_57.EventRevoke>): _57.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _56.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenericAuthorization;
                fromPartial(object: Partial<_56.GenericAuthorization>): _56.GenericAuthorization;
            };
            Grant: {
                encode(message: _56.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Grant;
                fromPartial(object: Partial<_56.Grant>): _56.Grant;
            };
            GrantAuthorization: {
                encode(message: _56.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GrantAuthorization;
                fromPartial(object: Partial<_56.GrantAuthorization>): _56.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _64.QueryBalanceRequest): Promise<_64.QueryBalanceResponse>;
                allBalances(request: _64.QueryAllBalancesRequest): Promise<_64.QueryAllBalancesResponse>;
                spendableBalances(request: _64.QuerySpendableBalancesRequest): Promise<_64.QuerySpendableBalancesResponse>;
                totalSupply(request?: _64.QueryTotalSupplyRequest): Promise<_64.QueryTotalSupplyResponse>;
                supplyOf(request: _64.QuerySupplyOfRequest): Promise<_64.QuerySupplyOfResponse>;
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                denomMetadata(request: _64.QueryDenomMetadataRequest): Promise<_64.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _64.QueryDenomsMetadataRequest): Promise<_64.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _65.MsgSend) => {
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
                    }) => _65.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _65.MsgMultiSend) => {
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
                    }) => _65.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _65.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgSend;
                fromPartial(object: Partial<_65.MsgSend>): _65.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _65.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgSendResponse;
                fromPartial(_: Partial<_65.MsgSendResponse>): _65.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _65.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgMultiSend;
                fromPartial(object: Partial<_65.MsgMultiSend>): _65.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _65.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgMultiSendResponse;
                fromPartial(_: Partial<_65.MsgMultiSendResponse>): _65.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _64.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryBalanceRequest;
                fromPartial(object: Partial<_64.QueryBalanceRequest>): _64.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _64.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryBalanceResponse;
                fromPartial(object: Partial<_64.QueryBalanceResponse>): _64.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _64.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryAllBalancesRequest;
                fromPartial(object: Partial<_64.QueryAllBalancesRequest>): _64.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _64.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryAllBalancesResponse;
                fromPartial(object: Partial<_64.QueryAllBalancesResponse>): _64.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _64.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_64.QuerySpendableBalancesRequest>): _64.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _64.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_64.QuerySpendableBalancesResponse>): _64.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _64.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_64.QueryTotalSupplyRequest>): _64.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _64.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_64.QueryTotalSupplyResponse>): _64.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _64.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySupplyOfRequest;
                fromPartial(object: Partial<_64.QuerySupplyOfRequest>): _64.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _64.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QuerySupplyOfResponse;
                fromPartial(object: Partial<_64.QuerySupplyOfResponse>): _64.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _64.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_64.QueryDenomsMetadataRequest>): _64.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _64.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_64.QueryDenomsMetadataResponse>): _64.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _64.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_64.QueryDenomMetadataRequest>): _64.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _64.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_64.QueryDenomMetadataResponse>): _64.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            Balance: {
                encode(message: _63.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Balance;
                fromPartial(object: Partial<_63.Balance>): _63.Balance;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
            SendEnabled: {
                encode(message: _62.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.SendEnabled;
                fromPartial(object: Partial<_62.SendEnabled>): _62.SendEnabled;
            };
            Input: {
                encode(message: _62.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Input;
                fromPartial(object: Partial<_62.Input>): _62.Input;
            };
            Output: {
                encode(message: _62.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Output;
                fromPartial(object: Partial<_62.Output>): _62.Output;
            };
            Supply: {
                encode(message: _62.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Supply;
                fromPartial(object: Partial<_62.Supply>): _62.Supply;
            };
            DenomUnit: {
                encode(message: _62.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.DenomUnit;
                fromPartial(object: Partial<_62.DenomUnit>): _62.DenomUnit;
            };
            Metadata: {
                encode(message: _62.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Metadata;
                fromPartial(object: Partial<_62.Metadata>): _62.Metadata;
            };
            SendAuthorization: {
                encode(message: _61.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.SendAuthorization;
                fromPartial(object: Partial<_61.SendAuthorization>): _61.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _66.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.TxResponse;
                    fromPartial(object: Partial<_66.TxResponse>): _66.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _66.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.ABCIMessageLog;
                    fromPartial(object: Partial<_66.ABCIMessageLog>): _66.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _66.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.StringEvent;
                    fromPartial(object: Partial<_66.StringEvent>): _66.StringEvent;
                };
                Attribute: {
                    encode(message: _66.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.Attribute;
                    fromPartial(object: Partial<_66.Attribute>): _66.Attribute;
                };
                GasInfo: {
                    encode(message: _66.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.GasInfo;
                    fromPartial(object: Partial<_66.GasInfo>): _66.GasInfo;
                };
                Result: {
                    encode(message: _66.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.Result;
                    fromPartial(object: Partial<_66.Result>): _66.Result;
                };
                SimulationResponse: {
                    encode(message: _66.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.SimulationResponse;
                    fromPartial(object: Partial<_66.SimulationResponse>): _66.SimulationResponse;
                };
                MsgData: {
                    encode(message: _66.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.MsgData;
                    fromPartial(object: Partial<_66.MsgData>): _66.MsgData;
                };
                TxMsgData: {
                    encode(message: _66.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.TxMsgData;
                    fromPartial(object: Partial<_66.TxMsgData>): _66.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _66.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.SearchTxsResult;
                    fromPartial(object: Partial<_66.SearchTxsResult>): _66.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _67.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.Pairs;
                    fromPartial(object: Partial<_67.Pairs>): _67.Pairs;
                };
                Pair: {
                    encode(message: _67.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.Pair;
                    fromPartial(object: Partial<_67.Pair>): _67.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _68.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.PageRequest;
                    fromPartial(object: Partial<_68.PageRequest>): _68.PageRequest;
                };
                PageResponse: {
                    encode(message: _68.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.PageResponse;
                    fromPartial(object: Partial<_68.PageResponse>): _68.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _69.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _69.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_69.ListAllInterfacesRequest>): _69.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _69.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_69.ListAllInterfacesResponse>): _69.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _69.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.ListImplementationsRequest;
                    fromPartial(object: Partial<_69.ListImplementationsRequest>): _69.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _69.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.ListImplementationsResponse;
                    fromPartial(object: Partial<_69.ListImplementationsResponse>): _69.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _70.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.AppDescriptor;
                    fromPartial(object: Partial<_70.AppDescriptor>): _70.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _70.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.TxDescriptor;
                    fromPartial(object: Partial<_70.TxDescriptor>): _70.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _70.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.AuthnDescriptor;
                    fromPartial(object: Partial<_70.AuthnDescriptor>): _70.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _70.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.SigningModeDescriptor;
                    fromPartial(object: Partial<_70.SigningModeDescriptor>): _70.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _70.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.ChainDescriptor;
                    fromPartial(object: Partial<_70.ChainDescriptor>): _70.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _70.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.CodecDescriptor;
                    fromPartial(object: Partial<_70.CodecDescriptor>): _70.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _70.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.InterfaceDescriptor;
                    fromPartial(object: Partial<_70.InterfaceDescriptor>): _70.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _70.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_70.InterfaceImplementerDescriptor>): _70.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _70.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_70.InterfaceAcceptingMessageDescriptor>): _70.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _70.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.ConfigurationDescriptor;
                    fromPartial(object: Partial<_70.ConfigurationDescriptor>): _70.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _70.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.MsgDescriptor;
                    fromPartial(object: Partial<_70.MsgDescriptor>): _70.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _70.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_70.GetAuthnDescriptorRequest>): _70.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _70.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_70.GetAuthnDescriptorResponse>): _70.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _70.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_70.GetChainDescriptorRequest>): _70.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _70.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_70.GetChainDescriptorResponse>): _70.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _70.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_70.GetCodecDescriptorRequest>): _70.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _70.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_70.GetCodecDescriptorResponse>): _70.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _70.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_70.GetConfigurationDescriptorRequest>): _70.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _70.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_70.GetConfigurationDescriptorResponse>): _70.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _70.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_70.GetQueryServicesDescriptorRequest>): _70.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _70.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_70.GetQueryServicesDescriptorResponse>): _70.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _70.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_70.GetTxDescriptorRequest>): _70.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _70.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_70.GetTxDescriptorResponse>): _70.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _70.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.QueryServicesDescriptor;
                    fromPartial(object: Partial<_70.QueryServicesDescriptor>): _70.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _70.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.QueryServiceDescriptor;
                    fromPartial(object: Partial<_70.QueryServiceDescriptor>): _70.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _70.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.QueryMethodDescriptor;
                    fromPartial(object: Partial<_70.QueryMethodDescriptor>): _70.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _71.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.Snapshot;
                    fromPartial(object: Partial<_71.Snapshot>): _71.Snapshot;
                };
                Metadata: {
                    encode(message: _71.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.Metadata;
                    fromPartial(object: Partial<_71.Metadata>): _71.Metadata;
                };
                SnapshotItem: {
                    encode(message: _71.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.SnapshotItem;
                    fromPartial(object: Partial<_71.SnapshotItem>): _71.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _71.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.SnapshotStoreItem;
                    fromPartial(object: Partial<_71.SnapshotStoreItem>): _71.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _71.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.SnapshotIAVLItem;
                    fromPartial(object: Partial<_71.SnapshotIAVLItem>): _71.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _71.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_71.SnapshotExtensionMeta>): _71.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _71.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_71.SnapshotExtensionPayload>): _71.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _73.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.StoreKVPair;
                    fromPartial(object: Partial<_73.StoreKVPair>): _73.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _72.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.CommitInfo;
                    fromPartial(object: Partial<_72.CommitInfo>): _72.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _72.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.StoreInfo;
                    fromPartial(object: Partial<_72.StoreInfo>): _72.StoreInfo;
                };
                CommitID: {
                    encode(message: _72.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.CommitID;
                    fromPartial(object: Partial<_72.CommitID>): _72.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _208.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _74.GetNodeInfoRequest): Promise<_74.GetNodeInfoResponse>;
                    getSyncing(request?: _74.GetSyncingRequest): Promise<_74.GetSyncingResponse>;
                    getLatestBlock(request?: _74.GetLatestBlockRequest): Promise<_74.GetLatestBlockResponse>;
                    getBlockByHeight(request: _74.GetBlockByHeightRequest): Promise<_74.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _74.GetLatestValidatorSetRequest): Promise<_74.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _74.GetValidatorSetByHeightRequest): Promise<_74.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _74.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_74.GetValidatorSetByHeightRequest>): _74.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _74.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_74.GetValidatorSetByHeightResponse>): _74.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _74.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_74.GetLatestValidatorSetRequest>): _74.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _74.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_74.GetLatestValidatorSetResponse>): _74.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _74.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Validator;
                    fromPartial(object: Partial<_74.Validator>): _74.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _74.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_74.GetBlockByHeightRequest>): _74.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _74.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_74.GetBlockByHeightResponse>): _74.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _74.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.GetLatestBlockRequest;
                    fromPartial(_: Partial<_74.GetLatestBlockRequest>): _74.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _74.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetLatestBlockResponse;
                    fromPartial(object: Partial<_74.GetLatestBlockResponse>): _74.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _74.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.GetSyncingRequest;
                    fromPartial(_: Partial<_74.GetSyncingRequest>): _74.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _74.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetSyncingResponse;
                    fromPartial(object: Partial<_74.GetSyncingResponse>): _74.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _74.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.GetNodeInfoRequest;
                    fromPartial(_: Partial<_74.GetNodeInfoRequest>): _74.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _74.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.GetNodeInfoResponse;
                    fromPartial(object: Partial<_74.GetNodeInfoResponse>): _74.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _74.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.VersionInfo;
                    fromPartial(object: Partial<_74.VersionInfo>): _74.VersionInfo;
                };
                Module: {
                    encode(message: _74.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Module;
                    fromPartial(object: Partial<_74.Module>): _74.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _75.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Coin;
                fromPartial(object: Partial<_75.Coin>): _75.Coin;
            };
            DecCoin: {
                encode(message: _75.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DecCoin;
                fromPartial(object: Partial<_75.DecCoin>): _75.DecCoin;
            };
            IntProto: {
                encode(message: _75.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.IntProto;
                fromPartial(object: Partial<_75.IntProto>): _75.IntProto;
            };
            DecProto: {
                encode(message: _75.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.DecProto;
                fromPartial(object: Partial<_75.DecProto>): _75.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _77.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisOwners;
                fromPartial(object: Partial<_77.GenesisOwners>): _77.GenesisOwners;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            Capability: {
                encode(message: _76.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Capability;
                fromPartial(object: Partial<_76.Capability>): _76.Capability;
            };
            Owner: {
                encode(message: _76.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Owner;
                fromPartial(object: Partial<_76.Owner>): _76.Owner;
            };
            CapabilityOwners: {
                encode(message: _76.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.CapabilityOwners;
                fromPartial(object: Partial<_76.CapabilityOwners>): _76.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _79.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _79.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _79.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.MsgVerifyInvariant;
                fromPartial(object: Partial<_79.MsgVerifyInvariant>): _79.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _79.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _79.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_79.MsgVerifyInvariantResponse>): _79.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _80.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.PubKey;
                fromPartial(object: Partial<_80.PubKey>): _80.PubKey;
            };
            PrivKey: {
                encode(message: _80.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.PrivKey;
                fromPartial(object: Partial<_80.PrivKey>): _80.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _81.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.LegacyAminoPubKey;
                fromPartial(object: Partial<_81.LegacyAminoPubKey>): _81.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _82.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.PubKey;
                fromPartial(object: Partial<_82.PubKey>): _82.PubKey;
            };
            PrivKey: {
                encode(message: _82.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.PrivKey;
                fromPartial(object: Partial<_82.PrivKey>): _82.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _83.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.PubKey;
                fromPartial(object: Partial<_83.PubKey>): _83.PubKey;
            };
            PrivKey: {
                encode(message: _83.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.PrivKey;
                fromPartial(object: Partial<_83.PrivKey>): _83.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _87.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _87.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _87.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _87.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _87.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _87.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _87.MsgFundCommunityPool) => {
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
                    }) => _87.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _87.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_87.MsgSetWithdrawAddress>): _87.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _87.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_87.MsgSetWithdrawAddressResponse>): _87.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _87.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_87.MsgWithdrawDelegatorReward>): _87.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _87.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_87.MsgWithdrawDelegatorRewardResponse>): _87.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _87.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_87.MsgWithdrawValidatorCommission>): _87.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _87.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_87.MsgWithdrawValidatorCommissionResponse>): _87.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _87.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgFundCommunityPool;
                fromPartial(object: Partial<_87.MsgFundCommunityPool>): _87.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _87.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_87.MsgFundCommunityPoolResponse>): _87.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _86.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _86.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _86.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsRequest>): _86.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _86.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsResponse>): _86.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _86.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_86.QueryValidatorCommissionRequest>): _86.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _86.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_86.QueryValidatorCommissionResponse>): _86.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _86.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_86.QueryValidatorSlashesRequest>): _86.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _86.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_86.QueryValidatorSlashesResponse>): _86.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _86.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationRewardsRequest>): _86.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _86.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationRewardsResponse>): _86.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _86.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsRequest>): _86.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _86.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsResponse>): _86.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _86.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsRequest>): _86.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _86.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsResponse>): _86.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _86.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressRequest>): _86.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _86.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressResponse>): _86.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _86.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_86.QueryCommunityPoolRequest>): _86.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _86.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_86.QueryCommunityPoolResponse>): _86.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _85.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_85.DelegatorWithdrawInfo>): _85.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _85.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorOutstandingRewardsRecord>): _85.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _85.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_85.ValidatorAccumulatedCommissionRecord>): _85.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _85.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorHistoricalRewardsRecord>): _85.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _85.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorCurrentRewardsRecord>): _85.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _85.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_85.DelegatorStartingInfoRecord>): _85.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _85.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_85.ValidatorSlashEventRecord>): _85.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.Params;
                fromPartial(object: Partial<_84.Params>): _84.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _84.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_84.ValidatorHistoricalRewards>): _84.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _84.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorCurrentRewards;
                fromPartial(object: Partial<_84.ValidatorCurrentRewards>): _84.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _84.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_84.ValidatorAccumulatedCommission>): _84.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _84.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_84.ValidatorOutstandingRewards>): _84.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _84.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorSlashEvent;
                fromPartial(object: Partial<_84.ValidatorSlashEvent>): _84.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _84.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ValidatorSlashEvents;
                fromPartial(object: Partial<_84.ValidatorSlashEvents>): _84.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _84.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.FeePool;
                fromPartial(object: Partial<_84.FeePool>): _84.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _84.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposal>): _84.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _84.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.DelegatorStartingInfo;
                fromPartial(object: Partial<_84.DelegatorStartingInfo>): _84.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _84.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.DelegationDelegatorReward;
                fromPartial(object: Partial<_84.DelegationDelegatorReward>): _84.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _84.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposalWithDeposit>): _84.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _90.QueryEvidenceRequest): Promise<_90.QueryEvidenceResponse>;
                allEvidence(request?: _90.QueryAllEvidenceRequest): Promise<_90.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _91.MsgSubmitEvidence) => {
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
                    }) => _91.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _91.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.MsgSubmitEvidence;
                fromPartial(object: Partial<_91.MsgSubmitEvidence>): _91.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _91.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_91.MsgSubmitEvidenceResponse>): _91.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _90.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryEvidenceRequest;
                fromPartial(object: Partial<_90.QueryEvidenceRequest>): _90.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _90.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryEvidenceResponse;
                fromPartial(object: Partial<_90.QueryEvidenceResponse>): _90.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _90.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_90.QueryAllEvidenceRequest>): _90.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _90.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_90.QueryAllEvidenceResponse>): _90.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GenesisState;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
            };
            Equivocation: {
                encode(message: _88.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Equivocation;
                fromPartial(object: Partial<_88.Equivocation>): _88.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _95.MsgGrantAllowance) => {
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
                    }) => _95.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _95.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _95.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _95.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.MsgGrantAllowance;
                fromPartial(object: Partial<_95.MsgGrantAllowance>): _95.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _95.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _95.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_95.MsgGrantAllowanceResponse>): _95.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _95.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.MsgRevokeAllowance;
                fromPartial(object: Partial<_95.MsgRevokeAllowance>): _95.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _95.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _95.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_95.MsgRevokeAllowanceResponse>): _95.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _94.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowanceRequest;
                fromPartial(object: Partial<_94.QueryAllowanceRequest>): _94.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _94.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowanceResponse;
                fromPartial(object: Partial<_94.QueryAllowanceResponse>): _94.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _94.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowancesRequest;
                fromPartial(object: Partial<_94.QueryAllowancesRequest>): _94.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _94.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowancesResponse;
                fromPartial(object: Partial<_94.QueryAllowancesResponse>): _94.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _94.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterRequest>): _94.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _94.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterResponse>): _94.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            BasicAllowance: {
                encode(message: _92.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.BasicAllowance;
                fromPartial(object: Partial<_92.BasicAllowance>): _92.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _92.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.PeriodicAllowance;
                fromPartial(object: Partial<_92.PeriodicAllowance>): _92.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _92.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.AllowedMsgAllowance;
                fromPartial(object: Partial<_92.AllowedMsgAllowance>): _92.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _92.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Grant;
                fromPartial(object: Partial<_92.Grant>): _92.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GenesisState;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _100.MsgSubmitProposal) => {
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
                    }) => _100.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _100.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _100.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _100.MsgVoteWeighted) => {
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
                    }) => _100.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _100.MsgDeposit) => {
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
                    }) => _100.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _100.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgSubmitProposal;
                fromPartial(object: Partial<_100.MsgSubmitProposal>): _100.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _100.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_100.MsgSubmitProposalResponse>): _100.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _100.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgVote;
                fromPartial(object: Partial<_100.MsgVote>): _100.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _100.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _100.MsgVoteResponse;
                fromPartial(_: Partial<_100.MsgVoteResponse>): _100.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _100.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgVoteWeighted;
                fromPartial(object: Partial<_100.MsgVoteWeighted>): _100.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _100.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _100.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_100.MsgVoteWeightedResponse>): _100.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _100.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgDeposit;
                fromPartial(object: Partial<_100.MsgDeposit>): _100.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _100.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _100.MsgDepositResponse;
                fromPartial(_: Partial<_100.MsgDepositResponse>): _100.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _99.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryProposalRequest;
                fromPartial(object: Partial<_99.QueryProposalRequest>): _99.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _99.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryProposalResponse;
                fromPartial(object: Partial<_99.QueryProposalResponse>): _99.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _99.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryProposalsRequest;
                fromPartial(object: Partial<_99.QueryProposalsRequest>): _99.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _99.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryProposalsResponse;
                fromPartial(object: Partial<_99.QueryProposalsResponse>): _99.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _99.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryVoteRequest;
                fromPartial(object: Partial<_99.QueryVoteRequest>): _99.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _99.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryVoteResponse;
                fromPartial(object: Partial<_99.QueryVoteResponse>): _99.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _99.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryVotesRequest;
                fromPartial(object: Partial<_99.QueryVotesRequest>): _99.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _99.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryVotesResponse;
                fromPartial(object: Partial<_99.QueryVotesResponse>): _99.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _99.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryParamsRequest;
                fromPartial(object: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _99.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryParamsResponse;
                fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _99.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryDepositRequest;
                fromPartial(object: Partial<_99.QueryDepositRequest>): _99.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _99.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryDepositResponse;
                fromPartial(object: Partial<_99.QueryDepositResponse>): _99.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _99.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryDepositsRequest;
                fromPartial(object: Partial<_99.QueryDepositsRequest>): _99.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _99.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryDepositsResponse;
                fromPartial(object: Partial<_99.QueryDepositsResponse>): _99.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _99.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryTallyResultRequest;
                fromPartial(object: Partial<_99.QueryTallyResultRequest>): _99.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _99.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.QueryTallyResultResponse;
                fromPartial(object: Partial<_99.QueryTallyResultResponse>): _99.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _98.VoteOption;
            voteOptionToJSON(object: _98.VoteOption): string;
            proposalStatusFromJSON(object: any): _98.ProposalStatus;
            proposalStatusToJSON(object: _98.ProposalStatus): string;
            VoteOption: typeof _98.VoteOption;
            VoteOptionSDKType: typeof _98.VoteOption;
            ProposalStatus: typeof _98.ProposalStatus;
            ProposalStatusSDKType: typeof _98.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _98.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.WeightedVoteOption;
                fromPartial(object: Partial<_98.WeightedVoteOption>): _98.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _98.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.TextProposal;
                fromPartial(object: Partial<_98.TextProposal>): _98.TextProposal;
            };
            Deposit: {
                encode(message: _98.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.Deposit;
                fromPartial(object: Partial<_98.Deposit>): _98.Deposit;
            };
            Proposal: {
                encode(message: _98.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.Proposal;
                fromPartial(object: Partial<_98.Proposal>): _98.Proposal;
            };
            TallyResult: {
                encode(message: _98.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.TallyResult;
                fromPartial(object: Partial<_98.TallyResult>): _98.TallyResult;
            };
            Vote: {
                encode(message: _98.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.Vote;
                fromPartial(object: Partial<_98.Vote>): _98.Vote;
            };
            DepositParams: {
                encode(message: _98.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.DepositParams;
                fromPartial(object: Partial<_98.DepositParams>): _98.DepositParams;
            };
            VotingParams: {
                encode(message: _98.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.VotingParams;
                fromPartial(object: Partial<_98.VotingParams>): _98.VotingParams;
            };
            TallyParams: {
                encode(message: _98.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.TallyParams;
                fromPartial(object: Partial<_98.TallyParams>): _98.TallyParams;
            };
            GenesisState: {
                encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                inflation(request?: _103.QueryInflationRequest): Promise<_103.QueryInflationResponse>;
                annualProvisions(request?: _103.QueryAnnualProvisionsRequest): Promise<_103.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _103.QueryParamsRequest;
                fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _103.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _103.QueryInflationRequest;
                fromPartial(_: Partial<_103.QueryInflationRequest>): _103.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _103.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryInflationResponse;
                fromPartial(object: Partial<_103.QueryInflationResponse>): _103.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _103.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _103.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_103.QueryAnnualProvisionsRequest>): _103.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _103.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_103.QueryAnnualProvisionsResponse>): _103.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _102.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Minter;
                fromPartial(object: Partial<_102.Minter>): _102.Minter;
            };
            Params: {
                encode(message: _102.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Params;
                fromPartial(object: Partial<_102.Params>): _102.Params;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryParamsRequest;
                fromPartial(object: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryParamsResponse;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _104.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ParameterChangeProposal;
                fromPartial(object: Partial<_104.ParameterChangeProposal>): _104.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _104.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ParamChange;
                fromPartial(object: Partial<_104.ParamChange>): _104.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _109.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _109.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _109.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.MsgUnjail;
                fromPartial(object: Partial<_109.MsgUnjail>): _109.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _109.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _109.MsgUnjailResponse;
                fromPartial(_: Partial<_109.MsgUnjailResponse>): _109.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _108.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.ValidatorSigningInfo;
                fromPartial(object: Partial<_108.ValidatorSigningInfo>): _108.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.Params;
                fromPartial(object: Partial<_108.Params>): _108.Params;
            };
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.QueryParamsRequest;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _107.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QuerySigningInfoRequest;
                fromPartial(object: Partial<_107.QuerySigningInfoRequest>): _107.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _107.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QuerySigningInfoResponse;
                fromPartial(object: Partial<_107.QuerySigningInfoResponse>): _107.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _107.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QuerySigningInfosRequest;
                fromPartial(object: Partial<_107.QuerySigningInfosRequest>): _107.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _107.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QuerySigningInfosResponse;
                fromPartial(object: Partial<_107.QuerySigningInfosResponse>): _107.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            SigningInfo: {
                encode(message: _106.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.SigningInfo;
                fromPartial(object: Partial<_106.SigningInfo>): _106.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _106.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.ValidatorMissedBlocks;
                fromPartial(object: Partial<_106.ValidatorMissedBlocks>): _106.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _106.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MissedBlock;
                fromPartial(object: Partial<_106.MissedBlock>): _106.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _114.MsgCreateValidator) => {
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
                    }) => _114.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _114.MsgEditValidator) => {
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
                    }) => _114.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _114.MsgDelegate) => {
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
                    }) => _114.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _114.MsgBeginRedelegate) => {
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
                    }) => _114.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _114.MsgUndelegate) => {
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
                    }) => _114.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _114.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgCreateValidator;
                fromPartial(object: Partial<_114.MsgCreateValidator>): _114.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _114.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_114.MsgCreateValidatorResponse>): _114.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _114.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgEditValidator;
                fromPartial(object: Partial<_114.MsgEditValidator>): _114.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _114.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgEditValidatorResponse;
                fromPartial(_: Partial<_114.MsgEditValidatorResponse>): _114.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _114.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgDelegate;
                fromPartial(object: Partial<_114.MsgDelegate>): _114.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _114.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgDelegateResponse;
                fromPartial(_: Partial<_114.MsgDelegateResponse>): _114.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _114.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgBeginRedelegate;
                fromPartial(object: Partial<_114.MsgBeginRedelegate>): _114.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _114.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_114.MsgBeginRedelegateResponse>): _114.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _114.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgUndelegate;
                fromPartial(object: Partial<_114.MsgUndelegate>): _114.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _114.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgUndelegateResponse;
                fromPartial(object: Partial<_114.MsgUndelegateResponse>): _114.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _113.BondStatus;
            bondStatusToJSON(object: _113.BondStatus): string;
            BondStatus: typeof _113.BondStatus;
            BondStatusSDKType: typeof _113.BondStatus;
            HistoricalInfo: {
                encode(message: _113.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.HistoricalInfo;
                fromPartial(object: Partial<_113.HistoricalInfo>): _113.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _113.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.CommissionRates;
                fromPartial(object: Partial<_113.CommissionRates>): _113.CommissionRates;
            };
            Commission: {
                encode(message: _113.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Commission;
                fromPartial(object: Partial<_113.Commission>): _113.Commission;
            };
            Description: {
                encode(message: _113.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Description;
                fromPartial(object: Partial<_113.Description>): _113.Description;
            };
            Validator: {
                encode(message: _113.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Validator;
                fromPartial(object: Partial<_113.Validator>): _113.Validator;
            };
            ValAddresses: {
                encode(message: _113.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.ValAddresses;
                fromPartial(object: Partial<_113.ValAddresses>): _113.ValAddresses;
            };
            DVPair: {
                encode(message: _113.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.DVPair;
                fromPartial(object: Partial<_113.DVPair>): _113.DVPair;
            };
            DVPairs: {
                encode(message: _113.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.DVPairs;
                fromPartial(object: Partial<_113.DVPairs>): _113.DVPairs;
            };
            DVVTriplet: {
                encode(message: _113.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.DVVTriplet;
                fromPartial(object: Partial<_113.DVVTriplet>): _113.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _113.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.DVVTriplets;
                fromPartial(object: Partial<_113.DVVTriplets>): _113.DVVTriplets;
            };
            Delegation: {
                encode(message: _113.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Delegation;
                fromPartial(object: Partial<_113.Delegation>): _113.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _113.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.UnbondingDelegation;
                fromPartial(object: Partial<_113.UnbondingDelegation>): _113.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _113.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.UnbondingDelegationEntry;
                fromPartial(object: Partial<_113.UnbondingDelegationEntry>): _113.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _113.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.RedelegationEntry;
                fromPartial(object: Partial<_113.RedelegationEntry>): _113.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _113.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Redelegation;
                fromPartial(object: Partial<_113.Redelegation>): _113.Redelegation;
            };
            Params: {
                encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Params;
                fromPartial(object: Partial<_113.Params>): _113.Params;
            };
            DelegationResponse: {
                encode(message: _113.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.DelegationResponse;
                fromPartial(object: Partial<_113.DelegationResponse>): _113.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _113.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.RedelegationEntryResponse;
                fromPartial(object: Partial<_113.RedelegationEntryResponse>): _113.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _113.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.RedelegationResponse;
                fromPartial(object: Partial<_113.RedelegationResponse>): _113.RedelegationResponse;
            };
            Pool: {
                encode(message: _113.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Pool;
                fromPartial(object: Partial<_113.Pool>): _113.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _112.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorsRequest;
                fromPartial(object: Partial<_112.QueryValidatorsRequest>): _112.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _112.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorsResponse;
                fromPartial(object: Partial<_112.QueryValidatorsResponse>): _112.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _112.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorRequest;
                fromPartial(object: Partial<_112.QueryValidatorRequest>): _112.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _112.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorResponse;
                fromPartial(object: Partial<_112.QueryValidatorResponse>): _112.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _112.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsRequest>): _112.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _112.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsResponse>): _112.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _112.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsRequest>): _112.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _112.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsResponse>): _112.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _112.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegationRequest;
                fromPartial(object: Partial<_112.QueryDelegationRequest>): _112.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _112.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegationResponse;
                fromPartial(object: Partial<_112.QueryDelegationResponse>): _112.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _112.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationRequest>): _112.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _112.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationResponse>): _112.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _112.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsRequest>): _112.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _112.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsResponse>): _112.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _112.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsRequest>): _112.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _112.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsResponse>): _112.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _112.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryRedelegationsRequest;
                fromPartial(object: Partial<_112.QueryRedelegationsRequest>): _112.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _112.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryRedelegationsResponse;
                fromPartial(object: Partial<_112.QueryRedelegationsResponse>): _112.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _112.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsRequest>): _112.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _112.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsResponse>): _112.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _112.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorRequest>): _112.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _112.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorResponse>): _112.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _112.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_112.QueryHistoricalInfoRequest>): _112.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _112.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_112.QueryHistoricalInfoResponse>): _112.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _112.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _112.QueryPoolRequest;
                fromPartial(_: Partial<_112.QueryPoolRequest>): _112.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _112.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryPoolResponse;
                fromPartial(object: Partial<_112.QueryPoolResponse>): _112.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _112.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _112.QueryParamsRequest;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _112.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.QueryParamsResponse;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _111.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.LastValidatorPower;
                fromPartial(object: Partial<_111.LastValidatorPower>): _111.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _110.AuthorizationType;
            authorizationTypeToJSON(object: _110.AuthorizationType): string;
            AuthorizationType: typeof _110.AuthorizationType;
            AuthorizationTypeSDKType: typeof _110.AuthorizationType;
            StakeAuthorization: {
                encode(message: _110.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.StakeAuthorization;
                fromPartial(object: Partial<_110.StakeAuthorization>): _110.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _110.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.StakeAuthorization_Validators;
                fromPartial(object: Partial<_110.StakeAuthorization_Validators>): _110.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _115.SignMode;
                signModeToJSON(object: _115.SignMode): string;
                SignMode: typeof _115.SignMode;
                SignModeSDKType: typeof _115.SignMode;
                SignatureDescriptors: {
                    encode(message: _115.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.SignatureDescriptors;
                    fromPartial(object: Partial<_115.SignatureDescriptors>): _115.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _115.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.SignatureDescriptor;
                    fromPartial(object: Partial<_115.SignatureDescriptor>): _115.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _115.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data>): _115.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _115.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Single>): _115.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _115.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Multi>): _115.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _217.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _117.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Tx;
                fromPartial(object: Partial<_117.Tx>): _117.Tx;
            };
            TxRaw: {
                encode(message: _117.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.TxRaw;
                fromPartial(object: Partial<_117.TxRaw>): _117.TxRaw;
            };
            SignDoc: {
                encode(message: _117.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.SignDoc;
                fromPartial(object: Partial<_117.SignDoc>): _117.SignDoc;
            };
            TxBody: {
                encode(message: _117.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.TxBody;
                fromPartial(object: Partial<_117.TxBody>): _117.TxBody;
            };
            AuthInfo: {
                encode(message: _117.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.AuthInfo;
                fromPartial(object: Partial<_117.AuthInfo>): _117.AuthInfo;
            };
            SignerInfo: {
                encode(message: _117.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.SignerInfo;
                fromPartial(object: Partial<_117.SignerInfo>): _117.SignerInfo;
            };
            ModeInfo: {
                encode(message: _117.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.ModeInfo;
                fromPartial(object: Partial<_117.ModeInfo>): _117.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _117.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.ModeInfo_Single;
                fromPartial(object: Partial<_117.ModeInfo_Single>): _117.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _117.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.ModeInfo_Multi;
                fromPartial(object: Partial<_117.ModeInfo_Multi>): _117.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _117.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Fee;
                fromPartial(object: Partial<_117.Fee>): _117.Fee;
            };
            orderByFromJSON(object: any): _116.OrderBy;
            orderByToJSON(object: _116.OrderBy): string;
            broadcastModeFromJSON(object: any): _116.BroadcastMode;
            broadcastModeToJSON(object: _116.BroadcastMode): string;
            OrderBy: typeof _116.OrderBy;
            OrderBySDKType: typeof _116.OrderBy;
            BroadcastMode: typeof _116.BroadcastMode;
            BroadcastModeSDKType: typeof _116.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _116.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetTxsEventRequest;
                fromPartial(object: Partial<_116.GetTxsEventRequest>): _116.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _116.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetTxsEventResponse;
                fromPartial(object: Partial<_116.GetTxsEventResponse>): _116.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _116.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.BroadcastTxRequest;
                fromPartial(object: Partial<_116.BroadcastTxRequest>): _116.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _116.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.BroadcastTxResponse;
                fromPartial(object: Partial<_116.BroadcastTxResponse>): _116.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _116.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SimulateRequest;
                fromPartial(object: Partial<_116.SimulateRequest>): _116.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _116.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SimulateResponse;
                fromPartial(object: Partial<_116.SimulateResponse>): _116.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _116.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetTxRequest;
                fromPartial(object: Partial<_116.GetTxRequest>): _116.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _116.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetTxResponse;
                fromPartial(object: Partial<_116.GetTxResponse>): _116.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _116.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_116.GetBlockWithTxsRequest>): _116.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _116.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_116.GetBlockWithTxsResponse>): _116.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _119.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Plan;
                fromPartial(object: Partial<_119.Plan>): _119.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _119.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.SoftwareUpgradeProposal>): _119.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _119.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.CancelSoftwareUpgradeProposal>): _119.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _119.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.ModuleVersion;
                fromPartial(object: Partial<_119.ModuleVersion>): _119.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _118.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_118.QueryCurrentPlanRequest>): _118.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _118.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_118.QueryCurrentPlanResponse>): _118.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _118.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_118.QueryAppliedPlanRequest>): _118.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _118.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_118.QueryAppliedPlanResponse>): _118.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _118.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateRequest>): _118.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _118.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateResponse>): _118.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _118.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_118.QueryModuleVersionsRequest>): _118.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _118.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_118.QueryModuleVersionsResponse>): _118.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _120.MsgCreateVestingAccount) => {
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
                    }) => _120.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _121.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.BaseVestingAccount;
                fromPartial(object: Partial<_121.BaseVestingAccount>): _121.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _121.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.ContinuousVestingAccount;
                fromPartial(object: Partial<_121.ContinuousVestingAccount>): _121.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _121.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.DelayedVestingAccount;
                fromPartial(object: Partial<_121.DelayedVestingAccount>): _121.DelayedVestingAccount;
            };
            Period: {
                encode(message: _121.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.Period;
                fromPartial(object: Partial<_121.Period>): _121.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _121.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.PeriodicVestingAccount;
                fromPartial(object: Partial<_121.PeriodicVestingAccount>): _121.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _121.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.PermanentLockedAccount;
                fromPartial(object: Partial<_121.PermanentLockedAccount>): _121.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _120.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgCreateVestingAccount;
                fromPartial(object: Partial<_120.MsgCreateVestingAccount>): _120.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _120.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_120.MsgCreateVestingAccountResponse>): _120.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _219.MsgClientImpl;
                };
                bank: {
                    v1beta1: _220.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _221.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _222.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _223.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _224.MsgClientImpl;
                };
                gov: {
                    v1beta1: _225.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _226.MsgClientImpl;
                };
                staking: {
                    v1beta1: _227.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _228.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _55.QueryAccountsRequest): Promise<_55.QueryAccountsResponse>;
                        account(request: _55.QueryAccountRequest): Promise<_55.QueryAccountResponse>;
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _59.QueryGrantsRequest): Promise<_59.QueryGrantsResponse>;
                        granterGrants(request: _59.QueryGranterGrantsRequest): Promise<_59.QueryGranterGrantsResponse>;
                        granteeGrants(request: _59.QueryGranteeGrantsRequest): Promise<_59.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _64.QueryBalanceRequest): Promise<_64.QueryBalanceResponse>;
                        allBalances(request: _64.QueryAllBalancesRequest): Promise<_64.QueryAllBalancesResponse>;
                        spendableBalances(request: _64.QuerySpendableBalancesRequest): Promise<_64.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _64.QueryTotalSupplyRequest): Promise<_64.QueryTotalSupplyResponse>;
                        supplyOf(request: _64.QuerySupplyOfRequest): Promise<_64.QuerySupplyOfResponse>;
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        denomMetadata(request: _64.QueryDenomMetadataRequest): Promise<_64.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _64.QueryDenomsMetadataRequest): Promise<_64.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _74.GetNodeInfoRequest): Promise<_74.GetNodeInfoResponse>;
                            getSyncing(request?: _74.GetSyncingRequest): Promise<_74.GetSyncingResponse>;
                            getLatestBlock(request?: _74.GetLatestBlockRequest): Promise<_74.GetLatestBlockResponse>;
                            getBlockByHeight(request: _74.GetBlockByHeightRequest): Promise<_74.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _74.GetLatestValidatorSetRequest): Promise<_74.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _74.GetValidatorSetByHeightRequest): Promise<_74.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _90.QueryEvidenceRequest): Promise<_90.QueryEvidenceResponse>;
                        allEvidence(request?: _90.QueryAllEvidenceRequest): Promise<_90.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                        allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                        allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                        proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                        vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                        votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                        params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                        deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                        tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        inflation(request?: _103.QueryInflationRequest): Promise<_103.QueryInflationResponse>;
                        annualProvisions(request?: _103.QueryAnnualProvisionsRequest): Promise<_103.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                        signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                        validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                        validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                        unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                        delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                        pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                        getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                        broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                        getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                        getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                        appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
