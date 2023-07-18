import * as _23 from "./app/module/v1alpha1/module";
import * as _24 from "./app/v1alpha1/config";
import * as _25 from "./app/v1alpha1/module";
import * as _26 from "./app/v1alpha1/query";
import * as _27 from "./auth/v1beta1/auth";
import * as _28 from "./auth/v1beta1/genesis";
import * as _29 from "./auth/v1beta1/query";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/kv/v1beta1/kv";
import * as _42 from "./base/node/v1beta1/query";
import * as _43 from "./base/query/v1beta1/pagination";
import * as _44 from "./base/reflection/v1beta1/reflection";
import * as _45 from "./base/reflection/v2alpha1/reflection";
import * as _46 from "./base/snapshots/v1beta1/snapshot";
import * as _47 from "./base/store/v1beta1/commit_info";
import * as _48 from "./base/store/v1beta1/listening";
import * as _49 from "./base/tendermint/v1beta1/query";
import * as _50 from "./base/tendermint/v1beta1/types";
import * as _51 from "./base/v1beta1/coin";
import * as _52 from "./capability/v1beta1/capability";
import * as _53 from "./capability/v1beta1/genesis";
import * as _54 from "./crisis/v1beta1/genesis";
import * as _55 from "./crisis/v1beta1/tx";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/hd/v1/hd";
import * as _58 from "./crypto/keyring/v1/record";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/v1beta1/feegrant";
import * as _71 from "./feegrant/v1beta1/genesis";
import * as _72 from "./feegrant/v1beta1/query";
import * as _73 from "./feegrant/v1beta1/tx";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/v1/events";
import * as _84 from "./group/v1/genesis";
import * as _85 from "./group/v1/query";
import * as _86 from "./group/v1/tx";
import * as _87 from "./group/v1/types";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/v1beta1/params";
import * as _101 from "./params/v1beta1/query";
import * as _102 from "./slashing/v1beta1/genesis";
import * as _103 from "./slashing/v1beta1/query";
import * as _104 from "./slashing/v1beta1/slashing";
import * as _105 from "./slashing/v1beta1/tx";
import * as _106 from "./staking/v1beta1/authz";
import * as _107 from "./staking/v1beta1/genesis";
import * as _108 from "./staking/v1beta1/query";
import * as _109 from "./staking/v1beta1/staking";
import * as _110 from "./staking/v1beta1/tx";
import * as _111 from "./tx/signing/v1beta1/signing";
import * as _112 from "./tx/v1beta1/service";
import * as _113 from "./tx/v1beta1/tx";
import * as _114 from "./upgrade/v1beta1/query";
import * as _115 from "./upgrade/v1beta1/tx";
import * as _116 from "./upgrade/v1beta1/upgrade";
import * as _117 from "./vesting/v1beta1/tx";
import * as _118 from "./vesting/v1beta1/vesting";
import * as _190 from "./auth/v1beta1/query.lcd";
import * as _191 from "./authz/v1beta1/query.lcd";
import * as _192 from "./bank/v1beta1/query.lcd";
import * as _193 from "./base/node/v1beta1/query.lcd";
import * as _194 from "./base/tendermint/v1beta1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./evidence/v1beta1/query.lcd";
import * as _197 from "./feegrant/v1beta1/query.lcd";
import * as _198 from "./gov/v1/query.lcd";
import * as _199 from "./gov/v1beta1/query.lcd";
import * as _200 from "./group/v1/query.lcd";
import * as _201 from "./mint/v1beta1/query.lcd";
import * as _202 from "./nft/v1beta1/query.lcd";
import * as _203 from "./params/v1beta1/query.lcd";
import * as _204 from "./slashing/v1beta1/query.lcd";
import * as _205 from "./staking/v1beta1/query.lcd";
import * as _206 from "./tx/v1beta1/service.lcd";
import * as _207 from "./upgrade/v1beta1/query.lcd";
import * as _208 from "./app/v1alpha1/query.rpc.Query";
import * as _209 from "./auth/v1beta1/query.rpc.Query";
import * as _210 from "./authz/v1beta1/query.rpc.Query";
import * as _211 from "./bank/v1beta1/query.rpc.Query";
import * as _212 from "./base/node/v1beta1/query.rpc.Service";
import * as _213 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _214 from "./distribution/v1beta1/query.rpc.Query";
import * as _215 from "./evidence/v1beta1/query.rpc.Query";
import * as _216 from "./feegrant/v1beta1/query.rpc.Query";
import * as _217 from "./gov/v1/query.rpc.Query";
import * as _218 from "./gov/v1beta1/query.rpc.Query";
import * as _219 from "./group/v1/query.rpc.Query";
import * as _220 from "./mint/v1beta1/query.rpc.Query";
import * as _221 from "./nft/v1beta1/query.rpc.Query";
import * as _222 from "./params/v1beta1/query.rpc.Query";
import * as _223 from "./slashing/v1beta1/query.rpc.Query";
import * as _224 from "./staking/v1beta1/query.rpc.Query";
import * as _225 from "./tx/v1beta1/service.rpc.Service";
import * as _226 from "./upgrade/v1beta1/query.rpc.Query";
import * as _227 from "./authz/v1beta1/tx.rpc.msg";
import * as _228 from "./bank/v1beta1/tx.rpc.msg";
import * as _229 from "./crisis/v1beta1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./evidence/v1beta1/tx.rpc.msg";
import * as _232 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _233 from "./gov/v1/tx.rpc.msg";
import * as _234 from "./gov/v1beta1/tx.rpc.msg";
import * as _235 from "./group/v1/tx.rpc.msg";
import * as _236 from "./nft/v1beta1/tx.rpc.msg";
import * as _237 from "./slashing/v1beta1/tx.rpc.msg";
import * as _238 from "./staking/v1beta1/tx.rpc.msg";
import * as _239 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _240 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _23.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _23.Module;
                    fromPartial(_: Partial<_23.Module>): _23.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _26.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.QueryConfigRequest;
                fromPartial(_: Partial<_26.QueryConfigRequest>): _26.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _26.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryConfigResponse;
                fromPartial(object: Partial<_26.QueryConfigResponse>): _26.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _25.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.ModuleDescriptor;
                fromPartial(object: Partial<_25.ModuleDescriptor>): _25.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _25.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.PackageReference;
                fromPartial(object: Partial<_25.PackageReference>): _25.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _25.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MigrateFromInfo;
                fromPartial(object: Partial<_25.MigrateFromInfo>): _25.MigrateFromInfo;
            };
            Config: {
                encode(message: _24.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Config;
                fromPartial(object: Partial<_24.Config>): _24.Config;
            };
            ModuleConfig: {
                encode(message: _24.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.ModuleConfig;
                fromPartial(object: Partial<_24.ModuleConfig>): _24.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                accountAddressByID(request: _29.QueryAccountAddressByIDRequest): Promise<_29.QueryAccountAddressByIDResponse>;
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                moduleAccounts(request?: _29.QueryModuleAccountsRequest): Promise<_29.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _29.Bech32PrefixRequest): Promise<_29.Bech32PrefixResponse>;
                addressBytesToString(request: _29.AddressBytesToStringRequest): Promise<_29.AddressBytesToStringResponse>;
                addressStringToBytes(request: _29.AddressStringToBytesRequest): Promise<_29.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _29.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountsRequest;
                fromPartial(object: Partial<_29.QueryAccountsRequest>): _29.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _29.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountsResponse;
                fromPartial(object: Partial<_29.QueryAccountsResponse>): _29.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _29.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountRequest;
                fromPartial(object: Partial<_29.QueryAccountRequest>): _29.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _29.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountResponse;
                fromPartial(object: Partial<_29.QueryAccountResponse>): _29.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _29.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_29.QueryModuleAccountsRequest>): _29.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _29.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountsResponse>): _29.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _29.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameRequest>): _29.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _29.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_29.QueryModuleAccountByNameResponse>): _29.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _29.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.Bech32PrefixRequest;
                fromPartial(_: Partial<_29.Bech32PrefixRequest>): _29.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _29.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.Bech32PrefixResponse;
                fromPartial(object: Partial<_29.Bech32PrefixResponse>): _29.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _29.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.AddressBytesToStringRequest;
                fromPartial(object: Partial<_29.AddressBytesToStringRequest>): _29.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _29.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.AddressBytesToStringResponse;
                fromPartial(object: Partial<_29.AddressBytesToStringResponse>): _29.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _29.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.AddressStringToBytesRequest;
                fromPartial(object: Partial<_29.AddressStringToBytesRequest>): _29.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _29.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.AddressStringToBytesResponse;
                fromPartial(object: Partial<_29.AddressStringToBytesResponse>): _29.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _29.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_29.QueryAccountAddressByIDRequest>): _29.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _29.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_29.QueryAccountAddressByIDResponse>): _29.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
            BaseAccount: {
                encode(message: _27.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.BaseAccount;
                fromPartial(object: Partial<_27.BaseAccount>): _27.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _27.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.ModuleAccount;
                fromPartial(object: Partial<_27.ModuleAccount>): _27.ModuleAccount;
            };
            Params: {
                encode(message: _27.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _34.MsgGrant): {
                        typeUrl: string;
                        value: _34.MsgGrant;
                    };
                    exec(value: _34.MsgExec): {
                        typeUrl: string;
                        value: _34.MsgExec;
                    };
                    revoke(value: _34.MsgRevoke): {
                        typeUrl: string;
                        value: _34.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _34.MsgGrant) => {
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
                    }) => _34.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _34.MsgExec) => {
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
                    }) => _34.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _34.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _34.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _34.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgGrant;
                fromPartial(object: Partial<_34.MsgGrant>): _34.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _34.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgExecResponse;
                fromPartial(object: Partial<_34.MsgExecResponse>): _34.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _34.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgExec;
                fromPartial(object: Partial<_34.MsgExec>): _34.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _34.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MsgGrantResponse;
                fromPartial(_: Partial<_34.MsgGrantResponse>): _34.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _34.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MsgRevoke;
                fromPartial(object: Partial<_34.MsgRevoke>): _34.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _34.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MsgRevokeResponse;
                fromPartial(_: Partial<_34.MsgRevokeResponse>): _34.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _33.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGrantsRequest;
                fromPartial(object: Partial<_33.QueryGrantsRequest>): _33.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _33.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGrantsResponse;
                fromPartial(object: Partial<_33.QueryGrantsResponse>): _33.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _33.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranterGrantsRequest>): _33.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _33.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranterGrantsResponse>): _33.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _33.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_33.QueryGranteeGrantsRequest>): _33.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _33.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_33.QueryGranteeGrantsResponse>): _33.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            EventGrant: {
                encode(message: _31.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.EventGrant;
                fromPartial(object: Partial<_31.EventGrant>): _31.EventGrant;
            };
            EventRevoke: {
                encode(message: _31.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.EventRevoke;
                fromPartial(object: Partial<_31.EventRevoke>): _31.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _30.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenericAuthorization;
                fromPartial(object: Partial<_30.GenericAuthorization>): _30.GenericAuthorization;
            };
            Grant: {
                encode(message: _30.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Grant;
                fromPartial(object: Partial<_30.Grant>): _30.Grant;
            };
            GrantAuthorization: {
                encode(message: _30.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GrantAuthorization;
                fromPartial(object: Partial<_30.GrantAuthorization>): _30.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _30.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GrantQueueItem;
                fromPartial(object: Partial<_30.GrantQueueItem>): _30.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _38.QueryBalanceRequest): Promise<_38.QueryBalanceResponse>;
                allBalances(request: _38.QueryAllBalancesRequest): Promise<_38.QueryAllBalancesResponse>;
                spendableBalances(request: _38.QuerySpendableBalancesRequest): Promise<_38.QuerySpendableBalancesResponse>;
                totalSupply(request?: _38.QueryTotalSupplyRequest): Promise<_38.QueryTotalSupplyResponse>;
                supplyOf(request: _38.QuerySupplyOfRequest): Promise<_38.QuerySupplyOfResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                denomMetadata(request: _38.QueryDenomMetadataRequest): Promise<_38.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _38.QueryDenomsMetadataRequest): Promise<_38.QueryDenomsMetadataResponse>;
                denomOwners(request: _38.QueryDenomOwnersRequest): Promise<_38.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _39.MsgSend) => {
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
                    }) => _39.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _39.MsgMultiSend) => {
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
                    }) => _39.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _39.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.MsgSend;
                fromPartial(object: Partial<_39.MsgSend>): _39.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _39.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.MsgSendResponse;
                fromPartial(_: Partial<_39.MsgSendResponse>): _39.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _39.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.MsgMultiSend;
                fromPartial(object: Partial<_39.MsgMultiSend>): _39.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _39.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.MsgMultiSendResponse;
                fromPartial(_: Partial<_39.MsgMultiSendResponse>): _39.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _38.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryBalanceRequest;
                fromPartial(object: Partial<_38.QueryBalanceRequest>): _38.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _38.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryBalanceResponse;
                fromPartial(object: Partial<_38.QueryBalanceResponse>): _38.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _38.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryAllBalancesRequest;
                fromPartial(object: Partial<_38.QueryAllBalancesRequest>): _38.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _38.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryAllBalancesResponse;
                fromPartial(object: Partial<_38.QueryAllBalancesResponse>): _38.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _38.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_38.QuerySpendableBalancesRequest>): _38.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _38.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_38.QuerySpendableBalancesResponse>): _38.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _38.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_38.QueryTotalSupplyRequest>): _38.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _38.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_38.QueryTotalSupplyResponse>): _38.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _38.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QuerySupplyOfRequest;
                fromPartial(object: Partial<_38.QuerySupplyOfRequest>): _38.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _38.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QuerySupplyOfResponse;
                fromPartial(object: Partial<_38.QuerySupplyOfResponse>): _38.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.QueryParamsRequest;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryParamsResponse;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _38.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_38.QueryDenomsMetadataRequest>): _38.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _38.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_38.QueryDenomsMetadataResponse>): _38.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _38.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_38.QueryDenomMetadataRequest>): _38.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _38.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_38.QueryDenomMetadataResponse>): _38.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _38.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_38.QueryDenomOwnersRequest>): _38.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _38.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.DenomOwner;
                fromPartial(object: Partial<_38.DenomOwner>): _38.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _38.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_38.QueryDenomOwnersResponse>): _38.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
            Balance: {
                encode(message: _37.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.Balance;
                fromPartial(object: Partial<_37.Balance>): _37.Balance;
            };
            Params: {
                encode(message: _36.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Params;
                fromPartial(object: Partial<_36.Params>): _36.Params;
            };
            SendEnabled: {
                encode(message: _36.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.SendEnabled;
                fromPartial(object: Partial<_36.SendEnabled>): _36.SendEnabled;
            };
            Input: {
                encode(message: _36.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Input;
                fromPartial(object: Partial<_36.Input>): _36.Input;
            };
            Output: {
                encode(message: _36.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Output;
                fromPartial(object: Partial<_36.Output>): _36.Output;
            };
            Supply: {
                encode(message: _36.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Supply;
                fromPartial(object: Partial<_36.Supply>): _36.Supply;
            };
            DenomUnit: {
                encode(message: _36.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.DenomUnit;
                fromPartial(object: Partial<_36.DenomUnit>): _36.DenomUnit;
            };
            Metadata: {
                encode(message: _36.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Metadata;
                fromPartial(object: Partial<_36.Metadata>): _36.Metadata;
            };
            SendAuthorization: {
                encode(message: _35.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.SendAuthorization;
                fromPartial(object: Partial<_35.SendAuthorization>): _35.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _40.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.TxResponse;
                    fromPartial(object: Partial<_40.TxResponse>): _40.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _40.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.ABCIMessageLog;
                    fromPartial(object: Partial<_40.ABCIMessageLog>): _40.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _40.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.StringEvent;
                    fromPartial(object: Partial<_40.StringEvent>): _40.StringEvent;
                };
                Attribute: {
                    encode(message: _40.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.Attribute;
                    fromPartial(object: Partial<_40.Attribute>): _40.Attribute;
                };
                GasInfo: {
                    encode(message: _40.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.GasInfo;
                    fromPartial(object: Partial<_40.GasInfo>): _40.GasInfo;
                };
                Result: {
                    encode(message: _40.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.Result;
                    fromPartial(object: Partial<_40.Result>): _40.Result;
                };
                SimulationResponse: {
                    encode(message: _40.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SimulationResponse;
                    fromPartial(object: Partial<_40.SimulationResponse>): _40.SimulationResponse;
                };
                MsgData: {
                    encode(message: _40.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.MsgData;
                    fromPartial(object: Partial<_40.MsgData>): _40.MsgData;
                };
                TxMsgData: {
                    encode(message: _40.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.TxMsgData;
                    fromPartial(object: Partial<_40.TxMsgData>): _40.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _40.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.SearchTxsResult;
                    fromPartial(object: Partial<_40.SearchTxsResult>): _40.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _41.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.Pairs;
                    fromPartial(object: Partial<_41.Pairs>): _41.Pairs;
                };
                Pair: {
                    encode(message: _41.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.Pair;
                    fromPartial(object: Partial<_41.Pair>): _41.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _212.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _42.ConfigRequest): Promise<_42.ConfigResponse>;
                };
                LCDQueryClient: typeof _193.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _42.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.ConfigRequest;
                    fromPartial(_: Partial<_42.ConfigRequest>): _42.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _42.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.ConfigResponse;
                    fromPartial(object: Partial<_42.ConfigResponse>): _42.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _43.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.PageRequest;
                    fromPartial(object: Partial<_43.PageRequest>): _43.PageRequest;
                };
                PageResponse: {
                    encode(message: _43.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.PageResponse;
                    fromPartial(object: Partial<_43.PageResponse>): _43.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _44.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _44.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_44.ListAllInterfacesRequest>): _44.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _44.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_44.ListAllInterfacesResponse>): _44.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _44.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.ListImplementationsRequest;
                    fromPartial(object: Partial<_44.ListImplementationsRequest>): _44.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _44.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.ListImplementationsResponse;
                    fromPartial(object: Partial<_44.ListImplementationsResponse>): _44.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _45.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.AppDescriptor;
                    fromPartial(object: Partial<_45.AppDescriptor>): _45.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _45.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.TxDescriptor;
                    fromPartial(object: Partial<_45.TxDescriptor>): _45.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _45.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.AuthnDescriptor;
                    fromPartial(object: Partial<_45.AuthnDescriptor>): _45.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _45.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.SigningModeDescriptor;
                    fromPartial(object: Partial<_45.SigningModeDescriptor>): _45.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _45.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.ChainDescriptor;
                    fromPartial(object: Partial<_45.ChainDescriptor>): _45.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _45.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.CodecDescriptor;
                    fromPartial(object: Partial<_45.CodecDescriptor>): _45.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _45.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.InterfaceDescriptor;
                    fromPartial(object: Partial<_45.InterfaceDescriptor>): _45.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _45.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_45.InterfaceImplementerDescriptor>): _45.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _45.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_45.InterfaceAcceptingMessageDescriptor>): _45.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _45.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.ConfigurationDescriptor;
                    fromPartial(object: Partial<_45.ConfigurationDescriptor>): _45.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _45.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.MsgDescriptor;
                    fromPartial(object: Partial<_45.MsgDescriptor>): _45.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _45.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_45.GetAuthnDescriptorRequest>): _45.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _45.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_45.GetAuthnDescriptorResponse>): _45.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _45.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_45.GetChainDescriptorRequest>): _45.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _45.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_45.GetChainDescriptorResponse>): _45.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _45.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_45.GetCodecDescriptorRequest>): _45.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _45.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_45.GetCodecDescriptorResponse>): _45.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _45.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_45.GetConfigurationDescriptorRequest>): _45.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _45.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_45.GetConfigurationDescriptorResponse>): _45.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _45.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_45.GetQueryServicesDescriptorRequest>): _45.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _45.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_45.GetQueryServicesDescriptorResponse>): _45.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _45.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_45.GetTxDescriptorRequest>): _45.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _45.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_45.GetTxDescriptorResponse>): _45.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _45.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.QueryServicesDescriptor;
                    fromPartial(object: Partial<_45.QueryServicesDescriptor>): _45.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _45.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.QueryServiceDescriptor;
                    fromPartial(object: Partial<_45.QueryServiceDescriptor>): _45.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _45.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.QueryMethodDescriptor;
                    fromPartial(object: Partial<_45.QueryMethodDescriptor>): _45.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _46.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.Snapshot;
                    fromPartial(object: Partial<_46.Snapshot>): _46.Snapshot;
                };
                Metadata: {
                    encode(message: _46.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.Metadata;
                    fromPartial(object: Partial<_46.Metadata>): _46.Metadata;
                };
                SnapshotItem: {
                    encode(message: _46.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotItem;
                    fromPartial(object: Partial<_46.SnapshotItem>): _46.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _46.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotStoreItem;
                    fromPartial(object: Partial<_46.SnapshotStoreItem>): _46.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _46.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotIAVLItem;
                    fromPartial(object: Partial<_46.SnapshotIAVLItem>): _46.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _46.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_46.SnapshotExtensionMeta>): _46.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _46.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_46.SnapshotExtensionPayload>): _46.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _46.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotKVItem;
                    fromPartial(object: Partial<_46.SnapshotKVItem>): _46.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _46.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.SnapshotSchema;
                    fromPartial(object: Partial<_46.SnapshotSchema>): _46.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _48.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.StoreKVPair;
                    fromPartial(object: Partial<_48.StoreKVPair>): _48.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _48.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.BlockMetadata;
                    fromPartial(object: Partial<_48.BlockMetadata>): _48.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _48.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_48.BlockMetadata_DeliverTx>): _48.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _47.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.CommitInfo;
                    fromPartial(object: Partial<_47.CommitInfo>): _47.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _47.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.StoreInfo;
                    fromPartial(object: Partial<_47.StoreInfo>): _47.StoreInfo;
                };
                CommitID: {
                    encode(message: _47.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.CommitID;
                    fromPartial(object: Partial<_47.CommitID>): _47.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _213.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _49.GetNodeInfoRequest): Promise<_49.GetNodeInfoResponse>;
                    getSyncing(request?: _49.GetSyncingRequest): Promise<_49.GetSyncingResponse>;
                    getLatestBlock(request?: _49.GetLatestBlockRequest): Promise<_49.GetLatestBlockResponse>;
                    getBlockByHeight(request: _49.GetBlockByHeightRequest): Promise<_49.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _49.GetLatestValidatorSetRequest): Promise<_49.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _49.GetValidatorSetByHeightRequest): Promise<_49.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _49.ABCIQueryRequest): Promise<_49.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _194.LCDQueryClient;
                Block: {
                    encode(message: _50.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.Block;
                    fromPartial(object: Partial<_50.Block>): _50.Block;
                };
                Header: {
                    encode(message: _50.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.Header;
                    fromPartial(object: Partial<_50.Header>): _50.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _49.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_49.GetValidatorSetByHeightRequest>): _49.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _49.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_49.GetValidatorSetByHeightResponse>): _49.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _49.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_49.GetLatestValidatorSetRequest>): _49.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _49.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_49.GetLatestValidatorSetResponse>): _49.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _49.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Validator;
                    fromPartial(object: Partial<_49.Validator>): _49.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _49.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_49.GetBlockByHeightRequest>): _49.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _49.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_49.GetBlockByHeightResponse>): _49.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _49.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _49.GetLatestBlockRequest;
                    fromPartial(_: Partial<_49.GetLatestBlockRequest>): _49.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _49.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetLatestBlockResponse;
                    fromPartial(object: Partial<_49.GetLatestBlockResponse>): _49.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _49.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _49.GetSyncingRequest;
                    fromPartial(_: Partial<_49.GetSyncingRequest>): _49.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _49.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetSyncingResponse;
                    fromPartial(object: Partial<_49.GetSyncingResponse>): _49.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _49.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _49.GetNodeInfoRequest;
                    fromPartial(_: Partial<_49.GetNodeInfoRequest>): _49.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _49.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.GetNodeInfoResponse;
                    fromPartial(object: Partial<_49.GetNodeInfoResponse>): _49.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _49.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.VersionInfo;
                    fromPartial(object: Partial<_49.VersionInfo>): _49.VersionInfo;
                };
                Module: {
                    encode(message: _49.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Module;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _49.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.ABCIQueryRequest;
                    fromPartial(object: Partial<_49.ABCIQueryRequest>): _49.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _49.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.ABCIQueryResponse;
                    fromPartial(object: Partial<_49.ABCIQueryResponse>): _49.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _49.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.ProofOp;
                    fromPartial(object: Partial<_49.ProofOp>): _49.ProofOp;
                };
                ProofOps: {
                    encode(message: _49.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.ProofOps;
                    fromPartial(object: Partial<_49.ProofOps>): _49.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _51.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.Coin;
                fromPartial(object: Partial<_51.Coin>): _51.Coin;
            };
            DecCoin: {
                encode(message: _51.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.DecCoin;
                fromPartial(object: Partial<_51.DecCoin>): _51.DecCoin;
            };
            IntProto: {
                encode(message: _51.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.IntProto;
                fromPartial(object: Partial<_51.IntProto>): _51.IntProto;
            };
            DecProto: {
                encode(message: _51.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.DecProto;
                fromPartial(object: Partial<_51.DecProto>): _51.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _53.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenesisOwners;
                fromPartial(object: Partial<_53.GenesisOwners>): _53.GenesisOwners;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
            Capability: {
                encode(message: _52.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Capability;
                fromPartial(object: Partial<_52.Capability>): _52.Capability;
            };
            Owner: {
                encode(message: _52.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Owner;
                fromPartial(object: Partial<_52.Owner>): _52.Owner;
            };
            CapabilityOwners: {
                encode(message: _52.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.CapabilityOwners;
                fromPartial(object: Partial<_52.CapabilityOwners>): _52.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _55.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _55.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _55.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _55.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _55.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgVerifyInvariant;
                fromPartial(object: Partial<_55.MsgVerifyInvariant>): _55.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _55.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_55.MsgVerifyInvariantResponse>): _55.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _56.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.PubKey;
                fromPartial(object: Partial<_56.PubKey>): _56.PubKey;
            };
            PrivKey: {
                encode(message: _56.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.PrivKey;
                fromPartial(object: Partial<_56.PrivKey>): _56.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _57.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _57.BIP44Params;
                    fromPartial(object: Partial<_57.BIP44Params>): _57.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _58.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.Record;
                    fromPartial(object: Partial<_58.Record>): _58.Record;
                };
                Record_Local: {
                    encode(message: _58.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.Record_Local;
                    fromPartial(object: Partial<_58.Record_Local>): _58.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _58.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _58.Record_Ledger;
                    fromPartial(object: Partial<_58.Record_Ledger>): _58.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _58.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _58.Record_Multi;
                    fromPartial(_: Partial<_58.Record_Multi>): _58.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _58.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _58.Record_Offline;
                    fromPartial(_: Partial<_58.Record_Offline>): _58.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _59.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.LegacyAminoPubKey;
                fromPartial(object: Partial<_59.LegacyAminoPubKey>): _59.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _60.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PubKey;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
            };
            PrivKey: {
                encode(message: _60.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PrivKey;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _61.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PubKey;
                fromPartial(object: Partial<_61.PubKey>): _61.PubKey;
            };
            PrivKey: {
                encode(message: _61.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PrivKey;
                fromPartial(object: Partial<_61.PrivKey>): _61.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _65.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _65.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _65.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _65.MsgFundCommunityPool) => {
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
                    }) => _65.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_65.MsgSetWithdrawAddress>): _65.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_65.MsgSetWithdrawAddressResponse>): _65.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorReward>): _65.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorRewardResponse>): _65.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommission>): _65.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommissionResponse>): _65.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _65.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                fromPartial(object: Partial<_65.MsgFundCommunityPool>): _65.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_65.MsgFundCommunityPoolResponse>): _65.MsgFundCommunityPoolResponse;
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsRequest>): _64.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsResponse>): _64.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_64.QueryValidatorCommissionRequest>): _64.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_64.QueryValidatorCommissionResponse>): _64.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_64.QueryValidatorSlashesRequest>): _64.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_64.QueryValidatorSlashesResponse>): _64.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationRewardsRequest>): _64.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationRewardsResponse>): _64.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsRequest>): _64.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsResponse>): _64.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsRequest>): _64.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsResponse>): _64.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressRequest>): _64.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressResponse>): _64.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_64.QueryCommunityPoolRequest>): _64.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_64.QueryCommunityPoolResponse>): _64.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_63.DelegatorWithdrawInfo>): _63.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorOutstandingRewardsRecord>): _63.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_63.ValidatorAccumulatedCommissionRecord>): _63.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorHistoricalRewardsRecord>): _63.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorCurrentRewardsRecord>): _63.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_63.DelegatorStartingInfoRecord>): _63.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_63.ValidatorSlashEventRecord>): _63.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewards>): _62.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _62.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                fromPartial(object: Partial<_62.ValidatorCurrentRewards>): _62.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommission>): _62.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewards>): _62.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _62.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                fromPartial(object: Partial<_62.ValidatorSlashEvent>): _62.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _62.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                fromPartial(object: Partial<_62.ValidatorSlashEvents>): _62.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _62.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.FeePool;
                fromPartial(object: Partial<_62.FeePool>): _62.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposal>): _62.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _62.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                fromPartial(object: Partial<_62.DelegatorStartingInfo>): _62.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _62.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                fromPartial(object: Partial<_62.DelegationDelegatorReward>): _62.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposalWithDeposit>): _62.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _69.MsgSubmitEvidence) => {
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
                    }) => _69.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _69.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitEvidence;
                fromPartial(object: Partial<_69.MsgSubmitEvidence>): _69.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _69.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_69.MsgSubmitEvidenceResponse>): _69.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _68.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryEvidenceRequest;
                fromPartial(object: Partial<_68.QueryEvidenceRequest>): _68.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _68.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryEvidenceResponse;
                fromPartial(object: Partial<_68.QueryEvidenceResponse>): _68.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _68.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_68.QueryAllEvidenceRequest>): _68.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _68.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_68.QueryAllEvidenceResponse>): _68.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
            Equivocation: {
                encode(message: _66.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.Equivocation;
                fromPartial(object: Partial<_66.Equivocation>): _66.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _73.MsgGrantAllowance) => {
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
                    }) => _73.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _73.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _73.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _73.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgGrantAllowance;
                fromPartial(object: Partial<_73.MsgGrantAllowance>): _73.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _73.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_73.MsgGrantAllowanceResponse>): _73.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _73.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.MsgRevokeAllowance;
                fromPartial(object: Partial<_73.MsgRevokeAllowance>): _73.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _73.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _73.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_73.MsgRevokeAllowanceResponse>): _73.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _72.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowanceRequest;
                fromPartial(object: Partial<_72.QueryAllowanceRequest>): _72.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _72.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowanceResponse;
                fromPartial(object: Partial<_72.QueryAllowanceResponse>): _72.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _72.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesRequest;
                fromPartial(object: Partial<_72.QueryAllowancesRequest>): _72.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _72.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesResponse;
                fromPartial(object: Partial<_72.QueryAllowancesResponse>): _72.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _72.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterRequest>): _72.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _72.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterResponse>): _72.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            BasicAllowance: {
                encode(message: _70.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.BasicAllowance;
                fromPartial(object: Partial<_70.BasicAllowance>): _70.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _70.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.PeriodicAllowance;
                fromPartial(object: Partial<_70.PeriodicAllowance>): _70.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _70.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.AllowedMsgAllowance;
                fromPartial(object: Partial<_70.AllowedMsgAllowance>): _70.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _70.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Grant;
                fromPartial(object: Partial<_70.Grant>): _70.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _78.MsgSubmitProposal) => {
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
                    }) => _78.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _78.MsgExecLegacyContent) => {
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
                    }) => _78.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _78.MsgVote) => {
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
                    }) => _78.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _78.MsgVoteWeighted) => {
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
                    }) => _78.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _78.MsgDeposit) => {
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
                    }) => _78.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _78.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgSubmitProposal;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _78.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgExecLegacyContent;
                fromPartial(object: Partial<_78.MsgExecLegacyContent>): _78.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _78.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_78.MsgExecLegacyContentResponse>): _78.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _78.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgVote;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _78.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgVoteResponse;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _78.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgVoteWeighted;
                fromPartial(object: Partial<_78.MsgVoteWeighted>): _78.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _78.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_78.MsgVoteWeightedResponse>): _78.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _78.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgDeposit;
                fromPartial(object: Partial<_78.MsgDeposit>): _78.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _78.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgDepositResponse;
                fromPartial(_: Partial<_78.MsgDepositResponse>): _78.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _77.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalRequest;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _77.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalResponse;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _77.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalsRequest;
                fromPartial(object: Partial<_77.QueryProposalsRequest>): _77.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _77.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryProposalsResponse;
                fromPartial(object: Partial<_77.QueryProposalsResponse>): _77.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _77.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVoteRequest;
                fromPartial(object: Partial<_77.QueryVoteRequest>): _77.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _77.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVoteResponse;
                fromPartial(object: Partial<_77.QueryVoteResponse>): _77.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _77.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVotesRequest;
                fromPartial(object: Partial<_77.QueryVotesRequest>): _77.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _77.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryVotesResponse;
                fromPartial(object: Partial<_77.QueryVotesResponse>): _77.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryParamsRequest;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryParamsResponse;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _77.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositRequest;
                fromPartial(object: Partial<_77.QueryDepositRequest>): _77.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _77.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositResponse;
                fromPartial(object: Partial<_77.QueryDepositResponse>): _77.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _77.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositsRequest;
                fromPartial(object: Partial<_77.QueryDepositsRequest>): _77.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _77.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryDepositsResponse;
                fromPartial(object: Partial<_77.QueryDepositsResponse>): _77.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _77.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _77.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _76.VoteOption;
            voteOptionToJSON(object: _76.VoteOption): string;
            proposalStatusFromJSON(object: any): _76.ProposalStatus;
            proposalStatusToJSON(object: _76.ProposalStatus): string;
            VoteOption: typeof _76.VoteOption;
            VoteOptionSDKType: typeof _76.VoteOption;
            ProposalStatus: typeof _76.ProposalStatus;
            ProposalStatusSDKType: typeof _76.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _76.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.WeightedVoteOption;
                fromPartial(object: Partial<_76.WeightedVoteOption>): _76.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _76.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Deposit;
                fromPartial(object: Partial<_76.Deposit>): _76.Deposit;
            };
            Proposal: {
                encode(message: _76.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Proposal;
                fromPartial(object: Partial<_76.Proposal>): _76.Proposal;
            };
            TallyResult: {
                encode(message: _76.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TallyResult;
                fromPartial(object: Partial<_76.TallyResult>): _76.TallyResult;
            };
            Vote: {
                encode(message: _76.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.Vote;
                fromPartial(object: Partial<_76.Vote>): _76.Vote;
            };
            DepositParams: {
                encode(message: _76.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.DepositParams;
                fromPartial(object: Partial<_76.DepositParams>): _76.DepositParams;
            };
            VotingParams: {
                encode(message: _76.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.VotingParams;
                fromPartial(object: Partial<_76.VotingParams>): _76.VotingParams;
            };
            TallyParams: {
                encode(message: _76.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.TallyParams;
                fromPartial(object: Partial<_76.TallyParams>): _76.TallyParams;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _82.MsgSubmitProposal) => {
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
                    }) => _82.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _82.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _82.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _82.MsgVoteWeighted) => {
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
                    }) => _82.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _82.MsgDeposit) => {
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
                    }) => _82.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _82.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgSubmitProposal;
                fromPartial(object: Partial<_82.MsgSubmitProposal>): _82.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _82.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_82.MsgSubmitProposalResponse>): _82.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _82.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgVote;
                fromPartial(object: Partial<_82.MsgVote>): _82.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _82.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgVoteResponse;
                fromPartial(_: Partial<_82.MsgVoteResponse>): _82.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _82.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgVoteWeighted;
                fromPartial(object: Partial<_82.MsgVoteWeighted>): _82.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _82.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_82.MsgVoteWeightedResponse>): _82.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _82.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgDeposit;
                fromPartial(object: Partial<_82.MsgDeposit>): _82.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _82.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgDepositResponse;
                fromPartial(_: Partial<_82.MsgDepositResponse>): _82.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _81.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryProposalRequest;
                fromPartial(object: Partial<_81.QueryProposalRequest>): _81.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _81.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryProposalResponse;
                fromPartial(object: Partial<_81.QueryProposalResponse>): _81.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _81.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryProposalsRequest;
                fromPartial(object: Partial<_81.QueryProposalsRequest>): _81.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _81.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryProposalsResponse;
                fromPartial(object: Partial<_81.QueryProposalsResponse>): _81.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _81.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryVoteRequest;
                fromPartial(object: Partial<_81.QueryVoteRequest>): _81.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _81.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryVoteResponse;
                fromPartial(object: Partial<_81.QueryVoteResponse>): _81.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _81.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryVotesRequest;
                fromPartial(object: Partial<_81.QueryVotesRequest>): _81.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _81.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryVotesResponse;
                fromPartial(object: Partial<_81.QueryVotesResponse>): _81.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryParamsRequest;
                fromPartial(object: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _81.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDepositRequest;
                fromPartial(object: Partial<_81.QueryDepositRequest>): _81.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _81.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDepositResponse;
                fromPartial(object: Partial<_81.QueryDepositResponse>): _81.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _81.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDepositsRequest;
                fromPartial(object: Partial<_81.QueryDepositsRequest>): _81.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _81.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDepositsResponse;
                fromPartial(object: Partial<_81.QueryDepositsResponse>): _81.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _81.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryTallyResultRequest;
                fromPartial(object: Partial<_81.QueryTallyResultRequest>): _81.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _81.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryTallyResultResponse;
                fromPartial(object: Partial<_81.QueryTallyResultResponse>): _81.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _80.VoteOption;
            voteOptionToJSON(object: _80.VoteOption): string;
            proposalStatusFromJSON(object: any): _80.ProposalStatus;
            proposalStatusToJSON(object: _80.ProposalStatus): string;
            VoteOption: typeof _80.VoteOption;
            VoteOptionSDKType: typeof _80.VoteOption;
            ProposalStatus: typeof _80.ProposalStatus;
            ProposalStatusSDKType: typeof _80.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _80.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.WeightedVoteOption;
                fromPartial(object: Partial<_80.WeightedVoteOption>): _80.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _80.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.TextProposal;
                fromPartial(object: Partial<_80.TextProposal>): _80.TextProposal;
            };
            Deposit: {
                encode(message: _80.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Deposit;
                fromPartial(object: Partial<_80.Deposit>): _80.Deposit;
            };
            Proposal: {
                encode(message: _80.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Proposal;
                fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
            };
            TallyResult: {
                encode(message: _80.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.TallyResult;
                fromPartial(object: Partial<_80.TallyResult>): _80.TallyResult;
            };
            Vote: {
                encode(message: _80.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.Vote;
                fromPartial(object: Partial<_80.Vote>): _80.Vote;
            };
            DepositParams: {
                encode(message: _80.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.DepositParams;
                fromPartial(object: Partial<_80.DepositParams>): _80.DepositParams;
            };
            VotingParams: {
                encode(message: _80.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.VotingParams;
                fromPartial(object: Partial<_80.VotingParams>): _80.VotingParams;
            };
            TallyParams: {
                encode(message: _80.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.TallyParams;
                fromPartial(object: Partial<_80.TallyParams>): _80.TallyParams;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _85.QueryGroupInfoRequest): Promise<_85.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _85.QueryGroupPolicyInfoRequest): Promise<_85.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _85.QueryGroupMembersRequest): Promise<_85.QueryGroupMembersResponse>;
                groupsByAdmin(request: _85.QueryGroupsByAdminRequest): Promise<_85.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _85.QueryGroupPoliciesByGroupRequest): Promise<_85.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _85.QueryGroupPoliciesByAdminRequest): Promise<_85.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _85.QueryProposalsByGroupPolicyRequest): Promise<_85.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _85.QueryVoteByProposalVoterRequest): Promise<_85.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _85.QueryVotesByProposalRequest): Promise<_85.QueryVotesByProposalResponse>;
                votesByVoter(request: _85.QueryVotesByVoterRequest): Promise<_85.QueryVotesByVoterResponse>;
                groupsByMember(request: _85.QueryGroupsByMemberRequest): Promise<_85.QueryGroupsByMemberResponse>;
                tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
                groups(request?: _85.QueryGroupsRequest): Promise<_85.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _86.MsgCreateGroup) => {
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
                    }) => _86.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _86.MsgUpdateGroupMembers) => {
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
                    }) => _86.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _86.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _86.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _86.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _86.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _86.MsgCreateGroupPolicy) => {
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
                    }) => _86.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _86.MsgCreateGroupWithPolicy) => {
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
                    }) => _86.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _86.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _86.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _86.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _86.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _86.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _86.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _86.MsgSubmitProposal) => {
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
                    }) => _86.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _86.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _86.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _86.MsgVote) => {
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
                    }) => _86.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _86.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _86.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _86.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _86.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _87.VoteOption;
            voteOptionToJSON(object: _87.VoteOption): string;
            proposalStatusFromJSON(object: any): _87.ProposalStatus;
            proposalStatusToJSON(object: _87.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _87.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _87.ProposalExecutorResult): string;
            VoteOption: typeof _87.VoteOption;
            VoteOptionSDKType: typeof _87.VoteOption;
            ProposalStatus: typeof _87.ProposalStatus;
            ProposalStatusSDKType: typeof _87.ProposalStatus;
            ProposalExecutorResult: typeof _87.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _87.ProposalExecutorResult;
            Member: {
                encode(message: _87.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.Member;
                fromPartial(object: Partial<_87.Member>): _87.Member;
            };
            MemberRequest: {
                encode(message: _87.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.MemberRequest;
                fromPartial(object: Partial<_87.MemberRequest>): _87.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _87.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_87.ThresholdDecisionPolicy>): _87.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _87.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.PercentageDecisionPolicy;
                fromPartial(object: Partial<_87.PercentageDecisionPolicy>): _87.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _87.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.DecisionPolicyWindows;
                fromPartial(object: Partial<_87.DecisionPolicyWindows>): _87.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _87.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GroupInfo;
                fromPartial(object: Partial<_87.GroupInfo>): _87.GroupInfo;
            };
            GroupMember: {
                encode(message: _87.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GroupMember;
                fromPartial(object: Partial<_87.GroupMember>): _87.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _87.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GroupPolicyInfo;
                fromPartial(object: Partial<_87.GroupPolicyInfo>): _87.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _87.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.Proposal;
                fromPartial(object: Partial<_87.Proposal>): _87.Proposal;
            };
            TallyResult: {
                encode(message: _87.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.TallyResult;
                fromPartial(object: Partial<_87.TallyResult>): _87.TallyResult;
            };
            Vote: {
                encode(message: _87.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.Vote;
                fromPartial(object: Partial<_87.Vote>): _87.Vote;
            };
            execFromJSON(object: any): _86.Exec;
            execToJSON(object: _86.Exec): string;
            Exec: typeof _86.Exec;
            ExecSDKType: typeof _86.Exec;
            MsgCreateGroup: {
                encode(message: _86.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroup;
                fromPartial(object: Partial<_86.MsgCreateGroup>): _86.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _86.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroupResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupResponse>): _86.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _86.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_86.MsgUpdateGroupMembers>): _86.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _86.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupMembersResponse>): _86.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _86.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_86.MsgUpdateGroupAdmin>): _86.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _86.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupAdminResponse>): _86.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _86.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_86.MsgUpdateGroupMetadata>): _86.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _86.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupMetadataResponse>): _86.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _86.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicy>): _86.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _86.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicyResponse>): _86.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _86.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyAdmin>): _86.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _86.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicy>): _86.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _86.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicyResponse>): _86.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _86.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyAdminResponse>): _86.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _86.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyDecisionPolicy>): _86.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyDecisionPolicyResponse>): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _86.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyMetadata>): _86.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _86.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyMetadataResponse>): _86.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _86.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgSubmitProposal;
                fromPartial(object: Partial<_86.MsgSubmitProposal>): _86.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _86.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_86.MsgSubmitProposalResponse>): _86.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _86.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgWithdrawProposal;
                fromPartial(object: Partial<_86.MsgWithdrawProposal>): _86.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _86.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_86.MsgWithdrawProposalResponse>): _86.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _86.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgVote;
                fromPartial(object: Partial<_86.MsgVote>): _86.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _86.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgVoteResponse;
                fromPartial(_: Partial<_86.MsgVoteResponse>): _86.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _86.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgExec;
                fromPartial(object: Partial<_86.MsgExec>): _86.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _86.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgExecResponse;
                fromPartial(object: Partial<_86.MsgExecResponse>): _86.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _86.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MsgLeaveGroup;
                fromPartial(object: Partial<_86.MsgLeaveGroup>): _86.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _86.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_86.MsgLeaveGroupResponse>): _86.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _85.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupInfoRequest;
                fromPartial(object: Partial<_85.QueryGroupInfoRequest>): _85.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _85.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupInfoResponse;
                fromPartial(object: Partial<_85.QueryGroupInfoResponse>): _85.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _85.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoRequest>): _85.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _85.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoResponse>): _85.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _85.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupMembersRequest;
                fromPartial(object: Partial<_85.QueryGroupMembersRequest>): _85.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _85.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupMembersResponse;
                fromPartial(object: Partial<_85.QueryGroupMembersResponse>): _85.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _85.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_85.QueryGroupsByAdminRequest>): _85.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _85.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_85.QueryGroupsByAdminResponse>): _85.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _85.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupRequest>): _85.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _85.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupResponse>): _85.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _85.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminRequest>): _85.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _85.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminResponse>): _85.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _85.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryProposalRequest;
                fromPartial(object: Partial<_85.QueryProposalRequest>): _85.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _85.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryProposalResponse;
                fromPartial(object: Partial<_85.QueryProposalResponse>): _85.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _85.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyRequest>): _85.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _85.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyResponse>): _85.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _85.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterRequest>): _85.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _85.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterResponse>): _85.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _85.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_85.QueryVotesByProposalRequest>): _85.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _85.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_85.QueryVotesByProposalResponse>): _85.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _85.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_85.QueryVotesByVoterRequest>): _85.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _85.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_85.QueryVotesByVoterResponse>): _85.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _85.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_85.QueryGroupsByMemberRequest>): _85.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _85.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_85.QueryGroupsByMemberResponse>): _85.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _85.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryTallyResultRequest;
                fromPartial(object: Partial<_85.QueryTallyResultRequest>): _85.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _85.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryTallyResultResponse;
                fromPartial(object: Partial<_85.QueryTallyResultResponse>): _85.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _85.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsRequest;
                fromPartial(object: Partial<_85.QueryGroupsRequest>): _85.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _85.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryGroupsResponse;
                fromPartial(object: Partial<_85.QueryGroupsResponse>): _85.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _83.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventCreateGroup;
                fromPartial(object: Partial<_83.EventCreateGroup>): _83.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _83.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventUpdateGroup;
                fromPartial(object: Partial<_83.EventUpdateGroup>): _83.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _83.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventCreateGroupPolicy;
                fromPartial(object: Partial<_83.EventCreateGroupPolicy>): _83.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _83.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_83.EventUpdateGroupPolicy>): _83.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _83.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventSubmitProposal;
                fromPartial(object: Partial<_83.EventSubmitProposal>): _83.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _83.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventWithdrawProposal;
                fromPartial(object: Partial<_83.EventWithdrawProposal>): _83.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _83.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventVote;
                fromPartial(object: Partial<_83.EventVote>): _83.EventVote;
            };
            EventExec: {
                encode(message: _83.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventExec;
                fromPartial(object: Partial<_83.EventExec>): _83.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _83.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventLeaveGroup;
                fromPartial(object: Partial<_83.EventLeaveGroup>): _83.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _83.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.EventProposalPruned;
                fromPartial(object: Partial<_83.EventProposalPruned>): _83.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                inflation(request?: _90.QueryInflationRequest): Promise<_90.QueryInflationResponse>;
                annualProvisions(request?: _90.QueryAnnualProvisionsRequest): Promise<_90.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _90.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _90.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _90.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryInflationRequest;
                fromPartial(_: Partial<_90.QueryInflationRequest>): _90.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _90.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryInflationResponse;
                fromPartial(object: Partial<_90.QueryInflationResponse>): _90.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _90.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_90.QueryAnnualProvisionsRequest>): _90.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _90.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_90.QueryAnnualProvisionsResponse>): _90.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _89.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Minter;
                fromPartial(object: Partial<_89.Minter>): _89.Minter;
            };
            Params: {
                encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Params;
                fromPartial(object: Partial<_89.Params>): _89.Params;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.GenesisState;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _96.MsgSend) => {
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
                    }) => _96.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _96.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgSend;
                fromPartial(object: Partial<_96.MsgSend>): _96.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _96.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgSendResponse;
                fromPartial(_: Partial<_96.MsgSendResponse>): _96.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _95.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryBalanceRequest;
                fromPartial(object: Partial<_95.QueryBalanceRequest>): _95.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _95.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryBalanceResponse;
                fromPartial(object: Partial<_95.QueryBalanceResponse>): _95.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _95.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryOwnerRequest;
                fromPartial(object: Partial<_95.QueryOwnerRequest>): _95.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _95.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryOwnerResponse;
                fromPartial(object: Partial<_95.QueryOwnerResponse>): _95.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _95.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QuerySupplyRequest;
                fromPartial(object: Partial<_95.QuerySupplyRequest>): _95.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _95.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QuerySupplyResponse;
                fromPartial(object: Partial<_95.QuerySupplyResponse>): _95.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _95.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryNFTsRequest;
                fromPartial(object: Partial<_95.QueryNFTsRequest>): _95.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _95.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryNFTsResponse;
                fromPartial(object: Partial<_95.QueryNFTsResponse>): _95.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _95.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryNFTRequest;
                fromPartial(object: Partial<_95.QueryNFTRequest>): _95.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _95.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryNFTResponse;
                fromPartial(object: Partial<_95.QueryNFTResponse>): _95.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _95.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryClassRequest;
                fromPartial(object: Partial<_95.QueryClassRequest>): _95.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _95.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryClassResponse;
                fromPartial(object: Partial<_95.QueryClassResponse>): _95.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _95.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryClassesRequest;
                fromPartial(object: Partial<_95.QueryClassesRequest>): _95.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _95.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.QueryClassesResponse;
                fromPartial(object: Partial<_95.QueryClassesResponse>): _95.QueryClassesResponse;
            };
            Class: {
                encode(message: _94.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.Class;
                fromPartial(object: Partial<_94.Class>): _94.Class;
            };
            NFT: {
                encode(message: _94.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.NFT;
                fromPartial(object: Partial<_94.NFT>): _94.NFT;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            Entry: {
                encode(message: _93.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Entry;
                fromPartial(object: Partial<_93.Entry>): _93.Entry;
            };
            EventSend: {
                encode(message: _92.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.EventSend;
                fromPartial(object: Partial<_92.EventSend>): _92.EventSend;
            };
            EventMint: {
                encode(message: _92.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.EventMint;
                fromPartial(object: Partial<_92.EventMint>): _92.EventMint;
            };
            EventBurn: {
                encode(message: _92.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.EventBurn;
                fromPartial(object: Partial<_92.EventBurn>): _92.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _97.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _97.Module;
                    fromPartial(_: Partial<_97.Module>): _97.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _98.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.TableDescriptor;
                fromPartial(object: Partial<_98.TableDescriptor>): _98.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _98.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_98.PrimaryKeyDescriptor>): _98.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _98.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_98.SecondaryIndexDescriptor>): _98.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _98.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.SingletonDescriptor;
                fromPartial(object: Partial<_98.SingletonDescriptor>): _98.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _99.StorageType;
            storageTypeToJSON(object: _99.StorageType): string;
            StorageType: typeof _99.StorageType;
            StorageTypeSDKType: typeof _99.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _99.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor>): _99.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _99.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_99.ModuleSchemaDescriptor_FileEntry>): _99.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                subspaces(request?: _101.QuerySubspacesRequest): Promise<_101.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
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
            QuerySubspacesRequest: {
                encode(_: _101.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _101.QuerySubspacesRequest;
                fromPartial(_: Partial<_101.QuerySubspacesRequest>): _101.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _101.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.QuerySubspacesResponse;
                fromPartial(object: Partial<_101.QuerySubspacesResponse>): _101.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _101.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.Subspace;
                fromPartial(object: Partial<_101.Subspace>): _101.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _100.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.ParameterChangeProposal;
                fromPartial(object: Partial<_100.ParameterChangeProposal>): _100.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _100.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.ParamChange;
                fromPartial(object: Partial<_100.ParamChange>): _100.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _105.MsgUnjail): {
                        typeUrl: string;
                        value: _105.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _105.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _105.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _105.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MsgUnjail;
                fromPartial(object: Partial<_105.MsgUnjail>): _105.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _105.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.MsgUnjailResponse;
                fromPartial(_: Partial<_105.MsgUnjailResponse>): _105.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _104.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorSigningInfo;
                fromPartial(object: Partial<_104.ValidatorSigningInfo>): _104.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Params;
                fromPartial(object: Partial<_104.Params>): _104.Params;
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
            QuerySigningInfoRequest: {
                encode(message: _103.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QuerySigningInfoRequest;
                fromPartial(object: Partial<_103.QuerySigningInfoRequest>): _103.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _103.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QuerySigningInfoResponse;
                fromPartial(object: Partial<_103.QuerySigningInfoResponse>): _103.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _103.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QuerySigningInfosRequest;
                fromPartial(object: Partial<_103.QuerySigningInfosRequest>): _103.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _103.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QuerySigningInfosResponse;
                fromPartial(object: Partial<_103.QuerySigningInfosResponse>): _103.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
            SigningInfo: {
                encode(message: _102.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.SigningInfo;
                fromPartial(object: Partial<_102.SigningInfo>): _102.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _102.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ValidatorMissedBlocks;
                fromPartial(object: Partial<_102.ValidatorMissedBlocks>): _102.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _102.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.MissedBlock;
                fromPartial(object: Partial<_102.MissedBlock>): _102.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _108.QueryValidatorsRequest): Promise<_108.QueryValidatorsResponse>;
                validator(request: _108.QueryValidatorRequest): Promise<_108.QueryValidatorResponse>;
                validatorDelegations(request: _108.QueryValidatorDelegationsRequest): Promise<_108.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _108.QueryValidatorUnbondingDelegationsRequest): Promise<_108.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _108.QueryDelegationRequest): Promise<_108.QueryDelegationResponse>;
                unbondingDelegation(request: _108.QueryUnbondingDelegationRequest): Promise<_108.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _108.QueryDelegatorDelegationsRequest): Promise<_108.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _108.QueryDelegatorUnbondingDelegationsRequest): Promise<_108.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _108.QueryRedelegationsRequest): Promise<_108.QueryRedelegationsResponse>;
                delegatorValidators(request: _108.QueryDelegatorValidatorsRequest): Promise<_108.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _108.QueryDelegatorValidatorRequest): Promise<_108.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _108.QueryHistoricalInfoRequest): Promise<_108.QueryHistoricalInfoResponse>;
                pool(request?: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _110.MsgCreateValidator): {
                        typeUrl: string;
                        value: _110.MsgCreateValidator;
                    };
                    editValidator(value: _110.MsgEditValidator): {
                        typeUrl: string;
                        value: _110.MsgEditValidator;
                    };
                    delegate(value: _110.MsgDelegate): {
                        typeUrl: string;
                        value: _110.MsgDelegate;
                    };
                    beginRedelegate(value: _110.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _110.MsgBeginRedelegate;
                    };
                    undelegate(value: _110.MsgUndelegate): {
                        typeUrl: string;
                        value: _110.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _110.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _110.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _110.MsgCreateValidator) => {
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
                    }) => _110.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _110.MsgEditValidator) => {
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
                    }) => _110.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _110.MsgDelegate) => {
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
                    }) => _110.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _110.MsgBeginRedelegate) => {
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
                    }) => _110.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _110.MsgUndelegate) => {
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
                    }) => _110.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _110.MsgCancelUnbondingDelegation) => {
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
                    }) => _110.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _110.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCreateValidator;
                fromPartial(object: Partial<_110.MsgCreateValidator>): _110.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _110.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_110.MsgCreateValidatorResponse>): _110.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _110.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgEditValidator;
                fromPartial(object: Partial<_110.MsgEditValidator>): _110.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _110.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgEditValidatorResponse;
                fromPartial(_: Partial<_110.MsgEditValidatorResponse>): _110.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _110.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgDelegate;
                fromPartial(object: Partial<_110.MsgDelegate>): _110.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _110.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgDelegateResponse;
                fromPartial(_: Partial<_110.MsgDelegateResponse>): _110.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _110.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgBeginRedelegate;
                fromPartial(object: Partial<_110.MsgBeginRedelegate>): _110.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _110.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_110.MsgBeginRedelegateResponse>): _110.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _110.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUndelegate;
                fromPartial(object: Partial<_110.MsgUndelegate>): _110.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _110.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgUndelegateResponse;
                fromPartial(object: Partial<_110.MsgUndelegateResponse>): _110.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _110.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_110.MsgCancelUnbondingDelegation>): _110.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _110.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _110.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_110.MsgCancelUnbondingDelegationResponse>): _110.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _109.BondStatus;
            bondStatusToJSON(object: _109.BondStatus): string;
            BondStatus: typeof _109.BondStatus;
            BondStatusSDKType: typeof _109.BondStatus;
            HistoricalInfo: {
                encode(message: _109.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.HistoricalInfo;
                fromPartial(object: Partial<_109.HistoricalInfo>): _109.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _109.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.CommissionRates;
                fromPartial(object: Partial<_109.CommissionRates>): _109.CommissionRates;
            };
            Commission: {
                encode(message: _109.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Commission;
                fromPartial(object: Partial<_109.Commission>): _109.Commission;
            };
            Description: {
                encode(message: _109.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Description;
                fromPartial(object: Partial<_109.Description>): _109.Description;
            };
            Validator: {
                encode(message: _109.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Validator;
                fromPartial(object: Partial<_109.Validator>): _109.Validator;
            };
            ValAddresses: {
                encode(message: _109.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.ValAddresses;
                fromPartial(object: Partial<_109.ValAddresses>): _109.ValAddresses;
            };
            DVPair: {
                encode(message: _109.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.DVPair;
                fromPartial(object: Partial<_109.DVPair>): _109.DVPair;
            };
            DVPairs: {
                encode(message: _109.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.DVPairs;
                fromPartial(object: Partial<_109.DVPairs>): _109.DVPairs;
            };
            DVVTriplet: {
                encode(message: _109.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.DVVTriplet;
                fromPartial(object: Partial<_109.DVVTriplet>): _109.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _109.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.DVVTriplets;
                fromPartial(object: Partial<_109.DVVTriplets>): _109.DVVTriplets;
            };
            Delegation: {
                encode(message: _109.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Delegation;
                fromPartial(object: Partial<_109.Delegation>): _109.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _109.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.UnbondingDelegation;
                fromPartial(object: Partial<_109.UnbondingDelegation>): _109.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _109.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.UnbondingDelegationEntry;
                fromPartial(object: Partial<_109.UnbondingDelegationEntry>): _109.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _109.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.RedelegationEntry;
                fromPartial(object: Partial<_109.RedelegationEntry>): _109.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _109.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Redelegation;
                fromPartial(object: Partial<_109.Redelegation>): _109.Redelegation;
            };
            Params: {
                encode(message: _109.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Params;
                fromPartial(object: Partial<_109.Params>): _109.Params;
            };
            DelegationResponse: {
                encode(message: _109.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.DelegationResponse;
                fromPartial(object: Partial<_109.DelegationResponse>): _109.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _109.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.RedelegationEntryResponse;
                fromPartial(object: Partial<_109.RedelegationEntryResponse>): _109.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _109.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.RedelegationResponse;
                fromPartial(object: Partial<_109.RedelegationResponse>): _109.RedelegationResponse;
            };
            Pool: {
                encode(message: _109.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Pool;
                fromPartial(object: Partial<_109.Pool>): _109.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _108.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorsRequest;
                fromPartial(object: Partial<_108.QueryValidatorsRequest>): _108.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _108.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorsResponse;
                fromPartial(object: Partial<_108.QueryValidatorsResponse>): _108.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _108.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorRequest;
                fromPartial(object: Partial<_108.QueryValidatorRequest>): _108.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _108.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorResponse;
                fromPartial(object: Partial<_108.QueryValidatorResponse>): _108.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _108.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_108.QueryValidatorDelegationsRequest>): _108.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _108.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_108.QueryValidatorDelegationsResponse>): _108.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _108.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_108.QueryValidatorUnbondingDelegationsRequest>): _108.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _108.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_108.QueryValidatorUnbondingDelegationsResponse>): _108.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _108.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegationRequest;
                fromPartial(object: Partial<_108.QueryDelegationRequest>): _108.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _108.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegationResponse;
                fromPartial(object: Partial<_108.QueryDelegationResponse>): _108.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _108.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_108.QueryUnbondingDelegationRequest>): _108.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _108.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_108.QueryUnbondingDelegationResponse>): _108.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _108.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorDelegationsRequest>): _108.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _108.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorDelegationsResponse>): _108.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _108.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorUnbondingDelegationsRequest>): _108.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _108.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorUnbondingDelegationsResponse>): _108.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _108.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryRedelegationsRequest;
                fromPartial(object: Partial<_108.QueryRedelegationsRequest>): _108.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _108.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryRedelegationsResponse;
                fromPartial(object: Partial<_108.QueryRedelegationsResponse>): _108.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _108.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorsRequest>): _108.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _108.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorsResponse>): _108.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _108.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorRequest>): _108.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _108.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_108.QueryDelegatorValidatorResponse>): _108.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _108.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_108.QueryHistoricalInfoRequest>): _108.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _108.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_108.QueryHistoricalInfoResponse>): _108.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _108.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.QueryPoolRequest;
                fromPartial(_: Partial<_108.QueryPoolRequest>): _108.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _108.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryPoolResponse;
                fromPartial(object: Partial<_108.QueryPoolResponse>): _108.QueryPoolResponse;
            };
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
            GenesisState: {
                encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _107.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.LastValidatorPower;
                fromPartial(object: Partial<_107.LastValidatorPower>): _107.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _106.AuthorizationType;
            authorizationTypeToJSON(object: _106.AuthorizationType): string;
            AuthorizationType: typeof _106.AuthorizationType;
            AuthorizationTypeSDKType: typeof _106.AuthorizationType;
            StakeAuthorization: {
                encode(message: _106.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.StakeAuthorization;
                fromPartial(object: Partial<_106.StakeAuthorization>): _106.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _106.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.StakeAuthorization_Validators;
                fromPartial(object: Partial<_106.StakeAuthorization_Validators>): _106.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _111.SignMode;
                signModeToJSON(object: _111.SignMode): string;
                SignMode: typeof _111.SignMode;
                SignModeSDKType: typeof _111.SignMode;
                SignatureDescriptors: {
                    encode(message: _111.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SignatureDescriptors;
                    fromPartial(object: Partial<_111.SignatureDescriptors>): _111.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _111.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SignatureDescriptor;
                    fromPartial(object: Partial<_111.SignatureDescriptor>): _111.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _111.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data>): _111.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _111.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data_Single>): _111.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _111.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_111.SignatureDescriptor_Data_Multi>): _111.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _225.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _112.SimulateRequest): Promise<_112.SimulateResponse>;
                getTx(request: _112.GetTxRequest): Promise<_112.GetTxResponse>;
                broadcastTx(request: _112.BroadcastTxRequest): Promise<_112.BroadcastTxResponse>;
                getTxsEvent(request: _112.GetTxsEventRequest): Promise<_112.GetTxsEventResponse>;
                getBlockWithTxs(request: _112.GetBlockWithTxsRequest): Promise<_112.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            Tx: {
                encode(message: _113.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Tx;
                fromPartial(object: Partial<_113.Tx>): _113.Tx;
            };
            TxRaw: {
                encode(message: _113.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.TxRaw;
                fromPartial(object: Partial<_113.TxRaw>): _113.TxRaw;
            };
            SignDoc: {
                encode(message: _113.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.SignDoc;
                fromPartial(object: Partial<_113.SignDoc>): _113.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _113.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.SignDocDirectAux;
                fromPartial(object: Partial<_113.SignDocDirectAux>): _113.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _113.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.TxBody;
                fromPartial(object: Partial<_113.TxBody>): _113.TxBody;
            };
            AuthInfo: {
                encode(message: _113.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.AuthInfo;
                fromPartial(object: Partial<_113.AuthInfo>): _113.AuthInfo;
            };
            SignerInfo: {
                encode(message: _113.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.SignerInfo;
                fromPartial(object: Partial<_113.SignerInfo>): _113.SignerInfo;
            };
            ModeInfo: {
                encode(message: _113.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.ModeInfo;
                fromPartial(object: Partial<_113.ModeInfo>): _113.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _113.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.ModeInfo_Single;
                fromPartial(object: Partial<_113.ModeInfo_Single>): _113.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _113.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.ModeInfo_Multi;
                fromPartial(object: Partial<_113.ModeInfo_Multi>): _113.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _113.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Fee;
                fromPartial(object: Partial<_113.Fee>): _113.Fee;
            };
            Tip: {
                encode(message: _113.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.Tip;
                fromPartial(object: Partial<_113.Tip>): _113.Tip;
            };
            AuxSignerData: {
                encode(message: _113.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.AuxSignerData;
                fromPartial(object: Partial<_113.AuxSignerData>): _113.AuxSignerData;
            };
            orderByFromJSON(object: any): _112.OrderBy;
            orderByToJSON(object: _112.OrderBy): string;
            broadcastModeFromJSON(object: any): _112.BroadcastMode;
            broadcastModeToJSON(object: _112.BroadcastMode): string;
            OrderBy: typeof _112.OrderBy;
            OrderBySDKType: typeof _112.OrderBy;
            BroadcastMode: typeof _112.BroadcastMode;
            BroadcastModeSDKType: typeof _112.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _112.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetTxsEventRequest;
                fromPartial(object: Partial<_112.GetTxsEventRequest>): _112.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _112.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetTxsEventResponse;
                fromPartial(object: Partial<_112.GetTxsEventResponse>): _112.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _112.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.BroadcastTxRequest;
                fromPartial(object: Partial<_112.BroadcastTxRequest>): _112.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _112.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.BroadcastTxResponse;
                fromPartial(object: Partial<_112.BroadcastTxResponse>): _112.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _112.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.SimulateRequest;
                fromPartial(object: Partial<_112.SimulateRequest>): _112.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _112.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.SimulateResponse;
                fromPartial(object: Partial<_112.SimulateResponse>): _112.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _112.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetTxRequest;
                fromPartial(object: Partial<_112.GetTxRequest>): _112.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _112.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetTxResponse;
                fromPartial(object: Partial<_112.GetTxResponse>): _112.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _112.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_112.GetBlockWithTxsRequest>): _112.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _112.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_112.GetBlockWithTxsResponse>): _112.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _114.QueryCurrentPlanRequest): Promise<_114.QueryCurrentPlanResponse>;
                appliedPlan(request: _114.QueryAppliedPlanRequest): Promise<_114.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _114.QueryModuleVersionsRequest): Promise<_114.QueryModuleVersionsResponse>;
                authority(request?: _114.QueryAuthorityRequest): Promise<_114.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _115.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _115.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _115.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _115.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _115.MsgSoftwareUpgrade) => {
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
                    }) => _115.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _115.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _115.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _116.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.Plan;
                fromPartial(object: Partial<_116.Plan>): _116.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _116.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_116.SoftwareUpgradeProposal>): _116.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _116.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_116.CancelSoftwareUpgradeProposal>): _116.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _116.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ModuleVersion;
                fromPartial(object: Partial<_116.ModuleVersion>): _116.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _115.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_115.MsgSoftwareUpgrade>): _115.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _115.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _115.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_115.MsgSoftwareUpgradeResponse>): _115.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _115.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.MsgCancelUpgrade;
                fromPartial(object: Partial<_115.MsgCancelUpgrade>): _115.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _115.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _115.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_115.MsgCancelUpgradeResponse>): _115.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _114.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_114.QueryCurrentPlanRequest>): _114.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _114.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_114.QueryCurrentPlanResponse>): _114.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _114.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_114.QueryAppliedPlanRequest>): _114.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _114.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_114.QueryAppliedPlanResponse>): _114.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _114.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_114.QueryUpgradedConsensusStateRequest>): _114.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _114.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_114.QueryUpgradedConsensusStateResponse>): _114.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _114.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_114.QueryModuleVersionsRequest>): _114.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _114.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_114.QueryModuleVersionsResponse>): _114.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _114.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _114.QueryAuthorityRequest;
                fromPartial(_: Partial<_114.QueryAuthorityRequest>): _114.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _114.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.QueryAuthorityResponse;
                fromPartial(object: Partial<_114.QueryAuthorityResponse>): _114.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _117.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _117.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _117.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _117.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _117.MsgCreateVestingAccount) => {
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
                    }) => _117.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _117.MsgCreatePermanentLockedAccount) => {
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
                    }) => _117.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _117.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _117.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _118.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.BaseVestingAccount;
                fromPartial(object: Partial<_118.BaseVestingAccount>): _118.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _118.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.ContinuousVestingAccount;
                fromPartial(object: Partial<_118.ContinuousVestingAccount>): _118.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _118.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.DelayedVestingAccount;
                fromPartial(object: Partial<_118.DelayedVestingAccount>): _118.DelayedVestingAccount;
            };
            Period: {
                encode(message: _118.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.Period;
                fromPartial(object: Partial<_118.Period>): _118.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _118.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.PeriodicVestingAccount;
                fromPartial(object: Partial<_118.PeriodicVestingAccount>): _118.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _118.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.PermanentLockedAccount;
                fromPartial(object: Partial<_118.PermanentLockedAccount>): _118.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _117.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgCreateVestingAccount;
                fromPartial(object: Partial<_117.MsgCreateVestingAccount>): _117.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _117.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_117.MsgCreateVestingAccountResponse>): _117.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _117.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_117.MsgCreatePermanentLockedAccount>): _117.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _117.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_117.MsgCreatePermanentLockedAccountResponse>): _117.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _117.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_117.MsgCreatePeriodicVestingAccount>): _117.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _117.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_117.MsgCreatePeriodicVestingAccountResponse>): _117.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _227.MsgClientImpl;
                };
                bank: {
                    v1beta1: _228.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _229.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _230.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _231.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _232.MsgClientImpl;
                };
                gov: {
                    v1: _233.MsgClientImpl;
                    v1beta1: _234.MsgClientImpl;
                };
                group: {
                    v1: _235.MsgClientImpl;
                };
                nft: {
                    v1beta1: _236.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _237.MsgClientImpl;
                };
                staking: {
                    v1beta1: _238.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _239.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _240.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _29.QueryAccountsRequest): Promise<_29.QueryAccountsResponse>;
                        account(request: _29.QueryAccountRequest): Promise<_29.QueryAccountResponse>;
                        accountAddressByID(request: _29.QueryAccountAddressByIDRequest): Promise<_29.QueryAccountAddressByIDResponse>;
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        moduleAccounts(request?: _29.QueryModuleAccountsRequest): Promise<_29.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _29.QueryModuleAccountByNameRequest): Promise<_29.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _29.Bech32PrefixRequest): Promise<_29.Bech32PrefixResponse>;
                        addressBytesToString(request: _29.AddressBytesToStringRequest): Promise<_29.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _29.AddressStringToBytesRequest): Promise<_29.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _33.QueryGrantsRequest): Promise<_33.QueryGrantsResponse>;
                        granterGrants(request: _33.QueryGranterGrantsRequest): Promise<_33.QueryGranterGrantsResponse>;
                        granteeGrants(request: _33.QueryGranteeGrantsRequest): Promise<_33.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _38.QueryBalanceRequest): Promise<_38.QueryBalanceResponse>;
                        allBalances(request: _38.QueryAllBalancesRequest): Promise<_38.QueryAllBalancesResponse>;
                        spendableBalances(request: _38.QuerySpendableBalancesRequest): Promise<_38.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _38.QueryTotalSupplyRequest): Promise<_38.QueryTotalSupplyResponse>;
                        supplyOf(request: _38.QuerySupplyOfRequest): Promise<_38.QuerySupplyOfResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                        denomMetadata(request: _38.QueryDenomMetadataRequest): Promise<_38.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _38.QueryDenomsMetadataRequest): Promise<_38.QueryDenomsMetadataResponse>;
                        denomOwners(request: _38.QueryDenomOwnersRequest): Promise<_38.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _42.ConfigRequest): Promise<_42.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _49.GetNodeInfoRequest): Promise<_49.GetNodeInfoResponse>;
                            getSyncing(request?: _49.GetSyncingRequest): Promise<_49.GetSyncingResponse>;
                            getLatestBlock(request?: _49.GetLatestBlockRequest): Promise<_49.GetLatestBlockResponse>;
                            getBlockByHeight(request: _49.GetBlockByHeightRequest): Promise<_49.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _49.GetLatestValidatorSetRequest): Promise<_49.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _49.GetValidatorSetByHeightRequest): Promise<_49.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _49.ABCIQueryRequest): Promise<_49.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                        allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                        allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                        allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                        proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                        vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                        votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                        deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                        tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                        proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                        vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                        votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                        params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                        deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                        tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _85.QueryGroupInfoRequest): Promise<_85.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _85.QueryGroupPolicyInfoRequest): Promise<_85.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _85.QueryGroupMembersRequest): Promise<_85.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _85.QueryGroupsByAdminRequest): Promise<_85.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _85.QueryGroupPoliciesByGroupRequest): Promise<_85.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _85.QueryGroupPoliciesByAdminRequest): Promise<_85.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _85.QueryProposalRequest): Promise<_85.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _85.QueryProposalsByGroupPolicyRequest): Promise<_85.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _85.QueryVoteByProposalVoterRequest): Promise<_85.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _85.QueryVotesByProposalRequest): Promise<_85.QueryVotesByProposalResponse>;
                        votesByVoter(request: _85.QueryVotesByVoterRequest): Promise<_85.QueryVotesByVoterResponse>;
                        groupsByMember(request: _85.QueryGroupsByMemberRequest): Promise<_85.QueryGroupsByMemberResponse>;
                        tallyResult(request: _85.QueryTallyResultRequest): Promise<_85.QueryTallyResultResponse>;
                        groups(request?: _85.QueryGroupsRequest): Promise<_85.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                        inflation(request?: _90.QueryInflationRequest): Promise<_90.QueryInflationResponse>;
                        annualProvisions(request?: _90.QueryAnnualProvisionsRequest): Promise<_90.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                        owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                        supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                        nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                        nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                        class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                        classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        subspaces(request?: _101.QuerySubspacesRequest): Promise<_101.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                        signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _108.QueryValidatorsRequest): Promise<_108.QueryValidatorsResponse>;
                        validator(request: _108.QueryValidatorRequest): Promise<_108.QueryValidatorResponse>;
                        validatorDelegations(request: _108.QueryValidatorDelegationsRequest): Promise<_108.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _108.QueryValidatorUnbondingDelegationsRequest): Promise<_108.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _108.QueryDelegationRequest): Promise<_108.QueryDelegationResponse>;
                        unbondingDelegation(request: _108.QueryUnbondingDelegationRequest): Promise<_108.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _108.QueryDelegatorDelegationsRequest): Promise<_108.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _108.QueryDelegatorUnbondingDelegationsRequest): Promise<_108.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _108.QueryRedelegationsRequest): Promise<_108.QueryRedelegationsResponse>;
                        delegatorValidators(request: _108.QueryDelegatorValidatorsRequest): Promise<_108.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _108.QueryDelegatorValidatorRequest): Promise<_108.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _108.QueryHistoricalInfoRequest): Promise<_108.QueryHistoricalInfoResponse>;
                        pool(request?: _108.QueryPoolRequest): Promise<_108.QueryPoolResponse>;
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _112.SimulateRequest): Promise<_112.SimulateResponse>;
                        getTx(request: _112.GetTxRequest): Promise<_112.GetTxResponse>;
                        broadcastTx(request: _112.BroadcastTxRequest): Promise<_112.BroadcastTxResponse>;
                        getTxsEvent(request: _112.GetTxsEventRequest): Promise<_112.GetTxsEventResponse>;
                        getBlockWithTxs(request: _112.GetBlockWithTxsRequest): Promise<_112.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _114.QueryCurrentPlanRequest): Promise<_114.QueryCurrentPlanResponse>;
                        appliedPlan(request: _114.QueryAppliedPlanRequest): Promise<_114.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _114.QueryModuleVersionsRequest): Promise<_114.QueryModuleVersionsResponse>;
                        authority(request?: _114.QueryAuthorityRequest): Promise<_114.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _190.LCDQueryClient;
                };
                authz: {
                    v1beta1: _191.LCDQueryClient;
                };
                bank: {
                    v1beta1: _192.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _193.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _194.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _195.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _196.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _197.LCDQueryClient;
                };
                gov: {
                    v1: _198.LCDQueryClient;
                    v1beta1: _199.LCDQueryClient;
                };
                group: {
                    v1: _200.LCDQueryClient;
                };
                mint: {
                    v1beta1: _201.LCDQueryClient;
                };
                nft: {
                    v1beta1: _202.LCDQueryClient;
                };
                params: {
                    v1beta1: _203.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _204.LCDQueryClient;
                };
                staking: {
                    v1beta1: _205.LCDQueryClient;
                };
                tx: {
                    v1beta1: _206.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _207.LCDQueryClient;
                };
            };
        }>;
    };
}
