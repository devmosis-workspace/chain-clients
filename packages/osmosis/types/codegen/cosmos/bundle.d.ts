import * as _83 from "./auth/v1beta1/auth";
import * as _84 from "./auth/v1beta1/genesis";
import * as _85 from "./auth/v1beta1/query";
import * as _86 from "./authz/v1beta1/authz";
import * as _87 from "./authz/v1beta1/event";
import * as _88 from "./authz/v1beta1/genesis";
import * as _89 from "./authz/v1beta1/query";
import * as _90 from "./authz/v1beta1/tx";
import * as _91 from "./bank/v1beta1/authz";
import * as _92 from "./bank/v1beta1/bank";
import * as _93 from "./bank/v1beta1/genesis";
import * as _94 from "./bank/v1beta1/query";
import * as _95 from "./bank/v1beta1/tx";
import * as _96 from "./base/abci/v1beta1/abci";
import * as _97 from "./base/kv/v1beta1/kv";
import * as _98 from "./base/node/v1beta1/query";
import * as _99 from "./base/query/v1beta1/pagination";
import * as _100 from "./base/reflection/v1beta1/reflection";
import * as _101 from "./base/reflection/v2alpha1/reflection";
import * as _102 from "./base/snapshots/v1beta1/snapshot";
import * as _103 from "./base/store/v1beta1/commit_info";
import * as _104 from "./base/store/v1beta1/listening";
import * as _105 from "./base/tendermint/v1beta1/query";
import * as _106 from "./base/v1beta1/coin";
import * as _107 from "./capability/v1beta1/capability";
import * as _108 from "./capability/v1beta1/genesis";
import * as _109 from "./crisis/v1beta1/genesis";
import * as _110 from "./crisis/v1beta1/tx";
import * as _111 from "./crypto/ed25519/keys";
import * as _112 from "./crypto/multisig/keys";
import * as _113 from "./crypto/secp256k1/keys";
import * as _114 from "./crypto/secp256r1/keys";
import * as _115 from "./distribution/v1beta1/distribution";
import * as _116 from "./distribution/v1beta1/genesis";
import * as _117 from "./distribution/v1beta1/query";
import * as _118 from "./distribution/v1beta1/tx";
import * as _119 from "./evidence/v1beta1/evidence";
import * as _120 from "./evidence/v1beta1/genesis";
import * as _121 from "./evidence/v1beta1/query";
import * as _122 from "./evidence/v1beta1/tx";
import * as _123 from "./feegrant/v1beta1/feegrant";
import * as _124 from "./feegrant/v1beta1/genesis";
import * as _125 from "./feegrant/v1beta1/query";
import * as _126 from "./feegrant/v1beta1/tx";
import * as _127 from "./genutil/v1beta1/genesis";
import * as _128 from "./gov/v1beta1/genesis";
import * as _129 from "./gov/v1beta1/gov";
import * as _130 from "./gov/v1beta1/query";
import * as _131 from "./gov/v1beta1/tx";
import * as _132 from "./mint/v1beta1/genesis";
import * as _133 from "./mint/v1beta1/mint";
import * as _134 from "./mint/v1beta1/query";
import * as _135 from "./params/v1beta1/params";
import * as _136 from "./params/v1beta1/query";
import * as _137 from "./slashing/v1beta1/genesis";
import * as _138 from "./slashing/v1beta1/query";
import * as _139 from "./slashing/v1beta1/slashing";
import * as _140 from "./slashing/v1beta1/tx";
import * as _141 from "./staking/v1beta1/authz";
import * as _142 from "./staking/v1beta1/genesis";
import * as _143 from "./staking/v1beta1/query";
import * as _144 from "./staking/v1beta1/staking";
import * as _145 from "./staking/v1beta1/tx";
import * as _146 from "./tx/signing/v1beta1/signing";
import * as _147 from "./tx/v1beta1/service";
import * as _148 from "./tx/v1beta1/tx";
import * as _149 from "./upgrade/v1beta1/query";
import * as _150 from "./upgrade/v1beta1/upgrade";
import * as _151 from "./vesting/v1beta1/tx";
import * as _152 from "./vesting/v1beta1/vesting";
import * as _276 from "./auth/v1beta1/query.lcd";
import * as _277 from "./authz/v1beta1/query.lcd";
import * as _278 from "./bank/v1beta1/query.lcd";
import * as _279 from "./base/node/v1beta1/query.lcd";
import * as _280 from "./base/tendermint/v1beta1/query.lcd";
import * as _281 from "./distribution/v1beta1/query.lcd";
import * as _282 from "./evidence/v1beta1/query.lcd";
import * as _283 from "./feegrant/v1beta1/query.lcd";
import * as _284 from "./gov/v1beta1/query.lcd";
import * as _285 from "./mint/v1beta1/query.lcd";
import * as _286 from "./params/v1beta1/query.lcd";
import * as _287 from "./slashing/v1beta1/query.lcd";
import * as _288 from "./staking/v1beta1/query.lcd";
import * as _289 from "./tx/v1beta1/service.lcd";
import * as _290 from "./upgrade/v1beta1/query.lcd";
import * as _291 from "./auth/v1beta1/query.rpc.Query";
import * as _292 from "./authz/v1beta1/query.rpc.Query";
import * as _293 from "./bank/v1beta1/query.rpc.Query";
import * as _294 from "./base/node/v1beta1/query.rpc.Service";
import * as _295 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _296 from "./distribution/v1beta1/query.rpc.Query";
import * as _297 from "./evidence/v1beta1/query.rpc.Query";
import * as _298 from "./feegrant/v1beta1/query.rpc.Query";
import * as _299 from "./gov/v1beta1/query.rpc.Query";
import * as _300 from "./mint/v1beta1/query.rpc.Query";
import * as _301 from "./params/v1beta1/query.rpc.Query";
import * as _302 from "./slashing/v1beta1/query.rpc.Query";
import * as _303 from "./staking/v1beta1/query.rpc.Query";
import * as _304 from "./tx/v1beta1/service.rpc.Service";
import * as _305 from "./upgrade/v1beta1/query.rpc.Query";
import * as _306 from "./authz/v1beta1/tx.rpc.msg";
import * as _307 from "./bank/v1beta1/tx.rpc.msg";
import * as _308 from "./crisis/v1beta1/tx.rpc.msg";
import * as _309 from "./distribution/v1beta1/tx.rpc.msg";
import * as _310 from "./evidence/v1beta1/tx.rpc.msg";
import * as _311 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _312 from "./gov/v1beta1/tx.rpc.msg";
import * as _313 from "./slashing/v1beta1/tx.rpc.msg";
import * as _314 from "./staking/v1beta1/tx.rpc.msg";
import * as _315 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _85.QueryAccountsRequest): Promise<_85.QueryAccountsResponse>;
                account(request: _85.QueryAccountRequest): Promise<_85.QueryAccountResponse>;
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                moduleAccounts(request?: _85.QueryModuleAccountsRequest): Promise<_85.QueryModuleAccountsResponse>;
            };
            LCDQueryClient: typeof _276.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _85.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryAccountsRequest;
                fromPartial(object: Partial<_85.QueryAccountsRequest>): _85.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _85.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryAccountsResponse;
                fromPartial(object: Partial<_85.QueryAccountsResponse>): _85.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _85.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryAccountRequest;
                fromPartial(object: Partial<_85.QueryAccountRequest>): _85.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _85.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryAccountResponse;
                fromPartial(object: Partial<_85.QueryAccountResponse>): _85.QueryAccountResponse;
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
            QueryModuleAccountsRequest: {
                encode(_: _85.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_85.QueryModuleAccountsRequest>): _85.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _85.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_85.QueryModuleAccountsResponse>): _85.QueryModuleAccountsResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
            BaseAccount: {
                encode(message: _83.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.BaseAccount;
                fromPartial(object: Partial<_83.BaseAccount>): _83.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _83.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.ModuleAccount;
                fromPartial(object: Partial<_83.ModuleAccount>): _83.ModuleAccount;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Params;
                fromPartial(object: Partial<_83.Params>): _83.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _89.QueryGrantsRequest): Promise<_89.QueryGrantsResponse>;
                granterGrants(request: _89.QueryGranterGrantsRequest): Promise<_89.QueryGranterGrantsResponse>;
                granteeGrants(request: _89.QueryGranteeGrantsRequest): Promise<_89.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _277.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _90.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _90.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _90.MsgGrant): {
                        typeUrl: string;
                        value: _90.MsgGrant;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    revoke(value: _90.MsgRevoke): {
                        typeUrl: string;
                        value: _90.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _90.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _90.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _90.MsgGrant): {
                        typeUrl: string;
                        value: _90.MsgGrant;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    revoke(value: _90.MsgRevoke): {
                        typeUrl: string;
                        value: _90.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _90.MsgGrant) => {
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
                    }) => _90.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _90.MsgExec) => {
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
                    }) => _90.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _90.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _90.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _90.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MsgGrant;
                fromPartial(object: Partial<_90.MsgGrant>): _90.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _90.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MsgExecResponse;
                fromPartial(object: Partial<_90.MsgExecResponse>): _90.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _90.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MsgExec;
                fromPartial(object: Partial<_90.MsgExec>): _90.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _90.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.MsgGrantResponse;
                fromPartial(_: Partial<_90.MsgGrantResponse>): _90.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _90.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MsgRevoke;
                fromPartial(object: Partial<_90.MsgRevoke>): _90.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _90.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.MsgRevokeResponse;
                fromPartial(_: Partial<_90.MsgRevokeResponse>): _90.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _89.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGrantsRequest;
                fromPartial(object: Partial<_89.QueryGrantsRequest>): _89.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _89.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGrantsResponse;
                fromPartial(object: Partial<_89.QueryGrantsResponse>): _89.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _89.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_89.QueryGranterGrantsRequest>): _89.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _89.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_89.QueryGranterGrantsResponse>): _89.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _89.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_89.QueryGranteeGrantsRequest>): _89.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _89.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_89.QueryGranteeGrantsResponse>): _89.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GenesisState;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
            };
            EventGrant: {
                encode(message: _87.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.EventGrant;
                fromPartial(object: Partial<_87.EventGrant>): _87.EventGrant;
            };
            EventRevoke: {
                encode(message: _87.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.EventRevoke;
                fromPartial(object: Partial<_87.EventRevoke>): _87.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _86.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.GenericAuthorization;
                fromPartial(object: Partial<_86.GenericAuthorization>): _86.GenericAuthorization;
            };
            Grant: {
                encode(message: _86.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Grant;
                fromPartial(object: Partial<_86.Grant>): _86.Grant;
            };
            GrantAuthorization: {
                encode(message: _86.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.GrantAuthorization;
                fromPartial(object: Partial<_86.GrantAuthorization>): _86.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _94.QueryBalanceRequest): Promise<_94.QueryBalanceResponse>;
                allBalances(request: _94.QueryAllBalancesRequest): Promise<_94.QueryAllBalancesResponse>;
                totalSupply(request?: _94.QueryTotalSupplyRequest): Promise<_94.QueryTotalSupplyResponse>;
                supplyOf(request: _94.QuerySupplyOfRequest): Promise<_94.QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: _94.QueryTotalSupplyWithoutOffsetRequest): Promise<_94.QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: _94.QuerySupplyOfWithoutOffsetRequest): Promise<_94.QuerySupplyOfWithoutOffsetResponse>;
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                denomMetadata(request: _94.QueryDenomMetadataRequest): Promise<_94.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _94.QueryDenomsMetadataRequest): Promise<_94.QueryDenomsMetadataResponse>;
                baseDenom(request: _94.QueryBaseDenomRequest): Promise<_94.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _278.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _95.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                    multiSend(value: _95.MsgMultiSend): {
                        typeUrl: string;
                        value: _95.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _95.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                    multiSend(value: _95.MsgMultiSend): {
                        typeUrl: string;
                        value: _95.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _95.MsgSend) => {
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
                    }) => _95.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _95.MsgMultiSend) => {
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
                    }) => _95.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _95.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.MsgSend;
                fromPartial(object: Partial<_95.MsgSend>): _95.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _95.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _95.MsgSendResponse;
                fromPartial(_: Partial<_95.MsgSendResponse>): _95.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _95.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.MsgMultiSend;
                fromPartial(object: Partial<_95.MsgMultiSend>): _95.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _95.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _95.MsgMultiSendResponse;
                fromPartial(_: Partial<_95.MsgMultiSendResponse>): _95.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _94.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryBalanceRequest;
                fromPartial(object: Partial<_94.QueryBalanceRequest>): _94.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _94.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryBalanceResponse;
                fromPartial(object: Partial<_94.QueryBalanceResponse>): _94.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _94.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllBalancesRequest;
                fromPartial(object: Partial<_94.QueryAllBalancesRequest>): _94.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _94.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryAllBalancesResponse;
                fromPartial(object: Partial<_94.QueryAllBalancesResponse>): _94.QueryAllBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _94.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_94.QueryTotalSupplyRequest>): _94.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _94.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_94.QueryTotalSupplyResponse>): _94.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _94.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QuerySupplyOfRequest;
                fromPartial(object: Partial<_94.QuerySupplyOfRequest>): _94.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _94.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QuerySupplyOfResponse;
                fromPartial(object: Partial<_94.QuerySupplyOfResponse>): _94.QuerySupplyOfResponse;
            };
            QueryTotalSupplyWithoutOffsetRequest: {
                encode(message: _94.QueryTotalSupplyWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryTotalSupplyWithoutOffsetRequest;
                fromPartial(object: Partial<_94.QueryTotalSupplyWithoutOffsetRequest>): _94.QueryTotalSupplyWithoutOffsetRequest;
            };
            QueryTotalSupplyWithoutOffsetResponse: {
                encode(message: _94.QueryTotalSupplyWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryTotalSupplyWithoutOffsetResponse;
                fromPartial(object: Partial<_94.QueryTotalSupplyWithoutOffsetResponse>): _94.QueryTotalSupplyWithoutOffsetResponse;
            };
            QuerySupplyOfWithoutOffsetRequest: {
                encode(message: _94.QuerySupplyOfWithoutOffsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QuerySupplyOfWithoutOffsetRequest;
                fromPartial(object: Partial<_94.QuerySupplyOfWithoutOffsetRequest>): _94.QuerySupplyOfWithoutOffsetRequest;
            };
            QuerySupplyOfWithoutOffsetResponse: {
                encode(message: _94.QuerySupplyOfWithoutOffsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QuerySupplyOfWithoutOffsetResponse;
                fromPartial(object: Partial<_94.QuerySupplyOfWithoutOffsetResponse>): _94.QuerySupplyOfWithoutOffsetResponse;
            };
            QueryParamsRequest: {
                encode(_: _94.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.QueryParamsRequest;
                fromPartial(_: Partial<_94.QueryParamsRequest>): _94.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _94.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryParamsResponse;
                fromPartial(object: Partial<_94.QueryParamsResponse>): _94.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _94.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_94.QueryDenomsMetadataRequest>): _94.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _94.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_94.QueryDenomsMetadataResponse>): _94.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _94.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_94.QueryDenomMetadataRequest>): _94.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _94.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_94.QueryDenomMetadataResponse>): _94.QueryDenomMetadataResponse;
            };
            QueryBaseDenomRequest: {
                encode(message: _94.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryBaseDenomRequest;
                fromPartial(object: Partial<_94.QueryBaseDenomRequest>): _94.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _94.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.QueryBaseDenomResponse;
                fromPartial(object: Partial<_94.QueryBaseDenomResponse>): _94.QueryBaseDenomResponse;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            Balance: {
                encode(message: _93.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Balance;
                fromPartial(object: Partial<_93.Balance>): _93.Balance;
            };
            GenesisSupplyOffset: {
                encode(message: _93.GenesisSupplyOffset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenesisSupplyOffset;
                fromPartial(object: Partial<_93.GenesisSupplyOffset>): _93.GenesisSupplyOffset;
            };
            Params: {
                encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Params;
                fromPartial(object: Partial<_92.Params>): _92.Params;
            };
            SendEnabled: {
                encode(message: _92.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.SendEnabled;
                fromPartial(object: Partial<_92.SendEnabled>): _92.SendEnabled;
            };
            Input: {
                encode(message: _92.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Input;
                fromPartial(object: Partial<_92.Input>): _92.Input;
            };
            Output: {
                encode(message: _92.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Output;
                fromPartial(object: Partial<_92.Output>): _92.Output;
            };
            Supply: {
                encode(message: _92.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Supply;
                fromPartial(object: Partial<_92.Supply>): _92.Supply;
            };
            DenomUnit: {
                encode(message: _92.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.DenomUnit;
                fromPartial(object: Partial<_92.DenomUnit>): _92.DenomUnit;
            };
            Metadata: {
                encode(message: _92.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Metadata;
                fromPartial(object: Partial<_92.Metadata>): _92.Metadata;
            };
            SendAuthorization: {
                encode(message: _91.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.SendAuthorization;
                fromPartial(object: Partial<_91.SendAuthorization>): _91.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _96.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.TxResponse;
                    fromPartial(object: Partial<_96.TxResponse>): _96.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _96.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.ABCIMessageLog;
                    fromPartial(object: Partial<_96.ABCIMessageLog>): _96.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _96.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.StringEvent;
                    fromPartial(object: Partial<_96.StringEvent>): _96.StringEvent;
                };
                Attribute: {
                    encode(message: _96.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.Attribute;
                    fromPartial(object: Partial<_96.Attribute>): _96.Attribute;
                };
                GasInfo: {
                    encode(message: _96.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.GasInfo;
                    fromPartial(object: Partial<_96.GasInfo>): _96.GasInfo;
                };
                Result: {
                    encode(message: _96.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.Result;
                    fromPartial(object: Partial<_96.Result>): _96.Result;
                };
                SimulationResponse: {
                    encode(message: _96.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.SimulationResponse;
                    fromPartial(object: Partial<_96.SimulationResponse>): _96.SimulationResponse;
                };
                MsgData: {
                    encode(message: _96.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.MsgData;
                    fromPartial(object: Partial<_96.MsgData>): _96.MsgData;
                };
                TxMsgData: {
                    encode(message: _96.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.TxMsgData;
                    fromPartial(object: Partial<_96.TxMsgData>): _96.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _96.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.SearchTxsResult;
                    fromPartial(object: Partial<_96.SearchTxsResult>): _96.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _97.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.Pairs;
                    fromPartial(object: Partial<_97.Pairs>): _97.Pairs;
                };
                Pair: {
                    encode(message: _97.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.Pair;
                    fromPartial(object: Partial<_97.Pair>): _97.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _294.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _98.ConfigRequest): Promise<_98.ConfigResponse>;
                };
                LCDQueryClient: typeof _279.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _98.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.ConfigRequest;
                    fromPartial(_: Partial<_98.ConfigRequest>): _98.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _98.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.ConfigResponse;
                    fromPartial(object: Partial<_98.ConfigResponse>): _98.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _99.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.PageRequest;
                    fromPartial(object: Partial<_99.PageRequest>): _99.PageRequest;
                };
                PageResponse: {
                    encode(message: _99.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.PageResponse;
                    fromPartial(object: Partial<_99.PageResponse>): _99.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _100.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _100.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_100.ListAllInterfacesRequest>): _100.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _100.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_100.ListAllInterfacesResponse>): _100.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _100.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ListImplementationsRequest;
                    fromPartial(object: Partial<_100.ListImplementationsRequest>): _100.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _100.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ListImplementationsResponse;
                    fromPartial(object: Partial<_100.ListImplementationsResponse>): _100.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _101.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.AppDescriptor;
                    fromPartial(object: Partial<_101.AppDescriptor>): _101.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _101.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.TxDescriptor;
                    fromPartial(object: Partial<_101.TxDescriptor>): _101.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _101.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.AuthnDescriptor;
                    fromPartial(object: Partial<_101.AuthnDescriptor>): _101.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _101.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.SigningModeDescriptor;
                    fromPartial(object: Partial<_101.SigningModeDescriptor>): _101.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _101.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.ChainDescriptor;
                    fromPartial(object: Partial<_101.ChainDescriptor>): _101.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _101.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.CodecDescriptor;
                    fromPartial(object: Partial<_101.CodecDescriptor>): _101.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _101.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.InterfaceDescriptor;
                    fromPartial(object: Partial<_101.InterfaceDescriptor>): _101.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _101.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_101.InterfaceImplementerDescriptor>): _101.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _101.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_101.InterfaceAcceptingMessageDescriptor>): _101.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _101.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.ConfigurationDescriptor;
                    fromPartial(object: Partial<_101.ConfigurationDescriptor>): _101.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _101.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.MsgDescriptor;
                    fromPartial(object: Partial<_101.MsgDescriptor>): _101.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _101.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_101.GetAuthnDescriptorRequest>): _101.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _101.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_101.GetAuthnDescriptorResponse>): _101.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _101.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_101.GetChainDescriptorRequest>): _101.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _101.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_101.GetChainDescriptorResponse>): _101.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _101.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_101.GetCodecDescriptorRequest>): _101.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _101.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_101.GetCodecDescriptorResponse>): _101.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _101.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_101.GetConfigurationDescriptorRequest>): _101.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _101.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_101.GetConfigurationDescriptorResponse>): _101.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _101.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_101.GetQueryServicesDescriptorRequest>): _101.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _101.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_101.GetQueryServicesDescriptorResponse>): _101.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _101.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _101.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_101.GetTxDescriptorRequest>): _101.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _101.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_101.GetTxDescriptorResponse>): _101.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _101.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.QueryServicesDescriptor;
                    fromPartial(object: Partial<_101.QueryServicesDescriptor>): _101.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _101.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.QueryServiceDescriptor;
                    fromPartial(object: Partial<_101.QueryServiceDescriptor>): _101.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _101.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.QueryMethodDescriptor;
                    fromPartial(object: Partial<_101.QueryMethodDescriptor>): _101.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _102.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Snapshot;
                    fromPartial(object: Partial<_102.Snapshot>): _102.Snapshot;
                };
                Metadata: {
                    encode(message: _102.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.Metadata;
                    fromPartial(object: Partial<_102.Metadata>): _102.Metadata;
                };
                SnapshotItem: {
                    encode(message: _102.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotItem;
                    fromPartial(object: Partial<_102.SnapshotItem>): _102.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _102.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotStoreItem;
                    fromPartial(object: Partial<_102.SnapshotStoreItem>): _102.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _102.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotIAVLItem;
                    fromPartial(object: Partial<_102.SnapshotIAVLItem>): _102.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _102.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_102.SnapshotExtensionMeta>): _102.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _102.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_102.SnapshotExtensionPayload>): _102.SnapshotExtensionPayload;
                };
                SnapshotAppVersion: {
                    encode(message: _102.SnapshotAppVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.SnapshotAppVersion;
                    fromPartial(object: Partial<_102.SnapshotAppVersion>): _102.SnapshotAppVersion;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _104.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.StoreKVPair;
                    fromPartial(object: Partial<_104.StoreKVPair>): _104.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _103.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.CommitInfo;
                    fromPartial(object: Partial<_103.CommitInfo>): _103.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _103.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.StoreInfo;
                    fromPartial(object: Partial<_103.StoreInfo>): _103.StoreInfo;
                };
                CommitID: {
                    encode(message: _103.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.CommitID;
                    fromPartial(object: Partial<_103.CommitID>): _103.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _295.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _105.GetNodeInfoRequest): Promise<_105.GetNodeInfoResponse>;
                    getSyncing(request?: _105.GetSyncingRequest): Promise<_105.GetSyncingResponse>;
                    getLatestBlock(request?: _105.GetLatestBlockRequest): Promise<_105.GetLatestBlockResponse>;
                    getBlockByHeight(request: _105.GetBlockByHeightRequest): Promise<_105.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _105.GetLatestValidatorSetRequest): Promise<_105.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _105.GetValidatorSetByHeightRequest): Promise<_105.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _280.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _105.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_105.GetValidatorSetByHeightRequest>): _105.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _105.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_105.GetValidatorSetByHeightResponse>): _105.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _105.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_105.GetLatestValidatorSetRequest>): _105.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _105.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_105.GetLatestValidatorSetResponse>): _105.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _105.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.Validator;
                    fromPartial(object: Partial<_105.Validator>): _105.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _105.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_105.GetBlockByHeightRequest>): _105.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _105.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_105.GetBlockByHeightResponse>): _105.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _105.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.GetLatestBlockRequest;
                    fromPartial(_: Partial<_105.GetLatestBlockRequest>): _105.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _105.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetLatestBlockResponse;
                    fromPartial(object: Partial<_105.GetLatestBlockResponse>): _105.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _105.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.GetSyncingRequest;
                    fromPartial(_: Partial<_105.GetSyncingRequest>): _105.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _105.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetSyncingResponse;
                    fromPartial(object: Partial<_105.GetSyncingResponse>): _105.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _105.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.GetNodeInfoRequest;
                    fromPartial(_: Partial<_105.GetNodeInfoRequest>): _105.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _105.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.GetNodeInfoResponse;
                    fromPartial(object: Partial<_105.GetNodeInfoResponse>): _105.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _105.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.VersionInfo;
                    fromPartial(object: Partial<_105.VersionInfo>): _105.VersionInfo;
                };
                Module: {
                    encode(message: _105.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.Module;
                    fromPartial(object: Partial<_105.Module>): _105.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _106.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.Coin;
                fromPartial(object: Partial<_106.Coin>): _106.Coin;
            };
            DecCoin: {
                encode(message: _106.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.DecCoin;
                fromPartial(object: Partial<_106.DecCoin>): _106.DecCoin;
            };
            IntProto: {
                encode(message: _106.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.IntProto;
                fromPartial(object: Partial<_106.IntProto>): _106.IntProto;
            };
            DecProto: {
                encode(message: _106.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.DecProto;
                fromPartial(object: Partial<_106.DecProto>): _106.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _108.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.GenesisOwners;
                fromPartial(object: Partial<_108.GenesisOwners>): _108.GenesisOwners;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.GenesisState;
                fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
            };
            Capability: {
                encode(message: _107.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Capability;
                fromPartial(object: Partial<_107.Capability>): _107.Capability;
            };
            Owner: {
                encode(message: _107.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Owner;
                fromPartial(object: Partial<_107.Owner>): _107.Owner;
            };
            CapabilityOwners: {
                encode(message: _107.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.CapabilityOwners;
                fromPartial(object: Partial<_107.CapabilityOwners>): _107.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _308.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _110.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _110.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _110.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _110.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _110.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _110.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _110.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _110.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _110.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgVerifyInvariant;
                fromPartial(object: Partial<_110.MsgVerifyInvariant>): _110.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _110.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_110.MsgVerifyInvariantResponse>): _110.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _111.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.PubKey;
                fromPartial(object: Partial<_111.PubKey>): _111.PubKey;
            };
            PrivKey: {
                encode(message: _111.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.PrivKey;
                fromPartial(object: Partial<_111.PrivKey>): _111.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _112.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.LegacyAminoPubKey;
                fromPartial(object: Partial<_112.LegacyAminoPubKey>): _112.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _113.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.PubKey;
                fromPartial(object: Partial<_113.PubKey>): _113.PubKey;
            };
            PrivKey: {
                encode(message: _113.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.PrivKey;
                fromPartial(object: Partial<_113.PrivKey>): _113.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _114.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.PubKey;
                fromPartial(object: Partial<_114.PubKey>): _114.PubKey;
            };
            PrivKey: {
                encode(message: _114.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.PrivKey;
                fromPartial(object: Partial<_114.PrivKey>): _114.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _117.QueryParamsRequest): Promise<_117.QueryParamsResponse>;
                validatorOutstandingRewards(request: _117.QueryValidatorOutstandingRewardsRequest): Promise<_117.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _117.QueryValidatorCommissionRequest): Promise<_117.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _117.QueryValidatorSlashesRequest): Promise<_117.QueryValidatorSlashesResponse>;
                delegationRewards(request: _117.QueryDelegationRewardsRequest): Promise<_117.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _117.QueryDelegationTotalRewardsRequest): Promise<_117.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _117.QueryDelegatorValidatorsRequest): Promise<_117.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _117.QueryDelegatorWithdrawAddressRequest): Promise<_117.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _117.QueryCommunityPoolRequest): Promise<_117.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _281.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _118.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _118.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _118.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _118.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _118.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _118.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _118.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _118.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _118.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _118.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _118.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _118.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _118.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _118.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _118.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _118.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _118.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _118.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _118.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _118.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _118.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _118.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _118.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _118.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _118.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _118.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _118.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _118.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _118.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _118.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _118.MsgFundCommunityPool) => {
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
                    }) => _118.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _118.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_118.MsgSetWithdrawAddress>): _118.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _118.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_118.MsgSetWithdrawAddressResponse>): _118.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _118.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_118.MsgWithdrawDelegatorReward>): _118.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _118.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_118.MsgWithdrawDelegatorRewardResponse>): _118.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _118.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_118.MsgWithdrawValidatorCommission>): _118.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _118.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_118.MsgWithdrawValidatorCommissionResponse>): _118.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _118.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgFundCommunityPool;
                fromPartial(object: Partial<_118.MsgFundCommunityPool>): _118.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _118.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_118.MsgFundCommunityPoolResponse>): _118.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _117.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.QueryParamsRequest;
                fromPartial(_: Partial<_117.QueryParamsRequest>): _117.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _117.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryParamsResponse;
                fromPartial(object: Partial<_117.QueryParamsResponse>): _117.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _117.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_117.QueryValidatorOutstandingRewardsRequest>): _117.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _117.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_117.QueryValidatorOutstandingRewardsResponse>): _117.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _117.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_117.QueryValidatorCommissionRequest>): _117.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _117.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_117.QueryValidatorCommissionResponse>): _117.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _117.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_117.QueryValidatorSlashesRequest>): _117.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _117.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_117.QueryValidatorSlashesResponse>): _117.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _117.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_117.QueryDelegationRewardsRequest>): _117.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _117.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_117.QueryDelegationRewardsResponse>): _117.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _117.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_117.QueryDelegationTotalRewardsRequest>): _117.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _117.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_117.QueryDelegationTotalRewardsResponse>): _117.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _117.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_117.QueryDelegatorValidatorsRequest>): _117.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _117.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_117.QueryDelegatorValidatorsResponse>): _117.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _117.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_117.QueryDelegatorWithdrawAddressRequest>): _117.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _117.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_117.QueryDelegatorWithdrawAddressResponse>): _117.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _117.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_117.QueryCommunityPoolRequest>): _117.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _117.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_117.QueryCommunityPoolResponse>): _117.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _116.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_116.DelegatorWithdrawInfo>): _116.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _116.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_116.ValidatorOutstandingRewardsRecord>): _116.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _116.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_116.ValidatorAccumulatedCommissionRecord>): _116.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _116.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_116.ValidatorHistoricalRewardsRecord>): _116.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _116.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_116.ValidatorCurrentRewardsRecord>): _116.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _116.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_116.DelegatorStartingInfoRecord>): _116.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _116.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_116.ValidatorSlashEventRecord>): _116.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
            };
            Params: {
                encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.Params;
                fromPartial(object: Partial<_115.Params>): _115.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _115.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_115.ValidatorHistoricalRewards>): _115.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _115.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorCurrentRewards;
                fromPartial(object: Partial<_115.ValidatorCurrentRewards>): _115.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _115.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_115.ValidatorAccumulatedCommission>): _115.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _115.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_115.ValidatorOutstandingRewards>): _115.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _115.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorSlashEvent;
                fromPartial(object: Partial<_115.ValidatorSlashEvent>): _115.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _115.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ValidatorSlashEvents;
                fromPartial(object: Partial<_115.ValidatorSlashEvents>): _115.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _115.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.FeePool;
                fromPartial(object: Partial<_115.FeePool>): _115.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _115.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_115.CommunityPoolSpendProposal>): _115.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _115.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.DelegatorStartingInfo;
                fromPartial(object: Partial<_115.DelegatorStartingInfo>): _115.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _115.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.DelegationDelegatorReward;
                fromPartial(object: Partial<_115.DelegationDelegatorReward>): _115.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _115.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_115.CommunityPoolSpendProposalWithDeposit>): _115.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _121.QueryEvidenceRequest): Promise<_121.QueryEvidenceResponse>;
                allEvidence(request?: _121.QueryAllEvidenceRequest): Promise<_121.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _122.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _122.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _122.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _122.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _122.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _122.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _122.MsgSubmitEvidence) => {
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
                    }) => _122.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _122.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.MsgSubmitEvidence;
                fromPartial(object: Partial<_122.MsgSubmitEvidence>): _122.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _122.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_122.MsgSubmitEvidenceResponse>): _122.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _121.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QueryEvidenceRequest;
                fromPartial(object: Partial<_121.QueryEvidenceRequest>): _121.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _121.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QueryEvidenceResponse;
                fromPartial(object: Partial<_121.QueryEvidenceResponse>): _121.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _121.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_121.QueryAllEvidenceRequest>): _121.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _121.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_121.QueryAllEvidenceResponse>): _121.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
            };
            Equivocation: {
                encode(message: _119.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Equivocation;
                fromPartial(object: Partial<_119.Equivocation>): _119.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _298.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _125.QueryAllowanceRequest): Promise<_125.QueryAllowanceResponse>;
                allowances(request: _125.QueryAllowancesRequest): Promise<_125.QueryAllowancesResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _126.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _126.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _126.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _126.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _126.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _126.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _126.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _126.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _126.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _126.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _126.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _126.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _126.MsgGrantAllowance) => {
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
                    }) => _126.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _126.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _126.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _126.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgGrantAllowance;
                fromPartial(object: Partial<_126.MsgGrantAllowance>): _126.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _126.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_126.MsgGrantAllowanceResponse>): _126.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _126.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgRevokeAllowance;
                fromPartial(object: Partial<_126.MsgRevokeAllowance>): _126.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _126.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_126.MsgRevokeAllowanceResponse>): _126.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _125.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryAllowanceRequest;
                fromPartial(object: Partial<_125.QueryAllowanceRequest>): _125.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _125.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryAllowanceResponse;
                fromPartial(object: Partial<_125.QueryAllowanceResponse>): _125.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _125.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryAllowancesRequest;
                fromPartial(object: Partial<_125.QueryAllowancesRequest>): _125.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _125.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryAllowancesResponse;
                fromPartial(object: Partial<_125.QueryAllowancesResponse>): _125.QueryAllowancesResponse;
            };
            GenesisState: {
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.GenesisState;
                fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
            };
            BasicAllowance: {
                encode(message: _123.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.BasicAllowance;
                fromPartial(object: Partial<_123.BasicAllowance>): _123.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _123.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.PeriodicAllowance;
                fromPartial(object: Partial<_123.PeriodicAllowance>): _123.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _123.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.AllowedMsgAllowance;
                fromPartial(object: Partial<_123.AllowedMsgAllowance>): _123.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _123.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.Grant;
                fromPartial(object: Partial<_123.Grant>): _123.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.GenesisState;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _130.QueryProposalRequest): Promise<_130.QueryProposalResponse>;
                proposals(request: _130.QueryProposalsRequest): Promise<_130.QueryProposalsResponse>;
                vote(request: _130.QueryVoteRequest): Promise<_130.QueryVoteResponse>;
                votes(request: _130.QueryVotesRequest): Promise<_130.QueryVotesResponse>;
                params(request: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                deposit(request: _130.QueryDepositRequest): Promise<_130.QueryDepositResponse>;
                deposits(request: _130.QueryDepositsRequest): Promise<_130.QueryDepositsResponse>;
                tallyResult(request: _130.QueryTallyResultRequest): Promise<_130.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _131.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _131.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _131.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _131.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _131.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _131.MsgSubmitProposal;
                    };
                    vote(value: _131.MsgVote): {
                        typeUrl: string;
                        value: _131.MsgVote;
                    };
                    voteWeighted(value: _131.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _131.MsgVoteWeighted;
                    };
                    deposit(value: _131.MsgDeposit): {
                        typeUrl: string;
                        value: _131.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _131.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _131.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _131.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _131.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _131.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _131.MsgSubmitProposal;
                    };
                    vote(value: _131.MsgVote): {
                        typeUrl: string;
                        value: _131.MsgVote;
                    };
                    voteWeighted(value: _131.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _131.MsgVoteWeighted;
                    };
                    deposit(value: _131.MsgDeposit): {
                        typeUrl: string;
                        value: _131.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer, isExpedited }: _131.MsgSubmitProposal) => {
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
                    }) => _131.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _131.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _131.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _131.MsgVoteWeighted) => {
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
                    }) => _131.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _131.MsgDeposit) => {
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
                    }) => _131.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _131.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgSubmitProposal;
                fromPartial(object: Partial<_131.MsgSubmitProposal>): _131.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _131.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_131.MsgSubmitProposalResponse>): _131.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _131.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgVote;
                fromPartial(object: Partial<_131.MsgVote>): _131.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _131.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgVoteResponse;
                fromPartial(_: Partial<_131.MsgVoteResponse>): _131.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _131.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgVoteWeighted;
                fromPartial(object: Partial<_131.MsgVoteWeighted>): _131.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _131.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_131.MsgVoteWeightedResponse>): _131.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _131.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgDeposit;
                fromPartial(object: Partial<_131.MsgDeposit>): _131.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _131.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgDepositResponse;
                fromPartial(_: Partial<_131.MsgDepositResponse>): _131.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _130.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryProposalRequest;
                fromPartial(object: Partial<_130.QueryProposalRequest>): _130.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _130.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryProposalResponse;
                fromPartial(object: Partial<_130.QueryProposalResponse>): _130.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _130.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryProposalsRequest;
                fromPartial(object: Partial<_130.QueryProposalsRequest>): _130.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _130.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryProposalsResponse;
                fromPartial(object: Partial<_130.QueryProposalsResponse>): _130.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _130.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryVoteRequest;
                fromPartial(object: Partial<_130.QueryVoteRequest>): _130.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _130.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryVoteResponse;
                fromPartial(object: Partial<_130.QueryVoteResponse>): _130.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _130.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryVotesRequest;
                fromPartial(object: Partial<_130.QueryVotesRequest>): _130.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _130.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryVotesResponse;
                fromPartial(object: Partial<_130.QueryVotesResponse>): _130.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _130.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryParamsRequest;
                fromPartial(object: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _130.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryParamsResponse;
                fromPartial(object: Partial<_130.QueryParamsResponse>): _130.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _130.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryDepositRequest;
                fromPartial(object: Partial<_130.QueryDepositRequest>): _130.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _130.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryDepositResponse;
                fromPartial(object: Partial<_130.QueryDepositResponse>): _130.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _130.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryDepositsRequest;
                fromPartial(object: Partial<_130.QueryDepositsRequest>): _130.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _130.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryDepositsResponse;
                fromPartial(object: Partial<_130.QueryDepositsResponse>): _130.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _130.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryTallyResultRequest;
                fromPartial(object: Partial<_130.QueryTallyResultRequest>): _130.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _130.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryTallyResultResponse;
                fromPartial(object: Partial<_130.QueryTallyResultResponse>): _130.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _129.VoteOption;
            voteOptionToJSON(object: _129.VoteOption): string;
            proposalStatusFromJSON(object: any): _129.ProposalStatus;
            proposalStatusToJSON(object: _129.ProposalStatus): string;
            VoteOption: typeof _129.VoteOption;
            VoteOptionSDKType: typeof _129.VoteOption;
            ProposalStatus: typeof _129.ProposalStatus;
            ProposalStatusSDKType: typeof _129.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _129.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.WeightedVoteOption;
                fromPartial(object: Partial<_129.WeightedVoteOption>): _129.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _129.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.TextProposal;
                fromPartial(object: Partial<_129.TextProposal>): _129.TextProposal;
            };
            Deposit: {
                encode(message: _129.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Deposit;
                fromPartial(object: Partial<_129.Deposit>): _129.Deposit;
            };
            Proposal: {
                encode(message: _129.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Proposal;
                fromPartial(object: Partial<_129.Proposal>): _129.Proposal;
            };
            TallyResult: {
                encode(message: _129.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.TallyResult;
                fromPartial(object: Partial<_129.TallyResult>): _129.TallyResult;
            };
            Vote: {
                encode(message: _129.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Vote;
                fromPartial(object: Partial<_129.Vote>): _129.Vote;
            };
            DepositParams: {
                encode(message: _129.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.DepositParams;
                fromPartial(object: Partial<_129.DepositParams>): _129.DepositParams;
            };
            VotingParams: {
                encode(message: _129.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.VotingParams;
                fromPartial(object: Partial<_129.VotingParams>): _129.VotingParams;
            };
            TallyParams: {
                encode(message: _129.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.TallyParams;
                fromPartial(object: Partial<_129.TallyParams>): _129.TallyParams;
            };
            ProposalVotingPeriod: {
                encode(message: _129.ProposalVotingPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.ProposalVotingPeriod;
                fromPartial(object: Partial<_129.ProposalVotingPeriod>): _129.ProposalVotingPeriod;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                inflation(request?: _134.QueryInflationRequest): Promise<_134.QueryInflationResponse>;
                annualProvisions(request?: _134.QueryAnnualProvisionsRequest): Promise<_134.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.QueryParamsRequest;
                fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.QueryParamsResponse;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _134.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.QueryInflationRequest;
                fromPartial(_: Partial<_134.QueryInflationRequest>): _134.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _134.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.QueryInflationResponse;
                fromPartial(object: Partial<_134.QueryInflationResponse>): _134.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _134.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_134.QueryAnnualProvisionsRequest>): _134.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _134.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_134.QueryAnnualProvisionsResponse>): _134.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _133.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Minter;
                fromPartial(object: Partial<_133.Minter>): _133.Minter;
            };
            Params: {
                encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
            };
            GenesisState: {
                encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.GenesisState;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryParamsRequest;
                fromPartial(object: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryParamsResponse;
                fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _135.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ParameterChangeProposal;
                fromPartial(object: Partial<_135.ParameterChangeProposal>): _135.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _135.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ParamChange;
                fromPartial(object: Partial<_135.ParamChange>): _135.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                signingInfo(request: _138.QuerySigningInfoRequest): Promise<_138.QuerySigningInfoResponse>;
                signingInfos(request?: _138.QuerySigningInfosRequest): Promise<_138.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _140.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _140.MsgUnjail): {
                        typeUrl: string;
                        value: _140.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _140.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _140.MsgUnjail): {
                        typeUrl: string;
                        value: _140.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _140.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _140.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _140.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.MsgUnjail;
                fromPartial(object: Partial<_140.MsgUnjail>): _140.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _140.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _140.MsgUnjailResponse;
                fromPartial(_: Partial<_140.MsgUnjailResponse>): _140.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _139.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.ValidatorSigningInfo;
                fromPartial(object: Partial<_139.ValidatorSigningInfo>): _139.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.Params;
                fromPartial(object: Partial<_139.Params>): _139.Params;
            };
            QueryParamsRequest: {
                encode(_: _138.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryParamsRequest;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _138.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryParamsResponse;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _138.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QuerySigningInfoRequest;
                fromPartial(object: Partial<_138.QuerySigningInfoRequest>): _138.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _138.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QuerySigningInfoResponse;
                fromPartial(object: Partial<_138.QuerySigningInfoResponse>): _138.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _138.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QuerySigningInfosRequest;
                fromPartial(object: Partial<_138.QuerySigningInfosRequest>): _138.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _138.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QuerySigningInfosResponse;
                fromPartial(object: Partial<_138.QuerySigningInfosResponse>): _138.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.GenesisState;
                fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
            };
            SigningInfo: {
                encode(message: _137.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.SigningInfo;
                fromPartial(object: Partial<_137.SigningInfo>): _137.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _137.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.ValidatorMissedBlocks;
                fromPartial(object: Partial<_137.ValidatorMissedBlocks>): _137.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _137.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MissedBlock;
                fromPartial(object: Partial<_137.MissedBlock>): _137.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _143.QueryValidatorsRequest): Promise<_143.QueryValidatorsResponse>;
                validator(request: _143.QueryValidatorRequest): Promise<_143.QueryValidatorResponse>;
                validatorDelegations(request: _143.QueryValidatorDelegationsRequest): Promise<_143.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _143.QueryValidatorUnbondingDelegationsRequest): Promise<_143.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _143.QueryDelegationRequest): Promise<_143.QueryDelegationResponse>;
                unbondingDelegation(request: _143.QueryUnbondingDelegationRequest): Promise<_143.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _143.QueryDelegatorDelegationsRequest): Promise<_143.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _143.QueryDelegatorUnbondingDelegationsRequest): Promise<_143.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _143.QueryRedelegationsRequest): Promise<_143.QueryRedelegationsResponse>;
                delegatorValidators(request: _143.QueryDelegatorValidatorsRequest): Promise<_143.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _143.QueryDelegatorValidatorRequest): Promise<_143.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _143.QueryHistoricalInfoRequest): Promise<_143.QueryHistoricalInfoResponse>;
                pool(request?: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: _145.MsgCreateValidator;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: _145.MsgEditValidator;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: _145.MsgDelegate;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _145.MsgBeginRedelegate;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: _145.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _145.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _145.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _145.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _145.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _145.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: _145.MsgCreateValidator;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: _145.MsgEditValidator;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: _145.MsgDelegate;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _145.MsgBeginRedelegate;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: _145.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _145.MsgCreateValidator) => {
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
                    }) => _145.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _145.MsgEditValidator) => {
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
                    }) => _145.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _145.MsgDelegate) => {
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
                    }) => _145.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _145.MsgBeginRedelegate) => {
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
                    }) => _145.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _145.MsgUndelegate) => {
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
                    }) => _145.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _145.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgCreateValidator;
                fromPartial(object: Partial<_145.MsgCreateValidator>): _145.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _145.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _145.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_145.MsgCreateValidatorResponse>): _145.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _145.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgEditValidator;
                fromPartial(object: Partial<_145.MsgEditValidator>): _145.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _145.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _145.MsgEditValidatorResponse;
                fromPartial(_: Partial<_145.MsgEditValidatorResponse>): _145.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _145.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgDelegate;
                fromPartial(object: Partial<_145.MsgDelegate>): _145.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _145.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _145.MsgDelegateResponse;
                fromPartial(_: Partial<_145.MsgDelegateResponse>): _145.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _145.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgBeginRedelegate;
                fromPartial(object: Partial<_145.MsgBeginRedelegate>): _145.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _145.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_145.MsgBeginRedelegateResponse>): _145.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _145.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgUndelegate;
                fromPartial(object: Partial<_145.MsgUndelegate>): _145.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _145.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.MsgUndelegateResponse;
                fromPartial(object: Partial<_145.MsgUndelegateResponse>): _145.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _144.BondStatus;
            bondStatusToJSON(object: _144.BondStatus): string;
            BondStatus: typeof _144.BondStatus;
            BondStatusSDKType: typeof _144.BondStatus;
            HistoricalInfo: {
                encode(message: _144.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.HistoricalInfo;
                fromPartial(object: Partial<_144.HistoricalInfo>): _144.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _144.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.CommissionRates;
                fromPartial(object: Partial<_144.CommissionRates>): _144.CommissionRates;
            };
            Commission: {
                encode(message: _144.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Commission;
                fromPartial(object: Partial<_144.Commission>): _144.Commission;
            };
            Description: {
                encode(message: _144.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Description;
                fromPartial(object: Partial<_144.Description>): _144.Description;
            };
            Validator: {
                encode(message: _144.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Validator;
                fromPartial(object: Partial<_144.Validator>): _144.Validator;
            };
            ValAddresses: {
                encode(message: _144.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.ValAddresses;
                fromPartial(object: Partial<_144.ValAddresses>): _144.ValAddresses;
            };
            DVPair: {
                encode(message: _144.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.DVPair;
                fromPartial(object: Partial<_144.DVPair>): _144.DVPair;
            };
            DVPairs: {
                encode(message: _144.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.DVPairs;
                fromPartial(object: Partial<_144.DVPairs>): _144.DVPairs;
            };
            DVVTriplet: {
                encode(message: _144.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.DVVTriplet;
                fromPartial(object: Partial<_144.DVVTriplet>): _144.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _144.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.DVVTriplets;
                fromPartial(object: Partial<_144.DVVTriplets>): _144.DVVTriplets;
            };
            Delegation: {
                encode(message: _144.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Delegation;
                fromPartial(object: Partial<_144.Delegation>): _144.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _144.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.UnbondingDelegation;
                fromPartial(object: Partial<_144.UnbondingDelegation>): _144.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _144.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.UnbondingDelegationEntry;
                fromPartial(object: Partial<_144.UnbondingDelegationEntry>): _144.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _144.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.RedelegationEntry;
                fromPartial(object: Partial<_144.RedelegationEntry>): _144.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _144.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Redelegation;
                fromPartial(object: Partial<_144.Redelegation>): _144.Redelegation;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Params;
                fromPartial(object: Partial<_144.Params>): _144.Params;
            };
            DelegationResponse: {
                encode(message: _144.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.DelegationResponse;
                fromPartial(object: Partial<_144.DelegationResponse>): _144.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _144.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.RedelegationEntryResponse;
                fromPartial(object: Partial<_144.RedelegationEntryResponse>): _144.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _144.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.RedelegationResponse;
                fromPartial(object: Partial<_144.RedelegationResponse>): _144.RedelegationResponse;
            };
            Pool: {
                encode(message: _144.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Pool;
                fromPartial(object: Partial<_144.Pool>): _144.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _143.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorsRequest;
                fromPartial(object: Partial<_143.QueryValidatorsRequest>): _143.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _143.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorsResponse;
                fromPartial(object: Partial<_143.QueryValidatorsResponse>): _143.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _143.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorRequest;
                fromPartial(object: Partial<_143.QueryValidatorRequest>): _143.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _143.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorResponse;
                fromPartial(object: Partial<_143.QueryValidatorResponse>): _143.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _143.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_143.QueryValidatorDelegationsRequest>): _143.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _143.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_143.QueryValidatorDelegationsResponse>): _143.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _143.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_143.QueryValidatorUnbondingDelegationsRequest>): _143.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _143.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_143.QueryValidatorUnbondingDelegationsResponse>): _143.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _143.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegationRequest;
                fromPartial(object: Partial<_143.QueryDelegationRequest>): _143.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _143.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegationResponse;
                fromPartial(object: Partial<_143.QueryDelegationResponse>): _143.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _143.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_143.QueryUnbondingDelegationRequest>): _143.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _143.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_143.QueryUnbondingDelegationResponse>): _143.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _143.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorDelegationsRequest>): _143.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _143.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorDelegationsResponse>): _143.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _143.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorUnbondingDelegationsRequest>): _143.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _143.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorUnbondingDelegationsResponse>): _143.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _143.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryRedelegationsRequest;
                fromPartial(object: Partial<_143.QueryRedelegationsRequest>): _143.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _143.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryRedelegationsResponse;
                fromPartial(object: Partial<_143.QueryRedelegationsResponse>): _143.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _143.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorsRequest>): _143.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _143.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorsResponse>): _143.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _143.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorRequest>): _143.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _143.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorResponse>): _143.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _143.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_143.QueryHistoricalInfoRequest>): _143.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _143.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_143.QueryHistoricalInfoResponse>): _143.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _143.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _143.QueryPoolRequest;
                fromPartial(_: Partial<_143.QueryPoolRequest>): _143.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _143.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryPoolResponse;
                fromPartial(object: Partial<_143.QueryPoolResponse>): _143.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _143.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _143.QueryParamsRequest;
                fromPartial(_: Partial<_143.QueryParamsRequest>): _143.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _143.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.QueryParamsResponse;
                fromPartial(object: Partial<_143.QueryParamsResponse>): _143.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _142.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.GenesisState;
                fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _142.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.LastValidatorPower;
                fromPartial(object: Partial<_142.LastValidatorPower>): _142.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _141.AuthorizationType;
            authorizationTypeToJSON(object: _141.AuthorizationType): string;
            AuthorizationType: typeof _141.AuthorizationType;
            AuthorizationTypeSDKType: typeof _141.AuthorizationType;
            StakeAuthorization: {
                encode(message: _141.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.StakeAuthorization;
                fromPartial(object: Partial<_141.StakeAuthorization>): _141.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _141.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.StakeAuthorization_Validators;
                fromPartial(object: Partial<_141.StakeAuthorization_Validators>): _141.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _146.SignMode;
                signModeToJSON(object: _146.SignMode): string;
                SignMode: typeof _146.SignMode;
                SignModeSDKType: typeof _146.SignMode;
                SignatureDescriptors: {
                    encode(message: _146.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.SignatureDescriptors;
                    fromPartial(object: Partial<_146.SignatureDescriptors>): _146.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _146.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.SignatureDescriptor;
                    fromPartial(object: Partial<_146.SignatureDescriptor>): _146.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _146.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data>): _146.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _146.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data_Single>): _146.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _146.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _146.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data_Multi>): _146.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _304.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _147.SimulateRequest): Promise<_147.SimulateResponse>;
                getTx(request: _147.GetTxRequest): Promise<_147.GetTxResponse>;
                broadcastTx(request: _147.BroadcastTxRequest): Promise<_147.BroadcastTxResponse>;
                getTxsEvent(request: _147.GetTxsEventRequest): Promise<_147.GetTxsEventResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            Tx: {
                encode(message: _148.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.Tx;
                fromPartial(object: Partial<_148.Tx>): _148.Tx;
            };
            TxRaw: {
                encode(message: _148.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.TxRaw;
                fromPartial(object: Partial<_148.TxRaw>): _148.TxRaw;
            };
            SignDoc: {
                encode(message: _148.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.SignDoc;
                fromPartial(object: Partial<_148.SignDoc>): _148.SignDoc;
            };
            TxBody: {
                encode(message: _148.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.TxBody;
                fromPartial(object: Partial<_148.TxBody>): _148.TxBody;
            };
            AuthInfo: {
                encode(message: _148.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.AuthInfo;
                fromPartial(object: Partial<_148.AuthInfo>): _148.AuthInfo;
            };
            SignerInfo: {
                encode(message: _148.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.SignerInfo;
                fromPartial(object: Partial<_148.SignerInfo>): _148.SignerInfo;
            };
            ModeInfo: {
                encode(message: _148.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.ModeInfo;
                fromPartial(object: Partial<_148.ModeInfo>): _148.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _148.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.ModeInfo_Single;
                fromPartial(object: Partial<_148.ModeInfo_Single>): _148.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _148.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.ModeInfo_Multi;
                fromPartial(object: Partial<_148.ModeInfo_Multi>): _148.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _148.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.Fee;
                fromPartial(object: Partial<_148.Fee>): _148.Fee;
            };
            orderByFromJSON(object: any): _147.OrderBy;
            orderByToJSON(object: _147.OrderBy): string;
            broadcastModeFromJSON(object: any): _147.BroadcastMode;
            broadcastModeToJSON(object: _147.BroadcastMode): string;
            OrderBy: typeof _147.OrderBy;
            OrderBySDKType: typeof _147.OrderBy;
            BroadcastMode: typeof _147.BroadcastMode;
            BroadcastModeSDKType: typeof _147.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _147.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.GetTxsEventRequest;
                fromPartial(object: Partial<_147.GetTxsEventRequest>): _147.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _147.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.GetTxsEventResponse;
                fromPartial(object: Partial<_147.GetTxsEventResponse>): _147.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _147.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.BroadcastTxRequest;
                fromPartial(object: Partial<_147.BroadcastTxRequest>): _147.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _147.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.BroadcastTxResponse;
                fromPartial(object: Partial<_147.BroadcastTxResponse>): _147.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _147.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.SimulateRequest;
                fromPartial(object: Partial<_147.SimulateRequest>): _147.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _147.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.SimulateResponse;
                fromPartial(object: Partial<_147.SimulateResponse>): _147.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _147.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.GetTxRequest;
                fromPartial(object: Partial<_147.GetTxRequest>): _147.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _147.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.GetTxResponse;
                fromPartial(object: Partial<_147.GetTxResponse>): _147.GetTxResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _149.QueryCurrentPlanRequest): Promise<_149.QueryCurrentPlanResponse>;
                appliedPlan(request: _149.QueryAppliedPlanRequest): Promise<_149.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _149.QueryUpgradedConsensusStateRequest): Promise<_149.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _149.QueryModuleVersionsRequest): Promise<_149.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            Plan: {
                encode(message: _150.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Plan;
                fromPartial(object: Partial<_150.Plan>): _150.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _150.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_150.SoftwareUpgradeProposal>): _150.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _150.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_150.CancelSoftwareUpgradeProposal>): _150.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _150.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.ModuleVersion;
                fromPartial(object: Partial<_150.ModuleVersion>): _150.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _149.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _149.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_149.QueryCurrentPlanRequest>): _149.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _149.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_149.QueryCurrentPlanResponse>): _149.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _149.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_149.QueryAppliedPlanRequest>): _149.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _149.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_149.QueryAppliedPlanResponse>): _149.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _149.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_149.QueryUpgradedConsensusStateRequest>): _149.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _149.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_149.QueryUpgradedConsensusStateResponse>): _149.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _149.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_149.QueryModuleVersionsRequest>): _149.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _149.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_149.QueryModuleVersionsResponse>): _149.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _151.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _151.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _151.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _151.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _151.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: _151.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _151.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _151.MsgClawback): {
                        typeUrl: string;
                        value: _151.MsgClawback;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _151.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _151.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _151.MsgClawback;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _151.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _151.MsgCreateVestingAccount;
                    };
                    createClawbackVestingAccount(value: _151.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _151.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _151.MsgClawback): {
                        typeUrl: string;
                        value: _151.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _151.MsgCreateVestingAccount) => {
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
                    }) => _151.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _151.MsgCreateClawbackVestingAccount) => {
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
                    }) => _151.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, address, destAddress }: _151.MsgClawback) => {
                        funder_address: string;
                        address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, address, dest_address }: {
                        funder_address: string;
                        address: string;
                        dest_address: string;
                    }) => _151.MsgClawback;
                };
            };
            BaseVestingAccount: {
                encode(message: _152.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.BaseVestingAccount;
                fromPartial(object: Partial<_152.BaseVestingAccount>): _152.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _152.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.ContinuousVestingAccount;
                fromPartial(object: Partial<_152.ContinuousVestingAccount>): _152.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _152.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.DelayedVestingAccount;
                fromPartial(object: Partial<_152.DelayedVestingAccount>): _152.DelayedVestingAccount;
            };
            Period: {
                encode(message: _152.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.Period;
                fromPartial(object: Partial<_152.Period>): _152.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _152.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.PeriodicVestingAccount;
                fromPartial(object: Partial<_152.PeriodicVestingAccount>): _152.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _152.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.PermanentLockedAccount;
                fromPartial(object: Partial<_152.PermanentLockedAccount>): _152.PermanentLockedAccount;
            };
            ClawbackVestingAccount: {
                encode(message: _152.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.ClawbackVestingAccount;
                fromPartial(object: Partial<_152.ClawbackVestingAccount>): _152.ClawbackVestingAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _151.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgCreateVestingAccount;
                fromPartial(object: Partial<_151.MsgCreateVestingAccount>): _151.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _151.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_151.MsgCreateVestingAccountResponse>): _151.MsgCreateVestingAccountResponse;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _151.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_151.MsgCreateClawbackVestingAccount>): _151.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _151.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_151.MsgCreateClawbackVestingAccountResponse>): _151.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _151.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgClawback;
                fromPartial(object: Partial<_151.MsgClawback>): _151.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _151.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgClawbackResponse;
                fromPartial(_: Partial<_151.MsgClawbackResponse>): _151.MsgClawbackResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _306.MsgClientImpl;
                };
                bank: {
                    v1beta1: _307.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _308.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _309.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _310.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _311.MsgClientImpl;
                };
                gov: {
                    v1beta1: _312.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _313.MsgClientImpl;
                };
                staking: {
                    v1beta1: _314.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _315.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _85.QueryAccountsRequest): Promise<_85.QueryAccountsResponse>;
                        account(request: _85.QueryAccountRequest): Promise<_85.QueryAccountResponse>;
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        moduleAccounts(request?: _85.QueryModuleAccountsRequest): Promise<_85.QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _89.QueryGrantsRequest): Promise<_89.QueryGrantsResponse>;
                        granterGrants(request: _89.QueryGranterGrantsRequest): Promise<_89.QueryGranterGrantsResponse>;
                        granteeGrants(request: _89.QueryGranteeGrantsRequest): Promise<_89.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _94.QueryBalanceRequest): Promise<_94.QueryBalanceResponse>;
                        allBalances(request: _94.QueryAllBalancesRequest): Promise<_94.QueryAllBalancesResponse>;
                        totalSupply(request?: _94.QueryTotalSupplyRequest): Promise<_94.QueryTotalSupplyResponse>;
                        supplyOf(request: _94.QuerySupplyOfRequest): Promise<_94.QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: _94.QueryTotalSupplyWithoutOffsetRequest): Promise<_94.QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: _94.QuerySupplyOfWithoutOffsetRequest): Promise<_94.QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        denomMetadata(request: _94.QueryDenomMetadataRequest): Promise<_94.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _94.QueryDenomsMetadataRequest): Promise<_94.QueryDenomsMetadataResponse>;
                        baseDenom(request: _94.QueryBaseDenomRequest): Promise<_94.QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _98.ConfigRequest): Promise<_98.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _105.GetNodeInfoRequest): Promise<_105.GetNodeInfoResponse>;
                            getSyncing(request?: _105.GetSyncingRequest): Promise<_105.GetSyncingResponse>;
                            getLatestBlock(request?: _105.GetLatestBlockRequest): Promise<_105.GetLatestBlockResponse>;
                            getBlockByHeight(request: _105.GetBlockByHeightRequest): Promise<_105.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _105.GetLatestValidatorSetRequest): Promise<_105.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _105.GetValidatorSetByHeightRequest): Promise<_105.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _117.QueryParamsRequest): Promise<_117.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _117.QueryValidatorOutstandingRewardsRequest): Promise<_117.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _117.QueryValidatorCommissionRequest): Promise<_117.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _117.QueryValidatorSlashesRequest): Promise<_117.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _117.QueryDelegationRewardsRequest): Promise<_117.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _117.QueryDelegationTotalRewardsRequest): Promise<_117.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _117.QueryDelegatorValidatorsRequest): Promise<_117.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _117.QueryDelegatorWithdrawAddressRequest): Promise<_117.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _117.QueryCommunityPoolRequest): Promise<_117.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _121.QueryEvidenceRequest): Promise<_121.QueryEvidenceResponse>;
                        allEvidence(request?: _121.QueryAllEvidenceRequest): Promise<_121.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _125.QueryAllowanceRequest): Promise<_125.QueryAllowanceResponse>;
                        allowances(request: _125.QueryAllowancesRequest): Promise<_125.QueryAllowancesResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _130.QueryProposalRequest): Promise<_130.QueryProposalResponse>;
                        proposals(request: _130.QueryProposalsRequest): Promise<_130.QueryProposalsResponse>;
                        vote(request: _130.QueryVoteRequest): Promise<_130.QueryVoteResponse>;
                        votes(request: _130.QueryVotesRequest): Promise<_130.QueryVotesResponse>;
                        params(request: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                        deposit(request: _130.QueryDepositRequest): Promise<_130.QueryDepositResponse>;
                        deposits(request: _130.QueryDepositsRequest): Promise<_130.QueryDepositsResponse>;
                        tallyResult(request: _130.QueryTallyResultRequest): Promise<_130.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        inflation(request?: _134.QueryInflationRequest): Promise<_134.QueryInflationResponse>;
                        annualProvisions(request?: _134.QueryAnnualProvisionsRequest): Promise<_134.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                        signingInfo(request: _138.QuerySigningInfoRequest): Promise<_138.QuerySigningInfoResponse>;
                        signingInfos(request?: _138.QuerySigningInfosRequest): Promise<_138.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _143.QueryValidatorsRequest): Promise<_143.QueryValidatorsResponse>;
                        validator(request: _143.QueryValidatorRequest): Promise<_143.QueryValidatorResponse>;
                        validatorDelegations(request: _143.QueryValidatorDelegationsRequest): Promise<_143.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _143.QueryValidatorUnbondingDelegationsRequest): Promise<_143.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _143.QueryDelegationRequest): Promise<_143.QueryDelegationResponse>;
                        unbondingDelegation(request: _143.QueryUnbondingDelegationRequest): Promise<_143.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _143.QueryDelegatorDelegationsRequest): Promise<_143.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _143.QueryDelegatorUnbondingDelegationsRequest): Promise<_143.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _143.QueryRedelegationsRequest): Promise<_143.QueryRedelegationsResponse>;
                        delegatorValidators(request: _143.QueryDelegatorValidatorsRequest): Promise<_143.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _143.QueryDelegatorValidatorRequest): Promise<_143.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _143.QueryHistoricalInfoRequest): Promise<_143.QueryHistoricalInfoResponse>;
                        pool(request?: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                        params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _147.SimulateRequest): Promise<_147.SimulateResponse>;
                        getTx(request: _147.GetTxRequest): Promise<_147.GetTxResponse>;
                        broadcastTx(request: _147.BroadcastTxRequest): Promise<_147.BroadcastTxResponse>;
                        getTxsEvent(request: _147.GetTxsEventRequest): Promise<_147.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _149.QueryCurrentPlanRequest): Promise<_149.QueryCurrentPlanResponse>;
                        appliedPlan(request: _149.QueryAppliedPlanRequest): Promise<_149.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _149.QueryUpgradedConsensusStateRequest): Promise<_149.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _149.QueryModuleVersionsRequest): Promise<_149.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _276.LCDQueryClient;
                };
                authz: {
                    v1beta1: _277.LCDQueryClient;
                };
                bank: {
                    v1beta1: _278.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _279.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _280.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _281.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _282.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _283.LCDQueryClient;
                };
                gov: {
                    v1beta1: _284.LCDQueryClient;
                };
                mint: {
                    v1beta1: _285.LCDQueryClient;
                };
                params: {
                    v1beta1: _286.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _287.LCDQueryClient;
                };
                staking: {
                    v1beta1: _288.LCDQueryClient;
                };
                tx: {
                    v1beta1: _289.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _290.LCDQueryClient;
                };
            };
        }>;
    };
}
