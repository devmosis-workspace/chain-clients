import * as _52 from "./app/runtime/v1alpha1/module";
import * as _53 from "./app/v1alpha1/config";
import * as _54 from "./app/v1alpha1/module";
import * as _55 from "./app/v1alpha1/query";
import * as _56 from "./auth/module/v1/module";
import * as _57 from "./auth/v1beta1/auth";
import * as _58 from "./auth/v1beta1/genesis";
import * as _59 from "./auth/v1beta1/query";
import * as _60 from "./auth/v1beta1/tx";
import * as _61 from "./authz/module/v1/module";
import * as _62 from "./authz/v1beta1/authz";
import * as _63 from "./authz/v1beta1/event";
import * as _64 from "./authz/v1beta1/genesis";
import * as _65 from "./authz/v1beta1/query";
import * as _66 from "./authz/v1beta1/tx";
import * as _67 from "./autocli/v1/options";
import * as _68 from "./autocli/v1/query";
import * as _69 from "./bank/module/v1/module";
import * as _70 from "./bank/v1beta1/authz";
import * as _71 from "./bank/v1beta1/bank";
import * as _72 from "./bank/v1beta1/events";
import * as _73 from "./bank/v1beta1/genesis";
import * as _74 from "./bank/v1beta1/query";
import * as _75 from "./bank/v1beta1/tx";
import * as _76 from "./base/abci/v1beta1/abci";
import * as _77 from "./base/kv/v1beta1/kv";
import * as _78 from "./base/node/v1beta1/query";
import * as _79 from "./base/query/v1beta1/pagination";
import * as _80 from "./base/reflection/v1beta1/reflection";
import * as _81 from "./base/reflection/v2alpha1/reflection";
import * as _82 from "./base/snapshots/v1beta1/snapshot";
import * as _83 from "./base/store/v1beta1/commit_info";
import * as _84 from "./base/store/v1beta1/listening";
import * as _85 from "./base/tendermint/v1beta1/query";
import * as _86 from "./base/tendermint/v1beta1/types";
import * as _87 from "./base/v1beta1/coin";
import * as _88 from "./capability/module/v1/module";
import * as _89 from "./capability/v1beta1/capability";
import * as _90 from "./capability/v1beta1/genesis";
import * as _91 from "./consensus/module/v1/module";
import * as _92 from "./consensus/v1/query";
import * as _93 from "./consensus/v1/tx";
import * as _94 from "./crisis/module/v1/module";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/hd/v1/hd";
import * as _99 from "./crypto/keyring/v1/record";
import * as _100 from "./crypto/multisig/keys";
import * as _101 from "./crypto/secp256k1/keys";
import * as _102 from "./crypto/secp256r1/keys";
import * as _103 from "./distribution/module/v1/module";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./evidence/module/v1/module";
import * as _109 from "./evidence/v1beta1/evidence";
import * as _110 from "./evidence/v1beta1/genesis";
import * as _111 from "./evidence/v1beta1/query";
import * as _112 from "./evidence/v1beta1/tx";
import * as _113 from "./feegrant/module/v1/module";
import * as _114 from "./feegrant/v1beta1/feegrant";
import * as _115 from "./feegrant/v1beta1/genesis";
import * as _116 from "./feegrant/v1beta1/query";
import * as _117 from "./feegrant/v1beta1/tx";
import * as _118 from "./genutil/module/v1/module";
import * as _119 from "./genutil/v1beta1/genesis";
import * as _120 from "./gov/module/v1/module";
import * as _121 from "./gov/v1/genesis";
import * as _122 from "./gov/v1/gov";
import * as _123 from "./gov/v1/query";
import * as _124 from "./gov/v1/tx";
import * as _125 from "./gov/v1beta1/genesis";
import * as _126 from "./gov/v1beta1/gov";
import * as _127 from "./gov/v1beta1/query";
import * as _128 from "./gov/v1beta1/tx";
import * as _129 from "./group/module/v1/module";
import * as _130 from "./group/v1/events";
import * as _131 from "./group/v1/genesis";
import * as _132 from "./group/v1/query";
import * as _133 from "./group/v1/tx";
import * as _134 from "./group/v1/types";
import * as _135 from "./mint/module/v1/module";
import * as _136 from "./mint/v1beta1/genesis";
import * as _137 from "./mint/v1beta1/mint";
import * as _138 from "./mint/v1beta1/query";
import * as _139 from "./mint/v1beta1/tx";
import * as _141 from "./nft/module/v1/module";
import * as _142 from "./nft/v1beta1/event";
import * as _143 from "./nft/v1beta1/genesis";
import * as _144 from "./nft/v1beta1/nft";
import * as _145 from "./nft/v1beta1/query";
import * as _146 from "./nft/v1beta1/tx";
import * as _147 from "./orm/module/v1alpha1/module";
import * as _148 from "./orm/query/v1alpha1/query";
import * as _149 from "./orm/v1/orm";
import * as _150 from "./orm/v1alpha1/schema";
import * as _151 from "./params/module/v1/module";
import * as _152 from "./params/v1beta1/params";
import * as _153 from "./params/v1beta1/query";
import * as _155 from "./reflection/v1/reflection";
import * as _156 from "./slashing/module/v1/module";
import * as _157 from "./slashing/v1beta1/genesis";
import * as _158 from "./slashing/v1beta1/query";
import * as _159 from "./slashing/v1beta1/slashing";
import * as _160 from "./slashing/v1beta1/tx";
import * as _161 from "./staking/module/v1/module";
import * as _162 from "./staking/v1beta1/authz";
import * as _163 from "./staking/v1beta1/genesis";
import * as _164 from "./staking/v1beta1/query";
import * as _165 from "./staking/v1beta1/staking";
import * as _166 from "./staking/v1beta1/tx";
import * as _167 from "./tx/config/v1/config";
import * as _168 from "./tx/signing/v1beta1/signing";
import * as _169 from "./tx/v1beta1/service";
import * as _170 from "./tx/v1beta1/tx";
import * as _171 from "./upgrade/module/v1/module";
import * as _172 from "./upgrade/v1beta1/query";
import * as _173 from "./upgrade/v1beta1/tx";
import * as _174 from "./upgrade/v1beta1/upgrade";
import * as _175 from "./vesting/module/v1/module";
import * as _176 from "./vesting/v1beta1/tx";
import * as _177 from "./vesting/v1beta1/vesting";
import * as _277 from "./auth/v1beta1/query.lcd";
import * as _278 from "./authz/v1beta1/query.lcd";
import * as _279 from "./bank/v1beta1/query.lcd";
import * as _280 from "./base/node/v1beta1/query.lcd";
import * as _281 from "./base/tendermint/v1beta1/query.lcd";
import * as _282 from "./consensus/v1/query.lcd";
import * as _283 from "./distribution/v1beta1/query.lcd";
import * as _284 from "./evidence/v1beta1/query.lcd";
import * as _285 from "./feegrant/v1beta1/query.lcd";
import * as _286 from "./gov/v1/query.lcd";
import * as _287 from "./gov/v1beta1/query.lcd";
import * as _288 from "./group/v1/query.lcd";
import * as _289 from "./mint/v1beta1/query.lcd";
import * as _290 from "./nft/v1beta1/query.lcd";
import * as _291 from "./params/v1beta1/query.lcd";
import * as _292 from "./slashing/v1beta1/query.lcd";
import * as _293 from "./staking/v1beta1/query.lcd";
import * as _294 from "./tx/v1beta1/service.lcd";
import * as _295 from "./upgrade/v1beta1/query.lcd";
import * as _296 from "./app/v1alpha1/query.rpc.Query";
import * as _297 from "./auth/v1beta1/query.rpc.Query";
import * as _298 from "./authz/v1beta1/query.rpc.Query";
import * as _299 from "./autocli/v1/query.rpc.Query";
import * as _300 from "./bank/v1beta1/query.rpc.Query";
import * as _301 from "./base/node/v1beta1/query.rpc.Service";
import * as _302 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _303 from "./consensus/v1/query.rpc.Query";
import * as _304 from "./distribution/v1beta1/query.rpc.Query";
import * as _305 from "./evidence/v1beta1/query.rpc.Query";
import * as _306 from "./feegrant/v1beta1/query.rpc.Query";
import * as _307 from "./gov/v1/query.rpc.Query";
import * as _308 from "./gov/v1beta1/query.rpc.Query";
import * as _309 from "./group/v1/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./nft/v1beta1/query.rpc.Query";
import * as _312 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _313 from "./params/v1beta1/query.rpc.Query";
import * as _314 from "./slashing/v1beta1/query.rpc.Query";
import * as _315 from "./staking/v1beta1/query.rpc.Query";
import * as _316 from "./tx/v1beta1/service.rpc.Service";
import * as _317 from "./upgrade/v1beta1/query.rpc.Query";
import * as _318 from "./auth/v1beta1/tx.rpc.msg";
import * as _319 from "./authz/v1beta1/tx.rpc.msg";
import * as _320 from "./bank/v1beta1/tx.rpc.msg";
import * as _321 from "./consensus/v1/tx.rpc.msg";
import * as _322 from "./crisis/v1beta1/tx.rpc.msg";
import * as _323 from "./distribution/v1beta1/tx.rpc.msg";
import * as _324 from "./evidence/v1beta1/tx.rpc.msg";
import * as _325 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _326 from "./gov/v1/tx.rpc.msg";
import * as _327 from "./gov/v1beta1/tx.rpc.msg";
import * as _328 from "./group/v1/tx.rpc.msg";
import * as _329 from "./mint/v1beta1/tx.rpc.msg";
import * as _330 from "./nft/v1beta1/tx.rpc.msg";
import * as _331 from "./slashing/v1beta1/tx.rpc.msg";
import * as _332 from "./staking/v1beta1/tx.rpc.msg";
import * as _333 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _334 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _52.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                };
                StoreKeyConfig: {
                    encode(message: _52.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.StoreKeyConfig;
                    fromPartial(object: Partial<_52.StoreKeyConfig>): _52.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _55.QueryConfigRequest): Promise<_55.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _55.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.QueryConfigRequest;
                fromPartial(_: Partial<_55.QueryConfigRequest>): _55.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _55.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryConfigResponse;
                fromPartial(object: Partial<_55.QueryConfigResponse>): _55.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _54.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ModuleDescriptor;
                fromPartial(object: Partial<_54.ModuleDescriptor>): _54.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _54.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.PackageReference;
                fromPartial(object: Partial<_54.PackageReference>): _54.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _54.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MigrateFromInfo;
                fromPartial(object: Partial<_54.MigrateFromInfo>): _54.MigrateFromInfo;
            };
            Config: {
                encode(message: _53.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Config;
                fromPartial(object: Partial<_53.Config>): _53.Config;
            };
            ModuleConfig: {
                encode(message: _53.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ModuleConfig;
                fromPartial(object: Partial<_53.ModuleConfig>): _53.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _53.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GolangBinding;
                fromPartial(object: Partial<_53.GolangBinding>): _53.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _56.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.Module;
                    fromPartial(object: Partial<_56.Module>): _56.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _56.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _56.ModuleAccountPermission;
                    fromPartial(object: Partial<_56.ModuleAccountPermission>): _56.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _59.QueryAccountsRequest): Promise<_59.QueryAccountsResponse>;
                account(request: _59.QueryAccountRequest): Promise<_59.QueryAccountResponse>;
                accountAddressByID(request: _59.QueryAccountAddressByIDRequest): Promise<_59.QueryAccountAddressByIDResponse>;
                params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                moduleAccounts(request?: _59.QueryModuleAccountsRequest): Promise<_59.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _59.QueryModuleAccountByNameRequest): Promise<_59.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _59.Bech32PrefixRequest): Promise<_59.Bech32PrefixResponse>;
                addressBytesToString(request: _59.AddressBytesToStringRequest): Promise<_59.AddressBytesToStringResponse>;
                addressStringToBytes(request: _59.AddressStringToBytesRequest): Promise<_59.AddressStringToBytesResponse>;
                accountInfo(request: _59.QueryAccountInfoRequest): Promise<_59.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _277.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _60.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _60.MsgUpdateParams): {
                        typeUrl: string;
                        value: _60.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _60.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _60.MsgUpdateParams): {
                        typeUrl: string;
                        value: _60.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _60.MsgUpdateParams) => {
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
                    }) => _60.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _60.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgUpdateParams;
                fromPartial(object: Partial<_60.MsgUpdateParams>): _60.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _60.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_60.MsgUpdateParamsResponse>): _60.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _59.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountsRequest;
                fromPartial(object: Partial<_59.QueryAccountsRequest>): _59.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _59.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountsResponse;
                fromPartial(object: Partial<_59.QueryAccountsResponse>): _59.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _59.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountRequest;
                fromPartial(object: Partial<_59.QueryAccountRequest>): _59.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _59.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountResponse;
                fromPartial(object: Partial<_59.QueryAccountResponse>): _59.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.QueryParamsRequest;
                fromPartial(_: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryParamsResponse;
                fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _59.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_59.QueryModuleAccountsRequest>): _59.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _59.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_59.QueryModuleAccountsResponse>): _59.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _59.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_59.QueryModuleAccountByNameRequest>): _59.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _59.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_59.QueryModuleAccountByNameResponse>): _59.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _59.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.Bech32PrefixRequest;
                fromPartial(_: Partial<_59.Bech32PrefixRequest>): _59.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _59.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Bech32PrefixResponse;
                fromPartial(object: Partial<_59.Bech32PrefixResponse>): _59.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _59.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.AddressBytesToStringRequest;
                fromPartial(object: Partial<_59.AddressBytesToStringRequest>): _59.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _59.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.AddressBytesToStringResponse;
                fromPartial(object: Partial<_59.AddressBytesToStringResponse>): _59.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _59.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.AddressStringToBytesRequest;
                fromPartial(object: Partial<_59.AddressStringToBytesRequest>): _59.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _59.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.AddressStringToBytesResponse;
                fromPartial(object: Partial<_59.AddressStringToBytesResponse>): _59.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _59.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_59.QueryAccountAddressByIDRequest>): _59.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _59.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_59.QueryAccountAddressByIDResponse>): _59.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _59.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountInfoRequest;
                fromPartial(object: Partial<_59.QueryAccountInfoRequest>): _59.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _59.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAccountInfoResponse;
                fromPartial(object: Partial<_59.QueryAccountInfoResponse>): _59.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
            BaseAccount: {
                encode(message: _57.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.BaseAccount;
                fromPartial(object: Partial<_57.BaseAccount>): _57.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _57.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ModuleAccount;
                fromPartial(object: Partial<_57.ModuleAccount>): _57.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _57.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ModuleCredential;
                fromPartial(object: Partial<_57.ModuleCredential>): _57.ModuleCredential;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _61.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _61.Module;
                    fromPartial(_: Partial<_61.Module>): _61.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _298.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _65.QueryGrantsRequest): Promise<_65.QueryGrantsResponse>;
                granterGrants(request: _65.QueryGranterGrantsRequest): Promise<_65.QueryGranterGrantsResponse>;
                granteeGrants(request: _65.QueryGranteeGrantsRequest): Promise<_65.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _278.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _66.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _66.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _66.MsgGrant): {
                        typeUrl: string;
                        value: _66.MsgGrant;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    revoke(value: _66.MsgRevoke): {
                        typeUrl: string;
                        value: _66.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _66.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _66.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _66.MsgGrant): {
                        typeUrl: string;
                        value: _66.MsgGrant;
                    };
                    exec(value: _66.MsgExec): {
                        typeUrl: string;
                        value: _66.MsgExec;
                    };
                    revoke(value: _66.MsgRevoke): {
                        typeUrl: string;
                        value: _66.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _66.MsgGrant) => {
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
                    }) => _66.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _66.MsgExec) => {
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
                    }) => _66.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _66.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _66.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _66.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgGrant;
                fromPartial(object: Partial<_66.MsgGrant>): _66.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _66.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgExecResponse;
                fromPartial(object: Partial<_66.MsgExecResponse>): _66.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _66.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgExec;
                fromPartial(object: Partial<_66.MsgExec>): _66.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _66.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgGrantResponse;
                fromPartial(_: Partial<_66.MsgGrantResponse>): _66.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _66.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.MsgRevoke;
                fromPartial(object: Partial<_66.MsgRevoke>): _66.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _66.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.MsgRevokeResponse;
                fromPartial(_: Partial<_66.MsgRevokeResponse>): _66.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _65.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGrantsRequest;
                fromPartial(object: Partial<_65.QueryGrantsRequest>): _65.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _65.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGrantsResponse;
                fromPartial(object: Partial<_65.QueryGrantsResponse>): _65.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _65.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_65.QueryGranterGrantsRequest>): _65.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _65.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_65.QueryGranterGrantsResponse>): _65.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _65.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_65.QueryGranteeGrantsRequest>): _65.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _65.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_65.QueryGranteeGrantsResponse>): _65.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
            EventGrant: {
                encode(message: _63.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.EventGrant;
                fromPartial(object: Partial<_63.EventGrant>): _63.EventGrant;
            };
            EventRevoke: {
                encode(message: _63.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.EventRevoke;
                fromPartial(object: Partial<_63.EventRevoke>): _63.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _62.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.GenericAuthorization;
                fromPartial(object: Partial<_62.GenericAuthorization>): _62.GenericAuthorization;
            };
            Grant: {
                encode(message: _62.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Grant;
                fromPartial(object: Partial<_62.Grant>): _62.Grant;
            };
            GrantAuthorization: {
                encode(message: _62.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.GrantAuthorization;
                fromPartial(object: Partial<_62.GrantAuthorization>): _62.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _62.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.GrantQueueItem;
                fromPartial(object: Partial<_62.GrantQueueItem>): _62.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _68.AppOptionsRequest): Promise<_68.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _68.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _68.AppOptionsRequest;
                fromPartial(_: Partial<_68.AppOptionsRequest>): _68.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _68.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_68.AppOptionsResponse_ModuleOptionsEntry>): _68.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _68.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.AppOptionsResponse;
                fromPartial(object: Partial<_68.AppOptionsResponse>): _68.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _67.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ModuleOptions;
                fromPartial(object: Partial<_67.ModuleOptions>): _67.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _67.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_67.ServiceCommandDescriptor_SubCommandsEntry>): _67.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _67.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.ServiceCommandDescriptor;
                fromPartial(object: Partial<_67.ServiceCommandDescriptor>): _67.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _67.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_67.RpcCommandOptions_FlagOptionsEntry>): _67.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _67.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.RpcCommandOptions;
                fromPartial(object: Partial<_67.RpcCommandOptions>): _67.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _67.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.FlagOptions;
                fromPartial(object: Partial<_67.FlagOptions>): _67.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _67.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.PositionalArgDescriptor;
                fromPartial(object: Partial<_67.PositionalArgDescriptor>): _67.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _69.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _69.Module;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                allBalances(request: _74.QueryAllBalancesRequest): Promise<_74.QueryAllBalancesResponse>;
                spendableBalances(request: _74.QuerySpendableBalancesRequest): Promise<_74.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _74.QuerySpendableBalanceByDenomRequest): Promise<_74.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _74.QueryTotalSupplyRequest): Promise<_74.QueryTotalSupplyResponse>;
                supplyOf(request: _74.QuerySupplyOfRequest): Promise<_74.QuerySupplyOfResponse>;
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                denomMetadata(request: _74.QueryDenomMetadataRequest): Promise<_74.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _74.QueryDenomsMetadataRequest): Promise<_74.QueryDenomsMetadataResponse>;
                denomOwners(request: _74.QueryDenomOwnersRequest): Promise<_74.QueryDenomOwnersResponse>;
                sendEnabled(request: _74.QuerySendEnabledRequest): Promise<_74.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _279.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _75.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _75.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                    multiSend(value: _75.MsgMultiSend): {
                        typeUrl: string;
                        value: _75.MsgMultiSend;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    setSendEnabled(value: _75.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _75.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _75.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _75.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                    multiSend(value: _75.MsgMultiSend): {
                        typeUrl: string;
                        value: _75.MsgMultiSend;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    setSendEnabled(value: _75.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _75.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _75.MsgSend) => {
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
                    }) => _75.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _75.MsgMultiSend) => {
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
                    }) => _75.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _75.MsgUpdateParams) => {
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
                    }) => _75.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _75.MsgSetSendEnabled) => {
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
                    }) => _75.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _75.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgSend;
                fromPartial(object: Partial<_75.MsgSend>): _75.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _75.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgSendResponse;
                fromPartial(_: Partial<_75.MsgSendResponse>): _75.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _75.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgMultiSend;
                fromPartial(object: Partial<_75.MsgMultiSend>): _75.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _75.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgMultiSendResponse;
                fromPartial(_: Partial<_75.MsgMultiSendResponse>): _75.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _75.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgUpdateParams;
                fromPartial(object: Partial<_75.MsgUpdateParams>): _75.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _75.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_75.MsgUpdateParamsResponse>): _75.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _75.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgSetSendEnabled;
                fromPartial(object: Partial<_75.MsgSetSendEnabled>): _75.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _75.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_75.MsgSetSendEnabledResponse>): _75.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _74.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryBalanceRequest;
                fromPartial(object: Partial<_74.QueryBalanceRequest>): _74.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _74.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryBalanceResponse;
                fromPartial(object: Partial<_74.QueryBalanceResponse>): _74.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _74.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllBalancesRequest;
                fromPartial(object: Partial<_74.QueryAllBalancesRequest>): _74.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _74.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllBalancesResponse;
                fromPartial(object: Partial<_74.QueryAllBalancesResponse>): _74.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _74.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_74.QuerySpendableBalancesRequest>): _74.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _74.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_74.QuerySpendableBalancesResponse>): _74.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _74.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_74.QuerySpendableBalanceByDenomRequest>): _74.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _74.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_74.QuerySpendableBalanceByDenomResponse>): _74.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _74.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_74.QueryTotalSupplyRequest>): _74.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _74.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_74.QueryTotalSupplyResponse>): _74.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _74.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySupplyOfRequest;
                fromPartial(object: Partial<_74.QuerySupplyOfRequest>): _74.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _74.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySupplyOfResponse;
                fromPartial(object: Partial<_74.QuerySupplyOfResponse>): _74.QuerySupplyOfResponse;
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
            QueryDenomsMetadataRequest: {
                encode(message: _74.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_74.QueryDenomsMetadataRequest>): _74.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _74.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_74.QueryDenomsMetadataResponse>): _74.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _74.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_74.QueryDenomMetadataRequest>): _74.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _74.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_74.QueryDenomMetadataResponse>): _74.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _74.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_74.QueryDenomOwnersRequest>): _74.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _74.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.DenomOwner;
                fromPartial(object: Partial<_74.DenomOwner>): _74.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _74.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_74.QueryDenomOwnersResponse>): _74.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _74.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySendEnabledRequest;
                fromPartial(object: Partial<_74.QuerySendEnabledRequest>): _74.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _74.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QuerySendEnabledResponse;
                fromPartial(object: Partial<_74.QuerySendEnabledResponse>): _74.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
            Balance: {
                encode(message: _73.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.Balance;
                fromPartial(object: Partial<_73.Balance>): _73.Balance;
            };
            EventSetBalances: {
                encode(message: _72.EventSetBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.EventSetBalances;
                fromPartial(object: Partial<_72.EventSetBalances>): _72.EventSetBalances;
            };
            BalanceUpdate: {
                encode(message: _72.BalanceUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.BalanceUpdate;
                fromPartial(object: Partial<_72.BalanceUpdate>): _72.BalanceUpdate;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
            };
            SendEnabled: {
                encode(message: _71.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.SendEnabled;
                fromPartial(object: Partial<_71.SendEnabled>): _71.SendEnabled;
            };
            Input: {
                encode(message: _71.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Input;
                fromPartial(object: Partial<_71.Input>): _71.Input;
            };
            Output: {
                encode(message: _71.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Output;
                fromPartial(object: Partial<_71.Output>): _71.Output;
            };
            Supply: {
                encode(message: _71.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Supply;
                fromPartial(object: Partial<_71.Supply>): _71.Supply;
            };
            DenomUnit: {
                encode(message: _71.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.DenomUnit;
                fromPartial(object: Partial<_71.DenomUnit>): _71.DenomUnit;
            };
            Metadata: {
                encode(message: _71.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Metadata;
                fromPartial(object: Partial<_71.Metadata>): _71.Metadata;
            };
            SendAuthorization: {
                encode(message: _70.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.SendAuthorization;
                fromPartial(object: Partial<_70.SendAuthorization>): _70.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _76.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.TxResponse;
                    fromPartial(object: Partial<_76.TxResponse>): _76.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _76.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.ABCIMessageLog;
                    fromPartial(object: Partial<_76.ABCIMessageLog>): _76.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _76.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.StringEvent;
                    fromPartial(object: Partial<_76.StringEvent>): _76.StringEvent;
                };
                Attribute: {
                    encode(message: _76.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.Attribute;
                    fromPartial(object: Partial<_76.Attribute>): _76.Attribute;
                };
                GasInfo: {
                    encode(message: _76.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.GasInfo;
                    fromPartial(object: Partial<_76.GasInfo>): _76.GasInfo;
                };
                Result: {
                    encode(message: _76.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.Result;
                    fromPartial(object: Partial<_76.Result>): _76.Result;
                };
                SimulationResponse: {
                    encode(message: _76.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.SimulationResponse;
                    fromPartial(object: Partial<_76.SimulationResponse>): _76.SimulationResponse;
                };
                MsgData: {
                    encode(message: _76.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.MsgData;
                    fromPartial(object: Partial<_76.MsgData>): _76.MsgData;
                };
                TxMsgData: {
                    encode(message: _76.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.TxMsgData;
                    fromPartial(object: Partial<_76.TxMsgData>): _76.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _76.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _76.SearchTxsResult;
                    fromPartial(object: Partial<_76.SearchTxsResult>): _76.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _77.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.Pairs;
                    fromPartial(object: Partial<_77.Pairs>): _77.Pairs;
                };
                Pair: {
                    encode(message: _77.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _77.Pair;
                    fromPartial(object: Partial<_77.Pair>): _77.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _301.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _78.ConfigRequest): Promise<_78.ConfigResponse>;
                };
                LCDQueryClient: typeof _280.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _78.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _78.ConfigRequest;
                    fromPartial(_: Partial<_78.ConfigRequest>): _78.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _78.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _78.ConfigResponse;
                    fromPartial(object: Partial<_78.ConfigResponse>): _78.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _79.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _79.PageRequest;
                    fromPartial(object: Partial<_79.PageRequest>): _79.PageRequest;
                };
                PageResponse: {
                    encode(message: _79.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _79.PageResponse;
                    fromPartial(object: Partial<_79.PageResponse>): _79.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _80.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _80.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_80.ListAllInterfacesRequest>): _80.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _80.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _80.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_80.ListAllInterfacesResponse>): _80.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _80.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _80.ListImplementationsRequest;
                    fromPartial(object: Partial<_80.ListImplementationsRequest>): _80.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _80.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _80.ListImplementationsResponse;
                    fromPartial(object: Partial<_80.ListImplementationsResponse>): _80.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _81.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.AppDescriptor;
                    fromPartial(object: Partial<_81.AppDescriptor>): _81.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _81.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.TxDescriptor;
                    fromPartial(object: Partial<_81.TxDescriptor>): _81.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _81.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.AuthnDescriptor;
                    fromPartial(object: Partial<_81.AuthnDescriptor>): _81.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _81.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.SigningModeDescriptor;
                    fromPartial(object: Partial<_81.SigningModeDescriptor>): _81.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _81.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.ChainDescriptor;
                    fromPartial(object: Partial<_81.ChainDescriptor>): _81.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _81.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.CodecDescriptor;
                    fromPartial(object: Partial<_81.CodecDescriptor>): _81.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _81.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.InterfaceDescriptor;
                    fromPartial(object: Partial<_81.InterfaceDescriptor>): _81.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _81.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_81.InterfaceImplementerDescriptor>): _81.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _81.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_81.InterfaceAcceptingMessageDescriptor>): _81.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _81.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.ConfigurationDescriptor;
                    fromPartial(object: Partial<_81.ConfigurationDescriptor>): _81.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _81.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.MsgDescriptor;
                    fromPartial(object: Partial<_81.MsgDescriptor>): _81.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _81.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_81.GetAuthnDescriptorRequest>): _81.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _81.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_81.GetAuthnDescriptorResponse>): _81.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _81.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_81.GetChainDescriptorRequest>): _81.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _81.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_81.GetChainDescriptorResponse>): _81.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _81.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_81.GetCodecDescriptorRequest>): _81.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _81.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_81.GetCodecDescriptorResponse>): _81.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _81.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_81.GetConfigurationDescriptorRequest>): _81.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _81.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_81.GetConfigurationDescriptorResponse>): _81.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _81.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_81.GetQueryServicesDescriptorRequest>): _81.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _81.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_81.GetQueryServicesDescriptorResponse>): _81.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _81.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _81.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_81.GetTxDescriptorRequest>): _81.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _81.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_81.GetTxDescriptorResponse>): _81.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _81.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.QueryServicesDescriptor;
                    fromPartial(object: Partial<_81.QueryServicesDescriptor>): _81.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _81.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.QueryServiceDescriptor;
                    fromPartial(object: Partial<_81.QueryServiceDescriptor>): _81.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _81.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _81.QueryMethodDescriptor;
                    fromPartial(object: Partial<_81.QueryMethodDescriptor>): _81.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _82.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Snapshot;
                    fromPartial(object: Partial<_82.Snapshot>): _82.Snapshot;
                };
                Metadata: {
                    encode(message: _82.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.Metadata;
                    fromPartial(object: Partial<_82.Metadata>): _82.Metadata;
                };
                SnapshotItem: {
                    encode(message: _82.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotItem;
                    fromPartial(object: Partial<_82.SnapshotItem>): _82.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _82.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotStoreItem;
                    fromPartial(object: Partial<_82.SnapshotStoreItem>): _82.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _82.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotIAVLItem;
                    fromPartial(object: Partial<_82.SnapshotIAVLItem>): _82.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _82.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_82.SnapshotExtensionMeta>): _82.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _82.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_82.SnapshotExtensionPayload>): _82.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _82.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotKVItem;
                    fromPartial(object: Partial<_82.SnapshotKVItem>): _82.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _82.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _82.SnapshotSchema;
                    fromPartial(object: Partial<_82.SnapshotSchema>): _82.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _84.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.StoreKVPair;
                    fromPartial(object: Partial<_84.StoreKVPair>): _84.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _84.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.BlockMetadata;
                    fromPartial(object: Partial<_84.BlockMetadata>): _84.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _84.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_84.BlockMetadata_DeliverTx>): _84.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _83.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.CommitInfo;
                    fromPartial(object: Partial<_83.CommitInfo>): _83.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _83.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.StoreInfo;
                    fromPartial(object: Partial<_83.StoreInfo>): _83.StoreInfo;
                };
                CommitID: {
                    encode(message: _83.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.CommitID;
                    fromPartial(object: Partial<_83.CommitID>): _83.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _302.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _85.GetNodeInfoRequest): Promise<_85.GetNodeInfoResponse>;
                    getSyncing(request?: _85.GetSyncingRequest): Promise<_85.GetSyncingResponse>;
                    getLatestBlock(request?: _85.GetLatestBlockRequest): Promise<_85.GetLatestBlockResponse>;
                    getBlockByHeight(request: _85.GetBlockByHeightRequest): Promise<_85.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _85.GetLatestValidatorSetRequest): Promise<_85.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _85.GetValidatorSetByHeightRequest): Promise<_85.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _85.ABCIQueryRequest): Promise<_85.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _281.LCDQueryClient;
                Block: {
                    encode(message: _86.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.Block;
                    fromPartial(object: Partial<_86.Block>): _86.Block;
                };
                Header: {
                    encode(message: _86.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _86.Header;
                    fromPartial(object: Partial<_86.Header>): _86.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _85.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_85.GetValidatorSetByHeightRequest>): _85.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _85.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_85.GetValidatorSetByHeightResponse>): _85.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _85.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_85.GetLatestValidatorSetRequest>): _85.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _85.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_85.GetLatestValidatorSetResponse>): _85.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.Validator;
                    fromPartial(object: Partial<_85.Validator>): _85.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _85.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_85.GetBlockByHeightRequest>): _85.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _85.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_85.GetBlockByHeightResponse>): _85.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _85.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _85.GetLatestBlockRequest;
                    fromPartial(_: Partial<_85.GetLatestBlockRequest>): _85.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _85.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetLatestBlockResponse;
                    fromPartial(object: Partial<_85.GetLatestBlockResponse>): _85.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _85.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _85.GetSyncingRequest;
                    fromPartial(_: Partial<_85.GetSyncingRequest>): _85.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _85.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetSyncingResponse;
                    fromPartial(object: Partial<_85.GetSyncingResponse>): _85.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _85.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _85.GetNodeInfoRequest;
                    fromPartial(_: Partial<_85.GetNodeInfoRequest>): _85.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _85.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.GetNodeInfoResponse;
                    fromPartial(object: Partial<_85.GetNodeInfoResponse>): _85.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _85.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.VersionInfo;
                    fromPartial(object: Partial<_85.VersionInfo>): _85.VersionInfo;
                };
                Module: {
                    encode(message: _85.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.Module;
                    fromPartial(object: Partial<_85.Module>): _85.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _85.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ABCIQueryRequest;
                    fromPartial(object: Partial<_85.ABCIQueryRequest>): _85.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _85.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ABCIQueryResponse;
                    fromPartial(object: Partial<_85.ABCIQueryResponse>): _85.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _85.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ProofOp;
                    fromPartial(object: Partial<_85.ProofOp>): _85.ProofOp;
                };
                ProofOps: {
                    encode(message: _85.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _85.ProofOps;
                    fromPartial(object: Partial<_85.ProofOps>): _85.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _87.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.Coin;
                fromPartial(object: Partial<_87.Coin>): _87.Coin;
            };
            DecCoin: {
                encode(message: _87.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.DecCoin;
                fromPartial(object: Partial<_87.DecCoin>): _87.DecCoin;
            };
            IntProto: {
                encode(message: _87.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.IntProto;
                fromPartial(object: Partial<_87.IntProto>): _87.IntProto;
            };
            DecProto: {
                encode(message: _87.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.DecProto;
                fromPartial(object: Partial<_87.DecProto>): _87.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _88.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.Module;
                    fromPartial(object: Partial<_88.Module>): _88.Module;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                encode(message: _90.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GenesisOwners;
                fromPartial(object: Partial<_90.GenesisOwners>): _90.GenesisOwners;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
            };
            Capability: {
                encode(message: _89.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Capability;
                fromPartial(object: Partial<_89.Capability>): _89.Capability;
            };
            Owner: {
                encode(message: _89.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.Owner;
                fromPartial(object: Partial<_89.Owner>): _89.Owner;
            };
            CapabilityOwners: {
                encode(message: _89.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.CapabilityOwners;
                fromPartial(object: Partial<_89.CapabilityOwners>): _89.CapabilityOwners;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _91.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Module;
                    fromPartial(object: Partial<_91.Module>): _91.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _93.MsgUpdateParams) => {
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
                    }) => _93.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _93.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.MsgUpdateParams;
                fromPartial(object: Partial<_93.MsgUpdateParams>): _93.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _93.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _93.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_93.MsgUpdateParamsResponse>): _93.MsgUpdateParamsResponse;
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
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _94.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.Module;
                    fromPartial(object: Partial<_94.Module>): _94.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
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
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constantFee }: _96.MsgUpdateParams) => {
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
                    }) => _96.MsgUpdateParams;
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
            MsgUpdateParams: {
                encode(message: _96.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.MsgUpdateParams;
                fromPartial(object: Partial<_96.MsgUpdateParams>): _96.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _96.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_96.MsgUpdateParamsResponse>): _96.MsgUpdateParamsResponse;
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
        namespace module {
            const v1: {
                Module: {
                    encode(message: _103.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.Module;
                    fromPartial(object: Partial<_103.Module>): _103.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                validatorDistributionInfo(request: _106.QueryValidatorDistributionInfoRequest): Promise<_106.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _107.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _107.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _107.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _107.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _107.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _107.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _107.MsgFundCommunityPool) => {
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
                    }) => _107.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _107.MsgUpdateParams) => {
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
                    }) => _107.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _107.MsgCommunityPoolSpend) => {
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
                    }) => _107.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _107.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_107.MsgSetWithdrawAddress>): _107.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _107.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_107.MsgSetWithdrawAddressResponse>): _107.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _107.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorReward>): _107.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _107.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorRewardResponse>): _107.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _107.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommission>): _107.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _107.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommissionResponse>): _107.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _107.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgFundCommunityPool;
                fromPartial(object: Partial<_107.MsgFundCommunityPool>): _107.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _107.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_107.MsgFundCommunityPoolResponse>): _107.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _107.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgUpdateParams;
                fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _107.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_107.MsgCommunityPoolSpend>): _107.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _107.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_107.MsgCommunityPoolSpendResponse>): _107.MsgCommunityPoolSpendResponse;
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
            QueryValidatorDistributionInfoRequest: {
                encode(message: _106.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoRequest>): _106.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _106.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoResponse>): _106.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _106.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsRequest>): _106.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _106.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsResponse>): _106.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _106.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_106.QueryValidatorCommissionRequest>): _106.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _106.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_106.QueryValidatorCommissionResponse>): _106.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _106.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_106.QueryValidatorSlashesRequest>): _106.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _106.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_106.QueryValidatorSlashesResponse>): _106.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _106.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationRewardsRequest>): _106.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _106.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationRewardsResponse>): _106.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _106.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsRequest>): _106.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _106.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsResponse>): _106.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _106.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsRequest>): _106.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _106.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsResponse>): _106.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _106.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressRequest>): _106.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _106.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressResponse>): _106.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _106.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _106.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_106.QueryCommunityPoolRequest>): _106.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _106.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_106.QueryCommunityPoolResponse>): _106.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _105.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_105.DelegatorWithdrawInfo>): _105.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _105.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewardsRecord>): _105.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _105.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommissionRecord>): _105.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _105.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewardsRecord>): _105.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _105.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorCurrentRewardsRecord>): _105.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _105.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_105.DelegatorStartingInfoRecord>): _105.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _105.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_105.ValidatorSlashEventRecord>): _105.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.Params;
                fromPartial(object: Partial<_104.Params>): _104.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _104.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewards>): _104.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _104.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorCurrentRewards;
                fromPartial(object: Partial<_104.ValidatorCurrentRewards>): _104.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _104.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommission>): _104.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _104.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewards>): _104.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _104.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorSlashEvent;
                fromPartial(object: Partial<_104.ValidatorSlashEvent>): _104.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _104.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.ValidatorSlashEvents;
                fromPartial(object: Partial<_104.ValidatorSlashEvents>): _104.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _104.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.FeePool;
                fromPartial(object: Partial<_104.FeePool>): _104.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _104.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposal>): _104.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _104.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DelegatorStartingInfo;
                fromPartial(object: Partial<_104.DelegatorStartingInfo>): _104.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _104.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DelegationDelegatorReward;
                fromPartial(object: Partial<_104.DelegationDelegatorReward>): _104.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _104.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposalWithDeposit>): _104.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _108.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _108.Module;
                    fromPartial(_: Partial<_108.Module>): _108.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _111.QueryEvidenceRequest): Promise<_111.QueryEvidenceResponse>;
                allEvidence(request?: _111.QueryAllEvidenceRequest): Promise<_111.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _112.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _112.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _112.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _112.MsgSubmitEvidence) => {
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
                    }) => _112.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _112.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.MsgSubmitEvidence;
                fromPartial(object: Partial<_112.MsgSubmitEvidence>): _112.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _112.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _112.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_112.MsgSubmitEvidenceResponse>): _112.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _111.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryEvidenceRequest;
                fromPartial(object: Partial<_111.QueryEvidenceRequest>): _111.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _111.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryEvidenceResponse;
                fromPartial(object: Partial<_111.QueryEvidenceResponse>): _111.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _111.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_111.QueryAllEvidenceRequest>): _111.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _111.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_111.QueryAllEvidenceResponse>): _111.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
            };
            Equivocation: {
                encode(message: _109.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _109.Equivocation;
                fromPartial(object: Partial<_109.Equivocation>): _109.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _113.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.Module;
                    fromPartial(_: Partial<_113.Module>): _113.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _116.QueryAllowanceRequest): Promise<_116.QueryAllowanceResponse>;
                allowances(request: _116.QueryAllowancesRequest): Promise<_116.QueryAllowancesResponse>;
                allowancesByGranter(request: _116.QueryAllowancesByGranterRequest): Promise<_116.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _117.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _117.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _117.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _117.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _117.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _117.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _117.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _117.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _117.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _117.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _117.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _117.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _117.MsgGrantAllowance) => {
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
                    }) => _117.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _117.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _117.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _117.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgGrantAllowance;
                fromPartial(object: Partial<_117.MsgGrantAllowance>): _117.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _117.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_117.MsgGrantAllowanceResponse>): _117.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _117.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.MsgRevokeAllowance;
                fromPartial(object: Partial<_117.MsgRevokeAllowance>): _117.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _117.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _117.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_117.MsgRevokeAllowanceResponse>): _117.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _116.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowanceRequest;
                fromPartial(object: Partial<_116.QueryAllowanceRequest>): _116.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _116.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowanceResponse;
                fromPartial(object: Partial<_116.QueryAllowanceResponse>): _116.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _116.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowancesRequest;
                fromPartial(object: Partial<_116.QueryAllowancesRequest>): _116.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _116.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowancesResponse;
                fromPartial(object: Partial<_116.QueryAllowancesResponse>): _116.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _116.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_116.QueryAllowancesByGranterRequest>): _116.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _116.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_116.QueryAllowancesByGranterResponse>): _116.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
            };
            BasicAllowance: {
                encode(message: _114.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.BasicAllowance;
                fromPartial(object: Partial<_114.BasicAllowance>): _114.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _114.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.PeriodicAllowance;
                fromPartial(object: Partial<_114.PeriodicAllowance>): _114.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _114.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.AllowedMsgAllowance;
                fromPartial(object: Partial<_114.AllowedMsgAllowance>): _114.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _114.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _114.Grant;
                fromPartial(object: Partial<_114.Grant>): _114.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _118.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.Module;
                    fromPartial(_: Partial<_118.Module>): _118.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.GenesisState;
                fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _120.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.Module;
                    fromPartial(object: Partial<_120.Module>): _120.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _123.QueryProposalRequest): Promise<_123.QueryProposalResponse>;
                proposals(request: _123.QueryProposalsRequest): Promise<_123.QueryProposalsResponse>;
                vote(request: _123.QueryVoteRequest): Promise<_123.QueryVoteResponse>;
                votes(request: _123.QueryVotesRequest): Promise<_123.QueryVotesResponse>;
                params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                deposit(request: _123.QueryDepositRequest): Promise<_123.QueryDepositResponse>;
                deposits(request: _123.QueryDepositsRequest): Promise<_123.QueryDepositsResponse>;
                tallyResult(request: _123.QueryTallyResultRequest): Promise<_123.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _124.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _124.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _124.MsgExecLegacyContent;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _124.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _124.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _124.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _124.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _124.MsgExecLegacyContent;
                    };
                    vote(value: _124.MsgVote): {
                        typeUrl: string;
                        value: _124.MsgVote;
                    };
                    voteWeighted(value: _124.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _124.MsgVoteWeighted;
                    };
                    deposit(value: _124.MsgDeposit): {
                        typeUrl: string;
                        value: _124.MsgDeposit;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _124.MsgSubmitProposal) => {
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
                    }) => _124.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _124.MsgExecLegacyContent) => {
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
                    }) => _124.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _124.MsgVote) => {
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
                    }) => _124.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _124.MsgVoteWeighted) => {
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
                    }) => _124.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _124.MsgDeposit) => {
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
                    }) => _124.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _124.MsgUpdateParams) => {
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
                    }) => _124.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _124.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgSubmitProposal;
                fromPartial(object: Partial<_124.MsgSubmitProposal>): _124.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _124.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_124.MsgSubmitProposalResponse>): _124.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _124.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgExecLegacyContent;
                fromPartial(object: Partial<_124.MsgExecLegacyContent>): _124.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _124.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_124.MsgExecLegacyContentResponse>): _124.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _124.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgVote;
                fromPartial(object: Partial<_124.MsgVote>): _124.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _124.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.MsgVoteResponse;
                fromPartial(_: Partial<_124.MsgVoteResponse>): _124.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _124.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgVoteWeighted;
                fromPartial(object: Partial<_124.MsgVoteWeighted>): _124.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _124.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_124.MsgVoteWeightedResponse>): _124.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _124.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgDeposit;
                fromPartial(object: Partial<_124.MsgDeposit>): _124.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _124.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.MsgDepositResponse;
                fromPartial(_: Partial<_124.MsgDepositResponse>): _124.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _124.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _124.MsgUpdateParams;
                fromPartial(object: Partial<_124.MsgUpdateParams>): _124.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _124.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _124.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_124.MsgUpdateParamsResponse>): _124.MsgUpdateParamsResponse;
            };
            QueryProposalRequest: {
                encode(message: _123.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryProposalRequest;
                fromPartial(object: Partial<_123.QueryProposalRequest>): _123.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _123.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryProposalResponse;
                fromPartial(object: Partial<_123.QueryProposalResponse>): _123.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _123.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryProposalsRequest;
                fromPartial(object: Partial<_123.QueryProposalsRequest>): _123.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _123.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryProposalsResponse;
                fromPartial(object: Partial<_123.QueryProposalsResponse>): _123.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _123.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryVoteRequest;
                fromPartial(object: Partial<_123.QueryVoteRequest>): _123.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _123.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryVoteResponse;
                fromPartial(object: Partial<_123.QueryVoteResponse>): _123.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _123.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryVotesRequest;
                fromPartial(object: Partial<_123.QueryVotesRequest>): _123.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _123.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryVotesResponse;
                fromPartial(object: Partial<_123.QueryVotesResponse>): _123.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _123.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryParamsRequest;
                fromPartial(object: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _123.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryParamsResponse;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _123.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryDepositRequest;
                fromPartial(object: Partial<_123.QueryDepositRequest>): _123.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _123.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryDepositResponse;
                fromPartial(object: Partial<_123.QueryDepositResponse>): _123.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _123.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryDepositsRequest;
                fromPartial(object: Partial<_123.QueryDepositsRequest>): _123.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _123.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryDepositsResponse;
                fromPartial(object: Partial<_123.QueryDepositsResponse>): _123.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _123.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryTallyResultRequest;
                fromPartial(object: Partial<_123.QueryTallyResultRequest>): _123.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _123.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.QueryTallyResultResponse;
                fromPartial(object: Partial<_123.QueryTallyResultResponse>): _123.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _122.VoteOption;
            voteOptionToJSON(object: _122.VoteOption): string;
            proposalStatusFromJSON(object: any): _122.ProposalStatus;
            proposalStatusToJSON(object: _122.ProposalStatus): string;
            VoteOption: typeof _122.VoteOption;
            VoteOptionSDKType: typeof _122.VoteOption;
            ProposalStatus: typeof _122.ProposalStatus;
            ProposalStatusSDKType: typeof _122.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _122.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.WeightedVoteOption;
                fromPartial(object: Partial<_122.WeightedVoteOption>): _122.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _122.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.Deposit;
                fromPartial(object: Partial<_122.Deposit>): _122.Deposit;
            };
            Proposal: {
                encode(message: _122.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.Proposal;
                fromPartial(object: Partial<_122.Proposal>): _122.Proposal;
            };
            TallyResult: {
                encode(message: _122.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.TallyResult;
                fromPartial(object: Partial<_122.TallyResult>): _122.TallyResult;
            };
            Vote: {
                encode(message: _122.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.Vote;
                fromPartial(object: Partial<_122.Vote>): _122.Vote;
            };
            DepositParams: {
                encode(message: _122.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.DepositParams;
                fromPartial(object: Partial<_122.DepositParams>): _122.DepositParams;
            };
            VotingParams: {
                encode(message: _122.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.VotingParams;
                fromPartial(object: Partial<_122.VotingParams>): _122.VotingParams;
            };
            TallyParams: {
                encode(message: _122.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.TallyParams;
                fromPartial(object: Partial<_122.TallyParams>): _122.TallyParams;
            };
            Params: {
                encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.Params;
                fromPartial(object: Partial<_122.Params>): _122.Params;
            };
            GenesisState: {
                encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _127.QueryProposalRequest): Promise<_127.QueryProposalResponse>;
                proposals(request: _127.QueryProposalsRequest): Promise<_127.QueryProposalsResponse>;
                vote(request: _127.QueryVoteRequest): Promise<_127.QueryVoteResponse>;
                votes(request: _127.QueryVotesRequest): Promise<_127.QueryVotesResponse>;
                params(request: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                deposit(request: _127.QueryDepositRequest): Promise<_127.QueryDepositResponse>;
                deposits(request: _127.QueryDepositsRequest): Promise<_127.QueryDepositsResponse>;
                tallyResult(request: _127.QueryTallyResultRequest): Promise<_127.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _128.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _128.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _128.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _128.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _128.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _128.MsgSubmitProposal;
                    };
                    vote(value: _128.MsgVote): {
                        typeUrl: string;
                        value: _128.MsgVote;
                    };
                    voteWeighted(value: _128.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _128.MsgVoteWeighted;
                    };
                    deposit(value: _128.MsgDeposit): {
                        typeUrl: string;
                        value: _128.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _128.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _128.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _128.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _128.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _128.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _128.MsgSubmitProposal;
                    };
                    vote(value: _128.MsgVote): {
                        typeUrl: string;
                        value: _128.MsgVote;
                    };
                    voteWeighted(value: _128.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _128.MsgVoteWeighted;
                    };
                    deposit(value: _128.MsgDeposit): {
                        typeUrl: string;
                        value: _128.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _128.MsgSubmitProposal) => {
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
                    }) => _128.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _128.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _128.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _128.MsgVoteWeighted) => {
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
                    }) => _128.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _128.MsgDeposit) => {
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
                    }) => _128.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _128.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgSubmitProposal;
                fromPartial(object: Partial<_128.MsgSubmitProposal>): _128.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _128.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_128.MsgSubmitProposalResponse>): _128.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _128.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgVote;
                fromPartial(object: Partial<_128.MsgVote>): _128.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _128.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgVoteResponse;
                fromPartial(_: Partial<_128.MsgVoteResponse>): _128.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _128.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgVoteWeighted;
                fromPartial(object: Partial<_128.MsgVoteWeighted>): _128.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _128.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_128.MsgVoteWeightedResponse>): _128.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _128.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.MsgDeposit;
                fromPartial(object: Partial<_128.MsgDeposit>): _128.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _128.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _128.MsgDepositResponse;
                fromPartial(_: Partial<_128.MsgDepositResponse>): _128.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _127.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryProposalRequest;
                fromPartial(object: Partial<_127.QueryProposalRequest>): _127.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _127.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryProposalResponse;
                fromPartial(object: Partial<_127.QueryProposalResponse>): _127.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _127.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryProposalsRequest;
                fromPartial(object: Partial<_127.QueryProposalsRequest>): _127.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _127.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryProposalsResponse;
                fromPartial(object: Partial<_127.QueryProposalsResponse>): _127.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _127.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryVoteRequest;
                fromPartial(object: Partial<_127.QueryVoteRequest>): _127.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _127.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryVoteResponse;
                fromPartial(object: Partial<_127.QueryVoteResponse>): _127.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _127.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryVotesRequest;
                fromPartial(object: Partial<_127.QueryVotesRequest>): _127.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _127.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryVotesResponse;
                fromPartial(object: Partial<_127.QueryVotesResponse>): _127.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _127.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryParamsRequest;
                fromPartial(object: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _127.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _127.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryDepositRequest;
                fromPartial(object: Partial<_127.QueryDepositRequest>): _127.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _127.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryDepositResponse;
                fromPartial(object: Partial<_127.QueryDepositResponse>): _127.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _127.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryDepositsRequest;
                fromPartial(object: Partial<_127.QueryDepositsRequest>): _127.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _127.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryDepositsResponse;
                fromPartial(object: Partial<_127.QueryDepositsResponse>): _127.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _127.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryTallyResultRequest;
                fromPartial(object: Partial<_127.QueryTallyResultRequest>): _127.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _127.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.QueryTallyResultResponse;
                fromPartial(object: Partial<_127.QueryTallyResultResponse>): _127.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _126.VoteOption;
            voteOptionToJSON(object: _126.VoteOption): string;
            proposalStatusFromJSON(object: any): _126.ProposalStatus;
            proposalStatusToJSON(object: _126.ProposalStatus): string;
            VoteOption: typeof _126.VoteOption;
            VoteOptionSDKType: typeof _126.VoteOption;
            ProposalStatus: typeof _126.ProposalStatus;
            ProposalStatusSDKType: typeof _126.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _126.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.WeightedVoteOption;
                fromPartial(object: Partial<_126.WeightedVoteOption>): _126.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _126.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.TextProposal;
                fromPartial(object: Partial<_126.TextProposal>): _126.TextProposal;
            };
            Deposit: {
                encode(message: _126.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.Deposit;
                fromPartial(object: Partial<_126.Deposit>): _126.Deposit;
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
            DepositParams: {
                encode(message: _126.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.DepositParams;
                fromPartial(object: Partial<_126.DepositParams>): _126.DepositParams;
            };
            VotingParams: {
                encode(message: _126.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.VotingParams;
                fromPartial(object: Partial<_126.VotingParams>): _126.VotingParams;
            };
            TallyParams: {
                encode(message: _126.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.TallyParams;
                fromPartial(object: Partial<_126.TallyParams>): _126.TallyParams;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _129.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.Module;
                    fromPartial(object: Partial<_129.Module>): _129.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _132.QueryGroupInfoRequest): Promise<_132.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _132.QueryGroupPolicyInfoRequest): Promise<_132.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _132.QueryGroupMembersRequest): Promise<_132.QueryGroupMembersResponse>;
                groupsByAdmin(request: _132.QueryGroupsByAdminRequest): Promise<_132.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _132.QueryGroupPoliciesByGroupRequest): Promise<_132.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _132.QueryGroupPoliciesByAdminRequest): Promise<_132.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _132.QueryProposalRequest): Promise<_132.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _132.QueryProposalsByGroupPolicyRequest): Promise<_132.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _132.QueryVoteByProposalVoterRequest): Promise<_132.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _132.QueryVotesByProposalRequest): Promise<_132.QueryVotesByProposalResponse>;
                votesByVoter(request: _132.QueryVotesByVoterRequest): Promise<_132.QueryVotesByVoterResponse>;
                groupsByMember(request: _132.QueryGroupsByMemberRequest): Promise<_132.QueryGroupsByMemberResponse>;
                tallyResult(request: _132.QueryTallyResultRequest): Promise<_132.QueryTallyResultResponse>;
                groups(request?: _132.QueryGroupsRequest): Promise<_132.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _133.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _133.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _133.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _133.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _133.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _133.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _133.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _133.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _133.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _133.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _133.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _133.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _133.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _133.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _133.MsgCreateGroup): {
                        typeUrl: string;
                        value: _133.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _133.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _133.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _133.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _133.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _133.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _133.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _133.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _133.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _133.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _133.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _133.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _133.MsgWithdrawProposal;
                    };
                    vote(value: _133.MsgVote): {
                        typeUrl: string;
                        value: _133.MsgVote;
                    };
                    exec(value: _133.MsgExec): {
                        typeUrl: string;
                        value: _133.MsgExec;
                    };
                    leaveGroup(value: _133.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _133.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _133.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _133.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _133.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _133.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _133.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _133.MsgCreateGroup): {
                        typeUrl: string;
                        value: _133.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _133.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _133.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _133.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _133.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _133.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _133.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _133.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _133.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _133.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _133.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _133.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _133.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _133.MsgWithdrawProposal;
                    };
                    vote(value: _133.MsgVote): {
                        typeUrl: string;
                        value: _133.MsgVote;
                    };
                    exec(value: _133.MsgExec): {
                        typeUrl: string;
                        value: _133.MsgExec;
                    };
                    leaveGroup(value: _133.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _133.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _133.MsgCreateGroup) => {
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
                    }) => _133.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _133.MsgUpdateGroupMembers) => {
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
                    }) => _133.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _133.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _133.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _133.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _133.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _133.MsgCreateGroupPolicy) => {
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
                    }) => _133.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _133.MsgCreateGroupWithPolicy) => {
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
                    }) => _133.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _133.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _133.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _133.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _133.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _133.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _133.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: _133.MsgSubmitProposal) => {
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
                    }) => _133.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _133.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _133.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _133.MsgVote) => {
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
                    }) => _133.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _133.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _133.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _133.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _133.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _134.VoteOption;
            voteOptionToJSON(object: _134.VoteOption): string;
            proposalStatusFromJSON(object: any): _134.ProposalStatus;
            proposalStatusToJSON(object: _134.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _134.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _134.ProposalExecutorResult): string;
            VoteOption: typeof _134.VoteOption;
            VoteOptionSDKType: typeof _134.VoteOption;
            ProposalStatus: typeof _134.ProposalStatus;
            ProposalStatusSDKType: typeof _134.ProposalStatus;
            ProposalExecutorResult: typeof _134.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _134.ProposalExecutorResult;
            Member: {
                encode(message: _134.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Member;
                fromPartial(object: Partial<_134.Member>): _134.Member;
            };
            MemberRequest: {
                encode(message: _134.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.MemberRequest;
                fromPartial(object: Partial<_134.MemberRequest>): _134.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _134.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_134.ThresholdDecisionPolicy>): _134.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _134.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.PercentageDecisionPolicy;
                fromPartial(object: Partial<_134.PercentageDecisionPolicy>): _134.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _134.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.DecisionPolicyWindows;
                fromPartial(object: Partial<_134.DecisionPolicyWindows>): _134.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _134.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.GroupInfo;
                fromPartial(object: Partial<_134.GroupInfo>): _134.GroupInfo;
            };
            GroupMember: {
                encode(message: _134.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.GroupMember;
                fromPartial(object: Partial<_134.GroupMember>): _134.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _134.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.GroupPolicyInfo;
                fromPartial(object: Partial<_134.GroupPolicyInfo>): _134.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _134.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Proposal;
                fromPartial(object: Partial<_134.Proposal>): _134.Proposal;
            };
            TallyResult: {
                encode(message: _134.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.TallyResult;
                fromPartial(object: Partial<_134.TallyResult>): _134.TallyResult;
            };
            Vote: {
                encode(message: _134.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Vote;
                fromPartial(object: Partial<_134.Vote>): _134.Vote;
            };
            execFromJSON(object: any): _133.Exec;
            execToJSON(object: _133.Exec): string;
            Exec: typeof _133.Exec;
            ExecSDKType: typeof _133.Exec;
            MsgCreateGroup: {
                encode(message: _133.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroup;
                fromPartial(object: Partial<_133.MsgCreateGroup>): _133.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _133.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroupResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupResponse>): _133.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _133.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_133.MsgUpdateGroupMembers>): _133.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _133.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupMembersResponse>): _133.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _133.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_133.MsgUpdateGroupAdmin>): _133.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _133.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupAdminResponse>): _133.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _133.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_133.MsgUpdateGroupMetadata>): _133.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _133.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupMetadataResponse>): _133.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _133.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_133.MsgCreateGroupPolicy>): _133.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _133.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupPolicyResponse>): _133.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _133.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyAdmin>): _133.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _133.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyAdminResponse>): _133.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _133.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_133.MsgCreateGroupWithPolicy>): _133.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _133.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupWithPolicyResponse>): _133.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _133.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyDecisionPolicy>): _133.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _133.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyDecisionPolicyResponse>): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _133.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyMetadata>): _133.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _133.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyMetadataResponse>): _133.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _133.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgSubmitProposal;
                fromPartial(object: Partial<_133.MsgSubmitProposal>): _133.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _133.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_133.MsgSubmitProposalResponse>): _133.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _133.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgWithdrawProposal;
                fromPartial(object: Partial<_133.MsgWithdrawProposal>): _133.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _133.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_133.MsgWithdrawProposalResponse>): _133.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _133.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgVote;
                fromPartial(object: Partial<_133.MsgVote>): _133.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _133.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgVoteResponse;
                fromPartial(_: Partial<_133.MsgVoteResponse>): _133.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _133.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgExec;
                fromPartial(object: Partial<_133.MsgExec>): _133.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _133.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgExecResponse;
                fromPartial(object: Partial<_133.MsgExecResponse>): _133.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _133.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _133.MsgLeaveGroup;
                fromPartial(object: Partial<_133.MsgLeaveGroup>): _133.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _133.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _133.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_133.MsgLeaveGroupResponse>): _133.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _132.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupInfoRequest;
                fromPartial(object: Partial<_132.QueryGroupInfoRequest>): _132.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _132.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupInfoResponse;
                fromPartial(object: Partial<_132.QueryGroupInfoResponse>): _132.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _132.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_132.QueryGroupPolicyInfoRequest>): _132.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _132.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_132.QueryGroupPolicyInfoResponse>): _132.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _132.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupMembersRequest;
                fromPartial(object: Partial<_132.QueryGroupMembersRequest>): _132.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _132.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupMembersResponse;
                fromPartial(object: Partial<_132.QueryGroupMembersResponse>): _132.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _132.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_132.QueryGroupsByAdminRequest>): _132.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _132.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_132.QueryGroupsByAdminResponse>): _132.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _132.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByGroupRequest>): _132.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _132.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByGroupResponse>): _132.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _132.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByAdminRequest>): _132.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _132.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByAdminResponse>): _132.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _132.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryProposalRequest;
                fromPartial(object: Partial<_132.QueryProposalRequest>): _132.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _132.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryProposalResponse;
                fromPartial(object: Partial<_132.QueryProposalResponse>): _132.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _132.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_132.QueryProposalsByGroupPolicyRequest>): _132.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _132.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_132.QueryProposalsByGroupPolicyResponse>): _132.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _132.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_132.QueryVoteByProposalVoterRequest>): _132.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _132.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_132.QueryVoteByProposalVoterResponse>): _132.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _132.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_132.QueryVotesByProposalRequest>): _132.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _132.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_132.QueryVotesByProposalResponse>): _132.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _132.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_132.QueryVotesByVoterRequest>): _132.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _132.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_132.QueryVotesByVoterResponse>): _132.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _132.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_132.QueryGroupsByMemberRequest>): _132.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _132.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_132.QueryGroupsByMemberResponse>): _132.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _132.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryTallyResultRequest;
                fromPartial(object: Partial<_132.QueryTallyResultRequest>): _132.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _132.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryTallyResultResponse;
                fromPartial(object: Partial<_132.QueryTallyResultResponse>): _132.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _132.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsRequest;
                fromPartial(object: Partial<_132.QueryGroupsRequest>): _132.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _132.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.QueryGroupsResponse;
                fromPartial(object: Partial<_132.QueryGroupsResponse>): _132.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _130.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventCreateGroup;
                fromPartial(object: Partial<_130.EventCreateGroup>): _130.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _130.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventUpdateGroup;
                fromPartial(object: Partial<_130.EventUpdateGroup>): _130.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _130.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventCreateGroupPolicy;
                fromPartial(object: Partial<_130.EventCreateGroupPolicy>): _130.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _130.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_130.EventUpdateGroupPolicy>): _130.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _130.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventSubmitProposal;
                fromPartial(object: Partial<_130.EventSubmitProposal>): _130.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _130.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventWithdrawProposal;
                fromPartial(object: Partial<_130.EventWithdrawProposal>): _130.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _130.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventVote;
                fromPartial(object: Partial<_130.EventVote>): _130.EventVote;
            };
            EventExec: {
                encode(message: _130.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventExec;
                fromPartial(object: Partial<_130.EventExec>): _130.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _130.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.EventLeaveGroup;
                fromPartial(object: Partial<_130.EventLeaveGroup>): _130.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _135.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _135.Module;
                    fromPartial(object: Partial<_135.Module>): _135.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                inflation(request?: _138.QueryInflationRequest): Promise<_138.QueryInflationResponse>;
                annualProvisions(request?: _138.QueryAnnualProvisionsRequest): Promise<_138.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _139.MsgUpdateParams) => {
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
                    }) => _139.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _139.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.MsgUpdateParams;
                fromPartial(object: Partial<_139.MsgUpdateParams>): _139.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _139.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _139.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_139.MsgUpdateParamsResponse>): _139.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _138.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryParamsRequest;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _138.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryParamsResponse;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _138.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryInflationRequest;
                fromPartial(_: Partial<_138.QueryInflationRequest>): _138.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _138.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryInflationResponse;
                fromPartial(object: Partial<_138.QueryInflationResponse>): _138.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _138.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _138.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_138.QueryAnnualProvisionsRequest>): _138.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _138.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_138.QueryAnnualProvisionsResponse>): _138.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _137.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.Minter;
                fromPartial(object: Partial<_137.Minter>): _137.Minter;
            };
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.Params;
                fromPartial(object: Partial<_137.Params>): _137.Params;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
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
                    encode(_: _141.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _141.Module;
                    fromPartial(_: Partial<_141.Module>): _141.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _145.QueryBalanceRequest): Promise<_145.QueryBalanceResponse>;
                owner(request: _145.QueryOwnerRequest): Promise<_145.QueryOwnerResponse>;
                supply(request: _145.QuerySupplyRequest): Promise<_145.QuerySupplyResponse>;
                nFTs(request: _145.QueryNFTsRequest): Promise<_145.QueryNFTsResponse>;
                nFT(request: _145.QueryNFTRequest): Promise<_145.QueryNFTResponse>;
                class(request: _145.QueryClassRequest): Promise<_145.QueryClassResponse>;
                classes(request?: _145.QueryClassesRequest): Promise<_145.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _146.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _146.MsgSend): {
                        typeUrl: string;
                        value: _146.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _146.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _146.MsgSend): {
                        typeUrl: string;
                        value: _146.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _146.MsgSend) => {
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
                    }) => _146.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _146.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.MsgSend;
                fromPartial(object: Partial<_146.MsgSend>): _146.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _146.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _146.MsgSendResponse;
                fromPartial(_: Partial<_146.MsgSendResponse>): _146.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _145.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryBalanceRequest;
                fromPartial(object: Partial<_145.QueryBalanceRequest>): _145.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _145.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryBalanceResponse;
                fromPartial(object: Partial<_145.QueryBalanceResponse>): _145.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _145.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryOwnerRequest;
                fromPartial(object: Partial<_145.QueryOwnerRequest>): _145.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _145.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryOwnerResponse;
                fromPartial(object: Partial<_145.QueryOwnerResponse>): _145.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _145.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QuerySupplyRequest;
                fromPartial(object: Partial<_145.QuerySupplyRequest>): _145.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _145.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QuerySupplyResponse;
                fromPartial(object: Partial<_145.QuerySupplyResponse>): _145.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _145.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryNFTsRequest;
                fromPartial(object: Partial<_145.QueryNFTsRequest>): _145.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _145.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryNFTsResponse;
                fromPartial(object: Partial<_145.QueryNFTsResponse>): _145.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _145.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryNFTRequest;
                fromPartial(object: Partial<_145.QueryNFTRequest>): _145.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _145.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryNFTResponse;
                fromPartial(object: Partial<_145.QueryNFTResponse>): _145.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _145.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryClassRequest;
                fromPartial(object: Partial<_145.QueryClassRequest>): _145.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _145.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryClassResponse;
                fromPartial(object: Partial<_145.QueryClassResponse>): _145.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _145.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryClassesRequest;
                fromPartial(object: Partial<_145.QueryClassesRequest>): _145.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _145.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.QueryClassesResponse;
                fromPartial(object: Partial<_145.QueryClassesResponse>): _145.QueryClassesResponse;
            };
            Class: {
                encode(message: _144.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Class;
                fromPartial(object: Partial<_144.Class>): _144.Class;
            };
            NFT: {
                encode(message: _144.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.NFT;
                fromPartial(object: Partial<_144.NFT>): _144.NFT;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
            Entry: {
                encode(message: _143.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _143.Entry;
                fromPartial(object: Partial<_143.Entry>): _143.Entry;
            };
            EventSend: {
                encode(message: _142.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.EventSend;
                fromPartial(object: Partial<_142.EventSend>): _142.EventSend;
            };
            EventMint: {
                encode(message: _142.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.EventMint;
                fromPartial(object: Partial<_142.EventMint>): _142.EventMint;
            };
            EventBurn: {
                encode(message: _142.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.EventBurn;
                fromPartial(object: Partial<_142.EventBurn>): _142.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _147.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _147.Module;
                    fromPartial(_: Partial<_147.Module>): _147.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _312.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _148.GetRequest): Promise<_148.GetResponse>;
                    list(request: _148.ListRequest): Promise<_148.ListResponse>;
                };
                GetRequest: {
                    encode(message: _148.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.GetRequest;
                    fromPartial(object: Partial<_148.GetRequest>): _148.GetRequest;
                };
                GetResponse: {
                    encode(message: _148.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.GetResponse;
                    fromPartial(object: Partial<_148.GetResponse>): _148.GetResponse;
                };
                ListRequest: {
                    encode(message: _148.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ListRequest;
                    fromPartial(object: Partial<_148.ListRequest>): _148.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _148.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ListRequest_Prefix;
                    fromPartial(object: Partial<_148.ListRequest_Prefix>): _148.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _148.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ListRequest_Range;
                    fromPartial(object: Partial<_148.ListRequest_Range>): _148.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _148.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.ListResponse;
                    fromPartial(object: Partial<_148.ListResponse>): _148.ListResponse;
                };
                IndexValue: {
                    encode(message: _148.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.IndexValue;
                    fromPartial(object: Partial<_148.IndexValue>): _148.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _149.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.TableDescriptor;
                fromPartial(object: Partial<_149.TableDescriptor>): _149.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _149.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_149.PrimaryKeyDescriptor>): _149.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _149.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_149.SecondaryIndexDescriptor>): _149.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _149.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.SingletonDescriptor;
                fromPartial(object: Partial<_149.SingletonDescriptor>): _149.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _150.StorageType;
            storageTypeToJSON(object: _150.StorageType): string;
            StorageType: typeof _150.StorageType;
            StorageTypeSDKType: typeof _150.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _150.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_150.ModuleSchemaDescriptor>): _150.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _150.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _150.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_150.ModuleSchemaDescriptor_FileEntry>): _150.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _151.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _151.Module;
                    fromPartial(_: Partial<_151.Module>): _151.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                subspaces(request?: _153.QuerySubspacesRequest): Promise<_153.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _153.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryParamsRequest;
                fromPartial(object: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _153.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryParamsResponse;
                fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _153.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _153.QuerySubspacesRequest;
                fromPartial(_: Partial<_153.QuerySubspacesRequest>): _153.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _153.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QuerySubspacesResponse;
                fromPartial(object: Partial<_153.QuerySubspacesResponse>): _153.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _153.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.Subspace;
                fromPartial(object: Partial<_153.Subspace>): _153.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _152.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.ParameterChangeProposal;
                fromPartial(object: Partial<_152.ParameterChangeProposal>): _152.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _152.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.ParamChange;
                fromPartial(object: Partial<_152.ParamChange>): _152.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _155.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _155.FileDescriptorsRequest;
                fromPartial(_: Partial<_155.FileDescriptorsRequest>): _155.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _155.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.FileDescriptorsResponse;
                fromPartial(object: Partial<_155.FileDescriptorsResponse>): _155.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _156.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.Module;
                    fromPartial(object: Partial<_156.Module>): _156.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                signingInfo(request: _158.QuerySigningInfoRequest): Promise<_158.QuerySigningInfoResponse>;
                signingInfos(request?: _158.QuerySigningInfosRequest): Promise<_158.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _160.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _160.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _160.MsgUnjail): {
                        typeUrl: string;
                        value: _160.MsgUnjail;
                    };
                    updateParams(value: _160.MsgUpdateParams): {
                        typeUrl: string;
                        value: _160.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _160.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _160.MsgUnjail): {
                        typeUrl: string;
                        value: _160.MsgUnjail;
                    };
                    updateParams(value: _160.MsgUpdateParams): {
                        typeUrl: string;
                        value: _160.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _160.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _160.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _160.MsgUpdateParams) => {
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
                    }) => _160.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _160.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.MsgUnjail;
                fromPartial(object: Partial<_160.MsgUnjail>): _160.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _160.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _160.MsgUnjailResponse;
                fromPartial(_: Partial<_160.MsgUnjailResponse>): _160.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _160.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.MsgUpdateParams;
                fromPartial(object: Partial<_160.MsgUpdateParams>): _160.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _160.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _160.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_160.MsgUpdateParamsResponse>): _160.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _159.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.ValidatorSigningInfo;
                fromPartial(object: Partial<_159.ValidatorSigningInfo>): _159.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _159.Params;
                fromPartial(object: Partial<_159.Params>): _159.Params;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.QueryParamsRequest;
                fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.QueryParamsResponse;
                fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _158.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.QuerySigningInfoRequest;
                fromPartial(object: Partial<_158.QuerySigningInfoRequest>): _158.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _158.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.QuerySigningInfoResponse;
                fromPartial(object: Partial<_158.QuerySigningInfoResponse>): _158.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _158.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.QuerySigningInfosRequest;
                fromPartial(object: Partial<_158.QuerySigningInfosRequest>): _158.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _158.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.QuerySigningInfosResponse;
                fromPartial(object: Partial<_158.QuerySigningInfosResponse>): _158.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.GenesisState;
                fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
            };
            SigningInfo: {
                encode(message: _157.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.SigningInfo;
                fromPartial(object: Partial<_157.SigningInfo>): _157.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _157.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.ValidatorMissedBlocks;
                fromPartial(object: Partial<_157.ValidatorMissedBlocks>): _157.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _157.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.MissedBlock;
                fromPartial(object: Partial<_157.MissedBlock>): _157.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _161.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Module;
                    fromPartial(object: Partial<_161.Module>): _161.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _332.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _164.QueryValidatorsRequest): Promise<_164.QueryValidatorsResponse>;
                validator(request: _164.QueryValidatorRequest): Promise<_164.QueryValidatorResponse>;
                validatorDelegations(request: _164.QueryValidatorDelegationsRequest): Promise<_164.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _164.QueryValidatorUnbondingDelegationsRequest): Promise<_164.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _164.QueryDelegationRequest): Promise<_164.QueryDelegationResponse>;
                unbondingDelegation(request: _164.QueryUnbondingDelegationRequest): Promise<_164.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _164.QueryDelegatorDelegationsRequest): Promise<_164.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _164.QueryDelegatorUnbondingDelegationsRequest): Promise<_164.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _164.QueryRedelegationsRequest): Promise<_164.QueryRedelegationsResponse>;
                delegatorValidators(request: _164.QueryDelegatorValidatorsRequest): Promise<_164.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _164.QueryDelegatorValidatorRequest): Promise<_164.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _164.QueryHistoricalInfoRequest): Promise<_164.QueryHistoricalInfoResponse>;
                pool(request?: _164.QueryPoolRequest): Promise<_164.QueryPoolResponse>;
                params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _166.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _166.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _166.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _166.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _166.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _166.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _166.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _166.MsgCreateValidator): {
                        typeUrl: string;
                        value: _166.MsgCreateValidator;
                    };
                    editValidator(value: _166.MsgEditValidator): {
                        typeUrl: string;
                        value: _166.MsgEditValidator;
                    };
                    delegate(value: _166.MsgDelegate): {
                        typeUrl: string;
                        value: _166.MsgDelegate;
                    };
                    beginRedelegate(value: _166.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _166.MsgBeginRedelegate;
                    };
                    undelegate(value: _166.MsgUndelegate): {
                        typeUrl: string;
                        value: _166.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _166.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _166.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _166.MsgUpdateParams): {
                        typeUrl: string;
                        value: _166.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _166.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _166.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _166.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _166.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _166.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _166.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _166.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _166.MsgCreateValidator): {
                        typeUrl: string;
                        value: _166.MsgCreateValidator;
                    };
                    editValidator(value: _166.MsgEditValidator): {
                        typeUrl: string;
                        value: _166.MsgEditValidator;
                    };
                    delegate(value: _166.MsgDelegate): {
                        typeUrl: string;
                        value: _166.MsgDelegate;
                    };
                    beginRedelegate(value: _166.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _166.MsgBeginRedelegate;
                    };
                    undelegate(value: _166.MsgUndelegate): {
                        typeUrl: string;
                        value: _166.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _166.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _166.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _166.MsgUpdateParams): {
                        typeUrl: string;
                        value: _166.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _166.MsgCreateValidator) => {
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
                    }) => _166.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _166.MsgEditValidator) => {
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
                    }) => _166.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _166.MsgDelegate) => {
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
                    }) => _166.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _166.MsgBeginRedelegate) => {
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
                    }) => _166.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _166.MsgUndelegate) => {
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
                    }) => _166.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _166.MsgCancelUnbondingDelegation) => {
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
                    }) => _166.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _166.MsgUpdateParams) => {
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
                    }) => _166.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _166.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgCreateValidator;
                fromPartial(object: Partial<_166.MsgCreateValidator>): _166.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _166.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_166.MsgCreateValidatorResponse>): _166.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _166.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgEditValidator;
                fromPartial(object: Partial<_166.MsgEditValidator>): _166.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _166.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.MsgEditValidatorResponse;
                fromPartial(_: Partial<_166.MsgEditValidatorResponse>): _166.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _166.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgDelegate;
                fromPartial(object: Partial<_166.MsgDelegate>): _166.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _166.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.MsgDelegateResponse;
                fromPartial(_: Partial<_166.MsgDelegateResponse>): _166.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _166.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgBeginRedelegate;
                fromPartial(object: Partial<_166.MsgBeginRedelegate>): _166.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _166.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_166.MsgBeginRedelegateResponse>): _166.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _166.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgUndelegate;
                fromPartial(object: Partial<_166.MsgUndelegate>): _166.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _166.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgUndelegateResponse;
                fromPartial(object: Partial<_166.MsgUndelegateResponse>): _166.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _166.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_166.MsgCancelUnbondingDelegation>): _166.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _166.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_166.MsgCancelUnbondingDelegationResponse>): _166.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _166.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.MsgUpdateParams;
                fromPartial(object: Partial<_166.MsgUpdateParams>): _166.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _166.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_166.MsgUpdateParamsResponse>): _166.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _165.BondStatus;
            bondStatusToJSON(object: _165.BondStatus): string;
            infractionFromJSON(object: any): _165.Infraction;
            infractionToJSON(object: _165.Infraction): string;
            BondStatus: typeof _165.BondStatus;
            BondStatusSDKType: typeof _165.BondStatus;
            Infraction: typeof _165.Infraction;
            InfractionSDKType: typeof _165.Infraction;
            HistoricalInfo: {
                encode(message: _165.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.HistoricalInfo;
                fromPartial(object: Partial<_165.HistoricalInfo>): _165.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _165.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.CommissionRates;
                fromPartial(object: Partial<_165.CommissionRates>): _165.CommissionRates;
            };
            Commission: {
                encode(message: _165.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Commission;
                fromPartial(object: Partial<_165.Commission>): _165.Commission;
            };
            Description: {
                encode(message: _165.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Description;
                fromPartial(object: Partial<_165.Description>): _165.Description;
            };
            Validator: {
                encode(message: _165.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Validator;
                fromPartial(object: Partial<_165.Validator>): _165.Validator;
            };
            ValAddresses: {
                encode(message: _165.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.ValAddresses;
                fromPartial(object: Partial<_165.ValAddresses>): _165.ValAddresses;
            };
            DVPair: {
                encode(message: _165.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.DVPair;
                fromPartial(object: Partial<_165.DVPair>): _165.DVPair;
            };
            DVPairs: {
                encode(message: _165.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.DVPairs;
                fromPartial(object: Partial<_165.DVPairs>): _165.DVPairs;
            };
            DVVTriplet: {
                encode(message: _165.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.DVVTriplet;
                fromPartial(object: Partial<_165.DVVTriplet>): _165.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _165.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.DVVTriplets;
                fromPartial(object: Partial<_165.DVVTriplets>): _165.DVVTriplets;
            };
            Delegation: {
                encode(message: _165.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Delegation;
                fromPartial(object: Partial<_165.Delegation>): _165.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _165.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.UnbondingDelegation;
                fromPartial(object: Partial<_165.UnbondingDelegation>): _165.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _165.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.UnbondingDelegationEntry;
                fromPartial(object: Partial<_165.UnbondingDelegationEntry>): _165.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _165.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.RedelegationEntry;
                fromPartial(object: Partial<_165.RedelegationEntry>): _165.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _165.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Redelegation;
                fromPartial(object: Partial<_165.Redelegation>): _165.Redelegation;
            };
            Params: {
                encode(message: _165.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Params;
                fromPartial(object: Partial<_165.Params>): _165.Params;
            };
            DelegationResponse: {
                encode(message: _165.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.DelegationResponse;
                fromPartial(object: Partial<_165.DelegationResponse>): _165.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _165.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.RedelegationEntryResponse;
                fromPartial(object: Partial<_165.RedelegationEntryResponse>): _165.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _165.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.RedelegationResponse;
                fromPartial(object: Partial<_165.RedelegationResponse>): _165.RedelegationResponse;
            };
            Pool: {
                encode(message: _165.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.Pool;
                fromPartial(object: Partial<_165.Pool>): _165.Pool;
            };
            ValidatorUpdates: {
                encode(message: _165.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _165.ValidatorUpdates;
                fromPartial(object: Partial<_165.ValidatorUpdates>): _165.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _164.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorsRequest;
                fromPartial(object: Partial<_164.QueryValidatorsRequest>): _164.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _164.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorsResponse;
                fromPartial(object: Partial<_164.QueryValidatorsResponse>): _164.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _164.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorRequest;
                fromPartial(object: Partial<_164.QueryValidatorRequest>): _164.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _164.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorResponse;
                fromPartial(object: Partial<_164.QueryValidatorResponse>): _164.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _164.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_164.QueryValidatorDelegationsRequest>): _164.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _164.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_164.QueryValidatorDelegationsResponse>): _164.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _164.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_164.QueryValidatorUnbondingDelegationsRequest>): _164.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _164.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_164.QueryValidatorUnbondingDelegationsResponse>): _164.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _164.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegationRequest;
                fromPartial(object: Partial<_164.QueryDelegationRequest>): _164.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _164.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegationResponse;
                fromPartial(object: Partial<_164.QueryDelegationResponse>): _164.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _164.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_164.QueryUnbondingDelegationRequest>): _164.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _164.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_164.QueryUnbondingDelegationResponse>): _164.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _164.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorDelegationsRequest>): _164.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _164.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorDelegationsResponse>): _164.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _164.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorUnbondingDelegationsRequest>): _164.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _164.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorUnbondingDelegationsResponse>): _164.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _164.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryRedelegationsRequest;
                fromPartial(object: Partial<_164.QueryRedelegationsRequest>): _164.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _164.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryRedelegationsResponse;
                fromPartial(object: Partial<_164.QueryRedelegationsResponse>): _164.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _164.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorsRequest>): _164.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _164.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorsResponse>): _164.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _164.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorRequest>): _164.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _164.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorResponse>): _164.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _164.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_164.QueryHistoricalInfoRequest>): _164.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _164.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_164.QueryHistoricalInfoResponse>): _164.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _164.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _164.QueryPoolRequest;
                fromPartial(_: Partial<_164.QueryPoolRequest>): _164.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _164.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryPoolResponse;
                fromPartial(object: Partial<_164.QueryPoolResponse>): _164.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _164.QueryParamsRequest;
                fromPartial(_: Partial<_164.QueryParamsRequest>): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.QueryParamsResponse;
                fromPartial(object: Partial<_164.QueryParamsResponse>): _164.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.GenesisState;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _163.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.LastValidatorPower;
                fromPartial(object: Partial<_163.LastValidatorPower>): _163.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _162.AuthorizationType;
            authorizationTypeToJSON(object: _162.AuthorizationType): string;
            AuthorizationType: typeof _162.AuthorizationType;
            AuthorizationTypeSDKType: typeof _162.AuthorizationType;
            StakeAuthorization: {
                encode(message: _162.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.StakeAuthorization;
                fromPartial(object: Partial<_162.StakeAuthorization>): _162.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _162.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.StakeAuthorization_Validators;
                fromPartial(object: Partial<_162.StakeAuthorization_Validators>): _162.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _167.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.Config;
                    fromPartial(object: Partial<_167.Config>): _167.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _168.SignMode;
                signModeToJSON(object: _168.SignMode): string;
                SignMode: typeof _168.SignMode;
                SignModeSDKType: typeof _168.SignMode;
                SignatureDescriptors: {
                    encode(message: _168.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureDescriptors;
                    fromPartial(object: Partial<_168.SignatureDescriptors>): _168.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _168.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureDescriptor;
                    fromPartial(object: Partial<_168.SignatureDescriptor>): _168.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _168.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data>): _168.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _168.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data_Single>): _168.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _168.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data_Multi>): _168.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _316.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _169.SimulateRequest): Promise<_169.SimulateResponse>;
                getTx(request: _169.GetTxRequest): Promise<_169.GetTxResponse>;
                broadcastTx(request: _169.BroadcastTxRequest): Promise<_169.BroadcastTxResponse>;
                getTxsEvent(request: _169.GetTxsEventRequest): Promise<_169.GetTxsEventResponse>;
                getBlockWithTxs(request: _169.GetBlockWithTxsRequest): Promise<_169.GetBlockWithTxsResponse>;
                txDecode(request: _169.TxDecodeRequest): Promise<_169.TxDecodeResponse>;
                txEncode(request: _169.TxEncodeRequest): Promise<_169.TxEncodeResponse>;
                txEncodeAmino(request: _169.TxEncodeAminoRequest): Promise<_169.TxEncodeAminoResponse>;
                txDecodeAmino(request: _169.TxDecodeAminoRequest): Promise<_169.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            Tx: {
                encode(message: _170.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.Tx;
                fromPartial(object: Partial<_170.Tx>): _170.Tx;
            };
            TxRaw: {
                encode(message: _170.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.TxRaw;
                fromPartial(object: Partial<_170.TxRaw>): _170.TxRaw;
            };
            SignDoc: {
                encode(message: _170.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.SignDoc;
                fromPartial(object: Partial<_170.SignDoc>): _170.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _170.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.SignDocDirectAux;
                fromPartial(object: Partial<_170.SignDocDirectAux>): _170.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _170.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.TxBody;
                fromPartial(object: Partial<_170.TxBody>): _170.TxBody;
            };
            AuthInfo: {
                encode(message: _170.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.AuthInfo;
                fromPartial(object: Partial<_170.AuthInfo>): _170.AuthInfo;
            };
            SignerInfo: {
                encode(message: _170.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.SignerInfo;
                fromPartial(object: Partial<_170.SignerInfo>): _170.SignerInfo;
            };
            ModeInfo: {
                encode(message: _170.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.ModeInfo;
                fromPartial(object: Partial<_170.ModeInfo>): _170.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _170.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.ModeInfo_Single;
                fromPartial(object: Partial<_170.ModeInfo_Single>): _170.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _170.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.ModeInfo_Multi;
                fromPartial(object: Partial<_170.ModeInfo_Multi>): _170.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _170.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.Fee;
                fromPartial(object: Partial<_170.Fee>): _170.Fee;
            };
            Tip: {
                encode(message: _170.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.Tip;
                fromPartial(object: Partial<_170.Tip>): _170.Tip;
            };
            AuxSignerData: {
                encode(message: _170.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _170.AuxSignerData;
                fromPartial(object: Partial<_170.AuxSignerData>): _170.AuxSignerData;
            };
            orderByFromJSON(object: any): _169.OrderBy;
            orderByToJSON(object: _169.OrderBy): string;
            broadcastModeFromJSON(object: any): _169.BroadcastMode;
            broadcastModeToJSON(object: _169.BroadcastMode): string;
            OrderBy: typeof _169.OrderBy;
            OrderBySDKType: typeof _169.OrderBy;
            BroadcastMode: typeof _169.BroadcastMode;
            BroadcastModeSDKType: typeof _169.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _169.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetTxsEventRequest;
                fromPartial(object: Partial<_169.GetTxsEventRequest>): _169.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _169.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetTxsEventResponse;
                fromPartial(object: Partial<_169.GetTxsEventResponse>): _169.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _169.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.BroadcastTxRequest;
                fromPartial(object: Partial<_169.BroadcastTxRequest>): _169.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _169.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.BroadcastTxResponse;
                fromPartial(object: Partial<_169.BroadcastTxResponse>): _169.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _169.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.SimulateRequest;
                fromPartial(object: Partial<_169.SimulateRequest>): _169.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _169.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.SimulateResponse;
                fromPartial(object: Partial<_169.SimulateResponse>): _169.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _169.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetTxRequest;
                fromPartial(object: Partial<_169.GetTxRequest>): _169.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _169.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetTxResponse;
                fromPartial(object: Partial<_169.GetTxResponse>): _169.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _169.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_169.GetBlockWithTxsRequest>): _169.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _169.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_169.GetBlockWithTxsResponse>): _169.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _169.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxDecodeRequest;
                fromPartial(object: Partial<_169.TxDecodeRequest>): _169.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _169.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxDecodeResponse;
                fromPartial(object: Partial<_169.TxDecodeResponse>): _169.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _169.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxEncodeRequest;
                fromPartial(object: Partial<_169.TxEncodeRequest>): _169.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _169.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxEncodeResponse;
                fromPartial(object: Partial<_169.TxEncodeResponse>): _169.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _169.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxEncodeAminoRequest;
                fromPartial(object: Partial<_169.TxEncodeAminoRequest>): _169.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _169.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxEncodeAminoResponse;
                fromPartial(object: Partial<_169.TxEncodeAminoResponse>): _169.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _169.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxDecodeAminoRequest;
                fromPartial(object: Partial<_169.TxDecodeAminoRequest>): _169.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _169.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.TxDecodeAminoResponse;
                fromPartial(object: Partial<_169.TxDecodeAminoResponse>): _169.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _171.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _171.Module;
                    fromPartial(object: Partial<_171.Module>): _171.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _172.QueryCurrentPlanRequest): Promise<_172.QueryCurrentPlanResponse>;
                appliedPlan(request: _172.QueryAppliedPlanRequest): Promise<_172.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _172.QueryUpgradedConsensusStateRequest): Promise<_172.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _172.QueryModuleVersionsRequest): Promise<_172.QueryModuleVersionsResponse>;
                authority(request?: _172.QueryAuthorityRequest): Promise<_172.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _173.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _173.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _173.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _173.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _173.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _173.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _173.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _173.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _173.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _173.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _173.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _173.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _173.MsgSoftwareUpgrade) => {
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
                    }) => _173.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _173.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _173.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _174.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.Plan;
                fromPartial(object: Partial<_174.Plan>): _174.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _174.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_174.SoftwareUpgradeProposal>): _174.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _174.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_174.CancelSoftwareUpgradeProposal>): _174.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _174.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.ModuleVersion;
                fromPartial(object: Partial<_174.ModuleVersion>): _174.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _173.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _173.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_173.MsgSoftwareUpgrade>): _173.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _173.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _173.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_173.MsgSoftwareUpgradeResponse>): _173.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _173.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _173.MsgCancelUpgrade;
                fromPartial(object: Partial<_173.MsgCancelUpgrade>): _173.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _173.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _173.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_173.MsgCancelUpgradeResponse>): _173.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _172.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _172.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_172.QueryCurrentPlanRequest>): _172.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _172.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_172.QueryCurrentPlanResponse>): _172.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _172.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_172.QueryAppliedPlanRequest>): _172.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _172.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_172.QueryAppliedPlanResponse>): _172.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _172.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_172.QueryUpgradedConsensusStateRequest>): _172.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _172.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_172.QueryUpgradedConsensusStateResponse>): _172.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _172.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_172.QueryModuleVersionsRequest>): _172.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _172.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_172.QueryModuleVersionsResponse>): _172.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _172.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _172.QueryAuthorityRequest;
                fromPartial(_: Partial<_172.QueryAuthorityRequest>): _172.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _172.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.QueryAuthorityResponse;
                fromPartial(object: Partial<_172.QueryAuthorityResponse>): _172.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _175.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _175.Module;
                    fromPartial(_: Partial<_175.Module>): _175.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _176.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _176.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _176.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _176.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _176.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _176.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _176.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _176.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _176.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _176.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _176.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _176.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _176.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _176.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _176.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _176.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _176.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _176.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _176.MsgCreateVestingAccount) => {
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
                    }) => _176.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _176.MsgCreatePermanentLockedAccount) => {
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
                    }) => _176.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _176.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _176.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _177.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.BaseVestingAccount;
                fromPartial(object: Partial<_177.BaseVestingAccount>): _177.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _177.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.ContinuousVestingAccount;
                fromPartial(object: Partial<_177.ContinuousVestingAccount>): _177.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _177.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.DelayedVestingAccount;
                fromPartial(object: Partial<_177.DelayedVestingAccount>): _177.DelayedVestingAccount;
            };
            Period: {
                encode(message: _177.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.Period;
                fromPartial(object: Partial<_177.Period>): _177.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _177.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.PeriodicVestingAccount;
                fromPartial(object: Partial<_177.PeriodicVestingAccount>): _177.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _177.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _177.PermanentLockedAccount;
                fromPartial(object: Partial<_177.PermanentLockedAccount>): _177.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _176.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _176.MsgCreateVestingAccount;
                fromPartial(object: Partial<_176.MsgCreateVestingAccount>): _176.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _176.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _176.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_176.MsgCreateVestingAccountResponse>): _176.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _176.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _176.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_176.MsgCreatePermanentLockedAccount>): _176.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _176.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _176.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_176.MsgCreatePermanentLockedAccountResponse>): _176.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _176.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _176.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_176.MsgCreatePeriodicVestingAccount>): _176.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _176.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _176.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_176.MsgCreatePeriodicVestingAccountResponse>): _176.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _318.MsgClientImpl;
                };
                authz: {
                    v1beta1: _319.MsgClientImpl;
                };
                bank: {
                    v1beta1: _320.MsgClientImpl;
                };
                consensus: {
                    v1: _321.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _322.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _323.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _324.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _325.MsgClientImpl;
                };
                gov: {
                    v1: _326.MsgClientImpl;
                    v1beta1: _327.MsgClientImpl;
                };
                group: {
                    v1: _328.MsgClientImpl;
                };
                mint: {
                    v1beta1: _329.MsgClientImpl;
                };
                nft: {
                    v1beta1: _330.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _331.MsgClientImpl;
                };
                staking: {
                    v1beta1: _332.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _333.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _334.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _55.QueryConfigRequest): Promise<_55.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _59.QueryAccountsRequest): Promise<_59.QueryAccountsResponse>;
                        account(request: _59.QueryAccountRequest): Promise<_59.QueryAccountResponse>;
                        accountAddressByID(request: _59.QueryAccountAddressByIDRequest): Promise<_59.QueryAccountAddressByIDResponse>;
                        params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        moduleAccounts(request?: _59.QueryModuleAccountsRequest): Promise<_59.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _59.QueryModuleAccountByNameRequest): Promise<_59.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _59.Bech32PrefixRequest): Promise<_59.Bech32PrefixResponse>;
                        addressBytesToString(request: _59.AddressBytesToStringRequest): Promise<_59.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _59.AddressStringToBytesRequest): Promise<_59.AddressStringToBytesResponse>;
                        accountInfo(request: _59.QueryAccountInfoRequest): Promise<_59.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _65.QueryGrantsRequest): Promise<_65.QueryGrantsResponse>;
                        granterGrants(request: _65.QueryGranterGrantsRequest): Promise<_65.QueryGranterGrantsResponse>;
                        granteeGrants(request: _65.QueryGranteeGrantsRequest): Promise<_65.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _68.AppOptionsRequest): Promise<_68.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                        allBalances(request: _74.QueryAllBalancesRequest): Promise<_74.QueryAllBalancesResponse>;
                        spendableBalances(request: _74.QuerySpendableBalancesRequest): Promise<_74.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _74.QuerySpendableBalanceByDenomRequest): Promise<_74.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _74.QueryTotalSupplyRequest): Promise<_74.QueryTotalSupplyResponse>;
                        supplyOf(request: _74.QuerySupplyOfRequest): Promise<_74.QuerySupplyOfResponse>;
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        denomMetadata(request: _74.QueryDenomMetadataRequest): Promise<_74.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _74.QueryDenomsMetadataRequest): Promise<_74.QueryDenomsMetadataResponse>;
                        denomOwners(request: _74.QueryDenomOwnersRequest): Promise<_74.QueryDenomOwnersResponse>;
                        sendEnabled(request: _74.QuerySendEnabledRequest): Promise<_74.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _78.ConfigRequest): Promise<_78.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _85.GetNodeInfoRequest): Promise<_85.GetNodeInfoResponse>;
                            getSyncing(request?: _85.GetSyncingRequest): Promise<_85.GetSyncingResponse>;
                            getLatestBlock(request?: _85.GetLatestBlockRequest): Promise<_85.GetLatestBlockResponse>;
                            getBlockByHeight(request: _85.GetBlockByHeightRequest): Promise<_85.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _85.GetLatestValidatorSetRequest): Promise<_85.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _85.GetValidatorSetByHeightRequest): Promise<_85.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _85.ABCIQueryRequest): Promise<_85.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        validatorDistributionInfo(request: _106.QueryValidatorDistributionInfoRequest): Promise<_106.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _111.QueryEvidenceRequest): Promise<_111.QueryEvidenceResponse>;
                        allEvidence(request?: _111.QueryAllEvidenceRequest): Promise<_111.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _116.QueryAllowanceRequest): Promise<_116.QueryAllowanceResponse>;
                        allowances(request: _116.QueryAllowancesRequest): Promise<_116.QueryAllowancesResponse>;
                        allowancesByGranter(request: _116.QueryAllowancesByGranterRequest): Promise<_116.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _123.QueryProposalRequest): Promise<_123.QueryProposalResponse>;
                        proposals(request: _123.QueryProposalsRequest): Promise<_123.QueryProposalsResponse>;
                        vote(request: _123.QueryVoteRequest): Promise<_123.QueryVoteResponse>;
                        votes(request: _123.QueryVotesRequest): Promise<_123.QueryVotesResponse>;
                        params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        deposit(request: _123.QueryDepositRequest): Promise<_123.QueryDepositResponse>;
                        deposits(request: _123.QueryDepositsRequest): Promise<_123.QueryDepositsResponse>;
                        tallyResult(request: _123.QueryTallyResultRequest): Promise<_123.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _127.QueryProposalRequest): Promise<_127.QueryProposalResponse>;
                        proposals(request: _127.QueryProposalsRequest): Promise<_127.QueryProposalsResponse>;
                        vote(request: _127.QueryVoteRequest): Promise<_127.QueryVoteResponse>;
                        votes(request: _127.QueryVotesRequest): Promise<_127.QueryVotesResponse>;
                        params(request: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        deposit(request: _127.QueryDepositRequest): Promise<_127.QueryDepositResponse>;
                        deposits(request: _127.QueryDepositsRequest): Promise<_127.QueryDepositsResponse>;
                        tallyResult(request: _127.QueryTallyResultRequest): Promise<_127.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _132.QueryGroupInfoRequest): Promise<_132.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _132.QueryGroupPolicyInfoRequest): Promise<_132.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _132.QueryGroupMembersRequest): Promise<_132.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _132.QueryGroupsByAdminRequest): Promise<_132.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _132.QueryGroupPoliciesByGroupRequest): Promise<_132.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _132.QueryGroupPoliciesByAdminRequest): Promise<_132.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _132.QueryProposalRequest): Promise<_132.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _132.QueryProposalsByGroupPolicyRequest): Promise<_132.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _132.QueryVoteByProposalVoterRequest): Promise<_132.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _132.QueryVotesByProposalRequest): Promise<_132.QueryVotesByProposalResponse>;
                        votesByVoter(request: _132.QueryVotesByVoterRequest): Promise<_132.QueryVotesByVoterResponse>;
                        groupsByMember(request: _132.QueryGroupsByMemberRequest): Promise<_132.QueryGroupsByMemberResponse>;
                        tallyResult(request: _132.QueryTallyResultRequest): Promise<_132.QueryTallyResultResponse>;
                        groups(request?: _132.QueryGroupsRequest): Promise<_132.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                        inflation(request?: _138.QueryInflationRequest): Promise<_138.QueryInflationResponse>;
                        annualProvisions(request?: _138.QueryAnnualProvisionsRequest): Promise<_138.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _145.QueryBalanceRequest): Promise<_145.QueryBalanceResponse>;
                        owner(request: _145.QueryOwnerRequest): Promise<_145.QueryOwnerResponse>;
                        supply(request: _145.QuerySupplyRequest): Promise<_145.QuerySupplyResponse>;
                        nFTs(request: _145.QueryNFTsRequest): Promise<_145.QueryNFTsResponse>;
                        nFT(request: _145.QueryNFTRequest): Promise<_145.QueryNFTResponse>;
                        class(request: _145.QueryClassRequest): Promise<_145.QueryClassResponse>;
                        classes(request?: _145.QueryClassesRequest): Promise<_145.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _148.GetRequest): Promise<_148.GetResponse>;
                            list(request: _148.ListRequest): Promise<_148.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                        subspaces(request?: _153.QuerySubspacesRequest): Promise<_153.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                        signingInfo(request: _158.QuerySigningInfoRequest): Promise<_158.QuerySigningInfoResponse>;
                        signingInfos(request?: _158.QuerySigningInfosRequest): Promise<_158.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _164.QueryValidatorsRequest): Promise<_164.QueryValidatorsResponse>;
                        validator(request: _164.QueryValidatorRequest): Promise<_164.QueryValidatorResponse>;
                        validatorDelegations(request: _164.QueryValidatorDelegationsRequest): Promise<_164.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _164.QueryValidatorUnbondingDelegationsRequest): Promise<_164.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _164.QueryDelegationRequest): Promise<_164.QueryDelegationResponse>;
                        unbondingDelegation(request: _164.QueryUnbondingDelegationRequest): Promise<_164.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _164.QueryDelegatorDelegationsRequest): Promise<_164.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _164.QueryDelegatorUnbondingDelegationsRequest): Promise<_164.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _164.QueryRedelegationsRequest): Promise<_164.QueryRedelegationsResponse>;
                        delegatorValidators(request: _164.QueryDelegatorValidatorsRequest): Promise<_164.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _164.QueryDelegatorValidatorRequest): Promise<_164.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _164.QueryHistoricalInfoRequest): Promise<_164.QueryHistoricalInfoResponse>;
                        pool(request?: _164.QueryPoolRequest): Promise<_164.QueryPoolResponse>;
                        params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _169.SimulateRequest): Promise<_169.SimulateResponse>;
                        getTx(request: _169.GetTxRequest): Promise<_169.GetTxResponse>;
                        broadcastTx(request: _169.BroadcastTxRequest): Promise<_169.BroadcastTxResponse>;
                        getTxsEvent(request: _169.GetTxsEventRequest): Promise<_169.GetTxsEventResponse>;
                        getBlockWithTxs(request: _169.GetBlockWithTxsRequest): Promise<_169.GetBlockWithTxsResponse>;
                        txDecode(request: _169.TxDecodeRequest): Promise<_169.TxDecodeResponse>;
                        txEncode(request: _169.TxEncodeRequest): Promise<_169.TxEncodeResponse>;
                        txEncodeAmino(request: _169.TxEncodeAminoRequest): Promise<_169.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _169.TxDecodeAminoRequest): Promise<_169.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _172.QueryCurrentPlanRequest): Promise<_172.QueryCurrentPlanResponse>;
                        appliedPlan(request: _172.QueryAppliedPlanRequest): Promise<_172.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _172.QueryUpgradedConsensusStateRequest): Promise<_172.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _172.QueryModuleVersionsRequest): Promise<_172.QueryModuleVersionsResponse>;
                        authority(request?: _172.QueryAuthorityRequest): Promise<_172.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _277.LCDQueryClient;
                };
                authz: {
                    v1beta1: _278.LCDQueryClient;
                };
                bank: {
                    v1beta1: _279.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _280.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _281.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _282.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _283.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _284.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _285.LCDQueryClient;
                };
                gov: {
                    v1: _286.LCDQueryClient;
                    v1beta1: _287.LCDQueryClient;
                };
                group: {
                    v1: _288.LCDQueryClient;
                };
                mint: {
                    v1beta1: _289.LCDQueryClient;
                };
                nft: {
                    v1beta1: _290.LCDQueryClient;
                };
                params: {
                    v1beta1: _291.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _292.LCDQueryClient;
                };
                staking: {
                    v1beta1: _293.LCDQueryClient;
                };
                tx: {
                    v1beta1: _294.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _295.LCDQueryClient;
                };
            };
        }>;
    };
}
