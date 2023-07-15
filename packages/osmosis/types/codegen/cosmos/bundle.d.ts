import * as _83 from "./app/runtime/v1alpha1/module";
import * as _84 from "./app/v1alpha1/config";
import * as _85 from "./app/v1alpha1/module";
import * as _86 from "./app/v1alpha1/query";
import * as _87 from "./auth/module/v1/module";
import * as _88 from "./auth/v1beta1/auth";
import * as _89 from "./auth/v1beta1/genesis";
import * as _90 from "./auth/v1beta1/query";
import * as _91 from "./auth/v1beta1/tx";
import * as _92 from "./authz/module/v1/module";
import * as _93 from "./authz/v1beta1/authz";
import * as _94 from "./authz/v1beta1/event";
import * as _95 from "./authz/v1beta1/genesis";
import * as _96 from "./authz/v1beta1/query";
import * as _97 from "./authz/v1beta1/tx";
import * as _98 from "./autocli/v1/options";
import * as _99 from "./autocli/v1/query";
import * as _100 from "./bank/module/v1/module";
import * as _101 from "./bank/v1beta1/authz";
import * as _102 from "./bank/v1beta1/bank";
import * as _103 from "./bank/v1beta1/genesis";
import * as _104 from "./bank/v1beta1/query";
import * as _105 from "./bank/v1beta1/tx";
import * as _106 from "./base/abci/v1beta1/abci";
import * as _107 from "./base/kv/v1beta1/kv";
import * as _108 from "./base/node/v1beta1/query";
import * as _109 from "./base/query/v1beta1/pagination";
import * as _110 from "./base/reflection/v1beta1/reflection";
import * as _111 from "./base/reflection/v2alpha1/reflection";
import * as _112 from "./base/snapshots/v1beta1/snapshot";
import * as _113 from "./base/store/v1beta1/commit_info";
import * as _114 from "./base/store/v1beta1/listening";
import * as _115 from "./base/tendermint/v1beta1/query";
import * as _116 from "./base/tendermint/v1beta1/types";
import * as _117 from "./base/v1beta1/coin";
import * as _118 from "./capability/module/v1/module";
import * as _119 from "./capability/v1beta1/capability";
import * as _120 from "./capability/v1beta1/genesis";
import * as _121 from "./consensus/module/v1/module";
import * as _122 from "./consensus/v1/query";
import * as _123 from "./consensus/v1/tx";
import * as _124 from "./crisis/module/v1/module";
import * as _125 from "./crisis/v1beta1/genesis";
import * as _126 from "./crisis/v1beta1/tx";
import * as _127 from "./crypto/ed25519/keys";
import * as _128 from "./crypto/hd/v1/hd";
import * as _129 from "./crypto/keyring/v1/record";
import * as _130 from "./crypto/multisig/keys";
import * as _131 from "./crypto/secp256k1/keys";
import * as _132 from "./crypto/secp256r1/keys";
import * as _133 from "./distribution/module/v1/module";
import * as _134 from "./distribution/v1beta1/distribution";
import * as _135 from "./distribution/v1beta1/genesis";
import * as _136 from "./distribution/v1beta1/query";
import * as _137 from "./distribution/v1beta1/tx";
import * as _138 from "./evidence/module/v1/module";
import * as _139 from "./evidence/v1beta1/evidence";
import * as _140 from "./evidence/v1beta1/genesis";
import * as _141 from "./evidence/v1beta1/query";
import * as _142 from "./evidence/v1beta1/tx";
import * as _143 from "./feegrant/module/v1/module";
import * as _144 from "./feegrant/v1beta1/feegrant";
import * as _145 from "./feegrant/v1beta1/genesis";
import * as _146 from "./feegrant/v1beta1/query";
import * as _147 from "./feegrant/v1beta1/tx";
import * as _148 from "./genutil/module/v1/module";
import * as _149 from "./genutil/v1beta1/genesis";
import * as _150 from "./gov/module/v1/module";
import * as _151 from "./gov/v1/genesis";
import * as _152 from "./gov/v1/gov";
import * as _153 from "./gov/v1/query";
import * as _154 from "./gov/v1/tx";
import * as _155 from "./gov/v1beta1/genesis";
import * as _156 from "./gov/v1beta1/gov";
import * as _157 from "./gov/v1beta1/query";
import * as _158 from "./gov/v1beta1/tx";
import * as _159 from "./group/module/v1/module";
import * as _160 from "./group/v1/events";
import * as _161 from "./group/v1/genesis";
import * as _162 from "./group/v1/query";
import * as _163 from "./group/v1/tx";
import * as _164 from "./group/v1/types";
import * as _165 from "./mint/module/v1/module";
import * as _166 from "./mint/v1beta1/genesis";
import * as _167 from "./mint/v1beta1/mint";
import * as _168 from "./mint/v1beta1/query";
import * as _169 from "./mint/v1beta1/tx";
import * as _171 from "./nft/module/v1/module";
import * as _172 from "./nft/v1beta1/event";
import * as _173 from "./nft/v1beta1/genesis";
import * as _174 from "./nft/v1beta1/nft";
import * as _175 from "./nft/v1beta1/query";
import * as _176 from "./nft/v1beta1/tx";
import * as _177 from "./orm/module/v1alpha1/module";
import * as _178 from "./orm/query/v1alpha1/query";
import * as _179 from "./orm/v1/orm";
import * as _180 from "./orm/v1alpha1/schema";
import * as _181 from "./params/module/v1/module";
import * as _182 from "./params/v1beta1/params";
import * as _183 from "./params/v1beta1/query";
import * as _185 from "./reflection/v1/reflection";
import * as _186 from "./slashing/module/v1/module";
import * as _187 from "./slashing/v1beta1/genesis";
import * as _188 from "./slashing/v1beta1/query";
import * as _189 from "./slashing/v1beta1/slashing";
import * as _190 from "./slashing/v1beta1/tx";
import * as _191 from "./staking/module/v1/module";
import * as _192 from "./staking/v1beta1/authz";
import * as _193 from "./staking/v1beta1/genesis";
import * as _194 from "./staking/v1beta1/query";
import * as _195 from "./staking/v1beta1/staking";
import * as _196 from "./staking/v1beta1/tx";
import * as _197 from "./tx/config/v1/config";
import * as _198 from "./tx/signing/v1beta1/signing";
import * as _199 from "./tx/v1beta1/service";
import * as _200 from "./tx/v1beta1/tx";
import * as _201 from "./upgrade/module/v1/module";
import * as _202 from "./upgrade/v1beta1/query";
import * as _203 from "./upgrade/v1beta1/tx";
import * as _204 from "./upgrade/v1beta1/upgrade";
import * as _205 from "./vesting/module/v1/module";
import * as _206 from "./vesting/v1beta1/tx";
import * as _207 from "./vesting/v1beta1/vesting";
import * as _314 from "./app/v1alpha1/query.rpc.Query";
import * as _315 from "./auth/v1beta1/query.rpc.Query";
import * as _316 from "./authz/v1beta1/query.rpc.Query";
import * as _317 from "./autocli/v1/query.rpc.Query";
import * as _318 from "./bank/v1beta1/query.rpc.Query";
import * as _319 from "./base/node/v1beta1/query.rpc.Service";
import * as _320 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _321 from "./consensus/v1/query.rpc.Query";
import * as _322 from "./distribution/v1beta1/query.rpc.Query";
import * as _323 from "./evidence/v1beta1/query.rpc.Query";
import * as _324 from "./feegrant/v1beta1/query.rpc.Query";
import * as _325 from "./gov/v1/query.rpc.Query";
import * as _326 from "./gov/v1beta1/query.rpc.Query";
import * as _327 from "./group/v1/query.rpc.Query";
import * as _328 from "./mint/v1beta1/query.rpc.Query";
import * as _329 from "./nft/v1beta1/query.rpc.Query";
import * as _330 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _331 from "./params/v1beta1/query.rpc.Query";
import * as _332 from "./slashing/v1beta1/query.rpc.Query";
import * as _333 from "./staking/v1beta1/query.rpc.Query";
import * as _334 from "./tx/v1beta1/service.rpc.Service";
import * as _335 from "./upgrade/v1beta1/query.rpc.Query";
import * as _336 from "./auth/v1beta1/tx.rpc.msg";
import * as _337 from "./authz/v1beta1/tx.rpc.msg";
import * as _338 from "./bank/v1beta1/tx.rpc.msg";
import * as _339 from "./consensus/v1/tx.rpc.msg";
import * as _340 from "./crisis/v1beta1/tx.rpc.msg";
import * as _341 from "./distribution/v1beta1/tx.rpc.msg";
import * as _342 from "./evidence/v1beta1/tx.rpc.msg";
import * as _343 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _344 from "./gov/v1/tx.rpc.msg";
import * as _345 from "./gov/v1beta1/tx.rpc.msg";
import * as _346 from "./group/v1/tx.rpc.msg";
import * as _347 from "./mint/v1beta1/tx.rpc.msg";
import * as _348 from "./nft/v1beta1/tx.rpc.msg";
import * as _349 from "./slashing/v1beta1/tx.rpc.msg";
import * as _350 from "./staking/v1beta1/tx.rpc.msg";
import * as _351 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _352 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _83.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.Module;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                };
                StoreKeyConfig: {
                    encode(message: _83.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _83.StoreKeyConfig;
                    fromPartial(object: Partial<_83.StoreKeyConfig>): _83.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _86.QueryConfigRequest): Promise<_86.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _86.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _86.QueryConfigRequest;
                fromPartial(_: Partial<_86.QueryConfigRequest>): _86.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _86.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.QueryConfigResponse;
                fromPartial(object: Partial<_86.QueryConfigResponse>): _86.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _85.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ModuleDescriptor;
                fromPartial(object: Partial<_85.ModuleDescriptor>): _85.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _85.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.PackageReference;
                fromPartial(object: Partial<_85.PackageReference>): _85.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _85.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.MigrateFromInfo;
                fromPartial(object: Partial<_85.MigrateFromInfo>): _85.MigrateFromInfo;
            };
            Config: {
                encode(message: _84.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.Config;
                fromPartial(object: Partial<_84.Config>): _84.Config;
            };
            ModuleConfig: {
                encode(message: _84.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ModuleConfig;
                fromPartial(object: Partial<_84.ModuleConfig>): _84.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _84.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.GolangBinding;
                fromPartial(object: Partial<_84.GolangBinding>): _84.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _87.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.Module;
                    fromPartial(object: Partial<_87.Module>): _87.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _87.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.ModuleAccountPermission;
                    fromPartial(object: Partial<_87.ModuleAccountPermission>): _87.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _336.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _90.QueryAccountsRequest): Promise<_90.QueryAccountsResponse>;
                account(request: _90.QueryAccountRequest): Promise<_90.QueryAccountResponse>;
                accountAddressByID(request: _90.QueryAccountAddressByIDRequest): Promise<_90.QueryAccountAddressByIDResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                moduleAccounts(request?: _90.QueryModuleAccountsRequest): Promise<_90.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _90.QueryModuleAccountByNameRequest): Promise<_90.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _90.Bech32PrefixRequest): Promise<_90.Bech32PrefixResponse>;
                addressBytesToString(request: _90.AddressBytesToStringRequest): Promise<_90.AddressBytesToStringResponse>;
                addressStringToBytes(request: _90.AddressStringToBytesRequest): Promise<_90.AddressStringToBytesResponse>;
                accountInfo(request: _90.QueryAccountInfoRequest): Promise<_90.QueryAccountInfoResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _91.MsgUpdateParams) => {
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
                    }) => _91.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _91.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.MsgUpdateParams;
                fromPartial(object: Partial<_91.MsgUpdateParams>): _91.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _91.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _91.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_91.MsgUpdateParamsResponse>): _91.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _90.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountsRequest;
                fromPartial(object: Partial<_90.QueryAccountsRequest>): _90.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _90.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountsResponse;
                fromPartial(object: Partial<_90.QueryAccountsResponse>): _90.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _90.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountRequest;
                fromPartial(object: Partial<_90.QueryAccountRequest>): _90.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _90.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountResponse;
                fromPartial(object: Partial<_90.QueryAccountResponse>): _90.QueryAccountResponse;
            };
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
            QueryModuleAccountsRequest: {
                encode(_: _90.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_90.QueryModuleAccountsRequest>): _90.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _90.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_90.QueryModuleAccountsResponse>): _90.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _90.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_90.QueryModuleAccountByNameRequest>): _90.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _90.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_90.QueryModuleAccountByNameResponse>): _90.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _90.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.Bech32PrefixRequest;
                fromPartial(_: Partial<_90.Bech32PrefixRequest>): _90.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _90.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Bech32PrefixResponse;
                fromPartial(object: Partial<_90.Bech32PrefixResponse>): _90.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _90.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AddressBytesToStringRequest;
                fromPartial(object: Partial<_90.AddressBytesToStringRequest>): _90.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _90.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AddressBytesToStringResponse;
                fromPartial(object: Partial<_90.AddressBytesToStringResponse>): _90.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _90.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AddressStringToBytesRequest;
                fromPartial(object: Partial<_90.AddressStringToBytesRequest>): _90.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _90.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.AddressStringToBytesResponse;
                fromPartial(object: Partial<_90.AddressStringToBytesResponse>): _90.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _90.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_90.QueryAccountAddressByIDRequest>): _90.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _90.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_90.QueryAccountAddressByIDResponse>): _90.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _90.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountInfoRequest;
                fromPartial(object: Partial<_90.QueryAccountInfoRequest>): _90.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _90.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.QueryAccountInfoResponse;
                fromPartial(object: Partial<_90.QueryAccountInfoResponse>): _90.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.GenesisState;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
            };
            BaseAccount: {
                encode(message: _88.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.BaseAccount;
                fromPartial(object: Partial<_88.BaseAccount>): _88.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _88.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.ModuleAccount;
                fromPartial(object: Partial<_88.ModuleAccount>): _88.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _88.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.ModuleCredential;
                fromPartial(object: Partial<_88.ModuleCredential>): _88.ModuleCredential;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _92.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _92.Module;
                    fromPartial(_: Partial<_92.Module>): _92.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _337.MsgClientImpl;
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _96.QueryGrantsRequest): Promise<_96.QueryGrantsResponse>;
                granterGrants(request: _96.QueryGranterGrantsRequest): Promise<_96.QueryGranterGrantsResponse>;
                granteeGrants(request: _96.QueryGranteeGrantsRequest): Promise<_96.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _97.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _97.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _97.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _97.MsgGrant): {
                        typeUrl: string;
                        value: _97.MsgGrant;
                    };
                    exec(value: _97.MsgExec): {
                        typeUrl: string;
                        value: _97.MsgExec;
                    };
                    revoke(value: _97.MsgRevoke): {
                        typeUrl: string;
                        value: _97.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _97.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _97.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _97.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _97.MsgGrant): {
                        typeUrl: string;
                        value: _97.MsgGrant;
                    };
                    exec(value: _97.MsgExec): {
                        typeUrl: string;
                        value: _97.MsgExec;
                    };
                    revoke(value: _97.MsgRevoke): {
                        typeUrl: string;
                        value: _97.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _97.MsgGrant) => {
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
                    }) => _97.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _97.MsgExec) => {
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
                    }) => _97.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _97.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _97.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _97.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgGrant;
                fromPartial(object: Partial<_97.MsgGrant>): _97.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _97.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgExecResponse;
                fromPartial(object: Partial<_97.MsgExecResponse>): _97.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _97.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgExec;
                fromPartial(object: Partial<_97.MsgExec>): _97.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _97.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _97.MsgGrantResponse;
                fromPartial(_: Partial<_97.MsgGrantResponse>): _97.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _97.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.MsgRevoke;
                fromPartial(object: Partial<_97.MsgRevoke>): _97.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _97.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _97.MsgRevokeResponse;
                fromPartial(_: Partial<_97.MsgRevokeResponse>): _97.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _96.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGrantsRequest;
                fromPartial(object: Partial<_96.QueryGrantsRequest>): _96.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _96.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGrantsResponse;
                fromPartial(object: Partial<_96.QueryGrantsResponse>): _96.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _96.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_96.QueryGranterGrantsRequest>): _96.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _96.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_96.QueryGranterGrantsResponse>): _96.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _96.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_96.QueryGranteeGrantsRequest>): _96.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _96.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_96.QueryGranteeGrantsResponse>): _96.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
            EventGrant: {
                encode(message: _94.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.EventGrant;
                fromPartial(object: Partial<_94.EventGrant>): _94.EventGrant;
            };
            EventRevoke: {
                encode(message: _94.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.EventRevoke;
                fromPartial(object: Partial<_94.EventRevoke>): _94.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _93.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GenericAuthorization;
                fromPartial(object: Partial<_93.GenericAuthorization>): _93.GenericAuthorization;
            };
            Grant: {
                encode(message: _93.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Grant;
                fromPartial(object: Partial<_93.Grant>): _93.Grant;
            };
            GrantAuthorization: {
                encode(message: _93.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GrantAuthorization;
                fromPartial(object: Partial<_93.GrantAuthorization>): _93.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _93.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.GrantQueueItem;
                fromPartial(object: Partial<_93.GrantQueueItem>): _93.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _99.AppOptionsRequest): Promise<_99.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _99.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _99.AppOptionsRequest;
                fromPartial(_: Partial<_99.AppOptionsRequest>): _99.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _99.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_99.AppOptionsResponse_ModuleOptionsEntry>): _99.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _99.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.AppOptionsResponse;
                fromPartial(object: Partial<_99.AppOptionsResponse>): _99.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _98.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.ModuleOptions;
                fromPartial(object: Partial<_98.ModuleOptions>): _98.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _98.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_98.ServiceCommandDescriptor_SubCommandsEntry>): _98.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _98.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.ServiceCommandDescriptor;
                fromPartial(object: Partial<_98.ServiceCommandDescriptor>): _98.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _98.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_98.RpcCommandOptions_FlagOptionsEntry>): _98.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _98.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.RpcCommandOptions;
                fromPartial(object: Partial<_98.RpcCommandOptions>): _98.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _98.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.FlagOptions;
                fromPartial(object: Partial<_98.FlagOptions>): _98.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _98.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.PositionalArgDescriptor;
                fromPartial(object: Partial<_98.PositionalArgDescriptor>): _98.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _100.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.Module;
                    fromPartial(object: Partial<_100.Module>): _100.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _338.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _104.QueryBalanceRequest): Promise<_104.QueryBalanceResponse>;
                allBalances(request: _104.QueryAllBalancesRequest): Promise<_104.QueryAllBalancesResponse>;
                spendableBalances(request: _104.QuerySpendableBalancesRequest): Promise<_104.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _104.QuerySpendableBalanceByDenomRequest): Promise<_104.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _104.QueryTotalSupplyRequest): Promise<_104.QueryTotalSupplyResponse>;
                supplyOf(request: _104.QuerySupplyOfRequest): Promise<_104.QuerySupplyOfResponse>;
                params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                denomMetadata(request: _104.QueryDenomMetadataRequest): Promise<_104.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _104.QueryDenomsMetadataRequest): Promise<_104.QueryDenomsMetadataResponse>;
                denomOwners(request: _104.QueryDenomOwnersRequest): Promise<_104.QueryDenomOwnersResponse>;
                sendEnabled(request: _104.QuerySendEnabledRequest): Promise<_104.QuerySendEnabledResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _105.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _105.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _105.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _105.MsgSend): {
                        typeUrl: string;
                        value: _105.MsgSend;
                    };
                    multiSend(value: _105.MsgMultiSend): {
                        typeUrl: string;
                        value: _105.MsgMultiSend;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                    setSendEnabled(value: _105.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _105.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _105.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _105.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _105.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _105.MsgSend): {
                        typeUrl: string;
                        value: _105.MsgSend;
                    };
                    multiSend(value: _105.MsgMultiSend): {
                        typeUrl: string;
                        value: _105.MsgMultiSend;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                    setSendEnabled(value: _105.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _105.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _105.MsgSend) => {
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
                    }) => _105.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _105.MsgMultiSend) => {
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
                    }) => _105.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _105.MsgUpdateParams) => {
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
                    }) => _105.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _105.MsgSetSendEnabled) => {
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
                    }) => _105.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _105.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MsgSend;
                fromPartial(object: Partial<_105.MsgSend>): _105.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _105.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.MsgSendResponse;
                fromPartial(_: Partial<_105.MsgSendResponse>): _105.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _105.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MsgMultiSend;
                fromPartial(object: Partial<_105.MsgMultiSend>): _105.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _105.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.MsgMultiSendResponse;
                fromPartial(_: Partial<_105.MsgMultiSendResponse>): _105.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _105.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MsgUpdateParams;
                fromPartial(object: Partial<_105.MsgUpdateParams>): _105.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _105.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_105.MsgUpdateParamsResponse>): _105.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _105.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _105.MsgSetSendEnabled;
                fromPartial(object: Partial<_105.MsgSetSendEnabled>): _105.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _105.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _105.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_105.MsgSetSendEnabledResponse>): _105.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _104.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryBalanceRequest;
                fromPartial(object: Partial<_104.QueryBalanceRequest>): _104.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _104.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryBalanceResponse;
                fromPartial(object: Partial<_104.QueryBalanceResponse>): _104.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _104.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryAllBalancesRequest;
                fromPartial(object: Partial<_104.QueryAllBalancesRequest>): _104.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _104.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryAllBalancesResponse;
                fromPartial(object: Partial<_104.QueryAllBalancesResponse>): _104.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _104.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_104.QuerySpendableBalancesRequest>): _104.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _104.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_104.QuerySpendableBalancesResponse>): _104.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _104.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_104.QuerySpendableBalanceByDenomRequest>): _104.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _104.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_104.QuerySpendableBalanceByDenomResponse>): _104.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _104.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_104.QueryTotalSupplyRequest>): _104.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _104.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_104.QueryTotalSupplyResponse>): _104.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _104.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySupplyOfRequest;
                fromPartial(object: Partial<_104.QuerySupplyOfRequest>): _104.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _104.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySupplyOfResponse;
                fromPartial(object: Partial<_104.QuerySupplyOfResponse>): _104.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _104.QueryParamsRequest;
                fromPartial(_: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryParamsResponse;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _104.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_104.QueryDenomsMetadataRequest>): _104.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _104.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_104.QueryDenomsMetadataResponse>): _104.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _104.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_104.QueryDenomMetadataRequest>): _104.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _104.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_104.QueryDenomMetadataResponse>): _104.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _104.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_104.QueryDenomOwnersRequest>): _104.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _104.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.DenomOwner;
                fromPartial(object: Partial<_104.DenomOwner>): _104.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _104.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_104.QueryDenomOwnersResponse>): _104.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _104.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySendEnabledRequest;
                fromPartial(object: Partial<_104.QuerySendEnabledRequest>): _104.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _104.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _104.QuerySendEnabledResponse;
                fromPartial(object: Partial<_104.QuerySendEnabledResponse>): _104.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
            };
            Balance: {
                encode(message: _103.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _103.Balance;
                fromPartial(object: Partial<_103.Balance>): _103.Balance;
            };
            Params: {
                encode(message: _102.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Params;
                fromPartial(object: Partial<_102.Params>): _102.Params;
            };
            SendEnabled: {
                encode(message: _102.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.SendEnabled;
                fromPartial(object: Partial<_102.SendEnabled>): _102.SendEnabled;
            };
            Input: {
                encode(message: _102.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Input;
                fromPartial(object: Partial<_102.Input>): _102.Input;
            };
            Output: {
                encode(message: _102.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Output;
                fromPartial(object: Partial<_102.Output>): _102.Output;
            };
            Supply: {
                encode(message: _102.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Supply;
                fromPartial(object: Partial<_102.Supply>): _102.Supply;
            };
            DenomUnit: {
                encode(message: _102.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.DenomUnit;
                fromPartial(object: Partial<_102.DenomUnit>): _102.DenomUnit;
            };
            Metadata: {
                encode(message: _102.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _102.Metadata;
                fromPartial(object: Partial<_102.Metadata>): _102.Metadata;
            };
            SendAuthorization: {
                encode(message: _101.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.SendAuthorization;
                fromPartial(object: Partial<_101.SendAuthorization>): _101.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _106.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.TxResponse;
                    fromPartial(object: Partial<_106.TxResponse>): _106.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _106.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ABCIMessageLog;
                    fromPartial(object: Partial<_106.ABCIMessageLog>): _106.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _106.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.StringEvent;
                    fromPartial(object: Partial<_106.StringEvent>): _106.StringEvent;
                };
                Attribute: {
                    encode(message: _106.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Attribute;
                    fromPartial(object: Partial<_106.Attribute>): _106.Attribute;
                };
                GasInfo: {
                    encode(message: _106.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.GasInfo;
                    fromPartial(object: Partial<_106.GasInfo>): _106.GasInfo;
                };
                Result: {
                    encode(message: _106.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Result;
                    fromPartial(object: Partial<_106.Result>): _106.Result;
                };
                SimulationResponse: {
                    encode(message: _106.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.SimulationResponse;
                    fromPartial(object: Partial<_106.SimulationResponse>): _106.SimulationResponse;
                };
                MsgData: {
                    encode(message: _106.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.MsgData;
                    fromPartial(object: Partial<_106.MsgData>): _106.MsgData;
                };
                TxMsgData: {
                    encode(message: _106.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.TxMsgData;
                    fromPartial(object: Partial<_106.TxMsgData>): _106.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _106.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.SearchTxsResult;
                    fromPartial(object: Partial<_106.SearchTxsResult>): _106.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _107.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.Pairs;
                    fromPartial(object: Partial<_107.Pairs>): _107.Pairs;
                };
                Pair: {
                    encode(message: _107.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.Pair;
                    fromPartial(object: Partial<_107.Pair>): _107.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _319.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _108.ConfigRequest): Promise<_108.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _108.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _108.ConfigRequest;
                    fromPartial(_: Partial<_108.ConfigRequest>): _108.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _108.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.ConfigResponse;
                    fromPartial(object: Partial<_108.ConfigResponse>): _108.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _109.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.PageRequest;
                    fromPartial(object: Partial<_109.PageRequest>): _109.PageRequest;
                };
                PageResponse: {
                    encode(message: _109.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.PageResponse;
                    fromPartial(object: Partial<_109.PageResponse>): _109.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _110.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _110.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_110.ListAllInterfacesRequest>): _110.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _110.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_110.ListAllInterfacesResponse>): _110.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _110.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ListImplementationsRequest;
                    fromPartial(object: Partial<_110.ListImplementationsRequest>): _110.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _110.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ListImplementationsResponse;
                    fromPartial(object: Partial<_110.ListImplementationsResponse>): _110.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _111.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.AppDescriptor;
                    fromPartial(object: Partial<_111.AppDescriptor>): _111.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _111.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.TxDescriptor;
                    fromPartial(object: Partial<_111.TxDescriptor>): _111.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _111.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.AuthnDescriptor;
                    fromPartial(object: Partial<_111.AuthnDescriptor>): _111.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _111.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.SigningModeDescriptor;
                    fromPartial(object: Partial<_111.SigningModeDescriptor>): _111.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _111.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ChainDescriptor;
                    fromPartial(object: Partial<_111.ChainDescriptor>): _111.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _111.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.CodecDescriptor;
                    fromPartial(object: Partial<_111.CodecDescriptor>): _111.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _111.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.InterfaceDescriptor;
                    fromPartial(object: Partial<_111.InterfaceDescriptor>): _111.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _111.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_111.InterfaceImplementerDescriptor>): _111.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _111.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_111.InterfaceAcceptingMessageDescriptor>): _111.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _111.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.ConfigurationDescriptor;
                    fromPartial(object: Partial<_111.ConfigurationDescriptor>): _111.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _111.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.MsgDescriptor;
                    fromPartial(object: Partial<_111.MsgDescriptor>): _111.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _111.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_111.GetAuthnDescriptorRequest>): _111.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _111.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_111.GetAuthnDescriptorResponse>): _111.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _111.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_111.GetChainDescriptorRequest>): _111.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _111.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_111.GetChainDescriptorResponse>): _111.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _111.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_111.GetCodecDescriptorRequest>): _111.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _111.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_111.GetCodecDescriptorResponse>): _111.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _111.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_111.GetConfigurationDescriptorRequest>): _111.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _111.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_111.GetConfigurationDescriptorResponse>): _111.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _111.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_111.GetQueryServicesDescriptorRequest>): _111.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _111.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_111.GetQueryServicesDescriptorResponse>): _111.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _111.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _111.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_111.GetTxDescriptorRequest>): _111.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _111.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_111.GetTxDescriptorResponse>): _111.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _111.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryServicesDescriptor;
                    fromPartial(object: Partial<_111.QueryServicesDescriptor>): _111.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _111.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryServiceDescriptor;
                    fromPartial(object: Partial<_111.QueryServiceDescriptor>): _111.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _111.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.QueryMethodDescriptor;
                    fromPartial(object: Partial<_111.QueryMethodDescriptor>): _111.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _112.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.Snapshot;
                    fromPartial(object: Partial<_112.Snapshot>): _112.Snapshot;
                };
                Metadata: {
                    encode(message: _112.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.Metadata;
                    fromPartial(object: Partial<_112.Metadata>): _112.Metadata;
                };
                SnapshotItem: {
                    encode(message: _112.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotItem;
                    fromPartial(object: Partial<_112.SnapshotItem>): _112.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _112.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotStoreItem;
                    fromPartial(object: Partial<_112.SnapshotStoreItem>): _112.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _112.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotIAVLItem;
                    fromPartial(object: Partial<_112.SnapshotIAVLItem>): _112.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _112.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_112.SnapshotExtensionMeta>): _112.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _112.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_112.SnapshotExtensionPayload>): _112.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _112.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotKVItem;
                    fromPartial(object: Partial<_112.SnapshotKVItem>): _112.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _112.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.SnapshotSchema;
                    fromPartial(object: Partial<_112.SnapshotSchema>): _112.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _114.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.StoreKVPair;
                    fromPartial(object: Partial<_114.StoreKVPair>): _114.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _114.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.BlockMetadata;
                    fromPartial(object: Partial<_114.BlockMetadata>): _114.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _114.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_114.BlockMetadata_DeliverTx>): _114.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _113.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.CommitInfo;
                    fromPartial(object: Partial<_113.CommitInfo>): _113.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _113.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.StoreInfo;
                    fromPartial(object: Partial<_113.StoreInfo>): _113.StoreInfo;
                };
                CommitID: {
                    encode(message: _113.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.CommitID;
                    fromPartial(object: Partial<_113.CommitID>): _113.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _320.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _115.GetNodeInfoRequest): Promise<_115.GetNodeInfoResponse>;
                    getSyncing(request?: _115.GetSyncingRequest): Promise<_115.GetSyncingResponse>;
                    getLatestBlock(request?: _115.GetLatestBlockRequest): Promise<_115.GetLatestBlockResponse>;
                    getBlockByHeight(request: _115.GetBlockByHeightRequest): Promise<_115.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _115.GetLatestValidatorSetRequest): Promise<_115.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _115.GetValidatorSetByHeightRequest): Promise<_115.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _115.ABCIQueryRequest): Promise<_115.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _116.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Block;
                    fromPartial(object: Partial<_116.Block>): _116.Block;
                };
                Header: {
                    encode(message: _116.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.Header;
                    fromPartial(object: Partial<_116.Header>): _116.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _115.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_115.GetValidatorSetByHeightRequest>): _115.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _115.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_115.GetValidatorSetByHeightResponse>): _115.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _115.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_115.GetLatestValidatorSetRequest>): _115.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _115.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_115.GetLatestValidatorSetResponse>): _115.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _115.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Validator;
                    fromPartial(object: Partial<_115.Validator>): _115.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _115.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_115.GetBlockByHeightRequest>): _115.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _115.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_115.GetBlockByHeightResponse>): _115.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _115.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _115.GetLatestBlockRequest;
                    fromPartial(_: Partial<_115.GetLatestBlockRequest>): _115.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _115.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetLatestBlockResponse;
                    fromPartial(object: Partial<_115.GetLatestBlockResponse>): _115.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _115.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _115.GetSyncingRequest;
                    fromPartial(_: Partial<_115.GetSyncingRequest>): _115.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _115.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetSyncingResponse;
                    fromPartial(object: Partial<_115.GetSyncingResponse>): _115.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _115.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _115.GetNodeInfoRequest;
                    fromPartial(_: Partial<_115.GetNodeInfoRequest>): _115.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _115.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.GetNodeInfoResponse;
                    fromPartial(object: Partial<_115.GetNodeInfoResponse>): _115.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _115.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.VersionInfo;
                    fromPartial(object: Partial<_115.VersionInfo>): _115.VersionInfo;
                };
                Module: {
                    encode(message: _115.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Module;
                    fromPartial(object: Partial<_115.Module>): _115.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _115.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ABCIQueryRequest;
                    fromPartial(object: Partial<_115.ABCIQueryRequest>): _115.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _115.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ABCIQueryResponse;
                    fromPartial(object: Partial<_115.ABCIQueryResponse>): _115.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _115.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ProofOp;
                    fromPartial(object: Partial<_115.ProofOp>): _115.ProofOp;
                };
                ProofOps: {
                    encode(message: _115.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ProofOps;
                    fromPartial(object: Partial<_115.ProofOps>): _115.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _117.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.Coin;
                fromPartial(object: Partial<_117.Coin>): _117.Coin;
            };
            DecCoin: {
                encode(message: _117.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.DecCoin;
                fromPartial(object: Partial<_117.DecCoin>): _117.DecCoin;
            };
            IntProto: {
                encode(message: _117.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.IntProto;
                fromPartial(object: Partial<_117.IntProto>): _117.IntProto;
            };
            DecProto: {
                encode(message: _117.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _117.DecProto;
                fromPartial(object: Partial<_117.DecProto>): _117.DecProto;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _118.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.Module;
                    fromPartial(object: Partial<_118.Module>): _118.Module;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                encode(message: _120.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.GenesisOwners;
                fromPartial(object: Partial<_120.GenesisOwners>): _120.GenesisOwners;
            };
            GenesisState: {
                encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
            };
            Capability: {
                encode(message: _119.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Capability;
                fromPartial(object: Partial<_119.Capability>): _119.Capability;
            };
            Owner: {
                encode(message: _119.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.Owner;
                fromPartial(object: Partial<_119.Owner>): _119.Owner;
            };
            CapabilityOwners: {
                encode(message: _119.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _119.CapabilityOwners;
                fromPartial(object: Partial<_119.CapabilityOwners>): _119.CapabilityOwners;
            };
        };
    }
    namespace consensus {
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
            MsgClientImpl: typeof _339.MsgClientImpl;
            QueryClientImpl: typeof _321.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _123.MsgUpdateParams) => {
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
                    }) => _123.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _123.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.MsgUpdateParams;
                fromPartial(object: Partial<_123.MsgUpdateParams>): _123.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _123.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_123.MsgUpdateParamsResponse>): _123.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _122.QueryParamsRequest;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _124.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _124.Module;
                    fromPartial(object: Partial<_124.Module>): _124.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _340.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _126.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _126.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _126.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _126.MsgVerifyInvariant;
                    };
                    updateParams(value: _126.MsgUpdateParams): {
                        typeUrl: string;
                        value: _126.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _126.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _126.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _126.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _126.MsgVerifyInvariant;
                    };
                    updateParams(value: _126.MsgUpdateParams): {
                        typeUrl: string;
                        value: _126.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _126.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _126.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constantFee }: _126.MsgUpdateParams) => {
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
                    }) => _126.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _126.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgVerifyInvariant;
                fromPartial(object: Partial<_126.MsgVerifyInvariant>): _126.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _126.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_126.MsgVerifyInvariantResponse>): _126.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _126.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.MsgUpdateParams;
                fromPartial(object: Partial<_126.MsgUpdateParams>): _126.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _126.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _126.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_126.MsgUpdateParamsResponse>): _126.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _127.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.PubKey;
                fromPartial(object: Partial<_127.PubKey>): _127.PubKey;
            };
            PrivKey: {
                encode(message: _127.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _127.PrivKey;
                fromPartial(object: Partial<_127.PrivKey>): _127.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _128.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _128.BIP44Params;
                    fromPartial(object: Partial<_128.BIP44Params>): _128.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _129.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.Record;
                    fromPartial(object: Partial<_129.Record>): _129.Record;
                };
                Record_Local: {
                    encode(message: _129.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.Record_Local;
                    fromPartial(object: Partial<_129.Record_Local>): _129.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _129.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _129.Record_Ledger;
                    fromPartial(object: Partial<_129.Record_Ledger>): _129.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _129.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _129.Record_Multi;
                    fromPartial(_: Partial<_129.Record_Multi>): _129.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _129.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _129.Record_Offline;
                    fromPartial(_: Partial<_129.Record_Offline>): _129.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _130.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _130.LegacyAminoPubKey;
                fromPartial(object: Partial<_130.LegacyAminoPubKey>): _130.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _131.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.PubKey;
                fromPartial(object: Partial<_131.PubKey>): _131.PubKey;
            };
            PrivKey: {
                encode(message: _131.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _131.PrivKey;
                fromPartial(object: Partial<_131.PrivKey>): _131.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _132.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.PubKey;
                fromPartial(object: Partial<_132.PubKey>): _132.PubKey;
            };
            PrivKey: {
                encode(message: _132.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _132.PrivKey;
                fromPartial(object: Partial<_132.PrivKey>): _132.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _133.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _133.Module;
                    fromPartial(object: Partial<_133.Module>): _133.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _341.MsgClientImpl;
            QueryClientImpl: typeof _322.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                validatorDistributionInfo(request: _136.QueryValidatorDistributionInfoRequest): Promise<_136.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _136.QueryValidatorOutstandingRewardsRequest): Promise<_136.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _136.QueryValidatorCommissionRequest): Promise<_136.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _136.QueryValidatorSlashesRequest): Promise<_136.QueryValidatorSlashesResponse>;
                delegationRewards(request: _136.QueryDelegationRewardsRequest): Promise<_136.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _136.QueryDelegationTotalRewardsRequest): Promise<_136.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _136.QueryDelegatorValidatorsRequest): Promise<_136.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _136.QueryDelegatorWithdrawAddressRequest): Promise<_136.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _136.QueryCommunityPoolRequest): Promise<_136.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _137.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _137.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _137.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _137.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _137.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _137.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _137.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _137.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _137.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _137.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _137.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _137.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _137.MsgFundCommunityPool;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _137.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _137.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _137.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _137.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _137.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _137.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _137.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _137.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _137.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _137.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _137.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _137.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _137.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _137.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _137.MsgFundCommunityPool;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _137.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _137.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _137.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _137.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _137.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _137.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _137.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _137.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _137.MsgFundCommunityPool) => {
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
                    }) => _137.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _137.MsgUpdateParams) => {
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
                    }) => _137.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _137.MsgCommunityPoolSpend) => {
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
                    }) => _137.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _137.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_137.MsgSetWithdrawAddress>): _137.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _137.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_137.MsgSetWithdrawAddressResponse>): _137.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _137.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_137.MsgWithdrawDelegatorReward>): _137.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _137.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_137.MsgWithdrawDelegatorRewardResponse>): _137.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _137.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_137.MsgWithdrawValidatorCommission>): _137.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _137.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_137.MsgWithdrawValidatorCommissionResponse>): _137.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _137.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgFundCommunityPool;
                fromPartial(object: Partial<_137.MsgFundCommunityPool>): _137.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _137.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_137.MsgFundCommunityPoolResponse>): _137.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _137.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgUpdateParams;
                fromPartial(object: Partial<_137.MsgUpdateParams>): _137.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _137.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_137.MsgUpdateParamsResponse>): _137.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _137.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _137.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_137.MsgCommunityPoolSpend>): _137.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _137.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _137.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_137.MsgCommunityPoolSpendResponse>): _137.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _136.QueryParamsRequest;
                fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryParamsResponse;
                fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _136.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_136.QueryValidatorDistributionInfoRequest>): _136.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _136.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_136.QueryValidatorDistributionInfoResponse>): _136.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _136.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_136.QueryValidatorOutstandingRewardsRequest>): _136.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _136.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_136.QueryValidatorOutstandingRewardsResponse>): _136.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _136.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_136.QueryValidatorCommissionRequest>): _136.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _136.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_136.QueryValidatorCommissionResponse>): _136.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _136.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_136.QueryValidatorSlashesRequest>): _136.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _136.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_136.QueryValidatorSlashesResponse>): _136.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _136.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_136.QueryDelegationRewardsRequest>): _136.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _136.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_136.QueryDelegationRewardsResponse>): _136.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _136.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_136.QueryDelegationTotalRewardsRequest>): _136.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _136.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_136.QueryDelegationTotalRewardsResponse>): _136.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _136.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_136.QueryDelegatorValidatorsRequest>): _136.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _136.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_136.QueryDelegatorValidatorsResponse>): _136.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _136.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_136.QueryDelegatorWithdrawAddressRequest>): _136.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _136.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_136.QueryDelegatorWithdrawAddressResponse>): _136.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _136.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _136.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_136.QueryCommunityPoolRequest>): _136.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _136.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _136.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_136.QueryCommunityPoolResponse>): _136.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _135.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_135.DelegatorWithdrawInfo>): _135.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _135.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_135.ValidatorOutstandingRewardsRecord>): _135.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _135.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_135.ValidatorAccumulatedCommissionRecord>): _135.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _135.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_135.ValidatorHistoricalRewardsRecord>): _135.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _135.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_135.ValidatorCurrentRewardsRecord>): _135.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _135.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_135.DelegatorStartingInfoRecord>): _135.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _135.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_135.ValidatorSlashEventRecord>): _135.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _135.GenesisState;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
            };
            Params: {
                encode(message: _134.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.Params;
                fromPartial(object: Partial<_134.Params>): _134.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _134.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_134.ValidatorHistoricalRewards>): _134.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _134.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorCurrentRewards;
                fromPartial(object: Partial<_134.ValidatorCurrentRewards>): _134.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _134.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_134.ValidatorAccumulatedCommission>): _134.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _134.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_134.ValidatorOutstandingRewards>): _134.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _134.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorSlashEvent;
                fromPartial(object: Partial<_134.ValidatorSlashEvent>): _134.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _134.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ValidatorSlashEvents;
                fromPartial(object: Partial<_134.ValidatorSlashEvents>): _134.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _134.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.FeePool;
                fromPartial(object: Partial<_134.FeePool>): _134.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _134.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_134.CommunityPoolSpendProposal>): _134.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _134.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.DelegatorStartingInfo;
                fromPartial(object: Partial<_134.DelegatorStartingInfo>): _134.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _134.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.DelegationDelegatorReward;
                fromPartial(object: Partial<_134.DelegationDelegatorReward>): _134.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _134.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_134.CommunityPoolSpendProposalWithDeposit>): _134.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _138.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _138.Module;
                    fromPartial(_: Partial<_138.Module>): _138.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _342.MsgClientImpl;
            QueryClientImpl: typeof _323.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _141.QueryEvidenceRequest): Promise<_141.QueryEvidenceResponse>;
                allEvidence(request?: _141.QueryAllEvidenceRequest): Promise<_141.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _142.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _142.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _142.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _142.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _142.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _142.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _142.MsgSubmitEvidence) => {
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
                    }) => _142.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _142.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.MsgSubmitEvidence;
                fromPartial(object: Partial<_142.MsgSubmitEvidence>): _142.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _142.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _142.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_142.MsgSubmitEvidenceResponse>): _142.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _141.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.QueryEvidenceRequest;
                fromPartial(object: Partial<_141.QueryEvidenceRequest>): _141.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _141.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.QueryEvidenceResponse;
                fromPartial(object: Partial<_141.QueryEvidenceResponse>): _141.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _141.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_141.QueryAllEvidenceRequest>): _141.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _141.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_141.QueryAllEvidenceResponse>): _141.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.GenesisState;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
            };
            Equivocation: {
                encode(message: _139.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _139.Equivocation;
                fromPartial(object: Partial<_139.Equivocation>): _139.Equivocation;
            };
        };
    }
    namespace feegrant {
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
            MsgClientImpl: typeof _343.MsgClientImpl;
            QueryClientImpl: typeof _324.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _146.QueryAllowanceRequest): Promise<_146.QueryAllowanceResponse>;
                allowances(request: _146.QueryAllowancesRequest): Promise<_146.QueryAllowancesResponse>;
                allowancesByGranter(request: _146.QueryAllowancesByGranterRequest): Promise<_146.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _147.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _147.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _147.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _147.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _147.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _147.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _147.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _147.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _147.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _147.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _147.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _147.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _147.MsgGrantAllowance) => {
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
                    }) => _147.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _147.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _147.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _147.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.MsgGrantAllowance;
                fromPartial(object: Partial<_147.MsgGrantAllowance>): _147.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _147.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _147.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_147.MsgGrantAllowanceResponse>): _147.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _147.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.MsgRevokeAllowance;
                fromPartial(object: Partial<_147.MsgRevokeAllowance>): _147.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _147.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _147.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_147.MsgRevokeAllowanceResponse>): _147.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _146.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowanceRequest;
                fromPartial(object: Partial<_146.QueryAllowanceRequest>): _146.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _146.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowanceResponse;
                fromPartial(object: Partial<_146.QueryAllowanceResponse>): _146.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _146.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowancesRequest;
                fromPartial(object: Partial<_146.QueryAllowancesRequest>): _146.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _146.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowancesResponse;
                fromPartial(object: Partial<_146.QueryAllowancesResponse>): _146.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _146.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_146.QueryAllowancesByGranterRequest>): _146.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _146.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_146.QueryAllowancesByGranterResponse>): _146.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _145.GenesisState;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
            };
            BasicAllowance: {
                encode(message: _144.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.BasicAllowance;
                fromPartial(object: Partial<_144.BasicAllowance>): _144.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _144.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.PeriodicAllowance;
                fromPartial(object: Partial<_144.PeriodicAllowance>): _144.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _144.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.AllowedMsgAllowance;
                fromPartial(object: Partial<_144.AllowedMsgAllowance>): _144.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _144.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _144.Grant;
                fromPartial(object: Partial<_144.Grant>): _144.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _148.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _148.Module;
                    fromPartial(_: Partial<_148.Module>): _148.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _149.GenesisState;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _150.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.Module;
                    fromPartial(object: Partial<_150.Module>): _150.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _344.MsgClientImpl;
            QueryClientImpl: typeof _325.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _153.QueryProposalRequest): Promise<_153.QueryProposalResponse>;
                proposals(request: _153.QueryProposalsRequest): Promise<_153.QueryProposalsResponse>;
                vote(request: _153.QueryVoteRequest): Promise<_153.QueryVoteResponse>;
                votes(request: _153.QueryVotesRequest): Promise<_153.QueryVotesResponse>;
                params(request: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                deposit(request: _153.QueryDepositRequest): Promise<_153.QueryDepositResponse>;
                deposits(request: _153.QueryDepositsRequest): Promise<_153.QueryDepositsResponse>;
                tallyResult(request: _153.QueryTallyResultRequest): Promise<_153.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _154.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _154.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _154.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _154.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _154.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _154.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _154.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _154.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _154.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _154.MsgExecLegacyContent;
                    };
                    vote(value: _154.MsgVote): {
                        typeUrl: string;
                        value: _154.MsgVote;
                    };
                    voteWeighted(value: _154.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _154.MsgVoteWeighted;
                    };
                    deposit(value: _154.MsgDeposit): {
                        typeUrl: string;
                        value: _154.MsgDeposit;
                    };
                    updateParams(value: _154.MsgUpdateParams): {
                        typeUrl: string;
                        value: _154.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _154.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _154.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _154.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _154.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _154.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _154.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _154.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _154.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _154.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _154.MsgExecLegacyContent;
                    };
                    vote(value: _154.MsgVote): {
                        typeUrl: string;
                        value: _154.MsgVote;
                    };
                    voteWeighted(value: _154.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _154.MsgVoteWeighted;
                    };
                    deposit(value: _154.MsgDeposit): {
                        typeUrl: string;
                        value: _154.MsgDeposit;
                    };
                    updateParams(value: _154.MsgUpdateParams): {
                        typeUrl: string;
                        value: _154.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: _154.MsgSubmitProposal) => {
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
                    }) => _154.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _154.MsgExecLegacyContent) => {
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
                    }) => _154.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _154.MsgVote) => {
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
                    }) => _154.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _154.MsgVoteWeighted) => {
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
                    }) => _154.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _154.MsgDeposit) => {
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
                    }) => _154.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _154.MsgUpdateParams) => {
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
                    }) => _154.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _154.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgSubmitProposal;
                fromPartial(object: Partial<_154.MsgSubmitProposal>): _154.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _154.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_154.MsgSubmitProposalResponse>): _154.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _154.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgExecLegacyContent;
                fromPartial(object: Partial<_154.MsgExecLegacyContent>): _154.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _154.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _154.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_154.MsgExecLegacyContentResponse>): _154.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _154.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgVote;
                fromPartial(object: Partial<_154.MsgVote>): _154.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _154.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _154.MsgVoteResponse;
                fromPartial(_: Partial<_154.MsgVoteResponse>): _154.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _154.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgVoteWeighted;
                fromPartial(object: Partial<_154.MsgVoteWeighted>): _154.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _154.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _154.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_154.MsgVoteWeightedResponse>): _154.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _154.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgDeposit;
                fromPartial(object: Partial<_154.MsgDeposit>): _154.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _154.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _154.MsgDepositResponse;
                fromPartial(_: Partial<_154.MsgDepositResponse>): _154.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _154.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _154.MsgUpdateParams;
                fromPartial(object: Partial<_154.MsgUpdateParams>): _154.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _154.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _154.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_154.MsgUpdateParamsResponse>): _154.MsgUpdateParamsResponse;
            };
            QueryProposalRequest: {
                encode(message: _153.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryProposalRequest;
                fromPartial(object: Partial<_153.QueryProposalRequest>): _153.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _153.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryProposalResponse;
                fromPartial(object: Partial<_153.QueryProposalResponse>): _153.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _153.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryProposalsRequest;
                fromPartial(object: Partial<_153.QueryProposalsRequest>): _153.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _153.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryProposalsResponse;
                fromPartial(object: Partial<_153.QueryProposalsResponse>): _153.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _153.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryVoteRequest;
                fromPartial(object: Partial<_153.QueryVoteRequest>): _153.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _153.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryVoteResponse;
                fromPartial(object: Partial<_153.QueryVoteResponse>): _153.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _153.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryVotesRequest;
                fromPartial(object: Partial<_153.QueryVotesRequest>): _153.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _153.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryVotesResponse;
                fromPartial(object: Partial<_153.QueryVotesResponse>): _153.QueryVotesResponse;
            };
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
            QueryDepositRequest: {
                encode(message: _153.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryDepositRequest;
                fromPartial(object: Partial<_153.QueryDepositRequest>): _153.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _153.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryDepositResponse;
                fromPartial(object: Partial<_153.QueryDepositResponse>): _153.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _153.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryDepositsRequest;
                fromPartial(object: Partial<_153.QueryDepositsRequest>): _153.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _153.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryDepositsResponse;
                fromPartial(object: Partial<_153.QueryDepositsResponse>): _153.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _153.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryTallyResultRequest;
                fromPartial(object: Partial<_153.QueryTallyResultRequest>): _153.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _153.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _153.QueryTallyResultResponse;
                fromPartial(object: Partial<_153.QueryTallyResultResponse>): _153.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _152.VoteOption;
            voteOptionToJSON(object: _152.VoteOption): string;
            proposalStatusFromJSON(object: any): _152.ProposalStatus;
            proposalStatusToJSON(object: _152.ProposalStatus): string;
            VoteOption: typeof _152.VoteOption;
            VoteOptionSDKType: typeof _152.VoteOption;
            ProposalStatus: typeof _152.ProposalStatus;
            ProposalStatusSDKType: typeof _152.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _152.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.WeightedVoteOption;
                fromPartial(object: Partial<_152.WeightedVoteOption>): _152.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _152.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.Deposit;
                fromPartial(object: Partial<_152.Deposit>): _152.Deposit;
            };
            Proposal: {
                encode(message: _152.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.Proposal;
                fromPartial(object: Partial<_152.Proposal>): _152.Proposal;
            };
            TallyResult: {
                encode(message: _152.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.TallyResult;
                fromPartial(object: Partial<_152.TallyResult>): _152.TallyResult;
            };
            Vote: {
                encode(message: _152.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.Vote;
                fromPartial(object: Partial<_152.Vote>): _152.Vote;
            };
            DepositParams: {
                encode(message: _152.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.DepositParams;
                fromPartial(object: Partial<_152.DepositParams>): _152.DepositParams;
            };
            VotingParams: {
                encode(message: _152.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.VotingParams;
                fromPartial(object: Partial<_152.VotingParams>): _152.VotingParams;
            };
            TallyParams: {
                encode(message: _152.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.TallyParams;
                fromPartial(object: Partial<_152.TallyParams>): _152.TallyParams;
            };
            Params: {
                encode(message: _152.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _152.Params;
                fromPartial(object: Partial<_152.Params>): _152.Params;
            };
            GenesisState: {
                encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _151.GenesisState;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _345.MsgClientImpl;
            QueryClientImpl: typeof _326.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _157.QueryProposalRequest): Promise<_157.QueryProposalResponse>;
                proposals(request: _157.QueryProposalsRequest): Promise<_157.QueryProposalsResponse>;
                vote(request: _157.QueryVoteRequest): Promise<_157.QueryVoteResponse>;
                votes(request: _157.QueryVotesRequest): Promise<_157.QueryVotesResponse>;
                params(request: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                deposit(request: _157.QueryDepositRequest): Promise<_157.QueryDepositResponse>;
                deposits(request: _157.QueryDepositsRequest): Promise<_157.QueryDepositsResponse>;
                tallyResult(request: _157.QueryTallyResultRequest): Promise<_157.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _158.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _158.MsgSubmitProposal;
                    };
                    vote(value: _158.MsgVote): {
                        typeUrl: string;
                        value: _158.MsgVote;
                    };
                    voteWeighted(value: _158.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _158.MsgVoteWeighted;
                    };
                    deposit(value: _158.MsgDeposit): {
                        typeUrl: string;
                        value: _158.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _158.MsgSubmitProposal) => {
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
                    }) => _158.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _158.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _158.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _158.MsgVoteWeighted) => {
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
                    }) => _158.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _158.MsgDeposit) => {
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
                    }) => _158.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _158.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgSubmitProposal;
                fromPartial(object: Partial<_158.MsgSubmitProposal>): _158.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _158.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_158.MsgSubmitProposalResponse>): _158.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _158.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgVote;
                fromPartial(object: Partial<_158.MsgVote>): _158.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _158.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgVoteResponse;
                fromPartial(_: Partial<_158.MsgVoteResponse>): _158.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _158.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgVoteWeighted;
                fromPartial(object: Partial<_158.MsgVoteWeighted>): _158.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _158.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_158.MsgVoteWeightedResponse>): _158.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _158.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _158.MsgDeposit;
                fromPartial(object: Partial<_158.MsgDeposit>): _158.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _158.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _158.MsgDepositResponse;
                fromPartial(_: Partial<_158.MsgDepositResponse>): _158.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _157.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryProposalRequest;
                fromPartial(object: Partial<_157.QueryProposalRequest>): _157.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _157.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryProposalResponse;
                fromPartial(object: Partial<_157.QueryProposalResponse>): _157.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _157.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryProposalsRequest;
                fromPartial(object: Partial<_157.QueryProposalsRequest>): _157.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _157.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryProposalsResponse;
                fromPartial(object: Partial<_157.QueryProposalsResponse>): _157.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _157.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryVoteRequest;
                fromPartial(object: Partial<_157.QueryVoteRequest>): _157.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _157.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryVoteResponse;
                fromPartial(object: Partial<_157.QueryVoteResponse>): _157.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _157.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryVotesRequest;
                fromPartial(object: Partial<_157.QueryVotesRequest>): _157.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _157.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryVotesResponse;
                fromPartial(object: Partial<_157.QueryVotesResponse>): _157.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryParamsRequest;
                fromPartial(object: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryParamsResponse;
                fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _157.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryDepositRequest;
                fromPartial(object: Partial<_157.QueryDepositRequest>): _157.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _157.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryDepositResponse;
                fromPartial(object: Partial<_157.QueryDepositResponse>): _157.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _157.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryDepositsRequest;
                fromPartial(object: Partial<_157.QueryDepositsRequest>): _157.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _157.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryDepositsResponse;
                fromPartial(object: Partial<_157.QueryDepositsResponse>): _157.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _157.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryTallyResultRequest;
                fromPartial(object: Partial<_157.QueryTallyResultRequest>): _157.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _157.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _157.QueryTallyResultResponse;
                fromPartial(object: Partial<_157.QueryTallyResultResponse>): _157.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _156.VoteOption;
            voteOptionToJSON(object: _156.VoteOption): string;
            proposalStatusFromJSON(object: any): _156.ProposalStatus;
            proposalStatusToJSON(object: _156.ProposalStatus): string;
            VoteOption: typeof _156.VoteOption;
            VoteOptionSDKType: typeof _156.VoteOption;
            ProposalStatus: typeof _156.ProposalStatus;
            ProposalStatusSDKType: typeof _156.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _156.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.WeightedVoteOption;
                fromPartial(object: Partial<_156.WeightedVoteOption>): _156.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _156.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.TextProposal;
                fromPartial(object: Partial<_156.TextProposal>): _156.TextProposal;
            };
            Deposit: {
                encode(message: _156.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.Deposit;
                fromPartial(object: Partial<_156.Deposit>): _156.Deposit;
            };
            Proposal: {
                encode(message: _156.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.Proposal;
                fromPartial(object: Partial<_156.Proposal>): _156.Proposal;
            };
            TallyResult: {
                encode(message: _156.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.TallyResult;
                fromPartial(object: Partial<_156.TallyResult>): _156.TallyResult;
            };
            Vote: {
                encode(message: _156.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.Vote;
                fromPartial(object: Partial<_156.Vote>): _156.Vote;
            };
            DepositParams: {
                encode(message: _156.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.DepositParams;
                fromPartial(object: Partial<_156.DepositParams>): _156.DepositParams;
            };
            VotingParams: {
                encode(message: _156.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.VotingParams;
                fromPartial(object: Partial<_156.VotingParams>): _156.VotingParams;
            };
            TallyParams: {
                encode(message: _156.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _156.TallyParams;
                fromPartial(object: Partial<_156.TallyParams>): _156.TallyParams;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _155.GenesisState;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _159.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.Module;
                    fromPartial(object: Partial<_159.Module>): _159.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _346.MsgClientImpl;
            QueryClientImpl: typeof _327.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _162.QueryGroupInfoRequest): Promise<_162.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _162.QueryGroupPolicyInfoRequest): Promise<_162.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _162.QueryGroupMembersRequest): Promise<_162.QueryGroupMembersResponse>;
                groupsByAdmin(request: _162.QueryGroupsByAdminRequest): Promise<_162.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _162.QueryGroupPoliciesByGroupRequest): Promise<_162.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _162.QueryGroupPoliciesByAdminRequest): Promise<_162.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _162.QueryProposalRequest): Promise<_162.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _162.QueryProposalsByGroupPolicyRequest): Promise<_162.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _162.QueryVoteByProposalVoterRequest): Promise<_162.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _162.QueryVotesByProposalRequest): Promise<_162.QueryVotesByProposalResponse>;
                votesByVoter(request: _162.QueryVotesByVoterRequest): Promise<_162.QueryVotesByVoterResponse>;
                groupsByMember(request: _162.QueryGroupsByMemberRequest): Promise<_162.QueryGroupsByMemberResponse>;
                tallyResult(request: _162.QueryTallyResultRequest): Promise<_162.QueryTallyResultResponse>;
                groups(request?: _162.QueryGroupsRequest): Promise<_162.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _163.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _163.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _163.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _163.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _163.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _163.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _163.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _163.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _163.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _163.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _163.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _163.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _163.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _163.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _163.MsgCreateGroup): {
                        typeUrl: string;
                        value: _163.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _163.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _163.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _163.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _163.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _163.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _163.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _163.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _163.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _163.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _163.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _163.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _163.MsgWithdrawProposal;
                    };
                    vote(value: _163.MsgVote): {
                        typeUrl: string;
                        value: _163.MsgVote;
                    };
                    exec(value: _163.MsgExec): {
                        typeUrl: string;
                        value: _163.MsgExec;
                    };
                    leaveGroup(value: _163.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _163.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _163.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _163.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _163.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _163.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _163.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _163.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _163.MsgCreateGroup): {
                        typeUrl: string;
                        value: _163.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _163.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _163.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _163.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _163.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _163.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _163.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _163.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _163.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _163.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _163.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _163.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _163.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _163.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _163.MsgWithdrawProposal;
                    };
                    vote(value: _163.MsgVote): {
                        typeUrl: string;
                        value: _163.MsgVote;
                    };
                    exec(value: _163.MsgExec): {
                        typeUrl: string;
                        value: _163.MsgExec;
                    };
                    leaveGroup(value: _163.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _163.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _163.MsgCreateGroup) => {
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
                    }) => _163.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _163.MsgUpdateGroupMembers) => {
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
                    }) => _163.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _163.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _163.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _163.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _163.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _163.MsgCreateGroupPolicy) => {
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
                    }) => _163.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _163.MsgCreateGroupWithPolicy) => {
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
                    }) => _163.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _163.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _163.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _163.MsgUpdateGroupPolicyDecisionPolicy) => {
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
                    }) => _163.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _163.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _163.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: _163.MsgSubmitProposal) => {
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
                    }) => _163.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _163.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _163.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _163.MsgVote) => {
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
                    }) => _163.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _163.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _163.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _163.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _163.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _164.VoteOption;
            voteOptionToJSON(object: _164.VoteOption): string;
            proposalStatusFromJSON(object: any): _164.ProposalStatus;
            proposalStatusToJSON(object: _164.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _164.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _164.ProposalExecutorResult): string;
            VoteOption: typeof _164.VoteOption;
            VoteOptionSDKType: typeof _164.VoteOption;
            ProposalStatus: typeof _164.ProposalStatus;
            ProposalStatusSDKType: typeof _164.ProposalStatus;
            ProposalExecutorResult: typeof _164.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _164.ProposalExecutorResult;
            Member: {
                encode(message: _164.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.Member;
                fromPartial(object: Partial<_164.Member>): _164.Member;
            };
            MemberRequest: {
                encode(message: _164.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.MemberRequest;
                fromPartial(object: Partial<_164.MemberRequest>): _164.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _164.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_164.ThresholdDecisionPolicy>): _164.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _164.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.PercentageDecisionPolicy;
                fromPartial(object: Partial<_164.PercentageDecisionPolicy>): _164.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _164.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.DecisionPolicyWindows;
                fromPartial(object: Partial<_164.DecisionPolicyWindows>): _164.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _164.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.GroupInfo;
                fromPartial(object: Partial<_164.GroupInfo>): _164.GroupInfo;
            };
            GroupMember: {
                encode(message: _164.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.GroupMember;
                fromPartial(object: Partial<_164.GroupMember>): _164.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _164.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.GroupPolicyInfo;
                fromPartial(object: Partial<_164.GroupPolicyInfo>): _164.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _164.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.Proposal;
                fromPartial(object: Partial<_164.Proposal>): _164.Proposal;
            };
            TallyResult: {
                encode(message: _164.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.TallyResult;
                fromPartial(object: Partial<_164.TallyResult>): _164.TallyResult;
            };
            Vote: {
                encode(message: _164.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _164.Vote;
                fromPartial(object: Partial<_164.Vote>): _164.Vote;
            };
            execFromJSON(object: any): _163.Exec;
            execToJSON(object: _163.Exec): string;
            Exec: typeof _163.Exec;
            ExecSDKType: typeof _163.Exec;
            MsgCreateGroup: {
                encode(message: _163.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroup;
                fromPartial(object: Partial<_163.MsgCreateGroup>): _163.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _163.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroupResponse;
                fromPartial(object: Partial<_163.MsgCreateGroupResponse>): _163.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _163.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_163.MsgUpdateGroupMembers>): _163.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _163.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupMembersResponse>): _163.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _163.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_163.MsgUpdateGroupAdmin>): _163.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _163.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupAdminResponse>): _163.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _163.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_163.MsgUpdateGroupMetadata>): _163.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _163.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupMetadataResponse>): _163.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _163.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_163.MsgCreateGroupPolicy>): _163.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _163.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_163.MsgCreateGroupPolicyResponse>): _163.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _163.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_163.MsgUpdateGroupPolicyAdmin>): _163.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _163.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupPolicyAdminResponse>): _163.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _163.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_163.MsgCreateGroupWithPolicy>): _163.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _163.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_163.MsgCreateGroupWithPolicyResponse>): _163.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _163.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_163.MsgUpdateGroupPolicyDecisionPolicy>): _163.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _163.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupPolicyDecisionPolicyResponse>): _163.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _163.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_163.MsgUpdateGroupPolicyMetadata>): _163.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _163.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_163.MsgUpdateGroupPolicyMetadataResponse>): _163.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _163.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgSubmitProposal;
                fromPartial(object: Partial<_163.MsgSubmitProposal>): _163.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _163.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_163.MsgSubmitProposalResponse>): _163.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _163.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgWithdrawProposal;
                fromPartial(object: Partial<_163.MsgWithdrawProposal>): _163.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _163.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_163.MsgWithdrawProposalResponse>): _163.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _163.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgVote;
                fromPartial(object: Partial<_163.MsgVote>): _163.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _163.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgVoteResponse;
                fromPartial(_: Partial<_163.MsgVoteResponse>): _163.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _163.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgExec;
                fromPartial(object: Partial<_163.MsgExec>): _163.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _163.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgExecResponse;
                fromPartial(object: Partial<_163.MsgExecResponse>): _163.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _163.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.MsgLeaveGroup;
                fromPartial(object: Partial<_163.MsgLeaveGroup>): _163.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _163.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _163.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_163.MsgLeaveGroupResponse>): _163.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _162.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupInfoRequest;
                fromPartial(object: Partial<_162.QueryGroupInfoRequest>): _162.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _162.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupInfoResponse;
                fromPartial(object: Partial<_162.QueryGroupInfoResponse>): _162.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _162.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_162.QueryGroupPolicyInfoRequest>): _162.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _162.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_162.QueryGroupPolicyInfoResponse>): _162.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _162.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupMembersRequest;
                fromPartial(object: Partial<_162.QueryGroupMembersRequest>): _162.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _162.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupMembersResponse;
                fromPartial(object: Partial<_162.QueryGroupMembersResponse>): _162.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _162.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_162.QueryGroupsByAdminRequest>): _162.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _162.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_162.QueryGroupsByAdminResponse>): _162.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _162.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_162.QueryGroupPoliciesByGroupRequest>): _162.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _162.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_162.QueryGroupPoliciesByGroupResponse>): _162.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _162.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_162.QueryGroupPoliciesByAdminRequest>): _162.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _162.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_162.QueryGroupPoliciesByAdminResponse>): _162.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _162.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryProposalRequest;
                fromPartial(object: Partial<_162.QueryProposalRequest>): _162.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _162.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryProposalResponse;
                fromPartial(object: Partial<_162.QueryProposalResponse>): _162.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _162.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_162.QueryProposalsByGroupPolicyRequest>): _162.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _162.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_162.QueryProposalsByGroupPolicyResponse>): _162.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _162.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_162.QueryVoteByProposalVoterRequest>): _162.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _162.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_162.QueryVoteByProposalVoterResponse>): _162.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _162.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_162.QueryVotesByProposalRequest>): _162.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _162.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_162.QueryVotesByProposalResponse>): _162.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _162.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_162.QueryVotesByVoterRequest>): _162.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _162.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_162.QueryVotesByVoterResponse>): _162.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _162.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_162.QueryGroupsByMemberRequest>): _162.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _162.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_162.QueryGroupsByMemberResponse>): _162.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _162.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryTallyResultRequest;
                fromPartial(object: Partial<_162.QueryTallyResultRequest>): _162.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _162.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryTallyResultResponse;
                fromPartial(object: Partial<_162.QueryTallyResultResponse>): _162.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _162.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsRequest;
                fromPartial(object: Partial<_162.QueryGroupsRequest>): _162.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _162.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _162.QueryGroupsResponse;
                fromPartial(object: Partial<_162.QueryGroupsResponse>): _162.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _161.GenesisState;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _160.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventCreateGroup;
                fromPartial(object: Partial<_160.EventCreateGroup>): _160.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _160.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventUpdateGroup;
                fromPartial(object: Partial<_160.EventUpdateGroup>): _160.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _160.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventCreateGroupPolicy;
                fromPartial(object: Partial<_160.EventCreateGroupPolicy>): _160.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _160.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_160.EventUpdateGroupPolicy>): _160.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _160.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventSubmitProposal;
                fromPartial(object: Partial<_160.EventSubmitProposal>): _160.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _160.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventWithdrawProposal;
                fromPartial(object: Partial<_160.EventWithdrawProposal>): _160.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _160.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventVote;
                fromPartial(object: Partial<_160.EventVote>): _160.EventVote;
            };
            EventExec: {
                encode(message: _160.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventExec;
                fromPartial(object: Partial<_160.EventExec>): _160.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _160.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventLeaveGroup;
                fromPartial(object: Partial<_160.EventLeaveGroup>): _160.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _160.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.EventProposalPruned;
                fromPartial(object: Partial<_160.EventProposalPruned>): _160.EventProposalPruned;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _165.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _165.Module;
                    fromPartial(object: Partial<_165.Module>): _165.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _347.MsgClientImpl;
            QueryClientImpl: typeof _328.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                inflation(request?: _168.QueryInflationRequest): Promise<_168.QueryInflationResponse>;
                annualProvisions(request?: _168.QueryAnnualProvisionsRequest): Promise<_168.QueryAnnualProvisionsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _169.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _169.MsgUpdateParams): {
                        typeUrl: string;
                        value: _169.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _169.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _169.MsgUpdateParams): {
                        typeUrl: string;
                        value: _169.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _169.MsgUpdateParams) => {
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
                    }) => _169.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _169.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _169.MsgUpdateParams;
                fromPartial(object: Partial<_169.MsgUpdateParams>): _169.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _169.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _169.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_169.MsgUpdateParamsResponse>): _169.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.QueryParamsRequest;
                fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.QueryParamsResponse;
                fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _168.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.QueryInflationRequest;
                fromPartial(_: Partial<_168.QueryInflationRequest>): _168.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _168.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.QueryInflationResponse;
                fromPartial(object: Partial<_168.QueryInflationResponse>): _168.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _168.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _168.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_168.QueryAnnualProvisionsRequest>): _168.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _168.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _168.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_168.QueryAnnualProvisionsResponse>): _168.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _167.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _167.Minter;
                fromPartial(object: Partial<_167.Minter>): _167.Minter;
            };
            Params: {
                encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _167.Params;
                fromPartial(object: Partial<_167.Params>): _167.Params;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.GenesisState;
                fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
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
                    encode(_: _171.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _171.Module;
                    fromPartial(_: Partial<_171.Module>): _171.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _348.MsgClientImpl;
            QueryClientImpl: typeof _329.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _175.QueryBalanceRequest): Promise<_175.QueryBalanceResponse>;
                owner(request: _175.QueryOwnerRequest): Promise<_175.QueryOwnerResponse>;
                supply(request: _175.QuerySupplyRequest): Promise<_175.QuerySupplyResponse>;
                nFTs(request: _175.QueryNFTsRequest): Promise<_175.QueryNFTsResponse>;
                nFT(request: _175.QueryNFTRequest): Promise<_175.QueryNFTResponse>;
                class(request: _175.QueryClassRequest): Promise<_175.QueryClassResponse>;
                classes(request?: _175.QueryClassesRequest): Promise<_175.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _176.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _176.MsgSend): {
                        typeUrl: string;
                        value: _176.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _176.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _176.MsgSend): {
                        typeUrl: string;
                        value: _176.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _176.MsgSend) => {
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
                    }) => _176.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _176.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _176.MsgSend;
                fromPartial(object: Partial<_176.MsgSend>): _176.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _176.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _176.MsgSendResponse;
                fromPartial(_: Partial<_176.MsgSendResponse>): _176.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _175.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryBalanceRequest;
                fromPartial(object: Partial<_175.QueryBalanceRequest>): _175.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _175.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryBalanceResponse;
                fromPartial(object: Partial<_175.QueryBalanceResponse>): _175.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _175.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryOwnerRequest;
                fromPartial(object: Partial<_175.QueryOwnerRequest>): _175.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _175.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryOwnerResponse;
                fromPartial(object: Partial<_175.QueryOwnerResponse>): _175.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _175.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QuerySupplyRequest;
                fromPartial(object: Partial<_175.QuerySupplyRequest>): _175.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _175.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QuerySupplyResponse;
                fromPartial(object: Partial<_175.QuerySupplyResponse>): _175.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _175.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryNFTsRequest;
                fromPartial(object: Partial<_175.QueryNFTsRequest>): _175.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _175.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryNFTsResponse;
                fromPartial(object: Partial<_175.QueryNFTsResponse>): _175.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _175.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryNFTRequest;
                fromPartial(object: Partial<_175.QueryNFTRequest>): _175.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _175.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryNFTResponse;
                fromPartial(object: Partial<_175.QueryNFTResponse>): _175.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _175.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryClassRequest;
                fromPartial(object: Partial<_175.QueryClassRequest>): _175.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _175.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryClassResponse;
                fromPartial(object: Partial<_175.QueryClassResponse>): _175.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _175.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryClassesRequest;
                fromPartial(object: Partial<_175.QueryClassesRequest>): _175.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _175.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _175.QueryClassesResponse;
                fromPartial(object: Partial<_175.QueryClassesResponse>): _175.QueryClassesResponse;
            };
            Class: {
                encode(message: _174.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.Class;
                fromPartial(object: Partial<_174.Class>): _174.Class;
            };
            NFT: {
                encode(message: _174.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.NFT;
                fromPartial(object: Partial<_174.NFT>): _174.NFT;
            };
            GenesisState: {
                encode(message: _173.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _173.GenesisState;
                fromPartial(object: Partial<_173.GenesisState>): _173.GenesisState;
            };
            Entry: {
                encode(message: _173.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _173.Entry;
                fromPartial(object: Partial<_173.Entry>): _173.Entry;
            };
            EventSend: {
                encode(message: _172.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.EventSend;
                fromPartial(object: Partial<_172.EventSend>): _172.EventSend;
            };
            EventMint: {
                encode(message: _172.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.EventMint;
                fromPartial(object: Partial<_172.EventMint>): _172.EventMint;
            };
            EventBurn: {
                encode(message: _172.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _172.EventBurn;
                fromPartial(object: Partial<_172.EventBurn>): _172.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _177.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _177.Module;
                    fromPartial(_: Partial<_177.Module>): _177.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _330.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _178.GetRequest): Promise<_178.GetResponse>;
                    list(request: _178.ListRequest): Promise<_178.ListResponse>;
                };
                GetRequest: {
                    encode(message: _178.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.GetRequest;
                    fromPartial(object: Partial<_178.GetRequest>): _178.GetRequest;
                };
                GetResponse: {
                    encode(message: _178.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.GetResponse;
                    fromPartial(object: Partial<_178.GetResponse>): _178.GetResponse;
                };
                ListRequest: {
                    encode(message: _178.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.ListRequest;
                    fromPartial(object: Partial<_178.ListRequest>): _178.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _178.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.ListRequest_Prefix;
                    fromPartial(object: Partial<_178.ListRequest_Prefix>): _178.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _178.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.ListRequest_Range;
                    fromPartial(object: Partial<_178.ListRequest_Range>): _178.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _178.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.ListResponse;
                    fromPartial(object: Partial<_178.ListResponse>): _178.ListResponse;
                };
                IndexValue: {
                    encode(message: _178.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _178.IndexValue;
                    fromPartial(object: Partial<_178.IndexValue>): _178.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _179.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _179.TableDescriptor;
                fromPartial(object: Partial<_179.TableDescriptor>): _179.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _179.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _179.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_179.PrimaryKeyDescriptor>): _179.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _179.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _179.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_179.SecondaryIndexDescriptor>): _179.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _179.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _179.SingletonDescriptor;
                fromPartial(object: Partial<_179.SingletonDescriptor>): _179.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _180.StorageType;
            storageTypeToJSON(object: _180.StorageType): string;
            StorageType: typeof _180.StorageType;
            StorageTypeSDKType: typeof _180.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _180.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _180.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_180.ModuleSchemaDescriptor>): _180.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _180.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _180.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_180.ModuleSchemaDescriptor_FileEntry>): _180.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _181.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _181.Module;
                    fromPartial(_: Partial<_181.Module>): _181.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _331.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                subspaces(request?: _183.QuerySubspacesRequest): Promise<_183.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _183.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _183.QueryParamsRequest;
                fromPartial(object: Partial<_183.QueryParamsRequest>): _183.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _183.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _183.QueryParamsResponse;
                fromPartial(object: Partial<_183.QueryParamsResponse>): _183.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _183.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _183.QuerySubspacesRequest;
                fromPartial(_: Partial<_183.QuerySubspacesRequest>): _183.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _183.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _183.QuerySubspacesResponse;
                fromPartial(object: Partial<_183.QuerySubspacesResponse>): _183.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _183.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _183.Subspace;
                fromPartial(object: Partial<_183.Subspace>): _183.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _182.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _182.ParameterChangeProposal;
                fromPartial(object: Partial<_182.ParameterChangeProposal>): _182.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _182.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _182.ParamChange;
                fromPartial(object: Partial<_182.ParamChange>): _182.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _185.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _185.FileDescriptorsRequest;
                fromPartial(_: Partial<_185.FileDescriptorsRequest>): _185.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _185.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _185.FileDescriptorsResponse;
                fromPartial(object: Partial<_185.FileDescriptorsResponse>): _185.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _186.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _186.Module;
                    fromPartial(object: Partial<_186.Module>): _186.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _349.MsgClientImpl;
            QueryClientImpl: typeof _332.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _188.QueryParamsRequest): Promise<_188.QueryParamsResponse>;
                signingInfo(request: _188.QuerySigningInfoRequest): Promise<_188.QuerySigningInfoResponse>;
                signingInfos(request?: _188.QuerySigningInfosRequest): Promise<_188.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _190.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _190.MsgUnjail): {
                        typeUrl: string;
                        value: _190.MsgUnjail;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: _190.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _190.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _190.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _190.MsgUnjail): {
                        typeUrl: string;
                        value: _190.MsgUnjail;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: _190.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _190.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _190.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _190.MsgUpdateParams) => {
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
                    }) => _190.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _190.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.MsgUnjail;
                fromPartial(object: Partial<_190.MsgUnjail>): _190.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _190.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _190.MsgUnjailResponse;
                fromPartial(_: Partial<_190.MsgUnjailResponse>): _190.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _190.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.MsgUpdateParams;
                fromPartial(object: Partial<_190.MsgUpdateParams>): _190.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _190.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _190.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_190.MsgUpdateParamsResponse>): _190.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _189.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _189.ValidatorSigningInfo;
                fromPartial(object: Partial<_189.ValidatorSigningInfo>): _189.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _189.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _189.Params;
                fromPartial(object: Partial<_189.Params>): _189.Params;
            };
            QueryParamsRequest: {
                encode(_: _188.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _188.QueryParamsRequest;
                fromPartial(_: Partial<_188.QueryParamsRequest>): _188.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _188.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _188.QueryParamsResponse;
                fromPartial(object: Partial<_188.QueryParamsResponse>): _188.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _188.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _188.QuerySigningInfoRequest;
                fromPartial(object: Partial<_188.QuerySigningInfoRequest>): _188.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _188.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _188.QuerySigningInfoResponse;
                fromPartial(object: Partial<_188.QuerySigningInfoResponse>): _188.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _188.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _188.QuerySigningInfosRequest;
                fromPartial(object: Partial<_188.QuerySigningInfosRequest>): _188.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _188.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _188.QuerySigningInfosResponse;
                fromPartial(object: Partial<_188.QuerySigningInfosResponse>): _188.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _187.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _187.GenesisState;
                fromPartial(object: Partial<_187.GenesisState>): _187.GenesisState;
            };
            SigningInfo: {
                encode(message: _187.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _187.SigningInfo;
                fromPartial(object: Partial<_187.SigningInfo>): _187.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _187.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _187.ValidatorMissedBlocks;
                fromPartial(object: Partial<_187.ValidatorMissedBlocks>): _187.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _187.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _187.MissedBlock;
                fromPartial(object: Partial<_187.MissedBlock>): _187.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _191.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _191.Module;
                    fromPartial(object: Partial<_191.Module>): _191.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _350.MsgClientImpl;
            QueryClientImpl: typeof _333.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _194.QueryValidatorsRequest): Promise<_194.QueryValidatorsResponse>;
                validator(request: _194.QueryValidatorRequest): Promise<_194.QueryValidatorResponse>;
                validatorDelegations(request: _194.QueryValidatorDelegationsRequest): Promise<_194.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _194.QueryValidatorUnbondingDelegationsRequest): Promise<_194.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _194.QueryDelegationRequest): Promise<_194.QueryDelegationResponse>;
                unbondingDelegation(request: _194.QueryUnbondingDelegationRequest): Promise<_194.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _194.QueryDelegatorDelegationsRequest): Promise<_194.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _194.QueryDelegatorUnbondingDelegationsRequest): Promise<_194.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _194.QueryRedelegationsRequest): Promise<_194.QueryRedelegationsResponse>;
                delegatorValidators(request: _194.QueryDelegatorValidatorsRequest): Promise<_194.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _194.QueryDelegatorValidatorRequest): Promise<_194.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _194.QueryHistoricalInfoRequest): Promise<_194.QueryHistoricalInfoResponse>;
                pool(request?: _194.QueryPoolRequest): Promise<_194.QueryPoolResponse>;
                params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _196.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _196.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _196.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _196.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _196.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _196.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _196.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _196.MsgCreateValidator): {
                        typeUrl: string;
                        value: _196.MsgCreateValidator;
                    };
                    editValidator(value: _196.MsgEditValidator): {
                        typeUrl: string;
                        value: _196.MsgEditValidator;
                    };
                    delegate(value: _196.MsgDelegate): {
                        typeUrl: string;
                        value: _196.MsgDelegate;
                    };
                    beginRedelegate(value: _196.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _196.MsgBeginRedelegate;
                    };
                    undelegate(value: _196.MsgUndelegate): {
                        typeUrl: string;
                        value: _196.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _196.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _196.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _196.MsgUpdateParams): {
                        typeUrl: string;
                        value: _196.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _196.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _196.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _196.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _196.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _196.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _196.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _196.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _196.MsgCreateValidator): {
                        typeUrl: string;
                        value: _196.MsgCreateValidator;
                    };
                    editValidator(value: _196.MsgEditValidator): {
                        typeUrl: string;
                        value: _196.MsgEditValidator;
                    };
                    delegate(value: _196.MsgDelegate): {
                        typeUrl: string;
                        value: _196.MsgDelegate;
                    };
                    beginRedelegate(value: _196.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _196.MsgBeginRedelegate;
                    };
                    undelegate(value: _196.MsgUndelegate): {
                        typeUrl: string;
                        value: _196.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _196.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _196.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _196.MsgUpdateParams): {
                        typeUrl: string;
                        value: _196.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _196.MsgCreateValidator) => {
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
                    }) => _196.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _196.MsgEditValidator) => {
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
                    }) => _196.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _196.MsgDelegate) => {
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
                    }) => _196.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _196.MsgBeginRedelegate) => {
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
                    }) => _196.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _196.MsgUndelegate) => {
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
                    }) => _196.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _196.MsgCancelUnbondingDelegation) => {
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
                    }) => _196.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _196.MsgUpdateParams) => {
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
                    }) => _196.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _196.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgCreateValidator;
                fromPartial(object: Partial<_196.MsgCreateValidator>): _196.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _196.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _196.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_196.MsgCreateValidatorResponse>): _196.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _196.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgEditValidator;
                fromPartial(object: Partial<_196.MsgEditValidator>): _196.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _196.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _196.MsgEditValidatorResponse;
                fromPartial(_: Partial<_196.MsgEditValidatorResponse>): _196.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _196.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgDelegate;
                fromPartial(object: Partial<_196.MsgDelegate>): _196.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _196.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _196.MsgDelegateResponse;
                fromPartial(_: Partial<_196.MsgDelegateResponse>): _196.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _196.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgBeginRedelegate;
                fromPartial(object: Partial<_196.MsgBeginRedelegate>): _196.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _196.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_196.MsgBeginRedelegateResponse>): _196.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _196.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgUndelegate;
                fromPartial(object: Partial<_196.MsgUndelegate>): _196.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _196.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgUndelegateResponse;
                fromPartial(object: Partial<_196.MsgUndelegateResponse>): _196.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _196.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_196.MsgCancelUnbondingDelegation>): _196.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _196.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _196.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_196.MsgCancelUnbondingDelegationResponse>): _196.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _196.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.MsgUpdateParams;
                fromPartial(object: Partial<_196.MsgUpdateParams>): _196.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _196.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _196.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_196.MsgUpdateParamsResponse>): _196.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _195.BondStatus;
            bondStatusToJSON(object: _195.BondStatus): string;
            infractionFromJSON(object: any): _195.Infraction;
            infractionToJSON(object: _195.Infraction): string;
            BondStatus: typeof _195.BondStatus;
            BondStatusSDKType: typeof _195.BondStatus;
            Infraction: typeof _195.Infraction;
            InfractionSDKType: typeof _195.Infraction;
            HistoricalInfo: {
                encode(message: _195.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.HistoricalInfo;
                fromPartial(object: Partial<_195.HistoricalInfo>): _195.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _195.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.CommissionRates;
                fromPartial(object: Partial<_195.CommissionRates>): _195.CommissionRates;
            };
            Commission: {
                encode(message: _195.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Commission;
                fromPartial(object: Partial<_195.Commission>): _195.Commission;
            };
            Description: {
                encode(message: _195.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Description;
                fromPartial(object: Partial<_195.Description>): _195.Description;
            };
            Validator: {
                encode(message: _195.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Validator;
                fromPartial(object: Partial<_195.Validator>): _195.Validator;
            };
            ValAddresses: {
                encode(message: _195.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.ValAddresses;
                fromPartial(object: Partial<_195.ValAddresses>): _195.ValAddresses;
            };
            DVPair: {
                encode(message: _195.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.DVPair;
                fromPartial(object: Partial<_195.DVPair>): _195.DVPair;
            };
            DVPairs: {
                encode(message: _195.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.DVPairs;
                fromPartial(object: Partial<_195.DVPairs>): _195.DVPairs;
            };
            DVVTriplet: {
                encode(message: _195.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.DVVTriplet;
                fromPartial(object: Partial<_195.DVVTriplet>): _195.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _195.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.DVVTriplets;
                fromPartial(object: Partial<_195.DVVTriplets>): _195.DVVTriplets;
            };
            Delegation: {
                encode(message: _195.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Delegation;
                fromPartial(object: Partial<_195.Delegation>): _195.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _195.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.UnbondingDelegation;
                fromPartial(object: Partial<_195.UnbondingDelegation>): _195.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _195.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.UnbondingDelegationEntry;
                fromPartial(object: Partial<_195.UnbondingDelegationEntry>): _195.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _195.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.RedelegationEntry;
                fromPartial(object: Partial<_195.RedelegationEntry>): _195.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _195.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Redelegation;
                fromPartial(object: Partial<_195.Redelegation>): _195.Redelegation;
            };
            Params: {
                encode(message: _195.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Params;
                fromPartial(object: Partial<_195.Params>): _195.Params;
            };
            DelegationResponse: {
                encode(message: _195.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.DelegationResponse;
                fromPartial(object: Partial<_195.DelegationResponse>): _195.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _195.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.RedelegationEntryResponse;
                fromPartial(object: Partial<_195.RedelegationEntryResponse>): _195.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _195.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.RedelegationResponse;
                fromPartial(object: Partial<_195.RedelegationResponse>): _195.RedelegationResponse;
            };
            Pool: {
                encode(message: _195.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.Pool;
                fromPartial(object: Partial<_195.Pool>): _195.Pool;
            };
            ValidatorUpdates: {
                encode(message: _195.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.ValidatorUpdates;
                fromPartial(object: Partial<_195.ValidatorUpdates>): _195.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _194.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorsRequest;
                fromPartial(object: Partial<_194.QueryValidatorsRequest>): _194.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _194.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorsResponse;
                fromPartial(object: Partial<_194.QueryValidatorsResponse>): _194.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _194.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorRequest;
                fromPartial(object: Partial<_194.QueryValidatorRequest>): _194.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _194.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorResponse;
                fromPartial(object: Partial<_194.QueryValidatorResponse>): _194.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _194.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_194.QueryValidatorDelegationsRequest>): _194.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _194.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_194.QueryValidatorDelegationsResponse>): _194.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _194.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_194.QueryValidatorUnbondingDelegationsRequest>): _194.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _194.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_194.QueryValidatorUnbondingDelegationsResponse>): _194.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _194.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegationRequest;
                fromPartial(object: Partial<_194.QueryDelegationRequest>): _194.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _194.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegationResponse;
                fromPartial(object: Partial<_194.QueryDelegationResponse>): _194.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _194.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_194.QueryUnbondingDelegationRequest>): _194.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _194.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_194.QueryUnbondingDelegationResponse>): _194.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _194.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_194.QueryDelegatorDelegationsRequest>): _194.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _194.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_194.QueryDelegatorDelegationsResponse>): _194.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _194.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_194.QueryDelegatorUnbondingDelegationsRequest>): _194.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _194.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_194.QueryDelegatorUnbondingDelegationsResponse>): _194.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _194.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryRedelegationsRequest;
                fromPartial(object: Partial<_194.QueryRedelegationsRequest>): _194.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _194.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryRedelegationsResponse;
                fromPartial(object: Partial<_194.QueryRedelegationsResponse>): _194.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _194.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_194.QueryDelegatorValidatorsRequest>): _194.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _194.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_194.QueryDelegatorValidatorsResponse>): _194.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _194.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_194.QueryDelegatorValidatorRequest>): _194.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _194.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_194.QueryDelegatorValidatorResponse>): _194.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _194.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_194.QueryHistoricalInfoRequest>): _194.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _194.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_194.QueryHistoricalInfoResponse>): _194.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _194.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _194.QueryPoolRequest;
                fromPartial(_: Partial<_194.QueryPoolRequest>): _194.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _194.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryPoolResponse;
                fromPartial(object: Partial<_194.QueryPoolResponse>): _194.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _194.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _194.QueryParamsRequest;
                fromPartial(_: Partial<_194.QueryParamsRequest>): _194.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _194.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryParamsResponse;
                fromPartial(object: Partial<_194.QueryParamsResponse>): _194.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _193.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.GenesisState;
                fromPartial(object: Partial<_193.GenesisState>): _193.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _193.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.LastValidatorPower;
                fromPartial(object: Partial<_193.LastValidatorPower>): _193.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _192.AuthorizationType;
            authorizationTypeToJSON(object: _192.AuthorizationType): string;
            AuthorizationType: typeof _192.AuthorizationType;
            AuthorizationTypeSDKType: typeof _192.AuthorizationType;
            StakeAuthorization: {
                encode(message: _192.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _192.StakeAuthorization;
                fromPartial(object: Partial<_192.StakeAuthorization>): _192.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _192.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _192.StakeAuthorization_Validators;
                fromPartial(object: Partial<_192.StakeAuthorization_Validators>): _192.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _197.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _197.Config;
                    fromPartial(object: Partial<_197.Config>): _197.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _198.SignMode;
                signModeToJSON(object: _198.SignMode): string;
                SignMode: typeof _198.SignMode;
                SignModeSDKType: typeof _198.SignMode;
                SignatureDescriptors: {
                    encode(message: _198.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _198.SignatureDescriptors;
                    fromPartial(object: Partial<_198.SignatureDescriptors>): _198.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _198.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _198.SignatureDescriptor;
                    fromPartial(object: Partial<_198.SignatureDescriptor>): _198.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _198.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _198.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_198.SignatureDescriptor_Data>): _198.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _198.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _198.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_198.SignatureDescriptor_Data_Single>): _198.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _198.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _198.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_198.SignatureDescriptor_Data_Multi>): _198.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _334.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _199.SimulateRequest): Promise<_199.SimulateResponse>;
                getTx(request: _199.GetTxRequest): Promise<_199.GetTxResponse>;
                broadcastTx(request: _199.BroadcastTxRequest): Promise<_199.BroadcastTxResponse>;
                getTxsEvent(request: _199.GetTxsEventRequest): Promise<_199.GetTxsEventResponse>;
                getBlockWithTxs(request: _199.GetBlockWithTxsRequest): Promise<_199.GetBlockWithTxsResponse>;
                txDecode(request: _199.TxDecodeRequest): Promise<_199.TxDecodeResponse>;
                txEncode(request: _199.TxEncodeRequest): Promise<_199.TxEncodeResponse>;
                txEncodeAmino(request: _199.TxEncodeAminoRequest): Promise<_199.TxEncodeAminoResponse>;
                txDecodeAmino(request: _199.TxDecodeAminoRequest): Promise<_199.TxDecodeAminoResponse>;
            };
            Tx: {
                encode(message: _200.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.Tx;
                fromPartial(object: Partial<_200.Tx>): _200.Tx;
            };
            TxRaw: {
                encode(message: _200.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.TxRaw;
                fromPartial(object: Partial<_200.TxRaw>): _200.TxRaw;
            };
            SignDoc: {
                encode(message: _200.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.SignDoc;
                fromPartial(object: Partial<_200.SignDoc>): _200.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _200.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.SignDocDirectAux;
                fromPartial(object: Partial<_200.SignDocDirectAux>): _200.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _200.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.TxBody;
                fromPartial(object: Partial<_200.TxBody>): _200.TxBody;
            };
            AuthInfo: {
                encode(message: _200.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.AuthInfo;
                fromPartial(object: Partial<_200.AuthInfo>): _200.AuthInfo;
            };
            SignerInfo: {
                encode(message: _200.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.SignerInfo;
                fromPartial(object: Partial<_200.SignerInfo>): _200.SignerInfo;
            };
            ModeInfo: {
                encode(message: _200.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.ModeInfo;
                fromPartial(object: Partial<_200.ModeInfo>): _200.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _200.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.ModeInfo_Single;
                fromPartial(object: Partial<_200.ModeInfo_Single>): _200.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _200.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.ModeInfo_Multi;
                fromPartial(object: Partial<_200.ModeInfo_Multi>): _200.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _200.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.Fee;
                fromPartial(object: Partial<_200.Fee>): _200.Fee;
            };
            Tip: {
                encode(message: _200.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.Tip;
                fromPartial(object: Partial<_200.Tip>): _200.Tip;
            };
            AuxSignerData: {
                encode(message: _200.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _200.AuxSignerData;
                fromPartial(object: Partial<_200.AuxSignerData>): _200.AuxSignerData;
            };
            orderByFromJSON(object: any): _199.OrderBy;
            orderByToJSON(object: _199.OrderBy): string;
            broadcastModeFromJSON(object: any): _199.BroadcastMode;
            broadcastModeToJSON(object: _199.BroadcastMode): string;
            OrderBy: typeof _199.OrderBy;
            OrderBySDKType: typeof _199.OrderBy;
            BroadcastMode: typeof _199.BroadcastMode;
            BroadcastModeSDKType: typeof _199.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _199.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetTxsEventRequest;
                fromPartial(object: Partial<_199.GetTxsEventRequest>): _199.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _199.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetTxsEventResponse;
                fromPartial(object: Partial<_199.GetTxsEventResponse>): _199.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _199.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.BroadcastTxRequest;
                fromPartial(object: Partial<_199.BroadcastTxRequest>): _199.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _199.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.BroadcastTxResponse;
                fromPartial(object: Partial<_199.BroadcastTxResponse>): _199.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _199.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.SimulateRequest;
                fromPartial(object: Partial<_199.SimulateRequest>): _199.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _199.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.SimulateResponse;
                fromPartial(object: Partial<_199.SimulateResponse>): _199.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _199.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetTxRequest;
                fromPartial(object: Partial<_199.GetTxRequest>): _199.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _199.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetTxResponse;
                fromPartial(object: Partial<_199.GetTxResponse>): _199.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _199.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_199.GetBlockWithTxsRequest>): _199.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _199.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_199.GetBlockWithTxsResponse>): _199.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _199.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxDecodeRequest;
                fromPartial(object: Partial<_199.TxDecodeRequest>): _199.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _199.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxDecodeResponse;
                fromPartial(object: Partial<_199.TxDecodeResponse>): _199.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _199.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxEncodeRequest;
                fromPartial(object: Partial<_199.TxEncodeRequest>): _199.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _199.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxEncodeResponse;
                fromPartial(object: Partial<_199.TxEncodeResponse>): _199.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _199.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxEncodeAminoRequest;
                fromPartial(object: Partial<_199.TxEncodeAminoRequest>): _199.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _199.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxEncodeAminoResponse;
                fromPartial(object: Partial<_199.TxEncodeAminoResponse>): _199.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _199.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxDecodeAminoRequest;
                fromPartial(object: Partial<_199.TxDecodeAminoRequest>): _199.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _199.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _199.TxDecodeAminoResponse;
                fromPartial(object: Partial<_199.TxDecodeAminoResponse>): _199.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _201.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _201.Module;
                    fromPartial(object: Partial<_201.Module>): _201.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _351.MsgClientImpl;
            QueryClientImpl: typeof _335.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _202.QueryCurrentPlanRequest): Promise<_202.QueryCurrentPlanResponse>;
                appliedPlan(request: _202.QueryAppliedPlanRequest): Promise<_202.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _202.QueryModuleVersionsRequest): Promise<_202.QueryModuleVersionsResponse>;
                authority(request?: _202.QueryAuthorityRequest): Promise<_202.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _203.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _203.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _203.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _203.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _203.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _203.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _203.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _203.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _203.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _203.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _203.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _203.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _203.MsgSoftwareUpgrade) => {
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
                    }) => _203.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _203.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _203.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _204.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _204.Plan;
                fromPartial(object: Partial<_204.Plan>): _204.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _204.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _204.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_204.SoftwareUpgradeProposal>): _204.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _204.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _204.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_204.CancelSoftwareUpgradeProposal>): _204.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _204.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _204.ModuleVersion;
                fromPartial(object: Partial<_204.ModuleVersion>): _204.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _203.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _203.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_203.MsgSoftwareUpgrade>): _203.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _203.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _203.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_203.MsgSoftwareUpgradeResponse>): _203.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _203.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _203.MsgCancelUpgrade;
                fromPartial(object: Partial<_203.MsgCancelUpgrade>): _203.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _203.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _203.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_203.MsgCancelUpgradeResponse>): _203.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _202.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _202.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_202.QueryCurrentPlanRequest>): _202.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _202.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_202.QueryCurrentPlanResponse>): _202.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _202.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_202.QueryAppliedPlanRequest>): _202.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _202.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_202.QueryAppliedPlanResponse>): _202.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _202.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_202.QueryUpgradedConsensusStateRequest>): _202.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _202.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_202.QueryUpgradedConsensusStateResponse>): _202.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _202.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_202.QueryModuleVersionsRequest>): _202.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _202.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_202.QueryModuleVersionsResponse>): _202.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _202.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _202.QueryAuthorityRequest;
                fromPartial(_: Partial<_202.QueryAuthorityRequest>): _202.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _202.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _202.QueryAuthorityResponse;
                fromPartial(object: Partial<_202.QueryAuthorityResponse>): _202.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _205.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _205.Module;
                    fromPartial(_: Partial<_205.Module>): _205.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _352.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _206.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _206.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _206.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _206.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _206.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _206.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _206.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _206.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _206.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _206.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _206.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _206.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _206.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _206.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _206.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _206.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _206.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _206.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _206.MsgCreateVestingAccount) => {
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
                    }) => _206.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _206.MsgCreatePermanentLockedAccount) => {
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
                    }) => _206.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _206.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _206.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _207.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.BaseVestingAccount;
                fromPartial(object: Partial<_207.BaseVestingAccount>): _207.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _207.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.ContinuousVestingAccount;
                fromPartial(object: Partial<_207.ContinuousVestingAccount>): _207.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _207.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.DelayedVestingAccount;
                fromPartial(object: Partial<_207.DelayedVestingAccount>): _207.DelayedVestingAccount;
            };
            Period: {
                encode(message: _207.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.Period;
                fromPartial(object: Partial<_207.Period>): _207.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _207.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.PeriodicVestingAccount;
                fromPartial(object: Partial<_207.PeriodicVestingAccount>): _207.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _207.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _207.PermanentLockedAccount;
                fromPartial(object: Partial<_207.PermanentLockedAccount>): _207.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _206.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _206.MsgCreateVestingAccount;
                fromPartial(object: Partial<_206.MsgCreateVestingAccount>): _206.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _206.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _206.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_206.MsgCreateVestingAccountResponse>): _206.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _206.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _206.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_206.MsgCreatePermanentLockedAccount>): _206.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _206.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _206.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_206.MsgCreatePermanentLockedAccountResponse>): _206.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _206.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _206.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_206.MsgCreatePeriodicVestingAccount>): _206.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _206.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _206.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_206.MsgCreatePeriodicVestingAccountResponse>): _206.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _336.MsgClientImpl;
                };
                authz: {
                    v1beta1: _337.MsgClientImpl;
                };
                bank: {
                    v1beta1: _338.MsgClientImpl;
                };
                consensus: {
                    v1: _339.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _340.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _341.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _342.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _343.MsgClientImpl;
                };
                gov: {
                    v1: _344.MsgClientImpl;
                    v1beta1: _345.MsgClientImpl;
                };
                group: {
                    v1: _346.MsgClientImpl;
                };
                mint: {
                    v1beta1: _347.MsgClientImpl;
                };
                nft: {
                    v1beta1: _348.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _349.MsgClientImpl;
                };
                staking: {
                    v1beta1: _350.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _351.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _352.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _86.QueryConfigRequest): Promise<_86.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _90.QueryAccountsRequest): Promise<_90.QueryAccountsResponse>;
                        account(request: _90.QueryAccountRequest): Promise<_90.QueryAccountResponse>;
                        accountAddressByID(request: _90.QueryAccountAddressByIDRequest): Promise<_90.QueryAccountAddressByIDResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                        moduleAccounts(request?: _90.QueryModuleAccountsRequest): Promise<_90.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _90.QueryModuleAccountByNameRequest): Promise<_90.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _90.Bech32PrefixRequest): Promise<_90.Bech32PrefixResponse>;
                        addressBytesToString(request: _90.AddressBytesToStringRequest): Promise<_90.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _90.AddressStringToBytesRequest): Promise<_90.AddressStringToBytesResponse>;
                        accountInfo(request: _90.QueryAccountInfoRequest): Promise<_90.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _96.QueryGrantsRequest): Promise<_96.QueryGrantsResponse>;
                        granterGrants(request: _96.QueryGranterGrantsRequest): Promise<_96.QueryGranterGrantsResponse>;
                        granteeGrants(request: _96.QueryGranteeGrantsRequest): Promise<_96.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _99.AppOptionsRequest): Promise<_99.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _104.QueryBalanceRequest): Promise<_104.QueryBalanceResponse>;
                        allBalances(request: _104.QueryAllBalancesRequest): Promise<_104.QueryAllBalancesResponse>;
                        spendableBalances(request: _104.QuerySpendableBalancesRequest): Promise<_104.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _104.QuerySpendableBalanceByDenomRequest): Promise<_104.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _104.QueryTotalSupplyRequest): Promise<_104.QueryTotalSupplyResponse>;
                        supplyOf(request: _104.QuerySupplyOfRequest): Promise<_104.QuerySupplyOfResponse>;
                        params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        denomMetadata(request: _104.QueryDenomMetadataRequest): Promise<_104.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _104.QueryDenomsMetadataRequest): Promise<_104.QueryDenomsMetadataResponse>;
                        denomOwners(request: _104.QueryDenomOwnersRequest): Promise<_104.QueryDenomOwnersResponse>;
                        sendEnabled(request: _104.QuerySendEnabledRequest): Promise<_104.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _108.ConfigRequest): Promise<_108.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _115.GetNodeInfoRequest): Promise<_115.GetNodeInfoResponse>;
                            getSyncing(request?: _115.GetSyncingRequest): Promise<_115.GetSyncingResponse>;
                            getLatestBlock(request?: _115.GetLatestBlockRequest): Promise<_115.GetLatestBlockResponse>;
                            getBlockByHeight(request: _115.GetBlockByHeightRequest): Promise<_115.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _115.GetLatestValidatorSetRequest): Promise<_115.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _115.GetValidatorSetByHeightRequest): Promise<_115.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _115.ABCIQueryRequest): Promise<_115.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                        validatorDistributionInfo(request: _136.QueryValidatorDistributionInfoRequest): Promise<_136.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _136.QueryValidatorOutstandingRewardsRequest): Promise<_136.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _136.QueryValidatorCommissionRequest): Promise<_136.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _136.QueryValidatorSlashesRequest): Promise<_136.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _136.QueryDelegationRewardsRequest): Promise<_136.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _136.QueryDelegationTotalRewardsRequest): Promise<_136.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _136.QueryDelegatorValidatorsRequest): Promise<_136.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _136.QueryDelegatorWithdrawAddressRequest): Promise<_136.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _136.QueryCommunityPoolRequest): Promise<_136.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _141.QueryEvidenceRequest): Promise<_141.QueryEvidenceResponse>;
                        allEvidence(request?: _141.QueryAllEvidenceRequest): Promise<_141.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _146.QueryAllowanceRequest): Promise<_146.QueryAllowanceResponse>;
                        allowances(request: _146.QueryAllowancesRequest): Promise<_146.QueryAllowancesResponse>;
                        allowancesByGranter(request: _146.QueryAllowancesByGranterRequest): Promise<_146.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _153.QueryProposalRequest): Promise<_153.QueryProposalResponse>;
                        proposals(request: _153.QueryProposalsRequest): Promise<_153.QueryProposalsResponse>;
                        vote(request: _153.QueryVoteRequest): Promise<_153.QueryVoteResponse>;
                        votes(request: _153.QueryVotesRequest): Promise<_153.QueryVotesResponse>;
                        params(request: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                        deposit(request: _153.QueryDepositRequest): Promise<_153.QueryDepositResponse>;
                        deposits(request: _153.QueryDepositsRequest): Promise<_153.QueryDepositsResponse>;
                        tallyResult(request: _153.QueryTallyResultRequest): Promise<_153.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _157.QueryProposalRequest): Promise<_157.QueryProposalResponse>;
                        proposals(request: _157.QueryProposalsRequest): Promise<_157.QueryProposalsResponse>;
                        vote(request: _157.QueryVoteRequest): Promise<_157.QueryVoteResponse>;
                        votes(request: _157.QueryVotesRequest): Promise<_157.QueryVotesResponse>;
                        params(request: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                        deposit(request: _157.QueryDepositRequest): Promise<_157.QueryDepositResponse>;
                        deposits(request: _157.QueryDepositsRequest): Promise<_157.QueryDepositsResponse>;
                        tallyResult(request: _157.QueryTallyResultRequest): Promise<_157.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _162.QueryGroupInfoRequest): Promise<_162.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _162.QueryGroupPolicyInfoRequest): Promise<_162.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _162.QueryGroupMembersRequest): Promise<_162.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _162.QueryGroupsByAdminRequest): Promise<_162.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _162.QueryGroupPoliciesByGroupRequest): Promise<_162.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _162.QueryGroupPoliciesByAdminRequest): Promise<_162.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _162.QueryProposalRequest): Promise<_162.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _162.QueryProposalsByGroupPolicyRequest): Promise<_162.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _162.QueryVoteByProposalVoterRequest): Promise<_162.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _162.QueryVotesByProposalRequest): Promise<_162.QueryVotesByProposalResponse>;
                        votesByVoter(request: _162.QueryVotesByVoterRequest): Promise<_162.QueryVotesByVoterResponse>;
                        groupsByMember(request: _162.QueryGroupsByMemberRequest): Promise<_162.QueryGroupsByMemberResponse>;
                        tallyResult(request: _162.QueryTallyResultRequest): Promise<_162.QueryTallyResultResponse>;
                        groups(request?: _162.QueryGroupsRequest): Promise<_162.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                        inflation(request?: _168.QueryInflationRequest): Promise<_168.QueryInflationResponse>;
                        annualProvisions(request?: _168.QueryAnnualProvisionsRequest): Promise<_168.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _175.QueryBalanceRequest): Promise<_175.QueryBalanceResponse>;
                        owner(request: _175.QueryOwnerRequest): Promise<_175.QueryOwnerResponse>;
                        supply(request: _175.QuerySupplyRequest): Promise<_175.QuerySupplyResponse>;
                        nFTs(request: _175.QueryNFTsRequest): Promise<_175.QueryNFTsResponse>;
                        nFT(request: _175.QueryNFTRequest): Promise<_175.QueryNFTResponse>;
                        class(request: _175.QueryClassRequest): Promise<_175.QueryClassResponse>;
                        classes(request?: _175.QueryClassesRequest): Promise<_175.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _178.GetRequest): Promise<_178.GetResponse>;
                            list(request: _178.ListRequest): Promise<_178.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _183.QueryParamsRequest): Promise<_183.QueryParamsResponse>;
                        subspaces(request?: _183.QuerySubspacesRequest): Promise<_183.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _188.QueryParamsRequest): Promise<_188.QueryParamsResponse>;
                        signingInfo(request: _188.QuerySigningInfoRequest): Promise<_188.QuerySigningInfoResponse>;
                        signingInfos(request?: _188.QuerySigningInfosRequest): Promise<_188.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _194.QueryValidatorsRequest): Promise<_194.QueryValidatorsResponse>;
                        validator(request: _194.QueryValidatorRequest): Promise<_194.QueryValidatorResponse>;
                        validatorDelegations(request: _194.QueryValidatorDelegationsRequest): Promise<_194.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _194.QueryValidatorUnbondingDelegationsRequest): Promise<_194.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _194.QueryDelegationRequest): Promise<_194.QueryDelegationResponse>;
                        unbondingDelegation(request: _194.QueryUnbondingDelegationRequest): Promise<_194.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _194.QueryDelegatorDelegationsRequest): Promise<_194.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _194.QueryDelegatorUnbondingDelegationsRequest): Promise<_194.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _194.QueryRedelegationsRequest): Promise<_194.QueryRedelegationsResponse>;
                        delegatorValidators(request: _194.QueryDelegatorValidatorsRequest): Promise<_194.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _194.QueryDelegatorValidatorRequest): Promise<_194.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _194.QueryHistoricalInfoRequest): Promise<_194.QueryHistoricalInfoResponse>;
                        pool(request?: _194.QueryPoolRequest): Promise<_194.QueryPoolResponse>;
                        params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _199.SimulateRequest): Promise<_199.SimulateResponse>;
                        getTx(request: _199.GetTxRequest): Promise<_199.GetTxResponse>;
                        broadcastTx(request: _199.BroadcastTxRequest): Promise<_199.BroadcastTxResponse>;
                        getTxsEvent(request: _199.GetTxsEventRequest): Promise<_199.GetTxsEventResponse>;
                        getBlockWithTxs(request: _199.GetBlockWithTxsRequest): Promise<_199.GetBlockWithTxsResponse>;
                        txDecode(request: _199.TxDecodeRequest): Promise<_199.TxDecodeResponse>;
                        txEncode(request: _199.TxEncodeRequest): Promise<_199.TxEncodeResponse>;
                        txEncodeAmino(request: _199.TxEncodeAminoRequest): Promise<_199.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _199.TxDecodeAminoRequest): Promise<_199.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _202.QueryCurrentPlanRequest): Promise<_202.QueryCurrentPlanResponse>;
                        appliedPlan(request: _202.QueryAppliedPlanRequest): Promise<_202.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _202.QueryModuleVersionsRequest): Promise<_202.QueryModuleVersionsResponse>;
                        authority(request?: _202.QueryAuthorityRequest): Promise<_202.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
