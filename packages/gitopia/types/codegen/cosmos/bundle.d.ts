import * as _0 from "./app/module/v1alpha1/module";
import * as _1 from "./app/v1alpha1/config";
import * as _2 from "./app/v1alpha1/module";
import * as _3 from "./app/v1alpha1/query";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/node/v1beta1/query";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/tendermint/v1beta1/types";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./orm/v1alpha1/schema";
import * as _77 from "./params/v1beta1/params";
import * as _78 from "./params/v1beta1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _142 from "./auth/v1beta1/query.lcd";
import * as _143 from "./authz/v1beta1/query.lcd";
import * as _144 from "./bank/v1beta1/query.lcd";
import * as _145 from "./base/node/v1beta1/query.lcd";
import * as _146 from "./base/tendermint/v1beta1/query.lcd";
import * as _147 from "./distribution/v1beta1/query.lcd";
import * as _148 from "./evidence/v1beta1/query.lcd";
import * as _149 from "./feegrant/v1beta1/query.lcd";
import * as _150 from "./gov/v1/query.lcd";
import * as _151 from "./gov/v1beta1/query.lcd";
import * as _152 from "./group/v1/query.lcd";
import * as _153 from "./mint/v1beta1/query.lcd";
import * as _154 from "./nft/v1beta1/query.lcd";
import * as _155 from "./params/v1beta1/query.lcd";
import * as _156 from "./slashing/v1beta1/query.lcd";
import * as _157 from "./staking/v1beta1/query.lcd";
import * as _158 from "./tx/v1beta1/service.lcd";
import * as _159 from "./upgrade/v1beta1/query.lcd";
import * as _160 from "./app/v1alpha1/query.rpc.Query";
import * as _161 from "./auth/v1beta1/query.rpc.Query";
import * as _162 from "./authz/v1beta1/query.rpc.Query";
import * as _163 from "./bank/v1beta1/query.rpc.Query";
import * as _164 from "./base/node/v1beta1/query.rpc.Service";
import * as _165 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _166 from "./distribution/v1beta1/query.rpc.Query";
import * as _167 from "./evidence/v1beta1/query.rpc.Query";
import * as _168 from "./feegrant/v1beta1/query.rpc.Query";
import * as _169 from "./gov/v1/query.rpc.Query";
import * as _170 from "./gov/v1beta1/query.rpc.Query";
import * as _171 from "./group/v1/query.rpc.Query";
import * as _172 from "./mint/v1beta1/query.rpc.Query";
import * as _173 from "./nft/v1beta1/query.rpc.Query";
import * as _174 from "./params/v1beta1/query.rpc.Query";
import * as _175 from "./slashing/v1beta1/query.rpc.Query";
import * as _176 from "./staking/v1beta1/query.rpc.Query";
import * as _177 from "./tx/v1beta1/service.rpc.Service";
import * as _178 from "./upgrade/v1beta1/query.rpc.Query";
import * as _179 from "./authz/v1beta1/tx.rpc.msg";
import * as _180 from "./bank/v1beta1/tx.rpc.msg";
import * as _181 from "./crisis/v1beta1/tx.rpc.msg";
import * as _182 from "./distribution/v1beta1/tx.rpc.msg";
import * as _183 from "./evidence/v1beta1/tx.rpc.msg";
import * as _184 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _185 from "./gov/v1/tx.rpc.msg";
import * as _186 from "./gov/v1beta1/tx.rpc.msg";
import * as _187 from "./group/v1/tx.rpc.msg";
import * as _188 from "./nft/v1beta1/tx.rpc.msg";
import * as _189 from "./slashing/v1beta1/tx.rpc.msg";
import * as _190 from "./staking/v1beta1/tx.rpc.msg";
import * as _191 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _0.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _0.Module;
                    fromPartial(_: Partial<_0.Module>): _0.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _3.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.QueryConfigRequest;
                fromPartial(_: Partial<_3.QueryConfigRequest>): _3.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _3.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryConfigResponse;
                fromPartial(object: Partial<_3.QueryConfigResponse>): _3.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _2.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ModuleDescriptor;
                fromPartial(object: Partial<_2.ModuleDescriptor>): _2.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _2.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.PackageReference;
                fromPartial(object: Partial<_2.PackageReference>): _2.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _2.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.MigrateFromInfo;
                fromPartial(object: Partial<_2.MigrateFromInfo>): _2.MigrateFromInfo;
            };
            Config: {
                encode(message: _1.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Config;
                fromPartial(object: Partial<_1.Config>): _1.Config;
            };
            ModuleConfig: {
                encode(message: _1.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.ModuleConfig;
                fromPartial(object: Partial<_1.ModuleConfig>): _1.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                accountAddressByID(request: _6.QueryAccountAddressByIDRequest): Promise<_6.QueryAccountAddressByIDResponse>;
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _6.QueryModuleAccountByNameRequest): Promise<_6.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _6.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountsRequest;
                fromPartial(object: Partial<_6.QueryAccountsRequest>): _6.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _6.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountsResponse;
                fromPartial(object: Partial<_6.QueryAccountsResponse>): _6.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _6.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountRequest;
                fromPartial(object: Partial<_6.QueryAccountRequest>): _6.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _6.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountResponse;
                fromPartial(object: Partial<_6.QueryAccountResponse>): _6.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _6.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_6.QueryModuleAccountsRequest>): _6.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _6.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_6.QueryModuleAccountsResponse>): _6.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _6.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_6.QueryModuleAccountByNameRequest>): _6.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _6.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_6.QueryModuleAccountByNameResponse>): _6.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _6.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.Bech32PrefixRequest;
                fromPartial(_: Partial<_6.Bech32PrefixRequest>): _6.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _6.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Bech32PrefixResponse;
                fromPartial(object: Partial<_6.Bech32PrefixResponse>): _6.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _6.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AddressBytesToStringRequest;
                fromPartial(object: Partial<_6.AddressBytesToStringRequest>): _6.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _6.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AddressBytesToStringResponse;
                fromPartial(object: Partial<_6.AddressBytesToStringResponse>): _6.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _6.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AddressStringToBytesRequest;
                fromPartial(object: Partial<_6.AddressStringToBytesRequest>): _6.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _6.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AddressStringToBytesResponse;
                fromPartial(object: Partial<_6.AddressStringToBytesResponse>): _6.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _6.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_6.QueryAccountAddressByIDRequest>): _6.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _6.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_6.QueryAccountAddressByIDResponse>): _6.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            BaseAccount: {
                encode(message: _4.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.BaseAccount;
                fromPartial(object: Partial<_4.BaseAccount>): _4.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _4.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.ModuleAccount;
                fromPartial(object: Partial<_4.ModuleAccount>): _4.ModuleAccount;
            };
            Params: {
                encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _11.MsgGrant) => {
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
                    }) => _11.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _11.MsgExec) => {
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
                    }) => _11.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _11.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _11.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _11.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgGrant;
                fromPartial(object: Partial<_11.MsgGrant>): _11.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _11.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgExecResponse;
                fromPartial(object: Partial<_11.MsgExecResponse>): _11.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _11.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgExec;
                fromPartial(object: Partial<_11.MsgExec>): _11.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _11.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgGrantResponse;
                fromPartial(_: Partial<_11.MsgGrantResponse>): _11.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _11.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgRevoke;
                fromPartial(object: Partial<_11.MsgRevoke>): _11.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _11.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgRevokeResponse;
                fromPartial(_: Partial<_11.MsgRevokeResponse>): _11.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _10.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGrantsRequest;
                fromPartial(object: Partial<_10.QueryGrantsRequest>): _10.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _10.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGrantsResponse;
                fromPartial(object: Partial<_10.QueryGrantsResponse>): _10.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _10.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_10.QueryGranterGrantsRequest>): _10.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _10.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_10.QueryGranterGrantsResponse>): _10.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _10.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_10.QueryGranteeGrantsRequest>): _10.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _10.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_10.QueryGranteeGrantsResponse>): _10.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            EventGrant: {
                encode(message: _8.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.EventGrant;
                fromPartial(object: Partial<_8.EventGrant>): _8.EventGrant;
            };
            EventRevoke: {
                encode(message: _8.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.EventRevoke;
                fromPartial(object: Partial<_8.EventRevoke>): _8.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _7.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.GenericAuthorization;
                fromPartial(object: Partial<_7.GenericAuthorization>): _7.GenericAuthorization;
            };
            Grant: {
                encode(message: _7.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Grant;
                fromPartial(object: Partial<_7.Grant>): _7.Grant;
            };
            GrantAuthorization: {
                encode(message: _7.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.GrantAuthorization;
                fromPartial(object: Partial<_7.GrantAuthorization>): _7.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _7.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.GrantQueueItem;
                fromPartial(object: Partial<_7.GrantQueueItem>): _7.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _16.MsgSend) => {
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
                    }) => _16.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _16.MsgMultiSend) => {
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
                    }) => _16.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _16.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.MsgSend;
                fromPartial(object: Partial<_16.MsgSend>): _16.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _16.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.MsgSendResponse;
                fromPartial(_: Partial<_16.MsgSendResponse>): _16.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _16.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.MsgMultiSend;
                fromPartial(object: Partial<_16.MsgMultiSend>): _16.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _16.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.MsgMultiSendResponse;
                fromPartial(_: Partial<_16.MsgMultiSendResponse>): _16.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _15.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryBalanceRequest;
                fromPartial(object: Partial<_15.QueryBalanceRequest>): _15.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _15.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryBalanceResponse;
                fromPartial(object: Partial<_15.QueryBalanceResponse>): _15.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _15.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryAllBalancesRequest;
                fromPartial(object: Partial<_15.QueryAllBalancesRequest>): _15.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _15.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryAllBalancesResponse;
                fromPartial(object: Partial<_15.QueryAllBalancesResponse>): _15.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _15.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_15.QuerySpendableBalancesRequest>): _15.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _15.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_15.QuerySpendableBalancesResponse>): _15.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _15.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_15.QueryTotalSupplyRequest>): _15.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _15.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_15.QueryTotalSupplyResponse>): _15.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _15.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QuerySupplyOfRequest;
                fromPartial(object: Partial<_15.QuerySupplyOfRequest>): _15.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _15.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QuerySupplyOfResponse;
                fromPartial(object: Partial<_15.QuerySupplyOfResponse>): _15.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _15.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomsMetadataRequest>): _15.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _15.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomsMetadataResponse>): _15.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _15.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomMetadataRequest>): _15.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _15.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomMetadataResponse>): _15.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _15.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_15.QueryDenomOwnersRequest>): _15.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _15.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.DenomOwner;
                fromPartial(object: Partial<_15.DenomOwner>): _15.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _15.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_15.QueryDenomOwnersResponse>): _15.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
            Balance: {
                encode(message: _14.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.Balance;
                fromPartial(object: Partial<_14.Balance>): _14.Balance;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Params;
                fromPartial(object: Partial<_13.Params>): _13.Params;
            };
            SendEnabled: {
                encode(message: _13.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.SendEnabled;
                fromPartial(object: Partial<_13.SendEnabled>): _13.SendEnabled;
            };
            Input: {
                encode(message: _13.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Input;
                fromPartial(object: Partial<_13.Input>): _13.Input;
            };
            Output: {
                encode(message: _13.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Output;
                fromPartial(object: Partial<_13.Output>): _13.Output;
            };
            Supply: {
                encode(message: _13.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Supply;
                fromPartial(object: Partial<_13.Supply>): _13.Supply;
            };
            DenomUnit: {
                encode(message: _13.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.DenomUnit;
                fromPartial(object: Partial<_13.DenomUnit>): _13.DenomUnit;
            };
            Metadata: {
                encode(message: _13.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Metadata;
                fromPartial(object: Partial<_13.Metadata>): _13.Metadata;
            };
            SendAuthorization: {
                encode(message: _12.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.SendAuthorization;
                fromPartial(object: Partial<_12.SendAuthorization>): _12.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _17.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.TxResponse;
                    fromPartial(object: Partial<_17.TxResponse>): _17.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _17.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.ABCIMessageLog;
                    fromPartial(object: Partial<_17.ABCIMessageLog>): _17.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _17.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.StringEvent;
                    fromPartial(object: Partial<_17.StringEvent>): _17.StringEvent;
                };
                Attribute: {
                    encode(message: _17.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.Attribute;
                    fromPartial(object: Partial<_17.Attribute>): _17.Attribute;
                };
                GasInfo: {
                    encode(message: _17.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.GasInfo;
                    fromPartial(object: Partial<_17.GasInfo>): _17.GasInfo;
                };
                Result: {
                    encode(message: _17.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.Result;
                    fromPartial(object: Partial<_17.Result>): _17.Result;
                };
                SimulationResponse: {
                    encode(message: _17.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.SimulationResponse;
                    fromPartial(object: Partial<_17.SimulationResponse>): _17.SimulationResponse;
                };
                MsgData: {
                    encode(message: _17.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.MsgData;
                    fromPartial(object: Partial<_17.MsgData>): _17.MsgData;
                };
                TxMsgData: {
                    encode(message: _17.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.TxMsgData;
                    fromPartial(object: Partial<_17.TxMsgData>): _17.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _17.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.SearchTxsResult;
                    fromPartial(object: Partial<_17.SearchTxsResult>): _17.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _18.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.Pairs;
                    fromPartial(object: Partial<_18.Pairs>): _18.Pairs;
                };
                Pair: {
                    encode(message: _18.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.Pair;
                    fromPartial(object: Partial<_18.Pair>): _18.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _164.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _19.ConfigRequest): Promise<_19.ConfigResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _19.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _19.ConfigRequest;
                    fromPartial(_: Partial<_19.ConfigRequest>): _19.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _19.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.ConfigResponse;
                    fromPartial(object: Partial<_19.ConfigResponse>): _19.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.PageRequest;
                    fromPartial(object: Partial<_20.PageRequest>): _20.PageRequest;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.PageResponse;
                    fromPartial(object: Partial<_20.PageResponse>): _20.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    fromPartial(object: Partial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    fromPartial(object: Partial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.AppDescriptor;
                    fromPartial(object: Partial<_22.AppDescriptor>): _22.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.TxDescriptor;
                    fromPartial(object: Partial<_22.TxDescriptor>): _22.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    fromPartial(object: Partial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    fromPartial(object: Partial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.ChainDescriptor;
                    fromPartial(object: Partial<_22.ChainDescriptor>): _22.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.CodecDescriptor;
                    fromPartial(object: Partial<_22.CodecDescriptor>): _22.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    fromPartial(object: Partial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    fromPartial(object: Partial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.MsgDescriptor;
                    fromPartial(object: Partial<_22.MsgDescriptor>): _22.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    fromPartial(object: Partial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    fromPartial(object: Partial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    fromPartial(object: Partial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.Snapshot;
                    fromPartial(object: Partial<_23.Snapshot>): _23.Snapshot;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.Metadata;
                    fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotItem;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    fromPartial(object: Partial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _23.SnapshotSchema;
                    fromPartial(object: Partial<_23.SnapshotSchema>): _23.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.StoreKVPair;
                    fromPartial(object: Partial<_25.StoreKVPair>): _25.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _25.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.BlockMetadata;
                    fromPartial(object: Partial<_25.BlockMetadata>): _25.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _25.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _25.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_25.BlockMetadata_DeliverTx>): _25.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.CommitInfo;
                    fromPartial(object: Partial<_24.CommitInfo>): _24.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.StoreInfo;
                    fromPartial(object: Partial<_24.StoreInfo>): _24.StoreInfo;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _24.CommitID;
                    fromPartial(object: Partial<_24.CommitID>): _24.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _165.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                    getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                    getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                    getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _26.ABCIQueryRequest): Promise<_26.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _146.LCDQueryClient;
                Block: {
                    encode(message: _27.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Block;
                    fromPartial(object: Partial<_27.Block>): _27.Block;
                };
                Header: {
                    encode(message: _27.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _27.Header;
                    fromPartial(object: Partial<_27.Header>): _27.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.Validator;
                    fromPartial(object: Partial<_26.Validator>): _26.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    fromPartial(_: Partial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    fromPartial(object: Partial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    fromPartial(_: Partial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    fromPartial(object: Partial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    fromPartial(_: Partial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    fromPartial(object: Partial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.VersionInfo;
                    fromPartial(object: Partial<_26.VersionInfo>): _26.VersionInfo;
                };
                Module: {
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.Module;
                    fromPartial(object: Partial<_26.Module>): _26.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _26.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ABCIQueryRequest;
                    fromPartial(object: Partial<_26.ABCIQueryRequest>): _26.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _26.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ABCIQueryResponse;
                    fromPartial(object: Partial<_26.ABCIQueryResponse>): _26.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _26.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ProofOp;
                    fromPartial(object: Partial<_26.ProofOp>): _26.ProofOp;
                };
                ProofOps: {
                    encode(message: _26.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _26.ProofOps;
                    fromPartial(object: Partial<_26.ProofOps>): _26.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _28.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.Coin;
                fromPartial(object: Partial<_28.Coin>): _28.Coin;
            };
            DecCoin: {
                encode(message: _28.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.DecCoin;
                fromPartial(object: Partial<_28.DecCoin>): _28.DecCoin;
            };
            IntProto: {
                encode(message: _28.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.IntProto;
                fromPartial(object: Partial<_28.IntProto>): _28.IntProto;
            };
            DecProto: {
                encode(message: _28.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.DecProto;
                fromPartial(object: Partial<_28.DecProto>): _28.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _30.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenesisOwners;
                fromPartial(object: Partial<_30.GenesisOwners>): _30.GenesisOwners;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
            Capability: {
                encode(message: _29.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.Capability;
                fromPartial(object: Partial<_29.Capability>): _29.Capability;
            };
            Owner: {
                encode(message: _29.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.Owner;
                fromPartial(object: Partial<_29.Owner>): _29.Owner;
            };
            CapabilityOwners: {
                encode(message: _29.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.CapabilityOwners;
                fromPartial(object: Partial<_29.CapabilityOwners>): _29.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _32.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _32.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.MsgVerifyInvariant;
                fromPartial(object: Partial<_32.MsgVerifyInvariant>): _32.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_32.MsgVerifyInvariantResponse>): _32.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.PubKey;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.PrivKey;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _34.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.BIP44Params;
                    fromPartial(object: Partial<_34.BIP44Params>): _34.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _35.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Record;
                    fromPartial(object: Partial<_35.Record>): _35.Record;
                };
                Record_Local: {
                    encode(message: _35.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Record_Local;
                    fromPartial(object: Partial<_35.Record_Local>): _35.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _35.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Record_Ledger;
                    fromPartial(object: Partial<_35.Record_Ledger>): _35.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _35.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _35.Record_Multi;
                    fromPartial(_: Partial<_35.Record_Multi>): _35.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _35.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _35.Record_Offline;
                    fromPartial(_: Partial<_35.Record_Offline>): _35.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.LegacyAminoPubKey;
                fromPartial(object: Partial<_36.LegacyAminoPubKey>): _36.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.PubKey;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.PrivKey;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.PubKey;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.PrivKey;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _42.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _42.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _42.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _42.MsgFundCommunityPool) => {
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
                    }) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_42.MsgSetWithdrawAddress>): _42.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_42.MsgSetWithdrawAddressResponse>): _42.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorReward>): _42.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommission>): _42.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgFundCommunityPool;
                fromPartial(object: Partial<_42.MsgFundCommunityPool>): _42.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_42.MsgFundCommunityPoolResponse>): _42.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.QueryParamsRequest;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryParamsResponse;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsRequest>): _41.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsResponse>): _41.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_41.QueryValidatorCommissionRequest>): _41.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_41.QueryValidatorCommissionResponse>): _41.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_41.QueryValidatorSlashesRequest>): _41.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_41.QueryValidatorSlashesResponse>): _41.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationRewardsRequest>): _41.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationRewardsResponse>): _41.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsRequest>): _41.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsResponse>): _41.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsRequest>): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsResponse>): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressRequest>): _41.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressResponse>): _41.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_41.QueryCommunityPoolRequest>): _41.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_41.QueryCommunityPoolResponse>): _41.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_40.DelegatorWithdrawInfo>): _40.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorOutstandingRewardsRecord>): _40.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_40.ValidatorAccumulatedCommissionRecord>): _40.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorHistoricalRewardsRecord>): _40.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorCurrentRewardsRecord>): _40.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_40.DelegatorStartingInfoRecord>): _40.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_40.ValidatorSlashEventRecord>): _40.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewards>): _39.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorCurrentRewards;
                fromPartial(object: Partial<_39.ValidatorCurrentRewards>): _39.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommission>): _39.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewards>): _39.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorSlashEvent;
                fromPartial(object: Partial<_39.ValidatorSlashEvent>): _39.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ValidatorSlashEvents;
                fromPartial(object: Partial<_39.ValidatorSlashEvents>): _39.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.FeePool;
                fromPartial(object: Partial<_39.FeePool>): _39.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposal>): _39.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DelegatorStartingInfo;
                fromPartial(object: Partial<_39.DelegatorStartingInfo>): _39.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DelegationDelegatorReward;
                fromPartial(object: Partial<_39.DelegationDelegatorReward>): _39.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposalWithDeposit>): _39.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _46.MsgSubmitEvidence) => {
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
                    }) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgSubmitEvidence;
                fromPartial(object: Partial<_46.MsgSubmitEvidence>): _46.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_46.MsgSubmitEvidenceResponse>): _46.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryEvidenceRequest;
                fromPartial(object: Partial<_45.QueryEvidenceRequest>): _45.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryEvidenceResponse;
                fromPartial(object: Partial<_45.QueryEvidenceResponse>): _45.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_45.QueryAllEvidenceRequest>): _45.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_45.QueryAllEvidenceResponse>): _45.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.Equivocation;
                fromPartial(object: Partial<_43.Equivocation>): _43.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _50.MsgGrantAllowance) => {
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
                    }) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _50.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgGrantAllowance;
                fromPartial(object: Partial<_50.MsgGrantAllowance>): _50.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_50.MsgGrantAllowanceResponse>): _50.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgRevokeAllowance;
                fromPartial(object: Partial<_50.MsgRevokeAllowance>): _50.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_50.MsgRevokeAllowanceResponse>): _50.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowanceRequest;
                fromPartial(object: Partial<_49.QueryAllowanceRequest>): _49.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowanceResponse;
                fromPartial(object: Partial<_49.QueryAllowanceResponse>): _49.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesRequest;
                fromPartial(object: Partial<_49.QueryAllowancesRequest>): _49.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesResponse;
                fromPartial(object: Partial<_49.QueryAllowancesResponse>): _49.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterRequest>): _49.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterResponse>): _49.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.BasicAllowance;
                fromPartial(object: Partial<_47.BasicAllowance>): _47.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.PeriodicAllowance;
                fromPartial(object: Partial<_47.PeriodicAllowance>): _47.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.AllowedMsgAllowance;
                fromPartial(object: Partial<_47.AllowedMsgAllowance>): _47.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _47.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.Grant;
                fromPartial(object: Partial<_47.Grant>): _47.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _55.MsgSubmitProposal) => {
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
                    }) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _55.MsgExecLegacyContent) => {
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
                    }) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _55.MsgVote) => {
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
                    }) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _55.MsgVoteWeighted) => {
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
                    }) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _55.MsgDeposit) => {
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
                    }) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSubmitProposal;
                fromPartial(object: Partial<_55.MsgSubmitProposal>): _55.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_55.MsgSubmitProposalResponse>): _55.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _55.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgExecLegacyContent;
                fromPartial(object: Partial<_55.MsgExecLegacyContent>): _55.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _55.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_55.MsgExecLegacyContentResponse>): _55.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgVote;
                fromPartial(object: Partial<_55.MsgVote>): _55.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgVoteResponse;
                fromPartial(_: Partial<_55.MsgVoteResponse>): _55.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgVoteWeighted;
                fromPartial(object: Partial<_55.MsgVoteWeighted>): _55.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_55.MsgVoteWeightedResponse>): _55.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgDeposit;
                fromPartial(object: Partial<_55.MsgDeposit>): _55.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgDepositResponse;
                fromPartial(_: Partial<_55.MsgDepositResponse>): _55.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalRequest;
                fromPartial(object: Partial<_54.QueryProposalRequest>): _54.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalResponse;
                fromPartial(object: Partial<_54.QueryProposalResponse>): _54.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalsRequest;
                fromPartial(object: Partial<_54.QueryProposalsRequest>): _54.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryProposalsResponse;
                fromPartial(object: Partial<_54.QueryProposalsResponse>): _54.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVoteRequest;
                fromPartial(object: Partial<_54.QueryVoteRequest>): _54.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVoteResponse;
                fromPartial(object: Partial<_54.QueryVoteResponse>): _54.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVotesRequest;
                fromPartial(object: Partial<_54.QueryVotesRequest>): _54.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryVotesResponse;
                fromPartial(object: Partial<_54.QueryVotesResponse>): _54.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsRequest;
                fromPartial(object: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositRequest;
                fromPartial(object: Partial<_54.QueryDepositRequest>): _54.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositResponse;
                fromPartial(object: Partial<_54.QueryDepositResponse>): _54.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositsRequest;
                fromPartial(object: Partial<_54.QueryDepositsRequest>): _54.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDepositsResponse;
                fromPartial(object: Partial<_54.QueryDepositsResponse>): _54.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTallyResultRequest;
                fromPartial(object: Partial<_54.QueryTallyResultRequest>): _54.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTallyResultResponse;
                fromPartial(object: Partial<_54.QueryTallyResultResponse>): _54.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.WeightedVoteOption;
                fromPartial(object: Partial<_53.WeightedVoteOption>): _53.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Deposit;
                fromPartial(object: Partial<_53.Deposit>): _53.Deposit;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Proposal;
                fromPartial(object: Partial<_53.Proposal>): _53.Proposal;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TallyResult;
                fromPartial(object: Partial<_53.TallyResult>): _53.TallyResult;
            };
            Vote: {
                encode(message: _53.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Vote;
                fromPartial(object: Partial<_53.Vote>): _53.Vote;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DepositParams;
                fromPartial(object: Partial<_53.DepositParams>): _53.DepositParams;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.VotingParams;
                fromPartial(object: Partial<_53.VotingParams>): _53.VotingParams;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TallyParams;
                fromPartial(object: Partial<_53.TallyParams>): _53.TallyParams;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _59.MsgSubmitProposal) => {
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
                    }) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _59.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _59.MsgVoteWeighted) => {
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
                    }) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _59.MsgDeposit) => {
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
                    }) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgSubmitProposal;
                fromPartial(object: Partial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgVote;
                fromPartial(object: Partial<_59.MsgVote>): _59.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgVoteResponse;
                fromPartial(_: Partial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgVoteWeighted;
                fromPartial(object: Partial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalRequest;
                fromPartial(object: Partial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalResponse;
                fromPartial(object: Partial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalsRequest;
                fromPartial(object: Partial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryProposalsResponse;
                fromPartial(object: Partial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVoteRequest;
                fromPartial(object: Partial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVoteResponse;
                fromPartial(object: Partial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVotesRequest;
                fromPartial(object: Partial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryVotesResponse;
                fromPartial(object: Partial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryParamsRequest;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositRequest;
                fromPartial(object: Partial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositResponse;
                fromPartial(object: Partial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositsRequest;
                fromPartial(object: Partial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryDepositsResponse;
                fromPartial(object: Partial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                fromPartial(object: Partial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                fromPartial(object: Partial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.WeightedVoteOption;
                fromPartial(object: Partial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TextProposal;
                fromPartial(object: Partial<_57.TextProposal>): _57.TextProposal;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Deposit;
                fromPartial(object: Partial<_57.Deposit>): _57.Deposit;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Proposal;
                fromPartial(object: Partial<_57.Proposal>): _57.Proposal;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TallyResult;
                fromPartial(object: Partial<_57.TallyResult>): _57.TallyResult;
            };
            Vote: {
                encode(message: _57.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Vote;
                fromPartial(object: Partial<_57.Vote>): _57.Vote;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.DepositParams;
                fromPartial(object: Partial<_57.DepositParams>): _57.DepositParams;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VotingParams;
                fromPartial(object: Partial<_57.VotingParams>): _57.VotingParams;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.TallyParams;
                fromPartial(object: Partial<_57.TallyParams>): _57.TallyParams;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                groups(request?: _62.QueryGroupsRequest): Promise<_62.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _63.MsgCreateGroup) => {
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
                    }) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _63.MsgUpdateGroupMembers) => {
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
                    }) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _63.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _63.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _63.MsgCreateGroupPolicy) => {
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
                    }) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _63.MsgCreateGroupWithPolicy) => {
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
                    }) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _63.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _63.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _63.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _63.MsgSubmitProposal) => {
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
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _63.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _63.MsgVote) => {
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
                    }) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _63.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _63.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _64.ProposalExecutorResult;
            Member: {
                encode(message: _64.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Member;
                fromPartial(object: Partial<_64.Member>): _64.Member;
            };
            MemberRequest: {
                encode(message: _64.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MemberRequest;
                fromPartial(object: Partial<_64.MemberRequest>): _64.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _64.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_64.ThresholdDecisionPolicy>): _64.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _64.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.PercentageDecisionPolicy;
                fromPartial(object: Partial<_64.PercentageDecisionPolicy>): _64.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _64.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.DecisionPolicyWindows;
                fromPartial(object: Partial<_64.DecisionPolicyWindows>): _64.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _64.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GroupInfo;
                fromPartial(object: Partial<_64.GroupInfo>): _64.GroupInfo;
            };
            GroupMember: {
                encode(message: _64.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GroupMember;
                fromPartial(object: Partial<_64.GroupMember>): _64.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _64.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GroupPolicyInfo;
                fromPartial(object: Partial<_64.GroupPolicyInfo>): _64.GroupPolicyInfo;
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
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            ExecSDKType: typeof _63.Exec;
            MsgCreateGroup: {
                encode(message: _63.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroup;
                fromPartial(object: Partial<_63.MsgCreateGroup>): _63.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _63.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroupResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupResponse>): _63.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _63.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_63.MsgUpdateGroupMembers>): _63.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupMembersResponse>): _63.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _63.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_63.MsgUpdateGroupAdmin>): _63.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupAdminResponse>): _63.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _63.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_63.MsgUpdateGroupMetadata>): _63.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupMetadataResponse>): _63.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _63.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicy>): _63.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicyResponse>): _63.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyAdmin>): _63.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicy>): _63.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicyResponse>): _63.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyAdminResponse>): _63.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyDecisionPolicy>): _63.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyDecisionPolicyResponse>): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyMetadata>): _63.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyMetadataResponse>): _63.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitProposal;
                fromPartial(object: Partial<_63.MsgSubmitProposal>): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_63.MsgSubmitProposalResponse>): _63.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _63.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgWithdrawProposal;
                fromPartial(object: Partial<_63.MsgWithdrawProposal>): _63.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _63.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_63.MsgWithdrawProposalResponse>): _63.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgVote;
                fromPartial(object: Partial<_63.MsgVote>): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgVoteResponse;
                fromPartial(_: Partial<_63.MsgVoteResponse>): _63.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _63.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgExec;
                fromPartial(object: Partial<_63.MsgExec>): _63.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _63.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgExecResponse;
                fromPartial(object: Partial<_63.MsgExecResponse>): _63.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _63.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgLeaveGroup;
                fromPartial(object: Partial<_63.MsgLeaveGroup>): _63.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _63.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_63.MsgLeaveGroupResponse>): _63.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _62.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupInfoRequest;
                fromPartial(object: Partial<_62.QueryGroupInfoRequest>): _62.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _62.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupInfoResponse;
                fromPartial(object: Partial<_62.QueryGroupInfoResponse>): _62.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoRequest>): _62.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoResponse>): _62.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _62.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupMembersRequest;
                fromPartial(object: Partial<_62.QueryGroupMembersRequest>): _62.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _62.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupMembersResponse;
                fromPartial(object: Partial<_62.QueryGroupMembersResponse>): _62.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _62.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_62.QueryGroupsByAdminRequest>): _62.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _62.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_62.QueryGroupsByAdminResponse>): _62.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupRequest>): _62.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupResponse>): _62.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminRequest>): _62.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminResponse>): _62.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalRequest;
                fromPartial(object: Partial<_62.QueryProposalRequest>): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalResponse;
                fromPartial(object: Partial<_62.QueryProposalResponse>): _62.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyRequest>): _62.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyResponse>): _62.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterRequest>): _62.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterResponse>): _62.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _62.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_62.QueryVotesByProposalRequest>): _62.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _62.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_62.QueryVotesByProposalResponse>): _62.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _62.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_62.QueryVotesByVoterRequest>): _62.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _62.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_62.QueryVotesByVoterResponse>): _62.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _62.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_62.QueryGroupsByMemberRequest>): _62.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _62.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_62.QueryGroupsByMemberResponse>): _62.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                fromPartial(object: Partial<_62.QueryTallyResultRequest>): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                fromPartial(object: Partial<_62.QueryTallyResultResponse>): _62.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _62.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsRequest;
                fromPartial(object: Partial<_62.QueryGroupsRequest>): _62.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _62.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.QueryGroupsResponse;
                fromPartial(object: Partial<_62.QueryGroupsResponse>): _62.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _60.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventCreateGroup;
                fromPartial(object: Partial<_60.EventCreateGroup>): _60.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _60.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventUpdateGroup;
                fromPartial(object: Partial<_60.EventUpdateGroup>): _60.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _60.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventCreateGroupPolicy;
                fromPartial(object: Partial<_60.EventCreateGroupPolicy>): _60.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _60.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_60.EventUpdateGroupPolicy>): _60.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _60.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventSubmitProposal;
                fromPartial(object: Partial<_60.EventSubmitProposal>): _60.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _60.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventWithdrawProposal;
                fromPartial(object: Partial<_60.EventWithdrawProposal>): _60.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _60.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventVote;
                fromPartial(object: Partial<_60.EventVote>): _60.EventVote;
            };
            EventExec: {
                encode(message: _60.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventExec;
                fromPartial(object: Partial<_60.EventExec>): _60.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _60.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.EventLeaveGroup;
                fromPartial(object: Partial<_60.EventLeaveGroup>): _60.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryParamsRequest;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _67.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryInflationRequest;
                fromPartial(_: Partial<_67.QueryInflationRequest>): _67.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _67.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryInflationResponse;
                fromPartial(object: Partial<_67.QueryInflationResponse>): _67.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_67.QueryAnnualProvisionsRequest>): _67.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_67.QueryAnnualProvisionsResponse>): _67.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _66.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.Minter;
                fromPartial(object: Partial<_66.Minter>): _66.Minter;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.Params;
                fromPartial(object: Partial<_66.Params>): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _73.MsgSend) => {
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
                    }) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgSend;
                fromPartial(object: Partial<_73.MsgSend>): _73.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgSendResponse;
                fromPartial(_: Partial<_73.MsgSendResponse>): _73.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryBalanceRequest;
                fromPartial(object: Partial<_72.QueryBalanceRequest>): _72.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryBalanceResponse;
                fromPartial(object: Partial<_72.QueryBalanceResponse>): _72.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryOwnerRequest;
                fromPartial(object: Partial<_72.QueryOwnerRequest>): _72.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryOwnerResponse;
                fromPartial(object: Partial<_72.QueryOwnerResponse>): _72.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QuerySupplyRequest;
                fromPartial(object: Partial<_72.QuerySupplyRequest>): _72.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QuerySupplyResponse;
                fromPartial(object: Partial<_72.QuerySupplyResponse>): _72.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryNFTsRequest;
                fromPartial(object: Partial<_72.QueryNFTsRequest>): _72.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryNFTsResponse;
                fromPartial(object: Partial<_72.QueryNFTsResponse>): _72.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryNFTRequest;
                fromPartial(object: Partial<_72.QueryNFTRequest>): _72.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryNFTResponse;
                fromPartial(object: Partial<_72.QueryNFTResponse>): _72.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryClassRequest;
                fromPartial(object: Partial<_72.QueryClassRequest>): _72.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryClassResponse;
                fromPartial(object: Partial<_72.QueryClassResponse>): _72.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryClassesRequest;
                fromPartial(object: Partial<_72.QueryClassesRequest>): _72.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryClassesResponse;
                fromPartial(object: Partial<_72.QueryClassesResponse>): _72.QueryClassesResponse;
            };
            Class: {
                encode(message: _71.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Class;
                fromPartial(object: Partial<_71.Class>): _71.Class;
            };
            NFT: {
                encode(message: _71.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.NFT;
                fromPartial(object: Partial<_71.NFT>): _71.NFT;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
            Entry: {
                encode(message: _70.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Entry;
                fromPartial(object: Partial<_70.Entry>): _70.Entry;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.EventSend;
                fromPartial(object: Partial<_69.EventSend>): _69.EventSend;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.EventMint;
                fromPartial(object: Partial<_69.EventMint>): _69.EventMint;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.EventBurn;
                fromPartial(object: Partial<_69.EventBurn>): _69.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _74.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _74.Module;
                    fromPartial(_: Partial<_74.Module>): _74.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _75.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.TableDescriptor;
                fromPartial(object: Partial<_75.TableDescriptor>): _75.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _75.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_75.PrimaryKeyDescriptor>): _75.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _75.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_75.SecondaryIndexDescriptor>): _75.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _75.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SingletonDescriptor;
                fromPartial(object: Partial<_75.SingletonDescriptor>): _75.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _76.StorageType;
            storageTypeToJSON(object: _76.StorageType): string;
            StorageType: typeof _76.StorageType;
            StorageTypeSDKType: typeof _76.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _76.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor>): _76.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _76.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor_FileEntry>): _76.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.QueryParamsRequest;
                fromPartial(object: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.QueryParamsResponse;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _78.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.QuerySubspacesRequest;
                fromPartial(_: Partial<_78.QuerySubspacesRequest>): _78.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _78.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.QuerySubspacesResponse;
                fromPartial(object: Partial<_78.QuerySubspacesResponse>): _78.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _78.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Subspace;
                fromPartial(object: Partial<_78.Subspace>): _78.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _77.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.ParameterChangeProposal;
                fromPartial(object: Partial<_77.ParameterChangeProposal>): _77.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _77.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.ParamChange;
                fromPartial(object: Partial<_77.ParamChange>): _77.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _82.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _82.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _82.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgUnjail;
                fromPartial(object: Partial<_82.MsgUnjail>): _82.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _82.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgUnjailResponse;
                fromPartial(_: Partial<_82.MsgUnjailResponse>): _82.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _81.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorSigningInfo;
                fromPartial(object: Partial<_81.ValidatorSigningInfo>): _81.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _80.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySigningInfoRequest;
                fromPartial(object: Partial<_80.QuerySigningInfoRequest>): _80.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _80.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySigningInfoResponse;
                fromPartial(object: Partial<_80.QuerySigningInfoResponse>): _80.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _80.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySigningInfosRequest;
                fromPartial(object: Partial<_80.QuerySigningInfosRequest>): _80.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _80.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QuerySigningInfosResponse;
                fromPartial(object: Partial<_80.QuerySigningInfosResponse>): _80.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
            SigningInfo: {
                encode(message: _79.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.SigningInfo;
                fromPartial(object: Partial<_79.SigningInfo>): _79.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _79.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.ValidatorMissedBlocks;
                fromPartial(object: Partial<_79.ValidatorMissedBlocks>): _79.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _79.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.MissedBlock;
                fromPartial(object: Partial<_79.MissedBlock>): _79.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _87.MsgCreateValidator) => {
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
                    }) => _87.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _87.MsgEditValidator) => {
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
                    }) => _87.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgDelegate) => {
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
                    }) => _87.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _87.MsgBeginRedelegate) => {
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
                    }) => _87.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgUndelegate) => {
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
                    }) => _87.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _87.MsgCancelUnbondingDelegation) => {
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
                    }) => _87.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _87.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgCreateValidator;
                fromPartial(object: Partial<_87.MsgCreateValidator>): _87.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _87.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_87.MsgCreateValidatorResponse>): _87.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _87.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgEditValidator;
                fromPartial(object: Partial<_87.MsgEditValidator>): _87.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _87.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgEditValidatorResponse;
                fromPartial(_: Partial<_87.MsgEditValidatorResponse>): _87.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _87.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgDelegate;
                fromPartial(object: Partial<_87.MsgDelegate>): _87.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _87.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgDelegateResponse;
                fromPartial(_: Partial<_87.MsgDelegateResponse>): _87.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _87.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgBeginRedelegate;
                fromPartial(object: Partial<_87.MsgBeginRedelegate>): _87.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _87.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_87.MsgBeginRedelegateResponse>): _87.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _87.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgUndelegate;
                fromPartial(object: Partial<_87.MsgUndelegate>): _87.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _87.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgUndelegateResponse;
                fromPartial(object: Partial<_87.MsgUndelegateResponse>): _87.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _87.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_87.MsgCancelUnbondingDelegation>): _87.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _87.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_87.MsgCancelUnbondingDelegationResponse>): _87.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _86.BondStatus;
            bondStatusToJSON(object: _86.BondStatus): string;
            BondStatus: typeof _86.BondStatus;
            BondStatusSDKType: typeof _86.BondStatus;
            HistoricalInfo: {
                encode(message: _86.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.HistoricalInfo;
                fromPartial(object: Partial<_86.HistoricalInfo>): _86.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _86.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.CommissionRates;
                fromPartial(object: Partial<_86.CommissionRates>): _86.CommissionRates;
            };
            Commission: {
                encode(message: _86.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Commission;
                fromPartial(object: Partial<_86.Commission>): _86.Commission;
            };
            Description: {
                encode(message: _86.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Description;
                fromPartial(object: Partial<_86.Description>): _86.Description;
            };
            Validator: {
                encode(message: _86.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Validator;
                fromPartial(object: Partial<_86.Validator>): _86.Validator;
            };
            ValAddresses: {
                encode(message: _86.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValAddresses;
                fromPartial(object: Partial<_86.ValAddresses>): _86.ValAddresses;
            };
            DVPair: {
                encode(message: _86.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DVPair;
                fromPartial(object: Partial<_86.DVPair>): _86.DVPair;
            };
            DVPairs: {
                encode(message: _86.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DVPairs;
                fromPartial(object: Partial<_86.DVPairs>): _86.DVPairs;
            };
            DVVTriplet: {
                encode(message: _86.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DVVTriplet;
                fromPartial(object: Partial<_86.DVVTriplet>): _86.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _86.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DVVTriplets;
                fromPartial(object: Partial<_86.DVVTriplets>): _86.DVVTriplets;
            };
            Delegation: {
                encode(message: _86.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Delegation;
                fromPartial(object: Partial<_86.Delegation>): _86.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _86.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.UnbondingDelegation;
                fromPartial(object: Partial<_86.UnbondingDelegation>): _86.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _86.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.UnbondingDelegationEntry;
                fromPartial(object: Partial<_86.UnbondingDelegationEntry>): _86.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _86.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.RedelegationEntry;
                fromPartial(object: Partial<_86.RedelegationEntry>): _86.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _86.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Redelegation;
                fromPartial(object: Partial<_86.Redelegation>): _86.Redelegation;
            };
            Params: {
                encode(message: _86.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Params;
                fromPartial(object: Partial<_86.Params>): _86.Params;
            };
            DelegationResponse: {
                encode(message: _86.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.DelegationResponse;
                fromPartial(object: Partial<_86.DelegationResponse>): _86.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _86.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.RedelegationEntryResponse;
                fromPartial(object: Partial<_86.RedelegationEntryResponse>): _86.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _86.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.RedelegationResponse;
                fromPartial(object: Partial<_86.RedelegationResponse>): _86.RedelegationResponse;
            };
            Pool: {
                encode(message: _86.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Pool;
                fromPartial(object: Partial<_86.Pool>): _86.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _85.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorsRequest;
                fromPartial(object: Partial<_85.QueryValidatorsRequest>): _85.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _85.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorsResponse;
                fromPartial(object: Partial<_85.QueryValidatorsResponse>): _85.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _85.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorRequest;
                fromPartial(object: Partial<_85.QueryValidatorRequest>): _85.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _85.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorResponse;
                fromPartial(object: Partial<_85.QueryValidatorResponse>): _85.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _85.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsRequest>): _85.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _85.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsResponse>): _85.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsRequest>): _85.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsResponse>): _85.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _85.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegationRequest;
                fromPartial(object: Partial<_85.QueryDelegationRequest>): _85.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _85.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegationResponse;
                fromPartial(object: Partial<_85.QueryDelegationResponse>): _85.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _85.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationRequest>): _85.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _85.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationResponse>): _85.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _85.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsRequest>): _85.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _85.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsResponse>): _85.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsRequest>): _85.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsResponse>): _85.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _85.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryRedelegationsRequest;
                fromPartial(object: Partial<_85.QueryRedelegationsRequest>): _85.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _85.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryRedelegationsResponse;
                fromPartial(object: Partial<_85.QueryRedelegationsResponse>): _85.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _85.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsRequest>): _85.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _85.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsResponse>): _85.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _85.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorRequest>): _85.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _85.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorResponse>): _85.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _85.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_85.QueryHistoricalInfoRequest>): _85.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _85.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_85.QueryHistoricalInfoResponse>): _85.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _85.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.QueryPoolRequest;
                fromPartial(_: Partial<_85.QueryPoolRequest>): _85.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _85.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryPoolResponse;
                fromPartial(object: Partial<_85.QueryPoolResponse>): _85.QueryPoolResponse;
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
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _84.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.LastValidatorPower;
                fromPartial(object: Partial<_84.LastValidatorPower>): _84.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _83.AuthorizationType;
            authorizationTypeToJSON(object: _83.AuthorizationType): string;
            AuthorizationType: typeof _83.AuthorizationType;
            AuthorizationTypeSDKType: typeof _83.AuthorizationType;
            StakeAuthorization: {
                encode(message: _83.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.StakeAuthorization;
                fromPartial(object: Partial<_83.StakeAuthorization>): _83.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _83.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.StakeAuthorization_Validators;
                fromPartial(object: Partial<_83.StakeAuthorization_Validators>): _83.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _88.SignMode;
                signModeToJSON(object: _88.SignMode): string;
                SignMode: typeof _88.SignMode;
                SignModeSDKType: typeof _88.SignMode;
                SignatureDescriptors: {
                    encode(message: _88.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SignatureDescriptors;
                    fromPartial(object: Partial<_88.SignatureDescriptors>): _88.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _88.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SignatureDescriptor;
                    fromPartial(object: Partial<_88.SignatureDescriptor>): _88.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _88.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data>): _88.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _88.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Single>): _88.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _88.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Multi>): _88.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _177.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _158.LCDQueryClient;
            Tx: {
                encode(message: _90.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Tx;
                fromPartial(object: Partial<_90.Tx>): _90.Tx;
            };
            TxRaw: {
                encode(message: _90.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.TxRaw;
                fromPartial(object: Partial<_90.TxRaw>): _90.TxRaw;
            };
            SignDoc: {
                encode(message: _90.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.SignDoc;
                fromPartial(object: Partial<_90.SignDoc>): _90.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _90.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.SignDocDirectAux;
                fromPartial(object: Partial<_90.SignDocDirectAux>): _90.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _90.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.TxBody;
                fromPartial(object: Partial<_90.TxBody>): _90.TxBody;
            };
            AuthInfo: {
                encode(message: _90.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AuthInfo;
                fromPartial(object: Partial<_90.AuthInfo>): _90.AuthInfo;
            };
            SignerInfo: {
                encode(message: _90.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.SignerInfo;
                fromPartial(object: Partial<_90.SignerInfo>): _90.SignerInfo;
            };
            ModeInfo: {
                encode(message: _90.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ModeInfo;
                fromPartial(object: Partial<_90.ModeInfo>): _90.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _90.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ModeInfo_Single;
                fromPartial(object: Partial<_90.ModeInfo_Single>): _90.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _90.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ModeInfo_Multi;
                fromPartial(object: Partial<_90.ModeInfo_Multi>): _90.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _90.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Fee;
                fromPartial(object: Partial<_90.Fee>): _90.Fee;
            };
            Tip: {
                encode(message: _90.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Tip;
                fromPartial(object: Partial<_90.Tip>): _90.Tip;
            };
            AuxSignerData: {
                encode(message: _90.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AuxSignerData;
                fromPartial(object: Partial<_90.AuxSignerData>): _90.AuxSignerData;
            };
            orderByFromJSON(object: any): _89.OrderBy;
            orderByToJSON(object: _89.OrderBy): string;
            broadcastModeFromJSON(object: any): _89.BroadcastMode;
            broadcastModeToJSON(object: _89.BroadcastMode): string;
            OrderBy: typeof _89.OrderBy;
            OrderBySDKType: typeof _89.OrderBy;
            BroadcastMode: typeof _89.BroadcastMode;
            BroadcastModeSDKType: typeof _89.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _89.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetTxsEventRequest;
                fromPartial(object: Partial<_89.GetTxsEventRequest>): _89.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _89.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetTxsEventResponse;
                fromPartial(object: Partial<_89.GetTxsEventResponse>): _89.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _89.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.BroadcastTxRequest;
                fromPartial(object: Partial<_89.BroadcastTxRequest>): _89.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _89.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.BroadcastTxResponse;
                fromPartial(object: Partial<_89.BroadcastTxResponse>): _89.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _89.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.SimulateRequest;
                fromPartial(object: Partial<_89.SimulateRequest>): _89.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _89.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.SimulateResponse;
                fromPartial(object: Partial<_89.SimulateResponse>): _89.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _89.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetTxRequest;
                fromPartial(object: Partial<_89.GetTxRequest>): _89.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _89.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetTxResponse;
                fromPartial(object: Partial<_89.GetTxResponse>): _89.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _89.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_89.GetBlockWithTxsRequest>): _89.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _89.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_89.GetBlockWithTxsResponse>): _89.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _92.MsgSoftwareUpgrade) => {
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
                    }) => _92.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _92.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _92.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _93.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Plan;
                fromPartial(object: Partial<_93.Plan>): _93.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _93.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.SoftwareUpgradeProposal>): _93.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.CancelSoftwareUpgradeProposal>): _93.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _93.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ModuleVersion;
                fromPartial(object: Partial<_93.ModuleVersion>): _93.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _92.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_92.MsgSoftwareUpgrade>): _92.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _92.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_92.MsgSoftwareUpgradeResponse>): _92.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _92.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.MsgCancelUpgrade;
                fromPartial(object: Partial<_92.MsgCancelUpgrade>): _92.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _92.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_92.MsgCancelUpgradeResponse>): _92.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _91.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _91.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_91.QueryCurrentPlanRequest>): _91.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _91.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_91.QueryCurrentPlanResponse>): _91.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _91.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_91.QueryAppliedPlanRequest>): _91.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _91.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_91.QueryAppliedPlanResponse>): _91.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _91.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateRequest>): _91.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _91.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateResponse>): _91.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _91.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_91.QueryModuleVersionsRequest>): _91.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _91.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_91.QueryModuleVersionsResponse>): _91.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _91.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _91.QueryAuthorityRequest;
                fromPartial(_: Partial<_91.QueryAuthorityRequest>): _91.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _91.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.QueryAuthorityResponse;
                fromPartial(object: Partial<_91.QueryAuthorityResponse>): _91.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _94.MsgCreateVestingAccount) => {
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
                    }) => _94.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _94.MsgCreatePermanentLockedAccount) => {
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
                    }) => _94.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _94.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _94.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _95.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.BaseVestingAccount;
                fromPartial(object: Partial<_95.BaseVestingAccount>): _95.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _95.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.ContinuousVestingAccount;
                fromPartial(object: Partial<_95.ContinuousVestingAccount>): _95.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _95.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.DelayedVestingAccount;
                fromPartial(object: Partial<_95.DelayedVestingAccount>): _95.DelayedVestingAccount;
            };
            Period: {
                encode(message: _95.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.Period;
                fromPartial(object: Partial<_95.Period>): _95.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _95.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.PeriodicVestingAccount;
                fromPartial(object: Partial<_95.PeriodicVestingAccount>): _95.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _95.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.PermanentLockedAccount;
                fromPartial(object: Partial<_95.PermanentLockedAccount>): _95.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _94.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCreateVestingAccount;
                fromPartial(object: Partial<_94.MsgCreateVestingAccount>): _94.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _94.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_94.MsgCreateVestingAccountResponse>): _94.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _94.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_94.MsgCreatePermanentLockedAccount>): _94.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _94.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_94.MsgCreatePermanentLockedAccountResponse>): _94.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _94.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_94.MsgCreatePeriodicVestingAccount>): _94.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _94.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_94.MsgCreatePeriodicVestingAccountResponse>): _94.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _179.MsgClientImpl;
                };
                bank: {
                    v1beta1: _180.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _181.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _182.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _183.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _184.MsgClientImpl;
                };
                gov: {
                    v1: _185.MsgClientImpl;
                    v1beta1: _186.MsgClientImpl;
                };
                group: {
                    v1: _187.MsgClientImpl;
                };
                nft: {
                    v1beta1: _188.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _189.MsgClientImpl;
                };
                staking: {
                    v1beta1: _190.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _191.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _192.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                        account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                        accountAddressByID(request: _6.QueryAccountAddressByIDRequest): Promise<_6.QueryAccountAddressByIDResponse>;
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _6.QueryModuleAccountByNameRequest): Promise<_6.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                        addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                        granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                        granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                        allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                        spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                        supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                        denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _19.ConfigRequest): Promise<_19.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                            getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                            getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                            getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _26.ABCIQueryRequest): Promise<_26.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                        votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                        groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                        groups(request?: _62.QueryGroupsRequest): Promise<_62.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                        annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                        signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                        validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                        validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                        unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                        delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                        pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                        getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                        broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                        getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                        getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                        appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                        authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _142.LCDQueryClient;
                };
                authz: {
                    v1beta1: _143.LCDQueryClient;
                };
                bank: {
                    v1beta1: _144.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _145.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _146.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _147.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _148.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _149.LCDQueryClient;
                };
                gov: {
                    v1: _150.LCDQueryClient;
                    v1beta1: _151.LCDQueryClient;
                };
                group: {
                    v1: _152.LCDQueryClient;
                };
                mint: {
                    v1beta1: _153.LCDQueryClient;
                };
                nft: {
                    v1beta1: _154.LCDQueryClient;
                };
                params: {
                    v1beta1: _155.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _156.LCDQueryClient;
                };
                staking: {
                    v1beta1: _157.LCDQueryClient;
                };
                tx: {
                    v1beta1: _158.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _159.LCDQueryClient;
                };
            };
        }>;
    };
}
