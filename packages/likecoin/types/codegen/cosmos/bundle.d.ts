import * as _26 from "./app/module/v1alpha1/module";
import * as _27 from "./app/v1alpha1/config";
import * as _28 from "./app/v1alpha1/module";
import * as _29 from "./app/v1alpha1/query";
import * as _30 from "./auth/v1beta1/auth";
import * as _31 from "./auth/v1beta1/genesis";
import * as _32 from "./auth/v1beta1/query";
import * as _33 from "./authz/v1beta1/authz";
import * as _34 from "./authz/v1beta1/event";
import * as _35 from "./authz/v1beta1/genesis";
import * as _36 from "./authz/v1beta1/query";
import * as _37 from "./authz/v1beta1/tx";
import * as _38 from "./bank/v1beta1/authz";
import * as _39 from "./bank/v1beta1/bank";
import * as _40 from "./bank/v1beta1/genesis";
import * as _41 from "./bank/v1beta1/query";
import * as _42 from "./bank/v1beta1/tx";
import * as _43 from "./base/abci/v1beta1/abci";
import * as _44 from "./base/kv/v1beta1/kv";
import * as _45 from "./base/node/v1beta1/query";
import * as _46 from "./base/query/v1beta1/pagination";
import * as _47 from "./base/reflection/v1beta1/reflection";
import * as _48 from "./base/reflection/v2alpha1/reflection";
import * as _49 from "./base/snapshots/v1beta1/snapshot";
import * as _50 from "./base/store/v1beta1/commit_info";
import * as _51 from "./base/store/v1beta1/listening";
import * as _52 from "./base/tendermint/v1beta1/query";
import * as _53 from "./base/tendermint/v1beta1/types";
import * as _54 from "./base/v1beta1/coin";
import * as _55 from "./capability/v1beta1/capability";
import * as _56 from "./capability/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/tx";
import * as _59 from "./crypto/ed25519/keys";
import * as _60 from "./crypto/hd/v1/hd";
import * as _61 from "./crypto/keyring/v1/record";
import * as _62 from "./crypto/multisig/keys";
import * as _63 from "./crypto/secp256k1/keys";
import * as _64 from "./crypto/secp256r1/keys";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/v1beta1/evidence";
import * as _70 from "./evidence/v1beta1/genesis";
import * as _71 from "./evidence/v1beta1/query";
import * as _72 from "./evidence/v1beta1/tx";
import * as _73 from "./feegrant/v1beta1/feegrant";
import * as _74 from "./feegrant/v1beta1/genesis";
import * as _75 from "./feegrant/v1beta1/query";
import * as _76 from "./feegrant/v1beta1/tx";
import * as _77 from "./genutil/v1beta1/genesis";
import * as _78 from "./gov/v1/genesis";
import * as _79 from "./gov/v1/gov";
import * as _80 from "./gov/v1/query";
import * as _81 from "./gov/v1/tx";
import * as _82 from "./gov/v1beta1/genesis";
import * as _83 from "./gov/v1beta1/gov";
import * as _84 from "./gov/v1beta1/query";
import * as _85 from "./gov/v1beta1/tx";
import * as _86 from "./group/v1/events";
import * as _87 from "./group/v1/genesis";
import * as _88 from "./group/v1/query";
import * as _89 from "./group/v1/tx";
import * as _90 from "./group/v1/types";
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _95 from "./nft/v1beta1/event";
import * as _96 from "./nft/v1beta1/genesis";
import * as _97 from "./nft/v1beta1/nft";
import * as _98 from "./nft/v1beta1/query";
import * as _99 from "./nft/v1beta1/tx";
import * as _100 from "./orm/module/v1alpha1/module";
import * as _101 from "./orm/v1/orm";
import * as _102 from "./orm/v1alpha1/schema";
import * as _103 from "./params/v1beta1/params";
import * as _104 from "./params/v1beta1/query";
import * as _105 from "./slashing/v1beta1/genesis";
import * as _106 from "./slashing/v1beta1/query";
import * as _107 from "./slashing/v1beta1/slashing";
import * as _108 from "./slashing/v1beta1/tx";
import * as _109 from "./staking/v1beta1/authz";
import * as _110 from "./staking/v1beta1/genesis";
import * as _111 from "./staking/v1beta1/query";
import * as _112 from "./staking/v1beta1/staking";
import * as _113 from "./staking/v1beta1/tx";
import * as _114 from "./tx/signing/v1beta1/signing";
import * as _115 from "./tx/v1beta1/service";
import * as _116 from "./tx/v1beta1/tx";
import * as _117 from "./upgrade/v1beta1/query";
import * as _118 from "./upgrade/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _176 from "./app/v1alpha1/query.rpc.Query";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./base/node/v1beta1/query.rpc.Service";
import * as _181 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _182 from "./distribution/v1beta1/query.rpc.Query";
import * as _183 from "./evidence/v1beta1/query.rpc.Query";
import * as _184 from "./feegrant/v1beta1/query.rpc.Query";
import * as _185 from "./gov/v1/query.rpc.Query";
import * as _186 from "./gov/v1beta1/query.rpc.Query";
import * as _187 from "./group/v1/query.rpc.Query";
import * as _188 from "./mint/v1beta1/query.rpc.Query";
import * as _189 from "./nft/v1beta1/query.rpc.Query";
import * as _190 from "./params/v1beta1/query.rpc.Query";
import * as _191 from "./slashing/v1beta1/query.rpc.Query";
import * as _192 from "./staking/v1beta1/query.rpc.Query";
import * as _193 from "./tx/v1beta1/service.rpc.Service";
import * as _194 from "./upgrade/v1beta1/query.rpc.Query";
import * as _195 from "./authz/v1beta1/tx.rpc.msg";
import * as _196 from "./bank/v1beta1/tx.rpc.msg";
import * as _197 from "./crisis/v1beta1/tx.rpc.msg";
import * as _198 from "./distribution/v1beta1/tx.rpc.msg";
import * as _199 from "./evidence/v1beta1/tx.rpc.msg";
import * as _200 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _201 from "./gov/v1/tx.rpc.msg";
import * as _202 from "./gov/v1beta1/tx.rpc.msg";
import * as _203 from "./group/v1/tx.rpc.msg";
import * as _204 from "./nft/v1beta1/tx.rpc.msg";
import * as _205 from "./slashing/v1beta1/tx.rpc.msg";
import * as _206 from "./staking/v1beta1/tx.rpc.msg";
import * as _207 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _26.Module;
                    fromPartial(_: Partial<_26.Module>): _26.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _29.QueryConfigRequest): Promise<_29.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _29.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.QueryConfigRequest;
                fromPartial(_: Partial<_29.QueryConfigRequest>): _29.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _29.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryConfigResponse;
                fromPartial(object: Partial<_29.QueryConfigResponse>): _29.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _28.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.ModuleDescriptor;
                fromPartial(object: Partial<_28.ModuleDescriptor>): _28.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _28.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.PackageReference;
                fromPartial(object: Partial<_28.PackageReference>): _28.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _28.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MigrateFromInfo;
                fromPartial(object: Partial<_28.MigrateFromInfo>): _28.MigrateFromInfo;
            };
            Config: {
                encode(message: _27.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Config;
                fromPartial(object: Partial<_27.Config>): _27.Config;
            };
            ModuleConfig: {
                encode(message: _27.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.ModuleConfig;
                fromPartial(object: Partial<_27.ModuleConfig>): _27.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                accountAddressByID(request: _32.QueryAccountAddressByIDRequest): Promise<_32.QueryAccountAddressByIDResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                moduleAccounts(request?: _32.QueryModuleAccountsRequest): Promise<_32.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _32.Bech32PrefixRequest): Promise<_32.Bech32PrefixResponse>;
                addressBytesToString(request: _32.AddressBytesToStringRequest): Promise<_32.AddressBytesToStringResponse>;
                addressStringToBytes(request: _32.AddressStringToBytesRequest): Promise<_32.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _32.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountsRequest;
                fromPartial(object: Partial<_32.QueryAccountsRequest>): _32.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _32.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountsResponse;
                fromPartial(object: Partial<_32.QueryAccountsResponse>): _32.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _32.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountRequest;
                fromPartial(object: Partial<_32.QueryAccountRequest>): _32.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _32.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountResponse;
                fromPartial(object: Partial<_32.QueryAccountResponse>): _32.QueryAccountResponse;
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
            QueryModuleAccountsRequest: {
                encode(_: _32.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_32.QueryModuleAccountsRequest>): _32.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _32.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_32.QueryModuleAccountsResponse>): _32.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _32.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameRequest>): _32.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _32.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_32.QueryModuleAccountByNameResponse>): _32.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _32.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.Bech32PrefixRequest;
                fromPartial(_: Partial<_32.Bech32PrefixRequest>): _32.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _32.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Bech32PrefixResponse;
                fromPartial(object: Partial<_32.Bech32PrefixResponse>): _32.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _32.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.AddressBytesToStringRequest;
                fromPartial(object: Partial<_32.AddressBytesToStringRequest>): _32.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _32.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.AddressBytesToStringResponse;
                fromPartial(object: Partial<_32.AddressBytesToStringResponse>): _32.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _32.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.AddressStringToBytesRequest;
                fromPartial(object: Partial<_32.AddressStringToBytesRequest>): _32.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _32.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.AddressStringToBytesResponse;
                fromPartial(object: Partial<_32.AddressStringToBytesResponse>): _32.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _32.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_32.QueryAccountAddressByIDRequest>): _32.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _32.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_32.QueryAccountAddressByIDResponse>): _32.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            BaseAccount: {
                encode(message: _30.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.BaseAccount;
                fromPartial(object: Partial<_30.BaseAccount>): _30.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _30.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.ModuleAccount;
                fromPartial(object: Partial<_30.ModuleAccount>): _30.ModuleAccount;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _37.MsgGrant): {
                        typeUrl: string;
                        value: _37.MsgGrant;
                    };
                    exec(value: _37.MsgExec): {
                        typeUrl: string;
                        value: _37.MsgExec;
                    };
                    revoke(value: _37.MsgRevoke): {
                        typeUrl: string;
                        value: _37.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _37.MsgGrant) => {
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
                    }) => _37.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _37.MsgExec) => {
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
                    }) => _37.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _37.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _37.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _37.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgGrant;
                fromPartial(object: Partial<_37.MsgGrant>): _37.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _37.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgExecResponse;
                fromPartial(object: Partial<_37.MsgExecResponse>): _37.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _37.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgExec;
                fromPartial(object: Partial<_37.MsgExec>): _37.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _37.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgGrantResponse;
                fromPartial(_: Partial<_37.MsgGrantResponse>): _37.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _37.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MsgRevoke;
                fromPartial(object: Partial<_37.MsgRevoke>): _37.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _37.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _37.MsgRevokeResponse;
                fromPartial(_: Partial<_37.MsgRevokeResponse>): _37.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _36.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGrantsRequest;
                fromPartial(object: Partial<_36.QueryGrantsRequest>): _36.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _36.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGrantsResponse;
                fromPartial(object: Partial<_36.QueryGrantsResponse>): _36.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _36.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranterGrantsRequest>): _36.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _36.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranterGrantsResponse>): _36.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _36.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranteeGrantsRequest>): _36.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _36.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranteeGrantsResponse>): _36.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            EventGrant: {
                encode(message: _34.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventGrant;
                fromPartial(object: Partial<_34.EventGrant>): _34.EventGrant;
            };
            EventRevoke: {
                encode(message: _34.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventRevoke;
                fromPartial(object: Partial<_34.EventRevoke>): _34.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _33.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GenericAuthorization;
                fromPartial(object: Partial<_33.GenericAuthorization>): _33.GenericAuthorization;
            };
            Grant: {
                encode(message: _33.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Grant;
                fromPartial(object: Partial<_33.Grant>): _33.Grant;
            };
            GrantAuthorization: {
                encode(message: _33.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GrantAuthorization;
                fromPartial(object: Partial<_33.GrantAuthorization>): _33.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _33.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.GrantQueueItem;
                fromPartial(object: Partial<_33.GrantQueueItem>): _33.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
                denomOwners(request: _41.QueryDenomOwnersRequest): Promise<_41.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _42.MsgSend): {
                        typeUrl: string;
                        value: _42.MsgSend;
                    };
                    multiSend(value: _42.MsgMultiSend): {
                        typeUrl: string;
                        value: _42.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _42.MsgSend) => {
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
                    }) => _42.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _42.MsgMultiSend) => {
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
                    }) => _42.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _42.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgSend;
                fromPartial(object: Partial<_42.MsgSend>): _42.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _42.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgSendResponse;
                fromPartial(_: Partial<_42.MsgSendResponse>): _42.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _42.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgMultiSend;
                fromPartial(object: Partial<_42.MsgMultiSend>): _42.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _42.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgMultiSendResponse;
                fromPartial(_: Partial<_42.MsgMultiSendResponse>): _42.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _41.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryBalanceRequest;
                fromPartial(object: Partial<_41.QueryBalanceRequest>): _41.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _41.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryBalanceResponse;
                fromPartial(object: Partial<_41.QueryBalanceResponse>): _41.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _41.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryAllBalancesRequest;
                fromPartial(object: Partial<_41.QueryAllBalancesRequest>): _41.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _41.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryAllBalancesResponse;
                fromPartial(object: Partial<_41.QueryAllBalancesResponse>): _41.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _41.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_41.QuerySpendableBalancesRequest>): _41.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _41.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_41.QuerySpendableBalancesResponse>): _41.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _41.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_41.QueryTotalSupplyRequest>): _41.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _41.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_41.QueryTotalSupplyResponse>): _41.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _41.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySupplyOfRequest;
                fromPartial(object: Partial<_41.QuerySupplyOfRequest>): _41.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _41.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QuerySupplyOfResponse;
                fromPartial(object: Partial<_41.QuerySupplyOfResponse>): _41.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _41.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomsMetadataRequest>): _41.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _41.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomsMetadataResponse>): _41.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _41.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_41.QueryDenomMetadataRequest>): _41.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _41.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_41.QueryDenomMetadataResponse>): _41.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _41.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_41.QueryDenomOwnersRequest>): _41.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _41.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.DenomOwner;
                fromPartial(object: Partial<_41.DenomOwner>): _41.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _41.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_41.QueryDenomOwnersResponse>): _41.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Balance: {
                encode(message: _40.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.Balance;
                fromPartial(object: Partial<_40.Balance>): _40.Balance;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            SendEnabled: {
                encode(message: _39.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.SendEnabled;
                fromPartial(object: Partial<_39.SendEnabled>): _39.SendEnabled;
            };
            Input: {
                encode(message: _39.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Input;
                fromPartial(object: Partial<_39.Input>): _39.Input;
            };
            Output: {
                encode(message: _39.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Output;
                fromPartial(object: Partial<_39.Output>): _39.Output;
            };
            Supply: {
                encode(message: _39.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Supply;
                fromPartial(object: Partial<_39.Supply>): _39.Supply;
            };
            DenomUnit: {
                encode(message: _39.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.DenomUnit;
                fromPartial(object: Partial<_39.DenomUnit>): _39.DenomUnit;
            };
            Metadata: {
                encode(message: _39.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Metadata;
                fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
            };
            SendAuthorization: {
                encode(message: _38.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.SendAuthorization;
                fromPartial(object: Partial<_38.SendAuthorization>): _38.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _43.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.TxResponse;
                    fromPartial(object: Partial<_43.TxResponse>): _43.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _43.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.ABCIMessageLog;
                    fromPartial(object: Partial<_43.ABCIMessageLog>): _43.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _43.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.StringEvent;
                    fromPartial(object: Partial<_43.StringEvent>): _43.StringEvent;
                };
                Attribute: {
                    encode(message: _43.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Attribute;
                    fromPartial(object: Partial<_43.Attribute>): _43.Attribute;
                };
                GasInfo: {
                    encode(message: _43.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GasInfo;
                    fromPartial(object: Partial<_43.GasInfo>): _43.GasInfo;
                };
                Result: {
                    encode(message: _43.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Result;
                    fromPartial(object: Partial<_43.Result>): _43.Result;
                };
                SimulationResponse: {
                    encode(message: _43.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SimulationResponse;
                    fromPartial(object: Partial<_43.SimulationResponse>): _43.SimulationResponse;
                };
                MsgData: {
                    encode(message: _43.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.MsgData;
                    fromPartial(object: Partial<_43.MsgData>): _43.MsgData;
                };
                TxMsgData: {
                    encode(message: _43.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.TxMsgData;
                    fromPartial(object: Partial<_43.TxMsgData>): _43.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _43.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.SearchTxsResult;
                    fromPartial(object: Partial<_43.SearchTxsResult>): _43.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _44.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Pairs;
                    fromPartial(object: Partial<_44.Pairs>): _44.Pairs;
                };
                Pair: {
                    encode(message: _44.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _44.Pair;
                    fromPartial(object: Partial<_44.Pair>): _44.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _180.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _45.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _45.ConfigRequest;
                    fromPartial(_: Partial<_45.ConfigRequest>): _45.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _45.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.ConfigResponse;
                    fromPartial(object: Partial<_45.ConfigResponse>): _45.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _46.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.PageRequest;
                    fromPartial(object: Partial<_46.PageRequest>): _46.PageRequest;
                };
                PageResponse: {
                    encode(message: _46.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _46.PageResponse;
                    fromPartial(object: Partial<_46.PageResponse>): _46.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _47.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _47.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_47.ListAllInterfacesRequest>): _47.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _47.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_47.ListAllInterfacesResponse>): _47.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _47.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListImplementationsRequest;
                    fromPartial(object: Partial<_47.ListImplementationsRequest>): _47.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _47.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _47.ListImplementationsResponse;
                    fromPartial(object: Partial<_47.ListImplementationsResponse>): _47.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _48.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.AppDescriptor;
                    fromPartial(object: Partial<_48.AppDescriptor>): _48.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _48.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.TxDescriptor;
                    fromPartial(object: Partial<_48.TxDescriptor>): _48.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _48.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.AuthnDescriptor;
                    fromPartial(object: Partial<_48.AuthnDescriptor>): _48.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _48.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.SigningModeDescriptor;
                    fromPartial(object: Partial<_48.SigningModeDescriptor>): _48.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _48.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.ChainDescriptor;
                    fromPartial(object: Partial<_48.ChainDescriptor>): _48.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _48.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.CodecDescriptor;
                    fromPartial(object: Partial<_48.CodecDescriptor>): _48.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _48.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceDescriptor;
                    fromPartial(object: Partial<_48.InterfaceDescriptor>): _48.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _48.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_48.InterfaceImplementerDescriptor>): _48.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _48.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_48.InterfaceAcceptingMessageDescriptor>): _48.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _48.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.ConfigurationDescriptor;
                    fromPartial(object: Partial<_48.ConfigurationDescriptor>): _48.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _48.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.MsgDescriptor;
                    fromPartial(object: Partial<_48.MsgDescriptor>): _48.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _48.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_48.GetAuthnDescriptorRequest>): _48.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _48.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_48.GetAuthnDescriptorResponse>): _48.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _48.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_48.GetChainDescriptorRequest>): _48.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _48.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_48.GetChainDescriptorResponse>): _48.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _48.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_48.GetCodecDescriptorRequest>): _48.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _48.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_48.GetCodecDescriptorResponse>): _48.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _48.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_48.GetConfigurationDescriptorRequest>): _48.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _48.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_48.GetConfigurationDescriptorResponse>): _48.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _48.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_48.GetQueryServicesDescriptorRequest>): _48.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _48.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_48.GetQueryServicesDescriptorResponse>): _48.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _48.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _48.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_48.GetTxDescriptorRequest>): _48.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _48.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_48.GetTxDescriptorResponse>): _48.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _48.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryServicesDescriptor;
                    fromPartial(object: Partial<_48.QueryServicesDescriptor>): _48.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _48.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryServiceDescriptor;
                    fromPartial(object: Partial<_48.QueryServiceDescriptor>): _48.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _48.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _48.QueryMethodDescriptor;
                    fromPartial(object: Partial<_48.QueryMethodDescriptor>): _48.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _49.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Snapshot;
                    fromPartial(object: Partial<_49.Snapshot>): _49.Snapshot;
                };
                Metadata: {
                    encode(message: _49.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Metadata;
                    fromPartial(object: Partial<_49.Metadata>): _49.Metadata;
                };
                SnapshotItem: {
                    encode(message: _49.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotItem;
                    fromPartial(object: Partial<_49.SnapshotItem>): _49.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _49.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotStoreItem;
                    fromPartial(object: Partial<_49.SnapshotStoreItem>): _49.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _49.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotIAVLItem;
                    fromPartial(object: Partial<_49.SnapshotIAVLItem>): _49.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _49.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_49.SnapshotExtensionMeta>): _49.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _49.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_49.SnapshotExtensionPayload>): _49.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _49.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotKVItem;
                    fromPartial(object: Partial<_49.SnapshotKVItem>): _49.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _49.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.SnapshotSchema;
                    fromPartial(object: Partial<_49.SnapshotSchema>): _49.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _51.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.StoreKVPair;
                    fromPartial(object: Partial<_51.StoreKVPair>): _51.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _51.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.BlockMetadata;
                    fromPartial(object: Partial<_51.BlockMetadata>): _51.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _51.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_51.BlockMetadata_DeliverTx>): _51.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _50.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.CommitInfo;
                    fromPartial(object: Partial<_50.CommitInfo>): _50.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _50.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.StoreInfo;
                    fromPartial(object: Partial<_50.StoreInfo>): _50.StoreInfo;
                };
                CommitID: {
                    encode(message: _50.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.CommitID;
                    fromPartial(object: Partial<_50.CommitID>): _50.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _181.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                    getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                    getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                    getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _52.ABCIQueryRequest): Promise<_52.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _53.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.Block;
                    fromPartial(object: Partial<_53.Block>): _53.Block;
                };
                Header: {
                    encode(message: _53.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.Header;
                    fromPartial(object: Partial<_53.Header>): _53.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _52.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightRequest>): _52.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _52.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_52.GetValidatorSetByHeightResponse>): _52.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _52.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetRequest>): _52.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _52.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_52.GetLatestValidatorSetResponse>): _52.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _52.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Validator;
                    fromPartial(object: Partial<_52.Validator>): _52.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _52.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_52.GetBlockByHeightRequest>): _52.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _52.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_52.GetBlockByHeightResponse>): _52.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _52.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetLatestBlockRequest;
                    fromPartial(_: Partial<_52.GetLatestBlockRequest>): _52.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _52.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetLatestBlockResponse;
                    fromPartial(object: Partial<_52.GetLatestBlockResponse>): _52.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _52.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetSyncingRequest;
                    fromPartial(_: Partial<_52.GetSyncingRequest>): _52.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _52.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetSyncingResponse;
                    fromPartial(object: Partial<_52.GetSyncingResponse>): _52.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _52.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _52.GetNodeInfoRequest;
                    fromPartial(_: Partial<_52.GetNodeInfoRequest>): _52.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _52.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.GetNodeInfoResponse;
                    fromPartial(object: Partial<_52.GetNodeInfoResponse>): _52.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _52.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.VersionInfo;
                    fromPartial(object: Partial<_52.VersionInfo>): _52.VersionInfo;
                };
                Module: {
                    encode(message: _52.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _52.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.ABCIQueryRequest;
                    fromPartial(object: Partial<_52.ABCIQueryRequest>): _52.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _52.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.ABCIQueryResponse;
                    fromPartial(object: Partial<_52.ABCIQueryResponse>): _52.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _52.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.ProofOp;
                    fromPartial(object: Partial<_52.ProofOp>): _52.ProofOp;
                };
                ProofOps: {
                    encode(message: _52.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.ProofOps;
                    fromPartial(object: Partial<_52.ProofOps>): _52.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _54.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.Coin;
                fromPartial(object: Partial<_54.Coin>): _54.Coin;
            };
            DecCoin: {
                encode(message: _54.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DecCoin;
                fromPartial(object: Partial<_54.DecCoin>): _54.DecCoin;
            };
            IntProto: {
                encode(message: _54.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.IntProto;
                fromPartial(object: Partial<_54.IntProto>): _54.IntProto;
            };
            DecProto: {
                encode(message: _54.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DecProto;
                fromPartial(object: Partial<_54.DecProto>): _54.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _56.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisOwners;
                fromPartial(object: Partial<_56.GenesisOwners>): _56.GenesisOwners;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            Capability: {
                encode(message: _55.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Capability;
                fromPartial(object: Partial<_55.Capability>): _55.Capability;
            };
            Owner: {
                encode(message: _55.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Owner;
                fromPartial(object: Partial<_55.Owner>): _55.Owner;
            };
            CapabilityOwners: {
                encode(message: _55.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.CapabilityOwners;
                fromPartial(object: Partial<_55.CapabilityOwners>): _55.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _58.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _58.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _58.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _58.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _58.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MsgVerifyInvariant;
                fromPartial(object: Partial<_58.MsgVerifyInvariant>): _58.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _58.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _58.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_58.MsgVerifyInvariantResponse>): _58.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _59.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.PubKey;
                fromPartial(object: Partial<_59.PubKey>): _59.PubKey;
            };
            PrivKey: {
                encode(message: _59.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.PrivKey;
                fromPartial(object: Partial<_59.PrivKey>): _59.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _60.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _60.BIP44Params;
                    fromPartial(object: Partial<_60.BIP44Params>): _60.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _61.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.Record;
                    fromPartial(object: Partial<_61.Record>): _61.Record;
                };
                Record_Local: {
                    encode(message: _61.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.Record_Local;
                    fromPartial(object: Partial<_61.Record_Local>): _61.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _61.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _61.Record_Ledger;
                    fromPartial(object: Partial<_61.Record_Ledger>): _61.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _61.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.Record_Multi;
                    fromPartial(_: Partial<_61.Record_Multi>): _61.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _61.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.Record_Offline;
                    fromPartial(_: Partial<_61.Record_Offline>): _61.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _62.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.LegacyAminoPubKey;
                fromPartial(object: Partial<_62.LegacyAminoPubKey>): _62.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _63.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.PubKey;
                fromPartial(object: Partial<_63.PubKey>): _63.PubKey;
            };
            PrivKey: {
                encode(message: _63.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.PrivKey;
                fromPartial(object: Partial<_63.PrivKey>): _63.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _64.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.PubKey;
                fromPartial(object: Partial<_64.PubKey>): _64.PubKey;
            };
            PrivKey: {
                encode(message: _64.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.PrivKey;
                fromPartial(object: Partial<_64.PrivKey>): _64.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _68.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _68.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _68.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _68.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _68.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _68.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _68.MsgFundCommunityPool) => {
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
                    }) => _68.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _68.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_68.MsgSetWithdrawAddress>): _68.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _68.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _68.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_68.MsgSetWithdrawAddressResponse>): _68.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _68.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorReward>): _68.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _68.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorRewardResponse>): _68.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _68.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommission>): _68.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _68.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommissionResponse>): _68.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _68.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.MsgFundCommunityPool;
                fromPartial(object: Partial<_68.MsgFundCommunityPool>): _68.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _68.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _68.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_68.MsgFundCommunityPoolResponse>): _68.MsgFundCommunityPoolResponse;
            };
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
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _67.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsRequest>): _67.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _67.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsResponse>): _67.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _67.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_67.QueryValidatorCommissionRequest>): _67.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _67.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_67.QueryValidatorCommissionResponse>): _67.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _67.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_67.QueryValidatorSlashesRequest>): _67.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _67.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_67.QueryValidatorSlashesResponse>): _67.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _67.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationRewardsRequest>): _67.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _67.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationRewardsResponse>): _67.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _67.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsRequest>): _67.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _67.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsResponse>): _67.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _67.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsRequest>): _67.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _67.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsResponse>): _67.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _67.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressRequest>): _67.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _67.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressResponse>): _67.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _67.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_67.QueryCommunityPoolRequest>): _67.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _67.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_67.QueryCommunityPoolResponse>): _67.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _66.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_66.DelegatorWithdrawInfo>): _66.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _66.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorOutstandingRewardsRecord>): _66.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _66.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_66.ValidatorAccumulatedCommissionRecord>): _66.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _66.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorHistoricalRewardsRecord>): _66.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _66.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorCurrentRewardsRecord>): _66.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _66.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_66.DelegatorStartingInfoRecord>): _66.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _66.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_66.ValidatorSlashEventRecord>): _66.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _65.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewards>): _65.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _65.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorCurrentRewards;
                fromPartial(object: Partial<_65.ValidatorCurrentRewards>): _65.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _65.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommission>): _65.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _65.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewards>): _65.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _65.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorSlashEvent;
                fromPartial(object: Partial<_65.ValidatorSlashEvent>): _65.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _65.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorSlashEvents;
                fromPartial(object: Partial<_65.ValidatorSlashEvents>): _65.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _65.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.FeePool;
                fromPartial(object: Partial<_65.FeePool>): _65.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _65.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposal>): _65.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _65.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.DelegatorStartingInfo;
                fromPartial(object: Partial<_65.DelegatorStartingInfo>): _65.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _65.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.DelegationDelegatorReward;
                fromPartial(object: Partial<_65.DelegationDelegatorReward>): _65.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _65.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposalWithDeposit>): _65.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _71.QueryEvidenceRequest): Promise<_71.QueryEvidenceResponse>;
                allEvidence(request?: _71.QueryAllEvidenceRequest): Promise<_71.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _72.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _72.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _72.MsgSubmitEvidence) => {
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
                    }) => _72.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _72.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgSubmitEvidence;
                fromPartial(object: Partial<_72.MsgSubmitEvidence>): _72.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _72.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_72.MsgSubmitEvidenceResponse>): _72.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _71.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryEvidenceRequest;
                fromPartial(object: Partial<_71.QueryEvidenceRequest>): _71.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _71.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryEvidenceResponse;
                fromPartial(object: Partial<_71.QueryEvidenceResponse>): _71.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _71.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_71.QueryAllEvidenceRequest>): _71.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _71.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_71.QueryAllEvidenceResponse>): _71.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
            Equivocation: {
                encode(message: _69.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.Equivocation;
                fromPartial(object: Partial<_69.Equivocation>): _69.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _75.QueryAllowanceRequest): Promise<_75.QueryAllowanceResponse>;
                allowances(request: _75.QueryAllowancesRequest): Promise<_75.QueryAllowancesResponse>;
                allowancesByGranter(request: _75.QueryAllowancesByGranterRequest): Promise<_75.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _76.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _76.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _76.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _76.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _76.MsgGrantAllowance) => {
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
                    }) => _76.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _76.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _76.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _76.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgGrantAllowance;
                fromPartial(object: Partial<_76.MsgGrantAllowance>): _76.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _76.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_76.MsgGrantAllowanceResponse>): _76.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _76.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.MsgRevokeAllowance;
                fromPartial(object: Partial<_76.MsgRevokeAllowance>): _76.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _76.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_76.MsgRevokeAllowanceResponse>): _76.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _75.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowanceRequest;
                fromPartial(object: Partial<_75.QueryAllowanceRequest>): _75.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _75.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowanceResponse;
                fromPartial(object: Partial<_75.QueryAllowanceResponse>): _75.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _75.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowancesRequest;
                fromPartial(object: Partial<_75.QueryAllowancesRequest>): _75.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _75.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowancesResponse;
                fromPartial(object: Partial<_75.QueryAllowancesResponse>): _75.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _75.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_75.QueryAllowancesByGranterRequest>): _75.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _75.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_75.QueryAllowancesByGranterResponse>): _75.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
            BasicAllowance: {
                encode(message: _73.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.BasicAllowance;
                fromPartial(object: Partial<_73.BasicAllowance>): _73.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _73.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.PeriodicAllowance;
                fromPartial(object: Partial<_73.PeriodicAllowance>): _73.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _73.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.AllowedMsgAllowance;
                fromPartial(object: Partial<_73.AllowedMsgAllowance>): _73.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _73.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.Grant;
                fromPartial(object: Partial<_73.Grant>): _73.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                proposals(request: _80.QueryProposalsRequest): Promise<_80.QueryProposalsResponse>;
                vote(request: _80.QueryVoteRequest): Promise<_80.QueryVoteResponse>;
                votes(request: _80.QueryVotesRequest): Promise<_80.QueryVotesResponse>;
                params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                deposit(request: _80.QueryDepositRequest): Promise<_80.QueryDepositResponse>;
                deposits(request: _80.QueryDepositsRequest): Promise<_80.QueryDepositsResponse>;
                tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _81.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _81.MsgExecLegacyContent;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _81.MsgSubmitProposal) => {
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
                    }) => _81.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _81.MsgExecLegacyContent) => {
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
                    }) => _81.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _81.MsgVote) => {
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
                    }) => _81.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _81.MsgVoteWeighted) => {
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
                    }) => _81.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _81.MsgDeposit) => {
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
                    }) => _81.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _81.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgSubmitProposal;
                fromPartial(object: Partial<_81.MsgSubmitProposal>): _81.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_81.MsgSubmitProposalResponse>): _81.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _81.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgExecLegacyContent;
                fromPartial(object: Partial<_81.MsgExecLegacyContent>): _81.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _81.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_81.MsgExecLegacyContentResponse>): _81.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _81.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgVote;
                fromPartial(object: Partial<_81.MsgVote>): _81.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _81.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgVoteResponse;
                fromPartial(_: Partial<_81.MsgVoteResponse>): _81.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _81.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgVoteWeighted;
                fromPartial(object: Partial<_81.MsgVoteWeighted>): _81.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _81.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_81.MsgVoteWeightedResponse>): _81.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _81.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.MsgDeposit;
                fromPartial(object: Partial<_81.MsgDeposit>): _81.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _81.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.MsgDepositResponse;
                fromPartial(_: Partial<_81.MsgDepositResponse>): _81.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _80.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryProposalRequest;
                fromPartial(object: Partial<_80.QueryProposalRequest>): _80.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _80.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryProposalResponse;
                fromPartial(object: Partial<_80.QueryProposalResponse>): _80.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _80.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryProposalsRequest;
                fromPartial(object: Partial<_80.QueryProposalsRequest>): _80.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _80.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryProposalsResponse;
                fromPartial(object: Partial<_80.QueryProposalsResponse>): _80.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _80.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryVoteRequest;
                fromPartial(object: Partial<_80.QueryVoteRequest>): _80.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _80.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryVoteResponse;
                fromPartial(object: Partial<_80.QueryVoteResponse>): _80.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _80.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryVotesRequest;
                fromPartial(object: Partial<_80.QueryVotesRequest>): _80.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _80.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryVotesResponse;
                fromPartial(object: Partial<_80.QueryVotesResponse>): _80.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryParamsRequest;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryParamsResponse;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _80.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDepositRequest;
                fromPartial(object: Partial<_80.QueryDepositRequest>): _80.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _80.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDepositResponse;
                fromPartial(object: Partial<_80.QueryDepositResponse>): _80.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _80.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDepositsRequest;
                fromPartial(object: Partial<_80.QueryDepositsRequest>): _80.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _80.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryDepositsResponse;
                fromPartial(object: Partial<_80.QueryDepositsResponse>): _80.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _80.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryTallyResultRequest;
                fromPartial(object: Partial<_80.QueryTallyResultRequest>): _80.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _80.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.QueryTallyResultResponse;
                fromPartial(object: Partial<_80.QueryTallyResultResponse>): _80.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _79.VoteOption;
            voteOptionToJSON(object: _79.VoteOption): string;
            proposalStatusFromJSON(object: any): _79.ProposalStatus;
            proposalStatusToJSON(object: _79.ProposalStatus): string;
            VoteOption: typeof _79.VoteOption;
            VoteOptionSDKType: typeof _79.VoteOption;
            ProposalStatus: typeof _79.ProposalStatus;
            ProposalStatusSDKType: typeof _79.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _79.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.WeightedVoteOption;
                fromPartial(object: Partial<_79.WeightedVoteOption>): _79.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _79.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Deposit;
                fromPartial(object: Partial<_79.Deposit>): _79.Deposit;
            };
            Proposal: {
                encode(message: _79.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Proposal;
                fromPartial(object: Partial<_79.Proposal>): _79.Proposal;
            };
            TallyResult: {
                encode(message: _79.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.TallyResult;
                fromPartial(object: Partial<_79.TallyResult>): _79.TallyResult;
            };
            Vote: {
                encode(message: _79.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Vote;
                fromPartial(object: Partial<_79.Vote>): _79.Vote;
            };
            DepositParams: {
                encode(message: _79.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DepositParams;
                fromPartial(object: Partial<_79.DepositParams>): _79.DepositParams;
            };
            VotingParams: {
                encode(message: _79.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.VotingParams;
                fromPartial(object: Partial<_79.VotingParams>): _79.VotingParams;
            };
            TallyParams: {
                encode(message: _79.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.TallyParams;
                fromPartial(object: Partial<_79.TallyParams>): _79.TallyParams;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                proposals(request: _84.QueryProposalsRequest): Promise<_84.QueryProposalsResponse>;
                vote(request: _84.QueryVoteRequest): Promise<_84.QueryVoteResponse>;
                votes(request: _84.QueryVotesRequest): Promise<_84.QueryVotesResponse>;
                params(request: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                deposit(request: _84.QueryDepositRequest): Promise<_84.QueryDepositResponse>;
                deposits(request: _84.QueryDepositsRequest): Promise<_84.QueryDepositsResponse>;
                tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    voteWeighted(value: _85.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _85.MsgVoteWeighted;
                    };
                    deposit(value: _85.MsgDeposit): {
                        typeUrl: string;
                        value: _85.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _85.MsgSubmitProposal) => {
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
                    }) => _85.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _85.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _85.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _85.MsgVoteWeighted) => {
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
                    }) => _85.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _85.MsgDeposit) => {
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
                    }) => _85.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _85.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgSubmitProposal;
                fromPartial(object: Partial<_85.MsgSubmitProposal>): _85.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _85.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_85.MsgSubmitProposalResponse>): _85.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _85.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgVote;
                fromPartial(object: Partial<_85.MsgVote>): _85.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _85.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.MsgVoteResponse;
                fromPartial(_: Partial<_85.MsgVoteResponse>): _85.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _85.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgVoteWeighted;
                fromPartial(object: Partial<_85.MsgVoteWeighted>): _85.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _85.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_85.MsgVoteWeightedResponse>): _85.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _85.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgDeposit;
                fromPartial(object: Partial<_85.MsgDeposit>): _85.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _85.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.MsgDepositResponse;
                fromPartial(_: Partial<_85.MsgDepositResponse>): _85.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _84.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryProposalRequest;
                fromPartial(object: Partial<_84.QueryProposalRequest>): _84.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _84.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryProposalResponse;
                fromPartial(object: Partial<_84.QueryProposalResponse>): _84.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _84.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryProposalsRequest;
                fromPartial(object: Partial<_84.QueryProposalsRequest>): _84.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _84.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryProposalsResponse;
                fromPartial(object: Partial<_84.QueryProposalsResponse>): _84.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _84.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryVoteRequest;
                fromPartial(object: Partial<_84.QueryVoteRequest>): _84.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _84.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryVoteResponse;
                fromPartial(object: Partial<_84.QueryVoteResponse>): _84.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _84.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryVotesRequest;
                fromPartial(object: Partial<_84.QueryVotesRequest>): _84.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _84.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryVotesResponse;
                fromPartial(object: Partial<_84.QueryVotesResponse>): _84.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryParamsRequest;
                fromPartial(object: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryParamsResponse;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _84.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDepositRequest;
                fromPartial(object: Partial<_84.QueryDepositRequest>): _84.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _84.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDepositResponse;
                fromPartial(object: Partial<_84.QueryDepositResponse>): _84.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _84.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDepositsRequest;
                fromPartial(object: Partial<_84.QueryDepositsRequest>): _84.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _84.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryDepositsResponse;
                fromPartial(object: Partial<_84.QueryDepositsResponse>): _84.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _84.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryTallyResultRequest;
                fromPartial(object: Partial<_84.QueryTallyResultRequest>): _84.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _84.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.QueryTallyResultResponse;
                fromPartial(object: Partial<_84.QueryTallyResultResponse>): _84.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _83.VoteOption;
            voteOptionToJSON(object: _83.VoteOption): string;
            proposalStatusFromJSON(object: any): _83.ProposalStatus;
            proposalStatusToJSON(object: _83.ProposalStatus): string;
            VoteOption: typeof _83.VoteOption;
            VoteOptionSDKType: typeof _83.VoteOption;
            ProposalStatus: typeof _83.ProposalStatus;
            ProposalStatusSDKType: typeof _83.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _83.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.WeightedVoteOption;
                fromPartial(object: Partial<_83.WeightedVoteOption>): _83.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _83.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.TextProposal;
                fromPartial(object: Partial<_83.TextProposal>): _83.TextProposal;
            };
            Deposit: {
                encode(message: _83.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Deposit;
                fromPartial(object: Partial<_83.Deposit>): _83.Deposit;
            };
            Proposal: {
                encode(message: _83.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Proposal;
                fromPartial(object: Partial<_83.Proposal>): _83.Proposal;
            };
            TallyResult: {
                encode(message: _83.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.TallyResult;
                fromPartial(object: Partial<_83.TallyResult>): _83.TallyResult;
            };
            Vote: {
                encode(message: _83.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.Vote;
                fromPartial(object: Partial<_83.Vote>): _83.Vote;
            };
            DepositParams: {
                encode(message: _83.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.DepositParams;
                fromPartial(object: Partial<_83.DepositParams>): _83.DepositParams;
            };
            VotingParams: {
                encode(message: _83.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.VotingParams;
                fromPartial(object: Partial<_83.VotingParams>): _83.VotingParams;
            };
            TallyParams: {
                encode(message: _83.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.TallyParams;
                fromPartial(object: Partial<_83.TallyParams>): _83.TallyParams;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _88.QueryGroupInfoRequest): Promise<_88.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _88.QueryGroupPolicyInfoRequest): Promise<_88.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _88.QueryGroupMembersRequest): Promise<_88.QueryGroupMembersResponse>;
                groupsByAdmin(request: _88.QueryGroupsByAdminRequest): Promise<_88.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _88.QueryGroupPoliciesByGroupRequest): Promise<_88.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _88.QueryGroupPoliciesByAdminRequest): Promise<_88.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _88.QueryProposalsByGroupPolicyRequest): Promise<_88.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _88.QueryVoteByProposalVoterRequest): Promise<_88.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _88.QueryVotesByProposalRequest): Promise<_88.QueryVotesByProposalResponse>;
                votesByVoter(request: _88.QueryVotesByVoterRequest): Promise<_88.QueryVotesByVoterResponse>;
                groupsByMember(request: _88.QueryGroupsByMemberRequest): Promise<_88.QueryGroupsByMemberResponse>;
                tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
                groups(request?: _88.QueryGroupsRequest): Promise<_88.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _89.MsgCreateGroup): {
                        typeUrl: string;
                        value: _89.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _89.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _89.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _89.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _89.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _89.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _89.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _89.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _89.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _89.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _89.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _89.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _89.MsgWithdrawProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    exec(value: _89.MsgExec): {
                        typeUrl: string;
                        value: _89.MsgExec;
                    };
                    leaveGroup(value: _89.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _89.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _89.MsgCreateGroup) => {
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
                    }) => _89.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _89.MsgUpdateGroupMembers) => {
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
                    }) => _89.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _89.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _89.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _89.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _89.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _89.MsgCreateGroupPolicy) => {
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
                    }) => _89.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _89.MsgCreateGroupWithPolicy) => {
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
                    }) => _89.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _89.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _89.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _89.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _89.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _89.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _89.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _89.MsgSubmitProposal) => {
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
                    }) => _89.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _89.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _89.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _89.MsgVote) => {
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
                    }) => _89.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _89.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _89.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _89.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _89.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _90.VoteOption;
            voteOptionToJSON(object: _90.VoteOption): string;
            proposalStatusFromJSON(object: any): _90.ProposalStatus;
            proposalStatusToJSON(object: _90.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _90.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _90.ProposalExecutorResult): string;
            VoteOption: typeof _90.VoteOption;
            VoteOptionSDKType: typeof _90.VoteOption;
            ProposalStatus: typeof _90.ProposalStatus;
            ProposalStatusSDKType: typeof _90.ProposalStatus;
            ProposalExecutorResult: typeof _90.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _90.ProposalExecutorResult;
            Member: {
                encode(message: _90.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Member;
                fromPartial(object: Partial<_90.Member>): _90.Member;
            };
            MemberRequest: {
                encode(message: _90.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.MemberRequest;
                fromPartial(object: Partial<_90.MemberRequest>): _90.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _90.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_90.ThresholdDecisionPolicy>): _90.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _90.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.PercentageDecisionPolicy;
                fromPartial(object: Partial<_90.PercentageDecisionPolicy>): _90.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _90.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.DecisionPolicyWindows;
                fromPartial(object: Partial<_90.DecisionPolicyWindows>): _90.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _90.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GroupInfo;
                fromPartial(object: Partial<_90.GroupInfo>): _90.GroupInfo;
            };
            GroupMember: {
                encode(message: _90.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GroupMember;
                fromPartial(object: Partial<_90.GroupMember>): _90.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _90.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GroupPolicyInfo;
                fromPartial(object: Partial<_90.GroupPolicyInfo>): _90.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _90.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Proposal;
                fromPartial(object: Partial<_90.Proposal>): _90.Proposal;
            };
            TallyResult: {
                encode(message: _90.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.TallyResult;
                fromPartial(object: Partial<_90.TallyResult>): _90.TallyResult;
            };
            Vote: {
                encode(message: _90.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Vote;
                fromPartial(object: Partial<_90.Vote>): _90.Vote;
            };
            execFromJSON(object: any): _89.Exec;
            execToJSON(object: _89.Exec): string;
            Exec: typeof _89.Exec;
            ExecSDKType: typeof _89.Exec;
            MsgCreateGroup: {
                encode(message: _89.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroup;
                fromPartial(object: Partial<_89.MsgCreateGroup>): _89.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _89.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroupResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupResponse>): _89.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _89.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_89.MsgUpdateGroupMembers>): _89.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _89.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupMembersResponse>): _89.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _89.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_89.MsgUpdateGroupAdmin>): _89.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _89.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupAdminResponse>): _89.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _89.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_89.MsgUpdateGroupMetadata>): _89.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _89.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupMetadataResponse>): _89.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _89.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_89.MsgCreateGroupPolicy>): _89.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _89.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupPolicyResponse>): _89.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _89.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyAdmin>): _89.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _89.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_89.MsgCreateGroupWithPolicy>): _89.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _89.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_89.MsgCreateGroupWithPolicyResponse>): _89.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _89.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyAdminResponse>): _89.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _89.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyDecisionPolicy>): _89.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _89.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyDecisionPolicyResponse>): _89.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _89.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_89.MsgUpdateGroupPolicyMetadata>): _89.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _89.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_89.MsgUpdateGroupPolicyMetadataResponse>): _89.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _89.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgSubmitProposal;
                fromPartial(object: Partial<_89.MsgSubmitProposal>): _89.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _89.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_89.MsgSubmitProposalResponse>): _89.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _89.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgWithdrawProposal;
                fromPartial(object: Partial<_89.MsgWithdrawProposal>): _89.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _89.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_89.MsgWithdrawProposalResponse>): _89.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _89.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgVote;
                fromPartial(object: Partial<_89.MsgVote>): _89.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _89.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgVoteResponse;
                fromPartial(_: Partial<_89.MsgVoteResponse>): _89.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _89.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgExec;
                fromPartial(object: Partial<_89.MsgExec>): _89.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _89.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgExecResponse;
                fromPartial(object: Partial<_89.MsgExecResponse>): _89.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _89.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgLeaveGroup;
                fromPartial(object: Partial<_89.MsgLeaveGroup>): _89.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _89.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_89.MsgLeaveGroupResponse>): _89.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _88.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupInfoRequest;
                fromPartial(object: Partial<_88.QueryGroupInfoRequest>): _88.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _88.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupInfoResponse;
                fromPartial(object: Partial<_88.QueryGroupInfoResponse>): _88.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _88.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_88.QueryGroupPolicyInfoRequest>): _88.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _88.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_88.QueryGroupPolicyInfoResponse>): _88.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _88.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupMembersRequest;
                fromPartial(object: Partial<_88.QueryGroupMembersRequest>): _88.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _88.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupMembersResponse;
                fromPartial(object: Partial<_88.QueryGroupMembersResponse>): _88.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _88.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_88.QueryGroupsByAdminRequest>): _88.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _88.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_88.QueryGroupsByAdminResponse>): _88.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _88.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByGroupRequest>): _88.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _88.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByGroupResponse>): _88.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _88.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByAdminRequest>): _88.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _88.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_88.QueryGroupPoliciesByAdminResponse>): _88.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _88.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryProposalRequest;
                fromPartial(object: Partial<_88.QueryProposalRequest>): _88.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _88.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryProposalResponse;
                fromPartial(object: Partial<_88.QueryProposalResponse>): _88.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _88.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_88.QueryProposalsByGroupPolicyRequest>): _88.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _88.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_88.QueryProposalsByGroupPolicyResponse>): _88.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _88.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_88.QueryVoteByProposalVoterRequest>): _88.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _88.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_88.QueryVoteByProposalVoterResponse>): _88.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _88.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_88.QueryVotesByProposalRequest>): _88.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _88.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_88.QueryVotesByProposalResponse>): _88.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _88.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_88.QueryVotesByVoterRequest>): _88.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _88.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_88.QueryVotesByVoterResponse>): _88.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _88.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_88.QueryGroupsByMemberRequest>): _88.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _88.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_88.QueryGroupsByMemberResponse>): _88.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _88.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryTallyResultRequest;
                fromPartial(object: Partial<_88.QueryTallyResultRequest>): _88.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _88.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryTallyResultResponse;
                fromPartial(object: Partial<_88.QueryTallyResultResponse>): _88.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _88.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsRequest;
                fromPartial(object: Partial<_88.QueryGroupsRequest>): _88.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _88.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.QueryGroupsResponse;
                fromPartial(object: Partial<_88.QueryGroupsResponse>): _88.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _86.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventCreateGroup;
                fromPartial(object: Partial<_86.EventCreateGroup>): _86.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _86.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventUpdateGroup;
                fromPartial(object: Partial<_86.EventUpdateGroup>): _86.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _86.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventCreateGroupPolicy;
                fromPartial(object: Partial<_86.EventCreateGroupPolicy>): _86.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _86.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_86.EventUpdateGroupPolicy>): _86.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _86.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventSubmitProposal;
                fromPartial(object: Partial<_86.EventSubmitProposal>): _86.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _86.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventWithdrawProposal;
                fromPartial(object: Partial<_86.EventWithdrawProposal>): _86.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _86.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventVote;
                fromPartial(object: Partial<_86.EventVote>): _86.EventVote;
            };
            EventExec: {
                encode(message: _86.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventExec;
                fromPartial(object: Partial<_86.EventExec>): _86.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _86.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventLeaveGroup;
                fromPartial(object: Partial<_86.EventLeaveGroup>): _86.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _86.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.EventProposalPruned;
                fromPartial(object: Partial<_86.EventProposalPruned>): _86.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                inflation(request?: _93.QueryInflationRequest): Promise<_93.QueryInflationResponse>;
                annualProvisions(request?: _93.QueryAnnualProvisionsRequest): Promise<_93.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _93.QueryParamsRequest;
                fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _93.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _93.QueryInflationRequest;
                fromPartial(_: Partial<_93.QueryInflationRequest>): _93.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _93.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryInflationResponse;
                fromPartial(object: Partial<_93.QueryInflationResponse>): _93.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _93.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _93.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_93.QueryAnnualProvisionsRequest>): _93.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _93.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_93.QueryAnnualProvisionsResponse>): _93.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _92.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Minter;
                fromPartial(object: Partial<_92.Minter>): _92.Minter;
            };
            Params: {
                encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.Params;
                fromPartial(object: Partial<_92.Params>): _92.Params;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                owner(request: _98.QueryOwnerRequest): Promise<_98.QueryOwnerResponse>;
                supply(request: _98.QuerySupplyRequest): Promise<_98.QuerySupplyResponse>;
                nFTs(request: _98.QueryNFTsRequest): Promise<_98.QueryNFTsResponse>;
                nFT(request: _98.QueryNFTRequest): Promise<_98.QueryNFTResponse>;
                class(request: _98.QueryClassRequest): Promise<_98.QueryClassResponse>;
                classes(request?: _98.QueryClassesRequest): Promise<_98.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _99.MsgSend): {
                        typeUrl: string;
                        value: _99.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _99.MsgSend) => {
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
                    }) => _99.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _99.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgSend;
                fromPartial(object: Partial<_99.MsgSend>): _99.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _99.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgSendResponse;
                fromPartial(_: Partial<_99.MsgSendResponse>): _99.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _98.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryBalanceRequest;
                fromPartial(object: Partial<_98.QueryBalanceRequest>): _98.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _98.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryBalanceResponse;
                fromPartial(object: Partial<_98.QueryBalanceResponse>): _98.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _98.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryOwnerRequest;
                fromPartial(object: Partial<_98.QueryOwnerRequest>): _98.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _98.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryOwnerResponse;
                fromPartial(object: Partial<_98.QueryOwnerResponse>): _98.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _98.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QuerySupplyRequest;
                fromPartial(object: Partial<_98.QuerySupplyRequest>): _98.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _98.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QuerySupplyResponse;
                fromPartial(object: Partial<_98.QuerySupplyResponse>): _98.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _98.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryNFTsRequest;
                fromPartial(object: Partial<_98.QueryNFTsRequest>): _98.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _98.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryNFTsResponse;
                fromPartial(object: Partial<_98.QueryNFTsResponse>): _98.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _98.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryNFTRequest;
                fromPartial(object: Partial<_98.QueryNFTRequest>): _98.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _98.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryNFTResponse;
                fromPartial(object: Partial<_98.QueryNFTResponse>): _98.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _98.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryClassRequest;
                fromPartial(object: Partial<_98.QueryClassRequest>): _98.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _98.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryClassResponse;
                fromPartial(object: Partial<_98.QueryClassResponse>): _98.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _98.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryClassesRequest;
                fromPartial(object: Partial<_98.QueryClassesRequest>): _98.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _98.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryClassesResponse;
                fromPartial(object: Partial<_98.QueryClassesResponse>): _98.QueryClassesResponse;
            };
            Class: {
                encode(message: _97.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Class;
                fromPartial(object: Partial<_97.Class>): _97.Class;
            };
            NFT: {
                encode(message: _97.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.NFT;
                fromPartial(object: Partial<_97.NFT>): _97.NFT;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GenesisState;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
            };
            Entry: {
                encode(message: _96.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.Entry;
                fromPartial(object: Partial<_96.Entry>): _96.Entry;
            };
            EventSend: {
                encode(message: _95.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.EventSend;
                fromPartial(object: Partial<_95.EventSend>): _95.EventSend;
            };
            EventMint: {
                encode(message: _95.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.EventMint;
                fromPartial(object: Partial<_95.EventMint>): _95.EventMint;
            };
            EventBurn: {
                encode(message: _95.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.EventBurn;
                fromPartial(object: Partial<_95.EventBurn>): _95.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _100.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _100.Module;
                    fromPartial(_: Partial<_100.Module>): _100.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _101.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.TableDescriptor;
                fromPartial(object: Partial<_101.TableDescriptor>): _101.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _101.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_101.PrimaryKeyDescriptor>): _101.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _101.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_101.SecondaryIndexDescriptor>): _101.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _101.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.SingletonDescriptor;
                fromPartial(object: Partial<_101.SingletonDescriptor>): _101.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _102.StorageType;
            storageTypeToJSON(object: _102.StorageType): string;
            StorageType: typeof _102.StorageType;
            StorageTypeSDKType: typeof _102.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _102.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor>): _102.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _102.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor_FileEntry>): _102.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                subspaces(request?: _104.QuerySubspacesRequest): Promise<_104.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryParamsRequest;
                fromPartial(object: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryParamsResponse;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _104.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.QuerySubspacesRequest;
                fromPartial(_: Partial<_104.QuerySubspacesRequest>): _104.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _104.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySubspacesResponse;
                fromPartial(object: Partial<_104.QuerySubspacesResponse>): _104.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _104.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Subspace;
                fromPartial(object: Partial<_104.Subspace>): _104.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _103.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ParameterChangeProposal;
                fromPartial(object: Partial<_103.ParameterChangeProposal>): _103.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _103.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.ParamChange;
                fromPartial(object: Partial<_103.ParamChange>): _103.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _108.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _108.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _108.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.MsgUnjail;
                fromPartial(object: Partial<_108.MsgUnjail>): _108.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _108.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _108.MsgUnjailResponse;
                fromPartial(_: Partial<_108.MsgUnjailResponse>): _108.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _107.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.ValidatorSigningInfo;
                fromPartial(object: Partial<_107.ValidatorSigningInfo>): _107.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.Params;
                fromPartial(object: Partial<_107.Params>): _107.Params;
            };
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
            QuerySigningInfoRequest: {
                encode(message: _106.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QuerySigningInfoRequest;
                fromPartial(object: Partial<_106.QuerySigningInfoRequest>): _106.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _106.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QuerySigningInfoResponse;
                fromPartial(object: Partial<_106.QuerySigningInfoResponse>): _106.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _106.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QuerySigningInfosRequest;
                fromPartial(object: Partial<_106.QuerySigningInfosRequest>): _106.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _106.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QuerySigningInfosResponse;
                fromPartial(object: Partial<_106.QuerySigningInfosResponse>): _106.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
            };
            SigningInfo: {
                encode(message: _105.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.SigningInfo;
                fromPartial(object: Partial<_105.SigningInfo>): _105.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _105.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorMissedBlocks;
                fromPartial(object: Partial<_105.ValidatorMissedBlocks>): _105.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _105.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MissedBlock;
                fromPartial(object: Partial<_105.MissedBlock>): _105.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _113.MsgCreateValidator) => {
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
                    }) => _113.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _113.MsgEditValidator) => {
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
                    }) => _113.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _113.MsgDelegate) => {
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
                    }) => _113.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _113.MsgBeginRedelegate) => {
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
                    }) => _113.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _113.MsgUndelegate) => {
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
                    }) => _113.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _113.MsgCancelUnbondingDelegation) => {
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
                    }) => _113.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _113.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgCreateValidator;
                fromPartial(object: Partial<_113.MsgCreateValidator>): _113.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _113.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _113.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_113.MsgCreateValidatorResponse>): _113.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _113.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgEditValidator;
                fromPartial(object: Partial<_113.MsgEditValidator>): _113.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _113.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _113.MsgEditValidatorResponse;
                fromPartial(_: Partial<_113.MsgEditValidatorResponse>): _113.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _113.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgDelegate;
                fromPartial(object: Partial<_113.MsgDelegate>): _113.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _113.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _113.MsgDelegateResponse;
                fromPartial(_: Partial<_113.MsgDelegateResponse>): _113.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _113.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgBeginRedelegate;
                fromPartial(object: Partial<_113.MsgBeginRedelegate>): _113.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _113.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_113.MsgBeginRedelegateResponse>): _113.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _113.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgUndelegate;
                fromPartial(object: Partial<_113.MsgUndelegate>): _113.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _113.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgUndelegateResponse;
                fromPartial(object: Partial<_113.MsgUndelegateResponse>): _113.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _113.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_113.MsgCancelUnbondingDelegation>): _113.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _113.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _113.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_113.MsgCancelUnbondingDelegationResponse>): _113.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _112.BondStatus;
            bondStatusToJSON(object: _112.BondStatus): string;
            BondStatus: typeof _112.BondStatus;
            BondStatusSDKType: typeof _112.BondStatus;
            HistoricalInfo: {
                encode(message: _112.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.HistoricalInfo;
                fromPartial(object: Partial<_112.HistoricalInfo>): _112.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _112.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.CommissionRates;
                fromPartial(object: Partial<_112.CommissionRates>): _112.CommissionRates;
            };
            Commission: {
                encode(message: _112.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Commission;
                fromPartial(object: Partial<_112.Commission>): _112.Commission;
            };
            Description: {
                encode(message: _112.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Description;
                fromPartial(object: Partial<_112.Description>): _112.Description;
            };
            Validator: {
                encode(message: _112.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Validator;
                fromPartial(object: Partial<_112.Validator>): _112.Validator;
            };
            ValAddresses: {
                encode(message: _112.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.ValAddresses;
                fromPartial(object: Partial<_112.ValAddresses>): _112.ValAddresses;
            };
            DVPair: {
                encode(message: _112.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DVPair;
                fromPartial(object: Partial<_112.DVPair>): _112.DVPair;
            };
            DVPairs: {
                encode(message: _112.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DVPairs;
                fromPartial(object: Partial<_112.DVPairs>): _112.DVPairs;
            };
            DVVTriplet: {
                encode(message: _112.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DVVTriplet;
                fromPartial(object: Partial<_112.DVVTriplet>): _112.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _112.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DVVTriplets;
                fromPartial(object: Partial<_112.DVVTriplets>): _112.DVVTriplets;
            };
            Delegation: {
                encode(message: _112.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Delegation;
                fromPartial(object: Partial<_112.Delegation>): _112.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _112.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.UnbondingDelegation;
                fromPartial(object: Partial<_112.UnbondingDelegation>): _112.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _112.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.UnbondingDelegationEntry;
                fromPartial(object: Partial<_112.UnbondingDelegationEntry>): _112.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _112.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.RedelegationEntry;
                fromPartial(object: Partial<_112.RedelegationEntry>): _112.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _112.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Redelegation;
                fromPartial(object: Partial<_112.Redelegation>): _112.Redelegation;
            };
            Params: {
                encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Params;
                fromPartial(object: Partial<_112.Params>): _112.Params;
            };
            DelegationResponse: {
                encode(message: _112.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.DelegationResponse;
                fromPartial(object: Partial<_112.DelegationResponse>): _112.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _112.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.RedelegationEntryResponse;
                fromPartial(object: Partial<_112.RedelegationEntryResponse>): _112.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _112.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.RedelegationResponse;
                fromPartial(object: Partial<_112.RedelegationResponse>): _112.RedelegationResponse;
            };
            Pool: {
                encode(message: _112.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.Pool;
                fromPartial(object: Partial<_112.Pool>): _112.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _111.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorsRequest;
                fromPartial(object: Partial<_111.QueryValidatorsRequest>): _111.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _111.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorsResponse;
                fromPartial(object: Partial<_111.QueryValidatorsResponse>): _111.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _111.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorRequest;
                fromPartial(object: Partial<_111.QueryValidatorRequest>): _111.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _111.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorResponse;
                fromPartial(object: Partial<_111.QueryValidatorResponse>): _111.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _111.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsRequest>): _111.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _111.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsResponse>): _111.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _111.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsRequest>): _111.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _111.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsResponse>): _111.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _111.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegationRequest;
                fromPartial(object: Partial<_111.QueryDelegationRequest>): _111.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _111.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegationResponse;
                fromPartial(object: Partial<_111.QueryDelegationResponse>): _111.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _111.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationRequest>): _111.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _111.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationResponse>): _111.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _111.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsRequest>): _111.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _111.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsResponse>): _111.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _111.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsRequest>): _111.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _111.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsResponse>): _111.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _111.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryRedelegationsRequest;
                fromPartial(object: Partial<_111.QueryRedelegationsRequest>): _111.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _111.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryRedelegationsResponse;
                fromPartial(object: Partial<_111.QueryRedelegationsResponse>): _111.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _111.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsRequest>): _111.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _111.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsResponse>): _111.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _111.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorRequest>): _111.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _111.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorResponse>): _111.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _111.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_111.QueryHistoricalInfoRequest>): _111.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _111.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_111.QueryHistoricalInfoResponse>): _111.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _111.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _111.QueryPoolRequest;
                fromPartial(_: Partial<_111.QueryPoolRequest>): _111.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _111.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryPoolResponse;
                fromPartial(object: Partial<_111.QueryPoolResponse>): _111.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _111.QueryParamsRequest;
                fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryParamsResponse;
                fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _110.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.LastValidatorPower;
                fromPartial(object: Partial<_110.LastValidatorPower>): _110.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _109.AuthorizationType;
            authorizationTypeToJSON(object: _109.AuthorizationType): string;
            AuthorizationType: typeof _109.AuthorizationType;
            AuthorizationTypeSDKType: typeof _109.AuthorizationType;
            StakeAuthorization: {
                encode(message: _109.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.StakeAuthorization;
                fromPartial(object: Partial<_109.StakeAuthorization>): _109.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _109.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.StakeAuthorization_Validators;
                fromPartial(object: Partial<_109.StakeAuthorization_Validators>): _109.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _114.SignMode;
                signModeToJSON(object: _114.SignMode): string;
                SignMode: typeof _114.SignMode;
                SignModeSDKType: typeof _114.SignMode;
                SignatureDescriptors: {
                    encode(message: _114.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.SignatureDescriptors;
                    fromPartial(object: Partial<_114.SignatureDescriptors>): _114.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _114.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.SignatureDescriptor;
                    fromPartial(object: Partial<_114.SignatureDescriptor>): _114.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _114.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data>): _114.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _114.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data_Single>): _114.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _114.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_114.SignatureDescriptor_Data_Multi>): _114.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _193.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _115.SimulateRequest): Promise<_115.SimulateResponse>;
                getTx(request: _115.GetTxRequest): Promise<_115.GetTxResponse>;
                broadcastTx(request: _115.BroadcastTxRequest): Promise<_115.BroadcastTxResponse>;
                getTxsEvent(request: _115.GetTxsEventRequest): Promise<_115.GetTxsEventResponse>;
                getBlockWithTxs(request: _115.GetBlockWithTxsRequest): Promise<_115.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _116.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.Tx;
                fromPartial(object: Partial<_116.Tx>): _116.Tx;
            };
            TxRaw: {
                encode(message: _116.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.TxRaw;
                fromPartial(object: Partial<_116.TxRaw>): _116.TxRaw;
            };
            SignDoc: {
                encode(message: _116.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SignDoc;
                fromPartial(object: Partial<_116.SignDoc>): _116.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _116.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SignDocDirectAux;
                fromPartial(object: Partial<_116.SignDocDirectAux>): _116.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _116.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.TxBody;
                fromPartial(object: Partial<_116.TxBody>): _116.TxBody;
            };
            AuthInfo: {
                encode(message: _116.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.AuthInfo;
                fromPartial(object: Partial<_116.AuthInfo>): _116.AuthInfo;
            };
            SignerInfo: {
                encode(message: _116.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.SignerInfo;
                fromPartial(object: Partial<_116.SignerInfo>): _116.SignerInfo;
            };
            ModeInfo: {
                encode(message: _116.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ModeInfo;
                fromPartial(object: Partial<_116.ModeInfo>): _116.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _116.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ModeInfo_Single;
                fromPartial(object: Partial<_116.ModeInfo_Single>): _116.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _116.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ModeInfo_Multi;
                fromPartial(object: Partial<_116.ModeInfo_Multi>): _116.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _116.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.Fee;
                fromPartial(object: Partial<_116.Fee>): _116.Fee;
            };
            Tip: {
                encode(message: _116.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.Tip;
                fromPartial(object: Partial<_116.Tip>): _116.Tip;
            };
            AuxSignerData: {
                encode(message: _116.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.AuxSignerData;
                fromPartial(object: Partial<_116.AuxSignerData>): _116.AuxSignerData;
            };
            orderByFromJSON(object: any): _115.OrderBy;
            orderByToJSON(object: _115.OrderBy): string;
            broadcastModeFromJSON(object: any): _115.BroadcastMode;
            broadcastModeToJSON(object: _115.BroadcastMode): string;
            OrderBy: typeof _115.OrderBy;
            OrderBySDKType: typeof _115.OrderBy;
            BroadcastMode: typeof _115.BroadcastMode;
            BroadcastModeSDKType: typeof _115.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _115.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetTxsEventRequest;
                fromPartial(object: Partial<_115.GetTxsEventRequest>): _115.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _115.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetTxsEventResponse;
                fromPartial(object: Partial<_115.GetTxsEventResponse>): _115.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _115.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.BroadcastTxRequest;
                fromPartial(object: Partial<_115.BroadcastTxRequest>): _115.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _115.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.BroadcastTxResponse;
                fromPartial(object: Partial<_115.BroadcastTxResponse>): _115.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _115.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.SimulateRequest;
                fromPartial(object: Partial<_115.SimulateRequest>): _115.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _115.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.SimulateResponse;
                fromPartial(object: Partial<_115.SimulateResponse>): _115.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _115.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetTxRequest;
                fromPartial(object: Partial<_115.GetTxRequest>): _115.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _115.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetTxResponse;
                fromPartial(object: Partial<_115.GetTxResponse>): _115.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _115.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_115.GetBlockWithTxsRequest>): _115.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _115.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_115.GetBlockWithTxsResponse>): _115.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _117.QueryCurrentPlanRequest): Promise<_117.QueryCurrentPlanResponse>;
                appliedPlan(request: _117.QueryAppliedPlanRequest): Promise<_117.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _117.QueryUpgradedConsensusStateRequest): Promise<_117.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _117.QueryModuleVersionsRequest): Promise<_117.QueryModuleVersionsResponse>;
                authority(request?: _117.QueryAuthorityRequest): Promise<_117.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _118.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _118.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _118.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _118.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _118.MsgSoftwareUpgrade) => {
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
                    }) => _118.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _118.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _118.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _119.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Plan;
                fromPartial(object: Partial<_119.Plan>): _119.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _119.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.SoftwareUpgradeProposal>): _119.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _119.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_119.CancelSoftwareUpgradeProposal>): _119.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _119.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.ModuleVersion;
                fromPartial(object: Partial<_119.ModuleVersion>): _119.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _118.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_118.MsgSoftwareUpgrade>): _118.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _118.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_118.MsgSoftwareUpgradeResponse>): _118.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _118.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.MsgCancelUpgrade;
                fromPartial(object: Partial<_118.MsgCancelUpgrade>): _118.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _118.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _118.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_118.MsgCancelUpgradeResponse>): _118.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _117.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_117.QueryCurrentPlanRequest>): _117.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _117.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_117.QueryCurrentPlanResponse>): _117.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _117.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_117.QueryAppliedPlanRequest>): _117.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _117.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_117.QueryAppliedPlanResponse>): _117.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _117.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_117.QueryUpgradedConsensusStateRequest>): _117.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _117.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_117.QueryUpgradedConsensusStateResponse>): _117.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _117.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_117.QueryModuleVersionsRequest>): _117.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _117.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_117.QueryModuleVersionsResponse>): _117.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _117.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.QueryAuthorityRequest;
                fromPartial(_: Partial<_117.QueryAuthorityRequest>): _117.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _117.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.QueryAuthorityResponse;
                fromPartial(object: Partial<_117.QueryAuthorityResponse>): _117.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _120.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _120.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _120.MsgCreateVestingAccount) => {
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
                    }) => _120.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _120.MsgCreatePermanentLockedAccount) => {
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
                    }) => _120.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _120.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _120.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _121.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.BaseVestingAccount;
                fromPartial(object: Partial<_121.BaseVestingAccount>): _121.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _121.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.ContinuousVestingAccount;
                fromPartial(object: Partial<_121.ContinuousVestingAccount>): _121.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _121.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.DelayedVestingAccount;
                fromPartial(object: Partial<_121.DelayedVestingAccount>): _121.DelayedVestingAccount;
            };
            Period: {
                encode(message: _121.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.Period;
                fromPartial(object: Partial<_121.Period>): _121.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _121.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.PeriodicVestingAccount;
                fromPartial(object: Partial<_121.PeriodicVestingAccount>): _121.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _121.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.PermanentLockedAccount;
                fromPartial(object: Partial<_121.PermanentLockedAccount>): _121.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _120.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgCreateVestingAccount;
                fromPartial(object: Partial<_120.MsgCreateVestingAccount>): _120.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _120.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_120.MsgCreateVestingAccountResponse>): _120.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _120.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_120.MsgCreatePermanentLockedAccount>): _120.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _120.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_120.MsgCreatePermanentLockedAccountResponse>): _120.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _120.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_120.MsgCreatePeriodicVestingAccount>): _120.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _120.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_120.MsgCreatePeriodicVestingAccountResponse>): _120.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _195.MsgClientImpl;
                };
                bank: {
                    v1beta1: _196.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _197.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _198.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _199.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _200.MsgClientImpl;
                };
                gov: {
                    v1: _201.MsgClientImpl;
                    v1beta1: _202.MsgClientImpl;
                };
                group: {
                    v1: _203.MsgClientImpl;
                };
                nft: {
                    v1beta1: _204.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _205.MsgClientImpl;
                };
                staking: {
                    v1beta1: _206.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _207.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _208.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _29.QueryConfigRequest): Promise<_29.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _32.QueryAccountsRequest): Promise<_32.QueryAccountsResponse>;
                        account(request: _32.QueryAccountRequest): Promise<_32.QueryAccountResponse>;
                        accountAddressByID(request: _32.QueryAccountAddressByIDRequest): Promise<_32.QueryAccountAddressByIDResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        moduleAccounts(request?: _32.QueryModuleAccountsRequest): Promise<_32.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _32.QueryModuleAccountByNameRequest): Promise<_32.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _32.Bech32PrefixRequest): Promise<_32.Bech32PrefixResponse>;
                        addressBytesToString(request: _32.AddressBytesToStringRequest): Promise<_32.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _32.AddressStringToBytesRequest): Promise<_32.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                        granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                        granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _41.QueryBalanceRequest): Promise<_41.QueryBalanceResponse>;
                        allBalances(request: _41.QueryAllBalancesRequest): Promise<_41.QueryAllBalancesResponse>;
                        spendableBalances(request: _41.QuerySpendableBalancesRequest): Promise<_41.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _41.QueryTotalSupplyRequest): Promise<_41.QueryTotalSupplyResponse>;
                        supplyOf(request: _41.QuerySupplyOfRequest): Promise<_41.QuerySupplyOfResponse>;
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        denomMetadata(request: _41.QueryDenomMetadataRequest): Promise<_41.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _41.QueryDenomsMetadataRequest): Promise<_41.QueryDenomsMetadataResponse>;
                        denomOwners(request: _41.QueryDenomOwnersRequest): Promise<_41.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _45.ConfigRequest): Promise<_45.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _52.GetNodeInfoRequest): Promise<_52.GetNodeInfoResponse>;
                            getSyncing(request?: _52.GetSyncingRequest): Promise<_52.GetSyncingResponse>;
                            getLatestBlock(request?: _52.GetLatestBlockRequest): Promise<_52.GetLatestBlockResponse>;
                            getBlockByHeight(request: _52.GetBlockByHeightRequest): Promise<_52.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _52.GetLatestValidatorSetRequest): Promise<_52.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _52.GetValidatorSetByHeightRequest): Promise<_52.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _52.ABCIQueryRequest): Promise<_52.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _71.QueryEvidenceRequest): Promise<_71.QueryEvidenceResponse>;
                        allEvidence(request?: _71.QueryAllEvidenceRequest): Promise<_71.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _75.QueryAllowanceRequest): Promise<_75.QueryAllowanceResponse>;
                        allowances(request: _75.QueryAllowancesRequest): Promise<_75.QueryAllowancesResponse>;
                        allowancesByGranter(request: _75.QueryAllowancesByGranterRequest): Promise<_75.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                        proposals(request: _80.QueryProposalsRequest): Promise<_80.QueryProposalsResponse>;
                        vote(request: _80.QueryVoteRequest): Promise<_80.QueryVoteResponse>;
                        votes(request: _80.QueryVotesRequest): Promise<_80.QueryVotesResponse>;
                        params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        deposit(request: _80.QueryDepositRequest): Promise<_80.QueryDepositResponse>;
                        deposits(request: _80.QueryDepositsRequest): Promise<_80.QueryDepositsResponse>;
                        tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                        proposals(request: _84.QueryProposalsRequest): Promise<_84.QueryProposalsResponse>;
                        vote(request: _84.QueryVoteRequest): Promise<_84.QueryVoteResponse>;
                        votes(request: _84.QueryVotesRequest): Promise<_84.QueryVotesResponse>;
                        params(request: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        deposit(request: _84.QueryDepositRequest): Promise<_84.QueryDepositResponse>;
                        deposits(request: _84.QueryDepositsRequest): Promise<_84.QueryDepositsResponse>;
                        tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _88.QueryGroupInfoRequest): Promise<_88.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _88.QueryGroupPolicyInfoRequest): Promise<_88.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _88.QueryGroupMembersRequest): Promise<_88.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _88.QueryGroupsByAdminRequest): Promise<_88.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _88.QueryGroupPoliciesByGroupRequest): Promise<_88.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _88.QueryGroupPoliciesByAdminRequest): Promise<_88.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _88.QueryProposalsByGroupPolicyRequest): Promise<_88.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _88.QueryVoteByProposalVoterRequest): Promise<_88.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _88.QueryVotesByProposalRequest): Promise<_88.QueryVotesByProposalResponse>;
                        votesByVoter(request: _88.QueryVotesByVoterRequest): Promise<_88.QueryVotesByVoterResponse>;
                        groupsByMember(request: _88.QueryGroupsByMemberRequest): Promise<_88.QueryGroupsByMemberResponse>;
                        tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
                        groups(request?: _88.QueryGroupsRequest): Promise<_88.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        inflation(request?: _93.QueryInflationRequest): Promise<_93.QueryInflationResponse>;
                        annualProvisions(request?: _93.QueryAnnualProvisionsRequest): Promise<_93.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _98.QueryBalanceRequest): Promise<_98.QueryBalanceResponse>;
                        owner(request: _98.QueryOwnerRequest): Promise<_98.QueryOwnerResponse>;
                        supply(request: _98.QuerySupplyRequest): Promise<_98.QuerySupplyResponse>;
                        nFTs(request: _98.QueryNFTsRequest): Promise<_98.QueryNFTsResponse>;
                        nFT(request: _98.QueryNFTRequest): Promise<_98.QueryNFTResponse>;
                        class(request: _98.QueryClassRequest): Promise<_98.QueryClassResponse>;
                        classes(request?: _98.QueryClassesRequest): Promise<_98.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        subspaces(request?: _104.QuerySubspacesRequest): Promise<_104.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                        signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                        validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                        validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                        unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                        delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                        pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                        params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _115.SimulateRequest): Promise<_115.SimulateResponse>;
                        getTx(request: _115.GetTxRequest): Promise<_115.GetTxResponse>;
                        broadcastTx(request: _115.BroadcastTxRequest): Promise<_115.BroadcastTxResponse>;
                        getTxsEvent(request: _115.GetTxsEventRequest): Promise<_115.GetTxsEventResponse>;
                        getBlockWithTxs(request: _115.GetBlockWithTxsRequest): Promise<_115.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _117.QueryCurrentPlanRequest): Promise<_117.QueryCurrentPlanResponse>;
                        appliedPlan(request: _117.QueryAppliedPlanRequest): Promise<_117.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _117.QueryUpgradedConsensusStateRequest): Promise<_117.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _117.QueryModuleVersionsRequest): Promise<_117.QueryModuleVersionsResponse>;
                        authority(request?: _117.QueryAuthorityRequest): Promise<_117.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
