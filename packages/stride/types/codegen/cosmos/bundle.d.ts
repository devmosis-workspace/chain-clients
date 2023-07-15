import * as _45 from "./app/runtime/v1alpha1/module";
import * as _46 from "./app/v1alpha1/config";
import * as _47 from "./app/v1alpha1/module";
import * as _48 from "./app/v1alpha1/query";
import * as _49 from "./auth/module/v1/module";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./auth/v1beta1/tx";
import * as _54 from "./authz/module/v1/module";
import * as _55 from "./authz/v1beta1/authz";
import * as _56 from "./authz/v1beta1/event";
import * as _57 from "./authz/v1beta1/genesis";
import * as _58 from "./authz/v1beta1/query";
import * as _59 from "./authz/v1beta1/tx";
import * as _60 from "./autocli/v1/options";
import * as _61 from "./autocli/v1/query";
import * as _62 from "./bank/module/v1/module";
import * as _63 from "./bank/v1beta1/authz";
import * as _64 from "./bank/v1beta1/bank";
import * as _65 from "./bank/v1beta1/genesis";
import * as _66 from "./bank/v1beta1/query";
import * as _67 from "./bank/v1beta1/tx";
import * as _68 from "./base/abci/v1beta1/abci";
import * as _69 from "./base/kv/v1beta1/kv";
import * as _70 from "./base/node/v1beta1/query";
import * as _71 from "./base/query/v1beta1/pagination";
import * as _72 from "./base/reflection/v1beta1/reflection";
import * as _73 from "./base/reflection/v2alpha1/reflection";
import * as _74 from "./base/snapshots/v1beta1/snapshot";
import * as _75 from "./base/store/v1beta1/commit_info";
import * as _76 from "./base/store/v1beta1/listening";
import * as _77 from "./base/tendermint/v1beta1/query";
import * as _78 from "./base/tendermint/v1beta1/types";
import * as _79 from "./base/v1beta1/coin";
import * as _80 from "./capability/module/v1/module";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./consensus/module/v1/module";
import * as _84 from "./consensus/v1/query";
import * as _85 from "./consensus/v1/tx";
import * as _86 from "./crisis/module/v1/module";
import * as _87 from "./crisis/v1beta1/genesis";
import * as _88 from "./crisis/v1beta1/tx";
import * as _89 from "./crypto/ed25519/keys";
import * as _90 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./crypto/multisig/keys";
import * as _93 from "./crypto/secp256k1/keys";
import * as _94 from "./crypto/secp256r1/keys";
import * as _95 from "./distribution/module/v1/module";
import * as _96 from "./distribution/v1beta1/distribution";
import * as _97 from "./distribution/v1beta1/genesis";
import * as _98 from "./distribution/v1beta1/query";
import * as _99 from "./distribution/v1beta1/tx";
import * as _100 from "./evidence/module/v1/module";
import * as _101 from "./evidence/v1beta1/evidence";
import * as _102 from "./evidence/v1beta1/genesis";
import * as _103 from "./evidence/v1beta1/query";
import * as _104 from "./evidence/v1beta1/tx";
import * as _105 from "./feegrant/module/v1/module";
import * as _106 from "./feegrant/v1beta1/feegrant";
import * as _107 from "./feegrant/v1beta1/genesis";
import * as _108 from "./feegrant/v1beta1/query";
import * as _109 from "./feegrant/v1beta1/tx";
import * as _110 from "./genutil/module/v1/module";
import * as _111 from "./genutil/v1beta1/genesis";
import * as _112 from "./gov/module/v1/module";
import * as _113 from "./gov/v1/genesis";
import * as _114 from "./gov/v1/gov";
import * as _115 from "./gov/v1/query";
import * as _116 from "./gov/v1/tx";
import * as _117 from "./gov/v1beta1/genesis";
import * as _118 from "./gov/v1beta1/gov";
import * as _119 from "./gov/v1beta1/query";
import * as _120 from "./gov/v1beta1/tx";
import * as _121 from "./group/module/v1/module";
import * as _122 from "./group/v1/events";
import * as _123 from "./group/v1/genesis";
import * as _124 from "./group/v1/query";
import * as _125 from "./group/v1/tx";
import * as _126 from "./group/v1/types";
import * as _127 from "./mint/module/v1/module";
import * as _128 from "./mint/v1beta1/genesis";
import * as _129 from "./mint/v1beta1/mint";
import * as _130 from "./mint/v1beta1/query";
import * as _131 from "./mint/v1beta1/tx";
import * as _133 from "./nft/module/v1/module";
import * as _134 from "./nft/v1beta1/event";
import * as _135 from "./nft/v1beta1/genesis";
import * as _136 from "./nft/v1beta1/nft";
import * as _137 from "./nft/v1beta1/query";
import * as _138 from "./nft/v1beta1/tx";
import * as _139 from "./orm/module/v1alpha1/module";
import * as _140 from "./orm/query/v1alpha1/query";
import * as _141 from "./orm/v1/orm";
import * as _142 from "./orm/v1alpha1/schema";
import * as _143 from "./params/module/v1/module";
import * as _144 from "./params/v1beta1/params";
import * as _145 from "./params/v1beta1/query";
import * as _147 from "./reflection/v1/reflection";
import * as _148 from "./slashing/module/v1/module";
import * as _149 from "./slashing/v1beta1/genesis";
import * as _150 from "./slashing/v1beta1/query";
import * as _151 from "./slashing/v1beta1/slashing";
import * as _152 from "./slashing/v1beta1/tx";
import * as _153 from "./staking/module/v1/module";
import * as _154 from "./staking/v1beta1/authz";
import * as _155 from "./staking/v1beta1/genesis";
import * as _156 from "./staking/v1beta1/query";
import * as _157 from "./staking/v1beta1/staking";
import * as _158 from "./staking/v1beta1/tx";
import * as _159 from "./tx/config/v1/config";
import * as _160 from "./tx/signing/v1beta1/signing";
import * as _161 from "./tx/v1beta1/service";
import * as _162 from "./tx/v1beta1/tx";
import * as _163 from "./upgrade/module/v1/module";
import * as _164 from "./upgrade/v1beta1/query";
import * as _165 from "./upgrade/v1beta1/tx";
import * as _166 from "./upgrade/v1beta1/upgrade";
import * as _167 from "./vesting/module/v1/module";
import * as _168 from "./vesting/v1beta1/tx";
import * as _169 from "./vesting/v1beta1/vesting";
import * as _239 from "./app/v1alpha1/query.rpc.Query";
import * as _240 from "./auth/v1beta1/query.rpc.Query";
import * as _241 from "./authz/v1beta1/query.rpc.Query";
import * as _242 from "./autocli/v1/query.rpc.Query";
import * as _243 from "./bank/v1beta1/query.rpc.Query";
import * as _244 from "./base/node/v1beta1/query.rpc.Service";
import * as _245 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _246 from "./consensus/v1/query.rpc.Query";
import * as _247 from "./distribution/v1beta1/query.rpc.Query";
import * as _248 from "./evidence/v1beta1/query.rpc.Query";
import * as _249 from "./feegrant/v1beta1/query.rpc.Query";
import * as _250 from "./gov/v1/query.rpc.Query";
import * as _251 from "./gov/v1beta1/query.rpc.Query";
import * as _252 from "./group/v1/query.rpc.Query";
import * as _253 from "./mint/v1beta1/query.rpc.Query";
import * as _254 from "./nft/v1beta1/query.rpc.Query";
import * as _255 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _256 from "./params/v1beta1/query.rpc.Query";
import * as _257 from "./slashing/v1beta1/query.rpc.Query";
import * as _258 from "./staking/v1beta1/query.rpc.Query";
import * as _259 from "./tx/v1beta1/service.rpc.Service";
import * as _260 from "./upgrade/v1beta1/query.rpc.Query";
import * as _261 from "./auth/v1beta1/tx.rpc.msg";
import * as _262 from "./authz/v1beta1/tx.rpc.msg";
import * as _263 from "./bank/v1beta1/tx.rpc.msg";
import * as _264 from "./consensus/v1/tx.rpc.msg";
import * as _265 from "./crisis/v1beta1/tx.rpc.msg";
import * as _266 from "./distribution/v1beta1/tx.rpc.msg";
import * as _267 from "./evidence/v1beta1/tx.rpc.msg";
import * as _268 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _269 from "./gov/v1/tx.rpc.msg";
import * as _270 from "./gov/v1beta1/tx.rpc.msg";
import * as _271 from "./group/v1/tx.rpc.msg";
import * as _272 from "./mint/v1beta1/tx.rpc.msg";
import * as _273 from "./nft/v1beta1/tx.rpc.msg";
import * as _274 from "./slashing/v1beta1/tx.rpc.msg";
import * as _275 from "./staking/v1beta1/tx.rpc.msg";
import * as _276 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _277 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _45.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.Module;
                    fromPartial(object: Partial<_45.Module>): _45.Module;
                };
                StoreKeyConfig: {
                    encode(message: _45.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _45.StoreKeyConfig;
                    fromPartial(object: Partial<_45.StoreKeyConfig>): _45.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _48.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryConfigRequest;
                fromPartial(_: Partial<_48.QueryConfigRequest>): _48.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _48.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryConfigResponse;
                fromPartial(object: Partial<_48.QueryConfigResponse>): _48.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _47.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ModuleDescriptor;
                fromPartial(object: Partial<_47.ModuleDescriptor>): _47.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _47.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.PackageReference;
                fromPartial(object: Partial<_47.PackageReference>): _47.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _47.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.MigrateFromInfo;
                fromPartial(object: Partial<_47.MigrateFromInfo>): _47.MigrateFromInfo;
            };
            Config: {
                encode(message: _46.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Config;
                fromPartial(object: Partial<_46.Config>): _46.Config;
            };
            ModuleConfig: {
                encode(message: _46.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.ModuleConfig;
                fromPartial(object: Partial<_46.ModuleConfig>): _46.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _46.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GolangBinding;
                fromPartial(object: Partial<_46.GolangBinding>): _46.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _49.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.Module;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _49.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _49.ModuleAccountPermission;
                    fromPartial(object: Partial<_49.ModuleAccountPermission>): _49.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
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
                accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _53.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    }) => _53.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _53.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.MsgUpdateParams;
                fromPartial(object: Partial<_53.MsgUpdateParams>): _53.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_53.MsgUpdateParamsResponse>): _53.MsgUpdateParamsResponse;
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
            QueryAccountInfoRequest: {
                encode(message: _52.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountInfoRequest;
                fromPartial(object: Partial<_52.QueryAccountInfoRequest>): _52.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _52.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryAccountInfoResponse;
                fromPartial(object: Partial<_52.QueryAccountInfoResponse>): _52.QueryAccountInfoResponse;
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
            ModuleCredential: {
                encode(message: _50.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.ModuleCredential;
                fromPartial(object: Partial<_50.ModuleCredential>): _50.ModuleCredential;
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _54.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _54.Module;
                    fromPartial(_: Partial<_54.Module>): _54.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _59.MsgGrant) => {
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
                    }) => _59.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _59.MsgExec) => {
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
                    }) => _59.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _59.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _59.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _59.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgGrant;
                fromPartial(object: Partial<_59.MsgGrant>): _59.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _59.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgExecResponse;
                fromPartial(object: Partial<_59.MsgExecResponse>): _59.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _59.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgExec;
                fromPartial(object: Partial<_59.MsgExec>): _59.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _59.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgGrantResponse;
                fromPartial(_: Partial<_59.MsgGrantResponse>): _59.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _59.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgRevoke;
                fromPartial(object: Partial<_59.MsgRevoke>): _59.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _59.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgRevokeResponse;
                fromPartial(_: Partial<_59.MsgRevokeResponse>): _59.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _58.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGrantsRequest;
                fromPartial(object: Partial<_58.QueryGrantsRequest>): _58.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _58.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGrantsResponse;
                fromPartial(object: Partial<_58.QueryGrantsResponse>): _58.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _58.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranterGrantsRequest>): _58.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _58.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranterGrantsResponse>): _58.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _58.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranteeGrantsRequest>): _58.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _58.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranteeGrantsResponse>): _58.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
            EventGrant: {
                encode(message: _56.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.EventGrant;
                fromPartial(object: Partial<_56.EventGrant>): _56.EventGrant;
            };
            EventRevoke: {
                encode(message: _56.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.EventRevoke;
                fromPartial(object: Partial<_56.EventRevoke>): _56.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _55.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GenericAuthorization;
                fromPartial(object: Partial<_55.GenericAuthorization>): _55.GenericAuthorization;
            };
            Grant: {
                encode(message: _55.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Grant;
                fromPartial(object: Partial<_55.Grant>): _55.Grant;
            };
            GrantAuthorization: {
                encode(message: _55.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GrantAuthorization;
                fromPartial(object: Partial<_55.GrantAuthorization>): _55.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _55.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.GrantQueueItem;
                fromPartial(object: Partial<_55.GrantQueueItem>): _55.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _61.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.AppOptionsRequest;
                fromPartial(_: Partial<_61.AppOptionsRequest>): _61.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _61.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_61.AppOptionsResponse_ModuleOptionsEntry>): _61.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _61.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.AppOptionsResponse;
                fromPartial(object: Partial<_61.AppOptionsResponse>): _61.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _60.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.ModuleOptions;
                fromPartial(object: Partial<_60.ModuleOptions>): _60.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _60.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor_SubCommandsEntry>): _60.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _60.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.ServiceCommandDescriptor;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor>): _60.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _60.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_60.RpcCommandOptions_FlagOptionsEntry>): _60.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _60.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.RpcCommandOptions;
                fromPartial(object: Partial<_60.RpcCommandOptions>): _60.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _60.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.FlagOptions;
                fromPartial(object: Partial<_60.FlagOptions>): _60.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _60.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PositionalArgDescriptor;
                fromPartial(object: Partial<_60.PositionalArgDescriptor>): _60.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _62.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.Module;
                    fromPartial(object: Partial<_62.Module>): _62.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _67.MsgSend) => {
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
                    }) => _67.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _67.MsgMultiSend) => {
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
                    }) => _67.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _67.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _67.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _67.MsgSetSendEnabled) => {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    };
                    fromAmino: ({ authority, send_enabled, use_default_for }: {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    }) => _67.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _67.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgSend;
                fromPartial(object: Partial<_67.MsgSend>): _67.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _67.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgSendResponse;
                fromPartial(_: Partial<_67.MsgSendResponse>): _67.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _67.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgMultiSend;
                fromPartial(object: Partial<_67.MsgMultiSend>): _67.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _67.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgMultiSendResponse;
                fromPartial(_: Partial<_67.MsgMultiSendResponse>): _67.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _67.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgUpdateParams;
                fromPartial(object: Partial<_67.MsgUpdateParams>): _67.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _67.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_67.MsgUpdateParamsResponse>): _67.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _67.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgSetSendEnabled;
                fromPartial(object: Partial<_67.MsgSetSendEnabled>): _67.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _67.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_67.MsgSetSendEnabledResponse>): _67.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _66.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryBalanceRequest;
                fromPartial(object: Partial<_66.QueryBalanceRequest>): _66.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _66.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryBalanceResponse;
                fromPartial(object: Partial<_66.QueryBalanceResponse>): _66.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _66.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllBalancesRequest;
                fromPartial(object: Partial<_66.QueryAllBalancesRequest>): _66.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _66.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryAllBalancesResponse;
                fromPartial(object: Partial<_66.QueryAllBalancesResponse>): _66.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _66.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalancesRequest>): _66.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _66.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalancesResponse>): _66.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _66.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomRequest>): _66.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _66.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomResponse>): _66.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _66.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_66.QueryTotalSupplyRequest>): _66.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _66.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_66.QueryTotalSupplyResponse>): _66.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _66.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySupplyOfRequest;
                fromPartial(object: Partial<_66.QuerySupplyOfRequest>): _66.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _66.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySupplyOfResponse;
                fromPartial(object: Partial<_66.QuerySupplyOfResponse>): _66.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _66.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomsMetadataRequest>): _66.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _66.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomsMetadataResponse>): _66.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _66.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomMetadataRequest>): _66.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _66.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomMetadataResponse>): _66.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _66.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_66.QueryDenomOwnersRequest>): _66.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _66.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.DenomOwner;
                fromPartial(object: Partial<_66.DenomOwner>): _66.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _66.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_66.QueryDenomOwnersResponse>): _66.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _66.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySendEnabledRequest;
                fromPartial(object: Partial<_66.QuerySendEnabledRequest>): _66.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _66.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QuerySendEnabledResponse;
                fromPartial(object: Partial<_66.QuerySendEnabledResponse>): _66.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
            Balance: {
                encode(message: _65.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Balance;
                fromPartial(object: Partial<_65.Balance>): _65.Balance;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
            };
            SendEnabled: {
                encode(message: _64.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.SendEnabled;
                fromPartial(object: Partial<_64.SendEnabled>): _64.SendEnabled;
            };
            Input: {
                encode(message: _64.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Input;
                fromPartial(object: Partial<_64.Input>): _64.Input;
            };
            Output: {
                encode(message: _64.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Output;
                fromPartial(object: Partial<_64.Output>): _64.Output;
            };
            Supply: {
                encode(message: _64.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Supply;
                fromPartial(object: Partial<_64.Supply>): _64.Supply;
            };
            DenomUnit: {
                encode(message: _64.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.DenomUnit;
                fromPartial(object: Partial<_64.DenomUnit>): _64.DenomUnit;
            };
            Metadata: {
                encode(message: _64.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Metadata;
                fromPartial(object: Partial<_64.Metadata>): _64.Metadata;
            };
            SendAuthorization: {
                encode(message: _63.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.SendAuthorization;
                fromPartial(object: Partial<_63.SendAuthorization>): _63.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _68.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.TxResponse;
                    fromPartial(object: Partial<_68.TxResponse>): _68.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _68.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.ABCIMessageLog;
                    fromPartial(object: Partial<_68.ABCIMessageLog>): _68.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _68.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.StringEvent;
                    fromPartial(object: Partial<_68.StringEvent>): _68.StringEvent;
                };
                Attribute: {
                    encode(message: _68.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.Attribute;
                    fromPartial(object: Partial<_68.Attribute>): _68.Attribute;
                };
                GasInfo: {
                    encode(message: _68.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.GasInfo;
                    fromPartial(object: Partial<_68.GasInfo>): _68.GasInfo;
                };
                Result: {
                    encode(message: _68.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.Result;
                    fromPartial(object: Partial<_68.Result>): _68.Result;
                };
                SimulationResponse: {
                    encode(message: _68.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.SimulationResponse;
                    fromPartial(object: Partial<_68.SimulationResponse>): _68.SimulationResponse;
                };
                MsgData: {
                    encode(message: _68.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.MsgData;
                    fromPartial(object: Partial<_68.MsgData>): _68.MsgData;
                };
                TxMsgData: {
                    encode(message: _68.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.TxMsgData;
                    fromPartial(object: Partial<_68.TxMsgData>): _68.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _68.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _68.SearchTxsResult;
                    fromPartial(object: Partial<_68.SearchTxsResult>): _68.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _69.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.Pairs;
                    fromPartial(object: Partial<_69.Pairs>): _69.Pairs;
                };
                Pair: {
                    encode(message: _69.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.Pair;
                    fromPartial(object: Partial<_69.Pair>): _69.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _244.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _70.ConfigRequest): Promise<_70.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _70.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _70.ConfigRequest;
                    fromPartial(_: Partial<_70.ConfigRequest>): _70.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _70.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _70.ConfigResponse;
                    fromPartial(object: Partial<_70.ConfigResponse>): _70.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _71.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.PageRequest;
                    fromPartial(object: Partial<_71.PageRequest>): _71.PageRequest;
                };
                PageResponse: {
                    encode(message: _71.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _71.PageResponse;
                    fromPartial(object: Partial<_71.PageResponse>): _71.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _72.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _72.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_72.ListAllInterfacesRequest>): _72.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _72.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_72.ListAllInterfacesResponse>): _72.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _72.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ListImplementationsRequest;
                    fromPartial(object: Partial<_72.ListImplementationsRequest>): _72.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _72.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _72.ListImplementationsResponse;
                    fromPartial(object: Partial<_72.ListImplementationsResponse>): _72.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _73.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.AppDescriptor;
                    fromPartial(object: Partial<_73.AppDescriptor>): _73.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _73.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.TxDescriptor;
                    fromPartial(object: Partial<_73.TxDescriptor>): _73.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _73.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.AuthnDescriptor;
                    fromPartial(object: Partial<_73.AuthnDescriptor>): _73.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _73.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.SigningModeDescriptor;
                    fromPartial(object: Partial<_73.SigningModeDescriptor>): _73.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _73.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.ChainDescriptor;
                    fromPartial(object: Partial<_73.ChainDescriptor>): _73.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _73.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.CodecDescriptor;
                    fromPartial(object: Partial<_73.CodecDescriptor>): _73.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _73.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.InterfaceDescriptor;
                    fromPartial(object: Partial<_73.InterfaceDescriptor>): _73.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _73.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_73.InterfaceImplementerDescriptor>): _73.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _73.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_73.InterfaceAcceptingMessageDescriptor>): _73.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _73.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.ConfigurationDescriptor;
                    fromPartial(object: Partial<_73.ConfigurationDescriptor>): _73.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _73.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.MsgDescriptor;
                    fromPartial(object: Partial<_73.MsgDescriptor>): _73.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _73.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_73.GetAuthnDescriptorRequest>): _73.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _73.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_73.GetAuthnDescriptorResponse>): _73.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _73.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_73.GetChainDescriptorRequest>): _73.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _73.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_73.GetChainDescriptorResponse>): _73.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _73.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_73.GetCodecDescriptorRequest>): _73.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _73.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_73.GetCodecDescriptorResponse>): _73.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _73.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_73.GetConfigurationDescriptorRequest>): _73.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _73.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_73.GetConfigurationDescriptorResponse>): _73.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _73.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_73.GetQueryServicesDescriptorRequest>): _73.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _73.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_73.GetQueryServicesDescriptorResponse>): _73.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _73.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _73.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_73.GetTxDescriptorRequest>): _73.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _73.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_73.GetTxDescriptorResponse>): _73.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _73.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.QueryServicesDescriptor;
                    fromPartial(object: Partial<_73.QueryServicesDescriptor>): _73.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _73.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.QueryServiceDescriptor;
                    fromPartial(object: Partial<_73.QueryServiceDescriptor>): _73.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _73.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _73.QueryMethodDescriptor;
                    fromPartial(object: Partial<_73.QueryMethodDescriptor>): _73.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _74.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Snapshot;
                    fromPartial(object: Partial<_74.Snapshot>): _74.Snapshot;
                };
                Metadata: {
                    encode(message: _74.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.Metadata;
                    fromPartial(object: Partial<_74.Metadata>): _74.Metadata;
                };
                SnapshotItem: {
                    encode(message: _74.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotItem;
                    fromPartial(object: Partial<_74.SnapshotItem>): _74.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _74.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotStoreItem;
                    fromPartial(object: Partial<_74.SnapshotStoreItem>): _74.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _74.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotIAVLItem;
                    fromPartial(object: Partial<_74.SnapshotIAVLItem>): _74.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _74.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_74.SnapshotExtensionMeta>): _74.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _74.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_74.SnapshotExtensionPayload>): _74.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _74.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotKVItem;
                    fromPartial(object: Partial<_74.SnapshotKVItem>): _74.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _74.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _74.SnapshotSchema;
                    fromPartial(object: Partial<_74.SnapshotSchema>): _74.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _76.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.StoreKVPair;
                    fromPartial(object: Partial<_76.StoreKVPair>): _76.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _76.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.BlockMetadata;
                    fromPartial(object: Partial<_76.BlockMetadata>): _76.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _76.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_76.BlockMetadata_DeliverTx>): _76.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _75.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _75.CommitInfo;
                    fromPartial(object: Partial<_75.CommitInfo>): _75.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _75.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _75.StoreInfo;
                    fromPartial(object: Partial<_75.StoreInfo>): _75.StoreInfo;
                };
                CommitID: {
                    encode(message: _75.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _75.CommitID;
                    fromPartial(object: Partial<_75.CommitID>): _75.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _245.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _77.GetNodeInfoRequest): Promise<_77.GetNodeInfoResponse>;
                    getSyncing(request?: _77.GetSyncingRequest): Promise<_77.GetSyncingResponse>;
                    getLatestBlock(request?: _77.GetLatestBlockRequest): Promise<_77.GetLatestBlockResponse>;
                    getBlockByHeight(request: _77.GetBlockByHeightRequest): Promise<_77.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _77.GetLatestValidatorSetRequest): Promise<_77.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _77.GetValidatorSetByHeightRequest): Promise<_77.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _77.ABCIQueryRequest): Promise<_77.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _78.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.Block;
                    fromPartial(object: Partial<_78.Block>): _78.Block;
                };
                Header: {
                    encode(message: _78.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _77.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_77.GetValidatorSetByHeightRequest>): _77.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _77.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_77.GetValidatorSetByHeightResponse>): _77.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _77.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_77.GetLatestValidatorSetRequest>): _77.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _77.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_77.GetLatestValidatorSetResponse>): _77.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _77.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.Validator;
                    fromPartial(object: Partial<_77.Validator>): _77.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _77.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_77.GetBlockByHeightRequest>): _77.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _77.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_77.GetBlockByHeightResponse>): _77.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _77.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _77.GetLatestBlockRequest;
                    fromPartial(_: Partial<_77.GetLatestBlockRequest>): _77.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _77.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetLatestBlockResponse;
                    fromPartial(object: Partial<_77.GetLatestBlockResponse>): _77.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _77.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _77.GetSyncingRequest;
                    fromPartial(_: Partial<_77.GetSyncingRequest>): _77.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _77.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetSyncingResponse;
                    fromPartial(object: Partial<_77.GetSyncingResponse>): _77.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _77.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _77.GetNodeInfoRequest;
                    fromPartial(_: Partial<_77.GetNodeInfoRequest>): _77.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _77.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.GetNodeInfoResponse;
                    fromPartial(object: Partial<_77.GetNodeInfoResponse>): _77.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _77.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.VersionInfo;
                    fromPartial(object: Partial<_77.VersionInfo>): _77.VersionInfo;
                };
                Module: {
                    encode(message: _77.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.Module;
                    fromPartial(object: Partial<_77.Module>): _77.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _77.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.ABCIQueryRequest;
                    fromPartial(object: Partial<_77.ABCIQueryRequest>): _77.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _77.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.ABCIQueryResponse;
                    fromPartial(object: Partial<_77.ABCIQueryResponse>): _77.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _77.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.ProofOp;
                    fromPartial(object: Partial<_77.ProofOp>): _77.ProofOp;
                };
                ProofOps: {
                    encode(message: _77.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.ProofOps;
                    fromPartial(object: Partial<_77.ProofOps>): _77.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _79.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.Coin;
                fromPartial(object: Partial<_79.Coin>): _79.Coin;
            };
            DecCoin: {
                encode(message: _79.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DecCoin;
                fromPartial(object: Partial<_79.DecCoin>): _79.DecCoin;
            };
            IntProto: {
                encode(message: _79.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.IntProto;
                fromPartial(object: Partial<_79.IntProto>): _79.IntProto;
            };
            DecProto: {
                encode(message: _79.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.DecProto;
                fromPartial(object: Partial<_79.DecProto>): _79.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _80.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _80.Module;
                    fromPartial(object: Partial<_80.Module>): _80.Module;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                encode(message: _82.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.GenesisOwners;
                fromPartial(object: Partial<_82.GenesisOwners>): _82.GenesisOwners;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
            Capability: {
                encode(message: _81.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Capability;
                fromPartial(object: Partial<_81.Capability>): _81.Capability;
            };
            Owner: {
                encode(message: _81.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.Owner;
                fromPartial(object: Partial<_81.Owner>): _81.Owner;
            };
            CapabilityOwners: {
                encode(message: _81.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.CapabilityOwners;
                fromPartial(object: Partial<_81.CapabilityOwners>): _81.CapabilityOwners;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _83.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.Module;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _264.MsgClientImpl;
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _85.MsgUpdateParams) => {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    };
                    fromAmino: ({ authority, block, evidence, validator }: {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    }) => _85.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _85.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MsgUpdateParams;
                fromPartial(object: Partial<_85.MsgUpdateParams>): _85.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _85.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_85.MsgUpdateParamsResponse>): _85.MsgUpdateParamsResponse;
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
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _86.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.Module;
                    fromPartial(object: Partial<_86.Module>): _86.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _88.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _88.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constantFee }: _88.MsgUpdateParams) => {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, constant_fee }: {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _88.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _88.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.MsgVerifyInvariant;
                fromPartial(object: Partial<_88.MsgVerifyInvariant>): _88.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _88.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _88.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_88.MsgVerifyInvariantResponse>): _88.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _88.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.MsgUpdateParams;
                fromPartial(object: Partial<_88.MsgUpdateParams>): _88.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _88.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _88.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_88.MsgUpdateParamsResponse>): _88.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _89.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.PubKey;
                fromPartial(object: Partial<_89.PubKey>): _89.PubKey;
            };
            PrivKey: {
                encode(message: _89.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.PrivKey;
                fromPartial(object: Partial<_89.PrivKey>): _89.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _90.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.BIP44Params;
                    fromPartial(object: Partial<_90.BIP44Params>): _90.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _91.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Record;
                    fromPartial(object: Partial<_91.Record>): _91.Record;
                };
                Record_Local: {
                    encode(message: _91.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Record_Local;
                    fromPartial(object: Partial<_91.Record_Local>): _91.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _91.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Record_Ledger;
                    fromPartial(object: Partial<_91.Record_Ledger>): _91.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _91.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.Record_Multi;
                    fromPartial(_: Partial<_91.Record_Multi>): _91.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _91.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _91.Record_Offline;
                    fromPartial(_: Partial<_91.Record_Offline>): _91.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _92.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.LegacyAminoPubKey;
                fromPartial(object: Partial<_92.LegacyAminoPubKey>): _92.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _93.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.PubKey;
                fromPartial(object: Partial<_93.PubKey>): _93.PubKey;
            };
            PrivKey: {
                encode(message: _93.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.PrivKey;
                fromPartial(object: Partial<_93.PrivKey>): _93.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _94.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.PubKey;
                fromPartial(object: Partial<_94.PubKey>): _94.PubKey;
            };
            PrivKey: {
                encode(message: _94.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.PrivKey;
                fromPartial(object: Partial<_94.PrivKey>): _94.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _95.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.Module;
                    fromPartial(object: Partial<_95.Module>): _95.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _266.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                validatorDistributionInfo(request: _98.QueryValidatorDistributionInfoRequest): Promise<_98.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _98.QueryValidatorOutstandingRewardsRequest): Promise<_98.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _98.QueryValidatorCommissionRequest): Promise<_98.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _98.QueryValidatorSlashesRequest): Promise<_98.QueryValidatorSlashesResponse>;
                delegationRewards(request: _98.QueryDelegationRewardsRequest): Promise<_98.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _98.QueryDelegationTotalRewardsRequest): Promise<_98.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _98.QueryDelegatorWithdrawAddressRequest): Promise<_98.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _98.QueryCommunityPoolRequest): Promise<_98.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _99.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _99.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _99.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _99.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _99.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _99.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _99.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _99.MsgFundCommunityPool;
                    };
                    updateParams(value: _99.MsgUpdateParams): {
                        typeUrl: string;
                        value: _99.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _99.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _99.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _99.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _99.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _99.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _99.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _99.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _99.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _99.MsgFundCommunityPool) => {
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
                    }) => _99.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _99.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _99.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _99.MsgCommunityPoolSpend) => {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, recipient, amount }: {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _99.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _99.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_99.MsgSetWithdrawAddress>): _99.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _99.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_99.MsgSetWithdrawAddressResponse>): _99.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _99.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_99.MsgWithdrawDelegatorReward>): _99.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _99.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_99.MsgWithdrawDelegatorRewardResponse>): _99.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _99.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_99.MsgWithdrawValidatorCommission>): _99.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _99.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_99.MsgWithdrawValidatorCommissionResponse>): _99.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _99.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgFundCommunityPool;
                fromPartial(object: Partial<_99.MsgFundCommunityPool>): _99.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _99.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_99.MsgFundCommunityPoolResponse>): _99.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _99.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgUpdateParams;
                fromPartial(object: Partial<_99.MsgUpdateParams>): _99.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _99.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_99.MsgUpdateParamsResponse>): _99.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _99.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_99.MsgCommunityPoolSpend>): _99.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _99.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_99.MsgCommunityPoolSpendResponse>): _99.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.QueryParamsRequest;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryParamsResponse;
                fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _98.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_98.QueryValidatorDistributionInfoRequest>): _98.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _98.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_98.QueryValidatorDistributionInfoResponse>): _98.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _98.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_98.QueryValidatorOutstandingRewardsRequest>): _98.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _98.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_98.QueryValidatorOutstandingRewardsResponse>): _98.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _98.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_98.QueryValidatorCommissionRequest>): _98.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _98.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_98.QueryValidatorCommissionResponse>): _98.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _98.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_98.QueryValidatorSlashesRequest>): _98.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _98.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_98.QueryValidatorSlashesResponse>): _98.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _98.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_98.QueryDelegationRewardsRequest>): _98.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _98.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_98.QueryDelegationRewardsResponse>): _98.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _98.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_98.QueryDelegationTotalRewardsRequest>): _98.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _98.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_98.QueryDelegationTotalRewardsResponse>): _98.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _98.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsRequest>): _98.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _98.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsResponse>): _98.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _98.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_98.QueryDelegatorWithdrawAddressRequest>): _98.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _98.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_98.QueryDelegatorWithdrawAddressResponse>): _98.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _98.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_98.QueryCommunityPoolRequest>): _98.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _98.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_98.QueryCommunityPoolResponse>): _98.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _97.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_97.DelegatorWithdrawInfo>): _97.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _97.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorOutstandingRewardsRecord>): _97.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _97.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_97.ValidatorAccumulatedCommissionRecord>): _97.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _97.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorHistoricalRewardsRecord>): _97.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _97.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_97.ValidatorCurrentRewardsRecord>): _97.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _97.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_97.DelegatorStartingInfoRecord>): _97.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _97.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_97.ValidatorSlashEventRecord>): _97.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
            };
            Params: {
                encode(message: _96.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.Params;
                fromPartial(object: Partial<_96.Params>): _96.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _96.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_96.ValidatorHistoricalRewards>): _96.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _96.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorCurrentRewards;
                fromPartial(object: Partial<_96.ValidatorCurrentRewards>): _96.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _96.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_96.ValidatorAccumulatedCommission>): _96.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _96.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_96.ValidatorOutstandingRewards>): _96.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _96.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorSlashEvent;
                fromPartial(object: Partial<_96.ValidatorSlashEvent>): _96.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _96.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ValidatorSlashEvents;
                fromPartial(object: Partial<_96.ValidatorSlashEvents>): _96.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _96.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.FeePool;
                fromPartial(object: Partial<_96.FeePool>): _96.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _96.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_96.CommunityPoolSpendProposal>): _96.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _96.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.DelegatorStartingInfo;
                fromPartial(object: Partial<_96.DelegatorStartingInfo>): _96.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _96.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.DelegationDelegatorReward;
                fromPartial(object: Partial<_96.DelegationDelegatorReward>): _96.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _96.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_96.CommunityPoolSpendProposalWithDeposit>): _96.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _100.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _100.Module;
                    fromPartial(_: Partial<_100.Module>): _100.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _267.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _103.QueryEvidenceRequest): Promise<_103.QueryEvidenceResponse>;
                allEvidence(request?: _103.QueryAllEvidenceRequest): Promise<_103.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _104.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _104.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _104.MsgSubmitEvidence) => {
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
                    }) => _104.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _104.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgSubmitEvidence;
                fromPartial(object: Partial<_104.MsgSubmitEvidence>): _104.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _104.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_104.MsgSubmitEvidenceResponse>): _104.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _103.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryEvidenceRequest;
                fromPartial(object: Partial<_103.QueryEvidenceRequest>): _103.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _103.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryEvidenceResponse;
                fromPartial(object: Partial<_103.QueryEvidenceResponse>): _103.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _103.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_103.QueryAllEvidenceRequest>): _103.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _103.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_103.QueryAllEvidenceResponse>): _103.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
            };
            Equivocation: {
                encode(message: _101.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.Equivocation;
                fromPartial(object: Partial<_101.Equivocation>): _101.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _105.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.Module;
                    fromPartial(_: Partial<_105.Module>): _105.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _268.MsgClientImpl;
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _108.QueryAllowanceRequest): Promise<_108.QueryAllowanceResponse>;
                allowances(request: _108.QueryAllowancesRequest): Promise<_108.QueryAllowancesResponse>;
                allowancesByGranter(request: _108.QueryAllowancesByGranterRequest): Promise<_108.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _109.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _109.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _109.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _109.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _109.MsgGrantAllowance) => {
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
                    }) => _109.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _109.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _109.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _109.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.MsgGrantAllowance;
                fromPartial(object: Partial<_109.MsgGrantAllowance>): _109.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _109.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _109.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_109.MsgGrantAllowanceResponse>): _109.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _109.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.MsgRevokeAllowance;
                fromPartial(object: Partial<_109.MsgRevokeAllowance>): _109.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _109.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _109.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_109.MsgRevokeAllowanceResponse>): _109.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _108.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowanceRequest;
                fromPartial(object: Partial<_108.QueryAllowanceRequest>): _108.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _108.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowanceResponse;
                fromPartial(object: Partial<_108.QueryAllowanceResponse>): _108.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _108.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowancesRequest;
                fromPartial(object: Partial<_108.QueryAllowancesRequest>): _108.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _108.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowancesResponse;
                fromPartial(object: Partial<_108.QueryAllowancesResponse>): _108.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _108.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_108.QueryAllowancesByGranterRequest>): _108.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _108.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _108.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_108.QueryAllowancesByGranterResponse>): _108.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
            };
            BasicAllowance: {
                encode(message: _106.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.BasicAllowance;
                fromPartial(object: Partial<_106.BasicAllowance>): _106.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _106.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.PeriodicAllowance;
                fromPartial(object: Partial<_106.PeriodicAllowance>): _106.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _106.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.AllowedMsgAllowance;
                fromPartial(object: Partial<_106.AllowedMsgAllowance>): _106.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _106.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.Grant;
                fromPartial(object: Partial<_106.Grant>): _106.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _110.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _110.Module;
                    fromPartial(_: Partial<_110.Module>): _110.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _112.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.Module;
                    fromPartial(object: Partial<_112.Module>): _112.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _269.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _115.QueryProposalRequest): Promise<_115.QueryProposalResponse>;
                proposals(request: _115.QueryProposalsRequest): Promise<_115.QueryProposalsResponse>;
                vote(request: _115.QueryVoteRequest): Promise<_115.QueryVoteResponse>;
                votes(request: _115.QueryVotesRequest): Promise<_115.QueryVotesResponse>;
                params(request: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                deposit(request: _115.QueryDepositRequest): Promise<_115.QueryDepositResponse>;
                deposits(request: _115.QueryDepositsRequest): Promise<_115.QueryDepositsResponse>;
                tallyResult(request: _115.QueryTallyResultRequest): Promise<_115.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _116.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _116.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _116.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _116.MsgExecLegacyContent;
                    };
                    vote(value: _116.MsgVote): {
                        typeUrl: string;
                        value: _116.MsgVote;
                    };
                    voteWeighted(value: _116.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _116.MsgVoteWeighted;
                    };
                    deposit(value: _116.MsgDeposit): {
                        typeUrl: string;
                        value: _116.MsgDeposit;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _116.MsgSubmitProposal) => {
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
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: {
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
                        title: string;
                        summary: string;
                    }) => _116.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _116.MsgExecLegacyContent) => {
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
                    }) => _116.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _116.MsgVote) => {
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
                    }) => _116.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _116.MsgVoteWeighted) => {
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
                    }) => _116.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _116.MsgDeposit) => {
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
                    }) => _116.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _116.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    }) => _116.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _116.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgSubmitProposal;
                fromPartial(object: Partial<_116.MsgSubmitProposal>): _116.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _116.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_116.MsgSubmitProposalResponse>): _116.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _116.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgExecLegacyContent;
                fromPartial(object: Partial<_116.MsgExecLegacyContent>): _116.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _116.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_116.MsgExecLegacyContentResponse>): _116.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _116.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgVote;
                fromPartial(object: Partial<_116.MsgVote>): _116.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _116.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.MsgVoteResponse;
                fromPartial(_: Partial<_116.MsgVoteResponse>): _116.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _116.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgVoteWeighted;
                fromPartial(object: Partial<_116.MsgVoteWeighted>): _116.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _116.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_116.MsgVoteWeightedResponse>): _116.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _116.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgDeposit;
                fromPartial(object: Partial<_116.MsgDeposit>): _116.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _116.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.MsgDepositResponse;
                fromPartial(_: Partial<_116.MsgDepositResponse>): _116.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _116.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.MsgUpdateParams;
                fromPartial(object: Partial<_116.MsgUpdateParams>): _116.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _116.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_116.MsgUpdateParamsResponse>): _116.MsgUpdateParamsResponse;
            };
            QueryProposalRequest: {
                encode(message: _115.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryProposalRequest;
                fromPartial(object: Partial<_115.QueryProposalRequest>): _115.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _115.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryProposalResponse;
                fromPartial(object: Partial<_115.QueryProposalResponse>): _115.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _115.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryProposalsRequest;
                fromPartial(object: Partial<_115.QueryProposalsRequest>): _115.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _115.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryProposalsResponse;
                fromPartial(object: Partial<_115.QueryProposalsResponse>): _115.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _115.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryVoteRequest;
                fromPartial(object: Partial<_115.QueryVoteRequest>): _115.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _115.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryVoteResponse;
                fromPartial(object: Partial<_115.QueryVoteResponse>): _115.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _115.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryVotesRequest;
                fromPartial(object: Partial<_115.QueryVotesRequest>): _115.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _115.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryVotesResponse;
                fromPartial(object: Partial<_115.QueryVotesResponse>): _115.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _115.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryParamsRequest;
                fromPartial(object: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _115.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryParamsResponse;
                fromPartial(object: Partial<_115.QueryParamsResponse>): _115.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _115.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryDepositRequest;
                fromPartial(object: Partial<_115.QueryDepositRequest>): _115.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _115.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryDepositResponse;
                fromPartial(object: Partial<_115.QueryDepositResponse>): _115.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _115.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryDepositsRequest;
                fromPartial(object: Partial<_115.QueryDepositsRequest>): _115.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _115.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryDepositsResponse;
                fromPartial(object: Partial<_115.QueryDepositsResponse>): _115.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _115.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryTallyResultRequest;
                fromPartial(object: Partial<_115.QueryTallyResultRequest>): _115.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _115.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.QueryTallyResultResponse;
                fromPartial(object: Partial<_115.QueryTallyResultResponse>): _115.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _114.VoteOption;
            voteOptionToJSON(object: _114.VoteOption): string;
            proposalStatusFromJSON(object: any): _114.ProposalStatus;
            proposalStatusToJSON(object: _114.ProposalStatus): string;
            VoteOption: typeof _114.VoteOption;
            VoteOptionSDKType: typeof _114.VoteOption;
            ProposalStatus: typeof _114.ProposalStatus;
            ProposalStatusSDKType: typeof _114.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _114.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.WeightedVoteOption;
                fromPartial(object: Partial<_114.WeightedVoteOption>): _114.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _114.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.Deposit;
                fromPartial(object: Partial<_114.Deposit>): _114.Deposit;
            };
            Proposal: {
                encode(message: _114.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.Proposal;
                fromPartial(object: Partial<_114.Proposal>): _114.Proposal;
            };
            TallyResult: {
                encode(message: _114.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.TallyResult;
                fromPartial(object: Partial<_114.TallyResult>): _114.TallyResult;
            };
            Vote: {
                encode(message: _114.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.Vote;
                fromPartial(object: Partial<_114.Vote>): _114.Vote;
            };
            DepositParams: {
                encode(message: _114.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.DepositParams;
                fromPartial(object: Partial<_114.DepositParams>): _114.DepositParams;
            };
            VotingParams: {
                encode(message: _114.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.VotingParams;
                fromPartial(object: Partial<_114.VotingParams>): _114.VotingParams;
            };
            TallyParams: {
                encode(message: _114.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.TallyParams;
                fromPartial(object: Partial<_114.TallyParams>): _114.TallyParams;
            };
            Params: {
                encode(message: _114.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.Params;
                fromPartial(object: Partial<_114.Params>): _114.Params;
            };
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _120.MsgSubmitProposal) => {
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
                    }) => _120.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _120.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _120.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _120.MsgVoteWeighted) => {
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
                    }) => _120.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _120.MsgDeposit) => {
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
                    }) => _120.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _120.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgSubmitProposal;
                fromPartial(object: Partial<_120.MsgSubmitProposal>): _120.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _120.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_120.MsgSubmitProposalResponse>): _120.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _120.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgVote;
                fromPartial(object: Partial<_120.MsgVote>): _120.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _120.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgVoteResponse;
                fromPartial(_: Partial<_120.MsgVoteResponse>): _120.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _120.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgVoteWeighted;
                fromPartial(object: Partial<_120.MsgVoteWeighted>): _120.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _120.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_120.MsgVoteWeightedResponse>): _120.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _120.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.MsgDeposit;
                fromPartial(object: Partial<_120.MsgDeposit>): _120.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _120.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _120.MsgDepositResponse;
                fromPartial(_: Partial<_120.MsgDepositResponse>): _120.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _119.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryProposalRequest;
                fromPartial(object: Partial<_119.QueryProposalRequest>): _119.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _119.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryProposalResponse;
                fromPartial(object: Partial<_119.QueryProposalResponse>): _119.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _119.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryProposalsRequest;
                fromPartial(object: Partial<_119.QueryProposalsRequest>): _119.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _119.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryProposalsResponse;
                fromPartial(object: Partial<_119.QueryProposalsResponse>): _119.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _119.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryVoteRequest;
                fromPartial(object: Partial<_119.QueryVoteRequest>): _119.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _119.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryVoteResponse;
                fromPartial(object: Partial<_119.QueryVoteResponse>): _119.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _119.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryVotesRequest;
                fromPartial(object: Partial<_119.QueryVotesRequest>): _119.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _119.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryVotesResponse;
                fromPartial(object: Partial<_119.QueryVotesResponse>): _119.QueryVotesResponse;
            };
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
            QueryDepositRequest: {
                encode(message: _119.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryDepositRequest;
                fromPartial(object: Partial<_119.QueryDepositRequest>): _119.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _119.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryDepositResponse;
                fromPartial(object: Partial<_119.QueryDepositResponse>): _119.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _119.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryDepositsRequest;
                fromPartial(object: Partial<_119.QueryDepositsRequest>): _119.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _119.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryDepositsResponse;
                fromPartial(object: Partial<_119.QueryDepositsResponse>): _119.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _119.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryTallyResultRequest;
                fromPartial(object: Partial<_119.QueryTallyResultRequest>): _119.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _119.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.QueryTallyResultResponse;
                fromPartial(object: Partial<_119.QueryTallyResultResponse>): _119.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _118.VoteOption;
            voteOptionToJSON(object: _118.VoteOption): string;
            proposalStatusFromJSON(object: any): _118.ProposalStatus;
            proposalStatusToJSON(object: _118.ProposalStatus): string;
            VoteOption: typeof _118.VoteOption;
            VoteOptionSDKType: typeof _118.VoteOption;
            ProposalStatus: typeof _118.ProposalStatus;
            ProposalStatusSDKType: typeof _118.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _118.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.WeightedVoteOption;
                fromPartial(object: Partial<_118.WeightedVoteOption>): _118.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _118.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.TextProposal;
                fromPartial(object: Partial<_118.TextProposal>): _118.TextProposal;
            };
            Deposit: {
                encode(message: _118.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.Deposit;
                fromPartial(object: Partial<_118.Deposit>): _118.Deposit;
            };
            Proposal: {
                encode(message: _118.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.Proposal;
                fromPartial(object: Partial<_118.Proposal>): _118.Proposal;
            };
            TallyResult: {
                encode(message: _118.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.TallyResult;
                fromPartial(object: Partial<_118.TallyResult>): _118.TallyResult;
            };
            Vote: {
                encode(message: _118.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.Vote;
                fromPartial(object: Partial<_118.Vote>): _118.Vote;
            };
            DepositParams: {
                encode(message: _118.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.DepositParams;
                fromPartial(object: Partial<_118.DepositParams>): _118.DepositParams;
            };
            VotingParams: {
                encode(message: _118.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.VotingParams;
                fromPartial(object: Partial<_118.VotingParams>): _118.VotingParams;
            };
            TallyParams: {
                encode(message: _118.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _118.TallyParams;
                fromPartial(object: Partial<_118.TallyParams>): _118.TallyParams;
            };
            GenesisState: {
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _121.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.Module;
                    fromPartial(object: Partial<_121.Module>): _121.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            QueryClientImpl: typeof _252.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _124.QueryGroupInfoRequest): Promise<_124.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _124.QueryGroupPolicyInfoRequest): Promise<_124.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _124.QueryGroupMembersRequest): Promise<_124.QueryGroupMembersResponse>;
                groupsByAdmin(request: _124.QueryGroupsByAdminRequest): Promise<_124.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _124.QueryGroupPoliciesByGroupRequest): Promise<_124.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _124.QueryGroupPoliciesByAdminRequest): Promise<_124.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _124.QueryProposalsByGroupPolicyRequest): Promise<_124.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _124.QueryVoteByProposalVoterRequest): Promise<_124.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _124.QueryVotesByProposalRequest): Promise<_124.QueryVotesByProposalResponse>;
                votesByVoter(request: _124.QueryVotesByVoterRequest): Promise<_124.QueryVotesByVoterResponse>;
                groupsByMember(request: _124.QueryGroupsByMemberRequest): Promise<_124.QueryGroupsByMemberResponse>;
                tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
                groups(request?: _124.QueryGroupsRequest): Promise<_124.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _125.MsgCreateGroup): {
                        typeUrl: string;
                        value: _125.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _125.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _125.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _125.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _125.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _125.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _125.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _125.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _125.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _125.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _125.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _125.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _125.MsgWithdrawProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    exec(value: _125.MsgExec): {
                        typeUrl: string;
                        value: _125.MsgExec;
                    };
                    leaveGroup(value: _125.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _125.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _125.MsgCreateGroup) => {
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
                    }) => _125.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _125.MsgUpdateGroupMembers) => {
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
                    }) => _125.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _125.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _125.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _125.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _125.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _125.MsgCreateGroupPolicy) => {
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
                    }) => _125.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _125.MsgCreateGroupWithPolicy) => {
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
                    }) => _125.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _125.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _125.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _125.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _125.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _125.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _125.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: _125.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    }) => _125.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _125.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _125.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _125.MsgVote) => {
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
                    }) => _125.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _125.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _125.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _125.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _125.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _126.VoteOption;
            voteOptionToJSON(object: _126.VoteOption): string;
            proposalStatusFromJSON(object: any): _126.ProposalStatus;
            proposalStatusToJSON(object: _126.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _126.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _126.ProposalExecutorResult): string;
            VoteOption: typeof _126.VoteOption;
            VoteOptionSDKType: typeof _126.VoteOption;
            ProposalStatus: typeof _126.ProposalStatus;
            ProposalStatusSDKType: typeof _126.ProposalStatus;
            ProposalExecutorResult: typeof _126.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _126.ProposalExecutorResult;
            Member: {
                encode(message: _126.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.Member;
                fromPartial(object: Partial<_126.Member>): _126.Member;
            };
            MemberRequest: {
                encode(message: _126.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MemberRequest;
                fromPartial(object: Partial<_126.MemberRequest>): _126.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _126.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_126.ThresholdDecisionPolicy>): _126.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _126.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.PercentageDecisionPolicy;
                fromPartial(object: Partial<_126.PercentageDecisionPolicy>): _126.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _126.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.DecisionPolicyWindows;
                fromPartial(object: Partial<_126.DecisionPolicyWindows>): _126.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _126.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.GroupInfo;
                fromPartial(object: Partial<_126.GroupInfo>): _126.GroupInfo;
            };
            GroupMember: {
                encode(message: _126.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.GroupMember;
                fromPartial(object: Partial<_126.GroupMember>): _126.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _126.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.GroupPolicyInfo;
                fromPartial(object: Partial<_126.GroupPolicyInfo>): _126.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _126.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.Proposal;
                fromPartial(object: Partial<_126.Proposal>): _126.Proposal;
            };
            TallyResult: {
                encode(message: _126.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.TallyResult;
                fromPartial(object: Partial<_126.TallyResult>): _126.TallyResult;
            };
            Vote: {
                encode(message: _126.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.Vote;
                fromPartial(object: Partial<_126.Vote>): _126.Vote;
            };
            execFromJSON(object: any): _125.Exec;
            execToJSON(object: _125.Exec): string;
            Exec: typeof _125.Exec;
            ExecSDKType: typeof _125.Exec;
            MsgCreateGroup: {
                encode(message: _125.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroup;
                fromPartial(object: Partial<_125.MsgCreateGroup>): _125.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _125.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroupResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupResponse>): _125.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _125.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_125.MsgUpdateGroupMembers>): _125.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _125.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupMembersResponse>): _125.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _125.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_125.MsgUpdateGroupAdmin>): _125.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _125.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupAdminResponse>): _125.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _125.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_125.MsgUpdateGroupMetadata>): _125.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _125.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupMetadataResponse>): _125.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _125.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_125.MsgCreateGroupPolicy>): _125.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _125.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupPolicyResponse>): _125.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _125.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyAdmin>): _125.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _125.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyAdminResponse>): _125.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _125.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_125.MsgCreateGroupWithPolicy>): _125.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _125.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_125.MsgCreateGroupWithPolicyResponse>): _125.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _125.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyDecisionPolicy>): _125.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _125.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyDecisionPolicyResponse>): _125.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _125.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_125.MsgUpdateGroupPolicyMetadata>): _125.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _125.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_125.MsgUpdateGroupPolicyMetadataResponse>): _125.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _125.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgSubmitProposal;
                fromPartial(object: Partial<_125.MsgSubmitProposal>): _125.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _125.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_125.MsgSubmitProposalResponse>): _125.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _125.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgWithdrawProposal;
                fromPartial(object: Partial<_125.MsgWithdrawProposal>): _125.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _125.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_125.MsgWithdrawProposalResponse>): _125.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _125.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgVote;
                fromPartial(object: Partial<_125.MsgVote>): _125.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _125.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgVoteResponse;
                fromPartial(_: Partial<_125.MsgVoteResponse>): _125.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _125.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgExec;
                fromPartial(object: Partial<_125.MsgExec>): _125.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _125.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgExecResponse;
                fromPartial(object: Partial<_125.MsgExecResponse>): _125.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _125.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.MsgLeaveGroup;
                fromPartial(object: Partial<_125.MsgLeaveGroup>): _125.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _125.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _125.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_125.MsgLeaveGroupResponse>): _125.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _124.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupInfoRequest;
                fromPartial(object: Partial<_124.QueryGroupInfoRequest>): _124.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _124.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupInfoResponse;
                fromPartial(object: Partial<_124.QueryGroupInfoResponse>): _124.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _124.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_124.QueryGroupPolicyInfoRequest>): _124.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _124.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_124.QueryGroupPolicyInfoResponse>): _124.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _124.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupMembersRequest;
                fromPartial(object: Partial<_124.QueryGroupMembersRequest>): _124.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _124.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupMembersResponse;
                fromPartial(object: Partial<_124.QueryGroupMembersResponse>): _124.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _124.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_124.QueryGroupsByAdminRequest>): _124.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _124.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_124.QueryGroupsByAdminResponse>): _124.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _124.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByGroupRequest>): _124.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _124.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByGroupResponse>): _124.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _124.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByAdminRequest>): _124.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _124.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_124.QueryGroupPoliciesByAdminResponse>): _124.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _124.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryProposalRequest;
                fromPartial(object: Partial<_124.QueryProposalRequest>): _124.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _124.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryProposalResponse;
                fromPartial(object: Partial<_124.QueryProposalResponse>): _124.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _124.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_124.QueryProposalsByGroupPolicyRequest>): _124.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _124.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_124.QueryProposalsByGroupPolicyResponse>): _124.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _124.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_124.QueryVoteByProposalVoterRequest>): _124.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _124.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_124.QueryVoteByProposalVoterResponse>): _124.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _124.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_124.QueryVotesByProposalRequest>): _124.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _124.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_124.QueryVotesByProposalResponse>): _124.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _124.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_124.QueryVotesByVoterRequest>): _124.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _124.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_124.QueryVotesByVoterResponse>): _124.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _124.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_124.QueryGroupsByMemberRequest>): _124.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _124.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_124.QueryGroupsByMemberResponse>): _124.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _124.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryTallyResultRequest;
                fromPartial(object: Partial<_124.QueryTallyResultRequest>): _124.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _124.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryTallyResultResponse;
                fromPartial(object: Partial<_124.QueryTallyResultResponse>): _124.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _124.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsRequest;
                fromPartial(object: Partial<_124.QueryGroupsRequest>): _124.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _124.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.QueryGroupsResponse;
                fromPartial(object: Partial<_124.QueryGroupsResponse>): _124.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _122.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventCreateGroup;
                fromPartial(object: Partial<_122.EventCreateGroup>): _122.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _122.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventUpdateGroup;
                fromPartial(object: Partial<_122.EventUpdateGroup>): _122.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _122.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventCreateGroupPolicy;
                fromPartial(object: Partial<_122.EventCreateGroupPolicy>): _122.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _122.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_122.EventUpdateGroupPolicy>): _122.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _122.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventSubmitProposal;
                fromPartial(object: Partial<_122.EventSubmitProposal>): _122.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _122.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventWithdrawProposal;
                fromPartial(object: Partial<_122.EventWithdrawProposal>): _122.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _122.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventVote;
                fromPartial(object: Partial<_122.EventVote>): _122.EventVote;
            };
            EventExec: {
                encode(message: _122.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventExec;
                fromPartial(object: Partial<_122.EventExec>): _122.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _122.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventLeaveGroup;
                fromPartial(object: Partial<_122.EventLeaveGroup>): _122.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _122.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.EventProposalPruned;
                fromPartial(object: Partial<_122.EventProposalPruned>): _122.EventProposalPruned;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _127.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _127.Module;
                    fromPartial(object: Partial<_127.Module>): _127.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _253.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                inflation(request?: _130.QueryInflationRequest): Promise<_130.QueryInflationResponse>;
                annualProvisions(request?: _130.QueryAnnualProvisionsRequest): Promise<_130.QueryAnnualProvisionsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _131.MsgUpdateParams): {
                        typeUrl: string;
                        value: _131.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _131.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    }) => _131.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _131.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.MsgUpdateParams;
                fromPartial(object: Partial<_131.MsgUpdateParams>): _131.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _131.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _131.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_131.MsgUpdateParamsResponse>): _131.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _130.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _130.QueryParamsRequest;
                fromPartial(_: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _130.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryParamsResponse;
                fromPartial(object: Partial<_130.QueryParamsResponse>): _130.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _130.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _130.QueryInflationRequest;
                fromPartial(_: Partial<_130.QueryInflationRequest>): _130.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _130.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryInflationResponse;
                fromPartial(object: Partial<_130.QueryInflationResponse>): _130.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _130.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _130.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_130.QueryAnnualProvisionsRequest>): _130.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _130.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_130.QueryAnnualProvisionsResponse>): _130.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _129.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Minter;
                fromPartial(object: Partial<_129.Minter>): _129.Minter;
            };
            Params: {
                encode(message: _129.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _129.Params;
                fromPartial(object: Partial<_129.Params>): _129.Params;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _133.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _133.Module;
                    fromPartial(_: Partial<_133.Module>): _133.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _273.MsgClientImpl;
            QueryClientImpl: typeof _254.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _137.QueryBalanceRequest): Promise<_137.QueryBalanceResponse>;
                owner(request: _137.QueryOwnerRequest): Promise<_137.QueryOwnerResponse>;
                supply(request: _137.QuerySupplyRequest): Promise<_137.QuerySupplyResponse>;
                nFTs(request: _137.QueryNFTsRequest): Promise<_137.QueryNFTsResponse>;
                nFT(request: _137.QueryNFTRequest): Promise<_137.QueryNFTResponse>;
                class(request: _137.QueryClassRequest): Promise<_137.QueryClassResponse>;
                classes(request?: _137.QueryClassesRequest): Promise<_137.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _138.MsgSend) => {
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
                    }) => _138.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _138.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.MsgSend;
                fromPartial(object: Partial<_138.MsgSend>): _138.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _138.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.MsgSendResponse;
                fromPartial(_: Partial<_138.MsgSendResponse>): _138.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _137.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryBalanceRequest;
                fromPartial(object: Partial<_137.QueryBalanceRequest>): _137.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _137.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryBalanceResponse;
                fromPartial(object: Partial<_137.QueryBalanceResponse>): _137.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _137.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryOwnerRequest;
                fromPartial(object: Partial<_137.QueryOwnerRequest>): _137.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _137.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryOwnerResponse;
                fromPartial(object: Partial<_137.QueryOwnerResponse>): _137.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _137.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QuerySupplyRequest;
                fromPartial(object: Partial<_137.QuerySupplyRequest>): _137.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _137.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QuerySupplyResponse;
                fromPartial(object: Partial<_137.QuerySupplyResponse>): _137.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _137.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryNFTsRequest;
                fromPartial(object: Partial<_137.QueryNFTsRequest>): _137.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _137.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryNFTsResponse;
                fromPartial(object: Partial<_137.QueryNFTsResponse>): _137.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _137.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryNFTRequest;
                fromPartial(object: Partial<_137.QueryNFTRequest>): _137.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _137.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryNFTResponse;
                fromPartial(object: Partial<_137.QueryNFTResponse>): _137.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _137.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryClassRequest;
                fromPartial(object: Partial<_137.QueryClassRequest>): _137.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _137.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryClassResponse;
                fromPartial(object: Partial<_137.QueryClassResponse>): _137.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _137.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryClassesRequest;
                fromPartial(object: Partial<_137.QueryClassesRequest>): _137.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _137.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.QueryClassesResponse;
                fromPartial(object: Partial<_137.QueryClassesResponse>): _137.QueryClassesResponse;
            };
            Class: {
                encode(message: _136.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.Class;
                fromPartial(object: Partial<_136.Class>): _136.Class;
            };
            NFT: {
                encode(message: _136.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.NFT;
                fromPartial(object: Partial<_136.NFT>): _136.NFT;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.GenesisState;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
            };
            Entry: {
                encode(message: _135.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.Entry;
                fromPartial(object: Partial<_135.Entry>): _135.Entry;
            };
            EventSend: {
                encode(message: _134.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.EventSend;
                fromPartial(object: Partial<_134.EventSend>): _134.EventSend;
            };
            EventMint: {
                encode(message: _134.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.EventMint;
                fromPartial(object: Partial<_134.EventMint>): _134.EventMint;
            };
            EventBurn: {
                encode(message: _134.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.EventBurn;
                fromPartial(object: Partial<_134.EventBurn>): _134.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _139.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _139.Module;
                    fromPartial(_: Partial<_139.Module>): _139.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _255.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _140.GetRequest): Promise<_140.GetResponse>;
                    list(request: _140.ListRequest): Promise<_140.ListResponse>;
                };
                GetRequest: {
                    encode(message: _140.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.GetRequest;
                    fromPartial(object: Partial<_140.GetRequest>): _140.GetRequest;
                };
                GetResponse: {
                    encode(message: _140.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.GetResponse;
                    fromPartial(object: Partial<_140.GetResponse>): _140.GetResponse;
                };
                ListRequest: {
                    encode(message: _140.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.ListRequest;
                    fromPartial(object: Partial<_140.ListRequest>): _140.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _140.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.ListRequest_Prefix;
                    fromPartial(object: Partial<_140.ListRequest_Prefix>): _140.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _140.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.ListRequest_Range;
                    fromPartial(object: Partial<_140.ListRequest_Range>): _140.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _140.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.ListResponse;
                    fromPartial(object: Partial<_140.ListResponse>): _140.ListResponse;
                };
                IndexValue: {
                    encode(message: _140.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _140.IndexValue;
                    fromPartial(object: Partial<_140.IndexValue>): _140.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _141.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.TableDescriptor;
                fromPartial(object: Partial<_141.TableDescriptor>): _141.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _141.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_141.PrimaryKeyDescriptor>): _141.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _141.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_141.SecondaryIndexDescriptor>): _141.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _141.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.SingletonDescriptor;
                fromPartial(object: Partial<_141.SingletonDescriptor>): _141.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _142.StorageType;
            storageTypeToJSON(object: _142.StorageType): string;
            StorageType: typeof _142.StorageType;
            StorageTypeSDKType: typeof _142.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _142.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor>): _142.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _142.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor_FileEntry>): _142.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _143.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _143.Module;
                    fromPartial(_: Partial<_143.Module>): _143.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                subspaces(request?: _145.QuerySubspacesRequest): Promise<_145.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _145.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryParamsRequest;
                fromPartial(object: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryParamsResponse;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _145.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _145.QuerySubspacesRequest;
                fromPartial(_: Partial<_145.QuerySubspacesRequest>): _145.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _145.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QuerySubspacesResponse;
                fromPartial(object: Partial<_145.QuerySubspacesResponse>): _145.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _145.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.Subspace;
                fromPartial(object: Partial<_145.Subspace>): _145.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _144.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.ParameterChangeProposal;
                fromPartial(object: Partial<_144.ParameterChangeProposal>): _144.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _144.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.ParamChange;
                fromPartial(object: Partial<_144.ParamChange>): _144.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _147.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _147.FileDescriptorsRequest;
                fromPartial(_: Partial<_147.FileDescriptorsRequest>): _147.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _147.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.FileDescriptorsResponse;
                fromPartial(object: Partial<_147.FileDescriptorsResponse>): _147.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _148.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.Module;
                    fromPartial(object: Partial<_148.Module>): _148.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                signingInfo(request: _150.QuerySigningInfoRequest): Promise<_150.QuerySigningInfoResponse>;
                signingInfos(request?: _150.QuerySigningInfosRequest): Promise<_150.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _152.MsgUnjail): {
                        typeUrl: string;
                        value: _152.MsgUnjail;
                    };
                    updateParams(value: _152.MsgUpdateParams): {
                        typeUrl: string;
                        value: _152.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _152.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _152.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _152.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    }) => _152.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _152.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.MsgUnjail;
                fromPartial(object: Partial<_152.MsgUnjail>): _152.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _152.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _152.MsgUnjailResponse;
                fromPartial(_: Partial<_152.MsgUnjailResponse>): _152.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _152.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.MsgUpdateParams;
                fromPartial(object: Partial<_152.MsgUpdateParams>): _152.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _152.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _152.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_152.MsgUpdateParamsResponse>): _152.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _151.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.ValidatorSigningInfo;
                fromPartial(object: Partial<_151.ValidatorSigningInfo>): _151.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.Params;
                fromPartial(object: Partial<_151.Params>): _151.Params;
            };
            QueryParamsRequest: {
                encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _150.QueryParamsRequest;
                fromPartial(_: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.QueryParamsResponse;
                fromPartial(object: Partial<_150.QueryParamsResponse>): _150.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _150.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.QuerySigningInfoRequest;
                fromPartial(object: Partial<_150.QuerySigningInfoRequest>): _150.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _150.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.QuerySigningInfoResponse;
                fromPartial(object: Partial<_150.QuerySigningInfoResponse>): _150.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _150.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.QuerySigningInfosRequest;
                fromPartial(object: Partial<_150.QuerySigningInfosRequest>): _150.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _150.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.QuerySigningInfosResponse;
                fromPartial(object: Partial<_150.QuerySigningInfosResponse>): _150.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.GenesisState;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
            };
            SigningInfo: {
                encode(message: _149.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.SigningInfo;
                fromPartial(object: Partial<_149.SigningInfo>): _149.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _149.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.ValidatorMissedBlocks;
                fromPartial(object: Partial<_149.ValidatorMissedBlocks>): _149.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _149.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.MissedBlock;
                fromPartial(object: Partial<_149.MissedBlock>): _149.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _153.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.Module;
                    fromPartial(object: Partial<_153.Module>): _153.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _156.QueryValidatorsRequest): Promise<_156.QueryValidatorsResponse>;
                validator(request: _156.QueryValidatorRequest): Promise<_156.QueryValidatorResponse>;
                validatorDelegations(request: _156.QueryValidatorDelegationsRequest): Promise<_156.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _156.QueryValidatorUnbondingDelegationsRequest): Promise<_156.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _156.QueryDelegationRequest): Promise<_156.QueryDelegationResponse>;
                unbondingDelegation(request: _156.QueryUnbondingDelegationRequest): Promise<_156.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _156.QueryDelegatorDelegationsRequest): Promise<_156.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _156.QueryDelegatorUnbondingDelegationsRequest): Promise<_156.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _156.QueryRedelegationsRequest): Promise<_156.QueryRedelegationsResponse>;
                delegatorValidators(request: _156.QueryDelegatorValidatorsRequest): Promise<_156.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _156.QueryDelegatorValidatorRequest): Promise<_156.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _156.QueryHistoricalInfoRequest): Promise<_156.QueryHistoricalInfoResponse>;
                pool(request?: _156.QueryPoolRequest): Promise<_156.QueryPoolResponse>;
                params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _158.MsgCreateValidator): {
                        typeUrl: string;
                        value: _158.MsgCreateValidator;
                    };
                    editValidator(value: _158.MsgEditValidator): {
                        typeUrl: string;
                        value: _158.MsgEditValidator;
                    };
                    delegate(value: _158.MsgDelegate): {
                        typeUrl: string;
                        value: _158.MsgDelegate;
                    };
                    beginRedelegate(value: _158.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _158.MsgBeginRedelegate;
                    };
                    undelegate(value: _158.MsgUndelegate): {
                        typeUrl: string;
                        value: _158.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _158.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _158.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _158.MsgUpdateParams): {
                        typeUrl: string;
                        value: _158.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _158.MsgCreateValidator) => {
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
                    }) => _158.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _158.MsgEditValidator) => {
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
                    }) => _158.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _158.MsgDelegate) => {
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
                    }) => _158.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _158.MsgBeginRedelegate) => {
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
                    }) => _158.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _158.MsgUndelegate) => {
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
                    }) => _158.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _158.MsgCancelUnbondingDelegation) => {
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
                    }) => _158.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _158.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    }) => _158.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _158.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgCreateValidator;
                fromPartial(object: Partial<_158.MsgCreateValidator>): _158.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _158.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_158.MsgCreateValidatorResponse>): _158.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _158.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgEditValidator;
                fromPartial(object: Partial<_158.MsgEditValidator>): _158.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _158.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgEditValidatorResponse;
                fromPartial(_: Partial<_158.MsgEditValidatorResponse>): _158.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _158.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgDelegate;
                fromPartial(object: Partial<_158.MsgDelegate>): _158.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _158.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgDelegateResponse;
                fromPartial(_: Partial<_158.MsgDelegateResponse>): _158.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _158.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgBeginRedelegate;
                fromPartial(object: Partial<_158.MsgBeginRedelegate>): _158.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _158.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_158.MsgBeginRedelegateResponse>): _158.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _158.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgUndelegate;
                fromPartial(object: Partial<_158.MsgUndelegate>): _158.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _158.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgUndelegateResponse;
                fromPartial(object: Partial<_158.MsgUndelegateResponse>): _158.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _158.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_158.MsgCancelUnbondingDelegation>): _158.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _158.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_158.MsgCancelUnbondingDelegationResponse>): _158.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _158.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgUpdateParams;
                fromPartial(object: Partial<_158.MsgUpdateParams>): _158.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _158.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_158.MsgUpdateParamsResponse>): _158.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _157.BondStatus;
            bondStatusToJSON(object: _157.BondStatus): string;
            infractionFromJSON(object: any): _157.Infraction;
            infractionToJSON(object: _157.Infraction): string;
            BondStatus: typeof _157.BondStatus;
            BondStatusSDKType: typeof _157.BondStatus;
            Infraction: typeof _157.Infraction;
            InfractionSDKType: typeof _157.Infraction;
            HistoricalInfo: {
                encode(message: _157.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.HistoricalInfo;
                fromPartial(object: Partial<_157.HistoricalInfo>): _157.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _157.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.CommissionRates;
                fromPartial(object: Partial<_157.CommissionRates>): _157.CommissionRates;
            };
            Commission: {
                encode(message: _157.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Commission;
                fromPartial(object: Partial<_157.Commission>): _157.Commission;
            };
            Description: {
                encode(message: _157.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Description;
                fromPartial(object: Partial<_157.Description>): _157.Description;
            };
            Validator: {
                encode(message: _157.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Validator;
                fromPartial(object: Partial<_157.Validator>): _157.Validator;
            };
            ValAddresses: {
                encode(message: _157.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.ValAddresses;
                fromPartial(object: Partial<_157.ValAddresses>): _157.ValAddresses;
            };
            DVPair: {
                encode(message: _157.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.DVPair;
                fromPartial(object: Partial<_157.DVPair>): _157.DVPair;
            };
            DVPairs: {
                encode(message: _157.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.DVPairs;
                fromPartial(object: Partial<_157.DVPairs>): _157.DVPairs;
            };
            DVVTriplet: {
                encode(message: _157.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.DVVTriplet;
                fromPartial(object: Partial<_157.DVVTriplet>): _157.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _157.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.DVVTriplets;
                fromPartial(object: Partial<_157.DVVTriplets>): _157.DVVTriplets;
            };
            Delegation: {
                encode(message: _157.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Delegation;
                fromPartial(object: Partial<_157.Delegation>): _157.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _157.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.UnbondingDelegation;
                fromPartial(object: Partial<_157.UnbondingDelegation>): _157.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _157.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.UnbondingDelegationEntry;
                fromPartial(object: Partial<_157.UnbondingDelegationEntry>): _157.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _157.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.RedelegationEntry;
                fromPartial(object: Partial<_157.RedelegationEntry>): _157.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _157.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Redelegation;
                fromPartial(object: Partial<_157.Redelegation>): _157.Redelegation;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Params;
                fromPartial(object: Partial<_157.Params>): _157.Params;
            };
            DelegationResponse: {
                encode(message: _157.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.DelegationResponse;
                fromPartial(object: Partial<_157.DelegationResponse>): _157.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _157.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.RedelegationEntryResponse;
                fromPartial(object: Partial<_157.RedelegationEntryResponse>): _157.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _157.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.RedelegationResponse;
                fromPartial(object: Partial<_157.RedelegationResponse>): _157.RedelegationResponse;
            };
            Pool: {
                encode(message: _157.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.Pool;
                fromPartial(object: Partial<_157.Pool>): _157.Pool;
            };
            ValidatorUpdates: {
                encode(message: _157.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.ValidatorUpdates;
                fromPartial(object: Partial<_157.ValidatorUpdates>): _157.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _156.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorsRequest;
                fromPartial(object: Partial<_156.QueryValidatorsRequest>): _156.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _156.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorsResponse;
                fromPartial(object: Partial<_156.QueryValidatorsResponse>): _156.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _156.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorRequest;
                fromPartial(object: Partial<_156.QueryValidatorRequest>): _156.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _156.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorResponse;
                fromPartial(object: Partial<_156.QueryValidatorResponse>): _156.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _156.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_156.QueryValidatorDelegationsRequest>): _156.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _156.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_156.QueryValidatorDelegationsResponse>): _156.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _156.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_156.QueryValidatorUnbondingDelegationsRequest>): _156.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _156.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_156.QueryValidatorUnbondingDelegationsResponse>): _156.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _156.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegationRequest;
                fromPartial(object: Partial<_156.QueryDelegationRequest>): _156.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _156.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegationResponse;
                fromPartial(object: Partial<_156.QueryDelegationResponse>): _156.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _156.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_156.QueryUnbondingDelegationRequest>): _156.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _156.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_156.QueryUnbondingDelegationResponse>): _156.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _156.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorDelegationsRequest>): _156.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _156.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorDelegationsResponse>): _156.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _156.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorUnbondingDelegationsRequest>): _156.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _156.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorUnbondingDelegationsResponse>): _156.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _156.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryRedelegationsRequest;
                fromPartial(object: Partial<_156.QueryRedelegationsRequest>): _156.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _156.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryRedelegationsResponse;
                fromPartial(object: Partial<_156.QueryRedelegationsResponse>): _156.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _156.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorsRequest>): _156.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _156.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorsResponse>): _156.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _156.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorRequest>): _156.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _156.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_156.QueryDelegatorValidatorResponse>): _156.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _156.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_156.QueryHistoricalInfoRequest>): _156.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _156.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_156.QueryHistoricalInfoResponse>): _156.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _156.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _156.QueryPoolRequest;
                fromPartial(_: Partial<_156.QueryPoolRequest>): _156.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _156.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryPoolResponse;
                fromPartial(object: Partial<_156.QueryPoolResponse>): _156.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _156.QueryParamsRequest;
                fromPartial(_: Partial<_156.QueryParamsRequest>): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.QueryParamsResponse;
                fromPartial(object: Partial<_156.QueryParamsResponse>): _156.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.GenesisState;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _155.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.LastValidatorPower;
                fromPartial(object: Partial<_155.LastValidatorPower>): _155.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _154.AuthorizationType;
            authorizationTypeToJSON(object: _154.AuthorizationType): string;
            AuthorizationType: typeof _154.AuthorizationType;
            AuthorizationTypeSDKType: typeof _154.AuthorizationType;
            StakeAuthorization: {
                encode(message: _154.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.StakeAuthorization;
                fromPartial(object: Partial<_154.StakeAuthorization>): _154.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _154.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.StakeAuthorization_Validators;
                fromPartial(object: Partial<_154.StakeAuthorization_Validators>): _154.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _159.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.Config;
                    fromPartial(object: Partial<_159.Config>): _159.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _160.SignMode;
                signModeToJSON(object: _160.SignMode): string;
                SignMode: typeof _160.SignMode;
                SignModeSDKType: typeof _160.SignMode;
                SignatureDescriptors: {
                    encode(message: _160.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureDescriptors;
                    fromPartial(object: Partial<_160.SignatureDescriptors>): _160.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _160.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureDescriptor;
                    fromPartial(object: Partial<_160.SignatureDescriptor>): _160.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _160.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data>): _160.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _160.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data_Single>): _160.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _160.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_160.SignatureDescriptor_Data_Multi>): _160.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _259.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _161.SimulateRequest): Promise<_161.SimulateResponse>;
                getTx(request: _161.GetTxRequest): Promise<_161.GetTxResponse>;
                broadcastTx(request: _161.BroadcastTxRequest): Promise<_161.BroadcastTxResponse>;
                getTxsEvent(request: _161.GetTxsEventRequest): Promise<_161.GetTxsEventResponse>;
                getBlockWithTxs(request: _161.GetBlockWithTxsRequest): Promise<_161.GetBlockWithTxsResponse>;
                txDecode(request: _161.TxDecodeRequest): Promise<_161.TxDecodeResponse>;
                txEncode(request: _161.TxEncodeRequest): Promise<_161.TxEncodeResponse>;
                txEncodeAmino(request: _161.TxEncodeAminoRequest): Promise<_161.TxEncodeAminoResponse>;
                txDecodeAmino(request: _161.TxDecodeAminoRequest): Promise<_161.TxDecodeAminoResponse>;
            };
            Tx: {
                encode(message: _162.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.Tx;
                fromPartial(object: Partial<_162.Tx>): _162.Tx;
            };
            TxRaw: {
                encode(message: _162.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.TxRaw;
                fromPartial(object: Partial<_162.TxRaw>): _162.TxRaw;
            };
            SignDoc: {
                encode(message: _162.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.SignDoc;
                fromPartial(object: Partial<_162.SignDoc>): _162.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _162.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.SignDocDirectAux;
                fromPartial(object: Partial<_162.SignDocDirectAux>): _162.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _162.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.TxBody;
                fromPartial(object: Partial<_162.TxBody>): _162.TxBody;
            };
            AuthInfo: {
                encode(message: _162.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.AuthInfo;
                fromPartial(object: Partial<_162.AuthInfo>): _162.AuthInfo;
            };
            SignerInfo: {
                encode(message: _162.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.SignerInfo;
                fromPartial(object: Partial<_162.SignerInfo>): _162.SignerInfo;
            };
            ModeInfo: {
                encode(message: _162.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.ModeInfo;
                fromPartial(object: Partial<_162.ModeInfo>): _162.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _162.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.ModeInfo_Single;
                fromPartial(object: Partial<_162.ModeInfo_Single>): _162.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _162.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.ModeInfo_Multi;
                fromPartial(object: Partial<_162.ModeInfo_Multi>): _162.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _162.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.Fee;
                fromPartial(object: Partial<_162.Fee>): _162.Fee;
            };
            Tip: {
                encode(message: _162.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.Tip;
                fromPartial(object: Partial<_162.Tip>): _162.Tip;
            };
            AuxSignerData: {
                encode(message: _162.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.AuxSignerData;
                fromPartial(object: Partial<_162.AuxSignerData>): _162.AuxSignerData;
            };
            orderByFromJSON(object: any): _161.OrderBy;
            orderByToJSON(object: _161.OrderBy): string;
            broadcastModeFromJSON(object: any): _161.BroadcastMode;
            broadcastModeToJSON(object: _161.BroadcastMode): string;
            OrderBy: typeof _161.OrderBy;
            OrderBySDKType: typeof _161.OrderBy;
            BroadcastMode: typeof _161.BroadcastMode;
            BroadcastModeSDKType: typeof _161.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _161.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetTxsEventRequest;
                fromPartial(object: Partial<_161.GetTxsEventRequest>): _161.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _161.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetTxsEventResponse;
                fromPartial(object: Partial<_161.GetTxsEventResponse>): _161.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _161.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.BroadcastTxRequest;
                fromPartial(object: Partial<_161.BroadcastTxRequest>): _161.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _161.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.BroadcastTxResponse;
                fromPartial(object: Partial<_161.BroadcastTxResponse>): _161.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _161.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.SimulateRequest;
                fromPartial(object: Partial<_161.SimulateRequest>): _161.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _161.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.SimulateResponse;
                fromPartial(object: Partial<_161.SimulateResponse>): _161.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _161.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetTxRequest;
                fromPartial(object: Partial<_161.GetTxRequest>): _161.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _161.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetTxResponse;
                fromPartial(object: Partial<_161.GetTxResponse>): _161.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _161.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_161.GetBlockWithTxsRequest>): _161.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _161.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_161.GetBlockWithTxsResponse>): _161.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _161.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxDecodeRequest;
                fromPartial(object: Partial<_161.TxDecodeRequest>): _161.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _161.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxDecodeResponse;
                fromPartial(object: Partial<_161.TxDecodeResponse>): _161.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _161.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxEncodeRequest;
                fromPartial(object: Partial<_161.TxEncodeRequest>): _161.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _161.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxEncodeResponse;
                fromPartial(object: Partial<_161.TxEncodeResponse>): _161.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _161.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxEncodeAminoRequest;
                fromPartial(object: Partial<_161.TxEncodeAminoRequest>): _161.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _161.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxEncodeAminoResponse;
                fromPartial(object: Partial<_161.TxEncodeAminoResponse>): _161.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _161.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxDecodeAminoRequest;
                fromPartial(object: Partial<_161.TxDecodeAminoRequest>): _161.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _161.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.TxDecodeAminoResponse;
                fromPartial(object: Partial<_161.TxDecodeAminoResponse>): _161.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _163.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.Module;
                    fromPartial(object: Partial<_163.Module>): _163.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _164.QueryCurrentPlanRequest): Promise<_164.QueryCurrentPlanResponse>;
                appliedPlan(request: _164.QueryAppliedPlanRequest): Promise<_164.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _164.QueryUpgradedConsensusStateRequest): Promise<_164.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _164.QueryModuleVersionsRequest): Promise<_164.QueryModuleVersionsResponse>;
                authority(request?: _164.QueryAuthorityRequest): Promise<_164.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _165.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _165.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _165.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _165.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _165.MsgSoftwareUpgrade) => {
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
                    }) => _165.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _165.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _165.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _166.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.Plan;
                fromPartial(object: Partial<_166.Plan>): _166.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _166.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_166.SoftwareUpgradeProposal>): _166.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _166.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_166.CancelSoftwareUpgradeProposal>): _166.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _166.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.ModuleVersion;
                fromPartial(object: Partial<_166.ModuleVersion>): _166.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _165.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_165.MsgSoftwareUpgrade>): _165.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _165.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _165.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_165.MsgSoftwareUpgradeResponse>): _165.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _165.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.MsgCancelUpgrade;
                fromPartial(object: Partial<_165.MsgCancelUpgrade>): _165.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _165.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _165.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_165.MsgCancelUpgradeResponse>): _165.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _164.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _164.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_164.QueryCurrentPlanRequest>): _164.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _164.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_164.QueryCurrentPlanResponse>): _164.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _164.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_164.QueryAppliedPlanRequest>): _164.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _164.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_164.QueryAppliedPlanResponse>): _164.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _164.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_164.QueryUpgradedConsensusStateRequest>): _164.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _164.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_164.QueryUpgradedConsensusStateResponse>): _164.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _164.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_164.QueryModuleVersionsRequest>): _164.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _164.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_164.QueryModuleVersionsResponse>): _164.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _164.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _164.QueryAuthorityRequest;
                fromPartial(_: Partial<_164.QueryAuthorityRequest>): _164.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _164.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryAuthorityResponse;
                fromPartial(object: Partial<_164.QueryAuthorityResponse>): _164.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _167.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _167.Module;
                    fromPartial(_: Partial<_167.Module>): _167.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _168.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _168.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _168.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _168.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _168.MsgCreateVestingAccount) => {
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
                    }) => _168.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _168.MsgCreatePermanentLockedAccount) => {
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
                    }) => _168.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _168.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _168.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _169.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.BaseVestingAccount;
                fromPartial(object: Partial<_169.BaseVestingAccount>): _169.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _169.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.ContinuousVestingAccount;
                fromPartial(object: Partial<_169.ContinuousVestingAccount>): _169.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _169.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.DelayedVestingAccount;
                fromPartial(object: Partial<_169.DelayedVestingAccount>): _169.DelayedVestingAccount;
            };
            Period: {
                encode(message: _169.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.Period;
                fromPartial(object: Partial<_169.Period>): _169.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _169.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.PeriodicVestingAccount;
                fromPartial(object: Partial<_169.PeriodicVestingAccount>): _169.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _169.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.PermanentLockedAccount;
                fromPartial(object: Partial<_169.PermanentLockedAccount>): _169.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _168.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.MsgCreateVestingAccount;
                fromPartial(object: Partial<_168.MsgCreateVestingAccount>): _168.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _168.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_168.MsgCreateVestingAccountResponse>): _168.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _168.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_168.MsgCreatePermanentLockedAccount>): _168.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _168.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_168.MsgCreatePermanentLockedAccountResponse>): _168.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _168.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_168.MsgCreatePeriodicVestingAccount>): _168.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _168.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_168.MsgCreatePeriodicVestingAccountResponse>): _168.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _261.MsgClientImpl;
                };
                authz: {
                    v1beta1: _262.MsgClientImpl;
                };
                bank: {
                    v1beta1: _263.MsgClientImpl;
                };
                consensus: {
                    v1: _264.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _265.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _266.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _267.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _268.MsgClientImpl;
                };
                gov: {
                    v1: _269.MsgClientImpl;
                    v1beta1: _270.MsgClientImpl;
                };
                group: {
                    v1: _271.MsgClientImpl;
                };
                mint: {
                    v1beta1: _272.MsgClientImpl;
                };
                nft: {
                    v1beta1: _273.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _274.MsgClientImpl;
                };
                staking: {
                    v1beta1: _275.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _276.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _277.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
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
                        accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                        granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                        granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                        allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                        spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                        supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                        denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                        sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _70.ConfigRequest): Promise<_70.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _77.GetNodeInfoRequest): Promise<_77.GetNodeInfoResponse>;
                            getSyncing(request?: _77.GetSyncingRequest): Promise<_77.GetSyncingResponse>;
                            getLatestBlock(request?: _77.GetLatestBlockRequest): Promise<_77.GetLatestBlockResponse>;
                            getBlockByHeight(request: _77.GetBlockByHeightRequest): Promise<_77.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _77.GetLatestValidatorSetRequest): Promise<_77.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _77.GetValidatorSetByHeightRequest): Promise<_77.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _77.ABCIQueryRequest): Promise<_77.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        validatorDistributionInfo(request: _98.QueryValidatorDistributionInfoRequest): Promise<_98.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _98.QueryValidatorOutstandingRewardsRequest): Promise<_98.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _98.QueryValidatorCommissionRequest): Promise<_98.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _98.QueryValidatorSlashesRequest): Promise<_98.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _98.QueryDelegationRewardsRequest): Promise<_98.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _98.QueryDelegationTotalRewardsRequest): Promise<_98.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _98.QueryDelegatorWithdrawAddressRequest): Promise<_98.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _98.QueryCommunityPoolRequest): Promise<_98.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _103.QueryEvidenceRequest): Promise<_103.QueryEvidenceResponse>;
                        allEvidence(request?: _103.QueryAllEvidenceRequest): Promise<_103.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _108.QueryAllowanceRequest): Promise<_108.QueryAllowanceResponse>;
                        allowances(request: _108.QueryAllowancesRequest): Promise<_108.QueryAllowancesResponse>;
                        allowancesByGranter(request: _108.QueryAllowancesByGranterRequest): Promise<_108.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _115.QueryProposalRequest): Promise<_115.QueryProposalResponse>;
                        proposals(request: _115.QueryProposalsRequest): Promise<_115.QueryProposalsResponse>;
                        vote(request: _115.QueryVoteRequest): Promise<_115.QueryVoteResponse>;
                        votes(request: _115.QueryVotesRequest): Promise<_115.QueryVotesResponse>;
                        params(request: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                        deposit(request: _115.QueryDepositRequest): Promise<_115.QueryDepositResponse>;
                        deposits(request: _115.QueryDepositsRequest): Promise<_115.QueryDepositsResponse>;
                        tallyResult(request: _115.QueryTallyResultRequest): Promise<_115.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                        proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                        vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                        votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                        deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                        tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _124.QueryGroupInfoRequest): Promise<_124.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _124.QueryGroupPolicyInfoRequest): Promise<_124.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _124.QueryGroupMembersRequest): Promise<_124.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _124.QueryGroupsByAdminRequest): Promise<_124.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _124.QueryGroupPoliciesByGroupRequest): Promise<_124.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _124.QueryGroupPoliciesByAdminRequest): Promise<_124.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _124.QueryProposalsByGroupPolicyRequest): Promise<_124.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _124.QueryVoteByProposalVoterRequest): Promise<_124.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _124.QueryVotesByProposalRequest): Promise<_124.QueryVotesByProposalResponse>;
                        votesByVoter(request: _124.QueryVotesByVoterRequest): Promise<_124.QueryVotesByVoterResponse>;
                        groupsByMember(request: _124.QueryGroupsByMemberRequest): Promise<_124.QueryGroupsByMemberResponse>;
                        tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
                        groups(request?: _124.QueryGroupsRequest): Promise<_124.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                        inflation(request?: _130.QueryInflationRequest): Promise<_130.QueryInflationResponse>;
                        annualProvisions(request?: _130.QueryAnnualProvisionsRequest): Promise<_130.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _137.QueryBalanceRequest): Promise<_137.QueryBalanceResponse>;
                        owner(request: _137.QueryOwnerRequest): Promise<_137.QueryOwnerResponse>;
                        supply(request: _137.QuerySupplyRequest): Promise<_137.QuerySupplyResponse>;
                        nFTs(request: _137.QueryNFTsRequest): Promise<_137.QueryNFTsResponse>;
                        nFT(request: _137.QueryNFTRequest): Promise<_137.QueryNFTResponse>;
                        class(request: _137.QueryClassRequest): Promise<_137.QueryClassResponse>;
                        classes(request?: _137.QueryClassesRequest): Promise<_137.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _140.GetRequest): Promise<_140.GetResponse>;
                            list(request: _140.ListRequest): Promise<_140.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                        subspaces(request?: _145.QuerySubspacesRequest): Promise<_145.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                        signingInfo(request: _150.QuerySigningInfoRequest): Promise<_150.QuerySigningInfoResponse>;
                        signingInfos(request?: _150.QuerySigningInfosRequest): Promise<_150.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _156.QueryValidatorsRequest): Promise<_156.QueryValidatorsResponse>;
                        validator(request: _156.QueryValidatorRequest): Promise<_156.QueryValidatorResponse>;
                        validatorDelegations(request: _156.QueryValidatorDelegationsRequest): Promise<_156.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _156.QueryValidatorUnbondingDelegationsRequest): Promise<_156.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _156.QueryDelegationRequest): Promise<_156.QueryDelegationResponse>;
                        unbondingDelegation(request: _156.QueryUnbondingDelegationRequest): Promise<_156.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _156.QueryDelegatorDelegationsRequest): Promise<_156.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _156.QueryDelegatorUnbondingDelegationsRequest): Promise<_156.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _156.QueryRedelegationsRequest): Promise<_156.QueryRedelegationsResponse>;
                        delegatorValidators(request: _156.QueryDelegatorValidatorsRequest): Promise<_156.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _156.QueryDelegatorValidatorRequest): Promise<_156.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _156.QueryHistoricalInfoRequest): Promise<_156.QueryHistoricalInfoResponse>;
                        pool(request?: _156.QueryPoolRequest): Promise<_156.QueryPoolResponse>;
                        params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _161.SimulateRequest): Promise<_161.SimulateResponse>;
                        getTx(request: _161.GetTxRequest): Promise<_161.GetTxResponse>;
                        broadcastTx(request: _161.BroadcastTxRequest): Promise<_161.BroadcastTxResponse>;
                        getTxsEvent(request: _161.GetTxsEventRequest): Promise<_161.GetTxsEventResponse>;
                        getBlockWithTxs(request: _161.GetBlockWithTxsRequest): Promise<_161.GetBlockWithTxsResponse>;
                        txDecode(request: _161.TxDecodeRequest): Promise<_161.TxDecodeResponse>;
                        txEncode(request: _161.TxEncodeRequest): Promise<_161.TxEncodeResponse>;
                        txEncodeAmino(request: _161.TxEncodeAminoRequest): Promise<_161.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _161.TxDecodeAminoRequest): Promise<_161.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _164.QueryCurrentPlanRequest): Promise<_164.QueryCurrentPlanResponse>;
                        appliedPlan(request: _164.QueryAppliedPlanRequest): Promise<_164.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _164.QueryUpgradedConsensusStateRequest): Promise<_164.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _164.QueryModuleVersionsRequest): Promise<_164.QueryModuleVersionsResponse>;
                        authority(request?: _164.QueryAuthorityRequest): Promise<_164.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
