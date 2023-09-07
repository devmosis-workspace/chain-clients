import * as _41 from "./app/module/v1alpha1/module";
import * as _42 from "./app/v1alpha1/config";
import * as _43 from "./app/v1alpha1/module";
import * as _44 from "./app/v1alpha1/query";
import * as _45 from "./auth/v1beta1/auth";
import * as _46 from "./auth/v1beta1/genesis";
import * as _47 from "./auth/v1beta1/query";
import * as _48 from "./authz/v1beta1/authz";
import * as _49 from "./authz/v1beta1/event";
import * as _50 from "./authz/v1beta1/genesis";
import * as _51 from "./authz/v1beta1/query";
import * as _52 from "./authz/v1beta1/tx";
import * as _53 from "./bank/v1beta1/authz";
import * as _54 from "./bank/v1beta1/bank";
import * as _55 from "./bank/v1beta1/genesis";
import * as _56 from "./bank/v1beta1/query";
import * as _57 from "./bank/v1beta1/tx";
import * as _58 from "./base/abci/v1beta1/abci";
import * as _59 from "./base/kv/v1beta1/kv";
import * as _60 from "./base/node/v1beta1/query";
import * as _61 from "./base/query/v1beta1/pagination";
import * as _62 from "./base/reflection/v1beta1/reflection";
import * as _63 from "./base/reflection/v2alpha1/reflection";
import * as _64 from "./base/snapshots/v1beta1/snapshot";
import * as _65 from "./base/store/v1beta1/commit_info";
import * as _66 from "./base/store/v1beta1/listening";
import * as _67 from "./base/tendermint/v1beta1/query";
import * as _68 from "./base/tendermint/v1beta1/types";
import * as _69 from "./base/v1beta1/coin";
import * as _70 from "./capability/v1beta1/capability";
import * as _71 from "./capability/v1beta1/genesis";
import * as _72 from "./crisis/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/tx";
import * as _74 from "./crypto/ed25519/keys";
import * as _75 from "./crypto/hd/v1/hd";
import * as _76 from "./crypto/keyring/v1/record";
import * as _77 from "./crypto/multisig/keys";
import * as _78 from "./crypto/secp256k1/keys";
import * as _79 from "./crypto/secp256r1/keys";
import * as _80 from "./distribution/v1beta1/distribution";
import * as _81 from "./distribution/v1beta1/genesis";
import * as _82 from "./distribution/v1beta1/query";
import * as _83 from "./distribution/v1beta1/tx";
import * as _84 from "./evidence/v1beta1/evidence";
import * as _85 from "./evidence/v1beta1/genesis";
import * as _86 from "./evidence/v1beta1/query";
import * as _87 from "./evidence/v1beta1/tx";
import * as _88 from "./feegrant/v1beta1/feegrant";
import * as _89 from "./feegrant/v1beta1/genesis";
import * as _90 from "./feegrant/v1beta1/query";
import * as _91 from "./feegrant/v1beta1/tx";
import * as _92 from "./genutil/v1beta1/genesis";
import * as _93 from "./gov/v1/genesis";
import * as _94 from "./gov/v1/gov";
import * as _95 from "./gov/v1/query";
import * as _96 from "./gov/v1/tx";
import * as _97 from "./gov/v1beta1/genesis";
import * as _98 from "./gov/v1beta1/gov";
import * as _99 from "./gov/v1beta1/query";
import * as _100 from "./gov/v1beta1/tx";
import * as _101 from "./group/v1/events";
import * as _102 from "./group/v1/genesis";
import * as _103 from "./group/v1/query";
import * as _104 from "./group/v1/tx";
import * as _105 from "./group/v1/types";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _110 from "./nft/v1beta1/event";
import * as _111 from "./nft/v1beta1/genesis";
import * as _112 from "./nft/v1beta1/nft";
import * as _113 from "./nft/v1beta1/query";
import * as _114 from "./nft/v1beta1/tx";
import * as _115 from "./orm/module/v1alpha1/module";
import * as _116 from "./orm/v1/orm";
import * as _117 from "./orm/v1alpha1/schema";
import * as _118 from "./params/v1beta1/params";
import * as _119 from "./params/v1beta1/query";
import * as _120 from "./slashing/v1beta1/genesis";
import * as _121 from "./slashing/v1beta1/query";
import * as _122 from "./slashing/v1beta1/slashing";
import * as _123 from "./slashing/v1beta1/tx";
import * as _124 from "./staking/v1beta1/authz";
import * as _125 from "./staking/v1beta1/genesis";
import * as _126 from "./staking/v1beta1/query";
import * as _127 from "./staking/v1beta1/staking";
import * as _128 from "./staking/v1beta1/tx";
import * as _129 from "./tx/signing/v1beta1/signing";
import * as _130 from "./tx/v1beta1/service";
import * as _131 from "./tx/v1beta1/tx";
import * as _132 from "./upgrade/v1beta1/query";
import * as _133 from "./upgrade/v1beta1/tx";
import * as _134 from "./upgrade/v1beta1/upgrade";
import * as _135 from "./vesting/v1beta1/tx";
import * as _136 from "./vesting/v1beta1/vesting";
import * as _213 from "./auth/v1beta1/query.lcd";
import * as _214 from "./authz/v1beta1/query.lcd";
import * as _215 from "./bank/v1beta1/query.lcd";
import * as _216 from "./base/node/v1beta1/query.lcd";
import * as _217 from "./base/tendermint/v1beta1/query.lcd";
import * as _218 from "./distribution/v1beta1/query.lcd";
import * as _219 from "./evidence/v1beta1/query.lcd";
import * as _220 from "./feegrant/v1beta1/query.lcd";
import * as _221 from "./gov/v1/query.lcd";
import * as _222 from "./gov/v1beta1/query.lcd";
import * as _223 from "./group/v1/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./nft/v1beta1/query.lcd";
import * as _226 from "./params/v1beta1/query.lcd";
import * as _227 from "./slashing/v1beta1/query.lcd";
import * as _228 from "./staking/v1beta1/query.lcd";
import * as _229 from "./tx/v1beta1/service.lcd";
import * as _230 from "./upgrade/v1beta1/query.lcd";
import * as _231 from "./app/v1alpha1/query.rpc.Query";
import * as _232 from "./auth/v1beta1/query.rpc.Query";
import * as _233 from "./authz/v1beta1/query.rpc.Query";
import * as _234 from "./bank/v1beta1/query.rpc.Query";
import * as _235 from "./base/node/v1beta1/query.rpc.Service";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _237 from "./distribution/v1beta1/query.rpc.Query";
import * as _238 from "./evidence/v1beta1/query.rpc.Query";
import * as _239 from "./feegrant/v1beta1/query.rpc.Query";
import * as _240 from "./gov/v1/query.rpc.Query";
import * as _241 from "./gov/v1beta1/query.rpc.Query";
import * as _242 from "./group/v1/query.rpc.Query";
import * as _243 from "./mint/v1beta1/query.rpc.Query";
import * as _244 from "./nft/v1beta1/query.rpc.Query";
import * as _245 from "./params/v1beta1/query.rpc.Query";
import * as _246 from "./slashing/v1beta1/query.rpc.Query";
import * as _247 from "./staking/v1beta1/query.rpc.Query";
import * as _248 from "./tx/v1beta1/service.rpc.Service";
import * as _249 from "./upgrade/v1beta1/query.rpc.Query";
import * as _250 from "./authz/v1beta1/tx.rpc.msg";
import * as _251 from "./bank/v1beta1/tx.rpc.msg";
import * as _252 from "./crisis/v1beta1/tx.rpc.msg";
import * as _253 from "./distribution/v1beta1/tx.rpc.msg";
import * as _254 from "./evidence/v1beta1/tx.rpc.msg";
import * as _255 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _256 from "./gov/v1/tx.rpc.msg";
import * as _257 from "./gov/v1beta1/tx.rpc.msg";
import * as _258 from "./group/v1/tx.rpc.msg";
import * as _259 from "./nft/v1beta1/tx.rpc.msg";
import * as _260 from "./slashing/v1beta1/tx.rpc.msg";
import * as _261 from "./staking/v1beta1/tx.rpc.msg";
import * as _262 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _263 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _41.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _41.Module;
                    fromPartial(_: Partial<_41.Module>): _41.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _44.QueryConfigRequest): Promise<_44.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _44.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.QueryConfigRequest;
                fromPartial(_: Partial<_44.QueryConfigRequest>): _44.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _44.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.QueryConfigResponse;
                fromPartial(object: Partial<_44.QueryConfigResponse>): _44.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _43.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ModuleDescriptor;
                fromPartial(object: Partial<_43.ModuleDescriptor>): _43.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _43.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.PackageReference;
                fromPartial(object: Partial<_43.PackageReference>): _43.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _43.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.MigrateFromInfo;
                fromPartial(object: Partial<_43.MigrateFromInfo>): _43.MigrateFromInfo;
            };
            Config: {
                encode(message: _42.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Config;
                fromPartial(object: Partial<_42.Config>): _42.Config;
            };
            ModuleConfig: {
                encode(message: _42.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.ModuleConfig;
                fromPartial(object: Partial<_42.ModuleConfig>): _42.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _47.QueryAccountsRequest): Promise<_47.QueryAccountsResponse>;
                account(request: _47.QueryAccountRequest): Promise<_47.QueryAccountResponse>;
                accountAddressByID(request: _47.QueryAccountAddressByIDRequest): Promise<_47.QueryAccountAddressByIDResponse>;
                params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                moduleAccounts(request?: _47.QueryModuleAccountsRequest): Promise<_47.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _47.QueryModuleAccountByNameRequest): Promise<_47.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _47.Bech32PrefixRequest): Promise<_47.Bech32PrefixResponse>;
                addressBytesToString(request: _47.AddressBytesToStringRequest): Promise<_47.AddressBytesToStringResponse>;
                addressStringToBytes(request: _47.AddressStringToBytesRequest): Promise<_47.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _47.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountsRequest;
                fromPartial(object: Partial<_47.QueryAccountsRequest>): _47.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _47.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountsResponse;
                fromPartial(object: Partial<_47.QueryAccountsResponse>): _47.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _47.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountRequest;
                fromPartial(object: Partial<_47.QueryAccountRequest>): _47.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _47.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountResponse;
                fromPartial(object: Partial<_47.QueryAccountResponse>): _47.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _47.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _47.QueryParamsRequest;
                fromPartial(_: Partial<_47.QueryParamsRequest>): _47.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _47.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryParamsResponse;
                fromPartial(object: Partial<_47.QueryParamsResponse>): _47.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _47.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _47.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_47.QueryModuleAccountsRequest>): _47.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _47.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_47.QueryModuleAccountsResponse>): _47.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _47.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_47.QueryModuleAccountByNameRequest>): _47.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _47.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_47.QueryModuleAccountByNameResponse>): _47.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _47.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _47.Bech32PrefixRequest;
                fromPartial(_: Partial<_47.Bech32PrefixRequest>): _47.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _47.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Bech32PrefixResponse;
                fromPartial(object: Partial<_47.Bech32PrefixResponse>): _47.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _47.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AddressBytesToStringRequest;
                fromPartial(object: Partial<_47.AddressBytesToStringRequest>): _47.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _47.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AddressBytesToStringResponse;
                fromPartial(object: Partial<_47.AddressBytesToStringResponse>): _47.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _47.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AddressStringToBytesRequest;
                fromPartial(object: Partial<_47.AddressStringToBytesRequest>): _47.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _47.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AddressStringToBytesResponse;
                fromPartial(object: Partial<_47.AddressStringToBytesResponse>): _47.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _47.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_47.QueryAccountAddressByIDRequest>): _47.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _47.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_47.QueryAccountAddressByIDResponse>): _47.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            BaseAccount: {
                encode(message: _45.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.BaseAccount;
                fromPartial(object: Partial<_45.BaseAccount>): _45.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _45.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.ModuleAccount;
                fromPartial(object: Partial<_45.ModuleAccount>): _45.ModuleAccount;
            };
            Params: {
                encode(message: _45.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Params;
                fromPartial(object: Partial<_45.Params>): _45.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _51.QueryGrantsRequest): Promise<_51.QueryGrantsResponse>;
                granterGrants(request: _51.QueryGranterGrantsRequest): Promise<_51.QueryGranterGrantsResponse>;
                granteeGrants(request: _51.QueryGranteeGrantsRequest): Promise<_51.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _52.MsgGrant): {
                        typeUrl: string;
                        value: _52.MsgGrant;
                    };
                    exec(value: _52.MsgExec): {
                        typeUrl: string;
                        value: _52.MsgExec;
                    };
                    revoke(value: _52.MsgRevoke): {
                        typeUrl: string;
                        value: _52.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _52.MsgGrant) => {
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
                    }) => _52.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _52.MsgExec) => {
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
                    }) => _52.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _52.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _52.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _52.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgGrant;
                fromPartial(object: Partial<_52.MsgGrant>): _52.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _52.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgExecResponse;
                fromPartial(object: Partial<_52.MsgExecResponse>): _52.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _52.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgExec;
                fromPartial(object: Partial<_52.MsgExec>): _52.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _52.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.MsgGrantResponse;
                fromPartial(_: Partial<_52.MsgGrantResponse>): _52.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _52.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MsgRevoke;
                fromPartial(object: Partial<_52.MsgRevoke>): _52.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _52.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.MsgRevokeResponse;
                fromPartial(_: Partial<_52.MsgRevokeResponse>): _52.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _51.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGrantsRequest;
                fromPartial(object: Partial<_51.QueryGrantsRequest>): _51.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _51.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGrantsResponse;
                fromPartial(object: Partial<_51.QueryGrantsResponse>): _51.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _51.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_51.QueryGranterGrantsRequest>): _51.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _51.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_51.QueryGranterGrantsResponse>): _51.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _51.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_51.QueryGranteeGrantsRequest>): _51.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _51.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_51.QueryGranteeGrantsResponse>): _51.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
            EventGrant: {
                encode(message: _49.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.EventGrant;
                fromPartial(object: Partial<_49.EventGrant>): _49.EventGrant;
            };
            EventRevoke: {
                encode(message: _49.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.EventRevoke;
                fromPartial(object: Partial<_49.EventRevoke>): _49.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _48.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenericAuthorization;
                fromPartial(object: Partial<_48.GenericAuthorization>): _48.GenericAuthorization;
            };
            Grant: {
                encode(message: _48.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Grant;
                fromPartial(object: Partial<_48.Grant>): _48.Grant;
            };
            GrantAuthorization: {
                encode(message: _48.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GrantAuthorization;
                fromPartial(object: Partial<_48.GrantAuthorization>): _48.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _48.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GrantQueueItem;
                fromPartial(object: Partial<_48.GrantQueueItem>): _48.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _56.QueryBalanceRequest): Promise<_56.QueryBalanceResponse>;
                allBalances(request: _56.QueryAllBalancesRequest): Promise<_56.QueryAllBalancesResponse>;
                spendableBalances(request: _56.QuerySpendableBalancesRequest): Promise<_56.QuerySpendableBalancesResponse>;
                totalSupply(request?: _56.QueryTotalSupplyRequest): Promise<_56.QueryTotalSupplyResponse>;
                supplyOf(request: _56.QuerySupplyOfRequest): Promise<_56.QuerySupplyOfResponse>;
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                denomMetadata(request: _56.QueryDenomMetadataRequest): Promise<_56.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _56.QueryDenomsMetadataRequest): Promise<_56.QueryDenomsMetadataResponse>;
                denomOwners(request: _56.QueryDenomOwnersRequest): Promise<_56.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _57.MsgSend): {
                        typeUrl: string;
                        value: _57.MsgSend;
                    };
                    multiSend(value: _57.MsgMultiSend): {
                        typeUrl: string;
                        value: _57.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _57.MsgSend) => {
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
                    }) => _57.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _57.MsgMultiSend) => {
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
                    }) => _57.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _57.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgSend;
                fromPartial(object: Partial<_57.MsgSend>): _57.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _57.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgSendResponse;
                fromPartial(_: Partial<_57.MsgSendResponse>): _57.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _57.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgMultiSend;
                fromPartial(object: Partial<_57.MsgMultiSend>): _57.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _57.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgMultiSendResponse;
                fromPartial(_: Partial<_57.MsgMultiSendResponse>): _57.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _56.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryBalanceRequest;
                fromPartial(object: Partial<_56.QueryBalanceRequest>): _56.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _56.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryBalanceResponse;
                fromPartial(object: Partial<_56.QueryBalanceResponse>): _56.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _56.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllBalancesRequest;
                fromPartial(object: Partial<_56.QueryAllBalancesRequest>): _56.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _56.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryAllBalancesResponse;
                fromPartial(object: Partial<_56.QueryAllBalancesResponse>): _56.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _56.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_56.QuerySpendableBalancesRequest>): _56.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _56.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_56.QuerySpendableBalancesResponse>): _56.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _56.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_56.QueryTotalSupplyRequest>): _56.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _56.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_56.QueryTotalSupplyResponse>): _56.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _56.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QuerySupplyOfRequest;
                fromPartial(object: Partial<_56.QuerySupplyOfRequest>): _56.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _56.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QuerySupplyOfResponse;
                fromPartial(object: Partial<_56.QuerySupplyOfResponse>): _56.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _56.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_56.QueryDenomsMetadataRequest>): _56.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _56.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_56.QueryDenomsMetadataResponse>): _56.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _56.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_56.QueryDenomMetadataRequest>): _56.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _56.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_56.QueryDenomMetadataResponse>): _56.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _56.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_56.QueryDenomOwnersRequest>): _56.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _56.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.DenomOwner;
                fromPartial(object: Partial<_56.DenomOwner>): _56.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _56.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_56.QueryDenomOwnersResponse>): _56.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            Balance: {
                encode(message: _55.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Balance;
                fromPartial(object: Partial<_55.Balance>): _55.Balance;
            };
            Params: {
                encode(message: _54.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Params;
                fromPartial(object: Partial<_54.Params>): _54.Params;
            };
            SendEnabled: {
                encode(message: _54.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.SendEnabled;
                fromPartial(object: Partial<_54.SendEnabled>): _54.SendEnabled;
            };
            Input: {
                encode(message: _54.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Input;
                fromPartial(object: Partial<_54.Input>): _54.Input;
            };
            Output: {
                encode(message: _54.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Output;
                fromPartial(object: Partial<_54.Output>): _54.Output;
            };
            Supply: {
                encode(message: _54.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Supply;
                fromPartial(object: Partial<_54.Supply>): _54.Supply;
            };
            DenomUnit: {
                encode(message: _54.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DenomUnit;
                fromPartial(object: Partial<_54.DenomUnit>): _54.DenomUnit;
            };
            Metadata: {
                encode(message: _54.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Metadata;
                fromPartial(object: Partial<_54.Metadata>): _54.Metadata;
            };
            SendAuthorization: {
                encode(message: _53.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.SendAuthorization;
                fromPartial(object: Partial<_53.SendAuthorization>): _53.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _58.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.TxResponse;
                    fromPartial(object: Partial<_58.TxResponse>): _58.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _58.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.ABCIMessageLog;
                    fromPartial(object: Partial<_58.ABCIMessageLog>): _58.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _58.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.StringEvent;
                    fromPartial(object: Partial<_58.StringEvent>): _58.StringEvent;
                };
                Attribute: {
                    encode(message: _58.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.Attribute;
                    fromPartial(object: Partial<_58.Attribute>): _58.Attribute;
                };
                GasInfo: {
                    encode(message: _58.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.GasInfo;
                    fromPartial(object: Partial<_58.GasInfo>): _58.GasInfo;
                };
                Result: {
                    encode(message: _58.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.Result;
                    fromPartial(object: Partial<_58.Result>): _58.Result;
                };
                SimulationResponse: {
                    encode(message: _58.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.SimulationResponse;
                    fromPartial(object: Partial<_58.SimulationResponse>): _58.SimulationResponse;
                };
                MsgData: {
                    encode(message: _58.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.MsgData;
                    fromPartial(object: Partial<_58.MsgData>): _58.MsgData;
                };
                TxMsgData: {
                    encode(message: _58.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.TxMsgData;
                    fromPartial(object: Partial<_58.TxMsgData>): _58.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _58.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.SearchTxsResult;
                    fromPartial(object: Partial<_58.SearchTxsResult>): _58.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _59.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _59.Pairs;
                    fromPartial(object: Partial<_59.Pairs>): _59.Pairs;
                };
                Pair: {
                    encode(message: _59.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _59.Pair;
                    fromPartial(object: Partial<_59.Pair>): _59.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _235.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _60.ConfigRequest): Promise<_60.ConfigResponse>;
                };
                LCDQueryClient: typeof _216.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _60.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _60.ConfigRequest;
                    fromPartial(_: Partial<_60.ConfigRequest>): _60.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _60.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _60.ConfigResponse;
                    fromPartial(object: Partial<_60.ConfigResponse>): _60.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _61.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.PageRequest;
                    fromPartial(object: Partial<_61.PageRequest>): _61.PageRequest;
                };
                PageResponse: {
                    encode(message: _61.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.PageResponse;
                    fromPartial(object: Partial<_61.PageResponse>): _61.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _62.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _62.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_62.ListAllInterfacesRequest>): _62.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _62.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_62.ListAllInterfacesResponse>): _62.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _62.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.ListImplementationsRequest;
                    fromPartial(object: Partial<_62.ListImplementationsRequest>): _62.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _62.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.ListImplementationsResponse;
                    fromPartial(object: Partial<_62.ListImplementationsResponse>): _62.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _63.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.AppDescriptor;
                    fromPartial(object: Partial<_63.AppDescriptor>): _63.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _63.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.TxDescriptor;
                    fromPartial(object: Partial<_63.TxDescriptor>): _63.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _63.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.AuthnDescriptor;
                    fromPartial(object: Partial<_63.AuthnDescriptor>): _63.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _63.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.SigningModeDescriptor;
                    fromPartial(object: Partial<_63.SigningModeDescriptor>): _63.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _63.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.ChainDescriptor;
                    fromPartial(object: Partial<_63.ChainDescriptor>): _63.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _63.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.CodecDescriptor;
                    fromPartial(object: Partial<_63.CodecDescriptor>): _63.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _63.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.InterfaceDescriptor;
                    fromPartial(object: Partial<_63.InterfaceDescriptor>): _63.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _63.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_63.InterfaceImplementerDescriptor>): _63.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _63.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_63.InterfaceAcceptingMessageDescriptor>): _63.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _63.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.ConfigurationDescriptor;
                    fromPartial(object: Partial<_63.ConfigurationDescriptor>): _63.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _63.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.MsgDescriptor;
                    fromPartial(object: Partial<_63.MsgDescriptor>): _63.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _63.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_63.GetAuthnDescriptorRequest>): _63.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _63.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_63.GetAuthnDescriptorResponse>): _63.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _63.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_63.GetChainDescriptorRequest>): _63.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _63.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_63.GetChainDescriptorResponse>): _63.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _63.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_63.GetCodecDescriptorRequest>): _63.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _63.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_63.GetCodecDescriptorResponse>): _63.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _63.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_63.GetConfigurationDescriptorRequest>): _63.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _63.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_63.GetConfigurationDescriptorResponse>): _63.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _63.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_63.GetQueryServicesDescriptorRequest>): _63.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _63.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_63.GetQueryServicesDescriptorResponse>): _63.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _63.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _63.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_63.GetTxDescriptorRequest>): _63.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _63.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_63.GetTxDescriptorResponse>): _63.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _63.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.QueryServicesDescriptor;
                    fromPartial(object: Partial<_63.QueryServicesDescriptor>): _63.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _63.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.QueryServiceDescriptor;
                    fromPartial(object: Partial<_63.QueryServiceDescriptor>): _63.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _63.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.QueryMethodDescriptor;
                    fromPartial(object: Partial<_63.QueryMethodDescriptor>): _63.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _64.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.Snapshot;
                    fromPartial(object: Partial<_64.Snapshot>): _64.Snapshot;
                };
                Metadata: {
                    encode(message: _64.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.Metadata;
                    fromPartial(object: Partial<_64.Metadata>): _64.Metadata;
                };
                SnapshotItem: {
                    encode(message: _64.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotItem;
                    fromPartial(object: Partial<_64.SnapshotItem>): _64.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _64.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotStoreItem;
                    fromPartial(object: Partial<_64.SnapshotStoreItem>): _64.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _64.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotIAVLItem;
                    fromPartial(object: Partial<_64.SnapshotIAVLItem>): _64.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _64.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_64.SnapshotExtensionMeta>): _64.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _64.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_64.SnapshotExtensionPayload>): _64.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _64.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotKVItem;
                    fromPartial(object: Partial<_64.SnapshotKVItem>): _64.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _64.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.SnapshotSchema;
                    fromPartial(object: Partial<_64.SnapshotSchema>): _64.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _66.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.StoreKVPair;
                    fromPartial(object: Partial<_66.StoreKVPair>): _66.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _66.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.BlockMetadata;
                    fromPartial(object: Partial<_66.BlockMetadata>): _66.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _66.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_66.BlockMetadata_DeliverTx>): _66.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _65.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.CommitInfo;
                    fromPartial(object: Partial<_65.CommitInfo>): _65.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _65.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.StoreInfo;
                    fromPartial(object: Partial<_65.StoreInfo>): _65.StoreInfo;
                };
                CommitID: {
                    encode(message: _65.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.CommitID;
                    fromPartial(object: Partial<_65.CommitID>): _65.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _236.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _67.GetNodeInfoRequest): Promise<_67.GetNodeInfoResponse>;
                    getSyncing(request?: _67.GetSyncingRequest): Promise<_67.GetSyncingResponse>;
                    getLatestBlock(request?: _67.GetLatestBlockRequest): Promise<_67.GetLatestBlockResponse>;
                    getBlockByHeight(request: _67.GetBlockByHeightRequest): Promise<_67.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _67.GetLatestValidatorSetRequest): Promise<_67.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _67.GetValidatorSetByHeightRequest): Promise<_67.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _67.ABCIQueryRequest): Promise<_67.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                Block: {
                    encode(message: _68.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.Block;
                    fromPartial(object: Partial<_68.Block>): _68.Block;
                };
                Header: {
                    encode(message: _68.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.Header;
                    fromPartial(object: Partial<_68.Header>): _68.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _67.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_67.GetValidatorSetByHeightRequest>): _67.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _67.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_67.GetValidatorSetByHeightResponse>): _67.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _67.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_67.GetLatestValidatorSetRequest>): _67.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _67.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_67.GetLatestValidatorSetResponse>): _67.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _67.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.Validator;
                    fromPartial(object: Partial<_67.Validator>): _67.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _67.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_67.GetBlockByHeightRequest>): _67.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _67.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_67.GetBlockByHeightResponse>): _67.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _67.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _67.GetLatestBlockRequest;
                    fromPartial(_: Partial<_67.GetLatestBlockRequest>): _67.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _67.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetLatestBlockResponse;
                    fromPartial(object: Partial<_67.GetLatestBlockResponse>): _67.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _67.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _67.GetSyncingRequest;
                    fromPartial(_: Partial<_67.GetSyncingRequest>): _67.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _67.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetSyncingResponse;
                    fromPartial(object: Partial<_67.GetSyncingResponse>): _67.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _67.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _67.GetNodeInfoRequest;
                    fromPartial(_: Partial<_67.GetNodeInfoRequest>): _67.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _67.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.GetNodeInfoResponse;
                    fromPartial(object: Partial<_67.GetNodeInfoResponse>): _67.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _67.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.VersionInfo;
                    fromPartial(object: Partial<_67.VersionInfo>): _67.VersionInfo;
                };
                Module: {
                    encode(message: _67.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.Module;
                    fromPartial(object: Partial<_67.Module>): _67.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _67.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ABCIQueryRequest;
                    fromPartial(object: Partial<_67.ABCIQueryRequest>): _67.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _67.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ABCIQueryResponse;
                    fromPartial(object: Partial<_67.ABCIQueryResponse>): _67.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _67.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ProofOp;
                    fromPartial(object: Partial<_67.ProofOp>): _67.ProofOp;
                };
                ProofOps: {
                    encode(message: _67.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ProofOps;
                    fromPartial(object: Partial<_67.ProofOps>): _67.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _69.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.Coin;
                fromPartial(object: Partial<_69.Coin>): _69.Coin;
            };
            DecCoin: {
                encode(message: _69.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.DecCoin;
                fromPartial(object: Partial<_69.DecCoin>): _69.DecCoin;
            };
            IntProto: {
                encode(message: _69.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.IntProto;
                fromPartial(object: Partial<_69.IntProto>): _69.IntProto;
            };
            DecProto: {
                encode(message: _69.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.DecProto;
                fromPartial(object: Partial<_69.DecProto>): _69.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _71.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GenesisOwners;
                fromPartial(object: Partial<_71.GenesisOwners>): _71.GenesisOwners;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            Capability: {
                encode(message: _70.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Capability;
                fromPartial(object: Partial<_70.Capability>): _70.Capability;
            };
            Owner: {
                encode(message: _70.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Owner;
                fromPartial(object: Partial<_70.Owner>): _70.Owner;
            };
            CapabilityOwners: {
                encode(message: _70.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.CapabilityOwners;
                fromPartial(object: Partial<_70.CapabilityOwners>): _70.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _73.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _73.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _73.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgVerifyInvariant;
                fromPartial(object: Partial<_73.MsgVerifyInvariant>): _73.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _73.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_73.MsgVerifyInvariantResponse>): _73.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.GenesisState;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _74.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.PubKey;
                fromPartial(object: Partial<_74.PubKey>): _74.PubKey;
            };
            PrivKey: {
                encode(message: _74.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.PrivKey;
                fromPartial(object: Partial<_74.PrivKey>): _74.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _75.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _75.BIP44Params;
                    fromPartial(object: Partial<_75.BIP44Params>): _75.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _76.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.Record;
                    fromPartial(object: Partial<_76.Record>): _76.Record;
                };
                Record_Local: {
                    encode(message: _76.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.Record_Local;
                    fromPartial(object: Partial<_76.Record_Local>): _76.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _76.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.Record_Ledger;
                    fromPartial(object: Partial<_76.Record_Ledger>): _76.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _76.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _76.Record_Multi;
                    fromPartial(_: Partial<_76.Record_Multi>): _76.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _76.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _76.Record_Offline;
                    fromPartial(_: Partial<_76.Record_Offline>): _76.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _77.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.LegacyAminoPubKey;
                fromPartial(object: Partial<_77.LegacyAminoPubKey>): _77.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _78.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.PubKey;
                fromPartial(object: Partial<_78.PubKey>): _78.PubKey;
            };
            PrivKey: {
                encode(message: _78.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.PrivKey;
                fromPartial(object: Partial<_78.PrivKey>): _78.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _79.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.PubKey;
                fromPartial(object: Partial<_79.PubKey>): _79.PubKey;
            };
            PrivKey: {
                encode(message: _79.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.PrivKey;
                fromPartial(object: Partial<_79.PrivKey>): _79.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                validatorOutstandingRewards(request: _82.QueryValidatorOutstandingRewardsRequest): Promise<_82.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _82.QueryValidatorCommissionRequest): Promise<_82.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _82.QueryValidatorSlashesRequest): Promise<_82.QueryValidatorSlashesResponse>;
                delegationRewards(request: _82.QueryDelegationRewardsRequest): Promise<_82.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _82.QueryDelegationTotalRewardsRequest): Promise<_82.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _82.QueryDelegatorWithdrawAddressRequest): Promise<_82.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _82.QueryCommunityPoolRequest): Promise<_82.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _83.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _83.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _83.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _83.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _83.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _83.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _83.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _83.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _83.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _83.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _83.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _83.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _83.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _83.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _83.MsgFundCommunityPool) => {
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
                    }) => _83.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _83.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_83.MsgSetWithdrawAddress>): _83.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _83.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_83.MsgSetWithdrawAddressResponse>): _83.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _83.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_83.MsgWithdrawDelegatorReward>): _83.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _83.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_83.MsgWithdrawDelegatorRewardResponse>): _83.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _83.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_83.MsgWithdrawValidatorCommission>): _83.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _83.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_83.MsgWithdrawValidatorCommissionResponse>): _83.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _83.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgFundCommunityPool;
                fromPartial(object: Partial<_83.MsgFundCommunityPool>): _83.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _83.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_83.MsgFundCommunityPoolResponse>): _83.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.QueryParamsRequest;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryParamsResponse;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _82.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_82.QueryValidatorOutstandingRewardsRequest>): _82.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _82.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_82.QueryValidatorOutstandingRewardsResponse>): _82.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _82.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_82.QueryValidatorCommissionRequest>): _82.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _82.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_82.QueryValidatorCommissionResponse>): _82.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _82.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_82.QueryValidatorSlashesRequest>): _82.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _82.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_82.QueryValidatorSlashesResponse>): _82.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _82.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_82.QueryDelegationRewardsRequest>): _82.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _82.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_82.QueryDelegationRewardsResponse>): _82.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _82.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_82.QueryDelegationTotalRewardsRequest>): _82.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _82.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_82.QueryDelegationTotalRewardsResponse>): _82.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _82.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsRequest>): _82.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _82.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsResponse>): _82.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _82.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_82.QueryDelegatorWithdrawAddressRequest>): _82.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _82.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_82.QueryDelegatorWithdrawAddressResponse>): _82.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _82.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_82.QueryCommunityPoolRequest>): _82.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _82.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_82.QueryCommunityPoolResponse>): _82.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _81.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_81.DelegatorWithdrawInfo>): _81.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _81.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorOutstandingRewardsRecord>): _81.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _81.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_81.ValidatorAccumulatedCommissionRecord>): _81.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _81.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorHistoricalRewardsRecord>): _81.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _81.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_81.ValidatorCurrentRewardsRecord>): _81.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _81.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_81.DelegatorStartingInfoRecord>): _81.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _81.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_81.ValidatorSlashEventRecord>): _81.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Params;
                fromPartial(object: Partial<_80.Params>): _80.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _80.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_80.ValidatorHistoricalRewards>): _80.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _80.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorCurrentRewards;
                fromPartial(object: Partial<_80.ValidatorCurrentRewards>): _80.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _80.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_80.ValidatorAccumulatedCommission>): _80.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _80.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_80.ValidatorOutstandingRewards>): _80.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _80.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorSlashEvent;
                fromPartial(object: Partial<_80.ValidatorSlashEvent>): _80.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _80.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.ValidatorSlashEvents;
                fromPartial(object: Partial<_80.ValidatorSlashEvents>): _80.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _80.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.FeePool;
                fromPartial(object: Partial<_80.FeePool>): _80.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _80.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_80.CommunityPoolSpendProposal>): _80.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _80.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.DelegatorStartingInfo;
                fromPartial(object: Partial<_80.DelegatorStartingInfo>): _80.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _80.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.DelegationDelegatorReward;
                fromPartial(object: Partial<_80.DelegationDelegatorReward>): _80.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _80.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_80.CommunityPoolSpendProposalWithDeposit>): _80.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _86.QueryEvidenceRequest): Promise<_86.QueryEvidenceResponse>;
                allEvidence(request?: _86.QueryAllEvidenceRequest): Promise<_86.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _87.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _87.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _87.MsgSubmitEvidence) => {
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
                    }) => _87.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _87.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgSubmitEvidence;
                fromPartial(object: Partial<_87.MsgSubmitEvidence>): _87.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _87.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_87.MsgSubmitEvidenceResponse>): _87.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _86.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryEvidenceRequest;
                fromPartial(object: Partial<_86.QueryEvidenceRequest>): _86.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _86.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryEvidenceResponse;
                fromPartial(object: Partial<_86.QueryEvidenceResponse>): _86.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _86.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_86.QueryAllEvidenceRequest>): _86.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _86.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_86.QueryAllEvidenceResponse>): _86.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
            };
            Equivocation: {
                encode(message: _84.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.Equivocation;
                fromPartial(object: Partial<_84.Equivocation>): _84.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _90.QueryAllowanceRequest): Promise<_90.QueryAllowanceResponse>;
                allowances(request: _90.QueryAllowancesRequest): Promise<_90.QueryAllowancesResponse>;
                allowancesByGranter(request: _90.QueryAllowancesByGranterRequest): Promise<_90.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _91.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _91.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _91.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _91.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _91.MsgGrantAllowance) => {
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
                    }) => _91.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _91.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _91.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _91.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.MsgGrantAllowance;
                fromPartial(object: Partial<_91.MsgGrantAllowance>): _91.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _91.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _91.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_91.MsgGrantAllowanceResponse>): _91.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _91.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.MsgRevokeAllowance;
                fromPartial(object: Partial<_91.MsgRevokeAllowance>): _91.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _91.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _91.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_91.MsgRevokeAllowanceResponse>): _91.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _90.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowanceRequest;
                fromPartial(object: Partial<_90.QueryAllowanceRequest>): _90.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _90.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowanceResponse;
                fromPartial(object: Partial<_90.QueryAllowanceResponse>): _90.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _90.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowancesRequest;
                fromPartial(object: Partial<_90.QueryAllowancesRequest>): _90.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _90.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowancesResponse;
                fromPartial(object: Partial<_90.QueryAllowancesResponse>): _90.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _90.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_90.QueryAllowancesByGranterRequest>): _90.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _90.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_90.QueryAllowancesByGranterResponse>): _90.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GenesisState;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
            };
            BasicAllowance: {
                encode(message: _88.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.BasicAllowance;
                fromPartial(object: Partial<_88.BasicAllowance>): _88.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _88.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.PeriodicAllowance;
                fromPartial(object: Partial<_88.PeriodicAllowance>): _88.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _88.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.AllowedMsgAllowance;
                fromPartial(object: Partial<_88.AllowedMsgAllowance>): _88.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _88.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Grant;
                fromPartial(object: Partial<_88.Grant>): _88.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                proposals(request: _95.QueryProposalsRequest): Promise<_95.QueryProposalsResponse>;
                vote(request: _95.QueryVoteRequest): Promise<_95.QueryVoteResponse>;
                votes(request: _95.QueryVotesRequest): Promise<_95.QueryVotesResponse>;
                params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                deposit(request: _95.QueryDepositRequest): Promise<_95.QueryDepositResponse>;
                deposits(request: _95.QueryDepositsRequest): Promise<_95.QueryDepositsResponse>;
                tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _96.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _96.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _96.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _96.MsgExecLegacyContent;
                    };
                    vote(value: _96.MsgVote): {
                        typeUrl: string;
                        value: _96.MsgVote;
                    };
                    voteWeighted(value: _96.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _96.MsgVoteWeighted;
                    };
                    deposit(value: _96.MsgDeposit): {
                        typeUrl: string;
                        value: _96.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _96.MsgSubmitProposal) => {
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
                    }) => _96.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _96.MsgExecLegacyContent) => {
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
                    }) => _96.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _96.MsgVote) => {
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
                    }) => _96.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _96.MsgVoteWeighted) => {
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
                    }) => _96.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _96.MsgDeposit) => {
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
                    }) => _96.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _96.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgSubmitProposal;
                fromPartial(object: Partial<_96.MsgSubmitProposal>): _96.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _96.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_96.MsgSubmitProposalResponse>): _96.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _96.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgExecLegacyContent;
                fromPartial(object: Partial<_96.MsgExecLegacyContent>): _96.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _96.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_96.MsgExecLegacyContentResponse>): _96.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _96.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgVote;
                fromPartial(object: Partial<_96.MsgVote>): _96.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _96.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgVoteResponse;
                fromPartial(_: Partial<_96.MsgVoteResponse>): _96.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _96.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgVoteWeighted;
                fromPartial(object: Partial<_96.MsgVoteWeighted>): _96.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _96.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_96.MsgVoteWeightedResponse>): _96.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _96.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgDeposit;
                fromPartial(object: Partial<_96.MsgDeposit>): _96.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _96.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgDepositResponse;
                fromPartial(_: Partial<_96.MsgDepositResponse>): _96.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _95.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryProposalRequest;
                fromPartial(object: Partial<_95.QueryProposalRequest>): _95.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _95.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryProposalResponse;
                fromPartial(object: Partial<_95.QueryProposalResponse>): _95.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _95.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryProposalsRequest;
                fromPartial(object: Partial<_95.QueryProposalsRequest>): _95.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _95.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryProposalsResponse;
                fromPartial(object: Partial<_95.QueryProposalsResponse>): _95.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _95.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryVoteRequest;
                fromPartial(object: Partial<_95.QueryVoteRequest>): _95.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _95.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryVoteResponse;
                fromPartial(object: Partial<_95.QueryVoteResponse>): _95.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _95.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryVotesRequest;
                fromPartial(object: Partial<_95.QueryVotesRequest>): _95.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _95.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryVotesResponse;
                fromPartial(object: Partial<_95.QueryVotesResponse>): _95.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _95.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryParamsRequest;
                fromPartial(object: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _95.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryParamsResponse;
                fromPartial(object: Partial<_95.QueryParamsResponse>): _95.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _95.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryDepositRequest;
                fromPartial(object: Partial<_95.QueryDepositRequest>): _95.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _95.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryDepositResponse;
                fromPartial(object: Partial<_95.QueryDepositResponse>): _95.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _95.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryDepositsRequest;
                fromPartial(object: Partial<_95.QueryDepositsRequest>): _95.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _95.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryDepositsResponse;
                fromPartial(object: Partial<_95.QueryDepositsResponse>): _95.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _95.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryTallyResultRequest;
                fromPartial(object: Partial<_95.QueryTallyResultRequest>): _95.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _95.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryTallyResultResponse;
                fromPartial(object: Partial<_95.QueryTallyResultResponse>): _95.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _94.VoteOption;
            voteOptionToJSON(object: _94.VoteOption): string;
            proposalStatusFromJSON(object: any): _94.ProposalStatus;
            proposalStatusToJSON(object: _94.ProposalStatus): string;
            VoteOption: typeof _94.VoteOption;
            VoteOptionSDKType: typeof _94.VoteOption;
            ProposalStatus: typeof _94.ProposalStatus;
            ProposalStatusSDKType: typeof _94.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _94.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.WeightedVoteOption;
                fromPartial(object: Partial<_94.WeightedVoteOption>): _94.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _94.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.Deposit;
                fromPartial(object: Partial<_94.Deposit>): _94.Deposit;
            };
            Proposal: {
                encode(message: _94.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.Proposal;
                fromPartial(object: Partial<_94.Proposal>): _94.Proposal;
            };
            TallyResult: {
                encode(message: _94.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.TallyResult;
                fromPartial(object: Partial<_94.TallyResult>): _94.TallyResult;
            };
            Vote: {
                encode(message: _94.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.Vote;
                fromPartial(object: Partial<_94.Vote>): _94.Vote;
            };
            DepositParams: {
                encode(message: _94.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.DepositParams;
                fromPartial(object: Partial<_94.DepositParams>): _94.DepositParams;
            };
            VotingParams: {
                encode(message: _94.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.VotingParams;
                fromPartial(object: Partial<_94.VotingParams>): _94.VotingParams;
            };
            TallyParams: {
                encode(message: _94.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.TallyParams;
                fromPartial(object: Partial<_94.TallyParams>): _94.TallyParams;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
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
            LCDQueryClient: typeof _222.LCDQueryClient;
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
    namespace group {
        const v1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _103.QueryGroupInfoRequest): Promise<_103.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _103.QueryGroupPolicyInfoRequest): Promise<_103.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _103.QueryGroupMembersRequest): Promise<_103.QueryGroupMembersResponse>;
                groupsByAdmin(request: _103.QueryGroupsByAdminRequest): Promise<_103.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _103.QueryGroupPoliciesByGroupRequest): Promise<_103.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _103.QueryGroupPoliciesByAdminRequest): Promise<_103.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _103.QueryProposalsByGroupPolicyRequest): Promise<_103.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _103.QueryVoteByProposalVoterRequest): Promise<_103.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _103.QueryVotesByProposalRequest): Promise<_103.QueryVotesByProposalResponse>;
                votesByVoter(request: _103.QueryVotesByVoterRequest): Promise<_103.QueryVotesByVoterResponse>;
                groupsByMember(request: _103.QueryGroupsByMemberRequest): Promise<_103.QueryGroupsByMemberResponse>;
                tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
                groups(request?: _103.QueryGroupsRequest): Promise<_103.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _104.MsgCreateGroup): {
                        typeUrl: string;
                        value: _104.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _104.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _104.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _104.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _104.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _104.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _104.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _104.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _104.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _104.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _104.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _104.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _104.MsgWithdrawProposal;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    exec(value: _104.MsgExec): {
                        typeUrl: string;
                        value: _104.MsgExec;
                    };
                    leaveGroup(value: _104.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _104.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _104.MsgCreateGroup) => {
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
                    }) => _104.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _104.MsgUpdateGroupMembers) => {
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
                    }) => _104.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _104.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _104.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _104.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _104.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _104.MsgCreateGroupPolicy) => {
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
                    }) => _104.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _104.MsgCreateGroupWithPolicy) => {
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
                    }) => _104.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _104.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _104.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _104.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _104.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _104.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _104.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _104.MsgSubmitProposal) => {
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
                    }) => _104.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _104.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _104.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _104.MsgVote) => {
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
                    }) => _104.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _104.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _104.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _104.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _104.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _105.VoteOption;
            voteOptionToJSON(object: _105.VoteOption): string;
            proposalStatusFromJSON(object: any): _105.ProposalStatus;
            proposalStatusToJSON(object: _105.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _105.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _105.ProposalExecutorResult): string;
            VoteOption: typeof _105.VoteOption;
            VoteOptionSDKType: typeof _105.VoteOption;
            ProposalStatus: typeof _105.ProposalStatus;
            ProposalStatusSDKType: typeof _105.ProposalStatus;
            ProposalExecutorResult: typeof _105.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _105.ProposalExecutorResult;
            Member: {
                encode(message: _105.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Member;
                fromPartial(object: Partial<_105.Member>): _105.Member;
            };
            MemberRequest: {
                encode(message: _105.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MemberRequest;
                fromPartial(object: Partial<_105.MemberRequest>): _105.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _105.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_105.ThresholdDecisionPolicy>): _105.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _105.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.PercentageDecisionPolicy;
                fromPartial(object: Partial<_105.PercentageDecisionPolicy>): _105.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _105.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.DecisionPolicyWindows;
                fromPartial(object: Partial<_105.DecisionPolicyWindows>): _105.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _105.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.GroupInfo;
                fromPartial(object: Partial<_105.GroupInfo>): _105.GroupInfo;
            };
            GroupMember: {
                encode(message: _105.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.GroupMember;
                fromPartial(object: Partial<_105.GroupMember>): _105.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _105.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.GroupPolicyInfo;
                fromPartial(object: Partial<_105.GroupPolicyInfo>): _105.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _105.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Proposal;
                fromPartial(object: Partial<_105.Proposal>): _105.Proposal;
            };
            TallyResult: {
                encode(message: _105.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.TallyResult;
                fromPartial(object: Partial<_105.TallyResult>): _105.TallyResult;
            };
            Vote: {
                encode(message: _105.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Vote;
                fromPartial(object: Partial<_105.Vote>): _105.Vote;
            };
            execFromJSON(object: any): _104.Exec;
            execToJSON(object: _104.Exec): string;
            Exec: typeof _104.Exec;
            ExecSDKType: typeof _104.Exec;
            MsgCreateGroup: {
                encode(message: _104.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroup;
                fromPartial(object: Partial<_104.MsgCreateGroup>): _104.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _104.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroupResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupResponse>): _104.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _104.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_104.MsgUpdateGroupMembers>): _104.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _104.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupMembersResponse>): _104.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _104.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_104.MsgUpdateGroupAdmin>): _104.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _104.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupAdminResponse>): _104.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _104.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_104.MsgUpdateGroupMetadata>): _104.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _104.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupMetadataResponse>): _104.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _104.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_104.MsgCreateGroupPolicy>): _104.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _104.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupPolicyResponse>): _104.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _104.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyAdmin>): _104.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _104.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_104.MsgCreateGroupWithPolicy>): _104.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _104.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_104.MsgCreateGroupWithPolicyResponse>): _104.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _104.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyAdminResponse>): _104.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _104.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyDecisionPolicy>): _104.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _104.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyDecisionPolicyResponse>): _104.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _104.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_104.MsgUpdateGroupPolicyMetadata>): _104.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _104.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_104.MsgUpdateGroupPolicyMetadataResponse>): _104.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _104.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgSubmitProposal;
                fromPartial(object: Partial<_104.MsgSubmitProposal>): _104.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _104.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_104.MsgSubmitProposalResponse>): _104.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _104.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgWithdrawProposal;
                fromPartial(object: Partial<_104.MsgWithdrawProposal>): _104.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _104.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_104.MsgWithdrawProposalResponse>): _104.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _104.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgVote;
                fromPartial(object: Partial<_104.MsgVote>): _104.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _104.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgVoteResponse;
                fromPartial(_: Partial<_104.MsgVoteResponse>): _104.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _104.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgExec;
                fromPartial(object: Partial<_104.MsgExec>): _104.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _104.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgExecResponse;
                fromPartial(object: Partial<_104.MsgExecResponse>): _104.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _104.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgLeaveGroup;
                fromPartial(object: Partial<_104.MsgLeaveGroup>): _104.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _104.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_104.MsgLeaveGroupResponse>): _104.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _103.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupInfoRequest;
                fromPartial(object: Partial<_103.QueryGroupInfoRequest>): _103.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _103.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupInfoResponse;
                fromPartial(object: Partial<_103.QueryGroupInfoResponse>): _103.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _103.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_103.QueryGroupPolicyInfoRequest>): _103.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _103.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_103.QueryGroupPolicyInfoResponse>): _103.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _103.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupMembersRequest;
                fromPartial(object: Partial<_103.QueryGroupMembersRequest>): _103.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _103.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupMembersResponse;
                fromPartial(object: Partial<_103.QueryGroupMembersResponse>): _103.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _103.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_103.QueryGroupsByAdminRequest>): _103.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _103.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_103.QueryGroupsByAdminResponse>): _103.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _103.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByGroupRequest>): _103.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _103.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByGroupResponse>): _103.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _103.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByAdminRequest>): _103.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _103.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_103.QueryGroupPoliciesByAdminResponse>): _103.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _103.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryProposalRequest;
                fromPartial(object: Partial<_103.QueryProposalRequest>): _103.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _103.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryProposalResponse;
                fromPartial(object: Partial<_103.QueryProposalResponse>): _103.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _103.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_103.QueryProposalsByGroupPolicyRequest>): _103.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _103.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_103.QueryProposalsByGroupPolicyResponse>): _103.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _103.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_103.QueryVoteByProposalVoterRequest>): _103.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _103.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_103.QueryVoteByProposalVoterResponse>): _103.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _103.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_103.QueryVotesByProposalRequest>): _103.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _103.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_103.QueryVotesByProposalResponse>): _103.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _103.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_103.QueryVotesByVoterRequest>): _103.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _103.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_103.QueryVotesByVoterResponse>): _103.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _103.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_103.QueryGroupsByMemberRequest>): _103.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _103.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_103.QueryGroupsByMemberResponse>): _103.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _103.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryTallyResultRequest;
                fromPartial(object: Partial<_103.QueryTallyResultRequest>): _103.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _103.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryTallyResultResponse;
                fromPartial(object: Partial<_103.QueryTallyResultResponse>): _103.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _103.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsRequest;
                fromPartial(object: Partial<_103.QueryGroupsRequest>): _103.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _103.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryGroupsResponse;
                fromPartial(object: Partial<_103.QueryGroupsResponse>): _103.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _101.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventCreateGroup;
                fromPartial(object: Partial<_101.EventCreateGroup>): _101.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _101.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventUpdateGroup;
                fromPartial(object: Partial<_101.EventUpdateGroup>): _101.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _101.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventCreateGroupPolicy;
                fromPartial(object: Partial<_101.EventCreateGroupPolicy>): _101.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _101.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_101.EventUpdateGroupPolicy>): _101.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _101.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventSubmitProposal;
                fromPartial(object: Partial<_101.EventSubmitProposal>): _101.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _101.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventWithdrawProposal;
                fromPartial(object: Partial<_101.EventWithdrawProposal>): _101.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _101.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventVote;
                fromPartial(object: Partial<_101.EventVote>): _101.EventVote;
            };
            EventExec: {
                encode(message: _101.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventExec;
                fromPartial(object: Partial<_101.EventExec>): _101.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _101.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventLeaveGroup;
                fromPartial(object: Partial<_101.EventLeaveGroup>): _101.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _101.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.EventProposalPruned;
                fromPartial(object: Partial<_101.EventProposalPruned>): _101.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                inflation(request?: _108.QueryInflationRequest): Promise<_108.QueryInflationResponse>;
                annualProvisions(request?: _108.QueryAnnualProvisionsRequest): Promise<_108.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryParamsRequest;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryParamsResponse;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _108.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryInflationRequest;
                fromPartial(_: Partial<_108.QueryInflationRequest>): _108.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _108.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryInflationResponse;
                fromPartial(object: Partial<_108.QueryInflationResponse>): _108.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _108.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_108.QueryAnnualProvisionsRequest>): _108.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _108.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_108.QueryAnnualProvisionsResponse>): _108.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _107.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Minter;
                fromPartial(object: Partial<_107.Minter>): _107.Minter;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Params;
                fromPartial(object: Partial<_107.Params>): _107.Params;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _113.QueryBalanceRequest): Promise<_113.QueryBalanceResponse>;
                owner(request: _113.QueryOwnerRequest): Promise<_113.QueryOwnerResponse>;
                supply(request: _113.QuerySupplyRequest): Promise<_113.QuerySupplyResponse>;
                nFTs(request: _113.QueryNFTsRequest): Promise<_113.QueryNFTsResponse>;
                nFT(request: _113.QueryNFTRequest): Promise<_113.QueryNFTResponse>;
                class(request: _113.QueryClassRequest): Promise<_113.QueryClassResponse>;
                classes(request?: _113.QueryClassesRequest): Promise<_113.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _114.MsgSend): {
                        typeUrl: string;
                        value: _114.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _114.MsgSend) => {
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
                    }) => _114.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _114.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.MsgSend;
                fromPartial(object: Partial<_114.MsgSend>): _114.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _114.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.MsgSendResponse;
                fromPartial(_: Partial<_114.MsgSendResponse>): _114.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _113.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryBalanceRequest;
                fromPartial(object: Partial<_113.QueryBalanceRequest>): _113.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _113.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryBalanceResponse;
                fromPartial(object: Partial<_113.QueryBalanceResponse>): _113.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _113.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryOwnerRequest;
                fromPartial(object: Partial<_113.QueryOwnerRequest>): _113.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _113.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryOwnerResponse;
                fromPartial(object: Partial<_113.QueryOwnerResponse>): _113.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _113.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QuerySupplyRequest;
                fromPartial(object: Partial<_113.QuerySupplyRequest>): _113.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _113.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QuerySupplyResponse;
                fromPartial(object: Partial<_113.QuerySupplyResponse>): _113.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _113.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryNFTsRequest;
                fromPartial(object: Partial<_113.QueryNFTsRequest>): _113.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _113.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryNFTsResponse;
                fromPartial(object: Partial<_113.QueryNFTsResponse>): _113.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _113.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryNFTRequest;
                fromPartial(object: Partial<_113.QueryNFTRequest>): _113.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _113.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryNFTResponse;
                fromPartial(object: Partial<_113.QueryNFTResponse>): _113.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _113.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryClassRequest;
                fromPartial(object: Partial<_113.QueryClassRequest>): _113.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _113.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryClassResponse;
                fromPartial(object: Partial<_113.QueryClassResponse>): _113.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _113.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryClassesRequest;
                fromPartial(object: Partial<_113.QueryClassesRequest>): _113.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _113.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.QueryClassesResponse;
                fromPartial(object: Partial<_113.QueryClassesResponse>): _113.QueryClassesResponse;
            };
            Class: {
                encode(message: _112.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Class;
                fromPartial(object: Partial<_112.Class>): _112.Class;
            };
            NFT: {
                encode(message: _112.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.NFT;
                fromPartial(object: Partial<_112.NFT>): _112.NFT;
            };
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
            };
            Entry: {
                encode(message: _111.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.Entry;
                fromPartial(object: Partial<_111.Entry>): _111.Entry;
            };
            EventSend: {
                encode(message: _110.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.EventSend;
                fromPartial(object: Partial<_110.EventSend>): _110.EventSend;
            };
            EventMint: {
                encode(message: _110.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.EventMint;
                fromPartial(object: Partial<_110.EventMint>): _110.EventMint;
            };
            EventBurn: {
                encode(message: _110.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.EventBurn;
                fromPartial(object: Partial<_110.EventBurn>): _110.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _115.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _115.Module;
                    fromPartial(_: Partial<_115.Module>): _115.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _116.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.TableDescriptor;
                fromPartial(object: Partial<_116.TableDescriptor>): _116.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _116.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_116.PrimaryKeyDescriptor>): _116.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _116.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_116.SecondaryIndexDescriptor>): _116.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _116.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SingletonDescriptor;
                fromPartial(object: Partial<_116.SingletonDescriptor>): _116.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _117.StorageType;
            storageTypeToJSON(object: _117.StorageType): string;
            StorageType: typeof _117.StorageType;
            StorageTypeSDKType: typeof _117.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _117.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_117.ModuleSchemaDescriptor>): _117.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _117.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_117.ModuleSchemaDescriptor_FileEntry>): _117.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                subspaces(request?: _119.QuerySubspacesRequest): Promise<_119.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _119.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryParamsRequest;
                fromPartial(object: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _119.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _119.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.QuerySubspacesRequest;
                fromPartial(_: Partial<_119.QuerySubspacesRequest>): _119.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _119.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySubspacesResponse;
                fromPartial(object: Partial<_119.QuerySubspacesResponse>): _119.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _119.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Subspace;
                fromPartial(object: Partial<_119.Subspace>): _119.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _118.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.ParameterChangeProposal;
                fromPartial(object: Partial<_118.ParameterChangeProposal>): _118.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _118.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.ParamChange;
                fromPartial(object: Partial<_118.ParamChange>): _118.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                signingInfo(request: _121.QuerySigningInfoRequest): Promise<_121.QuerySigningInfoResponse>;
                signingInfos(request?: _121.QuerySigningInfosRequest): Promise<_121.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _123.MsgUnjail): {
                        typeUrl: string;
                        value: _123.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _123.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _123.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _123.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgUnjail;
                fromPartial(object: Partial<_123.MsgUnjail>): _123.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _123.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.MsgUnjailResponse;
                fromPartial(_: Partial<_123.MsgUnjailResponse>): _123.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _122.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.ValidatorSigningInfo;
                fromPartial(object: Partial<_122.ValidatorSigningInfo>): _122.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.Params;
                fromPartial(object: Partial<_122.Params>): _122.Params;
            };
            QueryParamsRequest: {
                encode(_: _121.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _121.QueryParamsRequest;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _121.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QueryParamsResponse;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _121.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QuerySigningInfoRequest;
                fromPartial(object: Partial<_121.QuerySigningInfoRequest>): _121.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _121.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QuerySigningInfoResponse;
                fromPartial(object: Partial<_121.QuerySigningInfoResponse>): _121.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _121.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QuerySigningInfosRequest;
                fromPartial(object: Partial<_121.QuerySigningInfosRequest>): _121.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _121.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.QuerySigningInfosResponse;
                fromPartial(object: Partial<_121.QuerySigningInfosResponse>): _121.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
            };
            SigningInfo: {
                encode(message: _120.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.SigningInfo;
                fromPartial(object: Partial<_120.SigningInfo>): _120.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _120.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.ValidatorMissedBlocks;
                fromPartial(object: Partial<_120.ValidatorMissedBlocks>): _120.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _120.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MissedBlock;
                fromPartial(object: Partial<_120.MissedBlock>): _120.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _126.QueryValidatorsRequest): Promise<_126.QueryValidatorsResponse>;
                validator(request: _126.QueryValidatorRequest): Promise<_126.QueryValidatorResponse>;
                validatorDelegations(request: _126.QueryValidatorDelegationsRequest): Promise<_126.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _126.QueryValidatorUnbondingDelegationsRequest): Promise<_126.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _126.QueryDelegationRequest): Promise<_126.QueryDelegationResponse>;
                unbondingDelegation(request: _126.QueryUnbondingDelegationRequest): Promise<_126.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _126.QueryDelegatorDelegationsRequest): Promise<_126.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _126.QueryDelegatorUnbondingDelegationsRequest): Promise<_126.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _126.QueryRedelegationsRequest): Promise<_126.QueryRedelegationsResponse>;
                delegatorValidators(request: _126.QueryDelegatorValidatorsRequest): Promise<_126.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _126.QueryDelegatorValidatorRequest): Promise<_126.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _126.QueryHistoricalInfoRequest): Promise<_126.QueryHistoricalInfoResponse>;
                pool(request?: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
                params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _128.MsgCreateValidator): {
                        typeUrl: string;
                        value: _128.MsgCreateValidator;
                    };
                    editValidator(value: _128.MsgEditValidator): {
                        typeUrl: string;
                        value: _128.MsgEditValidator;
                    };
                    delegate(value: _128.MsgDelegate): {
                        typeUrl: string;
                        value: _128.MsgDelegate;
                    };
                    beginRedelegate(value: _128.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _128.MsgBeginRedelegate;
                    };
                    undelegate(value: _128.MsgUndelegate): {
                        typeUrl: string;
                        value: _128.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _128.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _128.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _128.MsgCreateValidator) => {
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
                    }) => _128.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _128.MsgEditValidator) => {
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
                    }) => _128.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _128.MsgDelegate) => {
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
                    }) => _128.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _128.MsgBeginRedelegate) => {
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
                    }) => _128.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _128.MsgUndelegate) => {
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
                    }) => _128.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _128.MsgCancelUnbondingDelegation) => {
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
                    }) => _128.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _128.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgCreateValidator;
                fromPartial(object: Partial<_128.MsgCreateValidator>): _128.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _128.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_128.MsgCreateValidatorResponse>): _128.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _128.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgEditValidator;
                fromPartial(object: Partial<_128.MsgEditValidator>): _128.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _128.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgEditValidatorResponse;
                fromPartial(_: Partial<_128.MsgEditValidatorResponse>): _128.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _128.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgDelegate;
                fromPartial(object: Partial<_128.MsgDelegate>): _128.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _128.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgDelegateResponse;
                fromPartial(_: Partial<_128.MsgDelegateResponse>): _128.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _128.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgBeginRedelegate;
                fromPartial(object: Partial<_128.MsgBeginRedelegate>): _128.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _128.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_128.MsgBeginRedelegateResponse>): _128.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _128.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgUndelegate;
                fromPartial(object: Partial<_128.MsgUndelegate>): _128.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _128.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgUndelegateResponse;
                fromPartial(object: Partial<_128.MsgUndelegateResponse>): _128.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _128.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_128.MsgCancelUnbondingDelegation>): _128.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _128.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_128.MsgCancelUnbondingDelegationResponse>): _128.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _127.BondStatus;
            bondStatusToJSON(object: _127.BondStatus): string;
            BondStatus: typeof _127.BondStatus;
            BondStatusSDKType: typeof _127.BondStatus;
            HistoricalInfo: {
                encode(message: _127.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.HistoricalInfo;
                fromPartial(object: Partial<_127.HistoricalInfo>): _127.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _127.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.CommissionRates;
                fromPartial(object: Partial<_127.CommissionRates>): _127.CommissionRates;
            };
            Commission: {
                encode(message: _127.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Commission;
                fromPartial(object: Partial<_127.Commission>): _127.Commission;
            };
            Description: {
                encode(message: _127.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Description;
                fromPartial(object: Partial<_127.Description>): _127.Description;
            };
            Validator: {
                encode(message: _127.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Validator;
                fromPartial(object: Partial<_127.Validator>): _127.Validator;
            };
            ValAddresses: {
                encode(message: _127.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.ValAddresses;
                fromPartial(object: Partial<_127.ValAddresses>): _127.ValAddresses;
            };
            DVPair: {
                encode(message: _127.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.DVPair;
                fromPartial(object: Partial<_127.DVPair>): _127.DVPair;
            };
            DVPairs: {
                encode(message: _127.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.DVPairs;
                fromPartial(object: Partial<_127.DVPairs>): _127.DVPairs;
            };
            DVVTriplet: {
                encode(message: _127.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.DVVTriplet;
                fromPartial(object: Partial<_127.DVVTriplet>): _127.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _127.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.DVVTriplets;
                fromPartial(object: Partial<_127.DVVTriplets>): _127.DVVTriplets;
            };
            Delegation: {
                encode(message: _127.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Delegation;
                fromPartial(object: Partial<_127.Delegation>): _127.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _127.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.UnbondingDelegation;
                fromPartial(object: Partial<_127.UnbondingDelegation>): _127.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _127.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.UnbondingDelegationEntry;
                fromPartial(object: Partial<_127.UnbondingDelegationEntry>): _127.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _127.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.RedelegationEntry;
                fromPartial(object: Partial<_127.RedelegationEntry>): _127.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _127.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Redelegation;
                fromPartial(object: Partial<_127.Redelegation>): _127.Redelegation;
            };
            Params: {
                encode(message: _127.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Params;
                fromPartial(object: Partial<_127.Params>): _127.Params;
            };
            DelegationResponse: {
                encode(message: _127.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.DelegationResponse;
                fromPartial(object: Partial<_127.DelegationResponse>): _127.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _127.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.RedelegationEntryResponse;
                fromPartial(object: Partial<_127.RedelegationEntryResponse>): _127.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _127.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.RedelegationResponse;
                fromPartial(object: Partial<_127.RedelegationResponse>): _127.RedelegationResponse;
            };
            Pool: {
                encode(message: _127.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.Pool;
                fromPartial(object: Partial<_127.Pool>): _127.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _126.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorsRequest;
                fromPartial(object: Partial<_126.QueryValidatorsRequest>): _126.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _126.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorsResponse;
                fromPartial(object: Partial<_126.QueryValidatorsResponse>): _126.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _126.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorRequest;
                fromPartial(object: Partial<_126.QueryValidatorRequest>): _126.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _126.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorResponse;
                fromPartial(object: Partial<_126.QueryValidatorResponse>): _126.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _126.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_126.QueryValidatorDelegationsRequest>): _126.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _126.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_126.QueryValidatorDelegationsResponse>): _126.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _126.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_126.QueryValidatorUnbondingDelegationsRequest>): _126.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _126.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_126.QueryValidatorUnbondingDelegationsResponse>): _126.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _126.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegationRequest;
                fromPartial(object: Partial<_126.QueryDelegationRequest>): _126.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _126.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegationResponse;
                fromPartial(object: Partial<_126.QueryDelegationResponse>): _126.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _126.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_126.QueryUnbondingDelegationRequest>): _126.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _126.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_126.QueryUnbondingDelegationResponse>): _126.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _126.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorDelegationsRequest>): _126.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _126.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorDelegationsResponse>): _126.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _126.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorUnbondingDelegationsRequest>): _126.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _126.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorUnbondingDelegationsResponse>): _126.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _126.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryRedelegationsRequest;
                fromPartial(object: Partial<_126.QueryRedelegationsRequest>): _126.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _126.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryRedelegationsResponse;
                fromPartial(object: Partial<_126.QueryRedelegationsResponse>): _126.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _126.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorsRequest>): _126.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _126.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorsResponse>): _126.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _126.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorRequest>): _126.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _126.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_126.QueryDelegatorValidatorResponse>): _126.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _126.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_126.QueryHistoricalInfoRequest>): _126.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _126.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_126.QueryHistoricalInfoResponse>): _126.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _126.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.QueryPoolRequest;
                fromPartial(_: Partial<_126.QueryPoolRequest>): _126.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _126.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryPoolResponse;
                fromPartial(object: Partial<_126.QueryPoolResponse>): _126.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _126.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.QueryParamsRequest;
                fromPartial(_: Partial<_126.QueryParamsRequest>): _126.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _126.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.QueryParamsResponse;
                fromPartial(object: Partial<_126.QueryParamsResponse>): _126.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _125.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.LastValidatorPower;
                fromPartial(object: Partial<_125.LastValidatorPower>): _125.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _124.AuthorizationType;
            authorizationTypeToJSON(object: _124.AuthorizationType): string;
            AuthorizationType: typeof _124.AuthorizationType;
            AuthorizationTypeSDKType: typeof _124.AuthorizationType;
            StakeAuthorization: {
                encode(message: _124.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.StakeAuthorization;
                fromPartial(object: Partial<_124.StakeAuthorization>): _124.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _124.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.StakeAuthorization_Validators;
                fromPartial(object: Partial<_124.StakeAuthorization_Validators>): _124.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _129.SignMode;
                signModeToJSON(object: _129.SignMode): string;
                SignMode: typeof _129.SignMode;
                SignModeSDKType: typeof _129.SignMode;
                SignatureDescriptors: {
                    encode(message: _129.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.SignatureDescriptors;
                    fromPartial(object: Partial<_129.SignatureDescriptors>): _129.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _129.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.SignatureDescriptor;
                    fromPartial(object: Partial<_129.SignatureDescriptor>): _129.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _129.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data>): _129.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _129.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data_Single>): _129.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _129.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data_Multi>): _129.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _248.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            Tx: {
                encode(message: _131.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.Tx;
                fromPartial(object: Partial<_131.Tx>): _131.Tx;
            };
            TxRaw: {
                encode(message: _131.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.TxRaw;
                fromPartial(object: Partial<_131.TxRaw>): _131.TxRaw;
            };
            SignDoc: {
                encode(message: _131.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.SignDoc;
                fromPartial(object: Partial<_131.SignDoc>): _131.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _131.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.SignDocDirectAux;
                fromPartial(object: Partial<_131.SignDocDirectAux>): _131.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _131.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.TxBody;
                fromPartial(object: Partial<_131.TxBody>): _131.TxBody;
            };
            AuthInfo: {
                encode(message: _131.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.AuthInfo;
                fromPartial(object: Partial<_131.AuthInfo>): _131.AuthInfo;
            };
            SignerInfo: {
                encode(message: _131.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.SignerInfo;
                fromPartial(object: Partial<_131.SignerInfo>): _131.SignerInfo;
            };
            ModeInfo: {
                encode(message: _131.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.ModeInfo;
                fromPartial(object: Partial<_131.ModeInfo>): _131.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _131.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.ModeInfo_Single;
                fromPartial(object: Partial<_131.ModeInfo_Single>): _131.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _131.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.ModeInfo_Multi;
                fromPartial(object: Partial<_131.ModeInfo_Multi>): _131.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _131.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.Fee;
                fromPartial(object: Partial<_131.Fee>): _131.Fee;
            };
            Tip: {
                encode(message: _131.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.Tip;
                fromPartial(object: Partial<_131.Tip>): _131.Tip;
            };
            AuxSignerData: {
                encode(message: _131.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.AuxSignerData;
                fromPartial(object: Partial<_131.AuxSignerData>): _131.AuxSignerData;
            };
            orderByFromJSON(object: any): _130.OrderBy;
            orderByToJSON(object: _130.OrderBy): string;
            broadcastModeFromJSON(object: any): _130.BroadcastMode;
            broadcastModeToJSON(object: _130.BroadcastMode): string;
            OrderBy: typeof _130.OrderBy;
            OrderBySDKType: typeof _130.OrderBy;
            BroadcastMode: typeof _130.BroadcastMode;
            BroadcastModeSDKType: typeof _130.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _130.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetTxsEventRequest;
                fromPartial(object: Partial<_130.GetTxsEventRequest>): _130.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _130.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetTxsEventResponse;
                fromPartial(object: Partial<_130.GetTxsEventResponse>): _130.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _130.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.BroadcastTxRequest;
                fromPartial(object: Partial<_130.BroadcastTxRequest>): _130.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _130.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.BroadcastTxResponse;
                fromPartial(object: Partial<_130.BroadcastTxResponse>): _130.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _130.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.SimulateRequest;
                fromPartial(object: Partial<_130.SimulateRequest>): _130.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _130.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.SimulateResponse;
                fromPartial(object: Partial<_130.SimulateResponse>): _130.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _130.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetTxRequest;
                fromPartial(object: Partial<_130.GetTxRequest>): _130.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _130.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetTxResponse;
                fromPartial(object: Partial<_130.GetTxResponse>): _130.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _130.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_130.GetBlockWithTxsRequest>): _130.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _130.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_130.GetBlockWithTxsResponse>): _130.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _132.QueryCurrentPlanRequest): Promise<_132.QueryCurrentPlanResponse>;
                appliedPlan(request: _132.QueryAppliedPlanRequest): Promise<_132.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _132.QueryUpgradedConsensusStateRequest): Promise<_132.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _132.QueryModuleVersionsRequest): Promise<_132.QueryModuleVersionsResponse>;
                authority(request?: _132.QueryAuthorityRequest): Promise<_132.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _133.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _133.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _133.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _133.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _133.MsgSoftwareUpgrade) => {
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
                    }) => _133.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _133.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _133.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _134.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Plan;
                fromPartial(object: Partial<_134.Plan>): _134.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _134.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_134.SoftwareUpgradeProposal>): _134.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _134.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_134.CancelSoftwareUpgradeProposal>): _134.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _134.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ModuleVersion;
                fromPartial(object: Partial<_134.ModuleVersion>): _134.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _133.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_133.MsgSoftwareUpgrade>): _133.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _133.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_133.MsgSoftwareUpgradeResponse>): _133.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _133.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCancelUpgrade;
                fromPartial(object: Partial<_133.MsgCancelUpgrade>): _133.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _133.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_133.MsgCancelUpgradeResponse>): _133.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _132.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _132.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_132.QueryCurrentPlanRequest>): _132.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _132.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_132.QueryCurrentPlanResponse>): _132.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _132.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_132.QueryAppliedPlanRequest>): _132.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _132.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_132.QueryAppliedPlanResponse>): _132.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _132.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_132.QueryUpgradedConsensusStateRequest>): _132.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _132.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_132.QueryUpgradedConsensusStateResponse>): _132.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _132.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_132.QueryModuleVersionsRequest>): _132.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _132.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_132.QueryModuleVersionsResponse>): _132.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _132.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _132.QueryAuthorityRequest;
                fromPartial(_: Partial<_132.QueryAuthorityRequest>): _132.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _132.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryAuthorityResponse;
                fromPartial(object: Partial<_132.QueryAuthorityResponse>): _132.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _135.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _135.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _135.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _135.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _135.MsgCreateVestingAccount) => {
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
                    }) => _135.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _135.MsgCreatePermanentLockedAccount) => {
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
                    }) => _135.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _135.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _135.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _136.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.BaseVestingAccount;
                fromPartial(object: Partial<_136.BaseVestingAccount>): _136.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _136.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.ContinuousVestingAccount;
                fromPartial(object: Partial<_136.ContinuousVestingAccount>): _136.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _136.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.DelayedVestingAccount;
                fromPartial(object: Partial<_136.DelayedVestingAccount>): _136.DelayedVestingAccount;
            };
            Period: {
                encode(message: _136.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.Period;
                fromPartial(object: Partial<_136.Period>): _136.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _136.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.PeriodicVestingAccount;
                fromPartial(object: Partial<_136.PeriodicVestingAccount>): _136.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _136.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.PermanentLockedAccount;
                fromPartial(object: Partial<_136.PermanentLockedAccount>): _136.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _135.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.MsgCreateVestingAccount;
                fromPartial(object: Partial<_135.MsgCreateVestingAccount>): _135.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _135.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _135.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_135.MsgCreateVestingAccountResponse>): _135.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _135.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_135.MsgCreatePermanentLockedAccount>): _135.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _135.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _135.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_135.MsgCreatePermanentLockedAccountResponse>): _135.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _135.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_135.MsgCreatePeriodicVestingAccount>): _135.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _135.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _135.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_135.MsgCreatePeriodicVestingAccountResponse>): _135.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _250.MsgClientImpl;
                };
                bank: {
                    v1beta1: _251.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _252.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _253.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _254.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _255.MsgClientImpl;
                };
                gov: {
                    v1: _256.MsgClientImpl;
                    v1beta1: _257.MsgClientImpl;
                };
                group: {
                    v1: _258.MsgClientImpl;
                };
                nft: {
                    v1beta1: _259.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _260.MsgClientImpl;
                };
                staking: {
                    v1beta1: _261.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _262.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _263.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _44.QueryConfigRequest): Promise<_44.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _47.QueryAccountsRequest): Promise<_47.QueryAccountsResponse>;
                        account(request: _47.QueryAccountRequest): Promise<_47.QueryAccountResponse>;
                        accountAddressByID(request: _47.QueryAccountAddressByIDRequest): Promise<_47.QueryAccountAddressByIDResponse>;
                        params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                        moduleAccounts(request?: _47.QueryModuleAccountsRequest): Promise<_47.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _47.QueryModuleAccountByNameRequest): Promise<_47.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _47.Bech32PrefixRequest): Promise<_47.Bech32PrefixResponse>;
                        addressBytesToString(request: _47.AddressBytesToStringRequest): Promise<_47.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _47.AddressStringToBytesRequest): Promise<_47.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _51.QueryGrantsRequest): Promise<_51.QueryGrantsResponse>;
                        granterGrants(request: _51.QueryGranterGrantsRequest): Promise<_51.QueryGranterGrantsResponse>;
                        granteeGrants(request: _51.QueryGranteeGrantsRequest): Promise<_51.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _56.QueryBalanceRequest): Promise<_56.QueryBalanceResponse>;
                        allBalances(request: _56.QueryAllBalancesRequest): Promise<_56.QueryAllBalancesResponse>;
                        spendableBalances(request: _56.QuerySpendableBalancesRequest): Promise<_56.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _56.QueryTotalSupplyRequest): Promise<_56.QueryTotalSupplyResponse>;
                        supplyOf(request: _56.QuerySupplyOfRequest): Promise<_56.QuerySupplyOfResponse>;
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        denomMetadata(request: _56.QueryDenomMetadataRequest): Promise<_56.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _56.QueryDenomsMetadataRequest): Promise<_56.QueryDenomsMetadataResponse>;
                        denomOwners(request: _56.QueryDenomOwnersRequest): Promise<_56.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _60.ConfigRequest): Promise<_60.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _67.GetNodeInfoRequest): Promise<_67.GetNodeInfoResponse>;
                            getSyncing(request?: _67.GetSyncingRequest): Promise<_67.GetSyncingResponse>;
                            getLatestBlock(request?: _67.GetLatestBlockRequest): Promise<_67.GetLatestBlockResponse>;
                            getBlockByHeight(request: _67.GetBlockByHeightRequest): Promise<_67.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _67.GetLatestValidatorSetRequest): Promise<_67.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _67.GetValidatorSetByHeightRequest): Promise<_67.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _67.ABCIQueryRequest): Promise<_67.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _82.QueryValidatorOutstandingRewardsRequest): Promise<_82.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _82.QueryValidatorCommissionRequest): Promise<_82.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _82.QueryValidatorSlashesRequest): Promise<_82.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _82.QueryDelegationRewardsRequest): Promise<_82.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _82.QueryDelegationTotalRewardsRequest): Promise<_82.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _82.QueryDelegatorWithdrawAddressRequest): Promise<_82.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _82.QueryCommunityPoolRequest): Promise<_82.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _86.QueryEvidenceRequest): Promise<_86.QueryEvidenceResponse>;
                        allEvidence(request?: _86.QueryAllEvidenceRequest): Promise<_86.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _90.QueryAllowanceRequest): Promise<_90.QueryAllowanceResponse>;
                        allowances(request: _90.QueryAllowancesRequest): Promise<_90.QueryAllowancesResponse>;
                        allowancesByGranter(request: _90.QueryAllowancesByGranterRequest): Promise<_90.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _95.QueryProposalRequest): Promise<_95.QueryProposalResponse>;
                        proposals(request: _95.QueryProposalsRequest): Promise<_95.QueryProposalsResponse>;
                        vote(request: _95.QueryVoteRequest): Promise<_95.QueryVoteResponse>;
                        votes(request: _95.QueryVotesRequest): Promise<_95.QueryVotesResponse>;
                        params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        deposit(request: _95.QueryDepositRequest): Promise<_95.QueryDepositResponse>;
                        deposits(request: _95.QueryDepositsRequest): Promise<_95.QueryDepositsResponse>;
                        tallyResult(request: _95.QueryTallyResultRequest): Promise<_95.QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: _103.QueryGroupInfoRequest): Promise<_103.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _103.QueryGroupPolicyInfoRequest): Promise<_103.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _103.QueryGroupMembersRequest): Promise<_103.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _103.QueryGroupsByAdminRequest): Promise<_103.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _103.QueryGroupPoliciesByGroupRequest): Promise<_103.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _103.QueryGroupPoliciesByAdminRequest): Promise<_103.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _103.QueryProposalsByGroupPolicyRequest): Promise<_103.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _103.QueryVoteByProposalVoterRequest): Promise<_103.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _103.QueryVotesByProposalRequest): Promise<_103.QueryVotesByProposalResponse>;
                        votesByVoter(request: _103.QueryVotesByVoterRequest): Promise<_103.QueryVotesByVoterResponse>;
                        groupsByMember(request: _103.QueryGroupsByMemberRequest): Promise<_103.QueryGroupsByMemberResponse>;
                        tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
                        groups(request?: _103.QueryGroupsRequest): Promise<_103.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        inflation(request?: _108.QueryInflationRequest): Promise<_108.QueryInflationResponse>;
                        annualProvisions(request?: _108.QueryAnnualProvisionsRequest): Promise<_108.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _113.QueryBalanceRequest): Promise<_113.QueryBalanceResponse>;
                        owner(request: _113.QueryOwnerRequest): Promise<_113.QueryOwnerResponse>;
                        supply(request: _113.QuerySupplyRequest): Promise<_113.QuerySupplyResponse>;
                        nFTs(request: _113.QueryNFTsRequest): Promise<_113.QueryNFTsResponse>;
                        nFT(request: _113.QueryNFTRequest): Promise<_113.QueryNFTResponse>;
                        class(request: _113.QueryClassRequest): Promise<_113.QueryClassResponse>;
                        classes(request?: _113.QueryClassesRequest): Promise<_113.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        subspaces(request?: _119.QuerySubspacesRequest): Promise<_119.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                        signingInfo(request: _121.QuerySigningInfoRequest): Promise<_121.QuerySigningInfoResponse>;
                        signingInfos(request?: _121.QuerySigningInfosRequest): Promise<_121.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _126.QueryValidatorsRequest): Promise<_126.QueryValidatorsResponse>;
                        validator(request: _126.QueryValidatorRequest): Promise<_126.QueryValidatorResponse>;
                        validatorDelegations(request: _126.QueryValidatorDelegationsRequest): Promise<_126.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _126.QueryValidatorUnbondingDelegationsRequest): Promise<_126.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _126.QueryDelegationRequest): Promise<_126.QueryDelegationResponse>;
                        unbondingDelegation(request: _126.QueryUnbondingDelegationRequest): Promise<_126.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _126.QueryDelegatorDelegationsRequest): Promise<_126.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _126.QueryDelegatorUnbondingDelegationsRequest): Promise<_126.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _126.QueryRedelegationsRequest): Promise<_126.QueryRedelegationsResponse>;
                        delegatorValidators(request: _126.QueryDelegatorValidatorsRequest): Promise<_126.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _126.QueryDelegatorValidatorRequest): Promise<_126.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _126.QueryHistoricalInfoRequest): Promise<_126.QueryHistoricalInfoResponse>;
                        pool(request?: _126.QueryPoolRequest): Promise<_126.QueryPoolResponse>;
                        params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                        getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                        broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                        getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                        getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _132.QueryCurrentPlanRequest): Promise<_132.QueryCurrentPlanResponse>;
                        appliedPlan(request: _132.QueryAppliedPlanRequest): Promise<_132.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _132.QueryUpgradedConsensusStateRequest): Promise<_132.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _132.QueryModuleVersionsRequest): Promise<_132.QueryModuleVersionsResponse>;
                        authority(request?: _132.QueryAuthorityRequest): Promise<_132.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _213.LCDQueryClient;
                };
                authz: {
                    v1beta1: _214.LCDQueryClient;
                };
                bank: {
                    v1beta1: _215.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _216.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _217.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _218.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _219.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _220.LCDQueryClient;
                };
                gov: {
                    v1: _221.LCDQueryClient;
                    v1beta1: _222.LCDQueryClient;
                };
                group: {
                    v1: _223.LCDQueryClient;
                };
                mint: {
                    v1beta1: _224.LCDQueryClient;
                };
                nft: {
                    v1beta1: _225.LCDQueryClient;
                };
                params: {
                    v1beta1: _226.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _227.LCDQueryClient;
                };
                staking: {
                    v1beta1: _228.LCDQueryClient;
                };
                tx: {
                    v1beta1: _229.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _230.LCDQueryClient;
                };
            };
        }>;
    };
}
