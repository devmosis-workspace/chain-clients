import * as _7 from "./app/module/v1alpha1/module";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/tendermint/v1beta1/types";
import * as _35 from "./base/v1beta1/coin";
import * as _36 from "./capability/v1beta1/capability";
import * as _37 from "./capability/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/hd/v1/hd";
import * as _42 from "./crypto/keyring/v1/record";
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
import * as _59 from "./gov/v1/genesis";
import * as _60 from "./gov/v1/gov";
import * as _61 from "./gov/v1/query";
import * as _62 from "./gov/v1/tx";
import * as _63 from "./gov/v1beta1/genesis";
import * as _64 from "./gov/v1beta1/gov";
import * as _65 from "./gov/v1beta1/query";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./mint/v1beta1/genesis";
import * as _73 from "./mint/v1beta1/mint";
import * as _74 from "./mint/v1beta1/query";
import * as _76 from "./nft/v1beta1/event";
import * as _77 from "./nft/v1beta1/genesis";
import * as _78 from "./nft/v1beta1/nft";
import * as _79 from "./nft/v1beta1/query";
import * as _80 from "./nft/v1beta1/tx";
import * as _81 from "./orm/module/v1alpha1/module";
import * as _82 from "./orm/v1/orm";
import * as _83 from "./orm/v1alpha1/schema";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/v1beta1/tx";
import * as _102 from "./vesting/v1beta1/vesting";
import * as _157 from "./app/v1alpha1/query.rpc.Query";
import * as _158 from "./auth/v1beta1/query.rpc.Query";
import * as _159 from "./authz/v1beta1/query.rpc.Query";
import * as _160 from "./bank/v1beta1/query.rpc.Query";
import * as _161 from "./base/node/v1beta1/query.rpc.Service";
import * as _162 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _163 from "./distribution/v1beta1/query.rpc.Query";
import * as _164 from "./evidence/v1beta1/query.rpc.Query";
import * as _165 from "./feegrant/v1beta1/query.rpc.Query";
import * as _166 from "./gov/v1/query.rpc.Query";
import * as _167 from "./gov/v1beta1/query.rpc.Query";
import * as _168 from "./group/v1/query.rpc.Query";
import * as _169 from "./mint/v1beta1/query.rpc.Query";
import * as _170 from "./nft/v1beta1/query.rpc.Query";
import * as _171 from "./params/v1beta1/query.rpc.Query";
import * as _172 from "./slashing/v1beta1/query.rpc.Query";
import * as _173 from "./staking/v1beta1/query.rpc.Query";
import * as _174 from "./tx/v1beta1/service.rpc.Service";
import * as _175 from "./upgrade/v1beta1/query.rpc.Query";
import * as _176 from "./authz/v1beta1/tx.rpc.msg";
import * as _177 from "./bank/v1beta1/tx.rpc.msg";
import * as _178 from "./crisis/v1beta1/tx.rpc.msg";
import * as _179 from "./distribution/v1beta1/tx.rpc.msg";
import * as _180 from "./evidence/v1beta1/tx.rpc.msg";
import * as _181 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _182 from "./gov/v1/tx.rpc.msg";
import * as _183 from "./gov/v1beta1/tx.rpc.msg";
import * as _184 from "./group/v1/tx.rpc.msg";
import * as _185 from "./nft/v1beta1/tx.rpc.msg";
import * as _186 from "./slashing/v1beta1/tx.rpc.msg";
import * as _187 from "./staking/v1beta1/tx.rpc.msg";
import * as _188 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _189 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _7.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _7.Module;
                    fromPartial(_: Partial<_7.Module>): _7.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _10.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.QueryConfigRequest;
                fromPartial(_: Partial<_10.QueryConfigRequest>): _10.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _10.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryConfigResponse;
                fromPartial(object: Partial<_10.QueryConfigResponse>): _10.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _9.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.ModuleDescriptor;
                fromPartial(object: Partial<_9.ModuleDescriptor>): _9.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _9.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.PackageReference;
                fromPartial(object: Partial<_9.PackageReference>): _9.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _9.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MigrateFromInfo;
                fromPartial(object: Partial<_9.MigrateFromInfo>): _9.MigrateFromInfo;
            };
            Config: {
                encode(message: _8.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.Config;
                fromPartial(object: Partial<_8.Config>): _8.Config;
            };
            ModuleConfig: {
                encode(message: _8.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.ModuleConfig;
                fromPartial(object: Partial<_8.ModuleConfig>): _8.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                accountAddressByID(request: _13.QueryAccountAddressByIDRequest): Promise<_13.QueryAccountAddressByIDResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                moduleAccounts(request?: _13.QueryModuleAccountsRequest): Promise<_13.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _13.QueryModuleAccountByNameRequest): Promise<_13.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _13.Bech32PrefixRequest): Promise<_13.Bech32PrefixResponse>;
                addressBytesToString(request: _13.AddressBytesToStringRequest): Promise<_13.AddressBytesToStringResponse>;
                addressStringToBytes(request: _13.AddressStringToBytesRequest): Promise<_13.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _13.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountsRequest;
                fromPartial(object: Partial<_13.QueryAccountsRequest>): _13.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _13.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountsResponse;
                fromPartial(object: Partial<_13.QueryAccountsResponse>): _13.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _13.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountRequest;
                fromPartial(object: Partial<_13.QueryAccountRequest>): _13.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _13.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountResponse;
                fromPartial(object: Partial<_13.QueryAccountResponse>): _13.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryParamsRequest;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryParamsResponse;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _13.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_13.QueryModuleAccountsRequest>): _13.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _13.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_13.QueryModuleAccountsResponse>): _13.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _13.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_13.QueryModuleAccountByNameRequest>): _13.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _13.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_13.QueryModuleAccountByNameResponse>): _13.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _13.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.Bech32PrefixRequest;
                fromPartial(_: Partial<_13.Bech32PrefixRequest>): _13.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _13.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Bech32PrefixResponse;
                fromPartial(object: Partial<_13.Bech32PrefixResponse>): _13.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _13.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.AddressBytesToStringRequest;
                fromPartial(object: Partial<_13.AddressBytesToStringRequest>): _13.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _13.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.AddressBytesToStringResponse;
                fromPartial(object: Partial<_13.AddressBytesToStringResponse>): _13.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _13.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.AddressStringToBytesRequest;
                fromPartial(object: Partial<_13.AddressStringToBytesRequest>): _13.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _13.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.AddressStringToBytesResponse;
                fromPartial(object: Partial<_13.AddressStringToBytesResponse>): _13.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _13.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_13.QueryAccountAddressByIDRequest>): _13.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _13.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_13.QueryAccountAddressByIDResponse>): _13.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            };
            BaseAccount: {
                encode(message: _11.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.BaseAccount;
                fromPartial(object: Partial<_11.BaseAccount>): _11.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _11.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.ModuleAccount;
                fromPartial(object: Partial<_11.ModuleAccount>): _11.ModuleAccount;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _18.MsgGrant) => {
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
                    }) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _18.MsgExec) => {
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
                    }) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _18.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _18.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgGrant;
                fromPartial(object: Partial<_18.MsgGrant>): _18.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _18.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgExecResponse;
                fromPartial(object: Partial<_18.MsgExecResponse>): _18.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _18.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgExec;
                fromPartial(object: Partial<_18.MsgExec>): _18.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _18.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgGrantResponse;
                fromPartial(_: Partial<_18.MsgGrantResponse>): _18.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _18.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgRevoke;
                fromPartial(object: Partial<_18.MsgRevoke>): _18.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _18.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgRevokeResponse;
                fromPartial(_: Partial<_18.MsgRevokeResponse>): _18.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _17.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGrantsRequest;
                fromPartial(object: Partial<_17.QueryGrantsRequest>): _17.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _17.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGrantsResponse;
                fromPartial(object: Partial<_17.QueryGrantsResponse>): _17.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranterGrantsRequest>): _17.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranterGrantsResponse>): _17.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranteeGrantsRequest>): _17.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranteeGrantsResponse>): _17.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            EventGrant: {
                encode(message: _15.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.EventGrant;
                fromPartial(object: Partial<_15.EventGrant>): _15.EventGrant;
            };
            EventRevoke: {
                encode(message: _15.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.EventRevoke;
                fromPartial(object: Partial<_15.EventRevoke>): _15.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _14.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GenericAuthorization;
                fromPartial(object: Partial<_14.GenericAuthorization>): _14.GenericAuthorization;
            };
            Grant: {
                encode(message: _14.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.Grant;
                fromPartial(object: Partial<_14.Grant>): _14.Grant;
            };
            GrantAuthorization: {
                encode(message: _14.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GrantAuthorization;
                fromPartial(object: Partial<_14.GrantAuthorization>): _14.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _14.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GrantQueueItem;
                fromPartial(object: Partial<_14.GrantQueueItem>): _14.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _23.MsgSend) => {
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
                    }) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _23.MsgMultiSend) => {
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
                    }) => _23.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _23.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MsgSend;
                fromPartial(object: Partial<_23.MsgSend>): _23.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _23.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.MsgSendResponse;
                fromPartial(_: Partial<_23.MsgSendResponse>): _23.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _23.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MsgMultiSend;
                fromPartial(object: Partial<_23.MsgMultiSend>): _23.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _23.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                fromPartial(_: Partial<_23.MsgMultiSendResponse>): _23.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _22.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryBalanceRequest;
                fromPartial(object: Partial<_22.QueryBalanceRequest>): _22.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _22.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryBalanceResponse;
                fromPartial(object: Partial<_22.QueryBalanceResponse>): _22.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _22.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                fromPartial(object: Partial<_22.QueryAllBalancesRequest>): _22.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _22.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                fromPartial(object: Partial<_22.QueryAllBalancesResponse>): _22.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_22.QuerySpendableBalancesRequest>): _22.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_22.QuerySpendableBalancesResponse>): _22.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_22.QueryTotalSupplyRequest>): _22.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_22.QueryTotalSupplyResponse>): _22.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _22.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                fromPartial(object: Partial<_22.QuerySupplyOfRequest>): _22.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _22.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                fromPartial(object: Partial<_22.QuerySupplyOfResponse>): _22.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.QueryParamsRequest;
                fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryParamsResponse;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomsMetadataRequest>): _22.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomsMetadataResponse>): _22.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomMetadataRequest>): _22.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomMetadataResponse>): _22.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _22.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_22.QueryDenomOwnersRequest>): _22.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _22.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.DenomOwner;
                fromPartial(object: Partial<_22.DenomOwner>): _22.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _22.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_22.QueryDenomOwnersResponse>): _22.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
            };
            Balance: {
                encode(message: _21.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Balance;
                fromPartial(object: Partial<_21.Balance>): _21.Balance;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
            };
            SendEnabled: {
                encode(message: _20.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.SendEnabled;
                fromPartial(object: Partial<_20.SendEnabled>): _20.SendEnabled;
            };
            Input: {
                encode(message: _20.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Input;
                fromPartial(object: Partial<_20.Input>): _20.Input;
            };
            Output: {
                encode(message: _20.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Output;
                fromPartial(object: Partial<_20.Output>): _20.Output;
            };
            Supply: {
                encode(message: _20.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Supply;
                fromPartial(object: Partial<_20.Supply>): _20.Supply;
            };
            DenomUnit: {
                encode(message: _20.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.DenomUnit;
                fromPartial(object: Partial<_20.DenomUnit>): _20.DenomUnit;
            };
            Metadata: {
                encode(message: _20.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Metadata;
                fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
            };
            SendAuthorization: {
                encode(message: _19.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SendAuthorization;
                fromPartial(object: Partial<_19.SendAuthorization>): _19.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _24.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.TxResponse;
                    fromPartial(object: Partial<_24.TxResponse>): _24.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _24.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    fromPartial(object: Partial<_24.ABCIMessageLog>): _24.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _24.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.StringEvent;
                    fromPartial(object: Partial<_24.StringEvent>): _24.StringEvent;
                };
                Attribute: {
                    encode(message: _24.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Attribute;
                    fromPartial(object: Partial<_24.Attribute>): _24.Attribute;
                };
                GasInfo: {
                    encode(message: _24.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.GasInfo;
                    fromPartial(object: Partial<_24.GasInfo>): _24.GasInfo;
                };
                Result: {
                    encode(message: _24.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.Result;
                    fromPartial(object: Partial<_24.Result>): _24.Result;
                };
                SimulationResponse: {
                    encode(message: _24.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.SimulationResponse;
                    fromPartial(object: Partial<_24.SimulationResponse>): _24.SimulationResponse;
                };
                MsgData: {
                    encode(message: _24.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.MsgData;
                    fromPartial(object: Partial<_24.MsgData>): _24.MsgData;
                };
                TxMsgData: {
                    encode(message: _24.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.TxMsgData;
                    fromPartial(object: Partial<_24.TxMsgData>): _24.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _24.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.SearchTxsResult;
                    fromPartial(object: Partial<_24.SearchTxsResult>): _24.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _25.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.Pairs;
                    fromPartial(object: Partial<_25.Pairs>): _25.Pairs;
                };
                Pair: {
                    encode(message: _25.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.Pair;
                    fromPartial(object: Partial<_25.Pair>): _25.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _161.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _26.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.ConfigRequest;
                    fromPartial(_: Partial<_26.ConfigRequest>): _26.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _26.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ConfigResponse;
                    fromPartial(object: Partial<_26.ConfigResponse>): _26.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _27.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.PageRequest;
                    fromPartial(object: Partial<_27.PageRequest>): _27.PageRequest;
                };
                PageResponse: {
                    encode(message: _27.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.PageResponse;
                    fromPartial(object: Partial<_27.PageResponse>): _27.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _28.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _28.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_28.ListAllInterfacesRequest>): _28.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _28.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_28.ListAllInterfacesResponse>): _28.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _28.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ListImplementationsRequest;
                    fromPartial(object: Partial<_28.ListImplementationsRequest>): _28.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _28.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _28.ListImplementationsResponse;
                    fromPartial(object: Partial<_28.ListImplementationsResponse>): _28.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _29.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.AppDescriptor;
                    fromPartial(object: Partial<_29.AppDescriptor>): _29.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _29.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.TxDescriptor;
                    fromPartial(object: Partial<_29.TxDescriptor>): _29.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _29.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    fromPartial(object: Partial<_29.AuthnDescriptor>): _29.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _29.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    fromPartial(object: Partial<_29.SigningModeDescriptor>): _29.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _29.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.ChainDescriptor;
                    fromPartial(object: Partial<_29.ChainDescriptor>): _29.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _29.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.CodecDescriptor;
                    fromPartial(object: Partial<_29.CodecDescriptor>): _29.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _29.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    fromPartial(object: Partial<_29.InterfaceDescriptor>): _29.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_29.InterfaceImplementerDescriptor>): _29.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_29.InterfaceAcceptingMessageDescriptor>): _29.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _29.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    fromPartial(object: Partial<_29.ConfigurationDescriptor>): _29.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _29.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.MsgDescriptor;
                    fromPartial(object: Partial<_29.MsgDescriptor>): _29.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_29.GetAuthnDescriptorRequest>): _29.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_29.GetAuthnDescriptorResponse>): _29.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_29.GetChainDescriptorRequest>): _29.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_29.GetChainDescriptorResponse>): _29.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_29.GetCodecDescriptorRequest>): _29.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_29.GetCodecDescriptorResponse>): _29.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_29.GetConfigurationDescriptorRequest>): _29.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_29.GetConfigurationDescriptorResponse>): _29.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_29.GetQueryServicesDescriptorRequest>): _29.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_29.GetQueryServicesDescriptorResponse>): _29.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_29.GetTxDescriptorRequest>): _29.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_29.GetTxDescriptorResponse>): _29.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _29.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    fromPartial(object: Partial<_29.QueryServicesDescriptor>): _29.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _29.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    fromPartial(object: Partial<_29.QueryServiceDescriptor>): _29.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _29.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    fromPartial(object: Partial<_29.QueryMethodDescriptor>): _29.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _30.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.Snapshot;
                    fromPartial(object: Partial<_30.Snapshot>): _30.Snapshot;
                };
                Metadata: {
                    encode(message: _30.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.Metadata;
                    fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
                };
                SnapshotItem: {
                    encode(message: _30.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotItem;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _30.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _30.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _30.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_30.SnapshotExtensionMeta>): _30.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _30.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_30.SnapshotExtensionPayload>): _30.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _30.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotKVItem;
                    fromPartial(object: Partial<_30.SnapshotKVItem>): _30.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _30.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _30.SnapshotSchema;
                    fromPartial(object: Partial<_30.SnapshotSchema>): _30.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _32.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.StoreKVPair;
                    fromPartial(object: Partial<_32.StoreKVPair>): _32.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _32.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.BlockMetadata;
                    fromPartial(object: Partial<_32.BlockMetadata>): _32.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _32.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_32.BlockMetadata_DeliverTx>): _32.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _31.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.CommitInfo;
                    fromPartial(object: Partial<_31.CommitInfo>): _31.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _31.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.StoreInfo;
                    fromPartial(object: Partial<_31.StoreInfo>): _31.StoreInfo;
                };
                CommitID: {
                    encode(message: _31.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _31.CommitID;
                    fromPartial(object: Partial<_31.CommitID>): _31.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _162.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                    getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                    getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                    getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _34.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Block;
                    fromPartial(object: Partial<_34.Block>): _34.Block;
                };
                Header: {
                    encode(message: _34.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Header;
                    fromPartial(object: Partial<_34.Header>): _34.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _33.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightRequest>): _33.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _33.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightResponse>): _33.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _33.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetRequest>): _33.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _33.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetResponse>): _33.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _33.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.Validator;
                    fromPartial(object: Partial<_33.Validator>): _33.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _33.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_33.GetBlockByHeightRequest>): _33.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _33.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_33.GetBlockByHeightResponse>): _33.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _33.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetLatestBlockRequest;
                    fromPartial(_: Partial<_33.GetLatestBlockRequest>): _33.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _33.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetLatestBlockResponse;
                    fromPartial(object: Partial<_33.GetLatestBlockResponse>): _33.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _33.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetSyncingRequest;
                    fromPartial(_: Partial<_33.GetSyncingRequest>): _33.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _33.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetSyncingResponse;
                    fromPartial(object: Partial<_33.GetSyncingResponse>): _33.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _33.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _33.GetNodeInfoRequest;
                    fromPartial(_: Partial<_33.GetNodeInfoRequest>): _33.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _33.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.GetNodeInfoResponse;
                    fromPartial(object: Partial<_33.GetNodeInfoResponse>): _33.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _33.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.VersionInfo;
                    fromPartial(object: Partial<_33.VersionInfo>): _33.VersionInfo;
                };
                Module: {
                    encode(message: _33.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.Module;
                    fromPartial(object: Partial<_33.Module>): _33.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _33.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ABCIQueryRequest;
                    fromPartial(object: Partial<_33.ABCIQueryRequest>): _33.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _33.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ABCIQueryResponse;
                    fromPartial(object: Partial<_33.ABCIQueryResponse>): _33.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _33.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ProofOp;
                    fromPartial(object: Partial<_33.ProofOp>): _33.ProofOp;
                };
                ProofOps: {
                    encode(message: _33.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _33.ProofOps;
                    fromPartial(object: Partial<_33.ProofOps>): _33.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _35.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.Coin;
                fromPartial(object: Partial<_35.Coin>): _35.Coin;
            };
            DecCoin: {
                encode(message: _35.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.DecCoin;
                fromPartial(object: Partial<_35.DecCoin>): _35.DecCoin;
            };
            IntProto: {
                encode(message: _35.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.IntProto;
                fromPartial(object: Partial<_35.IntProto>): _35.IntProto;
            };
            DecProto: {
                encode(message: _35.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.DecProto;
                fromPartial(object: Partial<_35.DecProto>): _35.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _37.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisOwners;
                fromPartial(object: Partial<_37.GenesisOwners>): _37.GenesisOwners;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
            Capability: {
                encode(message: _36.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Capability;
                fromPartial(object: Partial<_36.Capability>): _36.Capability;
            };
            Owner: {
                encode(message: _36.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Owner;
                fromPartial(object: Partial<_36.Owner>): _36.Owner;
            };
            CapabilityOwners: {
                encode(message: _36.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.CapabilityOwners;
                fromPartial(object: Partial<_36.CapabilityOwners>): _36.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _39.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _39.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _39.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.MsgVerifyInvariant;
                fromPartial(object: Partial<_39.MsgVerifyInvariant>): _39.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _39.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_39.MsgVerifyInvariantResponse>): _39.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.PubKey;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.PrivKey;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _41.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.BIP44Params;
                    fromPartial(object: Partial<_41.BIP44Params>): _41.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _42.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.Record;
                    fromPartial(object: Partial<_42.Record>): _42.Record;
                };
                Record_Local: {
                    encode(message: _42.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.Record_Local;
                    fromPartial(object: Partial<_42.Record_Local>): _42.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _42.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.Record_Ledger;
                    fromPartial(object: Partial<_42.Record_Ledger>): _42.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _42.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.Record_Multi;
                    fromPartial(_: Partial<_42.Record_Multi>): _42.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _42.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.Record_Offline;
                    fromPartial(_: Partial<_42.Record_Offline>): _42.Record_Offline;
                };
            };
        }
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
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
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
                encode(message: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorRewardResponse>): _49.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommission>): _49.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommissionResponse>): _49.MsgWithdrawValidatorCommissionResponse;
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
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
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
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
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
        const v1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
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
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
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
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
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
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
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
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
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
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _62.MsgSubmitProposal) => {
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
                    }) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _62.MsgExecLegacyContent) => {
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
                    }) => _62.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _62.MsgVote) => {
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
                    }) => _62.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _62.MsgVoteWeighted) => {
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
                    }) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
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
            MsgExecLegacyContent: {
                encode(message: _62.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.MsgExecLegacyContent;
                fromPartial(object: Partial<_62.MsgExecLegacyContent>): _62.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _62.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _62.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_62.MsgExecLegacyContentResponse>): _62.MsgExecLegacyContentResponse;
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
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _66.MsgSubmitProposal) => {
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
                    }) => _66.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _66.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _66.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _66.MsgVoteWeighted) => {
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
                    }) => _66.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _66.MsgDeposit) => {
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
                    }) => _66.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _66.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgSubmitProposal;
                fromPartial(object: Partial<_66.MsgSubmitProposal>): _66.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _66.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_66.MsgSubmitProposalResponse>): _66.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _66.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgVote;
                fromPartial(object: Partial<_66.MsgVote>): _66.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _66.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgVoteResponse;
                fromPartial(_: Partial<_66.MsgVoteResponse>): _66.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _66.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgVoteWeighted;
                fromPartial(object: Partial<_66.MsgVoteWeighted>): _66.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _66.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_66.MsgVoteWeightedResponse>): _66.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _66.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgDeposit;
                fromPartial(object: Partial<_66.MsgDeposit>): _66.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _66.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgDepositResponse;
                fromPartial(_: Partial<_66.MsgDepositResponse>): _66.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _65.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryProposalRequest;
                fromPartial(object: Partial<_65.QueryProposalRequest>): _65.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _65.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryProposalResponse;
                fromPartial(object: Partial<_65.QueryProposalResponse>): _65.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _65.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryProposalsRequest;
                fromPartial(object: Partial<_65.QueryProposalsRequest>): _65.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _65.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryProposalsResponse;
                fromPartial(object: Partial<_65.QueryProposalsResponse>): _65.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _65.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryVoteRequest;
                fromPartial(object: Partial<_65.QueryVoteRequest>): _65.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _65.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryVoteResponse;
                fromPartial(object: Partial<_65.QueryVoteResponse>): _65.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _65.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryVotesRequest;
                fromPartial(object: Partial<_65.QueryVotesRequest>): _65.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _65.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryVotesResponse;
                fromPartial(object: Partial<_65.QueryVotesResponse>): _65.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryParamsRequest;
                fromPartial(object: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryParamsResponse;
                fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _65.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryDepositRequest;
                fromPartial(object: Partial<_65.QueryDepositRequest>): _65.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _65.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryDepositResponse;
                fromPartial(object: Partial<_65.QueryDepositResponse>): _65.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _65.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryDepositsRequest;
                fromPartial(object: Partial<_65.QueryDepositsRequest>): _65.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _65.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryDepositsResponse;
                fromPartial(object: Partial<_65.QueryDepositsResponse>): _65.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _65.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryTallyResultRequest;
                fromPartial(object: Partial<_65.QueryTallyResultRequest>): _65.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _65.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryTallyResultResponse;
                fromPartial(object: Partial<_65.QueryTallyResultResponse>): _65.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _64.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.WeightedVoteOption;
                fromPartial(object: Partial<_64.WeightedVoteOption>): _64.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _64.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.TextProposal;
                fromPartial(object: Partial<_64.TextProposal>): _64.TextProposal;
            };
            Deposit: {
                encode(message: _64.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Deposit;
                fromPartial(object: Partial<_64.Deposit>): _64.Deposit;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Proposal;
                fromPartial(object: Partial<_64.Proposal>): _64.Proposal;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.TallyResult;
                fromPartial(object: Partial<_64.TallyResult>): _64.TallyResult;
            };
            Vote: {
                encode(message: _64.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Vote;
                fromPartial(object: Partial<_64.Vote>): _64.Vote;
            };
            DepositParams: {
                encode(message: _64.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.DepositParams;
                fromPartial(object: Partial<_64.DepositParams>): _64.DepositParams;
            };
            VotingParams: {
                encode(message: _64.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.VotingParams;
                fromPartial(object: Partial<_64.VotingParams>): _64.VotingParams;
            };
            TallyParams: {
                encode(message: _64.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.TallyParams;
                fromPartial(object: Partial<_64.TallyParams>): _64.TallyParams;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                groups(request?: _69.QueryGroupsRequest): Promise<_69.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _70.MsgCreateGroup) => {
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
                    }) => _70.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _70.MsgUpdateGroupMembers) => {
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
                    }) => _70.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _70.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _70.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _70.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _70.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _70.MsgCreateGroupPolicy) => {
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
                    }) => _70.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _70.MsgCreateGroupWithPolicy) => {
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
                    }) => _70.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _70.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _70.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _70.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _70.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _70.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _70.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _70.MsgSubmitProposal) => {
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
                    }) => _70.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _70.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _70.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _70.MsgVote) => {
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
                    }) => _70.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _70.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _70.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _70.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _70.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _71.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _71.ProposalExecutorResult): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalExecutorResult: typeof _71.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _71.ProposalExecutorResult;
            Member: {
                encode(message: _71.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Member;
                fromPartial(object: Partial<_71.Member>): _71.Member;
            };
            MemberRequest: {
                encode(message: _71.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MemberRequest;
                fromPartial(object: Partial<_71.MemberRequest>): _71.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _71.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_71.ThresholdDecisionPolicy>): _71.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _71.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.PercentageDecisionPolicy;
                fromPartial(object: Partial<_71.PercentageDecisionPolicy>): _71.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _71.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DecisionPolicyWindows;
                fromPartial(object: Partial<_71.DecisionPolicyWindows>): _71.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _71.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GroupInfo;
                fromPartial(object: Partial<_71.GroupInfo>): _71.GroupInfo;
            };
            GroupMember: {
                encode(message: _71.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GroupMember;
                fromPartial(object: Partial<_71.GroupMember>): _71.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _71.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GroupPolicyInfo;
                fromPartial(object: Partial<_71.GroupPolicyInfo>): _71.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _71.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Proposal;
                fromPartial(object: Partial<_71.Proposal>): _71.Proposal;
            };
            TallyResult: {
                encode(message: _71.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.TallyResult;
                fromPartial(object: Partial<_71.TallyResult>): _71.TallyResult;
            };
            Vote: {
                encode(message: _71.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Vote;
                fromPartial(object: Partial<_71.Vote>): _71.Vote;
            };
            execFromJSON(object: any): _70.Exec;
            execToJSON(object: _70.Exec): string;
            Exec: typeof _70.Exec;
            ExecSDKType: typeof _70.Exec;
            MsgCreateGroup: {
                encode(message: _70.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroup;
                fromPartial(object: Partial<_70.MsgCreateGroup>): _70.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _70.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroupResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupResponse>): _70.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _70.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_70.MsgUpdateGroupMembers>): _70.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _70.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupMembersResponse>): _70.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _70.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_70.MsgUpdateGroupAdmin>): _70.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _70.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupAdminResponse>): _70.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _70.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_70.MsgUpdateGroupMetadata>): _70.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _70.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupMetadataResponse>): _70.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _70.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicy>): _70.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _70.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicyResponse>): _70.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _70.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyAdmin>): _70.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _70.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicy>): _70.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _70.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicyResponse>): _70.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _70.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyAdminResponse>): _70.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _70.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyDecisionPolicy>): _70.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyDecisionPolicyResponse>): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _70.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyMetadata>): _70.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _70.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyMetadataResponse>): _70.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _70.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgSubmitProposal;
                fromPartial(object: Partial<_70.MsgSubmitProposal>): _70.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _70.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_70.MsgSubmitProposalResponse>): _70.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _70.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgWithdrawProposal;
                fromPartial(object: Partial<_70.MsgWithdrawProposal>): _70.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _70.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_70.MsgWithdrawProposalResponse>): _70.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _70.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgVote;
                fromPartial(object: Partial<_70.MsgVote>): _70.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _70.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgVoteResponse;
                fromPartial(_: Partial<_70.MsgVoteResponse>): _70.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _70.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgExec;
                fromPartial(object: Partial<_70.MsgExec>): _70.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _70.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgExecResponse;
                fromPartial(object: Partial<_70.MsgExecResponse>): _70.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _70.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.MsgLeaveGroup;
                fromPartial(object: Partial<_70.MsgLeaveGroup>): _70.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _70.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _70.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_70.MsgLeaveGroupResponse>): _70.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _69.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupInfoRequest;
                fromPartial(object: Partial<_69.QueryGroupInfoRequest>): _69.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _69.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupInfoResponse;
                fromPartial(object: Partial<_69.QueryGroupInfoResponse>): _69.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _69.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoRequest>): _69.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _69.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoResponse>): _69.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _69.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupMembersRequest;
                fromPartial(object: Partial<_69.QueryGroupMembersRequest>): _69.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _69.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupMembersResponse;
                fromPartial(object: Partial<_69.QueryGroupMembersResponse>): _69.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _69.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_69.QueryGroupsByAdminRequest>): _69.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _69.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_69.QueryGroupsByAdminResponse>): _69.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _69.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupRequest>): _69.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _69.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupResponse>): _69.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _69.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminRequest>): _69.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _69.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminResponse>): _69.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _69.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryProposalRequest;
                fromPartial(object: Partial<_69.QueryProposalRequest>): _69.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _69.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryProposalResponse;
                fromPartial(object: Partial<_69.QueryProposalResponse>): _69.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _69.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyRequest>): _69.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _69.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyResponse>): _69.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _69.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterRequest>): _69.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _69.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterResponse>): _69.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _69.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_69.QueryVotesByProposalRequest>): _69.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _69.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_69.QueryVotesByProposalResponse>): _69.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _69.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_69.QueryVotesByVoterRequest>): _69.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _69.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_69.QueryVotesByVoterResponse>): _69.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _69.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_69.QueryGroupsByMemberRequest>): _69.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _69.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_69.QueryGroupsByMemberResponse>): _69.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _69.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryTallyResultRequest;
                fromPartial(object: Partial<_69.QueryTallyResultRequest>): _69.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _69.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryTallyResultResponse;
                fromPartial(object: Partial<_69.QueryTallyResultResponse>): _69.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _69.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsRequest;
                fromPartial(object: Partial<_69.QueryGroupsRequest>): _69.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _69.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.QueryGroupsResponse;
                fromPartial(object: Partial<_69.QueryGroupsResponse>): _69.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _67.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventCreateGroup;
                fromPartial(object: Partial<_67.EventCreateGroup>): _67.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _67.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventUpdateGroup;
                fromPartial(object: Partial<_67.EventUpdateGroup>): _67.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _67.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventCreateGroupPolicy;
                fromPartial(object: Partial<_67.EventCreateGroupPolicy>): _67.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _67.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_67.EventUpdateGroupPolicy>): _67.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _67.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventSubmitProposal;
                fromPartial(object: Partial<_67.EventSubmitProposal>): _67.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _67.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventWithdrawProposal;
                fromPartial(object: Partial<_67.EventWithdrawProposal>): _67.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _67.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventVote;
                fromPartial(object: Partial<_67.EventVote>): _67.EventVote;
            };
            EventExec: {
                encode(message: _67.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventExec;
                fromPartial(object: Partial<_67.EventExec>): _67.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _67.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventLeaveGroup;
                fromPartial(object: Partial<_67.EventLeaveGroup>): _67.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _67.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.EventProposalPruned;
                fromPartial(object: Partial<_67.EventProposalPruned>): _67.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
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
            QueryInflationRequest: {
                encode(_: _74.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _74.QueryInflationRequest;
                fromPartial(_: Partial<_74.QueryInflationRequest>): _74.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _74.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryInflationResponse;
                fromPartial(object: Partial<_74.QueryInflationResponse>): _74.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _74.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _74.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_74.QueryAnnualProvisionsRequest>): _74.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _74.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_74.QueryAnnualProvisionsResponse>): _74.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _73.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.Minter;
                fromPartial(object: Partial<_73.Minter>): _73.Minter;
            };
            Params: {
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.Params;
                fromPartial(object: Partial<_73.Params>): _73.Params;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.GenesisState;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _80.MsgSend) => {
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
                    }) => _80.MsgSend;
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
            QueryOwnerRequest: {
                encode(message: _79.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryOwnerRequest;
                fromPartial(object: Partial<_79.QueryOwnerRequest>): _79.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _79.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryOwnerResponse;
                fromPartial(object: Partial<_79.QueryOwnerResponse>): _79.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _79.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySupplyRequest;
                fromPartial(object: Partial<_79.QuerySupplyRequest>): _79.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _79.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QuerySupplyResponse;
                fromPartial(object: Partial<_79.QuerySupplyResponse>): _79.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _79.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryNFTsRequest;
                fromPartial(object: Partial<_79.QueryNFTsRequest>): _79.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _79.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryNFTsResponse;
                fromPartial(object: Partial<_79.QueryNFTsResponse>): _79.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _79.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryNFTRequest;
                fromPartial(object: Partial<_79.QueryNFTRequest>): _79.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _79.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryNFTResponse;
                fromPartial(object: Partial<_79.QueryNFTResponse>): _79.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _79.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryClassRequest;
                fromPartial(object: Partial<_79.QueryClassRequest>): _79.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _79.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryClassResponse;
                fromPartial(object: Partial<_79.QueryClassResponse>): _79.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _79.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryClassesRequest;
                fromPartial(object: Partial<_79.QueryClassesRequest>): _79.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _79.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryClassesResponse;
                fromPartial(object: Partial<_79.QueryClassesResponse>): _79.QueryClassesResponse;
            };
            Class: {
                encode(message: _78.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Class;
                fromPartial(object: Partial<_78.Class>): _78.Class;
            };
            NFT: {
                encode(message: _78.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.NFT;
                fromPartial(object: Partial<_78.NFT>): _78.NFT;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            Entry: {
                encode(message: _77.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Entry;
                fromPartial(object: Partial<_77.Entry>): _77.Entry;
            };
            EventSend: {
                encode(message: _76.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.EventSend;
                fromPartial(object: Partial<_76.EventSend>): _76.EventSend;
            };
            EventMint: {
                encode(message: _76.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.EventMint;
                fromPartial(object: Partial<_76.EventMint>): _76.EventMint;
            };
            EventBurn: {
                encode(message: _76.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.EventBurn;
                fromPartial(object: Partial<_76.EventBurn>): _76.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _81.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.Module;
                    fromPartial(_: Partial<_81.Module>): _81.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _82.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.TableDescriptor;
                fromPartial(object: Partial<_82.TableDescriptor>): _82.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _82.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_82.PrimaryKeyDescriptor>): _82.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _82.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_82.SecondaryIndexDescriptor>): _82.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _82.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.SingletonDescriptor;
                fromPartial(object: Partial<_82.SingletonDescriptor>): _82.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _83.StorageType;
            storageTypeToJSON(object: _83.StorageType): string;
            StorageType: typeof _83.StorageType;
            StorageTypeSDKType: typeof _83.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _83.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_83.ModuleSchemaDescriptor>): _83.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _83.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_83.ModuleSchemaDescriptor_FileEntry>): _83.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                subspaces(request?: _85.QuerySubspacesRequest): Promise<_85.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryParamsRequest;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _85.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.QuerySubspacesRequest;
                fromPartial(_: Partial<_85.QuerySubspacesRequest>): _85.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _85.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QuerySubspacesResponse;
                fromPartial(object: Partial<_85.QuerySubspacesResponse>): _85.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _85.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.Subspace;
                fromPartial(object: Partial<_85.Subspace>): _85.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _84.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ParameterChangeProposal;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _84.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ParamChange;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _89.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _89.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUnjail;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _89.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUnjailResponse;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _88.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.QueryParamsRequest;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryParamsResponse;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _87.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _87.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _87.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _87.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
            };
            SigningInfo: {
                encode(message: _86.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.SigningInfo;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _86.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _86.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MissedBlock;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _94.MsgCreateValidator) => {
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
                    }) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _94.MsgEditValidator) => {
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
                    }) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _94.MsgDelegate) => {
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
                    }) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _94.MsgBeginRedelegate) => {
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
                    }) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _94.MsgUndelegate) => {
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
                    }) => _94.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _94.MsgCancelUnbondingDelegation) => {
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
                    }) => _94.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _94.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCreateValidator;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _94.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgEditValidator;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _94.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _94.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgDelegate;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _94.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgDelegateResponse;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _94.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _94.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgUndelegate;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _94.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _94.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_94.MsgCancelUnbondingDelegation>): _94.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _94.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_94.MsgCancelUnbondingDelegationResponse>): _94.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            HistoricalInfo: {
                encode(message: _93.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.HistoricalInfo;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _93.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.CommissionRates;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
            };
            Commission: {
                encode(message: _93.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Commission;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
            };
            Description: {
                encode(message: _93.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Description;
                fromPartial(object: Partial<_93.Description>): _93.Description;
            };
            Validator: {
                encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Validator;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
            };
            ValAddresses: {
                encode(message: _93.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ValAddresses;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
            };
            DVPair: {
                encode(message: _93.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVPair;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
            };
            DVPairs: {
                encode(message: _93.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVPairs;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
            };
            DVVTriplet: {
                encode(message: _93.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVVTriplet;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _93.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVVTriplets;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
            };
            Delegation: {
                encode(message: _93.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Delegation;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _93.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.UnbondingDelegation;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _93.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _93.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationEntry;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _93.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Redelegation;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
            };
            Params: {
                encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
            };
            DelegationResponse: {
                encode(message: _93.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DelegationResponse;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _93.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _93.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationResponse;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
            };
            Pool: {
                encode(message: _93.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Pool;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _92.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _92.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _92.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorRequest;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _92.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorResponse;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _92.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegationRequest;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _92.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegationResponse;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _92.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _92.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _92.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.QueryPoolRequest;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _92.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryPoolResponse;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _91.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.LastValidatorPower;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            StakeAuthorization: {
                encode(message: _90.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.StakeAuthorization;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _90.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignatureDescriptors: {
                    encode(message: _95.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _95.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _174.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _97.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Tx;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
            };
            TxRaw: {
                encode(message: _97.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.TxRaw;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
            };
            SignDoc: {
                encode(message: _97.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SignDoc;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _97.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SignDocDirectAux;
                fromPartial(object: Partial<_97.SignDocDirectAux>): _97.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _97.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.TxBody;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
            };
            AuthInfo: {
                encode(message: _97.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.AuthInfo;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
            };
            SignerInfo: {
                encode(message: _97.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SignerInfo;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
            };
            ModeInfo: {
                encode(message: _97.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _97.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo_Single;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _97.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo_Multi;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _97.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Fee;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
            };
            Tip: {
                encode(message: _97.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Tip;
                fromPartial(object: Partial<_97.Tip>): _97.Tip;
            };
            AuxSignerData: {
                encode(message: _97.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.AuxSignerData;
                fromPartial(object: Partial<_97.AuxSignerData>): _97.AuxSignerData;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _96.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxsEventRequest;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _96.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxsEventResponse;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _96.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.BroadcastTxRequest;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _96.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.BroadcastTxResponse;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _96.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.SimulateRequest;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _96.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.SimulateResponse;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _96.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxRequest;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _96.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxResponse;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _99.MsgSoftwareUpgrade) => {
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
                    }) => _99.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _99.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _99.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _100.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.Plan;
                fromPartial(object: Partial<_100.Plan>): _100.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _100.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_100.SoftwareUpgradeProposal>): _100.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _100.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_100.CancelSoftwareUpgradeProposal>): _100.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _100.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.ModuleVersion;
                fromPartial(object: Partial<_100.ModuleVersion>): _100.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _99.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_99.MsgSoftwareUpgrade>): _99.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _99.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_99.MsgSoftwareUpgradeResponse>): _99.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _99.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgCancelUpgrade;
                fromPartial(object: Partial<_99.MsgCancelUpgrade>): _99.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _99.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_99.MsgCancelUpgradeResponse>): _99.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _98.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.QueryAuthorityRequest;
                fromPartial(_: Partial<_98.QueryAuthorityRequest>): _98.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _98.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryAuthorityResponse;
                fromPartial(object: Partial<_98.QueryAuthorityResponse>): _98.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _101.MsgCreateVestingAccount) => {
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
                    }) => _101.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _101.MsgCreatePermanentLockedAccount) => {
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
                    }) => _101.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _101.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _101.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _102.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.BaseVestingAccount;
                fromPartial(object: Partial<_102.BaseVestingAccount>): _102.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _102.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ContinuousVestingAccount;
                fromPartial(object: Partial<_102.ContinuousVestingAccount>): _102.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _102.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.DelayedVestingAccount;
                fromPartial(object: Partial<_102.DelayedVestingAccount>): _102.DelayedVestingAccount;
            };
            Period: {
                encode(message: _102.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Period;
                fromPartial(object: Partial<_102.Period>): _102.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _102.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.PeriodicVestingAccount;
                fromPartial(object: Partial<_102.PeriodicVestingAccount>): _102.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _102.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.PermanentLockedAccount;
                fromPartial(object: Partial<_102.PermanentLockedAccount>): _102.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _101.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.MsgCreateVestingAccount;
                fromPartial(object: Partial<_101.MsgCreateVestingAccount>): _101.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _101.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _101.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_101.MsgCreateVestingAccountResponse>): _101.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _101.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_101.MsgCreatePermanentLockedAccount>): _101.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _101.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _101.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_101.MsgCreatePermanentLockedAccountResponse>): _101.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _101.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_101.MsgCreatePeriodicVestingAccount>): _101.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _101.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _101.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_101.MsgCreatePeriodicVestingAccountResponse>): _101.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _176.MsgClientImpl;
                };
                bank: {
                    v1beta1: _177.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _178.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _179.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _180.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _181.MsgClientImpl;
                };
                gov: {
                    v1: _182.MsgClientImpl;
                    v1beta1: _183.MsgClientImpl;
                };
                group: {
                    v1: _184.MsgClientImpl;
                };
                nft: {
                    v1beta1: _185.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _186.MsgClientImpl;
                };
                staking: {
                    v1beta1: _187.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _188.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _189.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                        account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                        accountAddressByID(request: _13.QueryAccountAddressByIDRequest): Promise<_13.QueryAccountAddressByIDResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        moduleAccounts(request?: _13.QueryModuleAccountsRequest): Promise<_13.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _13.QueryModuleAccountByNameRequest): Promise<_13.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _13.Bech32PrefixRequest): Promise<_13.Bech32PrefixResponse>;
                        addressBytesToString(request: _13.AddressBytesToStringRequest): Promise<_13.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _13.AddressStringToBytesRequest): Promise<_13.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                        granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                        granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                        allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                        spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                        supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                        denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                            getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                            getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                            getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
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
                    v1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                        proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                        vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                        votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                        params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                        deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                        tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                        votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                        groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                        groups(request?: _69.QueryGroupsRequest): Promise<_69.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                        annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                        supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                        nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                        nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                        class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                        classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        subspaces(request?: _85.QuerySubspacesRequest): Promise<_85.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                        authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
