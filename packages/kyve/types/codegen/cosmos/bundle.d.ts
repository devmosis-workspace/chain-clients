import * as _39 from "./app/module/v1alpha1/module";
import * as _40 from "./app/v1alpha1/config";
import * as _41 from "./app/v1alpha1/module";
import * as _42 from "./app/v1alpha1/query";
import * as _43 from "./auth/v1beta1/auth";
import * as _44 from "./auth/v1beta1/genesis";
import * as _45 from "./auth/v1beta1/query";
import * as _46 from "./authz/v1beta1/authz";
import * as _47 from "./authz/v1beta1/event";
import * as _48 from "./authz/v1beta1/genesis";
import * as _49 from "./authz/v1beta1/query";
import * as _50 from "./authz/v1beta1/tx";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./base/abci/v1beta1/abci";
import * as _57 from "./base/kv/v1beta1/kv";
import * as _58 from "./base/node/v1beta1/query";
import * as _59 from "./base/query/v1beta1/pagination";
import * as _60 from "./base/reflection/v1beta1/reflection";
import * as _61 from "./base/reflection/v2alpha1/reflection";
import * as _62 from "./base/snapshots/v1beta1/snapshot";
import * as _63 from "./base/store/v1beta1/commit_info";
import * as _64 from "./base/store/v1beta1/listening";
import * as _65 from "./base/tendermint/v1beta1/query";
import * as _66 from "./base/tendermint/v1beta1/types";
import * as _67 from "./base/v1beta1/coin";
import * as _68 from "./capability/v1beta1/capability";
import * as _69 from "./capability/v1beta1/genesis";
import * as _70 from "./crisis/v1beta1/genesis";
import * as _71 from "./crisis/v1beta1/tx";
import * as _72 from "./crypto/ed25519/keys";
import * as _73 from "./crypto/hd/v1/hd";
import * as _74 from "./crypto/keyring/v1/record";
import * as _75 from "./crypto/multisig/keys";
import * as _76 from "./crypto/secp256k1/keys";
import * as _77 from "./crypto/secp256r1/keys";
import * as _78 from "./distribution/v1beta1/distribution";
import * as _79 from "./distribution/v1beta1/genesis";
import * as _80 from "./distribution/v1beta1/query";
import * as _81 from "./distribution/v1beta1/tx";
import * as _82 from "./evidence/v1beta1/evidence";
import * as _83 from "./evidence/v1beta1/genesis";
import * as _84 from "./evidence/v1beta1/query";
import * as _85 from "./evidence/v1beta1/tx";
import * as _86 from "./feegrant/v1beta1/feegrant";
import * as _87 from "./feegrant/v1beta1/genesis";
import * as _88 from "./feegrant/v1beta1/query";
import * as _89 from "./feegrant/v1beta1/tx";
import * as _90 from "./genutil/v1beta1/genesis";
import * as _91 from "./gov/v1/genesis";
import * as _92 from "./gov/v1/gov";
import * as _93 from "./gov/v1/query";
import * as _94 from "./gov/v1/tx";
import * as _95 from "./gov/v1beta1/genesis";
import * as _96 from "./gov/v1beta1/gov";
import * as _97 from "./gov/v1beta1/query";
import * as _98 from "./gov/v1beta1/tx";
import * as _99 from "./group/v1/events";
import * as _100 from "./group/v1/genesis";
import * as _101 from "./group/v1/query";
import * as _102 from "./group/v1/tx";
import * as _103 from "./group/v1/types";
import * as _104 from "./mint/v1beta1/genesis";
import * as _105 from "./mint/v1beta1/mint";
import * as _106 from "./mint/v1beta1/query";
import * as _108 from "./nft/v1beta1/event";
import * as _109 from "./nft/v1beta1/genesis";
import * as _110 from "./nft/v1beta1/nft";
import * as _111 from "./nft/v1beta1/query";
import * as _112 from "./nft/v1beta1/tx";
import * as _113 from "./orm/module/v1alpha1/module";
import * as _114 from "./orm/v1/orm";
import * as _115 from "./orm/v1alpha1/schema";
import * as _116 from "./params/v1beta1/params";
import * as _117 from "./params/v1beta1/query";
import * as _118 from "./slashing/v1beta1/genesis";
import * as _119 from "./slashing/v1beta1/query";
import * as _120 from "./slashing/v1beta1/slashing";
import * as _121 from "./slashing/v1beta1/tx";
import * as _122 from "./staking/v1beta1/authz";
import * as _123 from "./staking/v1beta1/genesis";
import * as _124 from "./staking/v1beta1/query";
import * as _125 from "./staking/v1beta1/staking";
import * as _126 from "./staking/v1beta1/tx";
import * as _127 from "./tx/signing/v1beta1/signing";
import * as _128 from "./tx/v1beta1/service";
import * as _129 from "./tx/v1beta1/tx";
import * as _130 from "./upgrade/v1beta1/query";
import * as _131 from "./upgrade/v1beta1/tx";
import * as _132 from "./upgrade/v1beta1/upgrade";
import * as _133 from "./vesting/v1beta1/tx";
import * as _134 from "./vesting/v1beta1/vesting";
import * as _209 from "./auth/v1beta1/query.lcd";
import * as _210 from "./authz/v1beta1/query.lcd";
import * as _211 from "./bank/v1beta1/query.lcd";
import * as _212 from "./base/node/v1beta1/query.lcd";
import * as _213 from "./base/tendermint/v1beta1/query.lcd";
import * as _214 from "./distribution/v1beta1/query.lcd";
import * as _215 from "./evidence/v1beta1/query.lcd";
import * as _216 from "./feegrant/v1beta1/query.lcd";
import * as _217 from "./gov/v1/query.lcd";
import * as _218 from "./gov/v1beta1/query.lcd";
import * as _219 from "./group/v1/query.lcd";
import * as _220 from "./mint/v1beta1/query.lcd";
import * as _221 from "./nft/v1beta1/query.lcd";
import * as _222 from "./params/v1beta1/query.lcd";
import * as _223 from "./slashing/v1beta1/query.lcd";
import * as _224 from "./staking/v1beta1/query.lcd";
import * as _225 from "./tx/v1beta1/service.lcd";
import * as _226 from "./upgrade/v1beta1/query.lcd";
import * as _227 from "./app/v1alpha1/query.rpc.Query";
import * as _228 from "./auth/v1beta1/query.rpc.Query";
import * as _229 from "./authz/v1beta1/query.rpc.Query";
import * as _230 from "./bank/v1beta1/query.rpc.Query";
import * as _231 from "./base/node/v1beta1/query.rpc.Service";
import * as _232 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _233 from "./distribution/v1beta1/query.rpc.Query";
import * as _234 from "./evidence/v1beta1/query.rpc.Query";
import * as _235 from "./feegrant/v1beta1/query.rpc.Query";
import * as _236 from "./gov/v1/query.rpc.Query";
import * as _237 from "./gov/v1beta1/query.rpc.Query";
import * as _238 from "./group/v1/query.rpc.Query";
import * as _239 from "./mint/v1beta1/query.rpc.Query";
import * as _240 from "./nft/v1beta1/query.rpc.Query";
import * as _241 from "./params/v1beta1/query.rpc.Query";
import * as _242 from "./slashing/v1beta1/query.rpc.Query";
import * as _243 from "./staking/v1beta1/query.rpc.Query";
import * as _244 from "./tx/v1beta1/service.rpc.Service";
import * as _245 from "./upgrade/v1beta1/query.rpc.Query";
import * as _246 from "./authz/v1beta1/tx.rpc.msg";
import * as _247 from "./bank/v1beta1/tx.rpc.msg";
import * as _248 from "./crisis/v1beta1/tx.rpc.msg";
import * as _249 from "./distribution/v1beta1/tx.rpc.msg";
import * as _250 from "./evidence/v1beta1/tx.rpc.msg";
import * as _251 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _252 from "./gov/v1/tx.rpc.msg";
import * as _253 from "./gov/v1beta1/tx.rpc.msg";
import * as _254 from "./group/v1/tx.rpc.msg";
import * as _255 from "./nft/v1beta1/tx.rpc.msg";
import * as _256 from "./slashing/v1beta1/tx.rpc.msg";
import * as _257 from "./staking/v1beta1/tx.rpc.msg";
import * as _258 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _259 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _39.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.Module;
                    fromPartial(_: Partial<_39.Module>): _39.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _42.QueryConfigRequest): Promise<_42.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _42.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.QueryConfigRequest;
                fromPartial(_: Partial<_42.QueryConfigRequest>): _42.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _42.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.QueryConfigResponse;
                fromPartial(object: Partial<_42.QueryConfigResponse>): _42.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _41.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.ModuleDescriptor;
                fromPartial(object: Partial<_41.ModuleDescriptor>): _41.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _41.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.PackageReference;
                fromPartial(object: Partial<_41.PackageReference>): _41.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _41.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MigrateFromInfo;
                fromPartial(object: Partial<_41.MigrateFromInfo>): _41.MigrateFromInfo;
            };
            Config: {
                encode(message: _40.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.Config;
                fromPartial(object: Partial<_40.Config>): _40.Config;
            };
            ModuleConfig: {
                encode(message: _40.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ModuleConfig;
                fromPartial(object: Partial<_40.ModuleConfig>): _40.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                accountAddressByID(request: _45.QueryAccountAddressByIDRequest): Promise<_45.QueryAccountAddressByIDResponse>;
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                moduleAccounts(request?: _45.QueryModuleAccountsRequest): Promise<_45.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _45.Bech32PrefixRequest): Promise<_45.Bech32PrefixResponse>;
                addressBytesToString(request: _45.AddressBytesToStringRequest): Promise<_45.AddressBytesToStringResponse>;
                addressStringToBytes(request: _45.AddressStringToBytesRequest): Promise<_45.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _45.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountsRequest;
                fromPartial(object: Partial<_45.QueryAccountsRequest>): _45.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _45.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountsResponse;
                fromPartial(object: Partial<_45.QueryAccountsResponse>): _45.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _45.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountRequest;
                fromPartial(object: Partial<_45.QueryAccountRequest>): _45.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _45.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountResponse;
                fromPartial(object: Partial<_45.QueryAccountResponse>): _45.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _45.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _45.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _45.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_45.QueryModuleAccountsRequest>): _45.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _45.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_45.QueryModuleAccountsResponse>): _45.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _45.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameRequest>): _45.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _45.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameResponse>): _45.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _45.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.Bech32PrefixRequest;
                fromPartial(_: Partial<_45.Bech32PrefixRequest>): _45.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _45.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Bech32PrefixResponse;
                fromPartial(object: Partial<_45.Bech32PrefixResponse>): _45.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _45.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.AddressBytesToStringRequest;
                fromPartial(object: Partial<_45.AddressBytesToStringRequest>): _45.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _45.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.AddressBytesToStringResponse;
                fromPartial(object: Partial<_45.AddressBytesToStringResponse>): _45.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _45.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.AddressStringToBytesRequest;
                fromPartial(object: Partial<_45.AddressStringToBytesRequest>): _45.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _45.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.AddressStringToBytesResponse;
                fromPartial(object: Partial<_45.AddressStringToBytesResponse>): _45.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _45.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_45.QueryAccountAddressByIDRequest>): _45.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _45.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_45.QueryAccountAddressByIDResponse>): _45.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            BaseAccount: {
                encode(message: _43.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.BaseAccount;
                fromPartial(object: Partial<_43.BaseAccount>): _43.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _43.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ModuleAccount;
                fromPartial(object: Partial<_43.ModuleAccount>): _43.ModuleAccount;
            };
            Params: {
                encode(message: _43.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.Params;
                fromPartial(object: Partial<_43.Params>): _43.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _50.MsgGrant) => {
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
                    }) => _50.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _50.MsgExec) => {
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
                    }) => _50.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _50.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _50.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _50.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgGrant;
                fromPartial(object: Partial<_50.MsgGrant>): _50.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _50.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgExecResponse;
                fromPartial(object: Partial<_50.MsgExecResponse>): _50.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _50.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgExec;
                fromPartial(object: Partial<_50.MsgExec>): _50.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _50.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgGrantResponse;
                fromPartial(_: Partial<_50.MsgGrantResponse>): _50.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _50.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgRevoke;
                fromPartial(object: Partial<_50.MsgRevoke>): _50.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _50.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgRevokeResponse;
                fromPartial(_: Partial<_50.MsgRevokeResponse>): _50.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _49.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGrantsRequest;
                fromPartial(object: Partial<_49.QueryGrantsRequest>): _49.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _49.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGrantsResponse;
                fromPartial(object: Partial<_49.QueryGrantsResponse>): _49.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _49.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranterGrantsRequest>): _49.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _49.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranterGrantsResponse>): _49.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _49.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranteeGrantsRequest>): _49.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _49.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranteeGrantsResponse>): _49.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            EventGrant: {
                encode(message: _47.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.EventGrant;
                fromPartial(object: Partial<_47.EventGrant>): _47.EventGrant;
            };
            EventRevoke: {
                encode(message: _47.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.EventRevoke;
                fromPartial(object: Partial<_47.EventRevoke>): _47.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _46.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenericAuthorization;
                fromPartial(object: Partial<_46.GenericAuthorization>): _46.GenericAuthorization;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Grant;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
            };
            GrantAuthorization: {
                encode(message: _46.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GrantAuthorization;
                fromPartial(object: Partial<_46.GrantAuthorization>): _46.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _46.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GrantQueueItem;
                fromPartial(object: Partial<_46.GrantQueueItem>): _46.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
                denomOwners(request: _54.QueryDenomOwnersRequest): Promise<_54.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _55.MsgSend) => {
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
                    }) => _55.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _55.MsgMultiSend) => {
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
                    }) => _55.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _55.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSend;
                fromPartial(object: Partial<_55.MsgSend>): _55.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _55.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgSendResponse;
                fromPartial(_: Partial<_55.MsgSendResponse>): _55.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _55.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgMultiSend;
                fromPartial(object: Partial<_55.MsgMultiSend>): _55.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _55.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgMultiSendResponse;
                fromPartial(_: Partial<_55.MsgMultiSendResponse>): _55.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _54.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryBalanceRequest;
                fromPartial(object: Partial<_54.QueryBalanceRequest>): _54.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _54.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryBalanceResponse;
                fromPartial(object: Partial<_54.QueryBalanceResponse>): _54.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _54.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryAllBalancesRequest;
                fromPartial(object: Partial<_54.QueryAllBalancesRequest>): _54.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _54.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryAllBalancesResponse;
                fromPartial(object: Partial<_54.QueryAllBalancesResponse>): _54.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _54.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_54.QuerySpendableBalancesRequest>): _54.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _54.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_54.QuerySpendableBalancesResponse>): _54.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _54.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_54.QueryTotalSupplyRequest>): _54.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _54.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_54.QueryTotalSupplyResponse>): _54.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _54.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySupplyOfRequest;
                fromPartial(object: Partial<_54.QuerySupplyOfRequest>): _54.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _54.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySupplyOfResponse;
                fromPartial(object: Partial<_54.QuerySupplyOfResponse>): _54.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _54.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomsMetadataRequest>): _54.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _54.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomsMetadataResponse>): _54.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _54.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomMetadataRequest>): _54.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _54.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomMetadataResponse>): _54.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _54.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_54.QueryDenomOwnersRequest>): _54.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _54.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DenomOwner;
                fromPartial(object: Partial<_54.DenomOwner>): _54.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _54.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_54.QueryDenomOwnersResponse>): _54.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
            Balance: {
                encode(message: _53.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Balance;
                fromPartial(object: Partial<_53.Balance>): _53.Balance;
            };
            Params: {
                encode(message: _52.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
            };
            SendEnabled: {
                encode(message: _52.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.SendEnabled;
                fromPartial(object: Partial<_52.SendEnabled>): _52.SendEnabled;
            };
            Input: {
                encode(message: _52.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Input;
                fromPartial(object: Partial<_52.Input>): _52.Input;
            };
            Output: {
                encode(message: _52.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Output;
                fromPartial(object: Partial<_52.Output>): _52.Output;
            };
            Supply: {
                encode(message: _52.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Supply;
                fromPartial(object: Partial<_52.Supply>): _52.Supply;
            };
            DenomUnit: {
                encode(message: _52.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.DenomUnit;
                fromPartial(object: Partial<_52.DenomUnit>): _52.DenomUnit;
            };
            Metadata: {
                encode(message: _52.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Metadata;
                fromPartial(object: Partial<_52.Metadata>): _52.Metadata;
            };
            SendAuthorization: {
                encode(message: _51.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.SendAuthorization;
                fromPartial(object: Partial<_51.SendAuthorization>): _51.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _56.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.TxResponse;
                    fromPartial(object: Partial<_56.TxResponse>): _56.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _56.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.ABCIMessageLog;
                    fromPartial(object: Partial<_56.ABCIMessageLog>): _56.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _56.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.StringEvent;
                    fromPartial(object: Partial<_56.StringEvent>): _56.StringEvent;
                };
                Attribute: {
                    encode(message: _56.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.Attribute;
                    fromPartial(object: Partial<_56.Attribute>): _56.Attribute;
                };
                GasInfo: {
                    encode(message: _56.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.GasInfo;
                    fromPartial(object: Partial<_56.GasInfo>): _56.GasInfo;
                };
                Result: {
                    encode(message: _56.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.Result;
                    fromPartial(object: Partial<_56.Result>): _56.Result;
                };
                SimulationResponse: {
                    encode(message: _56.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.SimulationResponse;
                    fromPartial(object: Partial<_56.SimulationResponse>): _56.SimulationResponse;
                };
                MsgData: {
                    encode(message: _56.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.MsgData;
                    fromPartial(object: Partial<_56.MsgData>): _56.MsgData;
                };
                TxMsgData: {
                    encode(message: _56.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.TxMsgData;
                    fromPartial(object: Partial<_56.TxMsgData>): _56.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _56.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.SearchTxsResult;
                    fromPartial(object: Partial<_56.SearchTxsResult>): _56.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _57.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _57.Pairs;
                    fromPartial(object: Partial<_57.Pairs>): _57.Pairs;
                };
                Pair: {
                    encode(message: _57.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _57.Pair;
                    fromPartial(object: Partial<_57.Pair>): _57.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _231.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _58.ConfigRequest): Promise<_58.ConfigResponse>;
                };
                LCDQueryClient: typeof _212.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _58.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _58.ConfigRequest;
                    fromPartial(_: Partial<_58.ConfigRequest>): _58.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _58.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.ConfigResponse;
                    fromPartial(object: Partial<_58.ConfigResponse>): _58.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _59.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _59.PageRequest;
                    fromPartial(object: Partial<_59.PageRequest>): _59.PageRequest;
                };
                PageResponse: {
                    encode(message: _59.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _59.PageResponse;
                    fromPartial(object: Partial<_59.PageResponse>): _59.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _60.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _60.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_60.ListAllInterfacesRequest>): _60.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _60.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _60.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_60.ListAllInterfacesResponse>): _60.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _60.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _60.ListImplementationsRequest;
                    fromPartial(object: Partial<_60.ListImplementationsRequest>): _60.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _60.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _60.ListImplementationsResponse;
                    fromPartial(object: Partial<_60.ListImplementationsResponse>): _60.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _61.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.AppDescriptor;
                    fromPartial(object: Partial<_61.AppDescriptor>): _61.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _61.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.TxDescriptor;
                    fromPartial(object: Partial<_61.TxDescriptor>): _61.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _61.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.AuthnDescriptor;
                    fromPartial(object: Partial<_61.AuthnDescriptor>): _61.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _61.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.SigningModeDescriptor;
                    fromPartial(object: Partial<_61.SigningModeDescriptor>): _61.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _61.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.ChainDescriptor;
                    fromPartial(object: Partial<_61.ChainDescriptor>): _61.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _61.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.CodecDescriptor;
                    fromPartial(object: Partial<_61.CodecDescriptor>): _61.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _61.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.InterfaceDescriptor;
                    fromPartial(object: Partial<_61.InterfaceDescriptor>): _61.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _61.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_61.InterfaceImplementerDescriptor>): _61.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _61.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_61.InterfaceAcceptingMessageDescriptor>): _61.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _61.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.ConfigurationDescriptor;
                    fromPartial(object: Partial<_61.ConfigurationDescriptor>): _61.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _61.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.MsgDescriptor;
                    fromPartial(object: Partial<_61.MsgDescriptor>): _61.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _61.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_61.GetAuthnDescriptorRequest>): _61.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _61.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_61.GetAuthnDescriptorResponse>): _61.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _61.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_61.GetChainDescriptorRequest>): _61.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _61.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_61.GetChainDescriptorResponse>): _61.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _61.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_61.GetCodecDescriptorRequest>): _61.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _61.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_61.GetCodecDescriptorResponse>): _61.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _61.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_61.GetConfigurationDescriptorRequest>): _61.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _61.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_61.GetConfigurationDescriptorResponse>): _61.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _61.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_61.GetQueryServicesDescriptorRequest>): _61.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _61.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_61.GetQueryServicesDescriptorResponse>): _61.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _61.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_61.GetTxDescriptorRequest>): _61.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _61.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_61.GetTxDescriptorResponse>): _61.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _61.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.QueryServicesDescriptor;
                    fromPartial(object: Partial<_61.QueryServicesDescriptor>): _61.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _61.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.QueryServiceDescriptor;
                    fromPartial(object: Partial<_61.QueryServiceDescriptor>): _61.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _61.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.QueryMethodDescriptor;
                    fromPartial(object: Partial<_61.QueryMethodDescriptor>): _61.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _62.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.Snapshot;
                    fromPartial(object: Partial<_62.Snapshot>): _62.Snapshot;
                };
                Metadata: {
                    encode(message: _62.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.Metadata;
                    fromPartial(object: Partial<_62.Metadata>): _62.Metadata;
                };
                SnapshotItem: {
                    encode(message: _62.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotItem;
                    fromPartial(object: Partial<_62.SnapshotItem>): _62.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _62.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotStoreItem;
                    fromPartial(object: Partial<_62.SnapshotStoreItem>): _62.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _62.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotIAVLItem;
                    fromPartial(object: Partial<_62.SnapshotIAVLItem>): _62.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _62.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_62.SnapshotExtensionMeta>): _62.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _62.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_62.SnapshotExtensionPayload>): _62.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _62.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotKVItem;
                    fromPartial(object: Partial<_62.SnapshotKVItem>): _62.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _62.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.SnapshotSchema;
                    fromPartial(object: Partial<_62.SnapshotSchema>): _62.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _64.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.StoreKVPair;
                    fromPartial(object: Partial<_64.StoreKVPair>): _64.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _64.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.BlockMetadata;
                    fromPartial(object: Partial<_64.BlockMetadata>): _64.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _64.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_64.BlockMetadata_DeliverTx>): _64.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _63.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.CommitInfo;
                    fromPartial(object: Partial<_63.CommitInfo>): _63.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _63.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.StoreInfo;
                    fromPartial(object: Partial<_63.StoreInfo>): _63.StoreInfo;
                };
                CommitID: {
                    encode(message: _63.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.CommitID;
                    fromPartial(object: Partial<_63.CommitID>): _63.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _232.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _65.GetNodeInfoRequest): Promise<_65.GetNodeInfoResponse>;
                    getSyncing(request?: _65.GetSyncingRequest): Promise<_65.GetSyncingResponse>;
                    getLatestBlock(request?: _65.GetLatestBlockRequest): Promise<_65.GetLatestBlockResponse>;
                    getBlockByHeight(request: _65.GetBlockByHeightRequest): Promise<_65.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _65.GetLatestValidatorSetRequest): Promise<_65.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _65.GetValidatorSetByHeightRequest): Promise<_65.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _65.ABCIQueryRequest): Promise<_65.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _213.LCDQueryClient;
                Block: {
                    encode(message: _66.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.Block;
                    fromPartial(object: Partial<_66.Block>): _66.Block;
                };
                Header: {
                    encode(message: _66.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.Header;
                    fromPartial(object: Partial<_66.Header>): _66.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _65.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_65.GetValidatorSetByHeightRequest>): _65.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _65.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_65.GetValidatorSetByHeightResponse>): _65.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _65.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_65.GetLatestValidatorSetRequest>): _65.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _65.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_65.GetLatestValidatorSetResponse>): _65.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _65.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.Validator;
                    fromPartial(object: Partial<_65.Validator>): _65.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _65.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_65.GetBlockByHeightRequest>): _65.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _65.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_65.GetBlockByHeightResponse>): _65.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _65.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _65.GetLatestBlockRequest;
                    fromPartial(_: Partial<_65.GetLatestBlockRequest>): _65.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _65.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetLatestBlockResponse;
                    fromPartial(object: Partial<_65.GetLatestBlockResponse>): _65.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _65.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _65.GetSyncingRequest;
                    fromPartial(_: Partial<_65.GetSyncingRequest>): _65.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _65.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetSyncingResponse;
                    fromPartial(object: Partial<_65.GetSyncingResponse>): _65.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _65.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _65.GetNodeInfoRequest;
                    fromPartial(_: Partial<_65.GetNodeInfoRequest>): _65.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _65.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.GetNodeInfoResponse;
                    fromPartial(object: Partial<_65.GetNodeInfoResponse>): _65.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _65.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.VersionInfo;
                    fromPartial(object: Partial<_65.VersionInfo>): _65.VersionInfo;
                };
                Module: {
                    encode(message: _65.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.Module;
                    fromPartial(object: Partial<_65.Module>): _65.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _65.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.ABCIQueryRequest;
                    fromPartial(object: Partial<_65.ABCIQueryRequest>): _65.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _65.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.ABCIQueryResponse;
                    fromPartial(object: Partial<_65.ABCIQueryResponse>): _65.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _65.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.ProofOp;
                    fromPartial(object: Partial<_65.ProofOp>): _65.ProofOp;
                };
                ProofOps: {
                    encode(message: _65.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.ProofOps;
                    fromPartial(object: Partial<_65.ProofOps>): _65.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _67.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Coin;
                fromPartial(object: Partial<_67.Coin>): _67.Coin;
            };
            DecCoin: {
                encode(message: _67.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.DecCoin;
                fromPartial(object: Partial<_67.DecCoin>): _67.DecCoin;
            };
            IntProto: {
                encode(message: _67.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.IntProto;
                fromPartial(object: Partial<_67.IntProto>): _67.IntProto;
            };
            DecProto: {
                encode(message: _67.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.DecProto;
                fromPartial(object: Partial<_67.DecProto>): _67.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _69.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisOwners;
                fromPartial(object: Partial<_69.GenesisOwners>): _69.GenesisOwners;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            Capability: {
                encode(message: _68.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Capability;
                fromPartial(object: Partial<_68.Capability>): _68.Capability;
            };
            Owner: {
                encode(message: _68.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Owner;
                fromPartial(object: Partial<_68.Owner>): _68.Owner;
            };
            CapabilityOwners: {
                encode(message: _68.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.CapabilityOwners;
                fromPartial(object: Partial<_68.CapabilityOwners>): _68.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _71.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _71.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _71.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _71.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _71.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _71.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _71.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _71.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _71.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgVerifyInvariant;
                fromPartial(object: Partial<_71.MsgVerifyInvariant>): _71.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _71.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_71.MsgVerifyInvariantResponse>): _71.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _72.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.PubKey;
                fromPartial(object: Partial<_72.PubKey>): _72.PubKey;
            };
            PrivKey: {
                encode(message: _72.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.PrivKey;
                fromPartial(object: Partial<_72.PrivKey>): _72.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _73.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.BIP44Params;
                    fromPartial(object: Partial<_73.BIP44Params>): _73.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _74.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Record;
                    fromPartial(object: Partial<_74.Record>): _74.Record;
                };
                Record_Local: {
                    encode(message: _74.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Record_Local;
                    fromPartial(object: Partial<_74.Record_Local>): _74.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _74.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Record_Ledger;
                    fromPartial(object: Partial<_74.Record_Ledger>): _74.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _74.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.Record_Multi;
                    fromPartial(_: Partial<_74.Record_Multi>): _74.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _74.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.Record_Offline;
                    fromPartial(_: Partial<_74.Record_Offline>): _74.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _75.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.LegacyAminoPubKey;
                fromPartial(object: Partial<_75.LegacyAminoPubKey>): _75.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _76.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.PubKey;
                fromPartial(object: Partial<_76.PubKey>): _76.PubKey;
            };
            PrivKey: {
                encode(message: _76.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.PrivKey;
                fromPartial(object: Partial<_76.PrivKey>): _76.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _77.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.PubKey;
                fromPartial(object: Partial<_77.PubKey>): _77.PubKey;
            };
            PrivKey: {
                encode(message: _77.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.PrivKey;
                fromPartial(object: Partial<_77.PrivKey>): _77.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                validatorOutstandingRewards(request: _80.QueryValidatorOutstandingRewardsRequest): Promise<_80.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _80.QueryValidatorCommissionRequest): Promise<_80.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _80.QueryValidatorSlashesRequest): Promise<_80.QueryValidatorSlashesResponse>;
                delegationRewards(request: _80.QueryDelegationRewardsRequest): Promise<_80.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _80.QueryDelegationTotalRewardsRequest): Promise<_80.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _80.QueryDelegatorValidatorsRequest): Promise<_80.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _80.QueryDelegatorWithdrawAddressRequest): Promise<_80.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _80.QueryCommunityPoolRequest): Promise<_80.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _81.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _81.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _81.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _81.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _81.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _81.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _81.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _81.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _81.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _81.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _81.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _81.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _81.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _81.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _81.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _81.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _81.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _81.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _81.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _81.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _81.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _81.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _81.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _81.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _81.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _81.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _81.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _81.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _81.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _81.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _81.MsgFundCommunityPool) => {
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
                    }) => _81.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _81.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_81.MsgSetWithdrawAddress>): _81.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _81.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_81.MsgSetWithdrawAddressResponse>): _81.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _81.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_81.MsgWithdrawDelegatorReward>): _81.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _81.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_81.MsgWithdrawDelegatorRewardResponse>): _81.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _81.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_81.MsgWithdrawValidatorCommission>): _81.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _81.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_81.MsgWithdrawValidatorCommissionResponse>): _81.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _81.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgFundCommunityPool;
                fromPartial(object: Partial<_81.MsgFundCommunityPool>): _81.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _81.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_81.MsgFundCommunityPoolResponse>): _81.MsgFundCommunityPoolResponse;
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _80.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_80.QueryValidatorOutstandingRewardsRequest>): _80.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _80.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_80.QueryValidatorOutstandingRewardsResponse>): _80.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _80.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_80.QueryValidatorCommissionRequest>): _80.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _80.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_80.QueryValidatorCommissionResponse>): _80.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _80.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_80.QueryValidatorSlashesRequest>): _80.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _80.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_80.QueryValidatorSlashesResponse>): _80.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _80.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_80.QueryDelegationRewardsRequest>): _80.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _80.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_80.QueryDelegationRewardsResponse>): _80.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _80.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_80.QueryDelegationTotalRewardsRequest>): _80.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _80.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_80.QueryDelegationTotalRewardsResponse>): _80.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _80.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_80.QueryDelegatorValidatorsRequest>): _80.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _80.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_80.QueryDelegatorValidatorsResponse>): _80.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _80.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_80.QueryDelegatorWithdrawAddressRequest>): _80.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _80.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_80.QueryDelegatorWithdrawAddressResponse>): _80.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _80.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_80.QueryCommunityPoolRequest>): _80.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _80.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_80.QueryCommunityPoolResponse>): _80.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _79.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_79.DelegatorWithdrawInfo>): _79.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _79.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_79.ValidatorOutstandingRewardsRecord>): _79.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _79.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_79.ValidatorAccumulatedCommissionRecord>): _79.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _79.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_79.ValidatorHistoricalRewardsRecord>): _79.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _79.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_79.ValidatorCurrentRewardsRecord>): _79.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _79.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_79.DelegatorStartingInfoRecord>): _79.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _79.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_79.ValidatorSlashEventRecord>): _79.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
            Params: {
                encode(message: _78.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Params;
                fromPartial(object: Partial<_78.Params>): _78.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _78.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_78.ValidatorHistoricalRewards>): _78.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _78.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorCurrentRewards;
                fromPartial(object: Partial<_78.ValidatorCurrentRewards>): _78.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _78.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_78.ValidatorAccumulatedCommission>): _78.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _78.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_78.ValidatorOutstandingRewards>): _78.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _78.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorSlashEvent;
                fromPartial(object: Partial<_78.ValidatorSlashEvent>): _78.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _78.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.ValidatorSlashEvents;
                fromPartial(object: Partial<_78.ValidatorSlashEvents>): _78.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _78.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.FeePool;
                fromPartial(object: Partial<_78.FeePool>): _78.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _78.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_78.CommunityPoolSpendProposal>): _78.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _78.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.DelegatorStartingInfo;
                fromPartial(object: Partial<_78.DelegatorStartingInfo>): _78.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _78.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.DelegationDelegatorReward;
                fromPartial(object: Partial<_78.DelegationDelegatorReward>): _78.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _78.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_78.CommunityPoolSpendProposalWithDeposit>): _78.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _84.QueryEvidenceRequest): Promise<_84.QueryEvidenceResponse>;
                allEvidence(request?: _84.QueryAllEvidenceRequest): Promise<_84.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _85.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _85.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _85.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _85.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _85.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _85.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _85.MsgSubmitEvidence) => {
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
                    }) => _85.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _85.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgSubmitEvidence;
                fromPartial(object: Partial<_85.MsgSubmitEvidence>): _85.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _85.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_85.MsgSubmitEvidenceResponse>): _85.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _84.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryEvidenceRequest;
                fromPartial(object: Partial<_84.QueryEvidenceRequest>): _84.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _84.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryEvidenceResponse;
                fromPartial(object: Partial<_84.QueryEvidenceResponse>): _84.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _84.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_84.QueryAllEvidenceRequest>): _84.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _84.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_84.QueryAllEvidenceResponse>): _84.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
            };
            Equivocation: {
                encode(message: _82.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Equivocation;
                fromPartial(object: Partial<_82.Equivocation>): _82.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _88.QueryAllowanceRequest): Promise<_88.QueryAllowanceResponse>;
                allowances(request: _88.QueryAllowancesRequest): Promise<_88.QueryAllowancesResponse>;
                allowancesByGranter(request: _88.QueryAllowancesByGranterRequest): Promise<_88.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _89.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _89.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _89.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _89.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _89.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _89.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _89.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _89.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _89.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _89.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _89.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _89.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _89.MsgGrantAllowance) => {
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
                    }) => _89.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _89.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _89.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _89.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgGrantAllowance;
                fromPartial(object: Partial<_89.MsgGrantAllowance>): _89.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _89.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_89.MsgGrantAllowanceResponse>): _89.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _89.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgRevokeAllowance;
                fromPartial(object: Partial<_89.MsgRevokeAllowance>): _89.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _89.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_89.MsgRevokeAllowanceResponse>): _89.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _88.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowanceRequest;
                fromPartial(object: Partial<_88.QueryAllowanceRequest>): _88.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _88.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowanceResponse;
                fromPartial(object: Partial<_88.QueryAllowanceResponse>): _88.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _88.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowancesRequest;
                fromPartial(object: Partial<_88.QueryAllowancesRequest>): _88.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _88.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowancesResponse;
                fromPartial(object: Partial<_88.QueryAllowancesResponse>): _88.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _88.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_88.QueryAllowancesByGranterRequest>): _88.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _88.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_88.QueryAllowancesByGranterResponse>): _88.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
            BasicAllowance: {
                encode(message: _86.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.BasicAllowance;
                fromPartial(object: Partial<_86.BasicAllowance>): _86.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _86.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.PeriodicAllowance;
                fromPartial(object: Partial<_86.PeriodicAllowance>): _86.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _86.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.AllowedMsgAllowance;
                fromPartial(object: Partial<_86.AllowedMsgAllowance>): _86.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _86.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Grant;
                fromPartial(object: Partial<_86.Grant>): _86.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                proposals(request: _93.QueryProposalsRequest): Promise<_93.QueryProposalsResponse>;
                vote(request: _93.QueryVoteRequest): Promise<_93.QueryVoteResponse>;
                votes(request: _93.QueryVotesRequest): Promise<_93.QueryVotesResponse>;
                params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                deposit(request: _93.QueryDepositRequest): Promise<_93.QueryDepositResponse>;
                deposits(request: _93.QueryDepositsRequest): Promise<_93.QueryDepositsResponse>;
                tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _94.MsgSubmitProposal) => {
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
                    }) => _94.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _94.MsgExecLegacyContent) => {
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
                    }) => _94.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _94.MsgVote) => {
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
                    }) => _94.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _94.MsgVoteWeighted) => {
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
                    }) => _94.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _94.MsgDeposit) => {
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
                    }) => _94.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _94.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgSubmitProposal;
                fromPartial(object: Partial<_94.MsgSubmitProposal>): _94.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _94.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_94.MsgSubmitProposalResponse>): _94.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _94.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgExecLegacyContent;
                fromPartial(object: Partial<_94.MsgExecLegacyContent>): _94.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _94.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_94.MsgExecLegacyContentResponse>): _94.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _94.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgVote;
                fromPartial(object: Partial<_94.MsgVote>): _94.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _94.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgVoteResponse;
                fromPartial(_: Partial<_94.MsgVoteResponse>): _94.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _94.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgVoteWeighted;
                fromPartial(object: Partial<_94.MsgVoteWeighted>): _94.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _94.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_94.MsgVoteWeightedResponse>): _94.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _94.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgDeposit;
                fromPartial(object: Partial<_94.MsgDeposit>): _94.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _94.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgDepositResponse;
                fromPartial(_: Partial<_94.MsgDepositResponse>): _94.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _93.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryProposalRequest;
                fromPartial(object: Partial<_93.QueryProposalRequest>): _93.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _93.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryProposalResponse;
                fromPartial(object: Partial<_93.QueryProposalResponse>): _93.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _93.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryProposalsRequest;
                fromPartial(object: Partial<_93.QueryProposalsRequest>): _93.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _93.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryProposalsResponse;
                fromPartial(object: Partial<_93.QueryProposalsResponse>): _93.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _93.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryVoteRequest;
                fromPartial(object: Partial<_93.QueryVoteRequest>): _93.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _93.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryVoteResponse;
                fromPartial(object: Partial<_93.QueryVoteResponse>): _93.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _93.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryVotesRequest;
                fromPartial(object: Partial<_93.QueryVotesRequest>): _93.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _93.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryVotesResponse;
                fromPartial(object: Partial<_93.QueryVotesResponse>): _93.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryParamsRequest;
                fromPartial(object: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _93.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryDepositRequest;
                fromPartial(object: Partial<_93.QueryDepositRequest>): _93.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _93.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryDepositResponse;
                fromPartial(object: Partial<_93.QueryDepositResponse>): _93.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _93.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryDepositsRequest;
                fromPartial(object: Partial<_93.QueryDepositsRequest>): _93.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _93.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryDepositsResponse;
                fromPartial(object: Partial<_93.QueryDepositsResponse>): _93.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _93.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryTallyResultRequest;
                fromPartial(object: Partial<_93.QueryTallyResultRequest>): _93.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _93.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryTallyResultResponse;
                fromPartial(object: Partial<_93.QueryTallyResultResponse>): _93.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _92.VoteOption;
            voteOptionToJSON(object: _92.VoteOption): string;
            proposalStatusFromJSON(object: any): _92.ProposalStatus;
            proposalStatusToJSON(object: _92.ProposalStatus): string;
            VoteOption: typeof _92.VoteOption;
            VoteOptionSDKType: typeof _92.VoteOption;
            ProposalStatus: typeof _92.ProposalStatus;
            ProposalStatusSDKType: typeof _92.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _92.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.WeightedVoteOption;
                fromPartial(object: Partial<_92.WeightedVoteOption>): _92.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _92.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Deposit;
                fromPartial(object: Partial<_92.Deposit>): _92.Deposit;
            };
            Proposal: {
                encode(message: _92.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Proposal;
                fromPartial(object: Partial<_92.Proposal>): _92.Proposal;
            };
            TallyResult: {
                encode(message: _92.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.TallyResult;
                fromPartial(object: Partial<_92.TallyResult>): _92.TallyResult;
            };
            Vote: {
                encode(message: _92.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Vote;
                fromPartial(object: Partial<_92.Vote>): _92.Vote;
            };
            DepositParams: {
                encode(message: _92.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.DepositParams;
                fromPartial(object: Partial<_92.DepositParams>): _92.DepositParams;
            };
            VotingParams: {
                encode(message: _92.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.VotingParams;
                fromPartial(object: Partial<_92.VotingParams>): _92.VotingParams;
            };
            TallyParams: {
                encode(message: _92.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.TallyParams;
                fromPartial(object: Partial<_92.TallyParams>): _92.TallyParams;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _97.QueryProposalRequest): Promise<_97.QueryProposalResponse>;
                proposals(request: _97.QueryProposalsRequest): Promise<_97.QueryProposalsResponse>;
                vote(request: _97.QueryVoteRequest): Promise<_97.QueryVoteResponse>;
                votes(request: _97.QueryVotesRequest): Promise<_97.QueryVotesResponse>;
                params(request: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                deposit(request: _97.QueryDepositRequest): Promise<_97.QueryDepositResponse>;
                deposits(request: _97.QueryDepositsRequest): Promise<_97.QueryDepositsResponse>;
                tallyResult(request: _97.QueryTallyResultRequest): Promise<_97.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _98.MsgSubmitProposal) => {
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
                    }) => _98.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _98.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _98.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _98.MsgVoteWeighted) => {
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
                    }) => _98.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _98.MsgDeposit) => {
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
                    }) => _98.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _98.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgSubmitProposal;
                fromPartial(object: Partial<_98.MsgSubmitProposal>): _98.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _98.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_98.MsgSubmitProposalResponse>): _98.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _98.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgVote;
                fromPartial(object: Partial<_98.MsgVote>): _98.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _98.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.MsgVoteResponse;
                fromPartial(_: Partial<_98.MsgVoteResponse>): _98.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _98.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgVoteWeighted;
                fromPartial(object: Partial<_98.MsgVoteWeighted>): _98.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _98.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_98.MsgVoteWeightedResponse>): _98.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _98.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.MsgDeposit;
                fromPartial(object: Partial<_98.MsgDeposit>): _98.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _98.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.MsgDepositResponse;
                fromPartial(_: Partial<_98.MsgDepositResponse>): _98.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _97.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryProposalRequest;
                fromPartial(object: Partial<_97.QueryProposalRequest>): _97.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _97.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryProposalResponse;
                fromPartial(object: Partial<_97.QueryProposalResponse>): _97.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _97.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryProposalsRequest;
                fromPartial(object: Partial<_97.QueryProposalsRequest>): _97.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _97.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryProposalsResponse;
                fromPartial(object: Partial<_97.QueryProposalsResponse>): _97.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _97.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryVoteRequest;
                fromPartial(object: Partial<_97.QueryVoteRequest>): _97.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _97.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryVoteResponse;
                fromPartial(object: Partial<_97.QueryVoteResponse>): _97.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _97.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryVotesRequest;
                fromPartial(object: Partial<_97.QueryVotesRequest>): _97.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _97.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryVotesResponse;
                fromPartial(object: Partial<_97.QueryVotesResponse>): _97.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryParamsRequest;
                fromPartial(object: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryParamsResponse;
                fromPartial(object: Partial<_97.QueryParamsResponse>): _97.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _97.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryDepositRequest;
                fromPartial(object: Partial<_97.QueryDepositRequest>): _97.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _97.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryDepositResponse;
                fromPartial(object: Partial<_97.QueryDepositResponse>): _97.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _97.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryDepositsRequest;
                fromPartial(object: Partial<_97.QueryDepositsRequest>): _97.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _97.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryDepositsResponse;
                fromPartial(object: Partial<_97.QueryDepositsResponse>): _97.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _97.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryTallyResultRequest;
                fromPartial(object: Partial<_97.QueryTallyResultRequest>): _97.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _97.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryTallyResultResponse;
                fromPartial(object: Partial<_97.QueryTallyResultResponse>): _97.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _96.VoteOption;
            voteOptionToJSON(object: _96.VoteOption): string;
            proposalStatusFromJSON(object: any): _96.ProposalStatus;
            proposalStatusToJSON(object: _96.ProposalStatus): string;
            VoteOption: typeof _96.VoteOption;
            VoteOptionSDKType: typeof _96.VoteOption;
            ProposalStatus: typeof _96.ProposalStatus;
            ProposalStatusSDKType: typeof _96.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _96.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.WeightedVoteOption;
                fromPartial(object: Partial<_96.WeightedVoteOption>): _96.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _96.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.TextProposal;
                fromPartial(object: Partial<_96.TextProposal>): _96.TextProposal;
            };
            Deposit: {
                encode(message: _96.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.Deposit;
                fromPartial(object: Partial<_96.Deposit>): _96.Deposit;
            };
            Proposal: {
                encode(message: _96.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.Proposal;
                fromPartial(object: Partial<_96.Proposal>): _96.Proposal;
            };
            TallyResult: {
                encode(message: _96.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.TallyResult;
                fromPartial(object: Partial<_96.TallyResult>): _96.TallyResult;
            };
            Vote: {
                encode(message: _96.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.Vote;
                fromPartial(object: Partial<_96.Vote>): _96.Vote;
            };
            DepositParams: {
                encode(message: _96.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.DepositParams;
                fromPartial(object: Partial<_96.DepositParams>): _96.DepositParams;
            };
            VotingParams: {
                encode(message: _96.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.VotingParams;
                fromPartial(object: Partial<_96.VotingParams>): _96.VotingParams;
            };
            TallyParams: {
                encode(message: _96.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.TallyParams;
                fromPartial(object: Partial<_96.TallyParams>): _96.TallyParams;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _101.QueryGroupInfoRequest): Promise<_101.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _101.QueryGroupPolicyInfoRequest): Promise<_101.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _101.QueryGroupMembersRequest): Promise<_101.QueryGroupMembersResponse>;
                groupsByAdmin(request: _101.QueryGroupsByAdminRequest): Promise<_101.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _101.QueryGroupPoliciesByGroupRequest): Promise<_101.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _101.QueryGroupPoliciesByAdminRequest): Promise<_101.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _101.QueryProposalsByGroupPolicyRequest): Promise<_101.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _101.QueryVoteByProposalVoterRequest): Promise<_101.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _101.QueryVotesByProposalRequest): Promise<_101.QueryVotesByProposalResponse>;
                votesByVoter(request: _101.QueryVotesByVoterRequest): Promise<_101.QueryVotesByVoterResponse>;
                groupsByMember(request: _101.QueryGroupsByMemberRequest): Promise<_101.QueryGroupsByMemberResponse>;
                tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
                groups(request?: _101.QueryGroupsRequest): Promise<_101.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _102.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _102.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _102.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _102.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _102.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _102.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _102.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _102.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _102.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _102.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _102.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _102.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _102.MsgCreateGroup): {
                        typeUrl: string;
                        value: _102.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _102.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _102.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _102.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _102.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _102.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _102.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _102.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _102.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _102.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _102.MsgWithdrawProposal;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    exec(value: _102.MsgExec): {
                        typeUrl: string;
                        value: _102.MsgExec;
                    };
                    leaveGroup(value: _102.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _102.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _102.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _102.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _102.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _102.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _102.MsgCreateGroup): {
                        typeUrl: string;
                        value: _102.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _102.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _102.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _102.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _102.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _102.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _102.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _102.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _102.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _102.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _102.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _102.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _102.MsgWithdrawProposal;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    exec(value: _102.MsgExec): {
                        typeUrl: string;
                        value: _102.MsgExec;
                    };
                    leaveGroup(value: _102.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _102.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _102.MsgCreateGroup) => {
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
                    }) => _102.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _102.MsgUpdateGroupMembers) => {
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
                    }) => _102.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _102.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _102.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _102.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _102.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _102.MsgCreateGroupPolicy) => {
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
                    }) => _102.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _102.MsgCreateGroupWithPolicy) => {
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
                    }) => _102.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _102.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _102.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _102.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _102.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _102.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _102.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _102.MsgSubmitProposal) => {
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
                    }) => _102.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _102.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _102.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _102.MsgVote) => {
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
                    }) => _102.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _102.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _102.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _102.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _102.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _103.VoteOption;
            voteOptionToJSON(object: _103.VoteOption): string;
            proposalStatusFromJSON(object: any): _103.ProposalStatus;
            proposalStatusToJSON(object: _103.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _103.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _103.ProposalExecutorResult): string;
            VoteOption: typeof _103.VoteOption;
            VoteOptionSDKType: typeof _103.VoteOption;
            ProposalStatus: typeof _103.ProposalStatus;
            ProposalStatusSDKType: typeof _103.ProposalStatus;
            ProposalExecutorResult: typeof _103.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _103.ProposalExecutorResult;
            Member: {
                encode(message: _103.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Member;
                fromPartial(object: Partial<_103.Member>): _103.Member;
            };
            MemberRequest: {
                encode(message: _103.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.MemberRequest;
                fromPartial(object: Partial<_103.MemberRequest>): _103.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _103.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_103.ThresholdDecisionPolicy>): _103.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _103.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.PercentageDecisionPolicy;
                fromPartial(object: Partial<_103.PercentageDecisionPolicy>): _103.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _103.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DecisionPolicyWindows;
                fromPartial(object: Partial<_103.DecisionPolicyWindows>): _103.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _103.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.GroupInfo;
                fromPartial(object: Partial<_103.GroupInfo>): _103.GroupInfo;
            };
            GroupMember: {
                encode(message: _103.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.GroupMember;
                fromPartial(object: Partial<_103.GroupMember>): _103.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _103.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.GroupPolicyInfo;
                fromPartial(object: Partial<_103.GroupPolicyInfo>): _103.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _103.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Proposal;
                fromPartial(object: Partial<_103.Proposal>): _103.Proposal;
            };
            TallyResult: {
                encode(message: _103.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.TallyResult;
                fromPartial(object: Partial<_103.TallyResult>): _103.TallyResult;
            };
            Vote: {
                encode(message: _103.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Vote;
                fromPartial(object: Partial<_103.Vote>): _103.Vote;
            };
            execFromJSON(object: any): _102.Exec;
            execToJSON(object: _102.Exec): string;
            Exec: typeof _102.Exec;
            ExecSDKType: typeof _102.Exec;
            MsgCreateGroup: {
                encode(message: _102.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroup;
                fromPartial(object: Partial<_102.MsgCreateGroup>): _102.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _102.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroupResponse;
                fromPartial(object: Partial<_102.MsgCreateGroupResponse>): _102.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _102.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_102.MsgUpdateGroupMembers>): _102.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _102.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupMembersResponse>): _102.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _102.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_102.MsgUpdateGroupAdmin>): _102.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _102.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupAdminResponse>): _102.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _102.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_102.MsgUpdateGroupMetadata>): _102.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _102.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupMetadataResponse>): _102.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _102.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_102.MsgCreateGroupPolicy>): _102.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _102.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_102.MsgCreateGroupPolicyResponse>): _102.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _102.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_102.MsgUpdateGroupPolicyAdmin>): _102.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _102.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_102.MsgCreateGroupWithPolicy>): _102.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _102.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_102.MsgCreateGroupWithPolicyResponse>): _102.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _102.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupPolicyAdminResponse>): _102.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _102.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_102.MsgUpdateGroupPolicyDecisionPolicy>): _102.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _102.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupPolicyDecisionPolicyResponse>): _102.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _102.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_102.MsgUpdateGroupPolicyMetadata>): _102.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _102.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_102.MsgUpdateGroupPolicyMetadataResponse>): _102.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _102.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgSubmitProposal;
                fromPartial(object: Partial<_102.MsgSubmitProposal>): _102.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _102.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_102.MsgSubmitProposalResponse>): _102.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _102.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgWithdrawProposal;
                fromPartial(object: Partial<_102.MsgWithdrawProposal>): _102.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _102.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_102.MsgWithdrawProposalResponse>): _102.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _102.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgVote;
                fromPartial(object: Partial<_102.MsgVote>): _102.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _102.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgVoteResponse;
                fromPartial(_: Partial<_102.MsgVoteResponse>): _102.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _102.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgExec;
                fromPartial(object: Partial<_102.MsgExec>): _102.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _102.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgExecResponse;
                fromPartial(object: Partial<_102.MsgExecResponse>): _102.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _102.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgLeaveGroup;
                fromPartial(object: Partial<_102.MsgLeaveGroup>): _102.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _102.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_102.MsgLeaveGroupResponse>): _102.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _101.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupInfoRequest;
                fromPartial(object: Partial<_101.QueryGroupInfoRequest>): _101.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _101.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupInfoResponse;
                fromPartial(object: Partial<_101.QueryGroupInfoResponse>): _101.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _101.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_101.QueryGroupPolicyInfoRequest>): _101.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _101.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_101.QueryGroupPolicyInfoResponse>): _101.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _101.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupMembersRequest;
                fromPartial(object: Partial<_101.QueryGroupMembersRequest>): _101.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _101.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupMembersResponse;
                fromPartial(object: Partial<_101.QueryGroupMembersResponse>): _101.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _101.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_101.QueryGroupsByAdminRequest>): _101.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _101.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_101.QueryGroupsByAdminResponse>): _101.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _101.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_101.QueryGroupPoliciesByGroupRequest>): _101.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _101.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_101.QueryGroupPoliciesByGroupResponse>): _101.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _101.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_101.QueryGroupPoliciesByAdminRequest>): _101.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _101.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_101.QueryGroupPoliciesByAdminResponse>): _101.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _101.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalRequest;
                fromPartial(object: Partial<_101.QueryProposalRequest>): _101.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _101.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalResponse;
                fromPartial(object: Partial<_101.QueryProposalResponse>): _101.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _101.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_101.QueryProposalsByGroupPolicyRequest>): _101.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _101.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_101.QueryProposalsByGroupPolicyResponse>): _101.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _101.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_101.QueryVoteByProposalVoterRequest>): _101.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _101.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_101.QueryVoteByProposalVoterResponse>): _101.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _101.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_101.QueryVotesByProposalRequest>): _101.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _101.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_101.QueryVotesByProposalResponse>): _101.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _101.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_101.QueryVotesByVoterRequest>): _101.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _101.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_101.QueryVotesByVoterResponse>): _101.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _101.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_101.QueryGroupsByMemberRequest>): _101.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _101.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_101.QueryGroupsByMemberResponse>): _101.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _101.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryTallyResultRequest;
                fromPartial(object: Partial<_101.QueryTallyResultRequest>): _101.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _101.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryTallyResultResponse;
                fromPartial(object: Partial<_101.QueryTallyResultResponse>): _101.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _101.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsRequest;
                fromPartial(object: Partial<_101.QueryGroupsRequest>): _101.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _101.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryGroupsResponse;
                fromPartial(object: Partial<_101.QueryGroupsResponse>): _101.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.GenesisState;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _99.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventCreateGroup;
                fromPartial(object: Partial<_99.EventCreateGroup>): _99.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _99.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventUpdateGroup;
                fromPartial(object: Partial<_99.EventUpdateGroup>): _99.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _99.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventCreateGroupPolicy;
                fromPartial(object: Partial<_99.EventCreateGroupPolicy>): _99.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _99.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_99.EventUpdateGroupPolicy>): _99.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _99.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventSubmitProposal;
                fromPartial(object: Partial<_99.EventSubmitProposal>): _99.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _99.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventWithdrawProposal;
                fromPartial(object: Partial<_99.EventWithdrawProposal>): _99.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _99.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventVote;
                fromPartial(object: Partial<_99.EventVote>): _99.EventVote;
            };
            EventExec: {
                encode(message: _99.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventExec;
                fromPartial(object: Partial<_99.EventExec>): _99.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _99.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventLeaveGroup;
                fromPartial(object: Partial<_99.EventLeaveGroup>): _99.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _99.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.EventProposalPruned;
                fromPartial(object: Partial<_99.EventProposalPruned>): _99.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                inflation(request?: _106.QueryInflationRequest): Promise<_106.QueryInflationResponse>;
                annualProvisions(request?: _106.QueryAnnualProvisionsRequest): Promise<_106.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.QueryParamsRequest;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryParamsResponse;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _106.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.QueryInflationRequest;
                fromPartial(_: Partial<_106.QueryInflationRequest>): _106.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _106.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryInflationResponse;
                fromPartial(object: Partial<_106.QueryInflationResponse>): _106.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _106.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_106.QueryAnnualProvisionsRequest>): _106.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _106.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_106.QueryAnnualProvisionsResponse>): _106.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _105.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Minter;
                fromPartial(object: Partial<_105.Minter>): _105.Minter;
            };
            Params: {
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.Params;
                fromPartial(object: Partial<_105.Params>): _105.Params;
            };
            GenesisState: {
                encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.GenesisState;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _111.QueryBalanceRequest): Promise<_111.QueryBalanceResponse>;
                owner(request: _111.QueryOwnerRequest): Promise<_111.QueryOwnerResponse>;
                supply(request: _111.QuerySupplyRequest): Promise<_111.QuerySupplyResponse>;
                nFTs(request: _111.QueryNFTsRequest): Promise<_111.QueryNFTsResponse>;
                nFT(request: _111.QueryNFTRequest): Promise<_111.QueryNFTResponse>;
                class(request: _111.QueryClassRequest): Promise<_111.QueryClassResponse>;
                classes(request?: _111.QueryClassesRequest): Promise<_111.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _112.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _112.MsgSend): {
                        typeUrl: string;
                        value: _112.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _112.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _112.MsgSend): {
                        typeUrl: string;
                        value: _112.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _112.MsgSend) => {
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
                    }) => _112.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _112.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.MsgSend;
                fromPartial(object: Partial<_112.MsgSend>): _112.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _112.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _112.MsgSendResponse;
                fromPartial(_: Partial<_112.MsgSendResponse>): _112.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _111.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryBalanceRequest;
                fromPartial(object: Partial<_111.QueryBalanceRequest>): _111.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _111.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryBalanceResponse;
                fromPartial(object: Partial<_111.QueryBalanceResponse>): _111.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _111.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryOwnerRequest;
                fromPartial(object: Partial<_111.QueryOwnerRequest>): _111.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _111.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryOwnerResponse;
                fromPartial(object: Partial<_111.QueryOwnerResponse>): _111.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _111.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QuerySupplyRequest;
                fromPartial(object: Partial<_111.QuerySupplyRequest>): _111.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _111.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QuerySupplyResponse;
                fromPartial(object: Partial<_111.QuerySupplyResponse>): _111.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _111.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryNFTsRequest;
                fromPartial(object: Partial<_111.QueryNFTsRequest>): _111.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _111.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryNFTsResponse;
                fromPartial(object: Partial<_111.QueryNFTsResponse>): _111.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _111.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryNFTRequest;
                fromPartial(object: Partial<_111.QueryNFTRequest>): _111.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _111.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryNFTResponse;
                fromPartial(object: Partial<_111.QueryNFTResponse>): _111.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _111.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryClassRequest;
                fromPartial(object: Partial<_111.QueryClassRequest>): _111.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _111.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryClassResponse;
                fromPartial(object: Partial<_111.QueryClassResponse>): _111.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _111.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryClassesRequest;
                fromPartial(object: Partial<_111.QueryClassesRequest>): _111.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _111.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryClassesResponse;
                fromPartial(object: Partial<_111.QueryClassesResponse>): _111.QueryClassesResponse;
            };
            Class: {
                encode(message: _110.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.Class;
                fromPartial(object: Partial<_110.Class>): _110.Class;
            };
            NFT: {
                encode(message: _110.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.NFT;
                fromPartial(object: Partial<_110.NFT>): _110.NFT;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
            };
            Entry: {
                encode(message: _109.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Entry;
                fromPartial(object: Partial<_109.Entry>): _109.Entry;
            };
            EventSend: {
                encode(message: _108.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.EventSend;
                fromPartial(object: Partial<_108.EventSend>): _108.EventSend;
            };
            EventMint: {
                encode(message: _108.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.EventMint;
                fromPartial(object: Partial<_108.EventMint>): _108.EventMint;
            };
            EventBurn: {
                encode(message: _108.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.EventBurn;
                fromPartial(object: Partial<_108.EventBurn>): _108.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _113.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.Module;
                    fromPartial(_: Partial<_113.Module>): _113.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _114.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.TableDescriptor;
                fromPartial(object: Partial<_114.TableDescriptor>): _114.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _114.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_114.PrimaryKeyDescriptor>): _114.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _114.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_114.SecondaryIndexDescriptor>): _114.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _114.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.SingletonDescriptor;
                fromPartial(object: Partial<_114.SingletonDescriptor>): _114.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _115.StorageType;
            storageTypeToJSON(object: _115.StorageType): string;
            StorageType: typeof _115.StorageType;
            StorageTypeSDKType: typeof _115.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _115.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_115.ModuleSchemaDescriptor>): _115.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _115.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_115.ModuleSchemaDescriptor_FileEntry>): _115.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _117.QueryParamsRequest): Promise<_117.QueryParamsResponse>;
                subspaces(request?: _117.QuerySubspacesRequest): Promise<_117.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _117.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryParamsRequest;
                fromPartial(object: Partial<_117.QueryParamsRequest>): _117.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _117.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryParamsResponse;
                fromPartial(object: Partial<_117.QueryParamsResponse>): _117.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _117.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.QuerySubspacesRequest;
                fromPartial(_: Partial<_117.QuerySubspacesRequest>): _117.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _117.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QuerySubspacesResponse;
                fromPartial(object: Partial<_117.QuerySubspacesResponse>): _117.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _117.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Subspace;
                fromPartial(object: Partial<_117.Subspace>): _117.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _116.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ParameterChangeProposal;
                fromPartial(object: Partial<_116.ParameterChangeProposal>): _116.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _116.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ParamChange;
                fromPartial(object: Partial<_116.ParamChange>): _116.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                signingInfo(request: _119.QuerySigningInfoRequest): Promise<_119.QuerySigningInfoResponse>;
                signingInfos(request?: _119.QuerySigningInfosRequest): Promise<_119.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _121.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _121.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _121.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.MsgUnjail;
                fromPartial(object: Partial<_121.MsgUnjail>): _121.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _121.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _121.MsgUnjailResponse;
                fromPartial(_: Partial<_121.MsgUnjailResponse>): _121.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _120.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.ValidatorSigningInfo;
                fromPartial(object: Partial<_120.ValidatorSigningInfo>): _120.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.Params;
                fromPartial(object: Partial<_120.Params>): _120.Params;
            };
            QueryParamsRequest: {
                encode(_: _119.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _119.QueryParamsRequest;
                fromPartial(_: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _119.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _119.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySigningInfoRequest;
                fromPartial(object: Partial<_119.QuerySigningInfoRequest>): _119.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _119.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySigningInfoResponse;
                fromPartial(object: Partial<_119.QuerySigningInfoResponse>): _119.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _119.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySigningInfosRequest;
                fromPartial(object: Partial<_119.QuerySigningInfosRequest>): _119.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _119.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySigningInfosResponse;
                fromPartial(object: Partial<_119.QuerySigningInfosResponse>): _119.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
            };
            SigningInfo: {
                encode(message: _118.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.SigningInfo;
                fromPartial(object: Partial<_118.SigningInfo>): _118.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _118.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.ValidatorMissedBlocks;
                fromPartial(object: Partial<_118.ValidatorMissedBlocks>): _118.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _118.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MissedBlock;
                fromPartial(object: Partial<_118.MissedBlock>): _118.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _124.QueryValidatorsRequest): Promise<_124.QueryValidatorsResponse>;
                validator(request: _124.QueryValidatorRequest): Promise<_124.QueryValidatorResponse>;
                validatorDelegations(request: _124.QueryValidatorDelegationsRequest): Promise<_124.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _124.QueryValidatorUnbondingDelegationsRequest): Promise<_124.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _124.QueryDelegationRequest): Promise<_124.QueryDelegationResponse>;
                unbondingDelegation(request: _124.QueryUnbondingDelegationRequest): Promise<_124.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _124.QueryDelegatorDelegationsRequest): Promise<_124.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _124.QueryDelegatorUnbondingDelegationsRequest): Promise<_124.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _124.QueryRedelegationsRequest): Promise<_124.QueryRedelegationsResponse>;
                delegatorValidators(request: _124.QueryDelegatorValidatorsRequest): Promise<_124.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _124.QueryDelegatorValidatorRequest): Promise<_124.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _124.QueryHistoricalInfoRequest): Promise<_124.QueryHistoricalInfoResponse>;
                pool(request?: _124.QueryPoolRequest): Promise<_124.QueryPoolResponse>;
                params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _126.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _126.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _126.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _126.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _126.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _126.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _126.MsgCreateValidator): {
                        typeUrl: string;
                        value: _126.MsgCreateValidator;
                    };
                    editValidator(value: _126.MsgEditValidator): {
                        typeUrl: string;
                        value: _126.MsgEditValidator;
                    };
                    delegate(value: _126.MsgDelegate): {
                        typeUrl: string;
                        value: _126.MsgDelegate;
                    };
                    beginRedelegate(value: _126.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _126.MsgBeginRedelegate;
                    };
                    undelegate(value: _126.MsgUndelegate): {
                        typeUrl: string;
                        value: _126.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _126.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _126.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _126.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _126.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _126.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _126.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _126.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _126.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _126.MsgCreateValidator): {
                        typeUrl: string;
                        value: _126.MsgCreateValidator;
                    };
                    editValidator(value: _126.MsgEditValidator): {
                        typeUrl: string;
                        value: _126.MsgEditValidator;
                    };
                    delegate(value: _126.MsgDelegate): {
                        typeUrl: string;
                        value: _126.MsgDelegate;
                    };
                    beginRedelegate(value: _126.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _126.MsgBeginRedelegate;
                    };
                    undelegate(value: _126.MsgUndelegate): {
                        typeUrl: string;
                        value: _126.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _126.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _126.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _126.MsgCreateValidator) => {
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
                    }) => _126.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _126.MsgEditValidator) => {
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
                    }) => _126.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _126.MsgDelegate) => {
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
                    }) => _126.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _126.MsgBeginRedelegate) => {
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
                    }) => _126.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _126.MsgUndelegate) => {
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
                    }) => _126.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _126.MsgCancelUnbondingDelegation) => {
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
                    }) => _126.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _126.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgCreateValidator;
                fromPartial(object: Partial<_126.MsgCreateValidator>): _126.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _126.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_126.MsgCreateValidatorResponse>): _126.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _126.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgEditValidator;
                fromPartial(object: Partial<_126.MsgEditValidator>): _126.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _126.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgEditValidatorResponse;
                fromPartial(_: Partial<_126.MsgEditValidatorResponse>): _126.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _126.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgDelegate;
                fromPartial(object: Partial<_126.MsgDelegate>): _126.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _126.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgDelegateResponse;
                fromPartial(_: Partial<_126.MsgDelegateResponse>): _126.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _126.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgBeginRedelegate;
                fromPartial(object: Partial<_126.MsgBeginRedelegate>): _126.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _126.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_126.MsgBeginRedelegateResponse>): _126.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _126.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgUndelegate;
                fromPartial(object: Partial<_126.MsgUndelegate>): _126.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _126.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgUndelegateResponse;
                fromPartial(object: Partial<_126.MsgUndelegateResponse>): _126.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _126.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_126.MsgCancelUnbondingDelegation>): _126.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _126.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_126.MsgCancelUnbondingDelegationResponse>): _126.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _125.BondStatus;
            bondStatusToJSON(object: _125.BondStatus): string;
            BondStatus: typeof _125.BondStatus;
            BondStatusSDKType: typeof _125.BondStatus;
            HistoricalInfo: {
                encode(message: _125.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.HistoricalInfo;
                fromPartial(object: Partial<_125.HistoricalInfo>): _125.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _125.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.CommissionRates;
                fromPartial(object: Partial<_125.CommissionRates>): _125.CommissionRates;
            };
            Commission: {
                encode(message: _125.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Commission;
                fromPartial(object: Partial<_125.Commission>): _125.Commission;
            };
            Description: {
                encode(message: _125.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Description;
                fromPartial(object: Partial<_125.Description>): _125.Description;
            };
            Validator: {
                encode(message: _125.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Validator;
                fromPartial(object: Partial<_125.Validator>): _125.Validator;
            };
            ValAddresses: {
                encode(message: _125.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.ValAddresses;
                fromPartial(object: Partial<_125.ValAddresses>): _125.ValAddresses;
            };
            DVPair: {
                encode(message: _125.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.DVPair;
                fromPartial(object: Partial<_125.DVPair>): _125.DVPair;
            };
            DVPairs: {
                encode(message: _125.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.DVPairs;
                fromPartial(object: Partial<_125.DVPairs>): _125.DVPairs;
            };
            DVVTriplet: {
                encode(message: _125.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.DVVTriplet;
                fromPartial(object: Partial<_125.DVVTriplet>): _125.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _125.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.DVVTriplets;
                fromPartial(object: Partial<_125.DVVTriplets>): _125.DVVTriplets;
            };
            Delegation: {
                encode(message: _125.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Delegation;
                fromPartial(object: Partial<_125.Delegation>): _125.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _125.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.UnbondingDelegation;
                fromPartial(object: Partial<_125.UnbondingDelegation>): _125.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _125.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.UnbondingDelegationEntry;
                fromPartial(object: Partial<_125.UnbondingDelegationEntry>): _125.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _125.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.RedelegationEntry;
                fromPartial(object: Partial<_125.RedelegationEntry>): _125.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _125.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Redelegation;
                fromPartial(object: Partial<_125.Redelegation>): _125.Redelegation;
            };
            Params: {
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Params;
                fromPartial(object: Partial<_125.Params>): _125.Params;
            };
            DelegationResponse: {
                encode(message: _125.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.DelegationResponse;
                fromPartial(object: Partial<_125.DelegationResponse>): _125.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _125.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.RedelegationEntryResponse;
                fromPartial(object: Partial<_125.RedelegationEntryResponse>): _125.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _125.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.RedelegationResponse;
                fromPartial(object: Partial<_125.RedelegationResponse>): _125.RedelegationResponse;
            };
            Pool: {
                encode(message: _125.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Pool;
                fromPartial(object: Partial<_125.Pool>): _125.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _124.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorsRequest;
                fromPartial(object: Partial<_124.QueryValidatorsRequest>): _124.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _124.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorsResponse;
                fromPartial(object: Partial<_124.QueryValidatorsResponse>): _124.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _124.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorRequest;
                fromPartial(object: Partial<_124.QueryValidatorRequest>): _124.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _124.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorResponse;
                fromPartial(object: Partial<_124.QueryValidatorResponse>): _124.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _124.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_124.QueryValidatorDelegationsRequest>): _124.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _124.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_124.QueryValidatorDelegationsResponse>): _124.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _124.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_124.QueryValidatorUnbondingDelegationsRequest>): _124.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _124.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_124.QueryValidatorUnbondingDelegationsResponse>): _124.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _124.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegationRequest;
                fromPartial(object: Partial<_124.QueryDelegationRequest>): _124.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _124.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegationResponse;
                fromPartial(object: Partial<_124.QueryDelegationResponse>): _124.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _124.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_124.QueryUnbondingDelegationRequest>): _124.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _124.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_124.QueryUnbondingDelegationResponse>): _124.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _124.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_124.QueryDelegatorDelegationsRequest>): _124.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _124.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_124.QueryDelegatorDelegationsResponse>): _124.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _124.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_124.QueryDelegatorUnbondingDelegationsRequest>): _124.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _124.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_124.QueryDelegatorUnbondingDelegationsResponse>): _124.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _124.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryRedelegationsRequest;
                fromPartial(object: Partial<_124.QueryRedelegationsRequest>): _124.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _124.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryRedelegationsResponse;
                fromPartial(object: Partial<_124.QueryRedelegationsResponse>): _124.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _124.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_124.QueryDelegatorValidatorsRequest>): _124.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _124.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_124.QueryDelegatorValidatorsResponse>): _124.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _124.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_124.QueryDelegatorValidatorRequest>): _124.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _124.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_124.QueryDelegatorValidatorResponse>): _124.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _124.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_124.QueryHistoricalInfoRequest>): _124.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _124.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_124.QueryHistoricalInfoResponse>): _124.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _124.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.QueryPoolRequest;
                fromPartial(_: Partial<_124.QueryPoolRequest>): _124.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _124.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryPoolResponse;
                fromPartial(object: Partial<_124.QueryPoolResponse>): _124.QueryPoolResponse;
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
            GenesisState: {
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _123.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.LastValidatorPower;
                fromPartial(object: Partial<_123.LastValidatorPower>): _123.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _122.AuthorizationType;
            authorizationTypeToJSON(object: _122.AuthorizationType): string;
            AuthorizationType: typeof _122.AuthorizationType;
            AuthorizationTypeSDKType: typeof _122.AuthorizationType;
            StakeAuthorization: {
                encode(message: _122.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.StakeAuthorization;
                fromPartial(object: Partial<_122.StakeAuthorization>): _122.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _122.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.StakeAuthorization_Validators;
                fromPartial(object: Partial<_122.StakeAuthorization_Validators>): _122.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _127.SignMode;
                signModeToJSON(object: _127.SignMode): string;
                SignMode: typeof _127.SignMode;
                SignModeSDKType: typeof _127.SignMode;
                SignatureDescriptors: {
                    encode(message: _127.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.SignatureDescriptors;
                    fromPartial(object: Partial<_127.SignatureDescriptors>): _127.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _127.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.SignatureDescriptor;
                    fromPartial(object: Partial<_127.SignatureDescriptor>): _127.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _127.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_127.SignatureDescriptor_Data>): _127.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _127.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_127.SignatureDescriptor_Data_Single>): _127.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _127.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_127.SignatureDescriptor_Data_Multi>): _127.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _244.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _128.SimulateRequest): Promise<_128.SimulateResponse>;
                getTx(request: _128.GetTxRequest): Promise<_128.GetTxResponse>;
                broadcastTx(request: _128.BroadcastTxRequest): Promise<_128.BroadcastTxResponse>;
                getTxsEvent(request: _128.GetTxsEventRequest): Promise<_128.GetTxsEventResponse>;
                getBlockWithTxs(request: _128.GetBlockWithTxsRequest): Promise<_128.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            Tx: {
                encode(message: _129.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Tx;
                fromPartial(object: Partial<_129.Tx>): _129.Tx;
            };
            TxRaw: {
                encode(message: _129.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.TxRaw;
                fromPartial(object: Partial<_129.TxRaw>): _129.TxRaw;
            };
            SignDoc: {
                encode(message: _129.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.SignDoc;
                fromPartial(object: Partial<_129.SignDoc>): _129.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _129.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.SignDocDirectAux;
                fromPartial(object: Partial<_129.SignDocDirectAux>): _129.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _129.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.TxBody;
                fromPartial(object: Partial<_129.TxBody>): _129.TxBody;
            };
            AuthInfo: {
                encode(message: _129.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.AuthInfo;
                fromPartial(object: Partial<_129.AuthInfo>): _129.AuthInfo;
            };
            SignerInfo: {
                encode(message: _129.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.SignerInfo;
                fromPartial(object: Partial<_129.SignerInfo>): _129.SignerInfo;
            };
            ModeInfo: {
                encode(message: _129.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.ModeInfo;
                fromPartial(object: Partial<_129.ModeInfo>): _129.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _129.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.ModeInfo_Single;
                fromPartial(object: Partial<_129.ModeInfo_Single>): _129.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _129.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.ModeInfo_Multi;
                fromPartial(object: Partial<_129.ModeInfo_Multi>): _129.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _129.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Fee;
                fromPartial(object: Partial<_129.Fee>): _129.Fee;
            };
            Tip: {
                encode(message: _129.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Tip;
                fromPartial(object: Partial<_129.Tip>): _129.Tip;
            };
            AuxSignerData: {
                encode(message: _129.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.AuxSignerData;
                fromPartial(object: Partial<_129.AuxSignerData>): _129.AuxSignerData;
            };
            orderByFromJSON(object: any): _128.OrderBy;
            orderByToJSON(object: _128.OrderBy): string;
            broadcastModeFromJSON(object: any): _128.BroadcastMode;
            broadcastModeToJSON(object: _128.BroadcastMode): string;
            OrderBy: typeof _128.OrderBy;
            OrderBySDKType: typeof _128.OrderBy;
            BroadcastMode: typeof _128.BroadcastMode;
            BroadcastModeSDKType: typeof _128.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _128.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetTxsEventRequest;
                fromPartial(object: Partial<_128.GetTxsEventRequest>): _128.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _128.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetTxsEventResponse;
                fromPartial(object: Partial<_128.GetTxsEventResponse>): _128.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _128.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.BroadcastTxRequest;
                fromPartial(object: Partial<_128.BroadcastTxRequest>): _128.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _128.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.BroadcastTxResponse;
                fromPartial(object: Partial<_128.BroadcastTxResponse>): _128.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _128.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.SimulateRequest;
                fromPartial(object: Partial<_128.SimulateRequest>): _128.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _128.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.SimulateResponse;
                fromPartial(object: Partial<_128.SimulateResponse>): _128.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _128.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetTxRequest;
                fromPartial(object: Partial<_128.GetTxRequest>): _128.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _128.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetTxResponse;
                fromPartial(object: Partial<_128.GetTxResponse>): _128.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _128.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_128.GetBlockWithTxsRequest>): _128.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _128.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_128.GetBlockWithTxsResponse>): _128.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _130.QueryCurrentPlanRequest): Promise<_130.QueryCurrentPlanResponse>;
                appliedPlan(request: _130.QueryAppliedPlanRequest): Promise<_130.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _130.QueryUpgradedConsensusStateRequest): Promise<_130.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _130.QueryModuleVersionsRequest): Promise<_130.QueryModuleVersionsResponse>;
                authority(request?: _130.QueryAuthorityRequest): Promise<_130.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _131.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _131.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _131.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _131.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _131.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _131.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _131.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _131.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _131.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _131.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _131.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _131.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _131.MsgSoftwareUpgrade) => {
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
                    }) => _131.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _131.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _131.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _132.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.Plan;
                fromPartial(object: Partial<_132.Plan>): _132.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _132.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_132.SoftwareUpgradeProposal>): _132.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _132.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_132.CancelSoftwareUpgradeProposal>): _132.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _132.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.ModuleVersion;
                fromPartial(object: Partial<_132.ModuleVersion>): _132.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _131.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_131.MsgSoftwareUpgrade>): _131.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _131.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_131.MsgSoftwareUpgradeResponse>): _131.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _131.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgCancelUpgrade;
                fromPartial(object: Partial<_131.MsgCancelUpgrade>): _131.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _131.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_131.MsgCancelUpgradeResponse>): _131.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _130.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _130.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_130.QueryCurrentPlanRequest>): _130.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _130.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_130.QueryCurrentPlanResponse>): _130.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _130.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_130.QueryAppliedPlanRequest>): _130.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _130.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_130.QueryAppliedPlanResponse>): _130.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _130.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_130.QueryUpgradedConsensusStateRequest>): _130.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _130.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_130.QueryUpgradedConsensusStateResponse>): _130.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _130.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_130.QueryModuleVersionsRequest>): _130.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _130.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_130.QueryModuleVersionsResponse>): _130.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _130.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _130.QueryAuthorityRequest;
                fromPartial(_: Partial<_130.QueryAuthorityRequest>): _130.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _130.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryAuthorityResponse;
                fromPartial(object: Partial<_130.QueryAuthorityResponse>): _130.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _133.MsgCreateVestingAccount) => {
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
                    }) => _133.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _133.MsgCreatePermanentLockedAccount) => {
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
                    }) => _133.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _133.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _133.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _134.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.BaseVestingAccount;
                fromPartial(object: Partial<_134.BaseVestingAccount>): _134.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _134.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ContinuousVestingAccount;
                fromPartial(object: Partial<_134.ContinuousVestingAccount>): _134.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _134.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.DelayedVestingAccount;
                fromPartial(object: Partial<_134.DelayedVestingAccount>): _134.DelayedVestingAccount;
            };
            Period: {
                encode(message: _134.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Period;
                fromPartial(object: Partial<_134.Period>): _134.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _134.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.PeriodicVestingAccount;
                fromPartial(object: Partial<_134.PeriodicVestingAccount>): _134.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _134.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.PermanentLockedAccount;
                fromPartial(object: Partial<_134.PermanentLockedAccount>): _134.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _133.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateVestingAccount;
                fromPartial(object: Partial<_133.MsgCreateVestingAccount>): _133.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _133.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_133.MsgCreateVestingAccountResponse>): _133.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _133.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_133.MsgCreatePermanentLockedAccount>): _133.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _133.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_133.MsgCreatePermanentLockedAccountResponse>): _133.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _133.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_133.MsgCreatePeriodicVestingAccount>): _133.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _133.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_133.MsgCreatePeriodicVestingAccountResponse>): _133.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _246.MsgClientImpl;
                };
                bank: {
                    v1beta1: _247.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _248.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _249.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _250.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _251.MsgClientImpl;
                };
                gov: {
                    v1: _252.MsgClientImpl;
                    v1beta1: _253.MsgClientImpl;
                };
                group: {
                    v1: _254.MsgClientImpl;
                };
                nft: {
                    v1beta1: _255.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _256.MsgClientImpl;
                };
                staking: {
                    v1beta1: _257.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _258.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _259.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _42.QueryConfigRequest): Promise<_42.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                        account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                        accountAddressByID(request: _45.QueryAccountAddressByIDRequest): Promise<_45.QueryAccountAddressByIDResponse>;
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        moduleAccounts(request?: _45.QueryModuleAccountsRequest): Promise<_45.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _45.Bech32PrefixRequest): Promise<_45.Bech32PrefixResponse>;
                        addressBytesToString(request: _45.AddressBytesToStringRequest): Promise<_45.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _45.AddressStringToBytesRequest): Promise<_45.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                        granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                        granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                        allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                        spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                        supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
                        denomOwners(request: _54.QueryDenomOwnersRequest): Promise<_54.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _58.ConfigRequest): Promise<_58.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _65.GetNodeInfoRequest): Promise<_65.GetNodeInfoResponse>;
                            getSyncing(request?: _65.GetSyncingRequest): Promise<_65.GetSyncingResponse>;
                            getLatestBlock(request?: _65.GetLatestBlockRequest): Promise<_65.GetLatestBlockResponse>;
                            getBlockByHeight(request: _65.GetBlockByHeightRequest): Promise<_65.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _65.GetLatestValidatorSetRequest): Promise<_65.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _65.GetValidatorSetByHeightRequest): Promise<_65.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _65.ABCIQueryRequest): Promise<_65.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _80.QueryValidatorOutstandingRewardsRequest): Promise<_80.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _80.QueryValidatorCommissionRequest): Promise<_80.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _80.QueryValidatorSlashesRequest): Promise<_80.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _80.QueryDelegationRewardsRequest): Promise<_80.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _80.QueryDelegationTotalRewardsRequest): Promise<_80.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _80.QueryDelegatorValidatorsRequest): Promise<_80.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _80.QueryDelegatorWithdrawAddressRequest): Promise<_80.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _80.QueryCommunityPoolRequest): Promise<_80.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _84.QueryEvidenceRequest): Promise<_84.QueryEvidenceResponse>;
                        allEvidence(request?: _84.QueryAllEvidenceRequest): Promise<_84.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _88.QueryAllowanceRequest): Promise<_88.QueryAllowanceResponse>;
                        allowances(request: _88.QueryAllowancesRequest): Promise<_88.QueryAllowancesResponse>;
                        allowancesByGranter(request: _88.QueryAllowancesByGranterRequest): Promise<_88.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                        proposals(request: _93.QueryProposalsRequest): Promise<_93.QueryProposalsResponse>;
                        vote(request: _93.QueryVoteRequest): Promise<_93.QueryVoteResponse>;
                        votes(request: _93.QueryVotesRequest): Promise<_93.QueryVotesResponse>;
                        params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        deposit(request: _93.QueryDepositRequest): Promise<_93.QueryDepositResponse>;
                        deposits(request: _93.QueryDepositsRequest): Promise<_93.QueryDepositsResponse>;
                        tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _97.QueryProposalRequest): Promise<_97.QueryProposalResponse>;
                        proposals(request: _97.QueryProposalsRequest): Promise<_97.QueryProposalsResponse>;
                        vote(request: _97.QueryVoteRequest): Promise<_97.QueryVoteResponse>;
                        votes(request: _97.QueryVotesRequest): Promise<_97.QueryVotesResponse>;
                        params(request: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        deposit(request: _97.QueryDepositRequest): Promise<_97.QueryDepositResponse>;
                        deposits(request: _97.QueryDepositsRequest): Promise<_97.QueryDepositsResponse>;
                        tallyResult(request: _97.QueryTallyResultRequest): Promise<_97.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _101.QueryGroupInfoRequest): Promise<_101.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _101.QueryGroupPolicyInfoRequest): Promise<_101.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _101.QueryGroupMembersRequest): Promise<_101.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _101.QueryGroupsByAdminRequest): Promise<_101.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _101.QueryGroupPoliciesByGroupRequest): Promise<_101.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _101.QueryGroupPoliciesByAdminRequest): Promise<_101.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _101.QueryProposalsByGroupPolicyRequest): Promise<_101.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _101.QueryVoteByProposalVoterRequest): Promise<_101.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _101.QueryVotesByProposalRequest): Promise<_101.QueryVotesByProposalResponse>;
                        votesByVoter(request: _101.QueryVotesByVoterRequest): Promise<_101.QueryVotesByVoterResponse>;
                        groupsByMember(request: _101.QueryGroupsByMemberRequest): Promise<_101.QueryGroupsByMemberResponse>;
                        tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
                        groups(request?: _101.QueryGroupsRequest): Promise<_101.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        inflation(request?: _106.QueryInflationRequest): Promise<_106.QueryInflationResponse>;
                        annualProvisions(request?: _106.QueryAnnualProvisionsRequest): Promise<_106.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _111.QueryBalanceRequest): Promise<_111.QueryBalanceResponse>;
                        owner(request: _111.QueryOwnerRequest): Promise<_111.QueryOwnerResponse>;
                        supply(request: _111.QuerySupplyRequest): Promise<_111.QuerySupplyResponse>;
                        nFTs(request: _111.QueryNFTsRequest): Promise<_111.QueryNFTsResponse>;
                        nFT(request: _111.QueryNFTRequest): Promise<_111.QueryNFTResponse>;
                        class(request: _111.QueryClassRequest): Promise<_111.QueryClassResponse>;
                        classes(request?: _111.QueryClassesRequest): Promise<_111.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _117.QueryParamsRequest): Promise<_117.QueryParamsResponse>;
                        subspaces(request?: _117.QuerySubspacesRequest): Promise<_117.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        signingInfo(request: _119.QuerySigningInfoRequest): Promise<_119.QuerySigningInfoResponse>;
                        signingInfos(request?: _119.QuerySigningInfosRequest): Promise<_119.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _124.QueryValidatorsRequest): Promise<_124.QueryValidatorsResponse>;
                        validator(request: _124.QueryValidatorRequest): Promise<_124.QueryValidatorResponse>;
                        validatorDelegations(request: _124.QueryValidatorDelegationsRequest): Promise<_124.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _124.QueryValidatorUnbondingDelegationsRequest): Promise<_124.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _124.QueryDelegationRequest): Promise<_124.QueryDelegationResponse>;
                        unbondingDelegation(request: _124.QueryUnbondingDelegationRequest): Promise<_124.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _124.QueryDelegatorDelegationsRequest): Promise<_124.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _124.QueryDelegatorUnbondingDelegationsRequest): Promise<_124.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _124.QueryRedelegationsRequest): Promise<_124.QueryRedelegationsResponse>;
                        delegatorValidators(request: _124.QueryDelegatorValidatorsRequest): Promise<_124.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _124.QueryDelegatorValidatorRequest): Promise<_124.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _124.QueryHistoricalInfoRequest): Promise<_124.QueryHistoricalInfoResponse>;
                        pool(request?: _124.QueryPoolRequest): Promise<_124.QueryPoolResponse>;
                        params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _128.SimulateRequest): Promise<_128.SimulateResponse>;
                        getTx(request: _128.GetTxRequest): Promise<_128.GetTxResponse>;
                        broadcastTx(request: _128.BroadcastTxRequest): Promise<_128.BroadcastTxResponse>;
                        getTxsEvent(request: _128.GetTxsEventRequest): Promise<_128.GetTxsEventResponse>;
                        getBlockWithTxs(request: _128.GetBlockWithTxsRequest): Promise<_128.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _130.QueryCurrentPlanRequest): Promise<_130.QueryCurrentPlanResponse>;
                        appliedPlan(request: _130.QueryAppliedPlanRequest): Promise<_130.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _130.QueryUpgradedConsensusStateRequest): Promise<_130.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _130.QueryModuleVersionsRequest): Promise<_130.QueryModuleVersionsResponse>;
                        authority(request?: _130.QueryAuthorityRequest): Promise<_130.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _209.LCDQueryClient;
                };
                authz: {
                    v1beta1: _210.LCDQueryClient;
                };
                bank: {
                    v1beta1: _211.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _212.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _213.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _214.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _215.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _216.LCDQueryClient;
                };
                gov: {
                    v1: _217.LCDQueryClient;
                    v1beta1: _218.LCDQueryClient;
                };
                group: {
                    v1: _219.LCDQueryClient;
                };
                mint: {
                    v1beta1: _220.LCDQueryClient;
                };
                nft: {
                    v1beta1: _221.LCDQueryClient;
                };
                params: {
                    v1beta1: _222.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _223.LCDQueryClient;
                };
                staking: {
                    v1beta1: _224.LCDQueryClient;
                };
                tx: {
                    v1beta1: _225.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _226.LCDQueryClient;
                };
            };
        }>;
    };
}
