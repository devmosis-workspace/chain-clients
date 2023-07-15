import * as _69 from "./auth/v1beta1/auth";
import * as _70 from "./auth/v1beta1/genesis";
import * as _71 from "./auth/v1beta1/query";
import * as _72 from "./authz/v1beta1/authz";
import * as _73 from "./authz/v1beta1/event";
import * as _74 from "./authz/v1beta1/genesis";
import * as _75 from "./authz/v1beta1/query";
import * as _76 from "./authz/v1beta1/tx";
import * as _77 from "./bank/v1beta1/authz";
import * as _78 from "./bank/v1beta1/bank";
import * as _79 from "./bank/v1beta1/genesis";
import * as _80 from "./bank/v1beta1/query";
import * as _81 from "./bank/v1beta1/tx";
import * as _82 from "./base/abci/v1beta1/abci";
import * as _83 from "./base/kv/v1beta1/kv";
import * as _84 from "./base/node/v1beta1/query";
import * as _85 from "./base/query/v1beta1/pagination";
import * as _86 from "./base/reflection/v1beta1/reflection";
import * as _87 from "./base/reflection/v2alpha1/reflection";
import * as _88 from "./base/snapshots/v1beta1/snapshot";
import * as _89 from "./base/store/v1beta1/commit_info";
import * as _90 from "./base/store/v1beta1/listening";
import * as _91 from "./base/tendermint/v1beta1/query";
import * as _92 from "./base/v1beta1/coin";
import * as _93 from "./capability/v1beta1/capability";
import * as _94 from "./capability/v1beta1/genesis";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/multisig/keys";
import * as _99 from "./crypto/secp256k1/keys";
import * as _100 from "./crypto/secp256r1/keys";
import * as _101 from "./distribution/v1beta1/distribution";
import * as _102 from "./distribution/v1beta1/genesis";
import * as _103 from "./distribution/v1beta1/query";
import * as _104 from "./distribution/v1beta1/tx";
import * as _105 from "./evidence/v1beta1/evidence";
import * as _106 from "./evidence/v1beta1/genesis";
import * as _107 from "./evidence/v1beta1/query";
import * as _108 from "./evidence/v1beta1/tx";
import * as _109 from "./feegrant/v1beta1/feegrant";
import * as _110 from "./feegrant/v1beta1/genesis";
import * as _111 from "./feegrant/v1beta1/query";
import * as _112 from "./feegrant/v1beta1/tx";
import * as _113 from "./genutil/v1beta1/genesis";
import * as _114 from "./gov/v1beta1/genesis";
import * as _115 from "./gov/v1beta1/gov";
import * as _116 from "./gov/v1beta1/query";
import * as _117 from "./gov/v1beta1/tx";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./params/v1beta1/params";
import * as _122 from "./params/v1beta1/query";
import * as _123 from "./slashing/v1beta1/genesis";
import * as _124 from "./slashing/v1beta1/query";
import * as _125 from "./slashing/v1beta1/slashing";
import * as _126 from "./slashing/v1beta1/tx";
import * as _127 from "./staking/v1beta1/authz";
import * as _128 from "./staking/v1beta1/genesis";
import * as _129 from "./staking/v1beta1/query";
import * as _130 from "./staking/v1beta1/staking";
import * as _131 from "./staking/v1beta1/tx";
import * as _132 from "./tx/signing/v1beta1/signing";
import * as _133 from "./tx/v1beta1/service";
import * as _134 from "./tx/v1beta1/tx";
import * as _135 from "./upgrade/v1beta1/query";
import * as _136 from "./upgrade/v1beta1/upgrade";
import * as _137 from "./vesting/v1beta1/tx";
import * as _138 from "./vesting/v1beta1/vesting";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./bank/v1beta1/query.rpc.Query";
import * as _209 from "./base/node/v1beta1/query.rpc.Service";
import * as _210 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./evidence/v1beta1/query.rpc.Query";
import * as _213 from "./feegrant/v1beta1/query.rpc.Query";
import * as _214 from "./gov/v1beta1/query.rpc.Query";
import * as _215 from "./mint/v1beta1/query.rpc.Query";
import * as _216 from "./params/v1beta1/query.rpc.Query";
import * as _217 from "./slashing/v1beta1/query.rpc.Query";
import * as _218 from "./staking/v1beta1/query.rpc.Query";
import * as _219 from "./tx/v1beta1/service.rpc.Service";
import * as _220 from "./upgrade/v1beta1/query.rpc.Query";
import * as _221 from "./authz/v1beta1/tx.rpc.msg";
import * as _222 from "./bank/v1beta1/tx.rpc.msg";
import * as _223 from "./crisis/v1beta1/tx.rpc.msg";
import * as _224 from "./distribution/v1beta1/tx.rpc.msg";
import * as _225 from "./evidence/v1beta1/tx.rpc.msg";
import * as _226 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _227 from "./gov/v1beta1/tx.rpc.msg";
import * as _228 from "./slashing/v1beta1/tx.rpc.msg";
import * as _229 from "./staking/v1beta1/tx.rpc.msg";
import * as _230 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _71.QueryAccountsRequest): Promise<_71.QueryAccountsResponse>;
                account(request: _71.QueryAccountRequest): Promise<_71.QueryAccountResponse>;
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                moduleAccountByName(request: _71.QueryModuleAccountByNameRequest): Promise<_71.QueryModuleAccountByNameResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _71.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAccountsRequest;
                fromPartial(object: Partial<_71.QueryAccountsRequest>): _71.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _71.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAccountsResponse;
                fromPartial(object: Partial<_71.QueryAccountsResponse>): _71.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _71.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAccountRequest;
                fromPartial(object: Partial<_71.QueryAccountRequest>): _71.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _71.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAccountResponse;
                fromPartial(object: Partial<_71.QueryAccountResponse>): _71.QueryAccountResponse;
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
            QueryModuleAccountByNameRequest: {
                encode(message: _71.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_71.QueryModuleAccountByNameRequest>): _71.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _71.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_71.QueryModuleAccountByNameResponse>): _71.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
            BaseAccount: {
                encode(message: _69.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.BaseAccount;
                fromPartial(object: Partial<_69.BaseAccount>): _69.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _69.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.ModuleAccount;
                fromPartial(object: Partial<_69.ModuleAccount>): _69.ModuleAccount;
            };
            Params: {
                encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.Params;
                fromPartial(object: Partial<_69.Params>): _69.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _75.QueryGrantsRequest): Promise<_75.QueryGrantsResponse>;
                granterGrants(request: _75.QueryGranterGrantsRequest): Promise<_75.QueryGranterGrantsResponse>;
                granteeGrants(request: _75.QueryGranteeGrantsRequest): Promise<_75.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _76.MsgGrant) => {
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
                    }) => _76.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _76.MsgExec) => {
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
                    }) => _76.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _76.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _76.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _76.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgGrant;
                fromPartial(object: Partial<_76.MsgGrant>): _76.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _76.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgExecResponse;
                fromPartial(object: Partial<_76.MsgExecResponse>): _76.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _76.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgExec;
                fromPartial(object: Partial<_76.MsgExec>): _76.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _76.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgGrantResponse;
                fromPartial(_: Partial<_76.MsgGrantResponse>): _76.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _76.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgRevoke;
                fromPartial(object: Partial<_76.MsgRevoke>): _76.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _76.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgRevokeResponse;
                fromPartial(_: Partial<_76.MsgRevokeResponse>): _76.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _75.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGrantsRequest;
                fromPartial(object: Partial<_75.QueryGrantsRequest>): _75.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _75.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGrantsResponse;
                fromPartial(object: Partial<_75.QueryGrantsResponse>): _75.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _75.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_75.QueryGranterGrantsRequest>): _75.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _75.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_75.QueryGranterGrantsResponse>): _75.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _75.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_75.QueryGranteeGrantsRequest>): _75.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _75.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_75.QueryGranteeGrantsResponse>): _75.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
            EventGrant: {
                encode(message: _73.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.EventGrant;
                fromPartial(object: Partial<_73.EventGrant>): _73.EventGrant;
            };
            EventRevoke: {
                encode(message: _73.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.EventRevoke;
                fromPartial(object: Partial<_73.EventRevoke>): _73.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _72.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.GenericAuthorization;
                fromPartial(object: Partial<_72.GenericAuthorization>): _72.GenericAuthorization;
            };
            Grant: {
                encode(message: _72.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Grant;
                fromPartial(object: Partial<_72.Grant>): _72.Grant;
            };
            GrantAuthorization: {
                encode(message: _72.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.GrantAuthorization;
                fromPartial(object: Partial<_72.GrantAuthorization>): _72.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _80.QueryBalanceRequest): Promise<_80.QueryBalanceResponse>;
                allBalances(request: _80.QueryAllBalancesRequest): Promise<_80.QueryAllBalancesResponse>;
                spendableBalances(request: _80.QuerySpendableBalancesRequest): Promise<_80.QuerySpendableBalancesResponse>;
                totalSupply(request?: _80.QueryTotalSupplyRequest): Promise<_80.QueryTotalSupplyResponse>;
                supplyOf(request: _80.QuerySupplyOfRequest): Promise<_80.QuerySupplyOfResponse>;
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                denomMetadata(request: _80.QueryDenomMetadataRequest): Promise<_80.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _80.QueryDenomsMetadataRequest): Promise<_80.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _81.MsgSend) => {
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
                    }) => _81.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _81.MsgMultiSend) => {
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
                    }) => _81.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _81.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgSend;
                fromPartial(object: Partial<_81.MsgSend>): _81.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _81.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgSendResponse;
                fromPartial(_: Partial<_81.MsgSendResponse>): _81.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _81.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgMultiSend;
                fromPartial(object: Partial<_81.MsgMultiSend>): _81.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _81.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgMultiSendResponse;
                fromPartial(_: Partial<_81.MsgMultiSendResponse>): _81.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _80.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryBalanceRequest;
                fromPartial(object: Partial<_80.QueryBalanceRequest>): _80.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _80.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryBalanceResponse;
                fromPartial(object: Partial<_80.QueryBalanceResponse>): _80.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _80.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryAllBalancesRequest;
                fromPartial(object: Partial<_80.QueryAllBalancesRequest>): _80.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _80.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryAllBalancesResponse;
                fromPartial(object: Partial<_80.QueryAllBalancesResponse>): _80.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _80.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_80.QuerySpendableBalancesRequest>): _80.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _80.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_80.QuerySpendableBalancesResponse>): _80.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _80.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_80.QueryTotalSupplyRequest>): _80.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _80.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_80.QueryTotalSupplyResponse>): _80.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _80.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySupplyOfRequest;
                fromPartial(object: Partial<_80.QuerySupplyOfRequest>): _80.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _80.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySupplyOfResponse;
                fromPartial(object: Partial<_80.QuerySupplyOfResponse>): _80.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.QueryParamsRequest;
                fromPartial(_: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryParamsResponse;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _80.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_80.QueryDenomsMetadataRequest>): _80.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _80.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_80.QueryDenomsMetadataResponse>): _80.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _80.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_80.QueryDenomMetadataRequest>): _80.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _80.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_80.QueryDenomMetadataResponse>): _80.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
            Balance: {
                encode(message: _79.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Balance;
                fromPartial(object: Partial<_79.Balance>): _79.Balance;
            };
            Params: {
                encode(message: _78.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Params;
                fromPartial(object: Partial<_78.Params>): _78.Params;
            };
            SendEnabled: {
                encode(message: _78.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.SendEnabled;
                fromPartial(object: Partial<_78.SendEnabled>): _78.SendEnabled;
            };
            Input: {
                encode(message: _78.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Input;
                fromPartial(object: Partial<_78.Input>): _78.Input;
            };
            Output: {
                encode(message: _78.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Output;
                fromPartial(object: Partial<_78.Output>): _78.Output;
            };
            Supply: {
                encode(message: _78.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Supply;
                fromPartial(object: Partial<_78.Supply>): _78.Supply;
            };
            DenomUnit: {
                encode(message: _78.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.DenomUnit;
                fromPartial(object: Partial<_78.DenomUnit>): _78.DenomUnit;
            };
            Metadata: {
                encode(message: _78.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Metadata;
                fromPartial(object: Partial<_78.Metadata>): _78.Metadata;
            };
            SendAuthorization: {
                encode(message: _77.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.SendAuthorization;
                fromPartial(object: Partial<_77.SendAuthorization>): _77.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _82.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.TxResponse;
                    fromPartial(object: Partial<_82.TxResponse>): _82.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _82.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.ABCIMessageLog;
                    fromPartial(object: Partial<_82.ABCIMessageLog>): _82.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _82.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.StringEvent;
                    fromPartial(object: Partial<_82.StringEvent>): _82.StringEvent;
                };
                Attribute: {
                    encode(message: _82.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Attribute;
                    fromPartial(object: Partial<_82.Attribute>): _82.Attribute;
                };
                GasInfo: {
                    encode(message: _82.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.GasInfo;
                    fromPartial(object: Partial<_82.GasInfo>): _82.GasInfo;
                };
                Result: {
                    encode(message: _82.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Result;
                    fromPartial(object: Partial<_82.Result>): _82.Result;
                };
                SimulationResponse: {
                    encode(message: _82.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SimulationResponse;
                    fromPartial(object: Partial<_82.SimulationResponse>): _82.SimulationResponse;
                };
                MsgData: {
                    encode(message: _82.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.MsgData;
                    fromPartial(object: Partial<_82.MsgData>): _82.MsgData;
                };
                TxMsgData: {
                    encode(message: _82.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.TxMsgData;
                    fromPartial(object: Partial<_82.TxMsgData>): _82.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _82.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SearchTxsResult;
                    fromPartial(object: Partial<_82.SearchTxsResult>): _82.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _83.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.Pairs;
                    fromPartial(object: Partial<_83.Pairs>): _83.Pairs;
                };
                Pair: {
                    encode(message: _83.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.Pair;
                    fromPartial(object: Partial<_83.Pair>): _83.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _209.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _84.ConfigRequest): Promise<_84.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _84.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _84.ConfigRequest;
                    fromPartial(_: Partial<_84.ConfigRequest>): _84.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _84.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.ConfigResponse;
                    fromPartial(object: Partial<_84.ConfigResponse>): _84.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _85.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.PageRequest;
                    fromPartial(object: Partial<_85.PageRequest>): _85.PageRequest;
                };
                PageResponse: {
                    encode(message: _85.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.PageResponse;
                    fromPartial(object: Partial<_85.PageResponse>): _85.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _86.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_86.ListAllInterfacesRequest>): _86.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _86.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_86.ListAllInterfacesResponse>): _86.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _86.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.ListImplementationsRequest;
                    fromPartial(object: Partial<_86.ListImplementationsRequest>): _86.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _86.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.ListImplementationsResponse;
                    fromPartial(object: Partial<_86.ListImplementationsResponse>): _86.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _87.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.AppDescriptor;
                    fromPartial(object: Partial<_87.AppDescriptor>): _87.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _87.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.TxDescriptor;
                    fromPartial(object: Partial<_87.TxDescriptor>): _87.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _87.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.AuthnDescriptor;
                    fromPartial(object: Partial<_87.AuthnDescriptor>): _87.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _87.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SigningModeDescriptor;
                    fromPartial(object: Partial<_87.SigningModeDescriptor>): _87.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _87.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.ChainDescriptor;
                    fromPartial(object: Partial<_87.ChainDescriptor>): _87.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _87.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.CodecDescriptor;
                    fromPartial(object: Partial<_87.CodecDescriptor>): _87.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _87.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.InterfaceDescriptor;
                    fromPartial(object: Partial<_87.InterfaceDescriptor>): _87.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _87.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_87.InterfaceImplementerDescriptor>): _87.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _87.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_87.InterfaceAcceptingMessageDescriptor>): _87.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _87.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.ConfigurationDescriptor;
                    fromPartial(object: Partial<_87.ConfigurationDescriptor>): _87.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _87.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.MsgDescriptor;
                    fromPartial(object: Partial<_87.MsgDescriptor>): _87.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _87.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_87.GetAuthnDescriptorRequest>): _87.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _87.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_87.GetAuthnDescriptorResponse>): _87.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _87.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_87.GetChainDescriptorRequest>): _87.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _87.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_87.GetChainDescriptorResponse>): _87.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _87.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_87.GetCodecDescriptorRequest>): _87.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _87.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_87.GetCodecDescriptorResponse>): _87.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _87.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_87.GetConfigurationDescriptorRequest>): _87.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _87.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_87.GetConfigurationDescriptorResponse>): _87.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _87.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_87.GetQueryServicesDescriptorRequest>): _87.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _87.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_87.GetQueryServicesDescriptorResponse>): _87.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _87.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_87.GetTxDescriptorRequest>): _87.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _87.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_87.GetTxDescriptorResponse>): _87.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _87.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryServicesDescriptor;
                    fromPartial(object: Partial<_87.QueryServicesDescriptor>): _87.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _87.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryServiceDescriptor;
                    fromPartial(object: Partial<_87.QueryServiceDescriptor>): _87.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _87.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryMethodDescriptor;
                    fromPartial(object: Partial<_87.QueryMethodDescriptor>): _87.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _88.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.Snapshot;
                    fromPartial(object: Partial<_88.Snapshot>): _88.Snapshot;
                };
                Metadata: {
                    encode(message: _88.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.Metadata;
                    fromPartial(object: Partial<_88.Metadata>): _88.Metadata;
                };
                SnapshotItem: {
                    encode(message: _88.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SnapshotItem;
                    fromPartial(object: Partial<_88.SnapshotItem>): _88.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _88.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SnapshotStoreItem;
                    fromPartial(object: Partial<_88.SnapshotStoreItem>): _88.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _88.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SnapshotIAVLItem;
                    fromPartial(object: Partial<_88.SnapshotIAVLItem>): _88.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _88.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_88.SnapshotExtensionMeta>): _88.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _88.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_88.SnapshotExtensionPayload>): _88.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _90.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.StoreKVPair;
                    fromPartial(object: Partial<_90.StoreKVPair>): _90.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _89.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.CommitInfo;
                    fromPartial(object: Partial<_89.CommitInfo>): _89.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _89.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.StoreInfo;
                    fromPartial(object: Partial<_89.StoreInfo>): _89.StoreInfo;
                };
                CommitID: {
                    encode(message: _89.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.CommitID;
                    fromPartial(object: Partial<_89.CommitID>): _89.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _91.GetNodeInfoRequest): Promise<_91.GetNodeInfoResponse>;
                    getSyncing(request?: _91.GetSyncingRequest): Promise<_91.GetSyncingResponse>;
                    getLatestBlock(request?: _91.GetLatestBlockRequest): Promise<_91.GetLatestBlockResponse>;
                    getBlockByHeight(request: _91.GetBlockByHeightRequest): Promise<_91.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _91.GetLatestValidatorSetRequest): Promise<_91.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _91.GetValidatorSetByHeightRequest): Promise<_91.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _91.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_91.GetValidatorSetByHeightRequest>): _91.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _91.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_91.GetValidatorSetByHeightResponse>): _91.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _91.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_91.GetLatestValidatorSetRequest>): _91.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _91.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_91.GetLatestValidatorSetResponse>): _91.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _91.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Validator;
                    fromPartial(object: Partial<_91.Validator>): _91.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _91.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_91.GetBlockByHeightRequest>): _91.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _91.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_91.GetBlockByHeightResponse>): _91.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _91.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.GetLatestBlockRequest;
                    fromPartial(_: Partial<_91.GetLatestBlockRequest>): _91.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _91.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetLatestBlockResponse;
                    fromPartial(object: Partial<_91.GetLatestBlockResponse>): _91.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _91.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.GetSyncingRequest;
                    fromPartial(_: Partial<_91.GetSyncingRequest>): _91.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _91.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetSyncingResponse;
                    fromPartial(object: Partial<_91.GetSyncingResponse>): _91.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _91.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.GetNodeInfoRequest;
                    fromPartial(_: Partial<_91.GetNodeInfoRequest>): _91.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _91.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.GetNodeInfoResponse;
                    fromPartial(object: Partial<_91.GetNodeInfoResponse>): _91.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _91.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.VersionInfo;
                    fromPartial(object: Partial<_91.VersionInfo>): _91.VersionInfo;
                };
                Module: {
                    encode(message: _91.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Module;
                    fromPartial(object: Partial<_91.Module>): _91.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _92.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Coin;
                fromPartial(object: Partial<_92.Coin>): _92.Coin;
            };
            DecCoin: {
                encode(message: _92.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.DecCoin;
                fromPartial(object: Partial<_92.DecCoin>): _92.DecCoin;
            };
            IntProto: {
                encode(message: _92.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.IntProto;
                fromPartial(object: Partial<_92.IntProto>): _92.IntProto;
            };
            DecProto: {
                encode(message: _92.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.DecProto;
                fromPartial(object: Partial<_92.DecProto>): _92.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _94.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GenesisOwners;
                fromPartial(object: Partial<_94.GenesisOwners>): _94.GenesisOwners;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
            };
            Capability: {
                encode(message: _93.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Capability;
                fromPartial(object: Partial<_93.Capability>): _93.Capability;
            };
            Owner: {
                encode(message: _93.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Owner;
                fromPartial(object: Partial<_93.Owner>): _93.Owner;
            };
            CapabilityOwners: {
                encode(message: _93.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.CapabilityOwners;
                fromPartial(object: Partial<_93.CapabilityOwners>): _93.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _96.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _96.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _96.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgVerifyInvariant;
                fromPartial(object: Partial<_96.MsgVerifyInvariant>): _96.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _96.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_96.MsgVerifyInvariantResponse>): _96.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _97.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.PubKey;
                fromPartial(object: Partial<_97.PubKey>): _97.PubKey;
            };
            PrivKey: {
                encode(message: _97.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.PrivKey;
                fromPartial(object: Partial<_97.PrivKey>): _97.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _98.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.LegacyAminoPubKey;
                fromPartial(object: Partial<_98.LegacyAminoPubKey>): _98.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _99.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.PubKey;
                fromPartial(object: Partial<_99.PubKey>): _99.PubKey;
            };
            PrivKey: {
                encode(message: _99.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.PrivKey;
                fromPartial(object: Partial<_99.PrivKey>): _99.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _100.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.PubKey;
                fromPartial(object: Partial<_100.PubKey>): _100.PubKey;
            };
            PrivKey: {
                encode(message: _100.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.PrivKey;
                fromPartial(object: Partial<_100.PrivKey>): _100.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _104.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _104.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _104.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _104.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _104.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _104.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _104.MsgFundCommunityPool) => {
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
                    }) => _104.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _104.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_104.MsgSetWithdrawAddress>): _104.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _104.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_104.MsgSetWithdrawAddressResponse>): _104.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _104.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_104.MsgWithdrawDelegatorReward>): _104.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _104.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_104.MsgWithdrawDelegatorRewardResponse>): _104.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _104.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_104.MsgWithdrawValidatorCommission>): _104.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _104.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_104.MsgWithdrawValidatorCommissionResponse>): _104.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _104.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgFundCommunityPool;
                fromPartial(object: Partial<_104.MsgFundCommunityPool>): _104.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _104.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_104.MsgFundCommunityPoolResponse>): _104.MsgFundCommunityPoolResponse;
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _103.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsRequest>): _103.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _103.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsResponse>): _103.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _103.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_103.QueryValidatorCommissionRequest>): _103.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _103.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_103.QueryValidatorCommissionResponse>): _103.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _103.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_103.QueryValidatorSlashesRequest>): _103.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _103.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_103.QueryValidatorSlashesResponse>): _103.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _103.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationRewardsRequest>): _103.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _103.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationRewardsResponse>): _103.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _103.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsRequest>): _103.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _103.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsResponse>): _103.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _103.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsRequest>): _103.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _103.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsResponse>): _103.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _103.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressRequest>): _103.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _103.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressResponse>): _103.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _103.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _103.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_103.QueryCommunityPoolRequest>): _103.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _103.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_103.QueryCommunityPoolResponse>): _103.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _102.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_102.DelegatorWithdrawInfo>): _102.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _102.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorOutstandingRewardsRecord>): _102.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _102.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_102.ValidatorAccumulatedCommissionRecord>): _102.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _102.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorHistoricalRewardsRecord>): _102.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _102.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorCurrentRewardsRecord>): _102.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _102.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_102.DelegatorStartingInfoRecord>): _102.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _102.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_102.ValidatorSlashEventRecord>): _102.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.Params;
                fromPartial(object: Partial<_101.Params>): _101.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _101.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_101.ValidatorHistoricalRewards>): _101.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _101.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorCurrentRewards;
                fromPartial(object: Partial<_101.ValidatorCurrentRewards>): _101.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _101.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_101.ValidatorAccumulatedCommission>): _101.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _101.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_101.ValidatorOutstandingRewards>): _101.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _101.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorSlashEvent;
                fromPartial(object: Partial<_101.ValidatorSlashEvent>): _101.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _101.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ValidatorSlashEvents;
                fromPartial(object: Partial<_101.ValidatorSlashEvents>): _101.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _101.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.FeePool;
                fromPartial(object: Partial<_101.FeePool>): _101.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _101.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposal>): _101.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _101.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.DelegatorStartingInfo;
                fromPartial(object: Partial<_101.DelegatorStartingInfo>): _101.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _101.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.DelegationDelegatorReward;
                fromPartial(object: Partial<_101.DelegationDelegatorReward>): _101.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _101.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposalWithDeposit>): _101.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _108.MsgSubmitEvidence) => {
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
                    }) => _108.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _108.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.MsgSubmitEvidence;
                fromPartial(object: Partial<_108.MsgSubmitEvidence>): _108.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _108.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_108.MsgSubmitEvidenceResponse>): _108.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _107.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QueryEvidenceRequest;
                fromPartial(object: Partial<_107.QueryEvidenceRequest>): _107.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _107.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QueryEvidenceResponse;
                fromPartial(object: Partial<_107.QueryEvidenceResponse>): _107.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _107.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_107.QueryAllEvidenceRequest>): _107.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _107.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_107.QueryAllEvidenceResponse>): _107.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            Equivocation: {
                encode(message: _105.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Equivocation;
                fromPartial(object: Partial<_105.Equivocation>): _105.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _111.QueryAllowanceRequest): Promise<_111.QueryAllowanceResponse>;
                allowances(request: _111.QueryAllowancesRequest): Promise<_111.QueryAllowancesResponse>;
                allowancesByGranter(request: _111.QueryAllowancesByGranterRequest): Promise<_111.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _112.MsgGrantAllowance) => {
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
                    }) => _112.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _112.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _112.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _112.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.MsgGrantAllowance;
                fromPartial(object: Partial<_112.MsgGrantAllowance>): _112.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _112.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _112.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_112.MsgGrantAllowanceResponse>): _112.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _112.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.MsgRevokeAllowance;
                fromPartial(object: Partial<_112.MsgRevokeAllowance>): _112.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _112.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _112.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_112.MsgRevokeAllowanceResponse>): _112.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _111.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowanceRequest;
                fromPartial(object: Partial<_111.QueryAllowanceRequest>): _111.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _111.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowanceResponse;
                fromPartial(object: Partial<_111.QueryAllowanceResponse>): _111.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _111.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowancesRequest;
                fromPartial(object: Partial<_111.QueryAllowancesRequest>): _111.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _111.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowancesResponse;
                fromPartial(object: Partial<_111.QueryAllowancesResponse>): _111.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _111.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_111.QueryAllowancesByGranterRequest>): _111.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _111.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_111.QueryAllowancesByGranterResponse>): _111.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
            };
            BasicAllowance: {
                encode(message: _109.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.BasicAllowance;
                fromPartial(object: Partial<_109.BasicAllowance>): _109.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _109.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.PeriodicAllowance;
                fromPartial(object: Partial<_109.PeriodicAllowance>): _109.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _109.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.AllowedMsgAllowance;
                fromPartial(object: Partial<_109.AllowedMsgAllowance>): _109.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _109.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Grant;
                fromPartial(object: Partial<_109.Grant>): _109.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _116.QueryProposalRequest): Promise<_116.QueryProposalResponse>;
                proposals(request: _116.QueryProposalsRequest): Promise<_116.QueryProposalsResponse>;
                vote(request: _116.QueryVoteRequest): Promise<_116.QueryVoteResponse>;
                votes(request: _116.QueryVotesRequest): Promise<_116.QueryVotesResponse>;
                params(request: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                deposit(request: _116.QueryDepositRequest): Promise<_116.QueryDepositResponse>;
                deposits(request: _116.QueryDepositsRequest): Promise<_116.QueryDepositsResponse>;
                tallyResult(request: _116.QueryTallyResultRequest): Promise<_116.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _117.MsgSubmitProposal) => {
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
                    }) => _117.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _117.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _117.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _117.MsgVoteWeighted) => {
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
                    }) => _117.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _117.MsgDeposit) => {
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
                    }) => _117.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _117.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgSubmitProposal;
                fromPartial(object: Partial<_117.MsgSubmitProposal>): _117.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _117.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_117.MsgSubmitProposalResponse>): _117.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _117.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgVote;
                fromPartial(object: Partial<_117.MsgVote>): _117.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _117.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgVoteResponse;
                fromPartial(_: Partial<_117.MsgVoteResponse>): _117.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _117.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgVoteWeighted;
                fromPartial(object: Partial<_117.MsgVoteWeighted>): _117.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _117.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_117.MsgVoteWeightedResponse>): _117.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _117.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgDeposit;
                fromPartial(object: Partial<_117.MsgDeposit>): _117.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _117.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgDepositResponse;
                fromPartial(_: Partial<_117.MsgDepositResponse>): _117.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _116.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryProposalRequest;
                fromPartial(object: Partial<_116.QueryProposalRequest>): _116.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _116.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryProposalResponse;
                fromPartial(object: Partial<_116.QueryProposalResponse>): _116.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _116.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryProposalsRequest;
                fromPartial(object: Partial<_116.QueryProposalsRequest>): _116.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _116.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryProposalsResponse;
                fromPartial(object: Partial<_116.QueryProposalsResponse>): _116.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _116.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryVoteRequest;
                fromPartial(object: Partial<_116.QueryVoteRequest>): _116.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _116.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryVoteResponse;
                fromPartial(object: Partial<_116.QueryVoteResponse>): _116.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _116.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryVotesRequest;
                fromPartial(object: Partial<_116.QueryVotesRequest>): _116.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _116.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryVotesResponse;
                fromPartial(object: Partial<_116.QueryVotesResponse>): _116.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _116.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryParamsRequest;
                fromPartial(object: Partial<_116.QueryParamsRequest>): _116.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _116.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryParamsResponse;
                fromPartial(object: Partial<_116.QueryParamsResponse>): _116.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _116.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryDepositRequest;
                fromPartial(object: Partial<_116.QueryDepositRequest>): _116.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _116.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryDepositResponse;
                fromPartial(object: Partial<_116.QueryDepositResponse>): _116.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _116.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryDepositsRequest;
                fromPartial(object: Partial<_116.QueryDepositsRequest>): _116.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _116.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryDepositsResponse;
                fromPartial(object: Partial<_116.QueryDepositsResponse>): _116.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _116.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryTallyResultRequest;
                fromPartial(object: Partial<_116.QueryTallyResultRequest>): _116.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _116.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryTallyResultResponse;
                fromPartial(object: Partial<_116.QueryTallyResultResponse>): _116.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _115.VoteOption;
            voteOptionToJSON(object: _115.VoteOption): string;
            proposalStatusFromJSON(object: any): _115.ProposalStatus;
            proposalStatusToJSON(object: _115.ProposalStatus): string;
            VoteOption: typeof _115.VoteOption;
            VoteOptionSDKType: typeof _115.VoteOption;
            ProposalStatus: typeof _115.ProposalStatus;
            ProposalStatusSDKType: typeof _115.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _115.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.WeightedVoteOption;
                fromPartial(object: Partial<_115.WeightedVoteOption>): _115.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _115.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.TextProposal;
                fromPartial(object: Partial<_115.TextProposal>): _115.TextProposal;
            };
            Deposit: {
                encode(message: _115.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.Deposit;
                fromPartial(object: Partial<_115.Deposit>): _115.Deposit;
            };
            Proposal: {
                encode(message: _115.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.Proposal;
                fromPartial(object: Partial<_115.Proposal>): _115.Proposal;
            };
            TallyResult: {
                encode(message: _115.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.TallyResult;
                fromPartial(object: Partial<_115.TallyResult>): _115.TallyResult;
            };
            Vote: {
                encode(message: _115.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.Vote;
                fromPartial(object: Partial<_115.Vote>): _115.Vote;
            };
            DepositParams: {
                encode(message: _115.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.DepositParams;
                fromPartial(object: Partial<_115.DepositParams>): _115.DepositParams;
            };
            VotingParams: {
                encode(message: _115.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.VotingParams;
                fromPartial(object: Partial<_115.VotingParams>): _115.VotingParams;
            };
            TallyParams: {
                encode(message: _115.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.TallyParams;
                fromPartial(object: Partial<_115.TallyParams>): _115.TallyParams;
            };
            GenesisState: {
                encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.GenesisState;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                inflation(request?: _120.QueryInflationRequest): Promise<_120.QueryInflationResponse>;
                annualProvisions(request?: _120.QueryAnnualProvisionsRequest): Promise<_120.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _120.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.QueryParamsRequest;
                fromPartial(_: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _120.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _120.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.QueryInflationRequest;
                fromPartial(_: Partial<_120.QueryInflationRequest>): _120.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _120.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.QueryInflationResponse;
                fromPartial(object: Partial<_120.QueryInflationResponse>): _120.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _120.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_120.QueryAnnualProvisionsRequest>): _120.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _120.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_120.QueryAnnualProvisionsResponse>): _120.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _119.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Minter;
                fromPartial(object: Partial<_119.Minter>): _119.Minter;
            };
            Params: {
                encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
            };
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryParamsRequest;
                fromPartial(object: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _121.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.ParameterChangeProposal;
                fromPartial(object: Partial<_121.ParameterChangeProposal>): _121.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _121.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.ParamChange;
                fromPartial(object: Partial<_121.ParamChange>): _121.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                signingInfo(request: _124.QuerySigningInfoRequest): Promise<_124.QuerySigningInfoResponse>;
                signingInfos(request?: _124.QuerySigningInfosRequest): Promise<_124.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _126.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _126.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _126.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgUnjail;
                fromPartial(object: Partial<_126.MsgUnjail>): _126.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _126.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgUnjailResponse;
                fromPartial(_: Partial<_126.MsgUnjailResponse>): _126.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _125.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.ValidatorSigningInfo;
                fromPartial(object: Partial<_125.ValidatorSigningInfo>): _125.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Params;
                fromPartial(object: Partial<_125.Params>): _125.Params;
            };
            QueryParamsRequest: {
                encode(_: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.QueryParamsRequest;
                fromPartial(_: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryParamsResponse;
                fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _124.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QuerySigningInfoRequest;
                fromPartial(object: Partial<_124.QuerySigningInfoRequest>): _124.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _124.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QuerySigningInfoResponse;
                fromPartial(object: Partial<_124.QuerySigningInfoResponse>): _124.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _124.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QuerySigningInfosRequest;
                fromPartial(object: Partial<_124.QuerySigningInfosRequest>): _124.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _124.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QuerySigningInfosResponse;
                fromPartial(object: Partial<_124.QuerySigningInfosResponse>): _124.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
            };
            SigningInfo: {
                encode(message: _123.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.SigningInfo;
                fromPartial(object: Partial<_123.SigningInfo>): _123.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _123.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.ValidatorMissedBlocks;
                fromPartial(object: Partial<_123.ValidatorMissedBlocks>): _123.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _123.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MissedBlock;
                fromPartial(object: Partial<_123.MissedBlock>): _123.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _129.QueryValidatorsRequest): Promise<_129.QueryValidatorsResponse>;
                validator(request: _129.QueryValidatorRequest): Promise<_129.QueryValidatorResponse>;
                validatorDelegations(request: _129.QueryValidatorDelegationsRequest): Promise<_129.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _129.QueryValidatorUnbondingDelegationsRequest): Promise<_129.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _129.QueryDelegationRequest): Promise<_129.QueryDelegationResponse>;
                unbondingDelegation(request: _129.QueryUnbondingDelegationRequest): Promise<_129.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _129.QueryDelegatorDelegationsRequest): Promise<_129.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _129.QueryDelegatorUnbondingDelegationsRequest): Promise<_129.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _129.QueryRedelegationsRequest): Promise<_129.QueryRedelegationsResponse>;
                delegatorValidators(request: _129.QueryDelegatorValidatorsRequest): Promise<_129.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _129.QueryDelegatorValidatorRequest): Promise<_129.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _129.QueryHistoricalInfoRequest): Promise<_129.QueryHistoricalInfoResponse>;
                pool(request?: _129.QueryPoolRequest): Promise<_129.QueryPoolResponse>;
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _131.MsgCreateValidator) => {
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
                    }) => _131.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _131.MsgEditValidator) => {
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
                    }) => _131.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _131.MsgDelegate) => {
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
                    }) => _131.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _131.MsgBeginRedelegate) => {
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
                    }) => _131.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _131.MsgUndelegate) => {
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
                    }) => _131.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _131.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgCreateValidator;
                fromPartial(object: Partial<_131.MsgCreateValidator>): _131.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _131.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_131.MsgCreateValidatorResponse>): _131.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _131.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgEditValidator;
                fromPartial(object: Partial<_131.MsgEditValidator>): _131.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _131.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgEditValidatorResponse;
                fromPartial(_: Partial<_131.MsgEditValidatorResponse>): _131.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _131.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgDelegate;
                fromPartial(object: Partial<_131.MsgDelegate>): _131.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _131.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgDelegateResponse;
                fromPartial(_: Partial<_131.MsgDelegateResponse>): _131.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _131.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgBeginRedelegate;
                fromPartial(object: Partial<_131.MsgBeginRedelegate>): _131.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _131.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_131.MsgBeginRedelegateResponse>): _131.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _131.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgUndelegate;
                fromPartial(object: Partial<_131.MsgUndelegate>): _131.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _131.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgUndelegateResponse;
                fromPartial(object: Partial<_131.MsgUndelegateResponse>): _131.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _130.BondStatus;
            bondStatusToJSON(object: _130.BondStatus): string;
            BondStatus: typeof _130.BondStatus;
            BondStatusSDKType: typeof _130.BondStatus;
            HistoricalInfo: {
                encode(message: _130.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.HistoricalInfo;
                fromPartial(object: Partial<_130.HistoricalInfo>): _130.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _130.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.CommissionRates;
                fromPartial(object: Partial<_130.CommissionRates>): _130.CommissionRates;
            };
            Commission: {
                encode(message: _130.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Commission;
                fromPartial(object: Partial<_130.Commission>): _130.Commission;
            };
            Description: {
                encode(message: _130.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Description;
                fromPartial(object: Partial<_130.Description>): _130.Description;
            };
            Validator: {
                encode(message: _130.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Validator;
                fromPartial(object: Partial<_130.Validator>): _130.Validator;
            };
            ValAddresses: {
                encode(message: _130.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.ValAddresses;
                fromPartial(object: Partial<_130.ValAddresses>): _130.ValAddresses;
            };
            DVPair: {
                encode(message: _130.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.DVPair;
                fromPartial(object: Partial<_130.DVPair>): _130.DVPair;
            };
            DVPairs: {
                encode(message: _130.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.DVPairs;
                fromPartial(object: Partial<_130.DVPairs>): _130.DVPairs;
            };
            DVVTriplet: {
                encode(message: _130.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.DVVTriplet;
                fromPartial(object: Partial<_130.DVVTriplet>): _130.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _130.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.DVVTriplets;
                fromPartial(object: Partial<_130.DVVTriplets>): _130.DVVTriplets;
            };
            Delegation: {
                encode(message: _130.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Delegation;
                fromPartial(object: Partial<_130.Delegation>): _130.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _130.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.UnbondingDelegation;
                fromPartial(object: Partial<_130.UnbondingDelegation>): _130.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _130.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.UnbondingDelegationEntry;
                fromPartial(object: Partial<_130.UnbondingDelegationEntry>): _130.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _130.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.RedelegationEntry;
                fromPartial(object: Partial<_130.RedelegationEntry>): _130.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _130.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Redelegation;
                fromPartial(object: Partial<_130.Redelegation>): _130.Redelegation;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Params;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            DelegationResponse: {
                encode(message: _130.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.DelegationResponse;
                fromPartial(object: Partial<_130.DelegationResponse>): _130.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _130.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.RedelegationEntryResponse;
                fromPartial(object: Partial<_130.RedelegationEntryResponse>): _130.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _130.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.RedelegationResponse;
                fromPartial(object: Partial<_130.RedelegationResponse>): _130.RedelegationResponse;
            };
            Pool: {
                encode(message: _130.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Pool;
                fromPartial(object: Partial<_130.Pool>): _130.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _129.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorsRequest;
                fromPartial(object: Partial<_129.QueryValidatorsRequest>): _129.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _129.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorsResponse;
                fromPartial(object: Partial<_129.QueryValidatorsResponse>): _129.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _129.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorRequest;
                fromPartial(object: Partial<_129.QueryValidatorRequest>): _129.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _129.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorResponse;
                fromPartial(object: Partial<_129.QueryValidatorResponse>): _129.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _129.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_129.QueryValidatorDelegationsRequest>): _129.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _129.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_129.QueryValidatorDelegationsResponse>): _129.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _129.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_129.QueryValidatorUnbondingDelegationsRequest>): _129.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _129.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_129.QueryValidatorUnbondingDelegationsResponse>): _129.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _129.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegationRequest;
                fromPartial(object: Partial<_129.QueryDelegationRequest>): _129.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _129.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegationResponse;
                fromPartial(object: Partial<_129.QueryDelegationResponse>): _129.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _129.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_129.QueryUnbondingDelegationRequest>): _129.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _129.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_129.QueryUnbondingDelegationResponse>): _129.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _129.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorDelegationsRequest>): _129.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _129.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorDelegationsResponse>): _129.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _129.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorUnbondingDelegationsRequest>): _129.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _129.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorUnbondingDelegationsResponse>): _129.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _129.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryRedelegationsRequest;
                fromPartial(object: Partial<_129.QueryRedelegationsRequest>): _129.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _129.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryRedelegationsResponse;
                fromPartial(object: Partial<_129.QueryRedelegationsResponse>): _129.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _129.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorsRequest>): _129.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _129.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorsResponse>): _129.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _129.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorRequest>): _129.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _129.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorResponse>): _129.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _129.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_129.QueryHistoricalInfoRequest>): _129.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _129.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_129.QueryHistoricalInfoResponse>): _129.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _129.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _129.QueryPoolRequest;
                fromPartial(_: Partial<_129.QueryPoolRequest>): _129.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _129.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryPoolResponse;
                fromPartial(object: Partial<_129.QueryPoolResponse>): _129.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _129.QueryParamsRequest;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.QueryParamsResponse;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _128.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.LastValidatorPower;
                fromPartial(object: Partial<_128.LastValidatorPower>): _128.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _127.AuthorizationType;
            authorizationTypeToJSON(object: _127.AuthorizationType): string;
            AuthorizationType: typeof _127.AuthorizationType;
            AuthorizationTypeSDKType: typeof _127.AuthorizationType;
            StakeAuthorization: {
                encode(message: _127.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.StakeAuthorization;
                fromPartial(object: Partial<_127.StakeAuthorization>): _127.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _127.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.StakeAuthorization_Validators;
                fromPartial(object: Partial<_127.StakeAuthorization_Validators>): _127.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _132.SignMode;
                signModeToJSON(object: _132.SignMode): string;
                SignMode: typeof _132.SignMode;
                SignModeSDKType: typeof _132.SignMode;
                SignatureDescriptors: {
                    encode(message: _132.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.SignatureDescriptors;
                    fromPartial(object: Partial<_132.SignatureDescriptors>): _132.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _132.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.SignatureDescriptor;
                    fromPartial(object: Partial<_132.SignatureDescriptor>): _132.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _132.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data>): _132.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _132.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data_Single>): _132.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _132.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _132.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data_Multi>): _132.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _219.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _133.SimulateRequest): Promise<_133.SimulateResponse>;
                getTx(request: _133.GetTxRequest): Promise<_133.GetTxResponse>;
                broadcastTx(request: _133.BroadcastTxRequest): Promise<_133.BroadcastTxResponse>;
                getTxsEvent(request: _133.GetTxsEventRequest): Promise<_133.GetTxsEventResponse>;
                getBlockWithTxs(request: _133.GetBlockWithTxsRequest): Promise<_133.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _134.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Tx;
                fromPartial(object: Partial<_134.Tx>): _134.Tx;
            };
            TxRaw: {
                encode(message: _134.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.TxRaw;
                fromPartial(object: Partial<_134.TxRaw>): _134.TxRaw;
            };
            SignDoc: {
                encode(message: _134.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.SignDoc;
                fromPartial(object: Partial<_134.SignDoc>): _134.SignDoc;
            };
            TxBody: {
                encode(message: _134.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.TxBody;
                fromPartial(object: Partial<_134.TxBody>): _134.TxBody;
            };
            AuthInfo: {
                encode(message: _134.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.AuthInfo;
                fromPartial(object: Partial<_134.AuthInfo>): _134.AuthInfo;
            };
            SignerInfo: {
                encode(message: _134.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.SignerInfo;
                fromPartial(object: Partial<_134.SignerInfo>): _134.SignerInfo;
            };
            ModeInfo: {
                encode(message: _134.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ModeInfo;
                fromPartial(object: Partial<_134.ModeInfo>): _134.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _134.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ModeInfo_Single;
                fromPartial(object: Partial<_134.ModeInfo_Single>): _134.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _134.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ModeInfo_Multi;
                fromPartial(object: Partial<_134.ModeInfo_Multi>): _134.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _134.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Fee;
                fromPartial(object: Partial<_134.Fee>): _134.Fee;
            };
            orderByFromJSON(object: any): _133.OrderBy;
            orderByToJSON(object: _133.OrderBy): string;
            broadcastModeFromJSON(object: any): _133.BroadcastMode;
            broadcastModeToJSON(object: _133.BroadcastMode): string;
            OrderBy: typeof _133.OrderBy;
            OrderBySDKType: typeof _133.OrderBy;
            BroadcastMode: typeof _133.BroadcastMode;
            BroadcastModeSDKType: typeof _133.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _133.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetTxsEventRequest;
                fromPartial(object: Partial<_133.GetTxsEventRequest>): _133.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _133.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetTxsEventResponse;
                fromPartial(object: Partial<_133.GetTxsEventResponse>): _133.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _133.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.BroadcastTxRequest;
                fromPartial(object: Partial<_133.BroadcastTxRequest>): _133.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _133.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.BroadcastTxResponse;
                fromPartial(object: Partial<_133.BroadcastTxResponse>): _133.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _133.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.SimulateRequest;
                fromPartial(object: Partial<_133.SimulateRequest>): _133.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _133.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.SimulateResponse;
                fromPartial(object: Partial<_133.SimulateResponse>): _133.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _133.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetTxRequest;
                fromPartial(object: Partial<_133.GetTxRequest>): _133.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _133.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetTxResponse;
                fromPartial(object: Partial<_133.GetTxResponse>): _133.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _133.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_133.GetBlockWithTxsRequest>): _133.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _133.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_133.GetBlockWithTxsResponse>): _133.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _135.QueryCurrentPlanRequest): Promise<_135.QueryCurrentPlanResponse>;
                appliedPlan(request: _135.QueryAppliedPlanRequest): Promise<_135.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _135.QueryUpgradedConsensusStateRequest): Promise<_135.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _135.QueryModuleVersionsRequest): Promise<_135.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _136.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.Plan;
                fromPartial(object: Partial<_136.Plan>): _136.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _136.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_136.SoftwareUpgradeProposal>): _136.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _136.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_136.CancelSoftwareUpgradeProposal>): _136.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _136.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.ModuleVersion;
                fromPartial(object: Partial<_136.ModuleVersion>): _136.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _135.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _135.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_135.QueryCurrentPlanRequest>): _135.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _135.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_135.QueryCurrentPlanResponse>): _135.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _135.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_135.QueryAppliedPlanRequest>): _135.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _135.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_135.QueryAppliedPlanResponse>): _135.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _135.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_135.QueryUpgradedConsensusStateRequest>): _135.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _135.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_135.QueryUpgradedConsensusStateResponse>): _135.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _135.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_135.QueryModuleVersionsRequest>): _135.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _135.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_135.QueryModuleVersionsResponse>): _135.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _137.MsgCreateVestingAccount) => {
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
                    }) => _137.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _138.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.BaseVestingAccount;
                fromPartial(object: Partial<_138.BaseVestingAccount>): _138.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _138.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.ContinuousVestingAccount;
                fromPartial(object: Partial<_138.ContinuousVestingAccount>): _138.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _138.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.DelayedVestingAccount;
                fromPartial(object: Partial<_138.DelayedVestingAccount>): _138.DelayedVestingAccount;
            };
            Period: {
                encode(message: _138.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.Period;
                fromPartial(object: Partial<_138.Period>): _138.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _138.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.PeriodicVestingAccount;
                fromPartial(object: Partial<_138.PeriodicVestingAccount>): _138.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _138.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.PermanentLockedAccount;
                fromPartial(object: Partial<_138.PermanentLockedAccount>): _138.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _137.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgCreateVestingAccount;
                fromPartial(object: Partial<_137.MsgCreateVestingAccount>): _137.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _137.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_137.MsgCreateVestingAccountResponse>): _137.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _221.MsgClientImpl;
                };
                bank: {
                    v1beta1: _222.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _223.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _224.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _225.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _226.MsgClientImpl;
                };
                gov: {
                    v1beta1: _227.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _228.MsgClientImpl;
                };
                staking: {
                    v1beta1: _229.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _230.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _71.QueryAccountsRequest): Promise<_71.QueryAccountsResponse>;
                        account(request: _71.QueryAccountRequest): Promise<_71.QueryAccountResponse>;
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        moduleAccountByName(request: _71.QueryModuleAccountByNameRequest): Promise<_71.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _75.QueryGrantsRequest): Promise<_75.QueryGrantsResponse>;
                        granterGrants(request: _75.QueryGranterGrantsRequest): Promise<_75.QueryGranterGrantsResponse>;
                        granteeGrants(request: _75.QueryGranteeGrantsRequest): Promise<_75.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _80.QueryBalanceRequest): Promise<_80.QueryBalanceResponse>;
                        allBalances(request: _80.QueryAllBalancesRequest): Promise<_80.QueryAllBalancesResponse>;
                        spendableBalances(request: _80.QuerySpendableBalancesRequest): Promise<_80.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _80.QueryTotalSupplyRequest): Promise<_80.QueryTotalSupplyResponse>;
                        supplyOf(request: _80.QuerySupplyOfRequest): Promise<_80.QuerySupplyOfResponse>;
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        denomMetadata(request: _80.QueryDenomMetadataRequest): Promise<_80.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _80.QueryDenomsMetadataRequest): Promise<_80.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _84.ConfigRequest): Promise<_84.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _91.GetNodeInfoRequest): Promise<_91.GetNodeInfoResponse>;
                            getSyncing(request?: _91.GetSyncingRequest): Promise<_91.GetSyncingResponse>;
                            getLatestBlock(request?: _91.GetLatestBlockRequest): Promise<_91.GetLatestBlockResponse>;
                            getBlockByHeight(request: _91.GetBlockByHeightRequest): Promise<_91.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _91.GetLatestValidatorSetRequest): Promise<_91.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _91.GetValidatorSetByHeightRequest): Promise<_91.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                        allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _111.QueryAllowanceRequest): Promise<_111.QueryAllowanceResponse>;
                        allowances(request: _111.QueryAllowancesRequest): Promise<_111.QueryAllowancesResponse>;
                        allowancesByGranter(request: _111.QueryAllowancesByGranterRequest): Promise<_111.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _116.QueryProposalRequest): Promise<_116.QueryProposalResponse>;
                        proposals(request: _116.QueryProposalsRequest): Promise<_116.QueryProposalsResponse>;
                        vote(request: _116.QueryVoteRequest): Promise<_116.QueryVoteResponse>;
                        votes(request: _116.QueryVotesRequest): Promise<_116.QueryVotesResponse>;
                        params(request: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                        deposit(request: _116.QueryDepositRequest): Promise<_116.QueryDepositResponse>;
                        deposits(request: _116.QueryDepositsRequest): Promise<_116.QueryDepositsResponse>;
                        tallyResult(request: _116.QueryTallyResultRequest): Promise<_116.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                        inflation(request?: _120.QueryInflationRequest): Promise<_120.QueryInflationResponse>;
                        annualProvisions(request?: _120.QueryAnnualProvisionsRequest): Promise<_120.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                        signingInfo(request: _124.QuerySigningInfoRequest): Promise<_124.QuerySigningInfoResponse>;
                        signingInfos(request?: _124.QuerySigningInfosRequest): Promise<_124.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _129.QueryValidatorsRequest): Promise<_129.QueryValidatorsResponse>;
                        validator(request: _129.QueryValidatorRequest): Promise<_129.QueryValidatorResponse>;
                        validatorDelegations(request: _129.QueryValidatorDelegationsRequest): Promise<_129.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _129.QueryValidatorUnbondingDelegationsRequest): Promise<_129.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _129.QueryDelegationRequest): Promise<_129.QueryDelegationResponse>;
                        unbondingDelegation(request: _129.QueryUnbondingDelegationRequest): Promise<_129.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _129.QueryDelegatorDelegationsRequest): Promise<_129.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _129.QueryDelegatorUnbondingDelegationsRequest): Promise<_129.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _129.QueryRedelegationsRequest): Promise<_129.QueryRedelegationsResponse>;
                        delegatorValidators(request: _129.QueryDelegatorValidatorsRequest): Promise<_129.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _129.QueryDelegatorValidatorRequest): Promise<_129.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _129.QueryHistoricalInfoRequest): Promise<_129.QueryHistoricalInfoResponse>;
                        pool(request?: _129.QueryPoolRequest): Promise<_129.QueryPoolResponse>;
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _133.SimulateRequest): Promise<_133.SimulateResponse>;
                        getTx(request: _133.GetTxRequest): Promise<_133.GetTxResponse>;
                        broadcastTx(request: _133.BroadcastTxRequest): Promise<_133.BroadcastTxResponse>;
                        getTxsEvent(request: _133.GetTxsEventRequest): Promise<_133.GetTxsEventResponse>;
                        getBlockWithTxs(request: _133.GetBlockWithTxsRequest): Promise<_133.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _135.QueryCurrentPlanRequest): Promise<_135.QueryCurrentPlanResponse>;
                        appliedPlan(request: _135.QueryAppliedPlanRequest): Promise<_135.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _135.QueryUpgradedConsensusStateRequest): Promise<_135.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _135.QueryModuleVersionsRequest): Promise<_135.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
