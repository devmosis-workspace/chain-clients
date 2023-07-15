import * as _46 from "./app/module/v1alpha1/module";
import * as _47 from "./app/v1alpha1/config";
import * as _48 from "./app/v1alpha1/module";
import * as _49 from "./app/v1alpha1/query";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./authz/v1beta1/authz";
import * as _54 from "./authz/v1beta1/event";
import * as _55 from "./authz/v1beta1/genesis";
import * as _56 from "./authz/v1beta1/query";
import * as _57 from "./authz/v1beta1/tx";
import * as _58 from "./bank/v1beta1/authz";
import * as _59 from "./bank/v1beta1/bank";
import * as _60 from "./bank/v1beta1/genesis";
import * as _61 from "./bank/v1beta1/query";
import * as _62 from "./bank/v1beta1/tx";
import * as _63 from "./base/abci/v1beta1/abci";
import * as _64 from "./base/kv/v1beta1/kv";
import * as _65 from "./base/node/v1beta1/query";
import * as _66 from "./base/query/v1beta1/pagination";
import * as _67 from "./base/reflection/v1beta1/reflection";
import * as _68 from "./base/reflection/v2alpha1/reflection";
import * as _69 from "./base/snapshots/v1beta1/snapshot";
import * as _70 from "./base/store/v1beta1/commit_info";
import * as _71 from "./base/store/v1beta1/listening";
import * as _72 from "./base/tendermint/v1beta1/query";
import * as _73 from "./base/tendermint/v1beta1/types";
import * as _74 from "./base/v1beta1/coin";
import * as _75 from "./capability/v1beta1/capability";
import * as _76 from "./capability/v1beta1/genesis";
import * as _77 from "./crisis/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/tx";
import * as _79 from "./crypto/ed25519/keys";
import * as _80 from "./crypto/hd/v1/hd";
import * as _81 from "./crypto/keyring/v1/record";
import * as _82 from "./crypto/multisig/keys";
import * as _83 from "./crypto/secp256k1/keys";
import * as _84 from "./crypto/secp256r1/keys";
import * as _85 from "./distribution/v1beta1/authz";
import * as _86 from "./distribution/v1beta1/distribution";
import * as _87 from "./distribution/v1beta1/genesis";
import * as _88 from "./distribution/v1beta1/query";
import * as _89 from "./distribution/v1beta1/tx";
import * as _90 from "./evidence/v1beta1/evidence";
import * as _91 from "./evidence/v1beta1/genesis";
import * as _92 from "./evidence/v1beta1/query";
import * as _93 from "./evidence/v1beta1/tx";
import * as _94 from "./feegrant/v1beta1/feegrant";
import * as _95 from "./feegrant/v1beta1/genesis";
import * as _96 from "./feegrant/v1beta1/query";
import * as _97 from "./feegrant/v1beta1/tx";
import * as _98 from "./genutil/v1beta1/genesis";
import * as _99 from "./gov/v1/genesis";
import * as _100 from "./gov/v1/gov";
import * as _101 from "./gov/v1/query";
import * as _102 from "./gov/v1/tx";
import * as _103 from "./gov/v1beta1/genesis";
import * as _104 from "./gov/v1beta1/gov";
import * as _105 from "./gov/v1beta1/query";
import * as _106 from "./gov/v1beta1/tx";
import * as _107 from "./group/v1/events";
import * as _108 from "./group/v1/genesis";
import * as _109 from "./group/v1/query";
import * as _110 from "./group/v1/tx";
import * as _111 from "./group/v1/types";
import * as _112 from "./mint/v1beta1/genesis";
import * as _113 from "./mint/v1beta1/mint";
import * as _114 from "./mint/v1beta1/query";
import * as _116 from "./nft/v1beta1/event";
import * as _117 from "./nft/v1beta1/genesis";
import * as _118 from "./nft/v1beta1/nft";
import * as _119 from "./nft/v1beta1/query";
import * as _120 from "./nft/v1beta1/tx";
import * as _121 from "./orm/module/v1alpha1/module";
import * as _122 from "./orm/v1/orm";
import * as _123 from "./orm/v1alpha1/schema";
import * as _124 from "./params/v1beta1/params";
import * as _125 from "./params/v1beta1/query";
import * as _126 from "./slashing/v1beta1/genesis";
import * as _127 from "./slashing/v1beta1/query";
import * as _128 from "./slashing/v1beta1/slashing";
import * as _129 from "./slashing/v1beta1/tx";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _226 from "./app/v1alpha1/query.rpc.Query";
import * as _227 from "./auth/v1beta1/query.rpc.Query";
import * as _228 from "./authz/v1beta1/query.rpc.Query";
import * as _229 from "./bank/v1beta1/query.rpc.Query";
import * as _230 from "./base/node/v1beta1/query.rpc.Service";
import * as _231 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _232 from "./distribution/v1beta1/query.rpc.Query";
import * as _233 from "./evidence/v1beta1/query.rpc.Query";
import * as _234 from "./feegrant/v1beta1/query.rpc.Query";
import * as _235 from "./gov/v1/query.rpc.Query";
import * as _236 from "./gov/v1beta1/query.rpc.Query";
import * as _237 from "./group/v1/query.rpc.Query";
import * as _238 from "./mint/v1beta1/query.rpc.Query";
import * as _239 from "./nft/v1beta1/query.rpc.Query";
import * as _240 from "./params/v1beta1/query.rpc.Query";
import * as _241 from "./slashing/v1beta1/query.rpc.Query";
import * as _242 from "./staking/v1beta1/query.rpc.Query";
import * as _243 from "./tx/v1beta1/service.rpc.Service";
import * as _244 from "./upgrade/v1beta1/query.rpc.Query";
import * as _245 from "./authz/v1beta1/tx.rpc.msg";
import * as _246 from "./bank/v1beta1/tx.rpc.msg";
import * as _247 from "./crisis/v1beta1/tx.rpc.msg";
import * as _248 from "./distribution/v1beta1/tx.rpc.msg";
import * as _249 from "./evidence/v1beta1/tx.rpc.msg";
import * as _250 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _251 from "./gov/v1/tx.rpc.msg";
import * as _252 from "./gov/v1beta1/tx.rpc.msg";
import * as _253 from "./group/v1/tx.rpc.msg";
import * as _254 from "./nft/v1beta1/tx.rpc.msg";
import * as _255 from "./slashing/v1beta1/tx.rpc.msg";
import * as _256 from "./staking/v1beta1/tx.rpc.msg";
import * as _257 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _258 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _46.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _46.Module;
                    fromPartial(_: Partial<_46.Module>): _46.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _49.QueryConfigRequest): Promise<_49.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _49.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryConfigRequest;
                fromPartial(_: Partial<_49.QueryConfigRequest>): _49.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _49.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryConfigResponse;
                fromPartial(object: Partial<_49.QueryConfigResponse>): _49.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _48.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.ModuleDescriptor;
                fromPartial(object: Partial<_48.ModuleDescriptor>): _48.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _48.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.PackageReference;
                fromPartial(object: Partial<_48.PackageReference>): _48.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _48.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.MigrateFromInfo;
                fromPartial(object: Partial<_48.MigrateFromInfo>): _48.MigrateFromInfo;
            };
            Config: {
                encode(message: _47.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Config;
                fromPartial(object: Partial<_47.Config>): _47.Config;
            };
            ModuleConfig: {
                encode(message: _47.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ModuleConfig;
                fromPartial(object: Partial<_47.ModuleConfig>): _47.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _52.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountsRequest;
                fromPartial(object: Partial<_52.QueryAccountsRequest>): _52.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _52.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountsResponse;
                fromPartial(object: Partial<_52.QueryAccountsResponse>): _52.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _52.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountRequest;
                fromPartial(object: Partial<_52.QueryAccountRequest>): _52.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _52.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountResponse;
                fromPartial(object: Partial<_52.QueryAccountResponse>): _52.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _52.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_52.QueryModuleAccountsRequest>): _52.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _52.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountsResponse>): _52.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _52.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameRequest>): _52.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _52.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameResponse>): _52.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _52.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.Bech32PrefixRequest;
                fromPartial(_: Partial<_52.Bech32PrefixRequest>): _52.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _52.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Bech32PrefixResponse;
                fromPartial(object: Partial<_52.Bech32PrefixResponse>): _52.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _52.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.AddressBytesToStringRequest;
                fromPartial(object: Partial<_52.AddressBytesToStringRequest>): _52.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _52.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.AddressBytesToStringResponse;
                fromPartial(object: Partial<_52.AddressBytesToStringResponse>): _52.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _52.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.AddressStringToBytesRequest;
                fromPartial(object: Partial<_52.AddressStringToBytesRequest>): _52.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _52.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.AddressStringToBytesResponse;
                fromPartial(object: Partial<_52.AddressStringToBytesResponse>): _52.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _52.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDRequest>): _52.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _52.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDResponse>): _52.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
            BaseAccount: {
                encode(message: _50.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.BaseAccount;
                fromPartial(object: Partial<_50.BaseAccount>): _50.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _50.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.ModuleAccount;
                fromPartial(object: Partial<_50.ModuleAccount>): _50.ModuleAccount;
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _56.QueryGrantsRequest): Promise<_56.QueryGrantsResponse>;
                granterGrants(request: _56.QueryGranterGrantsRequest): Promise<_56.QueryGranterGrantsResponse>;
                granteeGrants(request: _56.QueryGranteeGrantsRequest): Promise<_56.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _57.MsgGrant): {
                        typeUrl: string;
                        value: _57.MsgGrant;
                    };
                    exec(value: _57.MsgExec): {
                        typeUrl: string;
                        value: _57.MsgExec;
                    };
                    revoke(value: _57.MsgRevoke): {
                        typeUrl: string;
                        value: _57.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _57.MsgGrant) => {
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
                    }) => _57.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _57.MsgExec) => {
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
                    }) => _57.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _57.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _57.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _57.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgGrant;
                fromPartial(object: Partial<_57.MsgGrant>): _57.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _57.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgExecResponse;
                fromPartial(object: Partial<_57.MsgExecResponse>): _57.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _57.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgExec;
                fromPartial(object: Partial<_57.MsgExec>): _57.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _57.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgGrantResponse;
                fromPartial(_: Partial<_57.MsgGrantResponse>): _57.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _57.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.MsgRevoke;
                fromPartial(object: Partial<_57.MsgRevoke>): _57.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _57.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.MsgRevokeResponse;
                fromPartial(_: Partial<_57.MsgRevokeResponse>): _57.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _56.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGrantsRequest;
                fromPartial(object: Partial<_56.QueryGrantsRequest>): _56.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _56.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGrantsResponse;
                fromPartial(object: Partial<_56.QueryGrantsResponse>): _56.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _56.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_56.QueryGranterGrantsRequest>): _56.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _56.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_56.QueryGranterGrantsResponse>): _56.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _56.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_56.QueryGranteeGrantsRequest>): _56.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _56.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_56.QueryGranteeGrantsResponse>): _56.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            EventGrant: {
                encode(message: _54.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.EventGrant;
                fromPartial(object: Partial<_54.EventGrant>): _54.EventGrant;
            };
            EventRevoke: {
                encode(message: _54.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.EventRevoke;
                fromPartial(object: Partial<_54.EventRevoke>): _54.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _53.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenericAuthorization;
                fromPartial(object: Partial<_53.GenericAuthorization>): _53.GenericAuthorization;
            };
            Grant: {
                encode(message: _53.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Grant;
                fromPartial(object: Partial<_53.Grant>): _53.Grant;
            };
            GrantAuthorization: {
                encode(message: _53.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GrantAuthorization;
                fromPartial(object: Partial<_53.GrantAuthorization>): _53.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _53.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GrantQueueItem;
                fromPartial(object: Partial<_53.GrantQueueItem>): _53.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _61.QueryBalanceRequest): Promise<_61.QueryBalanceResponse>;
                allBalances(request: _61.QueryAllBalancesRequest): Promise<_61.QueryAllBalancesResponse>;
                spendableBalances(request: _61.QuerySpendableBalancesRequest): Promise<_61.QuerySpendableBalancesResponse>;
                totalSupply(request?: _61.QueryTotalSupplyRequest): Promise<_61.QueryTotalSupplyResponse>;
                supplyOf(request: _61.QuerySupplyOfRequest): Promise<_61.QuerySupplyOfResponse>;
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                denomMetadata(request: _61.QueryDenomMetadataRequest): Promise<_61.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _61.QueryDenomsMetadataRequest): Promise<_61.QueryDenomsMetadataResponse>;
                denomOwners(request: _61.QueryDenomOwnersRequest): Promise<_61.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _62.MsgSend): {
                        typeUrl: string;
                        value: _62.MsgSend;
                    };
                    multiSend(value: _62.MsgMultiSend): {
                        typeUrl: string;
                        value: _62.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _62.MsgSend) => {
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
                    }) => _62.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _62.MsgMultiSend) => {
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
                    }) => _62.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _62.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgSend;
                fromPartial(object: Partial<_62.MsgSend>): _62.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _62.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgSendResponse;
                fromPartial(_: Partial<_62.MsgSendResponse>): _62.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _62.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgMultiSend;
                fromPartial(object: Partial<_62.MsgMultiSend>): _62.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _62.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgMultiSendResponse;
                fromPartial(_: Partial<_62.MsgMultiSendResponse>): _62.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _61.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryBalanceRequest;
                fromPartial(object: Partial<_61.QueryBalanceRequest>): _61.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _61.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryBalanceResponse;
                fromPartial(object: Partial<_61.QueryBalanceResponse>): _61.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _61.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryAllBalancesRequest;
                fromPartial(object: Partial<_61.QueryAllBalancesRequest>): _61.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _61.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryAllBalancesResponse;
                fromPartial(object: Partial<_61.QueryAllBalancesResponse>): _61.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _61.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_61.QuerySpendableBalancesRequest>): _61.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _61.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_61.QuerySpendableBalancesResponse>): _61.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _61.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_61.QueryTotalSupplyRequest>): _61.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _61.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_61.QueryTotalSupplyResponse>): _61.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _61.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QuerySupplyOfRequest;
                fromPartial(object: Partial<_61.QuerySupplyOfRequest>): _61.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _61.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QuerySupplyOfResponse;
                fromPartial(object: Partial<_61.QuerySupplyOfResponse>): _61.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _61.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_61.QueryDenomsMetadataRequest>): _61.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _61.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_61.QueryDenomsMetadataResponse>): _61.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _61.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_61.QueryDenomMetadataRequest>): _61.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _61.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_61.QueryDenomMetadataResponse>): _61.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _61.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_61.QueryDenomOwnersRequest>): _61.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _61.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.DenomOwner;
                fromPartial(object: Partial<_61.DenomOwner>): _61.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _61.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_61.QueryDenomOwnersResponse>): _61.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            Balance: {
                encode(message: _60.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.Balance;
                fromPartial(object: Partial<_60.Balance>): _60.Balance;
            };
            Params: {
                encode(message: _59.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Params;
                fromPartial(object: Partial<_59.Params>): _59.Params;
            };
            SendEnabled: {
                encode(message: _59.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.SendEnabled;
                fromPartial(object: Partial<_59.SendEnabled>): _59.SendEnabled;
            };
            Input: {
                encode(message: _59.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Input;
                fromPartial(object: Partial<_59.Input>): _59.Input;
            };
            Output: {
                encode(message: _59.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Output;
                fromPartial(object: Partial<_59.Output>): _59.Output;
            };
            Supply: {
                encode(message: _59.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Supply;
                fromPartial(object: Partial<_59.Supply>): _59.Supply;
            };
            DenomUnit: {
                encode(message: _59.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.DenomUnit;
                fromPartial(object: Partial<_59.DenomUnit>): _59.DenomUnit;
            };
            Metadata: {
                encode(message: _59.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Metadata;
                fromPartial(object: Partial<_59.Metadata>): _59.Metadata;
            };
            SendAuthorization: {
                encode(message: _58.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.SendAuthorization;
                fromPartial(object: Partial<_58.SendAuthorization>): _58.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _63.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.TxResponse;
                    fromPartial(object: Partial<_63.TxResponse>): _63.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _63.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.ABCIMessageLog;
                    fromPartial(object: Partial<_63.ABCIMessageLog>): _63.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _63.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.StringEvent;
                    fromPartial(object: Partial<_63.StringEvent>): _63.StringEvent;
                };
                Attribute: {
                    encode(message: _63.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.Attribute;
                    fromPartial(object: Partial<_63.Attribute>): _63.Attribute;
                };
                GasInfo: {
                    encode(message: _63.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.GasInfo;
                    fromPartial(object: Partial<_63.GasInfo>): _63.GasInfo;
                };
                Result: {
                    encode(message: _63.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.Result;
                    fromPartial(object: Partial<_63.Result>): _63.Result;
                };
                SimulationResponse: {
                    encode(message: _63.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.SimulationResponse;
                    fromPartial(object: Partial<_63.SimulationResponse>): _63.SimulationResponse;
                };
                MsgData: {
                    encode(message: _63.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.MsgData;
                    fromPartial(object: Partial<_63.MsgData>): _63.MsgData;
                };
                TxMsgData: {
                    encode(message: _63.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.TxMsgData;
                    fromPartial(object: Partial<_63.TxMsgData>): _63.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _63.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _63.SearchTxsResult;
                    fromPartial(object: Partial<_63.SearchTxsResult>): _63.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _64.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.Pairs;
                    fromPartial(object: Partial<_64.Pairs>): _64.Pairs;
                };
                Pair: {
                    encode(message: _64.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _64.Pair;
                    fromPartial(object: Partial<_64.Pair>): _64.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _230.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _65.ConfigRequest): Promise<_65.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _65.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _65.ConfigRequest;
                    fromPartial(_: Partial<_65.ConfigRequest>): _65.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _65.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _65.ConfigResponse;
                    fromPartial(object: Partial<_65.ConfigResponse>): _65.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _66.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.PageRequest;
                    fromPartial(object: Partial<_66.PageRequest>): _66.PageRequest;
                };
                PageResponse: {
                    encode(message: _66.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _66.PageResponse;
                    fromPartial(object: Partial<_66.PageResponse>): _66.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _67.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _67.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_67.ListAllInterfacesRequest>): _67.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _67.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_67.ListAllInterfacesResponse>): _67.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _67.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ListImplementationsRequest;
                    fromPartial(object: Partial<_67.ListImplementationsRequest>): _67.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _67.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _67.ListImplementationsResponse;
                    fromPartial(object: Partial<_67.ListImplementationsResponse>): _67.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _68.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.AppDescriptor;
                    fromPartial(object: Partial<_68.AppDescriptor>): _68.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _68.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.TxDescriptor;
                    fromPartial(object: Partial<_68.TxDescriptor>): _68.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _68.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.AuthnDescriptor;
                    fromPartial(object: Partial<_68.AuthnDescriptor>): _68.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _68.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.SigningModeDescriptor;
                    fromPartial(object: Partial<_68.SigningModeDescriptor>): _68.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _68.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.ChainDescriptor;
                    fromPartial(object: Partial<_68.ChainDescriptor>): _68.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _68.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.CodecDescriptor;
                    fromPartial(object: Partial<_68.CodecDescriptor>): _68.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _68.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.InterfaceDescriptor;
                    fromPartial(object: Partial<_68.InterfaceDescriptor>): _68.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _68.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_68.InterfaceImplementerDescriptor>): _68.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _68.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_68.InterfaceAcceptingMessageDescriptor>): _68.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _68.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.ConfigurationDescriptor;
                    fromPartial(object: Partial<_68.ConfigurationDescriptor>): _68.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _68.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.MsgDescriptor;
                    fromPartial(object: Partial<_68.MsgDescriptor>): _68.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _68.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_68.GetAuthnDescriptorRequest>): _68.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _68.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_68.GetAuthnDescriptorResponse>): _68.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _68.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_68.GetChainDescriptorRequest>): _68.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _68.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_68.GetChainDescriptorResponse>): _68.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _68.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_68.GetCodecDescriptorRequest>): _68.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _68.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_68.GetCodecDescriptorResponse>): _68.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _68.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_68.GetConfigurationDescriptorRequest>): _68.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _68.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_68.GetConfigurationDescriptorResponse>): _68.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _68.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_68.GetQueryServicesDescriptorRequest>): _68.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _68.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_68.GetQueryServicesDescriptorResponse>): _68.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _68.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _68.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_68.GetTxDescriptorRequest>): _68.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _68.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_68.GetTxDescriptorResponse>): _68.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _68.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.QueryServicesDescriptor;
                    fromPartial(object: Partial<_68.QueryServicesDescriptor>): _68.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _68.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.QueryServiceDescriptor;
                    fromPartial(object: Partial<_68.QueryServiceDescriptor>): _68.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _68.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.QueryMethodDescriptor;
                    fromPartial(object: Partial<_68.QueryMethodDescriptor>): _68.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _69.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.Snapshot;
                    fromPartial(object: Partial<_69.Snapshot>): _69.Snapshot;
                };
                Metadata: {
                    encode(message: _69.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.Metadata;
                    fromPartial(object: Partial<_69.Metadata>): _69.Metadata;
                };
                SnapshotItem: {
                    encode(message: _69.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotItem;
                    fromPartial(object: Partial<_69.SnapshotItem>): _69.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _69.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotStoreItem;
                    fromPartial(object: Partial<_69.SnapshotStoreItem>): _69.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _69.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotIAVLItem;
                    fromPartial(object: Partial<_69.SnapshotIAVLItem>): _69.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _69.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_69.SnapshotExtensionMeta>): _69.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _69.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_69.SnapshotExtensionPayload>): _69.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _69.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotKVItem;
                    fromPartial(object: Partial<_69.SnapshotKVItem>): _69.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _69.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.SnapshotSchema;
                    fromPartial(object: Partial<_69.SnapshotSchema>): _69.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _71.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.StoreKVPair;
                    fromPartial(object: Partial<_71.StoreKVPair>): _71.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _71.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.BlockMetadata;
                    fromPartial(object: Partial<_71.BlockMetadata>): _71.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _71.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_71.BlockMetadata_DeliverTx>): _71.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _70.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.CommitInfo;
                    fromPartial(object: Partial<_70.CommitInfo>): _70.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _70.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.StoreInfo;
                    fromPartial(object: Partial<_70.StoreInfo>): _70.StoreInfo;
                };
                CommitID: {
                    encode(message: _70.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.CommitID;
                    fromPartial(object: Partial<_70.CommitID>): _70.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _231.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _72.GetNodeInfoRequest): Promise<_72.GetNodeInfoResponse>;
                    getSyncing(request?: _72.GetSyncingRequest): Promise<_72.GetSyncingResponse>;
                    getLatestBlock(request?: _72.GetLatestBlockRequest): Promise<_72.GetLatestBlockResponse>;
                    getBlockByHeight(request: _72.GetBlockByHeightRequest): Promise<_72.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _72.GetLatestValidatorSetRequest): Promise<_72.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _72.GetValidatorSetByHeightRequest): Promise<_72.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _72.ABCIQueryRequest): Promise<_72.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _73.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.Block;
                    fromPartial(object: Partial<_73.Block>): _73.Block;
                };
                Header: {
                    encode(message: _73.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.Header;
                    fromPartial(object: Partial<_73.Header>): _73.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _72.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_72.GetValidatorSetByHeightRequest>): _72.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _72.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_72.GetValidatorSetByHeightResponse>): _72.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _72.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_72.GetLatestValidatorSetRequest>): _72.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _72.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_72.GetLatestValidatorSetResponse>): _72.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _72.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.Validator;
                    fromPartial(object: Partial<_72.Validator>): _72.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _72.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_72.GetBlockByHeightRequest>): _72.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _72.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_72.GetBlockByHeightResponse>): _72.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _72.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _72.GetLatestBlockRequest;
                    fromPartial(_: Partial<_72.GetLatestBlockRequest>): _72.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _72.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetLatestBlockResponse;
                    fromPartial(object: Partial<_72.GetLatestBlockResponse>): _72.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _72.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _72.GetSyncingRequest;
                    fromPartial(_: Partial<_72.GetSyncingRequest>): _72.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _72.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetSyncingResponse;
                    fromPartial(object: Partial<_72.GetSyncingResponse>): _72.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _72.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _72.GetNodeInfoRequest;
                    fromPartial(_: Partial<_72.GetNodeInfoRequest>): _72.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _72.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.GetNodeInfoResponse;
                    fromPartial(object: Partial<_72.GetNodeInfoResponse>): _72.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _72.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.VersionInfo;
                    fromPartial(object: Partial<_72.VersionInfo>): _72.VersionInfo;
                };
                Module: {
                    encode(message: _72.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.Module;
                    fromPartial(object: Partial<_72.Module>): _72.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _72.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ABCIQueryRequest;
                    fromPartial(object: Partial<_72.ABCIQueryRequest>): _72.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _72.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ABCIQueryResponse;
                    fromPartial(object: Partial<_72.ABCIQueryResponse>): _72.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _72.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ProofOp;
                    fromPartial(object: Partial<_72.ProofOp>): _72.ProofOp;
                };
                ProofOps: {
                    encode(message: _72.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ProofOps;
                    fromPartial(object: Partial<_72.ProofOps>): _72.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _74.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Coin;
                fromPartial(object: Partial<_74.Coin>): _74.Coin;
            };
            DecCoin: {
                encode(message: _74.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.DecCoin;
                fromPartial(object: Partial<_74.DecCoin>): _74.DecCoin;
            };
            IntProto: {
                encode(message: _74.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.IntProto;
                fromPartial(object: Partial<_74.IntProto>): _74.IntProto;
            };
            DecProto: {
                encode(message: _74.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.DecProto;
                fromPartial(object: Partial<_74.DecProto>): _74.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _76.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.GenesisOwners;
                fromPartial(object: Partial<_76.GenesisOwners>): _76.GenesisOwners;
            };
            GenesisState: {
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
            };
            Capability: {
                encode(message: _75.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Capability;
                fromPartial(object: Partial<_75.Capability>): _75.Capability;
            };
            Owner: {
                encode(message: _75.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.Owner;
                fromPartial(object: Partial<_75.Owner>): _75.Owner;
            };
            CapabilityOwners: {
                encode(message: _75.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.CapabilityOwners;
                fromPartial(object: Partial<_75.CapabilityOwners>): _75.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _78.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _78.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _78.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _78.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _78.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgVerifyInvariant;
                fromPartial(object: Partial<_78.MsgVerifyInvariant>): _78.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _78.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_78.MsgVerifyInvariantResponse>): _78.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _80.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _80.BIP44Params;
                    fromPartial(object: Partial<_80.BIP44Params>): _80.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _81.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.Record;
                    fromPartial(object: Partial<_81.Record>): _81.Record;
                };
                Record_Local: {
                    encode(message: _81.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.Record_Local;
                    fromPartial(object: Partial<_81.Record_Local>): _81.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _81.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.Record_Ledger;
                    fromPartial(object: Partial<_81.Record_Ledger>): _81.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _81.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.Record_Multi;
                    fromPartial(_: Partial<_81.Record_Multi>): _81.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _81.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.Record_Offline;
                    fromPartial(_: Partial<_81.Record_Offline>): _81.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _82.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.LegacyAminoPubKey;
                fromPartial(object: Partial<_82.LegacyAminoPubKey>): _82.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                encode(message: _84.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.PubKey;
                fromPartial(object: Partial<_84.PubKey>): _84.PubKey;
            };
            PrivKey: {
                encode(message: _84.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.PrivKey;
                fromPartial(object: Partial<_84.PrivKey>): _84.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                validatorDistributionInfo(request: _88.QueryValidatorDistributionInfoRequest): Promise<_88.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _88.QueryValidatorOutstandingRewardsRequest): Promise<_88.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _88.QueryValidatorCommissionRequest): Promise<_88.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _88.QueryValidatorSlashesRequest): Promise<_88.QueryValidatorSlashesResponse>;
                delegationRewards(request: _88.QueryDelegationRewardsRequest): Promise<_88.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _88.QueryDelegationTotalRewardsRequest): Promise<_88.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _88.QueryDelegatorWithdrawAddressRequest): Promise<_88.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _88.QueryCommunityPoolRequest): Promise<_88.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _89.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _89.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _89.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _89.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _89.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _89.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _89.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _89.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _89.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _89.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _89.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _89.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _89.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _89.MsgFundCommunityPool) => {
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
                    }) => _89.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _89.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_89.MsgSetWithdrawAddress>): _89.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _89.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_89.MsgSetWithdrawAddressResponse>): _89.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _89.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_89.MsgWithdrawDelegatorReward>): _89.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _89.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_89.MsgWithdrawDelegatorRewardResponse>): _89.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _89.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_89.MsgWithdrawValidatorCommission>): _89.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _89.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_89.MsgWithdrawValidatorCommissionResponse>): _89.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _89.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgFundCommunityPool;
                fromPartial(object: Partial<_89.MsgFundCommunityPool>): _89.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _89.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_89.MsgFundCommunityPoolResponse>): _89.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _88.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _88.QueryParamsRequest;
                fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _88.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryParamsResponse;
                fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _88.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_88.QueryValidatorDistributionInfoRequest>): _88.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _88.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_88.QueryValidatorDistributionInfoResponse>): _88.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _88.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_88.QueryValidatorOutstandingRewardsRequest>): _88.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _88.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_88.QueryValidatorOutstandingRewardsResponse>): _88.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _88.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_88.QueryValidatorCommissionRequest>): _88.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _88.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_88.QueryValidatorCommissionResponse>): _88.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _88.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_88.QueryValidatorSlashesRequest>): _88.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _88.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_88.QueryValidatorSlashesResponse>): _88.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _88.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_88.QueryDelegationRewardsRequest>): _88.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _88.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_88.QueryDelegationRewardsResponse>): _88.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _88.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_88.QueryDelegationTotalRewardsRequest>): _88.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _88.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_88.QueryDelegationTotalRewardsResponse>): _88.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _88.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsRequest>): _88.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _88.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_88.QueryDelegatorValidatorsResponse>): _88.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _88.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_88.QueryDelegatorWithdrawAddressRequest>): _88.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _88.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_88.QueryDelegatorWithdrawAddressResponse>): _88.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _88.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _88.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_88.QueryCommunityPoolRequest>): _88.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _88.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_88.QueryCommunityPoolResponse>): _88.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _87.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_87.DelegatorWithdrawInfo>): _87.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _87.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorOutstandingRewardsRecord>): _87.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _87.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_87.ValidatorAccumulatedCommissionRecord>): _87.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _87.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorHistoricalRewardsRecord>): _87.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _87.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_87.ValidatorCurrentRewardsRecord>): _87.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _87.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_87.DelegatorStartingInfoRecord>): _87.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _87.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_87.ValidatorSlashEventRecord>): _87.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
            Params: {
                encode(message: _86.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Params;
                fromPartial(object: Partial<_86.Params>): _86.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _86.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_86.ValidatorHistoricalRewards>): _86.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _86.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorCurrentRewards;
                fromPartial(object: Partial<_86.ValidatorCurrentRewards>): _86.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _86.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_86.ValidatorAccumulatedCommission>): _86.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _86.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_86.ValidatorOutstandingRewards>): _86.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _86.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorSlashEvent;
                fromPartial(object: Partial<_86.ValidatorSlashEvent>): _86.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _86.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorSlashEvents;
                fromPartial(object: Partial<_86.ValidatorSlashEvents>): _86.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _86.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.FeePool;
                fromPartial(object: Partial<_86.FeePool>): _86.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _86.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_86.CommunityPoolSpendProposal>): _86.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _86.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DelegatorStartingInfo;
                fromPartial(object: Partial<_86.DelegatorStartingInfo>): _86.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _86.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DelegationDelegatorReward;
                fromPartial(object: Partial<_86.DelegationDelegatorReward>): _86.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _86.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_86.CommunityPoolSpendProposalWithDeposit>): _86.CommunityPoolSpendProposalWithDeposit;
            };
            DistributionAuthorization: {
                encode(message: _85.DistributionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.DistributionAuthorization;
                fromPartial(object: Partial<_85.DistributionAuthorization>): _85.DistributionAuthorization;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _93.MsgSubmitEvidence) => {
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
                    }) => _93.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _93.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.MsgSubmitEvidence;
                fromPartial(object: Partial<_93.MsgSubmitEvidence>): _93.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _93.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_93.MsgSubmitEvidenceResponse>): _93.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _92.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryEvidenceRequest;
                fromPartial(object: Partial<_92.QueryEvidenceRequest>): _92.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _92.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryEvidenceResponse;
                fromPartial(object: Partial<_92.QueryEvidenceResponse>): _92.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _92.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_92.QueryAllEvidenceRequest>): _92.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _92.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_92.QueryAllEvidenceResponse>): _92.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
            };
            Equivocation: {
                encode(message: _90.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Equivocation;
                fromPartial(object: Partial<_90.Equivocation>): _90.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _97.MsgGrantAllowance) => {
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
                    }) => _97.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _97.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _97.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _97.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgGrantAllowance;
                fromPartial(object: Partial<_97.MsgGrantAllowance>): _97.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _97.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _97.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_97.MsgGrantAllowanceResponse>): _97.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _97.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgRevokeAllowance;
                fromPartial(object: Partial<_97.MsgRevokeAllowance>): _97.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _97.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _97.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_97.MsgRevokeAllowanceResponse>): _97.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _96.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowanceRequest;
                fromPartial(object: Partial<_96.QueryAllowanceRequest>): _96.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _96.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowanceResponse;
                fromPartial(object: Partial<_96.QueryAllowanceResponse>): _96.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _96.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowancesRequest;
                fromPartial(object: Partial<_96.QueryAllowancesRequest>): _96.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _96.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowancesResponse;
                fromPartial(object: Partial<_96.QueryAllowancesResponse>): _96.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _96.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterRequest>): _96.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _96.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterResponse>): _96.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
            BasicAllowance: {
                encode(message: _94.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.BasicAllowance;
                fromPartial(object: Partial<_94.BasicAllowance>): _94.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _94.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.PeriodicAllowance;
                fromPartial(object: Partial<_94.PeriodicAllowance>): _94.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _94.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.AllowedMsgAllowance;
                fromPartial(object: Partial<_94.AllowedMsgAllowance>): _94.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _94.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.Grant;
                fromPartial(object: Partial<_94.Grant>): _94.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                proposals(request: _101.QueryProposalsRequest): Promise<_101.QueryProposalsResponse>;
                vote(request: _101.QueryVoteRequest): Promise<_101.QueryVoteResponse>;
                votes(request: _101.QueryVotesRequest): Promise<_101.QueryVotesResponse>;
                params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                deposit(request: _101.QueryDepositRequest): Promise<_101.QueryDepositResponse>;
                deposits(request: _101.QueryDepositsRequest): Promise<_101.QueryDepositsResponse>;
                tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _102.MsgSubmitProposal) => {
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
                    }) => _102.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _102.MsgExecLegacyContent) => {
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
                    }) => _102.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _102.MsgVote) => {
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
                    }) => _102.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _102.MsgVoteWeighted) => {
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
                    }) => _102.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _102.MsgDeposit) => {
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
                    }) => _102.MsgDeposit;
                };
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
            MsgExecLegacyContent: {
                encode(message: _102.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgExecLegacyContent;
                fromPartial(object: Partial<_102.MsgExecLegacyContent>): _102.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _102.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_102.MsgExecLegacyContentResponse>): _102.MsgExecLegacyContentResponse;
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
            MsgVoteWeighted: {
                encode(message: _102.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgVoteWeighted;
                fromPartial(object: Partial<_102.MsgVoteWeighted>): _102.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _102.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_102.MsgVoteWeightedResponse>): _102.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _102.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MsgDeposit;
                fromPartial(object: Partial<_102.MsgDeposit>): _102.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _102.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.MsgDepositResponse;
                fromPartial(_: Partial<_102.MsgDepositResponse>): _102.MsgDepositResponse;
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
            QueryProposalsRequest: {
                encode(message: _101.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalsRequest;
                fromPartial(object: Partial<_101.QueryProposalsRequest>): _101.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _101.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryProposalsResponse;
                fromPartial(object: Partial<_101.QueryProposalsResponse>): _101.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _101.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVoteRequest;
                fromPartial(object: Partial<_101.QueryVoteRequest>): _101.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _101.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVoteResponse;
                fromPartial(object: Partial<_101.QueryVoteResponse>): _101.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _101.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesRequest;
                fromPartial(object: Partial<_101.QueryVotesRequest>): _101.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _101.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryVotesResponse;
                fromPartial(object: Partial<_101.QueryVotesResponse>): _101.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryParamsRequest;
                fromPartial(object: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryParamsResponse;
                fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _101.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryDepositRequest;
                fromPartial(object: Partial<_101.QueryDepositRequest>): _101.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _101.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryDepositResponse;
                fromPartial(object: Partial<_101.QueryDepositResponse>): _101.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _101.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryDepositsRequest;
                fromPartial(object: Partial<_101.QueryDepositsRequest>): _101.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _101.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QueryDepositsResponse;
                fromPartial(object: Partial<_101.QueryDepositsResponse>): _101.QueryDepositsResponse;
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
            voteOptionFromJSON(object: any): _100.VoteOption;
            voteOptionToJSON(object: _100.VoteOption): string;
            proposalStatusFromJSON(object: any): _100.ProposalStatus;
            proposalStatusToJSON(object: _100.ProposalStatus): string;
            VoteOption: typeof _100.VoteOption;
            VoteOptionSDKType: typeof _100.VoteOption;
            ProposalStatus: typeof _100.ProposalStatus;
            ProposalStatusSDKType: typeof _100.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _100.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.WeightedVoteOption;
                fromPartial(object: Partial<_100.WeightedVoteOption>): _100.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _100.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.Deposit;
                fromPartial(object: Partial<_100.Deposit>): _100.Deposit;
            };
            Proposal: {
                encode(message: _100.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.Proposal;
                fromPartial(object: Partial<_100.Proposal>): _100.Proposal;
            };
            TallyResult: {
                encode(message: _100.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.TallyResult;
                fromPartial(object: Partial<_100.TallyResult>): _100.TallyResult;
            };
            Vote: {
                encode(message: _100.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.Vote;
                fromPartial(object: Partial<_100.Vote>): _100.Vote;
            };
            DepositParams: {
                encode(message: _100.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.DepositParams;
                fromPartial(object: Partial<_100.DepositParams>): _100.DepositParams;
            };
            VotingParams: {
                encode(message: _100.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.VotingParams;
                fromPartial(object: Partial<_100.VotingParams>): _100.VotingParams;
            };
            TallyParams: {
                encode(message: _100.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.TallyParams;
                fromPartial(object: Partial<_100.TallyParams>): _100.TallyParams;
            };
            GenesisState: {
                encode(message: _99.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.GenesisState;
                fromPartial(object: Partial<_99.GenesisState>): _99.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _105.QueryProposalRequest): Promise<_105.QueryProposalResponse>;
                proposals(request: _105.QueryProposalsRequest): Promise<_105.QueryProposalsResponse>;
                vote(request: _105.QueryVoteRequest): Promise<_105.QueryVoteResponse>;
                votes(request: _105.QueryVotesRequest): Promise<_105.QueryVotesResponse>;
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                deposit(request: _105.QueryDepositRequest): Promise<_105.QueryDepositResponse>;
                deposits(request: _105.QueryDepositsRequest): Promise<_105.QueryDepositsResponse>;
                tallyResult(request: _105.QueryTallyResultRequest): Promise<_105.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _106.MsgSubmitProposal) => {
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
                    }) => _106.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _106.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _106.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _106.MsgVoteWeighted) => {
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
                    }) => _106.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _106.MsgDeposit) => {
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
                    }) => _106.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _106.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgSubmitProposal;
                fromPartial(object: Partial<_106.MsgSubmitProposal>): _106.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _106.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_106.MsgSubmitProposalResponse>): _106.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _106.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgVote;
                fromPartial(object: Partial<_106.MsgVote>): _106.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _106.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.MsgVoteResponse;
                fromPartial(_: Partial<_106.MsgVoteResponse>): _106.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _106.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgVoteWeighted;
                fromPartial(object: Partial<_106.MsgVoteWeighted>): _106.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _106.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_106.MsgVoteWeightedResponse>): _106.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _106.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.MsgDeposit;
                fromPartial(object: Partial<_106.MsgDeposit>): _106.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _106.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.MsgDepositResponse;
                fromPartial(_: Partial<_106.MsgDepositResponse>): _106.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _105.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryProposalRequest;
                fromPartial(object: Partial<_105.QueryProposalRequest>): _105.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _105.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryProposalResponse;
                fromPartial(object: Partial<_105.QueryProposalResponse>): _105.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _105.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryProposalsRequest;
                fromPartial(object: Partial<_105.QueryProposalsRequest>): _105.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _105.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryProposalsResponse;
                fromPartial(object: Partial<_105.QueryProposalsResponse>): _105.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _105.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryVoteRequest;
                fromPartial(object: Partial<_105.QueryVoteRequest>): _105.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _105.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryVoteResponse;
                fromPartial(object: Partial<_105.QueryVoteResponse>): _105.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _105.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryVotesRequest;
                fromPartial(object: Partial<_105.QueryVotesRequest>): _105.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _105.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryVotesResponse;
                fromPartial(object: Partial<_105.QueryVotesResponse>): _105.QueryVotesResponse;
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
            QueryDepositRequest: {
                encode(message: _105.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDepositRequest;
                fromPartial(object: Partial<_105.QueryDepositRequest>): _105.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _105.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDepositResponse;
                fromPartial(object: Partial<_105.QueryDepositResponse>): _105.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _105.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDepositsRequest;
                fromPartial(object: Partial<_105.QueryDepositsRequest>): _105.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _105.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryDepositsResponse;
                fromPartial(object: Partial<_105.QueryDepositsResponse>): _105.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _105.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryTallyResultRequest;
                fromPartial(object: Partial<_105.QueryTallyResultRequest>): _105.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _105.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.QueryTallyResultResponse;
                fromPartial(object: Partial<_105.QueryTallyResultResponse>): _105.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _104.VoteOption;
            voteOptionToJSON(object: _104.VoteOption): string;
            proposalStatusFromJSON(object: any): _104.ProposalStatus;
            proposalStatusToJSON(object: _104.ProposalStatus): string;
            VoteOption: typeof _104.VoteOption;
            VoteOptionSDKType: typeof _104.VoteOption;
            ProposalStatus: typeof _104.ProposalStatus;
            ProposalStatusSDKType: typeof _104.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _104.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.WeightedVoteOption;
                fromPartial(object: Partial<_104.WeightedVoteOption>): _104.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _104.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.TextProposal;
                fromPartial(object: Partial<_104.TextProposal>): _104.TextProposal;
            };
            Deposit: {
                encode(message: _104.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Deposit;
                fromPartial(object: Partial<_104.Deposit>): _104.Deposit;
            };
            Proposal: {
                encode(message: _104.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Proposal;
                fromPartial(object: Partial<_104.Proposal>): _104.Proposal;
            };
            TallyResult: {
                encode(message: _104.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.TallyResult;
                fromPartial(object: Partial<_104.TallyResult>): _104.TallyResult;
            };
            Vote: {
                encode(message: _104.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Vote;
                fromPartial(object: Partial<_104.Vote>): _104.Vote;
            };
            DepositParams: {
                encode(message: _104.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DepositParams;
                fromPartial(object: Partial<_104.DepositParams>): _104.DepositParams;
            };
            VotingParams: {
                encode(message: _104.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.VotingParams;
                fromPartial(object: Partial<_104.VotingParams>): _104.VotingParams;
            };
            TallyParams: {
                encode(message: _104.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.TallyParams;
                fromPartial(object: Partial<_104.TallyParams>): _104.TallyParams;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _109.QueryGroupInfoRequest): Promise<_109.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _109.QueryGroupPolicyInfoRequest): Promise<_109.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _109.QueryGroupMembersRequest): Promise<_109.QueryGroupMembersResponse>;
                groupsByAdmin(request: _109.QueryGroupsByAdminRequest): Promise<_109.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _109.QueryGroupPoliciesByGroupRequest): Promise<_109.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _109.QueryGroupPoliciesByAdminRequest): Promise<_109.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _109.QueryProposalRequest): Promise<_109.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _109.QueryProposalsByGroupPolicyRequest): Promise<_109.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _109.QueryVoteByProposalVoterRequest): Promise<_109.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _109.QueryVotesByProposalRequest): Promise<_109.QueryVotesByProposalResponse>;
                votesByVoter(request: _109.QueryVotesByVoterRequest): Promise<_109.QueryVotesByVoterResponse>;
                groupsByMember(request: _109.QueryGroupsByMemberRequest): Promise<_109.QueryGroupsByMemberResponse>;
                tallyResult(request: _109.QueryTallyResultRequest): Promise<_109.QueryTallyResultResponse>;
                groups(request?: _109.QueryGroupsRequest): Promise<_109.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _110.MsgCreateGroup) => {
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
                    }) => _110.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _110.MsgUpdateGroupMembers) => {
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
                    }) => _110.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _110.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _110.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _110.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _110.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _110.MsgCreateGroupPolicy) => {
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
                    }) => _110.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _110.MsgCreateGroupWithPolicy) => {
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
                    }) => _110.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _110.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _110.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _110.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _110.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _110.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _110.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _110.MsgSubmitProposal) => {
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
                    }) => _110.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _110.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _110.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _110.MsgVote) => {
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
                    }) => _110.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _110.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _110.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _110.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _110.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _111.VoteOption;
            voteOptionToJSON(object: _111.VoteOption): string;
            proposalStatusFromJSON(object: any): _111.ProposalStatus;
            proposalStatusToJSON(object: _111.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _111.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _111.ProposalExecutorResult): string;
            VoteOption: typeof _111.VoteOption;
            VoteOptionSDKType: typeof _111.VoteOption;
            ProposalStatus: typeof _111.ProposalStatus;
            ProposalStatusSDKType: typeof _111.ProposalStatus;
            ProposalExecutorResult: typeof _111.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _111.ProposalExecutorResult;
            Member: {
                encode(message: _111.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.Member;
                fromPartial(object: Partial<_111.Member>): _111.Member;
            };
            MemberRequest: {
                encode(message: _111.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.MemberRequest;
                fromPartial(object: Partial<_111.MemberRequest>): _111.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _111.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_111.ThresholdDecisionPolicy>): _111.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _111.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.PercentageDecisionPolicy;
                fromPartial(object: Partial<_111.PercentageDecisionPolicy>): _111.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _111.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.DecisionPolicyWindows;
                fromPartial(object: Partial<_111.DecisionPolicyWindows>): _111.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _111.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GroupInfo;
                fromPartial(object: Partial<_111.GroupInfo>): _111.GroupInfo;
            };
            GroupMember: {
                encode(message: _111.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GroupMember;
                fromPartial(object: Partial<_111.GroupMember>): _111.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _111.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GroupPolicyInfo;
                fromPartial(object: Partial<_111.GroupPolicyInfo>): _111.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _111.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.Proposal;
                fromPartial(object: Partial<_111.Proposal>): _111.Proposal;
            };
            TallyResult: {
                encode(message: _111.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.TallyResult;
                fromPartial(object: Partial<_111.TallyResult>): _111.TallyResult;
            };
            Vote: {
                encode(message: _111.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.Vote;
                fromPartial(object: Partial<_111.Vote>): _111.Vote;
            };
            execFromJSON(object: any): _110.Exec;
            execToJSON(object: _110.Exec): string;
            Exec: typeof _110.Exec;
            ExecSDKType: typeof _110.Exec;
            MsgCreateGroup: {
                encode(message: _110.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroup;
                fromPartial(object: Partial<_110.MsgCreateGroup>): _110.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _110.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroupResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupResponse>): _110.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _110.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_110.MsgUpdateGroupMembers>): _110.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _110.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupMembersResponse>): _110.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _110.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_110.MsgUpdateGroupAdmin>): _110.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _110.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupAdminResponse>): _110.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _110.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_110.MsgUpdateGroupMetadata>): _110.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _110.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupMetadataResponse>): _110.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _110.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_110.MsgCreateGroupPolicy>): _110.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _110.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupPolicyResponse>): _110.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _110.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyAdmin>): _110.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _110.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_110.MsgCreateGroupWithPolicy>): _110.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _110.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupWithPolicyResponse>): _110.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _110.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyAdminResponse>): _110.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _110.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyDecisionPolicy>): _110.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _110.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyDecisionPolicyResponse>): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _110.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyMetadata>): _110.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _110.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyMetadataResponse>): _110.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _110.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgSubmitProposal;
                fromPartial(object: Partial<_110.MsgSubmitProposal>): _110.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _110.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_110.MsgSubmitProposalResponse>): _110.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _110.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgWithdrawProposal;
                fromPartial(object: Partial<_110.MsgWithdrawProposal>): _110.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _110.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_110.MsgWithdrawProposalResponse>): _110.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _110.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgVote;
                fromPartial(object: Partial<_110.MsgVote>): _110.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _110.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgVoteResponse;
                fromPartial(_: Partial<_110.MsgVoteResponse>): _110.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _110.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgExec;
                fromPartial(object: Partial<_110.MsgExec>): _110.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _110.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgExecResponse;
                fromPartial(object: Partial<_110.MsgExecResponse>): _110.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _110.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgLeaveGroup;
                fromPartial(object: Partial<_110.MsgLeaveGroup>): _110.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _110.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_110.MsgLeaveGroupResponse>): _110.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _109.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupInfoRequest;
                fromPartial(object: Partial<_109.QueryGroupInfoRequest>): _109.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _109.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupInfoResponse;
                fromPartial(object: Partial<_109.QueryGroupInfoResponse>): _109.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _109.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_109.QueryGroupPolicyInfoRequest>): _109.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _109.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_109.QueryGroupPolicyInfoResponse>): _109.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _109.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupMembersRequest;
                fromPartial(object: Partial<_109.QueryGroupMembersRequest>): _109.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _109.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupMembersResponse;
                fromPartial(object: Partial<_109.QueryGroupMembersResponse>): _109.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _109.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_109.QueryGroupsByAdminRequest>): _109.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _109.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_109.QueryGroupsByAdminResponse>): _109.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _109.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByGroupRequest>): _109.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _109.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByGroupResponse>): _109.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _109.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByAdminRequest>): _109.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _109.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByAdminResponse>): _109.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _109.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryProposalRequest;
                fromPartial(object: Partial<_109.QueryProposalRequest>): _109.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _109.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryProposalResponse;
                fromPartial(object: Partial<_109.QueryProposalResponse>): _109.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _109.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_109.QueryProposalsByGroupPolicyRequest>): _109.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _109.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_109.QueryProposalsByGroupPolicyResponse>): _109.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _109.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_109.QueryVoteByProposalVoterRequest>): _109.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _109.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_109.QueryVoteByProposalVoterResponse>): _109.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _109.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_109.QueryVotesByProposalRequest>): _109.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _109.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_109.QueryVotesByProposalResponse>): _109.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _109.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_109.QueryVotesByVoterRequest>): _109.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _109.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_109.QueryVotesByVoterResponse>): _109.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _109.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_109.QueryGroupsByMemberRequest>): _109.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _109.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_109.QueryGroupsByMemberResponse>): _109.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _109.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryTallyResultRequest;
                fromPartial(object: Partial<_109.QueryTallyResultRequest>): _109.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _109.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryTallyResultResponse;
                fromPartial(object: Partial<_109.QueryTallyResultResponse>): _109.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _109.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsRequest;
                fromPartial(object: Partial<_109.QueryGroupsRequest>): _109.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _109.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.QueryGroupsResponse;
                fromPartial(object: Partial<_109.QueryGroupsResponse>): _109.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.GenesisState;
                fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _107.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventCreateGroup;
                fromPartial(object: Partial<_107.EventCreateGroup>): _107.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _107.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventUpdateGroup;
                fromPartial(object: Partial<_107.EventUpdateGroup>): _107.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _107.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventCreateGroupPolicy;
                fromPartial(object: Partial<_107.EventCreateGroupPolicy>): _107.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _107.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_107.EventUpdateGroupPolicy>): _107.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _107.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventSubmitProposal;
                fromPartial(object: Partial<_107.EventSubmitProposal>): _107.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _107.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventWithdrawProposal;
                fromPartial(object: Partial<_107.EventWithdrawProposal>): _107.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _107.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventVote;
                fromPartial(object: Partial<_107.EventVote>): _107.EventVote;
            };
            EventExec: {
                encode(message: _107.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventExec;
                fromPartial(object: Partial<_107.EventExec>): _107.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _107.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventLeaveGroup;
                fromPartial(object: Partial<_107.EventLeaveGroup>): _107.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _107.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.EventProposalPruned;
                fromPartial(object: Partial<_107.EventProposalPruned>): _107.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                inflation(request?: _114.QueryInflationRequest): Promise<_114.QueryInflationResponse>;
                annualProvisions(request?: _114.QueryAnnualProvisionsRequest): Promise<_114.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _114.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.QueryParamsRequest;
                fromPartial(_: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _114.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _114.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.QueryInflationRequest;
                fromPartial(_: Partial<_114.QueryInflationRequest>): _114.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _114.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryInflationResponse;
                fromPartial(object: Partial<_114.QueryInflationResponse>): _114.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _114.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_114.QueryAnnualProvisionsRequest>): _114.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _114.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_114.QueryAnnualProvisionsResponse>): _114.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _113.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Minter;
                fromPartial(object: Partial<_113.Minter>): _113.Minter;
            };
            Params: {
                encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Params;
                fromPartial(object: Partial<_113.Params>): _113.Params;
            };
            GenesisState: {
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _119.QueryBalanceRequest): Promise<_119.QueryBalanceResponse>;
                owner(request: _119.QueryOwnerRequest): Promise<_119.QueryOwnerResponse>;
                supply(request: _119.QuerySupplyRequest): Promise<_119.QuerySupplyResponse>;
                nFTs(request: _119.QueryNFTsRequest): Promise<_119.QueryNFTsResponse>;
                nFT(request: _119.QueryNFTRequest): Promise<_119.QueryNFTResponse>;
                class(request: _119.QueryClassRequest): Promise<_119.QueryClassResponse>;
                classes(request?: _119.QueryClassesRequest): Promise<_119.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _120.MsgSend): {
                        typeUrl: string;
                        value: _120.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _120.MsgSend) => {
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
                    }) => _120.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _120.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgSend;
                fromPartial(object: Partial<_120.MsgSend>): _120.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _120.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgSendResponse;
                fromPartial(_: Partial<_120.MsgSendResponse>): _120.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _119.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryBalanceRequest;
                fromPartial(object: Partial<_119.QueryBalanceRequest>): _119.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _119.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryBalanceResponse;
                fromPartial(object: Partial<_119.QueryBalanceResponse>): _119.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _119.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryOwnerRequest;
                fromPartial(object: Partial<_119.QueryOwnerRequest>): _119.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _119.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryOwnerResponse;
                fromPartial(object: Partial<_119.QueryOwnerResponse>): _119.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _119.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySupplyRequest;
                fromPartial(object: Partial<_119.QuerySupplyRequest>): _119.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _119.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QuerySupplyResponse;
                fromPartial(object: Partial<_119.QuerySupplyResponse>): _119.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _119.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryNFTsRequest;
                fromPartial(object: Partial<_119.QueryNFTsRequest>): _119.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _119.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryNFTsResponse;
                fromPartial(object: Partial<_119.QueryNFTsResponse>): _119.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _119.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryNFTRequest;
                fromPartial(object: Partial<_119.QueryNFTRequest>): _119.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _119.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryNFTResponse;
                fromPartial(object: Partial<_119.QueryNFTResponse>): _119.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _119.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryClassRequest;
                fromPartial(object: Partial<_119.QueryClassRequest>): _119.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _119.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryClassResponse;
                fromPartial(object: Partial<_119.QueryClassResponse>): _119.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _119.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryClassesRequest;
                fromPartial(object: Partial<_119.QueryClassesRequest>): _119.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _119.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryClassesResponse;
                fromPartial(object: Partial<_119.QueryClassesResponse>): _119.QueryClassesResponse;
            };
            Class: {
                encode(message: _118.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.Class;
                fromPartial(object: Partial<_118.Class>): _118.Class;
            };
            NFT: {
                encode(message: _118.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.NFT;
                fromPartial(object: Partial<_118.NFT>): _118.NFT;
            };
            GenesisState: {
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
            };
            Entry: {
                encode(message: _117.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Entry;
                fromPartial(object: Partial<_117.Entry>): _117.Entry;
            };
            EventSend: {
                encode(message: _116.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.EventSend;
                fromPartial(object: Partial<_116.EventSend>): _116.EventSend;
            };
            EventMint: {
                encode(message: _116.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.EventMint;
                fromPartial(object: Partial<_116.EventMint>): _116.EventMint;
            };
            EventBurn: {
                encode(message: _116.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.EventBurn;
                fromPartial(object: Partial<_116.EventBurn>): _116.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _121.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _121.Module;
                    fromPartial(_: Partial<_121.Module>): _121.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _122.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.TableDescriptor;
                fromPartial(object: Partial<_122.TableDescriptor>): _122.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _122.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_122.PrimaryKeyDescriptor>): _122.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _122.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_122.SecondaryIndexDescriptor>): _122.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _122.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.SingletonDescriptor;
                fromPartial(object: Partial<_122.SingletonDescriptor>): _122.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _123.StorageType;
            storageTypeToJSON(object: _123.StorageType): string;
            StorageType: typeof _123.StorageType;
            StorageTypeSDKType: typeof _123.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _123.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_123.ModuleSchemaDescriptor>): _123.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _123.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_123.ModuleSchemaDescriptor_FileEntry>): _123.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                subspaces(request?: _125.QuerySubspacesRequest): Promise<_125.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _125.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryParamsRequest;
                fromPartial(object: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _125.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QueryParamsResponse;
                fromPartial(object: Partial<_125.QueryParamsResponse>): _125.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _125.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.QuerySubspacesRequest;
                fromPartial(_: Partial<_125.QuerySubspacesRequest>): _125.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _125.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.QuerySubspacesResponse;
                fromPartial(object: Partial<_125.QuerySubspacesResponse>): _125.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _125.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.Subspace;
                fromPartial(object: Partial<_125.Subspace>): _125.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _124.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.ParameterChangeProposal;
                fromPartial(object: Partial<_124.ParameterChangeProposal>): _124.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _124.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.ParamChange;
                fromPartial(object: Partial<_124.ParamChange>): _124.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _129.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _129.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _129.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.MsgUnjail;
                fromPartial(object: Partial<_129.MsgUnjail>): _129.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _129.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _129.MsgUnjailResponse;
                fromPartial(_: Partial<_129.MsgUnjailResponse>): _129.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _128.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.ValidatorSigningInfo;
                fromPartial(object: Partial<_128.ValidatorSigningInfo>): _128.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _128.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
            };
            QueryParamsRequest: {
                encode(_: _127.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _127.QueryParamsRequest;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _127.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _127.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QuerySigningInfoRequest;
                fromPartial(object: Partial<_127.QuerySigningInfoRequest>): _127.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _127.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QuerySigningInfoResponse;
                fromPartial(object: Partial<_127.QuerySigningInfoResponse>): _127.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _127.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QuerySigningInfosRequest;
                fromPartial(object: Partial<_127.QuerySigningInfosRequest>): _127.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _127.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QuerySigningInfosResponse;
                fromPartial(object: Partial<_127.QuerySigningInfosResponse>): _127.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.GenesisState;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            };
            SigningInfo: {
                encode(message: _126.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.SigningInfo;
                fromPartial(object: Partial<_126.SigningInfo>): _126.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _126.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.ValidatorMissedBlocks;
                fromPartial(object: Partial<_126.ValidatorMissedBlocks>): _126.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _126.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MissedBlock;
                fromPartial(object: Partial<_126.MissedBlock>): _126.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _134.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _134.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _134.MsgCreateValidator) => {
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
                    }) => _134.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _134.MsgEditValidator) => {
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
                    }) => _134.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _134.MsgDelegate) => {
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
                    }) => _134.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _134.MsgBeginRedelegate) => {
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
                    }) => _134.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _134.MsgUndelegate) => {
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
                    }) => _134.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _134.MsgCancelUnbondingDelegation) => {
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
                    }) => _134.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _134.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgCreateValidator;
                fromPartial(object: Partial<_134.MsgCreateValidator>): _134.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _134.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_134.MsgCreateValidatorResponse>): _134.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _134.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgEditValidator;
                fromPartial(object: Partial<_134.MsgEditValidator>): _134.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _134.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.MsgEditValidatorResponse;
                fromPartial(_: Partial<_134.MsgEditValidatorResponse>): _134.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _134.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgDelegate;
                fromPartial(object: Partial<_134.MsgDelegate>): _134.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _134.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.MsgDelegateResponse;
                fromPartial(_: Partial<_134.MsgDelegateResponse>): _134.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _134.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgBeginRedelegate;
                fromPartial(object: Partial<_134.MsgBeginRedelegate>): _134.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _134.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_134.MsgBeginRedelegateResponse>): _134.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _134.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgUndelegate;
                fromPartial(object: Partial<_134.MsgUndelegate>): _134.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _134.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgUndelegateResponse;
                fromPartial(object: Partial<_134.MsgUndelegateResponse>): _134.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _134.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_134.MsgCancelUnbondingDelegation>): _134.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _134.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_134.MsgCancelUnbondingDelegationResponse>): _134.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _133.BondStatus;
            bondStatusToJSON(object: _133.BondStatus): string;
            BondStatus: typeof _133.BondStatus;
            BondStatusSDKType: typeof _133.BondStatus;
            HistoricalInfo: {
                encode(message: _133.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.HistoricalInfo;
                fromPartial(object: Partial<_133.HistoricalInfo>): _133.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _133.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.CommissionRates;
                fromPartial(object: Partial<_133.CommissionRates>): _133.CommissionRates;
            };
            Commission: {
                encode(message: _133.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Commission;
                fromPartial(object: Partial<_133.Commission>): _133.Commission;
            };
            Description: {
                encode(message: _133.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Description;
                fromPartial(object: Partial<_133.Description>): _133.Description;
            };
            Validator: {
                encode(message: _133.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Validator;
                fromPartial(object: Partial<_133.Validator>): _133.Validator;
            };
            ValAddresses: {
                encode(message: _133.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.ValAddresses;
                fromPartial(object: Partial<_133.ValAddresses>): _133.ValAddresses;
            };
            DVPair: {
                encode(message: _133.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.DVPair;
                fromPartial(object: Partial<_133.DVPair>): _133.DVPair;
            };
            DVPairs: {
                encode(message: _133.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.DVPairs;
                fromPartial(object: Partial<_133.DVPairs>): _133.DVPairs;
            };
            DVVTriplet: {
                encode(message: _133.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.DVVTriplet;
                fromPartial(object: Partial<_133.DVVTriplet>): _133.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _133.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.DVVTriplets;
                fromPartial(object: Partial<_133.DVVTriplets>): _133.DVVTriplets;
            };
            Delegation: {
                encode(message: _133.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Delegation;
                fromPartial(object: Partial<_133.Delegation>): _133.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _133.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.UnbondingDelegation;
                fromPartial(object: Partial<_133.UnbondingDelegation>): _133.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _133.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.UnbondingDelegationEntry;
                fromPartial(object: Partial<_133.UnbondingDelegationEntry>): _133.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _133.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.RedelegationEntry;
                fromPartial(object: Partial<_133.RedelegationEntry>): _133.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _133.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Redelegation;
                fromPartial(object: Partial<_133.Redelegation>): _133.Redelegation;
            };
            Params: {
                encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
            };
            DelegationResponse: {
                encode(message: _133.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.DelegationResponse;
                fromPartial(object: Partial<_133.DelegationResponse>): _133.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _133.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.RedelegationEntryResponse;
                fromPartial(object: Partial<_133.RedelegationEntryResponse>): _133.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _133.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.RedelegationResponse;
                fromPartial(object: Partial<_133.RedelegationResponse>): _133.RedelegationResponse;
            };
            Pool: {
                encode(message: _133.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.Pool;
                fromPartial(object: Partial<_133.Pool>): _133.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _132.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorsRequest;
                fromPartial(object: Partial<_132.QueryValidatorsRequest>): _132.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _132.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorsResponse;
                fromPartial(object: Partial<_132.QueryValidatorsResponse>): _132.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _132.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorRequest;
                fromPartial(object: Partial<_132.QueryValidatorRequest>): _132.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _132.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorResponse;
                fromPartial(object: Partial<_132.QueryValidatorResponse>): _132.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _132.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsRequest>): _132.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _132.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsResponse>): _132.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _132.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsRequest>): _132.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _132.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsResponse>): _132.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _132.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegationRequest;
                fromPartial(object: Partial<_132.QueryDelegationRequest>): _132.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _132.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegationResponse;
                fromPartial(object: Partial<_132.QueryDelegationResponse>): _132.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _132.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationRequest>): _132.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _132.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationResponse>): _132.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _132.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsRequest>): _132.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _132.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsResponse>): _132.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _132.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsRequest>): _132.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _132.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsResponse>): _132.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _132.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryRedelegationsRequest;
                fromPartial(object: Partial<_132.QueryRedelegationsRequest>): _132.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _132.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryRedelegationsResponse;
                fromPartial(object: Partial<_132.QueryRedelegationsResponse>): _132.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _132.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsRequest>): _132.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _132.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsResponse>): _132.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _132.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorRequest>): _132.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _132.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorResponse>): _132.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _132.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_132.QueryHistoricalInfoRequest>): _132.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _132.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_132.QueryHistoricalInfoResponse>): _132.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _132.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _132.QueryPoolRequest;
                fromPartial(_: Partial<_132.QueryPoolRequest>): _132.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _132.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryPoolResponse;
                fromPartial(object: Partial<_132.QueryPoolResponse>): _132.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _131.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.LastValidatorPower;
                fromPartial(object: Partial<_131.LastValidatorPower>): _131.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _130.AuthorizationType;
            authorizationTypeToJSON(object: _130.AuthorizationType): string;
            AuthorizationType: typeof _130.AuthorizationType;
            AuthorizationTypeSDKType: typeof _130.AuthorizationType;
            StakeAuthorization: {
                encode(message: _130.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.StakeAuthorization;
                fromPartial(object: Partial<_130.StakeAuthorization>): _130.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _130.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.StakeAuthorization_Validators;
                fromPartial(object: Partial<_130.StakeAuthorization_Validators>): _130.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _135.SignMode;
                signModeToJSON(object: _135.SignMode): string;
                SignMode: typeof _135.SignMode;
                SignModeSDKType: typeof _135.SignMode;
                SignatureDescriptors: {
                    encode(message: _135.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureDescriptors;
                    fromPartial(object: Partial<_135.SignatureDescriptors>): _135.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _135.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureDescriptor;
                    fromPartial(object: Partial<_135.SignatureDescriptor>): _135.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _135.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data>): _135.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _135.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Single>): _135.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _135.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Multi>): _135.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _243.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _137.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.Tx;
                fromPartial(object: Partial<_137.Tx>): _137.Tx;
            };
            TxRaw: {
                encode(message: _137.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.TxRaw;
                fromPartial(object: Partial<_137.TxRaw>): _137.TxRaw;
            };
            SignDoc: {
                encode(message: _137.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.SignDoc;
                fromPartial(object: Partial<_137.SignDoc>): _137.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _137.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.SignDocDirectAux;
                fromPartial(object: Partial<_137.SignDocDirectAux>): _137.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _137.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.TxBody;
                fromPartial(object: Partial<_137.TxBody>): _137.TxBody;
            };
            AuthInfo: {
                encode(message: _137.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.AuthInfo;
                fromPartial(object: Partial<_137.AuthInfo>): _137.AuthInfo;
            };
            SignerInfo: {
                encode(message: _137.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.SignerInfo;
                fromPartial(object: Partial<_137.SignerInfo>): _137.SignerInfo;
            };
            ModeInfo: {
                encode(message: _137.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.ModeInfo;
                fromPartial(object: Partial<_137.ModeInfo>): _137.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _137.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.ModeInfo_Single;
                fromPartial(object: Partial<_137.ModeInfo_Single>): _137.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _137.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.ModeInfo_Multi;
                fromPartial(object: Partial<_137.ModeInfo_Multi>): _137.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _137.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.Fee;
                fromPartial(object: Partial<_137.Fee>): _137.Fee;
            };
            Tip: {
                encode(message: _137.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.Tip;
                fromPartial(object: Partial<_137.Tip>): _137.Tip;
            };
            AuxSignerData: {
                encode(message: _137.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.AuxSignerData;
                fromPartial(object: Partial<_137.AuxSignerData>): _137.AuxSignerData;
            };
            orderByFromJSON(object: any): _136.OrderBy;
            orderByToJSON(object: _136.OrderBy): string;
            broadcastModeFromJSON(object: any): _136.BroadcastMode;
            broadcastModeToJSON(object: _136.BroadcastMode): string;
            OrderBy: typeof _136.OrderBy;
            OrderBySDKType: typeof _136.OrderBy;
            BroadcastMode: typeof _136.BroadcastMode;
            BroadcastModeSDKType: typeof _136.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _136.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetTxsEventRequest;
                fromPartial(object: Partial<_136.GetTxsEventRequest>): _136.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _136.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetTxsEventResponse;
                fromPartial(object: Partial<_136.GetTxsEventResponse>): _136.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _136.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.BroadcastTxRequest;
                fromPartial(object: Partial<_136.BroadcastTxRequest>): _136.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _136.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.BroadcastTxResponse;
                fromPartial(object: Partial<_136.BroadcastTxResponse>): _136.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _136.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.SimulateRequest;
                fromPartial(object: Partial<_136.SimulateRequest>): _136.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _136.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.SimulateResponse;
                fromPartial(object: Partial<_136.SimulateResponse>): _136.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _136.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetTxRequest;
                fromPartial(object: Partial<_136.GetTxRequest>): _136.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _136.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetTxResponse;
                fromPartial(object: Partial<_136.GetTxResponse>): _136.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _136.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_136.GetBlockWithTxsRequest>): _136.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _136.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_136.GetBlockWithTxsResponse>): _136.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _139.MsgSoftwareUpgrade) => {
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
                    }) => _139.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _139.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _139.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _140.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.Plan;
                fromPartial(object: Partial<_140.Plan>): _140.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _140.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.SoftwareUpgradeProposal>): _140.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _140.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.CancelSoftwareUpgradeProposal>): _140.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _140.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.ModuleVersion;
                fromPartial(object: Partial<_140.ModuleVersion>): _140.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _139.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_139.MsgSoftwareUpgrade>): _139.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _139.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _139.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_139.MsgSoftwareUpgradeResponse>): _139.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _139.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.MsgCancelUpgrade;
                fromPartial(object: Partial<_139.MsgCancelUpgrade>): _139.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _139.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _139.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_139.MsgCancelUpgradeResponse>): _139.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _138.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_138.QueryCurrentPlanRequest>): _138.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _138.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_138.QueryCurrentPlanResponse>): _138.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _138.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_138.QueryAppliedPlanRequest>): _138.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _138.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_138.QueryAppliedPlanResponse>): _138.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _138.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateRequest>): _138.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _138.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateResponse>): _138.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _138.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_138.QueryModuleVersionsRequest>): _138.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _138.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_138.QueryModuleVersionsResponse>): _138.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _138.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryAuthorityRequest;
                fromPartial(_: Partial<_138.QueryAuthorityRequest>): _138.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _138.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryAuthorityResponse;
                fromPartial(object: Partial<_138.QueryAuthorityResponse>): _138.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _141.MsgCreateVestingAccount) => {
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
                    }) => _141.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _141.MsgCreatePermanentLockedAccount) => {
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
                    }) => _141.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _141.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _141.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _142.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.BaseVestingAccount;
                fromPartial(object: Partial<_142.BaseVestingAccount>): _142.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _142.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.ContinuousVestingAccount;
                fromPartial(object: Partial<_142.ContinuousVestingAccount>): _142.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _142.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.DelayedVestingAccount;
                fromPartial(object: Partial<_142.DelayedVestingAccount>): _142.DelayedVestingAccount;
            };
            Period: {
                encode(message: _142.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.Period;
                fromPartial(object: Partial<_142.Period>): _142.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _142.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.PeriodicVestingAccount;
                fromPartial(object: Partial<_142.PeriodicVestingAccount>): _142.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _142.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.PermanentLockedAccount;
                fromPartial(object: Partial<_142.PermanentLockedAccount>): _142.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _141.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.MsgCreateVestingAccount;
                fromPartial(object: Partial<_141.MsgCreateVestingAccount>): _141.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _141.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _141.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreateVestingAccountResponse>): _141.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _141.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_141.MsgCreatePermanentLockedAccount>): _141.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _141.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _141.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePermanentLockedAccountResponse>): _141.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _141.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_141.MsgCreatePeriodicVestingAccount>): _141.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _141.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _141.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePeriodicVestingAccountResponse>): _141.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _245.MsgClientImpl;
                };
                bank: {
                    v1beta1: _246.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _247.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _248.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _249.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _250.MsgClientImpl;
                };
                gov: {
                    v1: _251.MsgClientImpl;
                    v1beta1: _252.MsgClientImpl;
                };
                group: {
                    v1: _253.MsgClientImpl;
                };
                nft: {
                    v1beta1: _254.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _255.MsgClientImpl;
                };
                staking: {
                    v1beta1: _256.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _257.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _258.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _49.QueryConfigRequest): Promise<_49.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                        account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                        accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                        addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _56.QueryGrantsRequest): Promise<_56.QueryGrantsResponse>;
                        granterGrants(request: _56.QueryGranterGrantsRequest): Promise<_56.QueryGranterGrantsResponse>;
                        granteeGrants(request: _56.QueryGranteeGrantsRequest): Promise<_56.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _61.QueryBalanceRequest): Promise<_61.QueryBalanceResponse>;
                        allBalances(request: _61.QueryAllBalancesRequest): Promise<_61.QueryAllBalancesResponse>;
                        spendableBalances(request: _61.QuerySpendableBalancesRequest): Promise<_61.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _61.QueryTotalSupplyRequest): Promise<_61.QueryTotalSupplyResponse>;
                        supplyOf(request: _61.QuerySupplyOfRequest): Promise<_61.QuerySupplyOfResponse>;
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        denomMetadata(request: _61.QueryDenomMetadataRequest): Promise<_61.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _61.QueryDenomsMetadataRequest): Promise<_61.QueryDenomsMetadataResponse>;
                        denomOwners(request: _61.QueryDenomOwnersRequest): Promise<_61.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _65.ConfigRequest): Promise<_65.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _72.GetNodeInfoRequest): Promise<_72.GetNodeInfoResponse>;
                            getSyncing(request?: _72.GetSyncingRequest): Promise<_72.GetSyncingResponse>;
                            getLatestBlock(request?: _72.GetLatestBlockRequest): Promise<_72.GetLatestBlockResponse>;
                            getBlockByHeight(request: _72.GetBlockByHeightRequest): Promise<_72.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _72.GetLatestValidatorSetRequest): Promise<_72.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _72.GetValidatorSetByHeightRequest): Promise<_72.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _72.ABCIQueryRequest): Promise<_72.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        validatorDistributionInfo(request: _88.QueryValidatorDistributionInfoRequest): Promise<_88.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _88.QueryValidatorOutstandingRewardsRequest): Promise<_88.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _88.QueryValidatorCommissionRequest): Promise<_88.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _88.QueryValidatorSlashesRequest): Promise<_88.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _88.QueryDelegationRewardsRequest): Promise<_88.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _88.QueryDelegationTotalRewardsRequest): Promise<_88.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _88.QueryDelegatorValidatorsRequest): Promise<_88.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _88.QueryDelegatorWithdrawAddressRequest): Promise<_88.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _88.QueryCommunityPoolRequest): Promise<_88.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                        allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                        allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                        allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                        proposals(request: _101.QueryProposalsRequest): Promise<_101.QueryProposalsResponse>;
                        vote(request: _101.QueryVoteRequest): Promise<_101.QueryVoteResponse>;
                        votes(request: _101.QueryVotesRequest): Promise<_101.QueryVotesResponse>;
                        params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        deposit(request: _101.QueryDepositRequest): Promise<_101.QueryDepositResponse>;
                        deposits(request: _101.QueryDepositsRequest): Promise<_101.QueryDepositsResponse>;
                        tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _105.QueryProposalRequest): Promise<_105.QueryProposalResponse>;
                        proposals(request: _105.QueryProposalsRequest): Promise<_105.QueryProposalsResponse>;
                        vote(request: _105.QueryVoteRequest): Promise<_105.QueryVoteResponse>;
                        votes(request: _105.QueryVotesRequest): Promise<_105.QueryVotesResponse>;
                        params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        deposit(request: _105.QueryDepositRequest): Promise<_105.QueryDepositResponse>;
                        deposits(request: _105.QueryDepositsRequest): Promise<_105.QueryDepositsResponse>;
                        tallyResult(request: _105.QueryTallyResultRequest): Promise<_105.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _109.QueryGroupInfoRequest): Promise<_109.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _109.QueryGroupPolicyInfoRequest): Promise<_109.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _109.QueryGroupMembersRequest): Promise<_109.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _109.QueryGroupsByAdminRequest): Promise<_109.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _109.QueryGroupPoliciesByGroupRequest): Promise<_109.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _109.QueryGroupPoliciesByAdminRequest): Promise<_109.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _109.QueryProposalRequest): Promise<_109.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _109.QueryProposalsByGroupPolicyRequest): Promise<_109.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _109.QueryVoteByProposalVoterRequest): Promise<_109.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _109.QueryVotesByProposalRequest): Promise<_109.QueryVotesByProposalResponse>;
                        votesByVoter(request: _109.QueryVotesByVoterRequest): Promise<_109.QueryVotesByVoterResponse>;
                        groupsByMember(request: _109.QueryGroupsByMemberRequest): Promise<_109.QueryGroupsByMemberResponse>;
                        tallyResult(request: _109.QueryTallyResultRequest): Promise<_109.QueryTallyResultResponse>;
                        groups(request?: _109.QueryGroupsRequest): Promise<_109.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        inflation(request?: _114.QueryInflationRequest): Promise<_114.QueryInflationResponse>;
                        annualProvisions(request?: _114.QueryAnnualProvisionsRequest): Promise<_114.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _119.QueryBalanceRequest): Promise<_119.QueryBalanceResponse>;
                        owner(request: _119.QueryOwnerRequest): Promise<_119.QueryOwnerResponse>;
                        supply(request: _119.QuerySupplyRequest): Promise<_119.QuerySupplyResponse>;
                        nFTs(request: _119.QueryNFTsRequest): Promise<_119.QueryNFTsResponse>;
                        nFT(request: _119.QueryNFTRequest): Promise<_119.QueryNFTResponse>;
                        class(request: _119.QueryClassRequest): Promise<_119.QueryClassResponse>;
                        classes(request?: _119.QueryClassesRequest): Promise<_119.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                        subspaces(request?: _125.QuerySubspacesRequest): Promise<_125.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                        signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                        validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                        validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                        unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                        delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                        pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                        getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                        broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                        getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                        getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                        appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                        authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
