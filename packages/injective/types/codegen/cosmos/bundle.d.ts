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
import * as _278 from "./auth/v1beta1/query.lcd";
import * as _279 from "./authz/v1beta1/query.lcd";
import * as _280 from "./bank/v1beta1/query.lcd";
import * as _281 from "./base/node/v1beta1/query.lcd";
import * as _282 from "./base/tendermint/v1beta1/query.lcd";
import * as _283 from "./consensus/v1/query.lcd";
import * as _284 from "./distribution/v1beta1/query.lcd";
import * as _285 from "./evidence/v1beta1/query.lcd";
import * as _286 from "./feegrant/v1beta1/query.lcd";
import * as _287 from "./gov/v1/query.lcd";
import * as _288 from "./gov/v1beta1/query.lcd";
import * as _289 from "./group/v1/query.lcd";
import * as _290 from "./mint/v1beta1/query.lcd";
import * as _291 from "./nft/v1beta1/query.lcd";
import * as _292 from "./params/v1beta1/query.lcd";
import * as _293 from "./slashing/v1beta1/query.lcd";
import * as _294 from "./staking/v1beta1/query.lcd";
import * as _295 from "./tx/v1beta1/service.lcd";
import * as _296 from "./upgrade/v1beta1/query.lcd";
import * as _297 from "./app/v1alpha1/query.rpc.Query";
import * as _298 from "./auth/v1beta1/query.rpc.Query";
import * as _299 from "./authz/v1beta1/query.rpc.Query";
import * as _300 from "./autocli/v1/query.rpc.Query";
import * as _301 from "./bank/v1beta1/query.rpc.Query";
import * as _302 from "./base/node/v1beta1/query.rpc.Service";
import * as _303 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _304 from "./consensus/v1/query.rpc.Query";
import * as _305 from "./distribution/v1beta1/query.rpc.Query";
import * as _306 from "./evidence/v1beta1/query.rpc.Query";
import * as _307 from "./feegrant/v1beta1/query.rpc.Query";
import * as _308 from "./gov/v1/query.rpc.Query";
import * as _309 from "./gov/v1beta1/query.rpc.Query";
import * as _310 from "./group/v1/query.rpc.Query";
import * as _311 from "./mint/v1beta1/query.rpc.Query";
import * as _312 from "./nft/v1beta1/query.rpc.Query";
import * as _313 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _314 from "./params/v1beta1/query.rpc.Query";
import * as _315 from "./slashing/v1beta1/query.rpc.Query";
import * as _316 from "./staking/v1beta1/query.rpc.Query";
import * as _317 from "./tx/v1beta1/service.rpc.Service";
import * as _318 from "./upgrade/v1beta1/query.rpc.Query";
import * as _319 from "./auth/v1beta1/tx.rpc.msg";
import * as _320 from "./authz/v1beta1/tx.rpc.msg";
import * as _321 from "./bank/v1beta1/tx.rpc.msg";
import * as _322 from "./consensus/v1/tx.rpc.msg";
import * as _323 from "./crisis/v1beta1/tx.rpc.msg";
import * as _324 from "./distribution/v1beta1/tx.rpc.msg";
import * as _325 from "./evidence/v1beta1/tx.rpc.msg";
import * as _326 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _327 from "./gov/v1/tx.rpc.msg";
import * as _328 from "./gov/v1beta1/tx.rpc.msg";
import * as _329 from "./group/v1/tx.rpc.msg";
import * as _330 from "./mint/v1beta1/tx.rpc.msg";
import * as _331 from "./nft/v1beta1/tx.rpc.msg";
import * as _332 from "./slashing/v1beta1/tx.rpc.msg";
import * as _333 from "./staking/v1beta1/tx.rpc.msg";
import * as _334 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _335 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _52.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Module;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                    fromAmino(object: _52.ModuleAmino): _52.Module;
                    toAmino(message: _52.Module): _52.ModuleAmino;
                    fromAminoMsg(object: _52.ModuleAminoMsg): _52.Module;
                    toAminoMsg(message: _52.Module): _52.ModuleAminoMsg;
                    fromProtoMsg(message: _52.ModuleProtoMsg): _52.Module;
                    toProto(message: _52.Module): Uint8Array;
                    toProtoMsg(message: _52.Module): _52.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _52.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.StoreKeyConfig;
                    fromPartial(object: Partial<_52.StoreKeyConfig>): _52.StoreKeyConfig;
                    fromAmino(object: _52.StoreKeyConfigAmino): _52.StoreKeyConfig;
                    toAmino(message: _52.StoreKeyConfig): _52.StoreKeyConfigAmino;
                    fromAminoMsg(object: _52.StoreKeyConfigAminoMsg): _52.StoreKeyConfig;
                    toAminoMsg(message: _52.StoreKeyConfig): _52.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _52.StoreKeyConfigProtoMsg): _52.StoreKeyConfig;
                    toProto(message: _52.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _52.StoreKeyConfig): _52.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _55.QueryConfigRequest): Promise<_55.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _55.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryConfigRequest;
                fromPartial(_: Partial<_55.QueryConfigRequest>): _55.QueryConfigRequest;
                fromAmino(_: _55.QueryConfigRequestAmino): _55.QueryConfigRequest;
                toAmino(_: _55.QueryConfigRequest): _55.QueryConfigRequestAmino;
                fromAminoMsg(object: _55.QueryConfigRequestAminoMsg): _55.QueryConfigRequest;
                toAminoMsg(message: _55.QueryConfigRequest): _55.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _55.QueryConfigRequestProtoMsg): _55.QueryConfigRequest;
                toProto(message: _55.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _55.QueryConfigRequest): _55.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _55.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryConfigResponse;
                fromPartial(object: Partial<_55.QueryConfigResponse>): _55.QueryConfigResponse;
                fromAmino(object: _55.QueryConfigResponseAmino): _55.QueryConfigResponse;
                toAmino(message: _55.QueryConfigResponse): _55.QueryConfigResponseAmino;
                fromAminoMsg(object: _55.QueryConfigResponseAminoMsg): _55.QueryConfigResponse;
                toAminoMsg(message: _55.QueryConfigResponse): _55.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _55.QueryConfigResponseProtoMsg): _55.QueryConfigResponse;
                toProto(message: _55.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _55.QueryConfigResponse): _55.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _54.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ModuleDescriptor;
                fromPartial(object: Partial<_54.ModuleDescriptor>): _54.ModuleDescriptor;
                fromAmino(object: _54.ModuleDescriptorAmino): _54.ModuleDescriptor;
                toAmino(message: _54.ModuleDescriptor): _54.ModuleDescriptorAmino;
                fromAminoMsg(object: _54.ModuleDescriptorAminoMsg): _54.ModuleDescriptor;
                toAminoMsg(message: _54.ModuleDescriptor): _54.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _54.ModuleDescriptorProtoMsg): _54.ModuleDescriptor;
                toProto(message: _54.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _54.ModuleDescriptor): _54.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _54.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PackageReference;
                fromPartial(object: Partial<_54.PackageReference>): _54.PackageReference;
                fromAmino(object: _54.PackageReferenceAmino): _54.PackageReference;
                toAmino(message: _54.PackageReference): _54.PackageReferenceAmino;
                fromAminoMsg(object: _54.PackageReferenceAminoMsg): _54.PackageReference;
                toAminoMsg(message: _54.PackageReference): _54.PackageReferenceAminoMsg;
                fromProtoMsg(message: _54.PackageReferenceProtoMsg): _54.PackageReference;
                toProto(message: _54.PackageReference): Uint8Array;
                toProtoMsg(message: _54.PackageReference): _54.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _54.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MigrateFromInfo;
                fromPartial(object: Partial<_54.MigrateFromInfo>): _54.MigrateFromInfo;
                fromAmino(object: _54.MigrateFromInfoAmino): _54.MigrateFromInfo;
                toAmino(message: _54.MigrateFromInfo): _54.MigrateFromInfoAmino;
                fromAminoMsg(object: _54.MigrateFromInfoAminoMsg): _54.MigrateFromInfo;
                toAminoMsg(message: _54.MigrateFromInfo): _54.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _54.MigrateFromInfoProtoMsg): _54.MigrateFromInfo;
                toProto(message: _54.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _54.MigrateFromInfo): _54.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _53.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Config;
                fromPartial(object: Partial<_53.Config>): _53.Config;
                fromAmino(object: _53.ConfigAmino): _53.Config;
                toAmino(message: _53.Config): _53.ConfigAmino;
                fromAminoMsg(object: _53.ConfigAminoMsg): _53.Config;
                toAminoMsg(message: _53.Config): _53.ConfigAminoMsg;
                fromProtoMsg(message: _53.ConfigProtoMsg): _53.Config;
                toProto(message: _53.Config): Uint8Array;
                toProtoMsg(message: _53.Config): _53.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _53.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ModuleConfig;
                fromPartial(object: Partial<_53.ModuleConfig>): _53.ModuleConfig;
                fromAmino(object: _53.ModuleConfigAmino): _53.ModuleConfig;
                toAmino(message: _53.ModuleConfig): _53.ModuleConfigAmino;
                fromAminoMsg(object: _53.ModuleConfigAminoMsg): _53.ModuleConfig;
                toAminoMsg(message: _53.ModuleConfig): _53.ModuleConfigAminoMsg;
                fromProtoMsg(message: _53.ModuleConfigProtoMsg): _53.ModuleConfig;
                toProto(message: _53.ModuleConfig): Uint8Array;
                toProtoMsg(message: _53.ModuleConfig): _53.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _53.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GolangBinding;
                fromPartial(object: Partial<_53.GolangBinding>): _53.GolangBinding;
                fromAmino(object: _53.GolangBindingAmino): _53.GolangBinding;
                toAmino(message: _53.GolangBinding): _53.GolangBindingAmino;
                fromAminoMsg(object: _53.GolangBindingAminoMsg): _53.GolangBinding;
                toAminoMsg(message: _53.GolangBinding): _53.GolangBindingAminoMsg;
                fromProtoMsg(message: _53.GolangBindingProtoMsg): _53.GolangBinding;
                toProto(message: _53.GolangBinding): Uint8Array;
                toProtoMsg(message: _53.GolangBinding): _53.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _56.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Module;
                    fromPartial(object: Partial<_56.Module>): _56.Module;
                    fromAmino(object: _56.ModuleAmino): _56.Module;
                    toAmino(message: _56.Module): _56.ModuleAmino;
                    fromAminoMsg(object: _56.ModuleAminoMsg): _56.Module;
                    toAminoMsg(message: _56.Module): _56.ModuleAminoMsg;
                    fromProtoMsg(message: _56.ModuleProtoMsg): _56.Module;
                    toProto(message: _56.Module): Uint8Array;
                    toProtoMsg(message: _56.Module): _56.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _56.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.ModuleAccountPermission;
                    fromPartial(object: Partial<_56.ModuleAccountPermission>): _56.ModuleAccountPermission;
                    fromAmino(object: _56.ModuleAccountPermissionAmino): _56.ModuleAccountPermission;
                    toAmino(message: _56.ModuleAccountPermission): _56.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _56.ModuleAccountPermissionAminoMsg): _56.ModuleAccountPermission;
                    toAminoMsg(message: _56.ModuleAccountPermission): _56.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _56.ModuleAccountPermissionProtoMsg): _56.ModuleAccountPermission;
                    toProto(message: _56.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _56.ModuleAccountPermission): _56.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _298.QueryClientImpl;
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
            LCDQueryClient: typeof _278.LCDQueryClient;
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
                    toAmino: (message: _60.MsgUpdateParams) => _60.MsgUpdateParamsAmino;
                    fromAmino: (object: _60.MsgUpdateParamsAmino) => _60.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _60.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgUpdateParams;
                fromPartial(object: Partial<_60.MsgUpdateParams>): _60.MsgUpdateParams;
                fromAmino(object: _60.MsgUpdateParamsAmino): _60.MsgUpdateParams;
                toAmino(message: _60.MsgUpdateParams): _60.MsgUpdateParamsAmino;
                fromAminoMsg(object: _60.MsgUpdateParamsAminoMsg): _60.MsgUpdateParams;
                toAminoMsg(message: _60.MsgUpdateParams): _60.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _60.MsgUpdateParamsProtoMsg): _60.MsgUpdateParams;
                toProto(message: _60.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _60.MsgUpdateParams): _60.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _60.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_60.MsgUpdateParamsResponse>): _60.MsgUpdateParamsResponse;
                fromAmino(_: _60.MsgUpdateParamsResponseAmino): _60.MsgUpdateParamsResponse;
                toAmino(_: _60.MsgUpdateParamsResponse): _60.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _60.MsgUpdateParamsResponseAminoMsg): _60.MsgUpdateParamsResponse;
                toAminoMsg(message: _60.MsgUpdateParamsResponse): _60.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _60.MsgUpdateParamsResponseProtoMsg): _60.MsgUpdateParamsResponse;
                toProto(message: _60.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _60.MsgUpdateParamsResponse): _60.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _59.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountsRequest;
                fromPartial(object: Partial<_59.QueryAccountsRequest>): _59.QueryAccountsRequest;
                fromAmino(object: _59.QueryAccountsRequestAmino): _59.QueryAccountsRequest;
                toAmino(message: _59.QueryAccountsRequest): _59.QueryAccountsRequestAmino;
                fromAminoMsg(object: _59.QueryAccountsRequestAminoMsg): _59.QueryAccountsRequest;
                toAminoMsg(message: _59.QueryAccountsRequest): _59.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAccountsRequestProtoMsg): _59.QueryAccountsRequest;
                toProto(message: _59.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAccountsRequest): _59.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _59.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountsResponse;
                fromPartial(object: Partial<_59.QueryAccountsResponse>): _59.QueryAccountsResponse;
                fromAmino(object: _59.QueryAccountsResponseAmino): _59.QueryAccountsResponse;
                toAmino(message: _59.QueryAccountsResponse): _59.QueryAccountsResponseAmino;
                fromAminoMsg(object: _59.QueryAccountsResponseAminoMsg): _59.QueryAccountsResponse;
                toAminoMsg(message: _59.QueryAccountsResponse): _59.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAccountsResponseProtoMsg): _59.QueryAccountsResponse;
                toProto(message: _59.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAccountsResponse): _59.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _59.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountRequest;
                fromPartial(object: Partial<_59.QueryAccountRequest>): _59.QueryAccountRequest;
                fromAmino(object: _59.QueryAccountRequestAmino): _59.QueryAccountRequest;
                toAmino(message: _59.QueryAccountRequest): _59.QueryAccountRequestAmino;
                fromAminoMsg(object: _59.QueryAccountRequestAminoMsg): _59.QueryAccountRequest;
                toAminoMsg(message: _59.QueryAccountRequest): _59.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAccountRequestProtoMsg): _59.QueryAccountRequest;
                toProto(message: _59.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAccountRequest): _59.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _59.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountResponse;
                fromPartial(object: Partial<_59.QueryAccountResponse>): _59.QueryAccountResponse;
                fromAmino(object: _59.QueryAccountResponseAmino): _59.QueryAccountResponse;
                toAmino(message: _59.QueryAccountResponse): _59.QueryAccountResponseAmino;
                fromAminoMsg(object: _59.QueryAccountResponseAminoMsg): _59.QueryAccountResponse;
                toAminoMsg(message: _59.QueryAccountResponse): _59.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAccountResponseProtoMsg): _59.QueryAccountResponse;
                toProto(message: _59.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAccountResponse): _59.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _59.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.QueryParamsRequest;
                fromPartial(_: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
                fromAmino(_: _59.QueryParamsRequestAmino): _59.QueryParamsRequest;
                toAmino(_: _59.QueryParamsRequest): _59.QueryParamsRequestAmino;
                fromAminoMsg(object: _59.QueryParamsRequestAminoMsg): _59.QueryParamsRequest;
                toAminoMsg(message: _59.QueryParamsRequest): _59.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryParamsRequestProtoMsg): _59.QueryParamsRequest;
                toProto(message: _59.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryParamsRequest): _59.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _59.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryParamsResponse;
                fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
                fromAmino(object: _59.QueryParamsResponseAmino): _59.QueryParamsResponse;
                toAmino(message: _59.QueryParamsResponse): _59.QueryParamsResponseAmino;
                fromAminoMsg(object: _59.QueryParamsResponseAminoMsg): _59.QueryParamsResponse;
                toAminoMsg(message: _59.QueryParamsResponse): _59.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryParamsResponseProtoMsg): _59.QueryParamsResponse;
                toProto(message: _59.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryParamsResponse): _59.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _59.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_59.QueryModuleAccountsRequest>): _59.QueryModuleAccountsRequest;
                fromAmino(_: _59.QueryModuleAccountsRequestAmino): _59.QueryModuleAccountsRequest;
                toAmino(_: _59.QueryModuleAccountsRequest): _59.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _59.QueryModuleAccountsRequestAminoMsg): _59.QueryModuleAccountsRequest;
                toAminoMsg(message: _59.QueryModuleAccountsRequest): _59.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryModuleAccountsRequestProtoMsg): _59.QueryModuleAccountsRequest;
                toProto(message: _59.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryModuleAccountsRequest): _59.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _59.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_59.QueryModuleAccountsResponse>): _59.QueryModuleAccountsResponse;
                fromAmino(object: _59.QueryModuleAccountsResponseAmino): _59.QueryModuleAccountsResponse;
                toAmino(message: _59.QueryModuleAccountsResponse): _59.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _59.QueryModuleAccountsResponseAminoMsg): _59.QueryModuleAccountsResponse;
                toAminoMsg(message: _59.QueryModuleAccountsResponse): _59.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryModuleAccountsResponseProtoMsg): _59.QueryModuleAccountsResponse;
                toProto(message: _59.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryModuleAccountsResponse): _59.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _59.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_59.QueryModuleAccountByNameRequest>): _59.QueryModuleAccountByNameRequest;
                fromAmino(object: _59.QueryModuleAccountByNameRequestAmino): _59.QueryModuleAccountByNameRequest;
                toAmino(message: _59.QueryModuleAccountByNameRequest): _59.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _59.QueryModuleAccountByNameRequestAminoMsg): _59.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _59.QueryModuleAccountByNameRequest): _59.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _59.QueryModuleAccountByNameRequestProtoMsg): _59.QueryModuleAccountByNameRequest;
                toProto(message: _59.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _59.QueryModuleAccountByNameRequest): _59.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _59.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_59.QueryModuleAccountByNameResponse>): _59.QueryModuleAccountByNameResponse;
                fromAmino(object: _59.QueryModuleAccountByNameResponseAmino): _59.QueryModuleAccountByNameResponse;
                toAmino(message: _59.QueryModuleAccountByNameResponse): _59.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _59.QueryModuleAccountByNameResponseAminoMsg): _59.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _59.QueryModuleAccountByNameResponse): _59.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _59.QueryModuleAccountByNameResponseProtoMsg): _59.QueryModuleAccountByNameResponse;
                toProto(message: _59.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _59.QueryModuleAccountByNameResponse): _59.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _59.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.Bech32PrefixRequest;
                fromPartial(_: Partial<_59.Bech32PrefixRequest>): _59.Bech32PrefixRequest;
                fromAmino(_: _59.Bech32PrefixRequestAmino): _59.Bech32PrefixRequest;
                toAmino(_: _59.Bech32PrefixRequest): _59.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _59.Bech32PrefixRequestAminoMsg): _59.Bech32PrefixRequest;
                toAminoMsg(message: _59.Bech32PrefixRequest): _59.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _59.Bech32PrefixRequestProtoMsg): _59.Bech32PrefixRequest;
                toProto(message: _59.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _59.Bech32PrefixRequest): _59.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _59.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Bech32PrefixResponse;
                fromPartial(object: Partial<_59.Bech32PrefixResponse>): _59.Bech32PrefixResponse;
                fromAmino(object: _59.Bech32PrefixResponseAmino): _59.Bech32PrefixResponse;
                toAmino(message: _59.Bech32PrefixResponse): _59.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _59.Bech32PrefixResponseAminoMsg): _59.Bech32PrefixResponse;
                toAminoMsg(message: _59.Bech32PrefixResponse): _59.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _59.Bech32PrefixResponseProtoMsg): _59.Bech32PrefixResponse;
                toProto(message: _59.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _59.Bech32PrefixResponse): _59.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _59.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.AddressBytesToStringRequest;
                fromPartial(object: Partial<_59.AddressBytesToStringRequest>): _59.AddressBytesToStringRequest;
                fromAmino(object: _59.AddressBytesToStringRequestAmino): _59.AddressBytesToStringRequest;
                toAmino(message: _59.AddressBytesToStringRequest): _59.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _59.AddressBytesToStringRequestAminoMsg): _59.AddressBytesToStringRequest;
                toAminoMsg(message: _59.AddressBytesToStringRequest): _59.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _59.AddressBytesToStringRequestProtoMsg): _59.AddressBytesToStringRequest;
                toProto(message: _59.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _59.AddressBytesToStringRequest): _59.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _59.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.AddressBytesToStringResponse;
                fromPartial(object: Partial<_59.AddressBytesToStringResponse>): _59.AddressBytesToStringResponse;
                fromAmino(object: _59.AddressBytesToStringResponseAmino): _59.AddressBytesToStringResponse;
                toAmino(message: _59.AddressBytesToStringResponse): _59.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _59.AddressBytesToStringResponseAminoMsg): _59.AddressBytesToStringResponse;
                toAminoMsg(message: _59.AddressBytesToStringResponse): _59.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _59.AddressBytesToStringResponseProtoMsg): _59.AddressBytesToStringResponse;
                toProto(message: _59.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _59.AddressBytesToStringResponse): _59.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _59.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.AddressStringToBytesRequest;
                fromPartial(object: Partial<_59.AddressStringToBytesRequest>): _59.AddressStringToBytesRequest;
                fromAmino(object: _59.AddressStringToBytesRequestAmino): _59.AddressStringToBytesRequest;
                toAmino(message: _59.AddressStringToBytesRequest): _59.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _59.AddressStringToBytesRequestAminoMsg): _59.AddressStringToBytesRequest;
                toAminoMsg(message: _59.AddressStringToBytesRequest): _59.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _59.AddressStringToBytesRequestProtoMsg): _59.AddressStringToBytesRequest;
                toProto(message: _59.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _59.AddressStringToBytesRequest): _59.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _59.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.AddressStringToBytesResponse;
                fromPartial(object: Partial<_59.AddressStringToBytesResponse>): _59.AddressStringToBytesResponse;
                fromAmino(object: _59.AddressStringToBytesResponseAmino): _59.AddressStringToBytesResponse;
                toAmino(message: _59.AddressStringToBytesResponse): _59.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _59.AddressStringToBytesResponseAminoMsg): _59.AddressStringToBytesResponse;
                toAminoMsg(message: _59.AddressStringToBytesResponse): _59.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _59.AddressStringToBytesResponseProtoMsg): _59.AddressStringToBytesResponse;
                toProto(message: _59.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _59.AddressStringToBytesResponse): _59.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _59.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_59.QueryAccountAddressByIDRequest>): _59.QueryAccountAddressByIDRequest;
                fromAmino(object: _59.QueryAccountAddressByIDRequestAmino): _59.QueryAccountAddressByIDRequest;
                toAmino(message: _59.QueryAccountAddressByIDRequest): _59.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _59.QueryAccountAddressByIDRequestAminoMsg): _59.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _59.QueryAccountAddressByIDRequest): _59.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAccountAddressByIDRequestProtoMsg): _59.QueryAccountAddressByIDRequest;
                toProto(message: _59.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAccountAddressByIDRequest): _59.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _59.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_59.QueryAccountAddressByIDResponse>): _59.QueryAccountAddressByIDResponse;
                fromAmino(object: _59.QueryAccountAddressByIDResponseAmino): _59.QueryAccountAddressByIDResponse;
                toAmino(message: _59.QueryAccountAddressByIDResponse): _59.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _59.QueryAccountAddressByIDResponseAminoMsg): _59.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _59.QueryAccountAddressByIDResponse): _59.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAccountAddressByIDResponseProtoMsg): _59.QueryAccountAddressByIDResponse;
                toProto(message: _59.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAccountAddressByIDResponse): _59.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _59.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountInfoRequest;
                fromPartial(object: Partial<_59.QueryAccountInfoRequest>): _59.QueryAccountInfoRequest;
                fromAmino(object: _59.QueryAccountInfoRequestAmino): _59.QueryAccountInfoRequest;
                toAmino(message: _59.QueryAccountInfoRequest): _59.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _59.QueryAccountInfoRequestAminoMsg): _59.QueryAccountInfoRequest;
                toAminoMsg(message: _59.QueryAccountInfoRequest): _59.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAccountInfoRequestProtoMsg): _59.QueryAccountInfoRequest;
                toProto(message: _59.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAccountInfoRequest): _59.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _59.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAccountInfoResponse;
                fromPartial(object: Partial<_59.QueryAccountInfoResponse>): _59.QueryAccountInfoResponse;
                fromAmino(object: _59.QueryAccountInfoResponseAmino): _59.QueryAccountInfoResponse;
                toAmino(message: _59.QueryAccountInfoResponse): _59.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _59.QueryAccountInfoResponseAminoMsg): _59.QueryAccountInfoResponse;
                toAminoMsg(message: _59.QueryAccountInfoResponse): _59.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAccountInfoResponseProtoMsg): _59.QueryAccountInfoResponse;
                toProto(message: _59.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAccountInfoResponse): _59.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _57.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.BaseAccount;
                fromPartial(object: Partial<_57.BaseAccount>): _57.BaseAccount;
                fromAmino(object: _57.BaseAccountAmino): _57.BaseAccount;
                toAmino(message: _57.BaseAccount): _57.BaseAccountAmino;
                fromAminoMsg(object: _57.BaseAccountAminoMsg): _57.BaseAccount;
                toAminoMsg(message: _57.BaseAccount): _57.BaseAccountAminoMsg;
                fromProtoMsg(message: _57.BaseAccountProtoMsg): _57.BaseAccount;
                toProto(message: _57.BaseAccount): Uint8Array;
                toProtoMsg(message: _57.BaseAccount): _57.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _57.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ModuleAccount;
                fromPartial(object: Partial<_57.ModuleAccount>): _57.ModuleAccount;
                fromAmino(object: _57.ModuleAccountAmino): _57.ModuleAccount;
                toAmino(message: _57.ModuleAccount): _57.ModuleAccountAmino;
                fromAminoMsg(object: _57.ModuleAccountAminoMsg): _57.ModuleAccount;
                toAminoMsg(message: _57.ModuleAccount): _57.ModuleAccountAminoMsg;
                fromProtoMsg(message: _57.ModuleAccountProtoMsg): _57.ModuleAccount;
                toProto(message: _57.ModuleAccount): Uint8Array;
                toProtoMsg(message: _57.ModuleAccount): _57.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _57.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ModuleCredential;
                fromPartial(object: Partial<_57.ModuleCredential>): _57.ModuleCredential;
                fromAmino(object: _57.ModuleCredentialAmino): _57.ModuleCredential;
                toAmino(message: _57.ModuleCredential): _57.ModuleCredentialAmino;
                fromAminoMsg(object: _57.ModuleCredentialAminoMsg): _57.ModuleCredential;
                toAminoMsg(message: _57.ModuleCredential): _57.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _57.ModuleCredentialProtoMsg): _57.ModuleCredential;
                toProto(message: _57.ModuleCredential): Uint8Array;
                toProtoMsg(message: _57.ModuleCredential): _57.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _57.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
                fromAmino(object: _57.ParamsAmino): _57.Params;
                toAmino(message: _57.Params): _57.ParamsAmino;
                fromAminoMsg(object: _57.ParamsAminoMsg): _57.Params;
                toAminoMsg(message: _57.Params): _57.ParamsAminoMsg;
                fromProtoMsg(message: _57.ParamsProtoMsg): _57.Params;
                toProto(message: _57.Params): Uint8Array;
                toProtoMsg(message: _57.Params): _57.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _61.Module;
                    fromPartial(_: Partial<_61.Module>): _61.Module;
                    fromAmino(_: _61.ModuleAmino): _61.Module;
                    toAmino(_: _61.Module): _61.ModuleAmino;
                    fromAminoMsg(object: _61.ModuleAminoMsg): _61.Module;
                    toAminoMsg(message: _61.Module): _61.ModuleAminoMsg;
                    fromProtoMsg(message: _61.ModuleProtoMsg): _61.Module;
                    toProto(message: _61.Module): Uint8Array;
                    toProtoMsg(message: _61.Module): _61.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _65.QueryGrantsRequest): Promise<_65.QueryGrantsResponse>;
                granterGrants(request: _65.QueryGranterGrantsRequest): Promise<_65.QueryGranterGrantsResponse>;
                granteeGrants(request: _65.QueryGranteeGrantsRequest): Promise<_65.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _279.LCDQueryClient;
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
                    toAmino: (message: _66.MsgGrant) => _66.MsgGrantAmino;
                    fromAmino: (object: _66.MsgGrantAmino) => _66.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _66.MsgExec) => _66.MsgExecAmino;
                    fromAmino: (object: _66.MsgExecAmino) => _66.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _66.MsgRevoke) => _66.MsgRevokeAmino;
                    fromAmino: (object: _66.MsgRevokeAmino) => _66.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _66.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgGrant;
                fromPartial(object: Partial<_66.MsgGrant>): _66.MsgGrant;
                fromAmino(object: _66.MsgGrantAmino): _66.MsgGrant;
                toAmino(message: _66.MsgGrant): _66.MsgGrantAmino;
                fromAminoMsg(object: _66.MsgGrantAminoMsg): _66.MsgGrant;
                toAminoMsg(message: _66.MsgGrant): _66.MsgGrantAminoMsg;
                fromProtoMsg(message: _66.MsgGrantProtoMsg): _66.MsgGrant;
                toProto(message: _66.MsgGrant): Uint8Array;
                toProtoMsg(message: _66.MsgGrant): _66.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _66.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgExecResponse;
                fromPartial(object: Partial<_66.MsgExecResponse>): _66.MsgExecResponse;
                fromAmino(object: _66.MsgExecResponseAmino): _66.MsgExecResponse;
                toAmino(message: _66.MsgExecResponse): _66.MsgExecResponseAmino;
                fromAminoMsg(object: _66.MsgExecResponseAminoMsg): _66.MsgExecResponse;
                toAminoMsg(message: _66.MsgExecResponse): _66.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _66.MsgExecResponseProtoMsg): _66.MsgExecResponse;
                toProto(message: _66.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _66.MsgExecResponse): _66.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _66.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgExec;
                fromPartial(object: Partial<_66.MsgExec>): _66.MsgExec;
                fromAmino(object: _66.MsgExecAmino): _66.MsgExec;
                toAmino(message: _66.MsgExec): _66.MsgExecAmino;
                fromAminoMsg(object: _66.MsgExecAminoMsg): _66.MsgExec;
                toAminoMsg(message: _66.MsgExec): _66.MsgExecAminoMsg;
                fromProtoMsg(message: _66.MsgExecProtoMsg): _66.MsgExec;
                toProto(message: _66.MsgExec): Uint8Array;
                toProtoMsg(message: _66.MsgExec): _66.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _66.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgGrantResponse;
                fromPartial(_: Partial<_66.MsgGrantResponse>): _66.MsgGrantResponse;
                fromAmino(_: _66.MsgGrantResponseAmino): _66.MsgGrantResponse;
                toAmino(_: _66.MsgGrantResponse): _66.MsgGrantResponseAmino;
                fromAminoMsg(object: _66.MsgGrantResponseAminoMsg): _66.MsgGrantResponse;
                toAminoMsg(message: _66.MsgGrantResponse): _66.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _66.MsgGrantResponseProtoMsg): _66.MsgGrantResponse;
                toProto(message: _66.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _66.MsgGrantResponse): _66.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _66.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgRevoke;
                fromPartial(object: Partial<_66.MsgRevoke>): _66.MsgRevoke;
                fromAmino(object: _66.MsgRevokeAmino): _66.MsgRevoke;
                toAmino(message: _66.MsgRevoke): _66.MsgRevokeAmino;
                fromAminoMsg(object: _66.MsgRevokeAminoMsg): _66.MsgRevoke;
                toAminoMsg(message: _66.MsgRevoke): _66.MsgRevokeAminoMsg;
                fromProtoMsg(message: _66.MsgRevokeProtoMsg): _66.MsgRevoke;
                toProto(message: _66.MsgRevoke): Uint8Array;
                toProtoMsg(message: _66.MsgRevoke): _66.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _66.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgRevokeResponse;
                fromPartial(_: Partial<_66.MsgRevokeResponse>): _66.MsgRevokeResponse;
                fromAmino(_: _66.MsgRevokeResponseAmino): _66.MsgRevokeResponse;
                toAmino(_: _66.MsgRevokeResponse): _66.MsgRevokeResponseAmino;
                fromAminoMsg(object: _66.MsgRevokeResponseAminoMsg): _66.MsgRevokeResponse;
                toAminoMsg(message: _66.MsgRevokeResponse): _66.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _66.MsgRevokeResponseProtoMsg): _66.MsgRevokeResponse;
                toProto(message: _66.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _66.MsgRevokeResponse): _66.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _65.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGrantsRequest;
                fromPartial(object: Partial<_65.QueryGrantsRequest>): _65.QueryGrantsRequest;
                fromAmino(object: _65.QueryGrantsRequestAmino): _65.QueryGrantsRequest;
                toAmino(message: _65.QueryGrantsRequest): _65.QueryGrantsRequestAmino;
                fromAminoMsg(object: _65.QueryGrantsRequestAminoMsg): _65.QueryGrantsRequest;
                toAminoMsg(message: _65.QueryGrantsRequest): _65.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGrantsRequestProtoMsg): _65.QueryGrantsRequest;
                toProto(message: _65.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGrantsRequest): _65.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _65.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGrantsResponse;
                fromPartial(object: Partial<_65.QueryGrantsResponse>): _65.QueryGrantsResponse;
                fromAmino(object: _65.QueryGrantsResponseAmino): _65.QueryGrantsResponse;
                toAmino(message: _65.QueryGrantsResponse): _65.QueryGrantsResponseAmino;
                fromAminoMsg(object: _65.QueryGrantsResponseAminoMsg): _65.QueryGrantsResponse;
                toAminoMsg(message: _65.QueryGrantsResponse): _65.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGrantsResponseProtoMsg): _65.QueryGrantsResponse;
                toProto(message: _65.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGrantsResponse): _65.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _65.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_65.QueryGranterGrantsRequest>): _65.QueryGranterGrantsRequest;
                fromAmino(object: _65.QueryGranterGrantsRequestAmino): _65.QueryGranterGrantsRequest;
                toAmino(message: _65.QueryGranterGrantsRequest): _65.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _65.QueryGranterGrantsRequestAminoMsg): _65.QueryGranterGrantsRequest;
                toAminoMsg(message: _65.QueryGranterGrantsRequest): _65.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGranterGrantsRequestProtoMsg): _65.QueryGranterGrantsRequest;
                toProto(message: _65.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGranterGrantsRequest): _65.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _65.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_65.QueryGranterGrantsResponse>): _65.QueryGranterGrantsResponse;
                fromAmino(object: _65.QueryGranterGrantsResponseAmino): _65.QueryGranterGrantsResponse;
                toAmino(message: _65.QueryGranterGrantsResponse): _65.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _65.QueryGranterGrantsResponseAminoMsg): _65.QueryGranterGrantsResponse;
                toAminoMsg(message: _65.QueryGranterGrantsResponse): _65.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGranterGrantsResponseProtoMsg): _65.QueryGranterGrantsResponse;
                toProto(message: _65.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGranterGrantsResponse): _65.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _65.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_65.QueryGranteeGrantsRequest>): _65.QueryGranteeGrantsRequest;
                fromAmino(object: _65.QueryGranteeGrantsRequestAmino): _65.QueryGranteeGrantsRequest;
                toAmino(message: _65.QueryGranteeGrantsRequest): _65.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _65.QueryGranteeGrantsRequestAminoMsg): _65.QueryGranteeGrantsRequest;
                toAminoMsg(message: _65.QueryGranteeGrantsRequest): _65.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryGranteeGrantsRequestProtoMsg): _65.QueryGranteeGrantsRequest;
                toProto(message: _65.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryGranteeGrantsRequest): _65.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _65.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_65.QueryGranteeGrantsResponse>): _65.QueryGranteeGrantsResponse;
                fromAmino(object: _65.QueryGranteeGrantsResponseAmino): _65.QueryGranteeGrantsResponse;
                toAmino(message: _65.QueryGranteeGrantsResponse): _65.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _65.QueryGranteeGrantsResponseAminoMsg): _65.QueryGranteeGrantsResponse;
                toAminoMsg(message: _65.QueryGranteeGrantsResponse): _65.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryGranteeGrantsResponseProtoMsg): _65.QueryGranteeGrantsResponse;
                toProto(message: _65.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryGranteeGrantsResponse): _65.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _63.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.EventGrant;
                fromPartial(object: Partial<_63.EventGrant>): _63.EventGrant;
                fromAmino(object: _63.EventGrantAmino): _63.EventGrant;
                toAmino(message: _63.EventGrant): _63.EventGrantAmino;
                fromAminoMsg(object: _63.EventGrantAminoMsg): _63.EventGrant;
                toAminoMsg(message: _63.EventGrant): _63.EventGrantAminoMsg;
                fromProtoMsg(message: _63.EventGrantProtoMsg): _63.EventGrant;
                toProto(message: _63.EventGrant): Uint8Array;
                toProtoMsg(message: _63.EventGrant): _63.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _63.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.EventRevoke;
                fromPartial(object: Partial<_63.EventRevoke>): _63.EventRevoke;
                fromAmino(object: _63.EventRevokeAmino): _63.EventRevoke;
                toAmino(message: _63.EventRevoke): _63.EventRevokeAmino;
                fromAminoMsg(object: _63.EventRevokeAminoMsg): _63.EventRevoke;
                toAminoMsg(message: _63.EventRevoke): _63.EventRevokeAminoMsg;
                fromProtoMsg(message: _63.EventRevokeProtoMsg): _63.EventRevoke;
                toProto(message: _63.EventRevoke): Uint8Array;
                toProtoMsg(message: _63.EventRevoke): _63.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _62.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GenericAuthorization;
                fromPartial(object: Partial<_62.GenericAuthorization>): _62.GenericAuthorization;
                fromAmino(object: _62.GenericAuthorizationAmino): _62.GenericAuthorization;
                toAmino(message: _62.GenericAuthorization): _62.GenericAuthorizationAmino;
                fromAminoMsg(object: _62.GenericAuthorizationAminoMsg): _62.GenericAuthorization;
                toAminoMsg(message: _62.GenericAuthorization): _62.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _62.GenericAuthorizationProtoMsg): _62.GenericAuthorization;
                toProto(message: _62.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _62.GenericAuthorization): _62.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _62.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Grant;
                fromPartial(object: Partial<_62.Grant>): _62.Grant;
                fromAmino(object: _62.GrantAmino): _62.Grant;
                toAmino(message: _62.Grant): _62.GrantAmino;
                fromAminoMsg(object: _62.GrantAminoMsg): _62.Grant;
                toAminoMsg(message: _62.Grant): _62.GrantAminoMsg;
                fromProtoMsg(message: _62.GrantProtoMsg): _62.Grant;
                toProto(message: _62.Grant): Uint8Array;
                toProtoMsg(message: _62.Grant): _62.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _62.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GrantAuthorization;
                fromPartial(object: Partial<_62.GrantAuthorization>): _62.GrantAuthorization;
                fromAmino(object: _62.GrantAuthorizationAmino): _62.GrantAuthorization;
                toAmino(message: _62.GrantAuthorization): _62.GrantAuthorizationAmino;
                fromAminoMsg(object: _62.GrantAuthorizationAminoMsg): _62.GrantAuthorization;
                toAminoMsg(message: _62.GrantAuthorization): _62.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _62.GrantAuthorizationProtoMsg): _62.GrantAuthorization;
                toProto(message: _62.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _62.GrantAuthorization): _62.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _62.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GrantQueueItem;
                fromPartial(object: Partial<_62.GrantQueueItem>): _62.GrantQueueItem;
                fromAmino(object: _62.GrantQueueItemAmino): _62.GrantQueueItem;
                toAmino(message: _62.GrantQueueItem): _62.GrantQueueItemAmino;
                fromAminoMsg(object: _62.GrantQueueItemAminoMsg): _62.GrantQueueItem;
                toAminoMsg(message: _62.GrantQueueItem): _62.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _62.GrantQueueItemProtoMsg): _62.GrantQueueItem;
                toProto(message: _62.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _62.GrantQueueItem): _62.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.SendAuthorization | _162.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _62.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _68.AppOptionsRequest): Promise<_68.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _68.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.AppOptionsRequest;
                fromPartial(_: Partial<_68.AppOptionsRequest>): _68.AppOptionsRequest;
                fromAmino(_: _68.AppOptionsRequestAmino): _68.AppOptionsRequest;
                toAmino(_: _68.AppOptionsRequest): _68.AppOptionsRequestAmino;
                fromAminoMsg(object: _68.AppOptionsRequestAminoMsg): _68.AppOptionsRequest;
                toAminoMsg(message: _68.AppOptionsRequest): _68.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _68.AppOptionsRequestProtoMsg): _68.AppOptionsRequest;
                toProto(message: _68.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _68.AppOptionsRequest): _68.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _68.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_68.AppOptionsResponse_ModuleOptionsEntry>): _68.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _68.AppOptionsResponse_ModuleOptionsEntryAmino): _68.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _68.AppOptionsResponse_ModuleOptionsEntry): _68.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _68.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _68.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _68.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _68.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _68.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _68.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.AppOptionsResponse;
                fromPartial(object: Partial<_68.AppOptionsResponse>): _68.AppOptionsResponse;
                fromAmino(object: _68.AppOptionsResponseAmino): _68.AppOptionsResponse;
                toAmino(message: _68.AppOptionsResponse): _68.AppOptionsResponseAmino;
                fromAminoMsg(object: _68.AppOptionsResponseAminoMsg): _68.AppOptionsResponse;
                toAminoMsg(message: _68.AppOptionsResponse): _68.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _68.AppOptionsResponseProtoMsg): _68.AppOptionsResponse;
                toProto(message: _68.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _68.AppOptionsResponse): _68.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _67.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ModuleOptions;
                fromPartial(object: Partial<_67.ModuleOptions>): _67.ModuleOptions;
                fromAmino(object: _67.ModuleOptionsAmino): _67.ModuleOptions;
                toAmino(message: _67.ModuleOptions): _67.ModuleOptionsAmino;
                fromAminoMsg(object: _67.ModuleOptionsAminoMsg): _67.ModuleOptions;
                toAminoMsg(message: _67.ModuleOptions): _67.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _67.ModuleOptionsProtoMsg): _67.ModuleOptions;
                toProto(message: _67.ModuleOptions): Uint8Array;
                toProtoMsg(message: _67.ModuleOptions): _67.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _67.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_67.ServiceCommandDescriptor_SubCommandsEntry>): _67.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _67.ServiceCommandDescriptor_SubCommandsEntryAmino): _67.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _67.ServiceCommandDescriptor_SubCommandsEntry): _67.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _67.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _67.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _67.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _67.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _67.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _67.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ServiceCommandDescriptor;
                fromPartial(object: Partial<_67.ServiceCommandDescriptor>): _67.ServiceCommandDescriptor;
                fromAmino(object: _67.ServiceCommandDescriptorAmino): _67.ServiceCommandDescriptor;
                toAmino(message: _67.ServiceCommandDescriptor): _67.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _67.ServiceCommandDescriptorAminoMsg): _67.ServiceCommandDescriptor;
                toAminoMsg(message: _67.ServiceCommandDescriptor): _67.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _67.ServiceCommandDescriptorProtoMsg): _67.ServiceCommandDescriptor;
                toProto(message: _67.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _67.ServiceCommandDescriptor): _67.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _67.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_67.RpcCommandOptions_FlagOptionsEntry>): _67.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _67.RpcCommandOptions_FlagOptionsEntryAmino): _67.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _67.RpcCommandOptions_FlagOptionsEntry): _67.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _67.RpcCommandOptions_FlagOptionsEntryAminoMsg): _67.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _67.RpcCommandOptions_FlagOptionsEntryProtoMsg): _67.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _67.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _67.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.RpcCommandOptions;
                fromPartial(object: Partial<_67.RpcCommandOptions>): _67.RpcCommandOptions;
                fromAmino(object: _67.RpcCommandOptionsAmino): _67.RpcCommandOptions;
                toAmino(message: _67.RpcCommandOptions): _67.RpcCommandOptionsAmino;
                fromAminoMsg(object: _67.RpcCommandOptionsAminoMsg): _67.RpcCommandOptions;
                toAminoMsg(message: _67.RpcCommandOptions): _67.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _67.RpcCommandOptionsProtoMsg): _67.RpcCommandOptions;
                toProto(message: _67.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _67.RpcCommandOptions): _67.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _67.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.FlagOptions;
                fromPartial(object: Partial<_67.FlagOptions>): _67.FlagOptions;
                fromAmino(object: _67.FlagOptionsAmino): _67.FlagOptions;
                toAmino(message: _67.FlagOptions): _67.FlagOptionsAmino;
                fromAminoMsg(object: _67.FlagOptionsAminoMsg): _67.FlagOptions;
                toAminoMsg(message: _67.FlagOptions): _67.FlagOptionsAminoMsg;
                fromProtoMsg(message: _67.FlagOptionsProtoMsg): _67.FlagOptions;
                toProto(message: _67.FlagOptions): Uint8Array;
                toProtoMsg(message: _67.FlagOptions): _67.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _67.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.PositionalArgDescriptor;
                fromPartial(object: Partial<_67.PositionalArgDescriptor>): _67.PositionalArgDescriptor;
                fromAmino(object: _67.PositionalArgDescriptorAmino): _67.PositionalArgDescriptor;
                toAmino(message: _67.PositionalArgDescriptor): _67.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _67.PositionalArgDescriptorAminoMsg): _67.PositionalArgDescriptor;
                toAminoMsg(message: _67.PositionalArgDescriptor): _67.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _67.PositionalArgDescriptorProtoMsg): _67.PositionalArgDescriptor;
                toProto(message: _67.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _67.PositionalArgDescriptor): _67.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _69.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Module;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                    fromAmino(object: _69.ModuleAmino): _69.Module;
                    toAmino(message: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
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
            LCDQueryClient: typeof _280.LCDQueryClient;
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
                    toAmino: (message: _75.MsgSend) => _75.MsgSendAmino;
                    fromAmino: (object: _75.MsgSendAmino) => _75.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _75.MsgMultiSend) => _75.MsgMultiSendAmino;
                    fromAmino: (object: _75.MsgMultiSendAmino) => _75.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _75.MsgUpdateParams) => _75.MsgUpdateParamsAmino;
                    fromAmino: (object: _75.MsgUpdateParamsAmino) => _75.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSetSendEnabled) => _75.MsgSetSendEnabledAmino;
                    fromAmino: (object: _75.MsgSetSendEnabledAmino) => _75.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _75.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgSend;
                fromPartial(object: Partial<_75.MsgSend>): _75.MsgSend;
                fromAmino(object: _75.MsgSendAmino): _75.MsgSend;
                toAmino(message: _75.MsgSend): _75.MsgSendAmino;
                fromAminoMsg(object: _75.MsgSendAminoMsg): _75.MsgSend;
                toAminoMsg(message: _75.MsgSend): _75.MsgSendAminoMsg;
                fromProtoMsg(message: _75.MsgSendProtoMsg): _75.MsgSend;
                toProto(message: _75.MsgSend): Uint8Array;
                toProtoMsg(message: _75.MsgSend): _75.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _75.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgSendResponse;
                fromPartial(_: Partial<_75.MsgSendResponse>): _75.MsgSendResponse;
                fromAmino(_: _75.MsgSendResponseAmino): _75.MsgSendResponse;
                toAmino(_: _75.MsgSendResponse): _75.MsgSendResponseAmino;
                fromAminoMsg(object: _75.MsgSendResponseAminoMsg): _75.MsgSendResponse;
                toAminoMsg(message: _75.MsgSendResponse): _75.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSendResponseProtoMsg): _75.MsgSendResponse;
                toProto(message: _75.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSendResponse): _75.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _75.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgMultiSend;
                fromPartial(object: Partial<_75.MsgMultiSend>): _75.MsgMultiSend;
                fromAmino(object: _75.MsgMultiSendAmino): _75.MsgMultiSend;
                toAmino(message: _75.MsgMultiSend): _75.MsgMultiSendAmino;
                fromAminoMsg(object: _75.MsgMultiSendAminoMsg): _75.MsgMultiSend;
                toAminoMsg(message: _75.MsgMultiSend): _75.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _75.MsgMultiSendProtoMsg): _75.MsgMultiSend;
                toProto(message: _75.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _75.MsgMultiSend): _75.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _75.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgMultiSendResponse;
                fromPartial(_: Partial<_75.MsgMultiSendResponse>): _75.MsgMultiSendResponse;
                fromAmino(_: _75.MsgMultiSendResponseAmino): _75.MsgMultiSendResponse;
                toAmino(_: _75.MsgMultiSendResponse): _75.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _75.MsgMultiSendResponseAminoMsg): _75.MsgMultiSendResponse;
                toAminoMsg(message: _75.MsgMultiSendResponse): _75.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _75.MsgMultiSendResponseProtoMsg): _75.MsgMultiSendResponse;
                toProto(message: _75.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _75.MsgMultiSendResponse): _75.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _75.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgUpdateParams;
                fromPartial(object: Partial<_75.MsgUpdateParams>): _75.MsgUpdateParams;
                fromAmino(object: _75.MsgUpdateParamsAmino): _75.MsgUpdateParams;
                toAmino(message: _75.MsgUpdateParams): _75.MsgUpdateParamsAmino;
                fromAminoMsg(object: _75.MsgUpdateParamsAminoMsg): _75.MsgUpdateParams;
                toAminoMsg(message: _75.MsgUpdateParams): _75.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _75.MsgUpdateParamsProtoMsg): _75.MsgUpdateParams;
                toProto(message: _75.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _75.MsgUpdateParams): _75.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _75.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_75.MsgUpdateParamsResponse>): _75.MsgUpdateParamsResponse;
                fromAmino(_: _75.MsgUpdateParamsResponseAmino): _75.MsgUpdateParamsResponse;
                toAmino(_: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _75.MsgUpdateParamsResponseAminoMsg): _75.MsgUpdateParamsResponse;
                toAminoMsg(message: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _75.MsgUpdateParamsResponseProtoMsg): _75.MsgUpdateParamsResponse;
                toProto(message: _75.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _75.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgSetSendEnabled;
                fromPartial(object: Partial<_75.MsgSetSendEnabled>): _75.MsgSetSendEnabled;
                fromAmino(object: _75.MsgSetSendEnabledAmino): _75.MsgSetSendEnabled;
                toAmino(message: _75.MsgSetSendEnabled): _75.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _75.MsgSetSendEnabledAminoMsg): _75.MsgSetSendEnabled;
                toAminoMsg(message: _75.MsgSetSendEnabled): _75.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _75.MsgSetSendEnabledProtoMsg): _75.MsgSetSendEnabled;
                toProto(message: _75.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _75.MsgSetSendEnabled): _75.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _75.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_75.MsgSetSendEnabledResponse>): _75.MsgSetSendEnabledResponse;
                fromAmino(_: _75.MsgSetSendEnabledResponseAmino): _75.MsgSetSendEnabledResponse;
                toAmino(_: _75.MsgSetSendEnabledResponse): _75.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _75.MsgSetSendEnabledResponseAminoMsg): _75.MsgSetSendEnabledResponse;
                toAminoMsg(message: _75.MsgSetSendEnabledResponse): _75.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSetSendEnabledResponseProtoMsg): _75.MsgSetSendEnabledResponse;
                toProto(message: _75.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSetSendEnabledResponse): _75.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _74.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryBalanceRequest;
                fromPartial(object: Partial<_74.QueryBalanceRequest>): _74.QueryBalanceRequest;
                fromAmino(object: _74.QueryBalanceRequestAmino): _74.QueryBalanceRequest;
                toAmino(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestAmino;
                fromAminoMsg(object: _74.QueryBalanceRequestAminoMsg): _74.QueryBalanceRequest;
                toAminoMsg(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _74.QueryBalanceRequestProtoMsg): _74.QueryBalanceRequest;
                toProto(message: _74.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _74.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryBalanceResponse;
                fromPartial(object: Partial<_74.QueryBalanceResponse>): _74.QueryBalanceResponse;
                fromAmino(object: _74.QueryBalanceResponseAmino): _74.QueryBalanceResponse;
                toAmino(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseAmino;
                fromAminoMsg(object: _74.QueryBalanceResponseAminoMsg): _74.QueryBalanceResponse;
                toAminoMsg(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _74.QueryBalanceResponseProtoMsg): _74.QueryBalanceResponse;
                toProto(message: _74.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllBalancesRequest;
                fromPartial(object: Partial<_74.QueryAllBalancesRequest>): _74.QueryAllBalancesRequest;
                fromAmino(object: _74.QueryAllBalancesRequestAmino): _74.QueryAllBalancesRequest;
                toAmino(message: _74.QueryAllBalancesRequest): _74.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _74.QueryAllBalancesRequestAminoMsg): _74.QueryAllBalancesRequest;
                toAminoMsg(message: _74.QueryAllBalancesRequest): _74.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllBalancesRequestProtoMsg): _74.QueryAllBalancesRequest;
                toProto(message: _74.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllBalancesRequest): _74.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllBalancesResponse;
                fromPartial(object: Partial<_74.QueryAllBalancesResponse>): _74.QueryAllBalancesResponse;
                fromAmino(object: _74.QueryAllBalancesResponseAmino): _74.QueryAllBalancesResponse;
                toAmino(message: _74.QueryAllBalancesResponse): _74.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _74.QueryAllBalancesResponseAminoMsg): _74.QueryAllBalancesResponse;
                toAminoMsg(message: _74.QueryAllBalancesResponse): _74.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllBalancesResponseProtoMsg): _74.QueryAllBalancesResponse;
                toProto(message: _74.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllBalancesResponse): _74.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _74.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_74.QuerySpendableBalancesRequest>): _74.QuerySpendableBalancesRequest;
                fromAmino(object: _74.QuerySpendableBalancesRequestAmino): _74.QuerySpendableBalancesRequest;
                toAmino(message: _74.QuerySpendableBalancesRequest): _74.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _74.QuerySpendableBalancesRequestAminoMsg): _74.QuerySpendableBalancesRequest;
                toAminoMsg(message: _74.QuerySpendableBalancesRequest): _74.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _74.QuerySpendableBalancesRequestProtoMsg): _74.QuerySpendableBalancesRequest;
                toProto(message: _74.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _74.QuerySpendableBalancesRequest): _74.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _74.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_74.QuerySpendableBalancesResponse>): _74.QuerySpendableBalancesResponse;
                fromAmino(object: _74.QuerySpendableBalancesResponseAmino): _74.QuerySpendableBalancesResponse;
                toAmino(message: _74.QuerySpendableBalancesResponse): _74.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _74.QuerySpendableBalancesResponseAminoMsg): _74.QuerySpendableBalancesResponse;
                toAminoMsg(message: _74.QuerySpendableBalancesResponse): _74.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _74.QuerySpendableBalancesResponseProtoMsg): _74.QuerySpendableBalancesResponse;
                toProto(message: _74.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _74.QuerySpendableBalancesResponse): _74.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _74.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_74.QuerySpendableBalanceByDenomRequest>): _74.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _74.QuerySpendableBalanceByDenomRequestAmino): _74.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _74.QuerySpendableBalanceByDenomRequest): _74.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _74.QuerySpendableBalanceByDenomRequestAminoMsg): _74.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _74.QuerySpendableBalanceByDenomRequest): _74.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _74.QuerySpendableBalanceByDenomRequestProtoMsg): _74.QuerySpendableBalanceByDenomRequest;
                toProto(message: _74.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _74.QuerySpendableBalanceByDenomRequest): _74.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _74.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_74.QuerySpendableBalanceByDenomResponse>): _74.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _74.QuerySpendableBalanceByDenomResponseAmino): _74.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _74.QuerySpendableBalanceByDenomResponse): _74.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _74.QuerySpendableBalanceByDenomResponseAminoMsg): _74.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _74.QuerySpendableBalanceByDenomResponse): _74.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _74.QuerySpendableBalanceByDenomResponseProtoMsg): _74.QuerySpendableBalanceByDenomResponse;
                toProto(message: _74.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _74.QuerySpendableBalanceByDenomResponse): _74.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _74.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_74.QueryTotalSupplyRequest>): _74.QueryTotalSupplyRequest;
                fromAmino(object: _74.QueryTotalSupplyRequestAmino): _74.QueryTotalSupplyRequest;
                toAmino(message: _74.QueryTotalSupplyRequest): _74.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _74.QueryTotalSupplyRequestAminoMsg): _74.QueryTotalSupplyRequest;
                toAminoMsg(message: _74.QueryTotalSupplyRequest): _74.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _74.QueryTotalSupplyRequestProtoMsg): _74.QueryTotalSupplyRequest;
                toProto(message: _74.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _74.QueryTotalSupplyRequest): _74.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _74.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_74.QueryTotalSupplyResponse>): _74.QueryTotalSupplyResponse;
                fromAmino(object: _74.QueryTotalSupplyResponseAmino): _74.QueryTotalSupplyResponse;
                toAmino(message: _74.QueryTotalSupplyResponse): _74.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _74.QueryTotalSupplyResponseAminoMsg): _74.QueryTotalSupplyResponse;
                toAminoMsg(message: _74.QueryTotalSupplyResponse): _74.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _74.QueryTotalSupplyResponseProtoMsg): _74.QueryTotalSupplyResponse;
                toProto(message: _74.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _74.QueryTotalSupplyResponse): _74.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _74.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySupplyOfRequest;
                fromPartial(object: Partial<_74.QuerySupplyOfRequest>): _74.QuerySupplyOfRequest;
                fromAmino(object: _74.QuerySupplyOfRequestAmino): _74.QuerySupplyOfRequest;
                toAmino(message: _74.QuerySupplyOfRequest): _74.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _74.QuerySupplyOfRequestAminoMsg): _74.QuerySupplyOfRequest;
                toAminoMsg(message: _74.QuerySupplyOfRequest): _74.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _74.QuerySupplyOfRequestProtoMsg): _74.QuerySupplyOfRequest;
                toProto(message: _74.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _74.QuerySupplyOfRequest): _74.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _74.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySupplyOfResponse;
                fromPartial(object: Partial<_74.QuerySupplyOfResponse>): _74.QuerySupplyOfResponse;
                fromAmino(object: _74.QuerySupplyOfResponseAmino): _74.QuerySupplyOfResponse;
                toAmino(message: _74.QuerySupplyOfResponse): _74.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _74.QuerySupplyOfResponseAminoMsg): _74.QuerySupplyOfResponse;
                toAminoMsg(message: _74.QuerySupplyOfResponse): _74.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _74.QuerySupplyOfResponseProtoMsg): _74.QuerySupplyOfResponse;
                toProto(message: _74.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _74.QuerySupplyOfResponse): _74.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryParamsRequest;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(_: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(_: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryParamsResponse;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _74.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_74.QueryDenomsMetadataRequest>): _74.QueryDenomsMetadataRequest;
                fromAmino(object: _74.QueryDenomsMetadataRequestAmino): _74.QueryDenomsMetadataRequest;
                toAmino(message: _74.QueryDenomsMetadataRequest): _74.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _74.QueryDenomsMetadataRequestAminoMsg): _74.QueryDenomsMetadataRequest;
                toAminoMsg(message: _74.QueryDenomsMetadataRequest): _74.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDenomsMetadataRequestProtoMsg): _74.QueryDenomsMetadataRequest;
                toProto(message: _74.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDenomsMetadataRequest): _74.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _74.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_74.QueryDenomsMetadataResponse>): _74.QueryDenomsMetadataResponse;
                fromAmino(object: _74.QueryDenomsMetadataResponseAmino): _74.QueryDenomsMetadataResponse;
                toAmino(message: _74.QueryDenomsMetadataResponse): _74.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _74.QueryDenomsMetadataResponseAminoMsg): _74.QueryDenomsMetadataResponse;
                toAminoMsg(message: _74.QueryDenomsMetadataResponse): _74.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDenomsMetadataResponseProtoMsg): _74.QueryDenomsMetadataResponse;
                toProto(message: _74.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDenomsMetadataResponse): _74.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _74.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_74.QueryDenomMetadataRequest>): _74.QueryDenomMetadataRequest;
                fromAmino(object: _74.QueryDenomMetadataRequestAmino): _74.QueryDenomMetadataRequest;
                toAmino(message: _74.QueryDenomMetadataRequest): _74.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _74.QueryDenomMetadataRequestAminoMsg): _74.QueryDenomMetadataRequest;
                toAminoMsg(message: _74.QueryDenomMetadataRequest): _74.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDenomMetadataRequestProtoMsg): _74.QueryDenomMetadataRequest;
                toProto(message: _74.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDenomMetadataRequest): _74.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _74.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_74.QueryDenomMetadataResponse>): _74.QueryDenomMetadataResponse;
                fromAmino(object: _74.QueryDenomMetadataResponseAmino): _74.QueryDenomMetadataResponse;
                toAmino(message: _74.QueryDenomMetadataResponse): _74.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _74.QueryDenomMetadataResponseAminoMsg): _74.QueryDenomMetadataResponse;
                toAminoMsg(message: _74.QueryDenomMetadataResponse): _74.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDenomMetadataResponseProtoMsg): _74.QueryDenomMetadataResponse;
                toProto(message: _74.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDenomMetadataResponse): _74.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _74.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_74.QueryDenomOwnersRequest>): _74.QueryDenomOwnersRequest;
                fromAmino(object: _74.QueryDenomOwnersRequestAmino): _74.QueryDenomOwnersRequest;
                toAmino(message: _74.QueryDenomOwnersRequest): _74.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _74.QueryDenomOwnersRequestAminoMsg): _74.QueryDenomOwnersRequest;
                toAminoMsg(message: _74.QueryDenomOwnersRequest): _74.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDenomOwnersRequestProtoMsg): _74.QueryDenomOwnersRequest;
                toProto(message: _74.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDenomOwnersRequest): _74.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _74.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DenomOwner;
                fromPartial(object: Partial<_74.DenomOwner>): _74.DenomOwner;
                fromAmino(object: _74.DenomOwnerAmino): _74.DenomOwner;
                toAmino(message: _74.DenomOwner): _74.DenomOwnerAmino;
                fromAminoMsg(object: _74.DenomOwnerAminoMsg): _74.DenomOwner;
                toAminoMsg(message: _74.DenomOwner): _74.DenomOwnerAminoMsg;
                fromProtoMsg(message: _74.DenomOwnerProtoMsg): _74.DenomOwner;
                toProto(message: _74.DenomOwner): Uint8Array;
                toProtoMsg(message: _74.DenomOwner): _74.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _74.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_74.QueryDenomOwnersResponse>): _74.QueryDenomOwnersResponse;
                fromAmino(object: _74.QueryDenomOwnersResponseAmino): _74.QueryDenomOwnersResponse;
                toAmino(message: _74.QueryDenomOwnersResponse): _74.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _74.QueryDenomOwnersResponseAminoMsg): _74.QueryDenomOwnersResponse;
                toAminoMsg(message: _74.QueryDenomOwnersResponse): _74.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDenomOwnersResponseProtoMsg): _74.QueryDenomOwnersResponse;
                toProto(message: _74.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDenomOwnersResponse): _74.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _74.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySendEnabledRequest;
                fromPartial(object: Partial<_74.QuerySendEnabledRequest>): _74.QuerySendEnabledRequest;
                fromAmino(object: _74.QuerySendEnabledRequestAmino): _74.QuerySendEnabledRequest;
                toAmino(message: _74.QuerySendEnabledRequest): _74.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _74.QuerySendEnabledRequestAminoMsg): _74.QuerySendEnabledRequest;
                toAminoMsg(message: _74.QuerySendEnabledRequest): _74.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _74.QuerySendEnabledRequestProtoMsg): _74.QuerySendEnabledRequest;
                toProto(message: _74.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _74.QuerySendEnabledRequest): _74.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _74.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QuerySendEnabledResponse;
                fromPartial(object: Partial<_74.QuerySendEnabledResponse>): _74.QuerySendEnabledResponse;
                fromAmino(object: _74.QuerySendEnabledResponseAmino): _74.QuerySendEnabledResponse;
                toAmino(message: _74.QuerySendEnabledResponse): _74.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _74.QuerySendEnabledResponseAminoMsg): _74.QuerySendEnabledResponse;
                toAminoMsg(message: _74.QuerySendEnabledResponse): _74.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _74.QuerySendEnabledResponseProtoMsg): _74.QuerySendEnabledResponse;
                toProto(message: _74.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _74.QuerySendEnabledResponse): _74.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _73.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Balance;
                fromPartial(object: Partial<_73.Balance>): _73.Balance;
                fromAmino(object: _73.BalanceAmino): _73.Balance;
                toAmino(message: _73.Balance): _73.BalanceAmino;
                fromAminoMsg(object: _73.BalanceAminoMsg): _73.Balance;
                toAminoMsg(message: _73.Balance): _73.BalanceAminoMsg;
                fromProtoMsg(message: _73.BalanceProtoMsg): _73.Balance;
                toProto(message: _73.Balance): Uint8Array;
                toProtoMsg(message: _73.Balance): _73.BalanceProtoMsg;
            };
            EventSetBalances: {
                typeUrl: string;
                encode(message: _72.EventSetBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.EventSetBalances;
                fromPartial(object: Partial<_72.EventSetBalances>): _72.EventSetBalances;
                fromAmino(object: _72.EventSetBalancesAmino): _72.EventSetBalances;
                toAmino(message: _72.EventSetBalances): _72.EventSetBalancesAmino;
                fromAminoMsg(object: _72.EventSetBalancesAminoMsg): _72.EventSetBalances;
                toAminoMsg(message: _72.EventSetBalances): _72.EventSetBalancesAminoMsg;
                fromProtoMsg(message: _72.EventSetBalancesProtoMsg): _72.EventSetBalances;
                toProto(message: _72.EventSetBalances): Uint8Array;
                toProtoMsg(message: _72.EventSetBalances): _72.EventSetBalancesProtoMsg;
            };
            BalanceUpdate: {
                typeUrl: string;
                encode(message: _72.BalanceUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.BalanceUpdate;
                fromPartial(object: Partial<_72.BalanceUpdate>): _72.BalanceUpdate;
                fromAmino(object: _72.BalanceUpdateAmino): _72.BalanceUpdate;
                toAmino(message: _72.BalanceUpdate): _72.BalanceUpdateAmino;
                fromAminoMsg(object: _72.BalanceUpdateAminoMsg): _72.BalanceUpdate;
                toAminoMsg(message: _72.BalanceUpdate): _72.BalanceUpdateAminoMsg;
                fromProtoMsg(message: _72.BalanceUpdateProtoMsg): _72.BalanceUpdate;
                toProto(message: _72.BalanceUpdate): Uint8Array;
                toProtoMsg(message: _72.BalanceUpdate): _72.BalanceUpdateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
                fromAmino(object: _71.ParamsAmino): _71.Params;
                toAmino(message: _71.Params): _71.ParamsAmino;
                fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                toProto(message: _71.Params): Uint8Array;
                toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _71.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.SendEnabled;
                fromPartial(object: Partial<_71.SendEnabled>): _71.SendEnabled;
                fromAmino(object: _71.SendEnabledAmino): _71.SendEnabled;
                toAmino(message: _71.SendEnabled): _71.SendEnabledAmino;
                fromAminoMsg(object: _71.SendEnabledAminoMsg): _71.SendEnabled;
                toAminoMsg(message: _71.SendEnabled): _71.SendEnabledAminoMsg;
                fromProtoMsg(message: _71.SendEnabledProtoMsg): _71.SendEnabled;
                toProto(message: _71.SendEnabled): Uint8Array;
                toProtoMsg(message: _71.SendEnabled): _71.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _71.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Input;
                fromPartial(object: Partial<_71.Input>): _71.Input;
                fromAmino(object: _71.InputAmino): _71.Input;
                toAmino(message: _71.Input): _71.InputAmino;
                fromAminoMsg(object: _71.InputAminoMsg): _71.Input;
                toAminoMsg(message: _71.Input): _71.InputAminoMsg;
                fromProtoMsg(message: _71.InputProtoMsg): _71.Input;
                toProto(message: _71.Input): Uint8Array;
                toProtoMsg(message: _71.Input): _71.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _71.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Output;
                fromPartial(object: Partial<_71.Output>): _71.Output;
                fromAmino(object: _71.OutputAmino): _71.Output;
                toAmino(message: _71.Output): _71.OutputAmino;
                fromAminoMsg(object: _71.OutputAminoMsg): _71.Output;
                toAminoMsg(message: _71.Output): _71.OutputAminoMsg;
                fromProtoMsg(message: _71.OutputProtoMsg): _71.Output;
                toProto(message: _71.Output): Uint8Array;
                toProtoMsg(message: _71.Output): _71.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _71.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Supply;
                fromPartial(object: Partial<_71.Supply>): _71.Supply;
                fromAmino(object: _71.SupplyAmino): _71.Supply;
                toAmino(message: _71.Supply): _71.SupplyAmino;
                fromAminoMsg(object: _71.SupplyAminoMsg): _71.Supply;
                toAminoMsg(message: _71.Supply): _71.SupplyAminoMsg;
                fromProtoMsg(message: _71.SupplyProtoMsg): _71.Supply;
                toProto(message: _71.Supply): Uint8Array;
                toProtoMsg(message: _71.Supply): _71.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _71.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DenomUnit;
                fromPartial(object: Partial<_71.DenomUnit>): _71.DenomUnit;
                fromAmino(object: _71.DenomUnitAmino): _71.DenomUnit;
                toAmino(message: _71.DenomUnit): _71.DenomUnitAmino;
                fromAminoMsg(object: _71.DenomUnitAminoMsg): _71.DenomUnit;
                toAminoMsg(message: _71.DenomUnit): _71.DenomUnitAminoMsg;
                fromProtoMsg(message: _71.DenomUnitProtoMsg): _71.DenomUnit;
                toProto(message: _71.DenomUnit): Uint8Array;
                toProtoMsg(message: _71.DenomUnit): _71.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _71.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Metadata;
                fromPartial(object: Partial<_71.Metadata>): _71.Metadata;
                fromAmino(object: _71.MetadataAmino): _71.Metadata;
                toAmino(message: _71.Metadata): _71.MetadataAmino;
                fromAminoMsg(object: _71.MetadataAminoMsg): _71.Metadata;
                toAminoMsg(message: _71.Metadata): _71.MetadataAminoMsg;
                fromProtoMsg(message: _71.MetadataProtoMsg): _71.Metadata;
                toProto(message: _71.Metadata): Uint8Array;
                toProtoMsg(message: _71.Metadata): _71.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _70.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.SendAuthorization;
                fromPartial(object: Partial<_70.SendAuthorization>): _70.SendAuthorization;
                fromAmino(object: _70.SendAuthorizationAmino): _70.SendAuthorization;
                toAmino(message: _70.SendAuthorization): _70.SendAuthorizationAmino;
                fromAminoMsg(object: _70.SendAuthorizationAminoMsg): _70.SendAuthorization;
                toAminoMsg(message: _70.SendAuthorization): _70.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _70.SendAuthorizationProtoMsg): _70.SendAuthorization;
                toProto(message: _70.SendAuthorization): Uint8Array;
                toProtoMsg(message: _70.SendAuthorization): _70.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _76.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.TxResponse;
                    fromPartial(object: Partial<_76.TxResponse>): _76.TxResponse;
                    fromAmino(object: _76.TxResponseAmino): _76.TxResponse;
                    toAmino(message: _76.TxResponse): _76.TxResponseAmino;
                    fromAminoMsg(object: _76.TxResponseAminoMsg): _76.TxResponse;
                    toAminoMsg(message: _76.TxResponse): _76.TxResponseAminoMsg;
                    fromProtoMsg(message: _76.TxResponseProtoMsg): _76.TxResponse;
                    toProto(message: _76.TxResponse): Uint8Array;
                    toProtoMsg(message: _76.TxResponse): _76.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _76.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.ABCIMessageLog;
                    fromPartial(object: Partial<_76.ABCIMessageLog>): _76.ABCIMessageLog;
                    fromAmino(object: _76.ABCIMessageLogAmino): _76.ABCIMessageLog;
                    toAmino(message: _76.ABCIMessageLog): _76.ABCIMessageLogAmino;
                    fromAminoMsg(object: _76.ABCIMessageLogAminoMsg): _76.ABCIMessageLog;
                    toAminoMsg(message: _76.ABCIMessageLog): _76.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _76.ABCIMessageLogProtoMsg): _76.ABCIMessageLog;
                    toProto(message: _76.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _76.ABCIMessageLog): _76.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _76.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.StringEvent;
                    fromPartial(object: Partial<_76.StringEvent>): _76.StringEvent;
                    fromAmino(object: _76.StringEventAmino): _76.StringEvent;
                    toAmino(message: _76.StringEvent): _76.StringEventAmino;
                    fromAminoMsg(object: _76.StringEventAminoMsg): _76.StringEvent;
                    toAminoMsg(message: _76.StringEvent): _76.StringEventAminoMsg;
                    fromProtoMsg(message: _76.StringEventProtoMsg): _76.StringEvent;
                    toProto(message: _76.StringEvent): Uint8Array;
                    toProtoMsg(message: _76.StringEvent): _76.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _76.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.Attribute;
                    fromPartial(object: Partial<_76.Attribute>): _76.Attribute;
                    fromAmino(object: _76.AttributeAmino): _76.Attribute;
                    toAmino(message: _76.Attribute): _76.AttributeAmino;
                    fromAminoMsg(object: _76.AttributeAminoMsg): _76.Attribute;
                    toAminoMsg(message: _76.Attribute): _76.AttributeAminoMsg;
                    fromProtoMsg(message: _76.AttributeProtoMsg): _76.Attribute;
                    toProto(message: _76.Attribute): Uint8Array;
                    toProtoMsg(message: _76.Attribute): _76.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _76.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.GasInfo;
                    fromPartial(object: Partial<_76.GasInfo>): _76.GasInfo;
                    fromAmino(object: _76.GasInfoAmino): _76.GasInfo;
                    toAmino(message: _76.GasInfo): _76.GasInfoAmino;
                    fromAminoMsg(object: _76.GasInfoAminoMsg): _76.GasInfo;
                    toAminoMsg(message: _76.GasInfo): _76.GasInfoAminoMsg;
                    fromProtoMsg(message: _76.GasInfoProtoMsg): _76.GasInfo;
                    toProto(message: _76.GasInfo): Uint8Array;
                    toProtoMsg(message: _76.GasInfo): _76.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _76.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.Result;
                    fromPartial(object: Partial<_76.Result>): _76.Result;
                    fromAmino(object: _76.ResultAmino): _76.Result;
                    toAmino(message: _76.Result): _76.ResultAmino;
                    fromAminoMsg(object: _76.ResultAminoMsg): _76.Result;
                    toAminoMsg(message: _76.Result): _76.ResultAminoMsg;
                    fromProtoMsg(message: _76.ResultProtoMsg): _76.Result;
                    toProto(message: _76.Result): Uint8Array;
                    toProtoMsg(message: _76.Result): _76.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _76.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.SimulationResponse;
                    fromPartial(object: Partial<_76.SimulationResponse>): _76.SimulationResponse;
                    fromAmino(object: _76.SimulationResponseAmino): _76.SimulationResponse;
                    toAmino(message: _76.SimulationResponse): _76.SimulationResponseAmino;
                    fromAminoMsg(object: _76.SimulationResponseAminoMsg): _76.SimulationResponse;
                    toAminoMsg(message: _76.SimulationResponse): _76.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _76.SimulationResponseProtoMsg): _76.SimulationResponse;
                    toProto(message: _76.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _76.SimulationResponse): _76.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _76.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.MsgData;
                    fromPartial(object: Partial<_76.MsgData>): _76.MsgData;
                    fromAmino(object: _76.MsgDataAmino): _76.MsgData;
                    toAmino(message: _76.MsgData): _76.MsgDataAmino;
                    fromAminoMsg(object: _76.MsgDataAminoMsg): _76.MsgData;
                    toAminoMsg(message: _76.MsgData): _76.MsgDataAminoMsg;
                    fromProtoMsg(message: _76.MsgDataProtoMsg): _76.MsgData;
                    toProto(message: _76.MsgData): Uint8Array;
                    toProtoMsg(message: _76.MsgData): _76.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _76.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.TxMsgData;
                    fromPartial(object: Partial<_76.TxMsgData>): _76.TxMsgData;
                    fromAmino(object: _76.TxMsgDataAmino): _76.TxMsgData;
                    toAmino(message: _76.TxMsgData): _76.TxMsgDataAmino;
                    fromAminoMsg(object: _76.TxMsgDataAminoMsg): _76.TxMsgData;
                    toAminoMsg(message: _76.TxMsgData): _76.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _76.TxMsgDataProtoMsg): _76.TxMsgData;
                    toProto(message: _76.TxMsgData): Uint8Array;
                    toProtoMsg(message: _76.TxMsgData): _76.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _76.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.SearchTxsResult;
                    fromPartial(object: Partial<_76.SearchTxsResult>): _76.SearchTxsResult;
                    fromAmino(object: _76.SearchTxsResultAmino): _76.SearchTxsResult;
                    toAmino(message: _76.SearchTxsResult): _76.SearchTxsResultAmino;
                    fromAminoMsg(object: _76.SearchTxsResultAminoMsg): _76.SearchTxsResult;
                    toAminoMsg(message: _76.SearchTxsResult): _76.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _76.SearchTxsResultProtoMsg): _76.SearchTxsResult;
                    toProto(message: _76.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _76.SearchTxsResult): _76.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _77.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Pairs;
                    fromPartial(object: Partial<_77.Pairs>): _77.Pairs;
                    fromAmino(object: _77.PairsAmino): _77.Pairs;
                    toAmino(message: _77.Pairs): _77.PairsAmino;
                    fromAminoMsg(object: _77.PairsAminoMsg): _77.Pairs;
                    toAminoMsg(message: _77.Pairs): _77.PairsAminoMsg;
                    fromProtoMsg(message: _77.PairsProtoMsg): _77.Pairs;
                    toProto(message: _77.Pairs): Uint8Array;
                    toProtoMsg(message: _77.Pairs): _77.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _77.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Pair;
                    fromPartial(object: Partial<_77.Pair>): _77.Pair;
                    fromAmino(object: _77.PairAmino): _77.Pair;
                    toAmino(message: _77.Pair): _77.PairAmino;
                    fromAminoMsg(object: _77.PairAminoMsg): _77.Pair;
                    toAminoMsg(message: _77.Pair): _77.PairAminoMsg;
                    fromProtoMsg(message: _77.PairProtoMsg): _77.Pair;
                    toProto(message: _77.Pair): Uint8Array;
                    toProtoMsg(message: _77.Pair): _77.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _302.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _78.ConfigRequest): Promise<_78.ConfigResponse>;
                };
                LCDQueryClient: typeof _281.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _78.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.ConfigRequest;
                    fromPartial(_: Partial<_78.ConfigRequest>): _78.ConfigRequest;
                    fromAmino(_: _78.ConfigRequestAmino): _78.ConfigRequest;
                    toAmino(_: _78.ConfigRequest): _78.ConfigRequestAmino;
                    fromAminoMsg(object: _78.ConfigRequestAminoMsg): _78.ConfigRequest;
                    toAminoMsg(message: _78.ConfigRequest): _78.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _78.ConfigRequestProtoMsg): _78.ConfigRequest;
                    toProto(message: _78.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _78.ConfigRequest): _78.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _78.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.ConfigResponse;
                    fromPartial(object: Partial<_78.ConfigResponse>): _78.ConfigResponse;
                    fromAmino(object: _78.ConfigResponseAmino): _78.ConfigResponse;
                    toAmino(message: _78.ConfigResponse): _78.ConfigResponseAmino;
                    fromAminoMsg(object: _78.ConfigResponseAminoMsg): _78.ConfigResponse;
                    toAminoMsg(message: _78.ConfigResponse): _78.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _78.ConfigResponseProtoMsg): _78.ConfigResponse;
                    toProto(message: _78.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _78.ConfigResponse): _78.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _79.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.PageRequest;
                    fromPartial(object: Partial<_79.PageRequest>): _79.PageRequest;
                    fromAmino(object: _79.PageRequestAmino): _79.PageRequest;
                    toAmino(message: _79.PageRequest): _79.PageRequestAmino;
                    fromAminoMsg(object: _79.PageRequestAminoMsg): _79.PageRequest;
                    toAminoMsg(message: _79.PageRequest): _79.PageRequestAminoMsg;
                    fromProtoMsg(message: _79.PageRequestProtoMsg): _79.PageRequest;
                    toProto(message: _79.PageRequest): Uint8Array;
                    toProtoMsg(message: _79.PageRequest): _79.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _79.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.PageResponse;
                    fromPartial(object: Partial<_79.PageResponse>): _79.PageResponse;
                    fromAmino(object: _79.PageResponseAmino): _79.PageResponse;
                    toAmino(message: _79.PageResponse): _79.PageResponseAmino;
                    fromAminoMsg(object: _79.PageResponseAminoMsg): _79.PageResponse;
                    toAminoMsg(message: _79.PageResponse): _79.PageResponseAminoMsg;
                    fromProtoMsg(message: _79.PageResponseProtoMsg): _79.PageResponse;
                    toProto(message: _79.PageResponse): Uint8Array;
                    toProtoMsg(message: _79.PageResponse): _79.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _80.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _80.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_80.ListAllInterfacesRequest>): _80.ListAllInterfacesRequest;
                    fromAmino(_: _80.ListAllInterfacesRequestAmino): _80.ListAllInterfacesRequest;
                    toAmino(_: _80.ListAllInterfacesRequest): _80.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _80.ListAllInterfacesRequestAminoMsg): _80.ListAllInterfacesRequest;
                    toAminoMsg(message: _80.ListAllInterfacesRequest): _80.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _80.ListAllInterfacesRequestProtoMsg): _80.ListAllInterfacesRequest;
                    toProto(message: _80.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _80.ListAllInterfacesRequest): _80.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _80.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_80.ListAllInterfacesResponse>): _80.ListAllInterfacesResponse;
                    fromAmino(object: _80.ListAllInterfacesResponseAmino): _80.ListAllInterfacesResponse;
                    toAmino(message: _80.ListAllInterfacesResponse): _80.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _80.ListAllInterfacesResponseAminoMsg): _80.ListAllInterfacesResponse;
                    toAminoMsg(message: _80.ListAllInterfacesResponse): _80.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _80.ListAllInterfacesResponseProtoMsg): _80.ListAllInterfacesResponse;
                    toProto(message: _80.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _80.ListAllInterfacesResponse): _80.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _80.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.ListImplementationsRequest;
                    fromPartial(object: Partial<_80.ListImplementationsRequest>): _80.ListImplementationsRequest;
                    fromAmino(object: _80.ListImplementationsRequestAmino): _80.ListImplementationsRequest;
                    toAmino(message: _80.ListImplementationsRequest): _80.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _80.ListImplementationsRequestAminoMsg): _80.ListImplementationsRequest;
                    toAminoMsg(message: _80.ListImplementationsRequest): _80.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _80.ListImplementationsRequestProtoMsg): _80.ListImplementationsRequest;
                    toProto(message: _80.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _80.ListImplementationsRequest): _80.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _80.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.ListImplementationsResponse;
                    fromPartial(object: Partial<_80.ListImplementationsResponse>): _80.ListImplementationsResponse;
                    fromAmino(object: _80.ListImplementationsResponseAmino): _80.ListImplementationsResponse;
                    toAmino(message: _80.ListImplementationsResponse): _80.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _80.ListImplementationsResponseAminoMsg): _80.ListImplementationsResponse;
                    toAminoMsg(message: _80.ListImplementationsResponse): _80.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _80.ListImplementationsResponseProtoMsg): _80.ListImplementationsResponse;
                    toProto(message: _80.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _80.ListImplementationsResponse): _80.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _81.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.AppDescriptor;
                    fromPartial(object: Partial<_81.AppDescriptor>): _81.AppDescriptor;
                    fromAmino(object: _81.AppDescriptorAmino): _81.AppDescriptor;
                    toAmino(message: _81.AppDescriptor): _81.AppDescriptorAmino;
                    fromAminoMsg(object: _81.AppDescriptorAminoMsg): _81.AppDescriptor;
                    toAminoMsg(message: _81.AppDescriptor): _81.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _81.AppDescriptorProtoMsg): _81.AppDescriptor;
                    toProto(message: _81.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _81.AppDescriptor): _81.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _81.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.TxDescriptor;
                    fromPartial(object: Partial<_81.TxDescriptor>): _81.TxDescriptor;
                    fromAmino(object: _81.TxDescriptorAmino): _81.TxDescriptor;
                    toAmino(message: _81.TxDescriptor): _81.TxDescriptorAmino;
                    fromAminoMsg(object: _81.TxDescriptorAminoMsg): _81.TxDescriptor;
                    toAminoMsg(message: _81.TxDescriptor): _81.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _81.TxDescriptorProtoMsg): _81.TxDescriptor;
                    toProto(message: _81.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _81.TxDescriptor): _81.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _81.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.AuthnDescriptor;
                    fromPartial(object: Partial<_81.AuthnDescriptor>): _81.AuthnDescriptor;
                    fromAmino(object: _81.AuthnDescriptorAmino): _81.AuthnDescriptor;
                    toAmino(message: _81.AuthnDescriptor): _81.AuthnDescriptorAmino;
                    fromAminoMsg(object: _81.AuthnDescriptorAminoMsg): _81.AuthnDescriptor;
                    toAminoMsg(message: _81.AuthnDescriptor): _81.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _81.AuthnDescriptorProtoMsg): _81.AuthnDescriptor;
                    toProto(message: _81.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _81.AuthnDescriptor): _81.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _81.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.SigningModeDescriptor;
                    fromPartial(object: Partial<_81.SigningModeDescriptor>): _81.SigningModeDescriptor;
                    fromAmino(object: _81.SigningModeDescriptorAmino): _81.SigningModeDescriptor;
                    toAmino(message: _81.SigningModeDescriptor): _81.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _81.SigningModeDescriptorAminoMsg): _81.SigningModeDescriptor;
                    toAminoMsg(message: _81.SigningModeDescriptor): _81.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _81.SigningModeDescriptorProtoMsg): _81.SigningModeDescriptor;
                    toProto(message: _81.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _81.SigningModeDescriptor): _81.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _81.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ChainDescriptor;
                    fromPartial(object: Partial<_81.ChainDescriptor>): _81.ChainDescriptor;
                    fromAmino(object: _81.ChainDescriptorAmino): _81.ChainDescriptor;
                    toAmino(message: _81.ChainDescriptor): _81.ChainDescriptorAmino;
                    fromAminoMsg(object: _81.ChainDescriptorAminoMsg): _81.ChainDescriptor;
                    toAminoMsg(message: _81.ChainDescriptor): _81.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _81.ChainDescriptorProtoMsg): _81.ChainDescriptor;
                    toProto(message: _81.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _81.ChainDescriptor): _81.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _81.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.CodecDescriptor;
                    fromPartial(object: Partial<_81.CodecDescriptor>): _81.CodecDescriptor;
                    fromAmino(object: _81.CodecDescriptorAmino): _81.CodecDescriptor;
                    toAmino(message: _81.CodecDescriptor): _81.CodecDescriptorAmino;
                    fromAminoMsg(object: _81.CodecDescriptorAminoMsg): _81.CodecDescriptor;
                    toAminoMsg(message: _81.CodecDescriptor): _81.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _81.CodecDescriptorProtoMsg): _81.CodecDescriptor;
                    toProto(message: _81.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _81.CodecDescriptor): _81.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _81.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.InterfaceDescriptor;
                    fromPartial(object: Partial<_81.InterfaceDescriptor>): _81.InterfaceDescriptor;
                    fromAmino(object: _81.InterfaceDescriptorAmino): _81.InterfaceDescriptor;
                    toAmino(message: _81.InterfaceDescriptor): _81.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _81.InterfaceDescriptorAminoMsg): _81.InterfaceDescriptor;
                    toAminoMsg(message: _81.InterfaceDescriptor): _81.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _81.InterfaceDescriptorProtoMsg): _81.InterfaceDescriptor;
                    toProto(message: _81.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _81.InterfaceDescriptor): _81.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _81.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_81.InterfaceImplementerDescriptor>): _81.InterfaceImplementerDescriptor;
                    fromAmino(object: _81.InterfaceImplementerDescriptorAmino): _81.InterfaceImplementerDescriptor;
                    toAmino(message: _81.InterfaceImplementerDescriptor): _81.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _81.InterfaceImplementerDescriptorAminoMsg): _81.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _81.InterfaceImplementerDescriptor): _81.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _81.InterfaceImplementerDescriptorProtoMsg): _81.InterfaceImplementerDescriptor;
                    toProto(message: _81.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _81.InterfaceImplementerDescriptor): _81.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _81.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_81.InterfaceAcceptingMessageDescriptor>): _81.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _81.InterfaceAcceptingMessageDescriptorAmino): _81.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _81.InterfaceAcceptingMessageDescriptor): _81.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _81.InterfaceAcceptingMessageDescriptorAminoMsg): _81.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _81.InterfaceAcceptingMessageDescriptor): _81.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _81.InterfaceAcceptingMessageDescriptorProtoMsg): _81.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _81.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _81.InterfaceAcceptingMessageDescriptor): _81.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _81.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.ConfigurationDescriptor;
                    fromPartial(object: Partial<_81.ConfigurationDescriptor>): _81.ConfigurationDescriptor;
                    fromAmino(object: _81.ConfigurationDescriptorAmino): _81.ConfigurationDescriptor;
                    toAmino(message: _81.ConfigurationDescriptor): _81.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _81.ConfigurationDescriptorAminoMsg): _81.ConfigurationDescriptor;
                    toAminoMsg(message: _81.ConfigurationDescriptor): _81.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _81.ConfigurationDescriptorProtoMsg): _81.ConfigurationDescriptor;
                    toProto(message: _81.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _81.ConfigurationDescriptor): _81.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _81.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.MsgDescriptor;
                    fromPartial(object: Partial<_81.MsgDescriptor>): _81.MsgDescriptor;
                    fromAmino(object: _81.MsgDescriptorAmino): _81.MsgDescriptor;
                    toAmino(message: _81.MsgDescriptor): _81.MsgDescriptorAmino;
                    fromAminoMsg(object: _81.MsgDescriptorAminoMsg): _81.MsgDescriptor;
                    toAminoMsg(message: _81.MsgDescriptor): _81.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _81.MsgDescriptorProtoMsg): _81.MsgDescriptor;
                    toProto(message: _81.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _81.MsgDescriptor): _81.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_81.GetAuthnDescriptorRequest>): _81.GetAuthnDescriptorRequest;
                    fromAmino(_: _81.GetAuthnDescriptorRequestAmino): _81.GetAuthnDescriptorRequest;
                    toAmino(_: _81.GetAuthnDescriptorRequest): _81.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetAuthnDescriptorRequestAminoMsg): _81.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _81.GetAuthnDescriptorRequest): _81.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetAuthnDescriptorRequestProtoMsg): _81.GetAuthnDescriptorRequest;
                    toProto(message: _81.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetAuthnDescriptorRequest): _81.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_81.GetAuthnDescriptorResponse>): _81.GetAuthnDescriptorResponse;
                    fromAmino(object: _81.GetAuthnDescriptorResponseAmino): _81.GetAuthnDescriptorResponse;
                    toAmino(message: _81.GetAuthnDescriptorResponse): _81.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetAuthnDescriptorResponseAminoMsg): _81.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _81.GetAuthnDescriptorResponse): _81.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetAuthnDescriptorResponseProtoMsg): _81.GetAuthnDescriptorResponse;
                    toProto(message: _81.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetAuthnDescriptorResponse): _81.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_81.GetChainDescriptorRequest>): _81.GetChainDescriptorRequest;
                    fromAmino(_: _81.GetChainDescriptorRequestAmino): _81.GetChainDescriptorRequest;
                    toAmino(_: _81.GetChainDescriptorRequest): _81.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetChainDescriptorRequestAminoMsg): _81.GetChainDescriptorRequest;
                    toAminoMsg(message: _81.GetChainDescriptorRequest): _81.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetChainDescriptorRequestProtoMsg): _81.GetChainDescriptorRequest;
                    toProto(message: _81.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetChainDescriptorRequest): _81.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_81.GetChainDescriptorResponse>): _81.GetChainDescriptorResponse;
                    fromAmino(object: _81.GetChainDescriptorResponseAmino): _81.GetChainDescriptorResponse;
                    toAmino(message: _81.GetChainDescriptorResponse): _81.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetChainDescriptorResponseAminoMsg): _81.GetChainDescriptorResponse;
                    toAminoMsg(message: _81.GetChainDescriptorResponse): _81.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetChainDescriptorResponseProtoMsg): _81.GetChainDescriptorResponse;
                    toProto(message: _81.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetChainDescriptorResponse): _81.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_81.GetCodecDescriptorRequest>): _81.GetCodecDescriptorRequest;
                    fromAmino(_: _81.GetCodecDescriptorRequestAmino): _81.GetCodecDescriptorRequest;
                    toAmino(_: _81.GetCodecDescriptorRequest): _81.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetCodecDescriptorRequestAminoMsg): _81.GetCodecDescriptorRequest;
                    toAminoMsg(message: _81.GetCodecDescriptorRequest): _81.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetCodecDescriptorRequestProtoMsg): _81.GetCodecDescriptorRequest;
                    toProto(message: _81.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetCodecDescriptorRequest): _81.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_81.GetCodecDescriptorResponse>): _81.GetCodecDescriptorResponse;
                    fromAmino(object: _81.GetCodecDescriptorResponseAmino): _81.GetCodecDescriptorResponse;
                    toAmino(message: _81.GetCodecDescriptorResponse): _81.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetCodecDescriptorResponseAminoMsg): _81.GetCodecDescriptorResponse;
                    toAminoMsg(message: _81.GetCodecDescriptorResponse): _81.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetCodecDescriptorResponseProtoMsg): _81.GetCodecDescriptorResponse;
                    toProto(message: _81.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetCodecDescriptorResponse): _81.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_81.GetConfigurationDescriptorRequest>): _81.GetConfigurationDescriptorRequest;
                    fromAmino(_: _81.GetConfigurationDescriptorRequestAmino): _81.GetConfigurationDescriptorRequest;
                    toAmino(_: _81.GetConfigurationDescriptorRequest): _81.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetConfigurationDescriptorRequestAminoMsg): _81.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _81.GetConfigurationDescriptorRequest): _81.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetConfigurationDescriptorRequestProtoMsg): _81.GetConfigurationDescriptorRequest;
                    toProto(message: _81.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetConfigurationDescriptorRequest): _81.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_81.GetConfigurationDescriptorResponse>): _81.GetConfigurationDescriptorResponse;
                    fromAmino(object: _81.GetConfigurationDescriptorResponseAmino): _81.GetConfigurationDescriptorResponse;
                    toAmino(message: _81.GetConfigurationDescriptorResponse): _81.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetConfigurationDescriptorResponseAminoMsg): _81.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _81.GetConfigurationDescriptorResponse): _81.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetConfigurationDescriptorResponseProtoMsg): _81.GetConfigurationDescriptorResponse;
                    toProto(message: _81.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetConfigurationDescriptorResponse): _81.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_81.GetQueryServicesDescriptorRequest>): _81.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _81.GetQueryServicesDescriptorRequestAmino): _81.GetQueryServicesDescriptorRequest;
                    toAmino(_: _81.GetQueryServicesDescriptorRequest): _81.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetQueryServicesDescriptorRequestAminoMsg): _81.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _81.GetQueryServicesDescriptorRequest): _81.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetQueryServicesDescriptorRequestProtoMsg): _81.GetQueryServicesDescriptorRequest;
                    toProto(message: _81.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetQueryServicesDescriptorRequest): _81.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_81.GetQueryServicesDescriptorResponse>): _81.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _81.GetQueryServicesDescriptorResponseAmino): _81.GetQueryServicesDescriptorResponse;
                    toAmino(message: _81.GetQueryServicesDescriptorResponse): _81.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetQueryServicesDescriptorResponseAminoMsg): _81.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _81.GetQueryServicesDescriptorResponse): _81.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetQueryServicesDescriptorResponseProtoMsg): _81.GetQueryServicesDescriptorResponse;
                    toProto(message: _81.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetQueryServicesDescriptorResponse): _81.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _81.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_81.GetTxDescriptorRequest>): _81.GetTxDescriptorRequest;
                    fromAmino(_: _81.GetTxDescriptorRequestAmino): _81.GetTxDescriptorRequest;
                    toAmino(_: _81.GetTxDescriptorRequest): _81.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _81.GetTxDescriptorRequestAminoMsg): _81.GetTxDescriptorRequest;
                    toAminoMsg(message: _81.GetTxDescriptorRequest): _81.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _81.GetTxDescriptorRequestProtoMsg): _81.GetTxDescriptorRequest;
                    toProto(message: _81.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _81.GetTxDescriptorRequest): _81.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _81.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_81.GetTxDescriptorResponse>): _81.GetTxDescriptorResponse;
                    fromAmino(object: _81.GetTxDescriptorResponseAmino): _81.GetTxDescriptorResponse;
                    toAmino(message: _81.GetTxDescriptorResponse): _81.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _81.GetTxDescriptorResponseAminoMsg): _81.GetTxDescriptorResponse;
                    toAminoMsg(message: _81.GetTxDescriptorResponse): _81.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _81.GetTxDescriptorResponseProtoMsg): _81.GetTxDescriptorResponse;
                    toProto(message: _81.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _81.GetTxDescriptorResponse): _81.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _81.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.QueryServicesDescriptor;
                    fromPartial(object: Partial<_81.QueryServicesDescriptor>): _81.QueryServicesDescriptor;
                    fromAmino(object: _81.QueryServicesDescriptorAmino): _81.QueryServicesDescriptor;
                    toAmino(message: _81.QueryServicesDescriptor): _81.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _81.QueryServicesDescriptorAminoMsg): _81.QueryServicesDescriptor;
                    toAminoMsg(message: _81.QueryServicesDescriptor): _81.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _81.QueryServicesDescriptorProtoMsg): _81.QueryServicesDescriptor;
                    toProto(message: _81.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _81.QueryServicesDescriptor): _81.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _81.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.QueryServiceDescriptor;
                    fromPartial(object: Partial<_81.QueryServiceDescriptor>): _81.QueryServiceDescriptor;
                    fromAmino(object: _81.QueryServiceDescriptorAmino): _81.QueryServiceDescriptor;
                    toAmino(message: _81.QueryServiceDescriptor): _81.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _81.QueryServiceDescriptorAminoMsg): _81.QueryServiceDescriptor;
                    toAminoMsg(message: _81.QueryServiceDescriptor): _81.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _81.QueryServiceDescriptorProtoMsg): _81.QueryServiceDescriptor;
                    toProto(message: _81.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _81.QueryServiceDescriptor): _81.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _81.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.QueryMethodDescriptor;
                    fromPartial(object: Partial<_81.QueryMethodDescriptor>): _81.QueryMethodDescriptor;
                    fromAmino(object: _81.QueryMethodDescriptorAmino): _81.QueryMethodDescriptor;
                    toAmino(message: _81.QueryMethodDescriptor): _81.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _81.QueryMethodDescriptorAminoMsg): _81.QueryMethodDescriptor;
                    toAminoMsg(message: _81.QueryMethodDescriptor): _81.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _81.QueryMethodDescriptorProtoMsg): _81.QueryMethodDescriptor;
                    toProto(message: _81.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _81.QueryMethodDescriptor): _81.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _82.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Snapshot;
                    fromPartial(object: Partial<_82.Snapshot>): _82.Snapshot;
                    fromAmino(object: _82.SnapshotAmino): _82.Snapshot;
                    toAmino(message: _82.Snapshot): _82.SnapshotAmino;
                    fromAminoMsg(object: _82.SnapshotAminoMsg): _82.Snapshot;
                    toAminoMsg(message: _82.Snapshot): _82.SnapshotAminoMsg;
                    fromProtoMsg(message: _82.SnapshotProtoMsg): _82.Snapshot;
                    toProto(message: _82.Snapshot): Uint8Array;
                    toProtoMsg(message: _82.Snapshot): _82.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _82.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Metadata;
                    fromPartial(object: Partial<_82.Metadata>): _82.Metadata;
                    fromAmino(object: _82.MetadataAmino): _82.Metadata;
                    toAmino(message: _82.Metadata): _82.MetadataAmino;
                    fromAminoMsg(object: _82.MetadataAminoMsg): _82.Metadata;
                    toAminoMsg(message: _82.Metadata): _82.MetadataAminoMsg;
                    fromProtoMsg(message: _82.MetadataProtoMsg): _82.Metadata;
                    toProto(message: _82.Metadata): Uint8Array;
                    toProtoMsg(message: _82.Metadata): _82.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _82.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotItem;
                    fromPartial(object: Partial<_82.SnapshotItem>): _82.SnapshotItem;
                    fromAmino(object: _82.SnapshotItemAmino): _82.SnapshotItem;
                    toAmino(message: _82.SnapshotItem): _82.SnapshotItemAmino;
                    fromAminoMsg(object: _82.SnapshotItemAminoMsg): _82.SnapshotItem;
                    toAminoMsg(message: _82.SnapshotItem): _82.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _82.SnapshotItemProtoMsg): _82.SnapshotItem;
                    toProto(message: _82.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _82.SnapshotItem): _82.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _82.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotStoreItem;
                    fromPartial(object: Partial<_82.SnapshotStoreItem>): _82.SnapshotStoreItem;
                    fromAmino(object: _82.SnapshotStoreItemAmino): _82.SnapshotStoreItem;
                    toAmino(message: _82.SnapshotStoreItem): _82.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _82.SnapshotStoreItemAminoMsg): _82.SnapshotStoreItem;
                    toAminoMsg(message: _82.SnapshotStoreItem): _82.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _82.SnapshotStoreItemProtoMsg): _82.SnapshotStoreItem;
                    toProto(message: _82.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _82.SnapshotStoreItem): _82.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _82.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotIAVLItem;
                    fromPartial(object: Partial<_82.SnapshotIAVLItem>): _82.SnapshotIAVLItem;
                    fromAmino(object: _82.SnapshotIAVLItemAmino): _82.SnapshotIAVLItem;
                    toAmino(message: _82.SnapshotIAVLItem): _82.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _82.SnapshotIAVLItemAminoMsg): _82.SnapshotIAVLItem;
                    toAminoMsg(message: _82.SnapshotIAVLItem): _82.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _82.SnapshotIAVLItemProtoMsg): _82.SnapshotIAVLItem;
                    toProto(message: _82.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _82.SnapshotIAVLItem): _82.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _82.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_82.SnapshotExtensionMeta>): _82.SnapshotExtensionMeta;
                    fromAmino(object: _82.SnapshotExtensionMetaAmino): _82.SnapshotExtensionMeta;
                    toAmino(message: _82.SnapshotExtensionMeta): _82.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _82.SnapshotExtensionMetaAminoMsg): _82.SnapshotExtensionMeta;
                    toAminoMsg(message: _82.SnapshotExtensionMeta): _82.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _82.SnapshotExtensionMetaProtoMsg): _82.SnapshotExtensionMeta;
                    toProto(message: _82.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _82.SnapshotExtensionMeta): _82.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _82.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_82.SnapshotExtensionPayload>): _82.SnapshotExtensionPayload;
                    fromAmino(object: _82.SnapshotExtensionPayloadAmino): _82.SnapshotExtensionPayload;
                    toAmino(message: _82.SnapshotExtensionPayload): _82.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _82.SnapshotExtensionPayloadAminoMsg): _82.SnapshotExtensionPayload;
                    toAminoMsg(message: _82.SnapshotExtensionPayload): _82.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _82.SnapshotExtensionPayloadProtoMsg): _82.SnapshotExtensionPayload;
                    toProto(message: _82.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _82.SnapshotExtensionPayload): _82.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _82.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotKVItem;
                    fromPartial(object: Partial<_82.SnapshotKVItem>): _82.SnapshotKVItem;
                    fromAmino(object: _82.SnapshotKVItemAmino): _82.SnapshotKVItem;
                    toAmino(message: _82.SnapshotKVItem): _82.SnapshotKVItemAmino;
                    fromAminoMsg(object: _82.SnapshotKVItemAminoMsg): _82.SnapshotKVItem;
                    toAminoMsg(message: _82.SnapshotKVItem): _82.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _82.SnapshotKVItemProtoMsg): _82.SnapshotKVItem;
                    toProto(message: _82.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _82.SnapshotKVItem): _82.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _82.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SnapshotSchema;
                    fromPartial(object: Partial<_82.SnapshotSchema>): _82.SnapshotSchema;
                    fromAmino(object: _82.SnapshotSchemaAmino): _82.SnapshotSchema;
                    toAmino(message: _82.SnapshotSchema): _82.SnapshotSchemaAmino;
                    fromAminoMsg(object: _82.SnapshotSchemaAminoMsg): _82.SnapshotSchema;
                    toAminoMsg(message: _82.SnapshotSchema): _82.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _82.SnapshotSchemaProtoMsg): _82.SnapshotSchema;
                    toProto(message: _82.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _82.SnapshotSchema): _82.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _84.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.StoreKVPair;
                    fromPartial(object: Partial<_84.StoreKVPair>): _84.StoreKVPair;
                    fromAmino(object: _84.StoreKVPairAmino): _84.StoreKVPair;
                    toAmino(message: _84.StoreKVPair): _84.StoreKVPairAmino;
                    fromAminoMsg(object: _84.StoreKVPairAminoMsg): _84.StoreKVPair;
                    toAminoMsg(message: _84.StoreKVPair): _84.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _84.StoreKVPairProtoMsg): _84.StoreKVPair;
                    toProto(message: _84.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _84.StoreKVPair): _84.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _84.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.BlockMetadata;
                    fromPartial(object: Partial<_84.BlockMetadata>): _84.BlockMetadata;
                    fromAmino(object: _84.BlockMetadataAmino): _84.BlockMetadata;
                    toAmino(message: _84.BlockMetadata): _84.BlockMetadataAmino;
                    fromAminoMsg(object: _84.BlockMetadataAminoMsg): _84.BlockMetadata;
                    toAminoMsg(message: _84.BlockMetadata): _84.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _84.BlockMetadataProtoMsg): _84.BlockMetadata;
                    toProto(message: _84.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _84.BlockMetadata): _84.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _84.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_84.BlockMetadata_DeliverTx>): _84.BlockMetadata_DeliverTx;
                    fromAmino(object: _84.BlockMetadata_DeliverTxAmino): _84.BlockMetadata_DeliverTx;
                    toAmino(message: _84.BlockMetadata_DeliverTx): _84.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _84.BlockMetadata_DeliverTxAminoMsg): _84.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _84.BlockMetadata_DeliverTx): _84.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _84.BlockMetadata_DeliverTxProtoMsg): _84.BlockMetadata_DeliverTx;
                    toProto(message: _84.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _84.BlockMetadata_DeliverTx): _84.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _83.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.CommitInfo;
                    fromPartial(object: Partial<_83.CommitInfo>): _83.CommitInfo;
                    fromAmino(object: _83.CommitInfoAmino): _83.CommitInfo;
                    toAmino(message: _83.CommitInfo): _83.CommitInfoAmino;
                    fromAminoMsg(object: _83.CommitInfoAminoMsg): _83.CommitInfo;
                    toAminoMsg(message: _83.CommitInfo): _83.CommitInfoAminoMsg;
                    fromProtoMsg(message: _83.CommitInfoProtoMsg): _83.CommitInfo;
                    toProto(message: _83.CommitInfo): Uint8Array;
                    toProtoMsg(message: _83.CommitInfo): _83.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _83.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.StoreInfo;
                    fromPartial(object: Partial<_83.StoreInfo>): _83.StoreInfo;
                    fromAmino(object: _83.StoreInfoAmino): _83.StoreInfo;
                    toAmino(message: _83.StoreInfo): _83.StoreInfoAmino;
                    fromAminoMsg(object: _83.StoreInfoAminoMsg): _83.StoreInfo;
                    toAminoMsg(message: _83.StoreInfo): _83.StoreInfoAminoMsg;
                    fromProtoMsg(message: _83.StoreInfoProtoMsg): _83.StoreInfo;
                    toProto(message: _83.StoreInfo): Uint8Array;
                    toProtoMsg(message: _83.StoreInfo): _83.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _83.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.CommitID;
                    fromPartial(object: Partial<_83.CommitID>): _83.CommitID;
                    fromAmino(object: _83.CommitIDAmino): _83.CommitID;
                    toAmino(message: _83.CommitID): _83.CommitIDAmino;
                    fromAminoMsg(object: _83.CommitIDAminoMsg): _83.CommitID;
                    toAminoMsg(message: _83.CommitID): _83.CommitIDAminoMsg;
                    fromProtoMsg(message: _83.CommitIDProtoMsg): _83.CommitID;
                    toProto(message: _83.CommitID): Uint8Array;
                    toProtoMsg(message: _83.CommitID): _83.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _303.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _85.GetNodeInfoRequest): Promise<_85.GetNodeInfoResponse>;
                    getSyncing(request?: _85.GetSyncingRequest): Promise<_85.GetSyncingResponse>;
                    getLatestBlock(request?: _85.GetLatestBlockRequest): Promise<_85.GetLatestBlockResponse>;
                    getBlockByHeight(request: _85.GetBlockByHeightRequest): Promise<_85.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _85.GetLatestValidatorSetRequest): Promise<_85.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _85.GetValidatorSetByHeightRequest): Promise<_85.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _85.ABCIQueryRequest): Promise<_85.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _282.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _86.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.Block;
                    fromPartial(object: Partial<_86.Block>): _86.Block;
                    fromAmino(object: _86.BlockAmino): _86.Block;
                    toAmino(message: _86.Block): _86.BlockAmino;
                    fromAminoMsg(object: _86.BlockAminoMsg): _86.Block;
                    toAminoMsg(message: _86.Block): _86.BlockAminoMsg;
                    fromProtoMsg(message: _86.BlockProtoMsg): _86.Block;
                    toProto(message: _86.Block): Uint8Array;
                    toProtoMsg(message: _86.Block): _86.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _86.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.Header;
                    fromPartial(object: Partial<_86.Header>): _86.Header;
                    fromAmino(object: _86.HeaderAmino): _86.Header;
                    toAmino(message: _86.Header): _86.HeaderAmino;
                    fromAminoMsg(object: _86.HeaderAminoMsg): _86.Header;
                    toAminoMsg(message: _86.Header): _86.HeaderAminoMsg;
                    fromProtoMsg(message: _86.HeaderProtoMsg): _86.Header;
                    toProto(message: _86.Header): Uint8Array;
                    toProtoMsg(message: _86.Header): _86.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _85.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_85.GetValidatorSetByHeightRequest>): _85.GetValidatorSetByHeightRequest;
                    fromAmino(object: _85.GetValidatorSetByHeightRequestAmino): _85.GetValidatorSetByHeightRequest;
                    toAmino(message: _85.GetValidatorSetByHeightRequest): _85.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _85.GetValidatorSetByHeightRequestAminoMsg): _85.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _85.GetValidatorSetByHeightRequest): _85.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _85.GetValidatorSetByHeightRequestProtoMsg): _85.GetValidatorSetByHeightRequest;
                    toProto(message: _85.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _85.GetValidatorSetByHeightRequest): _85.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _85.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_85.GetValidatorSetByHeightResponse>): _85.GetValidatorSetByHeightResponse;
                    fromAmino(object: _85.GetValidatorSetByHeightResponseAmino): _85.GetValidatorSetByHeightResponse;
                    toAmino(message: _85.GetValidatorSetByHeightResponse): _85.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _85.GetValidatorSetByHeightResponseAminoMsg): _85.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _85.GetValidatorSetByHeightResponse): _85.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _85.GetValidatorSetByHeightResponseProtoMsg): _85.GetValidatorSetByHeightResponse;
                    toProto(message: _85.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _85.GetValidatorSetByHeightResponse): _85.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _85.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_85.GetLatestValidatorSetRequest>): _85.GetLatestValidatorSetRequest;
                    fromAmino(object: _85.GetLatestValidatorSetRequestAmino): _85.GetLatestValidatorSetRequest;
                    toAmino(message: _85.GetLatestValidatorSetRequest): _85.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _85.GetLatestValidatorSetRequestAminoMsg): _85.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _85.GetLatestValidatorSetRequest): _85.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _85.GetLatestValidatorSetRequestProtoMsg): _85.GetLatestValidatorSetRequest;
                    toProto(message: _85.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _85.GetLatestValidatorSetRequest): _85.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _85.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_85.GetLatestValidatorSetResponse>): _85.GetLatestValidatorSetResponse;
                    fromAmino(object: _85.GetLatestValidatorSetResponseAmino): _85.GetLatestValidatorSetResponse;
                    toAmino(message: _85.GetLatestValidatorSetResponse): _85.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _85.GetLatestValidatorSetResponseAminoMsg): _85.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _85.GetLatestValidatorSetResponse): _85.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _85.GetLatestValidatorSetResponseProtoMsg): _85.GetLatestValidatorSetResponse;
                    toProto(message: _85.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _85.GetLatestValidatorSetResponse): _85.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _85.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.Validator;
                    fromPartial(object: Partial<_85.Validator>): _85.Validator;
                    fromAmino(object: _85.ValidatorAmino): _85.Validator;
                    toAmino(message: _85.Validator): _85.ValidatorAmino;
                    fromAminoMsg(object: _85.ValidatorAminoMsg): _85.Validator;
                    toAminoMsg(message: _85.Validator): _85.ValidatorAminoMsg;
                    fromProtoMsg(message: _85.ValidatorProtoMsg): _85.Validator;
                    toProto(message: _85.Validator): Uint8Array;
                    toProtoMsg(message: _85.Validator): _85.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _85.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_85.GetBlockByHeightRequest>): _85.GetBlockByHeightRequest;
                    fromAmino(object: _85.GetBlockByHeightRequestAmino): _85.GetBlockByHeightRequest;
                    toAmino(message: _85.GetBlockByHeightRequest): _85.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _85.GetBlockByHeightRequestAminoMsg): _85.GetBlockByHeightRequest;
                    toAminoMsg(message: _85.GetBlockByHeightRequest): _85.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _85.GetBlockByHeightRequestProtoMsg): _85.GetBlockByHeightRequest;
                    toProto(message: _85.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _85.GetBlockByHeightRequest): _85.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _85.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_85.GetBlockByHeightResponse>): _85.GetBlockByHeightResponse;
                    fromAmino(object: _85.GetBlockByHeightResponseAmino): _85.GetBlockByHeightResponse;
                    toAmino(message: _85.GetBlockByHeightResponse): _85.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _85.GetBlockByHeightResponseAminoMsg): _85.GetBlockByHeightResponse;
                    toAminoMsg(message: _85.GetBlockByHeightResponse): _85.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _85.GetBlockByHeightResponseProtoMsg): _85.GetBlockByHeightResponse;
                    toProto(message: _85.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _85.GetBlockByHeightResponse): _85.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _85.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _85.GetLatestBlockRequest;
                    fromPartial(_: Partial<_85.GetLatestBlockRequest>): _85.GetLatestBlockRequest;
                    fromAmino(_: _85.GetLatestBlockRequestAmino): _85.GetLatestBlockRequest;
                    toAmino(_: _85.GetLatestBlockRequest): _85.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _85.GetLatestBlockRequestAminoMsg): _85.GetLatestBlockRequest;
                    toAminoMsg(message: _85.GetLatestBlockRequest): _85.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _85.GetLatestBlockRequestProtoMsg): _85.GetLatestBlockRequest;
                    toProto(message: _85.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _85.GetLatestBlockRequest): _85.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _85.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetLatestBlockResponse;
                    fromPartial(object: Partial<_85.GetLatestBlockResponse>): _85.GetLatestBlockResponse;
                    fromAmino(object: _85.GetLatestBlockResponseAmino): _85.GetLatestBlockResponse;
                    toAmino(message: _85.GetLatestBlockResponse): _85.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _85.GetLatestBlockResponseAminoMsg): _85.GetLatestBlockResponse;
                    toAminoMsg(message: _85.GetLatestBlockResponse): _85.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _85.GetLatestBlockResponseProtoMsg): _85.GetLatestBlockResponse;
                    toProto(message: _85.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _85.GetLatestBlockResponse): _85.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _85.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _85.GetSyncingRequest;
                    fromPartial(_: Partial<_85.GetSyncingRequest>): _85.GetSyncingRequest;
                    fromAmino(_: _85.GetSyncingRequestAmino): _85.GetSyncingRequest;
                    toAmino(_: _85.GetSyncingRequest): _85.GetSyncingRequestAmino;
                    fromAminoMsg(object: _85.GetSyncingRequestAminoMsg): _85.GetSyncingRequest;
                    toAminoMsg(message: _85.GetSyncingRequest): _85.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _85.GetSyncingRequestProtoMsg): _85.GetSyncingRequest;
                    toProto(message: _85.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _85.GetSyncingRequest): _85.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _85.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetSyncingResponse;
                    fromPartial(object: Partial<_85.GetSyncingResponse>): _85.GetSyncingResponse;
                    fromAmino(object: _85.GetSyncingResponseAmino): _85.GetSyncingResponse;
                    toAmino(message: _85.GetSyncingResponse): _85.GetSyncingResponseAmino;
                    fromAminoMsg(object: _85.GetSyncingResponseAminoMsg): _85.GetSyncingResponse;
                    toAminoMsg(message: _85.GetSyncingResponse): _85.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _85.GetSyncingResponseProtoMsg): _85.GetSyncingResponse;
                    toProto(message: _85.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _85.GetSyncingResponse): _85.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _85.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _85.GetNodeInfoRequest;
                    fromPartial(_: Partial<_85.GetNodeInfoRequest>): _85.GetNodeInfoRequest;
                    fromAmino(_: _85.GetNodeInfoRequestAmino): _85.GetNodeInfoRequest;
                    toAmino(_: _85.GetNodeInfoRequest): _85.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _85.GetNodeInfoRequestAminoMsg): _85.GetNodeInfoRequest;
                    toAminoMsg(message: _85.GetNodeInfoRequest): _85.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _85.GetNodeInfoRequestProtoMsg): _85.GetNodeInfoRequest;
                    toProto(message: _85.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _85.GetNodeInfoRequest): _85.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _85.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GetNodeInfoResponse;
                    fromPartial(object: Partial<_85.GetNodeInfoResponse>): _85.GetNodeInfoResponse;
                    fromAmino(object: _85.GetNodeInfoResponseAmino): _85.GetNodeInfoResponse;
                    toAmino(message: _85.GetNodeInfoResponse): _85.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _85.GetNodeInfoResponseAminoMsg): _85.GetNodeInfoResponse;
                    toAminoMsg(message: _85.GetNodeInfoResponse): _85.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _85.GetNodeInfoResponseProtoMsg): _85.GetNodeInfoResponse;
                    toProto(message: _85.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _85.GetNodeInfoResponse): _85.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _85.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.VersionInfo;
                    fromPartial(object: Partial<_85.VersionInfo>): _85.VersionInfo;
                    fromAmino(object: _85.VersionInfoAmino): _85.VersionInfo;
                    toAmino(message: _85.VersionInfo): _85.VersionInfoAmino;
                    fromAminoMsg(object: _85.VersionInfoAminoMsg): _85.VersionInfo;
                    toAminoMsg(message: _85.VersionInfo): _85.VersionInfoAminoMsg;
                    fromProtoMsg(message: _85.VersionInfoProtoMsg): _85.VersionInfo;
                    toProto(message: _85.VersionInfo): Uint8Array;
                    toProtoMsg(message: _85.VersionInfo): _85.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _85.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.Module;
                    fromPartial(object: Partial<_85.Module>): _85.Module;
                    fromAmino(object: _85.ModuleAmino): _85.Module;
                    toAmino(message: _85.Module): _85.ModuleAmino;
                    fromAminoMsg(object: _85.ModuleAminoMsg): _85.Module;
                    toAminoMsg(message: _85.Module): _85.ModuleAminoMsg;
                    fromProtoMsg(message: _85.ModuleProtoMsg): _85.Module;
                    toProto(message: _85.Module): Uint8Array;
                    toProtoMsg(message: _85.Module): _85.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _85.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ABCIQueryRequest;
                    fromPartial(object: Partial<_85.ABCIQueryRequest>): _85.ABCIQueryRequest;
                    fromAmino(object: _85.ABCIQueryRequestAmino): _85.ABCIQueryRequest;
                    toAmino(message: _85.ABCIQueryRequest): _85.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _85.ABCIQueryRequestAminoMsg): _85.ABCIQueryRequest;
                    toAminoMsg(message: _85.ABCIQueryRequest): _85.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _85.ABCIQueryRequestProtoMsg): _85.ABCIQueryRequest;
                    toProto(message: _85.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _85.ABCIQueryRequest): _85.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _85.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ABCIQueryResponse;
                    fromPartial(object: Partial<_85.ABCIQueryResponse>): _85.ABCIQueryResponse;
                    fromAmino(object: _85.ABCIQueryResponseAmino): _85.ABCIQueryResponse;
                    toAmino(message: _85.ABCIQueryResponse): _85.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _85.ABCIQueryResponseAminoMsg): _85.ABCIQueryResponse;
                    toAminoMsg(message: _85.ABCIQueryResponse): _85.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _85.ABCIQueryResponseProtoMsg): _85.ABCIQueryResponse;
                    toProto(message: _85.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _85.ABCIQueryResponse): _85.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _85.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ProofOp;
                    fromPartial(object: Partial<_85.ProofOp>): _85.ProofOp;
                    fromAmino(object: _85.ProofOpAmino): _85.ProofOp;
                    toAmino(message: _85.ProofOp): _85.ProofOpAmino;
                    fromAminoMsg(object: _85.ProofOpAminoMsg): _85.ProofOp;
                    toAminoMsg(message: _85.ProofOp): _85.ProofOpAminoMsg;
                    fromProtoMsg(message: _85.ProofOpProtoMsg): _85.ProofOp;
                    toProto(message: _85.ProofOp): Uint8Array;
                    toProtoMsg(message: _85.ProofOp): _85.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _85.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ProofOps;
                    fromPartial(object: Partial<_85.ProofOps>): _85.ProofOps;
                    fromAmino(object: _85.ProofOpsAmino): _85.ProofOps;
                    toAmino(message: _85.ProofOps): _85.ProofOpsAmino;
                    fromAminoMsg(object: _85.ProofOpsAminoMsg): _85.ProofOps;
                    toAminoMsg(message: _85.ProofOps): _85.ProofOpsAminoMsg;
                    fromProtoMsg(message: _85.ProofOpsProtoMsg): _85.ProofOps;
                    toProto(message: _85.ProofOps): Uint8Array;
                    toProtoMsg(message: _85.ProofOps): _85.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _87.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Coin;
                fromPartial(object: Partial<_87.Coin>): _87.Coin;
                fromAmino(object: _87.CoinAmino): _87.Coin;
                toAmino(message: _87.Coin): _87.CoinAmino;
                fromAminoMsg(object: _87.CoinAminoMsg): _87.Coin;
                toAminoMsg(message: _87.Coin): _87.CoinAminoMsg;
                fromProtoMsg(message: _87.CoinProtoMsg): _87.Coin;
                toProto(message: _87.Coin): Uint8Array;
                toProtoMsg(message: _87.Coin): _87.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _87.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DecCoin;
                fromPartial(object: Partial<_87.DecCoin>): _87.DecCoin;
                fromAmino(object: _87.DecCoinAmino): _87.DecCoin;
                toAmino(message: _87.DecCoin): _87.DecCoinAmino;
                fromAminoMsg(object: _87.DecCoinAminoMsg): _87.DecCoin;
                toAminoMsg(message: _87.DecCoin): _87.DecCoinAminoMsg;
                fromProtoMsg(message: _87.DecCoinProtoMsg): _87.DecCoin;
                toProto(message: _87.DecCoin): Uint8Array;
                toProtoMsg(message: _87.DecCoin): _87.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _87.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.IntProto;
                fromPartial(object: Partial<_87.IntProto>): _87.IntProto;
                fromAmino(object: _87.IntProtoAmino): _87.IntProto;
                toAmino(message: _87.IntProto): _87.IntProtoAmino;
                fromAminoMsg(object: _87.IntProtoAminoMsg): _87.IntProto;
                toAminoMsg(message: _87.IntProto): _87.IntProtoAminoMsg;
                fromProtoMsg(message: _87.IntProtoProtoMsg): _87.IntProto;
                toProto(message: _87.IntProto): Uint8Array;
                toProtoMsg(message: _87.IntProto): _87.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _87.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DecProto;
                fromPartial(object: Partial<_87.DecProto>): _87.DecProto;
                fromAmino(object: _87.DecProtoAmino): _87.DecProto;
                toAmino(message: _87.DecProto): _87.DecProtoAmino;
                fromAminoMsg(object: _87.DecProtoAminoMsg): _87.DecProto;
                toAminoMsg(message: _87.DecProto): _87.DecProtoAminoMsg;
                fromProtoMsg(message: _87.DecProtoProtoMsg): _87.DecProto;
                toProto(message: _87.DecProto): Uint8Array;
                toProtoMsg(message: _87.DecProto): _87.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _88.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.Module;
                    fromPartial(object: Partial<_88.Module>): _88.Module;
                    fromAmino(object: _88.ModuleAmino): _88.Module;
                    toAmino(message: _88.Module): _88.ModuleAmino;
                    fromAminoMsg(object: _88.ModuleAminoMsg): _88.Module;
                    toAminoMsg(message: _88.Module): _88.ModuleAminoMsg;
                    fromProtoMsg(message: _88.ModuleProtoMsg): _88.Module;
                    toProto(message: _88.Module): Uint8Array;
                    toProtoMsg(message: _88.Module): _88.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _90.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GenesisOwners;
                fromPartial(object: Partial<_90.GenesisOwners>): _90.GenesisOwners;
                fromAmino(object: _90.GenesisOwnersAmino): _90.GenesisOwners;
                toAmino(message: _90.GenesisOwners): _90.GenesisOwnersAmino;
                fromAminoMsg(object: _90.GenesisOwnersAminoMsg): _90.GenesisOwners;
                toAminoMsg(message: _90.GenesisOwners): _90.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _90.GenesisOwnersProtoMsg): _90.GenesisOwners;
                toProto(message: _90.GenesisOwners): Uint8Array;
                toProtoMsg(message: _90.GenesisOwners): _90.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                toProto(message: _90.GenesisState): Uint8Array;
                toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _89.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Capability;
                fromPartial(object: Partial<_89.Capability>): _89.Capability;
                fromAmino(object: _89.CapabilityAmino): _89.Capability;
                toAmino(message: _89.Capability): _89.CapabilityAmino;
                fromAminoMsg(object: _89.CapabilityAminoMsg): _89.Capability;
                toAminoMsg(message: _89.Capability): _89.CapabilityAminoMsg;
                fromProtoMsg(message: _89.CapabilityProtoMsg): _89.Capability;
                toProto(message: _89.Capability): Uint8Array;
                toProtoMsg(message: _89.Capability): _89.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _89.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Owner;
                fromPartial(object: Partial<_89.Owner>): _89.Owner;
                fromAmino(object: _89.OwnerAmino): _89.Owner;
                toAmino(message: _89.Owner): _89.OwnerAmino;
                fromAminoMsg(object: _89.OwnerAminoMsg): _89.Owner;
                toAminoMsg(message: _89.Owner): _89.OwnerAminoMsg;
                fromProtoMsg(message: _89.OwnerProtoMsg): _89.Owner;
                toProto(message: _89.Owner): Uint8Array;
                toProtoMsg(message: _89.Owner): _89.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _89.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.CapabilityOwners;
                fromPartial(object: Partial<_89.CapabilityOwners>): _89.CapabilityOwners;
                fromAmino(object: _89.CapabilityOwnersAmino): _89.CapabilityOwners;
                toAmino(message: _89.CapabilityOwners): _89.CapabilityOwnersAmino;
                fromAminoMsg(object: _89.CapabilityOwnersAminoMsg): _89.CapabilityOwners;
                toAminoMsg(message: _89.CapabilityOwners): _89.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _89.CapabilityOwnersProtoMsg): _89.CapabilityOwners;
                toProto(message: _89.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _89.CapabilityOwners): _89.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Module;
                    fromPartial(object: Partial<_91.Module>): _91.Module;
                    fromAmino(object: _91.ModuleAmino): _91.Module;
                    toAmino(message: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
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
                    toAmino: (message: _93.MsgUpdateParams) => _93.MsgUpdateParamsAmino;
                    fromAmino: (object: _93.MsgUpdateParamsAmino) => _93.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _93.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgUpdateParams;
                fromPartial(object: Partial<_93.MsgUpdateParams>): _93.MsgUpdateParams;
                fromAmino(object: _93.MsgUpdateParamsAmino): _93.MsgUpdateParams;
                toAmino(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsAminoMsg): _93.MsgUpdateParams;
                toAminoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsProtoMsg): _93.MsgUpdateParams;
                toProto(message: _93.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _93.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_93.MsgUpdateParamsResponse>): _93.MsgUpdateParamsResponse;
                fromAmino(_: _93.MsgUpdateParamsResponseAmino): _93.MsgUpdateParamsResponse;
                toAmino(_: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsResponseAminoMsg): _93.MsgUpdateParamsResponse;
                toAminoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsResponseProtoMsg): _93.MsgUpdateParamsResponse;
                toProto(message: _93.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _94.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Module;
                    fromPartial(object: Partial<_94.Module>): _94.Module;
                    fromAmino(object: _94.ModuleAmino): _94.Module;
                    toAmino(message: _94.Module): _94.ModuleAmino;
                    fromAminoMsg(object: _94.ModuleAminoMsg): _94.Module;
                    toAminoMsg(message: _94.Module): _94.ModuleAminoMsg;
                    fromProtoMsg(message: _94.ModuleProtoMsg): _94.Module;
                    toProto(message: _94.Module): Uint8Array;
                    toProtoMsg(message: _94.Module): _94.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
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
                    toAmino: (message: _96.MsgVerifyInvariant) => _96.MsgVerifyInvariantAmino;
                    fromAmino: (object: _96.MsgVerifyInvariantAmino) => _96.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateParams) => _96.MsgUpdateParamsAmino;
                    fromAmino: (object: _96.MsgUpdateParamsAmino) => _96.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _96.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgVerifyInvariant;
                fromPartial(object: Partial<_96.MsgVerifyInvariant>): _96.MsgVerifyInvariant;
                fromAmino(object: _96.MsgVerifyInvariantAmino): _96.MsgVerifyInvariant;
                toAmino(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantAminoMsg): _96.MsgVerifyInvariant;
                toAminoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantProtoMsg): _96.MsgVerifyInvariant;
                toProto(message: _96.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _96.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_96.MsgVerifyInvariantResponse>): _96.MsgVerifyInvariantResponse;
                fromAmino(_: _96.MsgVerifyInvariantResponseAmino): _96.MsgVerifyInvariantResponse;
                toAmino(_: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantResponseAminoMsg): _96.MsgVerifyInvariantResponse;
                toAminoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantResponseProtoMsg): _96.MsgVerifyInvariantResponse;
                toProto(message: _96.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _96.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUpdateParams;
                fromPartial(object: Partial<_96.MsgUpdateParams>): _96.MsgUpdateParams;
                fromAmino(object: _96.MsgUpdateParamsAmino): _96.MsgUpdateParams;
                toAmino(message: _96.MsgUpdateParams): _96.MsgUpdateParamsAmino;
                fromAminoMsg(object: _96.MsgUpdateParamsAminoMsg): _96.MsgUpdateParams;
                toAminoMsg(message: _96.MsgUpdateParams): _96.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateParamsProtoMsg): _96.MsgUpdateParams;
                toProto(message: _96.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateParams): _96.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _96.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_96.MsgUpdateParamsResponse>): _96.MsgUpdateParamsResponse;
                fromAmino(_: _96.MsgUpdateParamsResponseAmino): _96.MsgUpdateParamsResponse;
                toAmino(_: _96.MsgUpdateParamsResponse): _96.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _96.MsgUpdateParamsResponseAminoMsg): _96.MsgUpdateParamsResponse;
                toAminoMsg(message: _96.MsgUpdateParamsResponse): _96.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUpdateParamsResponseProtoMsg): _96.MsgUpdateParamsResponse;
                toProto(message: _96.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUpdateParamsResponse): _96.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _97.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PubKey;
                fromPartial(object: Partial<_97.PubKey>): _97.PubKey;
                fromAmino(object: _97.PubKeyAmino): _97.PubKey;
                toAmino(message: _97.PubKey): _97.PubKeyAmino;
                fromAminoMsg(object: _97.PubKeyAminoMsg): _97.PubKey;
                toAminoMsg(message: _97.PubKey): _97.PubKeyAminoMsg;
                fromProtoMsg(message: _97.PubKeyProtoMsg): _97.PubKey;
                toProto(message: _97.PubKey): Uint8Array;
                toProtoMsg(message: _97.PubKey): _97.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _97.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PrivKey;
                fromPartial(object: Partial<_97.PrivKey>): _97.PrivKey;
                fromAmino(object: _97.PrivKeyAmino): _97.PrivKey;
                toAmino(message: _97.PrivKey): _97.PrivKeyAmino;
                fromAminoMsg(object: _97.PrivKeyAminoMsg): _97.PrivKey;
                toAminoMsg(message: _97.PrivKey): _97.PrivKeyAminoMsg;
                fromProtoMsg(message: _97.PrivKeyProtoMsg): _97.PrivKey;
                toProto(message: _97.PrivKey): Uint8Array;
                toProtoMsg(message: _97.PrivKey): _97.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _98.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.BIP44Params;
                    fromPartial(object: Partial<_98.BIP44Params>): _98.BIP44Params;
                    fromAmino(object: _98.BIP44ParamsAmino): _98.BIP44Params;
                    toAmino(message: _98.BIP44Params): _98.BIP44ParamsAmino;
                    fromAminoMsg(object: _98.BIP44ParamsAminoMsg): _98.BIP44Params;
                    toAminoMsg(message: _98.BIP44Params): _98.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _98.BIP44ParamsProtoMsg): _98.BIP44Params;
                    toProto(message: _98.BIP44Params): Uint8Array;
                    toProtoMsg(message: _98.BIP44Params): _98.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _99.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record;
                    fromPartial(object: Partial<_99.Record>): _99.Record;
                    fromAmino(object: _99.RecordAmino): _99.Record;
                    toAmino(message: _99.Record): _99.RecordAmino;
                    fromAminoMsg(object: _99.RecordAminoMsg): _99.Record;
                    toAminoMsg(message: _99.Record): _99.RecordAminoMsg;
                    fromProtoMsg(message: _99.RecordProtoMsg): _99.Record;
                    toProto(message: _99.Record): Uint8Array;
                    toProtoMsg(message: _99.Record): _99.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _99.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record_Local;
                    fromPartial(object: Partial<_99.Record_Local>): _99.Record_Local;
                    fromAmino(object: _99.Record_LocalAmino): _99.Record_Local;
                    toAmino(message: _99.Record_Local): _99.Record_LocalAmino;
                    fromAminoMsg(object: _99.Record_LocalAminoMsg): _99.Record_Local;
                    toAminoMsg(message: _99.Record_Local): _99.Record_LocalAminoMsg;
                    fromProtoMsg(message: _99.Record_LocalProtoMsg): _99.Record_Local;
                    toProto(message: _99.Record_Local): Uint8Array;
                    toProtoMsg(message: _99.Record_Local): _99.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _99.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Record_Ledger;
                    fromPartial(object: Partial<_99.Record_Ledger>): _99.Record_Ledger;
                    fromAmino(object: _99.Record_LedgerAmino): _99.Record_Ledger;
                    toAmino(message: _99.Record_Ledger): _99.Record_LedgerAmino;
                    fromAminoMsg(object: _99.Record_LedgerAminoMsg): _99.Record_Ledger;
                    toAminoMsg(message: _99.Record_Ledger): _99.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _99.Record_LedgerProtoMsg): _99.Record_Ledger;
                    toProto(message: _99.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _99.Record_Ledger): _99.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _99.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _99.Record_Multi;
                    fromPartial(_: Partial<_99.Record_Multi>): _99.Record_Multi;
                    fromAmino(_: _99.Record_MultiAmino): _99.Record_Multi;
                    toAmino(_: _99.Record_Multi): _99.Record_MultiAmino;
                    fromAminoMsg(object: _99.Record_MultiAminoMsg): _99.Record_Multi;
                    toAminoMsg(message: _99.Record_Multi): _99.Record_MultiAminoMsg;
                    fromProtoMsg(message: _99.Record_MultiProtoMsg): _99.Record_Multi;
                    toProto(message: _99.Record_Multi): Uint8Array;
                    toProtoMsg(message: _99.Record_Multi): _99.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _99.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _99.Record_Offline;
                    fromPartial(_: Partial<_99.Record_Offline>): _99.Record_Offline;
                    fromAmino(_: _99.Record_OfflineAmino): _99.Record_Offline;
                    toAmino(_: _99.Record_Offline): _99.Record_OfflineAmino;
                    fromAminoMsg(object: _99.Record_OfflineAminoMsg): _99.Record_Offline;
                    toAminoMsg(message: _99.Record_Offline): _99.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _99.Record_OfflineProtoMsg): _99.Record_Offline;
                    toProto(message: _99.Record_Offline): Uint8Array;
                    toProtoMsg(message: _99.Record_Offline): _99.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _100.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.LegacyAminoPubKey;
                fromPartial(object: Partial<_100.LegacyAminoPubKey>): _100.LegacyAminoPubKey;
                fromAmino(object: _100.LegacyAminoPubKeyAmino): _100.LegacyAminoPubKey;
                toAmino(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _100.LegacyAminoPubKeyAminoMsg): _100.LegacyAminoPubKey;
                toAminoMsg(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _100.LegacyAminoPubKeyProtoMsg): _100.LegacyAminoPubKey;
                toProto(message: _100.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _100.LegacyAminoPubKey): _100.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _101.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PubKey;
                fromPartial(object: Partial<_101.PubKey>): _101.PubKey;
                fromAmino(object: _101.PubKeyAmino): _101.PubKey;
                toAmino(message: _101.PubKey): _101.PubKeyAmino;
                fromAminoMsg(object: _101.PubKeyAminoMsg): _101.PubKey;
                toAminoMsg(message: _101.PubKey): _101.PubKeyAminoMsg;
                fromProtoMsg(message: _101.PubKeyProtoMsg): _101.PubKey;
                toProto(message: _101.PubKey): Uint8Array;
                toProtoMsg(message: _101.PubKey): _101.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _101.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PrivKey;
                fromPartial(object: Partial<_101.PrivKey>): _101.PrivKey;
                fromAmino(object: _101.PrivKeyAmino): _101.PrivKey;
                toAmino(message: _101.PrivKey): _101.PrivKeyAmino;
                fromAminoMsg(object: _101.PrivKeyAminoMsg): _101.PrivKey;
                toAminoMsg(message: _101.PrivKey): _101.PrivKeyAminoMsg;
                fromProtoMsg(message: _101.PrivKeyProtoMsg): _101.PrivKey;
                toProto(message: _101.PrivKey): Uint8Array;
                toProtoMsg(message: _101.PrivKey): _101.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _102.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PubKey;
                fromPartial(object: Partial<_102.PubKey>): _102.PubKey;
                fromAmino(object: _102.PubKeyAmino): _102.PubKey;
                toAmino(message: _102.PubKey): _102.PubKeyAmino;
                fromAminoMsg(object: _102.PubKeyAminoMsg): _102.PubKey;
                toAminoMsg(message: _102.PubKey): _102.PubKeyAminoMsg;
                fromProtoMsg(message: _102.PubKeyProtoMsg): _102.PubKey;
                toProto(message: _102.PubKey): Uint8Array;
                toProtoMsg(message: _102.PubKey): _102.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _102.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PrivKey;
                fromPartial(object: Partial<_102.PrivKey>): _102.PrivKey;
                fromAmino(object: _102.PrivKeyAmino): _102.PrivKey;
                toAmino(message: _102.PrivKey): _102.PrivKeyAmino;
                fromAminoMsg(object: _102.PrivKeyAminoMsg): _102.PrivKey;
                toAminoMsg(message: _102.PrivKey): _102.PrivKeyAminoMsg;
                fromProtoMsg(message: _102.PrivKeyProtoMsg): _102.PrivKey;
                toProto(message: _102.PrivKey): Uint8Array;
                toProtoMsg(message: _102.PrivKey): _102.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _103.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.Module;
                    fromPartial(object: Partial<_103.Module>): _103.Module;
                    fromAmino(object: _103.ModuleAmino): _103.Module;
                    toAmino(message: _103.Module): _103.ModuleAmino;
                    fromAminoMsg(object: _103.ModuleAminoMsg): _103.Module;
                    toAminoMsg(message: _103.Module): _103.ModuleAminoMsg;
                    fromProtoMsg(message: _103.ModuleProtoMsg): _103.Module;
                    toProto(message: _103.Module): Uint8Array;
                    toProtoMsg(message: _103.Module): _103.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
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
            LCDQueryClient: typeof _284.LCDQueryClient;
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
                    toAmino: (message: _107.MsgSetWithdrawAddress) => _107.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _107.MsgSetWithdrawAddressAmino) => _107.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawDelegatorReward) => _107.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _107.MsgWithdrawDelegatorRewardAmino) => _107.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawValidatorCommission) => _107.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _107.MsgWithdrawValidatorCommissionAmino) => _107.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _107.MsgFundCommunityPool) => _107.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _107.MsgFundCommunityPoolAmino) => _107.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _107.MsgUpdateParams) => _107.MsgUpdateParamsAmino;
                    fromAmino: (object: _107.MsgUpdateParamsAmino) => _107.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCommunityPoolSpend) => _107.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _107.MsgCommunityPoolSpendAmino) => _107.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _107.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_107.MsgSetWithdrawAddress>): _107.MsgSetWithdrawAddress;
                fromAmino(object: _107.MsgSetWithdrawAddressAmino): _107.MsgSetWithdrawAddress;
                toAmino(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressAminoMsg): _107.MsgSetWithdrawAddress;
                toAminoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressProtoMsg): _107.MsgSetWithdrawAddress;
                toProto(message: _107.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _107.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_107.MsgSetWithdrawAddressResponse>): _107.MsgSetWithdrawAddressResponse;
                fromAmino(_: _107.MsgSetWithdrawAddressResponseAmino): _107.MsgSetWithdrawAddressResponse;
                toAmino(_: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressResponseAminoMsg): _107.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressResponseProtoMsg): _107.MsgSetWithdrawAddressResponse;
                toProto(message: _107.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorReward>): _107.MsgWithdrawDelegatorReward;
                fromAmino(object: _107.MsgWithdrawDelegatorRewardAmino): _107.MsgWithdrawDelegatorReward;
                toAmino(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardAminoMsg): _107.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardProtoMsg): _107.MsgWithdrawDelegatorReward;
                toProto(message: _107.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorRewardResponse>): _107.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _107.MsgWithdrawDelegatorRewardResponseAmino): _107.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardResponseAminoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponseProtoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _107.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommission>): _107.MsgWithdrawValidatorCommission;
                fromAmino(object: _107.MsgWithdrawValidatorCommissionAmino): _107.MsgWithdrawValidatorCommission;
                toAmino(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionAminoMsg): _107.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionProtoMsg): _107.MsgWithdrawValidatorCommission;
                toProto(message: _107.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommissionResponse>): _107.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _107.MsgWithdrawValidatorCommissionResponseAmino): _107.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionResponseAminoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponseProtoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _107.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _107.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgFundCommunityPool;
                fromPartial(object: Partial<_107.MsgFundCommunityPool>): _107.MsgFundCommunityPool;
                fromAmino(object: _107.MsgFundCommunityPoolAmino): _107.MsgFundCommunityPool;
                toAmino(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolAminoMsg): _107.MsgFundCommunityPool;
                toAminoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolProtoMsg): _107.MsgFundCommunityPool;
                toProto(message: _107.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _107.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_107.MsgFundCommunityPoolResponse>): _107.MsgFundCommunityPoolResponse;
                fromAmino(_: _107.MsgFundCommunityPoolResponseAmino): _107.MsgFundCommunityPoolResponse;
                toAmino(_: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolResponseAminoMsg): _107.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolResponseProtoMsg): _107.MsgFundCommunityPoolResponse;
                toProto(message: _107.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _107.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgUpdateParams;
                fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
                fromAmino(object: _107.MsgUpdateParamsAmino): _107.MsgUpdateParams;
                toAmino(message: _107.MsgUpdateParams): _107.MsgUpdateParamsAmino;
                fromAminoMsg(object: _107.MsgUpdateParamsAminoMsg): _107.MsgUpdateParams;
                toAminoMsg(message: _107.MsgUpdateParams): _107.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _107.MsgUpdateParamsProtoMsg): _107.MsgUpdateParams;
                toProto(message: _107.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateParams): _107.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
                fromAmino(_: _107.MsgUpdateParamsResponseAmino): _107.MsgUpdateParamsResponse;
                toAmino(_: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _107.MsgUpdateParamsResponseAminoMsg): _107.MsgUpdateParamsResponse;
                toAminoMsg(message: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _107.MsgUpdateParamsResponseProtoMsg): _107.MsgUpdateParamsResponse;
                toProto(message: _107.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _107.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_107.MsgCommunityPoolSpend>): _107.MsgCommunityPoolSpend;
                fromAmino(object: _107.MsgCommunityPoolSpendAmino): _107.MsgCommunityPoolSpend;
                toAmino(message: _107.MsgCommunityPoolSpend): _107.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _107.MsgCommunityPoolSpendAminoMsg): _107.MsgCommunityPoolSpend;
                toAminoMsg(message: _107.MsgCommunityPoolSpend): _107.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _107.MsgCommunityPoolSpendProtoMsg): _107.MsgCommunityPoolSpend;
                toProto(message: _107.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _107.MsgCommunityPoolSpend): _107.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _107.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_107.MsgCommunityPoolSpendResponse>): _107.MsgCommunityPoolSpendResponse;
                fromAmino(_: _107.MsgCommunityPoolSpendResponseAmino): _107.MsgCommunityPoolSpendResponse;
                toAmino(_: _107.MsgCommunityPoolSpendResponse): _107.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _107.MsgCommunityPoolSpendResponseAminoMsg): _107.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _107.MsgCommunityPoolSpendResponse): _107.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCommunityPoolSpendResponseProtoMsg): _107.MsgCommunityPoolSpendResponse;
                toProto(message: _107.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCommunityPoolSpendResponse): _107.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.QueryParamsRequest;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                toAminoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                toProto(message: _106.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryParamsResponse;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                toAminoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                toProto(message: _106.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoRequest>): _106.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _106.QueryValidatorDistributionInfoRequestAmino): _106.QueryValidatorDistributionInfoRequest;
                toAmino(message: _106.QueryValidatorDistributionInfoRequest): _106.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorDistributionInfoRequestAminoMsg): _106.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _106.QueryValidatorDistributionInfoRequest): _106.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorDistributionInfoRequestProtoMsg): _106.QueryValidatorDistributionInfoRequest;
                toProto(message: _106.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorDistributionInfoRequest): _106.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoResponse>): _106.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _106.QueryValidatorDistributionInfoResponseAmino): _106.QueryValidatorDistributionInfoResponse;
                toAmino(message: _106.QueryValidatorDistributionInfoResponse): _106.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorDistributionInfoResponseAminoMsg): _106.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _106.QueryValidatorDistributionInfoResponse): _106.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorDistributionInfoResponseProtoMsg): _106.QueryValidatorDistributionInfoResponse;
                toProto(message: _106.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorDistributionInfoResponse): _106.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsRequest>): _106.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsRequestAmino): _106.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsRequestAminoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequestProtoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _106.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsResponse>): _106.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsResponseAmino): _106.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsResponseAminoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponseProtoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _106.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_106.QueryValidatorCommissionRequest>): _106.QueryValidatorCommissionRequest;
                fromAmino(object: _106.QueryValidatorCommissionRequestAmino): _106.QueryValidatorCommissionRequest;
                toAmino(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionRequestAminoMsg): _106.QueryValidatorCommissionRequest;
                toAminoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionRequestProtoMsg): _106.QueryValidatorCommissionRequest;
                toProto(message: _106.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_106.QueryValidatorCommissionResponse>): _106.QueryValidatorCommissionResponse;
                fromAmino(object: _106.QueryValidatorCommissionResponseAmino): _106.QueryValidatorCommissionResponse;
                toAmino(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionResponseAminoMsg): _106.QueryValidatorCommissionResponse;
                toAminoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionResponseProtoMsg): _106.QueryValidatorCommissionResponse;
                toProto(message: _106.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_106.QueryValidatorSlashesRequest>): _106.QueryValidatorSlashesRequest;
                fromAmino(object: _106.QueryValidatorSlashesRequestAmino): _106.QueryValidatorSlashesRequest;
                toAmino(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesRequestAminoMsg): _106.QueryValidatorSlashesRequest;
                toAminoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesRequestProtoMsg): _106.QueryValidatorSlashesRequest;
                toProto(message: _106.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_106.QueryValidatorSlashesResponse>): _106.QueryValidatorSlashesResponse;
                fromAmino(object: _106.QueryValidatorSlashesResponseAmino): _106.QueryValidatorSlashesResponse;
                toAmino(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesResponseAminoMsg): _106.QueryValidatorSlashesResponse;
                toAminoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesResponseProtoMsg): _106.QueryValidatorSlashesResponse;
                toProto(message: _106.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationRewardsRequest>): _106.QueryDelegationRewardsRequest;
                fromAmino(object: _106.QueryDelegationRewardsRequestAmino): _106.QueryDelegationRewardsRequest;
                toAmino(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsRequestAminoMsg): _106.QueryDelegationRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsRequestProtoMsg): _106.QueryDelegationRewardsRequest;
                toProto(message: _106.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationRewardsResponse>): _106.QueryDelegationRewardsResponse;
                fromAmino(object: _106.QueryDelegationRewardsResponseAmino): _106.QueryDelegationRewardsResponse;
                toAmino(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsResponseAminoMsg): _106.QueryDelegationRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsResponseProtoMsg): _106.QueryDelegationRewardsResponse;
                toProto(message: _106.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsRequest>): _106.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _106.QueryDelegationTotalRewardsRequestAmino): _106.QueryDelegationTotalRewardsRequest;
                toAmino(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsRequestAminoMsg): _106.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsRequestProtoMsg): _106.QueryDelegationTotalRewardsRequest;
                toProto(message: _106.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsResponse>): _106.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _106.QueryDelegationTotalRewardsResponseAmino): _106.QueryDelegationTotalRewardsResponse;
                toAmino(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsResponseAminoMsg): _106.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsResponseProtoMsg): _106.QueryDelegationTotalRewardsResponse;
                toProto(message: _106.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsRequest>): _106.QueryDelegatorValidatorsRequest;
                fromAmino(object: _106.QueryDelegatorValidatorsRequestAmino): _106.QueryDelegatorValidatorsRequest;
                toAmino(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsRequestAminoMsg): _106.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsRequestProtoMsg): _106.QueryDelegatorValidatorsRequest;
                toProto(message: _106.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsResponse>): _106.QueryDelegatorValidatorsResponse;
                fromAmino(object: _106.QueryDelegatorValidatorsResponseAmino): _106.QueryDelegatorValidatorsResponse;
                toAmino(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsResponseAminoMsg): _106.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsResponseProtoMsg): _106.QueryDelegatorValidatorsResponse;
                toProto(message: _106.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressRequest>): _106.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressRequestAmino): _106.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressRequestAminoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequestProtoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _106.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressResponse>): _106.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressResponseAmino): _106.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressResponseAminoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponseProtoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _106.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _106.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_106.QueryCommunityPoolRequest>): _106.QueryCommunityPoolRequest;
                fromAmino(_: _106.QueryCommunityPoolRequestAmino): _106.QueryCommunityPoolRequest;
                toAmino(_: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolRequestAminoMsg): _106.QueryCommunityPoolRequest;
                toAminoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolRequestProtoMsg): _106.QueryCommunityPoolRequest;
                toProto(message: _106.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _106.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_106.QueryCommunityPoolResponse>): _106.QueryCommunityPoolResponse;
                fromAmino(object: _106.QueryCommunityPoolResponseAmino): _106.QueryCommunityPoolResponse;
                toAmino(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolResponseAminoMsg): _106.QueryCommunityPoolResponse;
                toAminoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolResponseProtoMsg): _106.QueryCommunityPoolResponse;
                toProto(message: _106.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _105.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_105.DelegatorWithdrawInfo>): _105.DelegatorWithdrawInfo;
                fromAmino(object: _105.DelegatorWithdrawInfoAmino): _105.DelegatorWithdrawInfo;
                toAmino(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _105.DelegatorWithdrawInfoAminoMsg): _105.DelegatorWithdrawInfo;
                toAminoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _105.DelegatorWithdrawInfoProtoMsg): _105.DelegatorWithdrawInfo;
                toProto(message: _105.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewardsRecord>): _105.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _105.ValidatorOutstandingRewardsRecordAmino): _105.ValidatorOutstandingRewardsRecord;
                toAmino(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorOutstandingRewardsRecordAminoMsg): _105.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorOutstandingRewardsRecordProtoMsg): _105.ValidatorOutstandingRewardsRecord;
                toProto(message: _105.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommissionRecord>): _105.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _105.ValidatorAccumulatedCommissionRecordAmino): _105.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _105.ValidatorAccumulatedCommissionRecordAminoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorAccumulatedCommissionRecordProtoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toProto(message: _105.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewardsRecord>): _105.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _105.ValidatorHistoricalRewardsRecordAmino): _105.ValidatorHistoricalRewardsRecord;
                toAmino(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorHistoricalRewardsRecordAminoMsg): _105.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorHistoricalRewardsRecordProtoMsg): _105.ValidatorHistoricalRewardsRecord;
                toProto(message: _105.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorCurrentRewardsRecord>): _105.ValidatorCurrentRewardsRecord;
                fromAmino(object: _105.ValidatorCurrentRewardsRecordAmino): _105.ValidatorCurrentRewardsRecord;
                toAmino(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorCurrentRewardsRecordAminoMsg): _105.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorCurrentRewardsRecordProtoMsg): _105.ValidatorCurrentRewardsRecord;
                toProto(message: _105.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _105.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_105.DelegatorStartingInfoRecord>): _105.DelegatorStartingInfoRecord;
                fromAmino(object: _105.DelegatorStartingInfoRecordAmino): _105.DelegatorStartingInfoRecord;
                toAmino(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _105.DelegatorStartingInfoRecordAminoMsg): _105.DelegatorStartingInfoRecord;
                toAminoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _105.DelegatorStartingInfoRecordProtoMsg): _105.DelegatorStartingInfoRecord;
                toProto(message: _105.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_105.ValidatorSlashEventRecord>): _105.ValidatorSlashEventRecord;
                fromAmino(object: _105.ValidatorSlashEventRecordAmino): _105.ValidatorSlashEventRecord;
                toAmino(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _105.ValidatorSlashEventRecordAminoMsg): _105.ValidatorSlashEventRecord;
                toAminoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorSlashEventRecordProtoMsg): _105.ValidatorSlashEventRecord;
                toProto(message: _105.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _104.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Params;
                fromPartial(object: Partial<_104.Params>): _104.Params;
                fromAmino(object: _104.ParamsAmino): _104.Params;
                toAmino(message: _104.Params): _104.ParamsAmino;
                fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                toProto(message: _104.Params): Uint8Array;
                toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewards>): _104.ValidatorHistoricalRewards;
                fromAmino(object: _104.ValidatorHistoricalRewardsAmino): _104.ValidatorHistoricalRewards;
                toAmino(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _104.ValidatorHistoricalRewardsAminoMsg): _104.ValidatorHistoricalRewards;
                toAminoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorHistoricalRewardsProtoMsg): _104.ValidatorHistoricalRewards;
                toProto(message: _104.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorCurrentRewards;
                fromPartial(object: Partial<_104.ValidatorCurrentRewards>): _104.ValidatorCurrentRewards;
                fromAmino(object: _104.ValidatorCurrentRewardsAmino): _104.ValidatorCurrentRewards;
                toAmino(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _104.ValidatorCurrentRewardsAminoMsg): _104.ValidatorCurrentRewards;
                toAminoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorCurrentRewardsProtoMsg): _104.ValidatorCurrentRewards;
                toProto(message: _104.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _104.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommission>): _104.ValidatorAccumulatedCommission;
                fromAmino(object: _104.ValidatorAccumulatedCommissionAmino): _104.ValidatorAccumulatedCommission;
                toAmino(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _104.ValidatorAccumulatedCommissionAminoMsg): _104.ValidatorAccumulatedCommission;
                toAminoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _104.ValidatorAccumulatedCommissionProtoMsg): _104.ValidatorAccumulatedCommission;
                toProto(message: _104.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewards>): _104.ValidatorOutstandingRewards;
                fromAmino(object: _104.ValidatorOutstandingRewardsAmino): _104.ValidatorOutstandingRewards;
                toAmino(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _104.ValidatorOutstandingRewardsAminoMsg): _104.ValidatorOutstandingRewards;
                toAminoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorOutstandingRewardsProtoMsg): _104.ValidatorOutstandingRewards;
                toProto(message: _104.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSlashEvent;
                fromPartial(object: Partial<_104.ValidatorSlashEvent>): _104.ValidatorSlashEvent;
                fromAmino(object: _104.ValidatorSlashEventAmino): _104.ValidatorSlashEvent;
                toAmino(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventAminoMsg): _104.ValidatorSlashEvent;
                toAminoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventProtoMsg): _104.ValidatorSlashEvent;
                toProto(message: _104.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSlashEvents;
                fromPartial(object: Partial<_104.ValidatorSlashEvents>): _104.ValidatorSlashEvents;
                fromAmino(object: _104.ValidatorSlashEventsAmino): _104.ValidatorSlashEvents;
                toAmino(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventsAminoMsg): _104.ValidatorSlashEvents;
                toAminoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventsProtoMsg): _104.ValidatorSlashEvents;
                toProto(message: _104.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _104.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.FeePool;
                fromPartial(object: Partial<_104.FeePool>): _104.FeePool;
                fromAmino(object: _104.FeePoolAmino): _104.FeePool;
                toAmino(message: _104.FeePool): _104.FeePoolAmino;
                fromAminoMsg(object: _104.FeePoolAminoMsg): _104.FeePool;
                toAminoMsg(message: _104.FeePool): _104.FeePoolAminoMsg;
                fromProtoMsg(message: _104.FeePoolProtoMsg): _104.FeePool;
                toProto(message: _104.FeePool): Uint8Array;
                toProtoMsg(message: _104.FeePool): _104.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposal>): _104.CommunityPoolSpendProposal;
                fromAmino(object: _104.CommunityPoolSpendProposalAmino): _104.CommunityPoolSpendProposal;
                toAmino(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalAminoMsg): _104.CommunityPoolSpendProposal;
                toAminoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalProtoMsg): _104.CommunityPoolSpendProposal;
                toProto(message: _104.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _104.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegatorStartingInfo;
                fromPartial(object: Partial<_104.DelegatorStartingInfo>): _104.DelegatorStartingInfo;
                fromAmino(object: _104.DelegatorStartingInfoAmino): _104.DelegatorStartingInfo;
                toAmino(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _104.DelegatorStartingInfoAminoMsg): _104.DelegatorStartingInfo;
                toAminoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _104.DelegatorStartingInfoProtoMsg): _104.DelegatorStartingInfo;
                toProto(message: _104.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _104.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegationDelegatorReward;
                fromPartial(object: Partial<_104.DelegationDelegatorReward>): _104.DelegationDelegatorReward;
                fromAmino(object: _104.DelegationDelegatorRewardAmino): _104.DelegationDelegatorReward;
                toAmino(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _104.DelegationDelegatorRewardAminoMsg): _104.DelegationDelegatorReward;
                toAminoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _104.DelegationDelegatorRewardProtoMsg): _104.DelegationDelegatorReward;
                toProto(message: _104.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposalWithDeposit>): _104.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _104.CommunityPoolSpendProposalWithDepositAmino): _104.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalWithDepositAminoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalWithDepositProtoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _104.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _108.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _108.Module;
                    fromPartial(_: Partial<_108.Module>): _108.Module;
                    fromAmino(_: _108.ModuleAmino): _108.Module;
                    toAmino(_: _108.Module): _108.ModuleAmino;
                    fromAminoMsg(object: _108.ModuleAminoMsg): _108.Module;
                    toAminoMsg(message: _108.Module): _108.ModuleAminoMsg;
                    fromProtoMsg(message: _108.ModuleProtoMsg): _108.Module;
                    toProto(message: _108.Module): Uint8Array;
                    toProtoMsg(message: _108.Module): _108.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _111.QueryEvidenceRequest): Promise<_111.QueryEvidenceResponse>;
                allEvidence(request?: _111.QueryAllEvidenceRequest): Promise<_111.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
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
                    toAmino: (message: _112.MsgSubmitEvidence) => _112.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _112.MsgSubmitEvidenceAmino) => _112.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _112.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgSubmitEvidence;
                fromPartial(object: Partial<_112.MsgSubmitEvidence>): _112.MsgSubmitEvidence;
                fromAmino(object: _112.MsgSubmitEvidenceAmino): _112.MsgSubmitEvidence;
                toAmino(message: _112.MsgSubmitEvidence): _112.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _112.MsgSubmitEvidenceAminoMsg): _112.MsgSubmitEvidence;
                toAminoMsg(message: _112.MsgSubmitEvidence): _112.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _112.MsgSubmitEvidenceProtoMsg): _112.MsgSubmitEvidence;
                toProto(message: _112.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _112.MsgSubmitEvidence): _112.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _112.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_112.MsgSubmitEvidenceResponse>): _112.MsgSubmitEvidenceResponse;
                fromAmino(object: _112.MsgSubmitEvidenceResponseAmino): _112.MsgSubmitEvidenceResponse;
                toAmino(message: _112.MsgSubmitEvidenceResponse): _112.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _112.MsgSubmitEvidenceResponseAminoMsg): _112.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _112.MsgSubmitEvidenceResponse): _112.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _112.MsgSubmitEvidenceResponseProtoMsg): _112.MsgSubmitEvidenceResponse;
                toProto(message: _112.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _112.MsgSubmitEvidenceResponse): _112.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _111.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryEvidenceRequest;
                fromPartial(object: Partial<_111.QueryEvidenceRequest>): _111.QueryEvidenceRequest;
                fromAmino(object: _111.QueryEvidenceRequestAmino): _111.QueryEvidenceRequest;
                toAmino(message: _111.QueryEvidenceRequest): _111.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _111.QueryEvidenceRequestAminoMsg): _111.QueryEvidenceRequest;
                toAminoMsg(message: _111.QueryEvidenceRequest): _111.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _111.QueryEvidenceRequestProtoMsg): _111.QueryEvidenceRequest;
                toProto(message: _111.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _111.QueryEvidenceRequest): _111.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _111.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryEvidenceResponse;
                fromPartial(object: Partial<_111.QueryEvidenceResponse>): _111.QueryEvidenceResponse;
                fromAmino(object: _111.QueryEvidenceResponseAmino): _111.QueryEvidenceResponse;
                toAmino(message: _111.QueryEvidenceResponse): _111.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _111.QueryEvidenceResponseAminoMsg): _111.QueryEvidenceResponse;
                toAminoMsg(message: _111.QueryEvidenceResponse): _111.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _111.QueryEvidenceResponseProtoMsg): _111.QueryEvidenceResponse;
                toProto(message: _111.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _111.QueryEvidenceResponse): _111.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _111.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_111.QueryAllEvidenceRequest>): _111.QueryAllEvidenceRequest;
                fromAmino(object: _111.QueryAllEvidenceRequestAmino): _111.QueryAllEvidenceRequest;
                toAmino(message: _111.QueryAllEvidenceRequest): _111.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _111.QueryAllEvidenceRequestAminoMsg): _111.QueryAllEvidenceRequest;
                toAminoMsg(message: _111.QueryAllEvidenceRequest): _111.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAllEvidenceRequestProtoMsg): _111.QueryAllEvidenceRequest;
                toProto(message: _111.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAllEvidenceRequest): _111.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _111.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_111.QueryAllEvidenceResponse>): _111.QueryAllEvidenceResponse;
                fromAmino(object: _111.QueryAllEvidenceResponseAmino): _111.QueryAllEvidenceResponse;
                toAmino(message: _111.QueryAllEvidenceResponse): _111.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _111.QueryAllEvidenceResponseAminoMsg): _111.QueryAllEvidenceResponse;
                toAminoMsg(message: _111.QueryAllEvidenceResponse): _111.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAllEvidenceResponseProtoMsg): _111.QueryAllEvidenceResponse;
                toProto(message: _111.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAllEvidenceResponse): _111.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                toProto(message: _110.GenesisState): Uint8Array;
                toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _109.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Equivocation;
                fromPartial(object: Partial<_109.Equivocation>): _109.Equivocation;
                fromAmino(object: _109.EquivocationAmino): _109.Equivocation;
                toAmino(message: _109.Equivocation): _109.EquivocationAmino;
                fromAminoMsg(object: _109.EquivocationAminoMsg): _109.Equivocation;
                toAminoMsg(message: _109.Equivocation): _109.EquivocationAminoMsg;
                fromProtoMsg(message: _109.EquivocationProtoMsg): _109.Equivocation;
                toProto(message: _109.Equivocation): Uint8Array;
                toProtoMsg(message: _109.Equivocation): _109.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _113.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _113.Module;
                    fromPartial(_: Partial<_113.Module>): _113.Module;
                    fromAmino(_: _113.ModuleAmino): _113.Module;
                    toAmino(_: _113.Module): _113.ModuleAmino;
                    fromAminoMsg(object: _113.ModuleAminoMsg): _113.Module;
                    toAminoMsg(message: _113.Module): _113.ModuleAminoMsg;
                    fromProtoMsg(message: _113.ModuleProtoMsg): _113.Module;
                    toProto(message: _113.Module): Uint8Array;
                    toProtoMsg(message: _113.Module): _113.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _116.QueryAllowanceRequest): Promise<_116.QueryAllowanceResponse>;
                allowances(request: _116.QueryAllowancesRequest): Promise<_116.QueryAllowancesResponse>;
                allowancesByGranter(request: _116.QueryAllowancesByGranterRequest): Promise<_116.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
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
                    toAmino: (message: _117.MsgGrantAllowance) => _117.MsgGrantAllowanceAmino;
                    fromAmino: (object: _117.MsgGrantAllowanceAmino) => _117.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _117.MsgRevokeAllowance) => _117.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _117.MsgRevokeAllowanceAmino) => _117.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _117.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgGrantAllowance;
                fromPartial(object: Partial<_117.MsgGrantAllowance>): _117.MsgGrantAllowance;
                fromAmino(object: _117.MsgGrantAllowanceAmino): _117.MsgGrantAllowance;
                toAmino(message: _117.MsgGrantAllowance): _117.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _117.MsgGrantAllowanceAminoMsg): _117.MsgGrantAllowance;
                toAminoMsg(message: _117.MsgGrantAllowance): _117.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _117.MsgGrantAllowanceProtoMsg): _117.MsgGrantAllowance;
                toProto(message: _117.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _117.MsgGrantAllowance): _117.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _117.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_117.MsgGrantAllowanceResponse>): _117.MsgGrantAllowanceResponse;
                fromAmino(_: _117.MsgGrantAllowanceResponseAmino): _117.MsgGrantAllowanceResponse;
                toAmino(_: _117.MsgGrantAllowanceResponse): _117.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _117.MsgGrantAllowanceResponseAminoMsg): _117.MsgGrantAllowanceResponse;
                toAminoMsg(message: _117.MsgGrantAllowanceResponse): _117.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _117.MsgGrantAllowanceResponseProtoMsg): _117.MsgGrantAllowanceResponse;
                toProto(message: _117.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _117.MsgGrantAllowanceResponse): _117.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _117.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgRevokeAllowance;
                fromPartial(object: Partial<_117.MsgRevokeAllowance>): _117.MsgRevokeAllowance;
                fromAmino(object: _117.MsgRevokeAllowanceAmino): _117.MsgRevokeAllowance;
                toAmino(message: _117.MsgRevokeAllowance): _117.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _117.MsgRevokeAllowanceAminoMsg): _117.MsgRevokeAllowance;
                toAminoMsg(message: _117.MsgRevokeAllowance): _117.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _117.MsgRevokeAllowanceProtoMsg): _117.MsgRevokeAllowance;
                toProto(message: _117.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _117.MsgRevokeAllowance): _117.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _117.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_117.MsgRevokeAllowanceResponse>): _117.MsgRevokeAllowanceResponse;
                fromAmino(_: _117.MsgRevokeAllowanceResponseAmino): _117.MsgRevokeAllowanceResponse;
                toAmino(_: _117.MsgRevokeAllowanceResponse): _117.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _117.MsgRevokeAllowanceResponseAminoMsg): _117.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _117.MsgRevokeAllowanceResponse): _117.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _117.MsgRevokeAllowanceResponseProtoMsg): _117.MsgRevokeAllowanceResponse;
                toProto(message: _117.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _117.MsgRevokeAllowanceResponse): _117.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _114.BasicAllowance | _114.PeriodicAllowance | _114.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _116.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowanceRequest;
                fromPartial(object: Partial<_116.QueryAllowanceRequest>): _116.QueryAllowanceRequest;
                fromAmino(object: _116.QueryAllowanceRequestAmino): _116.QueryAllowanceRequest;
                toAmino(message: _116.QueryAllowanceRequest): _116.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _116.QueryAllowanceRequestAminoMsg): _116.QueryAllowanceRequest;
                toAminoMsg(message: _116.QueryAllowanceRequest): _116.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _116.QueryAllowanceRequestProtoMsg): _116.QueryAllowanceRequest;
                toProto(message: _116.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _116.QueryAllowanceRequest): _116.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _116.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowanceResponse;
                fromPartial(object: Partial<_116.QueryAllowanceResponse>): _116.QueryAllowanceResponse;
                fromAmino(object: _116.QueryAllowanceResponseAmino): _116.QueryAllowanceResponse;
                toAmino(message: _116.QueryAllowanceResponse): _116.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _116.QueryAllowanceResponseAminoMsg): _116.QueryAllowanceResponse;
                toAminoMsg(message: _116.QueryAllowanceResponse): _116.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _116.QueryAllowanceResponseProtoMsg): _116.QueryAllowanceResponse;
                toProto(message: _116.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _116.QueryAllowanceResponse): _116.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _116.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowancesRequest;
                fromPartial(object: Partial<_116.QueryAllowancesRequest>): _116.QueryAllowancesRequest;
                fromAmino(object: _116.QueryAllowancesRequestAmino): _116.QueryAllowancesRequest;
                toAmino(message: _116.QueryAllowancesRequest): _116.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _116.QueryAllowancesRequestAminoMsg): _116.QueryAllowancesRequest;
                toAminoMsg(message: _116.QueryAllowancesRequest): _116.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _116.QueryAllowancesRequestProtoMsg): _116.QueryAllowancesRequest;
                toProto(message: _116.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _116.QueryAllowancesRequest): _116.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _116.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowancesResponse;
                fromPartial(object: Partial<_116.QueryAllowancesResponse>): _116.QueryAllowancesResponse;
                fromAmino(object: _116.QueryAllowancesResponseAmino): _116.QueryAllowancesResponse;
                toAmino(message: _116.QueryAllowancesResponse): _116.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _116.QueryAllowancesResponseAminoMsg): _116.QueryAllowancesResponse;
                toAminoMsg(message: _116.QueryAllowancesResponse): _116.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _116.QueryAllowancesResponseProtoMsg): _116.QueryAllowancesResponse;
                toProto(message: _116.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _116.QueryAllowancesResponse): _116.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _116.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_116.QueryAllowancesByGranterRequest>): _116.QueryAllowancesByGranterRequest;
                fromAmino(object: _116.QueryAllowancesByGranterRequestAmino): _116.QueryAllowancesByGranterRequest;
                toAmino(message: _116.QueryAllowancesByGranterRequest): _116.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _116.QueryAllowancesByGranterRequestAminoMsg): _116.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _116.QueryAllowancesByGranterRequest): _116.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _116.QueryAllowancesByGranterRequestProtoMsg): _116.QueryAllowancesByGranterRequest;
                toProto(message: _116.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _116.QueryAllowancesByGranterRequest): _116.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _116.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_116.QueryAllowancesByGranterResponse>): _116.QueryAllowancesByGranterResponse;
                fromAmino(object: _116.QueryAllowancesByGranterResponseAmino): _116.QueryAllowancesByGranterResponse;
                toAmino(message: _116.QueryAllowancesByGranterResponse): _116.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _116.QueryAllowancesByGranterResponseAminoMsg): _116.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _116.QueryAllowancesByGranterResponse): _116.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _116.QueryAllowancesByGranterResponseProtoMsg): _116.QueryAllowancesByGranterResponse;
                toProto(message: _116.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _116.QueryAllowancesByGranterResponse): _116.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _115.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.GenesisState;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                toProto(message: _115.GenesisState): Uint8Array;
                toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _114.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.BasicAllowance;
                fromPartial(object: Partial<_114.BasicAllowance>): _114.BasicAllowance;
                fromAmino(object: _114.BasicAllowanceAmino): _114.BasicAllowance;
                toAmino(message: _114.BasicAllowance): _114.BasicAllowanceAmino;
                fromAminoMsg(object: _114.BasicAllowanceAminoMsg): _114.BasicAllowance;
                toAminoMsg(message: _114.BasicAllowance): _114.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _114.BasicAllowanceProtoMsg): _114.BasicAllowance;
                toProto(message: _114.BasicAllowance): Uint8Array;
                toProtoMsg(message: _114.BasicAllowance): _114.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _114.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.PeriodicAllowance;
                fromPartial(object: Partial<_114.PeriodicAllowance>): _114.PeriodicAllowance;
                fromAmino(object: _114.PeriodicAllowanceAmino): _114.PeriodicAllowance;
                toAmino(message: _114.PeriodicAllowance): _114.PeriodicAllowanceAmino;
                fromAminoMsg(object: _114.PeriodicAllowanceAminoMsg): _114.PeriodicAllowance;
                toAminoMsg(message: _114.PeriodicAllowance): _114.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _114.PeriodicAllowanceProtoMsg): _114.PeriodicAllowance;
                toProto(message: _114.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _114.PeriodicAllowance): _114.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _114.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.AllowedMsgAllowance;
                fromPartial(object: Partial<_114.AllowedMsgAllowance>): _114.AllowedMsgAllowance;
                fromAmino(object: _114.AllowedMsgAllowanceAmino): _114.AllowedMsgAllowance;
                toAmino(message: _114.AllowedMsgAllowance): _114.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _114.AllowedMsgAllowanceAminoMsg): _114.AllowedMsgAllowance;
                toAminoMsg(message: _114.AllowedMsgAllowance): _114.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _114.AllowedMsgAllowanceProtoMsg): _114.AllowedMsgAllowance;
                toProto(message: _114.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _114.AllowedMsgAllowance): _114.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _114.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Grant;
                fromPartial(object: Partial<_114.Grant>): _114.Grant;
                fromAmino(object: _114.GrantAmino): _114.Grant;
                toAmino(message: _114.Grant): _114.GrantAmino;
                fromAminoMsg(object: _114.GrantAminoMsg): _114.Grant;
                toAminoMsg(message: _114.Grant): _114.GrantAminoMsg;
                fromProtoMsg(message: _114.GrantProtoMsg): _114.Grant;
                toProto(message: _114.Grant): Uint8Array;
                toProtoMsg(message: _114.Grant): _114.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _118.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.Module;
                    fromPartial(_: Partial<_118.Module>): _118.Module;
                    fromAmino(_: _118.ModuleAmino): _118.Module;
                    toAmino(_: _118.Module): _118.ModuleAmino;
                    fromAminoMsg(object: _118.ModuleAminoMsg): _118.Module;
                    toAminoMsg(message: _118.Module): _118.ModuleAminoMsg;
                    fromProtoMsg(message: _118.ModuleProtoMsg): _118.Module;
                    toProto(message: _118.Module): Uint8Array;
                    toProtoMsg(message: _118.Module): _118.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _119.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.GenesisState;
                fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
                fromAmino(object: _119.GenesisStateAmino): _119.GenesisState;
                toAmino(message: _119.GenesisState): _119.GenesisStateAmino;
                fromAminoMsg(object: _119.GenesisStateAminoMsg): _119.GenesisState;
                toAminoMsg(message: _119.GenesisState): _119.GenesisStateAminoMsg;
                fromProtoMsg(message: _119.GenesisStateProtoMsg): _119.GenesisState;
                toProto(message: _119.GenesisState): Uint8Array;
                toProtoMsg(message: _119.GenesisState): _119.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _120.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.Module;
                    fromPartial(object: Partial<_120.Module>): _120.Module;
                    fromAmino(object: _120.ModuleAmino): _120.Module;
                    toAmino(message: _120.Module): _120.ModuleAmino;
                    fromAminoMsg(object: _120.ModuleAminoMsg): _120.Module;
                    toAminoMsg(message: _120.Module): _120.ModuleAminoMsg;
                    fromProtoMsg(message: _120.ModuleProtoMsg): _120.Module;
                    toProto(message: _120.Module): Uint8Array;
                    toProtoMsg(message: _120.Module): _120.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
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
            LCDQueryClient: typeof _287.LCDQueryClient;
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
                    toAmino: (message: _124.MsgSubmitProposal) => _124.MsgSubmitProposalAmino;
                    fromAmino: (object: _124.MsgSubmitProposalAmino) => _124.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _124.MsgExecLegacyContent) => _124.MsgExecLegacyContentAmino;
                    fromAmino: (object: _124.MsgExecLegacyContentAmino) => _124.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _124.MsgVote) => _124.MsgVoteAmino;
                    fromAmino: (object: _124.MsgVoteAmino) => _124.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _124.MsgVoteWeighted) => _124.MsgVoteWeightedAmino;
                    fromAmino: (object: _124.MsgVoteWeightedAmino) => _124.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _124.MsgDeposit) => _124.MsgDepositAmino;
                    fromAmino: (object: _124.MsgDepositAmino) => _124.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _124.MsgUpdateParams) => _124.MsgUpdateParamsAmino;
                    fromAmino: (object: _124.MsgUpdateParamsAmino) => _124.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _124.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgSubmitProposal;
                fromPartial(object: Partial<_124.MsgSubmitProposal>): _124.MsgSubmitProposal;
                fromAmino(object: _124.MsgSubmitProposalAmino): _124.MsgSubmitProposal;
                toAmino(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalAmino;
                fromAminoMsg(object: _124.MsgSubmitProposalAminoMsg): _124.MsgSubmitProposal;
                toAminoMsg(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _124.MsgSubmitProposalProtoMsg): _124.MsgSubmitProposal;
                toProto(message: _124.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _124.MsgSubmitProposal): _124.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _124.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_124.MsgSubmitProposalResponse>): _124.MsgSubmitProposalResponse;
                fromAmino(object: _124.MsgSubmitProposalResponseAmino): _124.MsgSubmitProposalResponse;
                toAmino(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _124.MsgSubmitProposalResponseAminoMsg): _124.MsgSubmitProposalResponse;
                toAminoMsg(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _124.MsgSubmitProposalResponseProtoMsg): _124.MsgSubmitProposalResponse;
                toProto(message: _124.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _124.MsgSubmitProposalResponse): _124.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _124.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgExecLegacyContent;
                fromPartial(object: Partial<_124.MsgExecLegacyContent>): _124.MsgExecLegacyContent;
                fromAmino(object: _124.MsgExecLegacyContentAmino): _124.MsgExecLegacyContent;
                toAmino(message: _124.MsgExecLegacyContent): _124.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _124.MsgExecLegacyContentAminoMsg): _124.MsgExecLegacyContent;
                toAminoMsg(message: _124.MsgExecLegacyContent): _124.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _124.MsgExecLegacyContentProtoMsg): _124.MsgExecLegacyContent;
                toProto(message: _124.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _124.MsgExecLegacyContent): _124.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _124.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_124.MsgExecLegacyContentResponse>): _124.MsgExecLegacyContentResponse;
                fromAmino(_: _124.MsgExecLegacyContentResponseAmino): _124.MsgExecLegacyContentResponse;
                toAmino(_: _124.MsgExecLegacyContentResponse): _124.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _124.MsgExecLegacyContentResponseAminoMsg): _124.MsgExecLegacyContentResponse;
                toAminoMsg(message: _124.MsgExecLegacyContentResponse): _124.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _124.MsgExecLegacyContentResponseProtoMsg): _124.MsgExecLegacyContentResponse;
                toProto(message: _124.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _124.MsgExecLegacyContentResponse): _124.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _124.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgVote;
                fromPartial(object: Partial<_124.MsgVote>): _124.MsgVote;
                fromAmino(object: _124.MsgVoteAmino): _124.MsgVote;
                toAmino(message: _124.MsgVote): _124.MsgVoteAmino;
                fromAminoMsg(object: _124.MsgVoteAminoMsg): _124.MsgVote;
                toAminoMsg(message: _124.MsgVote): _124.MsgVoteAminoMsg;
                fromProtoMsg(message: _124.MsgVoteProtoMsg): _124.MsgVote;
                toProto(message: _124.MsgVote): Uint8Array;
                toProtoMsg(message: _124.MsgVote): _124.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _124.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgVoteResponse;
                fromPartial(_: Partial<_124.MsgVoteResponse>): _124.MsgVoteResponse;
                fromAmino(_: _124.MsgVoteResponseAmino): _124.MsgVoteResponse;
                toAmino(_: _124.MsgVoteResponse): _124.MsgVoteResponseAmino;
                fromAminoMsg(object: _124.MsgVoteResponseAminoMsg): _124.MsgVoteResponse;
                toAminoMsg(message: _124.MsgVoteResponse): _124.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _124.MsgVoteResponseProtoMsg): _124.MsgVoteResponse;
                toProto(message: _124.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _124.MsgVoteResponse): _124.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _124.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgVoteWeighted;
                fromPartial(object: Partial<_124.MsgVoteWeighted>): _124.MsgVoteWeighted;
                fromAmino(object: _124.MsgVoteWeightedAmino): _124.MsgVoteWeighted;
                toAmino(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedAmino;
                fromAminoMsg(object: _124.MsgVoteWeightedAminoMsg): _124.MsgVoteWeighted;
                toAminoMsg(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _124.MsgVoteWeightedProtoMsg): _124.MsgVoteWeighted;
                toProto(message: _124.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _124.MsgVoteWeighted): _124.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _124.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_124.MsgVoteWeightedResponse>): _124.MsgVoteWeightedResponse;
                fromAmino(_: _124.MsgVoteWeightedResponseAmino): _124.MsgVoteWeightedResponse;
                toAmino(_: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _124.MsgVoteWeightedResponseAminoMsg): _124.MsgVoteWeightedResponse;
                toAminoMsg(message: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _124.MsgVoteWeightedResponseProtoMsg): _124.MsgVoteWeightedResponse;
                toProto(message: _124.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _124.MsgVoteWeightedResponse): _124.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _124.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgDeposit;
                fromPartial(object: Partial<_124.MsgDeposit>): _124.MsgDeposit;
                fromAmino(object: _124.MsgDepositAmino): _124.MsgDeposit;
                toAmino(message: _124.MsgDeposit): _124.MsgDepositAmino;
                fromAminoMsg(object: _124.MsgDepositAminoMsg): _124.MsgDeposit;
                toAminoMsg(message: _124.MsgDeposit): _124.MsgDepositAminoMsg;
                fromProtoMsg(message: _124.MsgDepositProtoMsg): _124.MsgDeposit;
                toProto(message: _124.MsgDeposit): Uint8Array;
                toProtoMsg(message: _124.MsgDeposit): _124.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _124.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgDepositResponse;
                fromPartial(_: Partial<_124.MsgDepositResponse>): _124.MsgDepositResponse;
                fromAmino(_: _124.MsgDepositResponseAmino): _124.MsgDepositResponse;
                toAmino(_: _124.MsgDepositResponse): _124.MsgDepositResponseAmino;
                fromAminoMsg(object: _124.MsgDepositResponseAminoMsg): _124.MsgDepositResponse;
                toAminoMsg(message: _124.MsgDepositResponse): _124.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _124.MsgDepositResponseProtoMsg): _124.MsgDepositResponse;
                toProto(message: _124.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _124.MsgDepositResponse): _124.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _124.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgUpdateParams;
                fromPartial(object: Partial<_124.MsgUpdateParams>): _124.MsgUpdateParams;
                fromAmino(object: _124.MsgUpdateParamsAmino): _124.MsgUpdateParams;
                toAmino(message: _124.MsgUpdateParams): _124.MsgUpdateParamsAmino;
                fromAminoMsg(object: _124.MsgUpdateParamsAminoMsg): _124.MsgUpdateParams;
                toAminoMsg(message: _124.MsgUpdateParams): _124.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _124.MsgUpdateParamsProtoMsg): _124.MsgUpdateParams;
                toProto(message: _124.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _124.MsgUpdateParams): _124.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _124.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_124.MsgUpdateParamsResponse>): _124.MsgUpdateParamsResponse;
                fromAmino(_: _124.MsgUpdateParamsResponseAmino): _124.MsgUpdateParamsResponse;
                toAmino(_: _124.MsgUpdateParamsResponse): _124.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _124.MsgUpdateParamsResponseAminoMsg): _124.MsgUpdateParamsResponse;
                toAminoMsg(message: _124.MsgUpdateParamsResponse): _124.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _124.MsgUpdateParamsResponseProtoMsg): _124.MsgUpdateParamsResponse;
                toProto(message: _124.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _124.MsgUpdateParamsResponse): _124.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => _104.CommunityPoolSpendProposal | _104.CommunityPoolSpendProposalWithDeposit | import("../injective/exchange/v1beta1/tx").SpotMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").BatchExchangeModificationProposal | import("../injective/exchange/v1beta1/tx").DerivativeMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").SpotMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").PerpetualMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").ExpiryFuturesMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").TradingRewardCampaignUpdateProposal | import("../injective/exchange/v1beta1/tx").BinaryOptionsMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").BinaryOptionsMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").UpdateDenomDecimalsProposal | import("../injective/exchange/v1beta1/tx").MarketForcedSettlementProposal | import("../injective/exchange/v1beta1/tx").TradingRewardCampaignLaunchProposal | import("../injective/exchange/v1beta1/tx").TradingRewardPendingPointsUpdateProposal | import("../injective/exchange/v1beta1/tx").FeeDiscountProposal | import("../injective/exchange/v1beta1/tx").BatchCommunityPoolSpendProposal | import("../injective/exchange/v1beta1/tx").AtomicMarketOrderFeeMultiplierScheduleProposal | import("../injective/ocr/v1beta1/ocr").SetConfigProposal | import("../injective/ocr/v1beta1/ocr").SetBatchConfigProposal | import("../injective/oracle/v1beta1/proposal").GrantBandOraclePrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokeBandOraclePrivilegeProposal | import("../injective/oracle/v1beta1/proposal").GrantPriceFeederPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").GrantProviderPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokeProviderPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokePriceFeederPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").AuthorizeBandOracleRequestProposal | import("../injective/oracle/v1beta1/proposal").UpdateBandOracleRequestProposal | import("../injective/oracle/v1beta1/proposal").EnableBandIBCProposal | import("../google/protobuf/any").Any | import("../injective/peggy/v1/proposal").BlacklistEthereumAddressesProposal | import("../injective/peggy/v1/proposal").RevokeEthereumBlacklistProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../injective/wasmx/v1/proposal").ContractRegistrationRequestProposal | import("../injective/wasmx/v1/proposal").ContractRegistrationRequest | import("../injective/wasmx/v1/proposal").BatchContractRegistrationRequestProposal | import("../injective/wasmx/v1/proposal").BatchContractDeregistrationProposal | import("../injective/wasmx/v1/proposal").BatchStoreCodeProposal | _152.ParameterChangeProposal | _174.SoftwareUpgradeProposal | _174.CancelSoftwareUpgradeProposal | _126.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _123.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalRequest;
                fromPartial(object: Partial<_123.QueryProposalRequest>): _123.QueryProposalRequest;
                fromAmino(object: _123.QueryProposalRequestAmino): _123.QueryProposalRequest;
                toAmino(message: _123.QueryProposalRequest): _123.QueryProposalRequestAmino;
                fromAminoMsg(object: _123.QueryProposalRequestAminoMsg): _123.QueryProposalRequest;
                toAminoMsg(message: _123.QueryProposalRequest): _123.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _123.QueryProposalRequestProtoMsg): _123.QueryProposalRequest;
                toProto(message: _123.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _123.QueryProposalRequest): _123.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _123.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalResponse;
                fromPartial(object: Partial<_123.QueryProposalResponse>): _123.QueryProposalResponse;
                fromAmino(object: _123.QueryProposalResponseAmino): _123.QueryProposalResponse;
                toAmino(message: _123.QueryProposalResponse): _123.QueryProposalResponseAmino;
                fromAminoMsg(object: _123.QueryProposalResponseAminoMsg): _123.QueryProposalResponse;
                toAminoMsg(message: _123.QueryProposalResponse): _123.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _123.QueryProposalResponseProtoMsg): _123.QueryProposalResponse;
                toProto(message: _123.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _123.QueryProposalResponse): _123.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _123.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalsRequest;
                fromPartial(object: Partial<_123.QueryProposalsRequest>): _123.QueryProposalsRequest;
                fromAmino(object: _123.QueryProposalsRequestAmino): _123.QueryProposalsRequest;
                toAmino(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestAmino;
                fromAminoMsg(object: _123.QueryProposalsRequestAminoMsg): _123.QueryProposalsRequest;
                toAminoMsg(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryProposalsRequestProtoMsg): _123.QueryProposalsRequest;
                toProto(message: _123.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryProposalsRequest): _123.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _123.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryProposalsResponse;
                fromPartial(object: Partial<_123.QueryProposalsResponse>): _123.QueryProposalsResponse;
                fromAmino(object: _123.QueryProposalsResponseAmino): _123.QueryProposalsResponse;
                toAmino(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseAmino;
                fromAminoMsg(object: _123.QueryProposalsResponseAminoMsg): _123.QueryProposalsResponse;
                toAminoMsg(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryProposalsResponseProtoMsg): _123.QueryProposalsResponse;
                toProto(message: _123.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryProposalsResponse): _123.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _123.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVoteRequest;
                fromPartial(object: Partial<_123.QueryVoteRequest>): _123.QueryVoteRequest;
                fromAmino(object: _123.QueryVoteRequestAmino): _123.QueryVoteRequest;
                toAmino(message: _123.QueryVoteRequest): _123.QueryVoteRequestAmino;
                fromAminoMsg(object: _123.QueryVoteRequestAminoMsg): _123.QueryVoteRequest;
                toAminoMsg(message: _123.QueryVoteRequest): _123.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _123.QueryVoteRequestProtoMsg): _123.QueryVoteRequest;
                toProto(message: _123.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _123.QueryVoteRequest): _123.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _123.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVoteResponse;
                fromPartial(object: Partial<_123.QueryVoteResponse>): _123.QueryVoteResponse;
                fromAmino(object: _123.QueryVoteResponseAmino): _123.QueryVoteResponse;
                toAmino(message: _123.QueryVoteResponse): _123.QueryVoteResponseAmino;
                fromAminoMsg(object: _123.QueryVoteResponseAminoMsg): _123.QueryVoteResponse;
                toAminoMsg(message: _123.QueryVoteResponse): _123.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _123.QueryVoteResponseProtoMsg): _123.QueryVoteResponse;
                toProto(message: _123.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _123.QueryVoteResponse): _123.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _123.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVotesRequest;
                fromPartial(object: Partial<_123.QueryVotesRequest>): _123.QueryVotesRequest;
                fromAmino(object: _123.QueryVotesRequestAmino): _123.QueryVotesRequest;
                toAmino(message: _123.QueryVotesRequest): _123.QueryVotesRequestAmino;
                fromAminoMsg(object: _123.QueryVotesRequestAminoMsg): _123.QueryVotesRequest;
                toAminoMsg(message: _123.QueryVotesRequest): _123.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _123.QueryVotesRequestProtoMsg): _123.QueryVotesRequest;
                toProto(message: _123.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _123.QueryVotesRequest): _123.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _123.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryVotesResponse;
                fromPartial(object: Partial<_123.QueryVotesResponse>): _123.QueryVotesResponse;
                fromAmino(object: _123.QueryVotesResponseAmino): _123.QueryVotesResponse;
                toAmino(message: _123.QueryVotesResponse): _123.QueryVotesResponseAmino;
                fromAminoMsg(object: _123.QueryVotesResponseAminoMsg): _123.QueryVotesResponse;
                toAminoMsg(message: _123.QueryVotesResponse): _123.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _123.QueryVotesResponseProtoMsg): _123.QueryVotesResponse;
                toProto(message: _123.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _123.QueryVotesResponse): _123.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _123.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryParamsRequest;
                fromPartial(object: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
                fromAmino(object: _123.QueryParamsRequestAmino): _123.QueryParamsRequest;
                toAmino(message: _123.QueryParamsRequest): _123.QueryParamsRequestAmino;
                fromAminoMsg(object: _123.QueryParamsRequestAminoMsg): _123.QueryParamsRequest;
                toAminoMsg(message: _123.QueryParamsRequest): _123.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryParamsRequestProtoMsg): _123.QueryParamsRequest;
                toProto(message: _123.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryParamsRequest): _123.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _123.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryParamsResponse;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
                fromAmino(object: _123.QueryParamsResponseAmino): _123.QueryParamsResponse;
                toAmino(message: _123.QueryParamsResponse): _123.QueryParamsResponseAmino;
                fromAminoMsg(object: _123.QueryParamsResponseAminoMsg): _123.QueryParamsResponse;
                toAminoMsg(message: _123.QueryParamsResponse): _123.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryParamsResponseProtoMsg): _123.QueryParamsResponse;
                toProto(message: _123.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryParamsResponse): _123.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _123.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositRequest;
                fromPartial(object: Partial<_123.QueryDepositRequest>): _123.QueryDepositRequest;
                fromAmino(object: _123.QueryDepositRequestAmino): _123.QueryDepositRequest;
                toAmino(message: _123.QueryDepositRequest): _123.QueryDepositRequestAmino;
                fromAminoMsg(object: _123.QueryDepositRequestAminoMsg): _123.QueryDepositRequest;
                toAminoMsg(message: _123.QueryDepositRequest): _123.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _123.QueryDepositRequestProtoMsg): _123.QueryDepositRequest;
                toProto(message: _123.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _123.QueryDepositRequest): _123.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _123.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositResponse;
                fromPartial(object: Partial<_123.QueryDepositResponse>): _123.QueryDepositResponse;
                fromAmino(object: _123.QueryDepositResponseAmino): _123.QueryDepositResponse;
                toAmino(message: _123.QueryDepositResponse): _123.QueryDepositResponseAmino;
                fromAminoMsg(object: _123.QueryDepositResponseAminoMsg): _123.QueryDepositResponse;
                toAminoMsg(message: _123.QueryDepositResponse): _123.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _123.QueryDepositResponseProtoMsg): _123.QueryDepositResponse;
                toProto(message: _123.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _123.QueryDepositResponse): _123.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _123.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositsRequest;
                fromPartial(object: Partial<_123.QueryDepositsRequest>): _123.QueryDepositsRequest;
                fromAmino(object: _123.QueryDepositsRequestAmino): _123.QueryDepositsRequest;
                toAmino(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestAmino;
                fromAminoMsg(object: _123.QueryDepositsRequestAminoMsg): _123.QueryDepositsRequest;
                toAminoMsg(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryDepositsRequestProtoMsg): _123.QueryDepositsRequest;
                toProto(message: _123.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryDepositsRequest): _123.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _123.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryDepositsResponse;
                fromPartial(object: Partial<_123.QueryDepositsResponse>): _123.QueryDepositsResponse;
                fromAmino(object: _123.QueryDepositsResponseAmino): _123.QueryDepositsResponse;
                toAmino(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseAmino;
                fromAminoMsg(object: _123.QueryDepositsResponseAminoMsg): _123.QueryDepositsResponse;
                toAminoMsg(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryDepositsResponseProtoMsg): _123.QueryDepositsResponse;
                toProto(message: _123.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryDepositsResponse): _123.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _123.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryTallyResultRequest;
                fromPartial(object: Partial<_123.QueryTallyResultRequest>): _123.QueryTallyResultRequest;
                fromAmino(object: _123.QueryTallyResultRequestAmino): _123.QueryTallyResultRequest;
                toAmino(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _123.QueryTallyResultRequestAminoMsg): _123.QueryTallyResultRequest;
                toAminoMsg(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _123.QueryTallyResultRequestProtoMsg): _123.QueryTallyResultRequest;
                toProto(message: _123.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _123.QueryTallyResultRequest): _123.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _123.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryTallyResultResponse;
                fromPartial(object: Partial<_123.QueryTallyResultResponse>): _123.QueryTallyResultResponse;
                fromAmino(object: _123.QueryTallyResultResponseAmino): _123.QueryTallyResultResponse;
                toAmino(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _123.QueryTallyResultResponseAminoMsg): _123.QueryTallyResultResponse;
                toAminoMsg(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _123.QueryTallyResultResponseProtoMsg): _123.QueryTallyResultResponse;
                toProto(message: _123.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _123.QueryTallyResultResponse): _123.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _122.VoteOption;
            voteOptionToJSON(object: _122.VoteOption): string;
            proposalStatusFromJSON(object: any): _122.ProposalStatus;
            proposalStatusToJSON(object: _122.ProposalStatus): string;
            VoteOption: typeof _122.VoteOption;
            VoteOptionSDKType: typeof _122.VoteOption;
            VoteOptionAmino: typeof _122.VoteOption;
            ProposalStatus: typeof _122.ProposalStatus;
            ProposalStatusSDKType: typeof _122.ProposalStatus;
            ProposalStatusAmino: typeof _122.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _122.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.WeightedVoteOption;
                fromPartial(object: Partial<_122.WeightedVoteOption>): _122.WeightedVoteOption;
                fromAmino(object: _122.WeightedVoteOptionAmino): _122.WeightedVoteOption;
                toAmino(message: _122.WeightedVoteOption): _122.WeightedVoteOptionAmino;
                fromAminoMsg(object: _122.WeightedVoteOptionAminoMsg): _122.WeightedVoteOption;
                toAminoMsg(message: _122.WeightedVoteOption): _122.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _122.WeightedVoteOptionProtoMsg): _122.WeightedVoteOption;
                toProto(message: _122.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _122.WeightedVoteOption): _122.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _122.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Deposit;
                fromPartial(object: Partial<_122.Deposit>): _122.Deposit;
                fromAmino(object: _122.DepositAmino): _122.Deposit;
                toAmino(message: _122.Deposit): _122.DepositAmino;
                fromAminoMsg(object: _122.DepositAminoMsg): _122.Deposit;
                toAminoMsg(message: _122.Deposit): _122.DepositAminoMsg;
                fromProtoMsg(message: _122.DepositProtoMsg): _122.Deposit;
                toProto(message: _122.Deposit): Uint8Array;
                toProtoMsg(message: _122.Deposit): _122.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _122.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Proposal;
                fromPartial(object: Partial<_122.Proposal>): _122.Proposal;
                fromAmino(object: _122.ProposalAmino): _122.Proposal;
                toAmino(message: _122.Proposal): _122.ProposalAmino;
                fromAminoMsg(object: _122.ProposalAminoMsg): _122.Proposal;
                toAminoMsg(message: _122.Proposal): _122.ProposalAminoMsg;
                fromProtoMsg(message: _122.ProposalProtoMsg): _122.Proposal;
                toProto(message: _122.Proposal): Uint8Array;
                toProtoMsg(message: _122.Proposal): _122.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _122.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TallyResult;
                fromPartial(object: Partial<_122.TallyResult>): _122.TallyResult;
                fromAmino(object: _122.TallyResultAmino): _122.TallyResult;
                toAmino(message: _122.TallyResult): _122.TallyResultAmino;
                fromAminoMsg(object: _122.TallyResultAminoMsg): _122.TallyResult;
                toAminoMsg(message: _122.TallyResult): _122.TallyResultAminoMsg;
                fromProtoMsg(message: _122.TallyResultProtoMsg): _122.TallyResult;
                toProto(message: _122.TallyResult): Uint8Array;
                toProtoMsg(message: _122.TallyResult): _122.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _122.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Vote;
                fromPartial(object: Partial<_122.Vote>): _122.Vote;
                fromAmino(object: _122.VoteAmino): _122.Vote;
                toAmino(message: _122.Vote): _122.VoteAmino;
                fromAminoMsg(object: _122.VoteAminoMsg): _122.Vote;
                toAminoMsg(message: _122.Vote): _122.VoteAminoMsg;
                fromProtoMsg(message: _122.VoteProtoMsg): _122.Vote;
                toProto(message: _122.Vote): Uint8Array;
                toProtoMsg(message: _122.Vote): _122.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _122.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DepositParams;
                fromPartial(object: Partial<_122.DepositParams>): _122.DepositParams;
                fromAmino(object: _122.DepositParamsAmino): _122.DepositParams;
                toAmino(message: _122.DepositParams): _122.DepositParamsAmino;
                fromAminoMsg(object: _122.DepositParamsAminoMsg): _122.DepositParams;
                toAminoMsg(message: _122.DepositParams): _122.DepositParamsAminoMsg;
                fromProtoMsg(message: _122.DepositParamsProtoMsg): _122.DepositParams;
                toProto(message: _122.DepositParams): Uint8Array;
                toProtoMsg(message: _122.DepositParams): _122.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _122.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.VotingParams;
                fromPartial(object: Partial<_122.VotingParams>): _122.VotingParams;
                fromAmino(object: _122.VotingParamsAmino): _122.VotingParams;
                toAmino(message: _122.VotingParams): _122.VotingParamsAmino;
                fromAminoMsg(object: _122.VotingParamsAminoMsg): _122.VotingParams;
                toAminoMsg(message: _122.VotingParams): _122.VotingParamsAminoMsg;
                fromProtoMsg(message: _122.VotingParamsProtoMsg): _122.VotingParams;
                toProto(message: _122.VotingParams): Uint8Array;
                toProtoMsg(message: _122.VotingParams): _122.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _122.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TallyParams;
                fromPartial(object: Partial<_122.TallyParams>): _122.TallyParams;
                fromAmino(object: _122.TallyParamsAmino): _122.TallyParams;
                toAmino(message: _122.TallyParams): _122.TallyParamsAmino;
                fromAminoMsg(object: _122.TallyParamsAminoMsg): _122.TallyParams;
                toAminoMsg(message: _122.TallyParams): _122.TallyParamsAminoMsg;
                fromProtoMsg(message: _122.TallyParamsProtoMsg): _122.TallyParams;
                toProto(message: _122.TallyParams): Uint8Array;
                toProtoMsg(message: _122.TallyParams): _122.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _122.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Params;
                fromPartial(object: Partial<_122.Params>): _122.Params;
                fromAmino(object: _122.ParamsAmino): _122.Params;
                toAmino(message: _122.Params): _122.ParamsAmino;
                fromAminoMsg(object: _122.ParamsAminoMsg): _122.Params;
                toAminoMsg(message: _122.Params): _122.ParamsAminoMsg;
                fromProtoMsg(message: _122.ParamsProtoMsg): _122.Params;
                toProto(message: _122.Params): Uint8Array;
                toProtoMsg(message: _122.Params): _122.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _121.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                toAminoMsg(message: _121.GenesisState): _121.GenesisStateAminoMsg;
                fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                toProto(message: _121.GenesisState): Uint8Array;
                toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
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
            LCDQueryClient: typeof _288.LCDQueryClient;
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
                    toAmino: (message: _128.MsgSubmitProposal) => _128.MsgSubmitProposalAmino;
                    fromAmino: (object: _128.MsgSubmitProposalAmino) => _128.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _128.MsgVote) => _128.MsgVoteAmino;
                    fromAmino: (object: _128.MsgVoteAmino) => _128.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _128.MsgVoteWeighted) => _128.MsgVoteWeightedAmino;
                    fromAmino: (object: _128.MsgVoteWeightedAmino) => _128.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _128.MsgDeposit) => _128.MsgDepositAmino;
                    fromAmino: (object: _128.MsgDepositAmino) => _128.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _128.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgSubmitProposal;
                fromPartial(object: Partial<_128.MsgSubmitProposal>): _128.MsgSubmitProposal;
                fromAmino(object: _128.MsgSubmitProposalAmino): _128.MsgSubmitProposal;
                toAmino(message: _128.MsgSubmitProposal): _128.MsgSubmitProposalAmino;
                fromAminoMsg(object: _128.MsgSubmitProposalAminoMsg): _128.MsgSubmitProposal;
                toAminoMsg(message: _128.MsgSubmitProposal): _128.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _128.MsgSubmitProposalProtoMsg): _128.MsgSubmitProposal;
                toProto(message: _128.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _128.MsgSubmitProposal): _128.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _128.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_128.MsgSubmitProposalResponse>): _128.MsgSubmitProposalResponse;
                fromAmino(object: _128.MsgSubmitProposalResponseAmino): _128.MsgSubmitProposalResponse;
                toAmino(message: _128.MsgSubmitProposalResponse): _128.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _128.MsgSubmitProposalResponseAminoMsg): _128.MsgSubmitProposalResponse;
                toAminoMsg(message: _128.MsgSubmitProposalResponse): _128.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _128.MsgSubmitProposalResponseProtoMsg): _128.MsgSubmitProposalResponse;
                toProto(message: _128.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _128.MsgSubmitProposalResponse): _128.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _128.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgVote;
                fromPartial(object: Partial<_128.MsgVote>): _128.MsgVote;
                fromAmino(object: _128.MsgVoteAmino): _128.MsgVote;
                toAmino(message: _128.MsgVote): _128.MsgVoteAmino;
                fromAminoMsg(object: _128.MsgVoteAminoMsg): _128.MsgVote;
                toAminoMsg(message: _128.MsgVote): _128.MsgVoteAminoMsg;
                fromProtoMsg(message: _128.MsgVoteProtoMsg): _128.MsgVote;
                toProto(message: _128.MsgVote): Uint8Array;
                toProtoMsg(message: _128.MsgVote): _128.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _128.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgVoteResponse;
                fromPartial(_: Partial<_128.MsgVoteResponse>): _128.MsgVoteResponse;
                fromAmino(_: _128.MsgVoteResponseAmino): _128.MsgVoteResponse;
                toAmino(_: _128.MsgVoteResponse): _128.MsgVoteResponseAmino;
                fromAminoMsg(object: _128.MsgVoteResponseAminoMsg): _128.MsgVoteResponse;
                toAminoMsg(message: _128.MsgVoteResponse): _128.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _128.MsgVoteResponseProtoMsg): _128.MsgVoteResponse;
                toProto(message: _128.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _128.MsgVoteResponse): _128.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _128.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgVoteWeighted;
                fromPartial(object: Partial<_128.MsgVoteWeighted>): _128.MsgVoteWeighted;
                fromAmino(object: _128.MsgVoteWeightedAmino): _128.MsgVoteWeighted;
                toAmino(message: _128.MsgVoteWeighted): _128.MsgVoteWeightedAmino;
                fromAminoMsg(object: _128.MsgVoteWeightedAminoMsg): _128.MsgVoteWeighted;
                toAminoMsg(message: _128.MsgVoteWeighted): _128.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _128.MsgVoteWeightedProtoMsg): _128.MsgVoteWeighted;
                toProto(message: _128.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _128.MsgVoteWeighted): _128.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _128.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_128.MsgVoteWeightedResponse>): _128.MsgVoteWeightedResponse;
                fromAmino(_: _128.MsgVoteWeightedResponseAmino): _128.MsgVoteWeightedResponse;
                toAmino(_: _128.MsgVoteWeightedResponse): _128.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _128.MsgVoteWeightedResponseAminoMsg): _128.MsgVoteWeightedResponse;
                toAminoMsg(message: _128.MsgVoteWeightedResponse): _128.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _128.MsgVoteWeightedResponseProtoMsg): _128.MsgVoteWeightedResponse;
                toProto(message: _128.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _128.MsgVoteWeightedResponse): _128.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _128.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgDeposit;
                fromPartial(object: Partial<_128.MsgDeposit>): _128.MsgDeposit;
                fromAmino(object: _128.MsgDepositAmino): _128.MsgDeposit;
                toAmino(message: _128.MsgDeposit): _128.MsgDepositAmino;
                fromAminoMsg(object: _128.MsgDepositAminoMsg): _128.MsgDeposit;
                toAminoMsg(message: _128.MsgDeposit): _128.MsgDepositAminoMsg;
                fromProtoMsg(message: _128.MsgDepositProtoMsg): _128.MsgDeposit;
                toProto(message: _128.MsgDeposit): Uint8Array;
                toProtoMsg(message: _128.MsgDeposit): _128.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _128.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgDepositResponse;
                fromPartial(_: Partial<_128.MsgDepositResponse>): _128.MsgDepositResponse;
                fromAmino(_: _128.MsgDepositResponseAmino): _128.MsgDepositResponse;
                toAmino(_: _128.MsgDepositResponse): _128.MsgDepositResponseAmino;
                fromAminoMsg(object: _128.MsgDepositResponseAminoMsg): _128.MsgDepositResponse;
                toAminoMsg(message: _128.MsgDepositResponse): _128.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _128.MsgDepositResponseProtoMsg): _128.MsgDepositResponse;
                toProto(message: _128.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _128.MsgDepositResponse): _128.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => _104.CommunityPoolSpendProposal | _104.CommunityPoolSpendProposalWithDeposit | import("../injective/exchange/v1beta1/tx").SpotMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").BatchExchangeModificationProposal | import("../injective/exchange/v1beta1/tx").DerivativeMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").SpotMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").PerpetualMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").ExpiryFuturesMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").TradingRewardCampaignUpdateProposal | import("../injective/exchange/v1beta1/tx").BinaryOptionsMarketLaunchProposal | import("../injective/exchange/v1beta1/tx").BinaryOptionsMarketParamUpdateProposal | import("../injective/exchange/v1beta1/tx").UpdateDenomDecimalsProposal | import("../injective/exchange/v1beta1/tx").MarketForcedSettlementProposal | import("../injective/exchange/v1beta1/tx").TradingRewardCampaignLaunchProposal | import("../injective/exchange/v1beta1/tx").TradingRewardPendingPointsUpdateProposal | import("../injective/exchange/v1beta1/tx").FeeDiscountProposal | import("../injective/exchange/v1beta1/tx").BatchCommunityPoolSpendProposal | import("../injective/exchange/v1beta1/tx").AtomicMarketOrderFeeMultiplierScheduleProposal | import("../injective/ocr/v1beta1/ocr").SetConfigProposal | import("../injective/ocr/v1beta1/ocr").SetBatchConfigProposal | import("../injective/oracle/v1beta1/proposal").GrantBandOraclePrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokeBandOraclePrivilegeProposal | import("../injective/oracle/v1beta1/proposal").GrantPriceFeederPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").GrantProviderPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokeProviderPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").RevokePriceFeederPrivilegeProposal | import("../injective/oracle/v1beta1/proposal").AuthorizeBandOracleRequestProposal | import("../injective/oracle/v1beta1/proposal").UpdateBandOracleRequestProposal | import("../injective/oracle/v1beta1/proposal").EnableBandIBCProposal | import("../google/protobuf/any").Any | import("../injective/peggy/v1/proposal").BlacklistEthereumAddressesProposal | import("../injective/peggy/v1/proposal").RevokeEthereumBlacklistProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../injective/wasmx/v1/proposal").ContractRegistrationRequestProposal | import("../injective/wasmx/v1/proposal").ContractRegistrationRequest | import("../injective/wasmx/v1/proposal").BatchContractRegistrationRequestProposal | import("../injective/wasmx/v1/proposal").BatchContractDeregistrationProposal | import("../injective/wasmx/v1/proposal").BatchStoreCodeProposal | _152.ParameterChangeProposal | _174.SoftwareUpgradeProposal | _174.CancelSoftwareUpgradeProposal | _126.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _127.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryProposalRequest;
                fromPartial(object: Partial<_127.QueryProposalRequest>): _127.QueryProposalRequest;
                fromAmino(object: _127.QueryProposalRequestAmino): _127.QueryProposalRequest;
                toAmino(message: _127.QueryProposalRequest): _127.QueryProposalRequestAmino;
                fromAminoMsg(object: _127.QueryProposalRequestAminoMsg): _127.QueryProposalRequest;
                toAminoMsg(message: _127.QueryProposalRequest): _127.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _127.QueryProposalRequestProtoMsg): _127.QueryProposalRequest;
                toProto(message: _127.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _127.QueryProposalRequest): _127.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _127.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryProposalResponse;
                fromPartial(object: Partial<_127.QueryProposalResponse>): _127.QueryProposalResponse;
                fromAmino(object: _127.QueryProposalResponseAmino): _127.QueryProposalResponse;
                toAmino(message: _127.QueryProposalResponse): _127.QueryProposalResponseAmino;
                fromAminoMsg(object: _127.QueryProposalResponseAminoMsg): _127.QueryProposalResponse;
                toAminoMsg(message: _127.QueryProposalResponse): _127.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _127.QueryProposalResponseProtoMsg): _127.QueryProposalResponse;
                toProto(message: _127.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _127.QueryProposalResponse): _127.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _127.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryProposalsRequest;
                fromPartial(object: Partial<_127.QueryProposalsRequest>): _127.QueryProposalsRequest;
                fromAmino(object: _127.QueryProposalsRequestAmino): _127.QueryProposalsRequest;
                toAmino(message: _127.QueryProposalsRequest): _127.QueryProposalsRequestAmino;
                fromAminoMsg(object: _127.QueryProposalsRequestAminoMsg): _127.QueryProposalsRequest;
                toAminoMsg(message: _127.QueryProposalsRequest): _127.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryProposalsRequestProtoMsg): _127.QueryProposalsRequest;
                toProto(message: _127.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryProposalsRequest): _127.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _127.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryProposalsResponse;
                fromPartial(object: Partial<_127.QueryProposalsResponse>): _127.QueryProposalsResponse;
                fromAmino(object: _127.QueryProposalsResponseAmino): _127.QueryProposalsResponse;
                toAmino(message: _127.QueryProposalsResponse): _127.QueryProposalsResponseAmino;
                fromAminoMsg(object: _127.QueryProposalsResponseAminoMsg): _127.QueryProposalsResponse;
                toAminoMsg(message: _127.QueryProposalsResponse): _127.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryProposalsResponseProtoMsg): _127.QueryProposalsResponse;
                toProto(message: _127.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryProposalsResponse): _127.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _127.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryVoteRequest;
                fromPartial(object: Partial<_127.QueryVoteRequest>): _127.QueryVoteRequest;
                fromAmino(object: _127.QueryVoteRequestAmino): _127.QueryVoteRequest;
                toAmino(message: _127.QueryVoteRequest): _127.QueryVoteRequestAmino;
                fromAminoMsg(object: _127.QueryVoteRequestAminoMsg): _127.QueryVoteRequest;
                toAminoMsg(message: _127.QueryVoteRequest): _127.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _127.QueryVoteRequestProtoMsg): _127.QueryVoteRequest;
                toProto(message: _127.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _127.QueryVoteRequest): _127.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _127.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryVoteResponse;
                fromPartial(object: Partial<_127.QueryVoteResponse>): _127.QueryVoteResponse;
                fromAmino(object: _127.QueryVoteResponseAmino): _127.QueryVoteResponse;
                toAmino(message: _127.QueryVoteResponse): _127.QueryVoteResponseAmino;
                fromAminoMsg(object: _127.QueryVoteResponseAminoMsg): _127.QueryVoteResponse;
                toAminoMsg(message: _127.QueryVoteResponse): _127.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _127.QueryVoteResponseProtoMsg): _127.QueryVoteResponse;
                toProto(message: _127.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _127.QueryVoteResponse): _127.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _127.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryVotesRequest;
                fromPartial(object: Partial<_127.QueryVotesRequest>): _127.QueryVotesRequest;
                fromAmino(object: _127.QueryVotesRequestAmino): _127.QueryVotesRequest;
                toAmino(message: _127.QueryVotesRequest): _127.QueryVotesRequestAmino;
                fromAminoMsg(object: _127.QueryVotesRequestAminoMsg): _127.QueryVotesRequest;
                toAminoMsg(message: _127.QueryVotesRequest): _127.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _127.QueryVotesRequestProtoMsg): _127.QueryVotesRequest;
                toProto(message: _127.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _127.QueryVotesRequest): _127.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _127.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryVotesResponse;
                fromPartial(object: Partial<_127.QueryVotesResponse>): _127.QueryVotesResponse;
                fromAmino(object: _127.QueryVotesResponseAmino): _127.QueryVotesResponse;
                toAmino(message: _127.QueryVotesResponse): _127.QueryVotesResponseAmino;
                fromAminoMsg(object: _127.QueryVotesResponseAminoMsg): _127.QueryVotesResponse;
                toAminoMsg(message: _127.QueryVotesResponse): _127.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _127.QueryVotesResponseProtoMsg): _127.QueryVotesResponse;
                toProto(message: _127.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _127.QueryVotesResponse): _127.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _127.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryParamsRequest;
                fromPartial(object: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
                fromAmino(object: _127.QueryParamsRequestAmino): _127.QueryParamsRequest;
                toAmino(message: _127.QueryParamsRequest): _127.QueryParamsRequestAmino;
                fromAminoMsg(object: _127.QueryParamsRequestAminoMsg): _127.QueryParamsRequest;
                toAminoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryParamsRequestProtoMsg): _127.QueryParamsRequest;
                toProto(message: _127.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _127.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
                fromAmino(object: _127.QueryParamsResponseAmino): _127.QueryParamsResponse;
                toAmino(message: _127.QueryParamsResponse): _127.QueryParamsResponseAmino;
                fromAminoMsg(object: _127.QueryParamsResponseAminoMsg): _127.QueryParamsResponse;
                toAminoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryParamsResponseProtoMsg): _127.QueryParamsResponse;
                toProto(message: _127.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _127.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryDepositRequest;
                fromPartial(object: Partial<_127.QueryDepositRequest>): _127.QueryDepositRequest;
                fromAmino(object: _127.QueryDepositRequestAmino): _127.QueryDepositRequest;
                toAmino(message: _127.QueryDepositRequest): _127.QueryDepositRequestAmino;
                fromAminoMsg(object: _127.QueryDepositRequestAminoMsg): _127.QueryDepositRequest;
                toAminoMsg(message: _127.QueryDepositRequest): _127.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _127.QueryDepositRequestProtoMsg): _127.QueryDepositRequest;
                toProto(message: _127.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _127.QueryDepositRequest): _127.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _127.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryDepositResponse;
                fromPartial(object: Partial<_127.QueryDepositResponse>): _127.QueryDepositResponse;
                fromAmino(object: _127.QueryDepositResponseAmino): _127.QueryDepositResponse;
                toAmino(message: _127.QueryDepositResponse): _127.QueryDepositResponseAmino;
                fromAminoMsg(object: _127.QueryDepositResponseAminoMsg): _127.QueryDepositResponse;
                toAminoMsg(message: _127.QueryDepositResponse): _127.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _127.QueryDepositResponseProtoMsg): _127.QueryDepositResponse;
                toProto(message: _127.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _127.QueryDepositResponse): _127.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _127.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryDepositsRequest;
                fromPartial(object: Partial<_127.QueryDepositsRequest>): _127.QueryDepositsRequest;
                fromAmino(object: _127.QueryDepositsRequestAmino): _127.QueryDepositsRequest;
                toAmino(message: _127.QueryDepositsRequest): _127.QueryDepositsRequestAmino;
                fromAminoMsg(object: _127.QueryDepositsRequestAminoMsg): _127.QueryDepositsRequest;
                toAminoMsg(message: _127.QueryDepositsRequest): _127.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryDepositsRequestProtoMsg): _127.QueryDepositsRequest;
                toProto(message: _127.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryDepositsRequest): _127.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _127.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryDepositsResponse;
                fromPartial(object: Partial<_127.QueryDepositsResponse>): _127.QueryDepositsResponse;
                fromAmino(object: _127.QueryDepositsResponseAmino): _127.QueryDepositsResponse;
                toAmino(message: _127.QueryDepositsResponse): _127.QueryDepositsResponseAmino;
                fromAminoMsg(object: _127.QueryDepositsResponseAminoMsg): _127.QueryDepositsResponse;
                toAminoMsg(message: _127.QueryDepositsResponse): _127.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryDepositsResponseProtoMsg): _127.QueryDepositsResponse;
                toProto(message: _127.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryDepositsResponse): _127.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _127.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryTallyResultRequest;
                fromPartial(object: Partial<_127.QueryTallyResultRequest>): _127.QueryTallyResultRequest;
                fromAmino(object: _127.QueryTallyResultRequestAmino): _127.QueryTallyResultRequest;
                toAmino(message: _127.QueryTallyResultRequest): _127.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _127.QueryTallyResultRequestAminoMsg): _127.QueryTallyResultRequest;
                toAminoMsg(message: _127.QueryTallyResultRequest): _127.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _127.QueryTallyResultRequestProtoMsg): _127.QueryTallyResultRequest;
                toProto(message: _127.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _127.QueryTallyResultRequest): _127.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _127.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryTallyResultResponse;
                fromPartial(object: Partial<_127.QueryTallyResultResponse>): _127.QueryTallyResultResponse;
                fromAmino(object: _127.QueryTallyResultResponseAmino): _127.QueryTallyResultResponse;
                toAmino(message: _127.QueryTallyResultResponse): _127.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _127.QueryTallyResultResponseAminoMsg): _127.QueryTallyResultResponse;
                toAminoMsg(message: _127.QueryTallyResultResponse): _127.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _127.QueryTallyResultResponseProtoMsg): _127.QueryTallyResultResponse;
                toProto(message: _127.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _127.QueryTallyResultResponse): _127.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _126.VoteOption;
            voteOptionToJSON(object: _126.VoteOption): string;
            proposalStatusFromJSON(object: any): _126.ProposalStatus;
            proposalStatusToJSON(object: _126.ProposalStatus): string;
            VoteOption: typeof _126.VoteOption;
            VoteOptionSDKType: typeof _126.VoteOption;
            VoteOptionAmino: typeof _126.VoteOption;
            ProposalStatus: typeof _126.ProposalStatus;
            ProposalStatusSDKType: typeof _126.ProposalStatus;
            ProposalStatusAmino: typeof _126.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _126.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.WeightedVoteOption;
                fromPartial(object: Partial<_126.WeightedVoteOption>): _126.WeightedVoteOption;
                fromAmino(object: _126.WeightedVoteOptionAmino): _126.WeightedVoteOption;
                toAmino(message: _126.WeightedVoteOption): _126.WeightedVoteOptionAmino;
                fromAminoMsg(object: _126.WeightedVoteOptionAminoMsg): _126.WeightedVoteOption;
                toAminoMsg(message: _126.WeightedVoteOption): _126.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _126.WeightedVoteOptionProtoMsg): _126.WeightedVoteOption;
                toProto(message: _126.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _126.WeightedVoteOption): _126.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _126.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TextProposal;
                fromPartial(object: Partial<_126.TextProposal>): _126.TextProposal;
                fromAmino(object: _126.TextProposalAmino): _126.TextProposal;
                toAmino(message: _126.TextProposal): _126.TextProposalAmino;
                fromAminoMsg(object: _126.TextProposalAminoMsg): _126.TextProposal;
                toAminoMsg(message: _126.TextProposal): _126.TextProposalAminoMsg;
                fromProtoMsg(message: _126.TextProposalProtoMsg): _126.TextProposal;
                toProto(message: _126.TextProposal): Uint8Array;
                toProtoMsg(message: _126.TextProposal): _126.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _126.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Deposit;
                fromPartial(object: Partial<_126.Deposit>): _126.Deposit;
                fromAmino(object: _126.DepositAmino): _126.Deposit;
                toAmino(message: _126.Deposit): _126.DepositAmino;
                fromAminoMsg(object: _126.DepositAminoMsg): _126.Deposit;
                toAminoMsg(message: _126.Deposit): _126.DepositAminoMsg;
                fromProtoMsg(message: _126.DepositProtoMsg): _126.Deposit;
                toProto(message: _126.Deposit): Uint8Array;
                toProtoMsg(message: _126.Deposit): _126.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _126.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Proposal;
                fromPartial(object: Partial<_126.Proposal>): _126.Proposal;
                fromAmino(object: _126.ProposalAmino): _126.Proposal;
                toAmino(message: _126.Proposal): _126.ProposalAmino;
                fromAminoMsg(object: _126.ProposalAminoMsg): _126.Proposal;
                toAminoMsg(message: _126.Proposal): _126.ProposalAminoMsg;
                fromProtoMsg(message: _126.ProposalProtoMsg): _126.Proposal;
                toProto(message: _126.Proposal): Uint8Array;
                toProtoMsg(message: _126.Proposal): _126.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _126.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TallyResult;
                fromPartial(object: Partial<_126.TallyResult>): _126.TallyResult;
                fromAmino(object: _126.TallyResultAmino): _126.TallyResult;
                toAmino(message: _126.TallyResult): _126.TallyResultAmino;
                fromAminoMsg(object: _126.TallyResultAminoMsg): _126.TallyResult;
                toAminoMsg(message: _126.TallyResult): _126.TallyResultAminoMsg;
                fromProtoMsg(message: _126.TallyResultProtoMsg): _126.TallyResult;
                toProto(message: _126.TallyResult): Uint8Array;
                toProtoMsg(message: _126.TallyResult): _126.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _126.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Vote;
                fromPartial(object: Partial<_126.Vote>): _126.Vote;
                fromAmino(object: _126.VoteAmino): _126.Vote;
                toAmino(message: _126.Vote): _126.VoteAmino;
                fromAminoMsg(object: _126.VoteAminoMsg): _126.Vote;
                toAminoMsg(message: _126.Vote): _126.VoteAminoMsg;
                fromProtoMsg(message: _126.VoteProtoMsg): _126.Vote;
                toProto(message: _126.Vote): Uint8Array;
                toProtoMsg(message: _126.Vote): _126.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _126.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DepositParams;
                fromPartial(object: Partial<_126.DepositParams>): _126.DepositParams;
                fromAmino(object: _126.DepositParamsAmino): _126.DepositParams;
                toAmino(message: _126.DepositParams): _126.DepositParamsAmino;
                fromAminoMsg(object: _126.DepositParamsAminoMsg): _126.DepositParams;
                toAminoMsg(message: _126.DepositParams): _126.DepositParamsAminoMsg;
                fromProtoMsg(message: _126.DepositParamsProtoMsg): _126.DepositParams;
                toProto(message: _126.DepositParams): Uint8Array;
                toProtoMsg(message: _126.DepositParams): _126.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _126.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.VotingParams;
                fromPartial(object: Partial<_126.VotingParams>): _126.VotingParams;
                fromAmino(object: _126.VotingParamsAmino): _126.VotingParams;
                toAmino(message: _126.VotingParams): _126.VotingParamsAmino;
                fromAminoMsg(object: _126.VotingParamsAminoMsg): _126.VotingParams;
                toAminoMsg(message: _126.VotingParams): _126.VotingParamsAminoMsg;
                fromProtoMsg(message: _126.VotingParamsProtoMsg): _126.VotingParams;
                toProto(message: _126.VotingParams): Uint8Array;
                toProtoMsg(message: _126.VotingParams): _126.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _126.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TallyParams;
                fromPartial(object: Partial<_126.TallyParams>): _126.TallyParams;
                fromAmino(object: _126.TallyParamsAmino): _126.TallyParams;
                toAmino(message: _126.TallyParams): _126.TallyParamsAmino;
                fromAminoMsg(object: _126.TallyParamsAminoMsg): _126.TallyParams;
                toAminoMsg(message: _126.TallyParams): _126.TallyParamsAminoMsg;
                fromProtoMsg(message: _126.TallyParamsProtoMsg): _126.TallyParams;
                toProto(message: _126.TallyParams): Uint8Array;
                toProtoMsg(message: _126.TallyParams): _126.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                toProto(message: _125.GenesisState): Uint8Array;
                toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _129.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.Module;
                    fromPartial(object: Partial<_129.Module>): _129.Module;
                    fromAmino(object: _129.ModuleAmino): _129.Module;
                    toAmino(message: _129.Module): _129.ModuleAmino;
                    fromAminoMsg(object: _129.ModuleAminoMsg): _129.Module;
                    toAminoMsg(message: _129.Module): _129.ModuleAminoMsg;
                    fromProtoMsg(message: _129.ModuleProtoMsg): _129.Module;
                    toProto(message: _129.Module): Uint8Array;
                    toProtoMsg(message: _129.Module): _129.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
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
            LCDQueryClient: typeof _289.LCDQueryClient;
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
                    toAmino: (message: _133.MsgCreateGroup) => _133.MsgCreateGroupAmino;
                    fromAmino: (object: _133.MsgCreateGroupAmino) => _133.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupMembers) => _133.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _133.MsgUpdateGroupMembersAmino) => _133.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupAdmin) => _133.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _133.MsgUpdateGroupAdminAmino) => _133.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupMetadata) => _133.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _133.MsgUpdateGroupMetadataAmino) => _133.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateGroupPolicy) => _133.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _133.MsgCreateGroupPolicyAmino) => _133.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateGroupWithPolicy) => _133.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _133.MsgCreateGroupWithPolicyAmino) => _133.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupPolicyAdmin) => _133.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _133.MsgUpdateGroupPolicyAdminAmino) => _133.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupPolicyDecisionPolicy) => _133.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _133.MsgUpdateGroupPolicyDecisionPolicyAmino) => _133.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateGroupPolicyMetadata) => _133.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _133.MsgUpdateGroupPolicyMetadataAmino) => _133.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSubmitProposal) => _133.MsgSubmitProposalAmino;
                    fromAmino: (object: _133.MsgSubmitProposalAmino) => _133.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _133.MsgWithdrawProposal) => _133.MsgWithdrawProposalAmino;
                    fromAmino: (object: _133.MsgWithdrawProposalAmino) => _133.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _133.MsgVote) => _133.MsgVoteAmino;
                    fromAmino: (object: _133.MsgVoteAmino) => _133.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _133.MsgExec) => _133.MsgExecAmino;
                    fromAmino: (object: _133.MsgExecAmino) => _133.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _133.MsgLeaveGroup) => _133.MsgLeaveGroupAmino;
                    fromAmino: (object: _133.MsgLeaveGroupAmino) => _133.MsgLeaveGroup;
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
            VoteOptionAmino: typeof _134.VoteOption;
            ProposalStatus: typeof _134.ProposalStatus;
            ProposalStatusSDKType: typeof _134.ProposalStatus;
            ProposalStatusAmino: typeof _134.ProposalStatus;
            ProposalExecutorResult: typeof _134.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _134.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _134.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _134.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Member;
                fromPartial(object: Partial<_134.Member>): _134.Member;
                fromAmino(object: _134.MemberAmino): _134.Member;
                toAmino(message: _134.Member): _134.MemberAmino;
                fromAminoMsg(object: _134.MemberAminoMsg): _134.Member;
                toAminoMsg(message: _134.Member): _134.MemberAminoMsg;
                fromProtoMsg(message: _134.MemberProtoMsg): _134.Member;
                toProto(message: _134.Member): Uint8Array;
                toProtoMsg(message: _134.Member): _134.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _134.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MemberRequest;
                fromPartial(object: Partial<_134.MemberRequest>): _134.MemberRequest;
                fromAmino(object: _134.MemberRequestAmino): _134.MemberRequest;
                toAmino(message: _134.MemberRequest): _134.MemberRequestAmino;
                fromAminoMsg(object: _134.MemberRequestAminoMsg): _134.MemberRequest;
                toAminoMsg(message: _134.MemberRequest): _134.MemberRequestAminoMsg;
                fromProtoMsg(message: _134.MemberRequestProtoMsg): _134.MemberRequest;
                toProto(message: _134.MemberRequest): Uint8Array;
                toProtoMsg(message: _134.MemberRequest): _134.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _134.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_134.ThresholdDecisionPolicy>): _134.ThresholdDecisionPolicy;
                fromAmino(object: _134.ThresholdDecisionPolicyAmino): _134.ThresholdDecisionPolicy;
                toAmino(message: _134.ThresholdDecisionPolicy): _134.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _134.ThresholdDecisionPolicyAminoMsg): _134.ThresholdDecisionPolicy;
                toAminoMsg(message: _134.ThresholdDecisionPolicy): _134.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _134.ThresholdDecisionPolicyProtoMsg): _134.ThresholdDecisionPolicy;
                toProto(message: _134.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _134.ThresholdDecisionPolicy): _134.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _134.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.PercentageDecisionPolicy;
                fromPartial(object: Partial<_134.PercentageDecisionPolicy>): _134.PercentageDecisionPolicy;
                fromAmino(object: _134.PercentageDecisionPolicyAmino): _134.PercentageDecisionPolicy;
                toAmino(message: _134.PercentageDecisionPolicy): _134.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _134.PercentageDecisionPolicyAminoMsg): _134.PercentageDecisionPolicy;
                toAminoMsg(message: _134.PercentageDecisionPolicy): _134.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _134.PercentageDecisionPolicyProtoMsg): _134.PercentageDecisionPolicy;
                toProto(message: _134.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _134.PercentageDecisionPolicy): _134.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _134.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.DecisionPolicyWindows;
                fromPartial(object: Partial<_134.DecisionPolicyWindows>): _134.DecisionPolicyWindows;
                fromAmino(object: _134.DecisionPolicyWindowsAmino): _134.DecisionPolicyWindows;
                toAmino(message: _134.DecisionPolicyWindows): _134.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _134.DecisionPolicyWindowsAminoMsg): _134.DecisionPolicyWindows;
                toAminoMsg(message: _134.DecisionPolicyWindows): _134.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _134.DecisionPolicyWindowsProtoMsg): _134.DecisionPolicyWindows;
                toProto(message: _134.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _134.DecisionPolicyWindows): _134.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _134.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.GroupInfo;
                fromPartial(object: Partial<_134.GroupInfo>): _134.GroupInfo;
                fromAmino(object: _134.GroupInfoAmino): _134.GroupInfo;
                toAmino(message: _134.GroupInfo): _134.GroupInfoAmino;
                fromAminoMsg(object: _134.GroupInfoAminoMsg): _134.GroupInfo;
                toAminoMsg(message: _134.GroupInfo): _134.GroupInfoAminoMsg;
                fromProtoMsg(message: _134.GroupInfoProtoMsg): _134.GroupInfo;
                toProto(message: _134.GroupInfo): Uint8Array;
                toProtoMsg(message: _134.GroupInfo): _134.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _134.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.GroupMember;
                fromPartial(object: Partial<_134.GroupMember>): _134.GroupMember;
                fromAmino(object: _134.GroupMemberAmino): _134.GroupMember;
                toAmino(message: _134.GroupMember): _134.GroupMemberAmino;
                fromAminoMsg(object: _134.GroupMemberAminoMsg): _134.GroupMember;
                toAminoMsg(message: _134.GroupMember): _134.GroupMemberAminoMsg;
                fromProtoMsg(message: _134.GroupMemberProtoMsg): _134.GroupMember;
                toProto(message: _134.GroupMember): Uint8Array;
                toProtoMsg(message: _134.GroupMember): _134.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _134.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.GroupPolicyInfo;
                fromPartial(object: Partial<_134.GroupPolicyInfo>): _134.GroupPolicyInfo;
                fromAmino(object: _134.GroupPolicyInfoAmino): _134.GroupPolicyInfo;
                toAmino(message: _134.GroupPolicyInfo): _134.GroupPolicyInfoAmino;
                fromAminoMsg(object: _134.GroupPolicyInfoAminoMsg): _134.GroupPolicyInfo;
                toAminoMsg(message: _134.GroupPolicyInfo): _134.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _134.GroupPolicyInfoProtoMsg): _134.GroupPolicyInfo;
                toProto(message: _134.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _134.GroupPolicyInfo): _134.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _134.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Proposal;
                fromPartial(object: Partial<_134.Proposal>): _134.Proposal;
                fromAmino(object: _134.ProposalAmino): _134.Proposal;
                toAmino(message: _134.Proposal): _134.ProposalAmino;
                fromAminoMsg(object: _134.ProposalAminoMsg): _134.Proposal;
                toAminoMsg(message: _134.Proposal): _134.ProposalAminoMsg;
                fromProtoMsg(message: _134.ProposalProtoMsg): _134.Proposal;
                toProto(message: _134.Proposal): Uint8Array;
                toProtoMsg(message: _134.Proposal): _134.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _134.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.TallyResult;
                fromPartial(object: Partial<_134.TallyResult>): _134.TallyResult;
                fromAmino(object: _134.TallyResultAmino): _134.TallyResult;
                toAmino(message: _134.TallyResult): _134.TallyResultAmino;
                fromAminoMsg(object: _134.TallyResultAminoMsg): _134.TallyResult;
                toAminoMsg(message: _134.TallyResult): _134.TallyResultAminoMsg;
                fromProtoMsg(message: _134.TallyResultProtoMsg): _134.TallyResult;
                toProto(message: _134.TallyResult): Uint8Array;
                toProtoMsg(message: _134.TallyResult): _134.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _134.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Vote;
                fromPartial(object: Partial<_134.Vote>): _134.Vote;
                fromAmino(object: _134.VoteAmino): _134.Vote;
                toAmino(message: _134.Vote): _134.VoteAmino;
                fromAminoMsg(object: _134.VoteAminoMsg): _134.Vote;
                toAminoMsg(message: _134.Vote): _134.VoteAminoMsg;
                fromProtoMsg(message: _134.VoteProtoMsg): _134.Vote;
                toProto(message: _134.Vote): Uint8Array;
                toProtoMsg(message: _134.Vote): _134.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _134.ThresholdDecisionPolicy | _134.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _133.Exec;
            execToJSON(object: _133.Exec): string;
            Exec: typeof _133.Exec;
            ExecSDKType: typeof _133.Exec;
            ExecAmino: typeof _133.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroup;
                fromPartial(object: Partial<_133.MsgCreateGroup>): _133.MsgCreateGroup;
                fromAmino(object: _133.MsgCreateGroupAmino): _133.MsgCreateGroup;
                toAmino(message: _133.MsgCreateGroup): _133.MsgCreateGroupAmino;
                fromAminoMsg(object: _133.MsgCreateGroupAminoMsg): _133.MsgCreateGroup;
                toAminoMsg(message: _133.MsgCreateGroup): _133.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupProtoMsg): _133.MsgCreateGroup;
                toProto(message: _133.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroup): _133.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroupResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupResponse>): _133.MsgCreateGroupResponse;
                fromAmino(object: _133.MsgCreateGroupResponseAmino): _133.MsgCreateGroupResponse;
                toAmino(message: _133.MsgCreateGroupResponse): _133.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _133.MsgCreateGroupResponseAminoMsg): _133.MsgCreateGroupResponse;
                toAminoMsg(message: _133.MsgCreateGroupResponse): _133.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupResponseProtoMsg): _133.MsgCreateGroupResponse;
                toProto(message: _133.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroupResponse): _133.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_133.MsgUpdateGroupMembers>): _133.MsgUpdateGroupMembers;
                fromAmino(object: _133.MsgUpdateGroupMembersAmino): _133.MsgUpdateGroupMembers;
                toAmino(message: _133.MsgUpdateGroupMembers): _133.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupMembersAminoMsg): _133.MsgUpdateGroupMembers;
                toAminoMsg(message: _133.MsgUpdateGroupMembers): _133.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupMembersProtoMsg): _133.MsgUpdateGroupMembers;
                toProto(message: _133.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupMembers): _133.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupMembersResponse>): _133.MsgUpdateGroupMembersResponse;
                fromAmino(_: _133.MsgUpdateGroupMembersResponseAmino): _133.MsgUpdateGroupMembersResponse;
                toAmino(_: _133.MsgUpdateGroupMembersResponse): _133.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupMembersResponseAminoMsg): _133.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _133.MsgUpdateGroupMembersResponse): _133.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupMembersResponseProtoMsg): _133.MsgUpdateGroupMembersResponse;
                toProto(message: _133.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupMembersResponse): _133.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_133.MsgUpdateGroupAdmin>): _133.MsgUpdateGroupAdmin;
                fromAmino(object: _133.MsgUpdateGroupAdminAmino): _133.MsgUpdateGroupAdmin;
                toAmino(message: _133.MsgUpdateGroupAdmin): _133.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupAdminAminoMsg): _133.MsgUpdateGroupAdmin;
                toAminoMsg(message: _133.MsgUpdateGroupAdmin): _133.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupAdminProtoMsg): _133.MsgUpdateGroupAdmin;
                toProto(message: _133.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupAdmin): _133.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupAdminResponse>): _133.MsgUpdateGroupAdminResponse;
                fromAmino(_: _133.MsgUpdateGroupAdminResponseAmino): _133.MsgUpdateGroupAdminResponse;
                toAmino(_: _133.MsgUpdateGroupAdminResponse): _133.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupAdminResponseAminoMsg): _133.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _133.MsgUpdateGroupAdminResponse): _133.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupAdminResponseProtoMsg): _133.MsgUpdateGroupAdminResponse;
                toProto(message: _133.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupAdminResponse): _133.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_133.MsgUpdateGroupMetadata>): _133.MsgUpdateGroupMetadata;
                fromAmino(object: _133.MsgUpdateGroupMetadataAmino): _133.MsgUpdateGroupMetadata;
                toAmino(message: _133.MsgUpdateGroupMetadata): _133.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupMetadataAminoMsg): _133.MsgUpdateGroupMetadata;
                toAminoMsg(message: _133.MsgUpdateGroupMetadata): _133.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupMetadataProtoMsg): _133.MsgUpdateGroupMetadata;
                toProto(message: _133.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupMetadata): _133.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupMetadataResponse>): _133.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _133.MsgUpdateGroupMetadataResponseAmino): _133.MsgUpdateGroupMetadataResponse;
                toAmino(_: _133.MsgUpdateGroupMetadataResponse): _133.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupMetadataResponseAminoMsg): _133.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _133.MsgUpdateGroupMetadataResponse): _133.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupMetadataResponseProtoMsg): _133.MsgUpdateGroupMetadataResponse;
                toProto(message: _133.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupMetadataResponse): _133.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_133.MsgCreateGroupPolicy>): _133.MsgCreateGroupPolicy;
                fromAmino(object: _133.MsgCreateGroupPolicyAmino): _133.MsgCreateGroupPolicy;
                toAmino(message: _133.MsgCreateGroupPolicy): _133.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _133.MsgCreateGroupPolicyAminoMsg): _133.MsgCreateGroupPolicy;
                toAminoMsg(message: _133.MsgCreateGroupPolicy): _133.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupPolicyProtoMsg): _133.MsgCreateGroupPolicy;
                toProto(message: _133.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroupPolicy): _133.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupPolicyResponse>): _133.MsgCreateGroupPolicyResponse;
                fromAmino(object: _133.MsgCreateGroupPolicyResponseAmino): _133.MsgCreateGroupPolicyResponse;
                toAmino(message: _133.MsgCreateGroupPolicyResponse): _133.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _133.MsgCreateGroupPolicyResponseAminoMsg): _133.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _133.MsgCreateGroupPolicyResponse): _133.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupPolicyResponseProtoMsg): _133.MsgCreateGroupPolicyResponse;
                toProto(message: _133.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroupPolicyResponse): _133.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyAdmin>): _133.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _133.MsgUpdateGroupPolicyAdminAmino): _133.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _133.MsgUpdateGroupPolicyAdmin): _133.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyAdminAminoMsg): _133.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyAdmin): _133.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyAdminProtoMsg): _133.MsgUpdateGroupPolicyAdmin;
                toProto(message: _133.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyAdmin): _133.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyAdminResponse>): _133.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _133.MsgUpdateGroupPolicyAdminResponseAmino): _133.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _133.MsgUpdateGroupPolicyAdminResponse): _133.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyAdminResponseAminoMsg): _133.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyAdminResponse): _133.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyAdminResponseProtoMsg): _133.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _133.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyAdminResponse): _133.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_133.MsgCreateGroupWithPolicy>): _133.MsgCreateGroupWithPolicy;
                fromAmino(object: _133.MsgCreateGroupWithPolicyAmino): _133.MsgCreateGroupWithPolicy;
                toAmino(message: _133.MsgCreateGroupWithPolicy): _133.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _133.MsgCreateGroupWithPolicyAminoMsg): _133.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _133.MsgCreateGroupWithPolicy): _133.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupWithPolicyProtoMsg): _133.MsgCreateGroupWithPolicy;
                toProto(message: _133.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroupWithPolicy): _133.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _133.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_133.MsgCreateGroupWithPolicyResponse>): _133.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _133.MsgCreateGroupWithPolicyResponseAmino): _133.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _133.MsgCreateGroupWithPolicyResponse): _133.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _133.MsgCreateGroupWithPolicyResponseAminoMsg): _133.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _133.MsgCreateGroupWithPolicyResponse): _133.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreateGroupWithPolicyResponseProtoMsg): _133.MsgCreateGroupWithPolicyResponse;
                toProto(message: _133.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateGroupWithPolicyResponse): _133.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyDecisionPolicy>): _133.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _133.MsgUpdateGroupPolicyDecisionPolicyAmino): _133.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _133.MsgUpdateGroupPolicyDecisionPolicy): _133.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _133.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicy): _133.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _133.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _133.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicy): _133.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyDecisionPolicyResponse>): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _133.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _133.MsgUpdateGroupPolicyDecisionPolicyResponse): _133.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicyResponse): _133.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _133.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _133.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyDecisionPolicyResponse): _133.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _133.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_133.MsgUpdateGroupPolicyMetadata>): _133.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _133.MsgUpdateGroupPolicyMetadataAmino): _133.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _133.MsgUpdateGroupPolicyMetadata): _133.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyMetadataAminoMsg): _133.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyMetadata): _133.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyMetadataProtoMsg): _133.MsgUpdateGroupPolicyMetadata;
                toProto(message: _133.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyMetadata): _133.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _133.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_133.MsgUpdateGroupPolicyMetadataResponse>): _133.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _133.MsgUpdateGroupPolicyMetadataResponseAmino): _133.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _133.MsgUpdateGroupPolicyMetadataResponse): _133.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _133.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _133.MsgUpdateGroupPolicyMetadataResponse): _133.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _133.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _133.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateGroupPolicyMetadataResponse): _133.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _133.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgSubmitProposal;
                fromPartial(object: Partial<_133.MsgSubmitProposal>): _133.MsgSubmitProposal;
                fromAmino(object: _133.MsgSubmitProposalAmino): _133.MsgSubmitProposal;
                toAmino(message: _133.MsgSubmitProposal): _133.MsgSubmitProposalAmino;
                fromAminoMsg(object: _133.MsgSubmitProposalAminoMsg): _133.MsgSubmitProposal;
                toAminoMsg(message: _133.MsgSubmitProposal): _133.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _133.MsgSubmitProposalProtoMsg): _133.MsgSubmitProposal;
                toProto(message: _133.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _133.MsgSubmitProposal): _133.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _133.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_133.MsgSubmitProposalResponse>): _133.MsgSubmitProposalResponse;
                fromAmino(object: _133.MsgSubmitProposalResponseAmino): _133.MsgSubmitProposalResponse;
                toAmino(message: _133.MsgSubmitProposalResponse): _133.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _133.MsgSubmitProposalResponseAminoMsg): _133.MsgSubmitProposalResponse;
                toAminoMsg(message: _133.MsgSubmitProposalResponse): _133.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _133.MsgSubmitProposalResponseProtoMsg): _133.MsgSubmitProposalResponse;
                toProto(message: _133.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSubmitProposalResponse): _133.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _133.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgWithdrawProposal;
                fromPartial(object: Partial<_133.MsgWithdrawProposal>): _133.MsgWithdrawProposal;
                fromAmino(object: _133.MsgWithdrawProposalAmino): _133.MsgWithdrawProposal;
                toAmino(message: _133.MsgWithdrawProposal): _133.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _133.MsgWithdrawProposalAminoMsg): _133.MsgWithdrawProposal;
                toAminoMsg(message: _133.MsgWithdrawProposal): _133.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _133.MsgWithdrawProposalProtoMsg): _133.MsgWithdrawProposal;
                toProto(message: _133.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _133.MsgWithdrawProposal): _133.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _133.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_133.MsgWithdrawProposalResponse>): _133.MsgWithdrawProposalResponse;
                fromAmino(_: _133.MsgWithdrawProposalResponseAmino): _133.MsgWithdrawProposalResponse;
                toAmino(_: _133.MsgWithdrawProposalResponse): _133.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _133.MsgWithdrawProposalResponseAminoMsg): _133.MsgWithdrawProposalResponse;
                toAminoMsg(message: _133.MsgWithdrawProposalResponse): _133.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _133.MsgWithdrawProposalResponseProtoMsg): _133.MsgWithdrawProposalResponse;
                toProto(message: _133.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _133.MsgWithdrawProposalResponse): _133.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _133.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgVote;
                fromPartial(object: Partial<_133.MsgVote>): _133.MsgVote;
                fromAmino(object: _133.MsgVoteAmino): _133.MsgVote;
                toAmino(message: _133.MsgVote): _133.MsgVoteAmino;
                fromAminoMsg(object: _133.MsgVoteAminoMsg): _133.MsgVote;
                toAminoMsg(message: _133.MsgVote): _133.MsgVoteAminoMsg;
                fromProtoMsg(message: _133.MsgVoteProtoMsg): _133.MsgVote;
                toProto(message: _133.MsgVote): Uint8Array;
                toProtoMsg(message: _133.MsgVote): _133.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _133.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgVoteResponse;
                fromPartial(_: Partial<_133.MsgVoteResponse>): _133.MsgVoteResponse;
                fromAmino(_: _133.MsgVoteResponseAmino): _133.MsgVoteResponse;
                toAmino(_: _133.MsgVoteResponse): _133.MsgVoteResponseAmino;
                fromAminoMsg(object: _133.MsgVoteResponseAminoMsg): _133.MsgVoteResponse;
                toAminoMsg(message: _133.MsgVoteResponse): _133.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _133.MsgVoteResponseProtoMsg): _133.MsgVoteResponse;
                toProto(message: _133.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _133.MsgVoteResponse): _133.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _133.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgExec;
                fromPartial(object: Partial<_133.MsgExec>): _133.MsgExec;
                fromAmino(object: _133.MsgExecAmino): _133.MsgExec;
                toAmino(message: _133.MsgExec): _133.MsgExecAmino;
                fromAminoMsg(object: _133.MsgExecAminoMsg): _133.MsgExec;
                toAminoMsg(message: _133.MsgExec): _133.MsgExecAminoMsg;
                fromProtoMsg(message: _133.MsgExecProtoMsg): _133.MsgExec;
                toProto(message: _133.MsgExec): Uint8Array;
                toProtoMsg(message: _133.MsgExec): _133.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _133.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgExecResponse;
                fromPartial(object: Partial<_133.MsgExecResponse>): _133.MsgExecResponse;
                fromAmino(object: _133.MsgExecResponseAmino): _133.MsgExecResponse;
                toAmino(message: _133.MsgExecResponse): _133.MsgExecResponseAmino;
                fromAminoMsg(object: _133.MsgExecResponseAminoMsg): _133.MsgExecResponse;
                toAminoMsg(message: _133.MsgExecResponse): _133.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _133.MsgExecResponseProtoMsg): _133.MsgExecResponse;
                toProto(message: _133.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _133.MsgExecResponse): _133.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _133.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgLeaveGroup;
                fromPartial(object: Partial<_133.MsgLeaveGroup>): _133.MsgLeaveGroup;
                fromAmino(object: _133.MsgLeaveGroupAmino): _133.MsgLeaveGroup;
                toAmino(message: _133.MsgLeaveGroup): _133.MsgLeaveGroupAmino;
                fromAminoMsg(object: _133.MsgLeaveGroupAminoMsg): _133.MsgLeaveGroup;
                toAminoMsg(message: _133.MsgLeaveGroup): _133.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _133.MsgLeaveGroupProtoMsg): _133.MsgLeaveGroup;
                toProto(message: _133.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _133.MsgLeaveGroup): _133.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _133.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_133.MsgLeaveGroupResponse>): _133.MsgLeaveGroupResponse;
                fromAmino(_: _133.MsgLeaveGroupResponseAmino): _133.MsgLeaveGroupResponse;
                toAmino(_: _133.MsgLeaveGroupResponse): _133.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _133.MsgLeaveGroupResponseAminoMsg): _133.MsgLeaveGroupResponse;
                toAminoMsg(message: _133.MsgLeaveGroupResponse): _133.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _133.MsgLeaveGroupResponseProtoMsg): _133.MsgLeaveGroupResponse;
                toProto(message: _133.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _133.MsgLeaveGroupResponse): _133.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupInfoRequest;
                fromPartial(object: Partial<_132.QueryGroupInfoRequest>): _132.QueryGroupInfoRequest;
                fromAmino(object: _132.QueryGroupInfoRequestAmino): _132.QueryGroupInfoRequest;
                toAmino(message: _132.QueryGroupInfoRequest): _132.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _132.QueryGroupInfoRequestAminoMsg): _132.QueryGroupInfoRequest;
                toAminoMsg(message: _132.QueryGroupInfoRequest): _132.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupInfoRequestProtoMsg): _132.QueryGroupInfoRequest;
                toProto(message: _132.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupInfoRequest): _132.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupInfoResponse;
                fromPartial(object: Partial<_132.QueryGroupInfoResponse>): _132.QueryGroupInfoResponse;
                fromAmino(object: _132.QueryGroupInfoResponseAmino): _132.QueryGroupInfoResponse;
                toAmino(message: _132.QueryGroupInfoResponse): _132.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _132.QueryGroupInfoResponseAminoMsg): _132.QueryGroupInfoResponse;
                toAminoMsg(message: _132.QueryGroupInfoResponse): _132.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupInfoResponseProtoMsg): _132.QueryGroupInfoResponse;
                toProto(message: _132.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupInfoResponse): _132.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_132.QueryGroupPolicyInfoRequest>): _132.QueryGroupPolicyInfoRequest;
                fromAmino(object: _132.QueryGroupPolicyInfoRequestAmino): _132.QueryGroupPolicyInfoRequest;
                toAmino(message: _132.QueryGroupPolicyInfoRequest): _132.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _132.QueryGroupPolicyInfoRequestAminoMsg): _132.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _132.QueryGroupPolicyInfoRequest): _132.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPolicyInfoRequestProtoMsg): _132.QueryGroupPolicyInfoRequest;
                toProto(message: _132.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPolicyInfoRequest): _132.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_132.QueryGroupPolicyInfoResponse>): _132.QueryGroupPolicyInfoResponse;
                fromAmino(object: _132.QueryGroupPolicyInfoResponseAmino): _132.QueryGroupPolicyInfoResponse;
                toAmino(message: _132.QueryGroupPolicyInfoResponse): _132.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _132.QueryGroupPolicyInfoResponseAminoMsg): _132.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _132.QueryGroupPolicyInfoResponse): _132.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPolicyInfoResponseProtoMsg): _132.QueryGroupPolicyInfoResponse;
                toProto(message: _132.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPolicyInfoResponse): _132.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupMembersRequest;
                fromPartial(object: Partial<_132.QueryGroupMembersRequest>): _132.QueryGroupMembersRequest;
                fromAmino(object: _132.QueryGroupMembersRequestAmino): _132.QueryGroupMembersRequest;
                toAmino(message: _132.QueryGroupMembersRequest): _132.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _132.QueryGroupMembersRequestAminoMsg): _132.QueryGroupMembersRequest;
                toAminoMsg(message: _132.QueryGroupMembersRequest): _132.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupMembersRequestProtoMsg): _132.QueryGroupMembersRequest;
                toProto(message: _132.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupMembersRequest): _132.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupMembersResponse;
                fromPartial(object: Partial<_132.QueryGroupMembersResponse>): _132.QueryGroupMembersResponse;
                fromAmino(object: _132.QueryGroupMembersResponseAmino): _132.QueryGroupMembersResponse;
                toAmino(message: _132.QueryGroupMembersResponse): _132.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _132.QueryGroupMembersResponseAminoMsg): _132.QueryGroupMembersResponse;
                toAminoMsg(message: _132.QueryGroupMembersResponse): _132.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupMembersResponseProtoMsg): _132.QueryGroupMembersResponse;
                toProto(message: _132.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupMembersResponse): _132.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_132.QueryGroupsByAdminRequest>): _132.QueryGroupsByAdminRequest;
                fromAmino(object: _132.QueryGroupsByAdminRequestAmino): _132.QueryGroupsByAdminRequest;
                toAmino(message: _132.QueryGroupsByAdminRequest): _132.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _132.QueryGroupsByAdminRequestAminoMsg): _132.QueryGroupsByAdminRequest;
                toAminoMsg(message: _132.QueryGroupsByAdminRequest): _132.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsByAdminRequestProtoMsg): _132.QueryGroupsByAdminRequest;
                toProto(message: _132.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsByAdminRequest): _132.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_132.QueryGroupsByAdminResponse>): _132.QueryGroupsByAdminResponse;
                fromAmino(object: _132.QueryGroupsByAdminResponseAmino): _132.QueryGroupsByAdminResponse;
                toAmino(message: _132.QueryGroupsByAdminResponse): _132.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _132.QueryGroupsByAdminResponseAminoMsg): _132.QueryGroupsByAdminResponse;
                toAminoMsg(message: _132.QueryGroupsByAdminResponse): _132.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsByAdminResponseProtoMsg): _132.QueryGroupsByAdminResponse;
                toProto(message: _132.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsByAdminResponse): _132.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByGroupRequest>): _132.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _132.QueryGroupPoliciesByGroupRequestAmino): _132.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _132.QueryGroupPoliciesByGroupRequest): _132.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _132.QueryGroupPoliciesByGroupRequestAminoMsg): _132.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _132.QueryGroupPoliciesByGroupRequest): _132.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPoliciesByGroupRequestProtoMsg): _132.QueryGroupPoliciesByGroupRequest;
                toProto(message: _132.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPoliciesByGroupRequest): _132.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByGroupResponse>): _132.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _132.QueryGroupPoliciesByGroupResponseAmino): _132.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _132.QueryGroupPoliciesByGroupResponse): _132.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _132.QueryGroupPoliciesByGroupResponseAminoMsg): _132.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _132.QueryGroupPoliciesByGroupResponse): _132.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPoliciesByGroupResponseProtoMsg): _132.QueryGroupPoliciesByGroupResponse;
                toProto(message: _132.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPoliciesByGroupResponse): _132.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByAdminRequest>): _132.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _132.QueryGroupPoliciesByAdminRequestAmino): _132.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _132.QueryGroupPoliciesByAdminRequest): _132.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _132.QueryGroupPoliciesByAdminRequestAminoMsg): _132.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _132.QueryGroupPoliciesByAdminRequest): _132.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPoliciesByAdminRequestProtoMsg): _132.QueryGroupPoliciesByAdminRequest;
                toProto(message: _132.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPoliciesByAdminRequest): _132.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_132.QueryGroupPoliciesByAdminResponse>): _132.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _132.QueryGroupPoliciesByAdminResponseAmino): _132.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _132.QueryGroupPoliciesByAdminResponse): _132.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _132.QueryGroupPoliciesByAdminResponseAminoMsg): _132.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _132.QueryGroupPoliciesByAdminResponse): _132.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupPoliciesByAdminResponseProtoMsg): _132.QueryGroupPoliciesByAdminResponse;
                toProto(message: _132.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupPoliciesByAdminResponse): _132.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _132.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryProposalRequest;
                fromPartial(object: Partial<_132.QueryProposalRequest>): _132.QueryProposalRequest;
                fromAmino(object: _132.QueryProposalRequestAmino): _132.QueryProposalRequest;
                toAmino(message: _132.QueryProposalRequest): _132.QueryProposalRequestAmino;
                fromAminoMsg(object: _132.QueryProposalRequestAminoMsg): _132.QueryProposalRequest;
                toAminoMsg(message: _132.QueryProposalRequest): _132.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _132.QueryProposalRequestProtoMsg): _132.QueryProposalRequest;
                toProto(message: _132.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _132.QueryProposalRequest): _132.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _132.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryProposalResponse;
                fromPartial(object: Partial<_132.QueryProposalResponse>): _132.QueryProposalResponse;
                fromAmino(object: _132.QueryProposalResponseAmino): _132.QueryProposalResponse;
                toAmino(message: _132.QueryProposalResponse): _132.QueryProposalResponseAmino;
                fromAminoMsg(object: _132.QueryProposalResponseAminoMsg): _132.QueryProposalResponse;
                toAminoMsg(message: _132.QueryProposalResponse): _132.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _132.QueryProposalResponseProtoMsg): _132.QueryProposalResponse;
                toProto(message: _132.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _132.QueryProposalResponse): _132.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _132.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_132.QueryProposalsByGroupPolicyRequest>): _132.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _132.QueryProposalsByGroupPolicyRequestAmino): _132.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _132.QueryProposalsByGroupPolicyRequest): _132.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _132.QueryProposalsByGroupPolicyRequestAminoMsg): _132.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _132.QueryProposalsByGroupPolicyRequest): _132.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _132.QueryProposalsByGroupPolicyRequestProtoMsg): _132.QueryProposalsByGroupPolicyRequest;
                toProto(message: _132.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _132.QueryProposalsByGroupPolicyRequest): _132.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _132.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_132.QueryProposalsByGroupPolicyResponse>): _132.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _132.QueryProposalsByGroupPolicyResponseAmino): _132.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _132.QueryProposalsByGroupPolicyResponse): _132.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _132.QueryProposalsByGroupPolicyResponseAminoMsg): _132.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _132.QueryProposalsByGroupPolicyResponse): _132.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _132.QueryProposalsByGroupPolicyResponseProtoMsg): _132.QueryProposalsByGroupPolicyResponse;
                toProto(message: _132.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _132.QueryProposalsByGroupPolicyResponse): _132.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _132.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_132.QueryVoteByProposalVoterRequest>): _132.QueryVoteByProposalVoterRequest;
                fromAmino(object: _132.QueryVoteByProposalVoterRequestAmino): _132.QueryVoteByProposalVoterRequest;
                toAmino(message: _132.QueryVoteByProposalVoterRequest): _132.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _132.QueryVoteByProposalVoterRequestAminoMsg): _132.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _132.QueryVoteByProposalVoterRequest): _132.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _132.QueryVoteByProposalVoterRequestProtoMsg): _132.QueryVoteByProposalVoterRequest;
                toProto(message: _132.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _132.QueryVoteByProposalVoterRequest): _132.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _132.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_132.QueryVoteByProposalVoterResponse>): _132.QueryVoteByProposalVoterResponse;
                fromAmino(object: _132.QueryVoteByProposalVoterResponseAmino): _132.QueryVoteByProposalVoterResponse;
                toAmino(message: _132.QueryVoteByProposalVoterResponse): _132.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _132.QueryVoteByProposalVoterResponseAminoMsg): _132.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _132.QueryVoteByProposalVoterResponse): _132.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _132.QueryVoteByProposalVoterResponseProtoMsg): _132.QueryVoteByProposalVoterResponse;
                toProto(message: _132.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _132.QueryVoteByProposalVoterResponse): _132.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _132.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_132.QueryVotesByProposalRequest>): _132.QueryVotesByProposalRequest;
                fromAmino(object: _132.QueryVotesByProposalRequestAmino): _132.QueryVotesByProposalRequest;
                toAmino(message: _132.QueryVotesByProposalRequest): _132.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _132.QueryVotesByProposalRequestAminoMsg): _132.QueryVotesByProposalRequest;
                toAminoMsg(message: _132.QueryVotesByProposalRequest): _132.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _132.QueryVotesByProposalRequestProtoMsg): _132.QueryVotesByProposalRequest;
                toProto(message: _132.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _132.QueryVotesByProposalRequest): _132.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _132.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_132.QueryVotesByProposalResponse>): _132.QueryVotesByProposalResponse;
                fromAmino(object: _132.QueryVotesByProposalResponseAmino): _132.QueryVotesByProposalResponse;
                toAmino(message: _132.QueryVotesByProposalResponse): _132.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _132.QueryVotesByProposalResponseAminoMsg): _132.QueryVotesByProposalResponse;
                toAminoMsg(message: _132.QueryVotesByProposalResponse): _132.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _132.QueryVotesByProposalResponseProtoMsg): _132.QueryVotesByProposalResponse;
                toProto(message: _132.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _132.QueryVotesByProposalResponse): _132.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _132.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_132.QueryVotesByVoterRequest>): _132.QueryVotesByVoterRequest;
                fromAmino(object: _132.QueryVotesByVoterRequestAmino): _132.QueryVotesByVoterRequest;
                toAmino(message: _132.QueryVotesByVoterRequest): _132.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _132.QueryVotesByVoterRequestAminoMsg): _132.QueryVotesByVoterRequest;
                toAminoMsg(message: _132.QueryVotesByVoterRequest): _132.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _132.QueryVotesByVoterRequestProtoMsg): _132.QueryVotesByVoterRequest;
                toProto(message: _132.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _132.QueryVotesByVoterRequest): _132.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _132.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_132.QueryVotesByVoterResponse>): _132.QueryVotesByVoterResponse;
                fromAmino(object: _132.QueryVotesByVoterResponseAmino): _132.QueryVotesByVoterResponse;
                toAmino(message: _132.QueryVotesByVoterResponse): _132.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _132.QueryVotesByVoterResponseAminoMsg): _132.QueryVotesByVoterResponse;
                toAminoMsg(message: _132.QueryVotesByVoterResponse): _132.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _132.QueryVotesByVoterResponseProtoMsg): _132.QueryVotesByVoterResponse;
                toProto(message: _132.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _132.QueryVotesByVoterResponse): _132.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_132.QueryGroupsByMemberRequest>): _132.QueryGroupsByMemberRequest;
                fromAmino(object: _132.QueryGroupsByMemberRequestAmino): _132.QueryGroupsByMemberRequest;
                toAmino(message: _132.QueryGroupsByMemberRequest): _132.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _132.QueryGroupsByMemberRequestAminoMsg): _132.QueryGroupsByMemberRequest;
                toAminoMsg(message: _132.QueryGroupsByMemberRequest): _132.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsByMemberRequestProtoMsg): _132.QueryGroupsByMemberRequest;
                toProto(message: _132.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsByMemberRequest): _132.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_132.QueryGroupsByMemberResponse>): _132.QueryGroupsByMemberResponse;
                fromAmino(object: _132.QueryGroupsByMemberResponseAmino): _132.QueryGroupsByMemberResponse;
                toAmino(message: _132.QueryGroupsByMemberResponse): _132.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _132.QueryGroupsByMemberResponseAminoMsg): _132.QueryGroupsByMemberResponse;
                toAminoMsg(message: _132.QueryGroupsByMemberResponse): _132.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsByMemberResponseProtoMsg): _132.QueryGroupsByMemberResponse;
                toProto(message: _132.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsByMemberResponse): _132.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _132.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryTallyResultRequest;
                fromPartial(object: Partial<_132.QueryTallyResultRequest>): _132.QueryTallyResultRequest;
                fromAmino(object: _132.QueryTallyResultRequestAmino): _132.QueryTallyResultRequest;
                toAmino(message: _132.QueryTallyResultRequest): _132.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _132.QueryTallyResultRequestAminoMsg): _132.QueryTallyResultRequest;
                toAminoMsg(message: _132.QueryTallyResultRequest): _132.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _132.QueryTallyResultRequestProtoMsg): _132.QueryTallyResultRequest;
                toProto(message: _132.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _132.QueryTallyResultRequest): _132.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _132.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryTallyResultResponse;
                fromPartial(object: Partial<_132.QueryTallyResultResponse>): _132.QueryTallyResultResponse;
                fromAmino(object: _132.QueryTallyResultResponseAmino): _132.QueryTallyResultResponse;
                toAmino(message: _132.QueryTallyResultResponse): _132.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _132.QueryTallyResultResponseAminoMsg): _132.QueryTallyResultResponse;
                toAminoMsg(message: _132.QueryTallyResultResponse): _132.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _132.QueryTallyResultResponseProtoMsg): _132.QueryTallyResultResponse;
                toProto(message: _132.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _132.QueryTallyResultResponse): _132.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _132.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsRequest;
                fromPartial(object: Partial<_132.QueryGroupsRequest>): _132.QueryGroupsRequest;
                fromAmino(object: _132.QueryGroupsRequestAmino): _132.QueryGroupsRequest;
                toAmino(message: _132.QueryGroupsRequest): _132.QueryGroupsRequestAmino;
                fromAminoMsg(object: _132.QueryGroupsRequestAminoMsg): _132.QueryGroupsRequest;
                toAminoMsg(message: _132.QueryGroupsRequest): _132.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsRequestProtoMsg): _132.QueryGroupsRequest;
                toProto(message: _132.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsRequest): _132.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _132.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryGroupsResponse;
                fromPartial(object: Partial<_132.QueryGroupsResponse>): _132.QueryGroupsResponse;
                fromAmino(object: _132.QueryGroupsResponseAmino): _132.QueryGroupsResponse;
                toAmino(message: _132.QueryGroupsResponse): _132.QueryGroupsResponseAmino;
                fromAminoMsg(object: _132.QueryGroupsResponseAminoMsg): _132.QueryGroupsResponse;
                toAminoMsg(message: _132.QueryGroupsResponse): _132.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryGroupsResponseProtoMsg): _132.QueryGroupsResponse;
                toProto(message: _132.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryGroupsResponse): _132.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _130.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventCreateGroup;
                fromPartial(object: Partial<_130.EventCreateGroup>): _130.EventCreateGroup;
                fromAmino(object: _130.EventCreateGroupAmino): _130.EventCreateGroup;
                toAmino(message: _130.EventCreateGroup): _130.EventCreateGroupAmino;
                fromAminoMsg(object: _130.EventCreateGroupAminoMsg): _130.EventCreateGroup;
                toAminoMsg(message: _130.EventCreateGroup): _130.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _130.EventCreateGroupProtoMsg): _130.EventCreateGroup;
                toProto(message: _130.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _130.EventCreateGroup): _130.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _130.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventUpdateGroup;
                fromPartial(object: Partial<_130.EventUpdateGroup>): _130.EventUpdateGroup;
                fromAmino(object: _130.EventUpdateGroupAmino): _130.EventUpdateGroup;
                toAmino(message: _130.EventUpdateGroup): _130.EventUpdateGroupAmino;
                fromAminoMsg(object: _130.EventUpdateGroupAminoMsg): _130.EventUpdateGroup;
                toAminoMsg(message: _130.EventUpdateGroup): _130.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _130.EventUpdateGroupProtoMsg): _130.EventUpdateGroup;
                toProto(message: _130.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _130.EventUpdateGroup): _130.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _130.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventCreateGroupPolicy;
                fromPartial(object: Partial<_130.EventCreateGroupPolicy>): _130.EventCreateGroupPolicy;
                fromAmino(object: _130.EventCreateGroupPolicyAmino): _130.EventCreateGroupPolicy;
                toAmino(message: _130.EventCreateGroupPolicy): _130.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _130.EventCreateGroupPolicyAminoMsg): _130.EventCreateGroupPolicy;
                toAminoMsg(message: _130.EventCreateGroupPolicy): _130.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _130.EventCreateGroupPolicyProtoMsg): _130.EventCreateGroupPolicy;
                toProto(message: _130.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _130.EventCreateGroupPolicy): _130.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _130.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_130.EventUpdateGroupPolicy>): _130.EventUpdateGroupPolicy;
                fromAmino(object: _130.EventUpdateGroupPolicyAmino): _130.EventUpdateGroupPolicy;
                toAmino(message: _130.EventUpdateGroupPolicy): _130.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _130.EventUpdateGroupPolicyAminoMsg): _130.EventUpdateGroupPolicy;
                toAminoMsg(message: _130.EventUpdateGroupPolicy): _130.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _130.EventUpdateGroupPolicyProtoMsg): _130.EventUpdateGroupPolicy;
                toProto(message: _130.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _130.EventUpdateGroupPolicy): _130.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _130.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventSubmitProposal;
                fromPartial(object: Partial<_130.EventSubmitProposal>): _130.EventSubmitProposal;
                fromAmino(object: _130.EventSubmitProposalAmino): _130.EventSubmitProposal;
                toAmino(message: _130.EventSubmitProposal): _130.EventSubmitProposalAmino;
                fromAminoMsg(object: _130.EventSubmitProposalAminoMsg): _130.EventSubmitProposal;
                toAminoMsg(message: _130.EventSubmitProposal): _130.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _130.EventSubmitProposalProtoMsg): _130.EventSubmitProposal;
                toProto(message: _130.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _130.EventSubmitProposal): _130.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _130.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventWithdrawProposal;
                fromPartial(object: Partial<_130.EventWithdrawProposal>): _130.EventWithdrawProposal;
                fromAmino(object: _130.EventWithdrawProposalAmino): _130.EventWithdrawProposal;
                toAmino(message: _130.EventWithdrawProposal): _130.EventWithdrawProposalAmino;
                fromAminoMsg(object: _130.EventWithdrawProposalAminoMsg): _130.EventWithdrawProposal;
                toAminoMsg(message: _130.EventWithdrawProposal): _130.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _130.EventWithdrawProposalProtoMsg): _130.EventWithdrawProposal;
                toProto(message: _130.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _130.EventWithdrawProposal): _130.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _130.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventVote;
                fromPartial(object: Partial<_130.EventVote>): _130.EventVote;
                fromAmino(object: _130.EventVoteAmino): _130.EventVote;
                toAmino(message: _130.EventVote): _130.EventVoteAmino;
                fromAminoMsg(object: _130.EventVoteAminoMsg): _130.EventVote;
                toAminoMsg(message: _130.EventVote): _130.EventVoteAminoMsg;
                fromProtoMsg(message: _130.EventVoteProtoMsg): _130.EventVote;
                toProto(message: _130.EventVote): Uint8Array;
                toProtoMsg(message: _130.EventVote): _130.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _130.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventExec;
                fromPartial(object: Partial<_130.EventExec>): _130.EventExec;
                fromAmino(object: _130.EventExecAmino): _130.EventExec;
                toAmino(message: _130.EventExec): _130.EventExecAmino;
                fromAminoMsg(object: _130.EventExecAminoMsg): _130.EventExec;
                toAminoMsg(message: _130.EventExec): _130.EventExecAminoMsg;
                fromProtoMsg(message: _130.EventExecProtoMsg): _130.EventExec;
                toProto(message: _130.EventExec): Uint8Array;
                toProtoMsg(message: _130.EventExec): _130.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _130.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.EventLeaveGroup;
                fromPartial(object: Partial<_130.EventLeaveGroup>): _130.EventLeaveGroup;
                fromAmino(object: _130.EventLeaveGroupAmino): _130.EventLeaveGroup;
                toAmino(message: _130.EventLeaveGroup): _130.EventLeaveGroupAmino;
                fromAminoMsg(object: _130.EventLeaveGroupAminoMsg): _130.EventLeaveGroup;
                toAminoMsg(message: _130.EventLeaveGroup): _130.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _130.EventLeaveGroupProtoMsg): _130.EventLeaveGroup;
                toProto(message: _130.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _130.EventLeaveGroup): _130.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _135.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.Module;
                    fromPartial(object: Partial<_135.Module>): _135.Module;
                    fromAmino(object: _135.ModuleAmino): _135.Module;
                    toAmino(message: _135.Module): _135.ModuleAmino;
                    fromAminoMsg(object: _135.ModuleAminoMsg): _135.Module;
                    toAminoMsg(message: _135.Module): _135.ModuleAminoMsg;
                    fromProtoMsg(message: _135.ModuleProtoMsg): _135.Module;
                    toProto(message: _135.Module): Uint8Array;
                    toProtoMsg(message: _135.Module): _135.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _138.QueryParamsRequest): Promise<_138.QueryParamsResponse>;
                inflation(request?: _138.QueryInflationRequest): Promise<_138.QueryInflationResponse>;
                annualProvisions(request?: _138.QueryAnnualProvisionsRequest): Promise<_138.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
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
                    toAmino: (message: _139.MsgUpdateParams) => _139.MsgUpdateParamsAmino;
                    fromAmino: (object: _139.MsgUpdateParamsAmino) => _139.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _139.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.MsgUpdateParams;
                fromPartial(object: Partial<_139.MsgUpdateParams>): _139.MsgUpdateParams;
                fromAmino(object: _139.MsgUpdateParamsAmino): _139.MsgUpdateParams;
                toAmino(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsAminoMsg): _139.MsgUpdateParams;
                toAminoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsProtoMsg): _139.MsgUpdateParams;
                toProto(message: _139.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _139.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_139.MsgUpdateParamsResponse>): _139.MsgUpdateParamsResponse;
                fromAmino(_: _139.MsgUpdateParamsResponseAmino): _139.MsgUpdateParamsResponse;
                toAmino(_: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsResponseAminoMsg): _139.MsgUpdateParamsResponse;
                toAminoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsResponseProtoMsg): _139.MsgUpdateParamsResponse;
                toProto(message: _139.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _138.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryParamsRequest;
                fromPartial(_: Partial<_138.QueryParamsRequest>): _138.QueryParamsRequest;
                fromAmino(_: _138.QueryParamsRequestAmino): _138.QueryParamsRequest;
                toAmino(_: _138.QueryParamsRequest): _138.QueryParamsRequestAmino;
                fromAminoMsg(object: _138.QueryParamsRequestAminoMsg): _138.QueryParamsRequest;
                toAminoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryParamsRequestProtoMsg): _138.QueryParamsRequest;
                toProto(message: _138.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryParamsRequest): _138.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _138.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryParamsResponse;
                fromPartial(object: Partial<_138.QueryParamsResponse>): _138.QueryParamsResponse;
                fromAmino(object: _138.QueryParamsResponseAmino): _138.QueryParamsResponse;
                toAmino(message: _138.QueryParamsResponse): _138.QueryParamsResponseAmino;
                fromAminoMsg(object: _138.QueryParamsResponseAminoMsg): _138.QueryParamsResponse;
                toAminoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryParamsResponseProtoMsg): _138.QueryParamsResponse;
                toProto(message: _138.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryParamsResponse): _138.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _138.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryInflationRequest;
                fromPartial(_: Partial<_138.QueryInflationRequest>): _138.QueryInflationRequest;
                fromAmino(_: _138.QueryInflationRequestAmino): _138.QueryInflationRequest;
                toAmino(_: _138.QueryInflationRequest): _138.QueryInflationRequestAmino;
                fromAminoMsg(object: _138.QueryInflationRequestAminoMsg): _138.QueryInflationRequest;
                toAminoMsg(message: _138.QueryInflationRequest): _138.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _138.QueryInflationRequestProtoMsg): _138.QueryInflationRequest;
                toProto(message: _138.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _138.QueryInflationRequest): _138.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _138.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryInflationResponse;
                fromPartial(object: Partial<_138.QueryInflationResponse>): _138.QueryInflationResponse;
                fromAmino(object: _138.QueryInflationResponseAmino): _138.QueryInflationResponse;
                toAmino(message: _138.QueryInflationResponse): _138.QueryInflationResponseAmino;
                fromAminoMsg(object: _138.QueryInflationResponseAminoMsg): _138.QueryInflationResponse;
                toAminoMsg(message: _138.QueryInflationResponse): _138.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _138.QueryInflationResponseProtoMsg): _138.QueryInflationResponse;
                toProto(message: _138.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _138.QueryInflationResponse): _138.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _138.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_138.QueryAnnualProvisionsRequest>): _138.QueryAnnualProvisionsRequest;
                fromAmino(_: _138.QueryAnnualProvisionsRequestAmino): _138.QueryAnnualProvisionsRequest;
                toAmino(_: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _138.QueryAnnualProvisionsRequestAminoMsg): _138.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAnnualProvisionsRequestProtoMsg): _138.QueryAnnualProvisionsRequest;
                toProto(message: _138.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAnnualProvisionsRequest): _138.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _138.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_138.QueryAnnualProvisionsResponse>): _138.QueryAnnualProvisionsResponse;
                fromAmino(object: _138.QueryAnnualProvisionsResponseAmino): _138.QueryAnnualProvisionsResponse;
                toAmino(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _138.QueryAnnualProvisionsResponseAminoMsg): _138.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAnnualProvisionsResponseProtoMsg): _138.QueryAnnualProvisionsResponse;
                toProto(message: _138.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAnnualProvisionsResponse): _138.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _137.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Minter;
                fromPartial(object: Partial<_137.Minter>): _137.Minter;
                fromAmino(object: _137.MinterAmino): _137.Minter;
                toAmino(message: _137.Minter): _137.MinterAmino;
                fromAminoMsg(object: _137.MinterAminoMsg): _137.Minter;
                toAminoMsg(message: _137.Minter): _137.MinterAminoMsg;
                fromProtoMsg(message: _137.MinterProtoMsg): _137.Minter;
                toProto(message: _137.Minter): Uint8Array;
                toProtoMsg(message: _137.Minter): _137.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _137.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Params;
                fromPartial(object: Partial<_137.Params>): _137.Params;
                fromAmino(object: _137.ParamsAmino): _137.Params;
                toAmino(message: _137.Params): _137.ParamsAmino;
                fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                toAminoMsg(message: _137.Params): _137.ParamsAminoMsg;
                fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                toProto(message: _137.Params): Uint8Array;
                toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
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
                    typeUrl: string;
                    encode(_: _141.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _141.Module;
                    fromPartial(_: Partial<_141.Module>): _141.Module;
                    fromAmino(_: _141.ModuleAmino): _141.Module;
                    toAmino(_: _141.Module): _141.ModuleAmino;
                    fromAminoMsg(object: _141.ModuleAminoMsg): _141.Module;
                    toAminoMsg(message: _141.Module): _141.ModuleAminoMsg;
                    fromProtoMsg(message: _141.ModuleProtoMsg): _141.Module;
                    toProto(message: _141.Module): Uint8Array;
                    toProtoMsg(message: _141.Module): _141.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _145.QueryBalanceRequest): Promise<_145.QueryBalanceResponse>;
                owner(request: _145.QueryOwnerRequest): Promise<_145.QueryOwnerResponse>;
                supply(request: _145.QuerySupplyRequest): Promise<_145.QuerySupplyResponse>;
                nFTs(request: _145.QueryNFTsRequest): Promise<_145.QueryNFTsResponse>;
                nFT(request: _145.QueryNFTRequest): Promise<_145.QueryNFTResponse>;
                class(request: _145.QueryClassRequest): Promise<_145.QueryClassResponse>;
                classes(request?: _145.QueryClassesRequest): Promise<_145.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
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
                    toAmino: (message: _146.MsgSend) => _146.MsgSendAmino;
                    fromAmino: (object: _146.MsgSendAmino) => _146.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _146.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgSend;
                fromPartial(object: Partial<_146.MsgSend>): _146.MsgSend;
                fromAmino(object: _146.MsgSendAmino): _146.MsgSend;
                toAmino(message: _146.MsgSend): _146.MsgSendAmino;
                fromAminoMsg(object: _146.MsgSendAminoMsg): _146.MsgSend;
                toAminoMsg(message: _146.MsgSend): _146.MsgSendAminoMsg;
                fromProtoMsg(message: _146.MsgSendProtoMsg): _146.MsgSend;
                toProto(message: _146.MsgSend): Uint8Array;
                toProtoMsg(message: _146.MsgSend): _146.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _146.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _146.MsgSendResponse;
                fromPartial(_: Partial<_146.MsgSendResponse>): _146.MsgSendResponse;
                fromAmino(_: _146.MsgSendResponseAmino): _146.MsgSendResponse;
                toAmino(_: _146.MsgSendResponse): _146.MsgSendResponseAmino;
                fromAminoMsg(object: _146.MsgSendResponseAminoMsg): _146.MsgSendResponse;
                toAminoMsg(message: _146.MsgSendResponse): _146.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _146.MsgSendResponseProtoMsg): _146.MsgSendResponse;
                toProto(message: _146.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _146.MsgSendResponse): _146.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _145.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryBalanceRequest;
                fromPartial(object: Partial<_145.QueryBalanceRequest>): _145.QueryBalanceRequest;
                fromAmino(object: _145.QueryBalanceRequestAmino): _145.QueryBalanceRequest;
                toAmino(message: _145.QueryBalanceRequest): _145.QueryBalanceRequestAmino;
                fromAminoMsg(object: _145.QueryBalanceRequestAminoMsg): _145.QueryBalanceRequest;
                toAminoMsg(message: _145.QueryBalanceRequest): _145.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _145.QueryBalanceRequestProtoMsg): _145.QueryBalanceRequest;
                toProto(message: _145.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _145.QueryBalanceRequest): _145.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _145.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryBalanceResponse;
                fromPartial(object: Partial<_145.QueryBalanceResponse>): _145.QueryBalanceResponse;
                fromAmino(object: _145.QueryBalanceResponseAmino): _145.QueryBalanceResponse;
                toAmino(message: _145.QueryBalanceResponse): _145.QueryBalanceResponseAmino;
                fromAminoMsg(object: _145.QueryBalanceResponseAminoMsg): _145.QueryBalanceResponse;
                toAminoMsg(message: _145.QueryBalanceResponse): _145.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _145.QueryBalanceResponseProtoMsg): _145.QueryBalanceResponse;
                toProto(message: _145.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _145.QueryBalanceResponse): _145.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _145.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryOwnerRequest;
                fromPartial(object: Partial<_145.QueryOwnerRequest>): _145.QueryOwnerRequest;
                fromAmino(object: _145.QueryOwnerRequestAmino): _145.QueryOwnerRequest;
                toAmino(message: _145.QueryOwnerRequest): _145.QueryOwnerRequestAmino;
                fromAminoMsg(object: _145.QueryOwnerRequestAminoMsg): _145.QueryOwnerRequest;
                toAminoMsg(message: _145.QueryOwnerRequest): _145.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _145.QueryOwnerRequestProtoMsg): _145.QueryOwnerRequest;
                toProto(message: _145.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _145.QueryOwnerRequest): _145.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _145.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryOwnerResponse;
                fromPartial(object: Partial<_145.QueryOwnerResponse>): _145.QueryOwnerResponse;
                fromAmino(object: _145.QueryOwnerResponseAmino): _145.QueryOwnerResponse;
                toAmino(message: _145.QueryOwnerResponse): _145.QueryOwnerResponseAmino;
                fromAminoMsg(object: _145.QueryOwnerResponseAminoMsg): _145.QueryOwnerResponse;
                toAminoMsg(message: _145.QueryOwnerResponse): _145.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _145.QueryOwnerResponseProtoMsg): _145.QueryOwnerResponse;
                toProto(message: _145.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _145.QueryOwnerResponse): _145.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _145.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QuerySupplyRequest;
                fromPartial(object: Partial<_145.QuerySupplyRequest>): _145.QuerySupplyRequest;
                fromAmino(object: _145.QuerySupplyRequestAmino): _145.QuerySupplyRequest;
                toAmino(message: _145.QuerySupplyRequest): _145.QuerySupplyRequestAmino;
                fromAminoMsg(object: _145.QuerySupplyRequestAminoMsg): _145.QuerySupplyRequest;
                toAminoMsg(message: _145.QuerySupplyRequest): _145.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _145.QuerySupplyRequestProtoMsg): _145.QuerySupplyRequest;
                toProto(message: _145.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _145.QuerySupplyRequest): _145.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _145.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QuerySupplyResponse;
                fromPartial(object: Partial<_145.QuerySupplyResponse>): _145.QuerySupplyResponse;
                fromAmino(object: _145.QuerySupplyResponseAmino): _145.QuerySupplyResponse;
                toAmino(message: _145.QuerySupplyResponse): _145.QuerySupplyResponseAmino;
                fromAminoMsg(object: _145.QuerySupplyResponseAminoMsg): _145.QuerySupplyResponse;
                toAminoMsg(message: _145.QuerySupplyResponse): _145.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _145.QuerySupplyResponseProtoMsg): _145.QuerySupplyResponse;
                toProto(message: _145.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _145.QuerySupplyResponse): _145.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _145.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryNFTsRequest;
                fromPartial(object: Partial<_145.QueryNFTsRequest>): _145.QueryNFTsRequest;
                fromAmino(object: _145.QueryNFTsRequestAmino): _145.QueryNFTsRequest;
                toAmino(message: _145.QueryNFTsRequest): _145.QueryNFTsRequestAmino;
                fromAminoMsg(object: _145.QueryNFTsRequestAminoMsg): _145.QueryNFTsRequest;
                toAminoMsg(message: _145.QueryNFTsRequest): _145.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryNFTsRequestProtoMsg): _145.QueryNFTsRequest;
                toProto(message: _145.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryNFTsRequest): _145.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _145.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryNFTsResponse;
                fromPartial(object: Partial<_145.QueryNFTsResponse>): _145.QueryNFTsResponse;
                fromAmino(object: _145.QueryNFTsResponseAmino): _145.QueryNFTsResponse;
                toAmino(message: _145.QueryNFTsResponse): _145.QueryNFTsResponseAmino;
                fromAminoMsg(object: _145.QueryNFTsResponseAminoMsg): _145.QueryNFTsResponse;
                toAminoMsg(message: _145.QueryNFTsResponse): _145.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryNFTsResponseProtoMsg): _145.QueryNFTsResponse;
                toProto(message: _145.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryNFTsResponse): _145.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _145.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryNFTRequest;
                fromPartial(object: Partial<_145.QueryNFTRequest>): _145.QueryNFTRequest;
                fromAmino(object: _145.QueryNFTRequestAmino): _145.QueryNFTRequest;
                toAmino(message: _145.QueryNFTRequest): _145.QueryNFTRequestAmino;
                fromAminoMsg(object: _145.QueryNFTRequestAminoMsg): _145.QueryNFTRequest;
                toAminoMsg(message: _145.QueryNFTRequest): _145.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _145.QueryNFTRequestProtoMsg): _145.QueryNFTRequest;
                toProto(message: _145.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _145.QueryNFTRequest): _145.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _145.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryNFTResponse;
                fromPartial(object: Partial<_145.QueryNFTResponse>): _145.QueryNFTResponse;
                fromAmino(object: _145.QueryNFTResponseAmino): _145.QueryNFTResponse;
                toAmino(message: _145.QueryNFTResponse): _145.QueryNFTResponseAmino;
                fromAminoMsg(object: _145.QueryNFTResponseAminoMsg): _145.QueryNFTResponse;
                toAminoMsg(message: _145.QueryNFTResponse): _145.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _145.QueryNFTResponseProtoMsg): _145.QueryNFTResponse;
                toProto(message: _145.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _145.QueryNFTResponse): _145.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _145.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryClassRequest;
                fromPartial(object: Partial<_145.QueryClassRequest>): _145.QueryClassRequest;
                fromAmino(object: _145.QueryClassRequestAmino): _145.QueryClassRequest;
                toAmino(message: _145.QueryClassRequest): _145.QueryClassRequestAmino;
                fromAminoMsg(object: _145.QueryClassRequestAminoMsg): _145.QueryClassRequest;
                toAminoMsg(message: _145.QueryClassRequest): _145.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _145.QueryClassRequestProtoMsg): _145.QueryClassRequest;
                toProto(message: _145.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _145.QueryClassRequest): _145.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _145.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryClassResponse;
                fromPartial(object: Partial<_145.QueryClassResponse>): _145.QueryClassResponse;
                fromAmino(object: _145.QueryClassResponseAmino): _145.QueryClassResponse;
                toAmino(message: _145.QueryClassResponse): _145.QueryClassResponseAmino;
                fromAminoMsg(object: _145.QueryClassResponseAminoMsg): _145.QueryClassResponse;
                toAminoMsg(message: _145.QueryClassResponse): _145.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _145.QueryClassResponseProtoMsg): _145.QueryClassResponse;
                toProto(message: _145.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _145.QueryClassResponse): _145.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _145.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryClassesRequest;
                fromPartial(object: Partial<_145.QueryClassesRequest>): _145.QueryClassesRequest;
                fromAmino(object: _145.QueryClassesRequestAmino): _145.QueryClassesRequest;
                toAmino(message: _145.QueryClassesRequest): _145.QueryClassesRequestAmino;
                fromAminoMsg(object: _145.QueryClassesRequestAminoMsg): _145.QueryClassesRequest;
                toAminoMsg(message: _145.QueryClassesRequest): _145.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _145.QueryClassesRequestProtoMsg): _145.QueryClassesRequest;
                toProto(message: _145.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _145.QueryClassesRequest): _145.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _145.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.QueryClassesResponse;
                fromPartial(object: Partial<_145.QueryClassesResponse>): _145.QueryClassesResponse;
                fromAmino(object: _145.QueryClassesResponseAmino): _145.QueryClassesResponse;
                toAmino(message: _145.QueryClassesResponse): _145.QueryClassesResponseAmino;
                fromAminoMsg(object: _145.QueryClassesResponseAminoMsg): _145.QueryClassesResponse;
                toAminoMsg(message: _145.QueryClassesResponse): _145.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _145.QueryClassesResponseProtoMsg): _145.QueryClassesResponse;
                toProto(message: _145.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _145.QueryClassesResponse): _145.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _144.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.Class;
                fromPartial(object: Partial<_144.Class>): _144.Class;
                fromAmino(object: _144.ClassAmino): _144.Class;
                toAmino(message: _144.Class): _144.ClassAmino;
                fromAminoMsg(object: _144.ClassAminoMsg): _144.Class;
                toAminoMsg(message: _144.Class): _144.ClassAminoMsg;
                fromProtoMsg(message: _144.ClassProtoMsg): _144.Class;
                toProto(message: _144.Class): Uint8Array;
                toProtoMsg(message: _144.Class): _144.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _144.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.NFT;
                fromPartial(object: Partial<_144.NFT>): _144.NFT;
                fromAmino(object: _144.NFTAmino): _144.NFT;
                toAmino(message: _144.NFT): _144.NFTAmino;
                fromAminoMsg(object: _144.NFTAminoMsg): _144.NFT;
                toAminoMsg(message: _144.NFT): _144.NFTAminoMsg;
                fromProtoMsg(message: _144.NFTProtoMsg): _144.NFT;
                toProto(message: _144.NFT): Uint8Array;
                toProtoMsg(message: _144.NFT): _144.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _143.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.GenesisState;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
                fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
                toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
                fromAminoMsg(object: _143.GenesisStateAminoMsg): _143.GenesisState;
                toAminoMsg(message: _143.GenesisState): _143.GenesisStateAminoMsg;
                fromProtoMsg(message: _143.GenesisStateProtoMsg): _143.GenesisState;
                toProto(message: _143.GenesisState): Uint8Array;
                toProtoMsg(message: _143.GenesisState): _143.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _143.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Entry;
                fromPartial(object: Partial<_143.Entry>): _143.Entry;
                fromAmino(object: _143.EntryAmino): _143.Entry;
                toAmino(message: _143.Entry): _143.EntryAmino;
                fromAminoMsg(object: _143.EntryAminoMsg): _143.Entry;
                toAminoMsg(message: _143.Entry): _143.EntryAminoMsg;
                fromProtoMsg(message: _143.EntryProtoMsg): _143.Entry;
                toProto(message: _143.Entry): Uint8Array;
                toProtoMsg(message: _143.Entry): _143.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _142.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.EventSend;
                fromPartial(object: Partial<_142.EventSend>): _142.EventSend;
                fromAmino(object: _142.EventSendAmino): _142.EventSend;
                toAmino(message: _142.EventSend): _142.EventSendAmino;
                fromAminoMsg(object: _142.EventSendAminoMsg): _142.EventSend;
                toAminoMsg(message: _142.EventSend): _142.EventSendAminoMsg;
                fromProtoMsg(message: _142.EventSendProtoMsg): _142.EventSend;
                toProto(message: _142.EventSend): Uint8Array;
                toProtoMsg(message: _142.EventSend): _142.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _142.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.EventMint;
                fromPartial(object: Partial<_142.EventMint>): _142.EventMint;
                fromAmino(object: _142.EventMintAmino): _142.EventMint;
                toAmino(message: _142.EventMint): _142.EventMintAmino;
                fromAminoMsg(object: _142.EventMintAminoMsg): _142.EventMint;
                toAminoMsg(message: _142.EventMint): _142.EventMintAminoMsg;
                fromProtoMsg(message: _142.EventMintProtoMsg): _142.EventMint;
                toProto(message: _142.EventMint): Uint8Array;
                toProtoMsg(message: _142.EventMint): _142.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _142.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.EventBurn;
                fromPartial(object: Partial<_142.EventBurn>): _142.EventBurn;
                fromAmino(object: _142.EventBurnAmino): _142.EventBurn;
                toAmino(message: _142.EventBurn): _142.EventBurnAmino;
                fromAminoMsg(object: _142.EventBurnAminoMsg): _142.EventBurn;
                toAminoMsg(message: _142.EventBurn): _142.EventBurnAminoMsg;
                fromProtoMsg(message: _142.EventBurnProtoMsg): _142.EventBurn;
                toProto(message: _142.EventBurn): Uint8Array;
                toProtoMsg(message: _142.EventBurn): _142.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _147.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _147.Module;
                    fromPartial(_: Partial<_147.Module>): _147.Module;
                    fromAmino(_: _147.ModuleAmino): _147.Module;
                    toAmino(_: _147.Module): _147.ModuleAmino;
                    fromAminoMsg(object: _147.ModuleAminoMsg): _147.Module;
                    toAminoMsg(message: _147.Module): _147.ModuleAminoMsg;
                    fromProtoMsg(message: _147.ModuleProtoMsg): _147.Module;
                    toProto(message: _147.Module): Uint8Array;
                    toProtoMsg(message: _147.Module): _147.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _313.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _148.GetRequest): Promise<_148.GetResponse>;
                    list(request: _148.ListRequest): Promise<_148.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _148.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.GetRequest;
                    fromPartial(object: Partial<_148.GetRequest>): _148.GetRequest;
                    fromAmino(object: _148.GetRequestAmino): _148.GetRequest;
                    toAmino(message: _148.GetRequest): _148.GetRequestAmino;
                    fromAminoMsg(object: _148.GetRequestAminoMsg): _148.GetRequest;
                    toAminoMsg(message: _148.GetRequest): _148.GetRequestAminoMsg;
                    fromProtoMsg(message: _148.GetRequestProtoMsg): _148.GetRequest;
                    toProto(message: _148.GetRequest): Uint8Array;
                    toProtoMsg(message: _148.GetRequest): _148.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _148.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.GetResponse;
                    fromPartial(object: Partial<_148.GetResponse>): _148.GetResponse;
                    fromAmino(object: _148.GetResponseAmino): _148.GetResponse;
                    toAmino(message: _148.GetResponse): _148.GetResponseAmino;
                    fromAminoMsg(object: _148.GetResponseAminoMsg): _148.GetResponse;
                    toAminoMsg(message: _148.GetResponse): _148.GetResponseAminoMsg;
                    fromProtoMsg(message: _148.GetResponseProtoMsg): _148.GetResponse;
                    toProto(message: _148.GetResponse): Uint8Array;
                    toProtoMsg(message: _148.GetResponse): _148.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _148.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ListRequest;
                    fromPartial(object: Partial<_148.ListRequest>): _148.ListRequest;
                    fromAmino(object: _148.ListRequestAmino): _148.ListRequest;
                    toAmino(message: _148.ListRequest): _148.ListRequestAmino;
                    fromAminoMsg(object: _148.ListRequestAminoMsg): _148.ListRequest;
                    toAminoMsg(message: _148.ListRequest): _148.ListRequestAminoMsg;
                    fromProtoMsg(message: _148.ListRequestProtoMsg): _148.ListRequest;
                    toProto(message: _148.ListRequest): Uint8Array;
                    toProtoMsg(message: _148.ListRequest): _148.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _148.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ListRequest_Prefix;
                    fromPartial(object: Partial<_148.ListRequest_Prefix>): _148.ListRequest_Prefix;
                    fromAmino(object: _148.ListRequest_PrefixAmino): _148.ListRequest_Prefix;
                    toAmino(message: _148.ListRequest_Prefix): _148.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _148.ListRequest_PrefixAminoMsg): _148.ListRequest_Prefix;
                    toAminoMsg(message: _148.ListRequest_Prefix): _148.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _148.ListRequest_PrefixProtoMsg): _148.ListRequest_Prefix;
                    toProto(message: _148.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _148.ListRequest_Prefix): _148.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _148.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ListRequest_Range;
                    fromPartial(object: Partial<_148.ListRequest_Range>): _148.ListRequest_Range;
                    fromAmino(object: _148.ListRequest_RangeAmino): _148.ListRequest_Range;
                    toAmino(message: _148.ListRequest_Range): _148.ListRequest_RangeAmino;
                    fromAminoMsg(object: _148.ListRequest_RangeAminoMsg): _148.ListRequest_Range;
                    toAminoMsg(message: _148.ListRequest_Range): _148.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _148.ListRequest_RangeProtoMsg): _148.ListRequest_Range;
                    toProto(message: _148.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _148.ListRequest_Range): _148.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _148.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.ListResponse;
                    fromPartial(object: Partial<_148.ListResponse>): _148.ListResponse;
                    fromAmino(object: _148.ListResponseAmino): _148.ListResponse;
                    toAmino(message: _148.ListResponse): _148.ListResponseAmino;
                    fromAminoMsg(object: _148.ListResponseAminoMsg): _148.ListResponse;
                    toAminoMsg(message: _148.ListResponse): _148.ListResponseAminoMsg;
                    fromProtoMsg(message: _148.ListResponseProtoMsg): _148.ListResponse;
                    toProto(message: _148.ListResponse): Uint8Array;
                    toProtoMsg(message: _148.ListResponse): _148.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _148.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.IndexValue;
                    fromPartial(object: Partial<_148.IndexValue>): _148.IndexValue;
                    fromAmino(object: _148.IndexValueAmino): _148.IndexValue;
                    toAmino(message: _148.IndexValue): _148.IndexValueAmino;
                    fromAminoMsg(object: _148.IndexValueAminoMsg): _148.IndexValue;
                    toAminoMsg(message: _148.IndexValue): _148.IndexValueAminoMsg;
                    fromProtoMsg(message: _148.IndexValueProtoMsg): _148.IndexValue;
                    toProto(message: _148.IndexValue): Uint8Array;
                    toProtoMsg(message: _148.IndexValue): _148.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _149.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.TableDescriptor;
                fromPartial(object: Partial<_149.TableDescriptor>): _149.TableDescriptor;
                fromAmino(object: _149.TableDescriptorAmino): _149.TableDescriptor;
                toAmino(message: _149.TableDescriptor): _149.TableDescriptorAmino;
                fromAminoMsg(object: _149.TableDescriptorAminoMsg): _149.TableDescriptor;
                toAminoMsg(message: _149.TableDescriptor): _149.TableDescriptorAminoMsg;
                fromProtoMsg(message: _149.TableDescriptorProtoMsg): _149.TableDescriptor;
                toProto(message: _149.TableDescriptor): Uint8Array;
                toProtoMsg(message: _149.TableDescriptor): _149.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _149.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_149.PrimaryKeyDescriptor>): _149.PrimaryKeyDescriptor;
                fromAmino(object: _149.PrimaryKeyDescriptorAmino): _149.PrimaryKeyDescriptor;
                toAmino(message: _149.PrimaryKeyDescriptor): _149.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _149.PrimaryKeyDescriptorAminoMsg): _149.PrimaryKeyDescriptor;
                toAminoMsg(message: _149.PrimaryKeyDescriptor): _149.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _149.PrimaryKeyDescriptorProtoMsg): _149.PrimaryKeyDescriptor;
                toProto(message: _149.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _149.PrimaryKeyDescriptor): _149.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _149.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_149.SecondaryIndexDescriptor>): _149.SecondaryIndexDescriptor;
                fromAmino(object: _149.SecondaryIndexDescriptorAmino): _149.SecondaryIndexDescriptor;
                toAmino(message: _149.SecondaryIndexDescriptor): _149.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _149.SecondaryIndexDescriptorAminoMsg): _149.SecondaryIndexDescriptor;
                toAminoMsg(message: _149.SecondaryIndexDescriptor): _149.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _149.SecondaryIndexDescriptorProtoMsg): _149.SecondaryIndexDescriptor;
                toProto(message: _149.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _149.SecondaryIndexDescriptor): _149.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _149.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.SingletonDescriptor;
                fromPartial(object: Partial<_149.SingletonDescriptor>): _149.SingletonDescriptor;
                fromAmino(object: _149.SingletonDescriptorAmino): _149.SingletonDescriptor;
                toAmino(message: _149.SingletonDescriptor): _149.SingletonDescriptorAmino;
                fromAminoMsg(object: _149.SingletonDescriptorAminoMsg): _149.SingletonDescriptor;
                toAminoMsg(message: _149.SingletonDescriptor): _149.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _149.SingletonDescriptorProtoMsg): _149.SingletonDescriptor;
                toProto(message: _149.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _149.SingletonDescriptor): _149.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _150.StorageType;
            storageTypeToJSON(object: _150.StorageType): string;
            StorageType: typeof _150.StorageType;
            StorageTypeSDKType: typeof _150.StorageType;
            StorageTypeAmino: typeof _150.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _150.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_150.ModuleSchemaDescriptor>): _150.ModuleSchemaDescriptor;
                fromAmino(object: _150.ModuleSchemaDescriptorAmino): _150.ModuleSchemaDescriptor;
                toAmino(message: _150.ModuleSchemaDescriptor): _150.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _150.ModuleSchemaDescriptorAminoMsg): _150.ModuleSchemaDescriptor;
                toAminoMsg(message: _150.ModuleSchemaDescriptor): _150.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _150.ModuleSchemaDescriptorProtoMsg): _150.ModuleSchemaDescriptor;
                toProto(message: _150.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _150.ModuleSchemaDescriptor): _150.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _150.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_150.ModuleSchemaDescriptor_FileEntry>): _150.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _150.ModuleSchemaDescriptor_FileEntryAmino): _150.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _150.ModuleSchemaDescriptor_FileEntry): _150.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _150.ModuleSchemaDescriptor_FileEntryAminoMsg): _150.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _150.ModuleSchemaDescriptor_FileEntry): _150.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _150.ModuleSchemaDescriptor_FileEntryProtoMsg): _150.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _150.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _150.ModuleSchemaDescriptor_FileEntry): _150.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _151.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _151.Module;
                    fromPartial(_: Partial<_151.Module>): _151.Module;
                    fromAmino(_: _151.ModuleAmino): _151.Module;
                    toAmino(_: _151.Module): _151.ModuleAmino;
                    fromAminoMsg(object: _151.ModuleAminoMsg): _151.Module;
                    toAminoMsg(message: _151.Module): _151.ModuleAminoMsg;
                    fromProtoMsg(message: _151.ModuleProtoMsg): _151.Module;
                    toProto(message: _151.Module): Uint8Array;
                    toProtoMsg(message: _151.Module): _151.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                subspaces(request?: _153.QuerySubspacesRequest): Promise<_153.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _153.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryParamsRequest;
                fromPartial(object: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
                fromAmino(object: _153.QueryParamsRequestAmino): _153.QueryParamsRequest;
                toAmino(message: _153.QueryParamsRequest): _153.QueryParamsRequestAmino;
                fromAminoMsg(object: _153.QueryParamsRequestAminoMsg): _153.QueryParamsRequest;
                toAminoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _153.QueryParamsRequestProtoMsg): _153.QueryParamsRequest;
                toProto(message: _153.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _153.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QueryParamsResponse;
                fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
                fromAmino(object: _153.QueryParamsResponseAmino): _153.QueryParamsResponse;
                toAmino(message: _153.QueryParamsResponse): _153.QueryParamsResponseAmino;
                fromAminoMsg(object: _153.QueryParamsResponseAminoMsg): _153.QueryParamsResponse;
                toAminoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _153.QueryParamsResponseProtoMsg): _153.QueryParamsResponse;
                toProto(message: _153.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _153.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.QuerySubspacesRequest;
                fromPartial(_: Partial<_153.QuerySubspacesRequest>): _153.QuerySubspacesRequest;
                fromAmino(_: _153.QuerySubspacesRequestAmino): _153.QuerySubspacesRequest;
                toAmino(_: _153.QuerySubspacesRequest): _153.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _153.QuerySubspacesRequestAminoMsg): _153.QuerySubspacesRequest;
                toAminoMsg(message: _153.QuerySubspacesRequest): _153.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _153.QuerySubspacesRequestProtoMsg): _153.QuerySubspacesRequest;
                toProto(message: _153.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _153.QuerySubspacesRequest): _153.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _153.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.QuerySubspacesResponse;
                fromPartial(object: Partial<_153.QuerySubspacesResponse>): _153.QuerySubspacesResponse;
                fromAmino(object: _153.QuerySubspacesResponseAmino): _153.QuerySubspacesResponse;
                toAmino(message: _153.QuerySubspacesResponse): _153.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _153.QuerySubspacesResponseAminoMsg): _153.QuerySubspacesResponse;
                toAminoMsg(message: _153.QuerySubspacesResponse): _153.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _153.QuerySubspacesResponseProtoMsg): _153.QuerySubspacesResponse;
                toProto(message: _153.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _153.QuerySubspacesResponse): _153.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _153.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.Subspace;
                fromPartial(object: Partial<_153.Subspace>): _153.Subspace;
                fromAmino(object: _153.SubspaceAmino): _153.Subspace;
                toAmino(message: _153.Subspace): _153.SubspaceAmino;
                fromAminoMsg(object: _153.SubspaceAminoMsg): _153.Subspace;
                toAminoMsg(message: _153.Subspace): _153.SubspaceAminoMsg;
                fromProtoMsg(message: _153.SubspaceProtoMsg): _153.Subspace;
                toProto(message: _153.Subspace): Uint8Array;
                toProtoMsg(message: _153.Subspace): _153.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _152.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ParameterChangeProposal;
                fromPartial(object: Partial<_152.ParameterChangeProposal>): _152.ParameterChangeProposal;
                fromAmino(object: _152.ParameterChangeProposalAmino): _152.ParameterChangeProposal;
                toAmino(message: _152.ParameterChangeProposal): _152.ParameterChangeProposalAmino;
                fromAminoMsg(object: _152.ParameterChangeProposalAminoMsg): _152.ParameterChangeProposal;
                toAminoMsg(message: _152.ParameterChangeProposal): _152.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _152.ParameterChangeProposalProtoMsg): _152.ParameterChangeProposal;
                toProto(message: _152.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _152.ParameterChangeProposal): _152.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _152.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ParamChange;
                fromPartial(object: Partial<_152.ParamChange>): _152.ParamChange;
                fromAmino(object: _152.ParamChangeAmino): _152.ParamChange;
                toAmino(message: _152.ParamChange): _152.ParamChangeAmino;
                fromAminoMsg(object: _152.ParamChangeAminoMsg): _152.ParamChange;
                toAminoMsg(message: _152.ParamChange): _152.ParamChangeAminoMsg;
                fromProtoMsg(message: _152.ParamChangeProtoMsg): _152.ParamChange;
                toProto(message: _152.ParamChange): Uint8Array;
                toProtoMsg(message: _152.ParamChange): _152.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _155.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.FileDescriptorsRequest;
                fromPartial(_: Partial<_155.FileDescriptorsRequest>): _155.FileDescriptorsRequest;
                fromAmino(_: _155.FileDescriptorsRequestAmino): _155.FileDescriptorsRequest;
                toAmino(_: _155.FileDescriptorsRequest): _155.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _155.FileDescriptorsRequestAminoMsg): _155.FileDescriptorsRequest;
                toAminoMsg(message: _155.FileDescriptorsRequest): _155.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _155.FileDescriptorsRequestProtoMsg): _155.FileDescriptorsRequest;
                toProto(message: _155.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _155.FileDescriptorsRequest): _155.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _155.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.FileDescriptorsResponse;
                fromPartial(object: Partial<_155.FileDescriptorsResponse>): _155.FileDescriptorsResponse;
                fromAmino(object: _155.FileDescriptorsResponseAmino): _155.FileDescriptorsResponse;
                toAmino(message: _155.FileDescriptorsResponse): _155.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _155.FileDescriptorsResponseAminoMsg): _155.FileDescriptorsResponse;
                toAminoMsg(message: _155.FileDescriptorsResponse): _155.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _155.FileDescriptorsResponseProtoMsg): _155.FileDescriptorsResponse;
                toProto(message: _155.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _155.FileDescriptorsResponse): _155.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _156.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.Module;
                    fromPartial(object: Partial<_156.Module>): _156.Module;
                    fromAmino(object: _156.ModuleAmino): _156.Module;
                    toAmino(message: _156.Module): _156.ModuleAmino;
                    fromAminoMsg(object: _156.ModuleAminoMsg): _156.Module;
                    toAminoMsg(message: _156.Module): _156.ModuleAminoMsg;
                    fromProtoMsg(message: _156.ModuleProtoMsg): _156.Module;
                    toProto(message: _156.Module): Uint8Array;
                    toProtoMsg(message: _156.Module): _156.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _332.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                signingInfo(request: _158.QuerySigningInfoRequest): Promise<_158.QuerySigningInfoResponse>;
                signingInfos(request?: _158.QuerySigningInfosRequest): Promise<_158.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
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
                    toAmino: (message: _160.MsgUnjail) => _160.MsgUnjailAmino;
                    fromAmino: (object: _160.MsgUnjailAmino) => _160.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _160.MsgUpdateParams) => _160.MsgUpdateParamsAmino;
                    fromAmino: (object: _160.MsgUpdateParamsAmino) => _160.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _160.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.MsgUnjail;
                fromPartial(object: Partial<_160.MsgUnjail>): _160.MsgUnjail;
                fromAmino(object: _160.MsgUnjailAmino): _160.MsgUnjail;
                toAmino(message: _160.MsgUnjail): _160.MsgUnjailAmino;
                fromAminoMsg(object: _160.MsgUnjailAminoMsg): _160.MsgUnjail;
                toAminoMsg(message: _160.MsgUnjail): _160.MsgUnjailAminoMsg;
                fromProtoMsg(message: _160.MsgUnjailProtoMsg): _160.MsgUnjail;
                toProto(message: _160.MsgUnjail): Uint8Array;
                toProtoMsg(message: _160.MsgUnjail): _160.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _160.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _160.MsgUnjailResponse;
                fromPartial(_: Partial<_160.MsgUnjailResponse>): _160.MsgUnjailResponse;
                fromAmino(_: _160.MsgUnjailResponseAmino): _160.MsgUnjailResponse;
                toAmino(_: _160.MsgUnjailResponse): _160.MsgUnjailResponseAmino;
                fromAminoMsg(object: _160.MsgUnjailResponseAminoMsg): _160.MsgUnjailResponse;
                toAminoMsg(message: _160.MsgUnjailResponse): _160.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _160.MsgUnjailResponseProtoMsg): _160.MsgUnjailResponse;
                toProto(message: _160.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _160.MsgUnjailResponse): _160.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _160.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.MsgUpdateParams;
                fromPartial(object: Partial<_160.MsgUpdateParams>): _160.MsgUpdateParams;
                fromAmino(object: _160.MsgUpdateParamsAmino): _160.MsgUpdateParams;
                toAmino(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAmino;
                fromAminoMsg(object: _160.MsgUpdateParamsAminoMsg): _160.MsgUpdateParams;
                toAminoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _160.MsgUpdateParamsProtoMsg): _160.MsgUpdateParams;
                toProto(message: _160.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _160.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _160.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_160.MsgUpdateParamsResponse>): _160.MsgUpdateParamsResponse;
                fromAmino(_: _160.MsgUpdateParamsResponseAmino): _160.MsgUpdateParamsResponse;
                toAmino(_: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _160.MsgUpdateParamsResponseAminoMsg): _160.MsgUpdateParamsResponse;
                toAminoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _160.MsgUpdateParamsResponseProtoMsg): _160.MsgUpdateParamsResponse;
                toProto(message: _160.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _159.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.ValidatorSigningInfo;
                fromPartial(object: Partial<_159.ValidatorSigningInfo>): _159.ValidatorSigningInfo;
                fromAmino(object: _159.ValidatorSigningInfoAmino): _159.ValidatorSigningInfo;
                toAmino(message: _159.ValidatorSigningInfo): _159.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _159.ValidatorSigningInfoAminoMsg): _159.ValidatorSigningInfo;
                toAminoMsg(message: _159.ValidatorSigningInfo): _159.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _159.ValidatorSigningInfoProtoMsg): _159.ValidatorSigningInfo;
                toProto(message: _159.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _159.ValidatorSigningInfo): _159.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _159.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.Params;
                fromPartial(object: Partial<_159.Params>): _159.Params;
                fromAmino(object: _159.ParamsAmino): _159.Params;
                toAmino(message: _159.Params): _159.ParamsAmino;
                fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                toProto(message: _159.Params): Uint8Array;
                toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _158.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _158.QueryParamsRequest;
                fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
                fromAmino(_: _158.QueryParamsRequestAmino): _158.QueryParamsRequest;
                toAmino(_: _158.QueryParamsRequest): _158.QueryParamsRequestAmino;
                fromAminoMsg(object: _158.QueryParamsRequestAminoMsg): _158.QueryParamsRequest;
                toAminoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _158.QueryParamsRequestProtoMsg): _158.QueryParamsRequest;
                toProto(message: _158.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _158.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.QueryParamsResponse;
                fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
                fromAmino(object: _158.QueryParamsResponseAmino): _158.QueryParamsResponse;
                toAmino(message: _158.QueryParamsResponse): _158.QueryParamsResponseAmino;
                fromAminoMsg(object: _158.QueryParamsResponseAminoMsg): _158.QueryParamsResponse;
                toAminoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _158.QueryParamsResponseProtoMsg): _158.QueryParamsResponse;
                toProto(message: _158.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _158.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.QuerySigningInfoRequest;
                fromPartial(object: Partial<_158.QuerySigningInfoRequest>): _158.QuerySigningInfoRequest;
                fromAmino(object: _158.QuerySigningInfoRequestAmino): _158.QuerySigningInfoRequest;
                toAmino(message: _158.QuerySigningInfoRequest): _158.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _158.QuerySigningInfoRequestAminoMsg): _158.QuerySigningInfoRequest;
                toAminoMsg(message: _158.QuerySigningInfoRequest): _158.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _158.QuerySigningInfoRequestProtoMsg): _158.QuerySigningInfoRequest;
                toProto(message: _158.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _158.QuerySigningInfoRequest): _158.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _158.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.QuerySigningInfoResponse;
                fromPartial(object: Partial<_158.QuerySigningInfoResponse>): _158.QuerySigningInfoResponse;
                fromAmino(object: _158.QuerySigningInfoResponseAmino): _158.QuerySigningInfoResponse;
                toAmino(message: _158.QuerySigningInfoResponse): _158.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _158.QuerySigningInfoResponseAminoMsg): _158.QuerySigningInfoResponse;
                toAminoMsg(message: _158.QuerySigningInfoResponse): _158.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _158.QuerySigningInfoResponseProtoMsg): _158.QuerySigningInfoResponse;
                toProto(message: _158.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _158.QuerySigningInfoResponse): _158.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _158.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.QuerySigningInfosRequest;
                fromPartial(object: Partial<_158.QuerySigningInfosRequest>): _158.QuerySigningInfosRequest;
                fromAmino(object: _158.QuerySigningInfosRequestAmino): _158.QuerySigningInfosRequest;
                toAmino(message: _158.QuerySigningInfosRequest): _158.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _158.QuerySigningInfosRequestAminoMsg): _158.QuerySigningInfosRequest;
                toAminoMsg(message: _158.QuerySigningInfosRequest): _158.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _158.QuerySigningInfosRequestProtoMsg): _158.QuerySigningInfosRequest;
                toProto(message: _158.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _158.QuerySigningInfosRequest): _158.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _158.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.QuerySigningInfosResponse;
                fromPartial(object: Partial<_158.QuerySigningInfosResponse>): _158.QuerySigningInfosResponse;
                fromAmino(object: _158.QuerySigningInfosResponseAmino): _158.QuerySigningInfosResponse;
                toAmino(message: _158.QuerySigningInfosResponse): _158.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _158.QuerySigningInfosResponseAminoMsg): _158.QuerySigningInfosResponse;
                toAminoMsg(message: _158.QuerySigningInfosResponse): _158.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _158.QuerySigningInfosResponseProtoMsg): _158.QuerySigningInfosResponse;
                toProto(message: _158.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _158.QuerySigningInfosResponse): _158.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.GenesisState;
                fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                toProto(message: _157.GenesisState): Uint8Array;
                toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _157.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.SigningInfo;
                fromPartial(object: Partial<_157.SigningInfo>): _157.SigningInfo;
                fromAmino(object: _157.SigningInfoAmino): _157.SigningInfo;
                toAmino(message: _157.SigningInfo): _157.SigningInfoAmino;
                fromAminoMsg(object: _157.SigningInfoAminoMsg): _157.SigningInfo;
                toAminoMsg(message: _157.SigningInfo): _157.SigningInfoAminoMsg;
                fromProtoMsg(message: _157.SigningInfoProtoMsg): _157.SigningInfo;
                toProto(message: _157.SigningInfo): Uint8Array;
                toProtoMsg(message: _157.SigningInfo): _157.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _157.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ValidatorMissedBlocks;
                fromPartial(object: Partial<_157.ValidatorMissedBlocks>): _157.ValidatorMissedBlocks;
                fromAmino(object: _157.ValidatorMissedBlocksAmino): _157.ValidatorMissedBlocks;
                toAmino(message: _157.ValidatorMissedBlocks): _157.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _157.ValidatorMissedBlocksAminoMsg): _157.ValidatorMissedBlocks;
                toAminoMsg(message: _157.ValidatorMissedBlocks): _157.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _157.ValidatorMissedBlocksProtoMsg): _157.ValidatorMissedBlocks;
                toProto(message: _157.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _157.ValidatorMissedBlocks): _157.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _157.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.MissedBlock;
                fromPartial(object: Partial<_157.MissedBlock>): _157.MissedBlock;
                fromAmino(object: _157.MissedBlockAmino): _157.MissedBlock;
                toAmino(message: _157.MissedBlock): _157.MissedBlockAmino;
                fromAminoMsg(object: _157.MissedBlockAminoMsg): _157.MissedBlock;
                toAminoMsg(message: _157.MissedBlock): _157.MissedBlockAminoMsg;
                fromProtoMsg(message: _157.MissedBlockProtoMsg): _157.MissedBlock;
                toProto(message: _157.MissedBlock): Uint8Array;
                toProtoMsg(message: _157.MissedBlock): _157.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _161.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Module;
                    fromPartial(object: Partial<_161.Module>): _161.Module;
                    fromAmino(object: _161.ModuleAmino): _161.Module;
                    toAmino(message: _161.Module): _161.ModuleAmino;
                    fromAminoMsg(object: _161.ModuleAminoMsg): _161.Module;
                    toAminoMsg(message: _161.Module): _161.ModuleAminoMsg;
                    fromProtoMsg(message: _161.ModuleProtoMsg): _161.Module;
                    toProto(message: _161.Module): Uint8Array;
                    toProtoMsg(message: _161.Module): _161.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _316.QueryClientImpl;
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
            LCDQueryClient: typeof _294.LCDQueryClient;
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
                    toAmino: (message: _166.MsgCreateValidator) => _166.MsgCreateValidatorAmino;
                    fromAmino: (object: _166.MsgCreateValidatorAmino) => _166.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _166.MsgEditValidator) => _166.MsgEditValidatorAmino;
                    fromAmino: (object: _166.MsgEditValidatorAmino) => _166.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _166.MsgDelegate) => _166.MsgDelegateAmino;
                    fromAmino: (object: _166.MsgDelegateAmino) => _166.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _166.MsgBeginRedelegate) => _166.MsgBeginRedelegateAmino;
                    fromAmino: (object: _166.MsgBeginRedelegateAmino) => _166.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _166.MsgUndelegate) => _166.MsgUndelegateAmino;
                    fromAmino: (object: _166.MsgUndelegateAmino) => _166.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _166.MsgCancelUnbondingDelegation) => _166.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _166.MsgCancelUnbondingDelegationAmino) => _166.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _166.MsgUpdateParams) => _166.MsgUpdateParamsAmino;
                    fromAmino: (object: _166.MsgUpdateParamsAmino) => _166.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _166.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgCreateValidator;
                fromPartial(object: Partial<_166.MsgCreateValidator>): _166.MsgCreateValidator;
                fromAmino(object: _166.MsgCreateValidatorAmino): _166.MsgCreateValidator;
                toAmino(message: _166.MsgCreateValidator): _166.MsgCreateValidatorAmino;
                fromAminoMsg(object: _166.MsgCreateValidatorAminoMsg): _166.MsgCreateValidator;
                toAminoMsg(message: _166.MsgCreateValidator): _166.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _166.MsgCreateValidatorProtoMsg): _166.MsgCreateValidator;
                toProto(message: _166.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _166.MsgCreateValidator): _166.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _166.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_166.MsgCreateValidatorResponse>): _166.MsgCreateValidatorResponse;
                fromAmino(_: _166.MsgCreateValidatorResponseAmino): _166.MsgCreateValidatorResponse;
                toAmino(_: _166.MsgCreateValidatorResponse): _166.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _166.MsgCreateValidatorResponseAminoMsg): _166.MsgCreateValidatorResponse;
                toAminoMsg(message: _166.MsgCreateValidatorResponse): _166.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _166.MsgCreateValidatorResponseProtoMsg): _166.MsgCreateValidatorResponse;
                toProto(message: _166.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _166.MsgCreateValidatorResponse): _166.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _166.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgEditValidator;
                fromPartial(object: Partial<_166.MsgEditValidator>): _166.MsgEditValidator;
                fromAmino(object: _166.MsgEditValidatorAmino): _166.MsgEditValidator;
                toAmino(message: _166.MsgEditValidator): _166.MsgEditValidatorAmino;
                fromAminoMsg(object: _166.MsgEditValidatorAminoMsg): _166.MsgEditValidator;
                toAminoMsg(message: _166.MsgEditValidator): _166.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _166.MsgEditValidatorProtoMsg): _166.MsgEditValidator;
                toProto(message: _166.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _166.MsgEditValidator): _166.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _166.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgEditValidatorResponse;
                fromPartial(_: Partial<_166.MsgEditValidatorResponse>): _166.MsgEditValidatorResponse;
                fromAmino(_: _166.MsgEditValidatorResponseAmino): _166.MsgEditValidatorResponse;
                toAmino(_: _166.MsgEditValidatorResponse): _166.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _166.MsgEditValidatorResponseAminoMsg): _166.MsgEditValidatorResponse;
                toAminoMsg(message: _166.MsgEditValidatorResponse): _166.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _166.MsgEditValidatorResponseProtoMsg): _166.MsgEditValidatorResponse;
                toProto(message: _166.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _166.MsgEditValidatorResponse): _166.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _166.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgDelegate;
                fromPartial(object: Partial<_166.MsgDelegate>): _166.MsgDelegate;
                fromAmino(object: _166.MsgDelegateAmino): _166.MsgDelegate;
                toAmino(message: _166.MsgDelegate): _166.MsgDelegateAmino;
                fromAminoMsg(object: _166.MsgDelegateAminoMsg): _166.MsgDelegate;
                toAminoMsg(message: _166.MsgDelegate): _166.MsgDelegateAminoMsg;
                fromProtoMsg(message: _166.MsgDelegateProtoMsg): _166.MsgDelegate;
                toProto(message: _166.MsgDelegate): Uint8Array;
                toProtoMsg(message: _166.MsgDelegate): _166.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _166.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgDelegateResponse;
                fromPartial(_: Partial<_166.MsgDelegateResponse>): _166.MsgDelegateResponse;
                fromAmino(_: _166.MsgDelegateResponseAmino): _166.MsgDelegateResponse;
                toAmino(_: _166.MsgDelegateResponse): _166.MsgDelegateResponseAmino;
                fromAminoMsg(object: _166.MsgDelegateResponseAminoMsg): _166.MsgDelegateResponse;
                toAminoMsg(message: _166.MsgDelegateResponse): _166.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _166.MsgDelegateResponseProtoMsg): _166.MsgDelegateResponse;
                toProto(message: _166.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _166.MsgDelegateResponse): _166.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _166.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgBeginRedelegate;
                fromPartial(object: Partial<_166.MsgBeginRedelegate>): _166.MsgBeginRedelegate;
                fromAmino(object: _166.MsgBeginRedelegateAmino): _166.MsgBeginRedelegate;
                toAmino(message: _166.MsgBeginRedelegate): _166.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _166.MsgBeginRedelegateAminoMsg): _166.MsgBeginRedelegate;
                toAminoMsg(message: _166.MsgBeginRedelegate): _166.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _166.MsgBeginRedelegateProtoMsg): _166.MsgBeginRedelegate;
                toProto(message: _166.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _166.MsgBeginRedelegate): _166.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _166.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_166.MsgBeginRedelegateResponse>): _166.MsgBeginRedelegateResponse;
                fromAmino(object: _166.MsgBeginRedelegateResponseAmino): _166.MsgBeginRedelegateResponse;
                toAmino(message: _166.MsgBeginRedelegateResponse): _166.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _166.MsgBeginRedelegateResponseAminoMsg): _166.MsgBeginRedelegateResponse;
                toAminoMsg(message: _166.MsgBeginRedelegateResponse): _166.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _166.MsgBeginRedelegateResponseProtoMsg): _166.MsgBeginRedelegateResponse;
                toProto(message: _166.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _166.MsgBeginRedelegateResponse): _166.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _166.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgUndelegate;
                fromPartial(object: Partial<_166.MsgUndelegate>): _166.MsgUndelegate;
                fromAmino(object: _166.MsgUndelegateAmino): _166.MsgUndelegate;
                toAmino(message: _166.MsgUndelegate): _166.MsgUndelegateAmino;
                fromAminoMsg(object: _166.MsgUndelegateAminoMsg): _166.MsgUndelegate;
                toAminoMsg(message: _166.MsgUndelegate): _166.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _166.MsgUndelegateProtoMsg): _166.MsgUndelegate;
                toProto(message: _166.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _166.MsgUndelegate): _166.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _166.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgUndelegateResponse;
                fromPartial(object: Partial<_166.MsgUndelegateResponse>): _166.MsgUndelegateResponse;
                fromAmino(object: _166.MsgUndelegateResponseAmino): _166.MsgUndelegateResponse;
                toAmino(message: _166.MsgUndelegateResponse): _166.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _166.MsgUndelegateResponseAminoMsg): _166.MsgUndelegateResponse;
                toAminoMsg(message: _166.MsgUndelegateResponse): _166.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _166.MsgUndelegateResponseProtoMsg): _166.MsgUndelegateResponse;
                toProto(message: _166.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _166.MsgUndelegateResponse): _166.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _166.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_166.MsgCancelUnbondingDelegation>): _166.MsgCancelUnbondingDelegation;
                fromAmino(object: _166.MsgCancelUnbondingDelegationAmino): _166.MsgCancelUnbondingDelegation;
                toAmino(message: _166.MsgCancelUnbondingDelegation): _166.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _166.MsgCancelUnbondingDelegationAminoMsg): _166.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _166.MsgCancelUnbondingDelegation): _166.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _166.MsgCancelUnbondingDelegationProtoMsg): _166.MsgCancelUnbondingDelegation;
                toProto(message: _166.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _166.MsgCancelUnbondingDelegation): _166.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _166.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_166.MsgCancelUnbondingDelegationResponse>): _166.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _166.MsgCancelUnbondingDelegationResponseAmino): _166.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _166.MsgCancelUnbondingDelegationResponse): _166.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _166.MsgCancelUnbondingDelegationResponseAminoMsg): _166.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _166.MsgCancelUnbondingDelegationResponse): _166.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _166.MsgCancelUnbondingDelegationResponseProtoMsg): _166.MsgCancelUnbondingDelegationResponse;
                toProto(message: _166.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _166.MsgCancelUnbondingDelegationResponse): _166.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _166.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.MsgUpdateParams;
                fromPartial(object: Partial<_166.MsgUpdateParams>): _166.MsgUpdateParams;
                fromAmino(object: _166.MsgUpdateParamsAmino): _166.MsgUpdateParams;
                toAmino(message: _166.MsgUpdateParams): _166.MsgUpdateParamsAmino;
                fromAminoMsg(object: _166.MsgUpdateParamsAminoMsg): _166.MsgUpdateParams;
                toAminoMsg(message: _166.MsgUpdateParams): _166.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _166.MsgUpdateParamsProtoMsg): _166.MsgUpdateParams;
                toProto(message: _166.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _166.MsgUpdateParams): _166.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _166.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _166.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_166.MsgUpdateParamsResponse>): _166.MsgUpdateParamsResponse;
                fromAmino(_: _166.MsgUpdateParamsResponseAmino): _166.MsgUpdateParamsResponse;
                toAmino(_: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _166.MsgUpdateParamsResponseAminoMsg): _166.MsgUpdateParamsResponse;
                toAminoMsg(message: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _166.MsgUpdateParamsResponseProtoMsg): _166.MsgUpdateParamsResponse;
                toProto(message: _166.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _165.BondStatus;
            bondStatusToJSON(object: _165.BondStatus): string;
            infractionFromJSON(object: any): _165.Infraction;
            infractionToJSON(object: _165.Infraction): string;
            BondStatus: typeof _165.BondStatus;
            BondStatusSDKType: typeof _165.BondStatus;
            BondStatusAmino: typeof _165.BondStatus;
            Infraction: typeof _165.Infraction;
            InfractionSDKType: typeof _165.Infraction;
            InfractionAmino: typeof _165.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _165.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.HistoricalInfo;
                fromPartial(object: Partial<_165.HistoricalInfo>): _165.HistoricalInfo;
                fromAmino(object: _165.HistoricalInfoAmino): _165.HistoricalInfo;
                toAmino(message: _165.HistoricalInfo): _165.HistoricalInfoAmino;
                fromAminoMsg(object: _165.HistoricalInfoAminoMsg): _165.HistoricalInfo;
                toAminoMsg(message: _165.HistoricalInfo): _165.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _165.HistoricalInfoProtoMsg): _165.HistoricalInfo;
                toProto(message: _165.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _165.HistoricalInfo): _165.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _165.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.CommissionRates;
                fromPartial(object: Partial<_165.CommissionRates>): _165.CommissionRates;
                fromAmino(object: _165.CommissionRatesAmino): _165.CommissionRates;
                toAmino(message: _165.CommissionRates): _165.CommissionRatesAmino;
                fromAminoMsg(object: _165.CommissionRatesAminoMsg): _165.CommissionRates;
                toAminoMsg(message: _165.CommissionRates): _165.CommissionRatesAminoMsg;
                fromProtoMsg(message: _165.CommissionRatesProtoMsg): _165.CommissionRates;
                toProto(message: _165.CommissionRates): Uint8Array;
                toProtoMsg(message: _165.CommissionRates): _165.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _165.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Commission;
                fromPartial(object: Partial<_165.Commission>): _165.Commission;
                fromAmino(object: _165.CommissionAmino): _165.Commission;
                toAmino(message: _165.Commission): _165.CommissionAmino;
                fromAminoMsg(object: _165.CommissionAminoMsg): _165.Commission;
                toAminoMsg(message: _165.Commission): _165.CommissionAminoMsg;
                fromProtoMsg(message: _165.CommissionProtoMsg): _165.Commission;
                toProto(message: _165.Commission): Uint8Array;
                toProtoMsg(message: _165.Commission): _165.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _165.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Description;
                fromPartial(object: Partial<_165.Description>): _165.Description;
                fromAmino(object: _165.DescriptionAmino): _165.Description;
                toAmino(message: _165.Description): _165.DescriptionAmino;
                fromAminoMsg(object: _165.DescriptionAminoMsg): _165.Description;
                toAminoMsg(message: _165.Description): _165.DescriptionAminoMsg;
                fromProtoMsg(message: _165.DescriptionProtoMsg): _165.Description;
                toProto(message: _165.Description): Uint8Array;
                toProtoMsg(message: _165.Description): _165.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _165.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Validator;
                fromPartial(object: Partial<_165.Validator>): _165.Validator;
                fromAmino(object: _165.ValidatorAmino): _165.Validator;
                toAmino(message: _165.Validator): _165.ValidatorAmino;
                fromAminoMsg(object: _165.ValidatorAminoMsg): _165.Validator;
                toAminoMsg(message: _165.Validator): _165.ValidatorAminoMsg;
                fromProtoMsg(message: _165.ValidatorProtoMsg): _165.Validator;
                toProto(message: _165.Validator): Uint8Array;
                toProtoMsg(message: _165.Validator): _165.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _165.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.ValAddresses;
                fromPartial(object: Partial<_165.ValAddresses>): _165.ValAddresses;
                fromAmino(object: _165.ValAddressesAmino): _165.ValAddresses;
                toAmino(message: _165.ValAddresses): _165.ValAddressesAmino;
                fromAminoMsg(object: _165.ValAddressesAminoMsg): _165.ValAddresses;
                toAminoMsg(message: _165.ValAddresses): _165.ValAddressesAminoMsg;
                fromProtoMsg(message: _165.ValAddressesProtoMsg): _165.ValAddresses;
                toProto(message: _165.ValAddresses): Uint8Array;
                toProtoMsg(message: _165.ValAddresses): _165.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _165.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.DVPair;
                fromPartial(object: Partial<_165.DVPair>): _165.DVPair;
                fromAmino(object: _165.DVPairAmino): _165.DVPair;
                toAmino(message: _165.DVPair): _165.DVPairAmino;
                fromAminoMsg(object: _165.DVPairAminoMsg): _165.DVPair;
                toAminoMsg(message: _165.DVPair): _165.DVPairAminoMsg;
                fromProtoMsg(message: _165.DVPairProtoMsg): _165.DVPair;
                toProto(message: _165.DVPair): Uint8Array;
                toProtoMsg(message: _165.DVPair): _165.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _165.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.DVPairs;
                fromPartial(object: Partial<_165.DVPairs>): _165.DVPairs;
                fromAmino(object: _165.DVPairsAmino): _165.DVPairs;
                toAmino(message: _165.DVPairs): _165.DVPairsAmino;
                fromAminoMsg(object: _165.DVPairsAminoMsg): _165.DVPairs;
                toAminoMsg(message: _165.DVPairs): _165.DVPairsAminoMsg;
                fromProtoMsg(message: _165.DVPairsProtoMsg): _165.DVPairs;
                toProto(message: _165.DVPairs): Uint8Array;
                toProtoMsg(message: _165.DVPairs): _165.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _165.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.DVVTriplet;
                fromPartial(object: Partial<_165.DVVTriplet>): _165.DVVTriplet;
                fromAmino(object: _165.DVVTripletAmino): _165.DVVTriplet;
                toAmino(message: _165.DVVTriplet): _165.DVVTripletAmino;
                fromAminoMsg(object: _165.DVVTripletAminoMsg): _165.DVVTriplet;
                toAminoMsg(message: _165.DVVTriplet): _165.DVVTripletAminoMsg;
                fromProtoMsg(message: _165.DVVTripletProtoMsg): _165.DVVTriplet;
                toProto(message: _165.DVVTriplet): Uint8Array;
                toProtoMsg(message: _165.DVVTriplet): _165.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _165.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.DVVTriplets;
                fromPartial(object: Partial<_165.DVVTriplets>): _165.DVVTriplets;
                fromAmino(object: _165.DVVTripletsAmino): _165.DVVTriplets;
                toAmino(message: _165.DVVTriplets): _165.DVVTripletsAmino;
                fromAminoMsg(object: _165.DVVTripletsAminoMsg): _165.DVVTriplets;
                toAminoMsg(message: _165.DVVTriplets): _165.DVVTripletsAminoMsg;
                fromProtoMsg(message: _165.DVVTripletsProtoMsg): _165.DVVTriplets;
                toProto(message: _165.DVVTriplets): Uint8Array;
                toProtoMsg(message: _165.DVVTriplets): _165.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _165.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Delegation;
                fromPartial(object: Partial<_165.Delegation>): _165.Delegation;
                fromAmino(object: _165.DelegationAmino): _165.Delegation;
                toAmino(message: _165.Delegation): _165.DelegationAmino;
                fromAminoMsg(object: _165.DelegationAminoMsg): _165.Delegation;
                toAminoMsg(message: _165.Delegation): _165.DelegationAminoMsg;
                fromProtoMsg(message: _165.DelegationProtoMsg): _165.Delegation;
                toProto(message: _165.Delegation): Uint8Array;
                toProtoMsg(message: _165.Delegation): _165.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _165.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.UnbondingDelegation;
                fromPartial(object: Partial<_165.UnbondingDelegation>): _165.UnbondingDelegation;
                fromAmino(object: _165.UnbondingDelegationAmino): _165.UnbondingDelegation;
                toAmino(message: _165.UnbondingDelegation): _165.UnbondingDelegationAmino;
                fromAminoMsg(object: _165.UnbondingDelegationAminoMsg): _165.UnbondingDelegation;
                toAminoMsg(message: _165.UnbondingDelegation): _165.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _165.UnbondingDelegationProtoMsg): _165.UnbondingDelegation;
                toProto(message: _165.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _165.UnbondingDelegation): _165.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _165.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.UnbondingDelegationEntry;
                fromPartial(object: Partial<_165.UnbondingDelegationEntry>): _165.UnbondingDelegationEntry;
                fromAmino(object: _165.UnbondingDelegationEntryAmino): _165.UnbondingDelegationEntry;
                toAmino(message: _165.UnbondingDelegationEntry): _165.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _165.UnbondingDelegationEntryAminoMsg): _165.UnbondingDelegationEntry;
                toAminoMsg(message: _165.UnbondingDelegationEntry): _165.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _165.UnbondingDelegationEntryProtoMsg): _165.UnbondingDelegationEntry;
                toProto(message: _165.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _165.UnbondingDelegationEntry): _165.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _165.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.RedelegationEntry;
                fromPartial(object: Partial<_165.RedelegationEntry>): _165.RedelegationEntry;
                fromAmino(object: _165.RedelegationEntryAmino): _165.RedelegationEntry;
                toAmino(message: _165.RedelegationEntry): _165.RedelegationEntryAmino;
                fromAminoMsg(object: _165.RedelegationEntryAminoMsg): _165.RedelegationEntry;
                toAminoMsg(message: _165.RedelegationEntry): _165.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _165.RedelegationEntryProtoMsg): _165.RedelegationEntry;
                toProto(message: _165.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _165.RedelegationEntry): _165.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _165.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Redelegation;
                fromPartial(object: Partial<_165.Redelegation>): _165.Redelegation;
                fromAmino(object: _165.RedelegationAmino): _165.Redelegation;
                toAmino(message: _165.Redelegation): _165.RedelegationAmino;
                fromAminoMsg(object: _165.RedelegationAminoMsg): _165.Redelegation;
                toAminoMsg(message: _165.Redelegation): _165.RedelegationAminoMsg;
                fromProtoMsg(message: _165.RedelegationProtoMsg): _165.Redelegation;
                toProto(message: _165.Redelegation): Uint8Array;
                toProtoMsg(message: _165.Redelegation): _165.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _165.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Params;
                fromPartial(object: Partial<_165.Params>): _165.Params;
                fromAmino(object: _165.ParamsAmino): _165.Params;
                toAmino(message: _165.Params): _165.ParamsAmino;
                fromAminoMsg(object: _165.ParamsAminoMsg): _165.Params;
                toAminoMsg(message: _165.Params): _165.ParamsAminoMsg;
                fromProtoMsg(message: _165.ParamsProtoMsg): _165.Params;
                toProto(message: _165.Params): Uint8Array;
                toProtoMsg(message: _165.Params): _165.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _165.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.DelegationResponse;
                fromPartial(object: Partial<_165.DelegationResponse>): _165.DelegationResponse;
                fromAmino(object: _165.DelegationResponseAmino): _165.DelegationResponse;
                toAmino(message: _165.DelegationResponse): _165.DelegationResponseAmino;
                fromAminoMsg(object: _165.DelegationResponseAminoMsg): _165.DelegationResponse;
                toAminoMsg(message: _165.DelegationResponse): _165.DelegationResponseAminoMsg;
                fromProtoMsg(message: _165.DelegationResponseProtoMsg): _165.DelegationResponse;
                toProto(message: _165.DelegationResponse): Uint8Array;
                toProtoMsg(message: _165.DelegationResponse): _165.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _165.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.RedelegationEntryResponse;
                fromPartial(object: Partial<_165.RedelegationEntryResponse>): _165.RedelegationEntryResponse;
                fromAmino(object: _165.RedelegationEntryResponseAmino): _165.RedelegationEntryResponse;
                toAmino(message: _165.RedelegationEntryResponse): _165.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _165.RedelegationEntryResponseAminoMsg): _165.RedelegationEntryResponse;
                toAminoMsg(message: _165.RedelegationEntryResponse): _165.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _165.RedelegationEntryResponseProtoMsg): _165.RedelegationEntryResponse;
                toProto(message: _165.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _165.RedelegationEntryResponse): _165.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _165.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.RedelegationResponse;
                fromPartial(object: Partial<_165.RedelegationResponse>): _165.RedelegationResponse;
                fromAmino(object: _165.RedelegationResponseAmino): _165.RedelegationResponse;
                toAmino(message: _165.RedelegationResponse): _165.RedelegationResponseAmino;
                fromAminoMsg(object: _165.RedelegationResponseAminoMsg): _165.RedelegationResponse;
                toAminoMsg(message: _165.RedelegationResponse): _165.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _165.RedelegationResponseProtoMsg): _165.RedelegationResponse;
                toProto(message: _165.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _165.RedelegationResponse): _165.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _165.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Pool;
                fromPartial(object: Partial<_165.Pool>): _165.Pool;
                fromAmino(object: _165.PoolAmino): _165.Pool;
                toAmino(message: _165.Pool): _165.PoolAmino;
                fromAminoMsg(object: _165.PoolAminoMsg): _165.Pool;
                toAminoMsg(message: _165.Pool): _165.PoolAminoMsg;
                fromProtoMsg(message: _165.PoolProtoMsg): _165.Pool;
                toProto(message: _165.Pool): Uint8Array;
                toProtoMsg(message: _165.Pool): _165.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _165.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.ValidatorUpdates;
                fromPartial(object: Partial<_165.ValidatorUpdates>): _165.ValidatorUpdates;
                fromAmino(object: _165.ValidatorUpdatesAmino): _165.ValidatorUpdates;
                toAmino(message: _165.ValidatorUpdates): _165.ValidatorUpdatesAmino;
                fromAminoMsg(object: _165.ValidatorUpdatesAminoMsg): _165.ValidatorUpdates;
                toAminoMsg(message: _165.ValidatorUpdates): _165.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _165.ValidatorUpdatesProtoMsg): _165.ValidatorUpdates;
                toProto(message: _165.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _165.ValidatorUpdates): _165.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _164.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorsRequest;
                fromPartial(object: Partial<_164.QueryValidatorsRequest>): _164.QueryValidatorsRequest;
                fromAmino(object: _164.QueryValidatorsRequestAmino): _164.QueryValidatorsRequest;
                toAmino(message: _164.QueryValidatorsRequest): _164.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _164.QueryValidatorsRequestAminoMsg): _164.QueryValidatorsRequest;
                toAminoMsg(message: _164.QueryValidatorsRequest): _164.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorsRequestProtoMsg): _164.QueryValidatorsRequest;
                toProto(message: _164.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorsRequest): _164.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _164.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorsResponse;
                fromPartial(object: Partial<_164.QueryValidatorsResponse>): _164.QueryValidatorsResponse;
                fromAmino(object: _164.QueryValidatorsResponseAmino): _164.QueryValidatorsResponse;
                toAmino(message: _164.QueryValidatorsResponse): _164.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _164.QueryValidatorsResponseAminoMsg): _164.QueryValidatorsResponse;
                toAminoMsg(message: _164.QueryValidatorsResponse): _164.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorsResponseProtoMsg): _164.QueryValidatorsResponse;
                toProto(message: _164.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorsResponse): _164.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _164.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorRequest;
                fromPartial(object: Partial<_164.QueryValidatorRequest>): _164.QueryValidatorRequest;
                fromAmino(object: _164.QueryValidatorRequestAmino): _164.QueryValidatorRequest;
                toAmino(message: _164.QueryValidatorRequest): _164.QueryValidatorRequestAmino;
                fromAminoMsg(object: _164.QueryValidatorRequestAminoMsg): _164.QueryValidatorRequest;
                toAminoMsg(message: _164.QueryValidatorRequest): _164.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorRequestProtoMsg): _164.QueryValidatorRequest;
                toProto(message: _164.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorRequest): _164.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _164.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorResponse;
                fromPartial(object: Partial<_164.QueryValidatorResponse>): _164.QueryValidatorResponse;
                fromAmino(object: _164.QueryValidatorResponseAmino): _164.QueryValidatorResponse;
                toAmino(message: _164.QueryValidatorResponse): _164.QueryValidatorResponseAmino;
                fromAminoMsg(object: _164.QueryValidatorResponseAminoMsg): _164.QueryValidatorResponse;
                toAminoMsg(message: _164.QueryValidatorResponse): _164.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorResponseProtoMsg): _164.QueryValidatorResponse;
                toProto(message: _164.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorResponse): _164.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _164.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_164.QueryValidatorDelegationsRequest>): _164.QueryValidatorDelegationsRequest;
                fromAmino(object: _164.QueryValidatorDelegationsRequestAmino): _164.QueryValidatorDelegationsRequest;
                toAmino(message: _164.QueryValidatorDelegationsRequest): _164.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _164.QueryValidatorDelegationsRequestAminoMsg): _164.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _164.QueryValidatorDelegationsRequest): _164.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorDelegationsRequestProtoMsg): _164.QueryValidatorDelegationsRequest;
                toProto(message: _164.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorDelegationsRequest): _164.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _164.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_164.QueryValidatorDelegationsResponse>): _164.QueryValidatorDelegationsResponse;
                fromAmino(object: _164.QueryValidatorDelegationsResponseAmino): _164.QueryValidatorDelegationsResponse;
                toAmino(message: _164.QueryValidatorDelegationsResponse): _164.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _164.QueryValidatorDelegationsResponseAminoMsg): _164.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _164.QueryValidatorDelegationsResponse): _164.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorDelegationsResponseProtoMsg): _164.QueryValidatorDelegationsResponse;
                toProto(message: _164.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorDelegationsResponse): _164.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _164.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_164.QueryValidatorUnbondingDelegationsRequest>): _164.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _164.QueryValidatorUnbondingDelegationsRequestAmino): _164.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _164.QueryValidatorUnbondingDelegationsRequest): _164.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _164.QueryValidatorUnbondingDelegationsRequestAminoMsg): _164.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _164.QueryValidatorUnbondingDelegationsRequest): _164.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorUnbondingDelegationsRequestProtoMsg): _164.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _164.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorUnbondingDelegationsRequest): _164.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _164.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_164.QueryValidatorUnbondingDelegationsResponse>): _164.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _164.QueryValidatorUnbondingDelegationsResponseAmino): _164.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _164.QueryValidatorUnbondingDelegationsResponse): _164.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _164.QueryValidatorUnbondingDelegationsResponseAminoMsg): _164.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _164.QueryValidatorUnbondingDelegationsResponse): _164.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryValidatorUnbondingDelegationsResponseProtoMsg): _164.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _164.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryValidatorUnbondingDelegationsResponse): _164.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _164.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegationRequest;
                fromPartial(object: Partial<_164.QueryDelegationRequest>): _164.QueryDelegationRequest;
                fromAmino(object: _164.QueryDelegationRequestAmino): _164.QueryDelegationRequest;
                toAmino(message: _164.QueryDelegationRequest): _164.QueryDelegationRequestAmino;
                fromAminoMsg(object: _164.QueryDelegationRequestAminoMsg): _164.QueryDelegationRequest;
                toAminoMsg(message: _164.QueryDelegationRequest): _164.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _164.QueryDelegationRequestProtoMsg): _164.QueryDelegationRequest;
                toProto(message: _164.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _164.QueryDelegationRequest): _164.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _164.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegationResponse;
                fromPartial(object: Partial<_164.QueryDelegationResponse>): _164.QueryDelegationResponse;
                fromAmino(object: _164.QueryDelegationResponseAmino): _164.QueryDelegationResponse;
                toAmino(message: _164.QueryDelegationResponse): _164.QueryDelegationResponseAmino;
                fromAminoMsg(object: _164.QueryDelegationResponseAminoMsg): _164.QueryDelegationResponse;
                toAminoMsg(message: _164.QueryDelegationResponse): _164.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _164.QueryDelegationResponseProtoMsg): _164.QueryDelegationResponse;
                toProto(message: _164.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _164.QueryDelegationResponse): _164.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _164.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_164.QueryUnbondingDelegationRequest>): _164.QueryUnbondingDelegationRequest;
                fromAmino(object: _164.QueryUnbondingDelegationRequestAmino): _164.QueryUnbondingDelegationRequest;
                toAmino(message: _164.QueryUnbondingDelegationRequest): _164.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _164.QueryUnbondingDelegationRequestAminoMsg): _164.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _164.QueryUnbondingDelegationRequest): _164.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _164.QueryUnbondingDelegationRequestProtoMsg): _164.QueryUnbondingDelegationRequest;
                toProto(message: _164.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _164.QueryUnbondingDelegationRequest): _164.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _164.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_164.QueryUnbondingDelegationResponse>): _164.QueryUnbondingDelegationResponse;
                fromAmino(object: _164.QueryUnbondingDelegationResponseAmino): _164.QueryUnbondingDelegationResponse;
                toAmino(message: _164.QueryUnbondingDelegationResponse): _164.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _164.QueryUnbondingDelegationResponseAminoMsg): _164.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _164.QueryUnbondingDelegationResponse): _164.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _164.QueryUnbondingDelegationResponseProtoMsg): _164.QueryUnbondingDelegationResponse;
                toProto(message: _164.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _164.QueryUnbondingDelegationResponse): _164.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorDelegationsRequest>): _164.QueryDelegatorDelegationsRequest;
                fromAmino(object: _164.QueryDelegatorDelegationsRequestAmino): _164.QueryDelegatorDelegationsRequest;
                toAmino(message: _164.QueryDelegatorDelegationsRequest): _164.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _164.QueryDelegatorDelegationsRequestAminoMsg): _164.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _164.QueryDelegatorDelegationsRequest): _164.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorDelegationsRequestProtoMsg): _164.QueryDelegatorDelegationsRequest;
                toProto(message: _164.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorDelegationsRequest): _164.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorDelegationsResponse>): _164.QueryDelegatorDelegationsResponse;
                fromAmino(object: _164.QueryDelegatorDelegationsResponseAmino): _164.QueryDelegatorDelegationsResponse;
                toAmino(message: _164.QueryDelegatorDelegationsResponse): _164.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _164.QueryDelegatorDelegationsResponseAminoMsg): _164.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _164.QueryDelegatorDelegationsResponse): _164.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorDelegationsResponseProtoMsg): _164.QueryDelegatorDelegationsResponse;
                toProto(message: _164.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorDelegationsResponse): _164.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorUnbondingDelegationsRequest>): _164.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _164.QueryDelegatorUnbondingDelegationsRequestAmino): _164.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _164.QueryDelegatorUnbondingDelegationsRequest): _164.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _164.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _164.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _164.QueryDelegatorUnbondingDelegationsRequest): _164.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _164.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _164.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorUnbondingDelegationsRequest): _164.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorUnbondingDelegationsResponse>): _164.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _164.QueryDelegatorUnbondingDelegationsResponseAmino): _164.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _164.QueryDelegatorUnbondingDelegationsResponse): _164.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _164.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _164.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _164.QueryDelegatorUnbondingDelegationsResponse): _164.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _164.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _164.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorUnbondingDelegationsResponse): _164.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _164.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryRedelegationsRequest;
                fromPartial(object: Partial<_164.QueryRedelegationsRequest>): _164.QueryRedelegationsRequest;
                fromAmino(object: _164.QueryRedelegationsRequestAmino): _164.QueryRedelegationsRequest;
                toAmino(message: _164.QueryRedelegationsRequest): _164.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _164.QueryRedelegationsRequestAminoMsg): _164.QueryRedelegationsRequest;
                toAminoMsg(message: _164.QueryRedelegationsRequest): _164.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryRedelegationsRequestProtoMsg): _164.QueryRedelegationsRequest;
                toProto(message: _164.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryRedelegationsRequest): _164.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _164.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryRedelegationsResponse;
                fromPartial(object: Partial<_164.QueryRedelegationsResponse>): _164.QueryRedelegationsResponse;
                fromAmino(object: _164.QueryRedelegationsResponseAmino): _164.QueryRedelegationsResponse;
                toAmino(message: _164.QueryRedelegationsResponse): _164.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _164.QueryRedelegationsResponseAminoMsg): _164.QueryRedelegationsResponse;
                toAminoMsg(message: _164.QueryRedelegationsResponse): _164.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryRedelegationsResponseProtoMsg): _164.QueryRedelegationsResponse;
                toProto(message: _164.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryRedelegationsResponse): _164.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorsRequest>): _164.QueryDelegatorValidatorsRequest;
                fromAmino(object: _164.QueryDelegatorValidatorsRequestAmino): _164.QueryDelegatorValidatorsRequest;
                toAmino(message: _164.QueryDelegatorValidatorsRequest): _164.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _164.QueryDelegatorValidatorsRequestAminoMsg): _164.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _164.QueryDelegatorValidatorsRequest): _164.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorValidatorsRequestProtoMsg): _164.QueryDelegatorValidatorsRequest;
                toProto(message: _164.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorValidatorsRequest): _164.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorsResponse>): _164.QueryDelegatorValidatorsResponse;
                fromAmino(object: _164.QueryDelegatorValidatorsResponseAmino): _164.QueryDelegatorValidatorsResponse;
                toAmino(message: _164.QueryDelegatorValidatorsResponse): _164.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _164.QueryDelegatorValidatorsResponseAminoMsg): _164.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _164.QueryDelegatorValidatorsResponse): _164.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorValidatorsResponseProtoMsg): _164.QueryDelegatorValidatorsResponse;
                toProto(message: _164.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorValidatorsResponse): _164.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorRequest>): _164.QueryDelegatorValidatorRequest;
                fromAmino(object: _164.QueryDelegatorValidatorRequestAmino): _164.QueryDelegatorValidatorRequest;
                toAmino(message: _164.QueryDelegatorValidatorRequest): _164.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _164.QueryDelegatorValidatorRequestAminoMsg): _164.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _164.QueryDelegatorValidatorRequest): _164.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorValidatorRequestProtoMsg): _164.QueryDelegatorValidatorRequest;
                toProto(message: _164.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorValidatorRequest): _164.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _164.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_164.QueryDelegatorValidatorResponse>): _164.QueryDelegatorValidatorResponse;
                fromAmino(object: _164.QueryDelegatorValidatorResponseAmino): _164.QueryDelegatorValidatorResponse;
                toAmino(message: _164.QueryDelegatorValidatorResponse): _164.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _164.QueryDelegatorValidatorResponseAminoMsg): _164.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _164.QueryDelegatorValidatorResponse): _164.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _164.QueryDelegatorValidatorResponseProtoMsg): _164.QueryDelegatorValidatorResponse;
                toProto(message: _164.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _164.QueryDelegatorValidatorResponse): _164.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _164.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_164.QueryHistoricalInfoRequest>): _164.QueryHistoricalInfoRequest;
                fromAmino(object: _164.QueryHistoricalInfoRequestAmino): _164.QueryHistoricalInfoRequest;
                toAmino(message: _164.QueryHistoricalInfoRequest): _164.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _164.QueryHistoricalInfoRequestAminoMsg): _164.QueryHistoricalInfoRequest;
                toAminoMsg(message: _164.QueryHistoricalInfoRequest): _164.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _164.QueryHistoricalInfoRequestProtoMsg): _164.QueryHistoricalInfoRequest;
                toProto(message: _164.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _164.QueryHistoricalInfoRequest): _164.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _164.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_164.QueryHistoricalInfoResponse>): _164.QueryHistoricalInfoResponse;
                fromAmino(object: _164.QueryHistoricalInfoResponseAmino): _164.QueryHistoricalInfoResponse;
                toAmino(message: _164.QueryHistoricalInfoResponse): _164.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _164.QueryHistoricalInfoResponseAminoMsg): _164.QueryHistoricalInfoResponse;
                toAminoMsg(message: _164.QueryHistoricalInfoResponse): _164.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _164.QueryHistoricalInfoResponseProtoMsg): _164.QueryHistoricalInfoResponse;
                toProto(message: _164.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _164.QueryHistoricalInfoResponse): _164.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _164.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.QueryPoolRequest;
                fromPartial(_: Partial<_164.QueryPoolRequest>): _164.QueryPoolRequest;
                fromAmino(_: _164.QueryPoolRequestAmino): _164.QueryPoolRequest;
                toAmino(_: _164.QueryPoolRequest): _164.QueryPoolRequestAmino;
                fromAminoMsg(object: _164.QueryPoolRequestAminoMsg): _164.QueryPoolRequest;
                toAminoMsg(message: _164.QueryPoolRequest): _164.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _164.QueryPoolRequestProtoMsg): _164.QueryPoolRequest;
                toProto(message: _164.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _164.QueryPoolRequest): _164.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _164.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryPoolResponse;
                fromPartial(object: Partial<_164.QueryPoolResponse>): _164.QueryPoolResponse;
                fromAmino(object: _164.QueryPoolResponseAmino): _164.QueryPoolResponse;
                toAmino(message: _164.QueryPoolResponse): _164.QueryPoolResponseAmino;
                fromAminoMsg(object: _164.QueryPoolResponseAminoMsg): _164.QueryPoolResponse;
                toAminoMsg(message: _164.QueryPoolResponse): _164.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _164.QueryPoolResponseProtoMsg): _164.QueryPoolResponse;
                toProto(message: _164.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _164.QueryPoolResponse): _164.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _164.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.QueryParamsRequest;
                fromPartial(_: Partial<_164.QueryParamsRequest>): _164.QueryParamsRequest;
                fromAmino(_: _164.QueryParamsRequestAmino): _164.QueryParamsRequest;
                toAmino(_: _164.QueryParamsRequest): _164.QueryParamsRequestAmino;
                fromAminoMsg(object: _164.QueryParamsRequestAminoMsg): _164.QueryParamsRequest;
                toAminoMsg(message: _164.QueryParamsRequest): _164.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _164.QueryParamsRequestProtoMsg): _164.QueryParamsRequest;
                toProto(message: _164.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _164.QueryParamsRequest): _164.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _164.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.QueryParamsResponse;
                fromPartial(object: Partial<_164.QueryParamsResponse>): _164.QueryParamsResponse;
                fromAmino(object: _164.QueryParamsResponseAmino): _164.QueryParamsResponse;
                toAmino(message: _164.QueryParamsResponse): _164.QueryParamsResponseAmino;
                fromAminoMsg(object: _164.QueryParamsResponseAminoMsg): _164.QueryParamsResponse;
                toAminoMsg(message: _164.QueryParamsResponse): _164.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _164.QueryParamsResponseProtoMsg): _164.QueryParamsResponse;
                toProto(message: _164.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _164.QueryParamsResponse): _164.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.GenesisState;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                toProto(message: _163.GenesisState): Uint8Array;
                toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _163.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.LastValidatorPower;
                fromPartial(object: Partial<_163.LastValidatorPower>): _163.LastValidatorPower;
                fromAmino(object: _163.LastValidatorPowerAmino): _163.LastValidatorPower;
                toAmino(message: _163.LastValidatorPower): _163.LastValidatorPowerAmino;
                fromAminoMsg(object: _163.LastValidatorPowerAminoMsg): _163.LastValidatorPower;
                toAminoMsg(message: _163.LastValidatorPower): _163.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _163.LastValidatorPowerProtoMsg): _163.LastValidatorPower;
                toProto(message: _163.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _163.LastValidatorPower): _163.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _162.AuthorizationType;
            authorizationTypeToJSON(object: _162.AuthorizationType): string;
            AuthorizationType: typeof _162.AuthorizationType;
            AuthorizationTypeSDKType: typeof _162.AuthorizationType;
            AuthorizationTypeAmino: typeof _162.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _162.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.StakeAuthorization;
                fromPartial(object: Partial<_162.StakeAuthorization>): _162.StakeAuthorization;
                fromAmino(object: _162.StakeAuthorizationAmino): _162.StakeAuthorization;
                toAmino(message: _162.StakeAuthorization): _162.StakeAuthorizationAmino;
                fromAminoMsg(object: _162.StakeAuthorizationAminoMsg): _162.StakeAuthorization;
                toAminoMsg(message: _162.StakeAuthorization): _162.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _162.StakeAuthorizationProtoMsg): _162.StakeAuthorization;
                toProto(message: _162.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _162.StakeAuthorization): _162.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _162.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.StakeAuthorization_Validators;
                fromPartial(object: Partial<_162.StakeAuthorization_Validators>): _162.StakeAuthorization_Validators;
                fromAmino(object: _162.StakeAuthorization_ValidatorsAmino): _162.StakeAuthorization_Validators;
                toAmino(message: _162.StakeAuthorization_Validators): _162.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _162.StakeAuthorization_ValidatorsAminoMsg): _162.StakeAuthorization_Validators;
                toAminoMsg(message: _162.StakeAuthorization_Validators): _162.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _162.StakeAuthorization_ValidatorsProtoMsg): _162.StakeAuthorization_Validators;
                toProto(message: _162.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _162.StakeAuthorization_Validators): _162.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _167.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.Config;
                    fromPartial(object: Partial<_167.Config>): _167.Config;
                    fromAmino(object: _167.ConfigAmino): _167.Config;
                    toAmino(message: _167.Config): _167.ConfigAmino;
                    fromAminoMsg(object: _167.ConfigAminoMsg): _167.Config;
                    toAminoMsg(message: _167.Config): _167.ConfigAminoMsg;
                    fromProtoMsg(message: _167.ConfigProtoMsg): _167.Config;
                    toProto(message: _167.Config): Uint8Array;
                    toProtoMsg(message: _167.Config): _167.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _168.SignMode;
                signModeToJSON(object: _168.SignMode): string;
                SignMode: typeof _168.SignMode;
                SignModeSDKType: typeof _168.SignMode;
                SignModeAmino: typeof _168.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _168.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureDescriptors;
                    fromPartial(object: Partial<_168.SignatureDescriptors>): _168.SignatureDescriptors;
                    fromAmino(object: _168.SignatureDescriptorsAmino): _168.SignatureDescriptors;
                    toAmino(message: _168.SignatureDescriptors): _168.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _168.SignatureDescriptorsAminoMsg): _168.SignatureDescriptors;
                    toAminoMsg(message: _168.SignatureDescriptors): _168.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _168.SignatureDescriptorsProtoMsg): _168.SignatureDescriptors;
                    toProto(message: _168.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _168.SignatureDescriptors): _168.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _168.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureDescriptor;
                    fromPartial(object: Partial<_168.SignatureDescriptor>): _168.SignatureDescriptor;
                    fromAmino(object: _168.SignatureDescriptorAmino): _168.SignatureDescriptor;
                    toAmino(message: _168.SignatureDescriptor): _168.SignatureDescriptorAmino;
                    fromAminoMsg(object: _168.SignatureDescriptorAminoMsg): _168.SignatureDescriptor;
                    toAminoMsg(message: _168.SignatureDescriptor): _168.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _168.SignatureDescriptorProtoMsg): _168.SignatureDescriptor;
                    toProto(message: _168.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _168.SignatureDescriptor): _168.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _168.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data>): _168.SignatureDescriptor_Data;
                    fromAmino(object: _168.SignatureDescriptor_DataAmino): _168.SignatureDescriptor_Data;
                    toAmino(message: _168.SignatureDescriptor_Data): _168.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _168.SignatureDescriptor_DataAminoMsg): _168.SignatureDescriptor_Data;
                    toAminoMsg(message: _168.SignatureDescriptor_Data): _168.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _168.SignatureDescriptor_DataProtoMsg): _168.SignatureDescriptor_Data;
                    toProto(message: _168.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _168.SignatureDescriptor_Data): _168.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _168.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data_Single>): _168.SignatureDescriptor_Data_Single;
                    fromAmino(object: _168.SignatureDescriptor_Data_SingleAmino): _168.SignatureDescriptor_Data_Single;
                    toAmino(message: _168.SignatureDescriptor_Data_Single): _168.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _168.SignatureDescriptor_Data_SingleAminoMsg): _168.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _168.SignatureDescriptor_Data_Single): _168.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _168.SignatureDescriptor_Data_SingleProtoMsg): _168.SignatureDescriptor_Data_Single;
                    toProto(message: _168.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _168.SignatureDescriptor_Data_Single): _168.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _168.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_168.SignatureDescriptor_Data_Multi>): _168.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _168.SignatureDescriptor_Data_MultiAmino): _168.SignatureDescriptor_Data_Multi;
                    toAmino(message: _168.SignatureDescriptor_Data_Multi): _168.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _168.SignatureDescriptor_Data_MultiAminoMsg): _168.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _168.SignatureDescriptor_Data_Multi): _168.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _168.SignatureDescriptor_Data_MultiProtoMsg): _168.SignatureDescriptor_Data_Multi;
                    toProto(message: _168.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _168.SignatureDescriptor_Data_Multi): _168.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _317.ServiceClientImpl;
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
            LCDQueryClient: typeof _295.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _170.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.Tx;
                fromPartial(object: Partial<_170.Tx>): _170.Tx;
                fromAmino(object: _170.TxAmino): _170.Tx;
                toAmino(message: _170.Tx): _170.TxAmino;
                fromAminoMsg(object: _170.TxAminoMsg): _170.Tx;
                toAminoMsg(message: _170.Tx): _170.TxAminoMsg;
                fromProtoMsg(message: _170.TxProtoMsg): _170.Tx;
                toProto(message: _170.Tx): Uint8Array;
                toProtoMsg(message: _170.Tx): _170.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _170.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.TxRaw;
                fromPartial(object: Partial<_170.TxRaw>): _170.TxRaw;
                fromAmino(object: _170.TxRawAmino): _170.TxRaw;
                toAmino(message: _170.TxRaw): _170.TxRawAmino;
                fromAminoMsg(object: _170.TxRawAminoMsg): _170.TxRaw;
                toAminoMsg(message: _170.TxRaw): _170.TxRawAminoMsg;
                fromProtoMsg(message: _170.TxRawProtoMsg): _170.TxRaw;
                toProto(message: _170.TxRaw): Uint8Array;
                toProtoMsg(message: _170.TxRaw): _170.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _170.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.SignDoc;
                fromPartial(object: Partial<_170.SignDoc>): _170.SignDoc;
                fromAmino(object: _170.SignDocAmino): _170.SignDoc;
                toAmino(message: _170.SignDoc): _170.SignDocAmino;
                fromAminoMsg(object: _170.SignDocAminoMsg): _170.SignDoc;
                toAminoMsg(message: _170.SignDoc): _170.SignDocAminoMsg;
                fromProtoMsg(message: _170.SignDocProtoMsg): _170.SignDoc;
                toProto(message: _170.SignDoc): Uint8Array;
                toProtoMsg(message: _170.SignDoc): _170.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _170.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.SignDocDirectAux;
                fromPartial(object: Partial<_170.SignDocDirectAux>): _170.SignDocDirectAux;
                fromAmino(object: _170.SignDocDirectAuxAmino): _170.SignDocDirectAux;
                toAmino(message: _170.SignDocDirectAux): _170.SignDocDirectAuxAmino;
                fromAminoMsg(object: _170.SignDocDirectAuxAminoMsg): _170.SignDocDirectAux;
                toAminoMsg(message: _170.SignDocDirectAux): _170.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _170.SignDocDirectAuxProtoMsg): _170.SignDocDirectAux;
                toProto(message: _170.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _170.SignDocDirectAux): _170.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _170.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.TxBody;
                fromPartial(object: Partial<_170.TxBody>): _170.TxBody;
                fromAmino(object: _170.TxBodyAmino): _170.TxBody;
                toAmino(message: _170.TxBody): _170.TxBodyAmino;
                fromAminoMsg(object: _170.TxBodyAminoMsg): _170.TxBody;
                toAminoMsg(message: _170.TxBody): _170.TxBodyAminoMsg;
                fromProtoMsg(message: _170.TxBodyProtoMsg): _170.TxBody;
                toProto(message: _170.TxBody): Uint8Array;
                toProtoMsg(message: _170.TxBody): _170.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _170.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.AuthInfo;
                fromPartial(object: Partial<_170.AuthInfo>): _170.AuthInfo;
                fromAmino(object: _170.AuthInfoAmino): _170.AuthInfo;
                toAmino(message: _170.AuthInfo): _170.AuthInfoAmino;
                fromAminoMsg(object: _170.AuthInfoAminoMsg): _170.AuthInfo;
                toAminoMsg(message: _170.AuthInfo): _170.AuthInfoAminoMsg;
                fromProtoMsg(message: _170.AuthInfoProtoMsg): _170.AuthInfo;
                toProto(message: _170.AuthInfo): Uint8Array;
                toProtoMsg(message: _170.AuthInfo): _170.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _170.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.SignerInfo;
                fromPartial(object: Partial<_170.SignerInfo>): _170.SignerInfo;
                fromAmino(object: _170.SignerInfoAmino): _170.SignerInfo;
                toAmino(message: _170.SignerInfo): _170.SignerInfoAmino;
                fromAminoMsg(object: _170.SignerInfoAminoMsg): _170.SignerInfo;
                toAminoMsg(message: _170.SignerInfo): _170.SignerInfoAminoMsg;
                fromProtoMsg(message: _170.SignerInfoProtoMsg): _170.SignerInfo;
                toProto(message: _170.SignerInfo): Uint8Array;
                toProtoMsg(message: _170.SignerInfo): _170.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _170.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.ModeInfo;
                fromPartial(object: Partial<_170.ModeInfo>): _170.ModeInfo;
                fromAmino(object: _170.ModeInfoAmino): _170.ModeInfo;
                toAmino(message: _170.ModeInfo): _170.ModeInfoAmino;
                fromAminoMsg(object: _170.ModeInfoAminoMsg): _170.ModeInfo;
                toAminoMsg(message: _170.ModeInfo): _170.ModeInfoAminoMsg;
                fromProtoMsg(message: _170.ModeInfoProtoMsg): _170.ModeInfo;
                toProto(message: _170.ModeInfo): Uint8Array;
                toProtoMsg(message: _170.ModeInfo): _170.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _170.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.ModeInfo_Single;
                fromPartial(object: Partial<_170.ModeInfo_Single>): _170.ModeInfo_Single;
                fromAmino(object: _170.ModeInfo_SingleAmino): _170.ModeInfo_Single;
                toAmino(message: _170.ModeInfo_Single): _170.ModeInfo_SingleAmino;
                fromAminoMsg(object: _170.ModeInfo_SingleAminoMsg): _170.ModeInfo_Single;
                toAminoMsg(message: _170.ModeInfo_Single): _170.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _170.ModeInfo_SingleProtoMsg): _170.ModeInfo_Single;
                toProto(message: _170.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _170.ModeInfo_Single): _170.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _170.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.ModeInfo_Multi;
                fromPartial(object: Partial<_170.ModeInfo_Multi>): _170.ModeInfo_Multi;
                fromAmino(object: _170.ModeInfo_MultiAmino): _170.ModeInfo_Multi;
                toAmino(message: _170.ModeInfo_Multi): _170.ModeInfo_MultiAmino;
                fromAminoMsg(object: _170.ModeInfo_MultiAminoMsg): _170.ModeInfo_Multi;
                toAminoMsg(message: _170.ModeInfo_Multi): _170.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _170.ModeInfo_MultiProtoMsg): _170.ModeInfo_Multi;
                toProto(message: _170.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _170.ModeInfo_Multi): _170.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _170.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.Fee;
                fromPartial(object: Partial<_170.Fee>): _170.Fee;
                fromAmino(object: _170.FeeAmino): _170.Fee;
                toAmino(message: _170.Fee): _170.FeeAmino;
                fromAminoMsg(object: _170.FeeAminoMsg): _170.Fee;
                toAminoMsg(message: _170.Fee): _170.FeeAminoMsg;
                fromProtoMsg(message: _170.FeeProtoMsg): _170.Fee;
                toProto(message: _170.Fee): Uint8Array;
                toProtoMsg(message: _170.Fee): _170.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _170.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.Tip;
                fromPartial(object: Partial<_170.Tip>): _170.Tip;
                fromAmino(object: _170.TipAmino): _170.Tip;
                toAmino(message: _170.Tip): _170.TipAmino;
                fromAminoMsg(object: _170.TipAminoMsg): _170.Tip;
                toAminoMsg(message: _170.Tip): _170.TipAminoMsg;
                fromProtoMsg(message: _170.TipProtoMsg): _170.Tip;
                toProto(message: _170.Tip): Uint8Array;
                toProtoMsg(message: _170.Tip): _170.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _170.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.AuxSignerData;
                fromPartial(object: Partial<_170.AuxSignerData>): _170.AuxSignerData;
                fromAmino(object: _170.AuxSignerDataAmino): _170.AuxSignerData;
                toAmino(message: _170.AuxSignerData): _170.AuxSignerDataAmino;
                fromAminoMsg(object: _170.AuxSignerDataAminoMsg): _170.AuxSignerData;
                toAminoMsg(message: _170.AuxSignerData): _170.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _170.AuxSignerDataProtoMsg): _170.AuxSignerData;
                toProto(message: _170.AuxSignerData): Uint8Array;
                toProtoMsg(message: _170.AuxSignerData): _170.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _169.OrderBy;
            orderByToJSON(object: _169.OrderBy): string;
            broadcastModeFromJSON(object: any): _169.BroadcastMode;
            broadcastModeToJSON(object: _169.BroadcastMode): string;
            OrderBy: typeof _169.OrderBy;
            OrderBySDKType: typeof _169.OrderBy;
            OrderByAmino: typeof _169.OrderBy;
            BroadcastMode: typeof _169.BroadcastMode;
            BroadcastModeSDKType: typeof _169.BroadcastMode;
            BroadcastModeAmino: typeof _169.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _169.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetTxsEventRequest;
                fromPartial(object: Partial<_169.GetTxsEventRequest>): _169.GetTxsEventRequest;
                fromAmino(object: _169.GetTxsEventRequestAmino): _169.GetTxsEventRequest;
                toAmino(message: _169.GetTxsEventRequest): _169.GetTxsEventRequestAmino;
                fromAminoMsg(object: _169.GetTxsEventRequestAminoMsg): _169.GetTxsEventRequest;
                toAminoMsg(message: _169.GetTxsEventRequest): _169.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _169.GetTxsEventRequestProtoMsg): _169.GetTxsEventRequest;
                toProto(message: _169.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _169.GetTxsEventRequest): _169.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _169.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetTxsEventResponse;
                fromPartial(object: Partial<_169.GetTxsEventResponse>): _169.GetTxsEventResponse;
                fromAmino(object: _169.GetTxsEventResponseAmino): _169.GetTxsEventResponse;
                toAmino(message: _169.GetTxsEventResponse): _169.GetTxsEventResponseAmino;
                fromAminoMsg(object: _169.GetTxsEventResponseAminoMsg): _169.GetTxsEventResponse;
                toAminoMsg(message: _169.GetTxsEventResponse): _169.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _169.GetTxsEventResponseProtoMsg): _169.GetTxsEventResponse;
                toProto(message: _169.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _169.GetTxsEventResponse): _169.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _169.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.BroadcastTxRequest;
                fromPartial(object: Partial<_169.BroadcastTxRequest>): _169.BroadcastTxRequest;
                fromAmino(object: _169.BroadcastTxRequestAmino): _169.BroadcastTxRequest;
                toAmino(message: _169.BroadcastTxRequest): _169.BroadcastTxRequestAmino;
                fromAminoMsg(object: _169.BroadcastTxRequestAminoMsg): _169.BroadcastTxRequest;
                toAminoMsg(message: _169.BroadcastTxRequest): _169.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _169.BroadcastTxRequestProtoMsg): _169.BroadcastTxRequest;
                toProto(message: _169.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _169.BroadcastTxRequest): _169.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _169.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.BroadcastTxResponse;
                fromPartial(object: Partial<_169.BroadcastTxResponse>): _169.BroadcastTxResponse;
                fromAmino(object: _169.BroadcastTxResponseAmino): _169.BroadcastTxResponse;
                toAmino(message: _169.BroadcastTxResponse): _169.BroadcastTxResponseAmino;
                fromAminoMsg(object: _169.BroadcastTxResponseAminoMsg): _169.BroadcastTxResponse;
                toAminoMsg(message: _169.BroadcastTxResponse): _169.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _169.BroadcastTxResponseProtoMsg): _169.BroadcastTxResponse;
                toProto(message: _169.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _169.BroadcastTxResponse): _169.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _169.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.SimulateRequest;
                fromPartial(object: Partial<_169.SimulateRequest>): _169.SimulateRequest;
                fromAmino(object: _169.SimulateRequestAmino): _169.SimulateRequest;
                toAmino(message: _169.SimulateRequest): _169.SimulateRequestAmino;
                fromAminoMsg(object: _169.SimulateRequestAminoMsg): _169.SimulateRequest;
                toAminoMsg(message: _169.SimulateRequest): _169.SimulateRequestAminoMsg;
                fromProtoMsg(message: _169.SimulateRequestProtoMsg): _169.SimulateRequest;
                toProto(message: _169.SimulateRequest): Uint8Array;
                toProtoMsg(message: _169.SimulateRequest): _169.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _169.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.SimulateResponse;
                fromPartial(object: Partial<_169.SimulateResponse>): _169.SimulateResponse;
                fromAmino(object: _169.SimulateResponseAmino): _169.SimulateResponse;
                toAmino(message: _169.SimulateResponse): _169.SimulateResponseAmino;
                fromAminoMsg(object: _169.SimulateResponseAminoMsg): _169.SimulateResponse;
                toAminoMsg(message: _169.SimulateResponse): _169.SimulateResponseAminoMsg;
                fromProtoMsg(message: _169.SimulateResponseProtoMsg): _169.SimulateResponse;
                toProto(message: _169.SimulateResponse): Uint8Array;
                toProtoMsg(message: _169.SimulateResponse): _169.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _169.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetTxRequest;
                fromPartial(object: Partial<_169.GetTxRequest>): _169.GetTxRequest;
                fromAmino(object: _169.GetTxRequestAmino): _169.GetTxRequest;
                toAmino(message: _169.GetTxRequest): _169.GetTxRequestAmino;
                fromAminoMsg(object: _169.GetTxRequestAminoMsg): _169.GetTxRequest;
                toAminoMsg(message: _169.GetTxRequest): _169.GetTxRequestAminoMsg;
                fromProtoMsg(message: _169.GetTxRequestProtoMsg): _169.GetTxRequest;
                toProto(message: _169.GetTxRequest): Uint8Array;
                toProtoMsg(message: _169.GetTxRequest): _169.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _169.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetTxResponse;
                fromPartial(object: Partial<_169.GetTxResponse>): _169.GetTxResponse;
                fromAmino(object: _169.GetTxResponseAmino): _169.GetTxResponse;
                toAmino(message: _169.GetTxResponse): _169.GetTxResponseAmino;
                fromAminoMsg(object: _169.GetTxResponseAminoMsg): _169.GetTxResponse;
                toAminoMsg(message: _169.GetTxResponse): _169.GetTxResponseAminoMsg;
                fromProtoMsg(message: _169.GetTxResponseProtoMsg): _169.GetTxResponse;
                toProto(message: _169.GetTxResponse): Uint8Array;
                toProtoMsg(message: _169.GetTxResponse): _169.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _169.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_169.GetBlockWithTxsRequest>): _169.GetBlockWithTxsRequest;
                fromAmino(object: _169.GetBlockWithTxsRequestAmino): _169.GetBlockWithTxsRequest;
                toAmino(message: _169.GetBlockWithTxsRequest): _169.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _169.GetBlockWithTxsRequestAminoMsg): _169.GetBlockWithTxsRequest;
                toAminoMsg(message: _169.GetBlockWithTxsRequest): _169.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _169.GetBlockWithTxsRequestProtoMsg): _169.GetBlockWithTxsRequest;
                toProto(message: _169.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _169.GetBlockWithTxsRequest): _169.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _169.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_169.GetBlockWithTxsResponse>): _169.GetBlockWithTxsResponse;
                fromAmino(object: _169.GetBlockWithTxsResponseAmino): _169.GetBlockWithTxsResponse;
                toAmino(message: _169.GetBlockWithTxsResponse): _169.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _169.GetBlockWithTxsResponseAminoMsg): _169.GetBlockWithTxsResponse;
                toAminoMsg(message: _169.GetBlockWithTxsResponse): _169.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _169.GetBlockWithTxsResponseProtoMsg): _169.GetBlockWithTxsResponse;
                toProto(message: _169.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _169.GetBlockWithTxsResponse): _169.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _169.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxDecodeRequest;
                fromPartial(object: Partial<_169.TxDecodeRequest>): _169.TxDecodeRequest;
                fromAmino(object: _169.TxDecodeRequestAmino): _169.TxDecodeRequest;
                toAmino(message: _169.TxDecodeRequest): _169.TxDecodeRequestAmino;
                fromAminoMsg(object: _169.TxDecodeRequestAminoMsg): _169.TxDecodeRequest;
                toAminoMsg(message: _169.TxDecodeRequest): _169.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _169.TxDecodeRequestProtoMsg): _169.TxDecodeRequest;
                toProto(message: _169.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _169.TxDecodeRequest): _169.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _169.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxDecodeResponse;
                fromPartial(object: Partial<_169.TxDecodeResponse>): _169.TxDecodeResponse;
                fromAmino(object: _169.TxDecodeResponseAmino): _169.TxDecodeResponse;
                toAmino(message: _169.TxDecodeResponse): _169.TxDecodeResponseAmino;
                fromAminoMsg(object: _169.TxDecodeResponseAminoMsg): _169.TxDecodeResponse;
                toAminoMsg(message: _169.TxDecodeResponse): _169.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _169.TxDecodeResponseProtoMsg): _169.TxDecodeResponse;
                toProto(message: _169.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _169.TxDecodeResponse): _169.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _169.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxEncodeRequest;
                fromPartial(object: Partial<_169.TxEncodeRequest>): _169.TxEncodeRequest;
                fromAmino(object: _169.TxEncodeRequestAmino): _169.TxEncodeRequest;
                toAmino(message: _169.TxEncodeRequest): _169.TxEncodeRequestAmino;
                fromAminoMsg(object: _169.TxEncodeRequestAminoMsg): _169.TxEncodeRequest;
                toAminoMsg(message: _169.TxEncodeRequest): _169.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _169.TxEncodeRequestProtoMsg): _169.TxEncodeRequest;
                toProto(message: _169.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _169.TxEncodeRequest): _169.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _169.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxEncodeResponse;
                fromPartial(object: Partial<_169.TxEncodeResponse>): _169.TxEncodeResponse;
                fromAmino(object: _169.TxEncodeResponseAmino): _169.TxEncodeResponse;
                toAmino(message: _169.TxEncodeResponse): _169.TxEncodeResponseAmino;
                fromAminoMsg(object: _169.TxEncodeResponseAminoMsg): _169.TxEncodeResponse;
                toAminoMsg(message: _169.TxEncodeResponse): _169.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _169.TxEncodeResponseProtoMsg): _169.TxEncodeResponse;
                toProto(message: _169.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _169.TxEncodeResponse): _169.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _169.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxEncodeAminoRequest;
                fromPartial(object: Partial<_169.TxEncodeAminoRequest>): _169.TxEncodeAminoRequest;
                fromAmino(object: _169.TxEncodeAminoRequestAmino): _169.TxEncodeAminoRequest;
                toAmino(message: _169.TxEncodeAminoRequest): _169.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _169.TxEncodeAminoRequestAminoMsg): _169.TxEncodeAminoRequest;
                toAminoMsg(message: _169.TxEncodeAminoRequest): _169.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _169.TxEncodeAminoRequestProtoMsg): _169.TxEncodeAminoRequest;
                toProto(message: _169.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _169.TxEncodeAminoRequest): _169.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _169.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxEncodeAminoResponse;
                fromPartial(object: Partial<_169.TxEncodeAminoResponse>): _169.TxEncodeAminoResponse;
                fromAmino(object: _169.TxEncodeAminoResponseAmino): _169.TxEncodeAminoResponse;
                toAmino(message: _169.TxEncodeAminoResponse): _169.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _169.TxEncodeAminoResponseAminoMsg): _169.TxEncodeAminoResponse;
                toAminoMsg(message: _169.TxEncodeAminoResponse): _169.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _169.TxEncodeAminoResponseProtoMsg): _169.TxEncodeAminoResponse;
                toProto(message: _169.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _169.TxEncodeAminoResponse): _169.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _169.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxDecodeAminoRequest;
                fromPartial(object: Partial<_169.TxDecodeAminoRequest>): _169.TxDecodeAminoRequest;
                fromAmino(object: _169.TxDecodeAminoRequestAmino): _169.TxDecodeAminoRequest;
                toAmino(message: _169.TxDecodeAminoRequest): _169.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _169.TxDecodeAminoRequestAminoMsg): _169.TxDecodeAminoRequest;
                toAminoMsg(message: _169.TxDecodeAminoRequest): _169.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _169.TxDecodeAminoRequestProtoMsg): _169.TxDecodeAminoRequest;
                toProto(message: _169.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _169.TxDecodeAminoRequest): _169.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _169.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.TxDecodeAminoResponse;
                fromPartial(object: Partial<_169.TxDecodeAminoResponse>): _169.TxDecodeAminoResponse;
                fromAmino(object: _169.TxDecodeAminoResponseAmino): _169.TxDecodeAminoResponse;
                toAmino(message: _169.TxDecodeAminoResponse): _169.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _169.TxDecodeAminoResponseAminoMsg): _169.TxDecodeAminoResponse;
                toAminoMsg(message: _169.TxDecodeAminoResponse): _169.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _169.TxDecodeAminoResponseProtoMsg): _169.TxDecodeAminoResponse;
                toProto(message: _169.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _169.TxDecodeAminoResponse): _169.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _171.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.Module;
                    fromPartial(object: Partial<_171.Module>): _171.Module;
                    fromAmino(object: _171.ModuleAmino): _171.Module;
                    toAmino(message: _171.Module): _171.ModuleAmino;
                    fromAminoMsg(object: _171.ModuleAminoMsg): _171.Module;
                    toAminoMsg(message: _171.Module): _171.ModuleAminoMsg;
                    fromProtoMsg(message: _171.ModuleProtoMsg): _171.Module;
                    toProto(message: _171.Module): Uint8Array;
                    toProtoMsg(message: _171.Module): _171.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _172.QueryCurrentPlanRequest): Promise<_172.QueryCurrentPlanResponse>;
                appliedPlan(request: _172.QueryAppliedPlanRequest): Promise<_172.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _172.QueryUpgradedConsensusStateRequest): Promise<_172.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _172.QueryModuleVersionsRequest): Promise<_172.QueryModuleVersionsResponse>;
                authority(request?: _172.QueryAuthorityRequest): Promise<_172.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
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
                    toAmino: (message: _173.MsgSoftwareUpgrade) => _173.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _173.MsgSoftwareUpgradeAmino) => _173.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _173.MsgCancelUpgrade) => _173.MsgCancelUpgradeAmino;
                    fromAmino: (object: _173.MsgCancelUpgradeAmino) => _173.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _174.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.Plan;
                fromPartial(object: Partial<_174.Plan>): _174.Plan;
                fromAmino(object: _174.PlanAmino): _174.Plan;
                toAmino(message: _174.Plan): _174.PlanAmino;
                fromAminoMsg(object: _174.PlanAminoMsg): _174.Plan;
                toAminoMsg(message: _174.Plan): _174.PlanAminoMsg;
                fromProtoMsg(message: _174.PlanProtoMsg): _174.Plan;
                toProto(message: _174.Plan): Uint8Array;
                toProtoMsg(message: _174.Plan): _174.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _174.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_174.SoftwareUpgradeProposal>): _174.SoftwareUpgradeProposal;
                fromAmino(object: _174.SoftwareUpgradeProposalAmino): _174.SoftwareUpgradeProposal;
                toAmino(message: _174.SoftwareUpgradeProposal): _174.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _174.SoftwareUpgradeProposalAminoMsg): _174.SoftwareUpgradeProposal;
                toAminoMsg(message: _174.SoftwareUpgradeProposal): _174.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _174.SoftwareUpgradeProposalProtoMsg): _174.SoftwareUpgradeProposal;
                toProto(message: _174.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _174.SoftwareUpgradeProposal): _174.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _174.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_174.CancelSoftwareUpgradeProposal>): _174.CancelSoftwareUpgradeProposal;
                fromAmino(object: _174.CancelSoftwareUpgradeProposalAmino): _174.CancelSoftwareUpgradeProposal;
                toAmino(message: _174.CancelSoftwareUpgradeProposal): _174.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _174.CancelSoftwareUpgradeProposalAminoMsg): _174.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _174.CancelSoftwareUpgradeProposal): _174.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _174.CancelSoftwareUpgradeProposalProtoMsg): _174.CancelSoftwareUpgradeProposal;
                toProto(message: _174.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _174.CancelSoftwareUpgradeProposal): _174.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _174.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.ModuleVersion;
                fromPartial(object: Partial<_174.ModuleVersion>): _174.ModuleVersion;
                fromAmino(object: _174.ModuleVersionAmino): _174.ModuleVersion;
                toAmino(message: _174.ModuleVersion): _174.ModuleVersionAmino;
                fromAminoMsg(object: _174.ModuleVersionAminoMsg): _174.ModuleVersion;
                toAminoMsg(message: _174.ModuleVersion): _174.ModuleVersionAminoMsg;
                fromProtoMsg(message: _174.ModuleVersionProtoMsg): _174.ModuleVersion;
                toProto(message: _174.ModuleVersion): Uint8Array;
                toProtoMsg(message: _174.ModuleVersion): _174.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _173.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_173.MsgSoftwareUpgrade>): _173.MsgSoftwareUpgrade;
                fromAmino(object: _173.MsgSoftwareUpgradeAmino): _173.MsgSoftwareUpgrade;
                toAmino(message: _173.MsgSoftwareUpgrade): _173.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _173.MsgSoftwareUpgradeAminoMsg): _173.MsgSoftwareUpgrade;
                toAminoMsg(message: _173.MsgSoftwareUpgrade): _173.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _173.MsgSoftwareUpgradeProtoMsg): _173.MsgSoftwareUpgrade;
                toProto(message: _173.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _173.MsgSoftwareUpgrade): _173.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _173.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_173.MsgSoftwareUpgradeResponse>): _173.MsgSoftwareUpgradeResponse;
                fromAmino(_: _173.MsgSoftwareUpgradeResponseAmino): _173.MsgSoftwareUpgradeResponse;
                toAmino(_: _173.MsgSoftwareUpgradeResponse): _173.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _173.MsgSoftwareUpgradeResponseAminoMsg): _173.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _173.MsgSoftwareUpgradeResponse): _173.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _173.MsgSoftwareUpgradeResponseProtoMsg): _173.MsgSoftwareUpgradeResponse;
                toProto(message: _173.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _173.MsgSoftwareUpgradeResponse): _173.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _173.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgCancelUpgrade;
                fromPartial(object: Partial<_173.MsgCancelUpgrade>): _173.MsgCancelUpgrade;
                fromAmino(object: _173.MsgCancelUpgradeAmino): _173.MsgCancelUpgrade;
                toAmino(message: _173.MsgCancelUpgrade): _173.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _173.MsgCancelUpgradeAminoMsg): _173.MsgCancelUpgrade;
                toAminoMsg(message: _173.MsgCancelUpgrade): _173.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _173.MsgCancelUpgradeProtoMsg): _173.MsgCancelUpgrade;
                toProto(message: _173.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _173.MsgCancelUpgrade): _173.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _173.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_173.MsgCancelUpgradeResponse>): _173.MsgCancelUpgradeResponse;
                fromAmino(_: _173.MsgCancelUpgradeResponseAmino): _173.MsgCancelUpgradeResponse;
                toAmino(_: _173.MsgCancelUpgradeResponse): _173.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _173.MsgCancelUpgradeResponseAminoMsg): _173.MsgCancelUpgradeResponse;
                toAminoMsg(message: _173.MsgCancelUpgradeResponse): _173.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _173.MsgCancelUpgradeResponseProtoMsg): _173.MsgCancelUpgradeResponse;
                toProto(message: _173.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _173.MsgCancelUpgradeResponse): _173.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _172.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_172.QueryCurrentPlanRequest>): _172.QueryCurrentPlanRequest;
                fromAmino(_: _172.QueryCurrentPlanRequestAmino): _172.QueryCurrentPlanRequest;
                toAmino(_: _172.QueryCurrentPlanRequest): _172.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _172.QueryCurrentPlanRequestAminoMsg): _172.QueryCurrentPlanRequest;
                toAminoMsg(message: _172.QueryCurrentPlanRequest): _172.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _172.QueryCurrentPlanRequestProtoMsg): _172.QueryCurrentPlanRequest;
                toProto(message: _172.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _172.QueryCurrentPlanRequest): _172.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _172.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_172.QueryCurrentPlanResponse>): _172.QueryCurrentPlanResponse;
                fromAmino(object: _172.QueryCurrentPlanResponseAmino): _172.QueryCurrentPlanResponse;
                toAmino(message: _172.QueryCurrentPlanResponse): _172.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _172.QueryCurrentPlanResponseAminoMsg): _172.QueryCurrentPlanResponse;
                toAminoMsg(message: _172.QueryCurrentPlanResponse): _172.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _172.QueryCurrentPlanResponseProtoMsg): _172.QueryCurrentPlanResponse;
                toProto(message: _172.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _172.QueryCurrentPlanResponse): _172.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _172.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_172.QueryAppliedPlanRequest>): _172.QueryAppliedPlanRequest;
                fromAmino(object: _172.QueryAppliedPlanRequestAmino): _172.QueryAppliedPlanRequest;
                toAmino(message: _172.QueryAppliedPlanRequest): _172.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _172.QueryAppliedPlanRequestAminoMsg): _172.QueryAppliedPlanRequest;
                toAminoMsg(message: _172.QueryAppliedPlanRequest): _172.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _172.QueryAppliedPlanRequestProtoMsg): _172.QueryAppliedPlanRequest;
                toProto(message: _172.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAppliedPlanRequest): _172.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _172.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_172.QueryAppliedPlanResponse>): _172.QueryAppliedPlanResponse;
                fromAmino(object: _172.QueryAppliedPlanResponseAmino): _172.QueryAppliedPlanResponse;
                toAmino(message: _172.QueryAppliedPlanResponse): _172.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _172.QueryAppliedPlanResponseAminoMsg): _172.QueryAppliedPlanResponse;
                toAminoMsg(message: _172.QueryAppliedPlanResponse): _172.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _172.QueryAppliedPlanResponseProtoMsg): _172.QueryAppliedPlanResponse;
                toProto(message: _172.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _172.QueryAppliedPlanResponse): _172.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _172.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_172.QueryUpgradedConsensusStateRequest>): _172.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _172.QueryUpgradedConsensusStateRequestAmino): _172.QueryUpgradedConsensusStateRequest;
                toAmino(message: _172.QueryUpgradedConsensusStateRequest): _172.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _172.QueryUpgradedConsensusStateRequestAminoMsg): _172.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _172.QueryUpgradedConsensusStateRequest): _172.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _172.QueryUpgradedConsensusStateRequestProtoMsg): _172.QueryUpgradedConsensusStateRequest;
                toProto(message: _172.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _172.QueryUpgradedConsensusStateRequest): _172.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _172.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_172.QueryUpgradedConsensusStateResponse>): _172.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _172.QueryUpgradedConsensusStateResponseAmino): _172.QueryUpgradedConsensusStateResponse;
                toAmino(message: _172.QueryUpgradedConsensusStateResponse): _172.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _172.QueryUpgradedConsensusStateResponseAminoMsg): _172.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _172.QueryUpgradedConsensusStateResponse): _172.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _172.QueryUpgradedConsensusStateResponseProtoMsg): _172.QueryUpgradedConsensusStateResponse;
                toProto(message: _172.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _172.QueryUpgradedConsensusStateResponse): _172.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _172.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_172.QueryModuleVersionsRequest>): _172.QueryModuleVersionsRequest;
                fromAmino(object: _172.QueryModuleVersionsRequestAmino): _172.QueryModuleVersionsRequest;
                toAmino(message: _172.QueryModuleVersionsRequest): _172.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _172.QueryModuleVersionsRequestAminoMsg): _172.QueryModuleVersionsRequest;
                toAminoMsg(message: _172.QueryModuleVersionsRequest): _172.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _172.QueryModuleVersionsRequestProtoMsg): _172.QueryModuleVersionsRequest;
                toProto(message: _172.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryModuleVersionsRequest): _172.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _172.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_172.QueryModuleVersionsResponse>): _172.QueryModuleVersionsResponse;
                fromAmino(object: _172.QueryModuleVersionsResponseAmino): _172.QueryModuleVersionsResponse;
                toAmino(message: _172.QueryModuleVersionsResponse): _172.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _172.QueryModuleVersionsResponseAminoMsg): _172.QueryModuleVersionsResponse;
                toAminoMsg(message: _172.QueryModuleVersionsResponse): _172.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _172.QueryModuleVersionsResponseProtoMsg): _172.QueryModuleVersionsResponse;
                toProto(message: _172.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryModuleVersionsResponse): _172.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _172.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.QueryAuthorityRequest;
                fromPartial(_: Partial<_172.QueryAuthorityRequest>): _172.QueryAuthorityRequest;
                fromAmino(_: _172.QueryAuthorityRequestAmino): _172.QueryAuthorityRequest;
                toAmino(_: _172.QueryAuthorityRequest): _172.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _172.QueryAuthorityRequestAminoMsg): _172.QueryAuthorityRequest;
                toAminoMsg(message: _172.QueryAuthorityRequest): _172.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _172.QueryAuthorityRequestProtoMsg): _172.QueryAuthorityRequest;
                toProto(message: _172.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAuthorityRequest): _172.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _172.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryAuthorityResponse;
                fromPartial(object: Partial<_172.QueryAuthorityResponse>): _172.QueryAuthorityResponse;
                fromAmino(object: _172.QueryAuthorityResponseAmino): _172.QueryAuthorityResponse;
                toAmino(message: _172.QueryAuthorityResponse): _172.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _172.QueryAuthorityResponseAminoMsg): _172.QueryAuthorityResponse;
                toAminoMsg(message: _172.QueryAuthorityResponse): _172.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _172.QueryAuthorityResponseProtoMsg): _172.QueryAuthorityResponse;
                toProto(message: _172.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _172.QueryAuthorityResponse): _172.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _175.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _175.Module;
                    fromPartial(_: Partial<_175.Module>): _175.Module;
                    fromAmino(_: _175.ModuleAmino): _175.Module;
                    toAmino(_: _175.Module): _175.ModuleAmino;
                    fromAminoMsg(object: _175.ModuleAminoMsg): _175.Module;
                    toAminoMsg(message: _175.Module): _175.ModuleAminoMsg;
                    fromProtoMsg(message: _175.ModuleProtoMsg): _175.Module;
                    toProto(message: _175.Module): Uint8Array;
                    toProtoMsg(message: _175.Module): _175.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _335.MsgClientImpl;
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
                    toAmino: (message: _176.MsgCreateVestingAccount) => _176.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _176.MsgCreateVestingAccountAmino) => _176.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _176.MsgCreatePermanentLockedAccount) => _176.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _176.MsgCreatePermanentLockedAccountAmino) => _176.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _176.MsgCreatePeriodicVestingAccount) => _176.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _176.MsgCreatePeriodicVestingAccountAmino) => _176.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _177.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.BaseVestingAccount;
                fromPartial(object: Partial<_177.BaseVestingAccount>): _177.BaseVestingAccount;
                fromAmino(object: _177.BaseVestingAccountAmino): _177.BaseVestingAccount;
                toAmino(message: _177.BaseVestingAccount): _177.BaseVestingAccountAmino;
                fromAminoMsg(object: _177.BaseVestingAccountAminoMsg): _177.BaseVestingAccount;
                toAminoMsg(message: _177.BaseVestingAccount): _177.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _177.BaseVestingAccountProtoMsg): _177.BaseVestingAccount;
                toProto(message: _177.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _177.BaseVestingAccount): _177.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _177.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.ContinuousVestingAccount;
                fromPartial(object: Partial<_177.ContinuousVestingAccount>): _177.ContinuousVestingAccount;
                fromAmino(object: _177.ContinuousVestingAccountAmino): _177.ContinuousVestingAccount;
                toAmino(message: _177.ContinuousVestingAccount): _177.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _177.ContinuousVestingAccountAminoMsg): _177.ContinuousVestingAccount;
                toAminoMsg(message: _177.ContinuousVestingAccount): _177.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _177.ContinuousVestingAccountProtoMsg): _177.ContinuousVestingAccount;
                toProto(message: _177.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _177.ContinuousVestingAccount): _177.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _177.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.DelayedVestingAccount;
                fromPartial(object: Partial<_177.DelayedVestingAccount>): _177.DelayedVestingAccount;
                fromAmino(object: _177.DelayedVestingAccountAmino): _177.DelayedVestingAccount;
                toAmino(message: _177.DelayedVestingAccount): _177.DelayedVestingAccountAmino;
                fromAminoMsg(object: _177.DelayedVestingAccountAminoMsg): _177.DelayedVestingAccount;
                toAminoMsg(message: _177.DelayedVestingAccount): _177.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _177.DelayedVestingAccountProtoMsg): _177.DelayedVestingAccount;
                toProto(message: _177.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _177.DelayedVestingAccount): _177.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _177.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.Period;
                fromPartial(object: Partial<_177.Period>): _177.Period;
                fromAmino(object: _177.PeriodAmino): _177.Period;
                toAmino(message: _177.Period): _177.PeriodAmino;
                fromAminoMsg(object: _177.PeriodAminoMsg): _177.Period;
                toAminoMsg(message: _177.Period): _177.PeriodAminoMsg;
                fromProtoMsg(message: _177.PeriodProtoMsg): _177.Period;
                toProto(message: _177.Period): Uint8Array;
                toProtoMsg(message: _177.Period): _177.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _177.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.PeriodicVestingAccount;
                fromPartial(object: Partial<_177.PeriodicVestingAccount>): _177.PeriodicVestingAccount;
                fromAmino(object: _177.PeriodicVestingAccountAmino): _177.PeriodicVestingAccount;
                toAmino(message: _177.PeriodicVestingAccount): _177.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _177.PeriodicVestingAccountAminoMsg): _177.PeriodicVestingAccount;
                toAminoMsg(message: _177.PeriodicVestingAccount): _177.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _177.PeriodicVestingAccountProtoMsg): _177.PeriodicVestingAccount;
                toProto(message: _177.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _177.PeriodicVestingAccount): _177.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _177.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _177.PermanentLockedAccount;
                fromPartial(object: Partial<_177.PermanentLockedAccount>): _177.PermanentLockedAccount;
                fromAmino(object: _177.PermanentLockedAccountAmino): _177.PermanentLockedAccount;
                toAmino(message: _177.PermanentLockedAccount): _177.PermanentLockedAccountAmino;
                fromAminoMsg(object: _177.PermanentLockedAccountAminoMsg): _177.PermanentLockedAccount;
                toAminoMsg(message: _177.PermanentLockedAccount): _177.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _177.PermanentLockedAccountProtoMsg): _177.PermanentLockedAccount;
                toProto(message: _177.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _177.PermanentLockedAccount): _177.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _176.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.MsgCreateVestingAccount;
                fromPartial(object: Partial<_176.MsgCreateVestingAccount>): _176.MsgCreateVestingAccount;
                fromAmino(object: _176.MsgCreateVestingAccountAmino): _176.MsgCreateVestingAccount;
                toAmino(message: _176.MsgCreateVestingAccount): _176.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _176.MsgCreateVestingAccountAminoMsg): _176.MsgCreateVestingAccount;
                toAminoMsg(message: _176.MsgCreateVestingAccount): _176.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _176.MsgCreateVestingAccountProtoMsg): _176.MsgCreateVestingAccount;
                toProto(message: _176.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _176.MsgCreateVestingAccount): _176.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _176.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_176.MsgCreateVestingAccountResponse>): _176.MsgCreateVestingAccountResponse;
                fromAmino(_: _176.MsgCreateVestingAccountResponseAmino): _176.MsgCreateVestingAccountResponse;
                toAmino(_: _176.MsgCreateVestingAccountResponse): _176.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _176.MsgCreateVestingAccountResponseAminoMsg): _176.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _176.MsgCreateVestingAccountResponse): _176.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _176.MsgCreateVestingAccountResponseProtoMsg): _176.MsgCreateVestingAccountResponse;
                toProto(message: _176.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _176.MsgCreateVestingAccountResponse): _176.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _176.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_176.MsgCreatePermanentLockedAccount>): _176.MsgCreatePermanentLockedAccount;
                fromAmino(object: _176.MsgCreatePermanentLockedAccountAmino): _176.MsgCreatePermanentLockedAccount;
                toAmino(message: _176.MsgCreatePermanentLockedAccount): _176.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _176.MsgCreatePermanentLockedAccountAminoMsg): _176.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _176.MsgCreatePermanentLockedAccount): _176.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _176.MsgCreatePermanentLockedAccountProtoMsg): _176.MsgCreatePermanentLockedAccount;
                toProto(message: _176.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _176.MsgCreatePermanentLockedAccount): _176.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _176.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_176.MsgCreatePermanentLockedAccountResponse>): _176.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _176.MsgCreatePermanentLockedAccountResponseAmino): _176.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _176.MsgCreatePermanentLockedAccountResponse): _176.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _176.MsgCreatePermanentLockedAccountResponseAminoMsg): _176.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _176.MsgCreatePermanentLockedAccountResponse): _176.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _176.MsgCreatePermanentLockedAccountResponseProtoMsg): _176.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _176.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _176.MsgCreatePermanentLockedAccountResponse): _176.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _176.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_176.MsgCreatePeriodicVestingAccount>): _176.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _176.MsgCreatePeriodicVestingAccountAmino): _176.MsgCreatePeriodicVestingAccount;
                toAmino(message: _176.MsgCreatePeriodicVestingAccount): _176.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _176.MsgCreatePeriodicVestingAccountAminoMsg): _176.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _176.MsgCreatePeriodicVestingAccount): _176.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _176.MsgCreatePeriodicVestingAccountProtoMsg): _176.MsgCreatePeriodicVestingAccount;
                toProto(message: _176.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _176.MsgCreatePeriodicVestingAccount): _176.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _176.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_176.MsgCreatePeriodicVestingAccountResponse>): _176.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _176.MsgCreatePeriodicVestingAccountResponseAmino): _176.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _176.MsgCreatePeriodicVestingAccountResponse): _176.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _176.MsgCreatePeriodicVestingAccountResponseAminoMsg): _176.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _176.MsgCreatePeriodicVestingAccountResponse): _176.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _176.MsgCreatePeriodicVestingAccountResponseProtoMsg): _176.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _176.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _176.MsgCreatePeriodicVestingAccountResponse): _176.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _319.MsgClientImpl;
                };
                authz: {
                    v1beta1: _320.MsgClientImpl;
                };
                bank: {
                    v1beta1: _321.MsgClientImpl;
                };
                consensus: {
                    v1: _322.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _323.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _324.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _325.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _326.MsgClientImpl;
                };
                gov: {
                    v1: _327.MsgClientImpl;
                    v1beta1: _328.MsgClientImpl;
                };
                group: {
                    v1: _329.MsgClientImpl;
                };
                mint: {
                    v1beta1: _330.MsgClientImpl;
                };
                nft: {
                    v1beta1: _331.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _332.MsgClientImpl;
                };
                staking: {
                    v1beta1: _333.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _334.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _335.MsgClientImpl;
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
                    v1beta1: _278.LCDQueryClient;
                };
                authz: {
                    v1beta1: _279.LCDQueryClient;
                };
                bank: {
                    v1beta1: _280.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _281.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _282.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _283.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _284.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _285.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _286.LCDQueryClient;
                };
                gov: {
                    v1: _287.LCDQueryClient;
                    v1beta1: _288.LCDQueryClient;
                };
                group: {
                    v1: _289.LCDQueryClient;
                };
                mint: {
                    v1beta1: _290.LCDQueryClient;
                };
                nft: {
                    v1beta1: _291.LCDQueryClient;
                };
                params: {
                    v1beta1: _292.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _293.LCDQueryClient;
                };
                staking: {
                    v1beta1: _294.LCDQueryClient;
                };
                tx: {
                    v1beta1: _295.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _296.LCDQueryClient;
                };
            };
        }>;
    };
}
