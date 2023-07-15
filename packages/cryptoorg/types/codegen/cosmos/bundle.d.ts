import * as _17 from "./app/module/v1alpha1/module";
import * as _18 from "./app/v1alpha1/config";
import * as _19 from "./app/v1alpha1/module";
import * as _20 from "./app/v1alpha1/query";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v1beta1/reflection";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/snapshots/v1beta1/snapshot";
import * as _41 from "./base/store/v1beta1/commit_info";
import * as _42 from "./base/store/v1beta1/listening";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/tendermint/v1beta1/types";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/tx";
import * as _50 from "./crypto/ed25519/keys";
import * as _51 from "./crypto/hd/v1/hd";
import * as _52 from "./crypto/keyring/v1/record";
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
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _86 from "./nft/v1beta1/event";
import * as _87 from "./nft/v1beta1/genesis";
import * as _88 from "./nft/v1beta1/nft";
import * as _89 from "./nft/v1beta1/query";
import * as _90 from "./nft/v1beta1/tx";
import * as _91 from "./orm/module/v1alpha1/module";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/query";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _211 from "./app/v1alpha1/query.rpc.Query";
import * as _212 from "./auth/v1beta1/query.rpc.Query";
import * as _213 from "./authz/v1beta1/query.rpc.Query";
import * as _214 from "./bank/v1beta1/query.rpc.Query";
import * as _215 from "./base/node/v1beta1/query.rpc.Service";
import * as _216 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _217 from "./distribution/v1beta1/query.rpc.Query";
import * as _218 from "./evidence/v1beta1/query.rpc.Query";
import * as _219 from "./feegrant/v1beta1/query.rpc.Query";
import * as _220 from "./gov/v1/query.rpc.Query";
import * as _221 from "./gov/v1beta1/query.rpc.Query";
import * as _222 from "./group/v1/query.rpc.Query";
import * as _223 from "./mint/v1beta1/query.rpc.Query";
import * as _224 from "./nft/v1beta1/query.rpc.Query";
import * as _225 from "./params/v1beta1/query.rpc.Query";
import * as _226 from "./slashing/v1beta1/query.rpc.Query";
import * as _227 from "./staking/v1beta1/query.rpc.Query";
import * as _228 from "./tx/v1beta1/service.rpc.Service";
import * as _229 from "./upgrade/v1beta1/query.rpc.Query";
import * as _230 from "./authz/v1beta1/tx.rpc.msg";
import * as _231 from "./bank/v1beta1/tx.rpc.msg";
import * as _232 from "./crisis/v1beta1/tx.rpc.msg";
import * as _233 from "./distribution/v1beta1/tx.rpc.msg";
import * as _234 from "./evidence/v1beta1/tx.rpc.msg";
import * as _235 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _236 from "./gov/v1/tx.rpc.msg";
import * as _237 from "./gov/v1beta1/tx.rpc.msg";
import * as _238 from "./group/v1/tx.rpc.msg";
import * as _239 from "./nft/v1beta1/tx.rpc.msg";
import * as _240 from "./slashing/v1beta1/tx.rpc.msg";
import * as _241 from "./staking/v1beta1/tx.rpc.msg";
import * as _242 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _243 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _17.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _17.Module;
                    fromPartial(_: Partial<_17.Module>): _17.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _20.QueryConfigRequest): Promise<_20.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _20.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.QueryConfigRequest;
                fromPartial(_: Partial<_20.QueryConfigRequest>): _20.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _20.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryConfigResponse;
                fromPartial(object: Partial<_20.QueryConfigResponse>): _20.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _19.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.ModuleDescriptor;
                fromPartial(object: Partial<_19.ModuleDescriptor>): _19.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _19.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.PackageReference;
                fromPartial(object: Partial<_19.PackageReference>): _19.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _19.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MigrateFromInfo;
                fromPartial(object: Partial<_19.MigrateFromInfo>): _19.MigrateFromInfo;
            };
            Config: {
                encode(message: _18.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.Config;
                fromPartial(object: Partial<_18.Config>): _18.Config;
            };
            ModuleConfig: {
                encode(message: _18.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.ModuleConfig;
                fromPartial(object: Partial<_18.ModuleConfig>): _18.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                accountAddressByID(request: _23.QueryAccountAddressByIDRequest): Promise<_23.QueryAccountAddressByIDResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                moduleAccounts(request?: _23.QueryModuleAccountsRequest): Promise<_23.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _23.QueryModuleAccountByNameRequest): Promise<_23.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _23.Bech32PrefixRequest): Promise<_23.Bech32PrefixResponse>;
                addressBytesToString(request: _23.AddressBytesToStringRequest): Promise<_23.AddressBytesToStringResponse>;
                addressStringToBytes(request: _23.AddressStringToBytesRequest): Promise<_23.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _23.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountsRequest;
                fromPartial(object: Partial<_23.QueryAccountsRequest>): _23.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _23.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountsResponse;
                fromPartial(object: Partial<_23.QueryAccountsResponse>): _23.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _23.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountRequest;
                fromPartial(object: Partial<_23.QueryAccountRequest>): _23.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _23.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountResponse;
                fromPartial(object: Partial<_23.QueryAccountResponse>): _23.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _23.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_23.QueryModuleAccountsRequest>): _23.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _23.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_23.QueryModuleAccountsResponse>): _23.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _23.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_23.QueryModuleAccountByNameRequest>): _23.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _23.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_23.QueryModuleAccountByNameResponse>): _23.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _23.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.Bech32PrefixRequest;
                fromPartial(_: Partial<_23.Bech32PrefixRequest>): _23.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _23.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Bech32PrefixResponse;
                fromPartial(object: Partial<_23.Bech32PrefixResponse>): _23.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _23.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.AddressBytesToStringRequest;
                fromPartial(object: Partial<_23.AddressBytesToStringRequest>): _23.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _23.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.AddressBytesToStringResponse;
                fromPartial(object: Partial<_23.AddressBytesToStringResponse>): _23.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _23.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.AddressStringToBytesRequest;
                fromPartial(object: Partial<_23.AddressStringToBytesRequest>): _23.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _23.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.AddressStringToBytesResponse;
                fromPartial(object: Partial<_23.AddressStringToBytesResponse>): _23.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _23.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_23.QueryAccountAddressByIDRequest>): _23.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _23.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_23.QueryAccountAddressByIDResponse>): _23.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            };
            BaseAccount: {
                encode(message: _21.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.BaseAccount;
                fromPartial(object: Partial<_21.BaseAccount>): _21.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _21.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ModuleAccount;
                fromPartial(object: Partial<_21.ModuleAccount>): _21.ModuleAccount;
            };
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _28.MsgGrant) => {
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
                    }) => _28.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _28.MsgExec) => {
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
                    }) => _28.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _28.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _28.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _28.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgGrant;
                fromPartial(object: Partial<_28.MsgGrant>): _28.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _28.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgExecResponse;
                fromPartial(object: Partial<_28.MsgExecResponse>): _28.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _28.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgExec;
                fromPartial(object: Partial<_28.MsgExec>): _28.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _28.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgGrantResponse;
                fromPartial(_: Partial<_28.MsgGrantResponse>): _28.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _28.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgRevoke;
                fromPartial(object: Partial<_28.MsgRevoke>): _28.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _28.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgRevokeResponse;
                fromPartial(_: Partial<_28.MsgRevokeResponse>): _28.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _27.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGrantsRequest;
                fromPartial(object: Partial<_27.QueryGrantsRequest>): _27.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _27.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGrantsResponse;
                fromPartial(object: Partial<_27.QueryGrantsResponse>): _27.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _27.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranterGrantsRequest>): _27.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _27.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranterGrantsResponse>): _27.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _27.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranteeGrantsRequest>): _27.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _27.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranteeGrantsResponse>): _27.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
            EventGrant: {
                encode(message: _25.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.EventGrant;
                fromPartial(object: Partial<_25.EventGrant>): _25.EventGrant;
            };
            EventRevoke: {
                encode(message: _25.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.EventRevoke;
                fromPartial(object: Partial<_25.EventRevoke>): _25.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _24.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GenericAuthorization;
                fromPartial(object: Partial<_24.GenericAuthorization>): _24.GenericAuthorization;
            };
            Grant: {
                encode(message: _24.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Grant;
                fromPartial(object: Partial<_24.Grant>): _24.Grant;
            };
            GrantAuthorization: {
                encode(message: _24.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GrantAuthorization;
                fromPartial(object: Partial<_24.GrantAuthorization>): _24.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _24.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GrantQueueItem;
                fromPartial(object: Partial<_24.GrantQueueItem>): _24.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _33.MsgSend) => {
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
                    }) => _33.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _33.MsgMultiSend) => {
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
                    }) => _33.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _33.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgSend;
                fromPartial(object: Partial<_33.MsgSend>): _33.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _33.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgSendResponse;
                fromPartial(_: Partial<_33.MsgSendResponse>): _33.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _33.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgMultiSend;
                fromPartial(object: Partial<_33.MsgMultiSend>): _33.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _33.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgMultiSendResponse;
                fromPartial(_: Partial<_33.MsgMultiSendResponse>): _33.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _32.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryBalanceRequest;
                fromPartial(object: Partial<_32.QueryBalanceRequest>): _32.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _32.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryBalanceResponse;
                fromPartial(object: Partial<_32.QueryBalanceResponse>): _32.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _32.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAllBalancesRequest;
                fromPartial(object: Partial<_32.QueryAllBalancesRequest>): _32.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _32.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAllBalancesResponse;
                fromPartial(object: Partial<_32.QueryAllBalancesResponse>): _32.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _32.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_32.QuerySpendableBalancesRequest>): _32.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _32.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_32.QuerySpendableBalancesResponse>): _32.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _32.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_32.QueryTotalSupplyRequest>): _32.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _32.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_32.QueryTotalSupplyResponse>): _32.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _32.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySupplyOfRequest;
                fromPartial(object: Partial<_32.QuerySupplyOfRequest>): _32.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _32.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySupplyOfResponse;
                fromPartial(object: Partial<_32.QuerySupplyOfResponse>): _32.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _32.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomsMetadataRequest>): _32.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _32.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomsMetadataResponse>): _32.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _32.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomMetadataRequest>): _32.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _32.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomMetadataResponse>): _32.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _32.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_32.QueryDenomOwnersRequest>): _32.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _32.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.DenomOwner;
                fromPartial(object: Partial<_32.DenomOwner>): _32.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _32.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_32.QueryDenomOwnersResponse>): _32.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            Balance: {
                encode(message: _31.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Balance;
                fromPartial(object: Partial<_31.Balance>): _31.Balance;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
            SendEnabled: {
                encode(message: _30.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.SendEnabled;
                fromPartial(object: Partial<_30.SendEnabled>): _30.SendEnabled;
            };
            Input: {
                encode(message: _30.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Input;
                fromPartial(object: Partial<_30.Input>): _30.Input;
            };
            Output: {
                encode(message: _30.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Output;
                fromPartial(object: Partial<_30.Output>): _30.Output;
            };
            Supply: {
                encode(message: _30.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Supply;
                fromPartial(object: Partial<_30.Supply>): _30.Supply;
            };
            DenomUnit: {
                encode(message: _30.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.DenomUnit;
                fromPartial(object: Partial<_30.DenomUnit>): _30.DenomUnit;
            };
            Metadata: {
                encode(message: _30.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Metadata;
                fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
            };
            SendAuthorization: {
                encode(message: _29.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.SendAuthorization;
                fromPartial(object: Partial<_29.SendAuthorization>): _29.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _34.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _34.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _34.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                };
                Attribute: {
                    encode(message: _34.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                };
                GasInfo: {
                    encode(message: _34.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                };
                Result: {
                    encode(message: _34.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                };
                SimulationResponse: {
                    encode(message: _34.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                };
                MsgData: {
                    encode(message: _34.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                };
                TxMsgData: {
                    encode(message: _34.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _34.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _35.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                };
                Pair: {
                    encode(message: _35.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _215.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _36.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _36.ConfigRequest;
                    fromPartial(_: Partial<_36.ConfigRequest>): _36.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _36.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.ConfigResponse;
                    fromPartial(object: Partial<_36.ConfigResponse>): _36.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _37.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.PageRequest;
                    fromPartial(object: Partial<_37.PageRequest>): _37.PageRequest;
                };
                PageResponse: {
                    encode(message: _37.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.PageResponse;
                    fromPartial(object: Partial<_37.PageResponse>): _37.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _38.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_38.ListAllInterfacesRequest>): _38.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _38.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_38.ListAllInterfacesResponse>): _38.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _38.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ListImplementationsRequest;
                    fromPartial(object: Partial<_38.ListImplementationsRequest>): _38.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _38.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ListImplementationsResponse;
                    fromPartial(object: Partial<_38.ListImplementationsResponse>): _38.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _39.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.AppDescriptor;
                    fromPartial(object: Partial<_39.AppDescriptor>): _39.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _39.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.TxDescriptor;
                    fromPartial(object: Partial<_39.TxDescriptor>): _39.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _39.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.AuthnDescriptor;
                    fromPartial(object: Partial<_39.AuthnDescriptor>): _39.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _39.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SigningModeDescriptor;
                    fromPartial(object: Partial<_39.SigningModeDescriptor>): _39.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _39.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.ChainDescriptor;
                    fromPartial(object: Partial<_39.ChainDescriptor>): _39.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _39.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.CodecDescriptor;
                    fromPartial(object: Partial<_39.CodecDescriptor>): _39.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _39.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.InterfaceDescriptor;
                    fromPartial(object: Partial<_39.InterfaceDescriptor>): _39.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _39.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_39.InterfaceImplementerDescriptor>): _39.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _39.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_39.InterfaceAcceptingMessageDescriptor>): _39.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _39.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.ConfigurationDescriptor;
                    fromPartial(object: Partial<_39.ConfigurationDescriptor>): _39.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _39.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.MsgDescriptor;
                    fromPartial(object: Partial<_39.MsgDescriptor>): _39.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _39.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_39.GetAuthnDescriptorRequest>): _39.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _39.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_39.GetAuthnDescriptorResponse>): _39.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _39.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_39.GetChainDescriptorRequest>): _39.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _39.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_39.GetChainDescriptorResponse>): _39.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _39.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_39.GetCodecDescriptorRequest>): _39.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _39.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_39.GetCodecDescriptorResponse>): _39.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _39.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_39.GetConfigurationDescriptorRequest>): _39.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _39.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_39.GetConfigurationDescriptorResponse>): _39.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _39.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_39.GetQueryServicesDescriptorRequest>): _39.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _39.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_39.GetQueryServicesDescriptorResponse>): _39.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _39.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _39.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_39.GetTxDescriptorRequest>): _39.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _39.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_39.GetTxDescriptorResponse>): _39.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _39.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.QueryServicesDescriptor;
                    fromPartial(object: Partial<_39.QueryServicesDescriptor>): _39.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _39.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.QueryServiceDescriptor;
                    fromPartial(object: Partial<_39.QueryServiceDescriptor>): _39.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _39.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.QueryMethodDescriptor;
                    fromPartial(object: Partial<_39.QueryMethodDescriptor>): _39.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _40.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.Snapshot;
                    fromPartial(object: Partial<_40.Snapshot>): _40.Snapshot;
                };
                Metadata: {
                    encode(message: _40.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.Metadata;
                    fromPartial(object: Partial<_40.Metadata>): _40.Metadata;
                };
                SnapshotItem: {
                    encode(message: _40.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotItem;
                    fromPartial(object: Partial<_40.SnapshotItem>): _40.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _40.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotStoreItem;
                    fromPartial(object: Partial<_40.SnapshotStoreItem>): _40.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _40.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotIAVLItem;
                    fromPartial(object: Partial<_40.SnapshotIAVLItem>): _40.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _40.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_40.SnapshotExtensionMeta>): _40.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _40.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_40.SnapshotExtensionPayload>): _40.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _40.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotKVItem;
                    fromPartial(object: Partial<_40.SnapshotKVItem>): _40.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _40.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SnapshotSchema;
                    fromPartial(object: Partial<_40.SnapshotSchema>): _40.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _42.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.StoreKVPair;
                    fromPartial(object: Partial<_42.StoreKVPair>): _42.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _42.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.BlockMetadata;
                    fromPartial(object: Partial<_42.BlockMetadata>): _42.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _42.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_42.BlockMetadata_DeliverTx>): _42.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _41.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.CommitInfo;
                    fromPartial(object: Partial<_41.CommitInfo>): _41.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _41.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.StoreInfo;
                    fromPartial(object: Partial<_41.StoreInfo>): _41.StoreInfo;
                };
                CommitID: {
                    encode(message: _41.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.CommitID;
                    fromPartial(object: Partial<_41.CommitID>): _41.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _216.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                    getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                    getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                    getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _43.ABCIQueryRequest): Promise<_43.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _44.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Block;
                    fromPartial(object: Partial<_44.Block>): _44.Block;
                };
                Header: {
                    encode(message: _44.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Header;
                    fromPartial(object: Partial<_44.Header>): _44.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _43.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightRequest>): _43.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _43.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightResponse>): _43.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _43.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetRequest>): _43.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _43.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetResponse>): _43.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _43.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Validator;
                    fromPartial(object: Partial<_43.Validator>): _43.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _43.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_43.GetBlockByHeightRequest>): _43.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _43.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_43.GetBlockByHeightResponse>): _43.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _43.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetLatestBlockRequest;
                    fromPartial(_: Partial<_43.GetLatestBlockRequest>): _43.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _43.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestBlockResponse;
                    fromPartial(object: Partial<_43.GetLatestBlockResponse>): _43.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _43.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetSyncingRequest;
                    fromPartial(_: Partial<_43.GetSyncingRequest>): _43.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _43.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetSyncingResponse;
                    fromPartial(object: Partial<_43.GetSyncingResponse>): _43.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _43.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetNodeInfoRequest;
                    fromPartial(_: Partial<_43.GetNodeInfoRequest>): _43.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _43.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetNodeInfoResponse;
                    fromPartial(object: Partial<_43.GetNodeInfoResponse>): _43.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _43.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.VersionInfo;
                    fromPartial(object: Partial<_43.VersionInfo>): _43.VersionInfo;
                };
                Module: {
                    encode(message: _43.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _43.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ABCIQueryRequest;
                    fromPartial(object: Partial<_43.ABCIQueryRequest>): _43.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _43.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ABCIQueryResponse;
                    fromPartial(object: Partial<_43.ABCIQueryResponse>): _43.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _43.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ProofOp;
                    fromPartial(object: Partial<_43.ProofOp>): _43.ProofOp;
                };
                ProofOps: {
                    encode(message: _43.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ProofOps;
                    fromPartial(object: Partial<_43.ProofOps>): _43.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _45.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Coin;
                fromPartial(object: Partial<_45.Coin>): _45.Coin;
            };
            DecCoin: {
                encode(message: _45.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.DecCoin;
                fromPartial(object: Partial<_45.DecCoin>): _45.DecCoin;
            };
            IntProto: {
                encode(message: _45.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.IntProto;
                fromPartial(object: Partial<_45.IntProto>): _45.IntProto;
            };
            DecProto: {
                encode(message: _45.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.DecProto;
                fromPartial(object: Partial<_45.DecProto>): _45.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _47.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisOwners;
                fromPartial(object: Partial<_47.GenesisOwners>): _47.GenesisOwners;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            Capability: {
                encode(message: _46.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Capability;
                fromPartial(object: Partial<_46.Capability>): _46.Capability;
            };
            Owner: {
                encode(message: _46.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Owner;
                fromPartial(object: Partial<_46.Owner>): _46.Owner;
            };
            CapabilityOwners: {
                encode(message: _46.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.CapabilityOwners;
                fromPartial(object: Partial<_46.CapabilityOwners>): _46.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _49.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _49.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _49.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgVerifyInvariant;
                fromPartial(object: Partial<_49.MsgVerifyInvariant>): _49.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _49.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_49.MsgVerifyInvariantResponse>): _49.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _50.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
            };
            PrivKey: {
                encode(message: _50.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _51.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.BIP44Params;
                    fromPartial(object: Partial<_51.BIP44Params>): _51.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _52.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Record;
                    fromPartial(object: Partial<_52.Record>): _52.Record;
                };
                Record_Local: {
                    encode(message: _52.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Record_Local;
                    fromPartial(object: Partial<_52.Record_Local>): _52.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _52.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Record_Ledger;
                    fromPartial(object: Partial<_52.Record_Ledger>): _52.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _52.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.Record_Multi;
                    fromPartial(_: Partial<_52.Record_Multi>): _52.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _52.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.Record_Offline;
                    fromPartial(_: Partial<_52.Record_Offline>): _52.Record_Offline;
                };
            };
        }
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
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
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
                encode(message: _59.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorRewardResponse>): _59.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _59.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommission>): _59.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _59.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommissionResponse>): _59.MsgWithdrawValidatorCommissionResponse;
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
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
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
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
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
        const v1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
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
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
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
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
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
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
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
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
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
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _72.MsgSubmitProposal) => {
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
                    }) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _72.MsgExecLegacyContent) => {
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
                    }) => _72.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _72.MsgVote) => {
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
                    }) => _72.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _72.MsgVoteWeighted) => {
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
                    }) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
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
            MsgExecLegacyContent: {
                encode(message: _72.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgExecLegacyContent;
                fromPartial(object: Partial<_72.MsgExecLegacyContent>): _72.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _72.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_72.MsgExecLegacyContentResponse>): _72.MsgExecLegacyContentResponse;
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
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _76.MsgSubmitProposal) => {
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
                    }) => _76.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _76.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _76.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _76.MsgVoteWeighted) => {
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
                    }) => _76.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _76.MsgDeposit) => {
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
                    }) => _76.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _76.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgSubmitProposal;
                fromPartial(object: Partial<_76.MsgSubmitProposal>): _76.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _76.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_76.MsgSubmitProposalResponse>): _76.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _76.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgVote;
                fromPartial(object: Partial<_76.MsgVote>): _76.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _76.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgVoteResponse;
                fromPartial(_: Partial<_76.MsgVoteResponse>): _76.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _76.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgVoteWeighted;
                fromPartial(object: Partial<_76.MsgVoteWeighted>): _76.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _76.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_76.MsgVoteWeightedResponse>): _76.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _76.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgDeposit;
                fromPartial(object: Partial<_76.MsgDeposit>): _76.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _76.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgDepositResponse;
                fromPartial(_: Partial<_76.MsgDepositResponse>): _76.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _75.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryProposalRequest;
                fromPartial(object: Partial<_75.QueryProposalRequest>): _75.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _75.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryProposalResponse;
                fromPartial(object: Partial<_75.QueryProposalResponse>): _75.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _75.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryProposalsRequest;
                fromPartial(object: Partial<_75.QueryProposalsRequest>): _75.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _75.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryProposalsResponse;
                fromPartial(object: Partial<_75.QueryProposalsResponse>): _75.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _75.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryVoteRequest;
                fromPartial(object: Partial<_75.QueryVoteRequest>): _75.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _75.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryVoteResponse;
                fromPartial(object: Partial<_75.QueryVoteResponse>): _75.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _75.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryVotesRequest;
                fromPartial(object: Partial<_75.QueryVotesRequest>): _75.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _75.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryVotesResponse;
                fromPartial(object: Partial<_75.QueryVotesResponse>): _75.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryParamsRequest;
                fromPartial(object: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _75.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDepositRequest;
                fromPartial(object: Partial<_75.QueryDepositRequest>): _75.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _75.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDepositResponse;
                fromPartial(object: Partial<_75.QueryDepositResponse>): _75.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _75.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDepositsRequest;
                fromPartial(object: Partial<_75.QueryDepositsRequest>): _75.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _75.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryDepositsResponse;
                fromPartial(object: Partial<_75.QueryDepositsResponse>): _75.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _75.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryTallyResultRequest;
                fromPartial(object: Partial<_75.QueryTallyResultRequest>): _75.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _75.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryTallyResultResponse;
                fromPartial(object: Partial<_75.QueryTallyResultResponse>): _75.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _74.VoteOption;
            voteOptionToJSON(object: _74.VoteOption): string;
            proposalStatusFromJSON(object: any): _74.ProposalStatus;
            proposalStatusToJSON(object: _74.ProposalStatus): string;
            VoteOption: typeof _74.VoteOption;
            VoteOptionSDKType: typeof _74.VoteOption;
            ProposalStatus: typeof _74.ProposalStatus;
            ProposalStatusSDKType: typeof _74.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _74.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.WeightedVoteOption;
                fromPartial(object: Partial<_74.WeightedVoteOption>): _74.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _74.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.TextProposal;
                fromPartial(object: Partial<_74.TextProposal>): _74.TextProposal;
            };
            Deposit: {
                encode(message: _74.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Deposit;
                fromPartial(object: Partial<_74.Deposit>): _74.Deposit;
            };
            Proposal: {
                encode(message: _74.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Proposal;
                fromPartial(object: Partial<_74.Proposal>): _74.Proposal;
            };
            TallyResult: {
                encode(message: _74.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.TallyResult;
                fromPartial(object: Partial<_74.TallyResult>): _74.TallyResult;
            };
            Vote: {
                encode(message: _74.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.Vote;
                fromPartial(object: Partial<_74.Vote>): _74.Vote;
            };
            DepositParams: {
                encode(message: _74.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.DepositParams;
                fromPartial(object: Partial<_74.DepositParams>): _74.DepositParams;
            };
            VotingParams: {
                encode(message: _74.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.VotingParams;
                fromPartial(object: Partial<_74.VotingParams>): _74.VotingParams;
            };
            TallyParams: {
                encode(message: _74.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.TallyParams;
                fromPartial(object: Partial<_74.TallyParams>): _74.TallyParams;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _80.MsgCreateGroup): {
                        typeUrl: string;
                        value: _80.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _80.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _80.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _80.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _80.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _80.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _80.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _80.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _80.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _80.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _80.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _80.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _80.MsgWithdrawProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    exec(value: _80.MsgExec): {
                        typeUrl: string;
                        value: _80.MsgExec;
                    };
                    leaveGroup(value: _80.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _80.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _80.MsgCreateGroup) => {
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
                    }) => _80.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _80.MsgUpdateGroupMembers) => {
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
                    }) => _80.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _80.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _80.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _80.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _80.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _80.MsgCreateGroupPolicy) => {
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
                    }) => _80.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _80.MsgCreateGroupWithPolicy) => {
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
                    }) => _80.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _80.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _80.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _80.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _80.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _80.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _80.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _80.MsgSubmitProposal) => {
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
                    }) => _80.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _80.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _80.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _80.MsgVote) => {
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
                    }) => _80.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _80.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _80.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _80.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _80.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _81.VoteOption;
            voteOptionToJSON(object: _81.VoteOption): string;
            proposalStatusFromJSON(object: any): _81.ProposalStatus;
            proposalStatusToJSON(object: _81.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _81.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _81.ProposalExecutorResult): string;
            VoteOption: typeof _81.VoteOption;
            VoteOptionSDKType: typeof _81.VoteOption;
            ProposalStatus: typeof _81.ProposalStatus;
            ProposalStatusSDKType: typeof _81.ProposalStatus;
            ProposalExecutorResult: typeof _81.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _81.ProposalExecutorResult;
            Member: {
                encode(message: _81.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Member;
                fromPartial(object: Partial<_81.Member>): _81.Member;
            };
            MemberRequest: {
                encode(message: _81.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MemberRequest;
                fromPartial(object: Partial<_81.MemberRequest>): _81.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _81.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_81.ThresholdDecisionPolicy>): _81.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _81.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.PercentageDecisionPolicy;
                fromPartial(object: Partial<_81.PercentageDecisionPolicy>): _81.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _81.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.DecisionPolicyWindows;
                fromPartial(object: Partial<_81.DecisionPolicyWindows>): _81.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _81.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.GroupInfo;
                fromPartial(object: Partial<_81.GroupInfo>): _81.GroupInfo;
            };
            GroupMember: {
                encode(message: _81.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.GroupMember;
                fromPartial(object: Partial<_81.GroupMember>): _81.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _81.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.GroupPolicyInfo;
                fromPartial(object: Partial<_81.GroupPolicyInfo>): _81.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _81.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Proposal;
                fromPartial(object: Partial<_81.Proposal>): _81.Proposal;
            };
            TallyResult: {
                encode(message: _81.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.TallyResult;
                fromPartial(object: Partial<_81.TallyResult>): _81.TallyResult;
            };
            Vote: {
                encode(message: _81.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Vote;
                fromPartial(object: Partial<_81.Vote>): _81.Vote;
            };
            execFromJSON(object: any): _80.Exec;
            execToJSON(object: _80.Exec): string;
            Exec: typeof _80.Exec;
            ExecSDKType: typeof _80.Exec;
            MsgCreateGroup: {
                encode(message: _80.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroup;
                fromPartial(object: Partial<_80.MsgCreateGroup>): _80.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _80.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroupResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupResponse>): _80.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _80.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_80.MsgUpdateGroupMembers>): _80.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _80.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupMembersResponse>): _80.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _80.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_80.MsgUpdateGroupAdmin>): _80.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _80.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupAdminResponse>): _80.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _80.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_80.MsgUpdateGroupMetadata>): _80.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _80.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupMetadataResponse>): _80.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _80.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicy>): _80.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _80.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupPolicyResponse>): _80.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _80.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyAdmin>): _80.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _80.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicy>): _80.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _80.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_80.MsgCreateGroupWithPolicyResponse>): _80.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _80.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyAdminResponse>): _80.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _80.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyDecisionPolicy>): _80.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _80.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyDecisionPolicyResponse>): _80.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _80.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_80.MsgUpdateGroupPolicyMetadata>): _80.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _80.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_80.MsgUpdateGroupPolicyMetadataResponse>): _80.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _80.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _80.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgWithdrawProposal;
                fromPartial(object: Partial<_80.MsgWithdrawProposal>): _80.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _80.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_80.MsgWithdrawProposalResponse>): _80.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _80.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _80.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _80.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgExec;
                fromPartial(object: Partial<_80.MsgExec>): _80.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _80.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgExecResponse;
                fromPartial(object: Partial<_80.MsgExecResponse>): _80.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _80.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgLeaveGroup;
                fromPartial(object: Partial<_80.MsgLeaveGroup>): _80.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _80.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_80.MsgLeaveGroupResponse>): _80.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _79.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupInfoRequest;
                fromPartial(object: Partial<_79.QueryGroupInfoRequest>): _79.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _79.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupInfoResponse;
                fromPartial(object: Partial<_79.QueryGroupInfoResponse>): _79.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _79.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoRequest>): _79.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _79.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_79.QueryGroupPolicyInfoResponse>): _79.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _79.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupMembersRequest;
                fromPartial(object: Partial<_79.QueryGroupMembersRequest>): _79.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _79.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupMembersResponse;
                fromPartial(object: Partial<_79.QueryGroupMembersResponse>): _79.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _79.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_79.QueryGroupsByAdminRequest>): _79.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _79.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_79.QueryGroupsByAdminResponse>): _79.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _79.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupRequest>): _79.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _79.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByGroupResponse>): _79.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _79.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminRequest>): _79.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _79.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_79.QueryGroupPoliciesByAdminResponse>): _79.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _79.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _79.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _79.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyRequest>): _79.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _79.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_79.QueryProposalsByGroupPolicyResponse>): _79.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _79.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterRequest>): _79.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _79.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_79.QueryVoteByProposalVoterResponse>): _79.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _79.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_79.QueryVotesByProposalRequest>): _79.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _79.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_79.QueryVotesByProposalResponse>): _79.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _79.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_79.QueryVotesByVoterRequest>): _79.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _79.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_79.QueryVotesByVoterResponse>): _79.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _79.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_79.QueryGroupsByMemberRequest>): _79.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _79.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_79.QueryGroupsByMemberResponse>): _79.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _79.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _79.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _79.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsRequest;
                fromPartial(object: Partial<_79.QueryGroupsRequest>): _79.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _79.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryGroupsResponse;
                fromPartial(object: Partial<_79.QueryGroupsResponse>): _79.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _77.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventCreateGroup;
                fromPartial(object: Partial<_77.EventCreateGroup>): _77.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _77.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventUpdateGroup;
                fromPartial(object: Partial<_77.EventUpdateGroup>): _77.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _77.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventCreateGroupPolicy;
                fromPartial(object: Partial<_77.EventCreateGroupPolicy>): _77.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _77.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_77.EventUpdateGroupPolicy>): _77.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _77.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventSubmitProposal;
                fromPartial(object: Partial<_77.EventSubmitProposal>): _77.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _77.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventWithdrawProposal;
                fromPartial(object: Partial<_77.EventWithdrawProposal>): _77.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _77.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventVote;
                fromPartial(object: Partial<_77.EventVote>): _77.EventVote;
            };
            EventExec: {
                encode(message: _77.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventExec;
                fromPartial(object: Partial<_77.EventExec>): _77.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _77.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventLeaveGroup;
                fromPartial(object: Partial<_77.EventLeaveGroup>): _77.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _77.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.EventProposalPruned;
                fromPartial(object: Partial<_77.EventProposalPruned>): _77.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
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
            QueryInflationRequest: {
                encode(_: _84.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _84.QueryInflationRequest;
                fromPartial(_: Partial<_84.QueryInflationRequest>): _84.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _84.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryInflationResponse;
                fromPartial(object: Partial<_84.QueryInflationResponse>): _84.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _84.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _84.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_84.QueryAnnualProvisionsRequest>): _84.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _84.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_84.QueryAnnualProvisionsResponse>): _84.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _83.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Minter;
                fromPartial(object: Partial<_83.Minter>): _83.Minter;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Params;
                fromPartial(object: Partial<_83.Params>): _83.Params;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _89.QueryBalanceRequest): Promise<_89.QueryBalanceResponse>;
                owner(request: _89.QueryOwnerRequest): Promise<_89.QueryOwnerResponse>;
                supply(request: _89.QuerySupplyRequest): Promise<_89.QuerySupplyResponse>;
                nFTs(request: _89.QueryNFTsRequest): Promise<_89.QueryNFTsResponse>;
                nFT(request: _89.QueryNFTRequest): Promise<_89.QueryNFTResponse>;
                class(request: _89.QueryClassRequest): Promise<_89.QueryClassResponse>;
                classes(request?: _89.QueryClassesRequest): Promise<_89.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _90.MsgSend) => {
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
                    }) => _90.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _90.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MsgSend;
                fromPartial(object: Partial<_90.MsgSend>): _90.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _90.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.MsgSendResponse;
                fromPartial(_: Partial<_90.MsgSendResponse>): _90.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _89.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryBalanceRequest;
                fromPartial(object: Partial<_89.QueryBalanceRequest>): _89.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _89.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryBalanceResponse;
                fromPartial(object: Partial<_89.QueryBalanceResponse>): _89.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _89.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryOwnerRequest;
                fromPartial(object: Partial<_89.QueryOwnerRequest>): _89.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _89.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryOwnerResponse;
                fromPartial(object: Partial<_89.QueryOwnerResponse>): _89.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _89.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QuerySupplyRequest;
                fromPartial(object: Partial<_89.QuerySupplyRequest>): _89.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _89.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QuerySupplyResponse;
                fromPartial(object: Partial<_89.QuerySupplyResponse>): _89.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _89.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryNFTsRequest;
                fromPartial(object: Partial<_89.QueryNFTsRequest>): _89.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _89.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryNFTsResponse;
                fromPartial(object: Partial<_89.QueryNFTsResponse>): _89.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _89.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryNFTRequest;
                fromPartial(object: Partial<_89.QueryNFTRequest>): _89.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _89.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryNFTResponse;
                fromPartial(object: Partial<_89.QueryNFTResponse>): _89.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _89.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryClassRequest;
                fromPartial(object: Partial<_89.QueryClassRequest>): _89.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _89.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryClassResponse;
                fromPartial(object: Partial<_89.QueryClassResponse>): _89.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _89.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryClassesRequest;
                fromPartial(object: Partial<_89.QueryClassesRequest>): _89.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _89.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.QueryClassesResponse;
                fromPartial(object: Partial<_89.QueryClassesResponse>): _89.QueryClassesResponse;
            };
            Class: {
                encode(message: _88.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Class;
                fromPartial(object: Partial<_88.Class>): _88.Class;
            };
            NFT: {
                encode(message: _88.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.NFT;
                fromPartial(object: Partial<_88.NFT>): _88.NFT;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
            Entry: {
                encode(message: _87.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.Entry;
                fromPartial(object: Partial<_87.Entry>): _87.Entry;
            };
            EventSend: {
                encode(message: _86.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventSend;
                fromPartial(object: Partial<_86.EventSend>): _86.EventSend;
            };
            EventMint: {
                encode(message: _86.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventMint;
                fromPartial(object: Partial<_86.EventMint>): _86.EventMint;
            };
            EventBurn: {
                encode(message: _86.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventBurn;
                fromPartial(object: Partial<_86.EventBurn>): _86.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _91.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.Module;
                    fromPartial(_: Partial<_91.Module>): _91.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _92.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.TableDescriptor;
                fromPartial(object: Partial<_92.TableDescriptor>): _92.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _92.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_92.PrimaryKeyDescriptor>): _92.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _92.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_92.SecondaryIndexDescriptor>): _92.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _92.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.SingletonDescriptor;
                fromPartial(object: Partial<_92.SingletonDescriptor>): _92.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _93.StorageType;
            storageTypeToJSON(object: _93.StorageType): string;
            StorageType: typeof _93.StorageType;
            StorageTypeSDKType: typeof _93.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _93.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_93.ModuleSchemaDescriptor>): _93.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _93.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_93.ModuleSchemaDescriptor_FileEntry>): _93.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
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
            QuerySubspacesRequest: {
                encode(_: _95.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _95.QuerySubspacesRequest;
                fromPartial(_: Partial<_95.QuerySubspacesRequest>): _95.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _95.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QuerySubspacesResponse;
                fromPartial(object: Partial<_95.QuerySubspacesResponse>): _95.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _95.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.Subspace;
                fromPartial(object: Partial<_95.Subspace>): _95.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _94.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.ParameterChangeProposal;
                fromPartial(object: Partial<_94.ParameterChangeProposal>): _94.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _94.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.ParamChange;
                fromPartial(object: Partial<_94.ParamChange>): _94.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _99.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _99.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _99.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgUnjail;
                fromPartial(object: Partial<_99.MsgUnjail>): _99.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _99.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgUnjailResponse;
                fromPartial(_: Partial<_99.MsgUnjailResponse>): _99.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _98.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.ValidatorSigningInfo;
                fromPartial(object: Partial<_98.ValidatorSigningInfo>): _98.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _98.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.Params;
                fromPartial(object: Partial<_98.Params>): _98.Params;
            };
            QueryParamsRequest: {
                encode(_: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _97.QueryParamsRequest;
                fromPartial(_: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QueryParamsResponse;
                fromPartial(object: Partial<_97.QueryParamsResponse>): _97.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _97.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QuerySigningInfoRequest;
                fromPartial(object: Partial<_97.QuerySigningInfoRequest>): _97.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _97.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QuerySigningInfoResponse;
                fromPartial(object: Partial<_97.QuerySigningInfoResponse>): _97.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _97.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QuerySigningInfosRequest;
                fromPartial(object: Partial<_97.QuerySigningInfosRequest>): _97.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _97.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.QuerySigningInfosResponse;
                fromPartial(object: Partial<_97.QuerySigningInfosResponse>): _97.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GenesisState;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
            };
            SigningInfo: {
                encode(message: _96.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.SigningInfo;
                fromPartial(object: Partial<_96.SigningInfo>): _96.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _96.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorMissedBlocks;
                fromPartial(object: Partial<_96.ValidatorMissedBlocks>): _96.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _96.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MissedBlock;
                fromPartial(object: Partial<_96.MissedBlock>): _96.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _104.MsgCreateValidator) => {
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
                    }) => _104.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _104.MsgEditValidator) => {
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
                    }) => _104.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _104.MsgDelegate) => {
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
                    }) => _104.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _104.MsgBeginRedelegate) => {
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
                    }) => _104.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _104.MsgUndelegate) => {
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
                    }) => _104.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _104.MsgCancelUnbondingDelegation) => {
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
                    }) => _104.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _104.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCreateValidator;
                fromPartial(object: Partial<_104.MsgCreateValidator>): _104.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _104.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_104.MsgCreateValidatorResponse>): _104.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _104.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgEditValidator;
                fromPartial(object: Partial<_104.MsgEditValidator>): _104.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _104.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgEditValidatorResponse;
                fromPartial(_: Partial<_104.MsgEditValidatorResponse>): _104.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _104.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgDelegate;
                fromPartial(object: Partial<_104.MsgDelegate>): _104.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _104.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgDelegateResponse;
                fromPartial(_: Partial<_104.MsgDelegateResponse>): _104.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _104.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgBeginRedelegate;
                fromPartial(object: Partial<_104.MsgBeginRedelegate>): _104.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _104.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_104.MsgBeginRedelegateResponse>): _104.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _104.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUndelegate;
                fromPartial(object: Partial<_104.MsgUndelegate>): _104.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _104.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgUndelegateResponse;
                fromPartial(object: Partial<_104.MsgUndelegateResponse>): _104.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _104.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_104.MsgCancelUnbondingDelegation>): _104.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _104.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_104.MsgCancelUnbondingDelegationResponse>): _104.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _103.BondStatus;
            bondStatusToJSON(object: _103.BondStatus): string;
            BondStatus: typeof _103.BondStatus;
            BondStatusSDKType: typeof _103.BondStatus;
            HistoricalInfo: {
                encode(message: _103.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.HistoricalInfo;
                fromPartial(object: Partial<_103.HistoricalInfo>): _103.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _103.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.CommissionRates;
                fromPartial(object: Partial<_103.CommissionRates>): _103.CommissionRates;
            };
            Commission: {
                encode(message: _103.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Commission;
                fromPartial(object: Partial<_103.Commission>): _103.Commission;
            };
            Description: {
                encode(message: _103.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Description;
                fromPartial(object: Partial<_103.Description>): _103.Description;
            };
            Validator: {
                encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Validator;
                fromPartial(object: Partial<_103.Validator>): _103.Validator;
            };
            ValAddresses: {
                encode(message: _103.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ValAddresses;
                fromPartial(object: Partial<_103.ValAddresses>): _103.ValAddresses;
            };
            DVPair: {
                encode(message: _103.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DVPair;
                fromPartial(object: Partial<_103.DVPair>): _103.DVPair;
            };
            DVPairs: {
                encode(message: _103.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DVPairs;
                fromPartial(object: Partial<_103.DVPairs>): _103.DVPairs;
            };
            DVVTriplet: {
                encode(message: _103.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DVVTriplet;
                fromPartial(object: Partial<_103.DVVTriplet>): _103.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _103.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DVVTriplets;
                fromPartial(object: Partial<_103.DVVTriplets>): _103.DVVTriplets;
            };
            Delegation: {
                encode(message: _103.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Delegation;
                fromPartial(object: Partial<_103.Delegation>): _103.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _103.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.UnbondingDelegation;
                fromPartial(object: Partial<_103.UnbondingDelegation>): _103.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _103.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.UnbondingDelegationEntry;
                fromPartial(object: Partial<_103.UnbondingDelegationEntry>): _103.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _103.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.RedelegationEntry;
                fromPartial(object: Partial<_103.RedelegationEntry>): _103.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _103.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Redelegation;
                fromPartial(object: Partial<_103.Redelegation>): _103.Redelegation;
            };
            Params: {
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Params;
                fromPartial(object: Partial<_103.Params>): _103.Params;
            };
            DelegationResponse: {
                encode(message: _103.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.DelegationResponse;
                fromPartial(object: Partial<_103.DelegationResponse>): _103.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _103.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.RedelegationEntryResponse;
                fromPartial(object: Partial<_103.RedelegationEntryResponse>): _103.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _103.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.RedelegationResponse;
                fromPartial(object: Partial<_103.RedelegationResponse>): _103.RedelegationResponse;
            };
            Pool: {
                encode(message: _103.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Pool;
                fromPartial(object: Partial<_103.Pool>): _103.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _102.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorsRequest;
                fromPartial(object: Partial<_102.QueryValidatorsRequest>): _102.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _102.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorsResponse;
                fromPartial(object: Partial<_102.QueryValidatorsResponse>): _102.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _102.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorRequest;
                fromPartial(object: Partial<_102.QueryValidatorRequest>): _102.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _102.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorResponse;
                fromPartial(object: Partial<_102.QueryValidatorResponse>): _102.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _102.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsRequest>): _102.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _102.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsResponse>): _102.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _102.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsRequest>): _102.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _102.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsResponse>): _102.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _102.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegationRequest;
                fromPartial(object: Partial<_102.QueryDelegationRequest>): _102.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _102.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegationResponse;
                fromPartial(object: Partial<_102.QueryDelegationResponse>): _102.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _102.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationRequest>): _102.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _102.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationResponse>): _102.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _102.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsRequest>): _102.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _102.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsResponse>): _102.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _102.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsRequest>): _102.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _102.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsResponse>): _102.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _102.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryRedelegationsRequest;
                fromPartial(object: Partial<_102.QueryRedelegationsRequest>): _102.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _102.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryRedelegationsResponse;
                fromPartial(object: Partial<_102.QueryRedelegationsResponse>): _102.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _102.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsRequest>): _102.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _102.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsResponse>): _102.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _102.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorRequest>): _102.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _102.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorResponse>): _102.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _102.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_102.QueryHistoricalInfoRequest>): _102.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _102.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_102.QueryHistoricalInfoResponse>): _102.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _102.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.QueryPoolRequest;
                fromPartial(_: Partial<_102.QueryPoolRequest>): _102.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _102.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryPoolResponse;
                fromPartial(object: Partial<_102.QueryPoolResponse>): _102.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _102.QueryParamsRequest;
                fromPartial(_: Partial<_102.QueryParamsRequest>): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.QueryParamsResponse;
                fromPartial(object: Partial<_102.QueryParamsResponse>): _102.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _101.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.LastValidatorPower;
                fromPartial(object: Partial<_101.LastValidatorPower>): _101.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _100.AuthorizationType;
            authorizationTypeToJSON(object: _100.AuthorizationType): string;
            AuthorizationType: typeof _100.AuthorizationType;
            AuthorizationTypeSDKType: typeof _100.AuthorizationType;
            StakeAuthorization: {
                encode(message: _100.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.StakeAuthorization;
                fromPartial(object: Partial<_100.StakeAuthorization>): _100.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _100.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.StakeAuthorization_Validators;
                fromPartial(object: Partial<_100.StakeAuthorization_Validators>): _100.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _105.SignMode;
                signModeToJSON(object: _105.SignMode): string;
                SignMode: typeof _105.SignMode;
                SignModeSDKType: typeof _105.SignMode;
                SignatureDescriptors: {
                    encode(message: _105.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.SignatureDescriptors;
                    fromPartial(object: Partial<_105.SignatureDescriptors>): _105.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _105.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.SignatureDescriptor;
                    fromPartial(object: Partial<_105.SignatureDescriptor>): _105.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _105.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data>): _105.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _105.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data_Single>): _105.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _105.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_105.SignatureDescriptor_Data_Multi>): _105.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _228.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _107.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Tx;
                fromPartial(object: Partial<_107.Tx>): _107.Tx;
            };
            TxRaw: {
                encode(message: _107.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.TxRaw;
                fromPartial(object: Partial<_107.TxRaw>): _107.TxRaw;
            };
            SignDoc: {
                encode(message: _107.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.SignDoc;
                fromPartial(object: Partial<_107.SignDoc>): _107.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _107.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.SignDocDirectAux;
                fromPartial(object: Partial<_107.SignDocDirectAux>): _107.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _107.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.TxBody;
                fromPartial(object: Partial<_107.TxBody>): _107.TxBody;
            };
            AuthInfo: {
                encode(message: _107.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.AuthInfo;
                fromPartial(object: Partial<_107.AuthInfo>): _107.AuthInfo;
            };
            SignerInfo: {
                encode(message: _107.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.SignerInfo;
                fromPartial(object: Partial<_107.SignerInfo>): _107.SignerInfo;
            };
            ModeInfo: {
                encode(message: _107.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.ModeInfo;
                fromPartial(object: Partial<_107.ModeInfo>): _107.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _107.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.ModeInfo_Single;
                fromPartial(object: Partial<_107.ModeInfo_Single>): _107.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _107.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.ModeInfo_Multi;
                fromPartial(object: Partial<_107.ModeInfo_Multi>): _107.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _107.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Fee;
                fromPartial(object: Partial<_107.Fee>): _107.Fee;
            };
            Tip: {
                encode(message: _107.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Tip;
                fromPartial(object: Partial<_107.Tip>): _107.Tip;
            };
            AuxSignerData: {
                encode(message: _107.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.AuxSignerData;
                fromPartial(object: Partial<_107.AuxSignerData>): _107.AuxSignerData;
            };
            orderByFromJSON(object: any): _106.OrderBy;
            orderByToJSON(object: _106.OrderBy): string;
            broadcastModeFromJSON(object: any): _106.BroadcastMode;
            broadcastModeToJSON(object: _106.BroadcastMode): string;
            OrderBy: typeof _106.OrderBy;
            OrderBySDKType: typeof _106.OrderBy;
            BroadcastMode: typeof _106.BroadcastMode;
            BroadcastModeSDKType: typeof _106.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _106.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetTxsEventRequest;
                fromPartial(object: Partial<_106.GetTxsEventRequest>): _106.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _106.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetTxsEventResponse;
                fromPartial(object: Partial<_106.GetTxsEventResponse>): _106.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _106.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.BroadcastTxRequest;
                fromPartial(object: Partial<_106.BroadcastTxRequest>): _106.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _106.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.BroadcastTxResponse;
                fromPartial(object: Partial<_106.BroadcastTxResponse>): _106.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _106.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.SimulateRequest;
                fromPartial(object: Partial<_106.SimulateRequest>): _106.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _106.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.SimulateResponse;
                fromPartial(object: Partial<_106.SimulateResponse>): _106.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _106.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetTxRequest;
                fromPartial(object: Partial<_106.GetTxRequest>): _106.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _106.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetTxResponse;
                fromPartial(object: Partial<_106.GetTxResponse>): _106.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _106.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_106.GetBlockWithTxsRequest>): _106.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _106.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_106.GetBlockWithTxsResponse>): _106.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _109.MsgSoftwareUpgrade) => {
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
                    }) => _109.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _109.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _109.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _110.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.Plan;
                fromPartial(object: Partial<_110.Plan>): _110.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _110.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_110.SoftwareUpgradeProposal>): _110.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _110.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_110.CancelSoftwareUpgradeProposal>): _110.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _110.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.ModuleVersion;
                fromPartial(object: Partial<_110.ModuleVersion>): _110.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _109.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_109.MsgSoftwareUpgrade>): _109.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _109.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _109.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_109.MsgSoftwareUpgradeResponse>): _109.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _109.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.MsgCancelUpgrade;
                fromPartial(object: Partial<_109.MsgCancelUpgrade>): _109.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _109.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _109.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_109.MsgCancelUpgradeResponse>): _109.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _108.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_108.QueryCurrentPlanRequest>): _108.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _108.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_108.QueryCurrentPlanResponse>): _108.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _108.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_108.QueryAppliedPlanRequest>): _108.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _108.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_108.QueryAppliedPlanResponse>): _108.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _108.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_108.QueryUpgradedConsensusStateRequest>): _108.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _108.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_108.QueryUpgradedConsensusStateResponse>): _108.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _108.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_108.QueryModuleVersionsRequest>): _108.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _108.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_108.QueryModuleVersionsResponse>): _108.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _108.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryAuthorityRequest;
                fromPartial(_: Partial<_108.QueryAuthorityRequest>): _108.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _108.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAuthorityResponse;
                fromPartial(object: Partial<_108.QueryAuthorityResponse>): _108.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _111.MsgCreateVestingAccount) => {
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
                    }) => _111.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _111.MsgCreatePermanentLockedAccount) => {
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
                    }) => _111.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _111.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _111.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _112.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.BaseVestingAccount;
                fromPartial(object: Partial<_112.BaseVestingAccount>): _112.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _112.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.ContinuousVestingAccount;
                fromPartial(object: Partial<_112.ContinuousVestingAccount>): _112.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _112.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DelayedVestingAccount;
                fromPartial(object: Partial<_112.DelayedVestingAccount>): _112.DelayedVestingAccount;
            };
            Period: {
                encode(message: _112.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Period;
                fromPartial(object: Partial<_112.Period>): _112.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _112.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.PeriodicVestingAccount;
                fromPartial(object: Partial<_112.PeriodicVestingAccount>): _112.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _112.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.PermanentLockedAccount;
                fromPartial(object: Partial<_112.PermanentLockedAccount>): _112.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _111.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.MsgCreateVestingAccount;
                fromPartial(object: Partial<_111.MsgCreateVestingAccount>): _111.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _111.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _111.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_111.MsgCreateVestingAccountResponse>): _111.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _111.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_111.MsgCreatePermanentLockedAccount>): _111.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _111.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _111.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_111.MsgCreatePermanentLockedAccountResponse>): _111.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _111.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_111.MsgCreatePeriodicVestingAccount>): _111.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _111.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _111.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_111.MsgCreatePeriodicVestingAccountResponse>): _111.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _230.MsgClientImpl;
                };
                bank: {
                    v1beta1: _231.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _232.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _233.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _234.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _235.MsgClientImpl;
                };
                gov: {
                    v1: _236.MsgClientImpl;
                    v1beta1: _237.MsgClientImpl;
                };
                group: {
                    v1: _238.MsgClientImpl;
                };
                nft: {
                    v1beta1: _239.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _240.MsgClientImpl;
                };
                staking: {
                    v1beta1: _241.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _242.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _243.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _20.QueryConfigRequest): Promise<_20.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                        account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                        accountAddressByID(request: _23.QueryAccountAddressByIDRequest): Promise<_23.QueryAccountAddressByIDResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        moduleAccounts(request?: _23.QueryModuleAccountsRequest): Promise<_23.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _23.QueryModuleAccountByNameRequest): Promise<_23.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _23.Bech32PrefixRequest): Promise<_23.Bech32PrefixResponse>;
                        addressBytesToString(request: _23.AddressBytesToStringRequest): Promise<_23.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _23.AddressStringToBytesRequest): Promise<_23.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                        granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                        granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                        allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                        spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                        supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                        denomOwners(request: _32.QueryDenomOwnersRequest): Promise<_32.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                            getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                            getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                            getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _43.ABCIQueryRequest): Promise<_43.ABCIQueryResponse>;
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
                    v1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                        proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                        vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                        votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                        deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                        tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _79.QueryGroupInfoRequest): Promise<_79.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _79.QueryGroupPolicyInfoRequest): Promise<_79.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _79.QueryGroupMembersRequest): Promise<_79.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _79.QueryGroupsByAdminRequest): Promise<_79.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _79.QueryGroupPoliciesByGroupRequest): Promise<_79.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _79.QueryGroupPoliciesByAdminRequest): Promise<_79.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _79.QueryProposalsByGroupPolicyRequest): Promise<_79.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _79.QueryVoteByProposalVoterRequest): Promise<_79.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _79.QueryVotesByProposalRequest): Promise<_79.QueryVotesByProposalResponse>;
                        votesByVoter(request: _79.QueryVotesByVoterRequest): Promise<_79.QueryVotesByVoterResponse>;
                        groupsByMember(request: _79.QueryGroupsByMemberRequest): Promise<_79.QueryGroupsByMemberResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                        groups(request?: _79.QueryGroupsRequest): Promise<_79.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                        annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _89.QueryBalanceRequest): Promise<_89.QueryBalanceResponse>;
                        owner(request: _89.QueryOwnerRequest): Promise<_89.QueryOwnerResponse>;
                        supply(request: _89.QuerySupplyRequest): Promise<_89.QuerySupplyResponse>;
                        nFTs(request: _89.QueryNFTsRequest): Promise<_89.QueryNFTsResponse>;
                        nFT(request: _89.QueryNFTRequest): Promise<_89.QueryNFTResponse>;
                        class(request: _89.QueryClassRequest): Promise<_89.QueryClassResponse>;
                        classes(request?: _89.QueryClassesRequest): Promise<_89.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                        signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                        validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                        validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                        unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                        delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                        pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                        getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                        broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                        getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                        getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                        appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                        authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
