import * as _64 from "./app/module/v1alpha1/module";
import * as _65 from "./app/v1alpha1/config";
import * as _66 from "./app/v1alpha1/module";
import * as _67 from "./app/v1alpha1/query";
import * as _68 from "./auth/v1beta1/auth";
import * as _69 from "./auth/v1beta1/genesis";
import * as _70 from "./auth/v1beta1/query";
import * as _71 from "./authz/v1beta1/authz";
import * as _72 from "./authz/v1beta1/event";
import * as _73 from "./authz/v1beta1/genesis";
import * as _74 from "./authz/v1beta1/query";
import * as _75 from "./authz/v1beta1/tx";
import * as _76 from "./bank/v1beta1/authz";
import * as _77 from "./bank/v1beta1/bank";
import * as _78 from "./bank/v1beta1/genesis";
import * as _79 from "./bank/v1beta1/query";
import * as _80 from "./bank/v1beta1/tx";
import * as _81 from "./base/abci/v1beta1/abci";
import * as _82 from "./base/kv/v1beta1/kv";
import * as _83 from "./base/node/v1beta1/query";
import * as _84 from "./base/query/v1beta1/pagination";
import * as _85 from "./base/reflection/v1beta1/reflection";
import * as _86 from "./base/reflection/v2alpha1/reflection";
import * as _87 from "./base/snapshots/v1beta1/snapshot";
import * as _88 from "./base/store/v1beta1/commit_info";
import * as _89 from "./base/store/v1beta1/listening";
import * as _90 from "./base/tendermint/v1beta1/query";
import * as _91 from "./base/tendermint/v1beta1/types";
import * as _92 from "./base/v1beta1/coin";
import * as _93 from "./capability/v1beta1/capability";
import * as _94 from "./capability/v1beta1/genesis";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/hd/v1/hd";
import * as _99 from "./crypto/keyring/v1/record";
import * as _100 from "./crypto/multisig/keys";
import * as _101 from "./crypto/secp256k1/keys";
import * as _102 from "./crypto/secp256r1/keys";
import * as _103 from "./distribution/v1beta1/distribution";
import * as _104 from "./distribution/v1beta1/genesis";
import * as _105 from "./distribution/v1beta1/query";
import * as _106 from "./distribution/v1beta1/tx";
import * as _107 from "./evidence/v1beta1/evidence";
import * as _108 from "./evidence/v1beta1/genesis";
import * as _109 from "./evidence/v1beta1/query";
import * as _110 from "./evidence/v1beta1/tx";
import * as _111 from "./feegrant/v1beta1/feegrant";
import * as _112 from "./feegrant/v1beta1/genesis";
import * as _113 from "./feegrant/v1beta1/query";
import * as _114 from "./feegrant/v1beta1/tx";
import * as _115 from "./genutil/v1beta1/genesis";
import * as _116 from "./gov/v1/genesis";
import * as _117 from "./gov/v1/gov";
import * as _118 from "./gov/v1/query";
import * as _119 from "./gov/v1/tx";
import * as _120 from "./gov/v1beta1/genesis";
import * as _121 from "./gov/v1beta1/gov";
import * as _122 from "./gov/v1beta1/query";
import * as _123 from "./gov/v1beta1/tx";
import * as _124 from "./group/v1/events";
import * as _125 from "./group/v1/genesis";
import * as _126 from "./group/v1/query";
import * as _127 from "./group/v1/tx";
import * as _128 from "./group/v1/types";
import * as _129 from "./mint/v1beta1/genesis";
import * as _130 from "./mint/v1beta1/mint";
import * as _131 from "./mint/v1beta1/query";
import * as _133 from "./nft/v1beta1/event";
import * as _134 from "./nft/v1beta1/genesis";
import * as _135 from "./nft/v1beta1/nft";
import * as _136 from "./nft/v1beta1/query";
import * as _137 from "./nft/v1beta1/tx";
import * as _138 from "./orm/module/v1alpha1/module";
import * as _139 from "./orm/v1/orm";
import * as _140 from "./orm/v1alpha1/schema";
import * as _141 from "./params/v1beta1/params";
import * as _142 from "./params/v1beta1/query";
import * as _143 from "./slashing/v1beta1/genesis";
import * as _144 from "./slashing/v1beta1/query";
import * as _145 from "./slashing/v1beta1/slashing";
import * as _146 from "./slashing/v1beta1/tx";
import * as _147 from "./staking/v1beta1/authz";
import * as _148 from "./staking/v1beta1/genesis";
import * as _149 from "./staking/v1beta1/query";
import * as _150 from "./staking/v1beta1/staking";
import * as _151 from "./staking/v1beta1/tx";
import * as _152 from "./tx/signing/v1beta1/signing";
import * as _153 from "./tx/v1beta1/service";
import * as _154 from "./tx/v1beta1/tx";
import * as _155 from "./upgrade/v1beta1/query";
import * as _156 from "./upgrade/v1beta1/tx";
import * as _157 from "./upgrade/v1beta1/upgrade";
import * as _158 from "./vesting/v1beta1/tx";
import * as _159 from "./vesting/v1beta1/vesting";
import * as _281 from "./auth/v1beta1/query.lcd";
import * as _282 from "./authz/v1beta1/query.lcd";
import * as _283 from "./bank/v1beta1/query.lcd";
import * as _284 from "./base/node/v1beta1/query.lcd";
import * as _285 from "./base/tendermint/v1beta1/query.lcd";
import * as _286 from "./distribution/v1beta1/query.lcd";
import * as _287 from "./evidence/v1beta1/query.lcd";
import * as _288 from "./feegrant/v1beta1/query.lcd";
import * as _289 from "./gov/v1/query.lcd";
import * as _290 from "./gov/v1beta1/query.lcd";
import * as _291 from "./group/v1/query.lcd";
import * as _292 from "./mint/v1beta1/query.lcd";
import * as _293 from "./nft/v1beta1/query.lcd";
import * as _294 from "./params/v1beta1/query.lcd";
import * as _295 from "./slashing/v1beta1/query.lcd";
import * as _296 from "./staking/v1beta1/query.lcd";
import * as _297 from "./tx/v1beta1/service.lcd";
import * as _298 from "./upgrade/v1beta1/query.lcd";
import * as _299 from "./app/v1alpha1/query.rpc.Query";
import * as _300 from "./auth/v1beta1/query.rpc.Query";
import * as _301 from "./authz/v1beta1/query.rpc.Query";
import * as _302 from "./bank/v1beta1/query.rpc.Query";
import * as _303 from "./base/node/v1beta1/query.rpc.Service";
import * as _304 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _305 from "./distribution/v1beta1/query.rpc.Query";
import * as _306 from "./evidence/v1beta1/query.rpc.Query";
import * as _307 from "./feegrant/v1beta1/query.rpc.Query";
import * as _308 from "./gov/v1/query.rpc.Query";
import * as _309 from "./gov/v1beta1/query.rpc.Query";
import * as _310 from "./group/v1/query.rpc.Query";
import * as _311 from "./mint/v1beta1/query.rpc.Query";
import * as _312 from "./nft/v1beta1/query.rpc.Query";
import * as _313 from "./params/v1beta1/query.rpc.Query";
import * as _314 from "./slashing/v1beta1/query.rpc.Query";
import * as _315 from "./staking/v1beta1/query.rpc.Query";
import * as _316 from "./tx/v1beta1/service.rpc.Service";
import * as _317 from "./upgrade/v1beta1/query.rpc.Query";
import * as _318 from "./authz/v1beta1/tx.rpc.msg";
import * as _319 from "./bank/v1beta1/tx.rpc.msg";
import * as _320 from "./crisis/v1beta1/tx.rpc.msg";
import * as _321 from "./distribution/v1beta1/tx.rpc.msg";
import * as _322 from "./evidence/v1beta1/tx.rpc.msg";
import * as _323 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _324 from "./gov/v1/tx.rpc.msg";
import * as _325 from "./gov/v1beta1/tx.rpc.msg";
import * as _326 from "./group/v1/tx.rpc.msg";
import * as _327 from "./nft/v1beta1/tx.rpc.msg";
import * as _328 from "./slashing/v1beta1/tx.rpc.msg";
import * as _329 from "./staking/v1beta1/tx.rpc.msg";
import * as _330 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _331 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _64.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _64.Module;
                    fromPartial(_: Partial<_64.Module>): _64.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _67.QueryConfigRequest): Promise<_67.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _67.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryConfigRequest;
                fromPartial(_: Partial<_67.QueryConfigRequest>): _67.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _67.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryConfigResponse;
                fromPartial(object: Partial<_67.QueryConfigResponse>): _67.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _66.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ModuleDescriptor;
                fromPartial(object: Partial<_66.ModuleDescriptor>): _66.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _66.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.PackageReference;
                fromPartial(object: Partial<_66.PackageReference>): _66.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _66.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MigrateFromInfo;
                fromPartial(object: Partial<_66.MigrateFromInfo>): _66.MigrateFromInfo;
            };
            Config: {
                encode(message: _65.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Config;
                fromPartial(object: Partial<_65.Config>): _65.Config;
            };
            ModuleConfig: {
                encode(message: _65.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ModuleConfig;
                fromPartial(object: Partial<_65.ModuleConfig>): _65.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _70.QueryAccountsRequest): Promise<_70.QueryAccountsResponse>;
                account(request: _70.QueryAccountRequest): Promise<_70.QueryAccountResponse>;
                accountAddressByID(request: _70.QueryAccountAddressByIDRequest): Promise<_70.QueryAccountAddressByIDResponse>;
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                moduleAccounts(request?: _70.QueryModuleAccountsRequest): Promise<_70.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _70.QueryModuleAccountByNameRequest): Promise<_70.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _70.Bech32PrefixRequest): Promise<_70.Bech32PrefixResponse>;
                addressBytesToString(request: _70.AddressBytesToStringRequest): Promise<_70.AddressBytesToStringResponse>;
                addressStringToBytes(request: _70.AddressStringToBytesRequest): Promise<_70.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _281.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _70.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountsRequest;
                fromPartial(object: Partial<_70.QueryAccountsRequest>): _70.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _70.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountsResponse;
                fromPartial(object: Partial<_70.QueryAccountsResponse>): _70.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _70.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountRequest;
                fromPartial(object: Partial<_70.QueryAccountRequest>): _70.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _70.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountResponse;
                fromPartial(object: Partial<_70.QueryAccountResponse>): _70.QueryAccountResponse;
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
            QueryModuleAccountsRequest: {
                encode(_: _70.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_70.QueryModuleAccountsRequest>): _70.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _70.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_70.QueryModuleAccountsResponse>): _70.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _70.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_70.QueryModuleAccountByNameRequest>): _70.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _70.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_70.QueryModuleAccountByNameResponse>): _70.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _70.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.Bech32PrefixRequest;
                fromPartial(_: Partial<_70.Bech32PrefixRequest>): _70.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _70.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Bech32PrefixResponse;
                fromPartial(object: Partial<_70.Bech32PrefixResponse>): _70.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _70.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AddressBytesToStringRequest;
                fromPartial(object: Partial<_70.AddressBytesToStringRequest>): _70.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _70.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AddressBytesToStringResponse;
                fromPartial(object: Partial<_70.AddressBytesToStringResponse>): _70.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _70.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AddressStringToBytesRequest;
                fromPartial(object: Partial<_70.AddressStringToBytesRequest>): _70.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _70.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AddressStringToBytesResponse;
                fromPartial(object: Partial<_70.AddressStringToBytesResponse>): _70.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _70.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_70.QueryAccountAddressByIDRequest>): _70.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _70.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_70.QueryAccountAddressByIDResponse>): _70.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            BaseAccount: {
                encode(message: _68.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.BaseAccount;
                fromPartial(object: Partial<_68.BaseAccount>): _68.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _68.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.ModuleAccount;
                fromPartial(object: Partial<_68.ModuleAccount>): _68.ModuleAccount;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Params;
                fromPartial(object: Partial<_68.Params>): _68.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _74.QueryGrantsRequest): Promise<_74.QueryGrantsResponse>;
                granterGrants(request: _74.QueryGranterGrantsRequest): Promise<_74.QueryGranterGrantsResponse>;
                granteeGrants(request: _74.QueryGranteeGrantsRequest): Promise<_74.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _75.MsgGrant): {
                        typeUrl: string;
                        value: _75.MsgGrant;
                    };
                    exec(value: _75.MsgExec): {
                        typeUrl: string;
                        value: _75.MsgExec;
                    };
                    revoke(value: _75.MsgRevoke): {
                        typeUrl: string;
                        value: _75.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _75.MsgGrant) => {
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
                    }) => _75.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _75.MsgExec) => {
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
                    }) => _75.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _75.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _75.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _75.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgGrant;
                fromPartial(object: Partial<_75.MsgGrant>): _75.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _75.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgExecResponse;
                fromPartial(object: Partial<_75.MsgExecResponse>): _75.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _75.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgExec;
                fromPartial(object: Partial<_75.MsgExec>): _75.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _75.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgGrantResponse;
                fromPartial(_: Partial<_75.MsgGrantResponse>): _75.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _75.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgRevoke;
                fromPartial(object: Partial<_75.MsgRevoke>): _75.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _75.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgRevokeResponse;
                fromPartial(_: Partial<_75.MsgRevokeResponse>): _75.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _74.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGrantsRequest;
                fromPartial(object: Partial<_74.QueryGrantsRequest>): _74.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _74.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGrantsResponse;
                fromPartial(object: Partial<_74.QueryGrantsResponse>): _74.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _74.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_74.QueryGranterGrantsRequest>): _74.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _74.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_74.QueryGranterGrantsResponse>): _74.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _74.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_74.QueryGranteeGrantsRequest>): _74.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _74.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_74.QueryGranteeGrantsResponse>): _74.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
            EventGrant: {
                encode(message: _72.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.EventGrant;
                fromPartial(object: Partial<_72.EventGrant>): _72.EventGrant;
            };
            EventRevoke: {
                encode(message: _72.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.EventRevoke;
                fromPartial(object: Partial<_72.EventRevoke>): _72.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _71.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GenericAuthorization;
                fromPartial(object: Partial<_71.GenericAuthorization>): _71.GenericAuthorization;
            };
            Grant: {
                encode(message: _71.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Grant;
                fromPartial(object: Partial<_71.Grant>): _71.Grant;
            };
            GrantAuthorization: {
                encode(message: _71.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GrantAuthorization;
                fromPartial(object: Partial<_71.GrantAuthorization>): _71.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _71.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GrantQueueItem;
                fromPartial(object: Partial<_71.GrantQueueItem>): _71.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                allBalances(request: _79.QueryAllBalancesRequest): Promise<_79.QueryAllBalancesResponse>;
                spendableBalances(request: _79.QuerySpendableBalancesRequest): Promise<_79.QuerySpendableBalancesResponse>;
                totalSupply(request?: _79.QueryTotalSupplyRequest): Promise<_79.QueryTotalSupplyResponse>;
                supplyOf(request: _79.QuerySupplyOfRequest): Promise<_79.QuerySupplyOfResponse>;
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                denomMetadata(request: _79.QueryDenomMetadataRequest): Promise<_79.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _79.QueryDenomsMetadataRequest): Promise<_79.QueryDenomsMetadataResponse>;
                denomOwners(request: _79.QueryDenomOwnersRequest): Promise<_79.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                    multiSend(value: _80.MsgMultiSend): {
                        typeUrl: string;
                        value: _80.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _80.MsgSend) => {
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
                    }) => _80.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _80.MsgMultiSend) => {
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
                    }) => _80.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _80.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgSend;
                fromPartial(object: Partial<_80.MsgSend>): _80.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _80.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgSendResponse;
                fromPartial(_: Partial<_80.MsgSendResponse>): _80.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _80.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgMultiSend;
                fromPartial(object: Partial<_80.MsgMultiSend>): _80.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _80.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgMultiSendResponse;
                fromPartial(_: Partial<_80.MsgMultiSendResponse>): _80.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _79.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryBalanceRequest;
                fromPartial(object: Partial<_79.QueryBalanceRequest>): _79.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _79.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryBalanceResponse;
                fromPartial(object: Partial<_79.QueryBalanceResponse>): _79.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _79.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryAllBalancesRequest;
                fromPartial(object: Partial<_79.QueryAllBalancesRequest>): _79.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _79.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryAllBalancesResponse;
                fromPartial(object: Partial<_79.QueryAllBalancesResponse>): _79.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _79.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_79.QuerySpendableBalancesRequest>): _79.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _79.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_79.QuerySpendableBalancesResponse>): _79.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _79.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_79.QueryTotalSupplyRequest>): _79.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _79.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_79.QueryTotalSupplyResponse>): _79.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _79.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySupplyOfRequest;
                fromPartial(object: Partial<_79.QuerySupplyOfRequest>): _79.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _79.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySupplyOfResponse;
                fromPartial(object: Partial<_79.QuerySupplyOfResponse>): _79.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _79.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_79.QueryDenomsMetadataRequest>): _79.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _79.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_79.QueryDenomsMetadataResponse>): _79.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _79.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_79.QueryDenomMetadataRequest>): _79.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _79.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_79.QueryDenomMetadataResponse>): _79.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _79.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_79.QueryDenomOwnersRequest>): _79.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _79.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DenomOwner;
                fromPartial(object: Partial<_79.DenomOwner>): _79.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _79.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_79.QueryDenomOwnersResponse>): _79.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            Balance: {
                encode(message: _78.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Balance;
                fromPartial(object: Partial<_78.Balance>): _78.Balance;
            };
            Params: {
                encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Params;
                fromPartial(object: Partial<_77.Params>): _77.Params;
            };
            SendEnabled: {
                encode(message: _77.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.SendEnabled;
                fromPartial(object: Partial<_77.SendEnabled>): _77.SendEnabled;
            };
            Input: {
                encode(message: _77.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Input;
                fromPartial(object: Partial<_77.Input>): _77.Input;
            };
            Output: {
                encode(message: _77.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Output;
                fromPartial(object: Partial<_77.Output>): _77.Output;
            };
            Supply: {
                encode(message: _77.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Supply;
                fromPartial(object: Partial<_77.Supply>): _77.Supply;
            };
            DenomUnit: {
                encode(message: _77.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.DenomUnit;
                fromPartial(object: Partial<_77.DenomUnit>): _77.DenomUnit;
            };
            Metadata: {
                encode(message: _77.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Metadata;
                fromPartial(object: Partial<_77.Metadata>): _77.Metadata;
            };
            SendAuthorization: {
                encode(message: _76.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.SendAuthorization;
                fromPartial(object: Partial<_76.SendAuthorization>): _76.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _81.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.TxResponse;
                    fromPartial(object: Partial<_81.TxResponse>): _81.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _81.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.ABCIMessageLog;
                    fromPartial(object: Partial<_81.ABCIMessageLog>): _81.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _81.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.StringEvent;
                    fromPartial(object: Partial<_81.StringEvent>): _81.StringEvent;
                };
                Attribute: {
                    encode(message: _81.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.Attribute;
                    fromPartial(object: Partial<_81.Attribute>): _81.Attribute;
                };
                GasInfo: {
                    encode(message: _81.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GasInfo;
                    fromPartial(object: Partial<_81.GasInfo>): _81.GasInfo;
                };
                Result: {
                    encode(message: _81.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.Result;
                    fromPartial(object: Partial<_81.Result>): _81.Result;
                };
                SimulationResponse: {
                    encode(message: _81.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.SimulationResponse;
                    fromPartial(object: Partial<_81.SimulationResponse>): _81.SimulationResponse;
                };
                MsgData: {
                    encode(message: _81.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.MsgData;
                    fromPartial(object: Partial<_81.MsgData>): _81.MsgData;
                };
                TxMsgData: {
                    encode(message: _81.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.TxMsgData;
                    fromPartial(object: Partial<_81.TxMsgData>): _81.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _81.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.SearchTxsResult;
                    fromPartial(object: Partial<_81.SearchTxsResult>): _81.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _82.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Pairs;
                    fromPartial(object: Partial<_82.Pairs>): _82.Pairs;
                };
                Pair: {
                    encode(message: _82.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Pair;
                    fromPartial(object: Partial<_82.Pair>): _82.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _303.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _83.ConfigRequest): Promise<_83.ConfigResponse>;
                };
                LCDQueryClient: typeof _284.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _83.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _83.ConfigRequest;
                    fromPartial(_: Partial<_83.ConfigRequest>): _83.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _83.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.ConfigResponse;
                    fromPartial(object: Partial<_83.ConfigResponse>): _83.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _84.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.PageRequest;
                    fromPartial(object: Partial<_84.PageRequest>): _84.PageRequest;
                };
                PageResponse: {
                    encode(message: _84.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.PageResponse;
                    fromPartial(object: Partial<_84.PageResponse>): _84.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _85.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _85.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_85.ListAllInterfacesRequest>): _85.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _85.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_85.ListAllInterfacesResponse>): _85.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _85.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ListImplementationsRequest;
                    fromPartial(object: Partial<_85.ListImplementationsRequest>): _85.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _85.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ListImplementationsResponse;
                    fromPartial(object: Partial<_85.ListImplementationsResponse>): _85.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _86.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.AppDescriptor;
                    fromPartial(object: Partial<_86.AppDescriptor>): _86.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _86.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.TxDescriptor;
                    fromPartial(object: Partial<_86.TxDescriptor>): _86.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _86.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.AuthnDescriptor;
                    fromPartial(object: Partial<_86.AuthnDescriptor>): _86.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _86.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.SigningModeDescriptor;
                    fromPartial(object: Partial<_86.SigningModeDescriptor>): _86.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _86.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.ChainDescriptor;
                    fromPartial(object: Partial<_86.ChainDescriptor>): _86.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _86.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.CodecDescriptor;
                    fromPartial(object: Partial<_86.CodecDescriptor>): _86.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _86.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.InterfaceDescriptor;
                    fromPartial(object: Partial<_86.InterfaceDescriptor>): _86.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _86.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_86.InterfaceImplementerDescriptor>): _86.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _86.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_86.InterfaceAcceptingMessageDescriptor>): _86.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _86.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.ConfigurationDescriptor;
                    fromPartial(object: Partial<_86.ConfigurationDescriptor>): _86.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _86.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.MsgDescriptor;
                    fromPartial(object: Partial<_86.MsgDescriptor>): _86.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _86.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_86.GetAuthnDescriptorRequest>): _86.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _86.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_86.GetAuthnDescriptorResponse>): _86.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _86.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_86.GetChainDescriptorRequest>): _86.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _86.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_86.GetChainDescriptorResponse>): _86.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _86.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_86.GetCodecDescriptorRequest>): _86.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _86.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_86.GetCodecDescriptorResponse>): _86.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _86.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_86.GetConfigurationDescriptorRequest>): _86.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _86.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_86.GetConfigurationDescriptorResponse>): _86.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _86.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_86.GetQueryServicesDescriptorRequest>): _86.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _86.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_86.GetQueryServicesDescriptorResponse>): _86.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _86.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _86.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_86.GetTxDescriptorRequest>): _86.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _86.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_86.GetTxDescriptorResponse>): _86.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _86.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.QueryServicesDescriptor;
                    fromPartial(object: Partial<_86.QueryServicesDescriptor>): _86.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _86.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.QueryServiceDescriptor;
                    fromPartial(object: Partial<_86.QueryServiceDescriptor>): _86.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _86.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.QueryMethodDescriptor;
                    fromPartial(object: Partial<_86.QueryMethodDescriptor>): _86.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _87.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.Snapshot;
                    fromPartial(object: Partial<_87.Snapshot>): _87.Snapshot;
                };
                Metadata: {
                    encode(message: _87.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.Metadata;
                    fromPartial(object: Partial<_87.Metadata>): _87.Metadata;
                };
                SnapshotItem: {
                    encode(message: _87.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotItem;
                    fromPartial(object: Partial<_87.SnapshotItem>): _87.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _87.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotStoreItem;
                    fromPartial(object: Partial<_87.SnapshotStoreItem>): _87.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _87.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotIAVLItem;
                    fromPartial(object: Partial<_87.SnapshotIAVLItem>): _87.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _87.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_87.SnapshotExtensionMeta>): _87.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _87.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_87.SnapshotExtensionPayload>): _87.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _87.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotKVItem;
                    fromPartial(object: Partial<_87.SnapshotKVItem>): _87.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _87.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.SnapshotSchema;
                    fromPartial(object: Partial<_87.SnapshotSchema>): _87.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _89.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.StoreKVPair;
                    fromPartial(object: Partial<_89.StoreKVPair>): _89.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _89.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.BlockMetadata;
                    fromPartial(object: Partial<_89.BlockMetadata>): _89.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _89.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_89.BlockMetadata_DeliverTx>): _89.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _88.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.CommitInfo;
                    fromPartial(object: Partial<_88.CommitInfo>): _88.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _88.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.StoreInfo;
                    fromPartial(object: Partial<_88.StoreInfo>): _88.StoreInfo;
                };
                CommitID: {
                    encode(message: _88.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.CommitID;
                    fromPartial(object: Partial<_88.CommitID>): _88.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _304.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _90.GetNodeInfoRequest): Promise<_90.GetNodeInfoResponse>;
                    getSyncing(request?: _90.GetSyncingRequest): Promise<_90.GetSyncingResponse>;
                    getLatestBlock(request?: _90.GetLatestBlockRequest): Promise<_90.GetLatestBlockResponse>;
                    getBlockByHeight(request: _90.GetBlockByHeightRequest): Promise<_90.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _90.GetLatestValidatorSetRequest): Promise<_90.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _90.GetValidatorSetByHeightRequest): Promise<_90.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _90.ABCIQueryRequest): Promise<_90.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _285.LCDQueryClient;
                Block: {
                    encode(message: _91.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Block;
                    fromPartial(object: Partial<_91.Block>): _91.Block;
                };
                Header: {
                    encode(message: _91.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Header;
                    fromPartial(object: Partial<_91.Header>): _91.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _90.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_90.GetValidatorSetByHeightRequest>): _90.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _90.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_90.GetValidatorSetByHeightResponse>): _90.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _90.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_90.GetLatestValidatorSetRequest>): _90.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _90.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_90.GetLatestValidatorSetResponse>): _90.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _90.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.Validator;
                    fromPartial(object: Partial<_90.Validator>): _90.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _90.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_90.GetBlockByHeightRequest>): _90.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _90.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_90.GetBlockByHeightResponse>): _90.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _90.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.GetLatestBlockRequest;
                    fromPartial(_: Partial<_90.GetLatestBlockRequest>): _90.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _90.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetLatestBlockResponse;
                    fromPartial(object: Partial<_90.GetLatestBlockResponse>): _90.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _90.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.GetSyncingRequest;
                    fromPartial(_: Partial<_90.GetSyncingRequest>): _90.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _90.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetSyncingResponse;
                    fromPartial(object: Partial<_90.GetSyncingResponse>): _90.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _90.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.GetNodeInfoRequest;
                    fromPartial(_: Partial<_90.GetNodeInfoRequest>): _90.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _90.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.GetNodeInfoResponse;
                    fromPartial(object: Partial<_90.GetNodeInfoResponse>): _90.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _90.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.VersionInfo;
                    fromPartial(object: Partial<_90.VersionInfo>): _90.VersionInfo;
                };
                Module: {
                    encode(message: _90.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.Module;
                    fromPartial(object: Partial<_90.Module>): _90.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _90.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.ABCIQueryRequest;
                    fromPartial(object: Partial<_90.ABCIQueryRequest>): _90.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _90.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.ABCIQueryResponse;
                    fromPartial(object: Partial<_90.ABCIQueryResponse>): _90.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _90.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.ProofOp;
                    fromPartial(object: Partial<_90.ProofOp>): _90.ProofOp;
                };
                ProofOps: {
                    encode(message: _90.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.ProofOps;
                    fromPartial(object: Partial<_90.ProofOps>): _90.ProofOps;
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
            MsgClientImpl: typeof _320.MsgClientImpl;
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _98.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.BIP44Params;
                    fromPartial(object: Partial<_98.BIP44Params>): _98.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _99.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.Record;
                    fromPartial(object: Partial<_99.Record>): _99.Record;
                };
                Record_Local: {
                    encode(message: _99.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.Record_Local;
                    fromPartial(object: Partial<_99.Record_Local>): _99.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _99.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.Record_Ledger;
                    fromPartial(object: Partial<_99.Record_Ledger>): _99.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _99.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _99.Record_Multi;
                    fromPartial(_: Partial<_99.Record_Multi>): _99.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _99.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _99.Record_Offline;
                    fromPartial(_: Partial<_99.Record_Offline>): _99.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _100.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.LegacyAminoPubKey;
                fromPartial(object: Partial<_100.LegacyAminoPubKey>): _100.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _101.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.PubKey;
                fromPartial(object: Partial<_101.PubKey>): _101.PubKey;
            };
            PrivKey: {
                encode(message: _101.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.PrivKey;
                fromPartial(object: Partial<_101.PrivKey>): _101.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _102.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.PubKey;
                fromPartial(object: Partial<_102.PubKey>): _102.PubKey;
            };
            PrivKey: {
                encode(message: _102.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.PrivKey;
                fromPartial(object: Partial<_102.PrivKey>): _102.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                validatorOutstandingRewards(request: _105.QueryValidatorOutstandingRewardsRequest): Promise<_105.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _105.QueryValidatorCommissionRequest): Promise<_105.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _105.QueryValidatorSlashesRequest): Promise<_105.QueryValidatorSlashesResponse>;
                delegationRewards(request: _105.QueryDelegationRewardsRequest): Promise<_105.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _105.QueryDelegationTotalRewardsRequest): Promise<_105.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _105.QueryDelegatorWithdrawAddressRequest): Promise<_105.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _105.QueryCommunityPoolRequest): Promise<_105.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _106.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _106.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _106.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _106.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _106.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _106.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _106.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _106.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _106.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _106.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _106.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _106.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _106.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _106.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _106.MsgFundCommunityPool) => {
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
                    }) => _106.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _106.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_106.MsgSetWithdrawAddress>): _106.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _106.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_106.MsgSetWithdrawAddressResponse>): _106.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _106.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_106.MsgWithdrawDelegatorReward>): _106.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _106.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_106.MsgWithdrawDelegatorRewardResponse>): _106.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _106.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_106.MsgWithdrawValidatorCommission>): _106.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _106.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_106.MsgWithdrawValidatorCommissionResponse>): _106.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _106.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgFundCommunityPool;
                fromPartial(object: Partial<_106.MsgFundCommunityPool>): _106.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _106.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_106.MsgFundCommunityPoolResponse>): _106.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.QueryParamsRequest;
                fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryParamsResponse;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _105.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_105.QueryValidatorOutstandingRewardsRequest>): _105.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _105.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_105.QueryValidatorOutstandingRewardsResponse>): _105.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _105.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_105.QueryValidatorCommissionRequest>): _105.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _105.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_105.QueryValidatorCommissionResponse>): _105.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _105.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_105.QueryValidatorSlashesRequest>): _105.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _105.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_105.QueryValidatorSlashesResponse>): _105.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _105.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_105.QueryDelegationRewardsRequest>): _105.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _105.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_105.QueryDelegationRewardsResponse>): _105.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _105.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_105.QueryDelegationTotalRewardsRequest>): _105.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _105.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_105.QueryDelegationTotalRewardsResponse>): _105.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _105.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorsRequest>): _105.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _105.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorsResponse>): _105.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _105.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_105.QueryDelegatorWithdrawAddressRequest>): _105.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _105.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_105.QueryDelegatorWithdrawAddressResponse>): _105.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _105.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_105.QueryCommunityPoolRequest>): _105.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _105.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_105.QueryCommunityPoolResponse>): _105.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _104.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_104.DelegatorWithdrawInfo>): _104.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _104.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewardsRecord>): _104.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _104.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommissionRecord>): _104.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _104.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewardsRecord>): _104.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _104.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_104.ValidatorCurrentRewardsRecord>): _104.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _104.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_104.DelegatorStartingInfoRecord>): _104.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _104.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_104.ValidatorSlashEventRecord>): _104.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.GenesisState;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
            };
            Params: {
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Params;
                fromPartial(object: Partial<_103.Params>): _103.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _103.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_103.ValidatorHistoricalRewards>): _103.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _103.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorCurrentRewards;
                fromPartial(object: Partial<_103.ValidatorCurrentRewards>): _103.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _103.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_103.ValidatorAccumulatedCommission>): _103.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _103.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_103.ValidatorOutstandingRewards>): _103.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _103.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorSlashEvent;
                fromPartial(object: Partial<_103.ValidatorSlashEvent>): _103.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _103.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValidatorSlashEvents;
                fromPartial(object: Partial<_103.ValidatorSlashEvents>): _103.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _103.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.FeePool;
                fromPartial(object: Partial<_103.FeePool>): _103.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _103.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_103.CommunityPoolSpendProposal>): _103.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _103.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DelegatorStartingInfo;
                fromPartial(object: Partial<_103.DelegatorStartingInfo>): _103.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _103.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DelegationDelegatorReward;
                fromPartial(object: Partial<_103.DelegationDelegatorReward>): _103.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _103.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_103.CommunityPoolSpendProposalWithDeposit>): _103.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _109.QueryEvidenceRequest): Promise<_109.QueryEvidenceResponse>;
                allEvidence(request?: _109.QueryAllEvidenceRequest): Promise<_109.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _110.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _110.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _110.MsgSubmitEvidence) => {
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
                    }) => _110.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _110.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgSubmitEvidence;
                fromPartial(object: Partial<_110.MsgSubmitEvidence>): _110.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _110.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_110.MsgSubmitEvidenceResponse>): _110.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _109.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryEvidenceRequest;
                fromPartial(object: Partial<_109.QueryEvidenceRequest>): _109.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _109.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryEvidenceResponse;
                fromPartial(object: Partial<_109.QueryEvidenceResponse>): _109.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _109.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_109.QueryAllEvidenceRequest>): _109.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _109.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_109.QueryAllEvidenceResponse>): _109.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.GenesisState;
                fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
            };
            Equivocation: {
                encode(message: _107.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Equivocation;
                fromPartial(object: Partial<_107.Equivocation>): _107.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _114.MsgGrantAllowance) => {
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
                    }) => _114.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _114.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _114.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _114.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgGrantAllowance;
                fromPartial(object: Partial<_114.MsgGrantAllowance>): _114.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _114.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_114.MsgGrantAllowanceResponse>): _114.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _114.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgRevokeAllowance;
                fromPartial(object: Partial<_114.MsgRevokeAllowance>): _114.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _114.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_114.MsgRevokeAllowanceResponse>): _114.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _113.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowanceRequest;
                fromPartial(object: Partial<_113.QueryAllowanceRequest>): _113.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _113.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowanceResponse;
                fromPartial(object: Partial<_113.QueryAllowanceResponse>): _113.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _113.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowancesRequest;
                fromPartial(object: Partial<_113.QueryAllowancesRequest>): _113.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _113.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowancesResponse;
                fromPartial(object: Partial<_113.QueryAllowancesResponse>): _113.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _113.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterRequest>): _113.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _113.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterResponse>): _113.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
            };
            BasicAllowance: {
                encode(message: _111.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.BasicAllowance;
                fromPartial(object: Partial<_111.BasicAllowance>): _111.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _111.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.PeriodicAllowance;
                fromPartial(object: Partial<_111.PeriodicAllowance>): _111.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _111.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.AllowedMsgAllowance;
                fromPartial(object: Partial<_111.AllowedMsgAllowance>): _111.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _111.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.Grant;
                fromPartial(object: Partial<_111.Grant>): _111.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _119.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _119.MsgExecLegacyContent;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _119.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _119.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _119.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _119.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _119.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _119.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _119.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _119.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _119.MsgDeposit) => {
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
                    }) => _119.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _119.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgSubmitProposal;
                fromPartial(object: Partial<_119.MsgSubmitProposal>): _119.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _119.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_119.MsgSubmitProposalResponse>): _119.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _119.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgExecLegacyContent;
                fromPartial(object: Partial<_119.MsgExecLegacyContent>): _119.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _119.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_119.MsgExecLegacyContentResponse>): _119.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _119.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgVote;
                fromPartial(object: Partial<_119.MsgVote>): _119.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _119.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.MsgVoteResponse;
                fromPartial(_: Partial<_119.MsgVoteResponse>): _119.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _119.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgVoteWeighted;
                fromPartial(object: Partial<_119.MsgVoteWeighted>): _119.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _119.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_119.MsgVoteWeightedResponse>): _119.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _119.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.MsgDeposit;
                fromPartial(object: Partial<_119.MsgDeposit>): _119.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _119.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.MsgDepositResponse;
                fromPartial(_: Partial<_119.MsgDepositResponse>): _119.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _118.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryProposalRequest;
                fromPartial(object: Partial<_118.QueryProposalRequest>): _118.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _118.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryProposalResponse;
                fromPartial(object: Partial<_118.QueryProposalResponse>): _118.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _118.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryProposalsRequest;
                fromPartial(object: Partial<_118.QueryProposalsRequest>): _118.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _118.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryProposalsResponse;
                fromPartial(object: Partial<_118.QueryProposalsResponse>): _118.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _118.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryVoteRequest;
                fromPartial(object: Partial<_118.QueryVoteRequest>): _118.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _118.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryVoteResponse;
                fromPartial(object: Partial<_118.QueryVoteResponse>): _118.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _118.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryVotesRequest;
                fromPartial(object: Partial<_118.QueryVotesRequest>): _118.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _118.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryVotesResponse;
                fromPartial(object: Partial<_118.QueryVotesResponse>): _118.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _118.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryParamsRequest;
                fromPartial(object: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _118.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryParamsResponse;
                fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _118.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryDepositRequest;
                fromPartial(object: Partial<_118.QueryDepositRequest>): _118.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _118.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryDepositResponse;
                fromPartial(object: Partial<_118.QueryDepositResponse>): _118.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _118.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryDepositsRequest;
                fromPartial(object: Partial<_118.QueryDepositsRequest>): _118.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _118.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryDepositsResponse;
                fromPartial(object: Partial<_118.QueryDepositsResponse>): _118.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _118.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryTallyResultRequest;
                fromPartial(object: Partial<_118.QueryTallyResultRequest>): _118.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _118.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.QueryTallyResultResponse;
                fromPartial(object: Partial<_118.QueryTallyResultResponse>): _118.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _117.VoteOption;
            voteOptionToJSON(object: _117.VoteOption): string;
            proposalStatusFromJSON(object: any): _117.ProposalStatus;
            proposalStatusToJSON(object: _117.ProposalStatus): string;
            VoteOption: typeof _117.VoteOption;
            VoteOptionSDKType: typeof _117.VoteOption;
            ProposalStatus: typeof _117.ProposalStatus;
            ProposalStatusSDKType: typeof _117.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _117.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.WeightedVoteOption;
                fromPartial(object: Partial<_117.WeightedVoteOption>): _117.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _117.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Deposit;
                fromPartial(object: Partial<_117.Deposit>): _117.Deposit;
            };
            Proposal: {
                encode(message: _117.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Proposal;
                fromPartial(object: Partial<_117.Proposal>): _117.Proposal;
            };
            TallyResult: {
                encode(message: _117.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.TallyResult;
                fromPartial(object: Partial<_117.TallyResult>): _117.TallyResult;
            };
            Vote: {
                encode(message: _117.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Vote;
                fromPartial(object: Partial<_117.Vote>): _117.Vote;
            };
            DepositParams: {
                encode(message: _117.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.DepositParams;
                fromPartial(object: Partial<_117.DepositParams>): _117.DepositParams;
            };
            VotingParams: {
                encode(message: _117.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.VotingParams;
                fromPartial(object: Partial<_117.VotingParams>): _117.VotingParams;
            };
            TallyParams: {
                encode(message: _117.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.TallyParams;
                fromPartial(object: Partial<_117.TallyParams>): _117.TallyParams;
            };
            GenesisState: {
                encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                proposals(request: _122.QueryProposalsRequest): Promise<_122.QueryProposalsResponse>;
                vote(request: _122.QueryVoteRequest): Promise<_122.QueryVoteResponse>;
                votes(request: _122.QueryVotesRequest): Promise<_122.QueryVotesResponse>;
                params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                deposit(request: _122.QueryDepositRequest): Promise<_122.QueryDepositResponse>;
                deposits(request: _122.QueryDepositsRequest): Promise<_122.QueryDepositsResponse>;
                tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    voteWeighted(value: _123.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _123.MsgVoteWeighted;
                    };
                    deposit(value: _123.MsgDeposit): {
                        typeUrl: string;
                        value: _123.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _123.MsgSubmitProposal) => {
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
                    }) => _123.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _123.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _123.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _123.MsgVoteWeighted) => {
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
                    }) => _123.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _123.MsgDeposit) => {
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
                    }) => _123.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _123.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgSubmitProposal;
                fromPartial(object: Partial<_123.MsgSubmitProposal>): _123.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _123.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_123.MsgSubmitProposalResponse>): _123.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _123.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgVote;
                fromPartial(object: Partial<_123.MsgVote>): _123.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _123.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.MsgVoteResponse;
                fromPartial(_: Partial<_123.MsgVoteResponse>): _123.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _123.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgVoteWeighted;
                fromPartial(object: Partial<_123.MsgVoteWeighted>): _123.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _123.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_123.MsgVoteWeightedResponse>): _123.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _123.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgDeposit;
                fromPartial(object: Partial<_123.MsgDeposit>): _123.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _123.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.MsgDepositResponse;
                fromPartial(_: Partial<_123.MsgDepositResponse>): _123.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _122.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryProposalRequest;
                fromPartial(object: Partial<_122.QueryProposalRequest>): _122.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _122.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryProposalResponse;
                fromPartial(object: Partial<_122.QueryProposalResponse>): _122.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _122.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryProposalsRequest;
                fromPartial(object: Partial<_122.QueryProposalsRequest>): _122.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _122.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryProposalsResponse;
                fromPartial(object: Partial<_122.QueryProposalsResponse>): _122.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _122.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryVoteRequest;
                fromPartial(object: Partial<_122.QueryVoteRequest>): _122.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _122.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryVoteResponse;
                fromPartial(object: Partial<_122.QueryVoteResponse>): _122.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _122.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryVotesRequest;
                fromPartial(object: Partial<_122.QueryVotesRequest>): _122.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _122.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryVotesResponse;
                fromPartial(object: Partial<_122.QueryVotesResponse>): _122.QueryVotesResponse;
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
            QueryDepositRequest: {
                encode(message: _122.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryDepositRequest;
                fromPartial(object: Partial<_122.QueryDepositRequest>): _122.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _122.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryDepositResponse;
                fromPartial(object: Partial<_122.QueryDepositResponse>): _122.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _122.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryDepositsRequest;
                fromPartial(object: Partial<_122.QueryDepositsRequest>): _122.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _122.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryDepositsResponse;
                fromPartial(object: Partial<_122.QueryDepositsResponse>): _122.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _122.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryTallyResultRequest;
                fromPartial(object: Partial<_122.QueryTallyResultRequest>): _122.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _122.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryTallyResultResponse;
                fromPartial(object: Partial<_122.QueryTallyResultResponse>): _122.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _121.VoteOption;
            voteOptionToJSON(object: _121.VoteOption): string;
            proposalStatusFromJSON(object: any): _121.ProposalStatus;
            proposalStatusToJSON(object: _121.ProposalStatus): string;
            VoteOption: typeof _121.VoteOption;
            VoteOptionSDKType: typeof _121.VoteOption;
            ProposalStatus: typeof _121.ProposalStatus;
            ProposalStatusSDKType: typeof _121.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _121.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.WeightedVoteOption;
                fromPartial(object: Partial<_121.WeightedVoteOption>): _121.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _121.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.TextProposal;
                fromPartial(object: Partial<_121.TextProposal>): _121.TextProposal;
            };
            Deposit: {
                encode(message: _121.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.Deposit;
                fromPartial(object: Partial<_121.Deposit>): _121.Deposit;
            };
            Proposal: {
                encode(message: _121.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.Proposal;
                fromPartial(object: Partial<_121.Proposal>): _121.Proposal;
            };
            TallyResult: {
                encode(message: _121.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.TallyResult;
                fromPartial(object: Partial<_121.TallyResult>): _121.TallyResult;
            };
            Vote: {
                encode(message: _121.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.Vote;
                fromPartial(object: Partial<_121.Vote>): _121.Vote;
            };
            DepositParams: {
                encode(message: _121.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.DepositParams;
                fromPartial(object: Partial<_121.DepositParams>): _121.DepositParams;
            };
            VotingParams: {
                encode(message: _121.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.VotingParams;
                fromPartial(object: Partial<_121.VotingParams>): _121.VotingParams;
            };
            TallyParams: {
                encode(message: _121.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.TallyParams;
                fromPartial(object: Partial<_121.TallyParams>): _121.TallyParams;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _126.QueryGroupInfoRequest): Promise<_126.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _126.QueryGroupPolicyInfoRequest): Promise<_126.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _126.QueryGroupMembersRequest): Promise<_126.QueryGroupMembersResponse>;
                groupsByAdmin(request: _126.QueryGroupsByAdminRequest): Promise<_126.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _126.QueryGroupPoliciesByGroupRequest): Promise<_126.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _126.QueryGroupPoliciesByAdminRequest): Promise<_126.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _126.QueryProposalRequest): Promise<_126.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _126.QueryProposalsByGroupPolicyRequest): Promise<_126.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _126.QueryVoteByProposalVoterRequest): Promise<_126.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _126.QueryVotesByProposalRequest): Promise<_126.QueryVotesByProposalResponse>;
                votesByVoter(request: _126.QueryVotesByVoterRequest): Promise<_126.QueryVotesByVoterResponse>;
                groupsByMember(request: _126.QueryGroupsByMemberRequest): Promise<_126.QueryGroupsByMemberResponse>;
                tallyResult(request: _126.QueryTallyResultRequest): Promise<_126.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _127.MsgCreateGroup): {
                        typeUrl: string;
                        value: _127.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _127.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _127.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _127.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _127.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _127.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _127.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _127.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _127.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _127.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _127.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _127.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _127.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _127.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _127.MsgWithdrawProposal;
                    };
                    vote(value: _127.MsgVote): {
                        typeUrl: string;
                        value: _127.MsgVote;
                    };
                    exec(value: _127.MsgExec): {
                        typeUrl: string;
                        value: _127.MsgExec;
                    };
                    leaveGroup(value: _127.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _127.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _127.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _127.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _127.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _127.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _127.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _127.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _127.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _127.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _127.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _127.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _127.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _127.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _127.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _127.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _127.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _127.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _127.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _127.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _127.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _127.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _127.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _127.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _127.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _127.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _127.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _127.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _127.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _127.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _128.VoteOption;
            voteOptionToJSON(object: _128.VoteOption): string;
            proposalStatusFromJSON(object: any): _128.ProposalStatus;
            proposalStatusToJSON(object: _128.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _128.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _128.ProposalExecutorResult): string;
            VoteOption: typeof _128.VoteOption;
            VoteOptionSDKType: typeof _128.VoteOption;
            ProposalStatus: typeof _128.ProposalStatus;
            ProposalStatusSDKType: typeof _128.ProposalStatus;
            ProposalExecutorResult: typeof _128.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _128.ProposalExecutorResult;
            Member: {
                encode(message: _128.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.Member;
                fromPartial(object: Partial<_128.Member>): _128.Member;
            };
            MemberRequest: {
                encode(message: _128.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MemberRequest;
                fromPartial(object: Partial<_128.MemberRequest>): _128.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _128.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_128.ThresholdDecisionPolicy>): _128.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _128.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.PercentageDecisionPolicy;
                fromPartial(object: Partial<_128.PercentageDecisionPolicy>): _128.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _128.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.DecisionPolicyWindows;
                fromPartial(object: Partial<_128.DecisionPolicyWindows>): _128.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _128.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GroupInfo;
                fromPartial(object: Partial<_128.GroupInfo>): _128.GroupInfo;
            };
            GroupMember: {
                encode(message: _128.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GroupMember;
                fromPartial(object: Partial<_128.GroupMember>): _128.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _128.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GroupPolicyInfo;
                fromPartial(object: Partial<_128.GroupPolicyInfo>): _128.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _128.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.Proposal;
                fromPartial(object: Partial<_128.Proposal>): _128.Proposal;
            };
            TallyResult: {
                encode(message: _128.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.TallyResult;
                fromPartial(object: Partial<_128.TallyResult>): _128.TallyResult;
            };
            Vote: {
                encode(message: _128.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.Vote;
                fromPartial(object: Partial<_128.Vote>): _128.Vote;
            };
            execFromJSON(object: any): _127.Exec;
            execToJSON(object: _127.Exec): string;
            Exec: typeof _127.Exec;
            ExecSDKType: typeof _127.Exec;
            MsgCreateGroup: {
                encode(message: _127.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroup;
                fromPartial(object: Partial<_127.MsgCreateGroup>): _127.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _127.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroupResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupResponse>): _127.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _127.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_127.MsgUpdateGroupMembers>): _127.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _127.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupMembersResponse>): _127.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _127.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_127.MsgUpdateGroupAdmin>): _127.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _127.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupAdminResponse>): _127.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _127.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_127.MsgUpdateGroupMetadata>): _127.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _127.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupMetadataResponse>): _127.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _127.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_127.MsgCreateGroupPolicy>): _127.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _127.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupPolicyResponse>): _127.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _127.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyAdmin>): _127.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _127.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_127.MsgCreateGroupWithPolicy>): _127.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _127.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_127.MsgCreateGroupWithPolicyResponse>): _127.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _127.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyAdminResponse>): _127.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _127.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyDecisionPolicy>): _127.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _127.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyDecisionPolicyResponse>): _127.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _127.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_127.MsgUpdateGroupPolicyMetadata>): _127.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _127.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_127.MsgUpdateGroupPolicyMetadataResponse>): _127.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _127.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgSubmitProposal;
                fromPartial(object: Partial<_127.MsgSubmitProposal>): _127.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _127.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_127.MsgSubmitProposalResponse>): _127.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _127.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgWithdrawProposal;
                fromPartial(object: Partial<_127.MsgWithdrawProposal>): _127.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _127.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_127.MsgWithdrawProposalResponse>): _127.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _127.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgVote;
                fromPartial(object: Partial<_127.MsgVote>): _127.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _127.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgVoteResponse;
                fromPartial(_: Partial<_127.MsgVoteResponse>): _127.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _127.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgExec;
                fromPartial(object: Partial<_127.MsgExec>): _127.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _127.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgExecResponse;
                fromPartial(object: Partial<_127.MsgExecResponse>): _127.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _127.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.MsgLeaveGroup;
                fromPartial(object: Partial<_127.MsgLeaveGroup>): _127.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _127.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_127.MsgLeaveGroupResponse>): _127.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _126.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupInfoRequest;
                fromPartial(object: Partial<_126.QueryGroupInfoRequest>): _126.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _126.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupInfoResponse;
                fromPartial(object: Partial<_126.QueryGroupInfoResponse>): _126.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _126.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_126.QueryGroupPolicyInfoRequest>): _126.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _126.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_126.QueryGroupPolicyInfoResponse>): _126.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _126.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupMembersRequest;
                fromPartial(object: Partial<_126.QueryGroupMembersRequest>): _126.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _126.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupMembersResponse;
                fromPartial(object: Partial<_126.QueryGroupMembersResponse>): _126.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _126.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_126.QueryGroupsByAdminRequest>): _126.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _126.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_126.QueryGroupsByAdminResponse>): _126.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _126.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByGroupRequest>): _126.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _126.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByGroupResponse>): _126.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _126.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByAdminRequest>): _126.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _126.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_126.QueryGroupPoliciesByAdminResponse>): _126.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _126.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryProposalRequest;
                fromPartial(object: Partial<_126.QueryProposalRequest>): _126.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _126.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryProposalResponse;
                fromPartial(object: Partial<_126.QueryProposalResponse>): _126.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _126.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_126.QueryProposalsByGroupPolicyRequest>): _126.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _126.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_126.QueryProposalsByGroupPolicyResponse>): _126.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _126.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_126.QueryVoteByProposalVoterRequest>): _126.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _126.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_126.QueryVoteByProposalVoterResponse>): _126.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _126.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_126.QueryVotesByProposalRequest>): _126.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _126.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_126.QueryVotesByProposalResponse>): _126.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _126.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_126.QueryVotesByVoterRequest>): _126.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _126.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_126.QueryVotesByVoterResponse>): _126.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _126.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_126.QueryGroupsByMemberRequest>): _126.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _126.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_126.QueryGroupsByMemberResponse>): _126.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _126.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryTallyResultRequest;
                fromPartial(object: Partial<_126.QueryTallyResultRequest>): _126.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _126.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryTallyResultResponse;
                fromPartial(object: Partial<_126.QueryTallyResultResponse>): _126.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _124.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventCreateGroup;
                fromPartial(object: Partial<_124.EventCreateGroup>): _124.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _124.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventUpdateGroup;
                fromPartial(object: Partial<_124.EventUpdateGroup>): _124.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _124.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventCreateGroupPolicy;
                fromPartial(object: Partial<_124.EventCreateGroupPolicy>): _124.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _124.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_124.EventUpdateGroupPolicy>): _124.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _124.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventSubmitProposal;
                fromPartial(object: Partial<_124.EventSubmitProposal>): _124.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _124.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventWithdrawProposal;
                fromPartial(object: Partial<_124.EventWithdrawProposal>): _124.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _124.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventVote;
                fromPartial(object: Partial<_124.EventVote>): _124.EventVote;
            };
            EventExec: {
                encode(message: _124.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventExec;
                fromPartial(object: Partial<_124.EventExec>): _124.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _124.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.EventLeaveGroup;
                fromPartial(object: Partial<_124.EventLeaveGroup>): _124.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                inflation(request?: _131.QueryInflationRequest): Promise<_131.QueryInflationResponse>;
                annualProvisions(request?: _131.QueryAnnualProvisionsRequest): Promise<_131.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _131.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.QueryParamsRequest;
                fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _131.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.QueryParamsResponse;
                fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _131.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.QueryInflationRequest;
                fromPartial(_: Partial<_131.QueryInflationRequest>): _131.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _131.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.QueryInflationResponse;
                fromPartial(object: Partial<_131.QueryInflationResponse>): _131.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _131.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_131.QueryAnnualProvisionsRequest>): _131.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _131.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_131.QueryAnnualProvisionsResponse>): _131.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _130.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Minter;
                fromPartial(object: Partial<_130.Minter>): _130.Minter;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.Params;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.GenesisState;
                fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                owner(request: _136.QueryOwnerRequest): Promise<_136.QueryOwnerResponse>;
                supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                nFTs(request: _136.QueryNFTsRequest): Promise<_136.QueryNFTsResponse>;
                nFT(request: _136.QueryNFTRequest): Promise<_136.QueryNFTResponse>;
                class(request: _136.QueryClassRequest): Promise<_136.QueryClassResponse>;
                classes(request?: _136.QueryClassesRequest): Promise<_136.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _137.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _137.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _137.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgSend;
                fromPartial(object: Partial<_137.MsgSend>): _137.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _137.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgSendResponse;
                fromPartial(_: Partial<_137.MsgSendResponse>): _137.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _136.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryBalanceRequest;
                fromPartial(object: Partial<_136.QueryBalanceRequest>): _136.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _136.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryBalanceResponse;
                fromPartial(object: Partial<_136.QueryBalanceResponse>): _136.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _136.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryOwnerRequest;
                fromPartial(object: Partial<_136.QueryOwnerRequest>): _136.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _136.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryOwnerResponse;
                fromPartial(object: Partial<_136.QueryOwnerResponse>): _136.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _136.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QuerySupplyRequest;
                fromPartial(object: Partial<_136.QuerySupplyRequest>): _136.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _136.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QuerySupplyResponse;
                fromPartial(object: Partial<_136.QuerySupplyResponse>): _136.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _136.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryNFTsRequest;
                fromPartial(object: Partial<_136.QueryNFTsRequest>): _136.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _136.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryNFTsResponse;
                fromPartial(object: Partial<_136.QueryNFTsResponse>): _136.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _136.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryNFTRequest;
                fromPartial(object: Partial<_136.QueryNFTRequest>): _136.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _136.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryNFTResponse;
                fromPartial(object: Partial<_136.QueryNFTResponse>): _136.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _136.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryClassRequest;
                fromPartial(object: Partial<_136.QueryClassRequest>): _136.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _136.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryClassResponse;
                fromPartial(object: Partial<_136.QueryClassResponse>): _136.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _136.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryClassesRequest;
                fromPartial(object: Partial<_136.QueryClassesRequest>): _136.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _136.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryClassesResponse;
                fromPartial(object: Partial<_136.QueryClassesResponse>): _136.QueryClassesResponse;
            };
            Class: {
                encode(message: _135.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.Class;
                fromPartial(object: Partial<_135.Class>): _135.Class;
            };
            NFT: {
                encode(message: _135.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.NFT;
                fromPartial(object: Partial<_135.NFT>): _135.NFT;
            };
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
            };
            Entry: {
                encode(message: _134.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Entry;
                fromPartial(object: Partial<_134.Entry>): _134.Entry;
            };
            EventSend: {
                encode(message: _133.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.EventSend;
                fromPartial(object: Partial<_133.EventSend>): _133.EventSend;
            };
            EventMint: {
                encode(message: _133.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.EventMint;
                fromPartial(object: Partial<_133.EventMint>): _133.EventMint;
            };
            EventBurn: {
                encode(message: _133.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.EventBurn;
                fromPartial(object: Partial<_133.EventBurn>): _133.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _138.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _138.Module;
                    fromPartial(_: Partial<_138.Module>): _138.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _139.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.TableDescriptor;
                fromPartial(object: Partial<_139.TableDescriptor>): _139.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _139.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_139.PrimaryKeyDescriptor>): _139.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _139.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_139.SecondaryIndexDescriptor>): _139.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _139.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.SingletonDescriptor;
                fromPartial(object: Partial<_139.SingletonDescriptor>): _139.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _140.StorageType;
            storageTypeToJSON(object: _140.StorageType): string;
            StorageType: typeof _140.StorageType;
            StorageTypeSDKType: typeof _140.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _140.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_140.ModuleSchemaDescriptor>): _140.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _140.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_140.ModuleSchemaDescriptor_FileEntry>): _140.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                subspaces(request?: _142.QuerySubspacesRequest): Promise<_142.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.QueryParamsRequest;
                fromPartial(object: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.QueryParamsResponse;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _142.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _142.QuerySubspacesRequest;
                fromPartial(_: Partial<_142.QuerySubspacesRequest>): _142.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _142.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.QuerySubspacesResponse;
                fromPartial(object: Partial<_142.QuerySubspacesResponse>): _142.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _142.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.Subspace;
                fromPartial(object: Partial<_142.Subspace>): _142.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _141.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.ParameterChangeProposal;
                fromPartial(object: Partial<_141.ParameterChangeProposal>): _141.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _141.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.ParamChange;
                fromPartial(object: Partial<_141.ParamChange>): _141.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                signingInfo(request: _144.QuerySigningInfoRequest): Promise<_144.QuerySigningInfoResponse>;
                signingInfos(request?: _144.QuerySigningInfosRequest): Promise<_144.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _146.MsgUnjail): {
                        typeUrl: string;
                        value: _146.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _146.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _146.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _146.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.MsgUnjail;
                fromPartial(object: Partial<_146.MsgUnjail>): _146.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _146.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _146.MsgUnjailResponse;
                fromPartial(_: Partial<_146.MsgUnjailResponse>): _146.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _145.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.ValidatorSigningInfo;
                fromPartial(object: Partial<_145.ValidatorSigningInfo>): _145.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.Params;
                fromPartial(object: Partial<_145.Params>): _145.Params;
            };
            QueryParamsRequest: {
                encode(_: _144.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _144.QueryParamsRequest;
                fromPartial(_: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _144.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _144.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.QuerySigningInfoRequest;
                fromPartial(object: Partial<_144.QuerySigningInfoRequest>): _144.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _144.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.QuerySigningInfoResponse;
                fromPartial(object: Partial<_144.QuerySigningInfoResponse>): _144.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _144.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.QuerySigningInfosRequest;
                fromPartial(object: Partial<_144.QuerySigningInfosRequest>): _144.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _144.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.QuerySigningInfosResponse;
                fromPartial(object: Partial<_144.QuerySigningInfosResponse>): _144.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
            SigningInfo: {
                encode(message: _143.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.SigningInfo;
                fromPartial(object: Partial<_143.SigningInfo>): _143.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _143.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.ValidatorMissedBlocks;
                fromPartial(object: Partial<_143.ValidatorMissedBlocks>): _143.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _143.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.MissedBlock;
                fromPartial(object: Partial<_143.MissedBlock>): _143.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _149.QueryValidatorsRequest): Promise<_149.QueryValidatorsResponse>;
                validator(request: _149.QueryValidatorRequest): Promise<_149.QueryValidatorResponse>;
                validatorDelegations(request: _149.QueryValidatorDelegationsRequest): Promise<_149.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _149.QueryValidatorUnbondingDelegationsRequest): Promise<_149.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _149.QueryDelegationRequest): Promise<_149.QueryDelegationResponse>;
                unbondingDelegation(request: _149.QueryUnbondingDelegationRequest): Promise<_149.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _149.QueryDelegatorDelegationsRequest): Promise<_149.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _149.QueryDelegatorUnbondingDelegationsRequest): Promise<_149.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _149.QueryRedelegationsRequest): Promise<_149.QueryRedelegationsResponse>;
                delegatorValidators(request: _149.QueryDelegatorValidatorsRequest): Promise<_149.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _149.QueryDelegatorValidatorRequest): Promise<_149.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _149.QueryHistoricalInfoRequest): Promise<_149.QueryHistoricalInfoResponse>;
                pool(request?: _149.QueryPoolRequest): Promise<_149.QueryPoolResponse>;
                params(request?: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _151.MsgCreateValidator): {
                        typeUrl: string;
                        value: _151.MsgCreateValidator;
                    };
                    editValidator(value: _151.MsgEditValidator): {
                        typeUrl: string;
                        value: _151.MsgEditValidator;
                    };
                    delegate(value: _151.MsgDelegate): {
                        typeUrl: string;
                        value: _151.MsgDelegate;
                    };
                    beginRedelegate(value: _151.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _151.MsgBeginRedelegate;
                    };
                    undelegate(value: _151.MsgUndelegate): {
                        typeUrl: string;
                        value: _151.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _151.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _151.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _151.MsgCreateValidator) => {
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
                    }) => _151.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _151.MsgEditValidator) => {
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
                    }) => _151.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _151.MsgDelegate) => {
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
                    }) => _151.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _151.MsgBeginRedelegate) => {
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
                    }) => _151.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _151.MsgUndelegate) => {
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
                    }) => _151.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _151.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _151.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _151.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgCreateValidator;
                fromPartial(object: Partial<_151.MsgCreateValidator>): _151.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _151.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_151.MsgCreateValidatorResponse>): _151.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _151.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgEditValidator;
                fromPartial(object: Partial<_151.MsgEditValidator>): _151.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _151.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgEditValidatorResponse;
                fromPartial(_: Partial<_151.MsgEditValidatorResponse>): _151.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _151.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgDelegate;
                fromPartial(object: Partial<_151.MsgDelegate>): _151.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _151.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgDelegateResponse;
                fromPartial(_: Partial<_151.MsgDelegateResponse>): _151.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _151.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgBeginRedelegate;
                fromPartial(object: Partial<_151.MsgBeginRedelegate>): _151.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _151.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_151.MsgBeginRedelegateResponse>): _151.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _151.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgUndelegate;
                fromPartial(object: Partial<_151.MsgUndelegate>): _151.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _151.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgUndelegateResponse;
                fromPartial(object: Partial<_151.MsgUndelegateResponse>): _151.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _151.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_151.MsgCancelUnbondingDelegation>): _151.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _151.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _151.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_151.MsgCancelUnbondingDelegationResponse>): _151.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _150.BondStatus;
            bondStatusToJSON(object: _150.BondStatus): string;
            BondStatus: typeof _150.BondStatus;
            BondStatusSDKType: typeof _150.BondStatus;
            HistoricalInfo: {
                encode(message: _150.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.HistoricalInfo;
                fromPartial(object: Partial<_150.HistoricalInfo>): _150.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _150.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.CommissionRates;
                fromPartial(object: Partial<_150.CommissionRates>): _150.CommissionRates;
            };
            Commission: {
                encode(message: _150.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Commission;
                fromPartial(object: Partial<_150.Commission>): _150.Commission;
            };
            Description: {
                encode(message: _150.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Description;
                fromPartial(object: Partial<_150.Description>): _150.Description;
            };
            Validator: {
                encode(message: _150.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Validator;
                fromPartial(object: Partial<_150.Validator>): _150.Validator;
            };
            ValAddresses: {
                encode(message: _150.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.ValAddresses;
                fromPartial(object: Partial<_150.ValAddresses>): _150.ValAddresses;
            };
            DVPair: {
                encode(message: _150.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.DVPair;
                fromPartial(object: Partial<_150.DVPair>): _150.DVPair;
            };
            DVPairs: {
                encode(message: _150.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.DVPairs;
                fromPartial(object: Partial<_150.DVPairs>): _150.DVPairs;
            };
            DVVTriplet: {
                encode(message: _150.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.DVVTriplet;
                fromPartial(object: Partial<_150.DVVTriplet>): _150.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _150.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.DVVTriplets;
                fromPartial(object: Partial<_150.DVVTriplets>): _150.DVVTriplets;
            };
            Delegation: {
                encode(message: _150.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Delegation;
                fromPartial(object: Partial<_150.Delegation>): _150.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _150.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.UnbondingDelegation;
                fromPartial(object: Partial<_150.UnbondingDelegation>): _150.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _150.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.UnbondingDelegationEntry;
                fromPartial(object: Partial<_150.UnbondingDelegationEntry>): _150.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _150.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.RedelegationEntry;
                fromPartial(object: Partial<_150.RedelegationEntry>): _150.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _150.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Redelegation;
                fromPartial(object: Partial<_150.Redelegation>): _150.Redelegation;
            };
            Params: {
                encode(message: _150.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Params;
                fromPartial(object: Partial<_150.Params>): _150.Params;
            };
            DelegationResponse: {
                encode(message: _150.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.DelegationResponse;
                fromPartial(object: Partial<_150.DelegationResponse>): _150.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _150.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.RedelegationEntryResponse;
                fromPartial(object: Partial<_150.RedelegationEntryResponse>): _150.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _150.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.RedelegationResponse;
                fromPartial(object: Partial<_150.RedelegationResponse>): _150.RedelegationResponse;
            };
            Pool: {
                encode(message: _150.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.Pool;
                fromPartial(object: Partial<_150.Pool>): _150.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _149.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorsRequest;
                fromPartial(object: Partial<_149.QueryValidatorsRequest>): _149.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _149.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorsResponse;
                fromPartial(object: Partial<_149.QueryValidatorsResponse>): _149.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _149.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorRequest;
                fromPartial(object: Partial<_149.QueryValidatorRequest>): _149.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _149.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorResponse;
                fromPartial(object: Partial<_149.QueryValidatorResponse>): _149.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _149.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_149.QueryValidatorDelegationsRequest>): _149.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _149.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_149.QueryValidatorDelegationsResponse>): _149.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _149.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_149.QueryValidatorUnbondingDelegationsRequest>): _149.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _149.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_149.QueryValidatorUnbondingDelegationsResponse>): _149.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _149.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegationRequest;
                fromPartial(object: Partial<_149.QueryDelegationRequest>): _149.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _149.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegationResponse;
                fromPartial(object: Partial<_149.QueryDelegationResponse>): _149.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _149.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_149.QueryUnbondingDelegationRequest>): _149.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _149.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_149.QueryUnbondingDelegationResponse>): _149.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _149.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorDelegationsRequest>): _149.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _149.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorDelegationsResponse>): _149.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _149.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorUnbondingDelegationsRequest>): _149.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _149.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorUnbondingDelegationsResponse>): _149.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _149.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryRedelegationsRequest;
                fromPartial(object: Partial<_149.QueryRedelegationsRequest>): _149.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _149.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryRedelegationsResponse;
                fromPartial(object: Partial<_149.QueryRedelegationsResponse>): _149.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _149.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorsRequest>): _149.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _149.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorsResponse>): _149.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _149.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorRequest>): _149.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _149.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_149.QueryDelegatorValidatorResponse>): _149.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _149.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_149.QueryHistoricalInfoRequest>): _149.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _149.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_149.QueryHistoricalInfoResponse>): _149.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _149.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _149.QueryPoolRequest;
                fromPartial(_: Partial<_149.QueryPoolRequest>): _149.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _149.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryPoolResponse;
                fromPartial(object: Partial<_149.QueryPoolResponse>): _149.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _149.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _149.QueryParamsRequest;
                fromPartial(_: Partial<_149.QueryParamsRequest>): _149.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _149.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.QueryParamsResponse;
                fromPartial(object: Partial<_149.QueryParamsResponse>): _149.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _148.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.GenesisState;
                fromPartial(object: Partial<_148.GenesisState>): _148.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _148.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.LastValidatorPower;
                fromPartial(object: Partial<_148.LastValidatorPower>): _148.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _147.AuthorizationType;
            authorizationTypeToJSON(object: _147.AuthorizationType): string;
            AuthorizationType: typeof _147.AuthorizationType;
            AuthorizationTypeSDKType: typeof _147.AuthorizationType;
            StakeAuthorization: {
                encode(message: _147.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.StakeAuthorization;
                fromPartial(object: Partial<_147.StakeAuthorization>): _147.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _147.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.StakeAuthorization_Validators;
                fromPartial(object: Partial<_147.StakeAuthorization_Validators>): _147.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _152.SignMode;
                signModeToJSON(object: _152.SignMode): string;
                SignMode: typeof _152.SignMode;
                SignModeSDKType: typeof _152.SignMode;
                SignatureDescriptors: {
                    encode(message: _152.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.SignatureDescriptors;
                    fromPartial(object: Partial<_152.SignatureDescriptors>): _152.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _152.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.SignatureDescriptor;
                    fromPartial(object: Partial<_152.SignatureDescriptor>): _152.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _152.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data>): _152.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _152.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data_Single>): _152.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _152.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_152.SignatureDescriptor_Data_Multi>): _152.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _316.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _153.SimulateRequest): Promise<_153.SimulateResponse>;
                getTx(request: _153.GetTxRequest): Promise<_153.GetTxResponse>;
                broadcastTx(request: _153.BroadcastTxRequest): Promise<_153.BroadcastTxResponse>;
                getTxsEvent(request: _153.GetTxsEventRequest): Promise<_153.GetTxsEventResponse>;
                getBlockWithTxs(request: _153.GetBlockWithTxsRequest): Promise<_153.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            Tx: {
                encode(message: _154.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.Tx;
                fromPartial(object: Partial<_154.Tx>): _154.Tx;
            };
            TxRaw: {
                encode(message: _154.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.TxRaw;
                fromPartial(object: Partial<_154.TxRaw>): _154.TxRaw;
            };
            SignDoc: {
                encode(message: _154.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.SignDoc;
                fromPartial(object: Partial<_154.SignDoc>): _154.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _154.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.SignDocDirectAux;
                fromPartial(object: Partial<_154.SignDocDirectAux>): _154.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _154.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.TxBody;
                fromPartial(object: Partial<_154.TxBody>): _154.TxBody;
            };
            AuthInfo: {
                encode(message: _154.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.AuthInfo;
                fromPartial(object: Partial<_154.AuthInfo>): _154.AuthInfo;
            };
            SignerInfo: {
                encode(message: _154.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.SignerInfo;
                fromPartial(object: Partial<_154.SignerInfo>): _154.SignerInfo;
            };
            ModeInfo: {
                encode(message: _154.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.ModeInfo;
                fromPartial(object: Partial<_154.ModeInfo>): _154.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _154.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.ModeInfo_Single;
                fromPartial(object: Partial<_154.ModeInfo_Single>): _154.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _154.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.ModeInfo_Multi;
                fromPartial(object: Partial<_154.ModeInfo_Multi>): _154.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _154.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.Fee;
                fromPartial(object: Partial<_154.Fee>): _154.Fee;
            };
            Tip: {
                encode(message: _154.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.Tip;
                fromPartial(object: Partial<_154.Tip>): _154.Tip;
            };
            AuxSignerData: {
                encode(message: _154.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.AuxSignerData;
                fromPartial(object: Partial<_154.AuxSignerData>): _154.AuxSignerData;
            };
            orderByFromJSON(object: any): _153.OrderBy;
            orderByToJSON(object: _153.OrderBy): string;
            broadcastModeFromJSON(object: any): _153.BroadcastMode;
            broadcastModeToJSON(object: _153.BroadcastMode): string;
            OrderBy: typeof _153.OrderBy;
            OrderBySDKType: typeof _153.OrderBy;
            BroadcastMode: typeof _153.BroadcastMode;
            BroadcastModeSDKType: typeof _153.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _153.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetTxsEventRequest;
                fromPartial(object: Partial<_153.GetTxsEventRequest>): _153.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _153.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetTxsEventResponse;
                fromPartial(object: Partial<_153.GetTxsEventResponse>): _153.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _153.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.BroadcastTxRequest;
                fromPartial(object: Partial<_153.BroadcastTxRequest>): _153.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _153.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.BroadcastTxResponse;
                fromPartial(object: Partial<_153.BroadcastTxResponse>): _153.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _153.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.SimulateRequest;
                fromPartial(object: Partial<_153.SimulateRequest>): _153.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _153.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.SimulateResponse;
                fromPartial(object: Partial<_153.SimulateResponse>): _153.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _153.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetTxRequest;
                fromPartial(object: Partial<_153.GetTxRequest>): _153.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _153.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetTxResponse;
                fromPartial(object: Partial<_153.GetTxResponse>): _153.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _153.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_153.GetBlockWithTxsRequest>): _153.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _153.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_153.GetBlockWithTxsResponse>): _153.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _155.QueryCurrentPlanRequest): Promise<_155.QueryCurrentPlanResponse>;
                appliedPlan(request: _155.QueryAppliedPlanRequest): Promise<_155.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _155.QueryUpgradedConsensusStateRequest): Promise<_155.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _155.QueryModuleVersionsRequest): Promise<_155.QueryModuleVersionsResponse>;
                authority(request?: _155.QueryAuthorityRequest): Promise<_155.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _156.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _156.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _156.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _156.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _156.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _156.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _156.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _156.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _157.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Plan;
                fromPartial(object: Partial<_157.Plan>): _157.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _157.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_157.SoftwareUpgradeProposal>): _157.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _157.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_157.CancelSoftwareUpgradeProposal>): _157.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _157.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.ModuleVersion;
                fromPartial(object: Partial<_157.ModuleVersion>): _157.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _156.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_156.MsgSoftwareUpgrade>): _156.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _156.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _156.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_156.MsgSoftwareUpgradeResponse>): _156.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _156.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.MsgCancelUpgrade;
                fromPartial(object: Partial<_156.MsgCancelUpgrade>): _156.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _156.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _156.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_156.MsgCancelUpgradeResponse>): _156.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _155.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _155.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_155.QueryCurrentPlanRequest>): _155.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _155.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_155.QueryCurrentPlanResponse>): _155.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _155.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_155.QueryAppliedPlanRequest>): _155.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _155.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_155.QueryAppliedPlanResponse>): _155.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _155.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_155.QueryUpgradedConsensusStateRequest>): _155.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _155.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_155.QueryUpgradedConsensusStateResponse>): _155.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _155.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_155.QueryModuleVersionsRequest>): _155.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _155.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_155.QueryModuleVersionsResponse>): _155.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _155.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _155.QueryAuthorityRequest;
                fromPartial(_: Partial<_155.QueryAuthorityRequest>): _155.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _155.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.QueryAuthorityResponse;
                fromPartial(object: Partial<_155.QueryAuthorityResponse>): _155.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _158.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _158.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _158.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _158.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _158.MsgCreateVestingAccount) => {
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
                    }) => _158.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _158.MsgCreatePermanentLockedAccount) => {
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
                    }) => _158.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _158.MsgCreatePeriodicVestingAccount) => {
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
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
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
                    }) => _158.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _159.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.BaseVestingAccount;
                fromPartial(object: Partial<_159.BaseVestingAccount>): _159.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _159.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.ContinuousVestingAccount;
                fromPartial(object: Partial<_159.ContinuousVestingAccount>): _159.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _159.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.DelayedVestingAccount;
                fromPartial(object: Partial<_159.DelayedVestingAccount>): _159.DelayedVestingAccount;
            };
            Period: {
                encode(message: _159.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.Period;
                fromPartial(object: Partial<_159.Period>): _159.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _159.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.PeriodicVestingAccount;
                fromPartial(object: Partial<_159.PeriodicVestingAccount>): _159.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _159.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.PermanentLockedAccount;
                fromPartial(object: Partial<_159.PermanentLockedAccount>): _159.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _158.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgCreateVestingAccount;
                fromPartial(object: Partial<_158.MsgCreateVestingAccount>): _158.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _158.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_158.MsgCreateVestingAccountResponse>): _158.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _158.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_158.MsgCreatePermanentLockedAccount>): _158.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _158.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_158.MsgCreatePermanentLockedAccountResponse>): _158.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _158.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_158.MsgCreatePeriodicVestingAccount>): _158.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _158.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_158.MsgCreatePeriodicVestingAccountResponse>): _158.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _318.MsgClientImpl;
                };
                bank: {
                    v1beta1: _319.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _320.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _321.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _322.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _323.MsgClientImpl;
                };
                gov: {
                    v1: _324.MsgClientImpl;
                    v1beta1: _325.MsgClientImpl;
                };
                group: {
                    v1: _326.MsgClientImpl;
                };
                nft: {
                    v1beta1: _327.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _328.MsgClientImpl;
                };
                staking: {
                    v1beta1: _329.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _330.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _331.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _67.QueryConfigRequest): Promise<_67.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _70.QueryAccountsRequest): Promise<_70.QueryAccountsResponse>;
                        account(request: _70.QueryAccountRequest): Promise<_70.QueryAccountResponse>;
                        accountAddressByID(request: _70.QueryAccountAddressByIDRequest): Promise<_70.QueryAccountAddressByIDResponse>;
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        moduleAccounts(request?: _70.QueryModuleAccountsRequest): Promise<_70.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _70.QueryModuleAccountByNameRequest): Promise<_70.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _70.Bech32PrefixRequest): Promise<_70.Bech32PrefixResponse>;
                        addressBytesToString(request: _70.AddressBytesToStringRequest): Promise<_70.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _70.AddressStringToBytesRequest): Promise<_70.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _74.QueryGrantsRequest): Promise<_74.QueryGrantsResponse>;
                        granterGrants(request: _74.QueryGranterGrantsRequest): Promise<_74.QueryGranterGrantsResponse>;
                        granteeGrants(request: _74.QueryGranteeGrantsRequest): Promise<_74.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        allBalances(request: _79.QueryAllBalancesRequest): Promise<_79.QueryAllBalancesResponse>;
                        spendableBalances(request: _79.QuerySpendableBalancesRequest): Promise<_79.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _79.QueryTotalSupplyRequest): Promise<_79.QueryTotalSupplyResponse>;
                        supplyOf(request: _79.QuerySupplyOfRequest): Promise<_79.QuerySupplyOfResponse>;
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        denomMetadata(request: _79.QueryDenomMetadataRequest): Promise<_79.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _79.QueryDenomsMetadataRequest): Promise<_79.QueryDenomsMetadataResponse>;
                        denomOwners(request: _79.QueryDenomOwnersRequest): Promise<_79.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _83.ConfigRequest): Promise<_83.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _90.GetNodeInfoRequest): Promise<_90.GetNodeInfoResponse>;
                            getSyncing(request?: _90.GetSyncingRequest): Promise<_90.GetSyncingResponse>;
                            getLatestBlock(request?: _90.GetLatestBlockRequest): Promise<_90.GetLatestBlockResponse>;
                            getBlockByHeight(request: _90.GetBlockByHeightRequest): Promise<_90.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _90.GetLatestValidatorSetRequest): Promise<_90.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _90.GetValidatorSetByHeightRequest): Promise<_90.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _90.ABCIQueryRequest): Promise<_90.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _105.QueryValidatorOutstandingRewardsRequest): Promise<_105.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _105.QueryValidatorCommissionRequest): Promise<_105.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _105.QueryValidatorSlashesRequest): Promise<_105.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _105.QueryDelegationRewardsRequest): Promise<_105.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _105.QueryDelegationTotalRewardsRequest): Promise<_105.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _105.QueryDelegatorWithdrawAddressRequest): Promise<_105.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _105.QueryCommunityPoolRequest): Promise<_105.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _109.QueryEvidenceRequest): Promise<_109.QueryEvidenceResponse>;
                        allEvidence(request?: _109.QueryAllEvidenceRequest): Promise<_109.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                        allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                        allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                        proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                        vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                        votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                        params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                        deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                        deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                        tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                        proposals(request: _122.QueryProposalsRequest): Promise<_122.QueryProposalsResponse>;
                        vote(request: _122.QueryVoteRequest): Promise<_122.QueryVoteResponse>;
                        votes(request: _122.QueryVotesRequest): Promise<_122.QueryVotesResponse>;
                        params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        deposit(request: _122.QueryDepositRequest): Promise<_122.QueryDepositResponse>;
                        deposits(request: _122.QueryDepositsRequest): Promise<_122.QueryDepositsResponse>;
                        tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _126.QueryGroupInfoRequest): Promise<_126.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _126.QueryGroupPolicyInfoRequest): Promise<_126.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _126.QueryGroupMembersRequest): Promise<_126.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _126.QueryGroupsByAdminRequest): Promise<_126.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _126.QueryGroupPoliciesByGroupRequest): Promise<_126.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _126.QueryGroupPoliciesByAdminRequest): Promise<_126.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _126.QueryProposalRequest): Promise<_126.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _126.QueryProposalsByGroupPolicyRequest): Promise<_126.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _126.QueryVoteByProposalVoterRequest): Promise<_126.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _126.QueryVotesByProposalRequest): Promise<_126.QueryVotesByProposalResponse>;
                        votesByVoter(request: _126.QueryVotesByVoterRequest): Promise<_126.QueryVotesByVoterResponse>;
                        groupsByMember(request: _126.QueryGroupsByMemberRequest): Promise<_126.QueryGroupsByMemberResponse>;
                        tallyResult(request: _126.QueryTallyResultRequest): Promise<_126.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        inflation(request?: _131.QueryInflationRequest): Promise<_131.QueryInflationResponse>;
                        annualProvisions(request?: _131.QueryAnnualProvisionsRequest): Promise<_131.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                        owner(request: _136.QueryOwnerRequest): Promise<_136.QueryOwnerResponse>;
                        supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                        nFTs(request: _136.QueryNFTsRequest): Promise<_136.QueryNFTsResponse>;
                        nFT(request: _136.QueryNFTRequest): Promise<_136.QueryNFTResponse>;
                        class(request: _136.QueryClassRequest): Promise<_136.QueryClassResponse>;
                        classes(request?: _136.QueryClassesRequest): Promise<_136.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                        subspaces(request?: _142.QuerySubspacesRequest): Promise<_142.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _144.QueryParamsRequest): Promise<_144.QueryParamsResponse>;
                        signingInfo(request: _144.QuerySigningInfoRequest): Promise<_144.QuerySigningInfoResponse>;
                        signingInfos(request?: _144.QuerySigningInfosRequest): Promise<_144.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _149.QueryValidatorsRequest): Promise<_149.QueryValidatorsResponse>;
                        validator(request: _149.QueryValidatorRequest): Promise<_149.QueryValidatorResponse>;
                        validatorDelegations(request: _149.QueryValidatorDelegationsRequest): Promise<_149.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _149.QueryValidatorUnbondingDelegationsRequest): Promise<_149.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _149.QueryDelegationRequest): Promise<_149.QueryDelegationResponse>;
                        unbondingDelegation(request: _149.QueryUnbondingDelegationRequest): Promise<_149.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _149.QueryDelegatorDelegationsRequest): Promise<_149.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _149.QueryDelegatorUnbondingDelegationsRequest): Promise<_149.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _149.QueryRedelegationsRequest): Promise<_149.QueryRedelegationsResponse>;
                        delegatorValidators(request: _149.QueryDelegatorValidatorsRequest): Promise<_149.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _149.QueryDelegatorValidatorRequest): Promise<_149.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _149.QueryHistoricalInfoRequest): Promise<_149.QueryHistoricalInfoResponse>;
                        pool(request?: _149.QueryPoolRequest): Promise<_149.QueryPoolResponse>;
                        params(request?: _149.QueryParamsRequest): Promise<_149.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _153.SimulateRequest): Promise<_153.SimulateResponse>;
                        getTx(request: _153.GetTxRequest): Promise<_153.GetTxResponse>;
                        broadcastTx(request: _153.BroadcastTxRequest): Promise<_153.BroadcastTxResponse>;
                        getTxsEvent(request: _153.GetTxsEventRequest): Promise<_153.GetTxsEventResponse>;
                        getBlockWithTxs(request: _153.GetBlockWithTxsRequest): Promise<_153.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _155.QueryCurrentPlanRequest): Promise<_155.QueryCurrentPlanResponse>;
                        appliedPlan(request: _155.QueryAppliedPlanRequest): Promise<_155.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _155.QueryUpgradedConsensusStateRequest): Promise<_155.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _155.QueryModuleVersionsRequest): Promise<_155.QueryModuleVersionsResponse>;
                        authority(request?: _155.QueryAuthorityRequest): Promise<_155.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _281.LCDQueryClient;
                };
                authz: {
                    v1beta1: _282.LCDQueryClient;
                };
                bank: {
                    v1beta1: _283.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _284.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _285.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _286.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _287.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _288.LCDQueryClient;
                };
                gov: {
                    v1: _289.LCDQueryClient;
                    v1beta1: _290.LCDQueryClient;
                };
                group: {
                    v1: _291.LCDQueryClient;
                };
                mint: {
                    v1beta1: _292.LCDQueryClient;
                };
                nft: {
                    v1beta1: _293.LCDQueryClient;
                };
                params: {
                    v1beta1: _294.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _295.LCDQueryClient;
                };
                staking: {
                    v1beta1: _296.LCDQueryClient;
                };
                tx: {
                    v1beta1: _297.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _298.LCDQueryClient;
                };
            };
        }>;
    };
}
