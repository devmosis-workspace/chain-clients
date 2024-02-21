import * as _50 from "./app/runtime/v1alpha1/module";
import * as _51 from "./app/v1alpha1/config";
import * as _52 from "./app/v1alpha1/module";
import * as _53 from "./app/v1alpha1/query";
import * as _54 from "./auth/module/v1/module";
import * as _55 from "./auth/v1beta1/auth";
import * as _56 from "./auth/v1beta1/genesis";
import * as _57 from "./auth/v1beta1/query";
import * as _58 from "./auth/v1beta1/tx";
import * as _59 from "./authz/module/v1/module";
import * as _60 from "./authz/v1beta1/authz";
import * as _61 from "./authz/v1beta1/event";
import * as _62 from "./authz/v1beta1/genesis";
import * as _63 from "./authz/v1beta1/query";
import * as _64 from "./authz/v1beta1/tx";
import * as _65 from "./autocli/v1/options";
import * as _66 from "./autocli/v1/query";
import * as _67 from "./bank/module/v1/module";
import * as _68 from "./bank/v1beta1/authz";
import * as _69 from "./bank/v1beta1/bank";
import * as _70 from "./bank/v1beta1/genesis";
import * as _71 from "./bank/v1beta1/query";
import * as _72 from "./bank/v1beta1/tx";
import * as _73 from "./base/abci/v1beta1/abci";
import * as _74 from "./base/kv/v1beta1/kv";
import * as _75 from "./base/node/v1beta1/query";
import * as _76 from "./base/query/v1beta1/pagination";
import * as _77 from "./base/reflection/v1beta1/reflection";
import * as _78 from "./base/reflection/v2alpha1/reflection";
import * as _79 from "./base/snapshots/v1beta1/snapshot";
import * as _80 from "./base/store/v1beta1/commit_info";
import * as _81 from "./base/store/v1beta1/listening";
import * as _82 from "./base/tendermint/v1beta1/query";
import * as _83 from "./base/tendermint/v1beta1/types";
import * as _84 from "./base/v1beta1/coin";
import * as _85 from "./capability/module/v1/module";
import * as _86 from "./capability/v1beta1/capability";
import * as _87 from "./capability/v1beta1/genesis";
import * as _88 from "./consensus/module/v1/module";
import * as _89 from "./consensus/v1/query";
import * as _90 from "./consensus/v1/tx";
import * as _91 from "./crisis/module/v1/module";
import * as _92 from "./crisis/v1beta1/genesis";
import * as _93 from "./crisis/v1beta1/tx";
import * as _94 from "./crypto/ed25519/keys";
import * as _95 from "./crypto/hd/v1/hd";
import * as _96 from "./crypto/keyring/v1/record";
import * as _97 from "./crypto/multisig/keys";
import * as _98 from "./crypto/secp256k1/keys";
import * as _99 from "./crypto/secp256r1/keys";
import * as _100 from "./distribution/module/v1/module";
import * as _101 from "./distribution/v1beta1/distribution";
import * as _102 from "./distribution/v1beta1/genesis";
import * as _103 from "./distribution/v1beta1/query";
import * as _104 from "./distribution/v1beta1/tx";
import * as _105 from "./evidence/module/v1/module";
import * as _106 from "./evidence/v1beta1/evidence";
import * as _107 from "./evidence/v1beta1/genesis";
import * as _108 from "./evidence/v1beta1/query";
import * as _109 from "./evidence/v1beta1/tx";
import * as _110 from "./feegrant/module/v1/module";
import * as _111 from "./feegrant/v1beta1/feegrant";
import * as _112 from "./feegrant/v1beta1/genesis";
import * as _113 from "./feegrant/v1beta1/query";
import * as _114 from "./feegrant/v1beta1/tx";
import * as _115 from "./genutil/module/v1/module";
import * as _116 from "./genutil/v1beta1/genesis";
import * as _117 from "./gov/module/v1/module";
import * as _118 from "./gov/v1/genesis";
import * as _119 from "./gov/v1/gov";
import * as _120 from "./gov/v1/query";
import * as _121 from "./gov/v1/tx";
import * as _122 from "./gov/v1beta1/genesis";
import * as _123 from "./gov/v1beta1/gov";
import * as _124 from "./gov/v1beta1/query";
import * as _125 from "./gov/v1beta1/tx";
import * as _126 from "./group/module/v1/module";
import * as _127 from "./group/v1/events";
import * as _128 from "./group/v1/genesis";
import * as _129 from "./group/v1/query";
import * as _130 from "./group/v1/tx";
import * as _131 from "./group/v1/types";
import * as _132 from "./mint/module/v1/module";
import * as _133 from "./mint/v1beta1/genesis";
import * as _134 from "./mint/v1beta1/mint";
import * as _135 from "./mint/v1beta1/query";
import * as _136 from "./mint/v1beta1/tx";
import * as _138 from "./nft/module/v1/module";
import * as _139 from "./nft/v1beta1/event";
import * as _140 from "./nft/v1beta1/genesis";
import * as _141 from "./nft/v1beta1/nft";
import * as _142 from "./nft/v1beta1/query";
import * as _143 from "./nft/v1beta1/tx";
import * as _144 from "./orm/module/v1alpha1/module";
import * as _145 from "./orm/query/v1alpha1/query";
import * as _146 from "./orm/v1/orm";
import * as _147 from "./orm/v1alpha1/schema";
import * as _148 from "./params/module/v1/module";
import * as _149 from "./params/v1beta1/params";
import * as _150 from "./params/v1beta1/query";
import * as _152 from "./reflection/v1/reflection";
import * as _153 from "./slashing/module/v1/module";
import * as _154 from "./slashing/v1beta1/genesis";
import * as _155 from "./slashing/v1beta1/query";
import * as _156 from "./slashing/v1beta1/slashing";
import * as _157 from "./slashing/v1beta1/tx";
import * as _158 from "./staking/module/v1/module";
import * as _159 from "./staking/v1beta1/authz";
import * as _160 from "./staking/v1beta1/genesis";
import * as _161 from "./staking/v1beta1/query";
import * as _162 from "./staking/v1beta1/staking";
import * as _163 from "./staking/v1beta1/tx";
import * as _164 from "./tx/config/v1/config";
import * as _165 from "./tx/signing/v1beta1/signing";
import * as _166 from "./tx/v1beta1/service";
import * as _167 from "./tx/v1beta1/tx";
import * as _168 from "./upgrade/module/v1/module";
import * as _169 from "./upgrade/v1beta1/query";
import * as _170 from "./upgrade/v1beta1/tx";
import * as _171 from "./upgrade/v1beta1/upgrade";
import * as _172 from "./vesting/module/v1/module";
import * as _173 from "./vesting/v1beta1/tx";
import * as _174 from "./vesting/v1beta1/vesting";
import * as _175 from "./ics23/v1/proofs";
import * as _320 from "./auth/v1beta1/query.lcd";
import * as _321 from "./authz/v1beta1/query.lcd";
import * as _322 from "./bank/v1beta1/query.lcd";
import * as _323 from "./base/node/v1beta1/query.lcd";
import * as _324 from "./base/tendermint/v1beta1/query.lcd";
import * as _325 from "./consensus/v1/query.lcd";
import * as _326 from "./distribution/v1beta1/query.lcd";
import * as _327 from "./evidence/v1beta1/query.lcd";
import * as _328 from "./feegrant/v1beta1/query.lcd";
import * as _329 from "./gov/v1/query.lcd";
import * as _330 from "./gov/v1beta1/query.lcd";
import * as _331 from "./group/v1/query.lcd";
import * as _332 from "./mint/v1beta1/query.lcd";
import * as _333 from "./nft/v1beta1/query.lcd";
import * as _334 from "./params/v1beta1/query.lcd";
import * as _335 from "./slashing/v1beta1/query.lcd";
import * as _336 from "./staking/v1beta1/query.lcd";
import * as _337 from "./tx/v1beta1/service.lcd";
import * as _338 from "./upgrade/v1beta1/query.lcd";
import * as _339 from "./app/v1alpha1/query.rpc.Query";
import * as _340 from "./auth/v1beta1/query.rpc.Query";
import * as _341 from "./authz/v1beta1/query.rpc.Query";
import * as _342 from "./autocli/v1/query.rpc.Query";
import * as _343 from "./bank/v1beta1/query.rpc.Query";
import * as _344 from "./base/node/v1beta1/query.rpc.Service";
import * as _345 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _346 from "./consensus/v1/query.rpc.Query";
import * as _347 from "./distribution/v1beta1/query.rpc.Query";
import * as _348 from "./evidence/v1beta1/query.rpc.Query";
import * as _349 from "./feegrant/v1beta1/query.rpc.Query";
import * as _350 from "./gov/v1/query.rpc.Query";
import * as _351 from "./gov/v1beta1/query.rpc.Query";
import * as _352 from "./group/v1/query.rpc.Query";
import * as _353 from "./mint/v1beta1/query.rpc.Query";
import * as _354 from "./nft/v1beta1/query.rpc.Query";
import * as _355 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _356 from "./params/v1beta1/query.rpc.Query";
import * as _357 from "./slashing/v1beta1/query.rpc.Query";
import * as _358 from "./staking/v1beta1/query.rpc.Query";
import * as _359 from "./tx/v1beta1/service.rpc.Service";
import * as _360 from "./upgrade/v1beta1/query.rpc.Query";
import * as _361 from "./auth/v1beta1/tx.rpc.msg";
import * as _362 from "./authz/v1beta1/tx.rpc.msg";
import * as _363 from "./bank/v1beta1/tx.rpc.msg";
import * as _364 from "./consensus/v1/tx.rpc.msg";
import * as _365 from "./crisis/v1beta1/tx.rpc.msg";
import * as _366 from "./distribution/v1beta1/tx.rpc.msg";
import * as _367 from "./evidence/v1beta1/tx.rpc.msg";
import * as _368 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _369 from "./gov/v1/tx.rpc.msg";
import * as _370 from "./gov/v1beta1/tx.rpc.msg";
import * as _371 from "./group/v1/tx.rpc.msg";
import * as _372 from "./mint/v1beta1/tx.rpc.msg";
import * as _373 from "./nft/v1beta1/tx.rpc.msg";
import * as _374 from "./slashing/v1beta1/tx.rpc.msg";
import * as _375 from "./staking/v1beta1/tx.rpc.msg";
import * as _376 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _377 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _50.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.Module;
                    fromPartial(object: Partial<_50.Module>): _50.Module;
                    fromAmino(object: _50.ModuleAmino): _50.Module;
                    toAmino(message: _50.Module): _50.ModuleAmino;
                    fromAminoMsg(object: _50.ModuleAminoMsg): _50.Module;
                    toAminoMsg(message: _50.Module): _50.ModuleAminoMsg;
                    fromProtoMsg(message: _50.ModuleProtoMsg): _50.Module;
                    toProto(message: _50.Module): Uint8Array;
                    toProtoMsg(message: _50.Module): _50.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _50.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.StoreKeyConfig;
                    fromPartial(object: Partial<_50.StoreKeyConfig>): _50.StoreKeyConfig;
                    fromAmino(object: _50.StoreKeyConfigAmino): _50.StoreKeyConfig;
                    toAmino(message: _50.StoreKeyConfig): _50.StoreKeyConfigAmino;
                    fromAminoMsg(object: _50.StoreKeyConfigAminoMsg): _50.StoreKeyConfig;
                    toAminoMsg(message: _50.StoreKeyConfig): _50.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _50.StoreKeyConfigProtoMsg): _50.StoreKeyConfig;
                    toProto(message: _50.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _50.StoreKeyConfig): _50.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _339.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _53.QueryConfigRequest): Promise<_53.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _53.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryConfigRequest;
                fromPartial(_: Partial<_53.QueryConfigRequest>): _53.QueryConfigRequest;
                fromAmino(_: _53.QueryConfigRequestAmino): _53.QueryConfigRequest;
                toAmino(_: _53.QueryConfigRequest): _53.QueryConfigRequestAmino;
                fromAminoMsg(object: _53.QueryConfigRequestAminoMsg): _53.QueryConfigRequest;
                toAminoMsg(message: _53.QueryConfigRequest): _53.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _53.QueryConfigRequestProtoMsg): _53.QueryConfigRequest;
                toProto(message: _53.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _53.QueryConfigRequest): _53.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _53.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryConfigResponse;
                fromPartial(object: Partial<_53.QueryConfigResponse>): _53.QueryConfigResponse;
                fromAmino(object: _53.QueryConfigResponseAmino): _53.QueryConfigResponse;
                toAmino(message: _53.QueryConfigResponse): _53.QueryConfigResponseAmino;
                fromAminoMsg(object: _53.QueryConfigResponseAminoMsg): _53.QueryConfigResponse;
                toAminoMsg(message: _53.QueryConfigResponse): _53.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _53.QueryConfigResponseProtoMsg): _53.QueryConfigResponse;
                toProto(message: _53.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _53.QueryConfigResponse): _53.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _52.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ModuleDescriptor;
                fromPartial(object: Partial<_52.ModuleDescriptor>): _52.ModuleDescriptor;
                fromAmino(object: _52.ModuleDescriptorAmino): _52.ModuleDescriptor;
                toAmino(message: _52.ModuleDescriptor): _52.ModuleDescriptorAmino;
                fromAminoMsg(object: _52.ModuleDescriptorAminoMsg): _52.ModuleDescriptor;
                toAminoMsg(message: _52.ModuleDescriptor): _52.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _52.ModuleDescriptorProtoMsg): _52.ModuleDescriptor;
                toProto(message: _52.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _52.ModuleDescriptor): _52.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _52.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PackageReference;
                fromPartial(object: Partial<_52.PackageReference>): _52.PackageReference;
                fromAmino(object: _52.PackageReferenceAmino): _52.PackageReference;
                toAmino(message: _52.PackageReference): _52.PackageReferenceAmino;
                fromAminoMsg(object: _52.PackageReferenceAminoMsg): _52.PackageReference;
                toAminoMsg(message: _52.PackageReference): _52.PackageReferenceAminoMsg;
                fromProtoMsg(message: _52.PackageReferenceProtoMsg): _52.PackageReference;
                toProto(message: _52.PackageReference): Uint8Array;
                toProtoMsg(message: _52.PackageReference): _52.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _52.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MigrateFromInfo;
                fromPartial(object: Partial<_52.MigrateFromInfo>): _52.MigrateFromInfo;
                fromAmino(object: _52.MigrateFromInfoAmino): _52.MigrateFromInfo;
                toAmino(message: _52.MigrateFromInfo): _52.MigrateFromInfoAmino;
                fromAminoMsg(object: _52.MigrateFromInfoAminoMsg): _52.MigrateFromInfo;
                toAminoMsg(message: _52.MigrateFromInfo): _52.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _52.MigrateFromInfoProtoMsg): _52.MigrateFromInfo;
                toProto(message: _52.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _52.MigrateFromInfo): _52.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _51.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Config;
                fromPartial(object: Partial<_51.Config>): _51.Config;
                fromAmino(object: _51.ConfigAmino): _51.Config;
                toAmino(message: _51.Config): _51.ConfigAmino;
                fromAminoMsg(object: _51.ConfigAminoMsg): _51.Config;
                toAminoMsg(message: _51.Config): _51.ConfigAminoMsg;
                fromProtoMsg(message: _51.ConfigProtoMsg): _51.Config;
                toProto(message: _51.Config): Uint8Array;
                toProtoMsg(message: _51.Config): _51.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _51.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.ModuleConfig;
                fromPartial(object: Partial<_51.ModuleConfig>): _51.ModuleConfig;
                fromAmino(object: _51.ModuleConfigAmino): _51.ModuleConfig;
                toAmino(message: _51.ModuleConfig): _51.ModuleConfigAmino;
                fromAminoMsg(object: _51.ModuleConfigAminoMsg): _51.ModuleConfig;
                toAminoMsg(message: _51.ModuleConfig): _51.ModuleConfigAminoMsg;
                fromProtoMsg(message: _51.ModuleConfigProtoMsg): _51.ModuleConfig;
                toProto(message: _51.ModuleConfig): Uint8Array;
                toProtoMsg(message: _51.ModuleConfig): _51.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _51.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GolangBinding;
                fromPartial(object: Partial<_51.GolangBinding>): _51.GolangBinding;
                fromAmino(object: _51.GolangBindingAmino): _51.GolangBinding;
                toAmino(message: _51.GolangBinding): _51.GolangBindingAmino;
                fromAminoMsg(object: _51.GolangBindingAminoMsg): _51.GolangBinding;
                toAminoMsg(message: _51.GolangBinding): _51.GolangBindingAminoMsg;
                fromProtoMsg(message: _51.GolangBindingProtoMsg): _51.GolangBinding;
                toProto(message: _51.GolangBinding): Uint8Array;
                toProtoMsg(message: _51.GolangBinding): _51.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Module;
                    fromPartial(object: Partial<_54.Module>): _54.Module;
                    fromAmino(object: _54.ModuleAmino): _54.Module;
                    toAmino(message: _54.Module): _54.ModuleAmino;
                    fromAminoMsg(object: _54.ModuleAminoMsg): _54.Module;
                    toAminoMsg(message: _54.Module): _54.ModuleAminoMsg;
                    fromProtoMsg(message: _54.ModuleProtoMsg): _54.Module;
                    toProto(message: _54.Module): Uint8Array;
                    toProtoMsg(message: _54.Module): _54.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _54.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ModuleAccountPermission;
                    fromPartial(object: Partial<_54.ModuleAccountPermission>): _54.ModuleAccountPermission;
                    fromAmino(object: _54.ModuleAccountPermissionAmino): _54.ModuleAccountPermission;
                    toAmino(message: _54.ModuleAccountPermission): _54.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _54.ModuleAccountPermissionAminoMsg): _54.ModuleAccountPermission;
                    toAminoMsg(message: _54.ModuleAccountPermission): _54.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _54.ModuleAccountPermissionProtoMsg): _54.ModuleAccountPermission;
                    toProto(message: _54.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _54.ModuleAccountPermission): _54.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _361.MsgClientImpl;
            QueryClientImpl: typeof _340.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _57.QueryAccountsRequest): Promise<_57.QueryAccountsResponse>;
                account(request: _57.QueryAccountRequest): Promise<_57.QueryAccountResponse>;
                accountAddressByID(request: _57.QueryAccountAddressByIDRequest): Promise<_57.QueryAccountAddressByIDResponse>;
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                moduleAccounts(request?: _57.QueryModuleAccountsRequest): Promise<_57.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _57.QueryModuleAccountByNameRequest): Promise<_57.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _57.Bech32PrefixRequest): Promise<_57.Bech32PrefixResponse>;
                addressBytesToString(request: _57.AddressBytesToStringRequest): Promise<_57.AddressBytesToStringResponse>;
                addressStringToBytes(request: _57.AddressStringToBytesRequest): Promise<_57.AddressStringToBytesResponse>;
                accountInfo(request: _57.QueryAccountInfoRequest): Promise<_57.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _320.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _58.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _58.MsgUpdateParams): {
                        typeUrl: string;
                        value: _58.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _58.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _58.MsgUpdateParams): {
                        typeUrl: string;
                        value: _58.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _58.MsgUpdateParams) => _58.MsgUpdateParamsAmino;
                    fromAmino: (object: _58.MsgUpdateParamsAmino) => _58.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _58.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgUpdateParams;
                fromPartial(object: Partial<_58.MsgUpdateParams>): _58.MsgUpdateParams;
                fromAmino(object: _58.MsgUpdateParamsAmino): _58.MsgUpdateParams;
                toAmino(message: _58.MsgUpdateParams): _58.MsgUpdateParamsAmino;
                fromAminoMsg(object: _58.MsgUpdateParamsAminoMsg): _58.MsgUpdateParams;
                toAminoMsg(message: _58.MsgUpdateParams): _58.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _58.MsgUpdateParamsProtoMsg): _58.MsgUpdateParams;
                toProto(message: _58.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _58.MsgUpdateParams): _58.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _58.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_58.MsgUpdateParamsResponse>): _58.MsgUpdateParamsResponse;
                fromAmino(_: _58.MsgUpdateParamsResponseAmino): _58.MsgUpdateParamsResponse;
                toAmino(_: _58.MsgUpdateParamsResponse): _58.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _58.MsgUpdateParamsResponseAminoMsg): _58.MsgUpdateParamsResponse;
                toAminoMsg(message: _58.MsgUpdateParamsResponse): _58.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _58.MsgUpdateParamsResponseProtoMsg): _58.MsgUpdateParamsResponse;
                toProto(message: _58.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _58.MsgUpdateParamsResponse): _58.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _57.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountsRequest;
                fromPartial(object: Partial<_57.QueryAccountsRequest>): _57.QueryAccountsRequest;
                fromAmino(object: _57.QueryAccountsRequestAmino): _57.QueryAccountsRequest;
                toAmino(message: _57.QueryAccountsRequest): _57.QueryAccountsRequestAmino;
                fromAminoMsg(object: _57.QueryAccountsRequestAminoMsg): _57.QueryAccountsRequest;
                toAminoMsg(message: _57.QueryAccountsRequest): _57.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAccountsRequestProtoMsg): _57.QueryAccountsRequest;
                toProto(message: _57.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAccountsRequest): _57.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _57.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountsResponse;
                fromPartial(object: Partial<_57.QueryAccountsResponse>): _57.QueryAccountsResponse;
                fromAmino(object: _57.QueryAccountsResponseAmino): _57.QueryAccountsResponse;
                toAmino(message: _57.QueryAccountsResponse): _57.QueryAccountsResponseAmino;
                fromAminoMsg(object: _57.QueryAccountsResponseAminoMsg): _57.QueryAccountsResponse;
                toAminoMsg(message: _57.QueryAccountsResponse): _57.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAccountsResponseProtoMsg): _57.QueryAccountsResponse;
                toProto(message: _57.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAccountsResponse): _57.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _57.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountRequest;
                fromPartial(object: Partial<_57.QueryAccountRequest>): _57.QueryAccountRequest;
                fromAmino(object: _57.QueryAccountRequestAmino): _57.QueryAccountRequest;
                toAmino(message: _57.QueryAccountRequest): _57.QueryAccountRequestAmino;
                fromAminoMsg(object: _57.QueryAccountRequestAminoMsg): _57.QueryAccountRequest;
                toAminoMsg(message: _57.QueryAccountRequest): _57.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAccountRequestProtoMsg): _57.QueryAccountRequest;
                toProto(message: _57.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAccountRequest): _57.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _57.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountResponse;
                fromPartial(object: Partial<_57.QueryAccountResponse>): _57.QueryAccountResponse;
                fromAmino(object: _57.QueryAccountResponseAmino): _57.QueryAccountResponse;
                toAmino(message: _57.QueryAccountResponse): _57.QueryAccountResponseAmino;
                fromAminoMsg(object: _57.QueryAccountResponseAminoMsg): _57.QueryAccountResponse;
                toAminoMsg(message: _57.QueryAccountResponse): _57.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAccountResponseProtoMsg): _57.QueryAccountResponse;
                toProto(message: _57.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAccountResponse): _57.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _57.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_57.QueryModuleAccountsRequest>): _57.QueryModuleAccountsRequest;
                fromAmino(_: _57.QueryModuleAccountsRequestAmino): _57.QueryModuleAccountsRequest;
                toAmino(_: _57.QueryModuleAccountsRequest): _57.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _57.QueryModuleAccountsRequestAminoMsg): _57.QueryModuleAccountsRequest;
                toAminoMsg(message: _57.QueryModuleAccountsRequest): _57.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryModuleAccountsRequestProtoMsg): _57.QueryModuleAccountsRequest;
                toProto(message: _57.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryModuleAccountsRequest): _57.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _57.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_57.QueryModuleAccountsResponse>): _57.QueryModuleAccountsResponse;
                fromAmino(object: _57.QueryModuleAccountsResponseAmino): _57.QueryModuleAccountsResponse;
                toAmino(message: _57.QueryModuleAccountsResponse): _57.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _57.QueryModuleAccountsResponseAminoMsg): _57.QueryModuleAccountsResponse;
                toAminoMsg(message: _57.QueryModuleAccountsResponse): _57.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryModuleAccountsResponseProtoMsg): _57.QueryModuleAccountsResponse;
                toProto(message: _57.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryModuleAccountsResponse): _57.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _57.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_57.QueryModuleAccountByNameRequest>): _57.QueryModuleAccountByNameRequest;
                fromAmino(object: _57.QueryModuleAccountByNameRequestAmino): _57.QueryModuleAccountByNameRequest;
                toAmino(message: _57.QueryModuleAccountByNameRequest): _57.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _57.QueryModuleAccountByNameRequestAminoMsg): _57.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _57.QueryModuleAccountByNameRequest): _57.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _57.QueryModuleAccountByNameRequestProtoMsg): _57.QueryModuleAccountByNameRequest;
                toProto(message: _57.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _57.QueryModuleAccountByNameRequest): _57.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _57.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_57.QueryModuleAccountByNameResponse>): _57.QueryModuleAccountByNameResponse;
                fromAmino(object: _57.QueryModuleAccountByNameResponseAmino): _57.QueryModuleAccountByNameResponse;
                toAmino(message: _57.QueryModuleAccountByNameResponse): _57.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _57.QueryModuleAccountByNameResponseAminoMsg): _57.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _57.QueryModuleAccountByNameResponse): _57.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _57.QueryModuleAccountByNameResponseProtoMsg): _57.QueryModuleAccountByNameResponse;
                toProto(message: _57.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _57.QueryModuleAccountByNameResponse): _57.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _57.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.Bech32PrefixRequest;
                fromPartial(_: Partial<_57.Bech32PrefixRequest>): _57.Bech32PrefixRequest;
                fromAmino(_: _57.Bech32PrefixRequestAmino): _57.Bech32PrefixRequest;
                toAmino(_: _57.Bech32PrefixRequest): _57.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _57.Bech32PrefixRequestAminoMsg): _57.Bech32PrefixRequest;
                toAminoMsg(message: _57.Bech32PrefixRequest): _57.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _57.Bech32PrefixRequestProtoMsg): _57.Bech32PrefixRequest;
                toProto(message: _57.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _57.Bech32PrefixRequest): _57.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _57.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Bech32PrefixResponse;
                fromPartial(object: Partial<_57.Bech32PrefixResponse>): _57.Bech32PrefixResponse;
                fromAmino(object: _57.Bech32PrefixResponseAmino): _57.Bech32PrefixResponse;
                toAmino(message: _57.Bech32PrefixResponse): _57.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _57.Bech32PrefixResponseAminoMsg): _57.Bech32PrefixResponse;
                toAminoMsg(message: _57.Bech32PrefixResponse): _57.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _57.Bech32PrefixResponseProtoMsg): _57.Bech32PrefixResponse;
                toProto(message: _57.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _57.Bech32PrefixResponse): _57.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _57.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AddressBytesToStringRequest;
                fromPartial(object: Partial<_57.AddressBytesToStringRequest>): _57.AddressBytesToStringRequest;
                fromAmino(object: _57.AddressBytesToStringRequestAmino): _57.AddressBytesToStringRequest;
                toAmino(message: _57.AddressBytesToStringRequest): _57.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _57.AddressBytesToStringRequestAminoMsg): _57.AddressBytesToStringRequest;
                toAminoMsg(message: _57.AddressBytesToStringRequest): _57.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _57.AddressBytesToStringRequestProtoMsg): _57.AddressBytesToStringRequest;
                toProto(message: _57.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _57.AddressBytesToStringRequest): _57.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _57.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AddressBytesToStringResponse;
                fromPartial(object: Partial<_57.AddressBytesToStringResponse>): _57.AddressBytesToStringResponse;
                fromAmino(object: _57.AddressBytesToStringResponseAmino): _57.AddressBytesToStringResponse;
                toAmino(message: _57.AddressBytesToStringResponse): _57.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _57.AddressBytesToStringResponseAminoMsg): _57.AddressBytesToStringResponse;
                toAminoMsg(message: _57.AddressBytesToStringResponse): _57.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _57.AddressBytesToStringResponseProtoMsg): _57.AddressBytesToStringResponse;
                toProto(message: _57.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _57.AddressBytesToStringResponse): _57.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _57.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AddressStringToBytesRequest;
                fromPartial(object: Partial<_57.AddressStringToBytesRequest>): _57.AddressStringToBytesRequest;
                fromAmino(object: _57.AddressStringToBytesRequestAmino): _57.AddressStringToBytesRequest;
                toAmino(message: _57.AddressStringToBytesRequest): _57.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _57.AddressStringToBytesRequestAminoMsg): _57.AddressStringToBytesRequest;
                toAminoMsg(message: _57.AddressStringToBytesRequest): _57.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _57.AddressStringToBytesRequestProtoMsg): _57.AddressStringToBytesRequest;
                toProto(message: _57.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _57.AddressStringToBytesRequest): _57.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _57.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AddressStringToBytesResponse;
                fromPartial(object: Partial<_57.AddressStringToBytesResponse>): _57.AddressStringToBytesResponse;
                fromAmino(object: _57.AddressStringToBytesResponseAmino): _57.AddressStringToBytesResponse;
                toAmino(message: _57.AddressStringToBytesResponse): _57.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _57.AddressStringToBytesResponseAminoMsg): _57.AddressStringToBytesResponse;
                toAminoMsg(message: _57.AddressStringToBytesResponse): _57.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _57.AddressStringToBytesResponseProtoMsg): _57.AddressStringToBytesResponse;
                toProto(message: _57.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _57.AddressStringToBytesResponse): _57.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _57.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_57.QueryAccountAddressByIDRequest>): _57.QueryAccountAddressByIDRequest;
                fromAmino(object: _57.QueryAccountAddressByIDRequestAmino): _57.QueryAccountAddressByIDRequest;
                toAmino(message: _57.QueryAccountAddressByIDRequest): _57.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _57.QueryAccountAddressByIDRequestAminoMsg): _57.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _57.QueryAccountAddressByIDRequest): _57.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAccountAddressByIDRequestProtoMsg): _57.QueryAccountAddressByIDRequest;
                toProto(message: _57.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAccountAddressByIDRequest): _57.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _57.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_57.QueryAccountAddressByIDResponse>): _57.QueryAccountAddressByIDResponse;
                fromAmino(object: _57.QueryAccountAddressByIDResponseAmino): _57.QueryAccountAddressByIDResponse;
                toAmino(message: _57.QueryAccountAddressByIDResponse): _57.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _57.QueryAccountAddressByIDResponseAminoMsg): _57.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _57.QueryAccountAddressByIDResponse): _57.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAccountAddressByIDResponseProtoMsg): _57.QueryAccountAddressByIDResponse;
                toProto(message: _57.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAccountAddressByIDResponse): _57.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _57.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountInfoRequest;
                fromPartial(object: Partial<_57.QueryAccountInfoRequest>): _57.QueryAccountInfoRequest;
                fromAmino(object: _57.QueryAccountInfoRequestAmino): _57.QueryAccountInfoRequest;
                toAmino(message: _57.QueryAccountInfoRequest): _57.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _57.QueryAccountInfoRequestAminoMsg): _57.QueryAccountInfoRequest;
                toAminoMsg(message: _57.QueryAccountInfoRequest): _57.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAccountInfoRequestProtoMsg): _57.QueryAccountInfoRequest;
                toProto(message: _57.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAccountInfoRequest): _57.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _57.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAccountInfoResponse;
                fromPartial(object: Partial<_57.QueryAccountInfoResponse>): _57.QueryAccountInfoResponse;
                fromAmino(object: _57.QueryAccountInfoResponseAmino): _57.QueryAccountInfoResponse;
                toAmino(message: _57.QueryAccountInfoResponse): _57.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _57.QueryAccountInfoResponseAminoMsg): _57.QueryAccountInfoResponse;
                toAminoMsg(message: _57.QueryAccountInfoResponse): _57.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAccountInfoResponseProtoMsg): _57.QueryAccountInfoResponse;
                toProto(message: _57.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAccountInfoResponse): _57.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _55.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _55.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _56.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _55.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.BaseAccount;
                fromPartial(object: Partial<_55.BaseAccount>): _55.BaseAccount;
                fromAmino(object: _55.BaseAccountAmino): _55.BaseAccount;
                toAmino(message: _55.BaseAccount): _55.BaseAccountAmino;
                fromAminoMsg(object: _55.BaseAccountAminoMsg): _55.BaseAccount;
                toAminoMsg(message: _55.BaseAccount): _55.BaseAccountAminoMsg;
                fromProtoMsg(message: _55.BaseAccountProtoMsg): _55.BaseAccount;
                toProto(message: _55.BaseAccount): Uint8Array;
                toProtoMsg(message: _55.BaseAccount): _55.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _55.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ModuleAccount;
                fromPartial(object: Partial<_55.ModuleAccount>): _55.ModuleAccount;
                fromAmino(object: _55.ModuleAccountAmino): _55.ModuleAccount;
                toAmino(message: _55.ModuleAccount): _55.ModuleAccountAmino;
                fromAminoMsg(object: _55.ModuleAccountAminoMsg): _55.ModuleAccount;
                toAminoMsg(message: _55.ModuleAccount): _55.ModuleAccountAminoMsg;
                fromProtoMsg(message: _55.ModuleAccountProtoMsg): _55.ModuleAccount;
                toProto(message: _55.ModuleAccount): Uint8Array;
                toProtoMsg(message: _55.ModuleAccount): _55.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _55.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ModuleCredential;
                fromPartial(object: Partial<_55.ModuleCredential>): _55.ModuleCredential;
                fromAmino(object: _55.ModuleCredentialAmino): _55.ModuleCredential;
                toAmino(message: _55.ModuleCredential): _55.ModuleCredentialAmino;
                fromAminoMsg(object: _55.ModuleCredentialAminoMsg): _55.ModuleCredential;
                toAminoMsg(message: _55.ModuleCredential): _55.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _55.ModuleCredentialProtoMsg): _55.ModuleCredential;
                toProto(message: _55.ModuleCredential): Uint8Array;
                toProtoMsg(message: _55.ModuleCredential): _55.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _55.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
                fromAmino(object: _55.ParamsAmino): _55.Params;
                toAmino(message: _55.Params): _55.ParamsAmino;
                fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                toAminoMsg(message: _55.Params): _55.ParamsAminoMsg;
                fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                toProto(message: _55.Params): Uint8Array;
                toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _59.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.Module;
                    fromPartial(_: Partial<_59.Module>): _59.Module;
                    fromAmino(_: _59.ModuleAmino): _59.Module;
                    toAmino(_: _59.Module): _59.ModuleAmino;
                    fromAminoMsg(object: _59.ModuleAminoMsg): _59.Module;
                    toAminoMsg(message: _59.Module): _59.ModuleAminoMsg;
                    fromProtoMsg(message: _59.ModuleProtoMsg): _59.Module;
                    toProto(message: _59.Module): Uint8Array;
                    toProtoMsg(message: _59.Module): _59.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _362.MsgClientImpl;
            QueryClientImpl: typeof _341.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _63.QueryGrantsRequest): Promise<_63.QueryGrantsResponse>;
                granterGrants(request: _63.QueryGranterGrantsRequest): Promise<_63.QueryGranterGrantsResponse>;
                granteeGrants(request: _63.QueryGranteeGrantsRequest): Promise<_63.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _321.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _64.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _64.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _64.MsgGrant): {
                        typeUrl: string;
                        value: _64.MsgGrant;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    revoke(value: _64.MsgRevoke): {
                        typeUrl: string;
                        value: _64.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _64.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _64.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _64.MsgGrant): {
                        typeUrl: string;
                        value: _64.MsgGrant;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    revoke(value: _64.MsgRevoke): {
                        typeUrl: string;
                        value: _64.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _64.MsgGrant) => _64.MsgGrantAmino;
                    fromAmino: (object: _64.MsgGrantAmino) => _64.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _64.MsgExec) => _64.MsgExecAmino;
                    fromAmino: (object: _64.MsgExecAmino) => _64.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _64.MsgRevoke) => _64.MsgRevokeAmino;
                    fromAmino: (object: _64.MsgRevokeAmino) => _64.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _64.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgGrant;
                fromPartial(object: Partial<_64.MsgGrant>): _64.MsgGrant;
                fromAmino(object: _64.MsgGrantAmino): _64.MsgGrant;
                toAmino(message: _64.MsgGrant): _64.MsgGrantAmino;
                fromAminoMsg(object: _64.MsgGrantAminoMsg): _64.MsgGrant;
                toAminoMsg(message: _64.MsgGrant): _64.MsgGrantAminoMsg;
                fromProtoMsg(message: _64.MsgGrantProtoMsg): _64.MsgGrant;
                toProto(message: _64.MsgGrant): Uint8Array;
                toProtoMsg(message: _64.MsgGrant): _64.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _64.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgExecResponse;
                fromPartial(object: Partial<_64.MsgExecResponse>): _64.MsgExecResponse;
                fromAmino(object: _64.MsgExecResponseAmino): _64.MsgExecResponse;
                toAmino(message: _64.MsgExecResponse): _64.MsgExecResponseAmino;
                fromAminoMsg(object: _64.MsgExecResponseAminoMsg): _64.MsgExecResponse;
                toAminoMsg(message: _64.MsgExecResponse): _64.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _64.MsgExecResponseProtoMsg): _64.MsgExecResponse;
                toProto(message: _64.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _64.MsgExecResponse): _64.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _64.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgExec;
                fromPartial(object: Partial<_64.MsgExec>): _64.MsgExec;
                fromAmino(object: _64.MsgExecAmino): _64.MsgExec;
                toAmino(message: _64.MsgExec): _64.MsgExecAmino;
                fromAminoMsg(object: _64.MsgExecAminoMsg): _64.MsgExec;
                toAminoMsg(message: _64.MsgExec): _64.MsgExecAminoMsg;
                fromProtoMsg(message: _64.MsgExecProtoMsg): _64.MsgExec;
                toProto(message: _64.MsgExec): Uint8Array;
                toProtoMsg(message: _64.MsgExec): _64.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _64.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgGrantResponse;
                fromPartial(_: Partial<_64.MsgGrantResponse>): _64.MsgGrantResponse;
                fromAmino(_: _64.MsgGrantResponseAmino): _64.MsgGrantResponse;
                toAmino(_: _64.MsgGrantResponse): _64.MsgGrantResponseAmino;
                fromAminoMsg(object: _64.MsgGrantResponseAminoMsg): _64.MsgGrantResponse;
                toAminoMsg(message: _64.MsgGrantResponse): _64.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _64.MsgGrantResponseProtoMsg): _64.MsgGrantResponse;
                toProto(message: _64.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _64.MsgGrantResponse): _64.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _64.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgRevoke;
                fromPartial(object: Partial<_64.MsgRevoke>): _64.MsgRevoke;
                fromAmino(object: _64.MsgRevokeAmino): _64.MsgRevoke;
                toAmino(message: _64.MsgRevoke): _64.MsgRevokeAmino;
                fromAminoMsg(object: _64.MsgRevokeAminoMsg): _64.MsgRevoke;
                toAminoMsg(message: _64.MsgRevoke): _64.MsgRevokeAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeProtoMsg): _64.MsgRevoke;
                toProto(message: _64.MsgRevoke): Uint8Array;
                toProtoMsg(message: _64.MsgRevoke): _64.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _64.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgRevokeResponse;
                fromPartial(_: Partial<_64.MsgRevokeResponse>): _64.MsgRevokeResponse;
                fromAmino(_: _64.MsgRevokeResponseAmino): _64.MsgRevokeResponse;
                toAmino(_: _64.MsgRevokeResponse): _64.MsgRevokeResponseAmino;
                fromAminoMsg(object: _64.MsgRevokeResponseAminoMsg): _64.MsgRevokeResponse;
                toAminoMsg(message: _64.MsgRevokeResponse): _64.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeResponseProtoMsg): _64.MsgRevokeResponse;
                toProto(message: _64.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _64.MsgRevokeResponse): _64.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _63.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGrantsRequest;
                fromPartial(object: Partial<_63.QueryGrantsRequest>): _63.QueryGrantsRequest;
                fromAmino(object: _63.QueryGrantsRequestAmino): _63.QueryGrantsRequest;
                toAmino(message: _63.QueryGrantsRequest): _63.QueryGrantsRequestAmino;
                fromAminoMsg(object: _63.QueryGrantsRequestAminoMsg): _63.QueryGrantsRequest;
                toAminoMsg(message: _63.QueryGrantsRequest): _63.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryGrantsRequestProtoMsg): _63.QueryGrantsRequest;
                toProto(message: _63.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryGrantsRequest): _63.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _63.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGrantsResponse;
                fromPartial(object: Partial<_63.QueryGrantsResponse>): _63.QueryGrantsResponse;
                fromAmino(object: _63.QueryGrantsResponseAmino): _63.QueryGrantsResponse;
                toAmino(message: _63.QueryGrantsResponse): _63.QueryGrantsResponseAmino;
                fromAminoMsg(object: _63.QueryGrantsResponseAminoMsg): _63.QueryGrantsResponse;
                toAminoMsg(message: _63.QueryGrantsResponse): _63.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryGrantsResponseProtoMsg): _63.QueryGrantsResponse;
                toProto(message: _63.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryGrantsResponse): _63.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _63.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_63.QueryGranterGrantsRequest>): _63.QueryGranterGrantsRequest;
                fromAmino(object: _63.QueryGranterGrantsRequestAmino): _63.QueryGranterGrantsRequest;
                toAmino(message: _63.QueryGranterGrantsRequest): _63.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _63.QueryGranterGrantsRequestAminoMsg): _63.QueryGranterGrantsRequest;
                toAminoMsg(message: _63.QueryGranterGrantsRequest): _63.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryGranterGrantsRequestProtoMsg): _63.QueryGranterGrantsRequest;
                toProto(message: _63.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryGranterGrantsRequest): _63.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _63.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_63.QueryGranterGrantsResponse>): _63.QueryGranterGrantsResponse;
                fromAmino(object: _63.QueryGranterGrantsResponseAmino): _63.QueryGranterGrantsResponse;
                toAmino(message: _63.QueryGranterGrantsResponse): _63.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _63.QueryGranterGrantsResponseAminoMsg): _63.QueryGranterGrantsResponse;
                toAminoMsg(message: _63.QueryGranterGrantsResponse): _63.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryGranterGrantsResponseProtoMsg): _63.QueryGranterGrantsResponse;
                toProto(message: _63.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryGranterGrantsResponse): _63.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _63.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_63.QueryGranteeGrantsRequest>): _63.QueryGranteeGrantsRequest;
                fromAmino(object: _63.QueryGranteeGrantsRequestAmino): _63.QueryGranteeGrantsRequest;
                toAmino(message: _63.QueryGranteeGrantsRequest): _63.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _63.QueryGranteeGrantsRequestAminoMsg): _63.QueryGranteeGrantsRequest;
                toAminoMsg(message: _63.QueryGranteeGrantsRequest): _63.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryGranteeGrantsRequestProtoMsg): _63.QueryGranteeGrantsRequest;
                toProto(message: _63.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryGranteeGrantsRequest): _63.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _63.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_63.QueryGranteeGrantsResponse>): _63.QueryGranteeGrantsResponse;
                fromAmino(object: _63.QueryGranteeGrantsResponseAmino): _63.QueryGranteeGrantsResponse;
                toAmino(message: _63.QueryGranteeGrantsResponse): _63.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _63.QueryGranteeGrantsResponseAminoMsg): _63.QueryGranteeGrantsResponse;
                toAminoMsg(message: _63.QueryGranteeGrantsResponse): _63.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryGranteeGrantsResponseProtoMsg): _63.QueryGranteeGrantsResponse;
                toProto(message: _63.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryGranteeGrantsResponse): _63.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GenesisState;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                toProto(message: _62.GenesisState): Uint8Array;
                toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _61.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.EventGrant;
                fromPartial(object: Partial<_61.EventGrant>): _61.EventGrant;
                fromAmino(object: _61.EventGrantAmino): _61.EventGrant;
                toAmino(message: _61.EventGrant): _61.EventGrantAmino;
                fromAminoMsg(object: _61.EventGrantAminoMsg): _61.EventGrant;
                toAminoMsg(message: _61.EventGrant): _61.EventGrantAminoMsg;
                fromProtoMsg(message: _61.EventGrantProtoMsg): _61.EventGrant;
                toProto(message: _61.EventGrant): Uint8Array;
                toProtoMsg(message: _61.EventGrant): _61.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _61.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.EventRevoke;
                fromPartial(object: Partial<_61.EventRevoke>): _61.EventRevoke;
                fromAmino(object: _61.EventRevokeAmino): _61.EventRevoke;
                toAmino(message: _61.EventRevoke): _61.EventRevokeAmino;
                fromAminoMsg(object: _61.EventRevokeAminoMsg): _61.EventRevoke;
                toAminoMsg(message: _61.EventRevoke): _61.EventRevokeAminoMsg;
                fromProtoMsg(message: _61.EventRevokeProtoMsg): _61.EventRevoke;
                toProto(message: _61.EventRevoke): Uint8Array;
                toProtoMsg(message: _61.EventRevoke): _61.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _60.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenericAuthorization;
                fromPartial(object: Partial<_60.GenericAuthorization>): _60.GenericAuthorization;
                fromAmino(object: _60.GenericAuthorizationAmino): _60.GenericAuthorization;
                toAmino(message: _60.GenericAuthorization): _60.GenericAuthorizationAmino;
                fromAminoMsg(object: _60.GenericAuthorizationAminoMsg): _60.GenericAuthorization;
                toAminoMsg(message: _60.GenericAuthorization): _60.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _60.GenericAuthorizationProtoMsg): _60.GenericAuthorization;
                toProto(message: _60.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _60.GenericAuthorization): _60.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _60.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Grant;
                fromPartial(object: Partial<_60.Grant>): _60.Grant;
                fromAmino(object: _60.GrantAmino): _60.Grant;
                toAmino(message: _60.Grant): _60.GrantAmino;
                fromAminoMsg(object: _60.GrantAminoMsg): _60.Grant;
                toAminoMsg(message: _60.Grant): _60.GrantAminoMsg;
                fromProtoMsg(message: _60.GrantProtoMsg): _60.Grant;
                toProto(message: _60.Grant): Uint8Array;
                toProtoMsg(message: _60.Grant): _60.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _60.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GrantAuthorization;
                fromPartial(object: Partial<_60.GrantAuthorization>): _60.GrantAuthorization;
                fromAmino(object: _60.GrantAuthorizationAmino): _60.GrantAuthorization;
                toAmino(message: _60.GrantAuthorization): _60.GrantAuthorizationAmino;
                fromAminoMsg(object: _60.GrantAuthorizationAminoMsg): _60.GrantAuthorization;
                toAminoMsg(message: _60.GrantAuthorization): _60.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _60.GrantAuthorizationProtoMsg): _60.GrantAuthorization;
                toProto(message: _60.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _60.GrantAuthorization): _60.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _60.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GrantQueueItem;
                fromPartial(object: Partial<_60.GrantQueueItem>): _60.GrantQueueItem;
                fromAmino(object: _60.GrantQueueItemAmino): _60.GrantQueueItem;
                toAmino(message: _60.GrantQueueItem): _60.GrantQueueItemAmino;
                fromAminoMsg(object: _60.GrantQueueItemAminoMsg): _60.GrantQueueItem;
                toAminoMsg(message: _60.GrantQueueItem): _60.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _60.GrantQueueItemProtoMsg): _60.GrantQueueItem;
                toProto(message: _60.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _60.GrantQueueItem): _60.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _68.SendAuthorization | _159.StakeAuthorization | import("../ibc/applications/transfer/v1/authz").TransferAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _60.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _342.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _66.AppOptionsRequest): Promise<_66.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _66.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.AppOptionsRequest;
                fromPartial(_: Partial<_66.AppOptionsRequest>): _66.AppOptionsRequest;
                fromAmino(_: _66.AppOptionsRequestAmino): _66.AppOptionsRequest;
                toAmino(_: _66.AppOptionsRequest): _66.AppOptionsRequestAmino;
                fromAminoMsg(object: _66.AppOptionsRequestAminoMsg): _66.AppOptionsRequest;
                toAminoMsg(message: _66.AppOptionsRequest): _66.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _66.AppOptionsRequestProtoMsg): _66.AppOptionsRequest;
                toProto(message: _66.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _66.AppOptionsRequest): _66.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _66.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_66.AppOptionsResponse_ModuleOptionsEntry>): _66.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _66.AppOptionsResponse_ModuleOptionsEntryAmino): _66.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _66.AppOptionsResponse_ModuleOptionsEntry): _66.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _66.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _66.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _66.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _66.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _66.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _66.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.AppOptionsResponse;
                fromPartial(object: Partial<_66.AppOptionsResponse>): _66.AppOptionsResponse;
                fromAmino(object: _66.AppOptionsResponseAmino): _66.AppOptionsResponse;
                toAmino(message: _66.AppOptionsResponse): _66.AppOptionsResponseAmino;
                fromAminoMsg(object: _66.AppOptionsResponseAminoMsg): _66.AppOptionsResponse;
                toAminoMsg(message: _66.AppOptionsResponse): _66.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _66.AppOptionsResponseProtoMsg): _66.AppOptionsResponse;
                toProto(message: _66.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _66.AppOptionsResponse): _66.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _65.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ModuleOptions;
                fromPartial(object: Partial<_65.ModuleOptions>): _65.ModuleOptions;
                fromAmino(object: _65.ModuleOptionsAmino): _65.ModuleOptions;
                toAmino(message: _65.ModuleOptions): _65.ModuleOptionsAmino;
                fromAminoMsg(object: _65.ModuleOptionsAminoMsg): _65.ModuleOptions;
                toAminoMsg(message: _65.ModuleOptions): _65.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _65.ModuleOptionsProtoMsg): _65.ModuleOptions;
                toProto(message: _65.ModuleOptions): Uint8Array;
                toProtoMsg(message: _65.ModuleOptions): _65.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _65.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_65.ServiceCommandDescriptor_SubCommandsEntry>): _65.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _65.ServiceCommandDescriptor_SubCommandsEntryAmino): _65.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _65.ServiceCommandDescriptor_SubCommandsEntry): _65.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _65.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _65.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _65.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _65.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _65.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _65.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ServiceCommandDescriptor;
                fromPartial(object: Partial<_65.ServiceCommandDescriptor>): _65.ServiceCommandDescriptor;
                fromAmino(object: _65.ServiceCommandDescriptorAmino): _65.ServiceCommandDescriptor;
                toAmino(message: _65.ServiceCommandDescriptor): _65.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _65.ServiceCommandDescriptorAminoMsg): _65.ServiceCommandDescriptor;
                toAminoMsg(message: _65.ServiceCommandDescriptor): _65.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _65.ServiceCommandDescriptorProtoMsg): _65.ServiceCommandDescriptor;
                toProto(message: _65.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _65.ServiceCommandDescriptor): _65.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _65.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_65.RpcCommandOptions_FlagOptionsEntry>): _65.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _65.RpcCommandOptions_FlagOptionsEntryAmino): _65.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _65.RpcCommandOptions_FlagOptionsEntry): _65.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _65.RpcCommandOptions_FlagOptionsEntryAminoMsg): _65.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _65.RpcCommandOptions_FlagOptionsEntryProtoMsg): _65.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _65.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _65.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.RpcCommandOptions;
                fromPartial(object: Partial<_65.RpcCommandOptions>): _65.RpcCommandOptions;
                fromAmino(object: _65.RpcCommandOptionsAmino): _65.RpcCommandOptions;
                toAmino(message: _65.RpcCommandOptions): _65.RpcCommandOptionsAmino;
                fromAminoMsg(object: _65.RpcCommandOptionsAminoMsg): _65.RpcCommandOptions;
                toAminoMsg(message: _65.RpcCommandOptions): _65.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _65.RpcCommandOptionsProtoMsg): _65.RpcCommandOptions;
                toProto(message: _65.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _65.RpcCommandOptions): _65.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _65.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.FlagOptions;
                fromPartial(object: Partial<_65.FlagOptions>): _65.FlagOptions;
                fromAmino(object: _65.FlagOptionsAmino): _65.FlagOptions;
                toAmino(message: _65.FlagOptions): _65.FlagOptionsAmino;
                fromAminoMsg(object: _65.FlagOptionsAminoMsg): _65.FlagOptions;
                toAminoMsg(message: _65.FlagOptions): _65.FlagOptionsAminoMsg;
                fromProtoMsg(message: _65.FlagOptionsProtoMsg): _65.FlagOptions;
                toProto(message: _65.FlagOptions): Uint8Array;
                toProtoMsg(message: _65.FlagOptions): _65.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _65.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.PositionalArgDescriptor;
                fromPartial(object: Partial<_65.PositionalArgDescriptor>): _65.PositionalArgDescriptor;
                fromAmino(object: _65.PositionalArgDescriptorAmino): _65.PositionalArgDescriptor;
                toAmino(message: _65.PositionalArgDescriptor): _65.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _65.PositionalArgDescriptorAminoMsg): _65.PositionalArgDescriptor;
                toAminoMsg(message: _65.PositionalArgDescriptor): _65.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _65.PositionalArgDescriptorProtoMsg): _65.PositionalArgDescriptor;
                toProto(message: _65.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _65.PositionalArgDescriptor): _65.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.Module;
                    fromPartial(object: Partial<_67.Module>): _67.Module;
                    fromAmino(object: _67.ModuleAmino): _67.Module;
                    toAmino(message: _67.Module): _67.ModuleAmino;
                    fromAminoMsg(object: _67.ModuleAminoMsg): _67.Module;
                    toAminoMsg(message: _67.Module): _67.ModuleAminoMsg;
                    fromProtoMsg(message: _67.ModuleProtoMsg): _67.Module;
                    toProto(message: _67.Module): Uint8Array;
                    toProtoMsg(message: _67.Module): _67.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _363.MsgClientImpl;
            QueryClientImpl: typeof _343.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                allBalances(request: _71.QueryAllBalancesRequest): Promise<_71.QueryAllBalancesResponse>;
                spendableBalances(request: _71.QuerySpendableBalancesRequest): Promise<_71.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _71.QuerySpendableBalanceByDenomRequest): Promise<_71.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _71.QueryTotalSupplyRequest): Promise<_71.QueryTotalSupplyResponse>;
                supplyOf(request: _71.QuerySupplyOfRequest): Promise<_71.QuerySupplyOfResponse>;
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                denomMetadata(request: _71.QueryDenomMetadataRequest): Promise<_71.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _71.QueryDenomsMetadataRequest): Promise<_71.QueryDenomsMetadataResponse>;
                denomOwners(request: _71.QueryDenomOwnersRequest): Promise<_71.QueryDenomOwnersResponse>;
                sendEnabled(request: _71.QuerySendEnabledRequest): Promise<_71.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _322.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _72.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _72.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                    multiSend(value: _72.MsgMultiSend): {
                        typeUrl: string;
                        value: _72.MsgMultiSend;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                    setSendEnabled(value: _72.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _72.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _72.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _72.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                    multiSend(value: _72.MsgMultiSend): {
                        typeUrl: string;
                        value: _72.MsgMultiSend;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                    setSendEnabled(value: _72.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _72.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSend) => _72.MsgSendAmino;
                    fromAmino: (object: _72.MsgSendAmino) => _72.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _72.MsgMultiSend) => _72.MsgMultiSendAmino;
                    fromAmino: (object: _72.MsgMultiSendAmino) => _72.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _72.MsgUpdateParams) => _72.MsgUpdateParamsAmino;
                    fromAmino: (object: _72.MsgUpdateParamsAmino) => _72.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSetSendEnabled) => _72.MsgSetSendEnabledAmino;
                    fromAmino: (object: _72.MsgSetSendEnabledAmino) => _72.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _72.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSend;
                fromPartial(object: Partial<_72.MsgSend>): _72.MsgSend;
                fromAmino(object: _72.MsgSendAmino): _72.MsgSend;
                toAmino(message: _72.MsgSend): _72.MsgSendAmino;
                fromAminoMsg(object: _72.MsgSendAminoMsg): _72.MsgSend;
                toAminoMsg(message: _72.MsgSend): _72.MsgSendAminoMsg;
                fromProtoMsg(message: _72.MsgSendProtoMsg): _72.MsgSend;
                toProto(message: _72.MsgSend): Uint8Array;
                toProtoMsg(message: _72.MsgSend): _72.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _72.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgSendResponse;
                fromPartial(_: Partial<_72.MsgSendResponse>): _72.MsgSendResponse;
                fromAmino(_: _72.MsgSendResponseAmino): _72.MsgSendResponse;
                toAmino(_: _72.MsgSendResponse): _72.MsgSendResponseAmino;
                fromAminoMsg(object: _72.MsgSendResponseAminoMsg): _72.MsgSendResponse;
                toAminoMsg(message: _72.MsgSendResponse): _72.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSendResponseProtoMsg): _72.MsgSendResponse;
                toProto(message: _72.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSendResponse): _72.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _72.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgMultiSend;
                fromPartial(object: Partial<_72.MsgMultiSend>): _72.MsgMultiSend;
                fromAmino(object: _72.MsgMultiSendAmino): _72.MsgMultiSend;
                toAmino(message: _72.MsgMultiSend): _72.MsgMultiSendAmino;
                fromAminoMsg(object: _72.MsgMultiSendAminoMsg): _72.MsgMultiSend;
                toAminoMsg(message: _72.MsgMultiSend): _72.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _72.MsgMultiSendProtoMsg): _72.MsgMultiSend;
                toProto(message: _72.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _72.MsgMultiSend): _72.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _72.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgMultiSendResponse;
                fromPartial(_: Partial<_72.MsgMultiSendResponse>): _72.MsgMultiSendResponse;
                fromAmino(_: _72.MsgMultiSendResponseAmino): _72.MsgMultiSendResponse;
                toAmino(_: _72.MsgMultiSendResponse): _72.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _72.MsgMultiSendResponseAminoMsg): _72.MsgMultiSendResponse;
                toAminoMsg(message: _72.MsgMultiSendResponse): _72.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _72.MsgMultiSendResponseProtoMsg): _72.MsgMultiSendResponse;
                toProto(message: _72.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _72.MsgMultiSendResponse): _72.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _72.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgUpdateParams;
                fromPartial(object: Partial<_72.MsgUpdateParams>): _72.MsgUpdateParams;
                fromAmino(object: _72.MsgUpdateParamsAmino): _72.MsgUpdateParams;
                toAmino(message: _72.MsgUpdateParams): _72.MsgUpdateParamsAmino;
                fromAminoMsg(object: _72.MsgUpdateParamsAminoMsg): _72.MsgUpdateParams;
                toAminoMsg(message: _72.MsgUpdateParams): _72.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _72.MsgUpdateParamsProtoMsg): _72.MsgUpdateParams;
                toProto(message: _72.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _72.MsgUpdateParams): _72.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _72.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_72.MsgUpdateParamsResponse>): _72.MsgUpdateParamsResponse;
                fromAmino(_: _72.MsgUpdateParamsResponseAmino): _72.MsgUpdateParamsResponse;
                toAmino(_: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _72.MsgUpdateParamsResponseAminoMsg): _72.MsgUpdateParamsResponse;
                toAminoMsg(message: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _72.MsgUpdateParamsResponseProtoMsg): _72.MsgUpdateParamsResponse;
                toProto(message: _72.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _72.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSetSendEnabled;
                fromPartial(object: Partial<_72.MsgSetSendEnabled>): _72.MsgSetSendEnabled;
                fromAmino(object: _72.MsgSetSendEnabledAmino): _72.MsgSetSendEnabled;
                toAmino(message: _72.MsgSetSendEnabled): _72.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _72.MsgSetSendEnabledAminoMsg): _72.MsgSetSendEnabled;
                toAminoMsg(message: _72.MsgSetSendEnabled): _72.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _72.MsgSetSendEnabledProtoMsg): _72.MsgSetSendEnabled;
                toProto(message: _72.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _72.MsgSetSendEnabled): _72.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _72.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_72.MsgSetSendEnabledResponse>): _72.MsgSetSendEnabledResponse;
                fromAmino(_: _72.MsgSetSendEnabledResponseAmino): _72.MsgSetSendEnabledResponse;
                toAmino(_: _72.MsgSetSendEnabledResponse): _72.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _72.MsgSetSendEnabledResponseAminoMsg): _72.MsgSetSendEnabledResponse;
                toAminoMsg(message: _72.MsgSetSendEnabledResponse): _72.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSetSendEnabledResponseProtoMsg): _72.MsgSetSendEnabledResponse;
                toProto(message: _72.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSetSendEnabledResponse): _72.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _71.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryBalanceRequest;
                fromPartial(object: Partial<_71.QueryBalanceRequest>): _71.QueryBalanceRequest;
                fromAmino(object: _71.QueryBalanceRequestAmino): _71.QueryBalanceRequest;
                toAmino(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestAmino;
                fromAminoMsg(object: _71.QueryBalanceRequestAminoMsg): _71.QueryBalanceRequest;
                toAminoMsg(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _71.QueryBalanceRequestProtoMsg): _71.QueryBalanceRequest;
                toProto(message: _71.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _71.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryBalanceResponse;
                fromPartial(object: Partial<_71.QueryBalanceResponse>): _71.QueryBalanceResponse;
                fromAmino(object: _71.QueryBalanceResponseAmino): _71.QueryBalanceResponse;
                toAmino(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseAmino;
                fromAminoMsg(object: _71.QueryBalanceResponseAminoMsg): _71.QueryBalanceResponse;
                toAminoMsg(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _71.QueryBalanceResponseProtoMsg): _71.QueryBalanceResponse;
                toProto(message: _71.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _71.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAllBalancesRequest;
                fromPartial(object: Partial<_71.QueryAllBalancesRequest>): _71.QueryAllBalancesRequest;
                fromAmino(object: _71.QueryAllBalancesRequestAmino): _71.QueryAllBalancesRequest;
                toAmino(message: _71.QueryAllBalancesRequest): _71.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _71.QueryAllBalancesRequestAminoMsg): _71.QueryAllBalancesRequest;
                toAminoMsg(message: _71.QueryAllBalancesRequest): _71.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryAllBalancesRequestProtoMsg): _71.QueryAllBalancesRequest;
                toProto(message: _71.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryAllBalancesRequest): _71.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _71.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAllBalancesResponse;
                fromPartial(object: Partial<_71.QueryAllBalancesResponse>): _71.QueryAllBalancesResponse;
                fromAmino(object: _71.QueryAllBalancesResponseAmino): _71.QueryAllBalancesResponse;
                toAmino(message: _71.QueryAllBalancesResponse): _71.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _71.QueryAllBalancesResponseAminoMsg): _71.QueryAllBalancesResponse;
                toAminoMsg(message: _71.QueryAllBalancesResponse): _71.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryAllBalancesResponseProtoMsg): _71.QueryAllBalancesResponse;
                toProto(message: _71.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryAllBalancesResponse): _71.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _71.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_71.QuerySpendableBalancesRequest>): _71.QuerySpendableBalancesRequest;
                fromAmino(object: _71.QuerySpendableBalancesRequestAmino): _71.QuerySpendableBalancesRequest;
                toAmino(message: _71.QuerySpendableBalancesRequest): _71.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _71.QuerySpendableBalancesRequestAminoMsg): _71.QuerySpendableBalancesRequest;
                toAminoMsg(message: _71.QuerySpendableBalancesRequest): _71.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _71.QuerySpendableBalancesRequestProtoMsg): _71.QuerySpendableBalancesRequest;
                toProto(message: _71.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _71.QuerySpendableBalancesRequest): _71.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _71.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_71.QuerySpendableBalancesResponse>): _71.QuerySpendableBalancesResponse;
                fromAmino(object: _71.QuerySpendableBalancesResponseAmino): _71.QuerySpendableBalancesResponse;
                toAmino(message: _71.QuerySpendableBalancesResponse): _71.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _71.QuerySpendableBalancesResponseAminoMsg): _71.QuerySpendableBalancesResponse;
                toAminoMsg(message: _71.QuerySpendableBalancesResponse): _71.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _71.QuerySpendableBalancesResponseProtoMsg): _71.QuerySpendableBalancesResponse;
                toProto(message: _71.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _71.QuerySpendableBalancesResponse): _71.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _71.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_71.QuerySpendableBalanceByDenomRequest>): _71.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _71.QuerySpendableBalanceByDenomRequestAmino): _71.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _71.QuerySpendableBalanceByDenomRequest): _71.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _71.QuerySpendableBalanceByDenomRequestAminoMsg): _71.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _71.QuerySpendableBalanceByDenomRequest): _71.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _71.QuerySpendableBalanceByDenomRequestProtoMsg): _71.QuerySpendableBalanceByDenomRequest;
                toProto(message: _71.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _71.QuerySpendableBalanceByDenomRequest): _71.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _71.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_71.QuerySpendableBalanceByDenomResponse>): _71.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _71.QuerySpendableBalanceByDenomResponseAmino): _71.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _71.QuerySpendableBalanceByDenomResponse): _71.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _71.QuerySpendableBalanceByDenomResponseAminoMsg): _71.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _71.QuerySpendableBalanceByDenomResponse): _71.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _71.QuerySpendableBalanceByDenomResponseProtoMsg): _71.QuerySpendableBalanceByDenomResponse;
                toProto(message: _71.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _71.QuerySpendableBalanceByDenomResponse): _71.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _71.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_71.QueryTotalSupplyRequest>): _71.QueryTotalSupplyRequest;
                fromAmino(object: _71.QueryTotalSupplyRequestAmino): _71.QueryTotalSupplyRequest;
                toAmino(message: _71.QueryTotalSupplyRequest): _71.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _71.QueryTotalSupplyRequestAminoMsg): _71.QueryTotalSupplyRequest;
                toAminoMsg(message: _71.QueryTotalSupplyRequest): _71.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _71.QueryTotalSupplyRequestProtoMsg): _71.QueryTotalSupplyRequest;
                toProto(message: _71.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTotalSupplyRequest): _71.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _71.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_71.QueryTotalSupplyResponse>): _71.QueryTotalSupplyResponse;
                fromAmino(object: _71.QueryTotalSupplyResponseAmino): _71.QueryTotalSupplyResponse;
                toAmino(message: _71.QueryTotalSupplyResponse): _71.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _71.QueryTotalSupplyResponseAminoMsg): _71.QueryTotalSupplyResponse;
                toAminoMsg(message: _71.QueryTotalSupplyResponse): _71.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _71.QueryTotalSupplyResponseProtoMsg): _71.QueryTotalSupplyResponse;
                toProto(message: _71.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTotalSupplyResponse): _71.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _71.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySupplyOfRequest;
                fromPartial(object: Partial<_71.QuerySupplyOfRequest>): _71.QuerySupplyOfRequest;
                fromAmino(object: _71.QuerySupplyOfRequestAmino): _71.QuerySupplyOfRequest;
                toAmino(message: _71.QuerySupplyOfRequest): _71.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _71.QuerySupplyOfRequestAminoMsg): _71.QuerySupplyOfRequest;
                toAminoMsg(message: _71.QuerySupplyOfRequest): _71.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _71.QuerySupplyOfRequestProtoMsg): _71.QuerySupplyOfRequest;
                toProto(message: _71.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _71.QuerySupplyOfRequest): _71.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _71.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySupplyOfResponse;
                fromPartial(object: Partial<_71.QuerySupplyOfResponse>): _71.QuerySupplyOfResponse;
                fromAmino(object: _71.QuerySupplyOfResponseAmino): _71.QuerySupplyOfResponse;
                toAmino(message: _71.QuerySupplyOfResponse): _71.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _71.QuerySupplyOfResponseAminoMsg): _71.QuerySupplyOfResponse;
                toAminoMsg(message: _71.QuerySupplyOfResponse): _71.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _71.QuerySupplyOfResponseProtoMsg): _71.QuerySupplyOfResponse;
                toProto(message: _71.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _71.QuerySupplyOfResponse): _71.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.QueryParamsRequest;
                fromPartial(_: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(_: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(_: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                toAminoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _71.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                toAminoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _71.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_71.QueryDenomsMetadataRequest>): _71.QueryDenomsMetadataRequest;
                fromAmino(object: _71.QueryDenomsMetadataRequestAmino): _71.QueryDenomsMetadataRequest;
                toAmino(message: _71.QueryDenomsMetadataRequest): _71.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _71.QueryDenomsMetadataRequestAminoMsg): _71.QueryDenomsMetadataRequest;
                toAminoMsg(message: _71.QueryDenomsMetadataRequest): _71.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDenomsMetadataRequestProtoMsg): _71.QueryDenomsMetadataRequest;
                toProto(message: _71.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDenomsMetadataRequest): _71.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _71.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_71.QueryDenomsMetadataResponse>): _71.QueryDenomsMetadataResponse;
                fromAmino(object: _71.QueryDenomsMetadataResponseAmino): _71.QueryDenomsMetadataResponse;
                toAmino(message: _71.QueryDenomsMetadataResponse): _71.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _71.QueryDenomsMetadataResponseAminoMsg): _71.QueryDenomsMetadataResponse;
                toAminoMsg(message: _71.QueryDenomsMetadataResponse): _71.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDenomsMetadataResponseProtoMsg): _71.QueryDenomsMetadataResponse;
                toProto(message: _71.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDenomsMetadataResponse): _71.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _71.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_71.QueryDenomMetadataRequest>): _71.QueryDenomMetadataRequest;
                fromAmino(object: _71.QueryDenomMetadataRequestAmino): _71.QueryDenomMetadataRequest;
                toAmino(message: _71.QueryDenomMetadataRequest): _71.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _71.QueryDenomMetadataRequestAminoMsg): _71.QueryDenomMetadataRequest;
                toAminoMsg(message: _71.QueryDenomMetadataRequest): _71.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDenomMetadataRequestProtoMsg): _71.QueryDenomMetadataRequest;
                toProto(message: _71.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDenomMetadataRequest): _71.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _71.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_71.QueryDenomMetadataResponse>): _71.QueryDenomMetadataResponse;
                fromAmino(object: _71.QueryDenomMetadataResponseAmino): _71.QueryDenomMetadataResponse;
                toAmino(message: _71.QueryDenomMetadataResponse): _71.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _71.QueryDenomMetadataResponseAminoMsg): _71.QueryDenomMetadataResponse;
                toAminoMsg(message: _71.QueryDenomMetadataResponse): _71.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDenomMetadataResponseProtoMsg): _71.QueryDenomMetadataResponse;
                toProto(message: _71.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDenomMetadataResponse): _71.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _71.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_71.QueryDenomOwnersRequest>): _71.QueryDenomOwnersRequest;
                fromAmino(object: _71.QueryDenomOwnersRequestAmino): _71.QueryDenomOwnersRequest;
                toAmino(message: _71.QueryDenomOwnersRequest): _71.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _71.QueryDenomOwnersRequestAminoMsg): _71.QueryDenomOwnersRequest;
                toAminoMsg(message: _71.QueryDenomOwnersRequest): _71.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDenomOwnersRequestProtoMsg): _71.QueryDenomOwnersRequest;
                toProto(message: _71.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDenomOwnersRequest): _71.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _71.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DenomOwner;
                fromPartial(object: Partial<_71.DenomOwner>): _71.DenomOwner;
                fromAmino(object: _71.DenomOwnerAmino): _71.DenomOwner;
                toAmino(message: _71.DenomOwner): _71.DenomOwnerAmino;
                fromAminoMsg(object: _71.DenomOwnerAminoMsg): _71.DenomOwner;
                toAminoMsg(message: _71.DenomOwner): _71.DenomOwnerAminoMsg;
                fromProtoMsg(message: _71.DenomOwnerProtoMsg): _71.DenomOwner;
                toProto(message: _71.DenomOwner): Uint8Array;
                toProtoMsg(message: _71.DenomOwner): _71.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _71.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_71.QueryDenomOwnersResponse>): _71.QueryDenomOwnersResponse;
                fromAmino(object: _71.QueryDenomOwnersResponseAmino): _71.QueryDenomOwnersResponse;
                toAmino(message: _71.QueryDenomOwnersResponse): _71.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _71.QueryDenomOwnersResponseAminoMsg): _71.QueryDenomOwnersResponse;
                toAminoMsg(message: _71.QueryDenomOwnersResponse): _71.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDenomOwnersResponseProtoMsg): _71.QueryDenomOwnersResponse;
                toProto(message: _71.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDenomOwnersResponse): _71.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _71.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySendEnabledRequest;
                fromPartial(object: Partial<_71.QuerySendEnabledRequest>): _71.QuerySendEnabledRequest;
                fromAmino(object: _71.QuerySendEnabledRequestAmino): _71.QuerySendEnabledRequest;
                toAmino(message: _71.QuerySendEnabledRequest): _71.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _71.QuerySendEnabledRequestAminoMsg): _71.QuerySendEnabledRequest;
                toAminoMsg(message: _71.QuerySendEnabledRequest): _71.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _71.QuerySendEnabledRequestProtoMsg): _71.QuerySendEnabledRequest;
                toProto(message: _71.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _71.QuerySendEnabledRequest): _71.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _71.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QuerySendEnabledResponse;
                fromPartial(object: Partial<_71.QuerySendEnabledResponse>): _71.QuerySendEnabledResponse;
                fromAmino(object: _71.QuerySendEnabledResponseAmino): _71.QuerySendEnabledResponse;
                toAmino(message: _71.QuerySendEnabledResponse): _71.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _71.QuerySendEnabledResponseAminoMsg): _71.QuerySendEnabledResponse;
                toAminoMsg(message: _71.QuerySendEnabledResponse): _71.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _71.QuerySendEnabledResponseProtoMsg): _71.QuerySendEnabledResponse;
                toProto(message: _71.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _71.QuerySendEnabledResponse): _71.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _70.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Balance;
                fromPartial(object: Partial<_70.Balance>): _70.Balance;
                fromAmino(object: _70.BalanceAmino): _70.Balance;
                toAmino(message: _70.Balance): _70.BalanceAmino;
                fromAminoMsg(object: _70.BalanceAminoMsg): _70.Balance;
                toAminoMsg(message: _70.Balance): _70.BalanceAminoMsg;
                fromProtoMsg(message: _70.BalanceProtoMsg): _70.Balance;
                toProto(message: _70.Balance): Uint8Array;
                toProtoMsg(message: _70.Balance): _70.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _69.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Params;
                fromPartial(object: Partial<_69.Params>): _69.Params;
                fromAmino(object: _69.ParamsAmino): _69.Params;
                toAmino(message: _69.Params): _69.ParamsAmino;
                fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                toProto(message: _69.Params): Uint8Array;
                toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _69.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.SendEnabled;
                fromPartial(object: Partial<_69.SendEnabled>): _69.SendEnabled;
                fromAmino(object: _69.SendEnabledAmino): _69.SendEnabled;
                toAmino(message: _69.SendEnabled): _69.SendEnabledAmino;
                fromAminoMsg(object: _69.SendEnabledAminoMsg): _69.SendEnabled;
                toAminoMsg(message: _69.SendEnabled): _69.SendEnabledAminoMsg;
                fromProtoMsg(message: _69.SendEnabledProtoMsg): _69.SendEnabled;
                toProto(message: _69.SendEnabled): Uint8Array;
                toProtoMsg(message: _69.SendEnabled): _69.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _69.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Input;
                fromPartial(object: Partial<_69.Input>): _69.Input;
                fromAmino(object: _69.InputAmino): _69.Input;
                toAmino(message: _69.Input): _69.InputAmino;
                fromAminoMsg(object: _69.InputAminoMsg): _69.Input;
                toAminoMsg(message: _69.Input): _69.InputAminoMsg;
                fromProtoMsg(message: _69.InputProtoMsg): _69.Input;
                toProto(message: _69.Input): Uint8Array;
                toProtoMsg(message: _69.Input): _69.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _69.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Output;
                fromPartial(object: Partial<_69.Output>): _69.Output;
                fromAmino(object: _69.OutputAmino): _69.Output;
                toAmino(message: _69.Output): _69.OutputAmino;
                fromAminoMsg(object: _69.OutputAminoMsg): _69.Output;
                toAminoMsg(message: _69.Output): _69.OutputAminoMsg;
                fromProtoMsg(message: _69.OutputProtoMsg): _69.Output;
                toProto(message: _69.Output): Uint8Array;
                toProtoMsg(message: _69.Output): _69.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _69.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Supply;
                fromPartial(object: Partial<_69.Supply>): _69.Supply;
                fromAmino(object: _69.SupplyAmino): _69.Supply;
                toAmino(message: _69.Supply): _69.SupplyAmino;
                fromAminoMsg(object: _69.SupplyAminoMsg): _69.Supply;
                toAminoMsg(message: _69.Supply): _69.SupplyAminoMsg;
                fromProtoMsg(message: _69.SupplyProtoMsg): _69.Supply;
                toProto(message: _69.Supply): Uint8Array;
                toProtoMsg(message: _69.Supply): _69.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _69.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.DenomUnit;
                fromPartial(object: Partial<_69.DenomUnit>): _69.DenomUnit;
                fromAmino(object: _69.DenomUnitAmino): _69.DenomUnit;
                toAmino(message: _69.DenomUnit): _69.DenomUnitAmino;
                fromAminoMsg(object: _69.DenomUnitAminoMsg): _69.DenomUnit;
                toAminoMsg(message: _69.DenomUnit): _69.DenomUnitAminoMsg;
                fromProtoMsg(message: _69.DenomUnitProtoMsg): _69.DenomUnit;
                toProto(message: _69.DenomUnit): Uint8Array;
                toProtoMsg(message: _69.DenomUnit): _69.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _69.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Metadata;
                fromPartial(object: Partial<_69.Metadata>): _69.Metadata;
                fromAmino(object: _69.MetadataAmino): _69.Metadata;
                toAmino(message: _69.Metadata): _69.MetadataAmino;
                fromAminoMsg(object: _69.MetadataAminoMsg): _69.Metadata;
                toAminoMsg(message: _69.Metadata): _69.MetadataAminoMsg;
                fromProtoMsg(message: _69.MetadataProtoMsg): _69.Metadata;
                toProto(message: _69.Metadata): Uint8Array;
                toProtoMsg(message: _69.Metadata): _69.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _68.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.SendAuthorization;
                fromPartial(object: Partial<_68.SendAuthorization>): _68.SendAuthorization;
                fromAmino(object: _68.SendAuthorizationAmino): _68.SendAuthorization;
                toAmino(message: _68.SendAuthorization): _68.SendAuthorizationAmino;
                fromAminoMsg(object: _68.SendAuthorizationAminoMsg): _68.SendAuthorization;
                toAminoMsg(message: _68.SendAuthorization): _68.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _68.SendAuthorizationProtoMsg): _68.SendAuthorization;
                toProto(message: _68.SendAuthorization): Uint8Array;
                toProtoMsg(message: _68.SendAuthorization): _68.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _73.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.TxResponse;
                    fromPartial(object: Partial<_73.TxResponse>): _73.TxResponse;
                    fromAmino(object: _73.TxResponseAmino): _73.TxResponse;
                    toAmino(message: _73.TxResponse): _73.TxResponseAmino;
                    fromAminoMsg(object: _73.TxResponseAminoMsg): _73.TxResponse;
                    toAminoMsg(message: _73.TxResponse): _73.TxResponseAminoMsg;
                    fromProtoMsg(message: _73.TxResponseProtoMsg): _73.TxResponse;
                    toProto(message: _73.TxResponse): Uint8Array;
                    toProtoMsg(message: _73.TxResponse): _73.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _73.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.ABCIMessageLog;
                    fromPartial(object: Partial<_73.ABCIMessageLog>): _73.ABCIMessageLog;
                    fromAmino(object: _73.ABCIMessageLogAmino): _73.ABCIMessageLog;
                    toAmino(message: _73.ABCIMessageLog): _73.ABCIMessageLogAmino;
                    fromAminoMsg(object: _73.ABCIMessageLogAminoMsg): _73.ABCIMessageLog;
                    toAminoMsg(message: _73.ABCIMessageLog): _73.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _73.ABCIMessageLogProtoMsg): _73.ABCIMessageLog;
                    toProto(message: _73.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _73.ABCIMessageLog): _73.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _73.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.StringEvent;
                    fromPartial(object: Partial<_73.StringEvent>): _73.StringEvent;
                    fromAmino(object: _73.StringEventAmino): _73.StringEvent;
                    toAmino(message: _73.StringEvent): _73.StringEventAmino;
                    fromAminoMsg(object: _73.StringEventAminoMsg): _73.StringEvent;
                    toAminoMsg(message: _73.StringEvent): _73.StringEventAminoMsg;
                    fromProtoMsg(message: _73.StringEventProtoMsg): _73.StringEvent;
                    toProto(message: _73.StringEvent): Uint8Array;
                    toProtoMsg(message: _73.StringEvent): _73.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _73.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Attribute;
                    fromPartial(object: Partial<_73.Attribute>): _73.Attribute;
                    fromAmino(object: _73.AttributeAmino): _73.Attribute;
                    toAmino(message: _73.Attribute): _73.AttributeAmino;
                    fromAminoMsg(object: _73.AttributeAminoMsg): _73.Attribute;
                    toAminoMsg(message: _73.Attribute): _73.AttributeAminoMsg;
                    fromProtoMsg(message: _73.AttributeProtoMsg): _73.Attribute;
                    toProto(message: _73.Attribute): Uint8Array;
                    toProtoMsg(message: _73.Attribute): _73.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _73.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.GasInfo;
                    fromPartial(object: Partial<_73.GasInfo>): _73.GasInfo;
                    fromAmino(object: _73.GasInfoAmino): _73.GasInfo;
                    toAmino(message: _73.GasInfo): _73.GasInfoAmino;
                    fromAminoMsg(object: _73.GasInfoAminoMsg): _73.GasInfo;
                    toAminoMsg(message: _73.GasInfo): _73.GasInfoAminoMsg;
                    fromProtoMsg(message: _73.GasInfoProtoMsg): _73.GasInfo;
                    toProto(message: _73.GasInfo): Uint8Array;
                    toProtoMsg(message: _73.GasInfo): _73.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _73.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Result;
                    fromPartial(object: Partial<_73.Result>): _73.Result;
                    fromAmino(object: _73.ResultAmino): _73.Result;
                    toAmino(message: _73.Result): _73.ResultAmino;
                    fromAminoMsg(object: _73.ResultAminoMsg): _73.Result;
                    toAminoMsg(message: _73.Result): _73.ResultAminoMsg;
                    fromProtoMsg(message: _73.ResultProtoMsg): _73.Result;
                    toProto(message: _73.Result): Uint8Array;
                    toProtoMsg(message: _73.Result): _73.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _73.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SimulationResponse;
                    fromPartial(object: Partial<_73.SimulationResponse>): _73.SimulationResponse;
                    fromAmino(object: _73.SimulationResponseAmino): _73.SimulationResponse;
                    toAmino(message: _73.SimulationResponse): _73.SimulationResponseAmino;
                    fromAminoMsg(object: _73.SimulationResponseAminoMsg): _73.SimulationResponse;
                    toAminoMsg(message: _73.SimulationResponse): _73.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _73.SimulationResponseProtoMsg): _73.SimulationResponse;
                    toProto(message: _73.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _73.SimulationResponse): _73.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _73.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.MsgData;
                    fromPartial(object: Partial<_73.MsgData>): _73.MsgData;
                    fromAmino(object: _73.MsgDataAmino): _73.MsgData;
                    toAmino(message: _73.MsgData): _73.MsgDataAmino;
                    fromAminoMsg(object: _73.MsgDataAminoMsg): _73.MsgData;
                    toAminoMsg(message: _73.MsgData): _73.MsgDataAminoMsg;
                    fromProtoMsg(message: _73.MsgDataProtoMsg): _73.MsgData;
                    toProto(message: _73.MsgData): Uint8Array;
                    toProtoMsg(message: _73.MsgData): _73.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _73.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.TxMsgData;
                    fromPartial(object: Partial<_73.TxMsgData>): _73.TxMsgData;
                    fromAmino(object: _73.TxMsgDataAmino): _73.TxMsgData;
                    toAmino(message: _73.TxMsgData): _73.TxMsgDataAmino;
                    fromAminoMsg(object: _73.TxMsgDataAminoMsg): _73.TxMsgData;
                    toAminoMsg(message: _73.TxMsgData): _73.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _73.TxMsgDataProtoMsg): _73.TxMsgData;
                    toProto(message: _73.TxMsgData): Uint8Array;
                    toProtoMsg(message: _73.TxMsgData): _73.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _73.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SearchTxsResult;
                    fromPartial(object: Partial<_73.SearchTxsResult>): _73.SearchTxsResult;
                    fromAmino(object: _73.SearchTxsResultAmino): _73.SearchTxsResult;
                    toAmino(message: _73.SearchTxsResult): _73.SearchTxsResultAmino;
                    fromAminoMsg(object: _73.SearchTxsResultAminoMsg): _73.SearchTxsResult;
                    toAminoMsg(message: _73.SearchTxsResult): _73.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _73.SearchTxsResultProtoMsg): _73.SearchTxsResult;
                    toProto(message: _73.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _73.SearchTxsResult): _73.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _74.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Pairs;
                    fromPartial(object: Partial<_74.Pairs>): _74.Pairs;
                    fromAmino(object: _74.PairsAmino): _74.Pairs;
                    toAmino(message: _74.Pairs): _74.PairsAmino;
                    fromAminoMsg(object: _74.PairsAminoMsg): _74.Pairs;
                    toAminoMsg(message: _74.Pairs): _74.PairsAminoMsg;
                    fromProtoMsg(message: _74.PairsProtoMsg): _74.Pairs;
                    toProto(message: _74.Pairs): Uint8Array;
                    toProtoMsg(message: _74.Pairs): _74.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _74.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Pair;
                    fromPartial(object: Partial<_74.Pair>): _74.Pair;
                    fromAmino(object: _74.PairAmino): _74.Pair;
                    toAmino(message: _74.Pair): _74.PairAmino;
                    fromAminoMsg(object: _74.PairAminoMsg): _74.Pair;
                    toAminoMsg(message: _74.Pair): _74.PairAminoMsg;
                    fromProtoMsg(message: _74.PairProtoMsg): _74.Pair;
                    toProto(message: _74.Pair): Uint8Array;
                    toProtoMsg(message: _74.Pair): _74.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _344.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _75.ConfigRequest): Promise<_75.ConfigResponse>;
                };
                LCDQueryClient: typeof _323.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _75.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _75.ConfigRequest;
                    fromPartial(_: Partial<_75.ConfigRequest>): _75.ConfigRequest;
                    fromAmino(_: _75.ConfigRequestAmino): _75.ConfigRequest;
                    toAmino(_: _75.ConfigRequest): _75.ConfigRequestAmino;
                    fromAminoMsg(object: _75.ConfigRequestAminoMsg): _75.ConfigRequest;
                    toAminoMsg(message: _75.ConfigRequest): _75.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _75.ConfigRequestProtoMsg): _75.ConfigRequest;
                    toProto(message: _75.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _75.ConfigRequest): _75.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _75.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.ConfigResponse;
                    fromPartial(object: Partial<_75.ConfigResponse>): _75.ConfigResponse;
                    fromAmino(object: _75.ConfigResponseAmino): _75.ConfigResponse;
                    toAmino(message: _75.ConfigResponse): _75.ConfigResponseAmino;
                    fromAminoMsg(object: _75.ConfigResponseAminoMsg): _75.ConfigResponse;
                    toAminoMsg(message: _75.ConfigResponse): _75.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _75.ConfigResponseProtoMsg): _75.ConfigResponse;
                    toProto(message: _75.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _75.ConfigResponse): _75.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _76.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.PageRequest;
                    fromPartial(object: Partial<_76.PageRequest>): _76.PageRequest;
                    fromAmino(object: _76.PageRequestAmino): _76.PageRequest;
                    toAmino(message: _76.PageRequest): _76.PageRequestAmino;
                    fromAminoMsg(object: _76.PageRequestAminoMsg): _76.PageRequest;
                    toAminoMsg(message: _76.PageRequest): _76.PageRequestAminoMsg;
                    fromProtoMsg(message: _76.PageRequestProtoMsg): _76.PageRequest;
                    toProto(message: _76.PageRequest): Uint8Array;
                    toProtoMsg(message: _76.PageRequest): _76.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _76.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.PageResponse;
                    fromPartial(object: Partial<_76.PageResponse>): _76.PageResponse;
                    fromAmino(object: _76.PageResponseAmino): _76.PageResponse;
                    toAmino(message: _76.PageResponse): _76.PageResponseAmino;
                    fromAminoMsg(object: _76.PageResponseAminoMsg): _76.PageResponse;
                    toAminoMsg(message: _76.PageResponse): _76.PageResponseAminoMsg;
                    fromProtoMsg(message: _76.PageResponseProtoMsg): _76.PageResponse;
                    toProto(message: _76.PageResponse): Uint8Array;
                    toProtoMsg(message: _76.PageResponse): _76.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _77.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_77.ListAllInterfacesRequest>): _77.ListAllInterfacesRequest;
                    fromAmino(_: _77.ListAllInterfacesRequestAmino): _77.ListAllInterfacesRequest;
                    toAmino(_: _77.ListAllInterfacesRequest): _77.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _77.ListAllInterfacesRequestAminoMsg): _77.ListAllInterfacesRequest;
                    toAminoMsg(message: _77.ListAllInterfacesRequest): _77.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _77.ListAllInterfacesRequestProtoMsg): _77.ListAllInterfacesRequest;
                    toProto(message: _77.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _77.ListAllInterfacesRequest): _77.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _77.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_77.ListAllInterfacesResponse>): _77.ListAllInterfacesResponse;
                    fromAmino(object: _77.ListAllInterfacesResponseAmino): _77.ListAllInterfacesResponse;
                    toAmino(message: _77.ListAllInterfacesResponse): _77.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _77.ListAllInterfacesResponseAminoMsg): _77.ListAllInterfacesResponse;
                    toAminoMsg(message: _77.ListAllInterfacesResponse): _77.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _77.ListAllInterfacesResponseProtoMsg): _77.ListAllInterfacesResponse;
                    toProto(message: _77.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _77.ListAllInterfacesResponse): _77.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _77.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ListImplementationsRequest;
                    fromPartial(object: Partial<_77.ListImplementationsRequest>): _77.ListImplementationsRequest;
                    fromAmino(object: _77.ListImplementationsRequestAmino): _77.ListImplementationsRequest;
                    toAmino(message: _77.ListImplementationsRequest): _77.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _77.ListImplementationsRequestAminoMsg): _77.ListImplementationsRequest;
                    toAminoMsg(message: _77.ListImplementationsRequest): _77.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _77.ListImplementationsRequestProtoMsg): _77.ListImplementationsRequest;
                    toProto(message: _77.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _77.ListImplementationsRequest): _77.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _77.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.ListImplementationsResponse;
                    fromPartial(object: Partial<_77.ListImplementationsResponse>): _77.ListImplementationsResponse;
                    fromAmino(object: _77.ListImplementationsResponseAmino): _77.ListImplementationsResponse;
                    toAmino(message: _77.ListImplementationsResponse): _77.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _77.ListImplementationsResponseAminoMsg): _77.ListImplementationsResponse;
                    toAminoMsg(message: _77.ListImplementationsResponse): _77.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _77.ListImplementationsResponseProtoMsg): _77.ListImplementationsResponse;
                    toProto(message: _77.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _77.ListImplementationsResponse): _77.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _78.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.AppDescriptor;
                    fromPartial(object: Partial<_78.AppDescriptor>): _78.AppDescriptor;
                    fromAmino(object: _78.AppDescriptorAmino): _78.AppDescriptor;
                    toAmino(message: _78.AppDescriptor): _78.AppDescriptorAmino;
                    fromAminoMsg(object: _78.AppDescriptorAminoMsg): _78.AppDescriptor;
                    toAminoMsg(message: _78.AppDescriptor): _78.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _78.AppDescriptorProtoMsg): _78.AppDescriptor;
                    toProto(message: _78.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _78.AppDescriptor): _78.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _78.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.TxDescriptor;
                    fromPartial(object: Partial<_78.TxDescriptor>): _78.TxDescriptor;
                    fromAmino(object: _78.TxDescriptorAmino): _78.TxDescriptor;
                    toAmino(message: _78.TxDescriptor): _78.TxDescriptorAmino;
                    fromAminoMsg(object: _78.TxDescriptorAminoMsg): _78.TxDescriptor;
                    toAminoMsg(message: _78.TxDescriptor): _78.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _78.TxDescriptorProtoMsg): _78.TxDescriptor;
                    toProto(message: _78.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _78.TxDescriptor): _78.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _78.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.AuthnDescriptor;
                    fromPartial(object: Partial<_78.AuthnDescriptor>): _78.AuthnDescriptor;
                    fromAmino(object: _78.AuthnDescriptorAmino): _78.AuthnDescriptor;
                    toAmino(message: _78.AuthnDescriptor): _78.AuthnDescriptorAmino;
                    fromAminoMsg(object: _78.AuthnDescriptorAminoMsg): _78.AuthnDescriptor;
                    toAminoMsg(message: _78.AuthnDescriptor): _78.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _78.AuthnDescriptorProtoMsg): _78.AuthnDescriptor;
                    toProto(message: _78.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _78.AuthnDescriptor): _78.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _78.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SigningModeDescriptor;
                    fromPartial(object: Partial<_78.SigningModeDescriptor>): _78.SigningModeDescriptor;
                    fromAmino(object: _78.SigningModeDescriptorAmino): _78.SigningModeDescriptor;
                    toAmino(message: _78.SigningModeDescriptor): _78.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _78.SigningModeDescriptorAminoMsg): _78.SigningModeDescriptor;
                    toAminoMsg(message: _78.SigningModeDescriptor): _78.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _78.SigningModeDescriptorProtoMsg): _78.SigningModeDescriptor;
                    toProto(message: _78.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _78.SigningModeDescriptor): _78.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _78.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.ChainDescriptor;
                    fromPartial(object: Partial<_78.ChainDescriptor>): _78.ChainDescriptor;
                    fromAmino(object: _78.ChainDescriptorAmino): _78.ChainDescriptor;
                    toAmino(message: _78.ChainDescriptor): _78.ChainDescriptorAmino;
                    fromAminoMsg(object: _78.ChainDescriptorAminoMsg): _78.ChainDescriptor;
                    toAminoMsg(message: _78.ChainDescriptor): _78.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _78.ChainDescriptorProtoMsg): _78.ChainDescriptor;
                    toProto(message: _78.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _78.ChainDescriptor): _78.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _78.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.CodecDescriptor;
                    fromPartial(object: Partial<_78.CodecDescriptor>): _78.CodecDescriptor;
                    fromAmino(object: _78.CodecDescriptorAmino): _78.CodecDescriptor;
                    toAmino(message: _78.CodecDescriptor): _78.CodecDescriptorAmino;
                    fromAminoMsg(object: _78.CodecDescriptorAminoMsg): _78.CodecDescriptor;
                    toAminoMsg(message: _78.CodecDescriptor): _78.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _78.CodecDescriptorProtoMsg): _78.CodecDescriptor;
                    toProto(message: _78.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _78.CodecDescriptor): _78.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _78.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.InterfaceDescriptor;
                    fromPartial(object: Partial<_78.InterfaceDescriptor>): _78.InterfaceDescriptor;
                    fromAmino(object: _78.InterfaceDescriptorAmino): _78.InterfaceDescriptor;
                    toAmino(message: _78.InterfaceDescriptor): _78.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _78.InterfaceDescriptorAminoMsg): _78.InterfaceDescriptor;
                    toAminoMsg(message: _78.InterfaceDescriptor): _78.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _78.InterfaceDescriptorProtoMsg): _78.InterfaceDescriptor;
                    toProto(message: _78.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _78.InterfaceDescriptor): _78.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _78.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_78.InterfaceImplementerDescriptor>): _78.InterfaceImplementerDescriptor;
                    fromAmino(object: _78.InterfaceImplementerDescriptorAmino): _78.InterfaceImplementerDescriptor;
                    toAmino(message: _78.InterfaceImplementerDescriptor): _78.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _78.InterfaceImplementerDescriptorAminoMsg): _78.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _78.InterfaceImplementerDescriptor): _78.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _78.InterfaceImplementerDescriptorProtoMsg): _78.InterfaceImplementerDescriptor;
                    toProto(message: _78.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _78.InterfaceImplementerDescriptor): _78.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _78.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_78.InterfaceAcceptingMessageDescriptor>): _78.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _78.InterfaceAcceptingMessageDescriptorAmino): _78.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _78.InterfaceAcceptingMessageDescriptor): _78.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _78.InterfaceAcceptingMessageDescriptorAminoMsg): _78.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _78.InterfaceAcceptingMessageDescriptor): _78.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _78.InterfaceAcceptingMessageDescriptorProtoMsg): _78.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _78.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _78.InterfaceAcceptingMessageDescriptor): _78.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _78.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.ConfigurationDescriptor;
                    fromPartial(object: Partial<_78.ConfigurationDescriptor>): _78.ConfigurationDescriptor;
                    fromAmino(object: _78.ConfigurationDescriptorAmino): _78.ConfigurationDescriptor;
                    toAmino(message: _78.ConfigurationDescriptor): _78.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _78.ConfigurationDescriptorAminoMsg): _78.ConfigurationDescriptor;
                    toAminoMsg(message: _78.ConfigurationDescriptor): _78.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _78.ConfigurationDescriptorProtoMsg): _78.ConfigurationDescriptor;
                    toProto(message: _78.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _78.ConfigurationDescriptor): _78.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _78.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.MsgDescriptor;
                    fromPartial(object: Partial<_78.MsgDescriptor>): _78.MsgDescriptor;
                    fromAmino(object: _78.MsgDescriptorAmino): _78.MsgDescriptor;
                    toAmino(message: _78.MsgDescriptor): _78.MsgDescriptorAmino;
                    fromAminoMsg(object: _78.MsgDescriptorAminoMsg): _78.MsgDescriptor;
                    toAminoMsg(message: _78.MsgDescriptor): _78.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _78.MsgDescriptorProtoMsg): _78.MsgDescriptor;
                    toProto(message: _78.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _78.MsgDescriptor): _78.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_78.GetAuthnDescriptorRequest>): _78.GetAuthnDescriptorRequest;
                    fromAmino(_: _78.GetAuthnDescriptorRequestAmino): _78.GetAuthnDescriptorRequest;
                    toAmino(_: _78.GetAuthnDescriptorRequest): _78.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetAuthnDescriptorRequestAminoMsg): _78.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _78.GetAuthnDescriptorRequest): _78.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetAuthnDescriptorRequestProtoMsg): _78.GetAuthnDescriptorRequest;
                    toProto(message: _78.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetAuthnDescriptorRequest): _78.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_78.GetAuthnDescriptorResponse>): _78.GetAuthnDescriptorResponse;
                    fromAmino(object: _78.GetAuthnDescriptorResponseAmino): _78.GetAuthnDescriptorResponse;
                    toAmino(message: _78.GetAuthnDescriptorResponse): _78.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetAuthnDescriptorResponseAminoMsg): _78.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _78.GetAuthnDescriptorResponse): _78.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetAuthnDescriptorResponseProtoMsg): _78.GetAuthnDescriptorResponse;
                    toProto(message: _78.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetAuthnDescriptorResponse): _78.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_78.GetChainDescriptorRequest>): _78.GetChainDescriptorRequest;
                    fromAmino(_: _78.GetChainDescriptorRequestAmino): _78.GetChainDescriptorRequest;
                    toAmino(_: _78.GetChainDescriptorRequest): _78.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetChainDescriptorRequestAminoMsg): _78.GetChainDescriptorRequest;
                    toAminoMsg(message: _78.GetChainDescriptorRequest): _78.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetChainDescriptorRequestProtoMsg): _78.GetChainDescriptorRequest;
                    toProto(message: _78.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetChainDescriptorRequest): _78.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_78.GetChainDescriptorResponse>): _78.GetChainDescriptorResponse;
                    fromAmino(object: _78.GetChainDescriptorResponseAmino): _78.GetChainDescriptorResponse;
                    toAmino(message: _78.GetChainDescriptorResponse): _78.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetChainDescriptorResponseAminoMsg): _78.GetChainDescriptorResponse;
                    toAminoMsg(message: _78.GetChainDescriptorResponse): _78.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetChainDescriptorResponseProtoMsg): _78.GetChainDescriptorResponse;
                    toProto(message: _78.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetChainDescriptorResponse): _78.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_78.GetCodecDescriptorRequest>): _78.GetCodecDescriptorRequest;
                    fromAmino(_: _78.GetCodecDescriptorRequestAmino): _78.GetCodecDescriptorRequest;
                    toAmino(_: _78.GetCodecDescriptorRequest): _78.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetCodecDescriptorRequestAminoMsg): _78.GetCodecDescriptorRequest;
                    toAminoMsg(message: _78.GetCodecDescriptorRequest): _78.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetCodecDescriptorRequestProtoMsg): _78.GetCodecDescriptorRequest;
                    toProto(message: _78.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetCodecDescriptorRequest): _78.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_78.GetCodecDescriptorResponse>): _78.GetCodecDescriptorResponse;
                    fromAmino(object: _78.GetCodecDescriptorResponseAmino): _78.GetCodecDescriptorResponse;
                    toAmino(message: _78.GetCodecDescriptorResponse): _78.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetCodecDescriptorResponseAminoMsg): _78.GetCodecDescriptorResponse;
                    toAminoMsg(message: _78.GetCodecDescriptorResponse): _78.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetCodecDescriptorResponseProtoMsg): _78.GetCodecDescriptorResponse;
                    toProto(message: _78.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetCodecDescriptorResponse): _78.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_78.GetConfigurationDescriptorRequest>): _78.GetConfigurationDescriptorRequest;
                    fromAmino(_: _78.GetConfigurationDescriptorRequestAmino): _78.GetConfigurationDescriptorRequest;
                    toAmino(_: _78.GetConfigurationDescriptorRequest): _78.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetConfigurationDescriptorRequestAminoMsg): _78.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _78.GetConfigurationDescriptorRequest): _78.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetConfigurationDescriptorRequestProtoMsg): _78.GetConfigurationDescriptorRequest;
                    toProto(message: _78.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetConfigurationDescriptorRequest): _78.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_78.GetConfigurationDescriptorResponse>): _78.GetConfigurationDescriptorResponse;
                    fromAmino(object: _78.GetConfigurationDescriptorResponseAmino): _78.GetConfigurationDescriptorResponse;
                    toAmino(message: _78.GetConfigurationDescriptorResponse): _78.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetConfigurationDescriptorResponseAminoMsg): _78.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _78.GetConfigurationDescriptorResponse): _78.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetConfigurationDescriptorResponseProtoMsg): _78.GetConfigurationDescriptorResponse;
                    toProto(message: _78.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetConfigurationDescriptorResponse): _78.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_78.GetQueryServicesDescriptorRequest>): _78.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _78.GetQueryServicesDescriptorRequestAmino): _78.GetQueryServicesDescriptorRequest;
                    toAmino(_: _78.GetQueryServicesDescriptorRequest): _78.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetQueryServicesDescriptorRequestAminoMsg): _78.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _78.GetQueryServicesDescriptorRequest): _78.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetQueryServicesDescriptorRequestProtoMsg): _78.GetQueryServicesDescriptorRequest;
                    toProto(message: _78.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetQueryServicesDescriptorRequest): _78.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_78.GetQueryServicesDescriptorResponse>): _78.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _78.GetQueryServicesDescriptorResponseAmino): _78.GetQueryServicesDescriptorResponse;
                    toAmino(message: _78.GetQueryServicesDescriptorResponse): _78.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetQueryServicesDescriptorResponseAminoMsg): _78.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _78.GetQueryServicesDescriptorResponse): _78.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetQueryServicesDescriptorResponseProtoMsg): _78.GetQueryServicesDescriptorResponse;
                    toProto(message: _78.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetQueryServicesDescriptorResponse): _78.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _78.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_78.GetTxDescriptorRequest>): _78.GetTxDescriptorRequest;
                    fromAmino(_: _78.GetTxDescriptorRequestAmino): _78.GetTxDescriptorRequest;
                    toAmino(_: _78.GetTxDescriptorRequest): _78.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _78.GetTxDescriptorRequestAminoMsg): _78.GetTxDescriptorRequest;
                    toAminoMsg(message: _78.GetTxDescriptorRequest): _78.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _78.GetTxDescriptorRequestProtoMsg): _78.GetTxDescriptorRequest;
                    toProto(message: _78.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _78.GetTxDescriptorRequest): _78.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _78.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_78.GetTxDescriptorResponse>): _78.GetTxDescriptorResponse;
                    fromAmino(object: _78.GetTxDescriptorResponseAmino): _78.GetTxDescriptorResponse;
                    toAmino(message: _78.GetTxDescriptorResponse): _78.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _78.GetTxDescriptorResponseAminoMsg): _78.GetTxDescriptorResponse;
                    toAminoMsg(message: _78.GetTxDescriptorResponse): _78.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _78.GetTxDescriptorResponseProtoMsg): _78.GetTxDescriptorResponse;
                    toProto(message: _78.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _78.GetTxDescriptorResponse): _78.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _78.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.QueryServicesDescriptor;
                    fromPartial(object: Partial<_78.QueryServicesDescriptor>): _78.QueryServicesDescriptor;
                    fromAmino(object: _78.QueryServicesDescriptorAmino): _78.QueryServicesDescriptor;
                    toAmino(message: _78.QueryServicesDescriptor): _78.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _78.QueryServicesDescriptorAminoMsg): _78.QueryServicesDescriptor;
                    toAminoMsg(message: _78.QueryServicesDescriptor): _78.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _78.QueryServicesDescriptorProtoMsg): _78.QueryServicesDescriptor;
                    toProto(message: _78.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _78.QueryServicesDescriptor): _78.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _78.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.QueryServiceDescriptor;
                    fromPartial(object: Partial<_78.QueryServiceDescriptor>): _78.QueryServiceDescriptor;
                    fromAmino(object: _78.QueryServiceDescriptorAmino): _78.QueryServiceDescriptor;
                    toAmino(message: _78.QueryServiceDescriptor): _78.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _78.QueryServiceDescriptorAminoMsg): _78.QueryServiceDescriptor;
                    toAminoMsg(message: _78.QueryServiceDescriptor): _78.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _78.QueryServiceDescriptorProtoMsg): _78.QueryServiceDescriptor;
                    toProto(message: _78.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _78.QueryServiceDescriptor): _78.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _78.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.QueryMethodDescriptor;
                    fromPartial(object: Partial<_78.QueryMethodDescriptor>): _78.QueryMethodDescriptor;
                    fromAmino(object: _78.QueryMethodDescriptorAmino): _78.QueryMethodDescriptor;
                    toAmino(message: _78.QueryMethodDescriptor): _78.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _78.QueryMethodDescriptorAminoMsg): _78.QueryMethodDescriptor;
                    toAminoMsg(message: _78.QueryMethodDescriptor): _78.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _78.QueryMethodDescriptorProtoMsg): _78.QueryMethodDescriptor;
                    toProto(message: _78.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _78.QueryMethodDescriptor): _78.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _79.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.Snapshot;
                    fromPartial(object: Partial<_79.Snapshot>): _79.Snapshot;
                    fromAmino(object: _79.SnapshotAmino): _79.Snapshot;
                    toAmino(message: _79.Snapshot): _79.SnapshotAmino;
                    fromAminoMsg(object: _79.SnapshotAminoMsg): _79.Snapshot;
                    toAminoMsg(message: _79.Snapshot): _79.SnapshotAminoMsg;
                    fromProtoMsg(message: _79.SnapshotProtoMsg): _79.Snapshot;
                    toProto(message: _79.Snapshot): Uint8Array;
                    toProtoMsg(message: _79.Snapshot): _79.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _79.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.Metadata;
                    fromPartial(object: Partial<_79.Metadata>): _79.Metadata;
                    fromAmino(object: _79.MetadataAmino): _79.Metadata;
                    toAmino(message: _79.Metadata): _79.MetadataAmino;
                    fromAminoMsg(object: _79.MetadataAminoMsg): _79.Metadata;
                    toAminoMsg(message: _79.Metadata): _79.MetadataAminoMsg;
                    fromProtoMsg(message: _79.MetadataProtoMsg): _79.Metadata;
                    toProto(message: _79.Metadata): Uint8Array;
                    toProtoMsg(message: _79.Metadata): _79.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _79.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotItem;
                    fromPartial(object: Partial<_79.SnapshotItem>): _79.SnapshotItem;
                    fromAmino(object: _79.SnapshotItemAmino): _79.SnapshotItem;
                    toAmino(message: _79.SnapshotItem): _79.SnapshotItemAmino;
                    fromAminoMsg(object: _79.SnapshotItemAminoMsg): _79.SnapshotItem;
                    toAminoMsg(message: _79.SnapshotItem): _79.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _79.SnapshotItemProtoMsg): _79.SnapshotItem;
                    toProto(message: _79.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _79.SnapshotItem): _79.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _79.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotStoreItem;
                    fromPartial(object: Partial<_79.SnapshotStoreItem>): _79.SnapshotStoreItem;
                    fromAmino(object: _79.SnapshotStoreItemAmino): _79.SnapshotStoreItem;
                    toAmino(message: _79.SnapshotStoreItem): _79.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _79.SnapshotStoreItemAminoMsg): _79.SnapshotStoreItem;
                    toAminoMsg(message: _79.SnapshotStoreItem): _79.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _79.SnapshotStoreItemProtoMsg): _79.SnapshotStoreItem;
                    toProto(message: _79.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _79.SnapshotStoreItem): _79.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _79.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotIAVLItem;
                    fromPartial(object: Partial<_79.SnapshotIAVLItem>): _79.SnapshotIAVLItem;
                    fromAmino(object: _79.SnapshotIAVLItemAmino): _79.SnapshotIAVLItem;
                    toAmino(message: _79.SnapshotIAVLItem): _79.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _79.SnapshotIAVLItemAminoMsg): _79.SnapshotIAVLItem;
                    toAminoMsg(message: _79.SnapshotIAVLItem): _79.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _79.SnapshotIAVLItemProtoMsg): _79.SnapshotIAVLItem;
                    toProto(message: _79.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _79.SnapshotIAVLItem): _79.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _79.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_79.SnapshotExtensionMeta>): _79.SnapshotExtensionMeta;
                    fromAmino(object: _79.SnapshotExtensionMetaAmino): _79.SnapshotExtensionMeta;
                    toAmino(message: _79.SnapshotExtensionMeta): _79.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _79.SnapshotExtensionMetaAminoMsg): _79.SnapshotExtensionMeta;
                    toAminoMsg(message: _79.SnapshotExtensionMeta): _79.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _79.SnapshotExtensionMetaProtoMsg): _79.SnapshotExtensionMeta;
                    toProto(message: _79.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _79.SnapshotExtensionMeta): _79.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _79.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_79.SnapshotExtensionPayload>): _79.SnapshotExtensionPayload;
                    fromAmino(object: _79.SnapshotExtensionPayloadAmino): _79.SnapshotExtensionPayload;
                    toAmino(message: _79.SnapshotExtensionPayload): _79.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _79.SnapshotExtensionPayloadAminoMsg): _79.SnapshotExtensionPayload;
                    toAminoMsg(message: _79.SnapshotExtensionPayload): _79.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _79.SnapshotExtensionPayloadProtoMsg): _79.SnapshotExtensionPayload;
                    toProto(message: _79.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _79.SnapshotExtensionPayload): _79.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _79.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotKVItem;
                    fromPartial(object: Partial<_79.SnapshotKVItem>): _79.SnapshotKVItem;
                    fromAmino(object: _79.SnapshotKVItemAmino): _79.SnapshotKVItem;
                    toAmino(message: _79.SnapshotKVItem): _79.SnapshotKVItemAmino;
                    fromAminoMsg(object: _79.SnapshotKVItemAminoMsg): _79.SnapshotKVItem;
                    toAminoMsg(message: _79.SnapshotKVItem): _79.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _79.SnapshotKVItemProtoMsg): _79.SnapshotKVItem;
                    toProto(message: _79.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _79.SnapshotKVItem): _79.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _79.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _79.SnapshotSchema;
                    fromPartial(object: Partial<_79.SnapshotSchema>): _79.SnapshotSchema;
                    fromAmino(object: _79.SnapshotSchemaAmino): _79.SnapshotSchema;
                    toAmino(message: _79.SnapshotSchema): _79.SnapshotSchemaAmino;
                    fromAminoMsg(object: _79.SnapshotSchemaAminoMsg): _79.SnapshotSchema;
                    toAminoMsg(message: _79.SnapshotSchema): _79.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _79.SnapshotSchemaProtoMsg): _79.SnapshotSchema;
                    toProto(message: _79.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _79.SnapshotSchema): _79.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _81.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.StoreKVPair;
                    fromPartial(object: Partial<_81.StoreKVPair>): _81.StoreKVPair;
                    fromAmino(object: _81.StoreKVPairAmino): _81.StoreKVPair;
                    toAmino(message: _81.StoreKVPair): _81.StoreKVPairAmino;
                    fromAminoMsg(object: _81.StoreKVPairAminoMsg): _81.StoreKVPair;
                    toAminoMsg(message: _81.StoreKVPair): _81.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _81.StoreKVPairProtoMsg): _81.StoreKVPair;
                    toProto(message: _81.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _81.StoreKVPair): _81.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _81.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.BlockMetadata;
                    fromPartial(object: Partial<_81.BlockMetadata>): _81.BlockMetadata;
                    fromAmino(object: _81.BlockMetadataAmino): _81.BlockMetadata;
                    toAmino(message: _81.BlockMetadata): _81.BlockMetadataAmino;
                    fromAminoMsg(object: _81.BlockMetadataAminoMsg): _81.BlockMetadata;
                    toAminoMsg(message: _81.BlockMetadata): _81.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _81.BlockMetadataProtoMsg): _81.BlockMetadata;
                    toProto(message: _81.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _81.BlockMetadata): _81.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _81.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_81.BlockMetadata_DeliverTx>): _81.BlockMetadata_DeliverTx;
                    fromAmino(object: _81.BlockMetadata_DeliverTxAmino): _81.BlockMetadata_DeliverTx;
                    toAmino(message: _81.BlockMetadata_DeliverTx): _81.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _81.BlockMetadata_DeliverTxAminoMsg): _81.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _81.BlockMetadata_DeliverTx): _81.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _81.BlockMetadata_DeliverTxProtoMsg): _81.BlockMetadata_DeliverTx;
                    toProto(message: _81.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _81.BlockMetadata_DeliverTx): _81.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _80.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.CommitInfo;
                    fromPartial(object: Partial<_80.CommitInfo>): _80.CommitInfo;
                    fromAmino(object: _80.CommitInfoAmino): _80.CommitInfo;
                    toAmino(message: _80.CommitInfo): _80.CommitInfoAmino;
                    fromAminoMsg(object: _80.CommitInfoAminoMsg): _80.CommitInfo;
                    toAminoMsg(message: _80.CommitInfo): _80.CommitInfoAminoMsg;
                    fromProtoMsg(message: _80.CommitInfoProtoMsg): _80.CommitInfo;
                    toProto(message: _80.CommitInfo): Uint8Array;
                    toProtoMsg(message: _80.CommitInfo): _80.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _80.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.StoreInfo;
                    fromPartial(object: Partial<_80.StoreInfo>): _80.StoreInfo;
                    fromAmino(object: _80.StoreInfoAmino): _80.StoreInfo;
                    toAmino(message: _80.StoreInfo): _80.StoreInfoAmino;
                    fromAminoMsg(object: _80.StoreInfoAminoMsg): _80.StoreInfo;
                    toAminoMsg(message: _80.StoreInfo): _80.StoreInfoAminoMsg;
                    fromProtoMsg(message: _80.StoreInfoProtoMsg): _80.StoreInfo;
                    toProto(message: _80.StoreInfo): Uint8Array;
                    toProtoMsg(message: _80.StoreInfo): _80.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _80.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.CommitID;
                    fromPartial(object: Partial<_80.CommitID>): _80.CommitID;
                    fromAmino(object: _80.CommitIDAmino): _80.CommitID;
                    toAmino(message: _80.CommitID): _80.CommitIDAmino;
                    fromAminoMsg(object: _80.CommitIDAminoMsg): _80.CommitID;
                    toAminoMsg(message: _80.CommitID): _80.CommitIDAminoMsg;
                    fromProtoMsg(message: _80.CommitIDProtoMsg): _80.CommitID;
                    toProto(message: _80.CommitID): Uint8Array;
                    toProtoMsg(message: _80.CommitID): _80.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _345.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _82.GetNodeInfoRequest): Promise<_82.GetNodeInfoResponse>;
                    getSyncing(request?: _82.GetSyncingRequest): Promise<_82.GetSyncingResponse>;
                    getLatestBlock(request?: _82.GetLatestBlockRequest): Promise<_82.GetLatestBlockResponse>;
                    getBlockByHeight(request: _82.GetBlockByHeightRequest): Promise<_82.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _82.GetLatestValidatorSetRequest): Promise<_82.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _82.GetValidatorSetByHeightRequest): Promise<_82.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _82.ABCIQueryRequest): Promise<_82.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _324.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _83.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Block;
                    fromPartial(object: Partial<_83.Block>): _83.Block;
                    fromAmino(object: _83.BlockAmino): _83.Block;
                    toAmino(message: _83.Block): _83.BlockAmino;
                    fromAminoMsg(object: _83.BlockAminoMsg): _83.Block;
                    toAminoMsg(message: _83.Block): _83.BlockAminoMsg;
                    fromProtoMsg(message: _83.BlockProtoMsg): _83.Block;
                    toProto(message: _83.Block): Uint8Array;
                    toProtoMsg(message: _83.Block): _83.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _83.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Header;
                    fromPartial(object: Partial<_83.Header>): _83.Header;
                    fromAmino(object: _83.HeaderAmino): _83.Header;
                    toAmino(message: _83.Header): _83.HeaderAmino;
                    fromAminoMsg(object: _83.HeaderAminoMsg): _83.Header;
                    toAminoMsg(message: _83.Header): _83.HeaderAminoMsg;
                    fromProtoMsg(message: _83.HeaderProtoMsg): _83.Header;
                    toProto(message: _83.Header): Uint8Array;
                    toProtoMsg(message: _83.Header): _83.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _82.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_82.GetValidatorSetByHeightRequest>): _82.GetValidatorSetByHeightRequest;
                    fromAmino(object: _82.GetValidatorSetByHeightRequestAmino): _82.GetValidatorSetByHeightRequest;
                    toAmino(message: _82.GetValidatorSetByHeightRequest): _82.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _82.GetValidatorSetByHeightRequestAminoMsg): _82.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _82.GetValidatorSetByHeightRequest): _82.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _82.GetValidatorSetByHeightRequestProtoMsg): _82.GetValidatorSetByHeightRequest;
                    toProto(message: _82.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _82.GetValidatorSetByHeightRequest): _82.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _82.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_82.GetValidatorSetByHeightResponse>): _82.GetValidatorSetByHeightResponse;
                    fromAmino(object: _82.GetValidatorSetByHeightResponseAmino): _82.GetValidatorSetByHeightResponse;
                    toAmino(message: _82.GetValidatorSetByHeightResponse): _82.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _82.GetValidatorSetByHeightResponseAminoMsg): _82.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _82.GetValidatorSetByHeightResponse): _82.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _82.GetValidatorSetByHeightResponseProtoMsg): _82.GetValidatorSetByHeightResponse;
                    toProto(message: _82.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _82.GetValidatorSetByHeightResponse): _82.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _82.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_82.GetLatestValidatorSetRequest>): _82.GetLatestValidatorSetRequest;
                    fromAmino(object: _82.GetLatestValidatorSetRequestAmino): _82.GetLatestValidatorSetRequest;
                    toAmino(message: _82.GetLatestValidatorSetRequest): _82.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _82.GetLatestValidatorSetRequestAminoMsg): _82.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _82.GetLatestValidatorSetRequest): _82.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _82.GetLatestValidatorSetRequestProtoMsg): _82.GetLatestValidatorSetRequest;
                    toProto(message: _82.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _82.GetLatestValidatorSetRequest): _82.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _82.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_82.GetLatestValidatorSetResponse>): _82.GetLatestValidatorSetResponse;
                    fromAmino(object: _82.GetLatestValidatorSetResponseAmino): _82.GetLatestValidatorSetResponse;
                    toAmino(message: _82.GetLatestValidatorSetResponse): _82.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _82.GetLatestValidatorSetResponseAminoMsg): _82.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _82.GetLatestValidatorSetResponse): _82.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _82.GetLatestValidatorSetResponseProtoMsg): _82.GetLatestValidatorSetResponse;
                    toProto(message: _82.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _82.GetLatestValidatorSetResponse): _82.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _82.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Validator;
                    fromPartial(object: Partial<_82.Validator>): _82.Validator;
                    fromAmino(object: _82.ValidatorAmino): _82.Validator;
                    toAmino(message: _82.Validator): _82.ValidatorAmino;
                    fromAminoMsg(object: _82.ValidatorAminoMsg): _82.Validator;
                    toAminoMsg(message: _82.Validator): _82.ValidatorAminoMsg;
                    fromProtoMsg(message: _82.ValidatorProtoMsg): _82.Validator;
                    toProto(message: _82.Validator): Uint8Array;
                    toProtoMsg(message: _82.Validator): _82.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _82.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_82.GetBlockByHeightRequest>): _82.GetBlockByHeightRequest;
                    fromAmino(object: _82.GetBlockByHeightRequestAmino): _82.GetBlockByHeightRequest;
                    toAmino(message: _82.GetBlockByHeightRequest): _82.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _82.GetBlockByHeightRequestAminoMsg): _82.GetBlockByHeightRequest;
                    toAminoMsg(message: _82.GetBlockByHeightRequest): _82.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _82.GetBlockByHeightRequestProtoMsg): _82.GetBlockByHeightRequest;
                    toProto(message: _82.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _82.GetBlockByHeightRequest): _82.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _82.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_82.GetBlockByHeightResponse>): _82.GetBlockByHeightResponse;
                    fromAmino(object: _82.GetBlockByHeightResponseAmino): _82.GetBlockByHeightResponse;
                    toAmino(message: _82.GetBlockByHeightResponse): _82.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _82.GetBlockByHeightResponseAminoMsg): _82.GetBlockByHeightResponse;
                    toAminoMsg(message: _82.GetBlockByHeightResponse): _82.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _82.GetBlockByHeightResponseProtoMsg): _82.GetBlockByHeightResponse;
                    toProto(message: _82.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _82.GetBlockByHeightResponse): _82.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _82.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _82.GetLatestBlockRequest;
                    fromPartial(_: Partial<_82.GetLatestBlockRequest>): _82.GetLatestBlockRequest;
                    fromAmino(_: _82.GetLatestBlockRequestAmino): _82.GetLatestBlockRequest;
                    toAmino(_: _82.GetLatestBlockRequest): _82.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _82.GetLatestBlockRequestAminoMsg): _82.GetLatestBlockRequest;
                    toAminoMsg(message: _82.GetLatestBlockRequest): _82.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _82.GetLatestBlockRequestProtoMsg): _82.GetLatestBlockRequest;
                    toProto(message: _82.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _82.GetLatestBlockRequest): _82.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _82.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetLatestBlockResponse;
                    fromPartial(object: Partial<_82.GetLatestBlockResponse>): _82.GetLatestBlockResponse;
                    fromAmino(object: _82.GetLatestBlockResponseAmino): _82.GetLatestBlockResponse;
                    toAmino(message: _82.GetLatestBlockResponse): _82.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _82.GetLatestBlockResponseAminoMsg): _82.GetLatestBlockResponse;
                    toAminoMsg(message: _82.GetLatestBlockResponse): _82.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _82.GetLatestBlockResponseProtoMsg): _82.GetLatestBlockResponse;
                    toProto(message: _82.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _82.GetLatestBlockResponse): _82.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _82.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _82.GetSyncingRequest;
                    fromPartial(_: Partial<_82.GetSyncingRequest>): _82.GetSyncingRequest;
                    fromAmino(_: _82.GetSyncingRequestAmino): _82.GetSyncingRequest;
                    toAmino(_: _82.GetSyncingRequest): _82.GetSyncingRequestAmino;
                    fromAminoMsg(object: _82.GetSyncingRequestAminoMsg): _82.GetSyncingRequest;
                    toAminoMsg(message: _82.GetSyncingRequest): _82.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _82.GetSyncingRequestProtoMsg): _82.GetSyncingRequest;
                    toProto(message: _82.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _82.GetSyncingRequest): _82.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _82.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetSyncingResponse;
                    fromPartial(object: Partial<_82.GetSyncingResponse>): _82.GetSyncingResponse;
                    fromAmino(object: _82.GetSyncingResponseAmino): _82.GetSyncingResponse;
                    toAmino(message: _82.GetSyncingResponse): _82.GetSyncingResponseAmino;
                    fromAminoMsg(object: _82.GetSyncingResponseAminoMsg): _82.GetSyncingResponse;
                    toAminoMsg(message: _82.GetSyncingResponse): _82.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _82.GetSyncingResponseProtoMsg): _82.GetSyncingResponse;
                    toProto(message: _82.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _82.GetSyncingResponse): _82.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _82.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _82.GetNodeInfoRequest;
                    fromPartial(_: Partial<_82.GetNodeInfoRequest>): _82.GetNodeInfoRequest;
                    fromAmino(_: _82.GetNodeInfoRequestAmino): _82.GetNodeInfoRequest;
                    toAmino(_: _82.GetNodeInfoRequest): _82.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _82.GetNodeInfoRequestAminoMsg): _82.GetNodeInfoRequest;
                    toAminoMsg(message: _82.GetNodeInfoRequest): _82.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _82.GetNodeInfoRequestProtoMsg): _82.GetNodeInfoRequest;
                    toProto(message: _82.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _82.GetNodeInfoRequest): _82.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _82.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GetNodeInfoResponse;
                    fromPartial(object: Partial<_82.GetNodeInfoResponse>): _82.GetNodeInfoResponse;
                    fromAmino(object: _82.GetNodeInfoResponseAmino): _82.GetNodeInfoResponse;
                    toAmino(message: _82.GetNodeInfoResponse): _82.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _82.GetNodeInfoResponseAminoMsg): _82.GetNodeInfoResponse;
                    toAminoMsg(message: _82.GetNodeInfoResponse): _82.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _82.GetNodeInfoResponseProtoMsg): _82.GetNodeInfoResponse;
                    toProto(message: _82.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _82.GetNodeInfoResponse): _82.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _82.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.VersionInfo;
                    fromPartial(object: Partial<_82.VersionInfo>): _82.VersionInfo;
                    fromAmino(object: _82.VersionInfoAmino): _82.VersionInfo;
                    toAmino(message: _82.VersionInfo): _82.VersionInfoAmino;
                    fromAminoMsg(object: _82.VersionInfoAminoMsg): _82.VersionInfo;
                    toAminoMsg(message: _82.VersionInfo): _82.VersionInfoAminoMsg;
                    fromProtoMsg(message: _82.VersionInfoProtoMsg): _82.VersionInfo;
                    toProto(message: _82.VersionInfo): Uint8Array;
                    toProtoMsg(message: _82.VersionInfo): _82.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _82.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Module;
                    fromPartial(object: Partial<_82.Module>): _82.Module;
                    fromAmino(object: _82.ModuleAmino): _82.Module;
                    toAmino(message: _82.Module): _82.ModuleAmino;
                    fromAminoMsg(object: _82.ModuleAminoMsg): _82.Module;
                    toAminoMsg(message: _82.Module): _82.ModuleAminoMsg;
                    fromProtoMsg(message: _82.ModuleProtoMsg): _82.Module;
                    toProto(message: _82.Module): Uint8Array;
                    toProtoMsg(message: _82.Module): _82.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _82.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.ABCIQueryRequest;
                    fromPartial(object: Partial<_82.ABCIQueryRequest>): _82.ABCIQueryRequest;
                    fromAmino(object: _82.ABCIQueryRequestAmino): _82.ABCIQueryRequest;
                    toAmino(message: _82.ABCIQueryRequest): _82.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _82.ABCIQueryRequestAminoMsg): _82.ABCIQueryRequest;
                    toAminoMsg(message: _82.ABCIQueryRequest): _82.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _82.ABCIQueryRequestProtoMsg): _82.ABCIQueryRequest;
                    toProto(message: _82.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _82.ABCIQueryRequest): _82.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _82.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.ABCIQueryResponse;
                    fromPartial(object: Partial<_82.ABCIQueryResponse>): _82.ABCIQueryResponse;
                    fromAmino(object: _82.ABCIQueryResponseAmino): _82.ABCIQueryResponse;
                    toAmino(message: _82.ABCIQueryResponse): _82.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _82.ABCIQueryResponseAminoMsg): _82.ABCIQueryResponse;
                    toAminoMsg(message: _82.ABCIQueryResponse): _82.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _82.ABCIQueryResponseProtoMsg): _82.ABCIQueryResponse;
                    toProto(message: _82.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _82.ABCIQueryResponse): _82.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _82.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.ProofOp;
                    fromPartial(object: Partial<_82.ProofOp>): _82.ProofOp;
                    fromAmino(object: _82.ProofOpAmino): _82.ProofOp;
                    toAmino(message: _82.ProofOp): _82.ProofOpAmino;
                    fromAminoMsg(object: _82.ProofOpAminoMsg): _82.ProofOp;
                    toAminoMsg(message: _82.ProofOp): _82.ProofOpAminoMsg;
                    fromProtoMsg(message: _82.ProofOpProtoMsg): _82.ProofOp;
                    toProto(message: _82.ProofOp): Uint8Array;
                    toProtoMsg(message: _82.ProofOp): _82.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _82.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.ProofOps;
                    fromPartial(object: Partial<_82.ProofOps>): _82.ProofOps;
                    fromAmino(object: _82.ProofOpsAmino): _82.ProofOps;
                    toAmino(message: _82.ProofOps): _82.ProofOpsAmino;
                    fromAminoMsg(object: _82.ProofOpsAminoMsg): _82.ProofOps;
                    toAminoMsg(message: _82.ProofOps): _82.ProofOpsAminoMsg;
                    fromProtoMsg(message: _82.ProofOpsProtoMsg): _82.ProofOps;
                    toProto(message: _82.ProofOps): Uint8Array;
                    toProtoMsg(message: _82.ProofOps): _82.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _84.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Coin;
                fromPartial(object: Partial<_84.Coin>): _84.Coin;
                fromAmino(object: _84.CoinAmino): _84.Coin;
                toAmino(message: _84.Coin): _84.CoinAmino;
                fromAminoMsg(object: _84.CoinAminoMsg): _84.Coin;
                toAminoMsg(message: _84.Coin): _84.CoinAminoMsg;
                fromProtoMsg(message: _84.CoinProtoMsg): _84.Coin;
                toProto(message: _84.Coin): Uint8Array;
                toProtoMsg(message: _84.Coin): _84.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _84.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DecCoin;
                fromPartial(object: Partial<_84.DecCoin>): _84.DecCoin;
                fromAmino(object: _84.DecCoinAmino): _84.DecCoin;
                toAmino(message: _84.DecCoin): _84.DecCoinAmino;
                fromAminoMsg(object: _84.DecCoinAminoMsg): _84.DecCoin;
                toAminoMsg(message: _84.DecCoin): _84.DecCoinAminoMsg;
                fromProtoMsg(message: _84.DecCoinProtoMsg): _84.DecCoin;
                toProto(message: _84.DecCoin): Uint8Array;
                toProtoMsg(message: _84.DecCoin): _84.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _84.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.IntProto;
                fromPartial(object: Partial<_84.IntProto>): _84.IntProto;
                fromAmino(object: _84.IntProtoAmino): _84.IntProto;
                toAmino(message: _84.IntProto): _84.IntProtoAmino;
                fromAminoMsg(object: _84.IntProtoAminoMsg): _84.IntProto;
                toAminoMsg(message: _84.IntProto): _84.IntProtoAminoMsg;
                fromProtoMsg(message: _84.IntProtoProtoMsg): _84.IntProto;
                toProto(message: _84.IntProto): Uint8Array;
                toProtoMsg(message: _84.IntProto): _84.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _84.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DecProto;
                fromPartial(object: Partial<_84.DecProto>): _84.DecProto;
                fromAmino(object: _84.DecProtoAmino): _84.DecProto;
                toAmino(message: _84.DecProto): _84.DecProtoAmino;
                fromAminoMsg(object: _84.DecProtoAminoMsg): _84.DecProto;
                toAminoMsg(message: _84.DecProto): _84.DecProtoAminoMsg;
                fromProtoMsg(message: _84.DecProtoProtoMsg): _84.DecProto;
                toProto(message: _84.DecProto): Uint8Array;
                toProtoMsg(message: _84.DecProto): _84.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
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
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _87.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.GenesisOwners;
                fromPartial(object: Partial<_87.GenesisOwners>): _87.GenesisOwners;
                fromAmino(object: _87.GenesisOwnersAmino): _87.GenesisOwners;
                toAmino(message: _87.GenesisOwners): _87.GenesisOwnersAmino;
                fromAminoMsg(object: _87.GenesisOwnersAminoMsg): _87.GenesisOwners;
                toAminoMsg(message: _87.GenesisOwners): _87.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _87.GenesisOwnersProtoMsg): _87.GenesisOwners;
                toProto(message: _87.GenesisOwners): Uint8Array;
                toProtoMsg(message: _87.GenesisOwners): _87.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _87.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.GenesisState;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                toProto(message: _87.GenesisState): Uint8Array;
                toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _86.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Capability;
                fromPartial(object: Partial<_86.Capability>): _86.Capability;
                fromAmino(object: _86.CapabilityAmino): _86.Capability;
                toAmino(message: _86.Capability): _86.CapabilityAmino;
                fromAminoMsg(object: _86.CapabilityAminoMsg): _86.Capability;
                toAminoMsg(message: _86.Capability): _86.CapabilityAminoMsg;
                fromProtoMsg(message: _86.CapabilityProtoMsg): _86.Capability;
                toProto(message: _86.Capability): Uint8Array;
                toProtoMsg(message: _86.Capability): _86.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _86.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Owner;
                fromPartial(object: Partial<_86.Owner>): _86.Owner;
                fromAmino(object: _86.OwnerAmino): _86.Owner;
                toAmino(message: _86.Owner): _86.OwnerAmino;
                fromAminoMsg(object: _86.OwnerAminoMsg): _86.Owner;
                toAminoMsg(message: _86.Owner): _86.OwnerAminoMsg;
                fromProtoMsg(message: _86.OwnerProtoMsg): _86.Owner;
                toProto(message: _86.Owner): Uint8Array;
                toProtoMsg(message: _86.Owner): _86.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _86.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.CapabilityOwners;
                fromPartial(object: Partial<_86.CapabilityOwners>): _86.CapabilityOwners;
                fromAmino(object: _86.CapabilityOwnersAmino): _86.CapabilityOwners;
                toAmino(message: _86.CapabilityOwners): _86.CapabilityOwnersAmino;
                fromAminoMsg(object: _86.CapabilityOwnersAminoMsg): _86.CapabilityOwners;
                toAminoMsg(message: _86.CapabilityOwners): _86.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _86.CapabilityOwnersProtoMsg): _86.CapabilityOwners;
                toProto(message: _86.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _86.CapabilityOwners): _86.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
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
        const v1: {
            MsgClientImpl: typeof _364.MsgClientImpl;
            QueryClientImpl: typeof _346.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _325.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _90.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _90.MsgUpdateParams): {
                        typeUrl: string;
                        value: _90.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _90.MsgUpdateParams): {
                        typeUrl: string;
                        value: _90.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateParams) => _90.MsgUpdateParamsAmino;
                    fromAmino: (object: _90.MsgUpdateParamsAmino) => _90.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _90.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateParams;
                fromPartial(object: Partial<_90.MsgUpdateParams>): _90.MsgUpdateParams;
                fromAmino(object: _90.MsgUpdateParamsAmino): _90.MsgUpdateParams;
                toAmino(message: _90.MsgUpdateParams): _90.MsgUpdateParamsAmino;
                fromAminoMsg(object: _90.MsgUpdateParamsAminoMsg): _90.MsgUpdateParams;
                toAminoMsg(message: _90.MsgUpdateParams): _90.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateParamsProtoMsg): _90.MsgUpdateParams;
                toProto(message: _90.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateParams): _90.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_90.MsgUpdateParamsResponse>): _90.MsgUpdateParamsResponse;
                fromAmino(_: _90.MsgUpdateParamsResponseAmino): _90.MsgUpdateParamsResponse;
                toAmino(_: _90.MsgUpdateParamsResponse): _90.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateParamsResponseAminoMsg): _90.MsgUpdateParamsResponse;
                toAminoMsg(message: _90.MsgUpdateParamsResponse): _90.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateParamsResponseProtoMsg): _90.MsgUpdateParamsResponse;
                toProto(message: _90.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateParamsResponse): _90.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _89.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.QueryParamsRequest;
                fromPartial(_: Partial<_89.QueryParamsRequest>): _89.QueryParamsRequest;
                fromAmino(_: _89.QueryParamsRequestAmino): _89.QueryParamsRequest;
                toAmino(_: _89.QueryParamsRequest): _89.QueryParamsRequestAmino;
                fromAminoMsg(object: _89.QueryParamsRequestAminoMsg): _89.QueryParamsRequest;
                toAminoMsg(message: _89.QueryParamsRequest): _89.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryParamsRequestProtoMsg): _89.QueryParamsRequest;
                toProto(message: _89.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryParamsRequest): _89.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _89.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryParamsResponse;
                fromPartial(object: Partial<_89.QueryParamsResponse>): _89.QueryParamsResponse;
                fromAmino(object: _89.QueryParamsResponseAmino): _89.QueryParamsResponse;
                toAmino(message: _89.QueryParamsResponse): _89.QueryParamsResponseAmino;
                fromAminoMsg(object: _89.QueryParamsResponseAminoMsg): _89.QueryParamsResponse;
                toAminoMsg(message: _89.QueryParamsResponse): _89.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryParamsResponseProtoMsg): _89.QueryParamsResponse;
                toProto(message: _89.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryParamsResponse): _89.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
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
        const v1beta1: {
            MsgClientImpl: typeof _365.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _93.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _93.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _93.MsgVerifyInvariant;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _93.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _93.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _93.MsgVerifyInvariant;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _93.MsgVerifyInvariant) => _93.MsgVerifyInvariantAmino;
                    fromAmino: (object: _93.MsgVerifyInvariantAmino) => _93.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _93.MsgUpdateParams) => _93.MsgUpdateParamsAmino;
                    fromAmino: (object: _93.MsgUpdateParamsAmino) => _93.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _93.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgVerifyInvariant;
                fromPartial(object: Partial<_93.MsgVerifyInvariant>): _93.MsgVerifyInvariant;
                fromAmino(object: _93.MsgVerifyInvariantAmino): _93.MsgVerifyInvariant;
                toAmino(message: _93.MsgVerifyInvariant): _93.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _93.MsgVerifyInvariantAminoMsg): _93.MsgVerifyInvariant;
                toAminoMsg(message: _93.MsgVerifyInvariant): _93.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _93.MsgVerifyInvariantProtoMsg): _93.MsgVerifyInvariant;
                toProto(message: _93.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _93.MsgVerifyInvariant): _93.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _93.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_93.MsgVerifyInvariantResponse>): _93.MsgVerifyInvariantResponse;
                fromAmino(_: _93.MsgVerifyInvariantResponseAmino): _93.MsgVerifyInvariantResponse;
                toAmino(_: _93.MsgVerifyInvariantResponse): _93.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _93.MsgVerifyInvariantResponseAminoMsg): _93.MsgVerifyInvariantResponse;
                toAminoMsg(message: _93.MsgVerifyInvariantResponse): _93.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _93.MsgVerifyInvariantResponseProtoMsg): _93.MsgVerifyInvariantResponse;
                toProto(message: _93.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _93.MsgVerifyInvariantResponse): _93.MsgVerifyInvariantResponseProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _94.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.PubKey;
                fromPartial(object: Partial<_94.PubKey>): _94.PubKey;
                fromAmino(object: _94.PubKeyAmino): _94.PubKey;
                toAmino(message: _94.PubKey): _94.PubKeyAmino;
                fromAminoMsg(object: _94.PubKeyAminoMsg): _94.PubKey;
                toAminoMsg(message: _94.PubKey): _94.PubKeyAminoMsg;
                fromProtoMsg(message: _94.PubKeyProtoMsg): _94.PubKey;
                toProto(message: _94.PubKey): Uint8Array;
                toProtoMsg(message: _94.PubKey): _94.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _94.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.PrivKey;
                fromPartial(object: Partial<_94.PrivKey>): _94.PrivKey;
                fromAmino(object: _94.PrivKeyAmino): _94.PrivKey;
                toAmino(message: _94.PrivKey): _94.PrivKeyAmino;
                fromAminoMsg(object: _94.PrivKeyAminoMsg): _94.PrivKey;
                toAminoMsg(message: _94.PrivKey): _94.PrivKeyAminoMsg;
                fromProtoMsg(message: _94.PrivKeyProtoMsg): _94.PrivKey;
                toProto(message: _94.PrivKey): Uint8Array;
                toProtoMsg(message: _94.PrivKey): _94.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _95.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.BIP44Params;
                    fromPartial(object: Partial<_95.BIP44Params>): _95.BIP44Params;
                    fromAmino(object: _95.BIP44ParamsAmino): _95.BIP44Params;
                    toAmino(message: _95.BIP44Params): _95.BIP44ParamsAmino;
                    fromAminoMsg(object: _95.BIP44ParamsAminoMsg): _95.BIP44Params;
                    toAminoMsg(message: _95.BIP44Params): _95.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _95.BIP44ParamsProtoMsg): _95.BIP44Params;
                    toProto(message: _95.BIP44Params): Uint8Array;
                    toProtoMsg(message: _95.BIP44Params): _95.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _96.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.Record;
                    fromPartial(object: Partial<_96.Record>): _96.Record;
                    fromAmino(object: _96.RecordAmino): _96.Record;
                    toAmino(message: _96.Record): _96.RecordAmino;
                    fromAminoMsg(object: _96.RecordAminoMsg): _96.Record;
                    toAminoMsg(message: _96.Record): _96.RecordAminoMsg;
                    fromProtoMsg(message: _96.RecordProtoMsg): _96.Record;
                    toProto(message: _96.Record): Uint8Array;
                    toProtoMsg(message: _96.Record): _96.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _96.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.Record_Local;
                    fromPartial(object: Partial<_96.Record_Local>): _96.Record_Local;
                    fromAmino(object: _96.Record_LocalAmino): _96.Record_Local;
                    toAmino(message: _96.Record_Local): _96.Record_LocalAmino;
                    fromAminoMsg(object: _96.Record_LocalAminoMsg): _96.Record_Local;
                    toAminoMsg(message: _96.Record_Local): _96.Record_LocalAminoMsg;
                    fromProtoMsg(message: _96.Record_LocalProtoMsg): _96.Record_Local;
                    toProto(message: _96.Record_Local): Uint8Array;
                    toProtoMsg(message: _96.Record_Local): _96.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _96.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.Record_Ledger;
                    fromPartial(object: Partial<_96.Record_Ledger>): _96.Record_Ledger;
                    fromAmino(object: _96.Record_LedgerAmino): _96.Record_Ledger;
                    toAmino(message: _96.Record_Ledger): _96.Record_LedgerAmino;
                    fromAminoMsg(object: _96.Record_LedgerAminoMsg): _96.Record_Ledger;
                    toAminoMsg(message: _96.Record_Ledger): _96.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _96.Record_LedgerProtoMsg): _96.Record_Ledger;
                    toProto(message: _96.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _96.Record_Ledger): _96.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _96.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _96.Record_Multi;
                    fromPartial(_: Partial<_96.Record_Multi>): _96.Record_Multi;
                    fromAmino(_: _96.Record_MultiAmino): _96.Record_Multi;
                    toAmino(_: _96.Record_Multi): _96.Record_MultiAmino;
                    fromAminoMsg(object: _96.Record_MultiAminoMsg): _96.Record_Multi;
                    toAminoMsg(message: _96.Record_Multi): _96.Record_MultiAminoMsg;
                    fromProtoMsg(message: _96.Record_MultiProtoMsg): _96.Record_Multi;
                    toProto(message: _96.Record_Multi): Uint8Array;
                    toProtoMsg(message: _96.Record_Multi): _96.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _96.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _96.Record_Offline;
                    fromPartial(_: Partial<_96.Record_Offline>): _96.Record_Offline;
                    fromAmino(_: _96.Record_OfflineAmino): _96.Record_Offline;
                    toAmino(_: _96.Record_Offline): _96.Record_OfflineAmino;
                    fromAminoMsg(object: _96.Record_OfflineAminoMsg): _96.Record_Offline;
                    toAminoMsg(message: _96.Record_Offline): _96.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _96.Record_OfflineProtoMsg): _96.Record_Offline;
                    toProto(message: _96.Record_Offline): Uint8Array;
                    toProtoMsg(message: _96.Record_Offline): _96.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _97.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.LegacyAminoPubKey;
                fromPartial(object: Partial<_97.LegacyAminoPubKey>): _97.LegacyAminoPubKey;
                fromAmino(object: _97.LegacyAminoPubKeyAmino): _97.LegacyAminoPubKey;
                toAmino(message: _97.LegacyAminoPubKey): _97.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _97.LegacyAminoPubKeyAminoMsg): _97.LegacyAminoPubKey;
                toAminoMsg(message: _97.LegacyAminoPubKey): _97.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _97.LegacyAminoPubKeyProtoMsg): _97.LegacyAminoPubKey;
                toProto(message: _97.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _97.LegacyAminoPubKey): _97.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _98.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.PubKey;
                fromPartial(object: Partial<_98.PubKey>): _98.PubKey;
                fromAmino(object: _98.PubKeyAmino): _98.PubKey;
                toAmino(message: _98.PubKey): _98.PubKeyAmino;
                fromAminoMsg(object: _98.PubKeyAminoMsg): _98.PubKey;
                toAminoMsg(message: _98.PubKey): _98.PubKeyAminoMsg;
                fromProtoMsg(message: _98.PubKeyProtoMsg): _98.PubKey;
                toProto(message: _98.PubKey): Uint8Array;
                toProtoMsg(message: _98.PubKey): _98.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _98.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.PrivKey;
                fromPartial(object: Partial<_98.PrivKey>): _98.PrivKey;
                fromAmino(object: _98.PrivKeyAmino): _98.PrivKey;
                toAmino(message: _98.PrivKey): _98.PrivKeyAmino;
                fromAminoMsg(object: _98.PrivKeyAminoMsg): _98.PrivKey;
                toAminoMsg(message: _98.PrivKey): _98.PrivKeyAminoMsg;
                fromProtoMsg(message: _98.PrivKeyProtoMsg): _98.PrivKey;
                toProto(message: _98.PrivKey): Uint8Array;
                toProtoMsg(message: _98.PrivKey): _98.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _99.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PubKey;
                fromPartial(object: Partial<_99.PubKey>): _99.PubKey;
                fromAmino(object: _99.PubKeyAmino): _99.PubKey;
                toAmino(message: _99.PubKey): _99.PubKeyAmino;
                fromAminoMsg(object: _99.PubKeyAminoMsg): _99.PubKey;
                toAminoMsg(message: _99.PubKey): _99.PubKeyAminoMsg;
                fromProtoMsg(message: _99.PubKeyProtoMsg): _99.PubKey;
                toProto(message: _99.PubKey): Uint8Array;
                toProtoMsg(message: _99.PubKey): _99.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _99.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PrivKey;
                fromPartial(object: Partial<_99.PrivKey>): _99.PrivKey;
                fromAmino(object: _99.PrivKeyAmino): _99.PrivKey;
                toAmino(message: _99.PrivKey): _99.PrivKeyAmino;
                fromAminoMsg(object: _99.PrivKeyAminoMsg): _99.PrivKey;
                toAminoMsg(message: _99.PrivKey): _99.PrivKeyAminoMsg;
                fromProtoMsg(message: _99.PrivKeyProtoMsg): _99.PrivKey;
                toProto(message: _99.PrivKey): Uint8Array;
                toProtoMsg(message: _99.PrivKey): _99.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _100.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.Module;
                    fromPartial(object: Partial<_100.Module>): _100.Module;
                    fromAmino(object: _100.ModuleAmino): _100.Module;
                    toAmino(message: _100.Module): _100.ModuleAmino;
                    fromAminoMsg(object: _100.ModuleAminoMsg): _100.Module;
                    toAminoMsg(message: _100.Module): _100.ModuleAminoMsg;
                    fromProtoMsg(message: _100.ModuleProtoMsg): _100.Module;
                    toProto(message: _100.Module): Uint8Array;
                    toProtoMsg(message: _100.Module): _100.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _366.MsgClientImpl;
            QueryClientImpl: typeof _347.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                validatorDistributionInfo(request: _103.QueryValidatorDistributionInfoRequest): Promise<_103.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _326.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _104.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _104.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _104.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _104.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _104.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _104.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _104.MsgSetWithdrawAddress) => _104.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _104.MsgSetWithdrawAddressAmino) => _104.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _104.MsgWithdrawDelegatorReward) => _104.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _104.MsgWithdrawDelegatorRewardAmino) => _104.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _104.MsgWithdrawValidatorCommission) => _104.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _104.MsgWithdrawValidatorCommissionAmino) => _104.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _104.MsgFundCommunityPool) => _104.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _104.MsgFundCommunityPoolAmino) => _104.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateParams) => _104.MsgUpdateParamsAmino;
                    fromAmino: (object: _104.MsgUpdateParamsAmino) => _104.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCommunityPoolSpend) => _104.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _104.MsgCommunityPoolSpendAmino) => _104.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _104.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_104.MsgSetWithdrawAddress>): _104.MsgSetWithdrawAddress;
                fromAmino(object: _104.MsgSetWithdrawAddressAmino): _104.MsgSetWithdrawAddress;
                toAmino(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _104.MsgSetWithdrawAddressAminoMsg): _104.MsgSetWithdrawAddress;
                toAminoMsg(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _104.MsgSetWithdrawAddressProtoMsg): _104.MsgSetWithdrawAddress;
                toProto(message: _104.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _104.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_104.MsgSetWithdrawAddressResponse>): _104.MsgSetWithdrawAddressResponse;
                fromAmino(_: _104.MsgSetWithdrawAddressResponseAmino): _104.MsgSetWithdrawAddressResponse;
                toAmino(_: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _104.MsgSetWithdrawAddressResponseAminoMsg): _104.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _104.MsgSetWithdrawAddressResponseProtoMsg): _104.MsgSetWithdrawAddressResponse;
                toProto(message: _104.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_104.MsgWithdrawDelegatorReward>): _104.MsgWithdrawDelegatorReward;
                fromAmino(object: _104.MsgWithdrawDelegatorRewardAmino): _104.MsgWithdrawDelegatorReward;
                toAmino(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _104.MsgWithdrawDelegatorRewardAminoMsg): _104.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawDelegatorRewardProtoMsg): _104.MsgWithdrawDelegatorReward;
                toProto(message: _104.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_104.MsgWithdrawDelegatorRewardResponse>): _104.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _104.MsgWithdrawDelegatorRewardResponseAmino): _104.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _104.MsgWithdrawDelegatorRewardResponseAminoMsg): _104.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawDelegatorRewardResponseProtoMsg): _104.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _104.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_104.MsgWithdrawValidatorCommission>): _104.MsgWithdrawValidatorCommission;
                fromAmino(object: _104.MsgWithdrawValidatorCommissionAmino): _104.MsgWithdrawValidatorCommission;
                toAmino(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _104.MsgWithdrawValidatorCommissionAminoMsg): _104.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawValidatorCommissionProtoMsg): _104.MsgWithdrawValidatorCommission;
                toProto(message: _104.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_104.MsgWithdrawValidatorCommissionResponse>): _104.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _104.MsgWithdrawValidatorCommissionResponseAmino): _104.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _104.MsgWithdrawValidatorCommissionResponseAminoMsg): _104.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawValidatorCommissionResponseProtoMsg): _104.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _104.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _104.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgFundCommunityPool;
                fromPartial(object: Partial<_104.MsgFundCommunityPool>): _104.MsgFundCommunityPool;
                fromAmino(object: _104.MsgFundCommunityPoolAmino): _104.MsgFundCommunityPool;
                toAmino(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _104.MsgFundCommunityPoolAminoMsg): _104.MsgFundCommunityPool;
                toAminoMsg(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _104.MsgFundCommunityPoolProtoMsg): _104.MsgFundCommunityPool;
                toProto(message: _104.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _104.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_104.MsgFundCommunityPoolResponse>): _104.MsgFundCommunityPoolResponse;
                fromAmino(_: _104.MsgFundCommunityPoolResponseAmino): _104.MsgFundCommunityPoolResponse;
                toAmino(_: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _104.MsgFundCommunityPoolResponseAminoMsg): _104.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _104.MsgFundCommunityPoolResponseProtoMsg): _104.MsgFundCommunityPoolResponse;
                toProto(message: _104.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _104.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUpdateParams;
                fromPartial(object: Partial<_104.MsgUpdateParams>): _104.MsgUpdateParams;
                fromAmino(object: _104.MsgUpdateParamsAmino): _104.MsgUpdateParams;
                toAmino(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsAminoMsg): _104.MsgUpdateParams;
                toAminoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsProtoMsg): _104.MsgUpdateParams;
                toProto(message: _104.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_104.MsgUpdateParamsResponse>): _104.MsgUpdateParamsResponse;
                fromAmino(_: _104.MsgUpdateParamsResponseAmino): _104.MsgUpdateParamsResponse;
                toAmino(_: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsResponseAminoMsg): _104.MsgUpdateParamsResponse;
                toAminoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsResponseProtoMsg): _104.MsgUpdateParamsResponse;
                toProto(message: _104.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _104.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_104.MsgCommunityPoolSpend>): _104.MsgCommunityPoolSpend;
                fromAmino(object: _104.MsgCommunityPoolSpendAmino): _104.MsgCommunityPoolSpend;
                toAmino(message: _104.MsgCommunityPoolSpend): _104.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _104.MsgCommunityPoolSpendAminoMsg): _104.MsgCommunityPoolSpend;
                toAminoMsg(message: _104.MsgCommunityPoolSpend): _104.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _104.MsgCommunityPoolSpendProtoMsg): _104.MsgCommunityPoolSpend;
                toProto(message: _104.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _104.MsgCommunityPoolSpend): _104.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _104.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_104.MsgCommunityPoolSpendResponse>): _104.MsgCommunityPoolSpendResponse;
                fromAmino(_: _104.MsgCommunityPoolSpendResponseAmino): _104.MsgCommunityPoolSpendResponse;
                toAmino(_: _104.MsgCommunityPoolSpendResponse): _104.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _104.MsgCommunityPoolSpendResponseAminoMsg): _104.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _104.MsgCommunityPoolSpendResponse): _104.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCommunityPoolSpendResponseProtoMsg): _104.MsgCommunityPoolSpendResponse;
                toProto(message: _104.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCommunityPoolSpendResponse): _104.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryParamsRequest;
                fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(_: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(_: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_103.QueryValidatorDistributionInfoRequest>): _103.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _103.QueryValidatorDistributionInfoRequestAmino): _103.QueryValidatorDistributionInfoRequest;
                toAmino(message: _103.QueryValidatorDistributionInfoRequest): _103.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorDistributionInfoRequestAminoMsg): _103.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _103.QueryValidatorDistributionInfoRequest): _103.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorDistributionInfoRequestProtoMsg): _103.QueryValidatorDistributionInfoRequest;
                toProto(message: _103.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorDistributionInfoRequest): _103.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_103.QueryValidatorDistributionInfoResponse>): _103.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _103.QueryValidatorDistributionInfoResponseAmino): _103.QueryValidatorDistributionInfoResponse;
                toAmino(message: _103.QueryValidatorDistributionInfoResponse): _103.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorDistributionInfoResponseAminoMsg): _103.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _103.QueryValidatorDistributionInfoResponse): _103.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorDistributionInfoResponseProtoMsg): _103.QueryValidatorDistributionInfoResponse;
                toProto(message: _103.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorDistributionInfoResponse): _103.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsRequest>): _103.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _103.QueryValidatorOutstandingRewardsRequestAmino): _103.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorOutstandingRewardsRequestAminoMsg): _103.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorOutstandingRewardsRequestProtoMsg): _103.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _103.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsResponse>): _103.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _103.QueryValidatorOutstandingRewardsResponseAmino): _103.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorOutstandingRewardsResponseAminoMsg): _103.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorOutstandingRewardsResponseProtoMsg): _103.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _103.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_103.QueryValidatorCommissionRequest>): _103.QueryValidatorCommissionRequest;
                fromAmino(object: _103.QueryValidatorCommissionRequestAmino): _103.QueryValidatorCommissionRequest;
                toAmino(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorCommissionRequestAminoMsg): _103.QueryValidatorCommissionRequest;
                toAminoMsg(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorCommissionRequestProtoMsg): _103.QueryValidatorCommissionRequest;
                toProto(message: _103.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_103.QueryValidatorCommissionResponse>): _103.QueryValidatorCommissionResponse;
                fromAmino(object: _103.QueryValidatorCommissionResponseAmino): _103.QueryValidatorCommissionResponse;
                toAmino(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorCommissionResponseAminoMsg): _103.QueryValidatorCommissionResponse;
                toAminoMsg(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorCommissionResponseProtoMsg): _103.QueryValidatorCommissionResponse;
                toProto(message: _103.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_103.QueryValidatorSlashesRequest>): _103.QueryValidatorSlashesRequest;
                fromAmino(object: _103.QueryValidatorSlashesRequestAmino): _103.QueryValidatorSlashesRequest;
                toAmino(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorSlashesRequestAminoMsg): _103.QueryValidatorSlashesRequest;
                toAminoMsg(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorSlashesRequestProtoMsg): _103.QueryValidatorSlashesRequest;
                toProto(message: _103.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_103.QueryValidatorSlashesResponse>): _103.QueryValidatorSlashesResponse;
                fromAmino(object: _103.QueryValidatorSlashesResponseAmino): _103.QueryValidatorSlashesResponse;
                toAmino(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorSlashesResponseAminoMsg): _103.QueryValidatorSlashesResponse;
                toAminoMsg(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorSlashesResponseProtoMsg): _103.QueryValidatorSlashesResponse;
                toProto(message: _103.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationRewardsRequest>): _103.QueryDelegationRewardsRequest;
                fromAmino(object: _103.QueryDelegationRewardsRequestAmino): _103.QueryDelegationRewardsRequest;
                toAmino(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegationRewardsRequestAminoMsg): _103.QueryDelegationRewardsRequest;
                toAminoMsg(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationRewardsRequestProtoMsg): _103.QueryDelegationRewardsRequest;
                toProto(message: _103.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationRewardsResponse>): _103.QueryDelegationRewardsResponse;
                fromAmino(object: _103.QueryDelegationRewardsResponseAmino): _103.QueryDelegationRewardsResponse;
                toAmino(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegationRewardsResponseAminoMsg): _103.QueryDelegationRewardsResponse;
                toAminoMsg(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationRewardsResponseProtoMsg): _103.QueryDelegationRewardsResponse;
                toProto(message: _103.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsRequest>): _103.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _103.QueryDelegationTotalRewardsRequestAmino): _103.QueryDelegationTotalRewardsRequest;
                toAmino(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegationTotalRewardsRequestAminoMsg): _103.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationTotalRewardsRequestProtoMsg): _103.QueryDelegationTotalRewardsRequest;
                toProto(message: _103.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsResponse>): _103.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _103.QueryDelegationTotalRewardsResponseAmino): _103.QueryDelegationTotalRewardsResponse;
                toAmino(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegationTotalRewardsResponseAminoMsg): _103.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationTotalRewardsResponseProtoMsg): _103.QueryDelegationTotalRewardsResponse;
                toProto(message: _103.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsRequest>): _103.QueryDelegatorValidatorsRequest;
                fromAmino(object: _103.QueryDelegatorValidatorsRequestAmino): _103.QueryDelegatorValidatorsRequest;
                toAmino(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegatorValidatorsRequestAminoMsg): _103.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorValidatorsRequestProtoMsg): _103.QueryDelegatorValidatorsRequest;
                toProto(message: _103.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsResponse>): _103.QueryDelegatorValidatorsResponse;
                fromAmino(object: _103.QueryDelegatorValidatorsResponseAmino): _103.QueryDelegatorValidatorsResponse;
                toAmino(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegatorValidatorsResponseAminoMsg): _103.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorValidatorsResponseProtoMsg): _103.QueryDelegatorValidatorsResponse;
                toProto(message: _103.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressRequest>): _103.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _103.QueryDelegatorWithdrawAddressRequestAmino): _103.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _103.QueryDelegatorWithdrawAddressRequestAminoMsg): _103.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorWithdrawAddressRequestProtoMsg): _103.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _103.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressResponse>): _103.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _103.QueryDelegatorWithdrawAddressResponseAmino): _103.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _103.QueryDelegatorWithdrawAddressResponseAminoMsg): _103.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorWithdrawAddressResponseProtoMsg): _103.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _103.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _103.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_103.QueryCommunityPoolRequest>): _103.QueryCommunityPoolRequest;
                fromAmino(_: _103.QueryCommunityPoolRequestAmino): _103.QueryCommunityPoolRequest;
                toAmino(_: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _103.QueryCommunityPoolRequestAminoMsg): _103.QueryCommunityPoolRequest;
                toAminoMsg(message: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _103.QueryCommunityPoolRequestProtoMsg): _103.QueryCommunityPoolRequest;
                toProto(message: _103.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _103.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_103.QueryCommunityPoolResponse>): _103.QueryCommunityPoolResponse;
                fromAmino(object: _103.QueryCommunityPoolResponseAmino): _103.QueryCommunityPoolResponse;
                toAmino(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _103.QueryCommunityPoolResponseAminoMsg): _103.QueryCommunityPoolResponse;
                toAminoMsg(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _103.QueryCommunityPoolResponseProtoMsg): _103.QueryCommunityPoolResponse;
                toProto(message: _103.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _102.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_102.DelegatorWithdrawInfo>): _102.DelegatorWithdrawInfo;
                fromAmino(object: _102.DelegatorWithdrawInfoAmino): _102.DelegatorWithdrawInfo;
                toAmino(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _102.DelegatorWithdrawInfoAminoMsg): _102.DelegatorWithdrawInfo;
                toAminoMsg(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _102.DelegatorWithdrawInfoProtoMsg): _102.DelegatorWithdrawInfo;
                toProto(message: _102.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorOutstandingRewardsRecord>): _102.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _102.ValidatorOutstandingRewardsRecordAmino): _102.ValidatorOutstandingRewardsRecord;
                toAmino(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorOutstandingRewardsRecordAminoMsg): _102.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorOutstandingRewardsRecordProtoMsg): _102.ValidatorOutstandingRewardsRecord;
                toProto(message: _102.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_102.ValidatorAccumulatedCommissionRecord>): _102.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _102.ValidatorAccumulatedCommissionRecordAmino): _102.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _102.ValidatorAccumulatedCommissionRecordAminoMsg): _102.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorAccumulatedCommissionRecordProtoMsg): _102.ValidatorAccumulatedCommissionRecord;
                toProto(message: _102.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorHistoricalRewardsRecord>): _102.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _102.ValidatorHistoricalRewardsRecordAmino): _102.ValidatorHistoricalRewardsRecord;
                toAmino(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorHistoricalRewardsRecordAminoMsg): _102.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorHistoricalRewardsRecordProtoMsg): _102.ValidatorHistoricalRewardsRecord;
                toProto(message: _102.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorCurrentRewardsRecord>): _102.ValidatorCurrentRewardsRecord;
                fromAmino(object: _102.ValidatorCurrentRewardsRecordAmino): _102.ValidatorCurrentRewardsRecord;
                toAmino(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorCurrentRewardsRecordAminoMsg): _102.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorCurrentRewardsRecordProtoMsg): _102.ValidatorCurrentRewardsRecord;
                toProto(message: _102.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _102.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_102.DelegatorStartingInfoRecord>): _102.DelegatorStartingInfoRecord;
                fromAmino(object: _102.DelegatorStartingInfoRecordAmino): _102.DelegatorStartingInfoRecord;
                toAmino(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _102.DelegatorStartingInfoRecordAminoMsg): _102.DelegatorStartingInfoRecord;
                toAminoMsg(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _102.DelegatorStartingInfoRecordProtoMsg): _102.DelegatorStartingInfoRecord;
                toProto(message: _102.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_102.ValidatorSlashEventRecord>): _102.ValidatorSlashEventRecord;
                fromAmino(object: _102.ValidatorSlashEventRecordAmino): _102.ValidatorSlashEventRecord;
                toAmino(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _102.ValidatorSlashEventRecordAminoMsg): _102.ValidatorSlashEventRecord;
                toAminoMsg(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorSlashEventRecordProtoMsg): _102.ValidatorSlashEventRecord;
                toProto(message: _102.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
                fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                toProto(message: _102.GenesisState): Uint8Array;
                toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _101.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Params;
                fromPartial(object: Partial<_101.Params>): _101.Params;
                fromAmino(object: _101.ParamsAmino): _101.Params;
                toAmino(message: _101.Params): _101.ParamsAmino;
                fromAminoMsg(object: _101.ParamsAminoMsg): _101.Params;
                toAminoMsg(message: _101.Params): _101.ParamsAminoMsg;
                fromProtoMsg(message: _101.ParamsProtoMsg): _101.Params;
                toProto(message: _101.Params): Uint8Array;
                toProtoMsg(message: _101.Params): _101.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_101.ValidatorHistoricalRewards>): _101.ValidatorHistoricalRewards;
                fromAmino(object: _101.ValidatorHistoricalRewardsAmino): _101.ValidatorHistoricalRewards;
                toAmino(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _101.ValidatorHistoricalRewardsAminoMsg): _101.ValidatorHistoricalRewards;
                toAminoMsg(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorHistoricalRewardsProtoMsg): _101.ValidatorHistoricalRewards;
                toProto(message: _101.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorCurrentRewards;
                fromPartial(object: Partial<_101.ValidatorCurrentRewards>): _101.ValidatorCurrentRewards;
                fromAmino(object: _101.ValidatorCurrentRewardsAmino): _101.ValidatorCurrentRewards;
                toAmino(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _101.ValidatorCurrentRewardsAminoMsg): _101.ValidatorCurrentRewards;
                toAminoMsg(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorCurrentRewardsProtoMsg): _101.ValidatorCurrentRewards;
                toProto(message: _101.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _101.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_101.ValidatorAccumulatedCommission>): _101.ValidatorAccumulatedCommission;
                fromAmino(object: _101.ValidatorAccumulatedCommissionAmino): _101.ValidatorAccumulatedCommission;
                toAmino(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _101.ValidatorAccumulatedCommissionAminoMsg): _101.ValidatorAccumulatedCommission;
                toAminoMsg(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _101.ValidatorAccumulatedCommissionProtoMsg): _101.ValidatorAccumulatedCommission;
                toProto(message: _101.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_101.ValidatorOutstandingRewards>): _101.ValidatorOutstandingRewards;
                fromAmino(object: _101.ValidatorOutstandingRewardsAmino): _101.ValidatorOutstandingRewards;
                toAmino(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _101.ValidatorOutstandingRewardsAminoMsg): _101.ValidatorOutstandingRewards;
                toAminoMsg(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorOutstandingRewardsProtoMsg): _101.ValidatorOutstandingRewards;
                toProto(message: _101.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _101.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSlashEvent;
                fromPartial(object: Partial<_101.ValidatorSlashEvent>): _101.ValidatorSlashEvent;
                fromAmino(object: _101.ValidatorSlashEventAmino): _101.ValidatorSlashEvent;
                toAmino(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventAmino;
                fromAminoMsg(object: _101.ValidatorSlashEventAminoMsg): _101.ValidatorSlashEvent;
                toAminoMsg(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _101.ValidatorSlashEventProtoMsg): _101.ValidatorSlashEvent;
                toProto(message: _101.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _101.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSlashEvents;
                fromPartial(object: Partial<_101.ValidatorSlashEvents>): _101.ValidatorSlashEvents;
                fromAmino(object: _101.ValidatorSlashEventsAmino): _101.ValidatorSlashEvents;
                toAmino(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _101.ValidatorSlashEventsAminoMsg): _101.ValidatorSlashEvents;
                toAminoMsg(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _101.ValidatorSlashEventsProtoMsg): _101.ValidatorSlashEvents;
                toProto(message: _101.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _101.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.FeePool;
                fromPartial(object: Partial<_101.FeePool>): _101.FeePool;
                fromAmino(object: _101.FeePoolAmino): _101.FeePool;
                toAmino(message: _101.FeePool): _101.FeePoolAmino;
                fromAminoMsg(object: _101.FeePoolAminoMsg): _101.FeePool;
                toAminoMsg(message: _101.FeePool): _101.FeePoolAminoMsg;
                fromProtoMsg(message: _101.FeePoolProtoMsg): _101.FeePool;
                toProto(message: _101.FeePool): Uint8Array;
                toProtoMsg(message: _101.FeePool): _101.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _101.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposal>): _101.CommunityPoolSpendProposal;
                fromAmino(object: _101.CommunityPoolSpendProposalAmino): _101.CommunityPoolSpendProposal;
                toAmino(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _101.CommunityPoolSpendProposalAminoMsg): _101.CommunityPoolSpendProposal;
                toAminoMsg(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _101.CommunityPoolSpendProposalProtoMsg): _101.CommunityPoolSpendProposal;
                toProto(message: _101.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _101.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegatorStartingInfo;
                fromPartial(object: Partial<_101.DelegatorStartingInfo>): _101.DelegatorStartingInfo;
                fromAmino(object: _101.DelegatorStartingInfoAmino): _101.DelegatorStartingInfo;
                toAmino(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _101.DelegatorStartingInfoAminoMsg): _101.DelegatorStartingInfo;
                toAminoMsg(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _101.DelegatorStartingInfoProtoMsg): _101.DelegatorStartingInfo;
                toProto(message: _101.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _101.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegationDelegatorReward;
                fromPartial(object: Partial<_101.DelegationDelegatorReward>): _101.DelegationDelegatorReward;
                fromAmino(object: _101.DelegationDelegatorRewardAmino): _101.DelegationDelegatorReward;
                toAmino(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _101.DelegationDelegatorRewardAminoMsg): _101.DelegationDelegatorReward;
                toAminoMsg(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _101.DelegationDelegatorRewardProtoMsg): _101.DelegationDelegatorReward;
                toProto(message: _101.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _101.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposalWithDeposit>): _101.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _101.CommunityPoolSpendProposalWithDepositAmino): _101.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _101.CommunityPoolSpendProposalWithDepositAminoMsg): _101.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _101.CommunityPoolSpendProposalWithDepositProtoMsg): _101.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _101.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _105.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.Module;
                    fromPartial(_: Partial<_105.Module>): _105.Module;
                    fromAmino(_: _105.ModuleAmino): _105.Module;
                    toAmino(_: _105.Module): _105.ModuleAmino;
                    fromAminoMsg(object: _105.ModuleAminoMsg): _105.Module;
                    toAminoMsg(message: _105.Module): _105.ModuleAminoMsg;
                    fromProtoMsg(message: _105.ModuleProtoMsg): _105.Module;
                    toProto(message: _105.Module): Uint8Array;
                    toProtoMsg(message: _105.Module): _105.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _367.MsgClientImpl;
            QueryClientImpl: typeof _348.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _108.QueryEvidenceRequest): Promise<_108.QueryEvidenceResponse>;
                allEvidence(request?: _108.QueryAllEvidenceRequest): Promise<_108.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _327.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _109.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _109.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _109.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _109.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _109.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _109.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _109.MsgSubmitEvidence) => _109.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _109.MsgSubmitEvidenceAmino) => _109.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _109.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgSubmitEvidence;
                fromPartial(object: Partial<_109.MsgSubmitEvidence>): _109.MsgSubmitEvidence;
                fromAmino(object: _109.MsgSubmitEvidenceAmino): _109.MsgSubmitEvidence;
                toAmino(message: _109.MsgSubmitEvidence): _109.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _109.MsgSubmitEvidenceAminoMsg): _109.MsgSubmitEvidence;
                toAminoMsg(message: _109.MsgSubmitEvidence): _109.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _109.MsgSubmitEvidenceProtoMsg): _109.MsgSubmitEvidence;
                toProto(message: _109.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _109.MsgSubmitEvidence): _109.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _109.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_109.MsgSubmitEvidenceResponse>): _109.MsgSubmitEvidenceResponse;
                fromAmino(object: _109.MsgSubmitEvidenceResponseAmino): _109.MsgSubmitEvidenceResponse;
                toAmino(message: _109.MsgSubmitEvidenceResponse): _109.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _109.MsgSubmitEvidenceResponseAminoMsg): _109.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _109.MsgSubmitEvidenceResponse): _109.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _109.MsgSubmitEvidenceResponseProtoMsg): _109.MsgSubmitEvidenceResponse;
                toProto(message: _109.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _109.MsgSubmitEvidenceResponse): _109.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _108.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryEvidenceRequest;
                fromPartial(object: Partial<_108.QueryEvidenceRequest>): _108.QueryEvidenceRequest;
                fromAmino(object: _108.QueryEvidenceRequestAmino): _108.QueryEvidenceRequest;
                toAmino(message: _108.QueryEvidenceRequest): _108.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _108.QueryEvidenceRequestAminoMsg): _108.QueryEvidenceRequest;
                toAminoMsg(message: _108.QueryEvidenceRequest): _108.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _108.QueryEvidenceRequestProtoMsg): _108.QueryEvidenceRequest;
                toProto(message: _108.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _108.QueryEvidenceRequest): _108.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _108.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryEvidenceResponse;
                fromPartial(object: Partial<_108.QueryEvidenceResponse>): _108.QueryEvidenceResponse;
                fromAmino(object: _108.QueryEvidenceResponseAmino): _108.QueryEvidenceResponse;
                toAmino(message: _108.QueryEvidenceResponse): _108.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _108.QueryEvidenceResponseAminoMsg): _108.QueryEvidenceResponse;
                toAminoMsg(message: _108.QueryEvidenceResponse): _108.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _108.QueryEvidenceResponseProtoMsg): _108.QueryEvidenceResponse;
                toProto(message: _108.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _108.QueryEvidenceResponse): _108.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _108.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_108.QueryAllEvidenceRequest>): _108.QueryAllEvidenceRequest;
                fromAmino(object: _108.QueryAllEvidenceRequestAmino): _108.QueryAllEvidenceRequest;
                toAmino(message: _108.QueryAllEvidenceRequest): _108.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _108.QueryAllEvidenceRequestAminoMsg): _108.QueryAllEvidenceRequest;
                toAminoMsg(message: _108.QueryAllEvidenceRequest): _108.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAllEvidenceRequestProtoMsg): _108.QueryAllEvidenceRequest;
                toProto(message: _108.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAllEvidenceRequest): _108.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _108.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_108.QueryAllEvidenceResponse>): _108.QueryAllEvidenceResponse;
                fromAmino(object: _108.QueryAllEvidenceResponseAmino): _108.QueryAllEvidenceResponse;
                toAmino(message: _108.QueryAllEvidenceResponse): _108.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _108.QueryAllEvidenceResponseAminoMsg): _108.QueryAllEvidenceResponse;
                toAminoMsg(message: _108.QueryAllEvidenceResponse): _108.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAllEvidenceResponseProtoMsg): _108.QueryAllEvidenceResponse;
                toProto(message: _108.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAllEvidenceResponse): _108.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                toProto(message: _107.GenesisState): Uint8Array;
                toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _106.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Equivocation;
                fromPartial(object: Partial<_106.Equivocation>): _106.Equivocation;
                fromAmino(object: _106.EquivocationAmino): _106.Equivocation;
                toAmino(message: _106.Equivocation): _106.EquivocationAmino;
                fromAminoMsg(object: _106.EquivocationAminoMsg): _106.Equivocation;
                toAminoMsg(message: _106.Equivocation): _106.EquivocationAminoMsg;
                fromProtoMsg(message: _106.EquivocationProtoMsg): _106.Equivocation;
                toProto(message: _106.Equivocation): Uint8Array;
                toProtoMsg(message: _106.Equivocation): _106.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _110.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _110.Module;
                    fromPartial(_: Partial<_110.Module>): _110.Module;
                    fromAmino(_: _110.ModuleAmino): _110.Module;
                    toAmino(_: _110.Module): _110.ModuleAmino;
                    fromAminoMsg(object: _110.ModuleAminoMsg): _110.Module;
                    toAminoMsg(message: _110.Module): _110.ModuleAminoMsg;
                    fromProtoMsg(message: _110.ModuleProtoMsg): _110.Module;
                    toProto(message: _110.Module): Uint8Array;
                    toProtoMsg(message: _110.Module): _110.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _368.MsgClientImpl;
            QueryClientImpl: typeof _349.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _328.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _114.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _114.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _114.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _114.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _114.MsgGrantAllowance) => _114.MsgGrantAllowanceAmino;
                    fromAmino: (object: _114.MsgGrantAllowanceAmino) => _114.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _114.MsgRevokeAllowance) => _114.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _114.MsgRevokeAllowanceAmino) => _114.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _114.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgGrantAllowance;
                fromPartial(object: Partial<_114.MsgGrantAllowance>): _114.MsgGrantAllowance;
                fromAmino(object: _114.MsgGrantAllowanceAmino): _114.MsgGrantAllowance;
                toAmino(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _114.MsgGrantAllowanceAminoMsg): _114.MsgGrantAllowance;
                toAminoMsg(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _114.MsgGrantAllowanceProtoMsg): _114.MsgGrantAllowance;
                toProto(message: _114.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _114.MsgGrantAllowance): _114.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _114.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_114.MsgGrantAllowanceResponse>): _114.MsgGrantAllowanceResponse;
                fromAmino(_: _114.MsgGrantAllowanceResponseAmino): _114.MsgGrantAllowanceResponse;
                toAmino(_: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _114.MsgGrantAllowanceResponseAminoMsg): _114.MsgGrantAllowanceResponse;
                toAminoMsg(message: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _114.MsgGrantAllowanceResponseProtoMsg): _114.MsgGrantAllowanceResponse;
                toProto(message: _114.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _114.MsgGrantAllowanceResponse): _114.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _114.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgRevokeAllowance;
                fromPartial(object: Partial<_114.MsgRevokeAllowance>): _114.MsgRevokeAllowance;
                fromAmino(object: _114.MsgRevokeAllowanceAmino): _114.MsgRevokeAllowance;
                toAmino(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _114.MsgRevokeAllowanceAminoMsg): _114.MsgRevokeAllowance;
                toAminoMsg(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _114.MsgRevokeAllowanceProtoMsg): _114.MsgRevokeAllowance;
                toProto(message: _114.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _114.MsgRevokeAllowance): _114.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _114.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_114.MsgRevokeAllowanceResponse>): _114.MsgRevokeAllowanceResponse;
                fromAmino(_: _114.MsgRevokeAllowanceResponseAmino): _114.MsgRevokeAllowanceResponse;
                toAmino(_: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _114.MsgRevokeAllowanceResponseAminoMsg): _114.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _114.MsgRevokeAllowanceResponseProtoMsg): _114.MsgRevokeAllowanceResponse;
                toProto(message: _114.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _114.MsgRevokeAllowanceResponse): _114.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _111.BasicAllowance | _111.PeriodicAllowance | _111.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowanceRequest;
                fromPartial(object: Partial<_113.QueryAllowanceRequest>): _113.QueryAllowanceRequest;
                fromAmino(object: _113.QueryAllowanceRequestAmino): _113.QueryAllowanceRequest;
                toAmino(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _113.QueryAllowanceRequestAminoMsg): _113.QueryAllowanceRequest;
                toAminoMsg(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowanceRequestProtoMsg): _113.QueryAllowanceRequest;
                toProto(message: _113.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowanceRequest): _113.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowanceResponse;
                fromPartial(object: Partial<_113.QueryAllowanceResponse>): _113.QueryAllowanceResponse;
                fromAmino(object: _113.QueryAllowanceResponseAmino): _113.QueryAllowanceResponse;
                toAmino(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _113.QueryAllowanceResponseAminoMsg): _113.QueryAllowanceResponse;
                toAminoMsg(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowanceResponseProtoMsg): _113.QueryAllowanceResponse;
                toProto(message: _113.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowanceResponse): _113.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesRequest;
                fromPartial(object: Partial<_113.QueryAllowancesRequest>): _113.QueryAllowancesRequest;
                fromAmino(object: _113.QueryAllowancesRequestAmino): _113.QueryAllowancesRequest;
                toAmino(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _113.QueryAllowancesRequestAminoMsg): _113.QueryAllowancesRequest;
                toAminoMsg(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesRequestProtoMsg): _113.QueryAllowancesRequest;
                toProto(message: _113.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesRequest): _113.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesResponse;
                fromPartial(object: Partial<_113.QueryAllowancesResponse>): _113.QueryAllowancesResponse;
                fromAmino(object: _113.QueryAllowancesResponseAmino): _113.QueryAllowancesResponse;
                toAmino(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _113.QueryAllowancesResponseAminoMsg): _113.QueryAllowancesResponse;
                toAminoMsg(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesResponseProtoMsg): _113.QueryAllowancesResponse;
                toProto(message: _113.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesResponse): _113.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterRequest>): _113.QueryAllowancesByGranterRequest;
                fromAmino(object: _113.QueryAllowancesByGranterRequestAmino): _113.QueryAllowancesByGranterRequest;
                toAmino(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _113.QueryAllowancesByGranterRequestAminoMsg): _113.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesByGranterRequestProtoMsg): _113.QueryAllowancesByGranterRequest;
                toProto(message: _113.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesByGranterRequest): _113.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _113.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_113.QueryAllowancesByGranterResponse>): _113.QueryAllowancesByGranterResponse;
                fromAmino(object: _113.QueryAllowancesByGranterResponseAmino): _113.QueryAllowancesByGranterResponse;
                toAmino(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _113.QueryAllowancesByGranterResponseAminoMsg): _113.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAllowancesByGranterResponseProtoMsg): _113.QueryAllowancesByGranterResponse;
                toProto(message: _113.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAllowancesByGranterResponse): _113.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _111.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.BasicAllowance;
                fromPartial(object: Partial<_111.BasicAllowance>): _111.BasicAllowance;
                fromAmino(object: _111.BasicAllowanceAmino): _111.BasicAllowance;
                toAmino(message: _111.BasicAllowance): _111.BasicAllowanceAmino;
                fromAminoMsg(object: _111.BasicAllowanceAminoMsg): _111.BasicAllowance;
                toAminoMsg(message: _111.BasicAllowance): _111.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _111.BasicAllowanceProtoMsg): _111.BasicAllowance;
                toProto(message: _111.BasicAllowance): Uint8Array;
                toProtoMsg(message: _111.BasicAllowance): _111.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _111.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.PeriodicAllowance;
                fromPartial(object: Partial<_111.PeriodicAllowance>): _111.PeriodicAllowance;
                fromAmino(object: _111.PeriodicAllowanceAmino): _111.PeriodicAllowance;
                toAmino(message: _111.PeriodicAllowance): _111.PeriodicAllowanceAmino;
                fromAminoMsg(object: _111.PeriodicAllowanceAminoMsg): _111.PeriodicAllowance;
                toAminoMsg(message: _111.PeriodicAllowance): _111.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _111.PeriodicAllowanceProtoMsg): _111.PeriodicAllowance;
                toProto(message: _111.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _111.PeriodicAllowance): _111.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _111.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.AllowedMsgAllowance;
                fromPartial(object: Partial<_111.AllowedMsgAllowance>): _111.AllowedMsgAllowance;
                fromAmino(object: _111.AllowedMsgAllowanceAmino): _111.AllowedMsgAllowance;
                toAmino(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _111.AllowedMsgAllowanceAminoMsg): _111.AllowedMsgAllowance;
                toAminoMsg(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _111.AllowedMsgAllowanceProtoMsg): _111.AllowedMsgAllowance;
                toProto(message: _111.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _111.AllowedMsgAllowance): _111.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _111.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Grant;
                fromPartial(object: Partial<_111.Grant>): _111.Grant;
                fromAmino(object: _111.GrantAmino): _111.Grant;
                toAmino(message: _111.Grant): _111.GrantAmino;
                fromAminoMsg(object: _111.GrantAminoMsg): _111.Grant;
                toAminoMsg(message: _111.Grant): _111.GrantAminoMsg;
                fromProtoMsg(message: _111.GrantProtoMsg): _111.Grant;
                toProto(message: _111.Grant): Uint8Array;
                toProtoMsg(message: _111.Grant): _111.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _115.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _115.Module;
                    fromPartial(_: Partial<_115.Module>): _115.Module;
                    fromAmino(_: _115.ModuleAmino): _115.Module;
                    toAmino(_: _115.Module): _115.ModuleAmino;
                    fromAminoMsg(object: _115.ModuleAminoMsg): _115.Module;
                    toAminoMsg(message: _115.Module): _115.ModuleAminoMsg;
                    fromProtoMsg(message: _115.ModuleProtoMsg): _115.Module;
                    toProto(message: _115.Module): Uint8Array;
                    toProtoMsg(message: _115.Module): _115.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _117.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.Module;
                    fromPartial(object: Partial<_117.Module>): _117.Module;
                    fromAmino(object: _117.ModuleAmino): _117.Module;
                    toAmino(message: _117.Module): _117.ModuleAmino;
                    fromAminoMsg(object: _117.ModuleAminoMsg): _117.Module;
                    toAminoMsg(message: _117.Module): _117.ModuleAminoMsg;
                    fromProtoMsg(message: _117.ModuleProtoMsg): _117.Module;
                    toProto(message: _117.Module): Uint8Array;
                    toProtoMsg(message: _117.Module): _117.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _369.MsgClientImpl;
            QueryClientImpl: typeof _350.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _120.QueryProposalRequest): Promise<_120.QueryProposalResponse>;
                proposals(request: _120.QueryProposalsRequest): Promise<_120.QueryProposalsResponse>;
                vote(request: _120.QueryVoteRequest): Promise<_120.QueryVoteResponse>;
                votes(request: _120.QueryVotesRequest): Promise<_120.QueryVotesResponse>;
                params(request: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                deposit(request: _120.QueryDepositRequest): Promise<_120.QueryDepositResponse>;
                deposits(request: _120.QueryDepositsRequest): Promise<_120.QueryDepositsResponse>;
                tallyResult(request: _120.QueryTallyResultRequest): Promise<_120.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _329.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _121.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _121.MsgExecLegacyContent;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: _121.MsgVote;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _121.MsgVoteWeighted;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: _121.MsgDeposit;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _121.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _121.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _121.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _121.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _121.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _121.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _121.MsgExecLegacyContent;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: _121.MsgVote;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _121.MsgVoteWeighted;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: _121.MsgDeposit;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _121.MsgSubmitProposal) => _121.MsgSubmitProposalAmino;
                    fromAmino: (object: _121.MsgSubmitProposalAmino) => _121.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _121.MsgExecLegacyContent) => _121.MsgExecLegacyContentAmino;
                    fromAmino: (object: _121.MsgExecLegacyContentAmino) => _121.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _121.MsgVote) => _121.MsgVoteAmino;
                    fromAmino: (object: _121.MsgVoteAmino) => _121.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _121.MsgVoteWeighted) => _121.MsgVoteWeightedAmino;
                    fromAmino: (object: _121.MsgVoteWeightedAmino) => _121.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _121.MsgDeposit) => _121.MsgDepositAmino;
                    fromAmino: (object: _121.MsgDepositAmino) => _121.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _121.MsgUpdateParams) => _121.MsgUpdateParamsAmino;
                    fromAmino: (object: _121.MsgUpdateParamsAmino) => _121.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _121.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgSubmitProposal;
                fromPartial(object: Partial<_121.MsgSubmitProposal>): _121.MsgSubmitProposal;
                fromAmino(object: _121.MsgSubmitProposalAmino): _121.MsgSubmitProposal;
                toAmino(message: _121.MsgSubmitProposal): _121.MsgSubmitProposalAmino;
                fromAminoMsg(object: _121.MsgSubmitProposalAminoMsg): _121.MsgSubmitProposal;
                toAminoMsg(message: _121.MsgSubmitProposal): _121.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _121.MsgSubmitProposalProtoMsg): _121.MsgSubmitProposal;
                toProto(message: _121.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _121.MsgSubmitProposal): _121.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _121.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_121.MsgSubmitProposalResponse>): _121.MsgSubmitProposalResponse;
                fromAmino(object: _121.MsgSubmitProposalResponseAmino): _121.MsgSubmitProposalResponse;
                toAmino(message: _121.MsgSubmitProposalResponse): _121.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _121.MsgSubmitProposalResponseAminoMsg): _121.MsgSubmitProposalResponse;
                toAminoMsg(message: _121.MsgSubmitProposalResponse): _121.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _121.MsgSubmitProposalResponseProtoMsg): _121.MsgSubmitProposalResponse;
                toProto(message: _121.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _121.MsgSubmitProposalResponse): _121.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _121.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgExecLegacyContent;
                fromPartial(object: Partial<_121.MsgExecLegacyContent>): _121.MsgExecLegacyContent;
                fromAmino(object: _121.MsgExecLegacyContentAmino): _121.MsgExecLegacyContent;
                toAmino(message: _121.MsgExecLegacyContent): _121.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _121.MsgExecLegacyContentAminoMsg): _121.MsgExecLegacyContent;
                toAminoMsg(message: _121.MsgExecLegacyContent): _121.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _121.MsgExecLegacyContentProtoMsg): _121.MsgExecLegacyContent;
                toProto(message: _121.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _121.MsgExecLegacyContent): _121.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _121.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_121.MsgExecLegacyContentResponse>): _121.MsgExecLegacyContentResponse;
                fromAmino(_: _121.MsgExecLegacyContentResponseAmino): _121.MsgExecLegacyContentResponse;
                toAmino(_: _121.MsgExecLegacyContentResponse): _121.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _121.MsgExecLegacyContentResponseAminoMsg): _121.MsgExecLegacyContentResponse;
                toAminoMsg(message: _121.MsgExecLegacyContentResponse): _121.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _121.MsgExecLegacyContentResponseProtoMsg): _121.MsgExecLegacyContentResponse;
                toProto(message: _121.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _121.MsgExecLegacyContentResponse): _121.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _121.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgVote;
                fromPartial(object: Partial<_121.MsgVote>): _121.MsgVote;
                fromAmino(object: _121.MsgVoteAmino): _121.MsgVote;
                toAmino(message: _121.MsgVote): _121.MsgVoteAmino;
                fromAminoMsg(object: _121.MsgVoteAminoMsg): _121.MsgVote;
                toAminoMsg(message: _121.MsgVote): _121.MsgVoteAminoMsg;
                fromProtoMsg(message: _121.MsgVoteProtoMsg): _121.MsgVote;
                toProto(message: _121.MsgVote): Uint8Array;
                toProtoMsg(message: _121.MsgVote): _121.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _121.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgVoteResponse;
                fromPartial(_: Partial<_121.MsgVoteResponse>): _121.MsgVoteResponse;
                fromAmino(_: _121.MsgVoteResponseAmino): _121.MsgVoteResponse;
                toAmino(_: _121.MsgVoteResponse): _121.MsgVoteResponseAmino;
                fromAminoMsg(object: _121.MsgVoteResponseAminoMsg): _121.MsgVoteResponse;
                toAminoMsg(message: _121.MsgVoteResponse): _121.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _121.MsgVoteResponseProtoMsg): _121.MsgVoteResponse;
                toProto(message: _121.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _121.MsgVoteResponse): _121.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _121.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgVoteWeighted;
                fromPartial(object: Partial<_121.MsgVoteWeighted>): _121.MsgVoteWeighted;
                fromAmino(object: _121.MsgVoteWeightedAmino): _121.MsgVoteWeighted;
                toAmino(message: _121.MsgVoteWeighted): _121.MsgVoteWeightedAmino;
                fromAminoMsg(object: _121.MsgVoteWeightedAminoMsg): _121.MsgVoteWeighted;
                toAminoMsg(message: _121.MsgVoteWeighted): _121.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _121.MsgVoteWeightedProtoMsg): _121.MsgVoteWeighted;
                toProto(message: _121.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _121.MsgVoteWeighted): _121.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _121.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_121.MsgVoteWeightedResponse>): _121.MsgVoteWeightedResponse;
                fromAmino(_: _121.MsgVoteWeightedResponseAmino): _121.MsgVoteWeightedResponse;
                toAmino(_: _121.MsgVoteWeightedResponse): _121.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _121.MsgVoteWeightedResponseAminoMsg): _121.MsgVoteWeightedResponse;
                toAminoMsg(message: _121.MsgVoteWeightedResponse): _121.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _121.MsgVoteWeightedResponseProtoMsg): _121.MsgVoteWeightedResponse;
                toProto(message: _121.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _121.MsgVoteWeightedResponse): _121.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _121.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgDeposit;
                fromPartial(object: Partial<_121.MsgDeposit>): _121.MsgDeposit;
                fromAmino(object: _121.MsgDepositAmino): _121.MsgDeposit;
                toAmino(message: _121.MsgDeposit): _121.MsgDepositAmino;
                fromAminoMsg(object: _121.MsgDepositAminoMsg): _121.MsgDeposit;
                toAminoMsg(message: _121.MsgDeposit): _121.MsgDepositAminoMsg;
                fromProtoMsg(message: _121.MsgDepositProtoMsg): _121.MsgDeposit;
                toProto(message: _121.MsgDeposit): Uint8Array;
                toProtoMsg(message: _121.MsgDeposit): _121.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _121.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgDepositResponse;
                fromPartial(_: Partial<_121.MsgDepositResponse>): _121.MsgDepositResponse;
                fromAmino(_: _121.MsgDepositResponseAmino): _121.MsgDepositResponse;
                toAmino(_: _121.MsgDepositResponse): _121.MsgDepositResponseAmino;
                fromAminoMsg(object: _121.MsgDepositResponseAminoMsg): _121.MsgDepositResponse;
                toAminoMsg(message: _121.MsgDepositResponse): _121.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _121.MsgDepositResponseProtoMsg): _121.MsgDepositResponse;
                toProto(message: _121.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _121.MsgDepositResponse): _121.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _121.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgUpdateParams;
                fromPartial(object: Partial<_121.MsgUpdateParams>): _121.MsgUpdateParams;
                fromAmino(object: _121.MsgUpdateParamsAmino): _121.MsgUpdateParams;
                toAmino(message: _121.MsgUpdateParams): _121.MsgUpdateParamsAmino;
                fromAminoMsg(object: _121.MsgUpdateParamsAminoMsg): _121.MsgUpdateParams;
                toAminoMsg(message: _121.MsgUpdateParams): _121.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _121.MsgUpdateParamsProtoMsg): _121.MsgUpdateParams;
                toProto(message: _121.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _121.MsgUpdateParams): _121.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _121.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_121.MsgUpdateParamsResponse>): _121.MsgUpdateParamsResponse;
                fromAmino(_: _121.MsgUpdateParamsResponseAmino): _121.MsgUpdateParamsResponse;
                toAmino(_: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _121.MsgUpdateParamsResponseAminoMsg): _121.MsgUpdateParamsResponse;
                toAminoMsg(message: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _121.MsgUpdateParamsResponseProtoMsg): _121.MsgUpdateParamsResponse;
                toProto(message: _121.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _171.SoftwareUpgradeProposal | _171.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _101.CommunityPoolSpendProposal | _101.CommunityPoolSpendProposalWithDeposit | _149.ParameterChangeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _123.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _120.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryProposalRequest;
                fromPartial(object: Partial<_120.QueryProposalRequest>): _120.QueryProposalRequest;
                fromAmino(object: _120.QueryProposalRequestAmino): _120.QueryProposalRequest;
                toAmino(message: _120.QueryProposalRequest): _120.QueryProposalRequestAmino;
                fromAminoMsg(object: _120.QueryProposalRequestAminoMsg): _120.QueryProposalRequest;
                toAminoMsg(message: _120.QueryProposalRequest): _120.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _120.QueryProposalRequestProtoMsg): _120.QueryProposalRequest;
                toProto(message: _120.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _120.QueryProposalRequest): _120.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _120.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryProposalResponse;
                fromPartial(object: Partial<_120.QueryProposalResponse>): _120.QueryProposalResponse;
                fromAmino(object: _120.QueryProposalResponseAmino): _120.QueryProposalResponse;
                toAmino(message: _120.QueryProposalResponse): _120.QueryProposalResponseAmino;
                fromAminoMsg(object: _120.QueryProposalResponseAminoMsg): _120.QueryProposalResponse;
                toAminoMsg(message: _120.QueryProposalResponse): _120.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _120.QueryProposalResponseProtoMsg): _120.QueryProposalResponse;
                toProto(message: _120.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _120.QueryProposalResponse): _120.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _120.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryProposalsRequest;
                fromPartial(object: Partial<_120.QueryProposalsRequest>): _120.QueryProposalsRequest;
                fromAmino(object: _120.QueryProposalsRequestAmino): _120.QueryProposalsRequest;
                toAmino(message: _120.QueryProposalsRequest): _120.QueryProposalsRequestAmino;
                fromAminoMsg(object: _120.QueryProposalsRequestAminoMsg): _120.QueryProposalsRequest;
                toAminoMsg(message: _120.QueryProposalsRequest): _120.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryProposalsRequestProtoMsg): _120.QueryProposalsRequest;
                toProto(message: _120.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryProposalsRequest): _120.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _120.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryProposalsResponse;
                fromPartial(object: Partial<_120.QueryProposalsResponse>): _120.QueryProposalsResponse;
                fromAmino(object: _120.QueryProposalsResponseAmino): _120.QueryProposalsResponse;
                toAmino(message: _120.QueryProposalsResponse): _120.QueryProposalsResponseAmino;
                fromAminoMsg(object: _120.QueryProposalsResponseAminoMsg): _120.QueryProposalsResponse;
                toAminoMsg(message: _120.QueryProposalsResponse): _120.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryProposalsResponseProtoMsg): _120.QueryProposalsResponse;
                toProto(message: _120.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryProposalsResponse): _120.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _120.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryVoteRequest;
                fromPartial(object: Partial<_120.QueryVoteRequest>): _120.QueryVoteRequest;
                fromAmino(object: _120.QueryVoteRequestAmino): _120.QueryVoteRequest;
                toAmino(message: _120.QueryVoteRequest): _120.QueryVoteRequestAmino;
                fromAminoMsg(object: _120.QueryVoteRequestAminoMsg): _120.QueryVoteRequest;
                toAminoMsg(message: _120.QueryVoteRequest): _120.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _120.QueryVoteRequestProtoMsg): _120.QueryVoteRequest;
                toProto(message: _120.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _120.QueryVoteRequest): _120.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _120.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryVoteResponse;
                fromPartial(object: Partial<_120.QueryVoteResponse>): _120.QueryVoteResponse;
                fromAmino(object: _120.QueryVoteResponseAmino): _120.QueryVoteResponse;
                toAmino(message: _120.QueryVoteResponse): _120.QueryVoteResponseAmino;
                fromAminoMsg(object: _120.QueryVoteResponseAminoMsg): _120.QueryVoteResponse;
                toAminoMsg(message: _120.QueryVoteResponse): _120.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _120.QueryVoteResponseProtoMsg): _120.QueryVoteResponse;
                toProto(message: _120.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _120.QueryVoteResponse): _120.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _120.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryVotesRequest;
                fromPartial(object: Partial<_120.QueryVotesRequest>): _120.QueryVotesRequest;
                fromAmino(object: _120.QueryVotesRequestAmino): _120.QueryVotesRequest;
                toAmino(message: _120.QueryVotesRequest): _120.QueryVotesRequestAmino;
                fromAminoMsg(object: _120.QueryVotesRequestAminoMsg): _120.QueryVotesRequest;
                toAminoMsg(message: _120.QueryVotesRequest): _120.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _120.QueryVotesRequestProtoMsg): _120.QueryVotesRequest;
                toProto(message: _120.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _120.QueryVotesRequest): _120.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _120.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryVotesResponse;
                fromPartial(object: Partial<_120.QueryVotesResponse>): _120.QueryVotesResponse;
                fromAmino(object: _120.QueryVotesResponseAmino): _120.QueryVotesResponse;
                toAmino(message: _120.QueryVotesResponse): _120.QueryVotesResponseAmino;
                fromAminoMsg(object: _120.QueryVotesResponseAminoMsg): _120.QueryVotesResponse;
                toAminoMsg(message: _120.QueryVotesResponse): _120.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _120.QueryVotesResponseProtoMsg): _120.QueryVotesResponse;
                toProto(message: _120.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _120.QueryVotesResponse): _120.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _120.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryParamsRequest;
                fromPartial(object: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
                fromAmino(object: _120.QueryParamsRequestAmino): _120.QueryParamsRequest;
                toAmino(message: _120.QueryParamsRequest): _120.QueryParamsRequestAmino;
                fromAminoMsg(object: _120.QueryParamsRequestAminoMsg): _120.QueryParamsRequest;
                toAminoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryParamsRequestProtoMsg): _120.QueryParamsRequest;
                toProto(message: _120.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _120.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
                fromAmino(object: _120.QueryParamsResponseAmino): _120.QueryParamsResponse;
                toAmino(message: _120.QueryParamsResponse): _120.QueryParamsResponseAmino;
                fromAminoMsg(object: _120.QueryParamsResponseAminoMsg): _120.QueryParamsResponse;
                toAminoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryParamsResponseProtoMsg): _120.QueryParamsResponse;
                toProto(message: _120.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _120.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryDepositRequest;
                fromPartial(object: Partial<_120.QueryDepositRequest>): _120.QueryDepositRequest;
                fromAmino(object: _120.QueryDepositRequestAmino): _120.QueryDepositRequest;
                toAmino(message: _120.QueryDepositRequest): _120.QueryDepositRequestAmino;
                fromAminoMsg(object: _120.QueryDepositRequestAminoMsg): _120.QueryDepositRequest;
                toAminoMsg(message: _120.QueryDepositRequest): _120.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _120.QueryDepositRequestProtoMsg): _120.QueryDepositRequest;
                toProto(message: _120.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _120.QueryDepositRequest): _120.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _120.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryDepositResponse;
                fromPartial(object: Partial<_120.QueryDepositResponse>): _120.QueryDepositResponse;
                fromAmino(object: _120.QueryDepositResponseAmino): _120.QueryDepositResponse;
                toAmino(message: _120.QueryDepositResponse): _120.QueryDepositResponseAmino;
                fromAminoMsg(object: _120.QueryDepositResponseAminoMsg): _120.QueryDepositResponse;
                toAminoMsg(message: _120.QueryDepositResponse): _120.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _120.QueryDepositResponseProtoMsg): _120.QueryDepositResponse;
                toProto(message: _120.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _120.QueryDepositResponse): _120.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _120.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryDepositsRequest;
                fromPartial(object: Partial<_120.QueryDepositsRequest>): _120.QueryDepositsRequest;
                fromAmino(object: _120.QueryDepositsRequestAmino): _120.QueryDepositsRequest;
                toAmino(message: _120.QueryDepositsRequest): _120.QueryDepositsRequestAmino;
                fromAminoMsg(object: _120.QueryDepositsRequestAminoMsg): _120.QueryDepositsRequest;
                toAminoMsg(message: _120.QueryDepositsRequest): _120.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryDepositsRequestProtoMsg): _120.QueryDepositsRequest;
                toProto(message: _120.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryDepositsRequest): _120.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _120.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryDepositsResponse;
                fromPartial(object: Partial<_120.QueryDepositsResponse>): _120.QueryDepositsResponse;
                fromAmino(object: _120.QueryDepositsResponseAmino): _120.QueryDepositsResponse;
                toAmino(message: _120.QueryDepositsResponse): _120.QueryDepositsResponseAmino;
                fromAminoMsg(object: _120.QueryDepositsResponseAminoMsg): _120.QueryDepositsResponse;
                toAminoMsg(message: _120.QueryDepositsResponse): _120.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryDepositsResponseProtoMsg): _120.QueryDepositsResponse;
                toProto(message: _120.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryDepositsResponse): _120.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _120.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryTallyResultRequest;
                fromPartial(object: Partial<_120.QueryTallyResultRequest>): _120.QueryTallyResultRequest;
                fromAmino(object: _120.QueryTallyResultRequestAmino): _120.QueryTallyResultRequest;
                toAmino(message: _120.QueryTallyResultRequest): _120.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _120.QueryTallyResultRequestAminoMsg): _120.QueryTallyResultRequest;
                toAminoMsg(message: _120.QueryTallyResultRequest): _120.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _120.QueryTallyResultRequestProtoMsg): _120.QueryTallyResultRequest;
                toProto(message: _120.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _120.QueryTallyResultRequest): _120.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _120.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryTallyResultResponse;
                fromPartial(object: Partial<_120.QueryTallyResultResponse>): _120.QueryTallyResultResponse;
                fromAmino(object: _120.QueryTallyResultResponseAmino): _120.QueryTallyResultResponse;
                toAmino(message: _120.QueryTallyResultResponse): _120.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _120.QueryTallyResultResponseAminoMsg): _120.QueryTallyResultResponse;
                toAminoMsg(message: _120.QueryTallyResultResponse): _120.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _120.QueryTallyResultResponseProtoMsg): _120.QueryTallyResultResponse;
                toProto(message: _120.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _120.QueryTallyResultResponse): _120.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _119.VoteOption;
            voteOptionToJSON(object: _119.VoteOption): string;
            proposalStatusFromJSON(object: any): _119.ProposalStatus;
            proposalStatusToJSON(object: _119.ProposalStatus): string;
            VoteOption: typeof _119.VoteOption;
            VoteOptionSDKType: typeof _119.VoteOption;
            VoteOptionAmino: typeof _119.VoteOption;
            ProposalStatus: typeof _119.ProposalStatus;
            ProposalStatusSDKType: typeof _119.ProposalStatus;
            ProposalStatusAmino: typeof _119.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _119.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.WeightedVoteOption;
                fromPartial(object: Partial<_119.WeightedVoteOption>): _119.WeightedVoteOption;
                fromAmino(object: _119.WeightedVoteOptionAmino): _119.WeightedVoteOption;
                toAmino(message: _119.WeightedVoteOption): _119.WeightedVoteOptionAmino;
                fromAminoMsg(object: _119.WeightedVoteOptionAminoMsg): _119.WeightedVoteOption;
                toAminoMsg(message: _119.WeightedVoteOption): _119.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _119.WeightedVoteOptionProtoMsg): _119.WeightedVoteOption;
                toProto(message: _119.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _119.WeightedVoteOption): _119.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _119.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Deposit;
                fromPartial(object: Partial<_119.Deposit>): _119.Deposit;
                fromAmino(object: _119.DepositAmino): _119.Deposit;
                toAmino(message: _119.Deposit): _119.DepositAmino;
                fromAminoMsg(object: _119.DepositAminoMsg): _119.Deposit;
                toAminoMsg(message: _119.Deposit): _119.DepositAminoMsg;
                fromProtoMsg(message: _119.DepositProtoMsg): _119.Deposit;
                toProto(message: _119.Deposit): Uint8Array;
                toProtoMsg(message: _119.Deposit): _119.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _119.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Proposal;
                fromPartial(object: Partial<_119.Proposal>): _119.Proposal;
                fromAmino(object: _119.ProposalAmino): _119.Proposal;
                toAmino(message: _119.Proposal): _119.ProposalAmino;
                fromAminoMsg(object: _119.ProposalAminoMsg): _119.Proposal;
                toAminoMsg(message: _119.Proposal): _119.ProposalAminoMsg;
                fromProtoMsg(message: _119.ProposalProtoMsg): _119.Proposal;
                toProto(message: _119.Proposal): Uint8Array;
                toProtoMsg(message: _119.Proposal): _119.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _119.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.TallyResult;
                fromPartial(object: Partial<_119.TallyResult>): _119.TallyResult;
                fromAmino(object: _119.TallyResultAmino): _119.TallyResult;
                toAmino(message: _119.TallyResult): _119.TallyResultAmino;
                fromAminoMsg(object: _119.TallyResultAminoMsg): _119.TallyResult;
                toAminoMsg(message: _119.TallyResult): _119.TallyResultAminoMsg;
                fromProtoMsg(message: _119.TallyResultProtoMsg): _119.TallyResult;
                toProto(message: _119.TallyResult): Uint8Array;
                toProtoMsg(message: _119.TallyResult): _119.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _119.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Vote;
                fromPartial(object: Partial<_119.Vote>): _119.Vote;
                fromAmino(object: _119.VoteAmino): _119.Vote;
                toAmino(message: _119.Vote): _119.VoteAmino;
                fromAminoMsg(object: _119.VoteAminoMsg): _119.Vote;
                toAminoMsg(message: _119.Vote): _119.VoteAminoMsg;
                fromProtoMsg(message: _119.VoteProtoMsg): _119.Vote;
                toProto(message: _119.Vote): Uint8Array;
                toProtoMsg(message: _119.Vote): _119.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _119.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.DepositParams;
                fromPartial(object: Partial<_119.DepositParams>): _119.DepositParams;
                fromAmino(object: _119.DepositParamsAmino): _119.DepositParams;
                toAmino(message: _119.DepositParams): _119.DepositParamsAmino;
                fromAminoMsg(object: _119.DepositParamsAminoMsg): _119.DepositParams;
                toAminoMsg(message: _119.DepositParams): _119.DepositParamsAminoMsg;
                fromProtoMsg(message: _119.DepositParamsProtoMsg): _119.DepositParams;
                toProto(message: _119.DepositParams): Uint8Array;
                toProtoMsg(message: _119.DepositParams): _119.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _119.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.VotingParams;
                fromPartial(object: Partial<_119.VotingParams>): _119.VotingParams;
                fromAmino(object: _119.VotingParamsAmino): _119.VotingParams;
                toAmino(message: _119.VotingParams): _119.VotingParamsAmino;
                fromAminoMsg(object: _119.VotingParamsAminoMsg): _119.VotingParams;
                toAminoMsg(message: _119.VotingParams): _119.VotingParamsAminoMsg;
                fromProtoMsg(message: _119.VotingParamsProtoMsg): _119.VotingParams;
                toProto(message: _119.VotingParams): Uint8Array;
                toProtoMsg(message: _119.VotingParams): _119.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _119.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.TallyParams;
                fromPartial(object: Partial<_119.TallyParams>): _119.TallyParams;
                fromAmino(object: _119.TallyParamsAmino): _119.TallyParams;
                toAmino(message: _119.TallyParams): _119.TallyParamsAmino;
                fromAminoMsg(object: _119.TallyParamsAminoMsg): _119.TallyParams;
                toAminoMsg(message: _119.TallyParams): _119.TallyParamsAminoMsg;
                fromProtoMsg(message: _119.TallyParamsProtoMsg): _119.TallyParams;
                toProto(message: _119.TallyParams): Uint8Array;
                toProtoMsg(message: _119.TallyParams): _119.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _119.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
                fromAmino(object: _119.ParamsAmino): _119.Params;
                toAmino(message: _119.Params): _119.ParamsAmino;
                fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
                toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
                fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
                toProto(message: _119.Params): Uint8Array;
                toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                toProto(message: _118.GenesisState): Uint8Array;
                toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _370.MsgClientImpl;
            QueryClientImpl: typeof _351.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                proposals(request: _124.QueryProposalsRequest): Promise<_124.QueryProposalsResponse>;
                vote(request: _124.QueryVoteRequest): Promise<_124.QueryVoteResponse>;
                votes(request: _124.QueryVotesRequest): Promise<_124.QueryVotesResponse>;
                params(request: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                deposit(request: _124.QueryDepositRequest): Promise<_124.QueryDepositResponse>;
                deposits(request: _124.QueryDepositsRequest): Promise<_124.QueryDepositsResponse>;
                tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _330.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _125.MsgVoteWeighted;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: _125.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _125.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _125.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _125.MsgVoteWeighted;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: _125.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _125.MsgSubmitProposal) => _125.MsgSubmitProposalAmino;
                    fromAmino: (object: _125.MsgSubmitProposalAmino) => _125.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _125.MsgVote) => _125.MsgVoteAmino;
                    fromAmino: (object: _125.MsgVoteAmino) => _125.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _125.MsgVoteWeighted) => _125.MsgVoteWeightedAmino;
                    fromAmino: (object: _125.MsgVoteWeightedAmino) => _125.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _125.MsgDeposit) => _125.MsgDepositAmino;
                    fromAmino: (object: _125.MsgDepositAmino) => _125.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _125.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgSubmitProposal;
                fromPartial(object: Partial<_125.MsgSubmitProposal>): _125.MsgSubmitProposal;
                fromAmino(object: _125.MsgSubmitProposalAmino): _125.MsgSubmitProposal;
                toAmino(message: _125.MsgSubmitProposal): _125.MsgSubmitProposalAmino;
                fromAminoMsg(object: _125.MsgSubmitProposalAminoMsg): _125.MsgSubmitProposal;
                toAminoMsg(message: _125.MsgSubmitProposal): _125.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _125.MsgSubmitProposalProtoMsg): _125.MsgSubmitProposal;
                toProto(message: _125.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _125.MsgSubmitProposal): _125.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _125.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_125.MsgSubmitProposalResponse>): _125.MsgSubmitProposalResponse;
                fromAmino(object: _125.MsgSubmitProposalResponseAmino): _125.MsgSubmitProposalResponse;
                toAmino(message: _125.MsgSubmitProposalResponse): _125.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _125.MsgSubmitProposalResponseAminoMsg): _125.MsgSubmitProposalResponse;
                toAminoMsg(message: _125.MsgSubmitProposalResponse): _125.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _125.MsgSubmitProposalResponseProtoMsg): _125.MsgSubmitProposalResponse;
                toProto(message: _125.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _125.MsgSubmitProposalResponse): _125.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _125.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgVote;
                fromPartial(object: Partial<_125.MsgVote>): _125.MsgVote;
                fromAmino(object: _125.MsgVoteAmino): _125.MsgVote;
                toAmino(message: _125.MsgVote): _125.MsgVoteAmino;
                fromAminoMsg(object: _125.MsgVoteAminoMsg): _125.MsgVote;
                toAminoMsg(message: _125.MsgVote): _125.MsgVoteAminoMsg;
                fromProtoMsg(message: _125.MsgVoteProtoMsg): _125.MsgVote;
                toProto(message: _125.MsgVote): Uint8Array;
                toProtoMsg(message: _125.MsgVote): _125.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _125.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgVoteResponse;
                fromPartial(_: Partial<_125.MsgVoteResponse>): _125.MsgVoteResponse;
                fromAmino(_: _125.MsgVoteResponseAmino): _125.MsgVoteResponse;
                toAmino(_: _125.MsgVoteResponse): _125.MsgVoteResponseAmino;
                fromAminoMsg(object: _125.MsgVoteResponseAminoMsg): _125.MsgVoteResponse;
                toAminoMsg(message: _125.MsgVoteResponse): _125.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _125.MsgVoteResponseProtoMsg): _125.MsgVoteResponse;
                toProto(message: _125.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _125.MsgVoteResponse): _125.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _125.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgVoteWeighted;
                fromPartial(object: Partial<_125.MsgVoteWeighted>): _125.MsgVoteWeighted;
                fromAmino(object: _125.MsgVoteWeightedAmino): _125.MsgVoteWeighted;
                toAmino(message: _125.MsgVoteWeighted): _125.MsgVoteWeightedAmino;
                fromAminoMsg(object: _125.MsgVoteWeightedAminoMsg): _125.MsgVoteWeighted;
                toAminoMsg(message: _125.MsgVoteWeighted): _125.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _125.MsgVoteWeightedProtoMsg): _125.MsgVoteWeighted;
                toProto(message: _125.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _125.MsgVoteWeighted): _125.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _125.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_125.MsgVoteWeightedResponse>): _125.MsgVoteWeightedResponse;
                fromAmino(_: _125.MsgVoteWeightedResponseAmino): _125.MsgVoteWeightedResponse;
                toAmino(_: _125.MsgVoteWeightedResponse): _125.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _125.MsgVoteWeightedResponseAminoMsg): _125.MsgVoteWeightedResponse;
                toAminoMsg(message: _125.MsgVoteWeightedResponse): _125.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _125.MsgVoteWeightedResponseProtoMsg): _125.MsgVoteWeightedResponse;
                toProto(message: _125.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _125.MsgVoteWeightedResponse): _125.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _125.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgDeposit;
                fromPartial(object: Partial<_125.MsgDeposit>): _125.MsgDeposit;
                fromAmino(object: _125.MsgDepositAmino): _125.MsgDeposit;
                toAmino(message: _125.MsgDeposit): _125.MsgDepositAmino;
                fromAminoMsg(object: _125.MsgDepositAminoMsg): _125.MsgDeposit;
                toAminoMsg(message: _125.MsgDeposit): _125.MsgDepositAminoMsg;
                fromProtoMsg(message: _125.MsgDepositProtoMsg): _125.MsgDeposit;
                toProto(message: _125.MsgDeposit): Uint8Array;
                toProtoMsg(message: _125.MsgDeposit): _125.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _125.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgDepositResponse;
                fromPartial(_: Partial<_125.MsgDepositResponse>): _125.MsgDepositResponse;
                fromAmino(_: _125.MsgDepositResponseAmino): _125.MsgDepositResponse;
                toAmino(_: _125.MsgDepositResponse): _125.MsgDepositResponseAmino;
                fromAminoMsg(object: _125.MsgDepositResponseAminoMsg): _125.MsgDepositResponse;
                toAminoMsg(message: _125.MsgDepositResponse): _125.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _125.MsgDepositResponseProtoMsg): _125.MsgDepositResponse;
                toProto(message: _125.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _125.MsgDepositResponse): _125.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _171.SoftwareUpgradeProposal | _171.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _101.CommunityPoolSpendProposal | _101.CommunityPoolSpendProposalWithDeposit | _149.ParameterChangeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _123.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _124.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalRequest;
                fromPartial(object: Partial<_124.QueryProposalRequest>): _124.QueryProposalRequest;
                fromAmino(object: _124.QueryProposalRequestAmino): _124.QueryProposalRequest;
                toAmino(message: _124.QueryProposalRequest): _124.QueryProposalRequestAmino;
                fromAminoMsg(object: _124.QueryProposalRequestAminoMsg): _124.QueryProposalRequest;
                toAminoMsg(message: _124.QueryProposalRequest): _124.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _124.QueryProposalRequestProtoMsg): _124.QueryProposalRequest;
                toProto(message: _124.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _124.QueryProposalRequest): _124.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _124.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalResponse;
                fromPartial(object: Partial<_124.QueryProposalResponse>): _124.QueryProposalResponse;
                fromAmino(object: _124.QueryProposalResponseAmino): _124.QueryProposalResponse;
                toAmino(message: _124.QueryProposalResponse): _124.QueryProposalResponseAmino;
                fromAminoMsg(object: _124.QueryProposalResponseAminoMsg): _124.QueryProposalResponse;
                toAminoMsg(message: _124.QueryProposalResponse): _124.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _124.QueryProposalResponseProtoMsg): _124.QueryProposalResponse;
                toProto(message: _124.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _124.QueryProposalResponse): _124.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _124.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalsRequest;
                fromPartial(object: Partial<_124.QueryProposalsRequest>): _124.QueryProposalsRequest;
                fromAmino(object: _124.QueryProposalsRequestAmino): _124.QueryProposalsRequest;
                toAmino(message: _124.QueryProposalsRequest): _124.QueryProposalsRequestAmino;
                fromAminoMsg(object: _124.QueryProposalsRequestAminoMsg): _124.QueryProposalsRequest;
                toAminoMsg(message: _124.QueryProposalsRequest): _124.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryProposalsRequestProtoMsg): _124.QueryProposalsRequest;
                toProto(message: _124.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryProposalsRequest): _124.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _124.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryProposalsResponse;
                fromPartial(object: Partial<_124.QueryProposalsResponse>): _124.QueryProposalsResponse;
                fromAmino(object: _124.QueryProposalsResponseAmino): _124.QueryProposalsResponse;
                toAmino(message: _124.QueryProposalsResponse): _124.QueryProposalsResponseAmino;
                fromAminoMsg(object: _124.QueryProposalsResponseAminoMsg): _124.QueryProposalsResponse;
                toAminoMsg(message: _124.QueryProposalsResponse): _124.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryProposalsResponseProtoMsg): _124.QueryProposalsResponse;
                toProto(message: _124.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryProposalsResponse): _124.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _124.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVoteRequest;
                fromPartial(object: Partial<_124.QueryVoteRequest>): _124.QueryVoteRequest;
                fromAmino(object: _124.QueryVoteRequestAmino): _124.QueryVoteRequest;
                toAmino(message: _124.QueryVoteRequest): _124.QueryVoteRequestAmino;
                fromAminoMsg(object: _124.QueryVoteRequestAminoMsg): _124.QueryVoteRequest;
                toAminoMsg(message: _124.QueryVoteRequest): _124.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _124.QueryVoteRequestProtoMsg): _124.QueryVoteRequest;
                toProto(message: _124.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _124.QueryVoteRequest): _124.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _124.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVoteResponse;
                fromPartial(object: Partial<_124.QueryVoteResponse>): _124.QueryVoteResponse;
                fromAmino(object: _124.QueryVoteResponseAmino): _124.QueryVoteResponse;
                toAmino(message: _124.QueryVoteResponse): _124.QueryVoteResponseAmino;
                fromAminoMsg(object: _124.QueryVoteResponseAminoMsg): _124.QueryVoteResponse;
                toAminoMsg(message: _124.QueryVoteResponse): _124.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _124.QueryVoteResponseProtoMsg): _124.QueryVoteResponse;
                toProto(message: _124.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _124.QueryVoteResponse): _124.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _124.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesRequest;
                fromPartial(object: Partial<_124.QueryVotesRequest>): _124.QueryVotesRequest;
                fromAmino(object: _124.QueryVotesRequestAmino): _124.QueryVotesRequest;
                toAmino(message: _124.QueryVotesRequest): _124.QueryVotesRequestAmino;
                fromAminoMsg(object: _124.QueryVotesRequestAminoMsg): _124.QueryVotesRequest;
                toAminoMsg(message: _124.QueryVotesRequest): _124.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _124.QueryVotesRequestProtoMsg): _124.QueryVotesRequest;
                toProto(message: _124.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _124.QueryVotesRequest): _124.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _124.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryVotesResponse;
                fromPartial(object: Partial<_124.QueryVotesResponse>): _124.QueryVotesResponse;
                fromAmino(object: _124.QueryVotesResponseAmino): _124.QueryVotesResponse;
                toAmino(message: _124.QueryVotesResponse): _124.QueryVotesResponseAmino;
                fromAminoMsg(object: _124.QueryVotesResponseAminoMsg): _124.QueryVotesResponse;
                toAminoMsg(message: _124.QueryVotesResponse): _124.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _124.QueryVotesResponseProtoMsg): _124.QueryVotesResponse;
                toProto(message: _124.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _124.QueryVotesResponse): _124.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _124.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryParamsRequest;
                fromPartial(object: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
                fromAmino(object: _124.QueryParamsRequestAmino): _124.QueryParamsRequest;
                toAmino(message: _124.QueryParamsRequest): _124.QueryParamsRequestAmino;
                fromAminoMsg(object: _124.QueryParamsRequestAminoMsg): _124.QueryParamsRequest;
                toAminoMsg(message: _124.QueryParamsRequest): _124.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryParamsRequestProtoMsg): _124.QueryParamsRequest;
                toProto(message: _124.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryParamsRequest): _124.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _124.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryParamsResponse;
                fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
                fromAmino(object: _124.QueryParamsResponseAmino): _124.QueryParamsResponse;
                toAmino(message: _124.QueryParamsResponse): _124.QueryParamsResponseAmino;
                fromAminoMsg(object: _124.QueryParamsResponseAminoMsg): _124.QueryParamsResponse;
                toAminoMsg(message: _124.QueryParamsResponse): _124.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryParamsResponseProtoMsg): _124.QueryParamsResponse;
                toProto(message: _124.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryParamsResponse): _124.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _124.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryDepositRequest;
                fromPartial(object: Partial<_124.QueryDepositRequest>): _124.QueryDepositRequest;
                fromAmino(object: _124.QueryDepositRequestAmino): _124.QueryDepositRequest;
                toAmino(message: _124.QueryDepositRequest): _124.QueryDepositRequestAmino;
                fromAminoMsg(object: _124.QueryDepositRequestAminoMsg): _124.QueryDepositRequest;
                toAminoMsg(message: _124.QueryDepositRequest): _124.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _124.QueryDepositRequestProtoMsg): _124.QueryDepositRequest;
                toProto(message: _124.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _124.QueryDepositRequest): _124.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _124.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryDepositResponse;
                fromPartial(object: Partial<_124.QueryDepositResponse>): _124.QueryDepositResponse;
                fromAmino(object: _124.QueryDepositResponseAmino): _124.QueryDepositResponse;
                toAmino(message: _124.QueryDepositResponse): _124.QueryDepositResponseAmino;
                fromAminoMsg(object: _124.QueryDepositResponseAminoMsg): _124.QueryDepositResponse;
                toAminoMsg(message: _124.QueryDepositResponse): _124.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _124.QueryDepositResponseProtoMsg): _124.QueryDepositResponse;
                toProto(message: _124.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _124.QueryDepositResponse): _124.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _124.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryDepositsRequest;
                fromPartial(object: Partial<_124.QueryDepositsRequest>): _124.QueryDepositsRequest;
                fromAmino(object: _124.QueryDepositsRequestAmino): _124.QueryDepositsRequest;
                toAmino(message: _124.QueryDepositsRequest): _124.QueryDepositsRequestAmino;
                fromAminoMsg(object: _124.QueryDepositsRequestAminoMsg): _124.QueryDepositsRequest;
                toAminoMsg(message: _124.QueryDepositsRequest): _124.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryDepositsRequestProtoMsg): _124.QueryDepositsRequest;
                toProto(message: _124.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryDepositsRequest): _124.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _124.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryDepositsResponse;
                fromPartial(object: Partial<_124.QueryDepositsResponse>): _124.QueryDepositsResponse;
                fromAmino(object: _124.QueryDepositsResponseAmino): _124.QueryDepositsResponse;
                toAmino(message: _124.QueryDepositsResponse): _124.QueryDepositsResponseAmino;
                fromAminoMsg(object: _124.QueryDepositsResponseAminoMsg): _124.QueryDepositsResponse;
                toAminoMsg(message: _124.QueryDepositsResponse): _124.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryDepositsResponseProtoMsg): _124.QueryDepositsResponse;
                toProto(message: _124.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryDepositsResponse): _124.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _124.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryTallyResultRequest;
                fromPartial(object: Partial<_124.QueryTallyResultRequest>): _124.QueryTallyResultRequest;
                fromAmino(object: _124.QueryTallyResultRequestAmino): _124.QueryTallyResultRequest;
                toAmino(message: _124.QueryTallyResultRequest): _124.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _124.QueryTallyResultRequestAminoMsg): _124.QueryTallyResultRequest;
                toAminoMsg(message: _124.QueryTallyResultRequest): _124.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _124.QueryTallyResultRequestProtoMsg): _124.QueryTallyResultRequest;
                toProto(message: _124.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _124.QueryTallyResultRequest): _124.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _124.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryTallyResultResponse;
                fromPartial(object: Partial<_124.QueryTallyResultResponse>): _124.QueryTallyResultResponse;
                fromAmino(object: _124.QueryTallyResultResponseAmino): _124.QueryTallyResultResponse;
                toAmino(message: _124.QueryTallyResultResponse): _124.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _124.QueryTallyResultResponseAminoMsg): _124.QueryTallyResultResponse;
                toAminoMsg(message: _124.QueryTallyResultResponse): _124.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _124.QueryTallyResultResponseProtoMsg): _124.QueryTallyResultResponse;
                toProto(message: _124.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _124.QueryTallyResultResponse): _124.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _123.VoteOption;
            voteOptionToJSON(object: _123.VoteOption): string;
            proposalStatusFromJSON(object: any): _123.ProposalStatus;
            proposalStatusToJSON(object: _123.ProposalStatus): string;
            VoteOption: typeof _123.VoteOption;
            VoteOptionSDKType: typeof _123.VoteOption;
            VoteOptionAmino: typeof _123.VoteOption;
            ProposalStatus: typeof _123.ProposalStatus;
            ProposalStatusSDKType: typeof _123.ProposalStatus;
            ProposalStatusAmino: typeof _123.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _123.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.WeightedVoteOption;
                fromPartial(object: Partial<_123.WeightedVoteOption>): _123.WeightedVoteOption;
                fromAmino(object: _123.WeightedVoteOptionAmino): _123.WeightedVoteOption;
                toAmino(message: _123.WeightedVoteOption): _123.WeightedVoteOptionAmino;
                fromAminoMsg(object: _123.WeightedVoteOptionAminoMsg): _123.WeightedVoteOption;
                toAminoMsg(message: _123.WeightedVoteOption): _123.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _123.WeightedVoteOptionProtoMsg): _123.WeightedVoteOption;
                toProto(message: _123.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _123.WeightedVoteOption): _123.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _123.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.TextProposal;
                fromPartial(object: Partial<_123.TextProposal>): _123.TextProposal;
                fromAmino(object: _123.TextProposalAmino): _123.TextProposal;
                toAmino(message: _123.TextProposal): _123.TextProposalAmino;
                fromAminoMsg(object: _123.TextProposalAminoMsg): _123.TextProposal;
                toAminoMsg(message: _123.TextProposal): _123.TextProposalAminoMsg;
                fromProtoMsg(message: _123.TextProposalProtoMsg): _123.TextProposal;
                toProto(message: _123.TextProposal): Uint8Array;
                toProtoMsg(message: _123.TextProposal): _123.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _123.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Deposit;
                fromPartial(object: Partial<_123.Deposit>): _123.Deposit;
                fromAmino(object: _123.DepositAmino): _123.Deposit;
                toAmino(message: _123.Deposit): _123.DepositAmino;
                fromAminoMsg(object: _123.DepositAminoMsg): _123.Deposit;
                toAminoMsg(message: _123.Deposit): _123.DepositAminoMsg;
                fromProtoMsg(message: _123.DepositProtoMsg): _123.Deposit;
                toProto(message: _123.Deposit): Uint8Array;
                toProtoMsg(message: _123.Deposit): _123.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _123.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Proposal;
                fromPartial(object: Partial<_123.Proposal>): _123.Proposal;
                fromAmino(object: _123.ProposalAmino): _123.Proposal;
                toAmino(message: _123.Proposal): _123.ProposalAmino;
                fromAminoMsg(object: _123.ProposalAminoMsg): _123.Proposal;
                toAminoMsg(message: _123.Proposal): _123.ProposalAminoMsg;
                fromProtoMsg(message: _123.ProposalProtoMsg): _123.Proposal;
                toProto(message: _123.Proposal): Uint8Array;
                toProtoMsg(message: _123.Proposal): _123.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _123.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.TallyResult;
                fromPartial(object: Partial<_123.TallyResult>): _123.TallyResult;
                fromAmino(object: _123.TallyResultAmino): _123.TallyResult;
                toAmino(message: _123.TallyResult): _123.TallyResultAmino;
                fromAminoMsg(object: _123.TallyResultAminoMsg): _123.TallyResult;
                toAminoMsg(message: _123.TallyResult): _123.TallyResultAminoMsg;
                fromProtoMsg(message: _123.TallyResultProtoMsg): _123.TallyResult;
                toProto(message: _123.TallyResult): Uint8Array;
                toProtoMsg(message: _123.TallyResult): _123.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _123.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Vote;
                fromPartial(object: Partial<_123.Vote>): _123.Vote;
                fromAmino(object: _123.VoteAmino): _123.Vote;
                toAmino(message: _123.Vote): _123.VoteAmino;
                fromAminoMsg(object: _123.VoteAminoMsg): _123.Vote;
                toAminoMsg(message: _123.Vote): _123.VoteAminoMsg;
                fromProtoMsg(message: _123.VoteProtoMsg): _123.Vote;
                toProto(message: _123.Vote): Uint8Array;
                toProtoMsg(message: _123.Vote): _123.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _123.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.DepositParams;
                fromPartial(object: Partial<_123.DepositParams>): _123.DepositParams;
                fromAmino(object: _123.DepositParamsAmino): _123.DepositParams;
                toAmino(message: _123.DepositParams): _123.DepositParamsAmino;
                fromAminoMsg(object: _123.DepositParamsAminoMsg): _123.DepositParams;
                toAminoMsg(message: _123.DepositParams): _123.DepositParamsAminoMsg;
                fromProtoMsg(message: _123.DepositParamsProtoMsg): _123.DepositParams;
                toProto(message: _123.DepositParams): Uint8Array;
                toProtoMsg(message: _123.DepositParams): _123.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _123.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.VotingParams;
                fromPartial(object: Partial<_123.VotingParams>): _123.VotingParams;
                fromAmino(object: _123.VotingParamsAmino): _123.VotingParams;
                toAmino(message: _123.VotingParams): _123.VotingParamsAmino;
                fromAminoMsg(object: _123.VotingParamsAminoMsg): _123.VotingParams;
                toAminoMsg(message: _123.VotingParams): _123.VotingParamsAminoMsg;
                fromProtoMsg(message: _123.VotingParamsProtoMsg): _123.VotingParams;
                toProto(message: _123.VotingParams): Uint8Array;
                toProtoMsg(message: _123.VotingParams): _123.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _123.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.TallyParams;
                fromPartial(object: Partial<_123.TallyParams>): _123.TallyParams;
                fromAmino(object: _123.TallyParamsAmino): _123.TallyParams;
                toAmino(message: _123.TallyParams): _123.TallyParamsAmino;
                fromAminoMsg(object: _123.TallyParamsAminoMsg): _123.TallyParams;
                toAminoMsg(message: _123.TallyParams): _123.TallyParamsAminoMsg;
                fromProtoMsg(message: _123.TallyParamsProtoMsg): _123.TallyParams;
                toProto(message: _123.TallyParams): Uint8Array;
                toProtoMsg(message: _123.TallyParams): _123.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _122.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.GenesisState;
                fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
                fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
                toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
                fromAminoMsg(object: _122.GenesisStateAminoMsg): _122.GenesisState;
                toAminoMsg(message: _122.GenesisState): _122.GenesisStateAminoMsg;
                fromProtoMsg(message: _122.GenesisStateProtoMsg): _122.GenesisState;
                toProto(message: _122.GenesisState): Uint8Array;
                toProtoMsg(message: _122.GenesisState): _122.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _126.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.Module;
                    fromPartial(object: Partial<_126.Module>): _126.Module;
                    fromAmino(object: _126.ModuleAmino): _126.Module;
                    toAmino(message: _126.Module): _126.ModuleAmino;
                    fromAminoMsg(object: _126.ModuleAminoMsg): _126.Module;
                    toAminoMsg(message: _126.Module): _126.ModuleAminoMsg;
                    fromProtoMsg(message: _126.ModuleProtoMsg): _126.Module;
                    toProto(message: _126.Module): Uint8Array;
                    toProtoMsg(message: _126.Module): _126.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _371.MsgClientImpl;
            QueryClientImpl: typeof _352.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _129.QueryGroupInfoRequest): Promise<_129.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _129.QueryGroupPolicyInfoRequest): Promise<_129.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _129.QueryGroupMembersRequest): Promise<_129.QueryGroupMembersResponse>;
                groupsByAdmin(request: _129.QueryGroupsByAdminRequest): Promise<_129.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _129.QueryGroupPoliciesByGroupRequest): Promise<_129.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _129.QueryGroupPoliciesByAdminRequest): Promise<_129.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _129.QueryProposalRequest): Promise<_129.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _129.QueryProposalsByGroupPolicyRequest): Promise<_129.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _129.QueryVoteByProposalVoterRequest): Promise<_129.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _129.QueryVotesByProposalRequest): Promise<_129.QueryVotesByProposalResponse>;
                votesByVoter(request: _129.QueryVotesByVoterRequest): Promise<_129.QueryVotesByVoterResponse>;
                groupsByMember(request: _129.QueryGroupsByMemberRequest): Promise<_129.QueryGroupsByMemberResponse>;
                tallyResult(request: _129.QueryTallyResultRequest): Promise<_129.QueryTallyResultResponse>;
                groups(request?: _129.QueryGroupsRequest): Promise<_129.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _331.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _130.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _130.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _130.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _130.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _130.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _130.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _130.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _130.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _130.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _130.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _130.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _130.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _130.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _130.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _130.MsgCreateGroup): {
                        typeUrl: string;
                        value: _130.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _130.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _130.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _130.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _130.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _130.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _130.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _130.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _130.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _130.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _130.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _130.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _130.MsgWithdrawProposal;
                    };
                    vote(value: _130.MsgVote): {
                        typeUrl: string;
                        value: _130.MsgVote;
                    };
                    exec(value: _130.MsgExec): {
                        typeUrl: string;
                        value: _130.MsgExec;
                    };
                    leaveGroup(value: _130.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _130.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _130.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _130.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _130.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _130.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _130.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _130.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _130.MsgCreateGroup): {
                        typeUrl: string;
                        value: _130.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _130.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _130.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _130.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _130.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _130.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _130.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _130.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _130.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _130.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _130.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _130.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _130.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _130.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _130.MsgWithdrawProposal;
                    };
                    vote(value: _130.MsgVote): {
                        typeUrl: string;
                        value: _130.MsgVote;
                    };
                    exec(value: _130.MsgExec): {
                        typeUrl: string;
                        value: _130.MsgExec;
                    };
                    leaveGroup(value: _130.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _130.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _130.MsgCreateGroup) => _130.MsgCreateGroupAmino;
                    fromAmino: (object: _130.MsgCreateGroupAmino) => _130.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupMembers) => _130.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _130.MsgUpdateGroupMembersAmino) => _130.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupAdmin) => _130.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _130.MsgUpdateGroupAdminAmino) => _130.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupMetadata) => _130.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _130.MsgUpdateGroupMetadataAmino) => _130.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _130.MsgCreateGroupPolicy) => _130.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _130.MsgCreateGroupPolicyAmino) => _130.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _130.MsgCreateGroupWithPolicy) => _130.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _130.MsgCreateGroupWithPolicyAmino) => _130.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupPolicyAdmin) => _130.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _130.MsgUpdateGroupPolicyAdminAmino) => _130.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupPolicyDecisionPolicy) => _130.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _130.MsgUpdateGroupPolicyDecisionPolicyAmino) => _130.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateGroupPolicyMetadata) => _130.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _130.MsgUpdateGroupPolicyMetadataAmino) => _130.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _130.MsgSubmitProposal) => _130.MsgSubmitProposalAmino;
                    fromAmino: (object: _130.MsgSubmitProposalAmino) => _130.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _130.MsgWithdrawProposal) => _130.MsgWithdrawProposalAmino;
                    fromAmino: (object: _130.MsgWithdrawProposalAmino) => _130.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _130.MsgVote) => _130.MsgVoteAmino;
                    fromAmino: (object: _130.MsgVoteAmino) => _130.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _130.MsgExec) => _130.MsgExecAmino;
                    fromAmino: (object: _130.MsgExecAmino) => _130.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _130.MsgLeaveGroup) => _130.MsgLeaveGroupAmino;
                    fromAmino: (object: _130.MsgLeaveGroupAmino) => _130.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _131.VoteOption;
            voteOptionToJSON(object: _131.VoteOption): string;
            proposalStatusFromJSON(object: any): _131.ProposalStatus;
            proposalStatusToJSON(object: _131.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _131.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _131.ProposalExecutorResult): string;
            VoteOption: typeof _131.VoteOption;
            VoteOptionSDKType: typeof _131.VoteOption;
            VoteOptionAmino: typeof _131.VoteOption;
            ProposalStatus: typeof _131.ProposalStatus;
            ProposalStatusSDKType: typeof _131.ProposalStatus;
            ProposalStatusAmino: typeof _131.ProposalStatus;
            ProposalExecutorResult: typeof _131.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _131.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _131.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _131.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Member;
                fromPartial(object: Partial<_131.Member>): _131.Member;
                fromAmino(object: _131.MemberAmino): _131.Member;
                toAmino(message: _131.Member): _131.MemberAmino;
                fromAminoMsg(object: _131.MemberAminoMsg): _131.Member;
                toAminoMsg(message: _131.Member): _131.MemberAminoMsg;
                fromProtoMsg(message: _131.MemberProtoMsg): _131.Member;
                toProto(message: _131.Member): Uint8Array;
                toProtoMsg(message: _131.Member): _131.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _131.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MemberRequest;
                fromPartial(object: Partial<_131.MemberRequest>): _131.MemberRequest;
                fromAmino(object: _131.MemberRequestAmino): _131.MemberRequest;
                toAmino(message: _131.MemberRequest): _131.MemberRequestAmino;
                fromAminoMsg(object: _131.MemberRequestAminoMsg): _131.MemberRequest;
                toAminoMsg(message: _131.MemberRequest): _131.MemberRequestAminoMsg;
                fromProtoMsg(message: _131.MemberRequestProtoMsg): _131.MemberRequest;
                toProto(message: _131.MemberRequest): Uint8Array;
                toProtoMsg(message: _131.MemberRequest): _131.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _131.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_131.ThresholdDecisionPolicy>): _131.ThresholdDecisionPolicy;
                fromAmino(object: _131.ThresholdDecisionPolicyAmino): _131.ThresholdDecisionPolicy;
                toAmino(message: _131.ThresholdDecisionPolicy): _131.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _131.ThresholdDecisionPolicyAminoMsg): _131.ThresholdDecisionPolicy;
                toAminoMsg(message: _131.ThresholdDecisionPolicy): _131.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _131.ThresholdDecisionPolicyProtoMsg): _131.ThresholdDecisionPolicy;
                toProto(message: _131.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _131.ThresholdDecisionPolicy): _131.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _131.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.PercentageDecisionPolicy;
                fromPartial(object: Partial<_131.PercentageDecisionPolicy>): _131.PercentageDecisionPolicy;
                fromAmino(object: _131.PercentageDecisionPolicyAmino): _131.PercentageDecisionPolicy;
                toAmino(message: _131.PercentageDecisionPolicy): _131.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _131.PercentageDecisionPolicyAminoMsg): _131.PercentageDecisionPolicy;
                toAminoMsg(message: _131.PercentageDecisionPolicy): _131.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _131.PercentageDecisionPolicyProtoMsg): _131.PercentageDecisionPolicy;
                toProto(message: _131.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _131.PercentageDecisionPolicy): _131.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _131.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.DecisionPolicyWindows;
                fromPartial(object: Partial<_131.DecisionPolicyWindows>): _131.DecisionPolicyWindows;
                fromAmino(object: _131.DecisionPolicyWindowsAmino): _131.DecisionPolicyWindows;
                toAmino(message: _131.DecisionPolicyWindows): _131.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _131.DecisionPolicyWindowsAminoMsg): _131.DecisionPolicyWindows;
                toAminoMsg(message: _131.DecisionPolicyWindows): _131.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _131.DecisionPolicyWindowsProtoMsg): _131.DecisionPolicyWindows;
                toProto(message: _131.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _131.DecisionPolicyWindows): _131.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _131.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GroupInfo;
                fromPartial(object: Partial<_131.GroupInfo>): _131.GroupInfo;
                fromAmino(object: _131.GroupInfoAmino): _131.GroupInfo;
                toAmino(message: _131.GroupInfo): _131.GroupInfoAmino;
                fromAminoMsg(object: _131.GroupInfoAminoMsg): _131.GroupInfo;
                toAminoMsg(message: _131.GroupInfo): _131.GroupInfoAminoMsg;
                fromProtoMsg(message: _131.GroupInfoProtoMsg): _131.GroupInfo;
                toProto(message: _131.GroupInfo): Uint8Array;
                toProtoMsg(message: _131.GroupInfo): _131.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _131.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GroupMember;
                fromPartial(object: Partial<_131.GroupMember>): _131.GroupMember;
                fromAmino(object: _131.GroupMemberAmino): _131.GroupMember;
                toAmino(message: _131.GroupMember): _131.GroupMemberAmino;
                fromAminoMsg(object: _131.GroupMemberAminoMsg): _131.GroupMember;
                toAminoMsg(message: _131.GroupMember): _131.GroupMemberAminoMsg;
                fromProtoMsg(message: _131.GroupMemberProtoMsg): _131.GroupMember;
                toProto(message: _131.GroupMember): Uint8Array;
                toProtoMsg(message: _131.GroupMember): _131.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _131.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GroupPolicyInfo;
                fromPartial(object: Partial<_131.GroupPolicyInfo>): _131.GroupPolicyInfo;
                fromAmino(object: _131.GroupPolicyInfoAmino): _131.GroupPolicyInfo;
                toAmino(message: _131.GroupPolicyInfo): _131.GroupPolicyInfoAmino;
                fromAminoMsg(object: _131.GroupPolicyInfoAminoMsg): _131.GroupPolicyInfo;
                toAminoMsg(message: _131.GroupPolicyInfo): _131.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _131.GroupPolicyInfoProtoMsg): _131.GroupPolicyInfo;
                toProto(message: _131.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _131.GroupPolicyInfo): _131.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _131.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Proposal;
                fromPartial(object: Partial<_131.Proposal>): _131.Proposal;
                fromAmino(object: _131.ProposalAmino): _131.Proposal;
                toAmino(message: _131.Proposal): _131.ProposalAmino;
                fromAminoMsg(object: _131.ProposalAminoMsg): _131.Proposal;
                toAminoMsg(message: _131.Proposal): _131.ProposalAminoMsg;
                fromProtoMsg(message: _131.ProposalProtoMsg): _131.Proposal;
                toProto(message: _131.Proposal): Uint8Array;
                toProtoMsg(message: _131.Proposal): _131.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _131.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.TallyResult;
                fromPartial(object: Partial<_131.TallyResult>): _131.TallyResult;
                fromAmino(object: _131.TallyResultAmino): _131.TallyResult;
                toAmino(message: _131.TallyResult): _131.TallyResultAmino;
                fromAminoMsg(object: _131.TallyResultAminoMsg): _131.TallyResult;
                toAminoMsg(message: _131.TallyResult): _131.TallyResultAminoMsg;
                fromProtoMsg(message: _131.TallyResultProtoMsg): _131.TallyResult;
                toProto(message: _131.TallyResult): Uint8Array;
                toProtoMsg(message: _131.TallyResult): _131.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _131.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Vote;
                fromPartial(object: Partial<_131.Vote>): _131.Vote;
                fromAmino(object: _131.VoteAmino): _131.Vote;
                toAmino(message: _131.Vote): _131.VoteAmino;
                fromAminoMsg(object: _131.VoteAminoMsg): _131.Vote;
                toAminoMsg(message: _131.Vote): _131.VoteAminoMsg;
                fromProtoMsg(message: _131.VoteProtoMsg): _131.Vote;
                toProto(message: _131.Vote): Uint8Array;
                toProtoMsg(message: _131.Vote): _131.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _131.ThresholdDecisionPolicy | _131.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _130.Exec;
            execToJSON(object: _130.Exec): string;
            Exec: typeof _130.Exec;
            ExecSDKType: typeof _130.Exec;
            ExecAmino: typeof _130.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroup;
                fromPartial(object: Partial<_130.MsgCreateGroup>): _130.MsgCreateGroup;
                fromAmino(object: _130.MsgCreateGroupAmino): _130.MsgCreateGroup;
                toAmino(message: _130.MsgCreateGroup): _130.MsgCreateGroupAmino;
                fromAminoMsg(object: _130.MsgCreateGroupAminoMsg): _130.MsgCreateGroup;
                toAminoMsg(message: _130.MsgCreateGroup): _130.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupProtoMsg): _130.MsgCreateGroup;
                toProto(message: _130.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroup): _130.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroupResponse;
                fromPartial(object: Partial<_130.MsgCreateGroupResponse>): _130.MsgCreateGroupResponse;
                fromAmino(object: _130.MsgCreateGroupResponseAmino): _130.MsgCreateGroupResponse;
                toAmino(message: _130.MsgCreateGroupResponse): _130.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _130.MsgCreateGroupResponseAminoMsg): _130.MsgCreateGroupResponse;
                toAminoMsg(message: _130.MsgCreateGroupResponse): _130.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupResponseProtoMsg): _130.MsgCreateGroupResponse;
                toProto(message: _130.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroupResponse): _130.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_130.MsgUpdateGroupMembers>): _130.MsgUpdateGroupMembers;
                fromAmino(object: _130.MsgUpdateGroupMembersAmino): _130.MsgUpdateGroupMembers;
                toAmino(message: _130.MsgUpdateGroupMembers): _130.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupMembersAminoMsg): _130.MsgUpdateGroupMembers;
                toAminoMsg(message: _130.MsgUpdateGroupMembers): _130.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupMembersProtoMsg): _130.MsgUpdateGroupMembers;
                toProto(message: _130.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupMembers): _130.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupMembersResponse>): _130.MsgUpdateGroupMembersResponse;
                fromAmino(_: _130.MsgUpdateGroupMembersResponseAmino): _130.MsgUpdateGroupMembersResponse;
                toAmino(_: _130.MsgUpdateGroupMembersResponse): _130.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupMembersResponseAminoMsg): _130.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _130.MsgUpdateGroupMembersResponse): _130.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupMembersResponseProtoMsg): _130.MsgUpdateGroupMembersResponse;
                toProto(message: _130.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupMembersResponse): _130.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_130.MsgUpdateGroupAdmin>): _130.MsgUpdateGroupAdmin;
                fromAmino(object: _130.MsgUpdateGroupAdminAmino): _130.MsgUpdateGroupAdmin;
                toAmino(message: _130.MsgUpdateGroupAdmin): _130.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupAdminAminoMsg): _130.MsgUpdateGroupAdmin;
                toAminoMsg(message: _130.MsgUpdateGroupAdmin): _130.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupAdminProtoMsg): _130.MsgUpdateGroupAdmin;
                toProto(message: _130.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupAdmin): _130.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupAdminResponse>): _130.MsgUpdateGroupAdminResponse;
                fromAmino(_: _130.MsgUpdateGroupAdminResponseAmino): _130.MsgUpdateGroupAdminResponse;
                toAmino(_: _130.MsgUpdateGroupAdminResponse): _130.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupAdminResponseAminoMsg): _130.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _130.MsgUpdateGroupAdminResponse): _130.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupAdminResponseProtoMsg): _130.MsgUpdateGroupAdminResponse;
                toProto(message: _130.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupAdminResponse): _130.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_130.MsgUpdateGroupMetadata>): _130.MsgUpdateGroupMetadata;
                fromAmino(object: _130.MsgUpdateGroupMetadataAmino): _130.MsgUpdateGroupMetadata;
                toAmino(message: _130.MsgUpdateGroupMetadata): _130.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupMetadataAminoMsg): _130.MsgUpdateGroupMetadata;
                toAminoMsg(message: _130.MsgUpdateGroupMetadata): _130.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupMetadataProtoMsg): _130.MsgUpdateGroupMetadata;
                toProto(message: _130.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupMetadata): _130.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupMetadataResponse>): _130.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _130.MsgUpdateGroupMetadataResponseAmino): _130.MsgUpdateGroupMetadataResponse;
                toAmino(_: _130.MsgUpdateGroupMetadataResponse): _130.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupMetadataResponseAminoMsg): _130.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _130.MsgUpdateGroupMetadataResponse): _130.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupMetadataResponseProtoMsg): _130.MsgUpdateGroupMetadataResponse;
                toProto(message: _130.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupMetadataResponse): _130.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_130.MsgCreateGroupPolicy>): _130.MsgCreateGroupPolicy;
                fromAmino(object: _130.MsgCreateGroupPolicyAmino): _130.MsgCreateGroupPolicy;
                toAmino(message: _130.MsgCreateGroupPolicy): _130.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _130.MsgCreateGroupPolicyAminoMsg): _130.MsgCreateGroupPolicy;
                toAminoMsg(message: _130.MsgCreateGroupPolicy): _130.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupPolicyProtoMsg): _130.MsgCreateGroupPolicy;
                toProto(message: _130.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroupPolicy): _130.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_130.MsgCreateGroupPolicyResponse>): _130.MsgCreateGroupPolicyResponse;
                fromAmino(object: _130.MsgCreateGroupPolicyResponseAmino): _130.MsgCreateGroupPolicyResponse;
                toAmino(message: _130.MsgCreateGroupPolicyResponse): _130.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _130.MsgCreateGroupPolicyResponseAminoMsg): _130.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _130.MsgCreateGroupPolicyResponse): _130.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupPolicyResponseProtoMsg): _130.MsgCreateGroupPolicyResponse;
                toProto(message: _130.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroupPolicyResponse): _130.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_130.MsgUpdateGroupPolicyAdmin>): _130.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _130.MsgUpdateGroupPolicyAdminAmino): _130.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _130.MsgUpdateGroupPolicyAdmin): _130.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyAdminAminoMsg): _130.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyAdmin): _130.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyAdminProtoMsg): _130.MsgUpdateGroupPolicyAdmin;
                toProto(message: _130.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyAdmin): _130.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupPolicyAdminResponse>): _130.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _130.MsgUpdateGroupPolicyAdminResponseAmino): _130.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _130.MsgUpdateGroupPolicyAdminResponse): _130.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyAdminResponseAminoMsg): _130.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyAdminResponse): _130.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyAdminResponseProtoMsg): _130.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _130.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyAdminResponse): _130.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_130.MsgCreateGroupWithPolicy>): _130.MsgCreateGroupWithPolicy;
                fromAmino(object: _130.MsgCreateGroupWithPolicyAmino): _130.MsgCreateGroupWithPolicy;
                toAmino(message: _130.MsgCreateGroupWithPolicy): _130.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _130.MsgCreateGroupWithPolicyAminoMsg): _130.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _130.MsgCreateGroupWithPolicy): _130.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupWithPolicyProtoMsg): _130.MsgCreateGroupWithPolicy;
                toProto(message: _130.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroupWithPolicy): _130.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _130.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_130.MsgCreateGroupWithPolicyResponse>): _130.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _130.MsgCreateGroupWithPolicyResponseAmino): _130.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _130.MsgCreateGroupWithPolicyResponse): _130.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _130.MsgCreateGroupWithPolicyResponseAminoMsg): _130.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _130.MsgCreateGroupWithPolicyResponse): _130.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _130.MsgCreateGroupWithPolicyResponseProtoMsg): _130.MsgCreateGroupWithPolicyResponse;
                toProto(message: _130.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _130.MsgCreateGroupWithPolicyResponse): _130.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_130.MsgUpdateGroupPolicyDecisionPolicy>): _130.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _130.MsgUpdateGroupPolicyDecisionPolicyAmino): _130.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _130.MsgUpdateGroupPolicyDecisionPolicy): _130.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _130.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicy): _130.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _130.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _130.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicy): _130.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupPolicyDecisionPolicyResponse>): _130.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _130.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _130.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _130.MsgUpdateGroupPolicyDecisionPolicyResponse): _130.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _130.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicyResponse): _130.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _130.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _130.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyDecisionPolicyResponse): _130.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _130.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_130.MsgUpdateGroupPolicyMetadata>): _130.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _130.MsgUpdateGroupPolicyMetadataAmino): _130.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _130.MsgUpdateGroupPolicyMetadata): _130.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyMetadataAminoMsg): _130.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyMetadata): _130.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyMetadataProtoMsg): _130.MsgUpdateGroupPolicyMetadata;
                toProto(message: _130.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyMetadata): _130.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_130.MsgUpdateGroupPolicyMetadataResponse>): _130.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _130.MsgUpdateGroupPolicyMetadataResponseAmino): _130.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _130.MsgUpdateGroupPolicyMetadataResponse): _130.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _130.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _130.MsgUpdateGroupPolicyMetadataResponse): _130.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _130.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _130.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateGroupPolicyMetadataResponse): _130.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _130.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgSubmitProposal;
                fromPartial(object: Partial<_130.MsgSubmitProposal>): _130.MsgSubmitProposal;
                fromAmino(object: _130.MsgSubmitProposalAmino): _130.MsgSubmitProposal;
                toAmino(message: _130.MsgSubmitProposal): _130.MsgSubmitProposalAmino;
                fromAminoMsg(object: _130.MsgSubmitProposalAminoMsg): _130.MsgSubmitProposal;
                toAminoMsg(message: _130.MsgSubmitProposal): _130.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _130.MsgSubmitProposalProtoMsg): _130.MsgSubmitProposal;
                toProto(message: _130.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _130.MsgSubmitProposal): _130.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _130.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_130.MsgSubmitProposalResponse>): _130.MsgSubmitProposalResponse;
                fromAmino(object: _130.MsgSubmitProposalResponseAmino): _130.MsgSubmitProposalResponse;
                toAmino(message: _130.MsgSubmitProposalResponse): _130.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _130.MsgSubmitProposalResponseAminoMsg): _130.MsgSubmitProposalResponse;
                toAminoMsg(message: _130.MsgSubmitProposalResponse): _130.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _130.MsgSubmitProposalResponseProtoMsg): _130.MsgSubmitProposalResponse;
                toProto(message: _130.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _130.MsgSubmitProposalResponse): _130.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _130.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgWithdrawProposal;
                fromPartial(object: Partial<_130.MsgWithdrawProposal>): _130.MsgWithdrawProposal;
                fromAmino(object: _130.MsgWithdrawProposalAmino): _130.MsgWithdrawProposal;
                toAmino(message: _130.MsgWithdrawProposal): _130.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _130.MsgWithdrawProposalAminoMsg): _130.MsgWithdrawProposal;
                toAminoMsg(message: _130.MsgWithdrawProposal): _130.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _130.MsgWithdrawProposalProtoMsg): _130.MsgWithdrawProposal;
                toProto(message: _130.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _130.MsgWithdrawProposal): _130.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _130.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_130.MsgWithdrawProposalResponse>): _130.MsgWithdrawProposalResponse;
                fromAmino(_: _130.MsgWithdrawProposalResponseAmino): _130.MsgWithdrawProposalResponse;
                toAmino(_: _130.MsgWithdrawProposalResponse): _130.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _130.MsgWithdrawProposalResponseAminoMsg): _130.MsgWithdrawProposalResponse;
                toAminoMsg(message: _130.MsgWithdrawProposalResponse): _130.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _130.MsgWithdrawProposalResponseProtoMsg): _130.MsgWithdrawProposalResponse;
                toProto(message: _130.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _130.MsgWithdrawProposalResponse): _130.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _130.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgVote;
                fromPartial(object: Partial<_130.MsgVote>): _130.MsgVote;
                fromAmino(object: _130.MsgVoteAmino): _130.MsgVote;
                toAmino(message: _130.MsgVote): _130.MsgVoteAmino;
                fromAminoMsg(object: _130.MsgVoteAminoMsg): _130.MsgVote;
                toAminoMsg(message: _130.MsgVote): _130.MsgVoteAminoMsg;
                fromProtoMsg(message: _130.MsgVoteProtoMsg): _130.MsgVote;
                toProto(message: _130.MsgVote): Uint8Array;
                toProtoMsg(message: _130.MsgVote): _130.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _130.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgVoteResponse;
                fromPartial(_: Partial<_130.MsgVoteResponse>): _130.MsgVoteResponse;
                fromAmino(_: _130.MsgVoteResponseAmino): _130.MsgVoteResponse;
                toAmino(_: _130.MsgVoteResponse): _130.MsgVoteResponseAmino;
                fromAminoMsg(object: _130.MsgVoteResponseAminoMsg): _130.MsgVoteResponse;
                toAminoMsg(message: _130.MsgVoteResponse): _130.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _130.MsgVoteResponseProtoMsg): _130.MsgVoteResponse;
                toProto(message: _130.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _130.MsgVoteResponse): _130.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _130.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgExec;
                fromPartial(object: Partial<_130.MsgExec>): _130.MsgExec;
                fromAmino(object: _130.MsgExecAmino): _130.MsgExec;
                toAmino(message: _130.MsgExec): _130.MsgExecAmino;
                fromAminoMsg(object: _130.MsgExecAminoMsg): _130.MsgExec;
                toAminoMsg(message: _130.MsgExec): _130.MsgExecAminoMsg;
                fromProtoMsg(message: _130.MsgExecProtoMsg): _130.MsgExec;
                toProto(message: _130.MsgExec): Uint8Array;
                toProtoMsg(message: _130.MsgExec): _130.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _130.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgExecResponse;
                fromPartial(object: Partial<_130.MsgExecResponse>): _130.MsgExecResponse;
                fromAmino(object: _130.MsgExecResponseAmino): _130.MsgExecResponse;
                toAmino(message: _130.MsgExecResponse): _130.MsgExecResponseAmino;
                fromAminoMsg(object: _130.MsgExecResponseAminoMsg): _130.MsgExecResponse;
                toAminoMsg(message: _130.MsgExecResponse): _130.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _130.MsgExecResponseProtoMsg): _130.MsgExecResponse;
                toProto(message: _130.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _130.MsgExecResponse): _130.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _130.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgLeaveGroup;
                fromPartial(object: Partial<_130.MsgLeaveGroup>): _130.MsgLeaveGroup;
                fromAmino(object: _130.MsgLeaveGroupAmino): _130.MsgLeaveGroup;
                toAmino(message: _130.MsgLeaveGroup): _130.MsgLeaveGroupAmino;
                fromAminoMsg(object: _130.MsgLeaveGroupAminoMsg): _130.MsgLeaveGroup;
                toAminoMsg(message: _130.MsgLeaveGroup): _130.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _130.MsgLeaveGroupProtoMsg): _130.MsgLeaveGroup;
                toProto(message: _130.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _130.MsgLeaveGroup): _130.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _130.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_130.MsgLeaveGroupResponse>): _130.MsgLeaveGroupResponse;
                fromAmino(_: _130.MsgLeaveGroupResponseAmino): _130.MsgLeaveGroupResponse;
                toAmino(_: _130.MsgLeaveGroupResponse): _130.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _130.MsgLeaveGroupResponseAminoMsg): _130.MsgLeaveGroupResponse;
                toAminoMsg(message: _130.MsgLeaveGroupResponse): _130.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _130.MsgLeaveGroupResponseProtoMsg): _130.MsgLeaveGroupResponse;
                toProto(message: _130.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _130.MsgLeaveGroupResponse): _130.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupInfoRequest;
                fromPartial(object: Partial<_129.QueryGroupInfoRequest>): _129.QueryGroupInfoRequest;
                fromAmino(object: _129.QueryGroupInfoRequestAmino): _129.QueryGroupInfoRequest;
                toAmino(message: _129.QueryGroupInfoRequest): _129.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _129.QueryGroupInfoRequestAminoMsg): _129.QueryGroupInfoRequest;
                toAminoMsg(message: _129.QueryGroupInfoRequest): _129.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupInfoRequestProtoMsg): _129.QueryGroupInfoRequest;
                toProto(message: _129.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupInfoRequest): _129.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupInfoResponse;
                fromPartial(object: Partial<_129.QueryGroupInfoResponse>): _129.QueryGroupInfoResponse;
                fromAmino(object: _129.QueryGroupInfoResponseAmino): _129.QueryGroupInfoResponse;
                toAmino(message: _129.QueryGroupInfoResponse): _129.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _129.QueryGroupInfoResponseAminoMsg): _129.QueryGroupInfoResponse;
                toAminoMsg(message: _129.QueryGroupInfoResponse): _129.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupInfoResponseProtoMsg): _129.QueryGroupInfoResponse;
                toProto(message: _129.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupInfoResponse): _129.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_129.QueryGroupPolicyInfoRequest>): _129.QueryGroupPolicyInfoRequest;
                fromAmino(object: _129.QueryGroupPolicyInfoRequestAmino): _129.QueryGroupPolicyInfoRequest;
                toAmino(message: _129.QueryGroupPolicyInfoRequest): _129.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _129.QueryGroupPolicyInfoRequestAminoMsg): _129.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _129.QueryGroupPolicyInfoRequest): _129.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPolicyInfoRequestProtoMsg): _129.QueryGroupPolicyInfoRequest;
                toProto(message: _129.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPolicyInfoRequest): _129.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_129.QueryGroupPolicyInfoResponse>): _129.QueryGroupPolicyInfoResponse;
                fromAmino(object: _129.QueryGroupPolicyInfoResponseAmino): _129.QueryGroupPolicyInfoResponse;
                toAmino(message: _129.QueryGroupPolicyInfoResponse): _129.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _129.QueryGroupPolicyInfoResponseAminoMsg): _129.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _129.QueryGroupPolicyInfoResponse): _129.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPolicyInfoResponseProtoMsg): _129.QueryGroupPolicyInfoResponse;
                toProto(message: _129.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPolicyInfoResponse): _129.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupMembersRequest;
                fromPartial(object: Partial<_129.QueryGroupMembersRequest>): _129.QueryGroupMembersRequest;
                fromAmino(object: _129.QueryGroupMembersRequestAmino): _129.QueryGroupMembersRequest;
                toAmino(message: _129.QueryGroupMembersRequest): _129.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _129.QueryGroupMembersRequestAminoMsg): _129.QueryGroupMembersRequest;
                toAminoMsg(message: _129.QueryGroupMembersRequest): _129.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupMembersRequestProtoMsg): _129.QueryGroupMembersRequest;
                toProto(message: _129.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupMembersRequest): _129.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupMembersResponse;
                fromPartial(object: Partial<_129.QueryGroupMembersResponse>): _129.QueryGroupMembersResponse;
                fromAmino(object: _129.QueryGroupMembersResponseAmino): _129.QueryGroupMembersResponse;
                toAmino(message: _129.QueryGroupMembersResponse): _129.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _129.QueryGroupMembersResponseAminoMsg): _129.QueryGroupMembersResponse;
                toAminoMsg(message: _129.QueryGroupMembersResponse): _129.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupMembersResponseProtoMsg): _129.QueryGroupMembersResponse;
                toProto(message: _129.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupMembersResponse): _129.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_129.QueryGroupsByAdminRequest>): _129.QueryGroupsByAdminRequest;
                fromAmino(object: _129.QueryGroupsByAdminRequestAmino): _129.QueryGroupsByAdminRequest;
                toAmino(message: _129.QueryGroupsByAdminRequest): _129.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _129.QueryGroupsByAdminRequestAminoMsg): _129.QueryGroupsByAdminRequest;
                toAminoMsg(message: _129.QueryGroupsByAdminRequest): _129.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsByAdminRequestProtoMsg): _129.QueryGroupsByAdminRequest;
                toProto(message: _129.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsByAdminRequest): _129.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_129.QueryGroupsByAdminResponse>): _129.QueryGroupsByAdminResponse;
                fromAmino(object: _129.QueryGroupsByAdminResponseAmino): _129.QueryGroupsByAdminResponse;
                toAmino(message: _129.QueryGroupsByAdminResponse): _129.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _129.QueryGroupsByAdminResponseAminoMsg): _129.QueryGroupsByAdminResponse;
                toAminoMsg(message: _129.QueryGroupsByAdminResponse): _129.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsByAdminResponseProtoMsg): _129.QueryGroupsByAdminResponse;
                toProto(message: _129.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsByAdminResponse): _129.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_129.QueryGroupPoliciesByGroupRequest>): _129.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _129.QueryGroupPoliciesByGroupRequestAmino): _129.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _129.QueryGroupPoliciesByGroupRequest): _129.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _129.QueryGroupPoliciesByGroupRequestAminoMsg): _129.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _129.QueryGroupPoliciesByGroupRequest): _129.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPoliciesByGroupRequestProtoMsg): _129.QueryGroupPoliciesByGroupRequest;
                toProto(message: _129.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPoliciesByGroupRequest): _129.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_129.QueryGroupPoliciesByGroupResponse>): _129.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _129.QueryGroupPoliciesByGroupResponseAmino): _129.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _129.QueryGroupPoliciesByGroupResponse): _129.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _129.QueryGroupPoliciesByGroupResponseAminoMsg): _129.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _129.QueryGroupPoliciesByGroupResponse): _129.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPoliciesByGroupResponseProtoMsg): _129.QueryGroupPoliciesByGroupResponse;
                toProto(message: _129.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPoliciesByGroupResponse): _129.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_129.QueryGroupPoliciesByAdminRequest>): _129.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _129.QueryGroupPoliciesByAdminRequestAmino): _129.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _129.QueryGroupPoliciesByAdminRequest): _129.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _129.QueryGroupPoliciesByAdminRequestAminoMsg): _129.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _129.QueryGroupPoliciesByAdminRequest): _129.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPoliciesByAdminRequestProtoMsg): _129.QueryGroupPoliciesByAdminRequest;
                toProto(message: _129.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPoliciesByAdminRequest): _129.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_129.QueryGroupPoliciesByAdminResponse>): _129.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _129.QueryGroupPoliciesByAdminResponseAmino): _129.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _129.QueryGroupPoliciesByAdminResponse): _129.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _129.QueryGroupPoliciesByAdminResponseAminoMsg): _129.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _129.QueryGroupPoliciesByAdminResponse): _129.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupPoliciesByAdminResponseProtoMsg): _129.QueryGroupPoliciesByAdminResponse;
                toProto(message: _129.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupPoliciesByAdminResponse): _129.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _129.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryProposalRequest;
                fromPartial(object: Partial<_129.QueryProposalRequest>): _129.QueryProposalRequest;
                fromAmino(object: _129.QueryProposalRequestAmino): _129.QueryProposalRequest;
                toAmino(message: _129.QueryProposalRequest): _129.QueryProposalRequestAmino;
                fromAminoMsg(object: _129.QueryProposalRequestAminoMsg): _129.QueryProposalRequest;
                toAminoMsg(message: _129.QueryProposalRequest): _129.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _129.QueryProposalRequestProtoMsg): _129.QueryProposalRequest;
                toProto(message: _129.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProposalRequest): _129.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _129.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryProposalResponse;
                fromPartial(object: Partial<_129.QueryProposalResponse>): _129.QueryProposalResponse;
                fromAmino(object: _129.QueryProposalResponseAmino): _129.QueryProposalResponse;
                toAmino(message: _129.QueryProposalResponse): _129.QueryProposalResponseAmino;
                fromAminoMsg(object: _129.QueryProposalResponseAminoMsg): _129.QueryProposalResponse;
                toAminoMsg(message: _129.QueryProposalResponse): _129.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _129.QueryProposalResponseProtoMsg): _129.QueryProposalResponse;
                toProto(message: _129.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProposalResponse): _129.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _129.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_129.QueryProposalsByGroupPolicyRequest>): _129.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _129.QueryProposalsByGroupPolicyRequestAmino): _129.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _129.QueryProposalsByGroupPolicyRequest): _129.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _129.QueryProposalsByGroupPolicyRequestAminoMsg): _129.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _129.QueryProposalsByGroupPolicyRequest): _129.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _129.QueryProposalsByGroupPolicyRequestProtoMsg): _129.QueryProposalsByGroupPolicyRequest;
                toProto(message: _129.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProposalsByGroupPolicyRequest): _129.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _129.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_129.QueryProposalsByGroupPolicyResponse>): _129.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _129.QueryProposalsByGroupPolicyResponseAmino): _129.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _129.QueryProposalsByGroupPolicyResponse): _129.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _129.QueryProposalsByGroupPolicyResponseAminoMsg): _129.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _129.QueryProposalsByGroupPolicyResponse): _129.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _129.QueryProposalsByGroupPolicyResponseProtoMsg): _129.QueryProposalsByGroupPolicyResponse;
                toProto(message: _129.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProposalsByGroupPolicyResponse): _129.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _129.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_129.QueryVoteByProposalVoterRequest>): _129.QueryVoteByProposalVoterRequest;
                fromAmino(object: _129.QueryVoteByProposalVoterRequestAmino): _129.QueryVoteByProposalVoterRequest;
                toAmino(message: _129.QueryVoteByProposalVoterRequest): _129.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _129.QueryVoteByProposalVoterRequestAminoMsg): _129.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _129.QueryVoteByProposalVoterRequest): _129.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _129.QueryVoteByProposalVoterRequestProtoMsg): _129.QueryVoteByProposalVoterRequest;
                toProto(message: _129.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _129.QueryVoteByProposalVoterRequest): _129.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _129.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_129.QueryVoteByProposalVoterResponse>): _129.QueryVoteByProposalVoterResponse;
                fromAmino(object: _129.QueryVoteByProposalVoterResponseAmino): _129.QueryVoteByProposalVoterResponse;
                toAmino(message: _129.QueryVoteByProposalVoterResponse): _129.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _129.QueryVoteByProposalVoterResponseAminoMsg): _129.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _129.QueryVoteByProposalVoterResponse): _129.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _129.QueryVoteByProposalVoterResponseProtoMsg): _129.QueryVoteByProposalVoterResponse;
                toProto(message: _129.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _129.QueryVoteByProposalVoterResponse): _129.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _129.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_129.QueryVotesByProposalRequest>): _129.QueryVotesByProposalRequest;
                fromAmino(object: _129.QueryVotesByProposalRequestAmino): _129.QueryVotesByProposalRequest;
                toAmino(message: _129.QueryVotesByProposalRequest): _129.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _129.QueryVotesByProposalRequestAminoMsg): _129.QueryVotesByProposalRequest;
                toAminoMsg(message: _129.QueryVotesByProposalRequest): _129.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _129.QueryVotesByProposalRequestProtoMsg): _129.QueryVotesByProposalRequest;
                toProto(message: _129.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _129.QueryVotesByProposalRequest): _129.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _129.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_129.QueryVotesByProposalResponse>): _129.QueryVotesByProposalResponse;
                fromAmino(object: _129.QueryVotesByProposalResponseAmino): _129.QueryVotesByProposalResponse;
                toAmino(message: _129.QueryVotesByProposalResponse): _129.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _129.QueryVotesByProposalResponseAminoMsg): _129.QueryVotesByProposalResponse;
                toAminoMsg(message: _129.QueryVotesByProposalResponse): _129.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _129.QueryVotesByProposalResponseProtoMsg): _129.QueryVotesByProposalResponse;
                toProto(message: _129.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _129.QueryVotesByProposalResponse): _129.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _129.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_129.QueryVotesByVoterRequest>): _129.QueryVotesByVoterRequest;
                fromAmino(object: _129.QueryVotesByVoterRequestAmino): _129.QueryVotesByVoterRequest;
                toAmino(message: _129.QueryVotesByVoterRequest): _129.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _129.QueryVotesByVoterRequestAminoMsg): _129.QueryVotesByVoterRequest;
                toAminoMsg(message: _129.QueryVotesByVoterRequest): _129.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _129.QueryVotesByVoterRequestProtoMsg): _129.QueryVotesByVoterRequest;
                toProto(message: _129.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _129.QueryVotesByVoterRequest): _129.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _129.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_129.QueryVotesByVoterResponse>): _129.QueryVotesByVoterResponse;
                fromAmino(object: _129.QueryVotesByVoterResponseAmino): _129.QueryVotesByVoterResponse;
                toAmino(message: _129.QueryVotesByVoterResponse): _129.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _129.QueryVotesByVoterResponseAminoMsg): _129.QueryVotesByVoterResponse;
                toAminoMsg(message: _129.QueryVotesByVoterResponse): _129.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _129.QueryVotesByVoterResponseProtoMsg): _129.QueryVotesByVoterResponse;
                toProto(message: _129.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _129.QueryVotesByVoterResponse): _129.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_129.QueryGroupsByMemberRequest>): _129.QueryGroupsByMemberRequest;
                fromAmino(object: _129.QueryGroupsByMemberRequestAmino): _129.QueryGroupsByMemberRequest;
                toAmino(message: _129.QueryGroupsByMemberRequest): _129.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _129.QueryGroupsByMemberRequestAminoMsg): _129.QueryGroupsByMemberRequest;
                toAminoMsg(message: _129.QueryGroupsByMemberRequest): _129.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsByMemberRequestProtoMsg): _129.QueryGroupsByMemberRequest;
                toProto(message: _129.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsByMemberRequest): _129.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_129.QueryGroupsByMemberResponse>): _129.QueryGroupsByMemberResponse;
                fromAmino(object: _129.QueryGroupsByMemberResponseAmino): _129.QueryGroupsByMemberResponse;
                toAmino(message: _129.QueryGroupsByMemberResponse): _129.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _129.QueryGroupsByMemberResponseAminoMsg): _129.QueryGroupsByMemberResponse;
                toAminoMsg(message: _129.QueryGroupsByMemberResponse): _129.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsByMemberResponseProtoMsg): _129.QueryGroupsByMemberResponse;
                toProto(message: _129.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsByMemberResponse): _129.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _129.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryTallyResultRequest;
                fromPartial(object: Partial<_129.QueryTallyResultRequest>): _129.QueryTallyResultRequest;
                fromAmino(object: _129.QueryTallyResultRequestAmino): _129.QueryTallyResultRequest;
                toAmino(message: _129.QueryTallyResultRequest): _129.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _129.QueryTallyResultRequestAminoMsg): _129.QueryTallyResultRequest;
                toAminoMsg(message: _129.QueryTallyResultRequest): _129.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _129.QueryTallyResultRequestProtoMsg): _129.QueryTallyResultRequest;
                toProto(message: _129.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _129.QueryTallyResultRequest): _129.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _129.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryTallyResultResponse;
                fromPartial(object: Partial<_129.QueryTallyResultResponse>): _129.QueryTallyResultResponse;
                fromAmino(object: _129.QueryTallyResultResponseAmino): _129.QueryTallyResultResponse;
                toAmino(message: _129.QueryTallyResultResponse): _129.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _129.QueryTallyResultResponseAminoMsg): _129.QueryTallyResultResponse;
                toAminoMsg(message: _129.QueryTallyResultResponse): _129.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _129.QueryTallyResultResponseProtoMsg): _129.QueryTallyResultResponse;
                toProto(message: _129.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _129.QueryTallyResultResponse): _129.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _129.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsRequest;
                fromPartial(object: Partial<_129.QueryGroupsRequest>): _129.QueryGroupsRequest;
                fromAmino(object: _129.QueryGroupsRequestAmino): _129.QueryGroupsRequest;
                toAmino(message: _129.QueryGroupsRequest): _129.QueryGroupsRequestAmino;
                fromAminoMsg(object: _129.QueryGroupsRequestAminoMsg): _129.QueryGroupsRequest;
                toAminoMsg(message: _129.QueryGroupsRequest): _129.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsRequestProtoMsg): _129.QueryGroupsRequest;
                toProto(message: _129.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsRequest): _129.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _129.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryGroupsResponse;
                fromPartial(object: Partial<_129.QueryGroupsResponse>): _129.QueryGroupsResponse;
                fromAmino(object: _129.QueryGroupsResponseAmino): _129.QueryGroupsResponse;
                toAmino(message: _129.QueryGroupsResponse): _129.QueryGroupsResponseAmino;
                fromAminoMsg(object: _129.QueryGroupsResponseAminoMsg): _129.QueryGroupsResponse;
                toAminoMsg(message: _129.QueryGroupsResponse): _129.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryGroupsResponseProtoMsg): _129.QueryGroupsResponse;
                toProto(message: _129.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryGroupsResponse): _129.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                toAminoMsg(message: _128.GenesisState): _128.GenesisStateAminoMsg;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _127.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventCreateGroup;
                fromPartial(object: Partial<_127.EventCreateGroup>): _127.EventCreateGroup;
                fromAmino(object: _127.EventCreateGroupAmino): _127.EventCreateGroup;
                toAmino(message: _127.EventCreateGroup): _127.EventCreateGroupAmino;
                fromAminoMsg(object: _127.EventCreateGroupAminoMsg): _127.EventCreateGroup;
                toAminoMsg(message: _127.EventCreateGroup): _127.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _127.EventCreateGroupProtoMsg): _127.EventCreateGroup;
                toProto(message: _127.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _127.EventCreateGroup): _127.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _127.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventUpdateGroup;
                fromPartial(object: Partial<_127.EventUpdateGroup>): _127.EventUpdateGroup;
                fromAmino(object: _127.EventUpdateGroupAmino): _127.EventUpdateGroup;
                toAmino(message: _127.EventUpdateGroup): _127.EventUpdateGroupAmino;
                fromAminoMsg(object: _127.EventUpdateGroupAminoMsg): _127.EventUpdateGroup;
                toAminoMsg(message: _127.EventUpdateGroup): _127.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _127.EventUpdateGroupProtoMsg): _127.EventUpdateGroup;
                toProto(message: _127.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _127.EventUpdateGroup): _127.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _127.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventCreateGroupPolicy;
                fromPartial(object: Partial<_127.EventCreateGroupPolicy>): _127.EventCreateGroupPolicy;
                fromAmino(object: _127.EventCreateGroupPolicyAmino): _127.EventCreateGroupPolicy;
                toAmino(message: _127.EventCreateGroupPolicy): _127.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _127.EventCreateGroupPolicyAminoMsg): _127.EventCreateGroupPolicy;
                toAminoMsg(message: _127.EventCreateGroupPolicy): _127.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _127.EventCreateGroupPolicyProtoMsg): _127.EventCreateGroupPolicy;
                toProto(message: _127.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _127.EventCreateGroupPolicy): _127.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _127.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_127.EventUpdateGroupPolicy>): _127.EventUpdateGroupPolicy;
                fromAmino(object: _127.EventUpdateGroupPolicyAmino): _127.EventUpdateGroupPolicy;
                toAmino(message: _127.EventUpdateGroupPolicy): _127.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _127.EventUpdateGroupPolicyAminoMsg): _127.EventUpdateGroupPolicy;
                toAminoMsg(message: _127.EventUpdateGroupPolicy): _127.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _127.EventUpdateGroupPolicyProtoMsg): _127.EventUpdateGroupPolicy;
                toProto(message: _127.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _127.EventUpdateGroupPolicy): _127.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _127.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventSubmitProposal;
                fromPartial(object: Partial<_127.EventSubmitProposal>): _127.EventSubmitProposal;
                fromAmino(object: _127.EventSubmitProposalAmino): _127.EventSubmitProposal;
                toAmino(message: _127.EventSubmitProposal): _127.EventSubmitProposalAmino;
                fromAminoMsg(object: _127.EventSubmitProposalAminoMsg): _127.EventSubmitProposal;
                toAminoMsg(message: _127.EventSubmitProposal): _127.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _127.EventSubmitProposalProtoMsg): _127.EventSubmitProposal;
                toProto(message: _127.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _127.EventSubmitProposal): _127.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _127.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventWithdrawProposal;
                fromPartial(object: Partial<_127.EventWithdrawProposal>): _127.EventWithdrawProposal;
                fromAmino(object: _127.EventWithdrawProposalAmino): _127.EventWithdrawProposal;
                toAmino(message: _127.EventWithdrawProposal): _127.EventWithdrawProposalAmino;
                fromAminoMsg(object: _127.EventWithdrawProposalAminoMsg): _127.EventWithdrawProposal;
                toAminoMsg(message: _127.EventWithdrawProposal): _127.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _127.EventWithdrawProposalProtoMsg): _127.EventWithdrawProposal;
                toProto(message: _127.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _127.EventWithdrawProposal): _127.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _127.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventVote;
                fromPartial(object: Partial<_127.EventVote>): _127.EventVote;
                fromAmino(object: _127.EventVoteAmino): _127.EventVote;
                toAmino(message: _127.EventVote): _127.EventVoteAmino;
                fromAminoMsg(object: _127.EventVoteAminoMsg): _127.EventVote;
                toAminoMsg(message: _127.EventVote): _127.EventVoteAminoMsg;
                fromProtoMsg(message: _127.EventVoteProtoMsg): _127.EventVote;
                toProto(message: _127.EventVote): Uint8Array;
                toProtoMsg(message: _127.EventVote): _127.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _127.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventExec;
                fromPartial(object: Partial<_127.EventExec>): _127.EventExec;
                fromAmino(object: _127.EventExecAmino): _127.EventExec;
                toAmino(message: _127.EventExec): _127.EventExecAmino;
                fromAminoMsg(object: _127.EventExecAminoMsg): _127.EventExec;
                toAminoMsg(message: _127.EventExec): _127.EventExecAminoMsg;
                fromProtoMsg(message: _127.EventExecProtoMsg): _127.EventExec;
                toProto(message: _127.EventExec): Uint8Array;
                toProtoMsg(message: _127.EventExec): _127.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _127.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventLeaveGroup;
                fromPartial(object: Partial<_127.EventLeaveGroup>): _127.EventLeaveGroup;
                fromAmino(object: _127.EventLeaveGroupAmino): _127.EventLeaveGroup;
                toAmino(message: _127.EventLeaveGroup): _127.EventLeaveGroupAmino;
                fromAminoMsg(object: _127.EventLeaveGroupAminoMsg): _127.EventLeaveGroup;
                toAminoMsg(message: _127.EventLeaveGroup): _127.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _127.EventLeaveGroupProtoMsg): _127.EventLeaveGroup;
                toProto(message: _127.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _127.EventLeaveGroup): _127.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _127.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.EventProposalPruned;
                fromPartial(object: Partial<_127.EventProposalPruned>): _127.EventProposalPruned;
                fromAmino(object: _127.EventProposalPrunedAmino): _127.EventProposalPruned;
                toAmino(message: _127.EventProposalPruned): _127.EventProposalPrunedAmino;
                fromAminoMsg(object: _127.EventProposalPrunedAminoMsg): _127.EventProposalPruned;
                toAminoMsg(message: _127.EventProposalPruned): _127.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _127.EventProposalPrunedProtoMsg): _127.EventProposalPruned;
                toProto(message: _127.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _127.EventProposalPruned): _127.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _132.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Module;
                    fromPartial(object: Partial<_132.Module>): _132.Module;
                    fromAmino(object: _132.ModuleAmino): _132.Module;
                    toAmino(message: _132.Module): _132.ModuleAmino;
                    fromAminoMsg(object: _132.ModuleAminoMsg): _132.Module;
                    toAminoMsg(message: _132.Module): _132.ModuleAminoMsg;
                    fromProtoMsg(message: _132.ModuleProtoMsg): _132.Module;
                    toProto(message: _132.Module): Uint8Array;
                    toProtoMsg(message: _132.Module): _132.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _372.MsgClientImpl;
            QueryClientImpl: typeof _353.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                inflation(request?: _135.QueryInflationRequest): Promise<_135.QueryInflationResponse>;
                annualProvisions(request?: _135.QueryAnnualProvisionsRequest): Promise<_135.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _332.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUpdateParams) => _136.MsgUpdateParamsAmino;
                    fromAmino: (object: _136.MsgUpdateParamsAmino) => _136.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _136.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgUpdateParams;
                fromPartial(object: Partial<_136.MsgUpdateParams>): _136.MsgUpdateParams;
                fromAmino(object: _136.MsgUpdateParamsAmino): _136.MsgUpdateParams;
                toAmino(message: _136.MsgUpdateParams): _136.MsgUpdateParamsAmino;
                fromAminoMsg(object: _136.MsgUpdateParamsAminoMsg): _136.MsgUpdateParams;
                toAminoMsg(message: _136.MsgUpdateParams): _136.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _136.MsgUpdateParamsProtoMsg): _136.MsgUpdateParams;
                toProto(message: _136.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateParams): _136.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _136.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_136.MsgUpdateParamsResponse>): _136.MsgUpdateParamsResponse;
                fromAmino(_: _136.MsgUpdateParamsResponseAmino): _136.MsgUpdateParamsResponse;
                toAmino(_: _136.MsgUpdateParamsResponse): _136.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _136.MsgUpdateParamsResponseAminoMsg): _136.MsgUpdateParamsResponse;
                toAminoMsg(message: _136.MsgUpdateParamsResponse): _136.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _136.MsgUpdateParamsResponseProtoMsg): _136.MsgUpdateParamsResponse;
                toProto(message: _136.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateParamsResponse): _136.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _135.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.QueryParamsRequest;
                fromPartial(_: Partial<_135.QueryParamsRequest>): _135.QueryParamsRequest;
                fromAmino(_: _135.QueryParamsRequestAmino): _135.QueryParamsRequest;
                toAmino(_: _135.QueryParamsRequest): _135.QueryParamsRequestAmino;
                fromAminoMsg(object: _135.QueryParamsRequestAminoMsg): _135.QueryParamsRequest;
                toAminoMsg(message: _135.QueryParamsRequest): _135.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _135.QueryParamsRequestProtoMsg): _135.QueryParamsRequest;
                toProto(message: _135.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _135.QueryParamsRequest): _135.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _135.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryParamsResponse;
                fromPartial(object: Partial<_135.QueryParamsResponse>): _135.QueryParamsResponse;
                fromAmino(object: _135.QueryParamsResponseAmino): _135.QueryParamsResponse;
                toAmino(message: _135.QueryParamsResponse): _135.QueryParamsResponseAmino;
                fromAminoMsg(object: _135.QueryParamsResponseAminoMsg): _135.QueryParamsResponse;
                toAminoMsg(message: _135.QueryParamsResponse): _135.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _135.QueryParamsResponseProtoMsg): _135.QueryParamsResponse;
                toProto(message: _135.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _135.QueryParamsResponse): _135.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _135.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.QueryInflationRequest;
                fromPartial(_: Partial<_135.QueryInflationRequest>): _135.QueryInflationRequest;
                fromAmino(_: _135.QueryInflationRequestAmino): _135.QueryInflationRequest;
                toAmino(_: _135.QueryInflationRequest): _135.QueryInflationRequestAmino;
                fromAminoMsg(object: _135.QueryInflationRequestAminoMsg): _135.QueryInflationRequest;
                toAminoMsg(message: _135.QueryInflationRequest): _135.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _135.QueryInflationRequestProtoMsg): _135.QueryInflationRequest;
                toProto(message: _135.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _135.QueryInflationRequest): _135.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _135.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryInflationResponse;
                fromPartial(object: Partial<_135.QueryInflationResponse>): _135.QueryInflationResponse;
                fromAmino(object: _135.QueryInflationResponseAmino): _135.QueryInflationResponse;
                toAmino(message: _135.QueryInflationResponse): _135.QueryInflationResponseAmino;
                fromAminoMsg(object: _135.QueryInflationResponseAminoMsg): _135.QueryInflationResponse;
                toAminoMsg(message: _135.QueryInflationResponse): _135.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _135.QueryInflationResponseProtoMsg): _135.QueryInflationResponse;
                toProto(message: _135.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _135.QueryInflationResponse): _135.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _135.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_135.QueryAnnualProvisionsRequest>): _135.QueryAnnualProvisionsRequest;
                fromAmino(_: _135.QueryAnnualProvisionsRequestAmino): _135.QueryAnnualProvisionsRequest;
                toAmino(_: _135.QueryAnnualProvisionsRequest): _135.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _135.QueryAnnualProvisionsRequestAminoMsg): _135.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _135.QueryAnnualProvisionsRequest): _135.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _135.QueryAnnualProvisionsRequestProtoMsg): _135.QueryAnnualProvisionsRequest;
                toProto(message: _135.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _135.QueryAnnualProvisionsRequest): _135.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _135.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_135.QueryAnnualProvisionsResponse>): _135.QueryAnnualProvisionsResponse;
                fromAmino(object: _135.QueryAnnualProvisionsResponseAmino): _135.QueryAnnualProvisionsResponse;
                toAmino(message: _135.QueryAnnualProvisionsResponse): _135.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _135.QueryAnnualProvisionsResponseAminoMsg): _135.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _135.QueryAnnualProvisionsResponse): _135.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _135.QueryAnnualProvisionsResponseProtoMsg): _135.QueryAnnualProvisionsResponse;
                toProto(message: _135.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _135.QueryAnnualProvisionsResponse): _135.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _134.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Minter;
                fromPartial(object: Partial<_134.Minter>): _134.Minter;
                fromAmino(object: _134.MinterAmino): _134.Minter;
                toAmino(message: _134.Minter): _134.MinterAmino;
                fromAminoMsg(object: _134.MinterAminoMsg): _134.Minter;
                toAminoMsg(message: _134.Minter): _134.MinterAminoMsg;
                fromProtoMsg(message: _134.MinterProtoMsg): _134.Minter;
                toProto(message: _134.Minter): Uint8Array;
                toProtoMsg(message: _134.Minter): _134.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _134.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Params;
                fromPartial(object: Partial<_134.Params>): _134.Params;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _133.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GenesisState;
                fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
                fromAmino(object: _133.GenesisStateAmino): _133.GenesisState;
                toAmino(message: _133.GenesisState): _133.GenesisStateAmino;
                fromAminoMsg(object: _133.GenesisStateAminoMsg): _133.GenesisState;
                toAminoMsg(message: _133.GenesisState): _133.GenesisStateAminoMsg;
                fromProtoMsg(message: _133.GenesisStateProtoMsg): _133.GenesisState;
                toProto(message: _133.GenesisState): Uint8Array;
                toProtoMsg(message: _133.GenesisState): _133.GenesisStateProtoMsg;
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
                    encode(_: _138.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _138.Module;
                    fromPartial(_: Partial<_138.Module>): _138.Module;
                    fromAmino(_: _138.ModuleAmino): _138.Module;
                    toAmino(_: _138.Module): _138.ModuleAmino;
                    fromAminoMsg(object: _138.ModuleAminoMsg): _138.Module;
                    toAminoMsg(message: _138.Module): _138.ModuleAminoMsg;
                    fromProtoMsg(message: _138.ModuleProtoMsg): _138.Module;
                    toProto(message: _138.Module): Uint8Array;
                    toProtoMsg(message: _138.Module): _138.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _373.MsgClientImpl;
            QueryClientImpl: typeof _354.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _142.QueryBalanceRequest): Promise<_142.QueryBalanceResponse>;
                owner(request: _142.QueryOwnerRequest): Promise<_142.QueryOwnerResponse>;
                supply(request: _142.QuerySupplyRequest): Promise<_142.QuerySupplyResponse>;
                nFTs(request: _142.QueryNFTsRequest): Promise<_142.QueryNFTsResponse>;
                nFT(request: _142.QueryNFTRequest): Promise<_142.QueryNFTResponse>;
                class(request: _142.QueryClassRequest): Promise<_142.QueryClassResponse>;
                classes(request?: _142.QueryClassesRequest): Promise<_142.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _333.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _143.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _143.MsgSend): {
                        typeUrl: string;
                        value: _143.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _143.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _143.MsgSend): {
                        typeUrl: string;
                        value: _143.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSend) => _143.MsgSendAmino;
                    fromAmino: (object: _143.MsgSendAmino) => _143.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _143.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgSend;
                fromPartial(object: Partial<_143.MsgSend>): _143.MsgSend;
                fromAmino(object: _143.MsgSendAmino): _143.MsgSend;
                toAmino(message: _143.MsgSend): _143.MsgSendAmino;
                fromAminoMsg(object: _143.MsgSendAminoMsg): _143.MsgSend;
                toAminoMsg(message: _143.MsgSend): _143.MsgSendAminoMsg;
                fromProtoMsg(message: _143.MsgSendProtoMsg): _143.MsgSend;
                toProto(message: _143.MsgSend): Uint8Array;
                toProtoMsg(message: _143.MsgSend): _143.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _143.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgSendResponse;
                fromPartial(_: Partial<_143.MsgSendResponse>): _143.MsgSendResponse;
                fromAmino(_: _143.MsgSendResponseAmino): _143.MsgSendResponse;
                toAmino(_: _143.MsgSendResponse): _143.MsgSendResponseAmino;
                fromAminoMsg(object: _143.MsgSendResponseAminoMsg): _143.MsgSendResponse;
                toAminoMsg(message: _143.MsgSendResponse): _143.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSendResponseProtoMsg): _143.MsgSendResponse;
                toProto(message: _143.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSendResponse): _143.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _142.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryBalanceRequest;
                fromPartial(object: Partial<_142.QueryBalanceRequest>): _142.QueryBalanceRequest;
                fromAmino(object: _142.QueryBalanceRequestAmino): _142.QueryBalanceRequest;
                toAmino(message: _142.QueryBalanceRequest): _142.QueryBalanceRequestAmino;
                fromAminoMsg(object: _142.QueryBalanceRequestAminoMsg): _142.QueryBalanceRequest;
                toAminoMsg(message: _142.QueryBalanceRequest): _142.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _142.QueryBalanceRequestProtoMsg): _142.QueryBalanceRequest;
                toProto(message: _142.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _142.QueryBalanceRequest): _142.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _142.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryBalanceResponse;
                fromPartial(object: Partial<_142.QueryBalanceResponse>): _142.QueryBalanceResponse;
                fromAmino(object: _142.QueryBalanceResponseAmino): _142.QueryBalanceResponse;
                toAmino(message: _142.QueryBalanceResponse): _142.QueryBalanceResponseAmino;
                fromAminoMsg(object: _142.QueryBalanceResponseAminoMsg): _142.QueryBalanceResponse;
                toAminoMsg(message: _142.QueryBalanceResponse): _142.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _142.QueryBalanceResponseProtoMsg): _142.QueryBalanceResponse;
                toProto(message: _142.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _142.QueryBalanceResponse): _142.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _142.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryOwnerRequest;
                fromPartial(object: Partial<_142.QueryOwnerRequest>): _142.QueryOwnerRequest;
                fromAmino(object: _142.QueryOwnerRequestAmino): _142.QueryOwnerRequest;
                toAmino(message: _142.QueryOwnerRequest): _142.QueryOwnerRequestAmino;
                fromAminoMsg(object: _142.QueryOwnerRequestAminoMsg): _142.QueryOwnerRequest;
                toAminoMsg(message: _142.QueryOwnerRequest): _142.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _142.QueryOwnerRequestProtoMsg): _142.QueryOwnerRequest;
                toProto(message: _142.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _142.QueryOwnerRequest): _142.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _142.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryOwnerResponse;
                fromPartial(object: Partial<_142.QueryOwnerResponse>): _142.QueryOwnerResponse;
                fromAmino(object: _142.QueryOwnerResponseAmino): _142.QueryOwnerResponse;
                toAmino(message: _142.QueryOwnerResponse): _142.QueryOwnerResponseAmino;
                fromAminoMsg(object: _142.QueryOwnerResponseAminoMsg): _142.QueryOwnerResponse;
                toAminoMsg(message: _142.QueryOwnerResponse): _142.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _142.QueryOwnerResponseProtoMsg): _142.QueryOwnerResponse;
                toProto(message: _142.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _142.QueryOwnerResponse): _142.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _142.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySupplyRequest;
                fromPartial(object: Partial<_142.QuerySupplyRequest>): _142.QuerySupplyRequest;
                fromAmino(object: _142.QuerySupplyRequestAmino): _142.QuerySupplyRequest;
                toAmino(message: _142.QuerySupplyRequest): _142.QuerySupplyRequestAmino;
                fromAminoMsg(object: _142.QuerySupplyRequestAminoMsg): _142.QuerySupplyRequest;
                toAminoMsg(message: _142.QuerySupplyRequest): _142.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _142.QuerySupplyRequestProtoMsg): _142.QuerySupplyRequest;
                toProto(message: _142.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _142.QuerySupplyRequest): _142.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _142.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QuerySupplyResponse;
                fromPartial(object: Partial<_142.QuerySupplyResponse>): _142.QuerySupplyResponse;
                fromAmino(object: _142.QuerySupplyResponseAmino): _142.QuerySupplyResponse;
                toAmino(message: _142.QuerySupplyResponse): _142.QuerySupplyResponseAmino;
                fromAminoMsg(object: _142.QuerySupplyResponseAminoMsg): _142.QuerySupplyResponse;
                toAminoMsg(message: _142.QuerySupplyResponse): _142.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _142.QuerySupplyResponseProtoMsg): _142.QuerySupplyResponse;
                toProto(message: _142.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _142.QuerySupplyResponse): _142.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _142.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryNFTsRequest;
                fromPartial(object: Partial<_142.QueryNFTsRequest>): _142.QueryNFTsRequest;
                fromAmino(object: _142.QueryNFTsRequestAmino): _142.QueryNFTsRequest;
                toAmino(message: _142.QueryNFTsRequest): _142.QueryNFTsRequestAmino;
                fromAminoMsg(object: _142.QueryNFTsRequestAminoMsg): _142.QueryNFTsRequest;
                toAminoMsg(message: _142.QueryNFTsRequest): _142.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryNFTsRequestProtoMsg): _142.QueryNFTsRequest;
                toProto(message: _142.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryNFTsRequest): _142.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _142.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryNFTsResponse;
                fromPartial(object: Partial<_142.QueryNFTsResponse>): _142.QueryNFTsResponse;
                fromAmino(object: _142.QueryNFTsResponseAmino): _142.QueryNFTsResponse;
                toAmino(message: _142.QueryNFTsResponse): _142.QueryNFTsResponseAmino;
                fromAminoMsg(object: _142.QueryNFTsResponseAminoMsg): _142.QueryNFTsResponse;
                toAminoMsg(message: _142.QueryNFTsResponse): _142.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryNFTsResponseProtoMsg): _142.QueryNFTsResponse;
                toProto(message: _142.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryNFTsResponse): _142.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _142.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryNFTRequest;
                fromPartial(object: Partial<_142.QueryNFTRequest>): _142.QueryNFTRequest;
                fromAmino(object: _142.QueryNFTRequestAmino): _142.QueryNFTRequest;
                toAmino(message: _142.QueryNFTRequest): _142.QueryNFTRequestAmino;
                fromAminoMsg(object: _142.QueryNFTRequestAminoMsg): _142.QueryNFTRequest;
                toAminoMsg(message: _142.QueryNFTRequest): _142.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _142.QueryNFTRequestProtoMsg): _142.QueryNFTRequest;
                toProto(message: _142.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _142.QueryNFTRequest): _142.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _142.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryNFTResponse;
                fromPartial(object: Partial<_142.QueryNFTResponse>): _142.QueryNFTResponse;
                fromAmino(object: _142.QueryNFTResponseAmino): _142.QueryNFTResponse;
                toAmino(message: _142.QueryNFTResponse): _142.QueryNFTResponseAmino;
                fromAminoMsg(object: _142.QueryNFTResponseAminoMsg): _142.QueryNFTResponse;
                toAminoMsg(message: _142.QueryNFTResponse): _142.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _142.QueryNFTResponseProtoMsg): _142.QueryNFTResponse;
                toProto(message: _142.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _142.QueryNFTResponse): _142.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _142.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryClassRequest;
                fromPartial(object: Partial<_142.QueryClassRequest>): _142.QueryClassRequest;
                fromAmino(object: _142.QueryClassRequestAmino): _142.QueryClassRequest;
                toAmino(message: _142.QueryClassRequest): _142.QueryClassRequestAmino;
                fromAminoMsg(object: _142.QueryClassRequestAminoMsg): _142.QueryClassRequest;
                toAminoMsg(message: _142.QueryClassRequest): _142.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _142.QueryClassRequestProtoMsg): _142.QueryClassRequest;
                toProto(message: _142.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _142.QueryClassRequest): _142.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _142.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryClassResponse;
                fromPartial(object: Partial<_142.QueryClassResponse>): _142.QueryClassResponse;
                fromAmino(object: _142.QueryClassResponseAmino): _142.QueryClassResponse;
                toAmino(message: _142.QueryClassResponse): _142.QueryClassResponseAmino;
                fromAminoMsg(object: _142.QueryClassResponseAminoMsg): _142.QueryClassResponse;
                toAminoMsg(message: _142.QueryClassResponse): _142.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _142.QueryClassResponseProtoMsg): _142.QueryClassResponse;
                toProto(message: _142.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _142.QueryClassResponse): _142.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _142.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryClassesRequest;
                fromPartial(object: Partial<_142.QueryClassesRequest>): _142.QueryClassesRequest;
                fromAmino(object: _142.QueryClassesRequestAmino): _142.QueryClassesRequest;
                toAmino(message: _142.QueryClassesRequest): _142.QueryClassesRequestAmino;
                fromAminoMsg(object: _142.QueryClassesRequestAminoMsg): _142.QueryClassesRequest;
                toAminoMsg(message: _142.QueryClassesRequest): _142.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _142.QueryClassesRequestProtoMsg): _142.QueryClassesRequest;
                toProto(message: _142.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _142.QueryClassesRequest): _142.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _142.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryClassesResponse;
                fromPartial(object: Partial<_142.QueryClassesResponse>): _142.QueryClassesResponse;
                fromAmino(object: _142.QueryClassesResponseAmino): _142.QueryClassesResponse;
                toAmino(message: _142.QueryClassesResponse): _142.QueryClassesResponseAmino;
                fromAminoMsg(object: _142.QueryClassesResponseAminoMsg): _142.QueryClassesResponse;
                toAminoMsg(message: _142.QueryClassesResponse): _142.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _142.QueryClassesResponseProtoMsg): _142.QueryClassesResponse;
                toProto(message: _142.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _142.QueryClassesResponse): _142.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _141.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.Class;
                fromPartial(object: Partial<_141.Class>): _141.Class;
                fromAmino(object: _141.ClassAmino): _141.Class;
                toAmino(message: _141.Class): _141.ClassAmino;
                fromAminoMsg(object: _141.ClassAminoMsg): _141.Class;
                toAminoMsg(message: _141.Class): _141.ClassAminoMsg;
                fromProtoMsg(message: _141.ClassProtoMsg): _141.Class;
                toProto(message: _141.Class): Uint8Array;
                toProtoMsg(message: _141.Class): _141.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _141.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.NFT;
                fromPartial(object: Partial<_141.NFT>): _141.NFT;
                fromAmino(object: _141.NFTAmino): _141.NFT;
                toAmino(message: _141.NFT): _141.NFTAmino;
                fromAminoMsg(object: _141.NFTAminoMsg): _141.NFT;
                toAminoMsg(message: _141.NFT): _141.NFTAminoMsg;
                fromProtoMsg(message: _141.NFTProtoMsg): _141.NFT;
                toProto(message: _141.NFT): Uint8Array;
                toProtoMsg(message: _141.NFT): _141.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _140.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.GenesisState;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
                fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
                fromAminoMsg(object: _140.GenesisStateAminoMsg): _140.GenesisState;
                toAminoMsg(message: _140.GenesisState): _140.GenesisStateAminoMsg;
                fromProtoMsg(message: _140.GenesisStateProtoMsg): _140.GenesisState;
                toProto(message: _140.GenesisState): Uint8Array;
                toProtoMsg(message: _140.GenesisState): _140.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _140.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Entry;
                fromPartial(object: Partial<_140.Entry>): _140.Entry;
                fromAmino(object: _140.EntryAmino): _140.Entry;
                toAmino(message: _140.Entry): _140.EntryAmino;
                fromAminoMsg(object: _140.EntryAminoMsg): _140.Entry;
                toAminoMsg(message: _140.Entry): _140.EntryAminoMsg;
                fromProtoMsg(message: _140.EntryProtoMsg): _140.Entry;
                toProto(message: _140.Entry): Uint8Array;
                toProtoMsg(message: _140.Entry): _140.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _139.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.EventSend;
                fromPartial(object: Partial<_139.EventSend>): _139.EventSend;
                fromAmino(object: _139.EventSendAmino): _139.EventSend;
                toAmino(message: _139.EventSend): _139.EventSendAmino;
                fromAminoMsg(object: _139.EventSendAminoMsg): _139.EventSend;
                toAminoMsg(message: _139.EventSend): _139.EventSendAminoMsg;
                fromProtoMsg(message: _139.EventSendProtoMsg): _139.EventSend;
                toProto(message: _139.EventSend): Uint8Array;
                toProtoMsg(message: _139.EventSend): _139.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _139.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.EventMint;
                fromPartial(object: Partial<_139.EventMint>): _139.EventMint;
                fromAmino(object: _139.EventMintAmino): _139.EventMint;
                toAmino(message: _139.EventMint): _139.EventMintAmino;
                fromAminoMsg(object: _139.EventMintAminoMsg): _139.EventMint;
                toAminoMsg(message: _139.EventMint): _139.EventMintAminoMsg;
                fromProtoMsg(message: _139.EventMintProtoMsg): _139.EventMint;
                toProto(message: _139.EventMint): Uint8Array;
                toProtoMsg(message: _139.EventMint): _139.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _139.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.EventBurn;
                fromPartial(object: Partial<_139.EventBurn>): _139.EventBurn;
                fromAmino(object: _139.EventBurnAmino): _139.EventBurn;
                toAmino(message: _139.EventBurn): _139.EventBurnAmino;
                fromAminoMsg(object: _139.EventBurnAminoMsg): _139.EventBurn;
                toAminoMsg(message: _139.EventBurn): _139.EventBurnAminoMsg;
                fromProtoMsg(message: _139.EventBurnProtoMsg): _139.EventBurn;
                toProto(message: _139.EventBurn): Uint8Array;
                toProtoMsg(message: _139.EventBurn): _139.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _144.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _144.Module;
                    fromPartial(_: Partial<_144.Module>): _144.Module;
                    fromAmino(_: _144.ModuleAmino): _144.Module;
                    toAmino(_: _144.Module): _144.ModuleAmino;
                    fromAminoMsg(object: _144.ModuleAminoMsg): _144.Module;
                    toAminoMsg(message: _144.Module): _144.ModuleAminoMsg;
                    fromProtoMsg(message: _144.ModuleProtoMsg): _144.Module;
                    toProto(message: _144.Module): Uint8Array;
                    toProtoMsg(message: _144.Module): _144.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _355.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _145.GetRequest): Promise<_145.GetResponse>;
                    list(request: _145.ListRequest): Promise<_145.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _145.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.GetRequest;
                    fromPartial(object: Partial<_145.GetRequest>): _145.GetRequest;
                    fromAmino(object: _145.GetRequestAmino): _145.GetRequest;
                    toAmino(message: _145.GetRequest): _145.GetRequestAmino;
                    fromAminoMsg(object: _145.GetRequestAminoMsg): _145.GetRequest;
                    toAminoMsg(message: _145.GetRequest): _145.GetRequestAminoMsg;
                    fromProtoMsg(message: _145.GetRequestProtoMsg): _145.GetRequest;
                    toProto(message: _145.GetRequest): Uint8Array;
                    toProtoMsg(message: _145.GetRequest): _145.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _145.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.GetResponse;
                    fromPartial(object: Partial<_145.GetResponse>): _145.GetResponse;
                    fromAmino(object: _145.GetResponseAmino): _145.GetResponse;
                    toAmino(message: _145.GetResponse): _145.GetResponseAmino;
                    fromAminoMsg(object: _145.GetResponseAminoMsg): _145.GetResponse;
                    toAminoMsg(message: _145.GetResponse): _145.GetResponseAminoMsg;
                    fromProtoMsg(message: _145.GetResponseProtoMsg): _145.GetResponse;
                    toProto(message: _145.GetResponse): Uint8Array;
                    toProtoMsg(message: _145.GetResponse): _145.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _145.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.ListRequest;
                    fromPartial(object: Partial<_145.ListRequest>): _145.ListRequest;
                    fromAmino(object: _145.ListRequestAmino): _145.ListRequest;
                    toAmino(message: _145.ListRequest): _145.ListRequestAmino;
                    fromAminoMsg(object: _145.ListRequestAminoMsg): _145.ListRequest;
                    toAminoMsg(message: _145.ListRequest): _145.ListRequestAminoMsg;
                    fromProtoMsg(message: _145.ListRequestProtoMsg): _145.ListRequest;
                    toProto(message: _145.ListRequest): Uint8Array;
                    toProtoMsg(message: _145.ListRequest): _145.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _145.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.ListRequest_Prefix;
                    fromPartial(object: Partial<_145.ListRequest_Prefix>): _145.ListRequest_Prefix;
                    fromAmino(object: _145.ListRequest_PrefixAmino): _145.ListRequest_Prefix;
                    toAmino(message: _145.ListRequest_Prefix): _145.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _145.ListRequest_PrefixAminoMsg): _145.ListRequest_Prefix;
                    toAminoMsg(message: _145.ListRequest_Prefix): _145.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _145.ListRequest_PrefixProtoMsg): _145.ListRequest_Prefix;
                    toProto(message: _145.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _145.ListRequest_Prefix): _145.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _145.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.ListRequest_Range;
                    fromPartial(object: Partial<_145.ListRequest_Range>): _145.ListRequest_Range;
                    fromAmino(object: _145.ListRequest_RangeAmino): _145.ListRequest_Range;
                    toAmino(message: _145.ListRequest_Range): _145.ListRequest_RangeAmino;
                    fromAminoMsg(object: _145.ListRequest_RangeAminoMsg): _145.ListRequest_Range;
                    toAminoMsg(message: _145.ListRequest_Range): _145.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _145.ListRequest_RangeProtoMsg): _145.ListRequest_Range;
                    toProto(message: _145.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _145.ListRequest_Range): _145.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _145.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.ListResponse;
                    fromPartial(object: Partial<_145.ListResponse>): _145.ListResponse;
                    fromAmino(object: _145.ListResponseAmino): _145.ListResponse;
                    toAmino(message: _145.ListResponse): _145.ListResponseAmino;
                    fromAminoMsg(object: _145.ListResponseAminoMsg): _145.ListResponse;
                    toAminoMsg(message: _145.ListResponse): _145.ListResponseAminoMsg;
                    fromProtoMsg(message: _145.ListResponseProtoMsg): _145.ListResponse;
                    toProto(message: _145.ListResponse): Uint8Array;
                    toProtoMsg(message: _145.ListResponse): _145.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _145.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.IndexValue;
                    fromPartial(object: Partial<_145.IndexValue>): _145.IndexValue;
                    fromAmino(object: _145.IndexValueAmino): _145.IndexValue;
                    toAmino(message: _145.IndexValue): _145.IndexValueAmino;
                    fromAminoMsg(object: _145.IndexValueAminoMsg): _145.IndexValue;
                    toAminoMsg(message: _145.IndexValue): _145.IndexValueAminoMsg;
                    fromProtoMsg(message: _145.IndexValueProtoMsg): _145.IndexValue;
                    toProto(message: _145.IndexValue): Uint8Array;
                    toProtoMsg(message: _145.IndexValue): _145.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _146.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TableDescriptor;
                fromPartial(object: Partial<_146.TableDescriptor>): _146.TableDescriptor;
                fromAmino(object: _146.TableDescriptorAmino): _146.TableDescriptor;
                toAmino(message: _146.TableDescriptor): _146.TableDescriptorAmino;
                fromAminoMsg(object: _146.TableDescriptorAminoMsg): _146.TableDescriptor;
                toAminoMsg(message: _146.TableDescriptor): _146.TableDescriptorAminoMsg;
                fromProtoMsg(message: _146.TableDescriptorProtoMsg): _146.TableDescriptor;
                toProto(message: _146.TableDescriptor): Uint8Array;
                toProtoMsg(message: _146.TableDescriptor): _146.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _146.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_146.PrimaryKeyDescriptor>): _146.PrimaryKeyDescriptor;
                fromAmino(object: _146.PrimaryKeyDescriptorAmino): _146.PrimaryKeyDescriptor;
                toAmino(message: _146.PrimaryKeyDescriptor): _146.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _146.PrimaryKeyDescriptorAminoMsg): _146.PrimaryKeyDescriptor;
                toAminoMsg(message: _146.PrimaryKeyDescriptor): _146.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _146.PrimaryKeyDescriptorProtoMsg): _146.PrimaryKeyDescriptor;
                toProto(message: _146.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _146.PrimaryKeyDescriptor): _146.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _146.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_146.SecondaryIndexDescriptor>): _146.SecondaryIndexDescriptor;
                fromAmino(object: _146.SecondaryIndexDescriptorAmino): _146.SecondaryIndexDescriptor;
                toAmino(message: _146.SecondaryIndexDescriptor): _146.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _146.SecondaryIndexDescriptorAminoMsg): _146.SecondaryIndexDescriptor;
                toAminoMsg(message: _146.SecondaryIndexDescriptor): _146.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _146.SecondaryIndexDescriptorProtoMsg): _146.SecondaryIndexDescriptor;
                toProto(message: _146.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _146.SecondaryIndexDescriptor): _146.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _146.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.SingletonDescriptor;
                fromPartial(object: Partial<_146.SingletonDescriptor>): _146.SingletonDescriptor;
                fromAmino(object: _146.SingletonDescriptorAmino): _146.SingletonDescriptor;
                toAmino(message: _146.SingletonDescriptor): _146.SingletonDescriptorAmino;
                fromAminoMsg(object: _146.SingletonDescriptorAminoMsg): _146.SingletonDescriptor;
                toAminoMsg(message: _146.SingletonDescriptor): _146.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _146.SingletonDescriptorProtoMsg): _146.SingletonDescriptor;
                toProto(message: _146.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _146.SingletonDescriptor): _146.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _147.StorageType;
            storageTypeToJSON(object: _147.StorageType): string;
            StorageType: typeof _147.StorageType;
            StorageTypeSDKType: typeof _147.StorageType;
            StorageTypeAmino: typeof _147.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _147.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_147.ModuleSchemaDescriptor>): _147.ModuleSchemaDescriptor;
                fromAmino(object: _147.ModuleSchemaDescriptorAmino): _147.ModuleSchemaDescriptor;
                toAmino(message: _147.ModuleSchemaDescriptor): _147.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _147.ModuleSchemaDescriptorAminoMsg): _147.ModuleSchemaDescriptor;
                toAminoMsg(message: _147.ModuleSchemaDescriptor): _147.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _147.ModuleSchemaDescriptorProtoMsg): _147.ModuleSchemaDescriptor;
                toProto(message: _147.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _147.ModuleSchemaDescriptor): _147.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _147.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_147.ModuleSchemaDescriptor_FileEntry>): _147.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _147.ModuleSchemaDescriptor_FileEntryAmino): _147.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _147.ModuleSchemaDescriptor_FileEntry): _147.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _147.ModuleSchemaDescriptor_FileEntryAminoMsg): _147.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _147.ModuleSchemaDescriptor_FileEntry): _147.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _147.ModuleSchemaDescriptor_FileEntryProtoMsg): _147.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _147.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _147.ModuleSchemaDescriptor_FileEntry): _147.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _148.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _148.Module;
                    fromPartial(_: Partial<_148.Module>): _148.Module;
                    fromAmino(_: _148.ModuleAmino): _148.Module;
                    toAmino(_: _148.Module): _148.ModuleAmino;
                    fromAminoMsg(object: _148.ModuleAminoMsg): _148.Module;
                    toAminoMsg(message: _148.Module): _148.ModuleAminoMsg;
                    fromProtoMsg(message: _148.ModuleProtoMsg): _148.Module;
                    toProto(message: _148.Module): Uint8Array;
                    toProtoMsg(message: _148.Module): _148.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _356.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                subspaces(request?: _150.QuerySubspacesRequest): Promise<_150.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _334.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _150.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryParamsRequest;
                fromPartial(object: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
                fromAmino(object: _150.QueryParamsRequestAmino): _150.QueryParamsRequest;
                toAmino(message: _150.QueryParamsRequest): _150.QueryParamsRequestAmino;
                fromAminoMsg(object: _150.QueryParamsRequestAminoMsg): _150.QueryParamsRequest;
                toAminoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _150.QueryParamsRequestProtoMsg): _150.QueryParamsRequest;
                toProto(message: _150.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _150.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryParamsResponse;
                fromPartial(object: Partial<_150.QueryParamsResponse>): _150.QueryParamsResponse;
                fromAmino(object: _150.QueryParamsResponseAmino): _150.QueryParamsResponse;
                toAmino(message: _150.QueryParamsResponse): _150.QueryParamsResponseAmino;
                fromAminoMsg(object: _150.QueryParamsResponseAminoMsg): _150.QueryParamsResponse;
                toAminoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _150.QueryParamsResponseProtoMsg): _150.QueryParamsResponse;
                toProto(message: _150.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _150.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.QuerySubspacesRequest;
                fromPartial(_: Partial<_150.QuerySubspacesRequest>): _150.QuerySubspacesRequest;
                fromAmino(_: _150.QuerySubspacesRequestAmino): _150.QuerySubspacesRequest;
                toAmino(_: _150.QuerySubspacesRequest): _150.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _150.QuerySubspacesRequestAminoMsg): _150.QuerySubspacesRequest;
                toAminoMsg(message: _150.QuerySubspacesRequest): _150.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _150.QuerySubspacesRequestProtoMsg): _150.QuerySubspacesRequest;
                toProto(message: _150.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _150.QuerySubspacesRequest): _150.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _150.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QuerySubspacesResponse;
                fromPartial(object: Partial<_150.QuerySubspacesResponse>): _150.QuerySubspacesResponse;
                fromAmino(object: _150.QuerySubspacesResponseAmino): _150.QuerySubspacesResponse;
                toAmino(message: _150.QuerySubspacesResponse): _150.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _150.QuerySubspacesResponseAminoMsg): _150.QuerySubspacesResponse;
                toAminoMsg(message: _150.QuerySubspacesResponse): _150.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _150.QuerySubspacesResponseProtoMsg): _150.QuerySubspacesResponse;
                toProto(message: _150.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _150.QuerySubspacesResponse): _150.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _150.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Subspace;
                fromPartial(object: Partial<_150.Subspace>): _150.Subspace;
                fromAmino(object: _150.SubspaceAmino): _150.Subspace;
                toAmino(message: _150.Subspace): _150.SubspaceAmino;
                fromAminoMsg(object: _150.SubspaceAminoMsg): _150.Subspace;
                toAminoMsg(message: _150.Subspace): _150.SubspaceAminoMsg;
                fromProtoMsg(message: _150.SubspaceProtoMsg): _150.Subspace;
                toProto(message: _150.Subspace): Uint8Array;
                toProtoMsg(message: _150.Subspace): _150.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _149.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.ParameterChangeProposal;
                fromPartial(object: Partial<_149.ParameterChangeProposal>): _149.ParameterChangeProposal;
                fromAmino(object: _149.ParameterChangeProposalAmino): _149.ParameterChangeProposal;
                toAmino(message: _149.ParameterChangeProposal): _149.ParameterChangeProposalAmino;
                fromAminoMsg(object: _149.ParameterChangeProposalAminoMsg): _149.ParameterChangeProposal;
                toAminoMsg(message: _149.ParameterChangeProposal): _149.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _149.ParameterChangeProposalProtoMsg): _149.ParameterChangeProposal;
                toProto(message: _149.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _149.ParameterChangeProposal): _149.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _149.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.ParamChange;
                fromPartial(object: Partial<_149.ParamChange>): _149.ParamChange;
                fromAmino(object: _149.ParamChangeAmino): _149.ParamChange;
                toAmino(message: _149.ParamChange): _149.ParamChangeAmino;
                fromAminoMsg(object: _149.ParamChangeAminoMsg): _149.ParamChange;
                toAminoMsg(message: _149.ParamChange): _149.ParamChangeAminoMsg;
                fromProtoMsg(message: _149.ParamChangeProtoMsg): _149.ParamChange;
                toProto(message: _149.ParamChange): Uint8Array;
                toProtoMsg(message: _149.ParamChange): _149.ParamChangeProtoMsg;
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
                encode(_: _152.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _152.FileDescriptorsRequest;
                fromPartial(_: Partial<_152.FileDescriptorsRequest>): _152.FileDescriptorsRequest;
                fromAmino(_: _152.FileDescriptorsRequestAmino): _152.FileDescriptorsRequest;
                toAmino(_: _152.FileDescriptorsRequest): _152.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _152.FileDescriptorsRequestAminoMsg): _152.FileDescriptorsRequest;
                toAminoMsg(message: _152.FileDescriptorsRequest): _152.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _152.FileDescriptorsRequestProtoMsg): _152.FileDescriptorsRequest;
                toProto(message: _152.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _152.FileDescriptorsRequest): _152.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _152.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.FileDescriptorsResponse;
                fromPartial(object: Partial<_152.FileDescriptorsResponse>): _152.FileDescriptorsResponse;
                fromAmino(object: _152.FileDescriptorsResponseAmino): _152.FileDescriptorsResponse;
                toAmino(message: _152.FileDescriptorsResponse): _152.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _152.FileDescriptorsResponseAminoMsg): _152.FileDescriptorsResponse;
                toAminoMsg(message: _152.FileDescriptorsResponse): _152.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _152.FileDescriptorsResponseProtoMsg): _152.FileDescriptorsResponse;
                toProto(message: _152.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _152.FileDescriptorsResponse): _152.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _153.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.Module;
                    fromPartial(object: Partial<_153.Module>): _153.Module;
                    fromAmino(object: _153.ModuleAmino): _153.Module;
                    toAmino(message: _153.Module): _153.ModuleAmino;
                    fromAminoMsg(object: _153.ModuleAminoMsg): _153.Module;
                    toAminoMsg(message: _153.Module): _153.ModuleAminoMsg;
                    fromProtoMsg(message: _153.ModuleProtoMsg): _153.Module;
                    toProto(message: _153.Module): Uint8Array;
                    toProtoMsg(message: _153.Module): _153.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _374.MsgClientImpl;
            QueryClientImpl: typeof _357.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                signingInfo(request: _155.QuerySigningInfoRequest): Promise<_155.QuerySigningInfoResponse>;
                signingInfos(request?: _155.QuerySigningInfosRequest): Promise<_155.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _335.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _157.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _157.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _157.MsgUnjail): {
                        typeUrl: string;
                        value: _157.MsgUnjail;
                    };
                    updateParams(value: _157.MsgUpdateParams): {
                        typeUrl: string;
                        value: _157.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _157.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _157.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _157.MsgUnjail): {
                        typeUrl: string;
                        value: _157.MsgUnjail;
                    };
                    updateParams(value: _157.MsgUpdateParams): {
                        typeUrl: string;
                        value: _157.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _157.MsgUnjail) => _157.MsgUnjailAmino;
                    fromAmino: (object: _157.MsgUnjailAmino) => _157.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _157.MsgUpdateParams) => _157.MsgUpdateParamsAmino;
                    fromAmino: (object: _157.MsgUpdateParamsAmino) => _157.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _157.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.MsgUnjail;
                fromPartial(object: Partial<_157.MsgUnjail>): _157.MsgUnjail;
                fromAmino(object: _157.MsgUnjailAmino): _157.MsgUnjail;
                toAmino(message: _157.MsgUnjail): _157.MsgUnjailAmino;
                fromAminoMsg(object: _157.MsgUnjailAminoMsg): _157.MsgUnjail;
                toAminoMsg(message: _157.MsgUnjail): _157.MsgUnjailAminoMsg;
                fromProtoMsg(message: _157.MsgUnjailProtoMsg): _157.MsgUnjail;
                toProto(message: _157.MsgUnjail): Uint8Array;
                toProtoMsg(message: _157.MsgUnjail): _157.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _157.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _157.MsgUnjailResponse;
                fromPartial(_: Partial<_157.MsgUnjailResponse>): _157.MsgUnjailResponse;
                fromAmino(_: _157.MsgUnjailResponseAmino): _157.MsgUnjailResponse;
                toAmino(_: _157.MsgUnjailResponse): _157.MsgUnjailResponseAmino;
                fromAminoMsg(object: _157.MsgUnjailResponseAminoMsg): _157.MsgUnjailResponse;
                toAminoMsg(message: _157.MsgUnjailResponse): _157.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _157.MsgUnjailResponseProtoMsg): _157.MsgUnjailResponse;
                toProto(message: _157.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _157.MsgUnjailResponse): _157.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _157.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.MsgUpdateParams;
                fromPartial(object: Partial<_157.MsgUpdateParams>): _157.MsgUpdateParams;
                fromAmino(object: _157.MsgUpdateParamsAmino): _157.MsgUpdateParams;
                toAmino(message: _157.MsgUpdateParams): _157.MsgUpdateParamsAmino;
                fromAminoMsg(object: _157.MsgUpdateParamsAminoMsg): _157.MsgUpdateParams;
                toAminoMsg(message: _157.MsgUpdateParams): _157.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _157.MsgUpdateParamsProtoMsg): _157.MsgUpdateParams;
                toProto(message: _157.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _157.MsgUpdateParams): _157.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _157.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _157.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_157.MsgUpdateParamsResponse>): _157.MsgUpdateParamsResponse;
                fromAmino(_: _157.MsgUpdateParamsResponseAmino): _157.MsgUpdateParamsResponse;
                toAmino(_: _157.MsgUpdateParamsResponse): _157.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _157.MsgUpdateParamsResponseAminoMsg): _157.MsgUpdateParamsResponse;
                toAminoMsg(message: _157.MsgUpdateParamsResponse): _157.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _157.MsgUpdateParamsResponseProtoMsg): _157.MsgUpdateParamsResponse;
                toProto(message: _157.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _157.MsgUpdateParamsResponse): _157.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _156.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.ValidatorSigningInfo;
                fromPartial(object: Partial<_156.ValidatorSigningInfo>): _156.ValidatorSigningInfo;
                fromAmino(object: _156.ValidatorSigningInfoAmino): _156.ValidatorSigningInfo;
                toAmino(message: _156.ValidatorSigningInfo): _156.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _156.ValidatorSigningInfoAminoMsg): _156.ValidatorSigningInfo;
                toAminoMsg(message: _156.ValidatorSigningInfo): _156.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _156.ValidatorSigningInfoProtoMsg): _156.ValidatorSigningInfo;
                toProto(message: _156.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _156.ValidatorSigningInfo): _156.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _156.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Params;
                fromPartial(object: Partial<_156.Params>): _156.Params;
                fromAmino(object: _156.ParamsAmino): _156.Params;
                toAmino(message: _156.Params): _156.ParamsAmino;
                fromAminoMsg(object: _156.ParamsAminoMsg): _156.Params;
                toAminoMsg(message: _156.Params): _156.ParamsAminoMsg;
                fromProtoMsg(message: _156.ParamsProtoMsg): _156.Params;
                toProto(message: _156.Params): Uint8Array;
                toProtoMsg(message: _156.Params): _156.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _155.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.QueryParamsRequest;
                fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
                fromAmino(_: _155.QueryParamsRequestAmino): _155.QueryParamsRequest;
                toAmino(_: _155.QueryParamsRequest): _155.QueryParamsRequestAmino;
                fromAminoMsg(object: _155.QueryParamsRequestAminoMsg): _155.QueryParamsRequest;
                toAminoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _155.QueryParamsRequestProtoMsg): _155.QueryParamsRequest;
                toProto(message: _155.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _155.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryParamsResponse;
                fromPartial(object: Partial<_155.QueryParamsResponse>): _155.QueryParamsResponse;
                fromAmino(object: _155.QueryParamsResponseAmino): _155.QueryParamsResponse;
                toAmino(message: _155.QueryParamsResponse): _155.QueryParamsResponseAmino;
                fromAminoMsg(object: _155.QueryParamsResponseAminoMsg): _155.QueryParamsResponse;
                toAminoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _155.QueryParamsResponseProtoMsg): _155.QueryParamsResponse;
                toProto(message: _155.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _155.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySigningInfoRequest;
                fromPartial(object: Partial<_155.QuerySigningInfoRequest>): _155.QuerySigningInfoRequest;
                fromAmino(object: _155.QuerySigningInfoRequestAmino): _155.QuerySigningInfoRequest;
                toAmino(message: _155.QuerySigningInfoRequest): _155.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _155.QuerySigningInfoRequestAminoMsg): _155.QuerySigningInfoRequest;
                toAminoMsg(message: _155.QuerySigningInfoRequest): _155.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _155.QuerySigningInfoRequestProtoMsg): _155.QuerySigningInfoRequest;
                toProto(message: _155.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _155.QuerySigningInfoRequest): _155.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _155.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySigningInfoResponse;
                fromPartial(object: Partial<_155.QuerySigningInfoResponse>): _155.QuerySigningInfoResponse;
                fromAmino(object: _155.QuerySigningInfoResponseAmino): _155.QuerySigningInfoResponse;
                toAmino(message: _155.QuerySigningInfoResponse): _155.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _155.QuerySigningInfoResponseAminoMsg): _155.QuerySigningInfoResponse;
                toAminoMsg(message: _155.QuerySigningInfoResponse): _155.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _155.QuerySigningInfoResponseProtoMsg): _155.QuerySigningInfoResponse;
                toProto(message: _155.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _155.QuerySigningInfoResponse): _155.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _155.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySigningInfosRequest;
                fromPartial(object: Partial<_155.QuerySigningInfosRequest>): _155.QuerySigningInfosRequest;
                fromAmino(object: _155.QuerySigningInfosRequestAmino): _155.QuerySigningInfosRequest;
                toAmino(message: _155.QuerySigningInfosRequest): _155.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _155.QuerySigningInfosRequestAminoMsg): _155.QuerySigningInfosRequest;
                toAminoMsg(message: _155.QuerySigningInfosRequest): _155.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _155.QuerySigningInfosRequestProtoMsg): _155.QuerySigningInfosRequest;
                toProto(message: _155.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _155.QuerySigningInfosRequest): _155.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _155.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySigningInfosResponse;
                fromPartial(object: Partial<_155.QuerySigningInfosResponse>): _155.QuerySigningInfosResponse;
                fromAmino(object: _155.QuerySigningInfosResponseAmino): _155.QuerySigningInfosResponse;
                toAmino(message: _155.QuerySigningInfosResponse): _155.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _155.QuerySigningInfosResponseAminoMsg): _155.QuerySigningInfosResponse;
                toAminoMsg(message: _155.QuerySigningInfosResponse): _155.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _155.QuerySigningInfosResponseProtoMsg): _155.QuerySigningInfosResponse;
                toProto(message: _155.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _155.QuerySigningInfosResponse): _155.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _154.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.GenesisState;
                fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
                fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
                toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
                fromAminoMsg(object: _154.GenesisStateAminoMsg): _154.GenesisState;
                toAminoMsg(message: _154.GenesisState): _154.GenesisStateAminoMsg;
                fromProtoMsg(message: _154.GenesisStateProtoMsg): _154.GenesisState;
                toProto(message: _154.GenesisState): Uint8Array;
                toProtoMsg(message: _154.GenesisState): _154.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _154.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SigningInfo;
                fromPartial(object: Partial<_154.SigningInfo>): _154.SigningInfo;
                fromAmino(object: _154.SigningInfoAmino): _154.SigningInfo;
                toAmino(message: _154.SigningInfo): _154.SigningInfoAmino;
                fromAminoMsg(object: _154.SigningInfoAminoMsg): _154.SigningInfo;
                toAminoMsg(message: _154.SigningInfo): _154.SigningInfoAminoMsg;
                fromProtoMsg(message: _154.SigningInfoProtoMsg): _154.SigningInfo;
                toProto(message: _154.SigningInfo): Uint8Array;
                toProtoMsg(message: _154.SigningInfo): _154.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _154.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ValidatorMissedBlocks;
                fromPartial(object: Partial<_154.ValidatorMissedBlocks>): _154.ValidatorMissedBlocks;
                fromAmino(object: _154.ValidatorMissedBlocksAmino): _154.ValidatorMissedBlocks;
                toAmino(message: _154.ValidatorMissedBlocks): _154.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _154.ValidatorMissedBlocksAminoMsg): _154.ValidatorMissedBlocks;
                toAminoMsg(message: _154.ValidatorMissedBlocks): _154.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _154.ValidatorMissedBlocksProtoMsg): _154.ValidatorMissedBlocks;
                toProto(message: _154.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _154.ValidatorMissedBlocks): _154.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _154.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.MissedBlock;
                fromPartial(object: Partial<_154.MissedBlock>): _154.MissedBlock;
                fromAmino(object: _154.MissedBlockAmino): _154.MissedBlock;
                toAmino(message: _154.MissedBlock): _154.MissedBlockAmino;
                fromAminoMsg(object: _154.MissedBlockAminoMsg): _154.MissedBlock;
                toAminoMsg(message: _154.MissedBlock): _154.MissedBlockAminoMsg;
                fromProtoMsg(message: _154.MissedBlockProtoMsg): _154.MissedBlock;
                toProto(message: _154.MissedBlock): Uint8Array;
                toProtoMsg(message: _154.MissedBlock): _154.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _158.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.Module;
                    fromPartial(object: Partial<_158.Module>): _158.Module;
                    fromAmino(object: _158.ModuleAmino): _158.Module;
                    toAmino(message: _158.Module): _158.ModuleAmino;
                    fromAminoMsg(object: _158.ModuleAminoMsg): _158.Module;
                    toAminoMsg(message: _158.Module): _158.ModuleAminoMsg;
                    fromProtoMsg(message: _158.ModuleProtoMsg): _158.Module;
                    toProto(message: _158.Module): Uint8Array;
                    toProtoMsg(message: _158.Module): _158.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _375.MsgClientImpl;
            QueryClientImpl: typeof _358.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _161.QueryValidatorsRequest): Promise<_161.QueryValidatorsResponse>;
                validator(request: _161.QueryValidatorRequest): Promise<_161.QueryValidatorResponse>;
                validatorDelegations(request: _161.QueryValidatorDelegationsRequest): Promise<_161.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _161.QueryValidatorUnbondingDelegationsRequest): Promise<_161.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _161.QueryDelegationRequest): Promise<_161.QueryDelegationResponse>;
                unbondingDelegation(request: _161.QueryUnbondingDelegationRequest): Promise<_161.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _161.QueryDelegatorDelegationsRequest): Promise<_161.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _161.QueryDelegatorUnbondingDelegationsRequest): Promise<_161.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _161.QueryRedelegationsRequest): Promise<_161.QueryRedelegationsResponse>;
                delegatorValidators(request: _161.QueryDelegatorValidatorsRequest): Promise<_161.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _161.QueryDelegatorValidatorRequest): Promise<_161.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _161.QueryHistoricalInfoRequest): Promise<_161.QueryHistoricalInfoResponse>;
                pool(request?: _161.QueryPoolRequest): Promise<_161.QueryPoolResponse>;
                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _336.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _163.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _163.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _163.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _163.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _163.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _163.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _163.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _163.MsgCreateValidator): {
                        typeUrl: string;
                        value: _163.MsgCreateValidator;
                    };
                    editValidator(value: _163.MsgEditValidator): {
                        typeUrl: string;
                        value: _163.MsgEditValidator;
                    };
                    delegate(value: _163.MsgDelegate): {
                        typeUrl: string;
                        value: _163.MsgDelegate;
                    };
                    beginRedelegate(value: _163.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _163.MsgBeginRedelegate;
                    };
                    undelegate(value: _163.MsgUndelegate): {
                        typeUrl: string;
                        value: _163.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _163.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _163.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _163.MsgUpdateParams): {
                        typeUrl: string;
                        value: _163.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _163.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _163.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _163.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _163.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _163.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _163.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _163.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _163.MsgCreateValidator): {
                        typeUrl: string;
                        value: _163.MsgCreateValidator;
                    };
                    editValidator(value: _163.MsgEditValidator): {
                        typeUrl: string;
                        value: _163.MsgEditValidator;
                    };
                    delegate(value: _163.MsgDelegate): {
                        typeUrl: string;
                        value: _163.MsgDelegate;
                    };
                    beginRedelegate(value: _163.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _163.MsgBeginRedelegate;
                    };
                    undelegate(value: _163.MsgUndelegate): {
                        typeUrl: string;
                        value: _163.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _163.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _163.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _163.MsgUpdateParams): {
                        typeUrl: string;
                        value: _163.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _163.MsgCreateValidator) => _163.MsgCreateValidatorAmino;
                    fromAmino: (object: _163.MsgCreateValidatorAmino) => _163.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _163.MsgEditValidator) => _163.MsgEditValidatorAmino;
                    fromAmino: (object: _163.MsgEditValidatorAmino) => _163.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _163.MsgDelegate) => _163.MsgDelegateAmino;
                    fromAmino: (object: _163.MsgDelegateAmino) => _163.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _163.MsgBeginRedelegate) => _163.MsgBeginRedelegateAmino;
                    fromAmino: (object: _163.MsgBeginRedelegateAmino) => _163.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _163.MsgUndelegate) => _163.MsgUndelegateAmino;
                    fromAmino: (object: _163.MsgUndelegateAmino) => _163.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _163.MsgCancelUnbondingDelegation) => _163.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _163.MsgCancelUnbondingDelegationAmino) => _163.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _163.MsgUpdateParams) => _163.MsgUpdateParamsAmino;
                    fromAmino: (object: _163.MsgUpdateParamsAmino) => _163.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _163.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgCreateValidator;
                fromPartial(object: Partial<_163.MsgCreateValidator>): _163.MsgCreateValidator;
                fromAmino(object: _163.MsgCreateValidatorAmino): _163.MsgCreateValidator;
                toAmino(message: _163.MsgCreateValidator): _163.MsgCreateValidatorAmino;
                fromAminoMsg(object: _163.MsgCreateValidatorAminoMsg): _163.MsgCreateValidator;
                toAminoMsg(message: _163.MsgCreateValidator): _163.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _163.MsgCreateValidatorProtoMsg): _163.MsgCreateValidator;
                toProto(message: _163.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _163.MsgCreateValidator): _163.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _163.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_163.MsgCreateValidatorResponse>): _163.MsgCreateValidatorResponse;
                fromAmino(_: _163.MsgCreateValidatorResponseAmino): _163.MsgCreateValidatorResponse;
                toAmino(_: _163.MsgCreateValidatorResponse): _163.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _163.MsgCreateValidatorResponseAminoMsg): _163.MsgCreateValidatorResponse;
                toAminoMsg(message: _163.MsgCreateValidatorResponse): _163.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _163.MsgCreateValidatorResponseProtoMsg): _163.MsgCreateValidatorResponse;
                toProto(message: _163.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _163.MsgCreateValidatorResponse): _163.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _163.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgEditValidator;
                fromPartial(object: Partial<_163.MsgEditValidator>): _163.MsgEditValidator;
                fromAmino(object: _163.MsgEditValidatorAmino): _163.MsgEditValidator;
                toAmino(message: _163.MsgEditValidator): _163.MsgEditValidatorAmino;
                fromAminoMsg(object: _163.MsgEditValidatorAminoMsg): _163.MsgEditValidator;
                toAminoMsg(message: _163.MsgEditValidator): _163.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _163.MsgEditValidatorProtoMsg): _163.MsgEditValidator;
                toProto(message: _163.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _163.MsgEditValidator): _163.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _163.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.MsgEditValidatorResponse;
                fromPartial(_: Partial<_163.MsgEditValidatorResponse>): _163.MsgEditValidatorResponse;
                fromAmino(_: _163.MsgEditValidatorResponseAmino): _163.MsgEditValidatorResponse;
                toAmino(_: _163.MsgEditValidatorResponse): _163.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _163.MsgEditValidatorResponseAminoMsg): _163.MsgEditValidatorResponse;
                toAminoMsg(message: _163.MsgEditValidatorResponse): _163.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _163.MsgEditValidatorResponseProtoMsg): _163.MsgEditValidatorResponse;
                toProto(message: _163.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _163.MsgEditValidatorResponse): _163.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _163.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgDelegate;
                fromPartial(object: Partial<_163.MsgDelegate>): _163.MsgDelegate;
                fromAmino(object: _163.MsgDelegateAmino): _163.MsgDelegate;
                toAmino(message: _163.MsgDelegate): _163.MsgDelegateAmino;
                fromAminoMsg(object: _163.MsgDelegateAminoMsg): _163.MsgDelegate;
                toAminoMsg(message: _163.MsgDelegate): _163.MsgDelegateAminoMsg;
                fromProtoMsg(message: _163.MsgDelegateProtoMsg): _163.MsgDelegate;
                toProto(message: _163.MsgDelegate): Uint8Array;
                toProtoMsg(message: _163.MsgDelegate): _163.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _163.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.MsgDelegateResponse;
                fromPartial(_: Partial<_163.MsgDelegateResponse>): _163.MsgDelegateResponse;
                fromAmino(_: _163.MsgDelegateResponseAmino): _163.MsgDelegateResponse;
                toAmino(_: _163.MsgDelegateResponse): _163.MsgDelegateResponseAmino;
                fromAminoMsg(object: _163.MsgDelegateResponseAminoMsg): _163.MsgDelegateResponse;
                toAminoMsg(message: _163.MsgDelegateResponse): _163.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _163.MsgDelegateResponseProtoMsg): _163.MsgDelegateResponse;
                toProto(message: _163.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _163.MsgDelegateResponse): _163.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _163.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgBeginRedelegate;
                fromPartial(object: Partial<_163.MsgBeginRedelegate>): _163.MsgBeginRedelegate;
                fromAmino(object: _163.MsgBeginRedelegateAmino): _163.MsgBeginRedelegate;
                toAmino(message: _163.MsgBeginRedelegate): _163.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _163.MsgBeginRedelegateAminoMsg): _163.MsgBeginRedelegate;
                toAminoMsg(message: _163.MsgBeginRedelegate): _163.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _163.MsgBeginRedelegateProtoMsg): _163.MsgBeginRedelegate;
                toProto(message: _163.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _163.MsgBeginRedelegate): _163.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _163.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_163.MsgBeginRedelegateResponse>): _163.MsgBeginRedelegateResponse;
                fromAmino(object: _163.MsgBeginRedelegateResponseAmino): _163.MsgBeginRedelegateResponse;
                toAmino(message: _163.MsgBeginRedelegateResponse): _163.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _163.MsgBeginRedelegateResponseAminoMsg): _163.MsgBeginRedelegateResponse;
                toAminoMsg(message: _163.MsgBeginRedelegateResponse): _163.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _163.MsgBeginRedelegateResponseProtoMsg): _163.MsgBeginRedelegateResponse;
                toProto(message: _163.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _163.MsgBeginRedelegateResponse): _163.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _163.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgUndelegate;
                fromPartial(object: Partial<_163.MsgUndelegate>): _163.MsgUndelegate;
                fromAmino(object: _163.MsgUndelegateAmino): _163.MsgUndelegate;
                toAmino(message: _163.MsgUndelegate): _163.MsgUndelegateAmino;
                fromAminoMsg(object: _163.MsgUndelegateAminoMsg): _163.MsgUndelegate;
                toAminoMsg(message: _163.MsgUndelegate): _163.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _163.MsgUndelegateProtoMsg): _163.MsgUndelegate;
                toProto(message: _163.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _163.MsgUndelegate): _163.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _163.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgUndelegateResponse;
                fromPartial(object: Partial<_163.MsgUndelegateResponse>): _163.MsgUndelegateResponse;
                fromAmino(object: _163.MsgUndelegateResponseAmino): _163.MsgUndelegateResponse;
                toAmino(message: _163.MsgUndelegateResponse): _163.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _163.MsgUndelegateResponseAminoMsg): _163.MsgUndelegateResponse;
                toAminoMsg(message: _163.MsgUndelegateResponse): _163.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _163.MsgUndelegateResponseProtoMsg): _163.MsgUndelegateResponse;
                toProto(message: _163.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _163.MsgUndelegateResponse): _163.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _163.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_163.MsgCancelUnbondingDelegation>): _163.MsgCancelUnbondingDelegation;
                fromAmino(object: _163.MsgCancelUnbondingDelegationAmino): _163.MsgCancelUnbondingDelegation;
                toAmino(message: _163.MsgCancelUnbondingDelegation): _163.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _163.MsgCancelUnbondingDelegationAminoMsg): _163.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _163.MsgCancelUnbondingDelegation): _163.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _163.MsgCancelUnbondingDelegationProtoMsg): _163.MsgCancelUnbondingDelegation;
                toProto(message: _163.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _163.MsgCancelUnbondingDelegation): _163.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _163.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_163.MsgCancelUnbondingDelegationResponse>): _163.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _163.MsgCancelUnbondingDelegationResponseAmino): _163.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _163.MsgCancelUnbondingDelegationResponse): _163.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _163.MsgCancelUnbondingDelegationResponseAminoMsg): _163.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _163.MsgCancelUnbondingDelegationResponse): _163.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _163.MsgCancelUnbondingDelegationResponseProtoMsg): _163.MsgCancelUnbondingDelegationResponse;
                toProto(message: _163.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _163.MsgCancelUnbondingDelegationResponse): _163.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _163.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.MsgUpdateParams;
                fromPartial(object: Partial<_163.MsgUpdateParams>): _163.MsgUpdateParams;
                fromAmino(object: _163.MsgUpdateParamsAmino): _163.MsgUpdateParams;
                toAmino(message: _163.MsgUpdateParams): _163.MsgUpdateParamsAmino;
                fromAminoMsg(object: _163.MsgUpdateParamsAminoMsg): _163.MsgUpdateParams;
                toAminoMsg(message: _163.MsgUpdateParams): _163.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _163.MsgUpdateParamsProtoMsg): _163.MsgUpdateParams;
                toProto(message: _163.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _163.MsgUpdateParams): _163.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _163.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_163.MsgUpdateParamsResponse>): _163.MsgUpdateParamsResponse;
                fromAmino(_: _163.MsgUpdateParamsResponseAmino): _163.MsgUpdateParamsResponse;
                toAmino(_: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _163.MsgUpdateParamsResponseAminoMsg): _163.MsgUpdateParamsResponse;
                toAminoMsg(message: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _163.MsgUpdateParamsResponseProtoMsg): _163.MsgUpdateParamsResponse;
                toProto(message: _163.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _163.MsgUpdateParamsResponse): _163.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _162.BondStatus;
            bondStatusToJSON(object: _162.BondStatus): string;
            infractionFromJSON(object: any): _162.Infraction;
            infractionToJSON(object: _162.Infraction): string;
            BondStatus: typeof _162.BondStatus;
            BondStatusSDKType: typeof _162.BondStatus;
            BondStatusAmino: typeof _162.BondStatus;
            Infraction: typeof _162.Infraction;
            InfractionSDKType: typeof _162.Infraction;
            InfractionAmino: typeof _162.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _162.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.HistoricalInfo;
                fromPartial(object: Partial<_162.HistoricalInfo>): _162.HistoricalInfo;
                fromAmino(object: _162.HistoricalInfoAmino): _162.HistoricalInfo;
                toAmino(message: _162.HistoricalInfo): _162.HistoricalInfoAmino;
                fromAminoMsg(object: _162.HistoricalInfoAminoMsg): _162.HistoricalInfo;
                toAminoMsg(message: _162.HistoricalInfo): _162.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _162.HistoricalInfoProtoMsg): _162.HistoricalInfo;
                toProto(message: _162.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _162.HistoricalInfo): _162.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _162.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.CommissionRates;
                fromPartial(object: Partial<_162.CommissionRates>): _162.CommissionRates;
                fromAmino(object: _162.CommissionRatesAmino): _162.CommissionRates;
                toAmino(message: _162.CommissionRates): _162.CommissionRatesAmino;
                fromAminoMsg(object: _162.CommissionRatesAminoMsg): _162.CommissionRates;
                toAminoMsg(message: _162.CommissionRates): _162.CommissionRatesAminoMsg;
                fromProtoMsg(message: _162.CommissionRatesProtoMsg): _162.CommissionRates;
                toProto(message: _162.CommissionRates): Uint8Array;
                toProtoMsg(message: _162.CommissionRates): _162.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _162.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Commission;
                fromPartial(object: Partial<_162.Commission>): _162.Commission;
                fromAmino(object: _162.CommissionAmino): _162.Commission;
                toAmino(message: _162.Commission): _162.CommissionAmino;
                fromAminoMsg(object: _162.CommissionAminoMsg): _162.Commission;
                toAminoMsg(message: _162.Commission): _162.CommissionAminoMsg;
                fromProtoMsg(message: _162.CommissionProtoMsg): _162.Commission;
                toProto(message: _162.Commission): Uint8Array;
                toProtoMsg(message: _162.Commission): _162.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _162.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Description;
                fromPartial(object: Partial<_162.Description>): _162.Description;
                fromAmino(object: _162.DescriptionAmino): _162.Description;
                toAmino(message: _162.Description): _162.DescriptionAmino;
                fromAminoMsg(object: _162.DescriptionAminoMsg): _162.Description;
                toAminoMsg(message: _162.Description): _162.DescriptionAminoMsg;
                fromProtoMsg(message: _162.DescriptionProtoMsg): _162.Description;
                toProto(message: _162.Description): Uint8Array;
                toProtoMsg(message: _162.Description): _162.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _162.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Validator;
                fromPartial(object: Partial<_162.Validator>): _162.Validator;
                fromAmino(object: _162.ValidatorAmino): _162.Validator;
                toAmino(message: _162.Validator): _162.ValidatorAmino;
                fromAminoMsg(object: _162.ValidatorAminoMsg): _162.Validator;
                toAminoMsg(message: _162.Validator): _162.ValidatorAminoMsg;
                fromProtoMsg(message: _162.ValidatorProtoMsg): _162.Validator;
                toProto(message: _162.Validator): Uint8Array;
                toProtoMsg(message: _162.Validator): _162.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _162.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ValAddresses;
                fromPartial(object: Partial<_162.ValAddresses>): _162.ValAddresses;
                fromAmino(object: _162.ValAddressesAmino): _162.ValAddresses;
                toAmino(message: _162.ValAddresses): _162.ValAddressesAmino;
                fromAminoMsg(object: _162.ValAddressesAminoMsg): _162.ValAddresses;
                toAminoMsg(message: _162.ValAddresses): _162.ValAddressesAminoMsg;
                fromProtoMsg(message: _162.ValAddressesProtoMsg): _162.ValAddresses;
                toProto(message: _162.ValAddresses): Uint8Array;
                toProtoMsg(message: _162.ValAddresses): _162.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _162.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.DVPair;
                fromPartial(object: Partial<_162.DVPair>): _162.DVPair;
                fromAmino(object: _162.DVPairAmino): _162.DVPair;
                toAmino(message: _162.DVPair): _162.DVPairAmino;
                fromAminoMsg(object: _162.DVPairAminoMsg): _162.DVPair;
                toAminoMsg(message: _162.DVPair): _162.DVPairAminoMsg;
                fromProtoMsg(message: _162.DVPairProtoMsg): _162.DVPair;
                toProto(message: _162.DVPair): Uint8Array;
                toProtoMsg(message: _162.DVPair): _162.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _162.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.DVPairs;
                fromPartial(object: Partial<_162.DVPairs>): _162.DVPairs;
                fromAmino(object: _162.DVPairsAmino): _162.DVPairs;
                toAmino(message: _162.DVPairs): _162.DVPairsAmino;
                fromAminoMsg(object: _162.DVPairsAminoMsg): _162.DVPairs;
                toAminoMsg(message: _162.DVPairs): _162.DVPairsAminoMsg;
                fromProtoMsg(message: _162.DVPairsProtoMsg): _162.DVPairs;
                toProto(message: _162.DVPairs): Uint8Array;
                toProtoMsg(message: _162.DVPairs): _162.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _162.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.DVVTriplet;
                fromPartial(object: Partial<_162.DVVTriplet>): _162.DVVTriplet;
                fromAmino(object: _162.DVVTripletAmino): _162.DVVTriplet;
                toAmino(message: _162.DVVTriplet): _162.DVVTripletAmino;
                fromAminoMsg(object: _162.DVVTripletAminoMsg): _162.DVVTriplet;
                toAminoMsg(message: _162.DVVTriplet): _162.DVVTripletAminoMsg;
                fromProtoMsg(message: _162.DVVTripletProtoMsg): _162.DVVTriplet;
                toProto(message: _162.DVVTriplet): Uint8Array;
                toProtoMsg(message: _162.DVVTriplet): _162.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _162.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.DVVTriplets;
                fromPartial(object: Partial<_162.DVVTriplets>): _162.DVVTriplets;
                fromAmino(object: _162.DVVTripletsAmino): _162.DVVTriplets;
                toAmino(message: _162.DVVTriplets): _162.DVVTripletsAmino;
                fromAminoMsg(object: _162.DVVTripletsAminoMsg): _162.DVVTriplets;
                toAminoMsg(message: _162.DVVTriplets): _162.DVVTripletsAminoMsg;
                fromProtoMsg(message: _162.DVVTripletsProtoMsg): _162.DVVTriplets;
                toProto(message: _162.DVVTriplets): Uint8Array;
                toProtoMsg(message: _162.DVVTriplets): _162.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _162.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Delegation;
                fromPartial(object: Partial<_162.Delegation>): _162.Delegation;
                fromAmino(object: _162.DelegationAmino): _162.Delegation;
                toAmino(message: _162.Delegation): _162.DelegationAmino;
                fromAminoMsg(object: _162.DelegationAminoMsg): _162.Delegation;
                toAminoMsg(message: _162.Delegation): _162.DelegationAminoMsg;
                fromProtoMsg(message: _162.DelegationProtoMsg): _162.Delegation;
                toProto(message: _162.Delegation): Uint8Array;
                toProtoMsg(message: _162.Delegation): _162.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _162.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.UnbondingDelegation;
                fromPartial(object: Partial<_162.UnbondingDelegation>): _162.UnbondingDelegation;
                fromAmino(object: _162.UnbondingDelegationAmino): _162.UnbondingDelegation;
                toAmino(message: _162.UnbondingDelegation): _162.UnbondingDelegationAmino;
                fromAminoMsg(object: _162.UnbondingDelegationAminoMsg): _162.UnbondingDelegation;
                toAminoMsg(message: _162.UnbondingDelegation): _162.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _162.UnbondingDelegationProtoMsg): _162.UnbondingDelegation;
                toProto(message: _162.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _162.UnbondingDelegation): _162.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _162.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.UnbondingDelegationEntry;
                fromPartial(object: Partial<_162.UnbondingDelegationEntry>): _162.UnbondingDelegationEntry;
                fromAmino(object: _162.UnbondingDelegationEntryAmino): _162.UnbondingDelegationEntry;
                toAmino(message: _162.UnbondingDelegationEntry): _162.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _162.UnbondingDelegationEntryAminoMsg): _162.UnbondingDelegationEntry;
                toAminoMsg(message: _162.UnbondingDelegationEntry): _162.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _162.UnbondingDelegationEntryProtoMsg): _162.UnbondingDelegationEntry;
                toProto(message: _162.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _162.UnbondingDelegationEntry): _162.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _162.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.RedelegationEntry;
                fromPartial(object: Partial<_162.RedelegationEntry>): _162.RedelegationEntry;
                fromAmino(object: _162.RedelegationEntryAmino): _162.RedelegationEntry;
                toAmino(message: _162.RedelegationEntry): _162.RedelegationEntryAmino;
                fromAminoMsg(object: _162.RedelegationEntryAminoMsg): _162.RedelegationEntry;
                toAminoMsg(message: _162.RedelegationEntry): _162.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _162.RedelegationEntryProtoMsg): _162.RedelegationEntry;
                toProto(message: _162.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _162.RedelegationEntry): _162.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _162.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Redelegation;
                fromPartial(object: Partial<_162.Redelegation>): _162.Redelegation;
                fromAmino(object: _162.RedelegationAmino): _162.Redelegation;
                toAmino(message: _162.Redelegation): _162.RedelegationAmino;
                fromAminoMsg(object: _162.RedelegationAminoMsg): _162.Redelegation;
                toAminoMsg(message: _162.Redelegation): _162.RedelegationAminoMsg;
                fromProtoMsg(message: _162.RedelegationProtoMsg): _162.Redelegation;
                toProto(message: _162.Redelegation): Uint8Array;
                toProtoMsg(message: _162.Redelegation): _162.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Params;
                fromPartial(object: Partial<_162.Params>): _162.Params;
                fromAmino(object: _162.ParamsAmino): _162.Params;
                toAmino(message: _162.Params): _162.ParamsAmino;
                fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                toProto(message: _162.Params): Uint8Array;
                toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _162.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.DelegationResponse;
                fromPartial(object: Partial<_162.DelegationResponse>): _162.DelegationResponse;
                fromAmino(object: _162.DelegationResponseAmino): _162.DelegationResponse;
                toAmino(message: _162.DelegationResponse): _162.DelegationResponseAmino;
                fromAminoMsg(object: _162.DelegationResponseAminoMsg): _162.DelegationResponse;
                toAminoMsg(message: _162.DelegationResponse): _162.DelegationResponseAminoMsg;
                fromProtoMsg(message: _162.DelegationResponseProtoMsg): _162.DelegationResponse;
                toProto(message: _162.DelegationResponse): Uint8Array;
                toProtoMsg(message: _162.DelegationResponse): _162.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _162.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.RedelegationEntryResponse;
                fromPartial(object: Partial<_162.RedelegationEntryResponse>): _162.RedelegationEntryResponse;
                fromAmino(object: _162.RedelegationEntryResponseAmino): _162.RedelegationEntryResponse;
                toAmino(message: _162.RedelegationEntryResponse): _162.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _162.RedelegationEntryResponseAminoMsg): _162.RedelegationEntryResponse;
                toAminoMsg(message: _162.RedelegationEntryResponse): _162.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _162.RedelegationEntryResponseProtoMsg): _162.RedelegationEntryResponse;
                toProto(message: _162.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _162.RedelegationEntryResponse): _162.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _162.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.RedelegationResponse;
                fromPartial(object: Partial<_162.RedelegationResponse>): _162.RedelegationResponse;
                fromAmino(object: _162.RedelegationResponseAmino): _162.RedelegationResponse;
                toAmino(message: _162.RedelegationResponse): _162.RedelegationResponseAmino;
                fromAminoMsg(object: _162.RedelegationResponseAminoMsg): _162.RedelegationResponse;
                toAminoMsg(message: _162.RedelegationResponse): _162.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _162.RedelegationResponseProtoMsg): _162.RedelegationResponse;
                toProto(message: _162.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _162.RedelegationResponse): _162.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _162.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.Pool;
                fromPartial(object: Partial<_162.Pool>): _162.Pool;
                fromAmino(object: _162.PoolAmino): _162.Pool;
                toAmino(message: _162.Pool): _162.PoolAmino;
                fromAminoMsg(object: _162.PoolAminoMsg): _162.Pool;
                toAminoMsg(message: _162.Pool): _162.PoolAminoMsg;
                fromProtoMsg(message: _162.PoolProtoMsg): _162.Pool;
                toProto(message: _162.Pool): Uint8Array;
                toProtoMsg(message: _162.Pool): _162.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _162.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ValidatorUpdates;
                fromPartial(object: Partial<_162.ValidatorUpdates>): _162.ValidatorUpdates;
                fromAmino(object: _162.ValidatorUpdatesAmino): _162.ValidatorUpdates;
                toAmino(message: _162.ValidatorUpdates): _162.ValidatorUpdatesAmino;
                fromAminoMsg(object: _162.ValidatorUpdatesAminoMsg): _162.ValidatorUpdates;
                toAminoMsg(message: _162.ValidatorUpdates): _162.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _162.ValidatorUpdatesProtoMsg): _162.ValidatorUpdates;
                toProto(message: _162.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _162.ValidatorUpdates): _162.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _161.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorsRequest;
                fromPartial(object: Partial<_161.QueryValidatorsRequest>): _161.QueryValidatorsRequest;
                fromAmino(object: _161.QueryValidatorsRequestAmino): _161.QueryValidatorsRequest;
                toAmino(message: _161.QueryValidatorsRequest): _161.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _161.QueryValidatorsRequestAminoMsg): _161.QueryValidatorsRequest;
                toAminoMsg(message: _161.QueryValidatorsRequest): _161.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorsRequestProtoMsg): _161.QueryValidatorsRequest;
                toProto(message: _161.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorsRequest): _161.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _161.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorsResponse;
                fromPartial(object: Partial<_161.QueryValidatorsResponse>): _161.QueryValidatorsResponse;
                fromAmino(object: _161.QueryValidatorsResponseAmino): _161.QueryValidatorsResponse;
                toAmino(message: _161.QueryValidatorsResponse): _161.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _161.QueryValidatorsResponseAminoMsg): _161.QueryValidatorsResponse;
                toAminoMsg(message: _161.QueryValidatorsResponse): _161.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorsResponseProtoMsg): _161.QueryValidatorsResponse;
                toProto(message: _161.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorsResponse): _161.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _161.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorRequest;
                fromPartial(object: Partial<_161.QueryValidatorRequest>): _161.QueryValidatorRequest;
                fromAmino(object: _161.QueryValidatorRequestAmino): _161.QueryValidatorRequest;
                toAmino(message: _161.QueryValidatorRequest): _161.QueryValidatorRequestAmino;
                fromAminoMsg(object: _161.QueryValidatorRequestAminoMsg): _161.QueryValidatorRequest;
                toAminoMsg(message: _161.QueryValidatorRequest): _161.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorRequestProtoMsg): _161.QueryValidatorRequest;
                toProto(message: _161.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorRequest): _161.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _161.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorResponse;
                fromPartial(object: Partial<_161.QueryValidatorResponse>): _161.QueryValidatorResponse;
                fromAmino(object: _161.QueryValidatorResponseAmino): _161.QueryValidatorResponse;
                toAmino(message: _161.QueryValidatorResponse): _161.QueryValidatorResponseAmino;
                fromAminoMsg(object: _161.QueryValidatorResponseAminoMsg): _161.QueryValidatorResponse;
                toAminoMsg(message: _161.QueryValidatorResponse): _161.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorResponseProtoMsg): _161.QueryValidatorResponse;
                toProto(message: _161.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorResponse): _161.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _161.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_161.QueryValidatorDelegationsRequest>): _161.QueryValidatorDelegationsRequest;
                fromAmino(object: _161.QueryValidatorDelegationsRequestAmino): _161.QueryValidatorDelegationsRequest;
                toAmino(message: _161.QueryValidatorDelegationsRequest): _161.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _161.QueryValidatorDelegationsRequestAminoMsg): _161.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _161.QueryValidatorDelegationsRequest): _161.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorDelegationsRequestProtoMsg): _161.QueryValidatorDelegationsRequest;
                toProto(message: _161.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorDelegationsRequest): _161.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _161.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_161.QueryValidatorDelegationsResponse>): _161.QueryValidatorDelegationsResponse;
                fromAmino(object: _161.QueryValidatorDelegationsResponseAmino): _161.QueryValidatorDelegationsResponse;
                toAmino(message: _161.QueryValidatorDelegationsResponse): _161.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _161.QueryValidatorDelegationsResponseAminoMsg): _161.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _161.QueryValidatorDelegationsResponse): _161.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorDelegationsResponseProtoMsg): _161.QueryValidatorDelegationsResponse;
                toProto(message: _161.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorDelegationsResponse): _161.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _161.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_161.QueryValidatorUnbondingDelegationsRequest>): _161.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _161.QueryValidatorUnbondingDelegationsRequestAmino): _161.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _161.QueryValidatorUnbondingDelegationsRequest): _161.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _161.QueryValidatorUnbondingDelegationsRequestAminoMsg): _161.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _161.QueryValidatorUnbondingDelegationsRequest): _161.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorUnbondingDelegationsRequestProtoMsg): _161.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _161.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorUnbondingDelegationsRequest): _161.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _161.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_161.QueryValidatorUnbondingDelegationsResponse>): _161.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _161.QueryValidatorUnbondingDelegationsResponseAmino): _161.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _161.QueryValidatorUnbondingDelegationsResponse): _161.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _161.QueryValidatorUnbondingDelegationsResponseAminoMsg): _161.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _161.QueryValidatorUnbondingDelegationsResponse): _161.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryValidatorUnbondingDelegationsResponseProtoMsg): _161.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _161.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryValidatorUnbondingDelegationsResponse): _161.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _161.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegationRequest;
                fromPartial(object: Partial<_161.QueryDelegationRequest>): _161.QueryDelegationRequest;
                fromAmino(object: _161.QueryDelegationRequestAmino): _161.QueryDelegationRequest;
                toAmino(message: _161.QueryDelegationRequest): _161.QueryDelegationRequestAmino;
                fromAminoMsg(object: _161.QueryDelegationRequestAminoMsg): _161.QueryDelegationRequest;
                toAminoMsg(message: _161.QueryDelegationRequest): _161.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDelegationRequestProtoMsg): _161.QueryDelegationRequest;
                toProto(message: _161.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDelegationRequest): _161.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _161.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegationResponse;
                fromPartial(object: Partial<_161.QueryDelegationResponse>): _161.QueryDelegationResponse;
                fromAmino(object: _161.QueryDelegationResponseAmino): _161.QueryDelegationResponse;
                toAmino(message: _161.QueryDelegationResponse): _161.QueryDelegationResponseAmino;
                fromAminoMsg(object: _161.QueryDelegationResponseAminoMsg): _161.QueryDelegationResponse;
                toAminoMsg(message: _161.QueryDelegationResponse): _161.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDelegationResponseProtoMsg): _161.QueryDelegationResponse;
                toProto(message: _161.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDelegationResponse): _161.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _161.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_161.QueryUnbondingDelegationRequest>): _161.QueryUnbondingDelegationRequest;
                fromAmino(object: _161.QueryUnbondingDelegationRequestAmino): _161.QueryUnbondingDelegationRequest;
                toAmino(message: _161.QueryUnbondingDelegationRequest): _161.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _161.QueryUnbondingDelegationRequestAminoMsg): _161.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _161.QueryUnbondingDelegationRequest): _161.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _161.QueryUnbondingDelegationRequestProtoMsg): _161.QueryUnbondingDelegationRequest;
                toProto(message: _161.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _161.QueryUnbondingDelegationRequest): _161.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _161.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_161.QueryUnbondingDelegationResponse>): _161.QueryUnbondingDelegationResponse;
                fromAmino(object: _161.QueryUnbondingDelegationResponseAmino): _161.QueryUnbondingDelegationResponse;
                toAmino(message: _161.QueryUnbondingDelegationResponse): _161.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _161.QueryUnbondingDelegationResponseAminoMsg): _161.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _161.QueryUnbondingDelegationResponse): _161.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _161.QueryUnbondingDelegationResponseProtoMsg): _161.QueryUnbondingDelegationResponse;
                toProto(message: _161.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _161.QueryUnbondingDelegationResponse): _161.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_161.QueryDelegatorDelegationsRequest>): _161.QueryDelegatorDelegationsRequest;
                fromAmino(object: _161.QueryDelegatorDelegationsRequestAmino): _161.QueryDelegatorDelegationsRequest;
                toAmino(message: _161.QueryDelegatorDelegationsRequest): _161.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _161.QueryDelegatorDelegationsRequestAminoMsg): _161.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _161.QueryDelegatorDelegationsRequest): _161.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorDelegationsRequestProtoMsg): _161.QueryDelegatorDelegationsRequest;
                toProto(message: _161.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorDelegationsRequest): _161.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_161.QueryDelegatorDelegationsResponse>): _161.QueryDelegatorDelegationsResponse;
                fromAmino(object: _161.QueryDelegatorDelegationsResponseAmino): _161.QueryDelegatorDelegationsResponse;
                toAmino(message: _161.QueryDelegatorDelegationsResponse): _161.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _161.QueryDelegatorDelegationsResponseAminoMsg): _161.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _161.QueryDelegatorDelegationsResponse): _161.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorDelegationsResponseProtoMsg): _161.QueryDelegatorDelegationsResponse;
                toProto(message: _161.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorDelegationsResponse): _161.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_161.QueryDelegatorUnbondingDelegationsRequest>): _161.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _161.QueryDelegatorUnbondingDelegationsRequestAmino): _161.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _161.QueryDelegatorUnbondingDelegationsRequest): _161.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _161.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _161.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _161.QueryDelegatorUnbondingDelegationsRequest): _161.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _161.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _161.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorUnbondingDelegationsRequest): _161.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_161.QueryDelegatorUnbondingDelegationsResponse>): _161.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _161.QueryDelegatorUnbondingDelegationsResponseAmino): _161.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _161.QueryDelegatorUnbondingDelegationsResponse): _161.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _161.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _161.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _161.QueryDelegatorUnbondingDelegationsResponse): _161.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _161.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _161.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorUnbondingDelegationsResponse): _161.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _161.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryRedelegationsRequest;
                fromPartial(object: Partial<_161.QueryRedelegationsRequest>): _161.QueryRedelegationsRequest;
                fromAmino(object: _161.QueryRedelegationsRequestAmino): _161.QueryRedelegationsRequest;
                toAmino(message: _161.QueryRedelegationsRequest): _161.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _161.QueryRedelegationsRequestAminoMsg): _161.QueryRedelegationsRequest;
                toAminoMsg(message: _161.QueryRedelegationsRequest): _161.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryRedelegationsRequestProtoMsg): _161.QueryRedelegationsRequest;
                toProto(message: _161.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryRedelegationsRequest): _161.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _161.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryRedelegationsResponse;
                fromPartial(object: Partial<_161.QueryRedelegationsResponse>): _161.QueryRedelegationsResponse;
                fromAmino(object: _161.QueryRedelegationsResponseAmino): _161.QueryRedelegationsResponse;
                toAmino(message: _161.QueryRedelegationsResponse): _161.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _161.QueryRedelegationsResponseAminoMsg): _161.QueryRedelegationsResponse;
                toAminoMsg(message: _161.QueryRedelegationsResponse): _161.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryRedelegationsResponseProtoMsg): _161.QueryRedelegationsResponse;
                toProto(message: _161.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryRedelegationsResponse): _161.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_161.QueryDelegatorValidatorsRequest>): _161.QueryDelegatorValidatorsRequest;
                fromAmino(object: _161.QueryDelegatorValidatorsRequestAmino): _161.QueryDelegatorValidatorsRequest;
                toAmino(message: _161.QueryDelegatorValidatorsRequest): _161.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _161.QueryDelegatorValidatorsRequestAminoMsg): _161.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _161.QueryDelegatorValidatorsRequest): _161.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorValidatorsRequestProtoMsg): _161.QueryDelegatorValidatorsRequest;
                toProto(message: _161.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorValidatorsRequest): _161.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_161.QueryDelegatorValidatorsResponse>): _161.QueryDelegatorValidatorsResponse;
                fromAmino(object: _161.QueryDelegatorValidatorsResponseAmino): _161.QueryDelegatorValidatorsResponse;
                toAmino(message: _161.QueryDelegatorValidatorsResponse): _161.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _161.QueryDelegatorValidatorsResponseAminoMsg): _161.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _161.QueryDelegatorValidatorsResponse): _161.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorValidatorsResponseProtoMsg): _161.QueryDelegatorValidatorsResponse;
                toProto(message: _161.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorValidatorsResponse): _161.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_161.QueryDelegatorValidatorRequest>): _161.QueryDelegatorValidatorRequest;
                fromAmino(object: _161.QueryDelegatorValidatorRequestAmino): _161.QueryDelegatorValidatorRequest;
                toAmino(message: _161.QueryDelegatorValidatorRequest): _161.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _161.QueryDelegatorValidatorRequestAminoMsg): _161.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _161.QueryDelegatorValidatorRequest): _161.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorValidatorRequestProtoMsg): _161.QueryDelegatorValidatorRequest;
                toProto(message: _161.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorValidatorRequest): _161.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _161.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_161.QueryDelegatorValidatorResponse>): _161.QueryDelegatorValidatorResponse;
                fromAmino(object: _161.QueryDelegatorValidatorResponseAmino): _161.QueryDelegatorValidatorResponse;
                toAmino(message: _161.QueryDelegatorValidatorResponse): _161.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _161.QueryDelegatorValidatorResponseAminoMsg): _161.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _161.QueryDelegatorValidatorResponse): _161.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _161.QueryDelegatorValidatorResponseProtoMsg): _161.QueryDelegatorValidatorResponse;
                toProto(message: _161.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _161.QueryDelegatorValidatorResponse): _161.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _161.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_161.QueryHistoricalInfoRequest>): _161.QueryHistoricalInfoRequest;
                fromAmino(object: _161.QueryHistoricalInfoRequestAmino): _161.QueryHistoricalInfoRequest;
                toAmino(message: _161.QueryHistoricalInfoRequest): _161.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _161.QueryHistoricalInfoRequestAminoMsg): _161.QueryHistoricalInfoRequest;
                toAminoMsg(message: _161.QueryHistoricalInfoRequest): _161.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _161.QueryHistoricalInfoRequestProtoMsg): _161.QueryHistoricalInfoRequest;
                toProto(message: _161.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _161.QueryHistoricalInfoRequest): _161.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _161.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_161.QueryHistoricalInfoResponse>): _161.QueryHistoricalInfoResponse;
                fromAmino(object: _161.QueryHistoricalInfoResponseAmino): _161.QueryHistoricalInfoResponse;
                toAmino(message: _161.QueryHistoricalInfoResponse): _161.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _161.QueryHistoricalInfoResponseAminoMsg): _161.QueryHistoricalInfoResponse;
                toAminoMsg(message: _161.QueryHistoricalInfoResponse): _161.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _161.QueryHistoricalInfoResponseProtoMsg): _161.QueryHistoricalInfoResponse;
                toProto(message: _161.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _161.QueryHistoricalInfoResponse): _161.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _161.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _161.QueryPoolRequest;
                fromPartial(_: Partial<_161.QueryPoolRequest>): _161.QueryPoolRequest;
                fromAmino(_: _161.QueryPoolRequestAmino): _161.QueryPoolRequest;
                toAmino(_: _161.QueryPoolRequest): _161.QueryPoolRequestAmino;
                fromAminoMsg(object: _161.QueryPoolRequestAminoMsg): _161.QueryPoolRequest;
                toAminoMsg(message: _161.QueryPoolRequest): _161.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _161.QueryPoolRequestProtoMsg): _161.QueryPoolRequest;
                toProto(message: _161.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _161.QueryPoolRequest): _161.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _161.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryPoolResponse;
                fromPartial(object: Partial<_161.QueryPoolResponse>): _161.QueryPoolResponse;
                fromAmino(object: _161.QueryPoolResponseAmino): _161.QueryPoolResponse;
                toAmino(message: _161.QueryPoolResponse): _161.QueryPoolResponseAmino;
                fromAminoMsg(object: _161.QueryPoolResponseAminoMsg): _161.QueryPoolResponse;
                toAminoMsg(message: _161.QueryPoolResponse): _161.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _161.QueryPoolResponseProtoMsg): _161.QueryPoolResponse;
                toProto(message: _161.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _161.QueryPoolResponse): _161.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _161.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _161.QueryParamsRequest;
                fromPartial(_: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
                fromAmino(_: _161.QueryParamsRequestAmino): _161.QueryParamsRequest;
                toAmino(_: _161.QueryParamsRequest): _161.QueryParamsRequestAmino;
                fromAminoMsg(object: _161.QueryParamsRequestAminoMsg): _161.QueryParamsRequest;
                toAminoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryParamsRequestProtoMsg): _161.QueryParamsRequest;
                toProto(message: _161.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _161.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryParamsResponse;
                fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
                fromAmino(object: _161.QueryParamsResponseAmino): _161.QueryParamsResponse;
                toAmino(message: _161.QueryParamsResponse): _161.QueryParamsResponseAmino;
                fromAminoMsg(object: _161.QueryParamsResponseAminoMsg): _161.QueryParamsResponse;
                toAminoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryParamsResponseProtoMsg): _161.QueryParamsResponse;
                toProto(message: _161.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _160.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.GenesisState;
                fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
                fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
                toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
                fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
                toAminoMsg(message: _160.GenesisState): _160.GenesisStateAminoMsg;
                fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
                toProto(message: _160.GenesisState): Uint8Array;
                toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _160.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.LastValidatorPower;
                fromPartial(object: Partial<_160.LastValidatorPower>): _160.LastValidatorPower;
                fromAmino(object: _160.LastValidatorPowerAmino): _160.LastValidatorPower;
                toAmino(message: _160.LastValidatorPower): _160.LastValidatorPowerAmino;
                fromAminoMsg(object: _160.LastValidatorPowerAminoMsg): _160.LastValidatorPower;
                toAminoMsg(message: _160.LastValidatorPower): _160.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _160.LastValidatorPowerProtoMsg): _160.LastValidatorPower;
                toProto(message: _160.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _160.LastValidatorPower): _160.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _159.AuthorizationType;
            authorizationTypeToJSON(object: _159.AuthorizationType): string;
            AuthorizationType: typeof _159.AuthorizationType;
            AuthorizationTypeSDKType: typeof _159.AuthorizationType;
            AuthorizationTypeAmino: typeof _159.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _159.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.StakeAuthorization;
                fromPartial(object: Partial<_159.StakeAuthorization>): _159.StakeAuthorization;
                fromAmino(object: _159.StakeAuthorizationAmino): _159.StakeAuthorization;
                toAmino(message: _159.StakeAuthorization): _159.StakeAuthorizationAmino;
                fromAminoMsg(object: _159.StakeAuthorizationAminoMsg): _159.StakeAuthorization;
                toAminoMsg(message: _159.StakeAuthorization): _159.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _159.StakeAuthorizationProtoMsg): _159.StakeAuthorization;
                toProto(message: _159.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _159.StakeAuthorization): _159.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _159.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.StakeAuthorization_Validators;
                fromPartial(object: Partial<_159.StakeAuthorization_Validators>): _159.StakeAuthorization_Validators;
                fromAmino(object: _159.StakeAuthorization_ValidatorsAmino): _159.StakeAuthorization_Validators;
                toAmino(message: _159.StakeAuthorization_Validators): _159.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _159.StakeAuthorization_ValidatorsAminoMsg): _159.StakeAuthorization_Validators;
                toAminoMsg(message: _159.StakeAuthorization_Validators): _159.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _159.StakeAuthorization_ValidatorsProtoMsg): _159.StakeAuthorization_Validators;
                toProto(message: _159.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _159.StakeAuthorization_Validators): _159.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _164.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.Config;
                    fromPartial(object: Partial<_164.Config>): _164.Config;
                    fromAmino(object: _164.ConfigAmino): _164.Config;
                    toAmino(message: _164.Config): _164.ConfigAmino;
                    fromAminoMsg(object: _164.ConfigAminoMsg): _164.Config;
                    toAminoMsg(message: _164.Config): _164.ConfigAminoMsg;
                    fromProtoMsg(message: _164.ConfigProtoMsg): _164.Config;
                    toProto(message: _164.Config): Uint8Array;
                    toProtoMsg(message: _164.Config): _164.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _165.SignMode;
                signModeToJSON(object: _165.SignMode): string;
                SignMode: typeof _165.SignMode;
                SignModeSDKType: typeof _165.SignMode;
                SignModeAmino: typeof _165.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _165.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.SignatureDescriptors;
                    fromPartial(object: Partial<_165.SignatureDescriptors>): _165.SignatureDescriptors;
                    fromAmino(object: _165.SignatureDescriptorsAmino): _165.SignatureDescriptors;
                    toAmino(message: _165.SignatureDescriptors): _165.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _165.SignatureDescriptorsAminoMsg): _165.SignatureDescriptors;
                    toAminoMsg(message: _165.SignatureDescriptors): _165.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _165.SignatureDescriptorsProtoMsg): _165.SignatureDescriptors;
                    toProto(message: _165.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _165.SignatureDescriptors): _165.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _165.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.SignatureDescriptor;
                    fromPartial(object: Partial<_165.SignatureDescriptor>): _165.SignatureDescriptor;
                    fromAmino(object: _165.SignatureDescriptorAmino): _165.SignatureDescriptor;
                    toAmino(message: _165.SignatureDescriptor): _165.SignatureDescriptorAmino;
                    fromAminoMsg(object: _165.SignatureDescriptorAminoMsg): _165.SignatureDescriptor;
                    toAminoMsg(message: _165.SignatureDescriptor): _165.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _165.SignatureDescriptorProtoMsg): _165.SignatureDescriptor;
                    toProto(message: _165.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _165.SignatureDescriptor): _165.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _165.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_165.SignatureDescriptor_Data>): _165.SignatureDescriptor_Data;
                    fromAmino(object: _165.SignatureDescriptor_DataAmino): _165.SignatureDescriptor_Data;
                    toAmino(message: _165.SignatureDescriptor_Data): _165.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _165.SignatureDescriptor_DataAminoMsg): _165.SignatureDescriptor_Data;
                    toAminoMsg(message: _165.SignatureDescriptor_Data): _165.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _165.SignatureDescriptor_DataProtoMsg): _165.SignatureDescriptor_Data;
                    toProto(message: _165.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _165.SignatureDescriptor_Data): _165.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _165.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_165.SignatureDescriptor_Data_Single>): _165.SignatureDescriptor_Data_Single;
                    fromAmino(object: _165.SignatureDescriptor_Data_SingleAmino): _165.SignatureDescriptor_Data_Single;
                    toAmino(message: _165.SignatureDescriptor_Data_Single): _165.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _165.SignatureDescriptor_Data_SingleAminoMsg): _165.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _165.SignatureDescriptor_Data_Single): _165.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _165.SignatureDescriptor_Data_SingleProtoMsg): _165.SignatureDescriptor_Data_Single;
                    toProto(message: _165.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _165.SignatureDescriptor_Data_Single): _165.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _165.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_165.SignatureDescriptor_Data_Multi>): _165.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _165.SignatureDescriptor_Data_MultiAmino): _165.SignatureDescriptor_Data_Multi;
                    toAmino(message: _165.SignatureDescriptor_Data_Multi): _165.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _165.SignatureDescriptor_Data_MultiAminoMsg): _165.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _165.SignatureDescriptor_Data_Multi): _165.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _165.SignatureDescriptor_Data_MultiProtoMsg): _165.SignatureDescriptor_Data_Multi;
                    toProto(message: _165.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _165.SignatureDescriptor_Data_Multi): _165.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _359.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _166.SimulateRequest): Promise<_166.SimulateResponse>;
                getTx(request: _166.GetTxRequest): Promise<_166.GetTxResponse>;
                broadcastTx(request: _166.BroadcastTxRequest): Promise<_166.BroadcastTxResponse>;
                getTxsEvent(request: _166.GetTxsEventRequest): Promise<_166.GetTxsEventResponse>;
                getBlockWithTxs(request: _166.GetBlockWithTxsRequest): Promise<_166.GetBlockWithTxsResponse>;
                txDecode(request: _166.TxDecodeRequest): Promise<_166.TxDecodeResponse>;
                txEncode(request: _166.TxEncodeRequest): Promise<_166.TxEncodeResponse>;
                txEncodeAmino(request: _166.TxEncodeAminoRequest): Promise<_166.TxEncodeAminoResponse>;
                txDecodeAmino(request: _166.TxDecodeAminoRequest): Promise<_166.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _337.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _167.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.Tx;
                fromPartial(object: Partial<_167.Tx>): _167.Tx;
                fromAmino(object: _167.TxAmino): _167.Tx;
                toAmino(message: _167.Tx): _167.TxAmino;
                fromAminoMsg(object: _167.TxAminoMsg): _167.Tx;
                toAminoMsg(message: _167.Tx): _167.TxAminoMsg;
                fromProtoMsg(message: _167.TxProtoMsg): _167.Tx;
                toProto(message: _167.Tx): Uint8Array;
                toProtoMsg(message: _167.Tx): _167.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _167.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.TxRaw;
                fromPartial(object: Partial<_167.TxRaw>): _167.TxRaw;
                fromAmino(object: _167.TxRawAmino): _167.TxRaw;
                toAmino(message: _167.TxRaw): _167.TxRawAmino;
                fromAminoMsg(object: _167.TxRawAminoMsg): _167.TxRaw;
                toAminoMsg(message: _167.TxRaw): _167.TxRawAminoMsg;
                fromProtoMsg(message: _167.TxRawProtoMsg): _167.TxRaw;
                toProto(message: _167.TxRaw): Uint8Array;
                toProtoMsg(message: _167.TxRaw): _167.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _167.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.SignDoc;
                fromPartial(object: Partial<_167.SignDoc>): _167.SignDoc;
                fromAmino(object: _167.SignDocAmino): _167.SignDoc;
                toAmino(message: _167.SignDoc): _167.SignDocAmino;
                fromAminoMsg(object: _167.SignDocAminoMsg): _167.SignDoc;
                toAminoMsg(message: _167.SignDoc): _167.SignDocAminoMsg;
                fromProtoMsg(message: _167.SignDocProtoMsg): _167.SignDoc;
                toProto(message: _167.SignDoc): Uint8Array;
                toProtoMsg(message: _167.SignDoc): _167.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _167.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.SignDocDirectAux;
                fromPartial(object: Partial<_167.SignDocDirectAux>): _167.SignDocDirectAux;
                fromAmino(object: _167.SignDocDirectAuxAmino): _167.SignDocDirectAux;
                toAmino(message: _167.SignDocDirectAux): _167.SignDocDirectAuxAmino;
                fromAminoMsg(object: _167.SignDocDirectAuxAminoMsg): _167.SignDocDirectAux;
                toAminoMsg(message: _167.SignDocDirectAux): _167.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _167.SignDocDirectAuxProtoMsg): _167.SignDocDirectAux;
                toProto(message: _167.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _167.SignDocDirectAux): _167.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _167.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.TxBody;
                fromPartial(object: Partial<_167.TxBody>): _167.TxBody;
                fromAmino(object: _167.TxBodyAmino): _167.TxBody;
                toAmino(message: _167.TxBody): _167.TxBodyAmino;
                fromAminoMsg(object: _167.TxBodyAminoMsg): _167.TxBody;
                toAminoMsg(message: _167.TxBody): _167.TxBodyAminoMsg;
                fromProtoMsg(message: _167.TxBodyProtoMsg): _167.TxBody;
                toProto(message: _167.TxBody): Uint8Array;
                toProtoMsg(message: _167.TxBody): _167.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _167.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.AuthInfo;
                fromPartial(object: Partial<_167.AuthInfo>): _167.AuthInfo;
                fromAmino(object: _167.AuthInfoAmino): _167.AuthInfo;
                toAmino(message: _167.AuthInfo): _167.AuthInfoAmino;
                fromAminoMsg(object: _167.AuthInfoAminoMsg): _167.AuthInfo;
                toAminoMsg(message: _167.AuthInfo): _167.AuthInfoAminoMsg;
                fromProtoMsg(message: _167.AuthInfoProtoMsg): _167.AuthInfo;
                toProto(message: _167.AuthInfo): Uint8Array;
                toProtoMsg(message: _167.AuthInfo): _167.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _167.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.SignerInfo;
                fromPartial(object: Partial<_167.SignerInfo>): _167.SignerInfo;
                fromAmino(object: _167.SignerInfoAmino): _167.SignerInfo;
                toAmino(message: _167.SignerInfo): _167.SignerInfoAmino;
                fromAminoMsg(object: _167.SignerInfoAminoMsg): _167.SignerInfo;
                toAminoMsg(message: _167.SignerInfo): _167.SignerInfoAminoMsg;
                fromProtoMsg(message: _167.SignerInfoProtoMsg): _167.SignerInfo;
                toProto(message: _167.SignerInfo): Uint8Array;
                toProtoMsg(message: _167.SignerInfo): _167.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _167.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ModeInfo;
                fromPartial(object: Partial<_167.ModeInfo>): _167.ModeInfo;
                fromAmino(object: _167.ModeInfoAmino): _167.ModeInfo;
                toAmino(message: _167.ModeInfo): _167.ModeInfoAmino;
                fromAminoMsg(object: _167.ModeInfoAminoMsg): _167.ModeInfo;
                toAminoMsg(message: _167.ModeInfo): _167.ModeInfoAminoMsg;
                fromProtoMsg(message: _167.ModeInfoProtoMsg): _167.ModeInfo;
                toProto(message: _167.ModeInfo): Uint8Array;
                toProtoMsg(message: _167.ModeInfo): _167.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _167.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ModeInfo_Single;
                fromPartial(object: Partial<_167.ModeInfo_Single>): _167.ModeInfo_Single;
                fromAmino(object: _167.ModeInfo_SingleAmino): _167.ModeInfo_Single;
                toAmino(message: _167.ModeInfo_Single): _167.ModeInfo_SingleAmino;
                fromAminoMsg(object: _167.ModeInfo_SingleAminoMsg): _167.ModeInfo_Single;
                toAminoMsg(message: _167.ModeInfo_Single): _167.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _167.ModeInfo_SingleProtoMsg): _167.ModeInfo_Single;
                toProto(message: _167.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _167.ModeInfo_Single): _167.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _167.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ModeInfo_Multi;
                fromPartial(object: Partial<_167.ModeInfo_Multi>): _167.ModeInfo_Multi;
                fromAmino(object: _167.ModeInfo_MultiAmino): _167.ModeInfo_Multi;
                toAmino(message: _167.ModeInfo_Multi): _167.ModeInfo_MultiAmino;
                fromAminoMsg(object: _167.ModeInfo_MultiAminoMsg): _167.ModeInfo_Multi;
                toAminoMsg(message: _167.ModeInfo_Multi): _167.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _167.ModeInfo_MultiProtoMsg): _167.ModeInfo_Multi;
                toProto(message: _167.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _167.ModeInfo_Multi): _167.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _167.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.Fee;
                fromPartial(object: Partial<_167.Fee>): _167.Fee;
                fromAmino(object: _167.FeeAmino): _167.Fee;
                toAmino(message: _167.Fee): _167.FeeAmino;
                fromAminoMsg(object: _167.FeeAminoMsg): _167.Fee;
                toAminoMsg(message: _167.Fee): _167.FeeAminoMsg;
                fromProtoMsg(message: _167.FeeProtoMsg): _167.Fee;
                toProto(message: _167.Fee): Uint8Array;
                toProtoMsg(message: _167.Fee): _167.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _167.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.Tip;
                fromPartial(object: Partial<_167.Tip>): _167.Tip;
                fromAmino(object: _167.TipAmino): _167.Tip;
                toAmino(message: _167.Tip): _167.TipAmino;
                fromAminoMsg(object: _167.TipAminoMsg): _167.Tip;
                toAminoMsg(message: _167.Tip): _167.TipAminoMsg;
                fromProtoMsg(message: _167.TipProtoMsg): _167.Tip;
                toProto(message: _167.Tip): Uint8Array;
                toProtoMsg(message: _167.Tip): _167.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _167.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.AuxSignerData;
                fromPartial(object: Partial<_167.AuxSignerData>): _167.AuxSignerData;
                fromAmino(object: _167.AuxSignerDataAmino): _167.AuxSignerData;
                toAmino(message: _167.AuxSignerData): _167.AuxSignerDataAmino;
                fromAminoMsg(object: _167.AuxSignerDataAminoMsg): _167.AuxSignerData;
                toAminoMsg(message: _167.AuxSignerData): _167.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _167.AuxSignerDataProtoMsg): _167.AuxSignerData;
                toProto(message: _167.AuxSignerData): Uint8Array;
                toProtoMsg(message: _167.AuxSignerData): _167.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _166.OrderBy;
            orderByToJSON(object: _166.OrderBy): string;
            broadcastModeFromJSON(object: any): _166.BroadcastMode;
            broadcastModeToJSON(object: _166.BroadcastMode): string;
            OrderBy: typeof _166.OrderBy;
            OrderBySDKType: typeof _166.OrderBy;
            OrderByAmino: typeof _166.OrderBy;
            BroadcastMode: typeof _166.BroadcastMode;
            BroadcastModeSDKType: typeof _166.BroadcastMode;
            BroadcastModeAmino: typeof _166.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _166.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetTxsEventRequest;
                fromPartial(object: Partial<_166.GetTxsEventRequest>): _166.GetTxsEventRequest;
                fromAmino(object: _166.GetTxsEventRequestAmino): _166.GetTxsEventRequest;
                toAmino(message: _166.GetTxsEventRequest): _166.GetTxsEventRequestAmino;
                fromAminoMsg(object: _166.GetTxsEventRequestAminoMsg): _166.GetTxsEventRequest;
                toAminoMsg(message: _166.GetTxsEventRequest): _166.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _166.GetTxsEventRequestProtoMsg): _166.GetTxsEventRequest;
                toProto(message: _166.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _166.GetTxsEventRequest): _166.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _166.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetTxsEventResponse;
                fromPartial(object: Partial<_166.GetTxsEventResponse>): _166.GetTxsEventResponse;
                fromAmino(object: _166.GetTxsEventResponseAmino): _166.GetTxsEventResponse;
                toAmino(message: _166.GetTxsEventResponse): _166.GetTxsEventResponseAmino;
                fromAminoMsg(object: _166.GetTxsEventResponseAminoMsg): _166.GetTxsEventResponse;
                toAminoMsg(message: _166.GetTxsEventResponse): _166.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _166.GetTxsEventResponseProtoMsg): _166.GetTxsEventResponse;
                toProto(message: _166.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _166.GetTxsEventResponse): _166.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _166.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.BroadcastTxRequest;
                fromPartial(object: Partial<_166.BroadcastTxRequest>): _166.BroadcastTxRequest;
                fromAmino(object: _166.BroadcastTxRequestAmino): _166.BroadcastTxRequest;
                toAmino(message: _166.BroadcastTxRequest): _166.BroadcastTxRequestAmino;
                fromAminoMsg(object: _166.BroadcastTxRequestAminoMsg): _166.BroadcastTxRequest;
                toAminoMsg(message: _166.BroadcastTxRequest): _166.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _166.BroadcastTxRequestProtoMsg): _166.BroadcastTxRequest;
                toProto(message: _166.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _166.BroadcastTxRequest): _166.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _166.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.BroadcastTxResponse;
                fromPartial(object: Partial<_166.BroadcastTxResponse>): _166.BroadcastTxResponse;
                fromAmino(object: _166.BroadcastTxResponseAmino): _166.BroadcastTxResponse;
                toAmino(message: _166.BroadcastTxResponse): _166.BroadcastTxResponseAmino;
                fromAminoMsg(object: _166.BroadcastTxResponseAminoMsg): _166.BroadcastTxResponse;
                toAminoMsg(message: _166.BroadcastTxResponse): _166.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _166.BroadcastTxResponseProtoMsg): _166.BroadcastTxResponse;
                toProto(message: _166.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _166.BroadcastTxResponse): _166.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _166.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SimulateRequest;
                fromPartial(object: Partial<_166.SimulateRequest>): _166.SimulateRequest;
                fromAmino(object: _166.SimulateRequestAmino): _166.SimulateRequest;
                toAmino(message: _166.SimulateRequest): _166.SimulateRequestAmino;
                fromAminoMsg(object: _166.SimulateRequestAminoMsg): _166.SimulateRequest;
                toAminoMsg(message: _166.SimulateRequest): _166.SimulateRequestAminoMsg;
                fromProtoMsg(message: _166.SimulateRequestProtoMsg): _166.SimulateRequest;
                toProto(message: _166.SimulateRequest): Uint8Array;
                toProtoMsg(message: _166.SimulateRequest): _166.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _166.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.SimulateResponse;
                fromPartial(object: Partial<_166.SimulateResponse>): _166.SimulateResponse;
                fromAmino(object: _166.SimulateResponseAmino): _166.SimulateResponse;
                toAmino(message: _166.SimulateResponse): _166.SimulateResponseAmino;
                fromAminoMsg(object: _166.SimulateResponseAminoMsg): _166.SimulateResponse;
                toAminoMsg(message: _166.SimulateResponse): _166.SimulateResponseAminoMsg;
                fromProtoMsg(message: _166.SimulateResponseProtoMsg): _166.SimulateResponse;
                toProto(message: _166.SimulateResponse): Uint8Array;
                toProtoMsg(message: _166.SimulateResponse): _166.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _166.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetTxRequest;
                fromPartial(object: Partial<_166.GetTxRequest>): _166.GetTxRequest;
                fromAmino(object: _166.GetTxRequestAmino): _166.GetTxRequest;
                toAmino(message: _166.GetTxRequest): _166.GetTxRequestAmino;
                fromAminoMsg(object: _166.GetTxRequestAminoMsg): _166.GetTxRequest;
                toAminoMsg(message: _166.GetTxRequest): _166.GetTxRequestAminoMsg;
                fromProtoMsg(message: _166.GetTxRequestProtoMsg): _166.GetTxRequest;
                toProto(message: _166.GetTxRequest): Uint8Array;
                toProtoMsg(message: _166.GetTxRequest): _166.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _166.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetTxResponse;
                fromPartial(object: Partial<_166.GetTxResponse>): _166.GetTxResponse;
                fromAmino(object: _166.GetTxResponseAmino): _166.GetTxResponse;
                toAmino(message: _166.GetTxResponse): _166.GetTxResponseAmino;
                fromAminoMsg(object: _166.GetTxResponseAminoMsg): _166.GetTxResponse;
                toAminoMsg(message: _166.GetTxResponse): _166.GetTxResponseAminoMsg;
                fromProtoMsg(message: _166.GetTxResponseProtoMsg): _166.GetTxResponse;
                toProto(message: _166.GetTxResponse): Uint8Array;
                toProtoMsg(message: _166.GetTxResponse): _166.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _166.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_166.GetBlockWithTxsRequest>): _166.GetBlockWithTxsRequest;
                fromAmino(object: _166.GetBlockWithTxsRequestAmino): _166.GetBlockWithTxsRequest;
                toAmino(message: _166.GetBlockWithTxsRequest): _166.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _166.GetBlockWithTxsRequestAminoMsg): _166.GetBlockWithTxsRequest;
                toAminoMsg(message: _166.GetBlockWithTxsRequest): _166.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _166.GetBlockWithTxsRequestProtoMsg): _166.GetBlockWithTxsRequest;
                toProto(message: _166.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _166.GetBlockWithTxsRequest): _166.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _166.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_166.GetBlockWithTxsResponse>): _166.GetBlockWithTxsResponse;
                fromAmino(object: _166.GetBlockWithTxsResponseAmino): _166.GetBlockWithTxsResponse;
                toAmino(message: _166.GetBlockWithTxsResponse): _166.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _166.GetBlockWithTxsResponseAminoMsg): _166.GetBlockWithTxsResponse;
                toAminoMsg(message: _166.GetBlockWithTxsResponse): _166.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _166.GetBlockWithTxsResponseProtoMsg): _166.GetBlockWithTxsResponse;
                toProto(message: _166.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _166.GetBlockWithTxsResponse): _166.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _166.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxDecodeRequest;
                fromPartial(object: Partial<_166.TxDecodeRequest>): _166.TxDecodeRequest;
                fromAmino(object: _166.TxDecodeRequestAmino): _166.TxDecodeRequest;
                toAmino(message: _166.TxDecodeRequest): _166.TxDecodeRequestAmino;
                fromAminoMsg(object: _166.TxDecodeRequestAminoMsg): _166.TxDecodeRequest;
                toAminoMsg(message: _166.TxDecodeRequest): _166.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _166.TxDecodeRequestProtoMsg): _166.TxDecodeRequest;
                toProto(message: _166.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _166.TxDecodeRequest): _166.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _166.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxDecodeResponse;
                fromPartial(object: Partial<_166.TxDecodeResponse>): _166.TxDecodeResponse;
                fromAmino(object: _166.TxDecodeResponseAmino): _166.TxDecodeResponse;
                toAmino(message: _166.TxDecodeResponse): _166.TxDecodeResponseAmino;
                fromAminoMsg(object: _166.TxDecodeResponseAminoMsg): _166.TxDecodeResponse;
                toAminoMsg(message: _166.TxDecodeResponse): _166.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _166.TxDecodeResponseProtoMsg): _166.TxDecodeResponse;
                toProto(message: _166.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _166.TxDecodeResponse): _166.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _166.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxEncodeRequest;
                fromPartial(object: Partial<_166.TxEncodeRequest>): _166.TxEncodeRequest;
                fromAmino(object: _166.TxEncodeRequestAmino): _166.TxEncodeRequest;
                toAmino(message: _166.TxEncodeRequest): _166.TxEncodeRequestAmino;
                fromAminoMsg(object: _166.TxEncodeRequestAminoMsg): _166.TxEncodeRequest;
                toAminoMsg(message: _166.TxEncodeRequest): _166.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _166.TxEncodeRequestProtoMsg): _166.TxEncodeRequest;
                toProto(message: _166.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _166.TxEncodeRequest): _166.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _166.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxEncodeResponse;
                fromPartial(object: Partial<_166.TxEncodeResponse>): _166.TxEncodeResponse;
                fromAmino(object: _166.TxEncodeResponseAmino): _166.TxEncodeResponse;
                toAmino(message: _166.TxEncodeResponse): _166.TxEncodeResponseAmino;
                fromAminoMsg(object: _166.TxEncodeResponseAminoMsg): _166.TxEncodeResponse;
                toAminoMsg(message: _166.TxEncodeResponse): _166.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _166.TxEncodeResponseProtoMsg): _166.TxEncodeResponse;
                toProto(message: _166.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _166.TxEncodeResponse): _166.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _166.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxEncodeAminoRequest;
                fromPartial(object: Partial<_166.TxEncodeAminoRequest>): _166.TxEncodeAminoRequest;
                fromAmino(object: _166.TxEncodeAminoRequestAmino): _166.TxEncodeAminoRequest;
                toAmino(message: _166.TxEncodeAminoRequest): _166.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _166.TxEncodeAminoRequestAminoMsg): _166.TxEncodeAminoRequest;
                toAminoMsg(message: _166.TxEncodeAminoRequest): _166.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _166.TxEncodeAminoRequestProtoMsg): _166.TxEncodeAminoRequest;
                toProto(message: _166.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _166.TxEncodeAminoRequest): _166.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _166.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxEncodeAminoResponse;
                fromPartial(object: Partial<_166.TxEncodeAminoResponse>): _166.TxEncodeAminoResponse;
                fromAmino(object: _166.TxEncodeAminoResponseAmino): _166.TxEncodeAminoResponse;
                toAmino(message: _166.TxEncodeAminoResponse): _166.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _166.TxEncodeAminoResponseAminoMsg): _166.TxEncodeAminoResponse;
                toAminoMsg(message: _166.TxEncodeAminoResponse): _166.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _166.TxEncodeAminoResponseProtoMsg): _166.TxEncodeAminoResponse;
                toProto(message: _166.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _166.TxEncodeAminoResponse): _166.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _166.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxDecodeAminoRequest;
                fromPartial(object: Partial<_166.TxDecodeAminoRequest>): _166.TxDecodeAminoRequest;
                fromAmino(object: _166.TxDecodeAminoRequestAmino): _166.TxDecodeAminoRequest;
                toAmino(message: _166.TxDecodeAminoRequest): _166.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _166.TxDecodeAminoRequestAminoMsg): _166.TxDecodeAminoRequest;
                toAminoMsg(message: _166.TxDecodeAminoRequest): _166.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _166.TxDecodeAminoRequestProtoMsg): _166.TxDecodeAminoRequest;
                toProto(message: _166.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _166.TxDecodeAminoRequest): _166.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _166.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.TxDecodeAminoResponse;
                fromPartial(object: Partial<_166.TxDecodeAminoResponse>): _166.TxDecodeAminoResponse;
                fromAmino(object: _166.TxDecodeAminoResponseAmino): _166.TxDecodeAminoResponse;
                toAmino(message: _166.TxDecodeAminoResponse): _166.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _166.TxDecodeAminoResponseAminoMsg): _166.TxDecodeAminoResponse;
                toAminoMsg(message: _166.TxDecodeAminoResponse): _166.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _166.TxDecodeAminoResponseProtoMsg): _166.TxDecodeAminoResponse;
                toProto(message: _166.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _166.TxDecodeAminoResponse): _166.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _168.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.Module;
                    fromPartial(object: Partial<_168.Module>): _168.Module;
                    fromAmino(object: _168.ModuleAmino): _168.Module;
                    toAmino(message: _168.Module): _168.ModuleAmino;
                    fromAminoMsg(object: _168.ModuleAminoMsg): _168.Module;
                    toAminoMsg(message: _168.Module): _168.ModuleAminoMsg;
                    fromProtoMsg(message: _168.ModuleProtoMsg): _168.Module;
                    toProto(message: _168.Module): Uint8Array;
                    toProtoMsg(message: _168.Module): _168.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _376.MsgClientImpl;
            QueryClientImpl: typeof _360.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _169.QueryCurrentPlanRequest): Promise<_169.QueryCurrentPlanResponse>;
                appliedPlan(request: _169.QueryAppliedPlanRequest): Promise<_169.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _169.QueryUpgradedConsensusStateRequest): Promise<_169.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _169.QueryModuleVersionsRequest): Promise<_169.QueryModuleVersionsResponse>;
                authority(request?: _169.QueryAuthorityRequest): Promise<_169.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _338.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _170.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _170.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _170.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _170.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _170.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _170.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _170.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _170.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _170.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _170.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _170.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _170.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _170.MsgSoftwareUpgrade) => _170.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _170.MsgSoftwareUpgradeAmino) => _170.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _170.MsgCancelUpgrade) => _170.MsgCancelUpgradeAmino;
                    fromAmino: (object: _170.MsgCancelUpgradeAmino) => _170.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _171.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.Plan;
                fromPartial(object: Partial<_171.Plan>): _171.Plan;
                fromAmino(object: _171.PlanAmino): _171.Plan;
                toAmino(message: _171.Plan): _171.PlanAmino;
                fromAminoMsg(object: _171.PlanAminoMsg): _171.Plan;
                toAminoMsg(message: _171.Plan): _171.PlanAminoMsg;
                fromProtoMsg(message: _171.PlanProtoMsg): _171.Plan;
                toProto(message: _171.Plan): Uint8Array;
                toProtoMsg(message: _171.Plan): _171.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _171.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_171.SoftwareUpgradeProposal>): _171.SoftwareUpgradeProposal;
                fromAmino(object: _171.SoftwareUpgradeProposalAmino): _171.SoftwareUpgradeProposal;
                toAmino(message: _171.SoftwareUpgradeProposal): _171.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _171.SoftwareUpgradeProposalAminoMsg): _171.SoftwareUpgradeProposal;
                toAminoMsg(message: _171.SoftwareUpgradeProposal): _171.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _171.SoftwareUpgradeProposalProtoMsg): _171.SoftwareUpgradeProposal;
                toProto(message: _171.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _171.SoftwareUpgradeProposal): _171.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _171.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_171.CancelSoftwareUpgradeProposal>): _171.CancelSoftwareUpgradeProposal;
                fromAmino(object: _171.CancelSoftwareUpgradeProposalAmino): _171.CancelSoftwareUpgradeProposal;
                toAmino(message: _171.CancelSoftwareUpgradeProposal): _171.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _171.CancelSoftwareUpgradeProposalAminoMsg): _171.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _171.CancelSoftwareUpgradeProposal): _171.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _171.CancelSoftwareUpgradeProposalProtoMsg): _171.CancelSoftwareUpgradeProposal;
                toProto(message: _171.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _171.CancelSoftwareUpgradeProposal): _171.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _171.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.ModuleVersion;
                fromPartial(object: Partial<_171.ModuleVersion>): _171.ModuleVersion;
                fromAmino(object: _171.ModuleVersionAmino): _171.ModuleVersion;
                toAmino(message: _171.ModuleVersion): _171.ModuleVersionAmino;
                fromAminoMsg(object: _171.ModuleVersionAminoMsg): _171.ModuleVersion;
                toAminoMsg(message: _171.ModuleVersion): _171.ModuleVersionAminoMsg;
                fromProtoMsg(message: _171.ModuleVersionProtoMsg): _171.ModuleVersion;
                toProto(message: _171.ModuleVersion): Uint8Array;
                toProtoMsg(message: _171.ModuleVersion): _171.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _170.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_170.MsgSoftwareUpgrade>): _170.MsgSoftwareUpgrade;
                fromAmino(object: _170.MsgSoftwareUpgradeAmino): _170.MsgSoftwareUpgrade;
                toAmino(message: _170.MsgSoftwareUpgrade): _170.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _170.MsgSoftwareUpgradeAminoMsg): _170.MsgSoftwareUpgrade;
                toAminoMsg(message: _170.MsgSoftwareUpgrade): _170.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _170.MsgSoftwareUpgradeProtoMsg): _170.MsgSoftwareUpgrade;
                toProto(message: _170.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _170.MsgSoftwareUpgrade): _170.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _170.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _170.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_170.MsgSoftwareUpgradeResponse>): _170.MsgSoftwareUpgradeResponse;
                fromAmino(_: _170.MsgSoftwareUpgradeResponseAmino): _170.MsgSoftwareUpgradeResponse;
                toAmino(_: _170.MsgSoftwareUpgradeResponse): _170.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _170.MsgSoftwareUpgradeResponseAminoMsg): _170.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _170.MsgSoftwareUpgradeResponse): _170.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _170.MsgSoftwareUpgradeResponseProtoMsg): _170.MsgSoftwareUpgradeResponse;
                toProto(message: _170.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _170.MsgSoftwareUpgradeResponse): _170.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _170.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.MsgCancelUpgrade;
                fromPartial(object: Partial<_170.MsgCancelUpgrade>): _170.MsgCancelUpgrade;
                fromAmino(object: _170.MsgCancelUpgradeAmino): _170.MsgCancelUpgrade;
                toAmino(message: _170.MsgCancelUpgrade): _170.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _170.MsgCancelUpgradeAminoMsg): _170.MsgCancelUpgrade;
                toAminoMsg(message: _170.MsgCancelUpgrade): _170.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _170.MsgCancelUpgradeProtoMsg): _170.MsgCancelUpgrade;
                toProto(message: _170.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _170.MsgCancelUpgrade): _170.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _170.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _170.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_170.MsgCancelUpgradeResponse>): _170.MsgCancelUpgradeResponse;
                fromAmino(_: _170.MsgCancelUpgradeResponseAmino): _170.MsgCancelUpgradeResponse;
                toAmino(_: _170.MsgCancelUpgradeResponse): _170.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _170.MsgCancelUpgradeResponseAminoMsg): _170.MsgCancelUpgradeResponse;
                toAminoMsg(message: _170.MsgCancelUpgradeResponse): _170.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _170.MsgCancelUpgradeResponseProtoMsg): _170.MsgCancelUpgradeResponse;
                toProto(message: _170.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _170.MsgCancelUpgradeResponse): _170.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _169.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _169.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_169.QueryCurrentPlanRequest>): _169.QueryCurrentPlanRequest;
                fromAmino(_: _169.QueryCurrentPlanRequestAmino): _169.QueryCurrentPlanRequest;
                toAmino(_: _169.QueryCurrentPlanRequest): _169.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _169.QueryCurrentPlanRequestAminoMsg): _169.QueryCurrentPlanRequest;
                toAminoMsg(message: _169.QueryCurrentPlanRequest): _169.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _169.QueryCurrentPlanRequestProtoMsg): _169.QueryCurrentPlanRequest;
                toProto(message: _169.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _169.QueryCurrentPlanRequest): _169.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _169.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_169.QueryCurrentPlanResponse>): _169.QueryCurrentPlanResponse;
                fromAmino(object: _169.QueryCurrentPlanResponseAmino): _169.QueryCurrentPlanResponse;
                toAmino(message: _169.QueryCurrentPlanResponse): _169.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _169.QueryCurrentPlanResponseAminoMsg): _169.QueryCurrentPlanResponse;
                toAminoMsg(message: _169.QueryCurrentPlanResponse): _169.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _169.QueryCurrentPlanResponseProtoMsg): _169.QueryCurrentPlanResponse;
                toProto(message: _169.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _169.QueryCurrentPlanResponse): _169.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _169.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_169.QueryAppliedPlanRequest>): _169.QueryAppliedPlanRequest;
                fromAmino(object: _169.QueryAppliedPlanRequestAmino): _169.QueryAppliedPlanRequest;
                toAmino(message: _169.QueryAppliedPlanRequest): _169.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _169.QueryAppliedPlanRequestAminoMsg): _169.QueryAppliedPlanRequest;
                toAminoMsg(message: _169.QueryAppliedPlanRequest): _169.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _169.QueryAppliedPlanRequestProtoMsg): _169.QueryAppliedPlanRequest;
                toProto(message: _169.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _169.QueryAppliedPlanRequest): _169.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _169.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_169.QueryAppliedPlanResponse>): _169.QueryAppliedPlanResponse;
                fromAmino(object: _169.QueryAppliedPlanResponseAmino): _169.QueryAppliedPlanResponse;
                toAmino(message: _169.QueryAppliedPlanResponse): _169.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _169.QueryAppliedPlanResponseAminoMsg): _169.QueryAppliedPlanResponse;
                toAminoMsg(message: _169.QueryAppliedPlanResponse): _169.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _169.QueryAppliedPlanResponseProtoMsg): _169.QueryAppliedPlanResponse;
                toProto(message: _169.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _169.QueryAppliedPlanResponse): _169.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _169.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_169.QueryUpgradedConsensusStateRequest>): _169.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _169.QueryUpgradedConsensusStateRequestAmino): _169.QueryUpgradedConsensusStateRequest;
                toAmino(message: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _169.QueryUpgradedConsensusStateRequestAminoMsg): _169.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _169.QueryUpgradedConsensusStateRequestProtoMsg): _169.QueryUpgradedConsensusStateRequest;
                toProto(message: _169.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _169.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_169.QueryUpgradedConsensusStateResponse>): _169.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _169.QueryUpgradedConsensusStateResponseAmino): _169.QueryUpgradedConsensusStateResponse;
                toAmino(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _169.QueryUpgradedConsensusStateResponseAminoMsg): _169.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _169.QueryUpgradedConsensusStateResponseProtoMsg): _169.QueryUpgradedConsensusStateResponse;
                toProto(message: _169.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _169.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_169.QueryModuleVersionsRequest>): _169.QueryModuleVersionsRequest;
                fromAmino(object: _169.QueryModuleVersionsRequestAmino): _169.QueryModuleVersionsRequest;
                toAmino(message: _169.QueryModuleVersionsRequest): _169.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _169.QueryModuleVersionsRequestAminoMsg): _169.QueryModuleVersionsRequest;
                toAminoMsg(message: _169.QueryModuleVersionsRequest): _169.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _169.QueryModuleVersionsRequestProtoMsg): _169.QueryModuleVersionsRequest;
                toProto(message: _169.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _169.QueryModuleVersionsRequest): _169.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _169.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_169.QueryModuleVersionsResponse>): _169.QueryModuleVersionsResponse;
                fromAmino(object: _169.QueryModuleVersionsResponseAmino): _169.QueryModuleVersionsResponse;
                toAmino(message: _169.QueryModuleVersionsResponse): _169.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _169.QueryModuleVersionsResponseAminoMsg): _169.QueryModuleVersionsResponse;
                toAminoMsg(message: _169.QueryModuleVersionsResponse): _169.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _169.QueryModuleVersionsResponseProtoMsg): _169.QueryModuleVersionsResponse;
                toProto(message: _169.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _169.QueryModuleVersionsResponse): _169.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _169.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _169.QueryAuthorityRequest;
                fromPartial(_: Partial<_169.QueryAuthorityRequest>): _169.QueryAuthorityRequest;
                fromAmino(_: _169.QueryAuthorityRequestAmino): _169.QueryAuthorityRequest;
                toAmino(_: _169.QueryAuthorityRequest): _169.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _169.QueryAuthorityRequestAminoMsg): _169.QueryAuthorityRequest;
                toAminoMsg(message: _169.QueryAuthorityRequest): _169.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _169.QueryAuthorityRequestProtoMsg): _169.QueryAuthorityRequest;
                toProto(message: _169.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _169.QueryAuthorityRequest): _169.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _169.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryAuthorityResponse;
                fromPartial(object: Partial<_169.QueryAuthorityResponse>): _169.QueryAuthorityResponse;
                fromAmino(object: _169.QueryAuthorityResponseAmino): _169.QueryAuthorityResponse;
                toAmino(message: _169.QueryAuthorityResponse): _169.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _169.QueryAuthorityResponseAminoMsg): _169.QueryAuthorityResponse;
                toAminoMsg(message: _169.QueryAuthorityResponse): _169.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _169.QueryAuthorityResponseProtoMsg): _169.QueryAuthorityResponse;
                toProto(message: _169.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _169.QueryAuthorityResponse): _169.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _172.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _172.Module;
                    fromPartial(_: Partial<_172.Module>): _172.Module;
                    fromAmino(_: _172.ModuleAmino): _172.Module;
                    toAmino(_: _172.Module): _172.ModuleAmino;
                    fromAminoMsg(object: _172.ModuleAminoMsg): _172.Module;
                    toAminoMsg(message: _172.Module): _172.ModuleAminoMsg;
                    fromProtoMsg(message: _172.ModuleProtoMsg): _172.Module;
                    toProto(message: _172.Module): Uint8Array;
                    toProtoMsg(message: _172.Module): _172.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _377.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _173.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _173.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _173.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _173.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _173.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _173.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _173.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _173.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _173.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _173.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _173.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _173.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _173.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _173.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _173.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _173.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _173.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _173.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _173.MsgCreateVestingAccount) => _173.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _173.MsgCreateVestingAccountAmino) => _173.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _173.MsgCreatePermanentLockedAccount) => _173.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _173.MsgCreatePermanentLockedAccountAmino) => _173.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _173.MsgCreatePeriodicVestingAccount) => _173.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _173.MsgCreatePeriodicVestingAccountAmino) => _173.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _174.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.BaseVestingAccount;
                fromPartial(object: Partial<_174.BaseVestingAccount>): _174.BaseVestingAccount;
                fromAmino(object: _174.BaseVestingAccountAmino): _174.BaseVestingAccount;
                toAmino(message: _174.BaseVestingAccount): _174.BaseVestingAccountAmino;
                fromAminoMsg(object: _174.BaseVestingAccountAminoMsg): _174.BaseVestingAccount;
                toAminoMsg(message: _174.BaseVestingAccount): _174.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _174.BaseVestingAccountProtoMsg): _174.BaseVestingAccount;
                toProto(message: _174.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _174.BaseVestingAccount): _174.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _174.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.ContinuousVestingAccount;
                fromPartial(object: Partial<_174.ContinuousVestingAccount>): _174.ContinuousVestingAccount;
                fromAmino(object: _174.ContinuousVestingAccountAmino): _174.ContinuousVestingAccount;
                toAmino(message: _174.ContinuousVestingAccount): _174.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _174.ContinuousVestingAccountAminoMsg): _174.ContinuousVestingAccount;
                toAminoMsg(message: _174.ContinuousVestingAccount): _174.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _174.ContinuousVestingAccountProtoMsg): _174.ContinuousVestingAccount;
                toProto(message: _174.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _174.ContinuousVestingAccount): _174.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _174.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.DelayedVestingAccount;
                fromPartial(object: Partial<_174.DelayedVestingAccount>): _174.DelayedVestingAccount;
                fromAmino(object: _174.DelayedVestingAccountAmino): _174.DelayedVestingAccount;
                toAmino(message: _174.DelayedVestingAccount): _174.DelayedVestingAccountAmino;
                fromAminoMsg(object: _174.DelayedVestingAccountAminoMsg): _174.DelayedVestingAccount;
                toAminoMsg(message: _174.DelayedVestingAccount): _174.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _174.DelayedVestingAccountProtoMsg): _174.DelayedVestingAccount;
                toProto(message: _174.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _174.DelayedVestingAccount): _174.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _174.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.Period;
                fromPartial(object: Partial<_174.Period>): _174.Period;
                fromAmino(object: _174.PeriodAmino): _174.Period;
                toAmino(message: _174.Period): _174.PeriodAmino;
                fromAminoMsg(object: _174.PeriodAminoMsg): _174.Period;
                toAminoMsg(message: _174.Period): _174.PeriodAminoMsg;
                fromProtoMsg(message: _174.PeriodProtoMsg): _174.Period;
                toProto(message: _174.Period): Uint8Array;
                toProtoMsg(message: _174.Period): _174.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _174.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.PeriodicVestingAccount;
                fromPartial(object: Partial<_174.PeriodicVestingAccount>): _174.PeriodicVestingAccount;
                fromAmino(object: _174.PeriodicVestingAccountAmino): _174.PeriodicVestingAccount;
                toAmino(message: _174.PeriodicVestingAccount): _174.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _174.PeriodicVestingAccountAminoMsg): _174.PeriodicVestingAccount;
                toAminoMsg(message: _174.PeriodicVestingAccount): _174.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _174.PeriodicVestingAccountProtoMsg): _174.PeriodicVestingAccount;
                toProto(message: _174.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _174.PeriodicVestingAccount): _174.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _174.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.PermanentLockedAccount;
                fromPartial(object: Partial<_174.PermanentLockedAccount>): _174.PermanentLockedAccount;
                fromAmino(object: _174.PermanentLockedAccountAmino): _174.PermanentLockedAccount;
                toAmino(message: _174.PermanentLockedAccount): _174.PermanentLockedAccountAmino;
                fromAminoMsg(object: _174.PermanentLockedAccountAminoMsg): _174.PermanentLockedAccount;
                toAminoMsg(message: _174.PermanentLockedAccount): _174.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _174.PermanentLockedAccountProtoMsg): _174.PermanentLockedAccount;
                toProto(message: _174.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _174.PermanentLockedAccount): _174.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _173.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgCreateVestingAccount;
                fromPartial(object: Partial<_173.MsgCreateVestingAccount>): _173.MsgCreateVestingAccount;
                fromAmino(object: _173.MsgCreateVestingAccountAmino): _173.MsgCreateVestingAccount;
                toAmino(message: _173.MsgCreateVestingAccount): _173.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _173.MsgCreateVestingAccountAminoMsg): _173.MsgCreateVestingAccount;
                toAminoMsg(message: _173.MsgCreateVestingAccount): _173.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _173.MsgCreateVestingAccountProtoMsg): _173.MsgCreateVestingAccount;
                toProto(message: _173.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _173.MsgCreateVestingAccount): _173.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _173.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_173.MsgCreateVestingAccountResponse>): _173.MsgCreateVestingAccountResponse;
                fromAmino(_: _173.MsgCreateVestingAccountResponseAmino): _173.MsgCreateVestingAccountResponse;
                toAmino(_: _173.MsgCreateVestingAccountResponse): _173.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _173.MsgCreateVestingAccountResponseAminoMsg): _173.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _173.MsgCreateVestingAccountResponse): _173.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _173.MsgCreateVestingAccountResponseProtoMsg): _173.MsgCreateVestingAccountResponse;
                toProto(message: _173.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _173.MsgCreateVestingAccountResponse): _173.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _173.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_173.MsgCreatePermanentLockedAccount>): _173.MsgCreatePermanentLockedAccount;
                fromAmino(object: _173.MsgCreatePermanentLockedAccountAmino): _173.MsgCreatePermanentLockedAccount;
                toAmino(message: _173.MsgCreatePermanentLockedAccount): _173.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _173.MsgCreatePermanentLockedAccountAminoMsg): _173.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _173.MsgCreatePermanentLockedAccount): _173.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _173.MsgCreatePermanentLockedAccountProtoMsg): _173.MsgCreatePermanentLockedAccount;
                toProto(message: _173.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _173.MsgCreatePermanentLockedAccount): _173.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _173.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_173.MsgCreatePermanentLockedAccountResponse>): _173.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _173.MsgCreatePermanentLockedAccountResponseAmino): _173.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _173.MsgCreatePermanentLockedAccountResponse): _173.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _173.MsgCreatePermanentLockedAccountResponseAminoMsg): _173.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _173.MsgCreatePermanentLockedAccountResponse): _173.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _173.MsgCreatePermanentLockedAccountResponseProtoMsg): _173.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _173.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _173.MsgCreatePermanentLockedAccountResponse): _173.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _173.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_173.MsgCreatePeriodicVestingAccount>): _173.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _173.MsgCreatePeriodicVestingAccountAmino): _173.MsgCreatePeriodicVestingAccount;
                toAmino(message: _173.MsgCreatePeriodicVestingAccount): _173.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _173.MsgCreatePeriodicVestingAccountAminoMsg): _173.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _173.MsgCreatePeriodicVestingAccount): _173.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _173.MsgCreatePeriodicVestingAccountProtoMsg): _173.MsgCreatePeriodicVestingAccount;
                toProto(message: _173.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _173.MsgCreatePeriodicVestingAccount): _173.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _173.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_173.MsgCreatePeriodicVestingAccountResponse>): _173.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _173.MsgCreatePeriodicVestingAccountResponseAmino): _173.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _173.MsgCreatePeriodicVestingAccountResponse): _173.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _173.MsgCreatePeriodicVestingAccountResponseAminoMsg): _173.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _173.MsgCreatePeriodicVestingAccountResponse): _173.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _173.MsgCreatePeriodicVestingAccountResponseProtoMsg): _173.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _173.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _173.MsgCreatePeriodicVestingAccountResponse): _173.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _175.HashOp;
            hashOpToJSON(object: _175.HashOp): string;
            lengthOpFromJSON(object: any): _175.LengthOp;
            lengthOpToJSON(object: _175.LengthOp): string;
            HashOp: typeof _175.HashOp;
            HashOpSDKType: typeof _175.HashOp;
            HashOpAmino: typeof _175.HashOp;
            LengthOp: typeof _175.LengthOp;
            LengthOpSDKType: typeof _175.LengthOp;
            LengthOpAmino: typeof _175.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _175.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ExistenceProof;
                fromPartial(object: Partial<_175.ExistenceProof>): _175.ExistenceProof;
                fromAmino(object: _175.ExistenceProofAmino): _175.ExistenceProof;
                toAmino(message: _175.ExistenceProof): _175.ExistenceProofAmino;
                fromAminoMsg(object: _175.ExistenceProofAminoMsg): _175.ExistenceProof;
                toAminoMsg(message: _175.ExistenceProof): _175.ExistenceProofAminoMsg;
                fromProtoMsg(message: _175.ExistenceProofProtoMsg): _175.ExistenceProof;
                toProto(message: _175.ExistenceProof): Uint8Array;
                toProtoMsg(message: _175.ExistenceProof): _175.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _175.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.NonExistenceProof;
                fromPartial(object: Partial<_175.NonExistenceProof>): _175.NonExistenceProof;
                fromAmino(object: _175.NonExistenceProofAmino): _175.NonExistenceProof;
                toAmino(message: _175.NonExistenceProof): _175.NonExistenceProofAmino;
                fromAminoMsg(object: _175.NonExistenceProofAminoMsg): _175.NonExistenceProof;
                toAminoMsg(message: _175.NonExistenceProof): _175.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _175.NonExistenceProofProtoMsg): _175.NonExistenceProof;
                toProto(message: _175.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _175.NonExistenceProof): _175.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _175.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.CommitmentProof;
                fromPartial(object: Partial<_175.CommitmentProof>): _175.CommitmentProof;
                fromAmino(object: _175.CommitmentProofAmino): _175.CommitmentProof;
                toAmino(message: _175.CommitmentProof): _175.CommitmentProofAmino;
                fromAminoMsg(object: _175.CommitmentProofAminoMsg): _175.CommitmentProof;
                toAminoMsg(message: _175.CommitmentProof): _175.CommitmentProofAminoMsg;
                fromProtoMsg(message: _175.CommitmentProofProtoMsg): _175.CommitmentProof;
                toProto(message: _175.CommitmentProof): Uint8Array;
                toProtoMsg(message: _175.CommitmentProof): _175.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _175.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.LeafOp;
                fromPartial(object: Partial<_175.LeafOp>): _175.LeafOp;
                fromAmino(object: _175.LeafOpAmino): _175.LeafOp;
                toAmino(message: _175.LeafOp): _175.LeafOpAmino;
                fromAminoMsg(object: _175.LeafOpAminoMsg): _175.LeafOp;
                toAminoMsg(message: _175.LeafOp): _175.LeafOpAminoMsg;
                fromProtoMsg(message: _175.LeafOpProtoMsg): _175.LeafOp;
                toProto(message: _175.LeafOp): Uint8Array;
                toProtoMsg(message: _175.LeafOp): _175.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _175.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.InnerOp;
                fromPartial(object: Partial<_175.InnerOp>): _175.InnerOp;
                fromAmino(object: _175.InnerOpAmino): _175.InnerOp;
                toAmino(message: _175.InnerOp): _175.InnerOpAmino;
                fromAminoMsg(object: _175.InnerOpAminoMsg): _175.InnerOp;
                toAminoMsg(message: _175.InnerOp): _175.InnerOpAminoMsg;
                fromProtoMsg(message: _175.InnerOpProtoMsg): _175.InnerOp;
                toProto(message: _175.InnerOp): Uint8Array;
                toProtoMsg(message: _175.InnerOp): _175.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _175.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ProofSpec;
                fromPartial(object: Partial<_175.ProofSpec>): _175.ProofSpec;
                fromAmino(object: _175.ProofSpecAmino): _175.ProofSpec;
                toAmino(message: _175.ProofSpec): _175.ProofSpecAmino;
                fromAminoMsg(object: _175.ProofSpecAminoMsg): _175.ProofSpec;
                toAminoMsg(message: _175.ProofSpec): _175.ProofSpecAminoMsg;
                fromProtoMsg(message: _175.ProofSpecProtoMsg): _175.ProofSpec;
                toProto(message: _175.ProofSpec): Uint8Array;
                toProtoMsg(message: _175.ProofSpec): _175.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _175.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.InnerSpec;
                fromPartial(object: Partial<_175.InnerSpec>): _175.InnerSpec;
                fromAmino(object: _175.InnerSpecAmino): _175.InnerSpec;
                toAmino(message: _175.InnerSpec): _175.InnerSpecAmino;
                fromAminoMsg(object: _175.InnerSpecAminoMsg): _175.InnerSpec;
                toAminoMsg(message: _175.InnerSpec): _175.InnerSpecAminoMsg;
                fromProtoMsg(message: _175.InnerSpecProtoMsg): _175.InnerSpec;
                toProto(message: _175.InnerSpec): Uint8Array;
                toProtoMsg(message: _175.InnerSpec): _175.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _175.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.BatchProof;
                fromPartial(object: Partial<_175.BatchProof>): _175.BatchProof;
                fromAmino(object: _175.BatchProofAmino): _175.BatchProof;
                toAmino(message: _175.BatchProof): _175.BatchProofAmino;
                fromAminoMsg(object: _175.BatchProofAminoMsg): _175.BatchProof;
                toAminoMsg(message: _175.BatchProof): _175.BatchProofAminoMsg;
                fromProtoMsg(message: _175.BatchProofProtoMsg): _175.BatchProof;
                toProto(message: _175.BatchProof): Uint8Array;
                toProtoMsg(message: _175.BatchProof): _175.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _175.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.BatchEntry;
                fromPartial(object: Partial<_175.BatchEntry>): _175.BatchEntry;
                fromAmino(object: _175.BatchEntryAmino): _175.BatchEntry;
                toAmino(message: _175.BatchEntry): _175.BatchEntryAmino;
                fromAminoMsg(object: _175.BatchEntryAminoMsg): _175.BatchEntry;
                toAminoMsg(message: _175.BatchEntry): _175.BatchEntryAminoMsg;
                fromProtoMsg(message: _175.BatchEntryProtoMsg): _175.BatchEntry;
                toProto(message: _175.BatchEntry): Uint8Array;
                toProtoMsg(message: _175.BatchEntry): _175.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _175.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.CompressedBatchProof;
                fromPartial(object: Partial<_175.CompressedBatchProof>): _175.CompressedBatchProof;
                fromAmino(object: _175.CompressedBatchProofAmino): _175.CompressedBatchProof;
                toAmino(message: _175.CompressedBatchProof): _175.CompressedBatchProofAmino;
                fromAminoMsg(object: _175.CompressedBatchProofAminoMsg): _175.CompressedBatchProof;
                toAminoMsg(message: _175.CompressedBatchProof): _175.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _175.CompressedBatchProofProtoMsg): _175.CompressedBatchProof;
                toProto(message: _175.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _175.CompressedBatchProof): _175.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _175.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.CompressedBatchEntry;
                fromPartial(object: Partial<_175.CompressedBatchEntry>): _175.CompressedBatchEntry;
                fromAmino(object: _175.CompressedBatchEntryAmino): _175.CompressedBatchEntry;
                toAmino(message: _175.CompressedBatchEntry): _175.CompressedBatchEntryAmino;
                fromAminoMsg(object: _175.CompressedBatchEntryAminoMsg): _175.CompressedBatchEntry;
                toAminoMsg(message: _175.CompressedBatchEntry): _175.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _175.CompressedBatchEntryProtoMsg): _175.CompressedBatchEntry;
                toProto(message: _175.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _175.CompressedBatchEntry): _175.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _175.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.CompressedExistenceProof;
                fromPartial(object: Partial<_175.CompressedExistenceProof>): _175.CompressedExistenceProof;
                fromAmino(object: _175.CompressedExistenceProofAmino): _175.CompressedExistenceProof;
                toAmino(message: _175.CompressedExistenceProof): _175.CompressedExistenceProofAmino;
                fromAminoMsg(object: _175.CompressedExistenceProofAminoMsg): _175.CompressedExistenceProof;
                toAminoMsg(message: _175.CompressedExistenceProof): _175.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _175.CompressedExistenceProofProtoMsg): _175.CompressedExistenceProof;
                toProto(message: _175.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _175.CompressedExistenceProof): _175.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _175.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.CompressedNonExistenceProof;
                fromPartial(object: Partial<_175.CompressedNonExistenceProof>): _175.CompressedNonExistenceProof;
                fromAmino(object: _175.CompressedNonExistenceProofAmino): _175.CompressedNonExistenceProof;
                toAmino(message: _175.CompressedNonExistenceProof): _175.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _175.CompressedNonExistenceProofAminoMsg): _175.CompressedNonExistenceProof;
                toAminoMsg(message: _175.CompressedNonExistenceProof): _175.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _175.CompressedNonExistenceProofProtoMsg): _175.CompressedNonExistenceProof;
                toProto(message: _175.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _175.CompressedNonExistenceProof): _175.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _361.MsgClientImpl;
                };
                authz: {
                    v1beta1: _362.MsgClientImpl;
                };
                bank: {
                    v1beta1: _363.MsgClientImpl;
                };
                consensus: {
                    v1: _364.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _365.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _366.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _367.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _368.MsgClientImpl;
                };
                gov: {
                    v1: _369.MsgClientImpl;
                    v1beta1: _370.MsgClientImpl;
                };
                group: {
                    v1: _371.MsgClientImpl;
                };
                mint: {
                    v1beta1: _372.MsgClientImpl;
                };
                nft: {
                    v1beta1: _373.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _374.MsgClientImpl;
                };
                staking: {
                    v1beta1: _375.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _376.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _377.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _53.QueryConfigRequest): Promise<_53.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _57.QueryAccountsRequest): Promise<_57.QueryAccountsResponse>;
                        account(request: _57.QueryAccountRequest): Promise<_57.QueryAccountResponse>;
                        accountAddressByID(request: _57.QueryAccountAddressByIDRequest): Promise<_57.QueryAccountAddressByIDResponse>;
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        moduleAccounts(request?: _57.QueryModuleAccountsRequest): Promise<_57.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _57.QueryModuleAccountByNameRequest): Promise<_57.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _57.Bech32PrefixRequest): Promise<_57.Bech32PrefixResponse>;
                        addressBytesToString(request: _57.AddressBytesToStringRequest): Promise<_57.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _57.AddressStringToBytesRequest): Promise<_57.AddressStringToBytesResponse>;
                        accountInfo(request: _57.QueryAccountInfoRequest): Promise<_57.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _63.QueryGrantsRequest): Promise<_63.QueryGrantsResponse>;
                        granterGrants(request: _63.QueryGranterGrantsRequest): Promise<_63.QueryGranterGrantsResponse>;
                        granteeGrants(request: _63.QueryGranteeGrantsRequest): Promise<_63.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _66.AppOptionsRequest): Promise<_66.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                        allBalances(request: _71.QueryAllBalancesRequest): Promise<_71.QueryAllBalancesResponse>;
                        spendableBalances(request: _71.QuerySpendableBalancesRequest): Promise<_71.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _71.QuerySpendableBalanceByDenomRequest): Promise<_71.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _71.QueryTotalSupplyRequest): Promise<_71.QueryTotalSupplyResponse>;
                        supplyOf(request: _71.QuerySupplyOfRequest): Promise<_71.QuerySupplyOfResponse>;
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        denomMetadata(request: _71.QueryDenomMetadataRequest): Promise<_71.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _71.QueryDenomsMetadataRequest): Promise<_71.QueryDenomsMetadataResponse>;
                        denomOwners(request: _71.QueryDenomOwnersRequest): Promise<_71.QueryDenomOwnersResponse>;
                        sendEnabled(request: _71.QuerySendEnabledRequest): Promise<_71.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _75.ConfigRequest): Promise<_75.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _82.GetNodeInfoRequest): Promise<_82.GetNodeInfoResponse>;
                            getSyncing(request?: _82.GetSyncingRequest): Promise<_82.GetSyncingResponse>;
                            getLatestBlock(request?: _82.GetLatestBlockRequest): Promise<_82.GetLatestBlockResponse>;
                            getBlockByHeight(request: _82.GetBlockByHeightRequest): Promise<_82.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _82.GetLatestValidatorSetRequest): Promise<_82.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _82.GetValidatorSetByHeightRequest): Promise<_82.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _82.ABCIQueryRequest): Promise<_82.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        validatorDistributionInfo(request: _103.QueryValidatorDistributionInfoRequest): Promise<_103.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _108.QueryEvidenceRequest): Promise<_108.QueryEvidenceResponse>;
                        allEvidence(request?: _108.QueryAllEvidenceRequest): Promise<_108.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _113.QueryAllowanceRequest): Promise<_113.QueryAllowanceResponse>;
                        allowances(request: _113.QueryAllowancesRequest): Promise<_113.QueryAllowancesResponse>;
                        allowancesByGranter(request: _113.QueryAllowancesByGranterRequest): Promise<_113.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _120.QueryProposalRequest): Promise<_120.QueryProposalResponse>;
                        proposals(request: _120.QueryProposalsRequest): Promise<_120.QueryProposalsResponse>;
                        vote(request: _120.QueryVoteRequest): Promise<_120.QueryVoteResponse>;
                        votes(request: _120.QueryVotesRequest): Promise<_120.QueryVotesResponse>;
                        params(request: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                        deposit(request: _120.QueryDepositRequest): Promise<_120.QueryDepositResponse>;
                        deposits(request: _120.QueryDepositsRequest): Promise<_120.QueryDepositsResponse>;
                        tallyResult(request: _120.QueryTallyResultRequest): Promise<_120.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _124.QueryProposalRequest): Promise<_124.QueryProposalResponse>;
                        proposals(request: _124.QueryProposalsRequest): Promise<_124.QueryProposalsResponse>;
                        vote(request: _124.QueryVoteRequest): Promise<_124.QueryVoteResponse>;
                        votes(request: _124.QueryVotesRequest): Promise<_124.QueryVotesResponse>;
                        params(request: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                        deposit(request: _124.QueryDepositRequest): Promise<_124.QueryDepositResponse>;
                        deposits(request: _124.QueryDepositsRequest): Promise<_124.QueryDepositsResponse>;
                        tallyResult(request: _124.QueryTallyResultRequest): Promise<_124.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _129.QueryGroupInfoRequest): Promise<_129.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _129.QueryGroupPolicyInfoRequest): Promise<_129.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _129.QueryGroupMembersRequest): Promise<_129.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _129.QueryGroupsByAdminRequest): Promise<_129.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _129.QueryGroupPoliciesByGroupRequest): Promise<_129.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _129.QueryGroupPoliciesByAdminRequest): Promise<_129.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _129.QueryProposalRequest): Promise<_129.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _129.QueryProposalsByGroupPolicyRequest): Promise<_129.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _129.QueryVoteByProposalVoterRequest): Promise<_129.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _129.QueryVotesByProposalRequest): Promise<_129.QueryVotesByProposalResponse>;
                        votesByVoter(request: _129.QueryVotesByVoterRequest): Promise<_129.QueryVotesByVoterResponse>;
                        groupsByMember(request: _129.QueryGroupsByMemberRequest): Promise<_129.QueryGroupsByMemberResponse>;
                        tallyResult(request: _129.QueryTallyResultRequest): Promise<_129.QueryTallyResultResponse>;
                        groups(request?: _129.QueryGroupsRequest): Promise<_129.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                        inflation(request?: _135.QueryInflationRequest): Promise<_135.QueryInflationResponse>;
                        annualProvisions(request?: _135.QueryAnnualProvisionsRequest): Promise<_135.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _142.QueryBalanceRequest): Promise<_142.QueryBalanceResponse>;
                        owner(request: _142.QueryOwnerRequest): Promise<_142.QueryOwnerResponse>;
                        supply(request: _142.QuerySupplyRequest): Promise<_142.QuerySupplyResponse>;
                        nFTs(request: _142.QueryNFTsRequest): Promise<_142.QueryNFTsResponse>;
                        nFT(request: _142.QueryNFTRequest): Promise<_142.QueryNFTResponse>;
                        class(request: _142.QueryClassRequest): Promise<_142.QueryClassResponse>;
                        classes(request?: _142.QueryClassesRequest): Promise<_142.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _145.GetRequest): Promise<_145.GetResponse>;
                            list(request: _145.ListRequest): Promise<_145.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                        subspaces(request?: _150.QuerySubspacesRequest): Promise<_150.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                        signingInfo(request: _155.QuerySigningInfoRequest): Promise<_155.QuerySigningInfoResponse>;
                        signingInfos(request?: _155.QuerySigningInfosRequest): Promise<_155.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _161.QueryValidatorsRequest): Promise<_161.QueryValidatorsResponse>;
                        validator(request: _161.QueryValidatorRequest): Promise<_161.QueryValidatorResponse>;
                        validatorDelegations(request: _161.QueryValidatorDelegationsRequest): Promise<_161.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _161.QueryValidatorUnbondingDelegationsRequest): Promise<_161.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _161.QueryDelegationRequest): Promise<_161.QueryDelegationResponse>;
                        unbondingDelegation(request: _161.QueryUnbondingDelegationRequest): Promise<_161.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _161.QueryDelegatorDelegationsRequest): Promise<_161.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _161.QueryDelegatorUnbondingDelegationsRequest): Promise<_161.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _161.QueryRedelegationsRequest): Promise<_161.QueryRedelegationsResponse>;
                        delegatorValidators(request: _161.QueryDelegatorValidatorsRequest): Promise<_161.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _161.QueryDelegatorValidatorRequest): Promise<_161.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _161.QueryHistoricalInfoRequest): Promise<_161.QueryHistoricalInfoResponse>;
                        pool(request?: _161.QueryPoolRequest): Promise<_161.QueryPoolResponse>;
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _166.SimulateRequest): Promise<_166.SimulateResponse>;
                        getTx(request: _166.GetTxRequest): Promise<_166.GetTxResponse>;
                        broadcastTx(request: _166.BroadcastTxRequest): Promise<_166.BroadcastTxResponse>;
                        getTxsEvent(request: _166.GetTxsEventRequest): Promise<_166.GetTxsEventResponse>;
                        getBlockWithTxs(request: _166.GetBlockWithTxsRequest): Promise<_166.GetBlockWithTxsResponse>;
                        txDecode(request: _166.TxDecodeRequest): Promise<_166.TxDecodeResponse>;
                        txEncode(request: _166.TxEncodeRequest): Promise<_166.TxEncodeResponse>;
                        txEncodeAmino(request: _166.TxEncodeAminoRequest): Promise<_166.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _166.TxDecodeAminoRequest): Promise<_166.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _169.QueryCurrentPlanRequest): Promise<_169.QueryCurrentPlanResponse>;
                        appliedPlan(request: _169.QueryAppliedPlanRequest): Promise<_169.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _169.QueryUpgradedConsensusStateRequest): Promise<_169.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _169.QueryModuleVersionsRequest): Promise<_169.QueryModuleVersionsResponse>;
                        authority(request?: _169.QueryAuthorityRequest): Promise<_169.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _320.LCDQueryClient;
                };
                authz: {
                    v1beta1: _321.LCDQueryClient;
                };
                bank: {
                    v1beta1: _322.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _323.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _324.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _325.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _326.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _327.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _328.LCDQueryClient;
                };
                gov: {
                    v1: _329.LCDQueryClient;
                    v1beta1: _330.LCDQueryClient;
                };
                group: {
                    v1: _331.LCDQueryClient;
                };
                mint: {
                    v1beta1: _332.LCDQueryClient;
                };
                nft: {
                    v1beta1: _333.LCDQueryClient;
                };
                params: {
                    v1beta1: _334.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _335.LCDQueryClient;
                };
                staking: {
                    v1beta1: _336.LCDQueryClient;
                };
                tx: {
                    v1beta1: _337.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _338.LCDQueryClient;
                };
            };
        }>;
    };
}
